package com.genspark.RetailOrder.Repostitories;

import com.genspark.RetailOrder.Entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface OrderRepo extends JpaRepository<Order, Integer> {
}
