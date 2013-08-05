package com.dicks.pojo;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Orders entity. @author MyEclipse Persistence Tools
 */

public class Orders implements java.io.Serializable {

	// Fields

	private Integer orderId;
	private Customer customer;
	private Integer totAmt;
	private String orderStatus;
	private Timestamp orderDate;
	private String shippingAddr;
	private String shippingZip;
	private String telNo;
	private String custName;
	private Set packageses = new HashSet(0);
	private Set orderDetails = new HashSet(0);

	// Constructors

	/** default constructor */
	public Orders() {
	}

	/** minimal constructor */
	public Orders(Customer customer, Integer totAmt, String orderStatus,
			Timestamp orderDate, String shippingAddr, String shippingZip,
			String telNo, String custName) {
		this.customer = customer;
		this.totAmt = totAmt;
		this.orderStatus = orderStatus;
		this.orderDate = orderDate;
		this.shippingAddr = shippingAddr;
		this.shippingZip = shippingZip;
		this.telNo = telNo;
		this.custName = custName;
	}

	/** full constructor */
	public Orders(Customer customer, Integer totAmt, String orderStatus,
			Timestamp orderDate, String shippingAddr, String shippingZip,
			String telNo, String custName, Set packageses, Set orderDetails) {
		this.customer = customer;
		this.totAmt = totAmt;
		this.orderStatus = orderStatus;
		this.orderDate = orderDate;
		this.shippingAddr = shippingAddr;
		this.shippingZip = shippingZip;
		this.telNo = telNo;
		this.custName = custName;
		this.packageses = packageses;
		this.orderDetails = orderDetails;
	}

	// Property accessors

	public Integer getOrderId() {
		return this.orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public Customer getCustomer() {
		return this.customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Integer getTotAmt() {
		return this.totAmt;
	}

	public void setTotAmt(Integer totAmt) {
		this.totAmt = totAmt;
	}

	public String getOrderStatus() {
		return this.orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public Timestamp getOrderDate() {
		return this.orderDate;
	}

	public void setOrderDate(Timestamp orderDate) {
		this.orderDate = orderDate;
	}

	public String getShippingAddr() {
		return this.shippingAddr;
	}

	public void setShippingAddr(String shippingAddr) {
		this.shippingAddr = shippingAddr;
	}

	public String getShippingZip() {
		return this.shippingZip;
	}

	public void setShippingZip(String shippingZip) {
		this.shippingZip = shippingZip;
	}

	public String getTelNo() {
		return this.telNo;
	}

	public void setTelNo(String telNo) {
		this.telNo = telNo;
	}

	public String getCustName() {
		return this.custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public Set getPackageses() {
		return this.packageses;
	}

	public void setPackageses(Set packageses) {
		this.packageses = packageses;
	}

	public Set getOrderDetails() {
		return this.orderDetails;
	}

	public void setOrderDetails(Set orderDetails) {
		this.orderDetails = orderDetails;
	}

}