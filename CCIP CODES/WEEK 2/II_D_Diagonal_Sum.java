import java.util.*;

public class II_D_Diagonal_Sum {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a[][] = new int[n][n];
        int sum = 0, sec = 0, i = 0, j = 0;

        for (i = 0; i < n; i++)
            for (j = 0; j < n; j++)
                a[i][j] = sc.nextInt();

        for (i = 0; i < n; i++)
            for (j = 0; j < n; j++)
                if (i == j)
                    sum = sum + a[i][j];

        for (i = 0; i < n; i++)
            for (j = 0; j < n; j++)
                if (i + j == n - 1)
                    sec = sec + a[i][j];

        System.out.println(sum + sec);

    }
}