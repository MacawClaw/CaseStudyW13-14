package com.genspark.RetailOrder.Entities;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order
{
    @Id
    @Column(name = "order_id")
    private int orderId;

    @Column(name = "status")
    private String status;
}
