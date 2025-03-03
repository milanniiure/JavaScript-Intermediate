const userInput = document.getElementById("user-input");

const checkBtn = document.getElementById("check-btn");

const clearBtn = document.getElementById("clear-btn");

const resultDiv = document.getElementById("results-div");

//this will check if the input field is empty
function validatePhoneNumber(event){
    event.preventDefault();
    let phoneNumber = userInput.value.trim();
    
    if(phoneNumber === ""){
        alert("Please provide a phone number");
    }
}
//clears the input and result div
clearBtn.addEventListener("click", function(){
    userInput.value = "";
    resultDiv.textContent = "";
});
//event listener for the check button
checkBtn.addEventListener("click", validatePhoneNumber);   