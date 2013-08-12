package com.dicks.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

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

	public Shipment getShipmentByOriginSupply(int supplyZip, int destinationZip) throws Exception {
		List<Criterion> criterions = new ArrayList<Criterion>();
		Criterion criterion1 = Restrictions.eq("id.supplyZip", supplyZip);
		Criterion criterion2 = Restrictions.eq("id.destinationZip", destinationZip);
		criterions.add(criterion1);
		criterions.add(criterion2);
		return super.get(criterions);
	}
}
