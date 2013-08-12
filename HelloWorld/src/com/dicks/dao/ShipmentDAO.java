package com.dicks.dao;

import com.dicks.pojo.Product;
import com.dicks.pojo.Rule;
import com.dicks.pojo.Shipment;

public class ShipmentDAO extends BaseDao<Shipment> {
	private static ShipmentDAO instance = new ShipmentDAO();

	public ShipmentDAO() {
		super(Shipment.class);
	}

	public static ShipmentDAO getInstance() {
		return instance;
	}

}
