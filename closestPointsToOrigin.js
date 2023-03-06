/*
Given an array of points where points[i] = [xi, yi] represents a point on the 
X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance 
(i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique 
(except for the order that it is in).


Example 1:
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 

Constraints:

1 <= k <= points.length <= 104
-104 < xi, yi < 104
*/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // iterate over points
    // for each, calculate the distance to origin
    // store the distance as key in obj with val being the index of that point in points
    // generate list of keys from object, take last k number of items and return 
    //      an array made up of those points

    let distances = [];

    for (let point of points) {
        let [x, y] = point;
        let dist = Math.sqrt(x**2 + y**2);
        distances.push({point, dist})
    }

    distances.sort((a, b) => b.dist - a.dist);
    console.log(distances);

    return distances.splice(distances.length - k).map(p => p.point);
};

console.log(kClosest([[1,3],[-2,2]], 1), "[-2,2]");
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2), "[[3,3],[-2,4]]");