// Solution for 22-drawing-book.js
// Problem URL: https://www.hackerrank.com/challenges/drawing-book

function pageCount(n, p) {
    if (n===p || p===1) return "0";    
    let pPage = p-(Math.ceil(p/2));
    let nPage = n-(Math.ceil(n/2));
    
    return Math.min((nPage-pPage), pPage)
}
