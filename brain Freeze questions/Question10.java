
public class Question10 {
    public static void main(String[] args) {
        var s = "KIET GROUP [][[]&^*@OF INSTITUTIONS";
        s = s.replaceAll("(.*)OF(.*)", "STUDENTS");
        System.out.println(s.replace("&", ""));
    }
}
// STUDENTS