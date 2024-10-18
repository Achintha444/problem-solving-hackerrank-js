// Solution for 47-jumping-on-the-clouds.js
// Problem URL: https://www.hackerrank.com/challenges/jumping-on-the-clouds

/**
 * To solve this we need to find the maximum occurances of a number and reduce the occuranecs from the length of the array.
 * To find the maximum occurances we can use a map and store the number as the key and the occurances as the value.
 */
function equalizeArray(arr) {
    let arrMap = new Map();
    
    arr.forEach((value)=>{
        if(arrMap.get(value)) arrMap.set(value, arrMap.get(value)+1)
        else arrMap.set(value, 1);
    });
    
    let maxValue = 0;
    
    for (let [key, value] of arrMap) {
        if (value > maxValue) maxValue = value
    }
    
    return arr.length - maxValue;
}
