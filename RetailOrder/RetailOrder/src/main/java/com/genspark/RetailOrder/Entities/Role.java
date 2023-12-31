package com.genspark.RetailOrder.Entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "role")
public class Role
{

    /*
    role id is not autogenerated since there will
    only be 2 roles that will be hardcoded
     */
    @Id
    @Column(name = "role_id")
    private int roleId;

    @Column(name = "role_name")
    private String roleName;

//    @Column(name = "enabled")
//    private boolean enabled;
}
