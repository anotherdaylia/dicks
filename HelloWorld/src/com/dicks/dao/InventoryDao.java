package com.dicks.dao;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;
import com.dicks.pojo.Inventory;
import com.dicks.pojo.InventoryId;

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

//	public int getSafetyStock(int prodId, int storeId) throws Exception{
//		InventoryId id = new InventoryId(prodId, storeId);
//		List<Criterion> criterions = new ArrayList<Criterion>();
//		Criterion criterion = Restrictions.eq("InventoryId", id);
//		criterions.add(criterion);
//		Inventory inventory  = get(criterions);
//		return inventory.getSafetyStock();
//	}
//	
	

}