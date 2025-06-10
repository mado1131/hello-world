function test() {
  //这里执行完之后返回 1，然后中断执行，等待
  return 1;
  return 2;
  return 3;
}

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function sum(a, b) {
//   return a + b;
// }
// function* gen() {
//   const r1 = sum(1, 2);
//   yield r1;
//   const r2 = sum(r1, 3);
//   yield r2;
//   const r3 = sum(r2, 4);
//   yield r3;
// }

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("成功");
    }, 1000);
  });
}
function* gen() {
  let r = undefined;
  sleep().then((res) => {
    r = res;
  });
  yield r;
  //   yield r1;
  //   const r2 = sum(r1, 3);
  //   yield r2;
  //   const r3 = sum(r2, 4);
  //   yield r3;
}

const g = gen();
console.log(g.next().value);
console.log("哈哈哈哈");
console.log(g.next().value);
console.log("傅雷家书看砥砺奋进阿斯顿");
console.log(g.next().value);
