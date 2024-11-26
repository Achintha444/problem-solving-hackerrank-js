// Solution for 98-Game of Thrones I
// Problem URL: https://www.hackerrank.com/challenges/game-of-thrones/problem
/**
 * To solve this problem, first we need find the number of occurrences of each character in the string.
 * Then we need to find the number of characters that have odd occurrences. If that value is more than one
 * then it's not possible to rearrange the string to make it a palindrome, otherwise it is possible.
 */

function gameOfThrones(s) {
    const sChaMap = new Map();
    const sArray = s.split("");

    sArray.forEach((letter) => {
        if (sChaMap.get(letter)) sChaMap.set(letter, sChaMap.get(letter) + 1);
        else sChaMap.set(letter, 1);
    });

    const oddValuesSChaMap = [...sChaMap.values()].filter((value) => value % 2 === 1);

    return (oddValuesSChaMap.length) < 2 ? "YES" : "NO";
}

