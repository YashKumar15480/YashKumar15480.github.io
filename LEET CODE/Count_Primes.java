class Solution {
    public int countPrimes(int n) {
        int a[] = new int[n];
        for (int i = 2; i < n; i++) {
            for (int j = i + i; j < n; j = j + i) {
                a[j] = 1;
            }

        }
        int result = 0;
        for (int i = 2; i < a.length; i++) {
            if (a[i] == 0) {
                result++;
            }
        }
        return result;
    }
}

/**
 * Count_Primes
 */
public class Count_Primes {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}