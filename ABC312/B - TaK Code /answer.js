function main(input) {
  const [NM, ...S] = input.trim().split("\n");
  const [N, M] = NM.split(" ").map(Number);

  for (let i = 0; i <= N - 9; i++) {
    for (let j = 0; j <= M - 9; j++) {
      if (check(S, i, j)) console.log(`${i + 1} ${j + 1}`);
    }
  }

  function check(S, x, y) {
    // 縦3×3が# 左上
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        if (S[i][j] !== "#") return false;
      }
    }

    // 縦3×3が# 右下
    for (let i = x + 6; i < x + 9; i++) {
      for (let j = y + 6; j < y + 9; j++) {
        if (S[i][j] !== "#") return false;
      }
    }

    // 周り空白左上
    for (let i = x; i < x + 3; i++) {
      if (S[i][y + 3] !== ".") return false;
    }
    for (let j = y; j < y + 4; j++) {
      if (S[x + 3][j] !== ".") return false;
    }

    // 周り空白右下
    for (let i = x + 6; i < x + 9; i++) {
      if (S[i][y + 5] !== ".") return false;
    }
    for (let j = y + 5; j < y + 9; j++) {
      if (S[x + 5][j] !== ".") return false;
    }

    return true;
  }
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
........#.........`);