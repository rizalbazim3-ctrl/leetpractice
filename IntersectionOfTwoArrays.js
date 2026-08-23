// Given two integer arrays nums1 and nums2, return an array of their intersection.
//  Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let a = [...new Set(nums1)]
    let b = [...new Set(nums2)]
    let d = [...a,...b]
    let c = [...new Set(d.filter((item) => d.indexOf(item) !== d.lastIndexOf(item)))]

    return c
};