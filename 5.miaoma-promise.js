// 面向对象
class MiaoPromise {
  // 初始状态
  state = "pending";
  // 成功的值，或者失败的原因  value、reason
  result = undefined;

  // 存储 onFulfilled、onRejected
  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];

  constructor(executor) {
    setTimeout(() => {
      executor(this._resolve.bind(this), this._reject.bind(this));
    });
  }

  _resolve(value) {
    console.log("_resolve", value);
    this.state = "fulfilled";
    this.result = value;
    // console.log(
    //   "🚀 ~ MiaoPromise ~ _resolve ~ this.onFulfilledCallbacks:",
    //   this.onFulfilledCallbacks
    // );
    // 之前在我的状态是 pending，存储的一些订阅函数，现在我成功了，那我就要去执行这些订阅函数
    this.onFulfilledCallbacks.forEach((fn) => fn(value));
  }

  _reject(reason) {
    console.log(reason);
    this.state = "rejected";
    this.result = reason;
    this.onRejectedCallbacks.forEach((fn) => fn(reason));
  }

  then(onFulfilled, onRejected) {
    // 在还没有调用的情况下，onFullfilled、onRejected 是不会执行的
    // 先找个地方存起来
    // 将来状态改变的时候，再去执行
    this.onFulfilledCallbacks.push(onFulfilled);
    this.onRejectedCallbacks.push(onRejected);
  }

  catch() {}

  finally() {}
}

const miaoPromise = new MiaoPromise((resolve, reject) => {
  //   resolve("妙码");
  reject("报错");
});

console.log(miaoPromise);

miaoPromise.then(
  (v) => {
    console.log("then", v);
    console.log(miaoPromise);
  },
  (r) => {
    console.log("then", r);
    console.log(miaoPromise);
  }
);
