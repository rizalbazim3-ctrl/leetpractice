/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let n = nums.reduce((s,v) => { 
        return s+v 
        
    },0)
    let w = nums.join("").split("")
    let x = w.map((v)=> Number(v))
    let z = x.reduce((s,v)=> s+v ,0) 
    return n-z 
};

console.log(differenceOfSum([1,15,6,3]))