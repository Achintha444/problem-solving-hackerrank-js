// Solution for 80-insertion-sort-part-2
// Problem URL: https://www.hackerrank.com/challenges/insertion-sort-part-2/problem

/**
 * To solve this problem, we will use the insertion sort algorithm as mentioned in the description of the question.
 */
function insertionSort2(n, arr) {
    function insertionSort(newArray, index) {
        for (let i = index; i > 0; i--) {
            const current = newArray[i];
            if (newArray[i - 1] > current) {
                newArray[i] = newArray[i - 1];
                newArray[i - 1] = current;
            }
        }

        return newArray;
    }

    for (let i = 1; i < n; i++) {
        arr = insertionSort(arr, i);
        console.log(arr.join(" "));
    }
}
