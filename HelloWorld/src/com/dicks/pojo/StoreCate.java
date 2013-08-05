package com.dicks.pojo;

/**
 * StoreCate entity. @author MyEclipse Persistence Tools
 */

public class StoreCate implements java.io.Serializable {

	// Fields

	private StoreCateId id;
	private Store store;
	private String cateName;
	private String cateDescr;

	// Constructors

	/** default constructor */
	public StoreCate() {
	}

	/** full constructor */
	public StoreCate(StoreCateId id, Store store, String cateName,
			String cateDescr) {
		this.id = id;
		this.store = store;
		this.cateName = cateName;
		this.cateDescr = cateDescr;
	}

	// Property accessors

	public StoreCateId getId() {
		return this.id;
	}

	public void setId(StoreCateId id) {
		this.id = id;
	}

	public Store getStore() {
		return this.store;
	}

	public void setStore(Store store) {
		this.store = store;
	}

	public String getCateName() {
		return this.cateName;
	}

	public void setCateName(String cateName) {
		this.cateName = cateName;
	}

	public String getCateDescr() {
		return this.cateDescr;
	}

	public void setCateDescr(String cateDescr) {
		this.cateDescr = cateDescr;
	}

}