/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNumOnly = s.split(/[^a-zA-Z0-9]+/).join("").toLowerCase();

    let leftP = 0;
    let rightP = alphaNumOnly.length - 1;

    for (let i = 0; i < Math.floor(alphaNumOnly.length / 2); i++) {
        if (alphaNumOnly[leftP] !== alphaNumOnly[rightP]) {
            return false;
        }

        leftP += 1;
        rightP -= 1;
    }

    return true;
};

console.log(isPalindrome("aba"), "true")
console.log(isPalindrome("abcba"), "true")
console.log(isPalindrome("race a car"), "false")
console.log(isPalindrome("race car"), "true")
console.log(isPalindrome("A man, a plan, a canal: Panama"), "true")
console.log(isPalindrome(" "), "true")