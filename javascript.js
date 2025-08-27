/*
Name: Alex Creamer,jdkitson
Date: 03/24/2020
Purpose: JavaScript file that retrieves the user input from orderItem.html and displays it the output div
Modified 04/04/2025 Vy Phan changed and added more CSS
*/
// declare global vars
var $totalAfterTax = 0.00;
$(document).ready(function(){
    $("#adults").change(updateTotals);
})
$(document).ready(function(){
    $("#children").change(updateTotals);
})
$(document).ready(function(){
    $("input[name='discountGroup']").change(updateTotals);
})

// create function to do the math calculation
function updateTotals() {
    // get the data
    // var $adults = document.getElementById("adults").value;
    var $adults = parseInt($("#adults").val());

    // var $children = document.getElementById("children").value;
    var $children = parseInt($("#children").val());

    // ensure a qty is selected for above
    if ($adults == 0 && $children == 0) {
        // they need to select a qty for children or adults
        alert("You must select a quantity for adults or children.");
    } else {

        // calculate costs

        // document.getElementById("numAdults").value = $adults;
        $("#numAdults").val($adults);
        var $adultTotal = $adults * 4.00;

        // document.getElementById("numChildren").value = $children;
        $("#numChildren").val($children);
        var $childTotal = $children * 2.00;

        // document.getElementById("totalAdultsDiv").innerHTML = "$" + $adultTotal.toFixed(2);
        $("#totalAdultsDiv").text("$" + $adultTotal.toFixed(2));
        // document.getElementById("totalChildrenDiv").innerHTML = "$" + $childTotal.toFixed(2);
        $("#totalChildrenDiv").text("$" + $childTotal.toFixed(2));
        var $totalBeforeTax = ($adultTotal + $childTotal);

        // get discount radio choice
        var $deduct = 0;
        var $discountString = "None";
        if ($("#caa").is(":checked")) {
            $deduct = $totalBeforeTax * .10;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "CAA saved $" + $deduct.toFixed(2);
        } else if ($("#mil").is(":checked")) {
            $deduct = $totalBeforeTax * .25;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "Military saved $" + $deduct.toFixed(2);
        } else if ($("#fun").is(":checked")) {
            $deduct = $totalBeforeTax * .50;
            $totalBeforeTax = $totalBeforeTax - $deduct;
            $discountString = "Super Fun Club saved $" + $deduct.toFixed(2);
        }

        // document.getElementById("discountString").innerHTML = $discountString;
        $("#discountString").text($discountString);

        $totalAfterTax = $totalBeforeTax * 1.1;
        // document.getElementById("totalBeforeTaxDiv").innerHTML = "$" + $totalBeforeTax.toFixed(2);
        $("#totalBeforeTaxDiv").text("$" + $totalBeforeTax.toFixed(2));
        // document.getElementById("totalAfterTaxDiv").innerHTML = "$" + $totalAfterTax.toFixed(2);
        $("#totalAfterTaxDiv").text("$" + $totalAfterTax.toFixed(2));
    } // end if no adults or children selected


} // end update Totals function

//create function to calculateChange
$(document).ready(function(){
    $("#changeButton").click(calculateChange);
});
function calculateChange() {
    var $amountGiven = parseFloat(prompt("Enter amount client gave you"));
    var $changeDue = $amountGiven - $totalAfterTax;
    // document.getElementById("changeDue").innerHTML = "$"+$changeDue.toFixed(2);
    $("#changeDue").text("$" + $changeDue.toFixed(2));
    // document.getElementById("changeOutput").style.display = "block";
    $("#changeOutput").show();
}

//create function to reset the form
$(document).ready(function(){
    $("#resetButton").click(resetForm);
})
function resetForm() {
    window.location = "miniGolfKiosk.html";
}

$(function () {
    $("#adults").on("change", function () {
        //.animate( properties [, duration ] [, easing ] [, complete ] )
        // https://api.jquery.com/animate/#animate-properties-duration-easing-complete
        $("#numAdults").animate({
                height: "25px",
                width: "350px"
            }, 500, "linear", function () {
                //The after() method inserts specified content after the selected elements.
                //source: https://www.w3schools.com/jquery/html_after.asp
                $(this).after("<p style='background-color: #74ff9b'>The number of tickets of adults is selected!</p>");
            }
        );
    });
});

$(function () {
    $("#children").on("change", function () {
        //.animate( properties [, duration ] [, easing ] [, complete ] )
        // https://api.jquery.com/animate/#animate-properties-duration-easing-complete
        $("#numChildren").animate({
                height: "25px",
                width: "350px"
            }, 500, "linear", function () {
                //The after() method inserts specified content after the selected elements.
                //source: https://www.w3schools.com/jquery/html_after.asp
                $(this).after("<p style='background-color: #74ff9b'>The number of tickets of children is selected!</p>");
            }
        );
    });
});

$(function () {
    $("input[name='discountGroup").on("change", function () {
        //.animate( properties [, duration ] [, easing ] [, complete ] )
        // https://api.jquery.com/animate/#animate-properties-duration-easing-complete
        $("#discountString").animate({
                height: "25px",
                width: "350px"
            }, 500, "linear", function () {
                //The after() method inserts specified content after the selected elements.
                //source: https://www.w3schools.com/jquery/html_after.asp
                $(this).after("<p style='background-color: #74ff9b'>The discount is applied!</p>");
            }
        );
    });
});