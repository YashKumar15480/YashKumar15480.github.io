class A2 {
    static int x = 12, y = 1;

    int swap() {
        boolean temp = true;
        int flag = 0, x = this.x;
        while (temp) {
            flag = this.x;
            this.x = this.y;
            this.y = flag;
            if (this.y == x) {
                temp = false;
                return this.x + this.y;
            }
        }
        return flag + x;
    }

}

class B2 extends A2 {
    void display() {
        swap();
        System.out.println(swap());
    }
}

public class Question6 {
    public static void main(String[] args) {
        B2 a = new B2();
        a.display();
    }
}
// 13