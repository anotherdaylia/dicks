package com.dicks.engine;

import java.util.ArrayList;
import java.util.HashMap;

public class Store {
	private int storeID;
	private String location;
	private HashMap<Product, Inventory> stock;
	private int zoneID;
	
	public Store(int storeID, int zoneID) {
		this.storeID = storeID;
		this.zoneID = zoneID;
		stock = new HashMap<Product, Inventory>();
	}
	
	public void addItem(Product product, int instockNum, int safetyStock){
		stock.put(product, new Inventory(instockNum, safetyStock));
	}
	
	public void sellItem(Product product, int quantity) {
		stock.get(product).instockNum--;
	}
	
	public boolean containProducts(ArrayList<Product> products) {
		for (Product p : products) {
			if (!this.containProduct(p)) {
				System.out.println("rule out product: " + p.getProductName());
				return false;
			}
		}		
		return true;
	}
	
	public boolean containProduct(Product product) {
		Inventory in = stock.get(product);
		if (in == null) return false;
		System.out.println("store: " + this.zoneID + " margin: " + in.getMargin());
		if (in.getMargin() > 0) return true;
		return false;
	}
	
	public int getStoreID() {
		return storeID;
	}
	public void setStoreID(int storeID) {
		this.storeID = storeID;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	public int getZoneID() {
		return zoneID;
	}
	public void setZoneID(int zoneID) {
		this.zoneID = zoneID;
	}
	
	public static class Inventory {
		private int instockNum;
		private int safetyStock;
		
		public Inventory(int instockNum, int safetyStock) {
			this.instockNum = instockNum;
			this.safetyStock = safetyStock;
		}
		
		public int getMargin() {
			if (instockNum <= safetyStock) return 0;
			return instockNum - safetyStock;
		}
		
		public int getInstockNum() {
			return instockNum;
		}
		public void setInstockNum(int instockNum) {
			this.instockNum = instockNum;
		}
		public int getSafetyStock() {
			return safetyStock;
		}
		public void setSafetyStock(int safetyStock) {
			this.safetyStock = safetyStock;
		}		
	}
	
	@Override
	public String toString() {
		return "store zoneID: " + this.getZoneID();
	}
}
