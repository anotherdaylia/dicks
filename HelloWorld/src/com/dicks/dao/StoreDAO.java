package com.dicks.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.Product;
import com.dicks.pojo.Store;

public class StoreDAO extends BaseDao<Store> {
	private static StoreDAO instance = new StoreDAO();

	public static StoreDAO getInstance() {
		return instance;
	}

	public static void setInstance(StoreDAO instance) {
		StoreDAO.instance = instance;
	}

	public StoreDAO() {
		super(Store.class);
	}
	
	public void createStore(Store store) throws Exception {
		super.create(store);
	}

	public Store getById(int id) throws Exception {
		List<Criterion> criterions = new ArrayList<Criterion>();
		Criterion criterion = Restrictions.eq("storeId", id);
		criterions.add(criterion);
		return super.get(criterions);
	}
	
}
