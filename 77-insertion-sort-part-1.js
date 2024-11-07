// Solution for 77-insertion-sort-part-1.js
// Problem URL: https://www.hackerrank.com/challenges/insertionsort1/problem?isFullScreen=true

/**
 * To solve this problem, we need to iterate from the last element of the array to the first element.
 * We also need to store the last element in a variable. Then, we need to compare the last element with the previous elements, 
 * and if the previous element is greater than the last element, we need to shift the previous element to the right. Continued
 * until we find an element that is less than or equal to the last element. Finally, we need to insert the last element at the
 * correct position. But if the last element is less than the first element, we need to insert it at the first position, we can 
 * check 
 */
function insertionSort1(n, arr) {
    const arrLen = arr.length;
    const notSortedVar = arr[arrLen - 1];

    for (let i = arrLen - 2; i >= -1; i--) {
        if (i === -1) {
            arr[0] = notSortedVar;
            break;
        }
        if (arr[i] >= notSortedVar) {
            arr[i + 1] = arr[i];
        }
        else {
            arr[i + 1] = notSortedVar;
            break;
        }
        console.log(arr.join(" "));
    }

    console.log(arr.join(" "));
}
