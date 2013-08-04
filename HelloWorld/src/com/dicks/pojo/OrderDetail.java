package com.dicks.pojo;

public class OrderDetail {
	private String orderID;
	private String productID;
	private long unitPrice;
	private long discountPrice;
	private int qty;
	public String getOrderID() {
		return orderID;
	}
	public void setOrderID(String orderID) {
		this.orderID = orderID;
	}
	public String getProductID() {
		return productID;
	}
	public void setProductID(String productID) {
		this.productID = productID;
	}
	public long getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(long unitPrice) {
		this.unitPrice = unitPrice;
	}
	public long getDiscountPrice() {
		return discountPrice;
	}
	public void setDiscountPrice(long discountPrice) {
		this.discountPrice = discountPrice;
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
        result = prime * result + ((productID == null) ? 0 : productID.hashCode());
        result = prime * result + ((orderID == null) ? 0 : orderID.hashCode());
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
	        if (productID == null)
	        {
	            if (other.productID != null)
	                return false;
	        }
	        else if (!productID.equals(other.productID))
	            return false;
	        if (orderID == null)
	        {
	            if (other.orderID != null)
	                return false;
	        }
	        else if (!orderID.equals(other.orderID))
	            return false;
	        return true;
	    }
	
}
