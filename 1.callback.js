setTimeout(() => {
  console.log("1");
}, 1000);

// 让多少秒之后再执行后面的代码
function dely(ms, fn) {
  setTimeout(() => {
    fn();
  }, ms);
}

dely(1000, () => {
  console.log("外部逻辑");
});

// function t1(cb) {
//     setTimeout(() => {
//         cb()
//     }, 1000)

// }

// 三个异步操作一次完成的话，用回调函数的形式就会出现回调地狱

function t1(cb) {
  setTimeout(() => {
    console.log("1");
    cb();
  }, 1000);
}

function t2(cb) {
  setTimeout(() => {
    console.log("2");
    cb();
  }, 1000);
}

function t3(cb) {
  setTimeout(() => {
    console.log("3");
    cb();
  }, 1000);
}

t1(() => {
  t2(() => {
    t3(() => {
      console.log("最后一个");
    });
  });
});

// const res_t1 = t1()
// const res_t2 = t2(res_t1)
// const res_t3 = t3(res_t2)
