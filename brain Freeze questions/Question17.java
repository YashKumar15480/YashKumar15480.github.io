class new_EXP_1 extends Exception {

}

class new_EXP_2 extends Exception {

}

public class Question17 {
    static void method() throws new_EXP_1 {
        throw new new_EXP_1();
    }

    static void method1() throws new_EXP_2, new_EXP_1 {
        method();
        throw new new_EXP_2();

    }

    static void method2() throws new_EXP_2, new_EXP_1 {
        method1();
    }

    public static void main(String[] args) {
        try {
            method2();
        } catch (Exception e) {
            System.out.println("New exception name => " + e);
        }
    }
}
// New exception name => new_EXP_1