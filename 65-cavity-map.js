// Solution for 65-cavity-map
// Problem URL: https://www.hackerrank.com/challenges/cavity-map/problem
/**
 * To solve this problem we need to check for each cell in the grid if it is a cavity or not. A cavity is a cell which is surrounded by 4 cells(adjacent) which are less than it.
 * If it is a cavity, we replace it with 'X'. We continue this process for all cells in the grid.
 */
function cavityMap(grid) {
    let result = [];

    if (grid.length <= 2) result = grid;
    else {
        result = [grid[0]];

        for (let i = 1; i < grid.length - 1; i++) {
            let tempResult = grid[i].split("").map((value) => parseInt(value));
            for (let j = 1; j < tempResult.length - 1; j++) {
                if ((tempResult[j] > tempResult[j - 1]) &&
                    (tempResult[j] > tempResult[j + 1]) &&
                    (tempResult[j] > parseInt(grid[i - 1][j])) &&
                    (tempResult[j] > parseInt(grid[i + 1][j])))
                    tempResult[j] = "X"
            }
            result.push(tempResult.join(""));
        }

        result.push(grid[grid.length - 1]);
    }

    return result;
}
