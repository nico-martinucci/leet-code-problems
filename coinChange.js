/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    debugger;
    if (amount === 0) return 0;

    let possibleChange = {};

    for (let c of coins) {
        if (c <= amount) {
            possibleChange[c] = Math.floor(amount / c);
        }
    }

    let count = 0;
    let possibleCoins = Object.keys(possibleChange).reverse();

    for (let coin of possibleCoins) {
        for (let j = 0; j < possibleChange[coin]; j++) {
            if (amount - coin >= 0) {
                count++;
                amount -= coin;
            } else {
                break;
            }
        }

        if (amount === 0) return count;
    }

    return -1;
};


coinChange([186, 419, 83, 408], 6249);