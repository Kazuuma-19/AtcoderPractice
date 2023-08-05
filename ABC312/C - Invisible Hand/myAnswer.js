// WA
function main(input) {
  const [NM, AA, BB] = input.split('\n');
  const [N, M] = NM.split(' ').map(Number);
  const A = AA.split(' ').map(Number);
  const B = BB.split(' ').map(Number);

  let result = [];

  for (let i = 0; i < N; i++) {
    const countA = A.filter(a => A[i] >= a).length;

    const countB = B.filter(b => A[i] <= b).length;

    if (countA >= countB) {
      result.push(A[i]);
    }
  }

  console.log(Math.min(...result));
}
main(`5 2
100000 100000 100000 100000 100000
100 200
`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));