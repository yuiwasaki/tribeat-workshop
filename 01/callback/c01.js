
const c1 = (val) => {
  console.log("C1実行");
  console.log(val);
  console.log("C1終了");
};

const plus10 = (val) => {
  console.log("PLUS10実行");
  console.log(val + 10);
  console.log("PLUS10終了");
};

const callback = (func) => {
  console.log("CALLBACK実行");
  // 何かの処理を実行
  const result = 1;
  // 結果を引数で受け取った処理に渡す
  func(result);
  console.log("CALLBACK終了");
};

const main = () => {
  callback(c1);
  callback(plus10);
};

module.exports = main;
