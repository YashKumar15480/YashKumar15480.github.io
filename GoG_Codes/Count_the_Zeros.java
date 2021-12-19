//Initial Template for Java

import java.io.*;
import java.util.*;

public class Count_the_Zeros {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine().trim());
        while (tc-- > 0) {
            String[] inputLine;
            inputLine = br.readLine().trim().split(" ");
            int n = Integer.parseInt(inputLine[0]);
            int[] arr = new int[n];
            inputLine = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(inputLine[i]);
            }

            int ans = new Solution().countZeroes(arr, n);
            System.out.println(ans);
        }
    }
}

class Solution {
    int countZeroes(int[] arr, int n) {
        int count = 0;

        for (int i = 0; i < arr.length; i++)
            if (arr[i] == 0)
                count++;

        return count;
    }

}
