/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let a = num.toString()
    let b = a.length
  for (let i=0; i<b; i++){
      let c = 0
      if(a.length > 1){
          for(let j=0; j<a.length; j++){
             c += Number(a[j])
        }    
        a = c.toString()
           }
      }
      return Number(a)
    
};
console.log(addDigits(385))