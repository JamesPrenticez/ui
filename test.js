/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  for(i=0; i < nums.length; i++){
    console.log(i)
    for(j=i+1; j < nums.length; j++){
        console.log(j)
          if(nums[i] + nums[j] == target) return [i, j]
      }
  }
};

console.log(twoSum([3,2,3], 6))