import java.util.*;

class Solution {

    static String one[] = { "", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ",
            "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ",
            "nineteen " };

    static String ten[] = { "", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ",
            "ninety " };

    static String numToWords(int n, String s) {
        String str = "";

        if (n > 19) {
            str += ten[n / 10] + one[n % 10];
        } else {
            str += one[n];
        }

        if (n != 0) {
            str += s;
        }

        return str;
    }

    static String convertToWords(long n) {

        String out = "";

        out += numToWords((int) (n / 10000000), "crore ");

        out += numToWords((int) ((n / 100000) % 100), "lakh ");

        out += numToWords((int) ((n / 1000) % 100), "thousand ");

        out += numToWords((int) ((n / 100) % 10), "hundred ");

        out += numToWords((int) (n % 100), "");

        return out;
    }

    public static void main(String[] args) {
        Scanner sn = new Scanner(System.in);
        long n = sn.nextLong();

        if ((int) n == 0) {
            System.out.print("zero");
            return;
        }
        System.out.printf(convertToWords(n));
    }
}