package com.genspark.RetailOrder.Entities;

import lombok.*;
import org.hibernate.annotations.Columns;

import javax.persistence.*;

@Entity
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
public class User
{
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;

    @Column(name = "user_fname")
    private String fname;

    @Column(name = "user_lname")
    private String lname;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_password")
    private String passwrod;

    @Column(name = "user_phone")
    private String phone;

    @Column(name = "user_address")
    private String address;

    // create role entity first to complete
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "role_id_fk", referencedColumnName = "role_id")
    private Role role;

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", email='" + email + '\'' +
                ", passwrod='" + passwrod + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", role=" + role +
                '}';
    }
}
