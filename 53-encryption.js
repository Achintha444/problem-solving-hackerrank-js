// Solution for 53-encryption.js
// Problem URL: https://www.hackerrank.com/challenges/encryption/problem

/**
 * To solve this we need first find out the string without spaces and then calculate the row and column sizes to the given
 * constraints. In here if the (row*col) is less than the string length, we need to always increase the row size by 1, because
 * row is less than or equal to column size. Then need to loop through the string, where the first loop is the column and the next
 * loop is the row.
 */
function encryption(s) {
    let sNew = s.split(" ").join("");
    let row = Math.floor(Math.sqrt(sNew.length))
    let col = Math.ceil(Math.sqrt(sNew.length))

    if (row * col < sNew.length) row += 1;

    let result = [];

    for (let iCol = 0; iCol < col; iCol++) {
        let temp = sNew[iCol];
        let nextRow;

        if (row === col) nextRow = iCol + row;
        else nextRow = iCol + row + 1;

        while (nextRow < sNew.length) {
            temp += (sNew[nextRow]);

            if (row === col) nextRow += row;
            else nextRow += (row + 1);
        }

        result.push(temp);
    }

    return result.join(" ");
}
