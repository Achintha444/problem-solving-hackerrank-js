// Solution for 84-pangrams.js
// Problem URL: https://www.hackerrank.com/challenges/pangrams/problem?isFullScreen=true

/**
 * To solve this problem, we need to check if the string contains all the letters of the alphabet.
 * We can do this by creating a set of all the letters in the string and check if the size of the set is equal to 
 * 26 (the number of letters in the alphabet).
 */
function pangrams(s) {
    const sMap = new Map();

    s.split("").forEach((letter) => {
        if (letter !== " ") {
            if (sMap.get(letter.toLowerCase())) sMap.set(letter.toLowerCase(), sMap.get(letter.toLowerCase()) + 1);
            else sMap.set(letter.toLowerCase(), 1);
        }
    });

    return sMap.size === 26 ? "pangram" : "not pangram";
}
