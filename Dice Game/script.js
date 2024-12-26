const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");


let isModalShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let round = 1;

/*
Logic to generate random number
*/
const rollDice = () => {
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomDice);
    };

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });
};

//It updates stats
const updateStats = () => {
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
}

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = `, score = ${score}`;
};


const updateScore = (selectedValue, achieved) => {
    score += parseInt(selectedValue);
    totalScoreElement.textContent = score;

    scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

const getHighestDuplicates = (arr) => {
    const counts = {};

    for (const num of arr) {
        if (counts[num]) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    let highestCount = 0;

    for (const num of arr) {
        const count = counts[num];
        if (count >= 3 && count > highestCount) {
            highestCount = count;
        }
        if (count >= 4 && count > highestCount) {
            highestCount = count;
        }
    }

    const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

    if (highestCount >= 4) {
        updateRadioOption(1, sumOfAllDice);
    }

    if (highestCount >= 3) {
        updateRadioOption(0, sumOfAllDice);
    }

    updateRadioOption(5, 0);
};

const detectFullHouse = (arr) => {
    const counts = {};

    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    const hasThreeOfAKind = Object.values(counts).includes(3);
    const hasPair = Object.values(counts).includes(2);

    if (hasThreeOfAKind && hasPair) {
        updateRadioOption(2, 25);
    }

    updateRadioOption(5, 0);
};

const resetRadioOptions = () => {
    scoreInputs.forEach((input) => {
        input.disabled = true;
        input.checked = false;
    });

    scoreSpans.forEach((span) => {
        span.textContent = "";
    });
};

//Event listener to roll dice button
rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        rolls++;
        resetRadioOptions();
        rollDice();
        updateStats();
        getHighestDuplicates(diceValuesArr);
        detectFullHouse(diceValuesArr);
    }
});

//Rules btn event listenerr
rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;

    if (isModalShowing) {
        rulesBtn.textContent = "Hide rules";
        rulesContainer.style.display = "block";
    } else {
        rulesBtn.textContent = "Show rules";
        rulesContainer.style.display = "none";
    }
});


keepScoreBtn.addEventListener("click", () => {
    let selectedValue;
    let achieved;

    for (const radioButton of scoreInputs) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            achieved = radioButton.id;
            break;
        }
    }

    if (selectedValue) {
        rolls = 0;
        round++;
        updateStats();
        resetRadioOptions();
        updateScore(selectedValue, achieved);
        if (round > 6) {
            setTimeout(() => {
                alert(`Game Over! Your total score is ${score}`);
                resetGame();
            }, 500);
        }
    } else {
        alert("Please select an option or roll the dice");
    }
});