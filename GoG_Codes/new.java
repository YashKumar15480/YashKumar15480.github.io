
// Java program to demonstrate working of Scanner in Java
import java.util.*;

class Java_1_d_and_2_d_Array {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] a[], b;
            a = new int[n][n];
            b = new int[n];
            int sum = 0;
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    int p = sc.nextInt();
                    a[i][j] = p;
                }
            }
            int Max = 0;
            for (int i = 0; i < n; i++) {
                int p = sc.nextInt();
                b[i] = p;
            }
            Complete obj = new Complete();
            ArrayList<Integer> ans;
            ans = obj.array(a, b, n);
            for (int i : ans)
                System.out.print(i + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends

class Complete {
    public static ArrayList<Integer> array(int a[][], int b[], int n) {
        ArrayList<Integer> l1 = new ArrayList<>();
        int sum = 0;
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                if (i == j)
                    sum = sum + a[i][j];

        Arrays.sort(b);

        l1.add(sum);
        l1.add(b[b.length - 1]);
        return l1;
    }
}
