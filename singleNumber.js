// Given a non-empty array of integers nums, 

// every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use 
// only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let i=0; i<nums.length; i++){
         let count = 0;
        for( let j=0; j<nums.length;j++){
            if( nums[j] === nums[i]){
                count++
            }
        }
         if(count === 1){
                return nums[i]
            }
    }
}
