    /**
    * @param {number[]} nums
    * @return {number}
    */
    var findGCD = function(nums) {
        let a = Math.max(...nums)
        let b = Math.min(...nums)
        
        let c = []
        for(let i = 1; i<=a; i++){
            if(a%i === 0){
                c.push(i)
            }
            if(b%i === 0){
                c.push(i)
            }
        }
    let d =Math.max(... [...new Set(c.filter((item,index) => c.indexOf(item) !== index ))])
        return d
    };
    