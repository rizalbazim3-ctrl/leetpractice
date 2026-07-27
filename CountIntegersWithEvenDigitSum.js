// Given a positive integer num, return the 
// number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
      let count = 0
    let z = []
    for(let i =1; i<=num; i++){
         let b = 0
         let m = String(i).split("")
    for(let j =0; j<m.length; j++ ){
         b += Number(m[j])
    }
    if(b%2===0){
        z.push(b)
    }
    }
    return z.length
};