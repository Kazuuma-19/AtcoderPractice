package ABC386.B;

import java.util.Scanner;

public class Main {
    public static String getNumber() {
        Scanner scanner = new Scanner(System.in);
        return scanner.next();
    }
    public static int checkNumberOfZero(String[] numbers) {
        int count = 0;
        for (int i = 0; i < numbers.length - 1; i++) {
            if(numbers[i].equals("0") && numbers[i + 1].equals("0")) {
                count++;
                i++;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        String number = getNumber();
        String[] numbers = number.split("");
        int numberOfZero = checkNumberOfZero(numbers);
        System.out.println(numbers.length - numberOfZero);
    }
}
