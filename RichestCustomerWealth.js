// You are given an m x n integer grid accounts where accounts[i][j] 
// is the amount of money the i​​​​​​​​​​​th​​​
// ​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their 
// bank accounts. The richest customer is the customer that has the maximum wealth.

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = []
    for (let i =0; i<accounts.length; i++){
        richest.push(accounts[i].reduce((acc , sum)=>{
           return  acc + sum
        },0))
    }
    return Math.max(...richest)
};