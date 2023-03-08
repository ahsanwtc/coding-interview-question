## Sliding Window

### Find Maximum in Sliding Window
Given an integer array `nums` and a window of size `w`, find the current maximum value in the window as it slides through the entire array.

#### Constraints:
- $1 \leq nums.length \leq 10^3$
- $-10^4 \leq nums[i] \leq 10^4$
- $1 \leq w$

#### Solution
[find-maximum-in-sliding-window.js](./sliding-window/find-maximum-in-sliding-window.js)


### Minimum Window Subsequence

Given strings `str1` and `str2`, find the minimum (contiguous) `substring` subStr of `str1`, such that every character of `str2` appears in `subStr` in the same order as it is present in `str2`.

> If there is no window in `str1` that covers all characters in `str2`, return an empty string.

> If there are multiple minimum-length windows, return the one with the leftmost starting index.

#### Constraints:
- $1 \leq str1.length \leq 2 * 10^3$
- $1 \leq str2.length \leq 100$
- `str1` and `str2` consist of uppercase and lowercase English letters.

#### Solution
1. Initially, two pointers, `indexS1` and `indexS2`, point to the start of `str1` and `str2` respectively. The length variable will store the length of minimum subsequence, whereas the `answer` variable will contain the minimum window subsequence.
2. Slide `indexS1` until the character pointed to by `indexS1` in `str1` is the same as the character pointed to by `indexS2` in `str2`.
3. When reaching a point where the character in `str1` is the same as that of the character in `str2`, slide both the pointers. It should also be checked at this point whether or not there is a subsequence. Since no subsequence has been found yet, slide both the pointers.
4. Again, keep sliding the `indexS1` until the character pointed by `indexS1` pointer in `str1` is equal to the character pointed to by `indexS2` in `str2`.
5. When reaching a point where every character of `str2` appeared in `str1`, in the same order as it is present in `str2`, slide `indexS2`. Now check the minimum subsequence in the reverse direction.
6. To check the minimum subsequence in reverse direction, create two more pointers, `start` and `end`, to slide the window in the opposite direction. `start` will point to `indexS1` and `end` will point to `indexS1 + 1`. Also, decrement `indexS2` by one.
7. In a reverse loop, slide the `start` pointer to find the starting point of the required subsequence. Slide `indexS2` in opposite direction only when the character pointed to by the `start` pointer in `str1` is equal to the character pointed to by `indexS2` in `str2`.
8. Because the character pointed to by `start` pointer in `str1` is equal to the character pointed to by `indexS2` in `str2`, move `indexS2` along with the `start` pointer.
9. Keep sliding the `start` pointer until the character pointed by `start` pointer in `str1` is equal to the character pointed to by `indexS2` in `str2`.
10. Because all characters of `str2` are found in `str1`, move the `start` pointer in the forward direction by one and then calculate the length of a substring by subtracting the values of the `end` and `start` variables.
11. If the length of the substring in the stored `length` is greater than the new `length`, update the stored `length` and `answer` subsequence variables respectively.
12. Repeat the steps until `indexS1` reaches the size of `str1`.

[minimum-window-subsequence.js](./sliding-window/minimum-window-subsequence.js)