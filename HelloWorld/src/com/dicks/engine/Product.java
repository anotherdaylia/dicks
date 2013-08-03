package com.dicks.engine;

public class Product {
	private VendorInfo vendorInfo;
	private String productName;
	private double price;
	private double weight;
	private int size;
	private int productID;
	private String special;
	
	public Product (int productID, String productName, double price, double weight, int size) {
		this.productID = productID;
		this.productName = productName;
		this.price = price;
		this.weight = weight;
		this.size = size;
	}
	
	public String getSpecial(){
		return special;
	}
	public void setSpecial(String special){
		this.special = special;
	}
	
	public int getProductID() {
		return productID;
	}

	public void setProductID(int productID) {
		this.productID = productID;
	}
	
	public VendorInfo getVendorInfo() {
		return vendorInfo;
	}
	public void setVendorInfo(VendorInfo vendorInfo) {
		this.vendorInfo = vendorInfo;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public void minPackage(){
		
		System.out.println(productName+" has been splited to another package");
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