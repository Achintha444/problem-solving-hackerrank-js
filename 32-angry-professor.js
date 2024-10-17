// Solution for 32-angry-professor.js
// Problem URL: https://www.hackerrank.com/challenges/angry-professor

function angryProfessor(k, a) {
    let minZeroCount = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) minZeroCount += 1;
        if (minZeroCount >= k) break;
    }

    return minZeroCount >= k ? "NO" : "YES";
}
