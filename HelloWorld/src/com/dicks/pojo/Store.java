package com.dicks.pojo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

import com.dicks.engine.Parcel;
import com.dicks.engine.Store.Inventory;

/**
 * Store entity. @author MyEclipse Persistence Tools
 */

@SuppressWarnings("serial")
public class Store implements java.io.Serializable {

	// Fields

	private Integer storeId;
	private String address;
	private String storeName;
	private String zip;
	private String flag;
	private String storeType;
	private Set inventories = new HashSet(0);
	private Set storeCates = new HashSet(0);
	//need to delete
	private HashMap<Product, Inventory> stock;


	// Constructors

	/** default constructor */
	public Store() {
	}

	/** minimal constructor */
	public Store(String address, String storeName, String zip, String flag,
			String storeType) {
		this.address = address;
		this.storeName = storeName;
		this.zip = zip;
		this.flag = flag;
		this.storeType = storeType;
	}

	/** full constructor */
	public Store(String address, String storeName, String zip, String flag,
			String storeType, Set inventories, Set storeCates) {
		this.address = address;
		this.storeName = storeName;
		this.zip = zip;
		this.flag = flag;
		this.storeType = storeType;
		this.inventories = inventories;
		this.storeCates = storeCates;
	}

	// Property accessors

	public Integer getStoreId() {
		return this.storeId;
	}

	public void setStoreId(Integer storeId) {
		this.storeId = storeId;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getStoreName() {
		return this.storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public String getZip() {
		return this.zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getFlag() {
		return this.flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getStoreType() {
		return this.storeType;
	}

	public void setStoreType(String storeType) {
		this.storeType = storeType;
	}

	public Set getInventories() {
		return this.inventories;
	}

	public void setInventories(Set inventories) {
		this.inventories = inventories;
	}

	public Set getStoreCates() {
		return this.storeCates;
	}

	public void setStoreCates(Set storeCates) {
		this.storeCates = storeCates;
	}
	
	//
	public boolean containProductsInOrder(Orders order) {
		Set<Product> products = order.getProductList().keySet();
		int notContainingNum = 0;
		for (Product p : products) {
			if (!this.containProduct(p)) notContainingNum++;
		}
		return notContainingNum < order.getProducts().size();
	}
	
	public boolean containParcel(Parcel parcel) {
		HashMap<Product, Integer> products = parcel.getProducts();
		Set<Product> productSet = products.keySet();
		
		for (Product p : productSet) {
			int qty = products.get(p);
			if (!containNumProduct(p, qty)) {
//				System.out.println("rule out product: " + p + ", qty: " + qty);
				return false;
			}
		}
		
		return true;		
	}
	
	public boolean containProducts(ArrayList<Product> products) {
		for (Product p : products) {
			if (!this.containProduct(p)) {
				System.out.println("rule out product: " + p.getProdName());
				return false;
			}
		}		
		return true;
	}
	
	public boolean containNumProduct(Product product, int num) {
		Inventory in = stock.get(product);
		if (in == null) return false;
		//System.out.println("store: " + this.zoneID + " margin: " + in.getMargin());
		if (in.getMargin() >= num) return true;
		return false;
	}
	
	public boolean containProduct(Product product) {
		//System.out.println("-----------");
		//System.out.println("checking filter1 for store "+this.storeID);
		Inventory in = stock.get(product);
		if (in == null) return false;
		//System.out.println("store: " + this.storeID + " margin: " + in.getMargin());
		if (in.getMargin() > 0) {
			
			//System.out.println("filter1 return true");
			return true;
		}
		else{
			//System.out.println("filter1 return false");
			return false;
		}
	}
	
	
	
	public boolean checkProduct(Product product, String operator , int mar) {
		//System.out.println("-----------");
		//System.out.println("checking filter2 for store "+this.storeID);
		Inventory in = stock.get(product);
		//System.out.println("operator  "+operator+"   "+mar);
		if (operator.equals(">")){
			//System.out.println(">>>>>>>>>>>>"+in.getMargin());
			if (in == null || in.getMargin() <= mar) 
			{
				
				//System.out.println("filter2 return false");
				return false;
			}
			//System.out.println("store: " + this.storeID + " margin: " + in.getMargin());
			if (in.getMargin() > mar) 
				{
				//System.out.println("filter2 return true");
				return true;}
			else{
				//System.out.println("filter2 return false");
			return false;
			}
		}
		else if (operator.equals("<")){
			if (in == null || in.getMargin() >= mar) return false;
			System.out.println("store: " + this.storeId + " margin: " + in.getMargin());
			if (in.getMargin() < mar) return true;
			return false;
			
		}
		else if (operator.equals("=")){
			if (in == null || in.getMargin() != mar) return false;
			System.out.println("store: " + this.storeId + " margin: " + in.getMargin());
			if (in.getMargin() == mar) return true;
			return false;
			
		}
		else{
			return false;
		}
		
	}
	
	public boolean checkStore(Product product, String attribute, String operator , int mar) {
		Inventory in = stock.get(product);
		if (attribute.equalsIgnoreCase("UPS Zone")){
			/*if (operator.equals(">")){
				
				System.out.println("Order Zone: " + order.getZoneID() + "Store Zone: " + this.zoneID);
				if ((order.getZoneID()-this.zoneID) > mar) return true;
				return false;
			}
			else if (operator.equals("<")){
				System.out.println("Order Zone: " + order.getZoneID() + "Store Zone: " + this.zoneID);
				if ((order.getZoneID()-this.zoneID) < mar)  return true;
				return false;
				
			}
			else if (operator.equals("=")){
				System.out.println("Order Zone: " + order.getZoneID() + "Store Zone: " + this.zoneID);
				if ((order.getZoneID()-this.zoneID) == mar)  return true;
				return false;
				
			}
			else{
				return false;
			}*/
			return false;
		}
		else if (attribute.equalsIgnoreCase("margin")){
			
			return this.checkProduct(product, operator, mar);
		}
		
		
		
		else{
			return false;
		}
		
		
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

