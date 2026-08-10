/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // best case, return if length 1 or 2
  if (nums.length < 2) {
    return nums
  }
  //1. break into two smaller arrays
  const length = nums.length;
  const middle = Math.floor(length/2); //floor rounds up
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);
  //2. call mergeSort on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  //3. return the merge of left amd right
  return merge(sortedLeft, sortedRight);
};

//left and right are already sorted!!!
const merge = (left, right) => {
  //return one sorted array
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift()); // shift gets the fist item of the array
    } else {
      results.push(right.shift())
    }
  }
  return results.concat(left,right) //one side can be empty, but concat in an empty array does nothing
}

test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
