// Given an integer array nums that does not contain any zeros, 
// find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.

 

// Example 1:

// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    const b = nums.length
    let c = false
    for(let i = 0; i<b; i++){
        let a = Math.max(...nums)
        if(nums.includes(-a)){
            c = a
            return a
        }else{
            nums.splice(nums.indexOf(a),1)
        }
    }

    if(!c){
        return -1
    }else{
        return c
    }
};