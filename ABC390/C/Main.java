package ABC390.C;

import java.util.Scanner;

// TODO: どのように長方形の判定を行うか？
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
    }
}
