// Solution for 3-compare-the-triplets.js
// Problem URL: https://github.com/Achintha444/problem-solving-hackerrank-js/blob/main/3-compare-the-triplets.js

/**
 * The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
    If a[i] > b[i], then Alice is awarded 1 point.
    If a[i] < b[i], then Bob is awarded 1 point.
    If a[i] = b[i], then neither person receives a point.
 * We can use a for loop to iterate through the questions and compare the values of a and b, and keep track of the scores for Alice and Bob in
 * separate variables `aliceCount` and `bobCount`. We can then return the scores as a string in the format "aliceCount bobCount".
 */
function compareTriplets(a, b) {
    let questionCount = a.length;
    
    let aliceCount = 0;
    let bobCount = 0;
    
    for (let i = 0; i < questionCount; i++) {
        if (a[i]>b[i]) aliceCount+=1;
        else if (a[i]<b[i]) bobCount+=1;
    }
    
    return aliceCount+" "+bobCount;
}

