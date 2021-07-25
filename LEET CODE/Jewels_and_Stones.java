class Solution {
    public int numJewelsInStones(String jewels, String stones) {

        int size1 = jewels.length();
        int size2 = stones.length();
        int count = 0;
        char temp;

        for (int i = 0; i < size1; i++) {
            temp = jewels.charAt(i);
            for (int j = 0; j < size2; j++) {
                if (stones.charAt(j) == temp)
                    count++;

            }
        }

        return count;
    }
}

public class Jewels_and_Stones {
    public static void main(String[] args) {

    }
}
