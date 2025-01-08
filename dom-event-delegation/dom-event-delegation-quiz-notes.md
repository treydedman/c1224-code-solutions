# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

the element in which the user interacted

- Why is it possible to listen for events on one element that actually happen its descendent elements?

event bubbling, when an event occurs on a particular DOM element, such as a click, it doesn't just affect that specific element-it ripples through its ancestors in the DOM hierarchy.

- What DOM element property tells you what type of element it is?

tagName = element.tagName

- What does the `element.closest()` method take as its argument and what does it return?

the arg: a CSS selector string
returns: the first ancestor of the specified selector

- How can you remove an element from the DOM?

with the remove method: element.remove();

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

use event bubbling: create an event listener on a parent element so it will
bubble up the DOM tree

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
