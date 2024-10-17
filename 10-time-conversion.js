// Solution for 10-time-conversion.js
// Problem URL: https://www.hackerrank.com/challenges/time-conversion

/**
 * To solve this problem we need to check if the time is AM or PM and then convert it accordingly.
 * To find if the given time is AM or PM we can check the last two characters of the string.
 * If the last two characters are "AM" and the first two characters are "12" then we need to change the first two characters to "00".
 * Then we need to check if the last two characters are "PM" and the first two characters are not "12" then we need to add 12 to the first two characters.
 */
function timeConversion(s) {
    let ampm = s.substr(s.length - 2);
    let time = s.substr(0, s.length - 2);
    let timeArray = time.split(":");

    if (ampm === "AM") {
        if (timeArray[0] === "12") {
            timeArray[0] = "00"
        }
    } else {
        if (timeArray[0] !== "12") {
            timeArray[0] = (parseInt(timeArray[0], 10) + 12).toLocaleString()
        }
    }

    return timeArray.join(":");
}
