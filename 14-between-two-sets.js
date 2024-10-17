// Solution for 14-between-two-sets.js
// Problem URL: https://www.hackerrank.com/challenges/between-two-sets

function gcd(a, b) {
    if (a == 0) return b;
    return gcd(b % a, a);
}

// Function to find gcd of array 
// of numbers 
function findGCD(arr, n) {
    let result = arr[0];
    for (let i = 1; i < n; i++) {
        result = gcd(arr[i], result);

        if (result == 1) return 1;
    }
    return result;
}

const calculateLCM = (arr) => {
    const lcm2 = (a, b) => {
        // Least common multiple of 2 integers
        return a * b / gcd(a, b);
    }
    // Least common multiple of a list of integers
    let n = 1;
    for (let i = 0; i < arr.length; ++i) {
        n = lcm2(arr[i], n);
    }
    return n;
};

function getTotalX(a, b) {
    let lcmA = calculateLCM(a);
    let gcdB = findGCD(b, b.length);

    if (lcmA > gcdB) return 0;
    else if (lcmA === gcdB) return 1;
    else {
        if (gcdB % lcmA === 0) {
            let total = 2;
            let value = gcdB / lcmA;

            for (let i = 2; i <= (value - 1); i++) {
                if ((gcdB % (lcmA * i)) === 0) total += 1
            }

            return total;
        }
        return 0;
    }
}
