// Solution for 99-two-strings
// Problem URL: https://www.hackerrank.com/challenges/two-strings/problem
/**
 * To solve this problem, we need to understand is that only a single letter is required to be present in both strings 
 * to consider it as a subset. 
 * So, we can iterate through the first string and check if the current character is present in the second string.
 * If it is present, we can return "YES" and break the loop. 
 * If the loop completes without finding any common character, we return "NO".
 */

function twoStrings(s1, s2) {
    let result = "NO";

    for (let i = 0; i < s1.length; i++) {
        if (s2.indexOf(s1[i]) >= 0) {
            result = "YES";
            break;
        }
    }

    return result;
}
