/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    if (nums.length === 2) {
        return [0, 1]
    }
    // make an object that has the element as the key and the index as the value 
    // if it exists return that val and the current index
    // if it doesnt exist, then add it to the object
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i]
        let diff = target - ele
        if(seen[diff] !== undefined){
            return [seen[diff], i]
        } else {
            seen[ele] = i
        }
    }
};
// beats 80-90% of javascript submissions
