// Solution for 36-circular-array-rotation.js
// Problem URL: https://www.hackerrank.com/challenges/circular-array-rotation

function circularArrayRotation(a, k, queries) {
    let resultA = Array(a.length).fill(0);
    let remain = k % a.length;
    let result = [];

    for (let i = 0; i < a.length; i++) {
        let value = (i + remain) % a.length;
        resultA[value] = a[i];
    }

    queries.forEach((value) => {
        result.push(resultA[value]);
    });

    return result;
}
