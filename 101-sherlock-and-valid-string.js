// Solution for 100-string-construction.js
// Problem URL: https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true

/**
 * To solve this problem, we need to first identify the frequency of each character in the string.
 * Then, we need to count the frequency of these frequencies.
 * If there is only one frequency, the string is valid.
 * If there are two frequencies, we need to check if one of them occurs only once and can be reduced by 1.
 * If the frequencies differ by 1 and one of them occurs only once, the string is valid.
 * Otherwise, the string is not valid.
 */
function isValid(s) {
    const charFrequency = new Map();
    for (const char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    const frequencyCount = new Map();
    for (const freq of charFrequency.values()) {
        frequencyCount.set(freq, (frequencyCount.get(freq) || 0) + 1);
    }

    if (frequencyCount.size === 1) return "YES";
    if (frequencyCount.size > 2) return "NO";

    const [freq1, count1] = [...frequencyCount.entries()][0];
    const [freq2, count2] = [...frequencyCount.entries()][1];

    // Case 1: One frequency occurs only once and can be reduced by 1
    if ((count1 === 1 && (freq1 === 1 || freq1 - 1 === 0)) ||
        (count2 === 1 && (freq2 === 1 || freq2 - 1 === 0))) {
        return "YES";
    }

    // Case 2: Frequencies differ by 1 and one of them occurs only once
    if (Math.abs(freq1 - freq2) === 1 &&
        (count1 === 1 || count2 === 1)) {
        return "YES";
    }

    return "NO";
}
