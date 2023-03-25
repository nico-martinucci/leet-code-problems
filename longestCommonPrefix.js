/*
Write a function to find the longest common prefix string amongst an array of 
strings.

If there is no common prefix, return an empty string "".

NOTES:
- only lowercase english letters
- at least one string in the array

TEST CASES:
- ["abx", "abc"] -> "ab"
- ["ab", "abc"] -> "ab"
- ["abc", "ab"] -> "ab"
- ["abc", "xyz"] -> ""
- ["abc"] -> "abc"

APPROACH:
- build a test string against which we compare the beginning of each input string
    - e.g. "a", "ab", "abx"
    - base it off of the first element of the array

- guard: if the length of the array is 1, return it's only element
- define a prefix string, beginning with ""
- define a counter variable, at 0
- define a boolean that stores whether every word matches the current prefix str
- while that boolean is true, AND letter count is less than the length of the first string...
    - grab next letter from the first string
    - increment letter count
    - loop through the input strings, for each one...
        - compare the prefix string plus new letter to the beginning substring of the string
        - if it ever doesn't match, set boolean to false and break
    - append the new letter to the prefix string
- return prefix
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) { // ["abx", "abc"] -> "ab"
    if (strs.length === 1) return strs[0];

    let prefix = ""; // ""
    let letterCount = 0; // 0
    let allMatching = true; // true

    while (allMatching && letterCount < strs[0].length) { // false, 3 < 3
        let nextLetter = strs[0][letterCount]; // strs[0][2] -> "abx"[2] -> "x"
        letterCount += 1;

        for (let s of strs) { // "abc"
            if (s.substring(0, letterCount) !== prefix + nextLetter) { // "abc".substring(0, 3) -> "abc" === "ab" + "x"
                allMatching = false;
                break;
            }
        }

        if (allMatching) prefix += nextLetter;
    }

    return prefix;
};