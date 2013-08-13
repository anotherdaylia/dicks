package com.dicks.engine;

import java.util.ArrayList;
import java.util.HashMap;

import com.dicks.pojo.Product;

public class Parcel {
	private HashMap<Product, Integer> products = new HashMap<Product, Integer>();
	private PackageE pack;	
	private int weight;
	private double length;
	private double width;
	private double height;
	private boolean overSize;
	private boolean overWeight;
	
	public Parcel(PackageE pack) {
		this.setPack(pack);
	}
	
	public void shipmentPreparation() {
		int totalWeight = 0;
		
		
		
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
	
	public void addNumProduct(Product p, int num) {
		Integer qty = products.get(p);
		if (qty == null) {
			products.put(p, num);
		} else {
			products.put(p, qty + num);
		}
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
	
	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public Double getLength() {
		return length;
	}

	public void setLength(Double length) {
		this.length = length;
	}

	public Double getWidth() {
		return width;
	}

	public void setWidth(Double width) {
		this.width = width;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public boolean isOverSize() {
		return overSize;
	}

	public void setOverSize(boolean overSize) {
		this.overSize = overSize;
	}

	public boolean isOverWeight() {
		return overWeight;
	}

	public void setOverWeight(boolean overWeight) {
		this.overWeight = overWeight;
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
