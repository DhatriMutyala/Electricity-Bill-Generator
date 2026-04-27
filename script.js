function calculateBill() {
    let name = document.getElementById("name").value.trim();
    let units = parseFloat(document.getElementById("units").value);

    if (name === "" || isNaN(units) || units < 0) {
        document.getElementById("result").innerHTML =
            "<span style='color:red;'>Please enter valid details!</span>";
        return;
    }

    let bill = 0;
    let breakdown = "";

    if (units <= 50) {
        bill = units * 1.5;
        breakdown = `0-50 units: ₹${bill.toFixed(2)}`;
    } 
    else if (units <= 150) {
        bill = (50 * 1.5) + ((units - 50) * 2);
        breakdown = `50 units: ₹75<br>
                     Remaining ${units - 50} units × ₹2`;
    } 
    else if (units <= 250) {
        bill = (50 * 1.5) + (100 * 2) + ((units - 150) * 3);
        breakdown = `50 units: ₹75<br>
                     Next 100 units: ₹200<br>
                     Remaining ${units - 150} units × ₹3`;
    } 
    else {
        bill = (50 * 1.5) + (100 * 2) + (100 * 3) + ((units - 250) * 4);
        breakdown = `50 units: ₹75<br>
                     Next 100 units: ₹200<br>
                     Next 100 units: ₹300<br>
                     Remaining ${units - 250} units × ₹4`;
    }

    // Optional: Add 5% surcharge
    let surcharge = bill * 0.05;
    let total = bill + surcharge;

    document.getElementById("result").innerHTML =
        `<h3>Bill Summary</h3>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Units:</strong> ${units}</p>
         <p><strong>Breakdown:</strong><br>${breakdown}</p>
         <p><strong>Base Bill:</strong> ₹${bill.toFixed(2)}</p>
         <p><strong>Surcharge (5%):</strong> ₹${surcharge.toFixed(2)}</p>
         <p class="total"><strong>Total Payable:</strong> ₹${total.toFixed(2)}</p>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("units").value = "";
    document.getElementById("result").innerHTML = "";
}