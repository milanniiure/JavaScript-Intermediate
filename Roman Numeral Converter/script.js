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
            in the while loop append the symbol to roman string,
            and subtract the value from the 'num'

Example:
roman = "";
num = 3549

check if num is greater than or equal to roman value, since 3549 is greater than 1000, we should subtract 1000 from num
num(3549) >=1000
3549-1000 = 2549 // M will be added in roman variable cause we subtracted 1000 now
roman = "M" 
now, num = 2549

again check if, num is greater than or equal to roman value, since 2549 is greater than 1000, we should subtract 1000 from num
num(2549) >=1000 
2549-1000 = 1549 //another M will be added in roman variable cause we subtracted 1000, now
roman = "MM" 
now, num = 1549

again check if, num is greater than or equal to roman value, since 1549 is greater than 1000, we should subtract 1000 from num
num(1549) >=1000
1549-1000 = 549 //another M will be added in roman variable cause we subtracted 1000, now
roman = "MMM"
now, num = 549

again check if, num is greater than or equal to roman value, since 549 is greater than 500, we should subtract 500 from num
we didnot do 549-1000 cause 549 is less than 1000, rule is to subtract if num is greater than value
num(549) >=500
549-500 = 49 //D will be added in roman variable cause we subtracted 500, now
roman = "MMMD"
now, num = 49

again check if, num is greater than roman value, since 49 is smaller 

num(1549) >=1000 (append M to roman) and (subtract 1000 from num which is 1549) now num = 549
num(549) >=500 (append D to roman) and (subtract 500 from num which is 549) now num = 49
num(49) >=50 (append L to roman) and (subtract 50 from num which is 49) now num = 49
num(49) >=40 (append XL to roman) and (subtract 40 from num which is 49) now num = 9
num(9) >=9 (append IX to roman) and (subtract 9 from num which is 9) now num = 0

Finally, roman = "MMMDXLIX"

*/