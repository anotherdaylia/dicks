package com.dicks.action;

public class CreateNewCategory {
	private String categorydes;
	private String storetype;
	private String categoryname;
	private String storestate;
	private String storeid;
	private String productype;
	private String productsku;
	private String brand;
	
	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getCategorydes() {
		return categorydes;
	}

	public void setCategorydes(String categorydes) {
		this.categorydes = categorydes;
	}
	
	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}

	public String getStorestate() {
		return storestate;
	}

	public void setStorestate(String storestate) {
		this.storestate = storestate;
	}

	public String getStoreid() {
		return storeid;
	}

	public void setStoreid(String storeid) {
		this.storeid = storeid;
	}

	public String getProductype() {
		return productype;
	}

	public void setProductype(String productype) {
		this.productype = productype;
	}

	public String getProductsku() {
		return productsku;
	}

	public void setProductsku(String productsku) {
		this.productsku = productsku;
	}

	public String getStoretype() {
		return storetype;
	}

	public void setStoretype(String storetype) {
		this.storetype = storetype;
	}


	public String submitNewCate(){
		System.out.println(categorydes);
		System.out.println(storetype);
		System.out.println(categoryname);
		System.out.println(storestate);
		System.out.println(storeid);
		System.out.println(productype);
		System.out.println(productsku);
		return "submitnewcate";
	}
}
