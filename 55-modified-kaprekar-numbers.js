// Solution for 55-modified-kaprekar-numbers.js
// Problem URL: https://www.hackerrank.com/challenges/kaprekar-numbers/problem?isFullScreen=true

/**
 * To solve this we need to check if the given number (i) is a Kaprekar number. 
 * A Kaprekar number is a number that is equal to the sum of the square of its digits and the number itself.
 */
function kaprekarNumbers(p, q) {
    let result = [];
    for (let i = p; i <= q; i++) {
        let n = i * i;
        let nArray = n.toString().split("")

        let temp;

        if ((nArray.length - i.toString().length) > 0) {
            temp = parseInt([...nArray].splice(0, nArray.length - i.toString().length).join(""))
                + parseInt([...nArray].splice(nArray.length - i.toString().length).join(""))
        }
        else temp = n

        if (temp === i) result.push(i);
    }

    if (result.length === 0) console.log("INVALID RANGE");
    else console.log(result.join(" "));
}
