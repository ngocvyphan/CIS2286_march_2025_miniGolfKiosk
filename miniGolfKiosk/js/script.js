$(document).ready(function () {
    let totalAfterTax = 0.00;

// create function to do the math calculation
    function updateTotals() {
        // get the data
        let adults = parseInt($("#adults").val()) || 0;
        let children = parseInt($("#children").val()) || 0;

        // ensure a qty is selected for above
        if (adults == 0 && children == 0) {
            // they need to select a qty for children or adults
            alert("You must select a quantity for adults or children.");
        } else {

            // calculate costs
            $("#numAdults").val(adults);
            let adultTotal = adults * 4.00;

            $("#numChildren").val(children);
            let childTotal = children * 2.00;

            //Update cost display
            $("#totalAdultsDiv").text(`$${adultTotal.toFixed(2)}`);
            $("#totalChildrenDiv").text(`$${childTotal.toFixed(2)}`);

            // Calculate the net total (before discount and tax)
            let totalBeforeTax = adultTotal + childTotal;

            // get discount radio choice
            let discount = 0;
            let discountString = "None";

            if ($("#caa").is(":checked")) {
                discount = totalBeforeTax * 0.10;
                discountString = `CAA saved $${discount.toFixed(2)}`;
            } else if ($("#mil").is(":checked")) {
                discount = totalBeforeTax * 0.25;
                discountString = `Military saved $${discount.toFixed(2)}`;
            } else if ($("#fun").is(":checked")) {
                discount = totalBeforeTax * 0.50;
                discountString = `Super Fun Club saved $${discount.toFixed(2)}`;
            } else {
                discountString = "None";
            }

            totalBeforeTax -= discount;
            totalAfterTax = totalBeforeTax * 1.1; // Adding 10% tax

            $("#discountString").text(discountString);
            $("#totalBeforeTaxDiv").text(`$${totalBeforeTax.toFixed(2)}`);
            $("#totalAfterTaxDiv").text(`$${totalAfterTax.toFixed(2)}`).hide().fadeIn(1000); // Fade-in effect

        }     // end if no adults or children selected

    } // end update Totals function

//create function to calculate change
    function calculateChange() {
        let amountGiven = parseFloat(prompt("Enter amount client gave you")) || 0;
        if (!isNaN(amountGiven)) {
            let changeDue = amountGiven - totalAfterTax;
            $("#changeDue").text(`$${changeDue.toFixed(2)}`);
            $("#changeOutput").fadeIn();
        } else {
            alert("Please enter a valid amount.");
        }
    }

//create function to reset the form
    function resetForm() {
        window.location = "miniGolfKiosk.html";
    }

    // Attach event listeners using jQuery
    $("#adults, #children").on("change", updateTotals);
    $("input[type=radio]").on("change", updateTotals);
    $("#changeButton").on("click", calculateChange);
    $("#resetButton").on("click", resetForm);


// Trigger updateTotals on page load
    updateTotals();
});