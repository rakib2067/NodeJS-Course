const doWorkCallback = (callback) => {
  setTimeout(() => {
    callback(undefined, { executed: true });
  }, 2000);
};

doWorkCallback((error, data) => {
  if (error) {
    return console.log(error);
  }
  console.log(data);
});
