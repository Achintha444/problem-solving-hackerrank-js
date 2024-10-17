// Solution for 16-subarray-division.js
// Problem URL: https://www.hackerrank.com/challenges/the-birthday-bar

function birthday(s, d, m) {
    let count = 0;
    let total = 0;

    for (let i = 0; i <= (s.length - m); i++) {
        if (i !== 0) {
            total -= s[i - 1];
            total += s[i + m - 1];
        } else for (let j = 0; j < m; j++) total += s[j];

        if (total === d) count += 1;
    }

    return count;
}
