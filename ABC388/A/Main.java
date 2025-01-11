package ABC388.A;

import java.util.Scanner;
// AC
public class Main {
    public static String getInput() {
        Scanner sc = new Scanner(System.in);
        return sc.nextLine();
    }
    public static void main(String[] args) {
        String input = getInput();
        System.out.println(input.charAt(0) + "UPC");
    }
}