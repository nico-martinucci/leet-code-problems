/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color 
as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color 
of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.


Example 1:
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.
 

Constraints:

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], color < 216
0 <= sr < m
0 <= sc < n
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // depth-first iterative approach
    // define start value, stack
    // starting at start loc, add any adjacent cells with the same value to the stack
    // change value at location to new color
    // return image

    const originalVal = image[sr][sc];

    if (color === originalVal) return image;

    let toVisitStack = [[sr, sc]];

    while (toVisitStack.length > 0) {
        let [y, x] = toVisitStack.pop();

        if (y < image.length - 1 && image[y + 1][x] === originalVal) {
            toVisitStack.push([y + 1, x]);
        }
        if (y > 0 && image[y - 1][x] === originalVal) {
            toVisitStack.push([y - 1, x]);
        }
        if (x < image[0].length - 1 && image[y][x + 1] === originalVal) {
            toVisitStack.push([y, x + 1]);
        }
        if (x > 0 && image[y][x - 1] === originalVal) {
            toVisitStack.push([y, x - 1]);
        }

        image[y][x] = color;
    }

    return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2), "[[2,2,2],[2,2,0],[2,0,1]]")
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 0), "[[0,0,0],[0,0,0]]")
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 1), "[[1,1,1],[1,1,1]]")
console.log(floodFill([[0,0,0],[0,0,0]], 1, 1, 1), "[[1,1,1],[1,1,1]]")
console.log(floodFill([[1,0,0],[0,0,0]], 0, 0, 2), "[[2,0,0],[0,0,0]]")