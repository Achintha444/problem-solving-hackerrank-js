// Solution for 63-flatland-space-stations
// Problem URL: https://www.hackerrank.com/challenges/flatland-space-stations/problem
/**
 * To solve this problem we need to find the minimum distance between each city and the nearest space station.
 * We can do this by iterating through each city and finding the minimum distance to any space station.
 * We then keep track of the maximum of these minimum distances, which will be our answer.
 */
function flatlandSpaceStations(n, c) {
    let result = 0;

    for (let i = 0; i < n; i++) {
        let currentMin = Infinity;
        c.forEach((value) => {
            if (Math.abs(value - i) < currentMin) currentMin = Math.abs(value - i)
        })
        if (currentMin > result) result = currentMin;
    }

    return result;
}
