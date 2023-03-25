/*
Given a string s, return the longest palindromic substring in s.

NOTES:
- case sensitive
- only valid digist and english letters
- at least length 1

TEST CASES:
- "abcbd" -> "bcb"
- "abccbd" -> "bccb"
- "abacfad" -> "aba"
- "abaxz" -> "aba"
- "abxzx" -> "xzx"
- "aba" -> "aba"
- "a" -> "a"

APPROACH:
- iterative "expand from center" approach
- go through the string, for each char, two pointers, which move outward to 
    find the longest palindrome that includes that letter

- guard: if input length is 1, return it
- define a results variable
- loop through the characters in the string...
    - check if left is same as current, in which case move pointer left
    - chech if right is same as curren, in which case move pointer right
    - as long as left - 1 is same as right - 1, increment them
    - once they aren't, record the substring IF it's longer than what's already in results
- return result
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) { // "aaaa" -> "aaaa"
    if (s.length === 1) return s;

    let result = ""; // "aa"

    for (let i = 0; i < s.length; i++) { // i -> 3
        let left = i; // 0
        let right = i; // 2

        while (left > 0 && s[left - 1] === s[left]) left -= 1;
        while (right < s.length - 1 && s[right + 1] === s[right]) right += 1;

        while (left > 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
            left -= 1;
            right += 1;
        }

        let substring = s.substring(left, right + 1); // s.substring(0, 2) -> "aa"

        if (substring.length > result.length) result = substring;
    }

    return result;
};