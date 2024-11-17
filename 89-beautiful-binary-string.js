// Solution for 89-beautiful-binary-string.js
// Problem URL: https://www.hackerrank.com/challenges/beautiful-binary-string/problem

/**
 * To solve this problem, we need to find the occurrences of the substring "010" in the given string. 
 * For each occurrence, we need to replace its one of the characters(we do not need to worry about this, as the question is only asking about the
 * no. of replacements) and increment the result by 1. Finally, we return the result.
 */
function beautifulBinaryString(b) {
    let result = 0;
    let index = 0;

    while (index < (b.length - 2)) {
        if (`${b[index]}${b[index + 1]}${b[index + 2]}` === "010") {
            index += 3;
            result += 1;
        } else {
            index += 1;
        }
    }

    return result;
}
