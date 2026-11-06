// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

 

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let num = [];
    while(n > 1){
        if(n%2 !== 0){
             num.push(n)
        }
        n = Math.floor(n/2);
    }
    return num.length+1;
};