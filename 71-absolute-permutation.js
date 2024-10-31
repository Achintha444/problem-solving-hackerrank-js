// Solution for 71-absolute-permutation
// Problem URL: https://www.hackerrank.com/challenges/absolute-permutation/problem
/**
 * To solve this problem we need to find the absolute permutation of the given number. We can use a simple loop to find the absolute permutation.
 * We can use a set to check if the permutation is unique. If the permutation is not unique, we return -1.
 */
function absolutePermutation(n, k) {
    if (k === 0) return Array.from({ length: n }, (_, i) => i + 1);
    if (n % 2 !== 0 || (n % (2 * k) !== 0)) return [-1];
    if (k > n) return [-1];

    let result = new Array(n);

    for (let i = 0; i < n; i++) {
        if (Math.floor(i / k) % 2 === 0) {
            result[i] = i + 1 + k;
        } else {
            result[i] = i + 1 - k;
        }

        if (result[i] < 1 || result[i] > n) return [-1];
    }

    let used = new Set(result);
    if (used.size !== n) return [-1];

    return result;
}
