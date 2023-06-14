package com.genspark.RetailOrder.Repostitories;

import com.genspark.RetailOrder.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface ProductRepo extends JpaRepository<Product, Integer> {
}
