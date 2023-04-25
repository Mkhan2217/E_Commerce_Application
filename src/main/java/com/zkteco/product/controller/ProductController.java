package com.zkteco.product.controller;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zkteco.product.dto.ProductDTO;
import com.zkteco.product.dto.ResultDTO;
import com.zkteco.product.entity.ProductDO;
import com.zkteco.product.service.ProductService;

@CrossOrigin("*")
@RestController
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService productService;
	@Autowired
	private ModelMapper mapper;
	private final Logger logger = LoggerFactory.getLogger(ProductDO.class);

	@PostMapping("/add")
	public ResultDTO addProducts(@RequestBody ProductDTO prod) {
		logger.info("Inside addProducts of ProductController");
		ProductDO pd = mapper.map(prod, ProductDO.class);
		return productService.addProducts(pd);

	}

	@GetMapping("/list")
	public ResultDTO fetchAllProd() {
		logger.info("Inside fetchAllProd of ProductController");
		return productService.fetchAllProd();
	}

	@GetMapping("/{id}")
	public ResultDTO fetchProdById(@PathVariable("id") String productId) {
		logger.info("Inside fetchProdById of ProductController");
		return productService.fetchProdById(productId);
	}

	@PutMapping("/{id}")
	public ResultDTO updateById(@PathVariable("id") String productId, @RequestBody ProductDTO prod) {
		logger.info("Inside updateById of ProductController");
		ProductDO pd = mapper.map(prod, ProductDO.class);
		return productService.updateById(productId, pd);
	}

	@DeleteMapping("/{id}")
	public ResultDTO deleteProdById(@PathVariable("id") String productId) {
		logger.info("Inside deleteProdById of ProductController");
		return productService.deleteProdById(productId);

	}
}
