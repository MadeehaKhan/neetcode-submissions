class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlpha = (ch) => {
            return (
                (ch >= 'a' && ch <= 'z') ||
                (ch >= 'A' && ch <= 'Z') ||
                (ch >= '0' && ch <= '9')
            )
        }

        let left = 0
        let right = s.length-1

        while(left < right) {
            while(left < right && !isAlpha(s[left])) {
                left++
            }
            while(left < right && !isAlpha(s[right])) {
                right--
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
            left++
            right--
        }

        return true
    }
}
