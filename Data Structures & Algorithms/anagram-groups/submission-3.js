class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const createKey = (str) => {
            const count = new Array(26).fill(0);
            for (let c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            return count.join(',')
        }
        const seen = new Map()
        for(let str of strs) {
            const key = createKey(str)
            const vals = seen.get(key) || []
            vals.push(str)
            seen.set(key, vals)
        }

        return Array.from(seen.values())
    }
}
