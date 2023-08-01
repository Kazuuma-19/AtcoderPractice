function main(input) {
  const words = input;

  const array = ['ACE', 'BDF', 'CEG', 'DFA', 'EGB', 'FAC', 'GBD'];

  if (array.includes(words)) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
main(`ACE`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));