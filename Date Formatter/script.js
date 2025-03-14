const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date(); //constructor looks like a function but it starts with capital letter
const day = date.getDate();//returns a number between 1 and 31 that represents the day of the month for that date.
const month = date.getMonth() + 1; // we did +1 to the getMonth method cause it returns january as 0 and decembber as 11.
const year = date.getFullYear(); //The .getFullYear() method returns a number which represents the year for the provided date.
const hours = date.getHours(); //The .getHours() method returns a number between 0 and 23. 0 is midinight and 23 is 11 pm.
const minutes = date.getMinutes(); //The .getMinutes() method returns a number between 0 and 59

const formattedDate = `${day}-${month}-${year}`;
//console.log(formattedDate);
currentDateParagraph.textContent = formattedDate;

// the change event is used to detect when the value of an HTML element has changed:
dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default: // default is executed when none of the previous case conditions match value being evaluated.
            currentDateParagraph.textContent = formattedDate;
    }
});

/* SPLIT METHOD
The split() method is used to divide a string into substrings based on a specified separator.
It then returns these substrings as elements of an array.
EXAMPLE:
const greeting = "Hello World";
greeting.split(); // ["Hello World"]

The split method takes in a parameter known as a separator.
The separator is used to tell the computer where each split should occur.
eg.
"hello".split(""); // returns ["h", "e", "l", "l", "o"]

Note: you have to provide a separator otherwise method will return an array with original string as the only element.
*/

/*REVERSE METHOD
To reverse an array of elements, there is reverse() method.
This method reverses the order of the elements in the array in place.
The first element becomes the last, and the last element becomes the first.
eg.
[1, 2, 3, 4, 5].reverse(); // returns [5, 4, 3, 2, 1]
*/

/*
METHOD CHAINING: method1().method2().method3();
*/

/*JOIN METHOD
This method takes an array of elements and joins them into a string.
Similar to the split method, the join method also takes an optional separator.
If you don't provide a separator, the default separator is a comma.

eg.
[1, 2, 3, 4, 5].join("-"); // returns "1-2-3-4-5"
*/
////////////////// EXAMPLE TO TRY OUT ONE BY ONE //////////////////
/*
const exampleSentence = "selur pmaCedoCeerf".split("").reverse("").join("");
console.log(exampleSentence);
*/