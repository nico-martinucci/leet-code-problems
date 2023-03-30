/*
Given a string containing digits from 2-9 inclusive, return all possible letter 
combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given 
below. Note that 1 does not map to any letters.

NOTES:
- mapping:
    - 2: ABC
    - 3: DEF
    - 4: GHI
    - 5: JKL
    - 6: MNO
    - 7: PQRS
    - 8: TUV
    - 9: XYZ
- string of digits
- return an array (empty if empty string)

TEST CASES:
- "23" -> ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"]
- "67" -> ["MP", "MQ", "MR", "MS", "NP", "NQ", "NR", "NS", "OP", "OQ", "OR", "OS"]
- "76" -> ["PM", "PN", "PO", "QM", "QN", "QO", "RM", "RN", "RO", "SM", "SN", "SO"]
- "234" -> ["ADG", "AEG", "AFG", "AD", "AE", "AF", "AD", "AE", "AF", "BDG", "BEG", "BFG", "BD", "BE", "BF", "BD", "BE", "BF", "CDG", "CEG", "CFG", "CD", "CE", "CF", "CD", "CE", "CF"]

APPROACH:
- build the output as we iterate over our input string
- "array multiplication", with the current possible letters * whatever we've built so far

- guard: if string is empty, return an empty array
- define our mapping of numbers -> letters
- define an output array - spread in the letters from the first digit
- loop through the input string, starting at second digit...
    - define in progress array
    - loop through output array so far...
        - loop through the possibile characters for the second digit
            - concat two current values togeter, and add to in progress array
    - redefine our output array as a spreaded in progress array
- return output
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) { // "23" -> ["AD", "AE", "AF", "BD", "BE", "BF", "CD", "CE", "CF"]
    if (digits.length === 0) return [];

    const numbersToLetters = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

    let combinations = numbersToLetters[digits[0]].split(""); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

    for (let i = 1; i < digits.length; i++) { // 2 -> 1
        let temp = []; // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

        for (let combo of combinations) { // "b" of ["a", "b", "c"]
            for (let char of numbersToLetters[digits[i]]) { // "d" of "def"
                temp.push(combo + char);
            }
        }

        combinations = [...temp];
    }

    return combinations;
};