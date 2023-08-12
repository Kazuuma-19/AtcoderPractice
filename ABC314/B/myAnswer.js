function main(input) {
  let args = input.trim().split('\n');
  const N = parseInt(args[0]);
  const X = parseInt(args[(N * 2) + 1]);
  args.splice(0, 1);
  args.splice(N * 2, 1);

  const array = args.map(arg => arg.trim().split('\n'));
  console.log(array);

  let result = [];

  for (let i = 1; i < N * 2; i = i + 2) {
    const betNum = array[i][0].split(' ').map(Number);

    if (betNum.includes(X)) {
      let betPerson = ((i - 1) / 2) + 1;
      let betCount = parseInt(array[i - 1]);
      result.push([betPerson, betCount]);
    }
  }

  let minValue = Math.min(...result.map(item => item[1]));
  let correspondingValues = result.filter(item => item[1] === minValue).map(item => item[0]);
  let output = correspondingValues.join(' ');
  const length = correspondingValues.length;

  if (correspondingValues.length = 0) {
    console.log(0);
  } else {
    console.log(`${length} \n${output}`);
  }
}
main(`4
3
7 19 20
4
4 19 24 0
2
26 10
3
19 31 24
19`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));