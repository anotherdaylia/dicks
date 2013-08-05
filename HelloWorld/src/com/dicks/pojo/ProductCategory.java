package com.dicks.pojo;

import java.io.Serializable;

public class ProductCategory implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int prodCategoryID;
	private int prodID;
	private String CategoryName;
	private String CategoryDescr;
	public int getProdCategoryID() {
		return prodCategoryID;
	}
	public void setProdCategoryID(int prodCategoryID) {
		this.prodCategoryID = prodCategoryID;
	}
	public int getProdID() {
		return prodID;
	}
	public void setProdID(int prodID) {
		this.prodID = prodID;
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
        String str1 = String.valueOf(prodCategoryID);
        String str2 = String.valueOf(prodID);
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
	        ProductCategory other = (ProductCategory) obj;
	      if (!(prodCategoryID==other.prodCategoryID))
	            return false;
	     if (!(prodID==other.prodID))
	            return false;
	        return true;
	    }
	
	
	

}
