function main(input) {
  const N = parseInt(input.trim());
  const ratio = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  let num = ratio.slice(0, N + 3);
  num = Number(num);
  console.log(num);
  num = num * (10 ** N);
  num = Math.round(num);
  num = num / (10 ** N);

  console.log(num);
}
main(`32`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));