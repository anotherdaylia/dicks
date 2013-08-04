package com.dicks.pojo;

public class Fee {
	private String storeType;
	private String name;
	private long costID;
	private String flag;
	private long percentage;
	private String attribute;
	private long value;
	
	public String getStoreType() {
		return storeType;
	}
	public void setStoreType(String storeType) {
		this.storeType = storeType;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getCostID() {
		return costID;
	}
	public void setCostID(long costID) {
		this.costID = costID;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public long getPercentage() {
		return percentage;
	}
	public void setPercentage(long percentage) {
		this.percentage = percentage;
	}
	public String getAttribute() {
		return attribute;
	}
	public void setAttribute(String attribute) {
		this.attribute = attribute;
	}
	public long getValue() {
		return value;
	}
	public void setValue(long value) {
		this.value = value;
	}
}
