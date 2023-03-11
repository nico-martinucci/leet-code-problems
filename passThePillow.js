/*
There are n people standing in a line labeled from 1 to n. The first person in 
the line is holding a pillow initially. Every second, the person holding the 
pillow passes it to the next person standing in the line. Once the pillow 
reaches the end of the line, the direction changes, and people continue passing 
the pillow in the opposite direction.

For example, once the pillow reaches the nth person they pass it to the n - 1th 
person, then to the n - 2th person and so on.
Given the two positive integers n and time, return the index of the person 
holding the pillow after time seconds.

 

Example 1:
Input: n = 4, time = 5                                                        2    1    0      
Output: 2                                                 0    1    2    3    4    5    6   
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1.
Afer five seconds, the pillow is given to the 2nd person.

5 % (8 - 2)


Example 2:
Input: n = 3, time = 2
Output: 3
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3.
Afer two seconds, the pillow is given to the 3rd person.
 

Example 3:
Input: n = 4, time = 9
Output: 2
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
Afer five seconds, the pillow is given to the 2nd person.
(Math.floor(9 / 4))(4 - 1) + remainder(9/4)


Constraints:

2 <= n <= 1000
1 <= time <= 1000

NOTES:
- first is 1, not 0
- always at least 2 people, at least 1 second
- passing happens AFTER each second has elapsed
- end of the list is n - 1
- round trip is 2n - 2
- can ignore any time that 2n - 2 divides into time
- only care about (time) % (2n - 2) moves
- if what's leftover is less than n, return thatn index + 1
- calculate (2n - 2) - leftover and move forward that many spaces

APPROACH:
- calculate (time) % (2n - 2)
- if leftover is less than n, return that index + 1
- otherwise, calcualte (2n - 2) - leftover and move to that index
*/

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    let lessRoundTrips = time % ((2 * n) - 2);
    if (lessRoundTrips < n) return 1 + lessRoundTrips;
    return 1 + (((2 * n) - 2) - lessRoundTrips);
};