/*
Given n pairs of parentheses, write a function to generate all combinations of 
well-formed parentheses.

NOTES:
- valid parantheses combinations
- at least 1, max 8

TEST CASES:
- 1 -> ()
- 2 -> ()(), (())
- 3 -> ()()(), (())(), ()(()), (()()), ((()))

APPROACH
- use sets to remove duplicates at the end of each iteration (or else 
    duplication will compound)
- build off of previous set
- iterate backwards, building and pushing new valid options
- add "()" at each possible place in the current available set

- define output array with "()"
- guard: if 1, return output array
- for loop, up to n..., starting at 2
    - create a set
    - loop through output array...
        - loop through length of current elem...
            - add "()" at each valid location, then add it to the set
    - convert set to array and replace output array with it
- return output array
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) { // 3 -> ()()(), (())(), ()(()), (()()), ((()))
    let validParens = ["()"]; // ["()"]

    if (n === 1) return validParens;

    for (let i = 1; i < n; i++) { // 1 -> 2
        let newValids = new Set(); // ["()()", "(())"]

        for (let j = 0; j < validParens.length; j++) { // 0 -> 0
            for (let k = 0; k <= validParens[j].length; k++) { // 1 -> 2
                let temp = validParens[j].split(""); // ["(", ")"]
                temp.splice(k, 0, "()"); // ["(", ")", "()"]
                temp = temp.join(""); // "()()"

                newValids.add(temp);
            }
        }

        validParens = Array.from(newValids);
    }

    return validParens;
};