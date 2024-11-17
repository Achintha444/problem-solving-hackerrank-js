// Solution for 90-closest-numbers.js
// Problem URL: https://www.hackerrank.com/challenges/closest-numbers/problem
/**
 * To solve this problem, we need to find the minimum difference between any two elements in the array.
 * Then we need to find all the pairs of elements that have this minimum difference. This minimum will only have between the
 * adjacent elements, so we can iterate over the array and compare each element with the next one.
 * If the difference between the current element and the next one is equal to the minimum difference, we add the pair to the result.
 * Finally, we return the result.
 */
function closestNumbers(arr) {
    // Sort array normally
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i] - arr[i + 1]);

        if (diff < minDiff) {
            minDiff = diff;
            result = [arr[i], arr[i + 1]];
        } else if (diff === minDiff) {
            result.push(arr[i], arr[i + 1]);
        }
    }

    return result;
}
