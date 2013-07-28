package com.dicks.model;

import java.sql.Date;

public class Inventory {
	private String productID;
	private String storeID;
	private long retailPrice;
	private long storage;
	private Date saftyStock;
	
	public Inventory(){
		
	}
	
	public String getProductID() {
		return productID;
	}
	public void setProductID(String productID) {
		this.productID = productID;
	}
	public String getStoreID() {
		return storeID;
	}
	public void setStoreID(String storeID) {
		this.storeID = storeID;
	}
	public long getPrice() {
		return retailPrice;
	}
	public void setPrice(long price) {
		this.retailPrice = price;
	}
	public long getStorage() {
		return storage;
	}
	public void setStorage(long storage) {
		this.storage = storage;
	}
	public Date getSaftyStock() {
		return saftyStock;
	}
	public void setSaftyStock(Date saftyStock) {
		this.saftyStock = saftyStock;
	}
	
	@Override
	public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((productID == null) ? 0 : productID.hashCode());
        result = prime * result + ((storeID == null) ? 0 : storeID.hashCode());
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
	        Inventory other = (Inventory) obj;
	        if (productID == null)
	        {
	            if (other.productID != null)
	                return false;
	        }
	        else if (!productID.equals(other.productID))
	            return false;
	        if (storeID == null)
	        {
	            if (other.storeID != null)
	                return false;
	        }
	        else if (!storeID.equals(other.storeID))
	            return false;
	        return true;
	    }
	
}
