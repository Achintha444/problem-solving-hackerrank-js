// Solution for 31-utopian-tree.js
// Problem URL: https://www.hackerrank.com/challenges/utopian-tree

function utopianTree(arrayTree, n) {
    if (!arrayTree[n]) {
        for (let i = arrayTree.length; i <= n; i++) {
            if (i % 2 == 0) arrayTree.push(arrayTree[i - 1] + 1)
            else arrayTree.push(arrayTree[i - 1] * 2);
        }
    }

    return arrayTree[n];
}
