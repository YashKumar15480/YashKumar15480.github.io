class overload {
    int sum(int x, int y) {
        return x + y;
    }

    int sum(int x, int y, int z) {
        sum(5, 1);
        return x += y + z;
    }
}

public class Question14 {
    public static void main(String[] args) {
        overload a = new overload();
        System.out.println(a.sum(5, 10, 15));
        System.out.println(a.sum(5, 5));

    }
}
// 30
// 10