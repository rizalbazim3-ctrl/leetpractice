// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋
//  times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let a = [...new Set(nums.filter((value)=> nums.indexOf(value) !== nums.lastIndexOf(value)))]
    if(a.length === 1){
        return a[0]
    }else if(nums.length === 1){
        return nums[0]
    }
    let b = []
    for(let i=0; i<a.length; i++){
        let count = 0
        for(let j=0; j<nums.length; j++ ){
            if(a[i] === nums[j] ){
                count++
            }
        }
        b.push(count)
    }
    let c = b.indexOf(Math.max(...b))
    return a[c]
};