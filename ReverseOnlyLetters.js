// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.

 

// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let a = ""
    let i = s.length-1
    for(let b = 0 ; b <s.length; b++){
        if(/^[a-zA-Z]+$/.test(s[i]) && /^[a-zA-Z]+$/.test(s[b]) ){
            a+= s[i]
        }else if(/^[a-zA-Z]+$/.test(s[i]) && !/^[a-zA-Z]+$/.test(s[b])){
            i++
        }
         if(!/^[a-zA-Z]+$/.test(s[b])){
            a+=s[b]
        }else if(/^[a-zA-Z]+$/.test(s[b]) && !/^[a-zA-Z]+$/.test(s[i])){
            b--
        }
        
        i--
    }
    return a
};