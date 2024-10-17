// Solution for 2-simple-array-sum.js
// Problem URL: https://www.hackerrank.com/challenges/simple-array-sum

/**
 * The question is asking to sum all the elements in the array.
 * We can use the forEach method to iterate through the array and add each element to a count variable.
 */
function simpleArraySum(ar) {
    let count = 0;
    ar.forEach((value) => count = count + value)
    return count;
}
