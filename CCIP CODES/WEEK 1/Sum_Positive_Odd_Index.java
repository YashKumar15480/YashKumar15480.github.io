import java.util.*;

public class Sum_Positive_Odd_Index {

    public static void main(String args[]) {
        int n, i, sum = 0;
        Scanner ss = new Scanner(System.in);
        n = ss.nextInt();

        int ar[] = new int[n];

        for (i = 1; i < n; i++) {
            ar[i] = ss.nextInt();
            if ((i % 2 != 0) && (ar[i] > 0)) {
                sum = sum + ar[i];
            }
        }
        System.out.print(sum);
    }
}