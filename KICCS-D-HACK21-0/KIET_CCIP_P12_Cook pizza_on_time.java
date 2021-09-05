import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int p = scan.nextInt();
        int n = scan.nextInt();

        int a[] = new int[n];
        int max = 0;
        for (int i = 0; i < n; i++) {
            a[i] = scan.nextInt();
            max = Math.max(max, a[i]);
        }
        int r = max * ((p * (p + 1)) / 2);
        int l = 0;

        while (l < r) {
            int mid = l + (r - l) / 2;
            int sum = 0;
            for (int i = 0; i < n; i++) {
                int rank = a[i];
                sum += find(mid / rank);
            }

            if (sum >= p) {
                r = mid;
            } else {
                l = mid + 1;
            }

        }
        System.out.println(l);
    }

    private static int find(int n) {
        int sum = n;
        int a = 1;
        int b = 1;
        int c = -sum * 2;

        int delta = b * b - 4 * a * c;
        if (delta >= 0) {
            int x1 = -b + (int) Math.sqrt((double) delta);

            x1 /= 2 * a;

            return x1;
        }

        return -1;
    }
}