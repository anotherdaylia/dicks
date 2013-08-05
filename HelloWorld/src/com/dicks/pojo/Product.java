package com.dicks.pojo;

import java.util.HashSet;
import java.util.Set;

/**
 * Product entity. @author MyEclipse Persistence Tools
 */

public class Product implements java.io.Serializable {

	// Fields

	private Integer prodId;
	private Vendor vendor;
	private String prodName;
	private String sku;
	private String prodDescr;
	private Integer factoryPrice;
	private Integer weight;
	private String flag;
	private Double length;
	private Double width;
	private Double height;
	private Set orderDetails = new HashSet(0);
	private Set inventories = new HashSet(0);
	private Set packageDetails = new HashSet(0);
	private Set prodCates = new HashSet(0);

	// Constructors

	/** default constructor */
	public Product() {
	}

	/** minimal constructor */
	public Product(Vendor vendor, String prodName, String sku,
			String prodDescr, Integer factoryPrice, Integer weight, String flag) {
		this.vendor = vendor;
		this.prodName = prodName;
		this.sku = sku;
		this.prodDescr = prodDescr;
		this.factoryPrice = factoryPrice;
		this.weight = weight;
		this.flag = flag;
	}

	/** full constructor */
	public Product(Vendor vendor, String prodName, String sku,
			String prodDescr, Integer factoryPrice, Integer weight,
			String flag, Double length, Double width, Double height,
			Set orderDetails, Set inventories, Set packageDetails, Set prodCates) {
		this.vendor = vendor;
		this.prodName = prodName;
		this.sku = sku;
		this.prodDescr = prodDescr;
		this.factoryPrice = factoryPrice;
		this.weight = weight;
		this.flag = flag;
		this.length = length;
		this.width = width;
		this.height = height;
		this.orderDetails = orderDetails;
		this.inventories = inventories;
		this.packageDetails = packageDetails;
		this.prodCates = prodCates;
	}

	// Property accessors

	public Integer getProdId() {
		return this.prodId;
	}

	public void setProdId(Integer prodId) {
		this.prodId = prodId;
	}

	public Vendor getVendor() {
		return this.vendor;
	}

	public void setVendor(Vendor vendor) {
		this.vendor = vendor;
	}

	public String getProdName() {
		return this.prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public String getSku() {
		return this.sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getProdDescr() {
		return this.prodDescr;
	}

	public void setProdDescr(String prodDescr) {
		this.prodDescr = prodDescr;
	}

	public Integer getFactoryPrice() {
		return this.factoryPrice;
	}

	public void setFactoryPrice(Integer factoryPrice) {
		this.factoryPrice = factoryPrice;
	}

	public Integer getWeight() {
		return this.weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public String getFlag() {
		return this.flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public Double getLength() {
		return this.length;
	}

	public void setLength(Double length) {
		this.length = length;
	}

	public Double getWidth() {
		return this.width;
	}

	public void setWidth(Double width) {
		this.width = width;
	}

	public Double getHeight() {
		return this.height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Set getOrderDetails() {
		return this.orderDetails;
	}

	public void setOrderDetails(Set orderDetails) {
		this.orderDetails = orderDetails;
	}

	public Set getInventories() {
		return this.inventories;
	}

	public void setInventories(Set inventories) {
		this.inventories = inventories;
	}

	public Set getPackageDetails() {
		return this.packageDetails;
	}

	public void setPackageDetails(Set packageDetails) {
		this.packageDetails = packageDetails;
	}

	public Set getProdCates() {
		return this.prodCates;
	}

	public void setProdCates(Set prodCates) {
		this.prodCates = prodCates;
	}

}
>>>>>>> branch 'master' of https://github.com/claire921/dicks.git
