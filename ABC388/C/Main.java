package ABC388.C;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
// TLE
// TODO: binary Searchを使って計算量を落とす
public class Main {
    public static int calculatePattern(int numberOfMochi, List<Integer> mochiLists) {
        int pairCount = 0;
        for (int topIndex = 0; topIndex < numberOfMochi; topIndex++) {
            int top = mochiLists.get(topIndex);
            for (int bottomIndex = topIndex + 1;  bottomIndex < numberOfMochi;  bottomIndex++) {
                int bottom = mochiLists.get(bottomIndex);

                if(bottom / 2 >= top) {
                    pairCount = pairCount + (numberOfMochi - bottomIndex);
                    break;
                }
            }
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
