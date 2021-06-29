import java.awt.event.MouseEvent;

import javax.swing.JFrame;
import javax.swing.event.MouseInputAdapter;

class yy extends MouseInputAdapter {
    int i = 0;

    public void mouseMoved(MouseEvent e) {
        // TODO Auto-generated method stub
        System.out.println("Moved X = " + e.getX() + " Y = " + e.getY());
    }

    public void mouseDragged(MouseEvent e) {
        i++;
        System.out.println("..." + (i));
    }
}

public class mousework_with_MouseMotionListners extends MouseInputAdapter {
    public static void main(String args[]) {

        JFrame f = new JFrame("YASH");
        f.setBounds(100, 100, 500, 500);
        f.setVisible(true);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.addMouseMotionListener(new yy());
    }

}
