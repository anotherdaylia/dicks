package com.dicks.pojo;

import java.sql.Date;

public class Package {
	private int packageID;
	private int customerID;
	private int orderID;
	private Date shippingDate;
	private long totalAmount;
	private char shippingStatus;
	private String shippingCompany;
	private int shippingDay;
	private double weight;
	public Package(){}
	
	public int getPackageID() {
		return packageID;
	}
	public void setPackageID(int packageID) {
		this.packageID = packageID;
	}
	public int getCustomerID() {
		return customerID;
	}
	public void setCustomerID(int customerID) {
		this.customerID = customerID;
	}
	public int getOrderID() {
		return orderID;
	}
	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}
	public Date getDeliveryDate() {
		return shippingDate;
	}
	public void setDeliveryDate(Date deliveryDate) {
		this.shippingDate = deliveryDate;
	}
	public long getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(long totalAmount) {
		this.totalAmount = totalAmount;
	}
	public char getShippingStatus() {
		return shippingStatus;
	}
	public void setShippingStatus(char shippingStatus) {
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
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	
	
	
	
	
}
