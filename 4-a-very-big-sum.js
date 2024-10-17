// Solution for 4-a-very-big-sum.js
// Problem URL: https://www.hackerrank.com/challenges/a-very-big-sum

/**
 * In this question we are given an array of integers and we have to find the sum of all the elements in the array.
 * We can solve this problem by using the forEach method of the array which will iterate over each element in the array and add it to the value variable.
 */
function aVeryBigSum(ar) {
    let value = 0;
    ar.forEach((val) => value += val);
    return value;
}
