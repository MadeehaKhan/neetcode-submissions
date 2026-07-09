class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //create map of frequencies
        const seen = new Map()
        for(let num of nums) {
            const count = seen.get(num) || 0;
            seen.set(num, count + 1);
        }

        //create frequency buckets
        const frequencies = []
        for(let key of seen.keys()){
            const freq = seen.get(key)
            if(!frequencies[freq]) frequencies[freq] = []
            frequencies[freq].push(key)
        }

        const res = []
        for(let i = frequencies.length-1; i >= 0; i--) {
            if(frequencies[i]) {
                for(let num of frequencies[i]){
                    res.push(num)
                    if(res.length === k) return res;
                }
            }
        }

        return res
        
    }
}
