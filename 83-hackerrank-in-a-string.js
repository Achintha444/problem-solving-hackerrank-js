// Solution for 83-hackerrank-in-a-string.js
// Problem URL: https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

/**
 * To solve this problem, we need to have an index to keep track of the letters in the word "hackerrank". 
 * We iterate over the string and compare each letter with the corresponding letter in the word "hackerrank". 
 * If the letters match, we increment the index. If the index reaches the length of the word "hackerrank", we return "YES". Otherwise, we return "NO".
 */
function hackerrankInString(s) {
    const h = "hackerrank";
    let hIndex = 0;

    s.split("").forEach((letter) => {
        if (letter === h[hIndex]) hIndex += 1;
        if (hIndex === h.length) return "YES";
    });

    return hIndex === h.length ? "YES" : "NO";
}
