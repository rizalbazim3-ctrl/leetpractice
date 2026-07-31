// Given two string arrays word1 and word2, return true if the two 
// arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in 
// order forms the string.

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let a = ""
    let b = ""
    let c = [word1.length,word2.length]
     for(let i=0; i < Math.max(...c); i++){
        if(word1[i]){
              a+=word1[i]
         }
         if(word2[i]){
             b+=word2[i]
         }
     }
     return a.trim() === b.trim()
};