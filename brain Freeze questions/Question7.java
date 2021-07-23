class A3 {
    static int x, y;

    int sum(int x) {
        int y = 5;
        this.x++;
        this.y++;
        ++(this.x);
        y++;
        return this.x += this.y + this.x;
    }
}

class B3 extends A3 {
    void display() {
        System.out.println(sum(10));
    }
}

class C3 extends B3 {
    void v() {
        super.x = 10 + 2;
        super.y = 10;
        sum(10);
        display();
    }
}

/**
 * Question4
 */
public class Question7 {

    public static void main(String[] args) {
        C3 a = new C3();
        a.v();

    }
}
// 94