package com.sample;

import java.util.HashMap;

public class Package {
	private int packageID;
	private HashMap<Product, Integer> products = new HashMap<Product, Integer>();
	private int deliveryDays;
	private String shippingStatus;
	private String shippingCompany;
	private String source;

	private Order order;
	
	public Package(int packageID, Order order) {
		this.packageID = packageID;
		this.order = order;
	}
	
	public void addProduct(Product product) {
		Integer qty = products.get(product);
		if (qty == null) {
			products.put(product, 1);
		} else {
			products.put(product, qty + 1);
		}
	}
	
	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}
	
	public int getPackageID() {
		return packageID;
	}

	public void setPackageID(int packageID) {
		this.packageID = packageID;
	}
	
	public HashMap<Product, Integer> getProducts() {
		return products;
	}
	public void setProducts(HashMap<Product, Integer> products) {
		this.products = products;
	}
	public int getDeliveryDays() {
		return deliveryDays;
	}
	public void setDeliveryDays(int deliveryDays) {
		this.deliveryDays = deliveryDays;
	}
	public String getShippingStatus() {
		return shippingStatus;
	}
	public void setShippingStatus(String shippingStatus) {
		this.shippingStatus = shippingStatus;
	}
	public String getShippingCompany() {
		return shippingCompany;
	}
	public void setShippingCompany(String shippingCompany) {
		this.shippingCompany = shippingCompany;
	}
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
}
