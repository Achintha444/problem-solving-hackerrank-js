// Solution for 50 - ACM ICPC Team
// Problem URL: https://www.hackerrank.com/challenges/acm-icpc-team/problem

/**
 * To solve this we need to find the bitwise or of each pair of topics, and count the number of ones in the result, and if
 * it is greater than the current maximum, update the maximum and reset the result to 1, if it is equal to the current
 * maximum, increment the result by 1.
 * 
 * We cannot use direct bitwise or operation due to limitation of JavaScript.
 */
function acmTeam(topic) {
    let result = 0;
    let maxTopics = 0;
    
    function bitwiseOrStrings(a, b) {
        let result = '';
        for (let i = 0; i < a.length; i++) {
            result += (a[i] === '1' || b[i] === '1') ? '1' : '0';
        }
        return result;
    }

    function countOnes(str) {
        return str.split('1').length - 1;
    }
    
    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let bitwise_or = bitwiseOrStrings(topic[i], topic[j]);
            let ones = countOnes(bitwise_or);
            
            if (ones > maxTopics) {
                result = 1;
                maxTopics = ones; 
            } else if (ones === maxTopics) {
                result += 1;
            }
        }
    }
    
    return [maxTopics, result];
}
