function Main(input) {
  const args = input.split('\n'); //配列
  const N = args[0];
  const S = args[1];
  const T = args[2];

  // 完全一致
  if (S === T) {
    console.log('Yes');
  } else {
    let match = true;
    // ループで文字を比較
    for (var i = 0; i < N; i++) {
      if (S[i] === T[i]) {
        match = true;
      } else {
        if ((S[i] === '0' || S[i] === 'o') && (T[i] === '0' || T[i] === 'o')) {
          match = true;
        } else if ((S[i] === 'l' || S[i] === '1') && (T[i] === 'l' || T[i] === '1')) {
          match = true;
        } else {
          match = false;
          break;
        }
      }
    }

    if (match == true) {
      console.log('Yes');
    }
    if (match == false) {
      console.log('No');
    }
  }
}
Main(`4
nok0
n0ko
`);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 