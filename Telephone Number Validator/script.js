const userInput = document.getElementById("user-input");

const checkBtn = document.getElementById("check-btn");

const clearBtn = document.getElementById("clear-btn");

const resultDiv = document.getElementById("results-div");

function validatePhoneNumber(){
    if(checkBtn === ""){
        alert("Please provide a phone number");
    }
    
}


checkBtn.addEventListener("click", validatePhoneNumber);   