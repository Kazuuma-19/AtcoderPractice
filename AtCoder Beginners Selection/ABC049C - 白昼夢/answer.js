// AC
function main(input) {
  const S = input;

  const wordArray = S.split(/(?=dr|era)/).map(word => word.trim());

  const wordsToMatch = ["dream", "dreamer", "erase", "eraser"];

  if (wordArray.every(word => wordsToMatch.includes(word))) {
    console.log('YES');
  }
  else {
    console.log('NO');
  }
}
main(`eraser dreamer`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));


/*
考え

splitでdr, eraが出てきたらその直前で文字を分割
*/