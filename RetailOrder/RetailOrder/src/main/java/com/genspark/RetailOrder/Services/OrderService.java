package com.genspark.RetailOrder.Services;

import com.genspark.RetailOrder.Entities.Order;
import com.genspark.RetailOrder.Entities.Product;

import java.util.List;

public interface OrderService
{
    List<Order> getOrderByUserId(int userId);
    List<Product> getAllProducts();
    List<Product> getAllProdsByDeptId(int deptId);
    Product addProduct(Product product);
    List<Order> addProdToOrder(Order order, Product product);
    Order addOrder(Order order);
}
