package ABC390.A;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
// AC
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // inputを取得
        List<Integer> numbers = new ArrayList<>();
        for(int i = 0; i < 5; i++) {
            int number = sc.nextInt();
            numbers.add(number);
        }

        int exchangeIndex = -1;
        for(int i = 0; i < numbers.size() - 1; i++) {
            int number = numbers.get(i);
            int nextNumber = numbers.get(i + 1);

            if(nextNumber < number) {
                exchangeIndex = i;
                break;
            }
        }

        // 既に昇順
        if(exchangeIndex == -1) {
            System.out.println("No");
            return;
        }

        // 入れ替え
        int tmp = numbers.get(exchangeIndex);
        numbers.set(exchangeIndex, numbers.get(exchangeIndex + 1));
        numbers.set(exchangeIndex + 1, tmp);

        // 再度昇順か確認
        boolean isSorted = true;
        for(int i = 0; i < numbers.size() - 1; i++) {
            int number = numbers.get(i);
            int nextNumber = numbers.get(i + 1);

            if(nextNumber < number) {
                isSorted = false;
                break;
            }
        }

        if(isSorted) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
