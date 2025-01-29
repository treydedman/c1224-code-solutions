# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?

a promise
the outcome of the response request - either fulfilled request or error(but only something like a network error), otherwise its fulfilled

this is why we have to check the status of the response - response.status

- What is the default request method used by `fetch()`?

GET method

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

you have to pass an option object as the second argument to fetch()
by setting the method property

const response = await fetch("https://example.org/post", {
method: "POST",
});

- How does `fetch` report errors?

it only rejects the promise in the event of a network failure or if something prevented the request from completing, otherwise it considers the promise resolved or fulfilled.

this is why we have to check the status of the response - response.status
if !response.ok (200's) then show response.status
in other words, we deal with the status code within our response handling logic

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
