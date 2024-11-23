// Solution for 96-anagram
// Problem URL: https://www.hackerrank.com/challenges/anagram/problem
/**
 * To solve this problem, first we need to check if the length of the string is even or odd. If it's odd, we return -1 because it's not possible to split the string into two equal halves.
 * Next, we split the string into two halves, strOne and strTwo. We then iterate through strOne and check if each letter exists in strTwo. If it does, we remove that letter from strTwo. If it doesn't, we increment the result by 1.
 * Finally, we return the result.
 */

function anagram(s) {
    if (s.length % 2 === 1) return -1;

    const midIndex = s.length / 2;

    const strOne = s.split("").slice(0, midIndex);
    let strTwo = s.split("").slice(midIndex).join("");

    let result = 0;

    strOne.forEach((letter) => {
        const indexOfLetter = strTwo.indexOf(letter);

        if (indexOfLetter === -1) result += 1;
        else strTwo = strTwo.replace(letter, "*");
    });

    return result;
}
