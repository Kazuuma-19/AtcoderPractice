/*********
  全探索
**********/
 package ABC213.B;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int N = sc.nextInt();
      int[] num  = new int[N];

      for (int i = 0; i < num.length; i++) {
        num[i] = sc.nextInt();
      }

      int tallest = 0;
      int secondTallest = 0;

      for (int i = 0; i < num.length; i++) {
        if(num[i] > tallest) {
          secondTallest = tallest;
          tallest = num[i];
        } else if(num[i] != tallest && num[i] > secondTallest) {
          secondTallest = num[i];
        }
      }

      for (int i = 0; i < num.length; i++) {
        if(num[i] == secondTallest) {
          System.out.println(i + 1);
          break;
        }
      }
  }
}
