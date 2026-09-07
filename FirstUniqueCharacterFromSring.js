// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let a = s.split("").filter((item)=> s.indexOf(item) === s.lastIndexOf(item))

    return s.indexOf(a[0])
};