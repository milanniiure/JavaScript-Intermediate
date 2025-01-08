const numberInput = document.getElementById("number");

const convertBtn = document.getElementById("convert-btn");

const resultDiv = document.getElementById("output");


const convertedRoman = () => {
    const input = textInput.value.trim();
    if (input === "") {
        resultDiv.textContent = "Please enter a valid number";
        return;
    }

};