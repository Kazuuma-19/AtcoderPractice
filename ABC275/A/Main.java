/**********
 * 
 * 線形探索
 * 
**********/

// package ABC275.A;

package ABC275.A;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int N = sc.nextInt();

      int highest = 0;
      int count = 0;
      for (int i = 0; i < N; i++) {
        int height = sc.nextInt();

        if(highest < height) {
          highest = height;
          count = i + 1;
        }
      }
      System.out.println(count);
  }
}
