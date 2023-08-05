// AC
function main(input) {
  // 入力の処理
  const lines = input.trim().split('\n');
  const [N, M] = lines[0].split(' ').map(Number);
  const A = lines[1].split(' ').map(Number);
  const B = lines[2].split(' ').map(Number);

  // 売り手と買い手をソート
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  // 二分探索を用いて条件を満たす最小のXを見つける
  let low = 0;
  let high = 10 ** 9 + 1;

  while (high - low > 1) {
    let mid = Math.floor((low + high) / 2);
    let sellers = A.filter(price => price <= mid).length;
    let buyers = B.filter(price => price >= mid).length;

    if (sellers >= buyers) {
      console.log(mid);
      high = mid;
    } else {
      low = mid;
    }
  }

  console.log(high);
}

main(`3 4
110 90 120
100 80 120 10000`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));