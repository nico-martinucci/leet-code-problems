/*
You are given an array of non-overlapping intervals "intervals" where 
intervals[i] = [starti, endi] represent the start and the end of the ith 
nterval and intervals is sorted in ascending order by starti. You are also 
given an interval newInterval = [start, end] that represents the start and end 
of another interval.

Insert newInterval into intervals such that intervals is still sorted in 
ascending order by starti and intervals still does not have any overlapping 
intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.


Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
*/

// BEATS 99.67% OF SOLUTIONS IN RUNTIME!

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // possible outcomes:
    //      interval fits in nicely and can be inserted without anything else needed
    //      interval fully encompasses other intervals; other intervals can be removed and new one inserted
    //      either or both ends of new Interval fall inside of a current interval, shenanigans ensue
    // ultimately determining inputs for a single splice call to intervals
    //      WHAT to input; WHERE to put it; HOW MUCH to remove
    // in last two cases, can pull out any overlapping intervals and construct a new one with the lowest and highest values, which can be inserted

    // loop through intervals (maybe while newStart is less than current interval's start)
    // increment index marker
    // if newStart is greater than or equal to start of current interval... 
    // if newStart is after end of current intervals and newEnd is before the start of next interval, break

    // console.log("intervals", intervals);
    // console.log("newInterval", newInterval);

    if (intervals.length === 0 || newInterval[0] > intervals[intervals.length - 1][1]) {
        intervals.push(newInterval);
        return intervals;
    }
    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval);
        return intervals;
    }

    let startSplice = 0;

    while (newInterval[0] > intervals[startSplice][1]) {
        startSplice += 1;
    }

    if (startSplice > 0 && newInterval[0] > intervals[startSplice - 1][1] && newInterval[1] < intervals[startSplice][0]) {
        intervals.splice(startSplice, 0, newInterval);
        return intervals;
    }

    let endSplice = startSplice;

    while (endSplice < intervals.length - 1 && newInterval[1] >= intervals[endSplice + 1][0]) {
        endSplice += 1;
    }

    let combinedInterval = [
        Math.min(intervals[startSplice][0], newInterval[0]),
        Math.max(intervals[endSplice][1], newInterval[1])
    ]

    intervals.splice(startSplice, endSplice - startSplice + 1, combinedInterval)

    return intervals;
};


console.log(insert([[1,5]], [2,3]), "[[1,5]]");
// console.log(insert([], [2,5]), "[[2,5]]");
// console.log(insert([[6,9]], [2,5]), "[[2,5],[6,9]]");
// console.log(insert([[2,5]], [6,9]), "[[2,5],[6,9]]");
// console.log(insert([[1,3],[6,9]], [2,5]), "[[1,5],[6,9]]");
// console.log(insert([[1,2],[5,6]], [3,4]), "[[1,2],[3,4],[5,6]]");
// console.log(insert([[1,2],[3,8],[9,10]], [4,7]), "[[1,2],[3,8],[9,10]]");
// console.log(insert([[1,2],[4,7],[9,10]], [3,8]), "[[1,2],[3,8],[9,10]]");
// console.log(insert([[1,2],[4,5],[6,7],[9,10]], [3,8]), "[[1,2],[3,8],[9,10]]");
// console.log(insert([[1,2],[4,5],[6,7],[9,10]], [5,6]), "[[1,2],[4,7],[9,10]]");
// console.log(insert([[1,2],[4,5],[6,7],[9,10]], [4,7]), "[[1,2],[4,7],[9,10]]");