function main(input) {
  const args = input.trim().split('\n');
  const [N, M] = args[0].split(' ').map(Number);
  args.splice(0, 1);

  const array = args.map(arg => arg.split(''));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (array[i][j] === '#') {
        const topBlack = array[i + 1][j] === '#' && array[i + 2][j] === '#' && array[i][j + 1] === '#' && array[i][j + 2] === '#';
        const topWhite = array[i + 3][j] === '.' && array[i + 3][j + 1] === '.' && array[i + 3][j + 2] === '.' && array[i][j + 3] && array[i + 1][j + 3] && array[i + 2][j + 3] && array[i + 3][j + 3];

        // const bottomBlack = array[i + 6][j] === '#' && array[i + 7][j] === '#' && array[i][j + 8] === '#' && array[i][j + 2] === '#';
        // const bottomWhite = array[i + 1][j] === '.' && array[i + 2][j] === '#' && array[i][j + 1] === '#' && array[i][j + 2] === '#';

        // if (topBlack && topWhite) {
        //   console.log(i, j);
        // }
      }
    }
  }

  // 最後にすべての値に１を足す
}
main(`19 18
###......###......
###......###......
###..#...###..#...
..............#...
..................
..................
......###......###
......###......###
......###......###
.###..............
.###......##......
.###..............
............###...
...##.......###...
...##.......###...
.......###........
.......###........
.......###........
........#.........
`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

/******* 
考え

2じゅうループ全探索
縦横ー９個ぶんのみループでよい

２次元配列に代入して、左上の支点をループ。
ifで９個ならんでいるか、周りに空白があるかどうか判定。条件にすべて一致したら、そのi, jの値を出力


■条件
横、縦に３つ#がある
まわりが「.
」
***********/