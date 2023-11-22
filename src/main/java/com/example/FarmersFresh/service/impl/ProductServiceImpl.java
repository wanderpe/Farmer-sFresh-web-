package com.example.FarmersFresh.service.impl;

import com.example.FarmersFresh.entity.Product;
import com.example.FarmersFresh.repository.ProductRepository;
import com.example.FarmersFresh.service.ProductService;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {

        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long productId) {
        return productRepository.findById(productId).orElse(null);
    }

    @Override
    public void saveProduct(Product product) {
        productRepository.save(product);

    }
    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);

    }
}
