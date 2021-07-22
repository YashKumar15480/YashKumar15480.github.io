public class Question1 {
    void myMethod(int arr[]) {
        arr[0] = 10;
    }

    public static void main(String args[]) {
        int[] small = { 1, 2, 3 };
        new Question1().myMethod(small); /* Line 1 */
        System.out.println(small[0]);
    }
}
// 10