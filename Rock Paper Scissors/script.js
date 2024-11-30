//STEP 1
/**
 * The first step is to build out the function that will generate a random choice for the computer.

The getRandomComputerResult function will be used to get the computer's choice. Inside that function, you should see an options array with "Rock", "Paper", and "Scissors".

Your task is to complete the getRandomComputerResult function so that it returns a random option from the options array.
TIPS:
You can use Math.random() and Math.floor() to help you get a random whole number. This will represent the index number for the options array.
You can use the random index to access the option from the options array.
 */


function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
console.log(getRandomComputerResult());



//STEP 2
/**
 * Complete the hasPlayerWonTheRound function. This function has two parameters: player and computer. The function should return true if the player has won the round, and false if the player has lost or tied the round.

Here are the criteria for the player to win a round:

If the player chooses "Rock" and the computer chooses "Scissors"
If the player chooses "Scissors" and the computer chooses "Paper"
If the player chooses "Paper" and the computer chooses "Rock"
 */

function hasPlayerWonTheRound(player, computer) {
    if (player === "Rock" && computer === "Scissors" || player === "Scissors" && computer === "Paper" || player === "Paper" && computer === "Rock") {
        return true;
    } else {
        return false;
    }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));