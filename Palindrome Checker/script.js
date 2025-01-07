const textInput = document.getElementById("textn-input");
const checkBtn = document.getElementById("check-btn");

const checkPalindrome = () => {
    const input = textInput.value;

    if (input === "") {
        alert("Please input a value");
        return;
    }
    const normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = normalizedInput.split('').reverse().join('');
    const isPalindrome = normalizedInput === reversedInput;
    const resultMessage = isPalindrome ? "The input is a palindrome." : "The input is not a palindrome.";
    alert(resultMessage);    
}

checkBtn.addEventListener("click", userInput);