public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        Dictionary<int, int> seen = new Dictionary<int,int>();

        foreach(int n in nums) {
            if(!seen.ContainsKey(n)) seen.Add(n, 0);
            seen[n] += 1;
        }
        
        List<int>[] frequencies = new List<int>[nums.Length + 1];
        foreach(int key in seen.Keys) {
            int freq = seen[key];
            if(frequencies[freq] == null) frequencies[freq] = new List<int>();
            frequencies[freq].Add(key);
        }

        int index = 0;
        int[] res = new int[k];
        for(int j = frequencies.Length - 1; j >= 0; j--) {
            if(frequencies[j] != null) {
                foreach(int n in frequencies[j]) {
                    res[index] = n;
                    index++;
                    if(index == k) return res;
                }
            }

        }

        return res;
    }
}
