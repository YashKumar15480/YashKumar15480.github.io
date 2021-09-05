import java.io.*;
import java.util.*;
import java.math.RoundingMode;
import java.text.DecimalFormat;

public class Solution {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        double x1 = scan.nextDouble();
        double y1 = scan.nextDouble();
        double x2 = scan.nextDouble();
        double y2 = scan.nextDouble();
        double x3 = scan.nextDouble();
        double y3 = scan.nextDouble();
        double x4, y4;
        DecimalFormat df2 = new DecimalFormat("0.00");
        df2.setRoundingMode(RoundingMode.DOWN);
        x4 = ((double) (x2 * (x1 - x3) + y2 * (y1 - y3)) * (y3 - y2) - (y3 - y1) * (x1 * (x2 - x3) + y1 * (y2 - y3)))
                / ((x3 - x2) * (y3 - y1) - (y3 - y2) * (x3 - x1));
        y4 = ((double) (x2 * (x1 - x3) + y2 * (y1 - y3)) * (x3 - x2) - (x3 - x1) * (x1 * (x2 - x3) + y1 * (y2 - y3)))
                / ((y3 - y2) * (x3 - x1) - (y3 - y1) * (x3 - x2));
        x4 = Math.round(x4 * 100.0) / 100.0;
        y4 = Math.round(y4 * 100.0) / 100.0;
        System.out.println(df2.format(x4) + " " + df2.format(y4));

    }
}