// Given an array nums containing n distinct numbers 
// in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const a = nums.length

    for(let i=0; i<=a; i++){
        if(!nums.includes(i)){
            return i
        }
    }
};