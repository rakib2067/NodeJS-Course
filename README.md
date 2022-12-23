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

So modules allow us to scope variables and functions to that specific module. i.e. They're private and not visible to the outisde.

This is because each module in Node is wrapped in a special function called the `Module Wrapper Function`

The Module Wrapper Function is an Immediately Invoked Function Expression (IIFE), which wraps every module. It contains a couple of parameters:

- exports: A shortcut/reference to the `module.exports` object
- require: This is a function local to each module, which allows us to import other modules
- module: Allows us to create a module, and add exports to it
- `__filename`: The complete path to the file/module
- `__dirname`: The complete path to the containing directory

```js
(function (exports, require, module, __filename, __dirname) {
  //module code
});
```

### Path Module

The path module is imported using:

```js
const path = require("path");
```

As we have simply specified `'path'` as an argument, Node assumes it is a built in module.

If there is no built in module matching the argument passed in `require`, then Node looks for the existence of a relative path to a file in the application.

The `path` module is an object which comes with many functions

e.g. `path.parse(__filename)`

would return an object containing properties of the specified path

### OS Module

The OS module is imported using:

```js
const os = require("os");
```

It provides a lot of useful os related utility methods and properties

```js
os.totalmem();
os.freemem();
```
As opposed to JS in the browser (Web API), Node runs outside the browser and can utilise stuff like the OS to get information as seen above.

### File System Module

The File System module is imported using:

```js
const fs = require("fs");
```

This module provides many utility methods for interacting with files.
The FS module comes with 2 types of each method:
- blocking: Synchronous 
- non-blocking: Asynchronous

Although almost always the non-blocking methods are used. As javascript is single threaded, performing a synchronous operation like reading a huge file is not ideal.

```js
const syncFile = fs.readdirSync('./');
fs.readdir('./', (err, files) => {
  if (err) console.log(err);

  else console.log(files)
})
```

In the above example we are reading all files in the current directory using 2 methods:

- The synchronous method is blocking, so the program halts to complete the action and return the files as an array
- The async method, takes in two arguments, the directory path and a callback function, containing either an error or the files

### Events Module

One of the core concepts of Node is Events. An `Event` acts a signal to indicate something that happened.

For example, a HTTP server could listen on a port for requests, and each request can be interpreted as an event

Importing the `Events` module returns a class called the `EventEmitter`. It is one of the core building blocks of Node and a lot of classes are based on this.

```js
const EventEmitter = require('events'); 
const emitter = new EventEmitter();

//Listener
emitter.on('messageLogged', () => {
  console.log('messageLogged listener called');
})

//Raising an event
emitter.emit('messageLogged');

```

In the example above, we create an instance of `EventEmitter` and create both a:

- Listener: To listen for a specific event, and carry out a function (callback), when that event has been raised
- Emitter: To Raise an event