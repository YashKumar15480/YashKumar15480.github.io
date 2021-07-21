import java.io.*;
import java.util.*;

public class Help_shaking_hands {

    public static void main(String[] args) throws IOException {
        InputStreamReader read = new InputStreamReader(System.in);
        BufferedReader in = new BufferedReader(read);
        String s, st, st1;
        st = "";
        st1 = "";
        char c, ch;
        ch = 0;
        s = in.readLine();
        int l = s.length();
        for (int i = 0; i < l; i++) {
            c = s.charAt(0);
            if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z') {
                ch = Character.toUpperCase(c);
                st = s.substring(1, l);
                st1 = ch + st;

            } else {
                st1 = s;
            }
        }
        System.out.println(st1);

    }
}