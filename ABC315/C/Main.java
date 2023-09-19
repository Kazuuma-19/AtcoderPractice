/*********
  多次元配列
  ソート
  探索(候補を絞る)
****************** */

// package ABC315.C;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int N = sc.nextInt();

    int[][] data = new int[N][2];
    
    for (int i = 0; i < N; i++) {
        data[i][0] = sc.nextInt();
        data[i][1] = sc.nextInt();
    }

    Arrays.sort(data, (a, b) ->  b[1] - a[1]);

    int maxSatisfaction = 0;
    int total = 0;
    for (int i = 1; i < data.length; i++) {
      if(data[0][0] == data[i][0]) {
        total = data[0][1] + (data[i][1] / 2);
      } else {
        total = data[0][1] + data[i][1];
      }

      if(total > maxSatisfaction) {
        maxSatisfaction = total;
      }
    }

    System.out.println(maxSatisfaction);
  }
}
