package ABC389.C;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 * TODO:
 * - ロジックが違う。データ構造から考え直したほうが良さそう
 * - リファクタリング
 */
public class Main {
    public static void getInputs() {
        List<Integer> lengthOfSnakes = new ArrayList<>();
        List<Integer>indexOfSnakes = new ArrayList<>();

        Scanner sc = new Scanner(System.in);
        int numberOfQuery = sc.nextInt();

        for(int i = 0; i < numberOfQuery; i++) {
            int queryType = sc.nextInt();
            if (queryType == 1) {
                // type 1(add snake)
                int snakeLength = sc.nextInt();
                System.out.println("output: " + queryType + " " + snakeLength);

                if(lengthOfSnakes.isEmpty()) {
                    indexOfSnakes.add(0);
                } else {
                    // 最後尾のヘビ
                    int lengthOfLastSnake = lengthOfSnakes.getLast();
                    int indexOfLastSnake = indexOfSnakes.getLast();
                    indexOfSnakes.add(indexOfLastSnake + lengthOfLastSnake);
                }
                lengthOfSnakes.add(snakeLength);
            } else if (queryType == 2) {
                // type 2(remove snake)
                System.out.println("output: " + queryType);
                // 先頭のヘビを削除
                lengthOfSnakes.removeFirst();
            } else {
                int snakeLength = sc.nextInt();
                // type 3(output the index of the snake)
                int index = indexOfSnakes.getLast();
                System.out.println(index);
            }
        }
        System.out.println("lengthOfSnakes: " + lengthOfSnakes);
        System.out.println("indexOfSnake: " + indexOfSnakes);
    }
    public static void main(String[] args) {
        getInputs();
    }
}
