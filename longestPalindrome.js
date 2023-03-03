/*
Given a string s which consists of lowercase or uppercase letters, return the 
length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // build a frequency couner of s
    // loop through the counter; any letter that has an even number of count
    //      add to a running total
    // for any odds, add one less than the count to the running total, and keep
    //      track of the number of odss
    // if number of odds is greater than 1 at the end, add 1 to the total and 
    //      return it

    let counter = {};
    let total = 0;
    let odds = 0;

    for (let char of s) {
        counter[char] = counter[char] ? counter[char] + 1 : 1;
    }

    for (let char in counter) {
        if (counter[char] % 2 === 0) {
            total += counter[char];
        } else {
            total += counter[char] - 1;
            odds += 1;
        }
    }

    if (odds > 0) total += 1;

    return total;
};