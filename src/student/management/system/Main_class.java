package student.management.system;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class Main_class extends JFrame {
    Main_class(){

        ImageIcon i1 = new ImageIcon(getClass().getResource("/student/management/system/icons/home.png"));
        Image i2 = i1.getImage().getScaledInstance(1120,630,Image.SCALE_DEFAULT);
        ImageIcon i3 = new ImageIcon(i2);
        JLabel img = new JLabel(i3);
        img.setBounds(0,0,1120,630);
        add(img);

        JLabel heading = new JLabel("Employee Management System");
        heading.setBounds(340,155,400,40);
        heading.setFont(new Font("Raleway",Font.BOLD,25));
        img.add(heading);

        ImageIcon addIcon = new ImageIcon(getClass().getResource("/student/management/system/icons/front.png"));
        JButton add = new JButton("Add Employee", addIcon);
        add.setBounds(335,270,180,40);
        add.setForeground(Color.WHITE);
        add.setBackground(Color.black);
        add.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new AddStudentImpl.AddEmployee();
                setVisible(false);
            }
        });
        img.add(add);

        ImageIcon viewIcon = new ImageIcon(getClass().getResource("/student/management/system/icons/home.png"));
        JButton view = new JButton("View Employee", viewIcon);
        view.setBounds(565,270,180,40);
        view.setForeground(Color.WHITE);
        view.setBackground(Color.black);
        view.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new View_student();
                setVisible(false);
            }
        });
        img.add(view);

        ImageIcon remIcon = new ImageIcon(getClass().getResource("/student/management/system/icons/delete.png"));
        JButton rem = new JButton("Remove Employee", remIcon);
        rem.setBounds(440,370,180,40);
        rem.setForeground(Color.WHITE);
        rem.setBackground(Color.black);
        rem.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new Removestudent();
            }
        });
        img.add(rem);

        setSize(1120,630);
        setLocation(250,100);
        setLayout(null);
        setVisible(true);

    }
    public static void main(String[] args) {
        new Main_class();
    }
}
