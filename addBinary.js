/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let output = [];
    let remainder = 0;

    for (let i = 1; i <= Math.max(a.length, b.length); i++) {
        let digitSum = remainder;

        if (a[a.length - i]) digitSum += +a[a.length - i];
        if (b[b.length - i]) digitSum += +b[b.length - i];

        if (digitSum <= 1) {
            output.push(digitSum);
            remainder = 0;
        } else {
            output.push(digitSum % 2);
            remainder = 1;
        }
    }

    if (remainder) output.push(remainder);

    return output.reverse().join("");
};

console.log(addBinary("1010", "1011"), "10101");