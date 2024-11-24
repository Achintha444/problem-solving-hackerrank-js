// Solution for 97-making-anagrams problem
// Problem URL: https://www.hackerrank.com/challenges/making-anagrams/problem
/**
 * To solve this problem, first we need to find the number of characters that are not present in the second string. 
 * Then we need to find the number of characters that are present in the second string but not in the first string. 
 * The sum of these two numbers will give us the number of operations required to make the two strings anagrams of each other.
 */

function makingAnagrams(s1, s2) {
    let result = 0;

    s1.split("").forEach((letter) => {
        const letterIndexS2 = s2.indexOf(letter);

        if (letterIndexS2 === -1) result += 1;
        else s2 = s2.replace(letter, "*");
    });

    return result + Math.abs(s2.length - (s1.length - result));
}
