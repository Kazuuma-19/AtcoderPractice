package ABC388.C;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * binary Searchで計算量を落とす
 * int: +-2^31, long: +-2^63
 */
public class Main {
    public static long calculatePattern(int numberOfMochi, List<Integer> mochiLists) {
        long pairCount = 0;

        for (int mochiIndex = 0; mochiIndex < numberOfMochi; mochiIndex++) {
            int top = mochiLists.get(mochiIndex);
            int first = mochiIndex + 1;
            int end = numberOfMochi - 1;

            // 最小のbottomIndexを探す
            while (first <= end) {
                int middle = (first + end) / 2;
                int middleValue = mochiLists.get(middle);

                if (middleValue / 2 >= top) { // 候補になる
                    end = middle - 1;
                } else {
                    first = middle + 1;
                }
            }
            pairCount = pairCount + (numberOfMochi - first);
        }
        return pairCount;
    }
    public static void getInput() {
        Scanner sc = new Scanner(System.in);
        int numberOfMochi = Integer.parseInt(sc.nextLine());
        String[] mochiParts = sc.nextLine().split(" ");
        List<Integer> mochiLists = new ArrayList<>();

        for(String mochi : mochiParts) {
            mochiLists.add(Integer.parseInt(mochi));
        }
        System.out.println(calculatePattern(numberOfMochi, mochiLists));
    }
    public static void main(String[] args) {
        getInput();
    }
}
