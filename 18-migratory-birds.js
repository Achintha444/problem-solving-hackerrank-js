// Solution for 18-migratory-birds.js
// Problem URL: https://www.hackerrank.com/challenges/migratory-birds

function migratoryBirds(arr) {
    let max = 0;
    let arrResult = [0, 0, 0, 0, 0];

    arr.forEach((value) => {
        arrResult[(value - 1)] += 1;
        if (max < arrResult[(value - 1)]) max = arrResult[(value - 1)]
    });

    for (let i = 0; i < 5; i++) {
        if (max === arrResult[i]) return (i + 1);
    }
}
