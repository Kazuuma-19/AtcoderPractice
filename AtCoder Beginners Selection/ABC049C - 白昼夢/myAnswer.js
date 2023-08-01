function canMakeS(S) {
  while (S.length > 0) {
    // Sの末尾から順に"dream","dreamer","erase","eraser"を削除する
    if (S.endsWith("eraser")) {
      S = S.substring(0, S.length - 6);
    } else if (S.endsWith("erase")) {
      S = S.substring(0, S.length - 5);
    } else if (S.endsWith("dreamer")) {
      S = S.substring(0, S.length - 7);
    } else if (S.endsWith("dream")) {
      S = S.substring(0, S.length - 5);
    } else {
      // Sの末尾から順に"dream","dreamer","erase","eraser"が削除されない場合は、S=Tとすることができない
      return "NO";
    }
  }

  // Sが空文字列になった場合は、S=Tとすることができる
  return "YES";
}

// const input = require("fs").readFileSync("/dev/stdin", "utf8")
const [S] = input.split("\n")
console.log(canMakeS(S));
