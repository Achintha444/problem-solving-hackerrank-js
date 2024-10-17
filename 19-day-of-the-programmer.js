// Solution for 19-day-of-the-programmer.js
// Problem URL: https://www.hackerrank.com/challenges/day-of-the-programmer

function dayOfProgrammer(year) {
    if (year <= 1917) if (year % 4 === 0) return "12.09." + year; else return "13.09." + year;
    else if (year >= 1919) if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 != 0))) return "12.09." + year; else return "13.09." + year;
    else return "26.09.1918"
}

