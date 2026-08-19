/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {

    let data = await promise1
    let data1 = await promise2

        return data+data1

};
console.log(addTwoPromises(Promise.resolve(2), Promise.resolve(2)))
/**
 * 
 *   .then(console.log); // 4
 */