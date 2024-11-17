// Solution for 88-alternating-characters
// Problem URL: https://www.hackerrank.com/challenges/alternating-characters/problem

/**
 * To solve this problem, first we need to create a stack and push the first character of the string into the stack.
 * Then we iterate over the string starting from the second character, and for each character, we pop the last character from the stack
 * and compare it with the current character. If they are the same, we increment the result by 1(mean that character will be removed). Finally, we push the current character into the stack.
 * The result will be the number of characters that need to be removed to make the string alternating.
 */
function alternatingCharacters(s) {
    const stack = [s[0]];
    let result = 0;

    for (let i = 1; i < s.length; i++) {
        const prev = stack.pop();

        if (prev === s[i]) result += 1;

        stack.push(s[i]);
    }

    return result;
}
