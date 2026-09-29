// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let a = ""
    let i = true;

    if(strs[0] === "") return "";

    while(i){
            a+=strs[0][a.length]
        for(let j=1; j<strs.length; j++){
            if(!strs[j].startsWith(a)){  
                return a.slice(0,a.length-1);
            }
        }
        if(strs[0].length === a.length){
            i = false;
        }
    }
    return a;
};

