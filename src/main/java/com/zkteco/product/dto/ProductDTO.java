package com.zkteco.product.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductDTO {
	private String id;
	private String name;
	private String code;
	private Double price;
	private String img;
	private String description;
	private String created_at;
	private String updated_at;
}
