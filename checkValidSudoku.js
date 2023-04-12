/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be 
validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without 
repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily 
solvable.
Only the filled cells need to be validated according to the mentioned rules.

NOTES:
- assume a 2D array as input, which will always be 9x9
- assume empty cells are "."
- fail if any row, any col, or any 3x3 box has a repeating digit
- return T/F depending if valid

TEST CASES:
-   [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]] -> true

-   [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]] -> false (8s in C1)

APPROACH:
- test each row, test each col, test each box, look for dupes
- if every find a duplicate, return false; at the end return true
- option A: three helper functions, one each for checking row/col/box
- option B: one helper function that checks for a dupes in an array
- check for dupes: remove ".", convert to a set, and if set is shorter than 
    original array, return false

- function checkForUniqueness(array)
    - remove "." for input
    - make a set from the shortened input
    - if set's length is less than input length, return false
    - otherwise return true

- function isValidSudoku(board)
    - loop over board passing each row to helper (stripped of ".")
        - if every returns false, return false
    - loop 1-9, creating a new array for each col 1-9 (only digits)
        - pass new array to helper; return false if false
    - define an array of 3x3 box starting points
    - for each of those, construct a new array (nested loops, only digits) of that 3x3 box
        - pass new array to helper; return false if false
    - return true
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let row of board) {
        if (!checkForUniqueness(row.filter(n => n !== "."))) return false;
    }

    for (let i = 0; i < 9; i++) {
        let col = [];

        for (let j = 0; j < 9; j++) {
            if (board[j][i] !== ".") col.push(board[j][i]);
        }

        if (!checkForUniqueness(col)) return false;
    }

    let boxStartLocs = [
        [0, 0], [3, 0], [6, 0],
        [0, 3], [3, 3], [6, 3],
        [0, 6], [3, 6], [6, 6],
    ]

    for (let loc of boxStartLocs) {
        let box = []

        for (let i = 0 + loc[0]; i < 3 + loc[0]; i++) {
            for (let j = 0 + loc[1]; j < 3 + loc[1]; j++) {
                if (board[i][j] !== ".") box.push(board[i][j]);
            }
        }

        if (!checkForUniqueness(box)) return false;
    }

    return true;
};

function checkForUniqueness(digits) {
    let uniqueDigits = new Set(digits);
    return uniqueDigits.size === digits.length;
}

isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]]);