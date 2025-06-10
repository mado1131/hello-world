function dely(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve(Math.random());
      reject(new Error("出错了"));
    }, ms);
  });
}

// async function run() {
//   await dely(1000).then(() => {
//     console.log("外部逻辑，第一个 1000");
//   });
//   await dely(1000).then(() => {
//     console.log("外部逻辑，第二个 1000");
//   });
//   await dely(1000).then(() => {
//     console.log("最后一个");
//   });
// }
async function run() {
  try {
    const r1 = await dely(1000);
    console.log(r1, "外部逻辑，第一个 1000");
    const r2 = await dely(1000);
    console.log(r2, "外部逻辑，第二个 1000");
    const r3 = await dely(1000);
    console.log(r3, "最后一个");
  } catch (error) {
    console.log(error.message);
  }
}

try {
  throw new Error("出错了");
} catch (error) {
  console.log(error.message);
}

console.log(run);

run();
console.log("end");
