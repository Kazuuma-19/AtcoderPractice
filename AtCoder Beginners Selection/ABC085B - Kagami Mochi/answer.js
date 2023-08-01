// AC
function main(input) {
  const args = input.split('\n').map(Number);
  const N = args[0];

  const num = args.slice(1, N + 1);
  num.sort((a, b) => b - a);

  let count = 0;

  for (let i = 0; i < N; i++) {
    if (num[i] !== num[i + 1]) {
      count++;
    }
  }

  console.log(count);
}
main(`7
50
30
50
100
50
80
30
`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));