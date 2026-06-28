public class Solution {
    public bool IsAnagram(string s, string t) {
        Dictionary<char, int> seen = new Dictionary<char, int>();

        foreach(char ch in s) {
            if(!seen.TryAdd(ch, 1)) {
                seen[ch] += 1;
            }
        }

        foreach(char ch in t) {
            if(!seen.ContainsKey(ch)) return false;
            seen[ch] -= 1;
            if(seen[ch] == 0) seen.Remove(ch);
        }

        return seen.Count == 0;

    }
}
