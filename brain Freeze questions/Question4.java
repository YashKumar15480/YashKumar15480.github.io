
class A {
    static int x = 6, y = 10;

    int sum() {
        int x = 5, y = 5;
        ++x;
        y++;
        this.x = ++x;
        y++;
        return x += y;
    }
}

class B extends A {
    void display() {
        System.out.println(sum());
    }
}

class C extends B {
    void v() {
        int x = 10 + 2, y = 10;
        sum();
        display();
    }
}

/**
 * Question4
 */
public class Question4 {

    public static void main(String[] args) {
        C a = new C();
        a.v();

    }
}
// 14