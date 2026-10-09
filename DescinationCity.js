// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo" 
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let result = paths[0][1];
    let count = 0;
    
    for(let j =0; j<paths.length; j++){
        for(let i=0; i<paths[j].length; i++){
            if(paths[j].indexOf(result) !== -1 && paths[j].indexOf(result) < paths[j].indexOf(paths[j][i])){
                console.log(paths[j].indexOf(paths[j][i]));
                result = paths[j][i];
                j=0;
            }
        }
    }
    return result;
};