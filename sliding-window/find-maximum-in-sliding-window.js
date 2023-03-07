function findMaxSlidingWindow(nums, w) {
  if (w >= nums.length) {
      return[Math.max(...nums)];
  }

  let left = 0, right = w;
  const answer = [];

  while (right < nums.length + 1) {
      // console.log(`left: ${left}, right: ${right}`);
      const win = nums.slice(left, right);
      // console.log(win);
      left++;
      right++;
      answer.push(Math.max(...win));
  }

  // console.log(answer)
  // while(head.next !== null) {
  //     console.log(head.value);
  //     head = head.next;
  // }
  return answer;
};

// console.log(findMaxSlidingWindow([1,2,3,4,5,6,7,8,9,10], 3));
// console.log(findMaxSlidingWindow([3,3,3,3,3,3,3,3,3,3], 4));
// console.log(findMaxSlidingWindow([10,6,9,-3,23,-1,34,56,67,-1,-4,-8,-2,9,10,34,67], 2));
// console.log(findMaxSlidingWindow([4,5,6,1,2,3], 1));
// console.log(findMaxSlidingWindow([9,5,3,1,6,3], 2));
// console.log(findMaxSlidingWindow([1,2], 2));
// console.log(findMaxSlidingWindow());
// console.log(findMaxSlidingWindow());

const { Deque } = require('../lib');

const findMaxSlidingWindowBetter = (nums, size) => {
  const deque = new Deque();

  /* If windowSize is greater than the array size, */
  /* set the windowSize to nums.size() */ 
  if (size > nums.length) size = nums.length;

  const maxes = [];
  for (let i = 0; i < size; i++) {
    /* remove all the lesser ints */
    while (!deque.isEmpty() && nums[i] > nums[deque.peekBack()]) { deque.pop(); }
    
    /* add to the back of the queue */
    deque.push(i);
  }

  /* head of the queue has the max int from the first window */
  maxes.push(nums[deque.peekFront()]);

  /* now going through the nums from index size till the end */
  for (let i = size; i < nums.length; i++) {
    
    /* move the sliding window */
    while(!deque.isEmpty() && deque.peekFront() <= i - size) {
      deque.shift();
    }

    /* remove all the lesser ints */
    while (!deque.isEmpty() && nums[i] >= nums[deque.peekBack()]) { deque.pop(); }

    deque.push(i);

    maxes.push(nums[deque.peekFront()]);
  }

  return maxes;
};

console.log(findMaxSlidingWindowBetter([9,5,3,1,6,3], 2));