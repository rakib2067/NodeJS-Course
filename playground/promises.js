const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (typeof (a || b !== "Number")) {
      //   reject("Values entered must be of type Number");
      // }
      resolve(a + b);
    }, 2000);
  });
};

// add(1, "what")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

add(1, 1)
  .then((result) => {
    console.log(result);
    return add(result, 2);
  })
  .then((sum2) => console.log(sum2))
  .catch((e) => console.log(e));
