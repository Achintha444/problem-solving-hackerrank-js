// Solution for 17-divisible-sum-pairs.js
// Problem URL: https://www.hackerrank.com/challenges/divisible-sum-pairs

function divisibleSumPairs(n, k, ar) {
    let total = 0;
    
    for (let i = 0; i < (n - 1); i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) total += 1
        }
    }

    return total;
}
