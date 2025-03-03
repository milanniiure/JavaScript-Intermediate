const userInput = document.getElementById("user-input");

const checkBtn = document.getElementById("check-btn");

const clearBtn = document.getElementById("clear-btn");

const resultDiv = document.getElementById("results-div");

//checks if the phone number is valid
function validatePhoneNumber(event) {
    event.preventDefault();

    //check if the input field is empty after trimming unnecessary spaces
    let phoneNumber = userInput.value.trim();
    if (phoneNumber === "") {
        alert("Please provide a phone number");
        return;
    }

    //regex for US phone number
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    // Test the trimmed user input against the phone number regex
    let phoneTest = phoneRegex.test(phoneNumber);//true if valid false it not
    if (phoneTest) {
        let msg = `Valid US number: ${phoneNumber}`;
        console.log(msg);
        resultDiv.textContent = msg;

    } else {
        let msg = `Invalid US number: ${phoneNumber}`;
        console.log(msg);
        resultDiv.textContent = msg;
    }
}
//clears the input and result div
clearBtn.addEventListener("click", function () {
    userInput.value = "";
    resultDiv.textContent = "";
});
//event listener for the check button
checkBtn.addEventListener("click", validatePhoneNumber);   