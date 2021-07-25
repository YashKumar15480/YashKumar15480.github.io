class Solution {
    public String restoreString(String s, int[] indices) {
        int temp = 0, size = indices.length;

        char a[] = s.toCharArray();
        char b[] = new char[size];

        for (int i = 0; i < size; i++) {
            b[indices[i]] = a[i];
        }
        String s1 = new String(b);
        return s1;

    }
}

/**
 * Shuffle String
 */
public class Shuffle_String {

    public static void main(String[] args) {

    }
}