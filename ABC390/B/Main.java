package ABC390.B;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// AC
public class Main {
    public static List<Long> getInput() {
        Scanner sc = new Scanner(System.in);
        int length = Integer.parseInt(sc.nextLine());
        List<Long> numberArray = new ArrayList<>();
        for (int i = 0; i < length; i++) {
            numberArray.add(sc.nextLong());
        }
        return numberArray;
    }
    public static void main(String[] args) {
        List<Long> numberArray = getInput();

        long first = numberArray.get(0);
        long second = numberArray.get(1);
        double commonRatio = (double) second / first;

        boolean isGeometricSequence = true;
        for (int i = 0; i < numberArray.size() - 1; i++) {
            if (numberArray.get(i) * commonRatio != numberArray.get(i + 1)) {
                isGeometricSequence = false;
                break;
            }
        }

        if (isGeometricSequence) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
