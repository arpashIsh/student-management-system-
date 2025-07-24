package student.management.system;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class Main_class extends JFrame {
    Main_class(){

        JLabel img;
        java.net.URL imgURL = getClass().getResource("/student/management/system/icons/front.png");
        if (imgURL != null) {
            ImageIcon i1 = new ImageIcon(imgURL);
            Image i2 = i1.getImage().getScaledInstance(600,400,Image.SCALE_SMOOTH);
            ImageIcon i3 = new ImageIcon(i2);
            img = new JLabel(i3);
            img.setBounds(260,100,600,400);
            add(img);
        } else {
            System.err.println("Background image not found");
            img = new JLabel();
            img.setBounds(260,100,600,400);
            add(img);
        }

        JLabel heading = new JLabel("Employee Management System");
        heading.setBounds(370,120,400,40);
        heading.setFont(new Font("Raleway",Font.BOLD,25));
        img.add(heading);

        ImageIcon addIcon = new ImageIcon(getClass().getResource("/student/management/system/icons/LoginB.png"));
        JButton add = new JButton("Add Employee", addIcon);
        add.setBounds(320,200,180,40);
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

        ImageIcon viewIcon = new ImageIcon(getClass().getResource("/student/management/system/icons/print.png"));
        JButton view = new JButton("View Employees", viewIcon);
        view.setBounds(510,200,180,40);
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

        ImageIcon updateIcon = new ImageIcon(getClass().getResource("/student/management/system/icons/home.png"));
        JButton update = new JButton("Update Employee", updateIcon);
        update.setBounds(320,270,180,40);
        update.setForeground(Color.WHITE);
        update.setBackground(Color.black);
        update.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new Updatestudent();
                setVisible(false);
            }
        });
        img.add(update);

        ImageIcon remIcon = new ImageIcon(getClass().getResource("/student/management/system/icons/delete.png"));
        JButton rem = new JButton("Remove Employee", remIcon);
        rem.setBounds(510,270,180,40);
        rem.setForeground(Color.WHITE);
        rem.setBackground(Color.black);
        rem.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new Removestudent();
                setVisible(false);
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
