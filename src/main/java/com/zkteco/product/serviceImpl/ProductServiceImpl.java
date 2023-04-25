package com.zkteco.product.serviceImpl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zkteco.product.dto.ProductDTO;
import com.zkteco.product.dto.ResultDTO;
import com.zkteco.product.entity.ProductDO;
import com.zkteco.product.repository.ProductRepo;
import com.zkteco.product.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductRepo productRepo;
	@Autowired
	private ModelMapper mapper;

	Date date = new Date();

	@Override
	public ResultDTO addProducts(ProductDO pd) {
		ResultDTO rtd = valiadte(pd);
		if (!rtd.getCode().equals("ERR")) {
			SimpleDateFormat createDate = new SimpleDateFormat("yyyy-MM-dd");
			pd.setCreated_at(createDate.format(date));
			productRepo.save(pd);
			ProductDTO prdDto = mapper.map(pd, ProductDTO.class);
			return new ResultDTO("OK", "Product data Added Successfully", prdDto);
		} else
			return new ResultDTO();
	}

	private ResultDTO valiadte(ProductDO pd) {	
		List<ProductDO> pds = productRepo.findAll();
		// Validation for Code
		if (Objects.nonNull(pd.getCode()) && !"".equalsIgnoreCase(pd.getCode())) {
			for (int i = 0; i < pds.size(); i++) {
				if (pds.get(i).getCode().equals(pd.getCode()))
					return new ResultDTO("ERR", "Product code should be unique", null);
			}
		}
		return null;

	}

	@Override
	public ResultDTO fetchAllProd() {
		List<ProductDO> prodList = productRepo.findAll();
		if (prodList.isEmpty())
			return new ResultDTO("ERR", "No Product Found in the cart", null);
		else
			return new ResultDTO("OK", "Currently Available Products Found in the cart:--" + prodList.size(),
					prodList);
	}

	@Override
	public ResultDTO fetchProdById(String productId) {
		Optional<ProductDO> prodById = productRepo.findById(productId);
		ProductDTO prdDto = mapper.map(prodById, ProductDTO.class);
		if (prodById.isPresent())
			return new ResultDTO("OK", "Product Found in the cart having ID=" + productId, prdDto);
		else
			return new ResultDTO("ERR", "No Product Found in the cart having ID=" + productId, prdDto);
	}

	@SuppressWarnings("unlikely-arg-type")
	@Override
	public ResultDTO updateById(String productId, ProductDO pd) {
		Optional<ProductDO> prodById = productRepo.findById(productId);
		if (!prodById.isPresent())
			return new ResultDTO("ERR", "No Product Found in the cart having ID=", productId);
		else {
			ProductDO prod = productRepo.findById(productId).get();
			if (Objects.nonNull(pd.getName()) && !"".equals(pd.getName())) {
				prod.setName(pd.getName());
			}
			if (Objects.nonNull(pd.getCode()) && !"".equals(pd.getCode())) {
				prod.setCode(pd.getCode());
			}
			if (Objects.nonNull(pd.getPrice()) && !"".equals(pd.getPrice())) {
				prod.setPrice(pd.getPrice());
			}
			if (Objects.nonNull(pd.getDescription()) && !"".equals(pd.getDescription())) {
				prod.setDescription(pd.getDescription());
			}
			SimpleDateFormat updateDate = new SimpleDateFormat("yyyy-MM-dd");
			prod.setUpdated_at(updateDate.format(date));
			productRepo.save(prod);
			ProductDTO prdDto = mapper.map(prod, ProductDTO.class);
			return new ResultDTO("OK", "Product Updated Successfully in the cart having ID=" + productId, prdDto);
		}
	}

	@Override
	public ResultDTO deleteProdById(String productId) {
		Optional<ProductDO> prodById = productRepo.findById(productId);
		if (!prodById.isPresent())
			return new ResultDTO("ERR", "No Product Found in the cart having ID=", productId);
		else {
			productRepo.deleteById(productId);
			ProductDTO prdDto = mapper.map(prodById, ProductDTO.class);
			return new ResultDTO("OK", "Product Deleted Successfully in the cart having ID=" + productId, prdDto);
		}

	}

}
