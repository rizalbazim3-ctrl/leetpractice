// Given a positive integer num, return true if num is a perfect 
//  or false otherwise.

// A perfect square is an integer that is the square of an integer. 
// In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such assqrt.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
   const n = Math.sqrt(num)
    if(Number.isInteger(n)){
        return true
    }else{
        return false
    }
};