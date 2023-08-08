function main(input) {
  const args = input.trim().split('\n');
  const N = parseInt(args[0]);
  const people = args[1].split(' ').map(Number);

  const firstPerson = people[0];
  const strongestPerson = Math.max(...people);

  if (firstPerson < strongestPerson) {
    console.log((strongestPerson - firstPerson) + 1);
  } else {
    let strongCount = 0;
    for (let i = 0; i < N; i++) {

      if (people[i] == strongestPerson) {
        strongCount++;
      }
    }

    // 自分以外も最強
    if (strongCount > 1) {
      console.log(1);
    }
    // 自分だけが最強
    else {
      console.log(0);
    }
  }
}
main(`4
15 5 2 10
`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));