package com.dicks.pojo;

import java.io.Serializable;

public class OrderDetail implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int orderID;
	private int productID;
	private int unitPrice;
	private int qty;
	
	public int getOrderID() {
		return orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}

	public int getProductID() {
		return productID;
	}

	public void setProductID(int productID) {
		this.productID = productID;
	}

	public int getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	@Override
	public int hashCode() {
        final int prime = 31;
        int result = 1;
        String str1 = String.valueOf(orderID);
        String str2 = String.valueOf(productID);

        result = prime * result + ((str1 == null) ? 0 : str1.hashCode());
        result = prime * result + ((str2 == null) ? 0 : str2.hashCode());
        return result;
	}
	
	 @Override
	    public boolean equals(Object obj)
	    {
	        if (this == obj)
	            return true;
	        if (obj == null)
	            return false;
	        if (getClass() != obj.getClass())
	            return false;
	        OrderDetail other = (OrderDetail) obj;
	   if (!(productID==other.productID))
	            return false;
	    if (!(orderID==other.orderID))
	            return false;
	        return true;
	    }
	
}
