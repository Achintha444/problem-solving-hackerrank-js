// Solution for 27-picking-numbers.js
// Problem URL: https://www.hackerrank.com/challenges/picking-numbers

function pickingNumbers(a) {
    a = a.sort((s, b) => s - b);
    let ans = [];

    for (let i = 0; i < a.length - 1; i++) {
        let tempAns = [a[i]];
        for (let j = (i + 1); j < a.length; j++) {
            let check = true;
            for (let k = 0; k < tempAns.length; k++) {
                if (Math.abs(tempAns[k] - a[j]) > 1) {
                    check = false;
                    break;
                }
            }
            if (check) tempAns.push(a[j]);
            else break;
        }
        if (tempAns.length > ans.length) ans = tempAns;
    }

    return ans.length;
}
