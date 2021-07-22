// package brain Freeze questions;

public class Question2 {
    public static void main(String argv[]) {
        int arr[] = new int[10];
        int i = 5;
        arr[i++] = i++ + i++;
        System.out.print(arr[5] + ":" + arr[6]);
    }
}
// 13:0