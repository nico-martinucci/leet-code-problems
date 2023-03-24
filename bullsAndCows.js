/*
You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. 
When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct 
position. The number of "cows", which are digits in the guess that are in your 
secret number but are located in the wrong position. Specifically, the non-bull 
digits in the guess that could be rearranged such that they become bulls. Given 
the secret number secret and your friend's guess guess, return the hint for your 
friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is 
the number of cows. Note that both secret and guess may contain duplicate digits.

NOTES:
- numBulls, "A", numCows, "B"
- assume both inputs are same length?
- no matches -> 0A0B
- in case duplicates, deferring to whichever is lower
    - e.g. duplicate in secret, one in guess -> only one should be reflected in the result
    - e.g. one in secret, duplicate in guess -> same

TEST CASES:
- secret: 1234, guess: 7654 -> 1A0B
- secret: 1234, guess: 1234 -> 4A0B
- secret: 1234, guess: 4321 -> 0A4B
- secret: 1234, guess: 1324 -> 2A2B
- secret: 1234, guess: 6789 -> 0A0B
- secret: 1212, guess: 1331 -> 1A1B
- secret: 1234, guess: 2111 -> 0A2B, NOT 0A4B
- secret: 1234, guess: 4554 -> 1A0B (bulls take precedence over cows), NOT 0A1B
- secret: 1212, guess: 5134 -> 0A1B
- secret: 1212, guess: 5131 -> 0A2B

APPROACH:
- compare individual digits to see if present (and what index) in the other
- challenge with duplicates: making sure to record which digits we've already counted,
    BUT also making sure that bulls take precedence over cows
- check for all bulls first, record those, THEN check for all cows

- find all bulls, record them
- find all cows, record them
- return our hint

- define a set to hold which digits in the secret we've already found matches for
- define number of bulls variable
- define number of cows variable

- iterate over guess, for each:
    - check if digit at current index is the same in both secret & guess
    - if it is, add one to bulls, and add that index to the set

- iterate over secret, for each:
    - check if the digit is present at all in the guess
    - if it is, and that index of that digit isn't already in our set, add
        the index of the digit in secret to the set, and add one to numCows

- return a string hint, countBulls + "A" + countCows + "B"
*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) { // secret: 1234, guess: 2111 -> 0A2B, NOT 0A4B
    if (secret === guess) return "4A0B";

    let foundSecretDigits = new Set(); // {}
    let foundGuessDigits = new Set(); // {}
    let numBulls = 0; // 0
    let numCows = 0; // 1

    for (let i = 0; i < guess.length; i++) { // 0 -> 3
        if (secret[i] === guess[i]) {
            numBulls = + 1;
            foundSecretDigits.add(i);
            foundGuessDigits.add(i);
        }
    }

    for (let i = 0; i < secret.length; i++) { // 0 -> 3
        if (guess.includes(secret[i]) && !foundSecretDigits.has(i)) {
            numCows += 1;
            foundSecretDigits.add(i); // may not be needed
        }
    }

    return "" + numBulls + "A" + numCows + "B"
};

/*
APPROACH
- find all bulls first; same time, make sets of possible cows
- loop through one of the sets, check for match in the other, remove from both
    if found, and increment number of cows
- return our hint
*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) { // 1807, 7810 -> 1A3B
    if (secret === guess) return secret.length + "A0B";

    let numBulls = 0; // 1
    let numCows = 0; // 1
    let secretCows = []; // [1, 0]
    let guessCows = []; // [7, 1, 0]

    for (let i = 0; i < secret.length; i++) { // 3 -> 3
        if (secret[i] === guess[i]) {
            numBulls += 1;
        } else {
            secretCows.push(secret[i]);
            guessCows.push(guess[i]);
        }
    }

    for (let i = secretCows.length - 1; i >= 0; i--) { // 2 -> 0
        if (guessCows.includes(secretCows[i])) {
            numCows += 1;
            guessCows.splice(guessCows.indexOf(secretCows[i]), 1);
            secretCows.splice(i, 1);
        }
    }

    return "" + numBulls + "A" + numCows + "B"
};