// Solution for 6-plus-minus.js
// Problem URL: https://www.hackerrank.com/challenges/plus-minus

/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
 * Print the decimal value of each fraction on a new line with  places after the decimal.
 * 
 * We can solve this problem by counting the number of positive, negative and zero elements in the array and then dividing them by the total number of elements in the array.
 */
function plusMinus(arr) {
    let positiveCount = 0
    let minusCount = 0
    let zeroCount = 0
    
    arr.forEach((val)=> {
        if (val > 0) positiveCount+=1
        else if (val===0) zeroCount+=1
        else minusCount+=1
    })
    
    console.log(positiveCount/arr.length);
    console.log(minusCount/arr.length);
    console.log(zeroCount/arr.length);
}
