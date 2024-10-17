// Solution for 35-save-the-prisoner.js
// Problem URL: https://www.hackerrank.com/challenges/save-the-prisoner

function saveThePrisoner(n, m, s) {
    let remain = m % n;
    if (s === 1) return remain === 0 ? n : remain;

    let x = s + remain - 1;
    return x > n ? x - n : x;
}
