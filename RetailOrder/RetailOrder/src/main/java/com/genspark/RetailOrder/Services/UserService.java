package com.genspark.RetailOrder.Services;

import com.genspark.RetailOrder.DTOs.UserDTO;
import com.genspark.RetailOrder.Entities.User;

import java.util.List;

public interface UserService
{
    List<User> getAllUsers();
    User findByUserId(int userId);
    User addUser(User user);
    User addAdmin(User user);
    String deleteByUserId(int userId, int roleId);
    String deleteByUserId(int userId);
    User updateUser(UserDTO userDTO);
}
