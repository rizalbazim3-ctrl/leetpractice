// You are given a positive integer n.

// Return the integer obtained by removing all zeros from the decimal 
// representation of n.

 

// Example 1:

// Input: n = 1020030

// Output: 123

// Explanation:

// After removing all zeros from 1020030, we get 123.

/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    let a = String(n)
    a = a.replaceAll("0","")
    
    return Number(a)
};