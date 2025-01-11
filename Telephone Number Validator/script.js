const userInput = document.getElementById("user-input");

const checkBtn = document.getElementById("check-btn");

const clearBtn = document.getElementById("clear-btn");

const resultDiv = document.getElementById("results-div");

const phoneRegex = /^(\+?234|0)([789]\d{9})$/;

checkBtn.addEventListener("click", () => {
    const userInput = document.getElementById("phone-number").value;

    if (phoneRegex.test(userInput)) {
        resultDiv.innerHTML = `<p class="success">Valid Phone Number</p>`;
    } else {
        resultDiv.innerHTML = `<p class="error">Invalid Phone Number</p>`;
    }
});