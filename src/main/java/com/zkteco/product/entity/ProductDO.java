package com.zkteco.product.entity;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDO {
	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	@Column(length = 36)
	private String id;
	@NotBlank
	@Column(length = 50)
	private String name;
	@NotBlank
	@Column(length = 50,unique = true)
	private String code;
	private Double price;
	@Lob
	@NotBlank
	private String img;
	@Column(length = 255)
	private String description;
	private String created_at;
	private String updated_at;

}
