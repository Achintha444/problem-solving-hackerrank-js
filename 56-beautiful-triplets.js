// Solution for 56-beautiful-triplets problem
// Problem URL: https://www.hackerrank.com/challenges/beautiful-triplets/problem

/**
 * To solve this we need to create a map that consists of occurrence of each number in the array. 
 * Then we need to iterate through the array and check if the two numbers that can produce the given situation is present in the map,
 * if yes then increment the count with multiplication of their occurrence.
 */
function beautifulTriplets(d, arr) {
    let tripletCount = 0;
    const numFreq = new Map();

    // Create frequency map in one pass
    for (const num of arr) {
        numFreq.set(num, (numFreq.get(num) || 0) + 1);
    }

    // For each number, check if it's the start of a beautiful triplet
    for (const num of numFreq.keys()) {
        const mid = num + d;
        const last = mid + d;

        if (numFreq.has(mid) && numFreq.has(last)) {
            tripletCount += numFreq.get(num) * numFreq.get(mid) * numFreq.get(last);
        }
    }

    return tripletCount;
}
