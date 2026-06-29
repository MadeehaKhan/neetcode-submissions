public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> strings = new Dictionary<string, List<string>>();

        foreach(string str in strs) {
            int[] count = new int[26];
            foreach(char c in str) {
                count[c-'a']++;
            }
            string key = string.Join('#', count);

            if(!strings.ContainsKey(key)) {
                strings.Add(key, new List<string>());
            }

            strings[key].Add(str);
        }
        return strings.Values.ToList<List<string>>();;
    }
}
