// package ABC315.B;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      int M = sc.nextInt();

      int[] days = new int[M];
      int totalDays = 0;
      for (int i = 0; i < M; i++) {
        days[i] = sc.nextInt();
        totalDays += days[i];
      }

      int daysUntilCenter = 0;
      int monthCount = 0;
      for (int i = 0; daysUntilCenter + days[i] < (totalDays + 1) / 2; i++) {
        daysUntilCenter += days[i];
        monthCount++;
      }

      int dayCount = 0;
      dayCount = ((totalDays + 1) / 2) - daysUntilCenter;

      System.out.println((monthCount + 1) + " " + dayCount);
  }
}
