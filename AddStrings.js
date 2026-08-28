
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and 
// num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as
//      BigInteger). You must also not convert the inputs to integers directly.
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length-1
    let j = num2.length-1
    let carry = 0 
    let result = ""

    while(i>=0 || j>= 0 || carry){
        let digit1 = i >= 0 ? num1[i] - "0" : 0
        let digit2 = j >= 0 ? num2[j] - "0" : 0

        let sum = digit1 + digit2 + carry

        result = sum%10 + result
        carry = Math.floor(sum/10)

        i--
        j--
    }
    return result
};