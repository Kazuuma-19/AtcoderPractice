function main(input) {
  input = input.trim().split("\n")
  const N = Number(input[0]);
  let prevT = 0;
  let prevX = 0;
  let prevY = 0;

  for (let i = 1; i <= N; i++) {
    const [t, x, y] = input[i].split(" ").map(Number);
    const distance = Math.abs(x - prevX) + Math.abs(y - prevY);
    const time = t - prevT;
    // 移動距離に対して時間が足りない || 偶奇が一致しない
    if (distance > time || (distance % 2 !== time % 2)) {
      console.log("No");
      return;
    }
    [prevT, prevX, prevY] = [t, x, y];
  }
  console.log("Yes");
}

main(`3
3 1 2
6 1 1
8 2 0`);  // input example

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
