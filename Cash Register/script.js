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

purchase.addEventListener("click", function (event) {
    event.preventDefault();

    let cashGiven = Number(cash.value);
    let changeDue = cashGiven - price;

    if (cashGiven < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    } else if (cashGiven === price) {
        document.getElementById("change-due").textContent = "No change due - customer paid with exact cash";
    } else {
        // Determine the change to be given
        let changeArray = [];
        let availableCash = [...cid].reverse(); // Reverse to start from highest value
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

        for (let [name, amount] of availableCash) {
            let value = currencyValues[name];
            let amountToGive = 0;

            while (changeToGive >= value && amount > 0) {
                changeToGive -= value;
                changeToGive = Math.round(changeToGive * 100) / 100; // Fix floating point issue
                amount -= value;
                amountToGive += value;
            }

            if (amountToGive > 0) {
                changeArray.push(`${name}: $${amountToGive.toFixed(2)}`);
            }
        }
    }
});