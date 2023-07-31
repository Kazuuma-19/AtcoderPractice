// AC: 自分
function main(input) {
  let args = input.split('\n');
  const n = parseInt(args[0]);

  args = args[1];
  args = args.split(' ').map(Number);
  args = args.sort((a, b) => b - a);

  let sumAlice = 0;
  let sumBob = 0;

  for (i = 0; i < n; i++) {
    if (i % 2 === 0) {
      sumAlice += args[i];
    } else {
      sumBob += args[i];
    }
  }

  const answer = sumAlice - sumBob;

  console.log(answer);
}
main(`4
20 18 2 18
`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));