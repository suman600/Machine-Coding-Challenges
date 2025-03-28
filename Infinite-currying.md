# JavaScript Curried Sum Functions

This repository contains two implementations of a curried sum function in JavaScript.

## 📌 Function Implementations

Below are two different implementations of the curried sum function.

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
console.log(sum(1)(4)(6)(9)()); // 20
```

### 🏷️ Implementation 2 (Supports Multiple Arguments)

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

---

These implementations demonstrate how to use currying to create flexible sum functions that can accept an arbitrary number of arguments across multiple calls.

