package com.dicks.pojo;

public class Store {
	private int storeID;
	private String address;
	private String storeName;
	private String zip;
	private String flag;
	private String storeType;
	
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public String getStoreType() {
		return storeType;
	}
	public void setStoreType(String store_type) {
		this.storeType = store_type;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public int getStoreID() {
		return storeID;
	}
	public void setStoreID(int storeID) {
		this.storeID = storeID;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getStoreName() {
		return storeName;
	}
	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}	
	
}
