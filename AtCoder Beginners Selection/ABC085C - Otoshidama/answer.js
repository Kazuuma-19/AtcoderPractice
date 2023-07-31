// TLE
function main(input) {
  const args = input.split(' ').map(Number);

  const N = args[0];
  const Y = args[1];

  const result = {
    x: -1,
    y: -1,
    z: -1,
  };

  for (i = 0; i <= N; i++) {
    for (j = 0; j <= N; j++) {
      for (k = 0; k <= N; k++) {
        total = (10000 * i) + (5000 * j) + (1000 * k);
        totalIndex = i + j + k;

        if (total === Y && totalIndex === N) {
          result.x = i;
          result.y = j;
          result.z = k;
        }
      }
    }
  }
  console.log(`${result.x} ${result.y} ${result.z}`);
}
main(`9 45000`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 合計がYになる候補をすべて列挙
// ↓
// ありえなかったら−１出力
// ↓
// 候補の中からx, y, z = Nとなるものを出す。

// ▽候補を出す
// ■３重ループ作戦
// １万を０枚使うとき
// １枚使うとき
// ２枚つかうとき