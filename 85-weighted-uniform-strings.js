// Solution for 85-Weighted Uniform Strings
// Problem URL: https://www.hackerrank.com/challenges/weighted-uniform-string/problem

/**
 * To solve this problem, we need to calculate the weight of each character and if the character is repeated, we need to add the weight of the repeated character to the previous weight.
 * Then, we can check if each query is in the set and return "Yes" or "No" accordingly.
 */
function weightedUniformStrings(s, queries) {
    const alphabetMap = {
        "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10,
        "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20,
        "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26
    };

    const weights = new Set();
    let currentChar = s[0];
    let currentWeight = alphabetMap[currentChar];
    weights.add(currentWeight);

    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            currentWeight += alphabetMap[currentChar];
            weights.add(currentWeight);
        } else {
            currentChar = s[i];
            currentWeight = alphabetMap[currentChar];
            weights.add(currentWeight);
        }
    }

    return queries.map(query => weights.has(query) ? "Yes" : "No");
}
