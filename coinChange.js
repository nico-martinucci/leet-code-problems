/*
You are given an integer array coins representing coins of different 
denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that 
amount of money cannot be made up by any combination of the coins, return -1.

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

NOTES:
- recursion, maximize use of higher-value coins, and check if later coins
        can be used to make up the difference
- sort the coins first, making sure we're starting with higher ones
- the correct solution won't ALWAYS maximize high value coins, though...

APPROACH:
- base case: if remaining amount is perfectly divisible by coin value, return the number of coins
- base case: if remaining amount is less than current value, return Infinity
- base case: if we're at the end of the array, return Infinity

- determine how many of current denomination CAN be pulled out
- keep track of min number of coins needed to make the value (initialize to Infinity)
- looping backwards from that number, check how many of the next denomination are needed (recursion)
-   if we get Infinity, continue to the next loop
-   otherwise, compare to current minimum
- return min + current denomination count

*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    coins.sort((a, b) => b - a);
    let numCoins = makeChange(coins, amount);

    return numCoins === Infinity ? -1 : numCoins;
};

var makeChange = function (coins, amount, i = 0) {
    if (amount % coins[i] === 0) return amount / coins[i];
    if (i === coins.length - 1) return Infinity;

    let numCoins = Math.floor(amount / coins[i]);
    let addlCoinOptions = [];

    while (numCoins >= 0) {
        let addlCoins = makeChange(coins, amount - (numCoins * coins[i]), i + 1);
        addlCoinOptions.push(numCoins + addlCoins);

        numCoins -= 1;
    }

    return Math.min(...addlCoinOptions);
}


// console.log(coinChange([1, 2, 5], 11), "3");
console.log(coinChange([186, 419, 83, 408], 6249), "20");


/*
var coinChange = function (coins, amount) {
    coins.sort((a, b) => b - a);
    let numCoins = makeChange(coins, amount);

    return numCoins === Infinity ? -1 : numCoins;
};

var makeChange = function (coins, amount, i = 0) {
    if (amount % coins[i] === 0) return amount / coins[i];
    if (i === coins.length - 1) return Infinity;

    let numCoins = Math.floor(amount / coins[i]);
    let minAddlCoins = Infinity;

    while (numCoins >= 0) {
        let addlCoins = makeChange(coins, amount - (numCoins * coins[i]), i + 1);
        minAddlCoins = Math.min(minAddlCoins, addlCoins);

        if (minAddlCoins === Infinity) {
            numCoins -= 1;
        } else {
            break;
        }
    }

    return Math.max(numCoins, 0) + minAddlCoins;
}
*/