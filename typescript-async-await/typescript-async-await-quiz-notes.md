# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

to simplify asynchronous programming

async - is used to identify a function as asynchronous, indicating that it might contain operations that could take time to complete
-and it always returns a promise

await - is used to indicate that the JavaScript Runtime should "wait" or "pause" until the asynchronous function completes, then return the result of that operation
-and its only valid inside async functions

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

-async and await are easier to read and write

-use try catch

- When do you use `async`?

when you want to return a promise
Its power really shines when asynchronous functions are chained, with the results of one function being used in a subsequent function

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

only when you use async

when you don't use async

it gets lost

- How do you handle errors with `await`?

with try and catch blocks

- What do `try`, `catch` and `throw` do? When do you use them?

try - runs code to try

catch - runs code to handle any error

throw - unchecked exceptions and custom error messages

use them for error handling

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

there is no wait for the resolution and code executing continues without waiting in a pending state

its unhandled

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

async/await because of its ease to read

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
