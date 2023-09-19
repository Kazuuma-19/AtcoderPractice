import java.util.*;

public class Answer {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        long[][] iceCreams = new long[N][2];
        for (int i = 0; i < N; i++) {
            iceCreams[i][0] = sc.nextInt();  // flavor
            iceCreams[i][1] = sc.nextLong(); // deliciousness
        }

        // アイスクリームを美味しさで降順にソート
        Arrays.sort(iceCreams, (a, b) -> Long.compare(b[1], a[1]));

        long maxSatisfaction = 0;
        TreeSet<Long> set = new TreeSet<>();

        for (int i = 0; i < N; i++) {
            if (i > 0) {
                if (iceCreams[i][0] == iceCreams[0][0]) {
                    maxSatisfaction = Math.max(maxSatisfaction, iceCreams[0][1] + iceCreams[i][1] / 2);
                } else {
                    maxSatisfaction = Math.max(maxSatisfaction, iceCreams[0][1] + iceCreams[i][1]);
                }
            }
            set.add(iceCreams[i][1]);
            if (i > 0 && set.lower(iceCreams[i][1]) != null) {
                long high = set.lower(iceCreams[i][1]);
                if (iceCreams[i][0] == iceCreams[0][0]) {
                    maxSatisfaction = Math.max(maxSatisfaction, high + iceCreams[i][1] / 2);
                } else {
                    maxSatisfaction = Math.max(maxSatisfaction, high + iceCreams[i][1]);
                }
            }
        }

        System.out.println(maxSatisfaction);
    }
}
