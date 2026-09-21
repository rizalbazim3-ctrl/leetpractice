// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ac = 0;
    let bc = 0;
  
   
    if( ransomNote.length > magazine.length) return false;

    for(let i = 0; i<ransomNote.length; i++){
        if(!magazine.includes(ransomNote[i])){
            return false
        }
        if(magazine.includes(ransomNote[i])){
            ac=0;
            bc=0;
            let d = magazine.indexOf(ransomNote[i]);
            for(let j=0; j<magazine.length; j++){
                if(magazine[d] === magazine[j]){
                    bc++;
                }
                if(ransomNote[i] === ransomNote[j]){
                    ac++;
                }
            }
        }
        if(ac > bc){
            return false;
        }
    }
    return true;
};