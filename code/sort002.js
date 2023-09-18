
const nums = [12, 55, 7, 5, 4, 6, 66, 444, 1, 333];

// sorts numbers as if they were strings
console.log(nums.sort());

// sort in ascending order
console.log(nums.sort((a,b) => a > b ? 1 : -1));

// sort in descending order
console.log(nums.sort((a,b) => a > b ? -1 : 1));


