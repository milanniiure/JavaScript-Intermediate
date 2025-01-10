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

Now, let's say we have a number 3549
1. Divide 3549 by 1000, we get 3. So, 3 * 1000 = 3000. Add 3000 to roman. roman = "MMM"
2. Subtract 3000 from 3549, we get 549
3. Divide 549 by 500, we get 1. So, 1 * 500 = 500. Add 500 to roman. roman = "MMMD"
4. Subtract 500 from 549, we get 49
5. Divide 49 by 40, we get 1. So, 1 * 40 = 40. Add 40 to roman. roman = "MMMDXL"
6. Subtract 40 from 49, we get 9
7. Divide 9 by 9, we get 1. So, 1 * 9 = 9. Add 9 to roman. roman = "MMMDXLIX"


Finally, roman = "MMMDXLIX"

*/