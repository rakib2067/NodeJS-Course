const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ executed: true });
    reject("Things went wrong");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
