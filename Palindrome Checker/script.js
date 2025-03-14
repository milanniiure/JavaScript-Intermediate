const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = () => {
    const input = textInput.value.trim();

    if (input === "") {
        resultDiv.textContent = "Please input a value";
        return;
    }
    const normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = normalizedInput.split('').reverse().join('');
    const isPalindrome = normalizedInput === reversedInput;
    const resultMessage = isPalindrome ? `${input} is a palindrome` : `${input} is not a palindrome`;
    resultDiv.textContent = resultMessage;  
}

checkBtn.addEventListener("click", checkPalindrome);