function main(input) {
  const args = input.trim().split('\n');
  const N = parseInt(args[0]);
  const array = args[1].split(' ').map(Number);

  array.sort((a, b) => a - b);

  let count = 0;
  let arrayMax = Math.max(...array);
  let arrayMin = Math.min(...array);

  const differ = array[N - 1] - array[0];

  // while (differ > 2) {
  array[N - 1] -= 1;
  array[0] += 1;

  array.sort((a, b) => a - b);

  console.log(array);

  count++;
  // }

  console.log(count++);
}


main(`4
4 7 3 7
`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
