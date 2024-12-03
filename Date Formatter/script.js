const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date(); //constructor looks like a function but it starts with capital letter
const day = date.getDate();//returns a number between 1 and 31 that represents the day of the month for that date.
const month = date.getMonth() + 1; // we did +1 to the getMonth method cause it returns january as 0 and decembber as 11.
const year = date.getFullYear(); //The .getFullYear() method returns a number which represents the year for the provided date.
const hours = date.getHours(); //The .getHours() method returns a number between 0 and 23. 0 is midinight and 23 is 11 pm.
const minutes = date.getMinutes(); //The .getMinutes() method returns a number between 0 and 59