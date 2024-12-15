const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

/*
const getMean = (array) => {
    const sum = array.reduce((acc, el) => acc + el, 0);
    const mean = sum / array.length;
    return mean;
}
*/
const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b);
    const median =
        sorted.length % 2 === 0
            ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
            : sorted[Math.floor(sorted.length / 2)];
    return median;
}

/*
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1], testArr2[testArr2.length / 2]]);
console.log(evenListMedian);
*/

/*
By default, the .sort() method converts the elements of an array into strings, then sorts them alphabetically. 
The .sort() method mutates the original array. This works well for strings, but not so well for numbers.
For example, 10 comes before 2 when sorted as strings, but 2 comes before 10 when sorted as numbers.

To fix this, you can pass in a callback function to the .sort() method. 
This function takes two arguments, which represent the two elements being compared. 
The function should return a value less than 0 if the first element should come before the second element, 
a value greater than 0 if the first element should come after the second element, 
and 0 if the two elements should remain in their current positions.
*/

const getMode = (array) => {
    const counts = {};
    array.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);
    console.log(counts)
    return counts;
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);


    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;


}