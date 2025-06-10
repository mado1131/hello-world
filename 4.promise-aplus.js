const promise = new Promise((resolve, reject) => {
  resolve("妙码");
  //   reject("妙码");
});

console.log(promise);
console.dir(Promise);

promise
  .then(
    (v) => v + 1,
    () => {}
  )
  .then((v) => console.log(v));










// console.dir(Date)
// console.dir(RegExp)
// console.dir(Array)
