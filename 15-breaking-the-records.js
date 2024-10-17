// Solution for 15-breaking-the-records.js
// Problem URL: https://www.hackerrank.com/challenges/breaking-best-and-worst-records

function breakingRecords(scores) {
    let highCount = 0;
    let lowCount = 0;
    let max = scores[0];
    let min = scores[0];

    for (let i = 1; i < scores.length; i++) {
        let score = scores[i];

        if (max < score) {
            max = score;
            highCount += 1;
        } else if (min > score) {
            min = score;
            lowCount += 1;
        }
    }

    return [highCount, lowCount];
}
