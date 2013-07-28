package com.dicks.model;

public class Product {
	private String productID;
	private String productName;
	private String sku;
	private String vendorID;
	private String productDescr;
	private String ruleID;
	private long factoryPrice;
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
	
}
