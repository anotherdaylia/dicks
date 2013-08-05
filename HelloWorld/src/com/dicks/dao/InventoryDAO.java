package com.dicks.dao;

import com.dicks.pojo.Inventory;

public class InventoryDAO extends BaseDao<Inventory> {
	private static InventoryDAO instance = new InventoryDAO();
	
	public static InventoryDAO getInstance() {
		return instance;
	}

	public static void setInstance(InventoryDAO instance) {
		InventoryDAO.instance = instance;
	}

	public InventoryDAO() {
		super(Inventory.class);
	}
	
	
}
