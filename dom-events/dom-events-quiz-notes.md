# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

to observe, evaluate and understand what's happening in the code

- What is the purpose of events and event handling?

events are actions or occurrences that happen in the browser, such as a user clicking a button, submitting a form, or even hovering over an element

event handling are functions that respond to events or user actions or interactions with a web page, such as clicking a button or pressing a key.

- Are all possible parameters required to use a JavaScript method or function?

no, only the necessary parameters to override the default values.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

event listener: addEventListener()

- What is a callback function?

a callback function is a function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?

the event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

it refers to the element that is responsible for firing the event

log the event.target in the console = console.log(event.target)

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

the first is a method you defined
the second is a built-in method

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
