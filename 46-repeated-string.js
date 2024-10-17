// Solution for 46-repeated-string.js
// Problem URL: https://www.hackerrank.com/challenges/repeated-string

/**
 * To solve this we need to first check if the current length of the string is less than or equal to the given number n.
 * If not we set the `currentLength` to be the length of the string, and find the number of "a" in the string.
 * If the length of the string is more than or equal to n, we return the number of "a" in the string.
 * Else we find the number of times the string can be repeated and multiply the number of "a" in the string by that number, then we find the 
 * remaining number of characters and find the number of "a" in that remaining number of characters and add it to the result.
 */
function repeatedString(s, n) {
    let sArray = s.split("");
    let currentLength = sArray.length <= n ? sArray.length : n;
    let result = 0;

    for (let i = 0; i < currentLength; i++) if (sArray[i] === "a") result += 1

    if (sArray.length >= n) return result;

    let repeat = Math.floor(n / currentLength);

    result *= repeat;

    let remain = n - currentLength * repeat;

    for (let i = 0; i < remain; i++) if (sArray[i] === "a") result += 1
    return result;
}
