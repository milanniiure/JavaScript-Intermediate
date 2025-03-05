let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

let cash = document.getElementById("cash");
let purchase = document.getElementById("purchase-btn");

purchase.addEventListener("click", function(event) {
    event.preventDefault();

    let cashGiven = Number(cash.value);
    let changeDue = cashGiven - price;
    
    if (cashGiven < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }else if(cashGiven === price) {
        document.getElementById("change-due").textContent = "No change due - customer paid with exact cash";
        return;
    }

    //Calculate total cash in the drawer---->

    let totalCashInDrawer = cid.reduce((sum, curr) => sum + curr[1], 0);
    totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;

    // If the cash drawer doesn't have enough money to provide change
    if (totalCashInDrawer < changeDue) {
        document.getElementById("change-due").textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    //Calculate change using available denominations
    let changeArray = [];
    let availableCash = [...cid].reverse(); // Start from highest value
    let changeToGive = changeDue;

    let currencyValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    
    let remainingCid = JSON.parse(JSON.stringify(cid)); // Clone CID to update later


    for (let [name, amount] of availableCash) {
        let value = currencyValues[name];
        let amountToGive = 0;

        while (changeToGive >= value && amount > 0) {
            changeToGive -= value;
            changeToGive = Math.round(changeToGive * 100) / 100; // Fix floating point issue
            amount -= value;
            amountToGive += value;

            // Update remaining CID
            remainingCid.find(curr => curr[0] === name)[1] -= value;
        }

        if (amountToGive > 0) {
            changeArray.push(`${name}: $${amountToGive.toFixed(2)}`);
        }
    }

    //If exact change cannot be given, return "INSUFFICIENT_FUNDS"
    if (changeToGive > 0) {
        document.getElementById("change-due").textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    //Determine if the cash drawer is now empty (Status: CLOSED)
    let remainingCashInDrawer = remainingCid.reduce((sum, curr) => sum + curr[1], 0);
    remainingCashInDrawer = Math.round(remainingCashInDrawer * 100) / 100;

    //If the total cash left in the drawer is exactly the change due, return "CLOSED"
    if (totalCashInDrawer - changeDue === 0) {
        document.getElementById("change-due").textContent = `Status: CLOSED ${changeArray.join(" ")}`;
    } else {
        document.getElementById("change-due").textContent = `Status: OPEN ${changeArray.join(" ")}`;
    }
});