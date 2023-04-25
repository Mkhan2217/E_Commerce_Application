package com.zkteco.product.service;

import com.zkteco.product.dto.ResultDTO;
import com.zkteco.product.entity.ProductDO;

public interface ProductService {

	ResultDTO addProducts(ProductDO pd);

	ResultDTO fetchAllProd();

	ResultDTO fetchProdById(String productId);

	ResultDTO updateById(String productId, ProductDO pd);

	ResultDTO deleteProdById(String productId);

}
