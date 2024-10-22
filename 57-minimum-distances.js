// Solution for 57-minimum-distances.js
// Problem URL: https://www.hackerrank.com/challenges/minimum-distances/problem

/**
 * To solve this we need to create a map that consists of occurrence of each number in the array. 
 * Then we need to iterate through the map and then again loop through the indexes array to check the minimum
 * distance between the same numbers. If it is less than the current result then update the result. Also if the result is 1 we can
 * safely break the loop as it is the only possible minimum distance.
 */
function minimumDistances(a) {
    let aMap = new Map();
    let result = Infinity;

    a.map((value, index) => {
        if (aMap.get(value)) aMap.get(value).push(index)
        else aMap.set(value, [index])
    });

    for (let [key, value] of aMap) {
        if (value.length == 1) continue;

        if (value.length === 2) {
            if (result > (value[1] - value[0])) result = value[1] - value[0];
        } else {
            for (let j = 0; j < value.length - 1; j++) {
                for (let k = j + 1; k < value.length; k++) {
                    const x = value[k] - value[j];
                    if (result > x) {
                        result = x;
                        if (result === 1) break;
                    }
                }
                if (result === 1) break;
            }
        }

        if (result === 1) break;
    }

    return result === Infinity ? "-1" : result;
}
