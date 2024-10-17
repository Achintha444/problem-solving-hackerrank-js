// Solution for 25-cats-and-a-mouse.js
// Problem URL: https://www.hackerrank.com/challenges/cats-and-a-mouse

function catAndMouse(x, y, z) {
    let xz = Math.abs(x - z);
    let yz = Math.abs(y - z);

    if (xz === yz) return "Mouse C";
    else if (xz < yz) return "Cat A";
    return "Cat B";
}
