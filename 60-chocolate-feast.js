// Solution for 60-chocolate-feast
// Problem URL: https://www.hackerrank.com/challenges/chocolate-feast/problem

/**
 * To solve this problem we need to calculate the number of chocolates that can be bought with the given amount of money.
 * Then we need to calculate the number of wrapers that can be obtained by eating the chocolates. We need to then
 * calculate the number of chocolates that can be bought with the wrapers. We need to repeat this process until we have
 * less than m wrapers.
 */
function chocolateFeast(n, c, m) {
    let result = Math.floor(n / c);

    if (result < m) return result;
    if (result === m) return result + 1;

    let wrapers = result;

    while (wrapers >= m) {
        result += Math.floor(wrapers / m);
        wrapers = Math.floor(wrapers / m) + (wrapers % m)
    }

    return result;
}
