// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
 let i = 0
    nums.forEach((item)=> {
        
        if(nums[i] === 0){
            nums.splice(i,1)
            nums.push(0)
            
            console.log(i)
        }
        else{
            i++
        }
    })

    return nums

};