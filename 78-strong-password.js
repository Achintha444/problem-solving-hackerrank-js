// Solution for 77-insertion-sort-part-1.js
// Problem URL: https://www.hackerrank.com/challenges/insertionsort1/problem?isFullScreen=true

/**
 * To solve this problem, we need to iterate from the last element of the array to the first element.
 * We also need to store the last element in a variable. Then, we need to compare the last element with the previous elements, 
 * and if the previous element is greater than the last element, we need to shift the previous element to the right. Continued
 * until we find an element that is less than or equal to the last element. Finally, we need to insert the last element at the
 * correct position. But if the last element is less than the first element, we need to insert it at the first position, we can 
 * check 
 */
function minimumNumber(n, password) {
    const numbers = "0123456789".split("");
    const lower_case = "abcdefghijklmnopqrstuvwxyz".split("");
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const special_characters = "!@#$%^&*()-+".split("");

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
