// Solution for 23-counting-valleys.js
// Problem URL: https://www.hackerrank.com/challenges/counting-valleys

function countingValleys(steps, path) {
    let pathStack = [path[0]];
    let valleys = 0;

    for (let i = 1; i < steps; i++) {
        if (pathStack[pathStack.length - 1] && pathStack[pathStack.length - 1] != path[i]) {
            let ud = pathStack.pop();
            if ((ud === "D") && (pathStack.length === 0)) valleys += 1
        } else pathStack.push(path[i]);
    }

    return valleys;
}
