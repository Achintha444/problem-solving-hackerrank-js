// Solution for 91-the-love-letter-mystery.js
// Problem URL: https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
/**
 * To solve this problem, we need to first map out the alphabet to its corresponding index value based on the alphabetMap object.
 * Then we need to check if the string has a length of 1, if it does, we return 0.
 * If the string has a length of 2, we return the absolute difference between the index values of the two characters.
 * If the string has a length greater than 2, we iterate over the string from the first character to the middle character.
 * For each character, we add the absolute difference between the index values of the current character and its corresponding character from the end of the string to the result.
 * Finally, we return the result.
 */
function theLoveLetterMystery(s) {
    if (s.length === 1) return "0";

    const alphabetMap = {
        "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10,
        "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20,
        "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26
    };

    if (s.length === 2) return Math.abs(alphabetMap[s[0]] - alphabetMap[s[1]]);

    let result = 0;
    const lastCheckIndex = Math.floor(s.length / 2) - 1;

    for (let i = 0; i <= lastCheckIndex; i++) {
        result += Math.abs(alphabetMap[s[i]] - alphabetMap[[s[s.length - 1 - i]]]);
    }

    return result;
}
