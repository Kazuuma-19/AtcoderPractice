function Main(input) {
  // 問題を解決するための処理を書く
  const args = input.split(' ');
  const a = args[0];
  const b = args[1];
  const mul = a * b;

  if (mul % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8")); 