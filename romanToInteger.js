/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, 
which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written 
as IV. Because the one is before the five we subtract it making four. The same 
principle applies to the number nine, which is written as IX. There are six 
instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

NOTES:
- roman numeral will be a string, always at least one long
- will only have valid roman numeral characters
- guaranteed to be a valid roman numeral
- two operations: addition and subtraction
- order: if high then low, addition; if low then high, subtraction
- checking in groups of 2 (ish) - really checking the letter after the current

TEST CASES:
- "II" -> 2
- "XVI" -> 16
- "IX" -> 9
- "XIV" -> 14
- "XCIX" -> 99
- "MDCLXVI" -> 1666

APPROACH:
- create look-ups for values (single values and subtracted-equivalents)
- create a sum variable
- loop through our roman numeral
    - if current letter is greater than or equal to the next (using vals in our lookup), 
        add val of current letter to our total
    - if not, look up the difference equivalent, add that to the total, skip 
        forward an extra letter
- return our sum
*/

const vals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const subtractionEquiv = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1 || vals[s[i]] >= vals[s[i + 1]]) {
            sum += vals[s[i]];
        } else {
            sum += subtractionEquiv[s[i] + s[i + 1]];
            i += 1;
        }
    }

    return sum;
};