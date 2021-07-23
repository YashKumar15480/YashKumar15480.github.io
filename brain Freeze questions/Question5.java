class A1 {
    static int x;

    int sum(int x) {
        int y = 5;
        this.x = x;
        this.x++;
        y++;
        ++(this.x);
        y++;
        return this.x += y;
    }
}

class B1 extends A1 {
    void display() {
        System.out.println(sum(10));
    }
}

class C1 extends B1 {
    void v() {
        int x = 10 + 2, y = 10;
        sum(10);
        display();
    }
}

/**
 * Question4
 */
public class Question5 {

    public static void main(String[] args) {
        C1 a = new C1();
        a.v();

    }
}
// 19