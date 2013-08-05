package com.dicks.dao;

import com.dicks.pojo.Store;

public class StoreDAO extends BaseDao<Store> {
	private static StoreDAO instance = new StoreDAO();
	
	public StoreDAO() {
		super(Store.class);
	}
	
	

}
