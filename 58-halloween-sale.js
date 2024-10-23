// Solution for 58-halloween-sale
// Problem URL: https://www.hackerrank.com/challenges/halloween-sale/problem

/**
 * To solve this we need to keep track of the current price of the game and the current amount of money we have.
 * We need to keep buying the game until we can't afford it anymore, we can use a while loop for this.
 */
function howManyGames(p, d, m, s) {
    let result = 0;
    let current = s;
    let currentGame = p;

    while (currentGame <= current) {
        console.log(currentGame);
        result += 1;
        current -= currentGame;

        if (currentGame > m) {
            currentGame -= d;
            if (currentGame < m) currentGame = m;
        }
    }
    return result;
}
