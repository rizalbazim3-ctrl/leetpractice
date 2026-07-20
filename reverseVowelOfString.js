// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can 
// appear in both lower and upper cases, more than once.

 /**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let a = s.split("").reverse().join("")
    let n = ""
    let p = 0
    let vowel = ""
    for(let i=0; i<s.length;i++){
        if("aeiouAEIOU".includes(s[i])){
            vowel+=s[i]
        } 
    }
    for(let j=0; j<a.length; j++){
        if("aeiouAEIOU".includes(a[j]) && vowel !== 0){
            p++
            if(vowel.length >= p-1){
                 n+=vowel[p-1]
            }
        }else{
            n+=a[j]
        }
    }
    return n.split("").reverse().join("") 
};