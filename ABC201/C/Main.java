/*********
  全探索
**********/
// package ABC201.C;
package ABC201.C;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      String s = sc.next();
      
      int count = 0;
      
      for (int i = 0; i <= 9999; i++) {
          String pin = String.format("%04d", i); // 4桁の数字を生成
          boolean isValid = true;
          
          for (int j = 0; j <= 9; j++) {
              char c = s.charAt(j);
              
              if (c == 'o' && !pin.contains(String.valueOf(j))) {
                  // Sのj番目の文字が'o'で、PINにjが含まれていない場合
                  isValid = false;
                  break;
              } else if (c == 'x' && pin.contains(String.valueOf(j))) {
                  // Sのj番目の文字が'x'で、PINにjが含まれている場合
                  isValid = false;
                  break;
              }
          }
          
          if (isValid) count++;
      }
      
      System.out.println(count);
    }
}