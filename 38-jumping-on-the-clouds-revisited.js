// Solution for 38-jumping-on-the-clouds-revisited.js
// Problem URL: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited

function jumpingOnClouds(c, k) {
    let nextJump = k % c.length;
    let energy = 100;
    let check = true
    while (check) {
        energy -= 1;
        if (c[nextJump] === 1) energy -= 2;

        if (nextJump === 0) check = false;

        nextJump = (nextJump + k) % c.length;
    }

    return energy;
}
