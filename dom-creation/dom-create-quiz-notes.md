# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?

no, it simply creates the HTML element

- How do you add an element as a child to another element?

the appendChild method

- What do you pass as the arguments to the `element.setAttribute()` method?

2 args, an attribute and its value

- What steps do you need to take in order to insert a new element into the page?

1 - document.createElement() to specify the element type
2 - set any attributes or text content
3 - use the appendChild method to place it in the descendant order

- What is the `textContent` property of an element object for?

getter/setter
to access or modify the text content of the HTML element (and all its descendants)

- Name two ways to set the `class` attribute of a DOM element.

element.className = 'class'
element.setAttribute('class', 'newClass')

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

usability and easily read and maintained by others (ie: debugging)

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
