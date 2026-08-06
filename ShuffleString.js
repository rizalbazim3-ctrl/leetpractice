/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let n = ""

    for(let i = 0; i<indices.length ; i++){
        n+=s[indices.indexOf(i)]
    }
    return n
};