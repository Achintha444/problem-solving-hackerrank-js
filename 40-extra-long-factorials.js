// Solution for 40-extra-long-factorials.js
// Problem URL: https://www.hackerrank.com/challenges/extra-long-factorials

function extraLongFactorials(n) {
    let factorial = BigInt(1);
    for (let i = 1; i <= n; i++) factorial *= BigInt(i);
    console.log(factorial.toString().replace("n", ""));
}
