package com.dicks.pojo;

import java.io.Serializable;

public class StoreCategory implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int storeCategoryID;
	private int storeID;
	private String CategoryName;
	private String CategoryDescr;
	public int getStoreCategoryID() {
		return storeCategoryID;
	}
	public void setStoreCategoryID(int prodCategoryID) {
		this.storeCategoryID = prodCategoryID;
	}
	public int getStoreID() {
		return storeID;
	}
	public void setStoreID(int prodID) {
		this.storeID = prodID;
	}
	public String getCategoryName() {
		return CategoryName;
	}
	public void setCategoryName(String categoryName) {
		CategoryName = categoryName;
	}
	public String getCategoryDescr() {
		return CategoryDescr;
	}
	public void setCategoryDescr(String categoryDescr) {
		CategoryDescr = categoryDescr;
	}
	
	@Override
	public int hashCode() {
        final int prime = 31;
        int result = 1;
        String str1 = String.valueOf(storeCategoryID);
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
	        StoreCategory other = (StoreCategory) obj;
	      if (!(storeCategoryID==other.storeCategoryID))
	            return false;
	     if (!(storeID==other.storeID))
	            return false;
	        return true;
	    }
	
	
	

}
