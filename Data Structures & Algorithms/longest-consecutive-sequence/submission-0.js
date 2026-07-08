class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLen = 0
        const numSet = new Set(nums)

        for(let num of nums) {
            let len = 0
            let curr = num
            while(numSet.has(curr)) {
                len++
                curr++
            }
            maxLen = Math.max(maxLen, len)
        }

        return maxLen
        
    }
}
