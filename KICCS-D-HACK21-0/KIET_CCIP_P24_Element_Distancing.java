import java.util.*;

public class elementdistancing {
    public static int index(int x[], int num) {
        int n = x.length;
        for (int i = 0; i < n; i++) {
            if (x[i] == num)
                return i;
        }
        return -1;
    }

    public static void main(String args[]) {
        int n, a, b, start, end, min, low;
        Scanner br = new Scanner(System.in);
        n = br.nextInt();
        int x[] = new int[n];
        for (int i = 0; i < n; i++)
            x[i] = br.nextInt();
        a = br.nextInt();
        b = br.nextInt();
        start = index(x, a);
        end = index(x, b);
        if (start == -1 || end == -1)
            System.out.println(-1);
        else {
            min = Math.abs(start - end);
            for (int i = 0; i < n; i++) {
                if (x[i] == a) {
                    start = i;
                    for (int j = 0; j < n; j++) {
                        if (x[j] == b) {
                            end = j;
                            low = Math.abs(start - end);
                            if (low < min)
                                min = low;
                        }
                    }
                }
            }
            System.out.println(min - 1);
        }
    }
}