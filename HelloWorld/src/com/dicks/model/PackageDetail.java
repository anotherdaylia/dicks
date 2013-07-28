package com.dicks.model;

public class PackageDetail {
	private String packageID;
	private String productID;
	private long unitPrice;
	private int qty;
	
	public PackageDetail(){};
	
	public String getPackageID() {
		return packageID;
	}
	public void setPackageID(String packageID) {
		this.packageID = packageID;
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
        result = prime * result + ((packageID == null) ? 0 : packageID.hashCode());
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
	        PackageDetail other = (PackageDetail) obj;
	        if (productID == null)
	        {
	            if (other.productID != null)
	                return false;
	        }
	        else if (!productID.equals(other.productID))
	            return false;
	        if (packageID == null)
	        {
	            if (other.packageID != null)
	                return false;
	        }
	        else if (!packageID.equals(other.packageID))
	            return false;
	        return true;
	    }
	
	
}
