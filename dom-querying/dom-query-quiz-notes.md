# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

to observe, evaluate and understand what's happening in the code

- What is a "model"?

a structured representation of the web page

- Which "document" is being referred to in the phrase Document Object Model?

root doc for us, the HTML doc

- What is the word "object" referring to in the phrase Document Object Model?

each element in the HTML doc

- What is a DOM Tree?

the tree-like structure of HTML elements

- Give two examples of `document` methods that retrieve a single element from the DOM.

querySelector() and getElementByID()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?

to store the reference for ease of access and manipulation because it takes a while to re-query the DOM every time you need to use it

- What `console` method allows you to inspect the properties of a DOM element object?

console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

it needs to read (parse) the entire HTML content first before the JS code can access it

- What does `document.querySelector()` take as its argument and what does it return?

the argument is css selector you specify or want to select and returns the first element

- What does `document.querySelectorAll()` take as its argument and what does it return?

the argument is the css selector you specify or want to select and returns all the elements that match

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
