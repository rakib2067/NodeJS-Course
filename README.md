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

### The `Global` object

As established, Node is a Javascript runtime built ontop of a C++ engine. Therefore, it includes extra features that standard JS does not have, and also does not have certain features exclusive to the JavaScript web API. For instance:

- `setTimeout()`
- `console.log()`

Are standard JavaScript commands that can be accessed globally, no matter what environment the JS is running on. 

In browsers, the `window` object defines the global scope:

- All functions, variables and objects are wrapped with this object
- So `console.log` for example, is essentialy being called as `window.console.log()`

In Node, instead of the `window` object, we have the `global` object instead. Unlike `window`, the `global` object does not explicitly wrap over variables and functions within the file.

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

### Module wrapper function
