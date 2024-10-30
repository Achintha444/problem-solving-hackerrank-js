// Solution for 69-strange-counter
// Problem URL: https://www.hackerrank.com/challenges/strange-counter/problem
/**
 * To solve this problem we need to track the time where value is 1, and check if that time is greater than given "t".
 * When it is greater than "t", we return the value of "t" - time + 1.
 */
function strangeCounter(t) {
    let time = 3;
    let value = 3;

    while (t > time) {
        time += (value * 2);
        value *= 2;
    }

    return time - t + 1;
}
