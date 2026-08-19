/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let b = []
    let i = 0
    while(b.length !== heights.length){
        
        b.push(heights[i])
        i++
    }
    b.sort((a,b)=>a-b) 
    let count = 0
    for(let i = 0; i<heights.length; i++){
        
        if(heights[i] !== b[i]){
            count++
        }

    }
    return  count
    
};

console.log(heightChecker([1,1,3,4,2]))