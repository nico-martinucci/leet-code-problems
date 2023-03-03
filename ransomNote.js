/*
Given two strings ransomNote and magazine, return true if ransomNote can be 
constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 
Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // ransomNote: "hello", magazine: "i love helicopters"
    // build a frequency counter from the magazine
    // loop through the ransomeNote, subtracting one from each letter as we go

    let counter = {};

    for (let char of magazine) {
        counter[char] = counter[char] ? counter[char] + 1 : 1;
    }

    for (let char of ransomNote) {
        if (!counter[char] || counter[char] - 1 < 0) return false;

        counter[char] -= 1;
    }

    return true;
};