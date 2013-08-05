package com.dicks.dao;

import com.dicks.pojo.Fee;
import com.dicks.pojo.Order;

public class OrderDao extends BaseDao<Order> {
	private static OrderDao instance = new OrderDao();
	
	public OrderDao() {
		super(Order.class);
	}

	public static OrderDao getInstance() {
		return instance;
	}

	public static void setInstance(OrderDao instance) {
		OrderDao.instance = instance;
	}
	
	
}
