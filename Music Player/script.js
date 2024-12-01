const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
    },
    {
        id: 3,
        title: "Cruising for a Musing",
        artist: "Quincy Larson",
        duration: "3:34",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
    },
    {
        id: 4,
        title: "Never Not Favored",
        artist: "Quincy Larson",
        duration: "3:35",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
    },
    {
        id: 5,
        title: "From the Ground Up",
        artist: "Quincy Larson",
        duration: "3:12",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
    },
    {
        id: 6,
        title: "Walking on Air",
        artist: "Quincy Larson",
        duration: "3:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
    },
    {
        id: 7,
        title: "Can't Stop Me. Can't Even Slow Me Down.",
        artist: "Quincy Larson",
        duration: "3:52",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
        id: 8,
        title: "The Surest Way Out is Through",
        artist: "Quincy Larson",
        duration: "3:10",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
    },
    {
        id: 9,
        title: "Chasing That Feeling",
        artist: "Quincy Larson",
        duration: "2:43",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
    },
];

const audio = new Audio();


/**
 * The spread operator (...) allows you to copy all elements from one array into another.
 * It can also be used to concatenate multiple arrays into one.
 * const arr1 = [1, 2, 3];
 * const arr2 = [4, 5, 6];
 * const combinedArr = [...arr1, ...arr2];
 * console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
 * 
 * ARROW FUNCTION WITH ONE PARAMETER
 * const greet = (name) => {
 * console.log(`Hello, ${name}!`);
 * };
 * 
 * AND IF IT HAS ONLY ONE PARAMETER YOU CAN OMIT PARENTHESES
 * const greet = name => {
 * console.log(`Hello, ${name}!`);
};
AND IF IT HAS SIMPLE EXPRESSIONS YOU CAN WRITE IT LIKE THIS
const multiplyTwoNumbers = (num1, num2) => num1 * num2;
console.log(multiplyTwoNumbers(3,4));

If your arrow function has multiple lines of code in the function body,
then you need to use the return keyword and the curly braces {}

ARROW FUNCTION WITH TWO PARAMETERS
const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwoNumbers(3,4));
 */

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

/*
Arrow Function : It does not have name and a shorter way to write function
const printGreeting = () => {
    console.log("Hello there!");
}
printGreeting();// calling the arrow function

const printMessage = org => {
    console.log(`${org} is awesome!`);
}

printMessage('freeCodeCamp');


//IMPLICIT RETURN 
const addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers(3,4));
*/

const renderSongs = (array) => {

}