// Solution for 74-super-reduced-string.js
// Problem URL: https://www.hackerrank.com/challenges/super-reduced-string/problem?isFullScreen=true

function superReducedString(s) {
    const remover = new RegExp("0", 'g');
    let sArray = s.split("");
    let sCurrent = s;
    let check = true;

    while (check) {
        for (let i = 0; i < sArray.length - 1; i++) {
            if (sArray[i] !== "0" && sArray[i] === sArray[i + 1]) {
                sArray[i] = "0";
                sArray[i + 1] = "0";
            }
        }

        sArray = sArray.join("").replace(remover, "");

        if (sArray.length === 0) return "Empty String";
        if (sArray === sCurrent) return sArray;

        sCurrent = sArray;
        sArray = sArray.split("");
    }
}
