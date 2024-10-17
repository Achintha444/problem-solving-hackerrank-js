// Solution for 43-library-fine.js
// Problem URL: https://www.hackerrank.com/challenges/library-fine

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) return 10000;
    else if (y1 < y2) return 0;
    else if (m1 > m2) return 500 * (m1 - m2);
    else if (m1 < m2) return 0;
    return 15 * (d1 - d2) >= 0 ? 15 * (d1 - d2) : 0;
}
