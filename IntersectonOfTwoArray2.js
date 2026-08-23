/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = []
    let count = {}
    for(let i=0; i<nums2.length; i++){
        count[nums2[i]] = (count[nums2[i]] || 0) + 1
    }
    for(let num of nums1){
        if(count[num] > 0){
            result.push(num)
            count[num]--
        }
    }
    return result
};