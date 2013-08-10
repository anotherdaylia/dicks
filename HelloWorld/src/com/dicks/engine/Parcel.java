package com.dicks.engine;

import java.util.ArrayList;
import java.util.HashMap;

import com.dicks.pojo.Product;

public class Parcel {
	private HashMap<Product, Integer> products = new HashMap<Product, Integer>();
	private PackageE pack;	
	
	public Parcel(PackageE pack) {
		this.setPack(pack);
	}
	
	public void addProduct(Product p) {
		Integer qty = products.get(p);
		if (qty == null) {
			products.put(p, 1);
		} else {
			products.put(p, qty + 1);
		}
	}
	
	public int getProductQty(Product product) {
		Integer qty = products.get(product);
		
		if (qty == null) return 0;
		
		return products.get(product);
	}
	
	public HashMap<Product, Integer> getProducts() {
		return products;
	}
	public void setProducts(HashMap<Product, Integer> products) {
		this.products = products;
	}
	
	public ArrayList<Product> getProductList() {
		ArrayList<Product> list =  new ArrayList<Product>();
		list.addAll(products.keySet());
		return list;
	}
	
	@Override
		public String toString() {
			StringBuilder sb = new StringBuilder();
			sb.append("Parcel: [");
			for (Product p : this.products.keySet()) {
				sb.append(p.getProdName());
				sb.append(" (");
				sb.append(this.products.get(p));
				sb.append(") ");
			}
			sb.append("]");
			
			return sb.toString();
		}

	public PackageE getPack() {
		return pack;
	}

	public void setPack(PackageE pack) {
		this.pack = pack;
	}
}
