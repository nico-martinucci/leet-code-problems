/*
Given two strings s and p, return an array of all the start indices of p's 
anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.

NOTES:
- all lowercase
- in case of no matches, return empty array
- neither will be empty
- can't assume s will be longer than p

TEST CASES:
- "cbaxbac", "bca" -> [0, 4] [X]
- "cbaxaac", "abc" -> [0]
- "cbacb", "abc" -> [0, 1, 2]
- "aaa", "z" -> []
- "bab", "abb" -> [0]
- "baxx", "abb" -> []

APPROACH:
- iterative approach to finding substrings
- for each letter, if it matches a letter in the second string, grab a substring
    of length equal to the input, and compare it to the input

- guard: if s is shorter than p, return an empty array
- define an output array
- split/sort/join p
- loop through s (only need to go as far as p letters less than the end)
    - for each, if it is in p, grab a substring, sort it, and compare it to p
    - if it's a match, add i to our output array
- return output array
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) { // "cbaxbac", "bca" -> [0, 4]
    if (s.length < p.length) return [];

    let anagramIndices = []; // [0, 4]

    p = p.split("").sort().join(""); // "abc"

    for (let i = 0; i <= s.length - p.length; i++) { // 4 -> 4   s[i] === "b"
        if (!p.includes(s[i])) continue;

        let substring = s.substring(i, i + p.length).split("").sort().join(""); // "abc"

        if (substring === p) anagramIndices.push(i); // "abc" === "abc"
    }

    return anagramIndices; // [0, 4]
};

/*
Above is a working solution, but does not pass the massive inputs. Here's an
approach that is more performant:

var findAnagrams = function (s, p) {
    const ansArr = [];
    const hash = {};
    for(let i = 0; i < p.length; i++) {
        hash[p[i]] = (hash[p[i]] ?? 0) + 1;
    };

    let l = 0;
    let r = 0;
    while(r < s.length) {
        if(hash[s[r]] > 0) {
            hash[s[r]]--;
            if(r - l + 1 === p.length) ansArr.push(l);
            r++;
        } else {
            if(hash[s[l]] !== undefined) hash[s[l]]++;
            l++;
            if(l > r) r = l;
        }
    }

    return ansArr;
};
*/