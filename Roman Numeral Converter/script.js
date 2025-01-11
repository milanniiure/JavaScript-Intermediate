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

    const input = numberInput.value.trim();
    let num = Number(input);
    if (input === "" || isNaN(num)) {
        resultDiv.textContent = "Please enter a valid number";
        return;
    } else if (input <= 0) {
        resultDiv.textContent = "Please enter a number greater than or equal to 1";
    } else if (input >= 4000) {
        resultDiv.textContent = "Please enter a number less than or equal to 3999";
        return;
    } else {
        let roman = "";
        for (const [symbol, value] of romanTable) {
            while (num >= value) {
                roman += symbol;
                num -= value;
            }
        }
        resultDiv.textContent = `Roman Numeral: ${roman}`;
    }
};



const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    convertedRoman();
});


/*
LOGIC TO CONVERT INTEGER TO ROMAN NUMERAL

TABLE OF ROMAN NUMERALS:
1000 = M
900 = CM
500 = D
400 = CD
100 = C
90 = XC
50 = L
40 = XL
10 = X
9 = IX
5 = V
4 = IV
1 = I

Now, let's say we have a number 3549 [Rule:  subtraction after checking  if num >= value in the table]
roman = ""
num = 3549

Symbol: M, value: 1000

3549 >= 1000, 3549 is greater than or equal to 1000, so subtracted 1000 from 3549 
roman = "M"
num = 3549 - 1000 = 2549

2549 >= 1000, so
roman = "MM"
num = 2549 - 1000 = 1549

1549 >= 1000, so
roman = "MMM"
num = 1549 - 1000 = 549

Symbol : CM, value: 900
skip to next symbol cause 549 < 900 [rule: subtract after num greater or equal than value]

Symbol: D, value: 500
549 >= 500, so
roman = "MMMD"
num = 549 - 500 = 49

Symbol: CD, value: 400
skip to next symbol cause 49 < 400

Symbol: C, value: 100
skip to next symbol cause 49 < 100

Symbol: XC, value: 90
skip to next symbol cause 49 < 90

symbol: L, value: 50
skip to next symbol cause 49 < 50

symbol: XL, value: 40
49 >= 40, so
roman = "MMMDXL"
num = 49 - 40 = 9

symbol: X, value: 10
skip to next symbol cause 9 < 10

Symbol: IX, value: 9
9 >= 9, so
roman = "MMMDXLIX"
num = 9 - 9 = 0

num = 0, so we are done
Finally, roman = "MMMDXLIX"

*/