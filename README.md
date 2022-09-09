# Node.JS

Node.JS is a JavaScript runtime environment built using C++, that allows for javascript programs to be run outside the browser/

Node is non-blocking/asynchronous, and allows for asynchronous code through the use of promises

JavaScript, by nature is single threaded and when ran, it is intepreted line by line.

## Modules

Node uses modules as a way of separating code, akin to private variables/functions in Java.

- Every file in Node is described as a `module`
- All functions and keyword declarations are by default specfic to that file
- Without the module system, if we had the same function written in 2 files, one would overwrite the other
- Modules prevent this by ensuring that each module contains variables and functions that are scoped to the module itself

### Creating a module

We can use the `module` keyword within a file to create a module which exports some data:

- The `module` object contains the `exports` property, which is an object containing the exported data
- We can assign multiple properties to the exports object
- In cases where we only export one thing, we can overwrite the value of the exports object to our export

```js
//Example.js

function greet(name) {
  console.log(`Hello ${name}`);
}
module.exports.greet = greet;
```

### Accessing a module

To access a module we use the `require` keyword and reference a file. This returns the `exports` object for said module.

```js
//app.js
let example = require("./Example.js");

example.greet("Rakib");
```
