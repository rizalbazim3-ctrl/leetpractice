// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists 
// of subarrays each of length size. The length of the last subarray may be less than size
//  if arr.length is not evenly divisible by size.

// Please solve it without using lodash's _.chunk function.

 

// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
      let n = Math.ceil(arr.length/size)
    let b = []
    
    for(let i=0; i< n; i++){
        b.push(arr.slice(i*size,i*size+size))
    }
    return b
    
};
