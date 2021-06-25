import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.*;

import javax.swing.*;

class output {
    void show() {
        JFrame f = new JFrame("YASH");
        f.setSize(300, 250);

        f.setLayout(null);
        f.setLocationRelativeTo(null);

        TextField tf = new TextField();

        tf.setBounds(60, 50, 170, 20);

        Button b1 = new Button("Click here");
        b1.setBounds(110, 110, 80, 30);

        Button b2 = new Button("X");
        b2.setBounds(265, 1, 20, 20);
        b2.setBackground(Color.RED);

        b1.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {
                System.out.println(tf.getText());

            }
        });

        b2.addActionListener(new ActionListener() {

            public void actionPerformed(ActionEvent e) {

                System.exit(0);
            }
        });

        f.add(tf);
        f.add(b1);
        f.add(b2);
        f.setVisible(true);

    }
}

public class TEXTFIELD_BUTTON {
    public static void main(String args[]) {
        output o = new output();
        o.show();
    }
}