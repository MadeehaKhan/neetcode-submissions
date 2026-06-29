public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        Dictionary<string, List<string>> strings = new Dictionary<string, List<string>>();

        foreach(string str in strs) {
            char[] charArr = str.ToCharArray();

            Array.Sort(charArr);
            string sorted = new string(charArr);

            if(!strings.ContainsKey(sorted)) {
                strings.Add(sorted, new List<string>());
            }

            strings[sorted].Add(str);
        }
        return strings.Values.ToList<List<string>>();;
    }
}
