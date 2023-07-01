const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
	
};

const sum = function(arr) {
  return arr.reduce ((a, b) => a + b, 0)
	
};


const multiply = function() {
 const args = [...arguments];
 const result = args.reduce((a, b) => {
  return b?b * a : b + a
 }, 1)
return result
}

const power = function(a, b) {
  return a ** b
	
};

const factorial = function(num) {
  if (num < 0) 
  return -1;
   else if (num == 0) 
  return 1;

  else { return (num *factorial(num - 1))}
	
};


function factorialize2(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
