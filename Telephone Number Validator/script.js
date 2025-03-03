const userInput = document.getElementById("user-input");

const checkBtn = document.getElementById("check-btn");

const clearBtn = document.getElementById("clear-btn");

const resultDiv = document.getElementById("results-div");

function validatePhoneNumber(event){
    event.preventDefault();
    let phoneNumber = userInput.value.trim();
    
    if(phoneNumber === ""){
        alert("Please enter a phone number");
    }
    
}

checkBtn.addEventListener("click", validatePhoneNumber);   