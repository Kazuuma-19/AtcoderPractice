package ABC390.C;

import java.util.Scanner;

// AC
public class Main {
    public static char[][] getInputs() {
        Scanner sc = new Scanner(System.in);
        int row = sc.nextInt();
        int column = sc.nextInt();
        sc.nextLine();
        char[][] grid = new char[row][column];
        for (int i = 0; i < row; i++) {
            grid[i] = sc.nextLine().toCharArray();
        }
        return grid;
    }
    public static void main(String[] args) {
        char[][] grid = getInputs();
        int lengthOfRaw = grid.length;
        int lengthOfColumn = grid[0].length;

        // 黒のバウンディングボックスを求める
        int minRow = lengthOfRaw, maxRow = -1;
        int minCol = lengthOfColumn, maxCol = -1;
        for (int i = 0; i < lengthOfRaw; i++) {
            for (int j = 0; j < lengthOfColumn; j++) {
                if (grid[i][j] == '#') {
                    minRow = Math.min(minRow, i);
                    maxRow = Math.max(maxRow, i);
                    minCol = Math.min(minCol, j);
                    maxCol = Math.max(maxCol, j);
                }
            }
        }

        //　矩形内が黒で塗りづぶせるか判定
        boolean possible = true;
        for (int i = minRow; i <= maxRow; i++) {
            for (int j = minCol; j <= maxCol; j++) {
                if (grid[i][j] == '.') {
                    possible = false;
                    break;
                }
            }
            if (!possible) break;
        }

        // 矩形外に黒がないか判定
        if (possible) {
            for (int i = 0; i < lengthOfRaw; i++) {
                for (int j = 0; j < lengthOfColumn; j++) {
                    if (i < minRow || i > maxRow || j < minCol || j > maxCol) {
                        if (grid[i][j] == '#') {
                            possible = false;
                            break;
                        }
                    }
                }
                if (!possible) break;
            }
        }

        System.out.println(possible ? "Yes" : "No");
    }
}
