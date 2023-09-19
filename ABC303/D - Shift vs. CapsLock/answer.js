// WA
function main(input) {
  const args = input.trim().split('\n');
  const [X, Y, Z] = args[0].split(' ').map(Number);
  const strings = args[1].split('');

  let totalTime = 0;
  let caps = false;

  strings.forEach(str => {
    if (caps == true) {
      if (str === 'a') {
        if (Y < X + Z) {
          totalTime += Y;
        } else {
          totalTime += X + Z;
          caps = true;
        }
      } else if (str === 'A') {
        if (X < Y + Z) {
          totalTime += X;
        } else {
          totalTime += Y + Z;
          caps = true;
        }
      }
    } else {
      if (str === 'a') {
        if (Y < X + Z) {
          totalTime += Y;
        } else {
          totalTime += X + Z;
          caps = true;
        }
      } else if (str === 'A') {
        if (Y < X + Z) {
          totalTime += Y;
        } else {
          totalTime += X + Z;
          caps = true;
        }
      }
    }
  });

  // console.log(totalTime)
}
main(`1 3 3
AAaA`);

// main(require("fs").readFileSync("/dev/stdin", "utf8"));