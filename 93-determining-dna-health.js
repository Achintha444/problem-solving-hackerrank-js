// Solution for 93-determining-dna-health.js
// Problem URL: https://www.hackerrank.com/challenges/determining-dna-health/problem?isFullScreen=true

/**
 * This solution only works for some test cases, for others its timing out. I will try to optimize it later.
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function dnaHealth(genes, health, first, last, d) {
    let result = 0;
    const checkGenes = [...genes].slice(first, last + 1);
    const checkHealth = [...health].slice(first, last + 1);
    const storeSubStrMap = new Map();

    function countOverlappingSubstrings(str, subStr) {
        let count = 0;
        const subStrLength = subStr.length;

        if (!str.includes(subStr)) return 0;

        if (storeSubStrMap.get(subStrLength))
            return storeSubStrMap.get(subStrLength).get(subStr) ? storeSubStrMap.get(subStrLength).get(subStr) : 0;

        const lenSubStrMap = new Map();

        for (let i = 0; i <= str.length - subStrLength; i++) {
            const subStrSlice = str.slice(i, i + subStrLength);

            if (lenSubStrMap.get(subStrSlice)) lenSubStrMap.set(subStrSlice, lenSubStrMap.get(subStrSlice) + 1);
            else lenSubStrMap.set(subStrSlice, 1);

            if (subStrSlice === subStr) count++;
        }

        storeSubStrMap.set(subStrLength, lenSubStrMap)

        return count;
    }

    checkGenes.forEach((gene, index) => {
        result += (countOverlappingSubstrings(d, gene) * checkHealth[index]);
    });

    return result;
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const genes = readLine().replace(/\s+$/g, '').split(' ');

    const health = readLine().replace(/\s+$/g, '').split(' ').map(healthTemp => parseInt(healthTemp, 10));

    const s = parseInt(readLine().trim(), 10);

    let currentMin = Infinity;
    let currentMax = 0;

    for (let sItr = 0; sItr < s; sItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const first = parseInt(firstMultipleInput[0], 10);

        const last = parseInt(firstMultipleInput[1], 10);

        const d = firstMultipleInput[2];

        const currentDnaHealth = dnaHealth(genes, health, first, last, d);

        if (currentDnaHealth < currentMin) currentMin = currentDnaHealth;
        if (currentDnaHealth > currentMax) currentMax = currentDnaHealth;
    }

    console.log(`${currentMin} ${currentMax}`);
}
