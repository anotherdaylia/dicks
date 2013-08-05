package com.dicks.dao;

import com.dicks.pojo.Fee;
import com.dicks.pojo.Orders;

public class OrderDAO extends BaseDao<Orders> {
	private static OrderDAO instance = new OrderDAO();
	
	public OrderDAO() {
		super(Orders.class);
	}

	public static OrderDAO getInstance() {
		return instance;
	}

	public static void setInstance(OrderDAO instance) {
		OrderDAO.instance = instance;
	}
	
	
}
