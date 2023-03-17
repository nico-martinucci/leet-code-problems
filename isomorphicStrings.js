/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while 
preserving the order of characters. No two characters may map to the same 
character, but a character may map to itself.

TEST CASES:
- bar, car -> true
- ace, car -> true
- egg, add -> true
- egg, car -> false
- paper, title -> true
-"", "" -> true

NOTES:
- two words need to be the same length
- more strict frequency counter
    - egg -> {e: 1, g: 2}; add -> {a: 1, d: 2}
    - egg -> "abb", add -> "abb", car -> "abc"

APPROACH:
- fail-fast if the two words are not the same length
- define the alphabet
- define a alphabet index for each string
- define two new empty strings
- define two new objects of what letters map to new letters for each string
- loop === length of the words
    - check if each character is each word's object
    - if it is not...
        - we're going to add a new map to the string's object
        - increment our alphabet index
    - add the mapped character to the output string
    - (do above for both strings)
- return whether our two output strings are equal
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) { // egg, add
    if (s.length !== t.length) return false;

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let sAlphaIdx = 0; // 1
    let sOutput = ""; // "abb"
    let sLetterMaps = {}; // { e: "a", g: "b" }

    let tAlphaIdx = 0; // 1
    let tOutput = ""; // "abb"
    let tLetterMaps = {}; // { a: "a", d: "b" }

    for (let i = 0; i < s.length; i++) { // 2 -> 2
        if (!(s[i] in sLetterMaps)) {
            sLetterMaps[s[i]] = alphabet[sAlphaIdx];
            sAlphaIdx += 1;
        }

        if (!(t[i] in tLetterMaps)) {
            tLetterMaps[t[i]] = alphabet[tAlphaIdx];
            tAlphaIdx += 1;
        }

        sOutput += sLetterMaps[s[i]];
        tOutput += tLetterMaps[t[i]];

        if (sOutput !== tOutput) return false;
    }

    return true;
};