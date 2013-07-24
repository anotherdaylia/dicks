package com.dicks.engine;

import java.util.HashMap;

public class PackageTest {
//	private int packageTestID;
	private HashMap<Product, Integer> products = new HashMap<Product, Integer>();
	private int deliveryDays;
//	private String source;
	private Package p;
	
	public PackageTest(Package p) {
		this.p = p;
	}
	
//	public int getPackageTestID() {
//		return packageTestID;
//	}
//	public void setPackageTestID(int packageTestID) {
//		this.packageTestID = packageTestID;
//	}
	
	public void addProduct(Product p) {
		Integer qty = products.get(p);
		if (qty == null) {
			products.put(p, qty);
		} else {
			products.put(p, qty + 1);
		}
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
//	public String getSource() {
//		return source;
//	}
//	public void setSource(String source) {
//		this.source = source;
//	}
	public Package getP() {
		return p;
	}
	public void setP(Package p) {
		this.p = p;
	}
}
