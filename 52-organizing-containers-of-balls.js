// Solution for 52- organizing-containers-of-balls
// Problem URL: https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem

/**
 * To solve this we need find if the containers have the same amount of balls, as the types. If they do, we return "Possible", otherwise "Impossible".
 */
function organizingContainers(container) {
    let types = Array(container.length).fill(0);
    let containerSize = Array(container.length).fill(0);

    container.map((value, index) => {
        containerSize[index] = value.reduce((a, b) => a + b, 0);
        value.map((temp, j) => {
            types[j] += temp;
        });
    });

    containerSize.sort();
    types.sort();

    for (let i = 0; i < containerSize.length; i++)
        if (containerSize[i] != types[i])
            return "Impossible";

    return "Possible";
}

