package com.dicks.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.Product;

public class ProductDao extends BaseDao<Product> {
	private static ProductDao instance = new ProductDao();
	
	public ProductDao() {
		super(Product.class);
	}
	
	public static ProductDao getInstance() {
		return instance;
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
