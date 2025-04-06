        package ABC389.C;

        import java.util.ArrayList;
        import java.util.List;
        import java.util.Scanner;

        /**
         * TLE
         * note:
         * - intは32bit。10^9くらいしか対応できない
         * - List.removeはO(N)かかる
         */
        public class Main {
            /**
             * type 1(add snake)
             * @param snakeLength
             * @param lengthOfSnakes
             * @param headIndexOfSnakes
             */
            public static void addSnake(long snakeLength, List<Long> lengthOfSnakes, List<Long> headIndexOfSnakes) {
                if(lengthOfSnakes.isEmpty()) {
                    headIndexOfSnakes.add(0L);
                } else {
                    // 最後尾のヘビ
                    long indexOfLastSnake = headIndexOfSnakes.get(headIndexOfSnakes.size() - 1);
                    long lengthOfLastSnake = lengthOfSnakes.get(lengthOfSnakes.size() - 1);
                    headIndexOfSnakes.add(indexOfLastSnake + lengthOfLastSnake);
                }
                lengthOfSnakes.add(snakeLength);
            }
            public static void main(String[] args) {
                List<Long> lengthOfSnakes = new ArrayList<>();
                List<Long> headIndexOfSnakes = new ArrayList<>();
                StringBuilder outputSnakes = new StringBuilder();

                long shift = 0;
                int head = 0;

                Scanner sc = new Scanner(System.in);
                int numberOfQuery = sc.nextInt();

                for(int i = 0; i < numberOfQuery; i++) {
                    int queryType = sc.nextInt();
                    switch (queryType) {
                        case 1 -> {
                            long snakeLength = sc.nextLong();
                            addSnake(snakeLength, lengthOfSnakes, headIndexOfSnakes);
                        }
                        case 2 -> {
                            shift += lengthOfSnakes.get(head);
                            head++;
                        }
                        case 3 -> {
                            // type 3(output the index of the snake)
                            int indexOfSnake = sc.nextInt();
                            // 指定されたhead + indexOfSnake番目を取得
                            int index = head + indexOfSnake - 1;
                            // 計算量削減のため最後にまとめて出力する
                            long result = headIndexOfSnakes.get(index) - shift;
                            outputSnakes.append(result).append("\n");
                        }
                    }
                }
                System.out.println(outputSnakes);
            }
        }
