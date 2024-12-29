package ABC386.A;

import java.util.*;

public class Main {
    public static List<Integer> getCard() {
        Scanner scanner = new Scanner(System.in);
        List<Integer> cards = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            cards.add(scanner.nextInt());
        }
        return cards;
    }
    public static void checkFullHouse(List<Integer> cards) {
        Set<Integer> cardSet = new HashSet<>(cards);
        if (cardSet.size() == 2) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
    public static void main(String[] args) {
        List<Integer> cards = getCard();
        checkFullHouse(cards);
    }
}
