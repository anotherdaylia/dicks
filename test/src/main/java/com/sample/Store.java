package src.main.java.com.sample;

import java.util.HashMap;

public class Store {
	private String storeID;
	private String location;
	private HashMap<Product, Inventory> stock;
	private int zoneID;
	
	public Store(int zoneID) {
		this.zoneID = zoneID;
		stock = new HashMap<Product, Inventory>();
	}
	
	public void addItem(Product product, int instockNum, int safetyStock){
		stock.put(product, new Inventory(instockNum, safetyStock));
	}
	
	public void sellItem(Product product, int quantity) {
		stock.get(product).instockNum--;
	}
	
	public boolean containProduct(Product product) {
		Inventory in = stock.get(product);
		if (in == null) return false;
		if (in.getMargin() > 0) return true;
		return false;
	}
	
	public String getStoreID() {
		return storeID;
	}
	public void setStoreID(String storeID) {
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
}
