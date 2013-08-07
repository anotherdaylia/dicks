package com.dicks.dao;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.ProdCate;
import com.dicks.pojo.Product;
import com.dicks.pojo.Rule;
import com.dicks.pojo.StoreCate;

public class ProdCateDAO extends BaseDao<ProdCate>{
	private static ProdCateDAO instance = new ProdCateDAO();
	
	public ProdCateDAO() {
		super(ProdCate.class);
	}
	
	public static ProdCateDAO getInstance (){
		return instance;
	}
	
	
	public Product[] getProductByCategory(String[] categoryNameList) throws Exception{
		List<Product> finalResult = new LinkedList<Product>();
		for(String categoryName : categoryNameList){
			List<Criterion> criterions = new ArrayList<Criterion>();
			Criterion criterion = Restrictions.eq("cateName", categoryName);
			criterions.add(criterion);
			List<ProdCate> result =  super.getList(criterions);
			for(ProdCate pc : result){
				finalResult.add(pc.getProduct());
			}
		}
		System.out.println("WTF");
		Product[] products = (Product[])finalResult.toArray(new Product[finalResult.size()]);
		return products;	
	}
	
	public String[] getSKUByCategory(String[] categoryNameList) throws Exception{
		System.out.println("passing in "+categoryNameList[0]);
		Product[] products = getProductByCategory(categoryNameList);
		System.out.println("product "+products[0].getSku());
		String[] skuArray = new String[products.length];
		for(int i=0;i<products.length;i++){
			skuArray[i] = products[i].getSku();
		}
		return skuArray;
	}
	

	public ProdCate[] getProdCategoryList() throws Exception{
		ArrayList<ProdCate> cateList =  (ArrayList<ProdCate>) super.getList();
		ProdCate[] array = (ProdCate[])cateList.toArray(new ProdCate[cateList.size()]); 
		return array;
	}

	public int getMaxId() throws Exception{
		return super.getMaxId(null);
	}
	
	public void createCategory(ProdCate prodCate) throws Exception{	
		super.create(prodCate);
	}
	
	public int getNewId() throws Exception{
		int id1 = getMaxId();
		int id2 = StoreCateDAO.getInstance().getMaxId();
		return (Math.max(id1, id2)+1);
	}
}
