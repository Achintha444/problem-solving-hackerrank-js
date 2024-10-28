// Solution for 64-fair-rations.js
// Problem URL: https://www.hackerrank.com/challenges/fair-rations/problem
/**
 * To solve this problem we need to distribute bread to all people who have odd numbers breads, and if a B[i] received a bread, 
 * then B[i+1] must receive a bread too. We continue this process until we reach the last person. 
 * If the last person has an odd number of breads, we cannot fulfill the initial conditions hence we return "NO", else
 * we return the total number of breads distributed.
 */
function fairRations(B) {
    let result = 0;

    for (let i = 0; i < B.length - 1; i++) {
        if (B[i] % 2 != 0) {
            B[i] += 1;
            B[i + 1] += 1
            result += 2;
        }
    }

    if (B[B.length - 1] % 2 != 0) return "NO";
    return result;
}
