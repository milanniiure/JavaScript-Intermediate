const checkBtn = document.getElementById("check-btn");

const userInput = () => {
    if (userInput === "") {
        alert("Please input a value");
    }
}

checkBtn.addEventListener("click", userInput());