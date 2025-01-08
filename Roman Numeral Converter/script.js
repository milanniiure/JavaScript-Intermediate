const numberInput = document.getElementById("number");

const convertBtn = document.getElementById("convert-btn");

const resultDiv = document.getElementById("output");

const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
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