// Solution for 41-append-and-delete.js
// Problem URL: https://www.hackerrank.com/challenges/append-and-delete

function appendAndDelete(s, t, k) {
    let sArray = s.split("");
    let tArray = t.split("");
    let current = 0;

    if (k >= sArray.length + tArray.length) return "Yes";

    for (let i = 0; i < tArray.length; i++) {
        if (!sArray[i] || sArray[i] != tArray[i]) {
            current = i;
            break;
        }
        if (i === tArray.length - 1) current = i + 1;
    }

    let result = k - (Math.abs(current - sArray.length) + Math.abs(current - tArray.length));

    return (result >= 0 && result % 2 === 0) ? "Yes" : "No";
}
