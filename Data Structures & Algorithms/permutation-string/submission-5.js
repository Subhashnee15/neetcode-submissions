class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        
        s1 = s1.split('').sort().join('');
            
        for (let i = 0; i <= s2.length - s1.length; i++) {
            let j = i + s1.length;
            let subStr = s2
                .slice( i , j)
                .split('')
                .sort()
                .join('');
            if (subStr === s1) {
                return true;
            }
        }
        return false;   
    }
}