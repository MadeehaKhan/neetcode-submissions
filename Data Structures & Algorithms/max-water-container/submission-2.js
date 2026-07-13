class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0
        let left = 0
        let right = heights.length-1

        while(left < right) {
            const width = right-left
            const height = Math.min(heights[left], heights[right])
            maxArea = Math.max(maxArea, width*height)
            if(heights[right]> heights[left]) left++
            else right--
        }

        return maxArea
    }
}
