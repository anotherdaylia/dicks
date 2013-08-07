package com.dicks.action;

import com.dicks.dao.ProdCateDAO;
import com.dicks.dao.StoreCateDAO;
import com.dicks.pojo.ProdCate;
import com.dicks.pojo.StoreCate;
import com.opensymphony.xwork2.ActionSupport;

public class CategoryListAction extends ActionSupport {
	private ProdCate[] prodCategoryList;
	private StoreCate[] storeCategoryList;
	private String act;
	

	private static final long serialVersionUID = 1L;
	
	public String displayCategory(){
		if("product".equals(act)){
			try {
				this.setProdCategoryList(ProdCateDAO.getInstance().getProdCategoryList());
			} catch (Exception e) {
				return ERROR;
			}
			return SUCCESS;
		}else if("store".equals(act)){ 
			try {
				this.setStoreCategoryList(StoreCateDAO.getInstance().getStoreCategoryList());
			} catch (Exception e) {
				return ERROR;
			}
			return SUCCESS;
		}
		return SUCCESS;
	}

	public ProdCate[] getProdCategoryList() {
		System.out.println("!!!"+prodCategoryList.length);
		for(ProdCate pc: prodCategoryList){
			System.out.println(pc.getId());
		}
		return prodCategoryList;
	}

	public void setProdCategoryList(ProdCate[] prodCategoryList) {
		this.prodCategoryList = prodCategoryList;
	}

	public String getAct() {
		return act;
	}

	public void setAct(String act) {
		this.act = act;
	}

	public StoreCate[] getStoreCategoryList() {
		return storeCategoryList;
	}

	public void setStoreCategoryList(StoreCate[] storeCategoryList) {
		this.storeCategoryList = storeCategoryList;
	}
}
