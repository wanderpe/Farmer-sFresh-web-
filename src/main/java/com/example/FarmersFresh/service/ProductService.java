package com.example.FarmersFresh.service;

import com.example.FarmersFresh.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();

    Product getProductById(Long productId);

    void saveProduct(Product product);


    void deleteProduct(Long productId);
}
