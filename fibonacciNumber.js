/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the 
Fibonacci sequence, such that each number is the sum of the two preceding ones, 
starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

NOTES
- positive integer, between 0 and 30

TEST CASES
- 0 -> 0 X
- 1 -> 1 X
- 2 -> 1 X
- 3 -> 2
- 4 -> 3 
- 5 -> 5
- 6 -> 8

APPROACH
- guard: if n is less than 2, return n
- initialize a previous value and two-previous value variables, set to 1 and 0 resp.
- loop from 2 to less than n...
    - calculate a new fibonacci number, which is prev + two prev
    - set two prev to the current val of prev
    - set prev to our new fibonacci number
- return the sum of prev and two prev

*/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) return n;

    let twicePrevVal = 0;
    let prevVal = 1;

    for (let i = 2; i < n; i++) {
        let newFibonacci = prevVal + twicePrevVal;
        twicePrevVal = prevVal;
        prevVal = newFibonacci;
    }

    return prevVal + twicePrevVal;
};