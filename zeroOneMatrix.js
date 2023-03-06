/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.


Example 1:
Input: mat = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
]
Output: [
    [0,0,0],
    [0,1,0],
    [0,0,0]
]

Example 2:
Input: mat = [
    [0,0,0],
    [0,1,0],
    [1,1,1]
]
Output: [
    [0,0,0],
    [0,1,0],
    [1,2,1]
]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.
*/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    // iterate over the matrix
    // modify in-place - 0s are the important ones, and those will stay 0s
    // for each non-zero cell, do a BFS to fine the nearest 0 with only
    //      orthagonal connections
    // update that cell's value to the result of that
    // return mat

    // NOTE: This approach works, but times out on some of the HUGE inputs.

    for (let y = 0; y < mat.length; y++) {
        for (let x = 0; x < mat[y].length; x++) {
            if (mat[y][x] === 0) continue;

            let dist = 1;
            let cellsToVisit = [];
            let nextcellsToVisit = [];
            let cellsVisited = new Set();

            addAdjacentCells(y, x, cellsToVisit);

            while (cellsToVisit.length > 0) {
                let [tempY, tempX] = cellsToVisit.pop();
                cellsVisited.add(tempY.toString() + tempX.toString());

                addAdjacentCells(tempY, tempX, nextcellsToVisit, cellsVisited);

                if (mat[tempY][tempX] === 0) {
                    mat[y][x] = dist;
                    break;
                }

                if (cellsToVisit.length === 0) {
                    dist += 1;
                    cellsToVisit = [...nextcellsToVisit];
                    nextcellsToVisit = [];
                }
            }
        }
    }

    return mat;

    function addAdjacentCells(y, x, stack, visited=new Set()) {
        if (mat[y + 1] !== undefined && !visited.has("" + (y + 1) + x)) {
            stack.push([y + 1, x]);
        }
        if (mat[y - 1] !== undefined && !visited.has("" + (y - 1) + x)) {
            stack.push([y - 1, x]);
        }
        if (mat[y][x + 1] !== undefined && !visited.has("" + y + (x + 1))) {
            stack.push([y, x + 1]);
        }
        if (mat[y][x - 1] !== undefined && !visited.has("" + y + (x - 1))) {
            stack.push([y, x - 1]);
        }
    }
};

// console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]]), "[[0,0,0],[0,1,0],[0,0,0]]");
// console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]]), "[[0,0,0],[0,1,0],[1,2,1]]");
console.log(updateMatrix([[0,1,1,1,1,1,0]]), "[[0,1,2,3,2,1,0]]");