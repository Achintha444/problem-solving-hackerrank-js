// Solution for 76-camel-case.js
// Problem URL: https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true

function camelcase(s) {
    let result = 1;
    
    s.split("").forEach((letter)=>{
        if (letter.toUpperCase()===letter) result+=1
    });
    
    return result;
}
