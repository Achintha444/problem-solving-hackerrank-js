// Solution for 79-two-characters.js
// Problem URL: https://www.hackerrank.com/challenges/two-characters/problem?isFullScreen=true

/**
 * To solve this problem, we need to first get the unique characters from the string. Then we need to iterate over those letters and get two letters
 * and remove them from the string. Then we need to check if the remaining string is alternating or not. If it is alternating, we need to check if it is
 * the longest alternating string we have found so far. If it is, we need to update the result. Finally, we need to return the length of the longest.
 */
function alternate(s) {
    const letters = Array.from(new Set(s));
    const sArray = s.split("");
    let result = 0;

    function checkIfAlternating(newLetters) {
        let check = true;
        for (let i = 1; i < newLetters.length; i++) {
            if (newLetters[i] === newLetters[i - 1]) {
                check = false;
                break;
            }
        }

        return check;
    }

    for (let i = 0; i < letters.length - 1; i++) {
        for (let j = 1; j < letters.length; j++) {
            let sfilter = [...sArray].filter((letter) => ((letter === letters[i]) || (letter === letters[j])));
            if (sfilter.length > result && checkIfAlternating(sfilter)) result = sfilter.length;
        }
    }

    return result;
}
