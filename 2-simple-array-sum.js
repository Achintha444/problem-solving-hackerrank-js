/**
 * In this question, it asks to return the sum of all the elements in the array. 
 * We can use the forEach method to iterate through the array and add each element to a count variable.
 */
function simpleArraySum(ar) {
    let count = 0;
    ar.forEach((value) => count = count + value)
    return count;
}
