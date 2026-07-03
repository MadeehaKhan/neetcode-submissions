public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        //create prefix array
        //create suffix array
        //multiply the entries to create output
        int n = nums.Length;
        int[] prefix = new int[n];
        int[] suffix = new int[n];
        int[] output = new int[n];

        prefix[0] = 1;
        suffix[suffix.Length-1] = 1;

        for(int i = 1; i < n; i++) {
            prefix[i] = prefix[i-1] * nums[i-1];
        }

        for(int j = suffix.Length-2; j >= 0; j--) {
            suffix[j] = suffix[j+1] * nums[j+1];
        }

        for(int k = 0; k < n; k++) {
            output[k] = prefix[k] * suffix[k];
        }

        return output;
        
    }
}
