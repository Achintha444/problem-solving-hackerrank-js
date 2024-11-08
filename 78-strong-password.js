// Solution for 78-strong-password.js
// Problem URL: https://www.hackerrank.com/challenges/strong-password/problem

/**
 * To solve this problem, we need to iterate over the password and count the numbers, lowercase letters, uppercase letters, and special characters.
 * Then, we need to check if the password is strong enough by comparing the count of each type of character with the minimum required count.
 * If the password is not strong enough, we need to add the missing types of characters to the password. 
 * Finally, we need to return the minimum number of characters that need to be added to make the password strong.
 */
function minimumNumber(n, password) {
    const numbers = "0123456789".split("");
    const lower_case = "abcdefghijklmnopqrstuvwxyz".split("");
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const special_characters = "!@#$%^&*()-+".split("");

    // [ numbers count, lower_case count, upper_case count, special_characters count]
    const result = new Array(4).fill(0);

    password.split("").forEach((letter) => {
        if (numbers.includes(letter)) result[0] += 1;
        else if (lower_case.includes(letter)) result[1] += 1
        else if (upper_case.includes(letter)) result[2] += 1
        else if (special_characters.includes(letter)) result[3] += 1

        if (!result.includes(0)) return 0;
    });

    let resultReturn = 0;

    result.forEach((value) => {
        if (value === 0) resultReturn += 1;
    });

    if ((password.length + resultReturn) < 6) resultReturn += (6 - password.length - resultReturn);

    return resultReturn;
}
