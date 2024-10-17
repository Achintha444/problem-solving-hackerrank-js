// Solution for 13-number-line-jumps.js
// Problem URL: https://www.hackerrank.com/challenges/kangaroo

/**
 * To solve the problem, we need to check if the two kangaroos will land on the same position at the same time. To do this we can 
 * check if the difference in their starting positions is divisible by the difference in their velocities. If it is, then they
 * will land on the same position at the same time, else they won't.
 */
function kangaroo(x1, v1, x2, v2) {
    if (x2 === x1) {
        if (v1 === v2) return "YES";
        return "NO";
    } else {
        if (((x2 < x1) && (v2 <= v1)) || ((x1 < x2) && (v1 <= v2))) return "NO";
        else {
            if ((Math.abs(x2 - x1) % Math.abs(v2 - v1)) === 0) return "YES";
            return "NO";
        }
    }
}
