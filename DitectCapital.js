/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let a = word[0].toUpperCase()
    let b = word.toLowerCase()
    let c = b.replace(b[0],a)

    if(word === word.toUpperCase() || word === word.toLowerCase() || word === c ){
        return true
    }else{
        return false
    }
};