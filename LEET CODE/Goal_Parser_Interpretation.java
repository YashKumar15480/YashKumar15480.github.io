class Solution145 {
    public String interpret(String command) {

        command = command.replace("()", "o");
        command = command.replace("(al)", "al");
        return command;

    }
}

/**
 * Goal_Parser_Interpretation
 */
public class Goal_Parser_Interpretation {

    public static void main(String[] args) {
        /*
         * On leet code we don't need to call main method it directly linked to solution
         * class you just need to write methods in solutions class and return the value
         * according to method's parameters
         * 
         */
    }
}