// Solution for 24-electronics-shop.js
// Problem URL: https://www.hackerrank.com/challenges/electronics-shop

function getMoneySpent(keyboards, drives, b) {
    let keyboardsSort = keyboards.sort(function (a, b) {
        return b - a;
    });
    let drivesSort = drives.sort(function (a, b) {
        return b - a;
    });

    let newKeyboardsSort = [...keyboardsSort];
    let newDrivesSort = [...drivesSort];

    keyboardsSort.forEach((value) => {
        if (value >= b) newKeyboardsSort.splice(newKeyboardsSort.indexOf(value), 1);
    });

    drivesSort.forEach((value) => {
        if (value >= b) newDrivesSort.splice(newDrivesSort.indexOf(value), 1);
    });

    if (keyboardsSort.length === 0 || drivesSort.length === 0) return "-1"

    let maxValue = -1;

    for (let i = 0; i < newDrivesSort.length; i++) {
        for (let j = 0; j < newKeyboardsSort.length; j++) {

            if (i > Math.ceil(newDrivesSort.length / 1.2) && j > Math.ceil(newKeyboardsSort.length / 1.2)) {
                if (maxValue != -1) return maxValue;
            }

            let value = newDrivesSort[i] + newKeyboardsSort[j];
            if (value === b) return b;
            if (value < b && maxValue < value) maxValue = value;
        }
    }

    return maxValue;
}
