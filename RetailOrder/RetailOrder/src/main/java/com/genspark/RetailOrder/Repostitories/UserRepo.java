package com.genspark.RetailOrder.Repostitories;

import com.genspark.RetailOrder.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface UserRepo extends JpaRepository<User, Integer> {
}
