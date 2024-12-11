


const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

/*
For the decimal to binary conversion, you need to divide input by 2 until the quotient, 
or the result of dividing two numbers, is 0. But since
 you don't know how many times you need to divide input by 2, you can use a 
 while loop to run a block of code as long as input is greater than 0 and can be divided.
*/
const decimalToBinary = (input) => {
    if (input === 0) {
        return "0";
    } else if (input === 1) {
        return "1";
    }
    else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

/*DETAILED METHOD
const decimalToBinary = (input) => {
    
    const inputs = [];
    const quotients = [];
    const remainders = [];

    while (input > 0) {
        const quotient = Math.floor(input / 2);
        const remainder = input % 2;

        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        input = quotient;
    }

    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);

    result.innerText = remainders.reverse().join("");
};
*/

/*RECURSIVE FUNCTION WORKING MECHANISM
const countdown = (number) => {
    console.log(number);

    if (number === 0) {
        return;
    } else {
        countdown(number - 1);
    }
};

countdown(3);
*/
const showAnimation = () => {

};
const inputInt = parseInt(numberInput.value);


const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (
        !numberInput.value ||
        isNaN(inputInt) ||
        inputInt < 0
    ) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }

    if (inputInt === 5) {
        showAnimation();
        return;
    }

    result.textContent = decimalToBinary(inputInt);
    numberInput.value = "";

};

/*
Binary numbers are a base-2 number system. Unlike the base-10 or decimal number system
we use every day that uses 10 digits (0-9) to form numbers, the binary number system only has two digits, 0 and 1.
In computer science, these binary digits are called bits, and are the smallest unit of data computers can process. 
For computers, 0 represents false or "off", and 1 represents true or "on".

In your decimalToBinary function, use the return keyword to return a string of the binary number representation of true.

Note: Binary numbers can be long sequences that start with 0, so they are often represented as strings.
*/

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});