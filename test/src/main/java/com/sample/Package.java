package com.sample;

import java.util.ArrayList;
import java.util.Arrays;

public class Package {
	private ArrayList<Product> products = new ArrayList<Product>();
	private int splitNum;
	private Order order;
	private boolean forRemain;
	private boolean allocated;
	
	public Package(Order order) {
		this.order = order;
	}
	
	public boolean isAllocated() {
		return allocated;
	}

	public void setAllocated(boolean allocated) {
		this.allocated = allocated;
	}
	
	public boolean isForRemain() {
		return forRemain;
	}

	public void setForRemain(boolean forRemain) {
		this.forRemain = forRemain;
	}
	
	public void addProduct(Product p) {
		products.add(p);
	}
	
	public boolean isSplitable() {
		return splitNum < products.size();
	}
	
	public boolean isSeperable() {
		return products.size() > 1;
	}
	
	public int getSplitNum() {
		return splitNum;
	}

	public void setSplitNum(int splitNum) {
		this.splitNum = splitNum;
	}
	
//	public void addProduct(Product product) {
//		Integer qty = products.get(product);
//		if (qty == null) {
//			products.put(product, 1);
//		} else {
//			products.put(product, qty + 1);
//		}
//	}
	
	public ArrayList<Product> getProducts() {
		return products;
	}

	public void setProducts(ArrayList<Product> products) {
		this.products = products;
	}
	
//	public int getPackageID() {
//		return packageID;
//	}
//
//	public void setPackageID(int packageID) {
//		this.packageID = packageID;
//	}

	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	
	@Override
	public String toString() {
		return Arrays.toString(products.toArray());
	}
}
