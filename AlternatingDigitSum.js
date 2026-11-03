// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

 

// Example 1:

// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let SD = n.toString();
    let result = 0;
    for(let i=0; i<SD.length; i++){
        if(i%2 === 0){
            result+=Number(SD[i]);
        }else{
            result-=Number(SD[i]);
        }
    }
    return result;
};