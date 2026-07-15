/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = nums.map((item)=> nums.push(item))
    return nums
};