
class Solution {
    public String sortSentence(String s) {
        String[] words = s.split(" ");
        String[] new_s = new String[words.length];

        for (String i : words) {
            new_s[i.charAt(i.length() - 1) - 1 - '0'] = i.substring(0, i.length() - 1);
        }
        return String.join(" ", new_s);

    }
}

/**
 * Sorting_the_Sentence
 */
public class Sorting_the_Sentence {

    public static void main(String[] args) {

    }
}