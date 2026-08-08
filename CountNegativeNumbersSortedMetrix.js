// Given a m x n matrix grid which is sorted in non-increasing order both 
// row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0

    for(let i=0; i<grid.length; i++){
        let n = grid[i]
        for(let j=0; j<n.length; j++){
            if(n[j]<0){
                count ++
            }
        }
    }
    return count
};