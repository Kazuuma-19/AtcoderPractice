package ABC388.C;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
// TLE
// TODO: 計算量は確実に落ちてそう。ただ、WAが出てる。numberOfMochiが奇数のとき正常に動作するかとか確認するところから
public class Main {
    public static int calculatePattern(int numberOfMochi, List<Integer> mochiLists) {
        int pairCount = 0;

        for (Integer mochiList : mochiLists) {
            int first = 0;
            int end = numberOfMochi - 1;

            int top = mochiList;
            // はじめに一致するbottomIndexを探す
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
    public static int getInput() {
        Scanner sc = new Scanner(System.in);
        int numberOfMochi = Integer.parseInt(sc.nextLine());
        String[] mochiParts = sc.nextLine().split(" ");
        List<Integer> mochiLists = new ArrayList<>();

        for(String mochi : mochiParts) {
            mochiLists.add(Integer.parseInt(mochi));
        }
        return calculatePattern(numberOfMochi, mochiLists);
    }
    public static void main(String[] args) {
        int pairCount = getInput();
        System.out.println(pairCount);
    }
}
