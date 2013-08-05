package com.dicks.pojo;

import java.util.HashSet;
import java.util.Set;

/**
 * Store entity. @author MyEclipse Persistence Tools
 */

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

}