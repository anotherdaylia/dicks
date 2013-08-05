package com.dicks.pojo;

public class Product {
	private int productID;
	private String productName;
	private String sku;
	private int vendorID;
	private String productDescr;
	private int factoryPrice;
	private double weight;
	private double width;
	private double height;
	private double length;
	private String flag = "TH-A,ST-A,SP-A";;
	
	public Product(){}
	
	public Product(String productName, int factoryPrice) {
		this.productName = productName;
		this.factoryPrice = factoryPrice;
	}
	
	public int getVendorID() {
		return vendorID;
	}
	public void setVendorID(int vendorID) {
		this.vendorID = vendorID;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	public double getWidth() {
		return width;
	}
	public void setWidth(double width) {
		this.width = width;
	}
	public double getHeight() {
		return height;
	}
	public void setHeight(double height) {
		this.height = height;
	}
	public double getLength() {
		return length;
	}
	public void setLength(double length) {
		this.length = length;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public void setProductID(int productID) {
		this.productID = productID;
	}
	public void setFactoryPrice(int factoryPrice) {
		this.factoryPrice = factoryPrice;
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

	public String getProductDescr() {
		return productDescr;
	}
	public void setProductDescr(String productDescr) {
		this.productDescr = productDescr;
	}

	public int getFactoryPrice() {
		return factoryPrice;
	}
	public int getProductID() {
		return productID;
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
