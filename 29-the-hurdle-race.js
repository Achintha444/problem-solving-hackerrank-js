// Solution for 29-the-hurdle-race.js
// Problem URL: https://www.hackerrank.com/challenges/the-hurdle-race

function hurdleRace(k, height) {
    let maxValue = Math.max(...height);
    let value = maxValue - k;
    if (value <= 0) return 0
    return value;
}
