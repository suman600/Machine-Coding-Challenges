## JavaScript Curried Sum Functions

JavaScript curried sum functions break down a function that takes multiple arguments into a series of functions that each take one argument. This technique allows partial application and more flexible, reusable code.


## Code Example
Below is the JavaScript code used in this example:

### 🏷️ Implementation 1

```javascript
function sum(a) {
  if (a === undefined) a = 0;
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(1)(5)());      // 6
console.log(sum(1)(5)(8)());   // 14
```

### Implementation 2

```javascript
function sum(a) {
  if (a === undefined) a = 0;
  return function (...args) {
    if (args.length === 0) return a;
    var total = a;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }

    // Alternatively, using the reduce method:
    // return sum(a + args.reduce((acc, num) => acc + num, 0));

    return sum(total);
  };
}

console.log(sum(1)(5)());         // 6
console.log(sum(1, 4)(5, 9)());   // 19
console.log(sum(1, 2, 3)(4, 5)(6, 7, 8)()); // 36
console.log(sum()());             // 0
```

