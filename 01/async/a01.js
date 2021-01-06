const timeout = (fn, ms) => {
	return new Promise((resolve) => {
  	setTimeout(() => {
    	resolve(fn());
  	}, ms);
  });
};

const a1 = async () => { 
	return await timeout(() => {
    console.log("500ms後にa1が実行されました");
    return "a1の結果";
  }, 500);
};

const a2 = async () => { 
	return await timeout(() => {
    console.log("1000ms後にa2が実行されました");
    return "a2の結果";
  }, 1000);
};
const a3 = async () => {
	console.log("即時でa3が実行されました");
  return "a3の結果";
};


const main1 = async () => {
	console.log("##### main1が起動");
	const p1 = a1();
	const p2 = a2();
	const p3 = a3();
  const r1 = await p1;
  const r2 = await p2;
  const r3 = await p3;
  console.log("r1:", r1);
  console.log("r2:", r2);
  console.log("r3:", r3);
	console.log("##### main1が終了");
};

const main2 = async () => {
	console.log("##### main2が起動");
	const r1 = await a1();
	const r2 = await a2();
	const r3 = await a3();
  console.log("r1:", r1);
  console.log("r2:", r2);
  console.log("r3:", r3);
	console.log("##### main2が終了");
};

const main3 = async () => {
	console.log("##### main３が起動");
	const p1 = a1();
	const p2 = a2();
	const p3 = a3();
  Promise.race([p1,p2,p3]).then((result) => {
  	console.log(result);
    console.log("##### main3が終了");
  });
};

exports.module = { main1, main2, main3 };
