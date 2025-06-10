// 让多少秒之后再执行后面的代码
function dely(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      //   reject(new Error("出错了"));
    }, ms);
  });
}

dely(1000)
  .then(() => {
    console.log("外部逻辑");
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("finally");
  });

const f = Promise.resolve("foo");

f.then((v) => console.log(v)); // foo
/**
 * Promise.all([dely(1000), dely(2000), dely(3000)])，三个异步操作一次完成
 * Promise.race([dely(1000), dely(2000), dely(3000)])，三个异步操作中最快的一个完成
 * Promise.resolve()，将现有对象转为Promise对象
 * Promise.reject()，返回一个新的Promise对象，状态为rejected
 * Promise.allSettled()，等所有的Promise都完成，不管成功还是失败
 */

// 问题，依然存在调用地狱

dely(1000).then(() => {
  dely(2000).then(() => {
    dely(3000).then(() => {
      console.log("最后一个");
    });
  });
});

// dely(1000)
// dely(2000)
// dely(3000)

