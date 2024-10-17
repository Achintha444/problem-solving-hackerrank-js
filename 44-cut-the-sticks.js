// Solution for 44-cut-the-sticks.js
// Problem URL: https://www.hackerrank.com/challenges/cut-the-sticks

function cutTheSticks(arr) {
    let currentMin = Math.min(...arr);
    let result = [];
    while (currentMin < Infinity) {
        let sticksCut = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < Infinity) {
                let x = arr[i] - currentMin;
                if (x === 0) arr[i] = Infinity;
                else arr[i] = x;

                sticksCut += 1
            }
        }
        result.push(sticksCut);
        currentMin = Math.min(...arr);
    }

    return result;
}
