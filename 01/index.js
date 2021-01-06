

const a01 = require("./async/a01");
const p01 = require("./promise/p01");
const c01 = require("./callback/c01");

const main = async() => {
  c01();
  try {
    await p01();
    await a01.module.main1();
    await a01.module.main2();
    await a01.module.main3();
  } catch(e) {
    console.log(e);
  }
};

main();
