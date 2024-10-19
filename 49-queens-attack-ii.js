// Solution for 49-queens-attack-ii
// Problem URL: https://www.hackerrank.com/challenges/queens-attack-2

/**
 * To solve this we need to find the number of squares that the queen can attack, in each direction.
 * We can do this by checking each direction and counting the number of squares that the queen can attack.
 * We can use a set to store the obstacles, and check if a square is an obstacle before adding it to the count, and breaking the loop if it is.
 */
function queensAttack(n, k, r_q, c_q, obstacles) {
    let dirs = Array(8).fill().map(() => []);
    let obstacleSet = new Set(obstacles.map(obs => `${obs[0]},${obs[1]}`));

    function checkDirection(r_step, c_step, i) {
        let r = r_q + r_step;
        let c = c_q + c_step;
        let temp = [];

        while (r >= 1 && r <= n && c >= 1 && c <= n) {
            if (obstacleSet.has(`${r},${c}`)) break;
            temp.push([r, c]);
            r += r_step;
            c += c_step;
        }

        dirs[i] = temp;
    }

    checkDirection(1, -1, 0);  // up-left
    checkDirection(0, -1, 1);  // left
    checkDirection(-1, -1, 2); // down-left
    checkDirection(-1, 0, 3);  // down
    checkDirection(-1, 1, 4);  // down-right
    checkDirection(0, 1, 5);   // right
    checkDirection(1, 1, 6);   // up-right
    checkDirection(1, 0, 7);   // up

    let result = dirs.reduce((sum, dir) => sum + dir.length, 0);
    return result;
}
