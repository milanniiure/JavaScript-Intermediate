const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;


function cleanInputString(str) {
    const regex = /[+-\s]/g;// regex for pattern matching, g "global" means it will look even after it work is done
    return str.replace(regex, '');//replace method to replace one string with another, it takes two parameters
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i; //i makes HELLo, heElLo, hEllO, etc to CASE INSENSITIVE, \d for digits(0-9), e for characters
    return str.match(regex);
    //console.log(isInvalidInput("1e3")); OUTPUT: [ '1e3', index: 0, input: '1e3', groups: undefined ]
    /**
     * "1e3" is the matched value against the /\d+e\d+/i regex.
    index: 0 is the index of the matched value in the string.
    input: '1e3' is the original string that was matched.
    groups: undefined are the matched groups, which are not used in this case 

    console.log(isInvalidInput("10")); OUTPUT: null means no match is found

    */
}
function addEntry() {
    let targetId = '#' + entryDropdown.value;
    let targetInputContainer = document.querySelector(targetId + " .input-container");
}