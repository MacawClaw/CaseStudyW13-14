package com.genspark.RetailOrder.Entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
public class Product
{
    @Id
    @Column(name = "prod_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int prodId;

    @Column(name = "prod_name")
    private String prodName;

    @Column(name = "prod_desc")
    private String prodDesc;

    @Column(name = "vendor")
    private String vendor;

    @Column(name = "price")
    private int price;

    @ManyToOne
    @JoinColumn(name = "dept_id_fk")
    private Department department;

    @Override
    public String toString() {
        return "Product{" +
                "prodId=" + prodId +
                ", prodName='" + prodName + '\'' +
                ", prodDesc='" + prodDesc + '\'' +
                ", vendor='" + vendor + '\'' +
                ", price='" + price + '\'' +
                ", department=" + department +
                '}';
    }
}
