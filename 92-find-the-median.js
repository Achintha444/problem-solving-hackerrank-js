// Solution for 92-find-the-median.js
// Problem URL: https://www.hackerrank.com/challenges/find-the-median/problem
/**
 * To solve this problem, first we need to find the median index, since the array length is odd, it is always the middle element.
 * Then we sort the array in ascending order. Finally, we return the element at the median index.
 */
function findMedian(arr) {
    const medianIndex = Math.floor(arr.length / 2);
    arr.sort((a, b) => a - b);

    return arr[medianIndex];
}
