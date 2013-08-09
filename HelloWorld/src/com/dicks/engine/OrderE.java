package com.dicks.engine;

import java.util.HashMap;

public class OrderE {
	private HashMap<Integer, Integer> products = new HashMap<Integer, Integer>();
	
	
	
	public int getProductQty(int productId) {
		Integer qty = products.get(productId);
		if (qty == null) return 0;
		return qty;
	}
	
	public void addProduct(int productId, int qty) {
		Integer quantity = products.get(productId);
		if (quantity == null) {
			products.put(productId, qty);
		} else {
			products.put(productId, quantity + qty);
		}
	}
	
	public HashMap<Integer, Integer> getProducts() {
		return products;
	}

	public void setProducts(HashMap<Integer, Integer> products) {
		this.products = products;
	}	
	
}
