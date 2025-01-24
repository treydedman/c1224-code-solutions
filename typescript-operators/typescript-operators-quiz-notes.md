# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

logical && - use the logical AND operator to check for truthy values in variables and take action based on those checks

logical || - use the logical OR operator to set default values or take alternate actions when variables hold falsy values

they can be used outside of if statements using a short-circuit evaluation

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

a programming concept that skips evaluating the second part of a Boolean expression if the first part is enough to determine the value of the expression and can be completed on a single line

&& - evaluates left to right, if the first/left side statement is false, it stops because the whole expression cannot be true. However, if the first/left side statement is true, it continues to evaluate the second/right side

|| - evaluates left to right, if the left side is truthy, it stops because the whole expression wil be true. However, if the first/left side is falsy, it will continue to evaluate the second/ride side

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

The nullish coalescing operator (??) only returns the right-hand value if the left-hand value is explicitly "null" or "undefined"

while the logical OR operator (||) returns the right-hand value if the left-hand value is any falsy value, including 0, empty strings, or false

this makes the nullish coalescing operator (??) more specific or more precise as it only evaluates null or undefined

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

the ternary operator (?:) allows you to concisely write conditional logic, basically its shorthand for an if-else statement

you can return a value to get assigned to a variable.
an if/else must always execute both arguments and ternary (?:) must only execute the correct side,
also, the ternary operator is a statement while an if/else is a code block

- What is the `?.` (optional chaining) operator? When would you use it?

you can apply it to safely access properties on objects that might not exist, preventing runtime errors due to undefined or null object properties

use it to
Safely access deeply nested properties.
Prevent errors in accessing properties of potentially null/undefined objects.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

const newArr = [...arr, 4];
const obj2 = { ...obj1 };

arrays: copy, combine, insert elements

objects: copy, merge, add or update properties

- What data types can be spread into an array? Into an object?

into an array:
Arrays: You can spread the elements of an array into a new array.
Iterables: Any iterable object (e.g., Set, Map keys/values, etc.) can be spread into an array.
Strings: A string is considered an iterable, so you can spread it into an array of characters.

into an object:
Objects: You can spread the properties of one object into a new object.
Arrays: When spreading an array into an object, the array's indices are treated as keys.
Other iterable objects: Some iterable objects (e.g., Map entries) can be spread into objects, but this is less common.

Arrays can be spread into both arrays and objects (as keys in the case of objects).
Strings and other iterables (like Set) can be spread into arrays.

Objects can be spread into objects to copy properties.

- How does spread syntax differ from rest syntax?

Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
