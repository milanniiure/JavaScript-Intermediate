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
    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1;
    })
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort(
        (a, b) => counts[b] - counts[a]
    )[0];
    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );
    return mode.join(", ");
}
/*
when calculating the mode of a dataset. First, if every value appears the same number of times, there is no mode.

To calculate this, you will use a Set. A Set is a data structure that only allows unique values.
If you pass an array into the Set constructor, it will remove any duplicate values.
*/

/*
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
}
const getVariance = (array) => {
    const mean = getMean(array);
    const differences = array.map(
        el => el - mean
    );
    const squaredDifferences = differences.map(
        el => el ** 2
    );
    const sumSquaredDifferences = squaredDifferences.reduce(
        (acc, el) => acc + el, 0
    );
}
*/

const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
}

const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);



    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
}