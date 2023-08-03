// WA
function main(input) {
  const args = input.trim().split('\n');
  const N = parseInt(args.splice(0, 1));

  const multiDimensionalArray = args.map(num => num.split(' ').map(Number));
  // console.log(multiDimensionalArray);
  for (i = 0; i < N; i++) {
    const t = multiDimensionalArray[i][0];
    // console.log(t);
    // for (x = 0; x =< t; x++) {
    //   for (y = 0; y =< t; y++) {

    //     console.log(x, y);
    //   }
    // }
  }
}
main(`2
3 1 2
6 1 1`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));

/*
Idea

t回ループした際に、行くことができる可能性がある場所を列挙。
それがt秒ごのx, yと一致すればYes
*/