class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen = new Map()

        for(let ch of s) {
            seen.set(ch, (seen.get(ch) || 0) + 1)
        }

        for(let ch of t) {
            if(!seen.has(ch)) return false
            if(seen.has(ch)) seen.set(ch, seen.get(ch)-1)
            if(seen.get(ch) === 0) seen.delete(ch)
            
        }

        return seen.size===0
    }
}
