// Solution for 100-string-construction.js
// Problem URL: https://www.hackerrank.com/challenges/string-construction/problem?isFullScreen=true

/**
 * To solve this problem, we need to identify the number of unique characters in the string.
 * We can use a Set to store unique characters and then return the size of the Set.
 * As it is a Set, it will automatically remove any duplicate characters.
 */
function stringConstruction(s) {
    const sSet = new Set(s.split(""));
    
    return sSet.size;
}
