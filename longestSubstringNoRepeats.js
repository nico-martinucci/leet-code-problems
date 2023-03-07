/*
Given a string s, find the length of the longest substring without repeating 
characters.

 
Example 1:
Input: s = "babcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) { // "babcabcbb"
    // iterate over s
    // two pointers, each marking the front and back of current substring
    // try to move right pointer up
    // with each move, keep track of the letters in the current substring
    // if it's a new letter, great - move pointer, add it to tracking with index
    // if it's a repeat letter, go ahead and move, but move left pointer up to 
    //      1 greater than index of the original instance of that letter
    // trick is how to keep track the contents of the current substring...
    //      object, with key:value -> char:index
    //      if repeat is found, need to iterate from current pointer value
    //          to index of origin char, removing each as you go
    //      then add one to move to new starting position

    let leftP = 0; // 1 -> "a"
    let rightP = 0; // 1 -> "a"
    let currSubString = new Map(); // {"a": 1, "b": 2}
    let maxLength = 0; // 2

    for (let i = 0; i < s.length; i++) { // 2
        rightP = i; // 2

        if (currSubString.has(s[i])) { // has "b" === true
            for (let j = leftP; j <= currSubString.get(s[i]); j++) { // from 0 to 0
                currSubString.delete(s[j]);
                leftP += 1;
            }
        }

        currSubString.set(s[i], i);
        maxLength = Math.max(maxLength, currSubString.size);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("babcabcbb"), 3)
console.log(lengthOfLongestSubstring("bbbb"), 1)
console.log(lengthOfLongestSubstring("pwwkew"), 3)