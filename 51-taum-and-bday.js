// Solution for 51 - Taum and B'day
// Problem URL: https://www.hackerrank.com/challenges/taum-and-bday/problem

/**
 * To solve this we need to get the BigInt of the normal cost, all white cost and all black cost, and then compare them to
 * get the minimum cost. We are using BigInt because the numbers can be very large.
 */
function taumBday(b, w, bc, wc, z) {
    let normalCost = BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);
    let allWhiteCost = BigInt(b + w) * BigInt(wc) + BigInt(b) * BigInt(z);
    let allBlackCost = BigInt(b + w) * BigInt(bc) + BigInt(w) * BigInt(z);
    
    return (normalCost < allWhiteCost ? 
            (normalCost < allBlackCost ? normalCost : allBlackCost) : 
            (allWhiteCost < allBlackCost ? allWhiteCost : allBlackCost)).toString();
}

