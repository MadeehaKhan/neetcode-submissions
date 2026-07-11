class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let maxLen = 0

        for(let num of numSet.keys()) {
            let len = 0
            let curr = num
            while(numSet.has(curr)) {
                curr++
                len++
            }
            maxLen = Math.max(len, maxLen)
        }

        return maxLen
    }
}
