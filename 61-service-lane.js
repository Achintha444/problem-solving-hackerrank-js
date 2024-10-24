// Solution for 61-service-lane.js
// Problem URL: https://www.hackerrank.com/challenges/service-lane/problem

/**
 * To solve this problem we need to get the minimum width of the road for each case.
 * We can do this by getting the minimum value of the slice of the width array from the start to the end of the case.
 * Other than that we need to pass `width` as a parameter to the function, which is missing, you can add that by editing the
 * main function.
 */
function serviceLane(width, cases) {
    return cases.map((value) => Math.min(...[...width].slice(value[0], value[1] + 1)));
}
