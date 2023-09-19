function main(input) {
  const [line1, S] = input.trim().split('\n');
  const [X, Y, Z] = line1.split(' ').map(Number);
  const INF = 1e18;

  let dp = new Array(S.length + 1);
  for (let i = 0; i <= S.length; i++) {
    dp[i] = [INF, INF];
  }
  dp[0][0] = 0;

  for (let i = 0; i < S.length; i++) {
    let cur = S[i] === 'a' ? 0 : 1;
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        let v = dp[i][j];
        if (j !== k) v += Z;
        if (cur === k) v += X;
        else v += Y;
        dp[i + 1][k] = Math.min(dp[i + 1][k], v);
      }
    }
  }

  console.log(Math.min(dp[S.length][0], dp[S.length][1]));
}

// サンプル入力をテストする
main(`1 3 3
AAaA`);
