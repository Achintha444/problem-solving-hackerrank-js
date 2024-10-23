// Solution for 59-the-time-in-words
// Problem URL: https://www.hackerrank.com/challenges/the-time-in-words/problem

/**
 * To solve this we need to keep the words for each number from 1 to 30 in a map, then we can use
 * that map to get the words for the current hour and the current minutes. We divide the code into based on
 * m<=30 and m>30, because the time is different for each case.
 */
function timeInWords(h, m) {
    const time = new Map([
        [1, "one"],
        [2, "two"],
        [3, "three"],
        [4, "four"],
        [5, "five"],
        [6, "six"],
        [7, "seven"],
        [8, "eight"],
        [9, "nine"],
        [10, "ten"],
        [11, "eleven"],
        [12, "twelve"],
        [13, "thirteen"],
        [14, "fourteen"],
        [15, "quarter"],
        [16, "sixteen"],
        [17, "seventeen"],
        [18, "eighteen"],
        [19, "nineteen"],
        [20, "twenty"],
        [21, "twenty one"],
        [22, "twenty two"],
        [23, "twenty three"],
        [24, "twenty four"],
        [25, "twenty five"],
        [26, "twenty six"],
        [27, "twenty seven"],
        [28, "twenty eight"],
        [29, "twenty nine"],
        [30, "half"]
    ]);

    if (m === 0) return `${time.get(h)} o' clock`
    if (m === 1) return `${time.get(m)} minute past ${time.get(h)}`

    let minutes = " minutes";

    if (m === 15 || m === 30 || m === 45) minutes = "";

    if (m <= 30) return `${time.get(m)}${minutes} past ${time.get(h)}`

    h = h != 12 ? h + 1 : 1;

    return `${time.get(60 - m)}${minutes} to ${time.get(h)}`
}
