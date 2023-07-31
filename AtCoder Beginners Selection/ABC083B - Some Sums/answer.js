// WA: 自分
function main(input) {
  const args = input.split(' ');
  const n = parseInt(args[0]);
  const a = parseInt(args[1]);
  const b = parseInt(args[2]);

  let answerSum = 0;
  let num = 0;

  for (let thu = 0; thu <= 9; thu++) {
    for (let hun = 0; hun <= 9; hun++) {
      for (let ten = 0; ten <= 9; ten++) {
        for (let one = 0; one <= 9; one++) {
          num = (1000 * thu) + (100 * hun) + (10 * ten) + (1 * one);

          if (num <= n) {
            const judgeNum = thu + hun + ten + one;

            if (a <= judgeNum && judgeNum <= b) {
              answerSum += num;
            }
          }
        }
      }
    }
  }
  console.log(answerSum);
}
main(`100 4 16`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 解答
// function main(input) {
//   const args = input.split(' ').map(Number); // カンマで文字列を分割し、数値に変換

//   const N = args[0];
//   const A = args[1];
//   const B = args[2];

//   let totalSum = 0;

//   for (let i = 1; i <= N; i++) {
//     const digitsSum = calculateDigitsSum(i);
//     if (digitsSum >= A && digitsSum <= B) {
//       totalSum += i;
//     }
//   }

//   console.log(totalSum);
// }
// // 各桁の判定
// function calculateDigitsSum(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }

// main(`20 2 5`);

// 自分の考え
// 11 = (10 * 1) + 1 
//   numberを配列を作成し、最後に合計する


//   ループはA以上B以下で回す
//   各桁の数字をループ　ループの中でループ
//   最大４桁　9999
  
//   9999  = (1000 * 9) + (100 * 9)  + (10 * 9)
  
//   ▽フロー
//   ループで各くらいをループ
//   ↓
//   if、N以下であれば、結果を配列に格納。
//   ↓
//   合計する