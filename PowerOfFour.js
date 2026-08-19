// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n%2 !== 0 && n !== 1 || n === 0 ){
        return false
    }

    while(n %4 === 0){
        n=n/4
    }
     return n === 1
};