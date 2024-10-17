// Solution for 37-sequence-equation.js
// Problem URL: https://www.hackerrank.com/challenges/permutation-equation

function permutationEquation(p) {
    let result = [];

    for (let i = 0; i < p.length; i++) {
        result.push(p.indexOf(p.indexOf(i + 1) + 1) + 1)
    }

    return result;
}
