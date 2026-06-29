public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        Dictionary<int, int> seen = new Dictionary<int,int>();

        foreach(int n in nums) {
            if(!seen.ContainsKey(n)) seen.Add(n, 0);
            seen[n] += 1;
        }
        return seen.Keys.OrderByDescending(n=>seen[n]).Take(k).ToArray();
    }
}
