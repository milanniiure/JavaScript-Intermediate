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
    
    if (cashGiven < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }else if(cashGiven === price) {
        document.getElementById("change-due").textContent = "No change due - customer paid with exact cash";
    }else{
        
    }
});