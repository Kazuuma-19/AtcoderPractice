// package ABC282.B;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int N = sc.nextInt();
    int M = sc.nextInt();

    String[] answer = new String[N];
    for (int i = 0; i < N; i++) {
      answer[i] = sc.next();
    }

    int count = 0;
    for (int i = 0; i < answer.length; i++) {
      
      for (int j = i + 1; j < N; j++) {
        boolean isValid = true;

        for (int k = 0; k < M; k++) {
          if(answer[i].charAt(k) == 'x' && answer[j].charAt(k) == 'x') {
            isValid = false;
            break;
          }
        }
        if(isValid) count++;
      }

    }

    System.out.println(count);
  }
}
