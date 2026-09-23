// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let value of s){

        if(value === "(" ){
            stack.push("(");
        }

        else if(value === "{"){
             stack.push("{");
        }

        else if(value === "["){
              stack.push("[");
        }

       else if(value === ")" ){
            if(stack[stack.length-1] === "(" ){
                  stack.pop();
            }else {
                stack.push(")")
            }
        }

        else if(value === "}"  ){
             if(stack[stack.length-1] === "{" ){
                  stack.pop();
            }else {
                stack.push("}");
            }
        }

        else if(value === "]" ){
            if(stack[stack.length-1] === "[" ){
                  stack.pop();
            }else {
                stack.push("]");
            }
        }
        
    }
    console.log(stack)
    return stack.length === 0;
};