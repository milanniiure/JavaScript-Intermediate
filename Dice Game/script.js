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

/**
 * Rolls 5 dice and updates the dice values array
 */
const rollDice = () => {
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomDice);
    }

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });
};

/**
 * Updates UI stats
 */
const updateStats = () => {
    rollsElement.textContent = rolls;
    roundElement.textContent = round;
};

/**
 * Enables a specific radio button with a given score
 */
const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = `, score = ${score}`;
};

/**
 * Updates the total score and appends history
 */
const updateScore = (selectedValue, achieved) => {
    score += parseInt(selectedValue);
    totalScoreElement.textContent = score;
    scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

/**
 * Finds the highest duplicate count and updates score accordingly
 */
const getHighestDuplicates = (arr) => {
    const counts = {};
    
    arr.forEach(num => counts[num] = (counts[num] || 0) + 1);

    let highestCount = Math.max(...Object.values(counts));  // 🔹 CHANGED HERE 🔹 Simplified finding the highest duplicate count

    const sumOfAllDice = arr.reduce((a, b) => a + b, 0);

    if (highestCount >= 4) {
        updateRadioOption(1, sumOfAllDice);
    } else if (highestCount >= 3) {
        updateRadioOption(0, sumOfAllDice);
    }

    // Removed updateRadioOption(5, 0) from here 🔹 CHANGED HERE 🔹
};

/**
 * Detects a full house (3 of a kind + a pair) and updates score
 */
const detectFullHouse = (arr) => {
    const counts = {};
    
    arr.forEach(num => counts[num] = (counts[num] || 0) + 1);

    const hasThreeOfAKind = Object.values(counts).includes(3);
    const hasPair = Object.values(counts).includes(2);

    if (hasThreeOfAKind && hasPair) {
        updateRadioOption(2, 25);
    }

    // Removed updateRadioOption(5, 0) from here 🔹 CHANGED HERE 🔹
};

/**
 * Detects small and large straights and updates score
 */
const checkForStraights = (arr) => {
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);  
    const uniqueNumbersStr = sortedArr.join("");  // 🔹 CHANGED HERE 🔹 Optimized straight checking

    const smallStraights = ["1234", "2345", "3456"];
    const largeStraights = ["12345", "23456"];

    if (largeStraights.includes(uniqueNumbersStr)) {
        updateRadioOption(4, 40);
    } else if (smallStraights.some(straight => uniqueNumbersStr.includes(straight))) {
        updateRadioOption(3, 30);
    }

    // Removed updateRadioOption(5, 0) from here 🔹 CHANGED HERE 🔹
};

/**
 * Resets radio buttons for the next round
 */
const resetRadioOptions = () => {
    scoreInputs.forEach((input) => {
        input.disabled = true;
        input.checked = false;
    });

    scoreSpans.forEach((span) => {
        span.textContent = "";
    });
};

/**
 * Resets the game back to initial state
 */
const resetGame = () => {
    diceValuesArr = [0, 0, 0, 0, 0];
    score = 0;
    round = 1;
    rolls = 0;

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });

    totalScoreElement.textContent = score;
    scoreHistory.innerHTML = "";

    rollsElement.textContent = rolls;
    roundElement.textContent = round;

    resetRadioOptions();
};

/**
 * Rolls dice, checks scores, and updates UI when the button is clicked
 */
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
        checkForStraights(diceValuesArr);

        updateRadioOption(5, 0);  // 🔹 CHANGED HERE 🔹 Ensured this happens only once
    }
});

/**
 * Toggles rules visibility when the button is clicked
 */
rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;

    rulesBtn.textContent = isModalShowing ? "Hide rules" : "Show rules";
    rulesContainer.style.display = isModalShowing ? "block" : "none";
});

/**
 * Handles keeping score and progressing rounds
 */
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
