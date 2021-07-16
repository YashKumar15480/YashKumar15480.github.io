import java.util.Arrays;

class GFG {
    public static int MAX_CHAR = 256;

    static int kthNonRepeating(String str, int k) {
        int n = str.length();

        int[] count = new int[MAX_CHAR];

        int[] index = new int[MAX_CHAR];

        for (int i = 0; i < MAX_CHAR; i++) {
            count[i] = 0;
            index[i] = n;
        }

        for (int i = 0; i < n; i++) {

            char x = str.charAt(i);
            ++count[x];

            if (count[x] == 1)
                index[x] = i;

            if (count[x] == 2)
                index[x] = n;
        }

        Arrays.sort(index);

        return (index[k - 1] != n) ? index[k - 1] : -1;
    }

    public static void main(String[] args) {
        String str = "geeksforgeeks";
        int k = 3;
        int res = kthNonRepeating(str, k);

        System.out.println(res == -1 ? "There are less than k non-repeating characters"
                : "k'th non-repeating character is  " + str.charAt(res));
    }
}