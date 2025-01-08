const numberInput = document.getElementById("number");

const convertBtn = document.getElementById("convert-btn");

const resultDiv = document.getElementById("output");


const convertedRoman = () => {
    
    const input = numberInput.value.trim();
    if (input === "") {
        resultDiv.textContent = "Please enter a valid number";
        return;
    }

};
convertBtn.addEventListener("click", convertedRoman);