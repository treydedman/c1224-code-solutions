# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

callback functions associated with asynchronous operations are placed into a queue,
and the JavaScript runtime environment has a continuously running event loop that checks this queue and processes the callbacks in the order they were received.

- What are the three states a Promise can be in?

pending
fulfilled
rejected

- How do you handle the fulfillment of a Promise?

.then method

- How do you handle the rejection of a Promise?

.catch method

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
