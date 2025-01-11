package ABC388.B;

import java.util.*;
// AC
public class Main {
    public static void getHeaviestSnake(List<int[]> snakes, int extendLength) {
        for(int i = 1; i <= extendLength; i++) {
            int maxWeight = Integer.MIN_VALUE;
            for (int[] snake : snakes) {
                int thickness = snake[0];
                int length = snake[1] + i;
                int weight = thickness * length;

                if(weight > maxWeight) {
                    maxWeight = weight;
                }
            }
            System.out.println(maxWeight);
        }
    }

    public static void getInput() {
        Scanner sc = new Scanner(System.in);
        List<int[]> snakesInfo = new ArrayList<>();
        String firstLine = sc.nextLine();
        String[] firstLineSplit = firstLine.split(" ");
        int numberOfSnake = Integer.parseInt(firstLineSplit[0]);
        int extendLength = Integer.parseInt(firstLineSplit[1]);

        for (int i = 0; i < numberOfSnake; i++) {
            String line = sc.nextLine();
            String[] elements = line.split(" ");
            int[] pair = new int[2];
            pair[0] = Integer.parseInt(elements[0]);
            pair[1] = Integer.parseInt(elements[1]);
            snakesInfo.add(pair);
        }
        getHeaviestSnake(snakesInfo, extendLength);
    }

    public static void main(String[] args) {
        getInput();
    }
}
