// WA: 自力回答
// function main(input) {
//   const args = input.split('\n');

//   const a = parseInt(args[0]);
//   const b = parseInt(args[1]);
//   const c = parseInt(args[2]);
//   const x = parseInt(args[3]);

//   let answerCount = 0;
//   // cで最大に割り切れる数を考える→cを減らして割ることを考える→b→a

//   // 500円
//   let totalC = "";
//   let totalB = "";
//   let totalA = "";
//   let totalX = x;

//   // c = 2, 1, 0;
//   for (let indexC = c; indexC >= 0; indexC--) {
//     totalC = 500 * indexC;
//     if (x / totalC == 1) { // x = totalC
//       answerCount++;
//     }

//     else {
//       totalX = x - totalC;

//       // 100円
//       if (totalX >= 0) {
//         for (let indexB = b; indexB >= 0; indexB--) {
//           totalB = 100 * indexB;
//           if (totalX / totalB == 1) {
//             answerCount++;
//           }

//           else {
//             totalX = totalX - totalB;

//             if (totalX >= 0) {
//               // 50円
//               for (let indexA = a; indexA >= 0; indexA--) {
//                 totalA = 50 * indexA;
//                 if (totalX / totalA == 1) {
//                   answerCount++;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   console.log('answer:', answerCount);
// }
// main(`2
// 2
// 2
// 100
// `);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// 解答
function main(input) {
  const args = input.split('\n');

  const A = parseInt(args[0]);
  const B = parseInt(args[1]);
  const C = parseInt(args[2]);
  const X = parseInt(args[3]);

  let count = 0;

  for (let a = 0; a <= A; a++) {
    for (let b = 0; b <= B; b++) {
      for (let c = 0; c <= C; c++) {
        const totalAmount = 500 * a + 100 * b + 50 * c;
        if (totalAmount === X) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

main(`2
2
2
100
`);
