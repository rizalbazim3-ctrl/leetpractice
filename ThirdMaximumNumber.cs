// 414. Third Maximum Number
public class Solution {
    public int ThirdMax(int[] nums) {
        int[] arr = nums.Sort().Distinct().ToArray();

        if(arr.Length > 2){
            return arr[2];
        }
        return arr[0];
    }
}