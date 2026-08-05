/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {

    let n = original

    if(!nums.includes(original)){
        return original
    }else{
        while(nums.includes(n)){
            n = n*2
        }
    }
    return n
    
};