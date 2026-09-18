// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let dup = []
    for (let i = 0; i<s.length; i++){
        if(/^[a-zA-Z]+$/.test(s[i]) || /^[0-9]+$/.test(s[i])){
            dup.unshift(s[i])
        }
    }

    return dup.join("").toLowerCase() === dup.reverse().join("").toLowerCase()
};