// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minValue = -Number.NEGATIVE_INFINITY;
    let maxValue = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i];
        }
        else {
            maxValue = Math.max(maxValue, prices[i] - minValue);
        }
    }
    return maxValue;
};