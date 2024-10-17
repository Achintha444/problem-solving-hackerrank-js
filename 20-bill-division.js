// Solution for 20-bill-division.js
// Problem URL: https://www.hackerrank.com/challenges/bon-appetit

function bonAppetit(bill, k, b) {
    let btotal = 0;

    bill.forEach((value) => btotal += value);

    btotal -= bill[k];

    if ((btotal / 2) === b) console.log("Bon Appetit");
    else console.log((b - (btotal / 2)));
}
