/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

NOTES:
- only 0s and 1s; "outside" is water
- no guarantee of any islands
- need to check orthagonal connections
- careful about reducing duplication in checking individual tiles (keeping track
    of visited tiles)
- iterative/BFS approach

APPROACH:
- define:
    - set of visited cells
    - count of islands
- iterate over our grid (2x for loops)
    - if it's a cell we've already visited OR a 0, continue
    - (here: know we have an unvisited "1")
    - add one to count of islands
    - define queue of cells to visit; seed with current cell
    - while our queue has elements...
        - pop last cell; add it to our visited set
        - we can add any 1's that are N/S/E/W of current cell to queue
- return count
*/

/*
[
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
]

2
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let visited = new Set();
    let count = 0;

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            let coords = "" + y + x;

            if (visited.has(coords) || grid[y][x] === "0") continue;

            count += 1;
            let queue = [[y, x]];

            while (queue.length > 0) {
                let [y, x] = queue.pop();
                visited.add("" + y + x);

                if (y > 0 && !visited.has("" + (y - 1) + x) && grid[y - 1][x] === "1") {
                    queue.push([y - 1, x]);
                }
                if (y < grid.length - 1 && !visited.has("" + (y + 1) + x) && grid[y + 1][x] === "1") {
                    queue.push([y + 1, x]);
                }
                if (x > 0 && !visited.has("" + y + (x - 1)) && grid[y][x - 1] === "1") {
                    queue.push([y, x - 1]);
                }
                if (x < grid[y].length - 1 && !visited.has("" + y + (x + 1)) && grid[y][x + 1] === "1") {
                    queue.push([y, x + 1]);
                }
            }
        }
    }

    return count;
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]), "1")
console.log(numIslands([
    ["1", "0", "0", "1", "1", "1", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "1", "1", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "0", "1", "0"],
    ["0", "0", "0", "1", "1", "1", "1", "0", "1", "0", "1", "1", "0", "0", "0", "0", "1", "0", "1", "0"],
    ["0", "0", "0", "1", "1", "0", "0", "1", "0", "0", "0", "1", "1", "1", "0", "0", "1", "0", "0", "1"],
    ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["1", "0", "0", "0", "0", "1", "0", "1", "0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "0", "1"],
    ["0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1"],
    ["0", "0", "0", "1", "0", "1", "0", "0", "1", "1", "0", "1", "0", "1", "1", "0", "1", "1", "1", "0"],
    ["0", "0", "0", "0", "1", "0", "0", "1", "1", "0", "0", "0", "0", "1", "0", "0", "0", "1", "0", "1"],
    ["0", "0", "1", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "0", "1", "0", "0", "0", "1", "0"],
    ["1", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "1", "0", "1", "0", "1", "0"],
    ["0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "1", "0", "1", "1", "1", "0", "1", "1", "0", "0"],
    ["1", "1", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "1"],
    ["0", "1", "0", "0", "1", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1", "0", "1", "0", "0", "0"],
    ["0", "0", "1", "1", "1", "0", "0", "0", "1", "1", "0", "0", "0", "1", "0", "1", "0", "0", "0", "0"],
    ["1", "0", "0", "1", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "1"],
    ["1", "0", "1", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "0", "0", "0"],
    ["0", "1", "1", "0", "0", "0", "1", "1", "1", "0", "1", "0", "1", "0", "1", "1", "1", "1", "0", "0"],
    ["0", "1", "0", "0", "0", "0", "1", "1", "0", "0", "1", "0", "1", "0", "0", "1", "0", "0", "1", "1"],
    ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "1", "0", "0", "0", "1", "1", "0", "0", "0"]
]), "58")