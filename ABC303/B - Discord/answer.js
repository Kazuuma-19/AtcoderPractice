function Main(input) {
  const args = input.split('\n');
  const N = parseInt(args[0].split(' ')[0]);// 人数
  const M = parseInt(args[0].split(' ')[1]);// 撮影回数
  const a = args.slice(1).map(line => line.split(" ").map(Number));;
  const adjacent = Array(N).fill(0).map(() => Array(N).fill(false)); // 集計表e

  // 撮影ごと(i)にとなり同士になった人(j, j+1)を記録
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N - 1; j++) {
      const u = a[i][j] - 1
      const v = a[i][j + 1] - 1;
      adjacent[u][v] = adjacent[v][u] = true;
    }
  }
  console.log(adjacent);

  // 撮影ごとに、自分同士を抜いたfalseの数を数える
  let unfriendly = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (!adjacent[i][j]) unfriendly++;
    }
  }

  console.log(unfriendly);
}
Main(`3 2
1 2 3
3 2 1`);
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8")); 