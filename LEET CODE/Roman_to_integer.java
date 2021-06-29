import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class happa {
    private static final Map<Character, Integer> MAP;

    static {
        MAP = new HashMap<>();
        MAP.put('I', 1);
        MAP.put('V', 5);
        MAP.put('X', 10);
        MAP.put('L', 50);
        MAP.put('C', 100);
        MAP.put('D', 500);
        MAP.put('M', 1000);
    }

    public int romanToInt(String s) {
        int count = s.length() - 1;
        int num = MAP.get(s.charAt(count));

        for (int i = 0; i < count;) {
            int cur = MAP.get(s.charAt(i));
            if (cur < MAP.get(s.charAt(++i))) {
                num -= cur;
            } else {
                num += cur;
            }
        }
        return num;
    }
}

public class Roman_to_integer {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        happa a = new happa();
        System.out.println(a.romanToInt(s));
    }
}
