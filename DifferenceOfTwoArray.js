// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2,
//  whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore,
//  answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and 
// nums2[2] = 6 are not present in nums1. Therefore, answer[1] = [4,6].

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let a = []
    let b = []
    let c = Math.max(nums1.length,nums2.length)
    for(let i=0; i<c; i++){
        if(i<nums1.length && !nums2.includes(nums1[i])  && !a.includes(nums1[i])){
            a.push(nums1[i])
        }

        if(i<nums2.length && !nums1.includes(nums2[i])  && !b.includes(nums2[i])){
            b.push(nums2[i])
        }
    }


    return [a,b]
};