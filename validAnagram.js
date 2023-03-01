/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // fail-fast - if they are different lengths, can return false
    // build a frequency counter out of s, then loop through t and compare letters to s (removing as we go)  
    // if every a key doesn't exist or deleting 1 from it's val would go below 0, return false

    // otherwise return true
    if (s.length !== t.length) return false;

    let counter = {};
    for (let char of s) {
        counter[char] = counter[char] ? counter[char] + 1 : 1;
    }

    for (let char of t) {
        if (!counter[char] || counter[char] - 1 === -1) {
            return false;
        }
        counter[char] -= 1;
    }

    return true;
};


console.log(isAnagram("anagram", "nagaram"), "true");
console.log(isAnagram("rat", "car"), "false");
console.log(isAnagram("", ""), "true");