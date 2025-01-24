# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:
  - What does `Array.forEach` do?

executes a provided function once for each array element in ascending-index order

it always returns undefined and is not chainable

- What should the callback function do?

Function to execute on each element, taking three arguments:
currentValue: The current element being processed in the array.
index (Optional): The index of the current element being processed in the array.
array (Optional): The array that forEach() is being applied to.
thisArg (Optional): Value to use as this when executing callback.

- What is `Array.forEach` useful for?

The typical use case is to execute side effects at the end of a chain

- `Array.map`:
  - What does `Array.map` do?

it creates a new array populated with the results of calling a provided function on every element in the calling array

- What should the callback function return?

A new array with each array element of the callback function

- What is `Array.map` useful for?

transforming and/or extracting array elements or properties of objects in an array of objects

- `Array.find`:
  - What does `Array.find` do?

returns the value of the first element in the provided array that satisfies the provided testing function

- What should the callback function return?

a boolean to find a matching element

- What is `Array.find` useful for?

if you only need a single value

- `Array.filter`:
  - What does `Array.filter` do?

it creates a new array with all elements that pass the test implemented by the provided function

- What should the callback function return?

returns true to keep the element, and false returns an empty array

- What is `Array.filter` useful for?

it allows you to filter an array to only see elements that meet a specified condition

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
