// Solution for 34-viral-advertising.js
// Problem URL: https://www.hackerrank.com/challenges/strange-advertising

function viralAdvertising(n) {
    let shared = 5;
    let liked = 2;
    let cum = 2;

    for (let i = 2; i <= n; i++) {
        shared = liked * 3;
        liked = Math.floor(shared / 2);
        cum += liked;
    }

    return cum;
}
