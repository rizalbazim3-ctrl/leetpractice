// An integer divisible by the sum of its
// digits is said to be a Harshad number. You are given an integer x.
// Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.

 

// Example 1:

// Input: x = 18

// Output: 9

// Explanation:

// The sum of digits of x is 9. 18 is divisible by 9. 
// So 18 is a Harshad number and the answer is 9.


/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {

    let n = 0
    let b = x
    while(b !== 0){
        n+=Math.ceil(b%10)
        b = Math.floor(b/10)
    }
    
    if(x%n === 0){
        return n
    }else{
        return -1
    }
};