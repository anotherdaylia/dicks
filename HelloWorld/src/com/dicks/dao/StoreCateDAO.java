package com.dicks.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.Product;
import com.dicks.pojo.StoreCate;

public class StoreCateDAO extends BaseDao<StoreCate> {
	private static StoreCateDAO instance = new StoreCateDAO();
	
	public StoreCateDAO() {
		super(StoreCate.class);
	}
	
	public static StoreCateDAO getInstance (){
		return instance;
	}
	
	public StoreCate[] getStoreCategoryListById(String id) throws Exception{
		List<Criterion> criterions = new ArrayList<Criterion>();
		Criterion criterion = Restrictions.eq("id.cateStoreId", Integer.valueOf(id));
		criterions.add(criterion);
		ArrayList<StoreCate> finalResult = (ArrayList<StoreCate>)super.getList(criterions);
		return (StoreCate[])finalResult.toArray(new StoreCate[finalResult.size()]);
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
	
	public void update(StoreCate[] storeCates) throws Exception{
		String cateId = storeCates[0].getId().getCateStoreId()+"";
		StoreCate[] preview = getStoreCategoryListById(cateId);
		for(StoreCate sc: preview){
			super.delete(sc);
		}
		
		for(StoreCate sc: storeCates){
			createCategory(sc);
		}
	}
}
