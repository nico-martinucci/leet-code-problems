/*
Given an integer x, return true if x is a palindrome, and false otherwise.


Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?

NOTES:
- negative numbers are never palindromes
- convert to string and check like normal palindrome

APPROACH:
- convert x to a string
- loop over string, comparing complimentary characters (e.g. 0 to len - 1, 1 to len - 2, etc.)
    - loop from 0 to floor of len/2 - 1
        - e.g. "121", len is 3, floor of len - 1 is 0, don't need to check middle digit
        - e.g. "1221", len is 4, floor of len - 1 is 1, only need to check first two indeces  
- if ever they don't match, return false
- otherwise return true
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;

    let stringified = x.toString();

    for (let i = 0; i < Math.floor(stringified.length / 2); i++) {
        if (stringified[i] !== stringified[stringified.length - 1 - i]) {
            return false;
        }
    }

    return true;
};