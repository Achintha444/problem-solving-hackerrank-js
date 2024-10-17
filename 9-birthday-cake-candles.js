// Solution for 9-birthday-cake-candles.js
// Problem URL: https://www.hackerrank.com/challenges/birthday-cake-candles

/**
 * To solve this we need to find the maximum number in the array and count how many times it appears in the array.
 * To find the maximum number in the array we can use the Math.max() function and spread operator, and then 
 * we can use the filter() function to count how many times the maximum number appears in the array.
 */
function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let count = 0;

    candles.filter((candle) => {
        if (candle == max) count += 1
    })

    return count
}
