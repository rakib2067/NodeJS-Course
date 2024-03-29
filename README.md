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
- When using `require` it first reads the file, executes it and then returns the `exports`
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
const syncFile = fs.readdirSync("./");
fs.readdir("./", (err, files) => {
  if (err) console.log(err);
  else console.log(files);
});
```

In the above example we are reading all files in the current directory using 2 methods:

- The synchronous method is blocking, so the program halts to complete the action and return the files as an array
- The async method, takes in two arguments, the directory path and a callback function, containing either an error or the files

### Events Module

One of the core concepts of Node is Events. An `Event` acts a signal to indicate something that happened.

For example, a HTTP server could listen on a port for requests, and each request can be interpreted as an event

Importing the `Events` module returns a class called the `EventEmitter`. It is one of the core building blocks of Node and a lot of classes are based on this.

```js
const EventEmitter = require("events");
const emitter = new EventEmitter();

//Listener
emitter.on("messageLogged", () => {
  console.log("messageLogged listener called");
});

//Raising an event
emitter.emit("messageLogged");
```

In the example above, we create an instance of `EventEmitter` and create both a:

- Listener: To listen for a specific event, and carry out a function (callback), when that event has been raised
- Emitter: To Raise an event

### Event Arguments

When raising an event, it is possible to add additional arguments, which can then be accessed in the listener.

It is a best practice to wrap these within a single object.

```js
emitter.on("messageLogged", (args) => {
  console.log(`Message Logged by ${args.username}`);
});

emitter.emit("messageLogged", { id: 1, username: "Rakib" });
```

### Extending the EventEmitter Class

As previously mentioned, many other modules/classes are built on top of the `EventEmitter`

This can be done by extending the desired class to inherit all the properties and methods of the `EventEmitter` Class.

```js
class Logger extends EventEmitter {
  log(message, args) {
    //Send Post request to logger
    console.log(message);

    //raise event
    this.emit("messageLogged", args);
  }
}
const logger = new Logger();

logger.on("messageLogged", (args) => {
  console.log(`Message Logged by ${args.username}`);
});
logger.log("Hello world", { id: 1, username: "Rakib" });
```

- In the example above, the `Logger` class extends `EventEmitter` and also introduces a new method `log()`
- Whenever `log()` is called, the instance of the `Logger` class will emit a message.
  - The `this` keyword is used to target the specific instance
- We can also add listeners to the instance of `Logger` to listen for specific events

### HTTP Module

The `HTTP` Module is also one of the main building blocks of Node, which is used to create Networking Applications. E.g. The module can be used to build a webserver for the backend service for a client.

Many backend frameworks such as `express` build on top of the `http` module

## Building RESTful API's using Express

Express is a framework which extends the `http` module and allows for a more structured approach to creating a web server

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
```

- Importing `express` returns a top level function, which by convention we assign and call to the variable `app`
- We can also create endpoints for handling requests
  - These take in both a path, and a callback containing both the response and request
- We can also configure our server to listen on a specific port
  - A callback can optionally provided to execute when the app starts listening on the given port
  - We extract the port using environment variables

### Middleware

A Middleware function, is one that takes a request object and either passes a response to the client or passes control to another middleware function.

Some examples of Middleware functions are:

- `express.json()`: This function parses the request body into a JSON object and then passes it on to the route handler middleware
- `app.get()`: This route handler also acts as a middleware, where we have the parsed request body and return a response back to the client

We can also create and use custom middleware for many different things such as Authentication, Authorisation, Logging etc.

#### Custom Middleware:

As mentioned, it is possible to create custom middleware in express:

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Logging request");
  next();
});
```

- In the above example we use the `use` method to create a custom middleware, and pass in a callback with 3 arguments
- The `next` function must be called in order to pass control of the request to the next middleware function in the pipeline
- If not called, the request will be left hanging

#### Third Party Middleware

We can install and use third party middleware within our express applications as so:

```js
const morgan = require("morgan");
const express = require("express");
const app = express();

app.use(express.json());
app.use(morgan("tiny"));
```

We download and import the `morgan` middleware, which provides logging for requests, and call it within `app.use()`

### Environments and Configuration

In enterprise level codebases, we most likely have different environments e.g. Production, Development, Testing etc, wherein we may want to enable and disable features depending on the environment

In order to get what environment where running on we can use:

- `process.env.NODE_ENV`
  - returns `undefined` if there is no set env variable
- `app.get('env')`
  - returns `development` if `NODE_ENV` is undefined

#### Configuration:

One thing that goes hand in hand with environments is storing configuration settings. For instance, in our dev environment, we may be using a different database and mail server than production.

The most popular package used for managing config is `rc`. Another popular solution is also the `config` library.

Using the config library, we create a `config` folder in our project root, containing all our different configuration files.

- In the example below, we have default, production and development configs
  - The naming of the files matters as it corresponds to the environment
- Each file stores config variables in JSON format

```json
{
  "name": "Vividly - Development",
  "mail": {
    "host": "dev-mail-server"
  }
}
```

- We can also map custom environment variables as values within the `custom-environment-variables.json` file
- We can then access our conguration variables as so:

```js
const config = require("config");

console.log(`Application name: ${config.get("name")}`);
console.log(`Mail server: ${config.get("mail.host")}`);
console.log(`Mail password: ${config.get("mail.password")}`);
```

```
├── project
│   ├── config
│   │   ├── custom-environment-variables.json
│   │   ├── default.json
│   │   ├── development.json
│   │   ├── production.json
├── index.js
├── node_modules
├── package.json
├── package-lock.json
└── .gitignore
```

### Debugging

The `debug` npm package, as the name suggests, is a package which aids us in debugging our applications.

We import the package as so:

- In the second brackets, we're passing an arbitraty namespace for debugging
- This function can now be used for writing debug messages for the assigned namespace

```js
const startupDebugger = require("debug")("app:startup");

