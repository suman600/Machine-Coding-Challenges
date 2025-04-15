## LRU Cache (Search Bar History)
This is a simple **Least Recently Used (LRU) Cache** implementation in JavaScript using `Map`. It stores recent search queries and removes the oldest one when the cache reaches its capacity. This is useful for search bars that remember a limited number of past searches.

## Code Example

Below is the JavaScript code used in this example:

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  search(query) {
    if (this.cache.has(query)) {
      this.cache.delete(query); // Move existing query to recent position
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // Remove least recently used
    }
    this.cache.set(query, true);
    console.log(`Searched: "${query}"`); // Log each search
  }

  getSearchHistory() {
    return Array.from(this.cache.keys()).reverse(); // Most recent first
  }
}

// Create LRU Cache with capacity of 3
const searchCache = new LRUCache(3);

searchCache.search('yahoo');
searchCache.search('google');
searchCache.search('YT');
console.log("Search History:", searchCache.getSearchHistory()); // ["YT", "google", "yahoo"]

searchCache.search('FB'); // This will remove "yahoo"
console.log("Search History:", searchCache.getSearchHistory()); // ["FB", "YT", "google"]
```

## How It Works
1. **User searches for terms** → Stored in the cache.
2. **If the same term is searched again** → It moves to the most recent position.
3. **If the cache is full** → The oldest (least used) term is removed.
4. **Calling `getSearchHistory()`** → Returns history in most recent order.

## Example Execution
```plaintext
Searched: "yahoo"
Searched: "google"
Searched: "YT"
Search History: [ 'YT', 'google', 'yahoo' ]

Searched: "FB"
Search History: [ 'FB', 'YT', 'google' ]
```