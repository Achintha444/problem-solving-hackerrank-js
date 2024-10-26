// Solution for 62-lisa-workbook
// Problem URL: https://www.hackerrank.com/challenges/lisa-workbook/problem
/**
 * To solve this problem we need to iterate over the chapters and pages, and check if the page number is the same as the question number.
 * If it is, we increment the result. To increment the page number, we need to check if the current question number is a multiple of k.
 * If it is, we increment the page number, also it should be increase when a chapter is changed only if the last question of the 
 * chapter is not a multiple of k. Finally we return the result.
 */
function workbook(n, k, arr) {
    let result = 0;
    let currentPage = 1;
    let currentChapter = 0;

    while (currentChapter < n) {
        let chapterQ = 1;
        while (arr[currentChapter] >= chapterQ) {
            if (chapterQ === currentPage) result += 1;
            if ((chapterQ % k) === 0) currentPage += 1;
            chapterQ += 1
        }
        currentChapter += 1
        if (((chapterQ - 1) % k) !== 0) currentPage += 1;
    }

    return result;
}
