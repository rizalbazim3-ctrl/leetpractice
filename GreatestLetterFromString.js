// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let a = "";

    for(let i=0; i<s.length; i++){
        if(s[i] === s[i].toLowerCase() && s.includes(s[i].toUpperCase()) && 
        !a.includes(s[i].toLowerCase()) && !a.includes(s[i].toUpperCase()) && a<s[i].toUpperCase()){
           
                a = s[i].toUpperCase();
            
        }else if(s[i] === s[i].toUpperCase() && s.includes(s[i].toLowerCase())
        && !a.includes(s[i].toLowerCase()) && !a.includes(s[i].toUpperCase()) && a<s[i].toUpperCase()){
           
                a = s[i].toUpperCase();
            
        }
        
    }

    return a;
};