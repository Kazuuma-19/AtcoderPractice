function main(input) {
  // 入力を改行で分割して配列に格納
  const lines = input.trim().split("\n");

  // カードの枚数を取得
  const N = parseInt(lines[0]);

  // カードの数値を取得
  const cards = lines[1].split(" ").map(Number);

  // AliceとBobの得点を求める関数を呼び出して結果を取得
  const result = findScoreDifference(cards);

  // 結果を出力
  console.log(result);
}

function findScoreDifference(cards) {
  // AliceとBobの得点を初期化
  let aliceScore = 0;
  let bobScore = 0;

  // カードを降順にソートして取得
  const sortedCards = cards.sort((a, b) => b - a);

  // カードを交互に取っていく
  for (let i = 0; i < sortedCards.length; i++) {
    if (i % 2 === 0) {
      // Alice's turn
      aliceScore += sortedCards[i];
    } else {
      // Bob's turn
      bobScore += sortedCards[i];
    }
  }
  // Aliceの得点 - Bobの得点 を返す
  return aliceScore - bobScore;
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));