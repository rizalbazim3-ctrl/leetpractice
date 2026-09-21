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
  
    let a = [];
    for(let i =0; i<ransomNote.length; i++){
        if(magazine.includes(ransomNote[i])){
            a.push(ransomNote[i])
        }else{
            return false;
        }
    }
    if(a.length === 0 || ransomNote.length > magazine.length) return false;

    for(let i = 0; i<a.length; i++){
        if(magazine.includes(a[i])){
            ac=0;
            bc=0;
            let d = magazine.indexOf(a[i]);
            for(let j=0; j<magazine.length; j++){
                if(magazine[d] === magazine[j]){
                    bc++;
                }
                if(a[i] === ransomNote[j]){
                    ac++;
                    console.log(a[i] + ac)
                }
            }
        }
        if(ac > bc){
            return false;
        }
    }
    return true;
};