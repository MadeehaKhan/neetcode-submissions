class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const seen = new Map()
        for(let num of nums) {
            const count = seen.get(num) || 0
            seen.set(num, count+1)
        }
        
        const frequencies = []
        for(let [key, freq] of seen.entries()) {
            const vals = frequencies[freq] || []
            vals.push(key)
            frequencies[freq] = vals
        }

        const res = []
        for(let i = frequencies.length-1; i >= 0; i--) {
            console.log(frequencies, i, frequencies[i])
            if(!frequencies[i]) continue
            for(let num of frequencies[i]){
                res.push(num)
                if(res.length===k) return res    
            }
        }
        return res
    }
}
