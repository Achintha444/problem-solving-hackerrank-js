// Solution for 28-climbing-the-leaderboard.js
// Problem URL: https://www.hackerrank.com/challenges/climbing-the-leaderboard

function climbingLeaderboard(ranked, player) {
    const uniqueRanked = [...new Set(ranked)];
    const result = [];
    let rankIndex = uniqueRanked.length - 1;

    for (const score of player) {
        while (rankIndex >= 0 && score >= uniqueRanked[rankIndex]) {
            rankIndex--;
        }
        result.push(rankIndex + 2);
    }

    return result;
}
