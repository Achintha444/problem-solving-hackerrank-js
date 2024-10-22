// Solution for 54-bigger-is-greater.js
// Problem URL: https://www.hackerrank.com/challenges/bigger-is-greater/problem

/**
 * To solve this we need to find the next largest Lexicographical order string. To do that we need to find the right most
 * largest character and swap it with the smallest character to its right. Then we need to reverse the right part of the
 * string.
 */
function biggerIsGreater(w) {
    const n = w.length;
    const chars = w.split("");

    let i = n - 2;
    while (i >= 0 && chars[i] >= chars[i + 1]) {
        i--;
    }

    if (i < 0) return "no answer";

    // Find the smallest character to the right of index i that is greater than chars[i]
    let j = n - 1;
    while (j > i && chars[j] <= chars[i]) {
        j--;
    }

    // Swap chars[i] and chars[j]
    [chars[i], chars[j]] = [chars[j], chars[i]];

    // Reverse the right part of the word
    let left = i + 1, right = n - 1;
    while (left < right) {
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }

    return chars.join("");
}
