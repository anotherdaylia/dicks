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

	public void createCategory(StoreCate storeCate) throws Exception{
		super.create(storeCate);
	}
	
	public int getNewId() throws Exception{
		int id1 = getMaxId();
		int id2 = ProdCateDAO.getInstance().getMaxId();
		return Math.max(id1, id2)+1;
	}
	
	
	
	public int getMaxId() throws Exception{
		String sql = "select max(cate_store_id) maxid from store_cate";
		return (Integer)HibernateUtil.getSession().createSQLQuery(sql).uniqueResult();
	}
}
