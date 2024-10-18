// Solution for 47-jumping-on-the-clouds.js
// Problem URL: https://www.hackerrank.com/challenges/jumping-on-the-clouds

/**
 * To solve this we need to start from the second index of the array and check if the first two indexes are 0, else we move to the first index.
 * We keep doing this until we reach the last index of the array.
 * We increment the result by 1 each time we move to the next index.
 * Here we need to assume that this race can be successfully completed and there will be no consecutive 1s in the array.
 */
function jumpingOnClouds(c) {
    let currentIndex = c[2] === 0 ? 2 : 1;
    let result = 1;
    
    while (currentIndex < (c.length - 1))  {
        if (c[currentIndex + 2] === 0) currentIndex +=2
        else currentIndex+=1
        
        result+=1
    }
    
    return result;
}
