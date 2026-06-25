var removeElement = function(nums, val) {
    for (let i =0 ;i<=nums.length;  i++){
        if(nums.includes(val)){
            
            for(let j = 0; j<nums.length; j++){
                 if(nums[j] === val){
                    nums.splice(j,1)
        }
        i = 0;
            }
        }
    }
    const k= nums.length
    return k
};