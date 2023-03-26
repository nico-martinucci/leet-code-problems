/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of 
rows like this: (you may want to display this pattern in a fixed font for better 
    legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number 
of rows:

string convert(string s, int numRows);

NOTES:
- string at least one character long
- at least 1 row
- characters are lower/upper letters and "," or "."

TEST CASES:
- "PAYPALISHIRING", 1 -> "PAYPALISHIRING"
- "PAYPALISHIRING", 2 ->
PYAIHIIG
APLSIRN
- "PAYPALISHIRING", 4 ->
P  I  N
A LS IG
YA HR
P  I
- "PAYPALISHIRING", 5 ->
P   H
A  SI
Y I R
PL  IG
A   N

APPROACH:
- can break down to units one less than number of rows
- OR break down into alternating units, (num rows) then (num rows - 2)
- separate arrays for each row that get mashed together at the end

- guard: if rows is 1, return the input string
- generate an array of arrays, one for each row 
- while loop, as long as there are letters left in the string
    - for loop, 0 to num rows, moving higher, adding letters (num rows)
        - guard: if the current letter is undefined, break
        - use i to determine which row in array of arrays to add to
    - for loop, num rows - 1 to 1, moving lower, adding letters (num rows - 2)
        - guard: if the current letter is undefined, break
        - use i to determine which row in array of arrays to add to
        - need to make sure in case of 2 rows that we never enter this for loop
- return: array of arrays mapped, for each one joining to a string, and then joined as a string
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/ //                                                    
var convert = function (s, numRows) { // PAYPALISHIRING, 3
    if (numRows === 1) return s;

    let rows = [];
    /*
        [
            [P,A],
            [A,P,L,S],
            [Y,I]
        ]
    */
    let strIndex = 0; // 7

    for (let i = 0; i < numRows; i++) {
        rows.push([]);
    }

    while (strIndex < s.length) { // 7 < 14        check for off-by-one issue here 
        for (let i = 0; i < numRows; i++) { // 3 -> 2
            if (s[strIndex] === undefined) break; // "I"

            rows[i].push(s[strIndex]);
            strIndex += 1;
        }

        for (let i = numRows - 2; i >= 1; i--) { // 2 -> 1
            if (s[strIndex] === undefined) break; // "S"

            rows[i].push(s[strIndex]);
            strIndex += 1;
        }
    }

    return rows.map(r => r.join("")).join("");
};