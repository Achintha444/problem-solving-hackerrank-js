// Solution for 67-the-grid-search
// Problem URL: https://www.hackerrank.com/challenges/the-grid-search/problem
/**
 * To solve this problem we need to first find the min and max value between a and b. 
 * Then we calculate the min value by multiplying minA with (n-1) 
 * and the max value by multiplying maxB with (n-1), these will be the starting and ending values respectively.
 * Then we calculate the difference between maxB and minA and add it to the current value until we reach the max value.
 */
function gridSearch(G, P) {
    if (G.length < P.length) return "NO";

    let result = "NO";

    for (let i = 0; i < G.length; i++) {
        let tempArray = G[i].split("").map((value) => parseInt(value));

        for (let j = 0; j < tempArray.length; j++) {
            if (tempArray[j] === parseInt(P[0][0])) {
                let check = true;
                for (let k = 0; k < P.length; k++) {
                    try {
                        let ptempArray = G[i + k].split("").map((value) => parseInt(value));
                        if (ptempArray.slice(j, j + P[k].length).join("") !== P[k]) {
                            check = false;
                            break;
                        }
                    }
                    catch (e) {
                        check = false;
                        break;
                    }
                }
                if (check) result = "YES";
            }
            if (result === "YES") break;
        }
        if (result === "YES") break;
    }

    return result;
}
