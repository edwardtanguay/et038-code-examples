
const nums = [4, 5, 6];

// one-liner
console.log(nums.reduce((total, num) => total + num, 0));

// function-body
console.log(nums.reduce((total, num) => {
	return total + num;
}, 0));

//named functions
const add = (total, num) => total + num; 
const multiply = (total, num) => total * num; 

console.log(nums.reduce(add, 0));
console.log(nums.reduce(multiply, 1));





