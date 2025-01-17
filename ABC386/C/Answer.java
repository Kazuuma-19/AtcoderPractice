package ABC386.C;

import java.util.Scanner;

public class Answer {
    public static boolean canChange(int numberOfOperation, String original, String target) {
        int diffCount = 0;
        for (int i = 0; i < original.length(); i++) {
            char originalChar = original.charAt(i);
            char targetChar = target.charAt(i);

            if(originalChar != targetChar) {
                diffCount++;
            }
        }
        return diffCount == numberOfOperation;
    }

    public static boolean canInsert(int numberOfOperation, String original, String target) {
        int diffCount = 0;
        int originalIndex = 0, targetIndex = 0;
        while (originalIndex < original.length() && targetIndex < target.length()) {
            if (original.charAt(originalIndex) == target.charAt(targetIndex)) {
                originalIndex++;
                targetIndex++;
            } else {
                targetIndex++;
                diffCount++;
            }
        }
        // targetの残りの文字
        diffCount += (target.length() - targetIndex);
        return diffCount == numberOfOperation;
    }

    public static boolean canDelete(int numberOfOperation, String original, String target) {
        int diffCount = 0;
        int originalIndex = 0, targetIndex = 0;
        while (originalIndex < original.length() && targetIndex < target.length()) {
            if (original.charAt(originalIndex) == target.charAt(targetIndex)) {
                originalIndex++;
                targetIndex++;
            } else {
                originalIndex++;
                diffCount++;
            }
        }
        // originalの残りの文字
        diffCount += (original.length() - originalIndex);
        return diffCount == numberOfOperation;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numberOfOperation = Integer.parseInt(sc.nextLine());
        String original = sc.nextLine();
        String target = sc.nextLine();

        // 一致
        if(original.equals(target)) {
            System.out.println("Yes");
            return;
        }

        // 変更
        if(original.length() == target.length()) {
            System.out.println(canChange(numberOfOperation, original, target) ? "Yes" : "No");
            return;
        }

        // 挿入
        if(original.length() + numberOfOperation == target.length()) {
            System.out.println(canInsert(numberOfOperation, original, target) ? "Yes" : "No");
            return;
        }

        // 削除
        if(original.length() - numberOfOperation == target.length()) {
            System.out.println(canDelete(numberOfOperation, original, target) ? "Yes" : "No");
            return;
        }

        // 文字数の違いがnumberOfOperation(1)より大きい場合
        System.out.println("No");
    }
}
