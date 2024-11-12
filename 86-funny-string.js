// Solution for 86-funny-string problem
// Problem URL: https://www.hackerrank.com/challenges/funny-string/problem

/**
 * To solve this problem, first we need to reverse the string and then compare the absolute difference of ASCII values of each pair of adjacent characters in the original string with the absolute difference of ASCII values of each pair of adjacent characters in the reversed string.
 * If all the differences are equal, then the string is funny, otherwise it is not funny. This can be done by a loop and 
 * returning "Funny" or "Not Funny" accordingly.
 */
function funnyString(s) {
    const sReverse = s.split("").reverse().join("");

    for (let i = 0; i < s.length - 1; i++) {
        if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) !==
            Math.abs(sReverse.charCodeAt(i) - sReverse.charCodeAt(i + 1)))
            return "Not Funny";
    }

    return "Funny";
}
