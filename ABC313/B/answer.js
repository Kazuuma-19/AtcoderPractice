function main(input) {
  const [NM, ...strengthArray] = input.trim().split('\n');
  const [N, M] = NM.split(' ').map(Number);
  const strengthInfo = strengthArray.map(array => array.split(' '));
  console.log(strengthInfo);
}
main(`3 2
1 2
2 3
`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));