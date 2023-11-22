package com.example.FarmersFresh.service;

import com.example.FarmersFresh.dto.UserDto;
import com.example.FarmersFresh.entity.User;

import java.util.List;

public interface UserService {
    void saveUser(UserDto userDto);

    User findByEmail(String email);

    List<UserDto> findAllUsers();
}
