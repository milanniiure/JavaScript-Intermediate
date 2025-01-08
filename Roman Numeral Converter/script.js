const numberInput = document.getElementById("number");

const convertBtn = document.getElementById("convert-btn");

const resultDiv = document.getElementById("output");


const convertedRoman = () => {

    const input = numberInput.value.trim();
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
convertBtn.addEventListener("click", convertedRoman);