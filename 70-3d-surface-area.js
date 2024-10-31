// Solution for 70-3d-surface-area problem
// Problem URL: https://www.hackerrank.com/challenges/3d-surface-area/problem
/**
 * To solve this problem we need to find the surface area of the 3d shape. We first need to find the area of the 6 sides.
 * Then need to find the area of the bumps. Bumps are in two directions, so we need to find the bumps in both directions.
 * Then we add all the areas to get the total surface area.
 */
function surfaceArea(A) {
    let result = (A.length * A[0].length) * 2; // 2 for top and bottom
    result += A[0].reduce((acc, value) => acc + value); // left side
    result += A[A.length - 1].reduce((acc, value) => acc + value); // right side


    A.forEach((value) => {
        result += value[value.length - 1]; // front side
        result += value[0]; // back side
        for (let i = 1; i < value.length; i++) result += Math.abs(value[i] - value[i - 1]); // surface area in one direction
    });

    for (let i = 0; i < A[0].length; i++) {
        for (let j = 1; j < A.length; j++) result += Math.abs(A[j][i] - A[j - 1][i]); // surface are in other direction
    }

    return result;
}
