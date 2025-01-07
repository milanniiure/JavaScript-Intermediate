const checkBtn = document.getElementById("check-btn");

const userInput = () => {
    if (input === "") {
        alert("Please input a value");
    }
    const input = replace(/[^a-zA-Z0-9]/g, '').toLowerCase(userInput);
    
}

checkBtn.addEventListener("click", userInput);