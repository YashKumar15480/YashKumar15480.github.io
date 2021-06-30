import java.util.HashMap;
import java.util.Map;

class Sol1ution {
    public int[] twoSum(int[] numbers, int target) {
        int[] result = new int[2];
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int a = 0; a < numbers.length; a++) {
            if (map.containsKey(target - numbers[a])) {
                result[1] = a;
                result[0] = map.get(target - numbers[a]);
                return result;
            }
            map.put(numbers[a], a);
        }
        return result;
    }
}

public class two_sum {
    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}