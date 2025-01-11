const userInput = document.getElementById("user-input");

const checkBtn = document.getElementById("check-btn");

const clearBtn = document.getElementById("clear-btn");

const resultDiv = document.getElementById("results-div");

function validatePhoneNumber(phoneNumber){
    if(userInput === ""){
        alert("Please provide a phone number");
    }
    const regEx = /^\d{10}$/;
    return regEx.test(phoneNumber);
}


checkBtn.addEventListener("click", validatePhoneNumber(999888));   