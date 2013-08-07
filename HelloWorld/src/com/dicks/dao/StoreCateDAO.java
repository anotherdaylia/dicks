package com.dicks.dao;

import java.util.ArrayList;

import com.dicks.pojo.StoreCate;

public class StoreCateDAO extends BaseDao<StoreCate> {
	private static StoreCateDAO instance = new StoreCateDAO();
	
	public StoreCateDAO() {
		super(StoreCate.class);
	}
	
	public static StoreCateDAO getInstance (){
		return instance;
	}

	public StoreCate[] getStoreCategoryList() throws Exception{
		ArrayList<StoreCate> cateList =  (ArrayList<StoreCate>) super.getList();
		StoreCate[] array = (StoreCate[])cateList.toArray(new StoreCate[cateList.size()]); 
		return array;
	}

}
