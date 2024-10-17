// Solution for 11-grading-students.js
// Problem URL: https://www.hackerrank.com/challenges/grading

/**
 * To solve this problem we need to check if the grade is less than 38 or if it is a multiple of 5 and then return the grade as it is. After that,
 * we need to check if the grade is not a multiple of 5 and if the difference between the next multiple of 5 and the grade is less than 3, 
 * then we need to return the next multiple of 5.
 */
function gradingStudents(grades) {
    let realGrades = []
    grades.forEach((grade) => {
        if ((grade < 38) || (grade % 5 === 0)) realGrades.push(grade);
        else {
            let nextMultiple = 5 * (Math.floor(grade / 5) + 1);
            if ((nextMultiple - grade) < 3) realGrades.push(nextMultiple);
            else realGrades.push(grade);
        }
    });

    return realGrades;
}
