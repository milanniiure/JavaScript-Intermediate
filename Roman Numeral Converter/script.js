const numberInput = document.getElementById("number");

const convertBtn = document.getElementById("convert-btn");

const resultDiv = document.getElementById("output");

const romanTable = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];


const convertedRoman = () => {

    const input = isNaN(numberInput.value.trim());
    if (input === "") {
        resultDiv.textContent = "Please enter a valid number";
        return;
    } else if (input <= 0) {
        resultDiv.textContent = "Please enter a number greater than or equal to 1";
    } else if (input >= 4000) {
        resultDiv.textContent = "Please enter a number less than or equal to 3999";
        return;
    } else {

    }
};

function  intoRoman (){
    let roman = "";
}

convertBtn.addEventListener("click", convertedRoman);


/*
LOGIC TO CONVERT INTEGER TO ROMAN NUMERAL

roman : a string variable.. it accumulates roman numeral symbols as the input number is decomposed
num : the input number to be converted to roman numeral

for loop : iterate through [symbol, value] pair in the romanTable array (symbol: represents M, D, C, L, X, V, I)
            and value represents (1000, 500, 100, 50, 10, 5, 1)

while loop: continues to run as long as the 'num' is greater than or equal to the 'value' of current symbol

*/