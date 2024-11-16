// Solution for 87-gemstones problem
// Problem URL: https://www.hackerrank.com/challenges/gem-stones/problem

/**
 * To solve this problem, first we need to find the unique letter in each word. After that we need to count the
 * letter occurances in each word. If the letter occurs in all words, then we add it to the accumulator. Finally,
 * we return the accumulator.
 */
function gemstones(arr) {
    const letterMap = new Map();

    arr.forEach((word) => {
        new Set(word.split("")).forEach((letter) => {
            if (letterMap.get(letter)) letterMap.set(letter, letterMap.get(letter) + 1)
            else letterMap.set(letter, 1);
        });
    });

    return Array.from(letterMap.values()).reduce(
        (accumulator, currentValue) => {
            if (currentValue === arr.length) return accumulator + 1;
            else return accumulator;
        }, 0
    );
}
