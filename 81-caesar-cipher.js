// Solution for 81-caesar-cipher.js
// Problem URL: https://www.hackerrank.com/challenges/caesar-cipher-1/problem

/**
 * To solve this problem, we first need to find the alphabet that is shifted by k positions. To do that we need to get the remainder
 * of k divided by 26. Then we need to create a new alphabet with the shifted letters. After that, we need to iterate over the string and
 * replace the letters with the shifted letters. If the letter is not in the original alphabet, we need to leave it as it is. Finally, we need
 * to return the new string.
 */
function caesarCipher(s, k) {
    const orrAlp = "abcdefghijklmnopqrstuvwxyz".split("");

    function rotateAlp(alp, k) {
        return alp.map((letter, index) => {
            k = k % 26;
            let newIndex = (index + k >= 26) ? index + k - 26 : index + k;
            return alp[newIndex];
        });
    }

    function toCheckUpperCase(letter) {
        return letter.toUpperCase() === letter;
    }

    const newArr = rotateAlp(orrAlp, k);

    return s.split("").map((letter) => {
        if (orrAlp.indexOf(letter.toLowerCase()) === -1) return letter;
        return toCheckUpperCase(letter) ? newArr[orrAlp.indexOf(letter.toLowerCase())].toUpperCase() : newArr[orrAlp.indexOf(letter)];
    }).join("");
}
