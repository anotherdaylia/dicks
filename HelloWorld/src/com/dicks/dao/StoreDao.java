package com.dicks.dao;

import com.dicks.pojo.Store;

public class StoreDao extends BaseDao<Store> {
	private static StoreDao instance = new StoreDao();
	
	public StoreDao() {
		super(Store.class);
	}
	
	

}
