// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

 

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"

// Output: 3

// Explanation:

// Digit 8 is inside of 3 nested parentheses in the string.

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let MaxNest = 0;
    for(let i=0;i<s.length;i++){
        if(s[i] === "("){
            stack.push(s[i]);
           if(stack.length >= MaxNest ) MaxNest = stack.length;

        }
        else if(s[i] === ")"){
           if( stack[stack.length-1] === "("){
            stack.pop();
           }
           
        }
    }

    return MaxNest;
};