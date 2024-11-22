// Solution for 95-fraudulent-activity-notifications
// Problem URL: https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
/**
 * This solution only works for some test cases, for others its timing out. I will try to optimize it later.
 */

function activityNotifications(expenditure, d) {
    let sortedSubArr = [...expenditure].slice(0, d);

    function sortSubArr(removeValue, insertValue) {
        if (removeValue && insertValue) {
            sortedSubArr[sortedSubArr.indexOf(removeValue)] = insertValue;
        }

        sortedSubArr.sort((a, b) => a - b);
    }

    function findMedian(removeValue, insertValue) {
        sortSubArr(removeValue, insertValue);
        if (sortedSubArr.length === 1) return sortedSubArr[0];
        else if (sortedSubArr.length === 2) return (sortedSubArr[0] + sortedSubArr[1]) / 2;
        else if (sortedSubArr.length % 2 === 0) {
            const medianIndex = (sortedSubArr.length / 2);

            return (sortedSubArr[medianIndex - 1] + sortedSubArr[medianIndex]) / 2;
        }
        else return sortedSubArr[Math.floor(sortedSubArr.length / 2)];
    }

    let result = 0;

    for (let i = d; i < expenditure.length; i++) {
        const fMedian = findMedian(expenditure[i - d - 1], expenditure[d - 1]);
        result += ((fMedian * 2) <= expenditure[i]) ? 1 : 0;
    }

    return result;
}
