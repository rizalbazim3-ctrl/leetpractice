/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let c = []
    let d = []
    for( let i=1; i<=a; i++){
        if(a%i === 0){
            c.push(i)
        }
        if(b%i === 0){
            d.push(i)
        }
    }
    let e = []
    for(let j=0; j<c.length; j++){
        for(let k=0; k<d.length; k++){
            if(c[j] === d[k]){
                e.push(c[j])
            }
        }
    }
    return e.length
};
console.log(commonFactors(25,30))