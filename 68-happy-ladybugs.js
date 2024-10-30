// Solution for 68-happy-ladybugs problem
// Problem URL: https://www.hackerrank.com/challenges/happy-ladybugs/problem
/**
 * To solve this problem we need to first check the occurrences of each character in the string.
 * Then we split the code into two halves depending on whether the string contains an underscore or not.
 * If the string contains an underscore, we need to check if there is any character that occurs only once, if 
 * there is then the answer is "NO" otherwise it is "YES".
 * If the string does not contain an underscore, we need to check if the characters are satisfy the 
 * condition that each character should be surrounded by the same character, if they do then the answer is "YES" otherwise it is "NO".
 */
function happyLadybugs(b) {
    let bMap = new Map();
    b = b.split("");

    b.forEach((value) => {
        if (bMap.get(value)) bMap.set(value, bMap.get(value) + 1)
        else bMap.set(value, 1);
    });

    if (bMap.get("_")) {
        bMap.delete("_");

        let check = true;
        for (let [key, value] of bMap) {
            if (value === 1) {
                check = false;
                break;
            }
        }
        if (check) return "YES";
        return "NO"
    }

    let currentValue = b[0];
    let currentValueCounter = 1;

    for (let i = 1; i < b.length; i++) {
        if (b[i] === currentValue) currentValueCounter += 1
        else {
            if (currentValueCounter === 1) break;
            else {
                currentValue = b[i];
                currentValueCounter = 1;
            }
        }
    }

    if (currentValueCounter === 1) return "NO"
    else return "YES"
}
