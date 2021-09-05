import java.util.*;

class Solution {

    // final
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        long mod = (long) (1e9) + 7;

        int t = in.nextInt();
        while (t-- > 0) {
            int n = in.nextInt();
            char a[] = in.next().toCharArray();
            long dp[][] = new long[n + 1][27];
            for (int i = 0; i <= n; i++)
                dp[i][0] = 1;
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= 26; j++) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j]) % mod;
                    int val = a[i - 1] - 'a';
                    if (val == j - 1) {
                        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
                    }
                }
            }

            System.out.println(dp[n][26]);
        }
    }
}