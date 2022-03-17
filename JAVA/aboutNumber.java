import java.util.*;
import java.lang.Math;

class Number {

    private double num;
    boolean s1 = true;
    boolean s2 = false;
    double sum = 0, temp, n = 0;

    boolean isZero(double num) {
        this.num = num;
        System.out.println("This number =>" + num);
        if (num == 0)
            return s1;
        else
            return s2;

    }

    boolean isPositive(double num) {
        this.num = num;
        if (num > 0)
            return s1;
        else
            return s2;
    }

    boolean isNegative(double num) {
        this.num = num;
        if (num < 0)
            return s1;
        else
            return s2;
    }

    boolean isEven(double num) {
        this.num = num;
        if ((int) num % 2 == 0)
            return s1;
        else
            return s2;
    }

    boolean isOdd(double num) {
        this.num = num;
        if ((int) num % 2 != 0)
            return s1;
        else
            return s2;
    }

    boolean isPrime(double num) {
        this.num = num;
        int count = 0;
        for (double i = 1; i <= num; i++) {
            if (num % i == 0) {
                count++;
            }
        }
        if (count == 2)
            return s1;
        else
            return s2;
    }

    boolean isArmstrong(double num) {
        this.num = num;
        int count = 0;
        int mum = (int) num;

        while (mum != 0) {
            mum = mum / 10;
            count++;
        }

        int i = (int) num;
        while (i > 0) {
            n = i % 10;
            i = i / 10;
            sum = sum + (Math.pow(n, count));
        }
        if (sum == num)
            return s1;
        else
            return s2;
    }

}

public class aboutNumber {
    public static void main(String args[]) {

        Number n1 = new Number();
        Scanner ss = new Scanner(System.in);
        System.out.print("Enter a number => ");
        double numm = ss.nextDouble();

        System.out.println("Number is ZERO = " + (n1.isZero(numm)));
        System.out.println("Number is POSITIVE = " + (n1.isPositive(numm)));
        System.out.println("Number is NEGATIVE = " + (n1.isNegative(numm)));
        System.out.println("Number is EVEN = " + (n1.isEven(numm)));
        System.out.println("Number is ODD = " + (n1.isOdd(numm)));

        System.out.println("Number is PRIME = " + (n1.isPrime(numm)));
        System.out.println("Number is ARMSTRONG = " + (n1.isArmstrong(numm)));
    }
}
