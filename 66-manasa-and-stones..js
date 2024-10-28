// Solution for 66-manasa-and-stones problem
// Problem URL: https://www.hackerrank.com/challenges/manasa-and-stones/problem
/**
 * To solve this problem we need to first find the min and max value between a and b. 
 * Then we calculate the min value by multiplying minA with (n-1) 
 * and the max value by multiplying maxB with (n-1), these will be the starting and ending values respectively.
 * Then we calculate the difference between maxB and minA and add it to the current value until we reach the max value.
 */
function stones(n, a, b) {
    let minA = (a < b) ? a : b;
    let maxB = (a >= b) ? a : b;
    let minValue = minA * (n - 1);
    let maxValue = maxB * (n - 1);

    let result = [minValue];
    let currentValue = minValue;

    while (currentValue < maxValue) {
        currentValue = currentValue + Math.abs(b - a);
        result.push(currentValue);
    }

    return result;
}
