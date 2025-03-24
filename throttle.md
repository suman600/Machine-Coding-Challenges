## Overview

The throttle function ensures that a function executes at most once every specified delay, even if it is triggered continuously. Here, it is applied to an input field to log the value once every 500ms while typing.

## Code Example

Below is the JavaScript code used in this example:

```javascript
// HTML Structure:
// <input type="text" id="search" placeholder="Type something..." />

function throttle(func, delay) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null; // Reset timer
            }, delay);
        }
    };
}

let handleInput = function(event) {
    console.log(`Value is: ${event.target.value}`);
};

let ele = document.getElementById('search');

if (ele) {  // Ensure the element exists before adding the event listener
    ele.addEventListener('input', throttle(handleInput, 500));
}
