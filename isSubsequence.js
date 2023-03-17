/*
Given two strings s and t, return true if s is a subsequence of t, or false 
otherwise.

A subsequence of a string is a new string that is formed from the original 
string by deleting some (can be none) of the characters without disturbing the 
relative positions of the remaining characters. (i.e., "ace" is a subsequence 
of "abcde" while "aec" is not).

QUESTIONS:
- can i assume only letters, or all valid characters? -> lower case letters
- does an empty string count as a subsequence of any other string?

TEST CASES:
- "abc", "azbxc" -> true
- "acb", "axbzc" -> false
- "", "asdkl;jfhalsdfjkas" -> true
- "abad", "abxd" -> false
- "aaab" "axaxaxb" -> true

NOTES:
- guards:
    - if s is longer than t, return false
    - if s is equal to t, return true
- comparing relative locations of the letters in s to the letters in t
    - a < b < c --> a < b < c
    - a < c < b --> a < b < c

APPROACH:
- if s is longer than t, return false
- if s is equal to t, return true

- define a last index of t (this index counts)

- loop through s, skipping the last letter
    - for each char, compare it's relation to it's next neighbor to the relation
        of the same character in t (accounting for where we left off in the previous iteration)
    - if the match...
        - update the value of t's last index
    - if they don't...
        - return false
- return true

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;
    if (s === t) return true;
    if (s.length === t.length) return false;

    let lastTIdx = 0; // 1

    for (let i = 0; i < s.length - 1; i++) {
        let letterIndex = t.indexOf(s[i], lastTIdx)

        if (letterIndex < t.indexOf(s[i + 1], letterIndex + 1)) {
            lastTIdx = letterIndex + 1;
        } else {
            return false;
        }
    }

    return true;
};