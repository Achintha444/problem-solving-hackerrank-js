// Solution for 39-find-digits.js
// Problem URL: https://www.hackerrank.com/challenges/find-digits

function findDigits(n) {
    const nArray = n.toString().split("");
    let result = 0;

    nArray.forEach((value) => {
        if (n % parseInt(value) === 0) result += 1
    });

    return result;
}
