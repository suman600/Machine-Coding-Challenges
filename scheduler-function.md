
# JavaScript Task Scheduler

```js
function createScheduler() {
  const taskQueue = [];
  let isRunning = false;

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const run = async () => {
    isRunning = true;
    while (taskQueue.length > 0) {
      const { task, delay } = taskQueue.shift();
      await wait(delay);
      await task();
    }
    isRunning = false;
  };

  const addTask = (task, delay) => {
    taskQueue.push({ task, delay });
    if (!isRunning) run();
  };

  return { addTask };
}
```

---

```js
console.log("Starting scheduler test...");

const scheduler = createScheduler();

scheduler.addTask(() => console.log("✅ Task 1 after 1s"), 1000);
scheduler.addTask(() => console.log("✅ Task 2 after 2s (after Task 1)"), 2000);
scheduler.addTask(() => console.log("✅ Task 3 after 1.5s (after Task 2)"), 1500);
```

#### 🕒 Expected Output in Console:

```
Starting scheduler test...
✅ Task 1 after 1s           // after 1 second
✅ Task 2 after 2s           // after 3 seconds total
✅ Task 3 after 1.5s         // after 4.5 seconds total
```

---
