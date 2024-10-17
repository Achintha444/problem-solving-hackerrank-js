// Solution for 45-non-divisible-subset.js
// Problem URL: https://www.hackerrank.com/challenges/non-divisible-subset

function nonDivisibleSubset(k, s) {
    // Create an array to store the count of remainders
    const remainderCount = new Array(k).fill(0);
    
    // Count the occurrences of each remainder
    for (let num of s) {
        remainderCount[num % k]++;
    }
    
    // Initialize the result
    let result = 0;
    
    // Special case for remainder 0
    if (remainderCount[0] > 0) {
        result++;
    }
    
    // Special case for k/2 when k is even
    if (k % 2 === 0 && remainderCount[k/2] > 0) {
        result++;
    }
    
    // Count for other remainders
    for (let i = 1; i < Math.floor(k/2) + 1; i++) {
        if (i !== k - i) {
            result += Math.max(remainderCount[i], remainderCount[k-i]);
        }
    }
    
    return result;
}
