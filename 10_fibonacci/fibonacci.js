const fibonacci = n => {
  if (n <= 1) {
    return n;
  }

  let a = 0, b = 1, c = n; 
  
 for(let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
   
  }

return c
};

console.log(fibonacci(12))

// Do not edit below this line
module.exports = fibonacci;