if (app.get("env") === "development") {
  startupDebugger("Debugging in development");
}
```

- Essentially we can use this function to replace `console.log()`, and configure it to run only on certain environments
- We can activate the debugger by passing the `DEBUG` env variable, with the value of the namespace

### Database Integration

## Asynchronous Node and Promises

Javascript is, by itself, a single threaded blocking language, meaning that upon runtime, it can only handle one task at a time. However, due to Node being built on top of a C++ runtime, it is possible to write asynchronous, non-blocking code in Node.

`The event loop is what allows Node. js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.
`

All Node programs, at runtime consist of two things:

The Heap: Where all memory allocation happens for both primitive and non-primitive variable types
The Stack: The call stack, as the name suggests is where all the execution context takes place, and it operates within a 'Last in, First out' approach.

- Whenever a Node program runs, the first thing that will be added to the call stack will be the `module wrapper function` of the starting file
- Whenever a function is added to the callstack, it gets executed.
- Whenever a function finishes execution, it is then removed from the callstack
- Whenever an Asynchronous function is called e.g. `setTimeout()`, it is registering an event with the NodeJS APIs

Node APIs: Whenever an Asynchronous function is called it is registered in Node APIs, wherein Node will use other threads behind the scenes to deal with these events

- This allows for other non-blocking functions to be added and executed in the call stack, whilst we wait for the Asynchronous function to finish executing
- In the case of `setTimeout` this event is registered in Node APIs for the set amount of time it was called with, once that time has passed, the callback needs to get executed, and is passed to the callback queue

Callback Queue: When a given event is compelted in Node APIs, it is passed to the Callback Queue, wherein it will be executed (e.g, waiting for a DB response, API call etc)

- As the name suggests, the Callback Queue operates on a First in, first out approach
- Before a callback can be executed it needs to be added to the `Call Stack`
- This is where the `Event Loop` comes into play
- The Event loop looks at both the `Call Stack` and `Callback Queue`
  - If the `Call Stack` is empty, it will run items from the `Callback Queue`
  - Otherwise, it will wait for the `Call Stack` to be empty, before running items from the Queue.

### Diving Deeper into the Event Loop

[Summary of the Event Loop Cycle](https://www.youtube.com/watch?v=6YgsqXlUoTM&ab_channel=Rizwansoftech)

So to summarise, in Node JS, the event loop does the orchestration of our code i.e. It recieves events, calls their callback functions and offloads more expensive tasks to the threadpool.

There are actually multiple phases within the event loop, where each phase has its own callback queue:

Expired Timer Callbacks: This phase takes care of expired timers e.g. `setTimeout()`

- The event loop will execute callbacks for these timers first
- For timers which take longer to complete, and expired when the event loop is in another phase, their callbacks will be executed as soon as the event loop comes back to this phase

I/O Polling and Callbacks: I/O in the context of Node, mostly refers to Networking and File Access

setImmediate Callbacks: This is a special type of timer we use when we want to process callbacks, immediately after the IO phase

Close Callbacks: In this phase, all close events are processed, e.g. when a websocket closes

#### Special Queues:

Any callback in one of these special queues, will be executed after each phase of the main cycle

NextTick Queue: `process.nextTick()` is a special function we can execute when we really need to execute a certain callback, directly after the current phase in the event loop

Other MicroTasks Queue (Resolved Promises): An example of this is when a promise resolves and returns data from an API Call, in such a case the Promise callback will be executed directly after the current phase finishes.

Each cycle of the event loop is called a `Tick`. The way Node decides whether to continue to the next Tick or to exit the program is by checking if there are any pending Timers or IO tasks that are still running in the background

### Promises

Promises make it easy for us to manage our asynchronous code, and were designed to solve many of the problems we run into when using callbacks in our applications.

In Summary, a promise is an object that represents the completion or failure of an asynchronous operation. Promises provide a simpler, cleaner way to work with asynchronous code compared to using callback functions, through the use of methods such as chaining, or simply using async/await.

```js
const doWorkPromise = new Promise((resolve, reject) => {
  //HTTP Request
  if (response.ok) resolve(response);
  else reject(response.error);
});

doWorkPromise
  .then((resp) => console.log(resp.data))
  .catch((error) => console.log(error));

const fetchData = async () => {
  try {
    let response = await doWorkPromise();
    console.log(resp.data);
  } catch (err) {
    console.log(err);
  }
};
```

### Promises in parallel and race conditions

We can run multiple promises in parallel, wherein the result of all these promises will be returned in an Array:

- If all promises were succesfully resolved, we can use `then` to get the results as an array
- If any promises is rejected, the `catch` clause will be used to display the error
- This is done asynchronously through the use of 1 thread kicking off multiple asynchronous operations
  - The thread will start one operation, release and go to another

```js
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(`Error: ${err.message}`));
```

We can also run multiple promises in parallel and perform an actions as soon as the first promise is resolved:

```js
Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(`Error: ${err.message}`));
```

## MongoDB

MongoDB is a `NoSQL` database which stores data in the collections as opposed to tables in the form of a JSON like structure called `documents`

### Mongoose

`Mongoose` is a library that enhances our use of MongoDB. It allows us to provide schemas to define the shape of documents within a collection
