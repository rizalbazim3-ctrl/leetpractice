/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let a = 0
    for(let value of operations){
        if(value === "X++" || value === "++X"){
            a+=1
        }else if(value === "--X" || value === "X--"){
            a-=1
        }
    }
    return a
};