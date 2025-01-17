package ABC386.C;

import java.util.*;

/**
 * TODO: 一致している数を判断基準にすると、順序までは考慮できない
 */
public class Main {
    public static List<String> getInput() {
        Scanner sc = new Scanner(System.in);
        List<String> inputs = new ArrayList<>();
        // TODO: 回数指定でループを回す以外の方法はないのか？
        for (int i = 0; i < 3; i++) {
            String input = sc.next();
            inputs.add(input);
        }
        return inputs;
    }

    public static int countMatchWords(String initial, String target) {
        int matchCount = 0;
        for(int i = 0; i < target.length(); i++) {
            int targetChar = target.charAt(i);
            if(initial.indexOf(targetChar) != -1) {
                matchCount++;
            }
        }
        System.out.println("matchCount: " + matchCount);
        return matchCount;
    }

    public static void main(String[] args) {
        List<String> inputs = getInput();
        int numberOfOperation = Integer.parseInt(inputs.get(0));
        String initial = inputs.get(1);
        String target = inputs.get(2);

        // 1文字の処理で一致する可能性があるか判断
        int matchCount = countMatchWords(initial, target);
        // 変更・挿入 || 削除 || 同一
        if(matchCount + numberOfOperation == target.length() || matchCount == initial.length() - numberOfOperation || initial.equals(target)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
