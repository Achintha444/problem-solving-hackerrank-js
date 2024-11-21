// Solution for 94-palindrome-index.js
// Problem URL: https://www.hackerrank.com/challenges/palindrome-index/problem

/**
 * To solve this problem, first we need a function that checks if a string is a palindrome.
 * Then we iterate through the string, comparing the first and last characters. If they are the same, we continue to the next pair of characters.
 * If they are not the same, we check if removing the first or last character makes the string a palindrome.
 * If it does, we return the index of the character that was removed.
 */

function palindromeIndex(s) {
    const sArray = s.split("");
    let index = 0;

    function checkPalindrome(letterArray) {
        const copyLetterArray = [...letterArray];
        let index = 0;

        while (copyLetterArray.length > 1) {
            if (letterArray[index] === copyLetterArray.pop()) index++
            else return false;
        }

        return true;
    }

    while (index <= (Math.floor(sArray.length / 2) - 1)) {
        const currentElement = sArray[index];
        const lastElement = sArray[sArray.length - 1 - index];

        if (currentElement === lastElement) index++
        else {
            const copySArray = [...sArray];
            copySArray.splice(index, 1)

            return checkPalindrome(copySArray) ? index : sArray.length - 1 - index;
        }
    }

    return -1;
}