// Solution for 82-mars-exploration
// Problem URL: https://www.hackerrank.com/challenges/mars-exploration/problem

/**
 * To solve this problem, we need to count the number of SOS message. Then we need to
 * compare the expected SOS message with the actual message. If there is a mismatch,
 * we increment the counter. Finally, we return the counter.
 */
function marsExploration(s) {
    const sosCount = s.length / 3;
    const orgSos = ("SOS".repeat(sosCount)).split("");
    return s.split("").reduce(
        (accumulator, currentValue, index) => {
            if (currentValue != orgSos[index]) accumulator += 1;
            return accumulator;
        }, 0
    );
}
