import java.awt.*;

import javax.swing.JFrame;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

class yashh implements MouseListener {
    @Override
    public void mouseClicked(MouseEvent e) {
        // TODO Auto-generated method stub

    }

    @Override
    public void mousePressed(MouseEvent e) {
        System.out.println("Mouse pressed at " + e.getX() + " - " + e.getY());
    }

    @Override
    public void mouseReleased(MouseEvent e) {
        // TODO Auto-generated method stub

    }

    @Override
    public void mouseEntered(MouseEvent e) {
        // TODO Auto-generated method stub
        System.out.println("Mouse enterd at pos " + e.getX() + " - " + e.getY());
    }

    @Override
    public void mouseExited(MouseEvent e) {
        // TODO Auto-generated method stub
        System.out.println("Mouse exit at pos " + e.getX() + " - " + e.getY());
    }
}

public class mousework_with_MouseListners {
    public static void main(String args[]) {

        JFrame f = new JFrame("YASH");
        f.setBounds(100, 100, 500, 500);
        f.setVisible(true);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.addMouseListener(new yashh());
    }

}
