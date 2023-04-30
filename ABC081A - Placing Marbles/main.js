// function Main(input) {
//   // 問題を解決するための処理を書く
//   const args = input.split('');

//   // 処理を書く
//   const count = args.filter(arg => {
//     return arg == "1"
//   }).length;

//   console.log(count);

// }
function Main(input) {
  // 問題を解決するための処理を書く
  const args = input.split('');

  // 処理を書く
  const count = args.reduce((total, arg) => {
    console.log(total);
    if (arg == "1") {
      total++;
    }
    return total;
  }, 0);

  console.log(count);

}
Main("110");
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));