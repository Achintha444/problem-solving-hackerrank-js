// Solution for 30-designer-pdf-viewer.js
// Problem URL: https://www.hackerrank.com/challenges/designer-pdf-viewer

function designerPdfViewer(h, word) {
    let wordHeight = word.length;
    let hMap = new Map();
    let maxHeight = 0;

    // Using for loop for (a-z):
    for (let i = 97; i <= 122; i++) {
        hMap.set(String.fromCharCode(i), h[i - 97]);
    }

    Array.from(word).forEach((letter) => {
        let height = hMap.get(letter);
        if (maxHeight < height) maxHeight = height;
    });

    return wordHeight * maxHeight;
}
