# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?

NPM, or Node Package Manager, is a free, open-source registry and library for JavaScript packages

- What is a package?

An npm package is a reusable piece of code that can be shared, installed, and managed using npm.

- What are some other popular package managers?

YUM, Homebrew

- How can you create a `package.json` with `npm`?

npm init command and I used the -y flag

- What is a dependency and how do you add one to a package?

what:
an external library or package that your project requires to function correctly.

how:
npm install package-name

- What happens when you add a dependency to a package with `npm`?

npm downloads the package and places it inside the node_modules directory of your project

- What is a devDependency and how do you add one to a package?

a package that is only needed for development tasks like testing, building, and formatting code

use the --save-dev flag

- How do you define and run `npm` scripts? Why are these useful?

npm scripts are defined in the "scripts" field of your package.json file

its run from the command line using npm run script-name

automation, consistency, and simplicity

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
