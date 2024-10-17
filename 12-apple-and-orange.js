// Solution for 12-apple-and-orange.js
// Problem URL: https://www.hackerrank.com/challenges/apple-and-orange

/**
 * To solve this problem we need to check if the distance of the fruit from the tree is between the start and end of the house.
 * To do this we need to add the distance of the fruit to the position of the tree, and check if the result is between the start and end of the house.
 */
function checkCount(fruits, s, t, treePosition) {
    let fruitsCount = 0;

    fruits.forEach((fruitDistance) => {
        let distance = fruitDistance + treePosition;
        if (distance >= s && distance <= t) fruitsCount += 1
    });

    return fruitsCount;
}

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(checkCount(apples, s, t, a));
    console.log(checkCount(oranges, s, t, b));
}
