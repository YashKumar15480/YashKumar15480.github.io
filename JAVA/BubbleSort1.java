import java.util.*;

class bubble {

    // int a[] = new int[5];

    public void getinfo(int n) {

        Scanner sc = new Scanner(System.in);
        int a[] = new int[n];
        // this.a[n] = a[n];
        for (int i = 0; i < n; i++)
            a[i] = sc.nextInt();
        // for (int i = 0; i < n; i++)
        // System.out.print(a[i] + " ");
    }

    void getinfo(int n) {
        // getinfo(n);
        int a[] = new int[n];
        for (int i = 0; i < n; i++)
            System.out.print(a[i] + " ");

    }
    /*
     * void showInfo(int n) { for (int i = 0; i < n; i++) System.out.print(a[i] +
     * " ");
     * 
     * }
     */

}

public class BubbleSort1 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        bubble b = new bubble();
        b.getinfo(5);
        // b.showInfo(5);
    }

}
