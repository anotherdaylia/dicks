package com.dicks.pojo;

public class Product {
	private String productID;
	private String productName;
	private String sku;
	private String vendorID;
	private String productDescr;
	private String ruleID;
	private long factoryPrice;
	
	public Product(String productID, String productName, long factoryPrice) {
		this.productID = productID;
		this.productName = productName;
		this.factoryPrice = factoryPrice;
	}
	
	public String getProductID() {
		return productID;
	}
	public void setProductID(String productID) {
		this.productID = productID;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getVenderID() {
		return vendorID;
	}
	public void setVenderID(String venderID) {
		this.vendorID = venderID;
	}
	public String getProductDescr() {
		return productDescr;
	}
	public void setProductDescr(String productDescr) {
		this.productDescr = productDescr;
	}
	public String getRuleID() {
		return ruleID;
	}
	public void setRuleID(String ruleID) {
		this.ruleID = ruleID;
	}
	public long getFactoryPrice() {
		return factoryPrice;
	}
	public void setFactoryPrice(long factoryPrice) {
		this.factoryPrice = factoryPrice;
	}
	
	@Override
	public String toString() {
		return productName;
	}

	@Override
	public boolean equals(Object obj) {
		if (!(obj instanceof Product)) return false;
		Product p = (Product) obj;
		return p.productID == this.productID;
	}
	
}
