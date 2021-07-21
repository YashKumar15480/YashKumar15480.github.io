import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner nn = new Scanner(System.in);
        int n = nn.nextInt();
        int a[] = new int[n];
        int temp = 0, i, j;
        for (i = 0; i < n; i++)
            a[i] = nn.nextInt();

        for (i = 0; i < n - 1; i++) {
            if (a[i] % 2 == 0 && a[i + 1] % 2 == 0) {
                temp = i;
            }
        }
        System.out.println(temp);

    }
}