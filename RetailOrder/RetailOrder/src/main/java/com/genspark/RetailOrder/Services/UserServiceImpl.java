package com.genspark.RetailOrder.Services;

import com.genspark.RetailOrder.DTOs.UserDTO;
import com.genspark.RetailOrder.Entities.User;
import com.genspark.RetailOrder.Repostitories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<User> getAllUsers()
    {
        return userRepo.findAll();
    }

    @Override
    public User findByUserId(int userId) {
        return userRepo.findByUserId(userId);
    }

    @Override
    public User addUser(User user) {
        return null;
    }

    @Override
    public User addAdmin(User user) {
        return null;
    }

    @Override
    public String deleteByUserId(int userId, int roleId)
    {
        userRepo.deleteUser(userId, roleId);
        return "User Deleted ";
    }

    @Override
    public String deleteByUserId(int userId) {
        userRepo.deleteById(userId);
        return "user deleted from user table";
    }

    @Override
    public User updateUser(UserDTO userDTO)
    {
        User existingUser = userRepo.findByUserId(userDTO.getUserId());

        if (existingUser == null) {
            System.out.println("User does not exist");
            return null;
        }

        existingUser.setFname(userDTO.getFname());
        existingUser.setLname(userDTO.getLname());
        existingUser.setPhone(userDTO.getPhone());
        existingUser.setAddress(userDTO.getAddress());

//        User user = new User(
//                userDTO.getUserId(),
//                userDTO.getFname(),
//                userDTO.getLname(),
//                userDTO.getEmail(),
//                userDTO.getPassword(),
//                userDTO.getPhone(),
//                userDTO.getAddress(),
//                userDTO.getRole()
//        );
        return userRepo.save(existingUser);
    }
}
