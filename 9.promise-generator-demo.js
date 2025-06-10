function fn(nums) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(nums * 2);
    }, 1000);
  });
}

function* gen() {
  const num1 = yield fn(1);
  console.log("yield 1", num1);
  const num2 = yield fn(num1);
  console.log("yield 2", num2);
  const num3 = yield fn(num2);
  console.log("yield 3", num3);
  return num3;
}

const g = gen();

// next1
const next1 = g.next();
console.log("🚀 ~ next1:", next1.value);
next1.value.then((res1) => {
  const next2 = g.next(res1); // 传入上次的res1
  next2.value.then((res2) => {
    const next3 = g.next(res2); // 传入上次的res2
    next3.value.then((res3) => {
      // 传入上次的res3
      console.log(g.next(res3));
    });
  });
});



// redux-saga，为了解决 redux 的异步问题，使用了 generator 函数