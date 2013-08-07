package com.dicks.action;

import com.dicks.dao.ProdCateDAO;
import com.dicks.dao.ProductDAO;
import com.dicks.dao.StoreCateDAO;
import com.dicks.pojo.ProdCateId;
import com.dicks.pojo.StoreCate;
import com.dicks.pojo.StoreCateId;
import com.opensymphony.xwork2.ActionSupport;

public class CreateCategoryAction extends ActionSupport {
	private String categoryName;
	private String categoryDes;
	private String storeType;
	private String regionTag;
	private String storeState;
	private String storeId;
	private String productType;
	private String brand;
	private String productSKU;
	private String flag;

	private static final long serialVersionUID = 1L;
	
	public String createProductCategory(){
		if("store".equals(flag)){
			String[] ids = storeId.split(",");
			int cateId = StoreCateDAO.getInstance().getNewId();
			for(String id:ids){
				StoreCateId storeCateId = new StoreCateId(Integer.valueOf(cateId), Integer.valueOf(id)) ;
				StoreCate storeCate = new StoreCate(storeCateId, null, categoryName, categoryDes);
				StoreCateDAO.getInstance().createCategory(storeCate);
			}
		}else if("product".equals(flag)){
			String[] skus = productSKU.split(",");
			int cateId = ProdCateDAO.getInstance().getNewId();
			int[] ids = ProductDAO.getInstance().getProductIdsBySKUList(skus);
			for(int id:ids){
				ProdCateId pcId = new ProdCateId(cateId, id);
				
			}
			
			ProdCateDAO.getInstance().createCategory(prodCate);
		}
		return SUCCESS;
	}
	
	public String createStoreCategory(){
		
		
		return SUCCESS;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getCategoryDes() {
		return categoryDes;
	}

	public void setCategoryDes(String categoryDes) {
		this.categoryDes = categoryDes;
	}

	public String getStoreType() {
		return storeType;
	}

	public void setStoreType(String storeType) {
		this.storeType = storeType;
	}

	public String getRegionTag() {
		return regionTag;
	}

	public void setRegionTag(String regionTag) {
		this.regionTag = regionTag;
	}

	public String getStoreState() {
		return storeState;
	}

	public void setStoreState(String storeState) {
		this.storeState = storeState;
	}

	public String getStoreId() {
		return storeId;
	}

	public void setStoreId(String storeId) {
		this.storeId = storeId;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getProductSKU() {
		return productSKU;
	}

	public void setProductSKU(String productSKU) {
		this.productSKU = productSKU;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}
}
