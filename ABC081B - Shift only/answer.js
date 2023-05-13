function Main(input) {
  let args = input.trim().split('\n');
  args = args[1].split(' ').map(Number);

  let count = 0;

  // すべての値が偶数であるか判定
  while (args.every(arg => arg % 2 === 0)) {
    // 偶数であれば値を2で割り、countを＋1する
    args = args.map(arg => arg / 2);
    count++;
  }
  console.log(count)
}
// Main(`3
// 8 12 40`);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));