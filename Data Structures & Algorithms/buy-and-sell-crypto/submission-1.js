class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0
        let l = 0

        for(let r = 1; r < prices.length; r++) {
            const profit = prices[r] - prices[l]
            if(profit <= 0) l = r
            else maxP = Math.max(maxP, profit)
        }

        return maxP
    }
}
