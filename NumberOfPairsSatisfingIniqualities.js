// You are given two 0-indexed integer arrays nums1 and nums2, each of size n, and an integer diff. Find the number of pairs (i, j) such that:

// 0 <= i < j <= n - 1 and
// nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff.
// Return the number of pairs that satisfy the conditions.

 

// Example 1:

// Input: nums1 = [3,2,5], nums2 = [2,2,1], diff = 1
// Output: 3
// Explanation:
// There are 3 pairs that satisfy the conditions:
// 1. i = 0, j = 1: 3 - 2 <= 2 - 2 + 1. Since i < j and 1 <= 1, this pair satisfies the conditions.
// 2. i = 0, j = 2: 3 - 5 <= 2 - 1 + 1. Since i < j and -2 <= 2, this pair satisfies the conditions.
// 3. i = 1, j = 2: 2 - 5 <= 2 - 1 + 1. Since i < j and -3 <= 2, this pair satisfies the conditions.
// Therefore, we return 3.

var numberOfPairs = function(nums1, nums2, diff) {

    let arr = nums1.map((num, i) => num - nums2[i]);

    let count = 0;

    function mergeSort(left, right) {

        if (right - left <= 1) {
            return;
        }

        let mid = Math.floor((left + right) / 2);

        mergeSort(left, mid);
        mergeSort(mid, right);

        let j = mid;

        // Count valid pairs
        for (let i = left; i < mid; i++) {

            while (j < right && arr[i] > arr[j] + diff) {
                j++;
            }

            count += right - j;
        }

        // Merge sorted halves
        let temp = [];
        let i = left;
        j = mid;

        while (i < mid && j < right) {

            if (arr[i] <= arr[j]) {
                temp.push(arr[i++]);
            } else {
                temp.push(arr[j++]);
            }
        }

        while (i < mid) {
            temp.push(arr[i++]);
        }

        while (j < right) {
            temp.push(arr[j++]);
        }

        for (let k = 0; k < temp.length; k++) {
            arr[left + k] = temp[k];
        }
    }

    mergeSort(0, arr.length);

    return count;
};