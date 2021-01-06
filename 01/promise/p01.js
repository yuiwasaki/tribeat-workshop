
const p1 = () => {
  return new Promise((resolve) => {
    resolve("RESOLVE: p1");
  });
}

const p2 = () => {
  return new Promise((resolve) => {
    resolve("RESOLVE: p2");
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    reject("REJECT: p3");
  });
};

const p4 = () => {
  return new Promise((resolve) => {
    resolve("RESOLVE: p4");
  });
};

const main = () => {
  return p1().then((result) => {
    console.log(result);
    return p3();
  }).then((result) => {
    console.log(result);
    return p2();
  }).catch((e) => {
    console.log(e);
    return p4();
  }).then((result) => {
    console.log(result);
    return ""
  });
};

module.exports = main;
