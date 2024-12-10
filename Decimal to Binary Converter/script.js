const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

/*
For the decimal to binary conversion, you need to divide input by 2 until the quotient, 
or the result of dividing two numbers, is 0. But since
 you don't know how many times you need to divide input by 2, you can use a 
 while loop to run a block of code as long as input is greater than 0 and can be divided.
*/


const checkUserInput = () => {
    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
    ) {
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }

    decimalToBinary(parseInt(numberInput.value));
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