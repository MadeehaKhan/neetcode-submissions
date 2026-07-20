class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxL = 0
        const seen = new Set()
        let l = 0

        for(let r = 0; r < s.length; r++) {
            while(seen.has(s[r])) {
                    seen.delete(s[l])
                    l++
                } 
                seen.add(s[r])
                maxL = Math.max(maxL, seen.size)
    
        }
        return maxL
    }
}
