package com.dicks.dao;

import com.dicks.pojo.Inventory;

public class InventoryDao extends BaseDao<Inventory> {
	private static InventoryDao instance = new InventoryDao();

	public static InventoryDao getInstance() {
		return instance;
	}

	public static void setInstance(InventoryDao instance) {
		InventoryDao.instance = instance;
	}

	public InventoryDao() {
		super(Inventory.class);
	}


}