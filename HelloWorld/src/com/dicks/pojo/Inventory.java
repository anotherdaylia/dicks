package com.dicks.pojo;

import java.io.Serializable;
import java.sql.Date;

public class Inventory implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int productID;
	private int storeID;
	private int retailPrice;
	private int storage;
	private int saftyStock;
	
	public Inventory(){
		
	}
	
	public int getProductID() {
		return productID;
	}


	public void setProductID(int productID) {
		this.productID = productID;
	}


	public int getStoreID() {
		return storeID;
	}


	public void setStoreID(int storeID) {
		this.storeID = storeID;
	}


	public int getRetailPrice() {
		return retailPrice;
	}


	public void setRetailPrice(int retailPrice) {
		this.retailPrice = retailPrice;
	}


	public int getStorage() {
		return storage;
	}


	public void setStorage(int storage) {
		this.storage = storage;
	}


	public int getSaftyStock() {
		return saftyStock;
	}


	public void setSaftyStock(int i) {
		this.saftyStock = i;
	}


	@Override
	public int hashCode() {
        final int prime = 31;
        int result = 1;
        String str1 = String.valueOf(productID);
        String str2 = String.valueOf(storeID);
        
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
	        Inventory other = (Inventory) obj;
	        if (productID == 0)
	        {
	            if (other.productID != 0)
	                return false;
	        }
	        else if (!(productID==other.productID))
	            return false;
	        if (storeID == 0)
	        {
	            if (other.storeID != 0)
	                return false;
	        }
	        else if (!(storeID==other.storeID))
	            return false;
	        return true;
	    }
	
}
