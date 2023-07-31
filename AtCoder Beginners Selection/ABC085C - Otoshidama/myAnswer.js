function main(input) {
  // 入力を受け取り、整数に変換します
  const [N, Y] = input.trim().split(' ').map(Number);

  // 10000円、5000円、1000円の紙幣の数をそれぞれx, y, zとします
  for (let x = 0; x <= N; x++) {
    for (let y = 0; y <= N - x; y++) {
      let z = N - x - y;
      // x, y, zの組み合わせでY円を作ることができるかを確認します
      if (10000 * x + 5000 * y + 1000 * z === Y) {
        console.log(`${x} ${y} ${z}`);
        return;
      }
    }
  }

  // Y円を作ることができなければ、-1 -1 -1を出力します
  console.log('-1 -1 -1');
}
main(`2000 20000000`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// function main(input) {
//   const args = input.split(' ').map(Number);

//   const N = args[0];
//   const Y = args[1];

//   const result = {
//     x: -1,
//     y: -1,
//     z: -1,
//   };

//   for (i = 0; i <= N; i++) {
//     for (j = 0; j <= N - i; j++) {
//       let k = N - i - j;

//       total = (10000 * i) + (5000 * j) + (1000 * k);
//       if (total === Y) {
//         result.x = i;
//         result.y = j;
//         result.z = k;
//       }
//     }
//   }
//   console.log(`${result.x} ${result.y} ${result.z}`);
// }
// main(`2000 20000000`);