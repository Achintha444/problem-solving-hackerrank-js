// Solution for 42-sherlock-and-squares.js
// Problem URL: https://www.hackerrank.com/challenges/sherlock-and-squares

function squares(a, b) {
    let result = 0;
    let aSquare = Math.ceil(Math.sqrt(a));
    let current = aSquare * aSquare;

    while (current <= b) {
        result += 1;
        aSquare += 1;
        current = aSquare * aSquare;
    }

    return result;
}
