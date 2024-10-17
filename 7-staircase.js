// Solution for 7-staircase.js
// Problem URL: https://www.hackerrank.com/challenges/staircase

/**
 * We can solve this by using a loop and printing the spaces and hashes in the correct order, where we keep the 
 * count of spaces and hashes and decrease the space count and increase the hash count in each iteration.
 */
function staircase(n) {
    let spaceCount = n-1
    let hashCount = 1
    
    for (let i=1; i<=n; i++) {
        console.log((" ".repeat(spaceCount))+("#".repeat(hashCount)));
        spaceCount-=1
        hashCount+=1
    }
}
