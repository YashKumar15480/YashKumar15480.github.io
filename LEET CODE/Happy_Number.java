import java.util.Scanner;

class yyy {
    public boolean isHappy(int n) {
        int rem = 0, sum = 0;
        int count = 0;
        while (count < 10) {
            while (n > 0) {
                rem = n % 10;
                sum = sum + rem * rem;
                n = n / 10;
            }
            if (sum == 1) {
                return true;
            }
            n = sum;
            rem = 0;
            sum = 0;
            count++;
        }
        return false;
    }
}

public class Happy_Number {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        yyy foo = new yyy();
        System.out.println(foo.isHappy(n));

    }
}
