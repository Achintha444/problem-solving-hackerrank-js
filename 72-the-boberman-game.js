// Solution for 72-the-boberman-game problem
// Problem URL: https://www.hackerrank.com/challenges/absolute-permutation/problem

function bomberMan(n, grid) {
    if (n === 1) return grid;
    if (n % 2 === 0) return grid.map(row => "O".repeat(row.length));

    let matrix = grid.map(row => row.split(""));
    const R = matrix.length;
    const C = matrix[0].length;

    // Function to detonate bombs and return new state
    function detonate(grid) {
        let result = Array(R).fill().map(() => Array(C).fill("O"));

        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                if (grid[i][j] === "O") {
                    result[i][j] = ".";
                    if (i + 1 < R) result[i + 1][j] = ".";
                    if (i - 1 >= 0) result[i - 1][j] = ".";
                    if (j + 1 < C) result[i][j + 1] = ".";
                    if (j - 1 >= 0) result[i][j - 1] = ".";
                }
            }
        }
        return result;
    }

    // The pattern repeats every 4 seconds after initial state
    // n = 1: Initial state
    // n = 2: All bombs
    // n = 3: First detonation
    // n = 4: All bombs
    // n = 5: Second detonation (same as n = 1)
    // and so on...

    n = n % 4;
    if (n === 3) {
        // First detonation
        matrix = detonate(matrix);
    } else if (n === 1) {
        // Second detonation (occurs when n % 4 = 1, except for n = 1)
        matrix = detonate(detonate(matrix));
    }

    return matrix.map(row => row.join(""));
}