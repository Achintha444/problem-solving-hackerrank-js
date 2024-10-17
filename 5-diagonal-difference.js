// Solution for 5-diagonal-difference.js
// Problem URL: https://www.hackerrank.com/challenges/diagonal-difference

/**
 * In this question we are given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * The primary diagonal is formed by the elements that are on the diagonal from the top left to the bottom right and
 * the secondary diagonal is formed by the elements that are on the diagonal from the top right to the bottom left.
 * 
 * To find the absolute difference between the sums of the diagonals, we can iterate through the matrix, where
 * we add the elements of the primary diagonal to a variable and the elements of the secondary diagonal to another variable.
 * We can find the elements of the primary diagonal by adding the index of the current row and the index of the current column.
 * We can find the elements of the secondary diagonal by subtracting the index of the current column from the length of the matrix minus 1.
 * Finally, we return the absolute difference between the sums of the diagonals.
 */
function diagonalDifference(arr) {
    let primaryDiagonalCount = 0;
    let secondaryDiagonalCount = arr.length - 1;

    let primaryDiagonalValue = 0;
    let secondaryDiagonalValue = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentArray = arr[i];

        primaryDiagonalValue += currentArray[primaryDiagonalCount];
        secondaryDiagonalValue += currentArray[secondaryDiagonalCount];

        primaryDiagonalCount += 1
        secondaryDiagonalCount -= 1
    }

    return Math.abs(primaryDiagonalValue - secondaryDiagonalValue);
}
