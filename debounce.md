## Overview

The debounce function delays execution until a specified time has passed since the last invocation. Here, it's applied to an input field to log the value 400ms after typing stops.

## Code Example

Below is the JavaScript code used in this example:

```javascript
// HTML Structure:
// <input type="text" id="search" placeholder="Type something..." />

function debounce(func, delay) { // Fixed typo in 'delay'
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

let clickHandler = function(event) {
    console.log(`Value is: ${event.target.value}`);
};

let ele = document.getElementById('search');

if (ele) {  // Ensure the element exists before adding the event listener
    ele.addEventListener('input', debounce(clickHandler, 400));
}
