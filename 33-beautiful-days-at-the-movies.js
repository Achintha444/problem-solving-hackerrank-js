// Solution for 33-beautiful-days-at-the-movies.js
// Problem URL: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies

function beautifulDays(i, j, k) {
    let beautifulDays = 0;

    for (i; i <= j; i++) {
        let r = parseInt(i.toString().split("").reverse().join(""));
        let s = Math.abs(i - r);
        if (s % k === 0) beautifulDays += 1;
    }

    return beautifulDays;
}
