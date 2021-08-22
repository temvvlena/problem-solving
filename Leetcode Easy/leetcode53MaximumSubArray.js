// https://leetcode.com/problems/maximum-subarray/submissions/
// Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = (nums) => {
    /*
    -2, 1, -3, 4, -1, 2, 1, -5, 4
    
    */
    var currentSubarray = nums[0];
    var maxSubarray = nums[0];
    for (i = 1; i < nums.length; i++) {
        let num = nums[i];
        // If the currentSubArray is negative, throw it away
        currentSubarray = Math.max(currentSubarray + num, num);
        maxSubarray = Math.max(maxSubarray, currentSubarray);
    }
    return maxSubarray;
};