package com.dicks.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.Product;

public class ProductDAO extends BaseDao<Product> {
	private static ProductDAO instance = new ProductDAO();
	
	public ProductDAO() {
		super(Product.class);
	}
	
	public static ProductDAO getInstance() {
		return instance;
	}
	
	public void createProduct(Product product) throws Exception {
		super.create(product);
	}
	
	public Product getById(Integer id) throws Exception {
		List<Criterion> criterions = new ArrayList<Criterion>();
		Criterion criterion = Restrictions.eq("id", id);
		criterions.add(criterion);
		return super.get(criterions);
	}
	
	public List<Product> getProductsByIds(ArrayList<Integer> ids) throws Exception {
		List<Criterion> criterion = new ArrayList<Criterion>();
		Disjunction disjunctions = Restrictions.disjunction();
		for (int id : ids) {
			disjunctions.add(Restrictions.eq("prod_id", id ));
		}
		criterion.add(disjunctions);
		return super.getList(criterion);
	}
}
