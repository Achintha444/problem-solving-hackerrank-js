// Solution for 21-sales-by-match.js
// Problem URL: https://www.hackerrank.com/challenges/sock-merchant

function sockMerchant(n, ar) {
    const arMap = new Map();

    ar.forEach((value) => {
        if (arMap.has(value)) arMap.set(value, arMap.get(value) + 1);
        else arMap.set(value, 1);
    });

    let total = 0;

    arMap.forEach((value) => total += Math.floor(value / 2));

    return total;
}
