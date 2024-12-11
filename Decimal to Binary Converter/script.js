const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const animationData = [
    {
        inputVal: 5,
        addElDelay: 1000,
        msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
        showMsgDelay: 15000,
        removeElDelay: 20000,
    },
    {
        inputVal: 2,
        addElDelay: 1500,
        msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
        showMsgDelay: 10000,
        removeElDelay: 15000,
    },
    {
        inputVal: 1,
        addElDelay: 2000,
        msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
        showMsgDelay: 5000,
        removeElDelay: 10000,
    }
];

/*
For the decimal to binary conversion, you need to divide input by 2 until the quotient, 
or the result of dividing two numbers, is 0. But since
 you don't know how many times you need to divide input by 2, you can use a 
 while loop to run a block of code as long as input is greater than 0 and can be divided.
*/
const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        return String(input);
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
    result.innerText = "Call Stack Animation";

    animationData.forEach((obj) => {
        setTimeout(() => {
            animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
            decimalToBinary(${obj.inputVal})
        </p>
        `;
        }, obj.addElDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).textContent = obj.msg;
        }, obj.showMsgDelay);

        setTimeout(() => {
            document.getElementById(obj.inputVal).remove();
        }, obj.removeElDelay);
    });

    setTimeout(() => {
        result.textContent = decimalToBinary(5);
    }, 20000);
};

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