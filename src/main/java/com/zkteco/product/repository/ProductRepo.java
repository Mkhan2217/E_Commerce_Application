package com.zkteco.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

import com.zkteco.product.entity.ProductDO;
@Repository
public interface ProductRepo extends JpaRepository<ProductDO, String>{

}
