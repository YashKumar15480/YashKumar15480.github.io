import java.awt.*;
import java.awt.event.ActionEvent;
import javax.swing.*;

class output {
    void show() {
        JFrame f = new JFrame("YASH");
        f.setSize(300, 300);

        f.setLayout(null);
        f.setLocationRelativeTo(null);
        // yash
        JTextField tf = new JTextField(); // 1st textField
        tf.setBounds(60, 50, 170, 20);

        JLabel l1 = new JLabel("above text copied below on click");
        l1.setBounds(50, 70, 200, 30);

        JTextField tt = new JTextField(); // 2st textField
        tt.setBounds(60, 100, 170, 20);

        JTextField t2 = new JTextField(); // 3rd textFiled
        t2.setBounds(100, 185, 80, 20);
        t2.setHorizontalAlignment(t2.CENTER);

        Button b1 = new Button("Click here"); // button 1
        b1.setBounds(100, 120, 80, 30);

        Button b2 = new Button("X"); // button 2
        b2.setBounds(265, 1, 20, 20);
        b2.setBackground(Color.RED);

        Button b3 = new Button("Clear Txt Field"); // button 3
        b3.setBounds(180, 150, 100, 30);
        b3.setBackground(Color.CYAN);

        Button b4 = new Button("Count words"); // button 4
        b4.setBounds(1, 150, 100, 30);
        b4.setBackground(Color.CYAN);
        // Actions performed
        b1.addActionListener((ActionEvent e) -> tt.setText(tf.getText()));
        b2.addActionListener((ActionEvent e) -> System.exit(0));
        b3.addActionListener((ActionEvent e) -> {
            tf.setText("");
            tt.setText("");
            t2.setText("");
        });
        b4.addActionListener((ActionEvent e) -> {
            String s = tf.getText();
            System.out.println("Total charater pressed => " + (s.length()));
            t2.setText(Integer.toString(s.length()));
        });

        f.add(l1);
        f.add(tf);
        f.add(tt);
        f.add(b1);
        f.add(b2);
        f.add(b3);
        f.add(b4);
        f.add(t2);
        f.setVisible(true);

    }

    private String length(String text) {
        return null;
    }
}

public class TEXTFIELD_BUTTON {
    public static void main(String args[]) {
        output o = new output();
        o.show();
    }
}