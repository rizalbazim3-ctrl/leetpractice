// Given a string s and an integer k, reverse the first k characters
//  for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. 
// If there are less than 2k but greater than or equal to k characters, 
// then reverse the first k characters and leave the other as original.

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
     if(s.length <= k){
        return s.slice(0,k).split("").reverse().join("")
    }
    let a = ""
 for(let i = 1; i < s.length; i++){
     let b = ""
     let tem = ""
     if(s[2*k*i - 2*k] !== undefined){
         b = s.slice((2*k*i)-2*k,(2*k*i))
         
          tem = b.slice(0,k).split("").reverse().join("")
         a += tem + b.slice(k)
     }
 }
 return a
};