package com.dicks.pojo;

/**
 * ProdCate entity. @author MyEclipse Persistence Tools
 */

public class ProdCate implements java.io.Serializable {

	// Fields

	private ProdCateId id;
	private Product product;
	private String cateName;
	private String cateDescr;

	// Constructors

	/** default constructor */
	public ProdCate() {
	}

	/** minimal constructor */
	public ProdCate(ProdCateId id, Product product, String cateName) {
		this.id = id;
		this.product = product;
		this.cateName = cateName;
	}

	/** full constructor */
	public ProdCate(ProdCateId id, Product product, String cateName,
			String cateDescr) {
		this.id = id;
		this.product = product;
		this.cateName = cateName;
		this.cateDescr = cateDescr;
	}

	// Property accessors

	public ProdCateId getId() {
		return this.id;
	}

	public void setId(ProdCateId id) {
		this.id = id;
	}

	public Product getProduct() {
		return this.product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public String getCateName() {
		return this.cateName;
	}

	public void setCateName(String cateName) {
		this.cateName = cateName;
	}

	public String getCateDescr() {
		return this.cateDescr;
	}

	public void setCateDescr(String cateDescr) {
		this.cateDescr = cateDescr;
	}

}