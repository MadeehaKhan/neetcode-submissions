class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = []
        const suffix = []

        const n = height.length
        prefix[0] = height[0]
        suffix[n-1] = height[n-1]

        for(let i = 1; i < n; i++) {
            prefix[i] = Math.max(prefix[i-1], height[i])
        }

        for(let i = n-2; i >= 0; i--) {
            suffix[i] = Math.max(suffix[i+1], height[i])
        }

        let waterTrapped = 0
        for(let i = 0; i < n; i++) {
            waterTrapped += Math.min(prefix[i], suffix[i])-height[i]
        }
        return waterTrapped
    }
}
