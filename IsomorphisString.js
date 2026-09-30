// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false

    let chr = {};
    let a = []

    for(let i = 0; i<s.length; i++){
        if(a.length === 0){
             a.push(s[i]);
            chr[s[i]]=t[i];
        }
        else if(a.includes(s[i]) && chr[s[i]] !== t[i] ){
                return false
            
        }else if(!a.includes(s[i])){
            a.push(s[i]);
            chr[s[i]]= t[i]
        }
    }


     let obj = {};
    let b = []

    for(let i = 0; i<t.length; i++){
        if(b.length === 0){
             b.push(t[i]);
            obj[t[i]]=s[i];
        }
        else if(b.includes(t[i]) && obj[t[i]] !== s[i] ){
            
                return false
            
        }else if(!b.includes(t[i])){
            b.push(t[i]);
            obj[t[i]]= s[i]
        }
    }
    return true;
};