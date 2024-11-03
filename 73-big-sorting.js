// Solution for 73-big-sorting problem
// Problem URL: https://www.hackerrank.com/challenges/big-sorting/problem

/**
 * To solve this problem we need to sort the given array of strings. The problem with the original solution (a - b):

    For very large numbers (>2^53), JavaScript loses precision
    Converting strings to numbers might fail for extremely large values

    To fix this:

        First comparing string lengths (shorter numbers are always smaller)
        If lengths are equal, comparing strings lexicographically (which works because all characters are digits) 
 */
function bigSorting(unsorted) {
    return unsorted.sort((a, b) => {
        if (a.length !== b.length) return a.length - b.length;
        return a.localeCompare(b);
    });
}
