# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

the property of an event that triggered that event

- What is the effect of setting an element to `display: none`?

it removes the element from the webpage - not just invisible, but it no longer occupies any space in the layout

\*\* No space in layout: the element does not occupy any space in the page layout, unlike "visibility: hidden" which still takes up space.

\*\* Not accessible to screen readers: Screen readers will skip over elements with "display: none".

- What does the `element.matches()` method take as an argument and what does it return?

arg = css selector
return = true or false (boolean)

- How can you retrieve the value of an element's attribute?

getAttribute()

- At what steps of the solution would it be helpful to log things to the console?

every step

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?

add an event listener for each tab

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?

create separate functions and/or create conditional statements

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
