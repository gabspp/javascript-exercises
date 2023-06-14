
const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    } else if (a<0 || b < 0) {return 'ERROR';} else {let sum = 0;
        if (a > b) {
          [a, b] = [b, a];
        }
        for (let i = a; i <= b; i++) {
          sum += i;
        }
        return sum;}
    return;
} 



// # Exercise 05 - sumAll

// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```


// ## Hints

// Think about how you would do this on pen and paper and then how you might translate that process into code:
// - make sure you pay attention to the function parameters
// - create a variable to hold the final sum
// - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
// - on each iteration add the number to the sum
// - return the sum after finishing the loop


// Do not edit below this line
module.exports = sumAll;
