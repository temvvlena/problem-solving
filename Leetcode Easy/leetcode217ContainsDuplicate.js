// https://leetcode.com/problems/contains-duplicate/
// 217. Contains Duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = (nums) => {
    //     let mySet = new Set();
    //     for(i=0; i<nums.length; i++){
    //         mySet.add(nums[i])
    //     }
    //     return mySet.size !== nums.length

    // let myHash = new Map();
    // for(i=0; i<nums.length; i++){
    //     if (myHash.has(nums[i])){
    //         return true;
    //     } 
    //     else{
    //         myHash.set(nums[i], 1);
    //     }
    // }
    // console.log(myHash.size)
    // return false;


    let myHash = {};
    for (i = 0; i < nums.length; i++) {
        if (nums[i] in myHash) {
            return true;
        }
        else {
            myHash[nums[i]] = 1;
        }
    }
    console.log(Object.keys(myHash).length)
    return false;
};