package com.dicks.pojo;

import java.sql.Date;

public class Package {
	private String packageID;
	private String customerID;
	private String orderID;
	private Date deliveryDate;
	private long totalAmount;
	private String shippingStatus;
	private String shippingCompany;
	private int shippingDay;
	private float weight;
	public String getPackageID() {
		return packageID;
	}
	public void setPackageID(String packageID) {
		this.packageID = packageID;
	}
	public String getCustomerID() {
		return customerID;
	}
	public void setCustomerID(String customerID) {
		this.customerID = customerID;
	}
	public String getOrderID() {
		return orderID;
	}
	public void setOrderID(String orderID) {
		this.orderID = orderID;
	}
	public Date getDeliv_date() {
		return deliveryDate;
	}
	public void setDeliv_date(Date deliv_date) {
		this.deliveryDate = deliv_date;
	}
	public long getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(long totalAmount) {
		this.totalAmount = totalAmount;
	}
	public String getShippingStatus() {
		return shippingStatus;
	}
	public void setShippingStatus(String shippingStatus) {
		this.shippingStatus = shippingStatus;
	}
	public String getShippingCompany() {
		return shippingCompany;
	}
	public void setShippingCompany(String shippingCompany) {
		this.shippingCompany = shippingCompany;
	}
	public int getShippingDay() {
		return shippingDay;
	}
	public void setShippingDay(int shippingDay) {
		this.shippingDay = shippingDay;
	}
	public float getWeight() {
		return weight;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	
	
	
}
