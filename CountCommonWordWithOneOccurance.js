// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

 

// Example 1:

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let a = 0
    let b = 0
    let c = 0
    let d = Math.max(words1.length,words2.length)
    for(let i=0; i<d; i++){
        let n = words2.indexOf(words1[i])
        for(let j=0; j<d; j++){
            if(words1[i]===words1[j] && a < 2 ){
                a++
            }
            if(words2[n] === words2[j] && n !== -1 && b < 2 ){
                b++
            }
        }
        if(a === 1 && b === 1){
            c++
        }
        a = 0
        b = 0
    }

    return c
};