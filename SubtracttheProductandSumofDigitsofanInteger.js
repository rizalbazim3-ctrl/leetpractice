// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let s = 0
    let m = 1

    while(n > 0){
        s += n%10
        m *= n%10

        n = Math.floor(n/10)

    }
    return m-s
    
};

