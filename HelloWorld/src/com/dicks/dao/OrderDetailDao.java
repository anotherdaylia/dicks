package com.dicks.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.Fee;
import com.dicks.pojo.OrderDetail;
import com.dicks.pojo.Product;

public class OrderDetailDao extends BaseDao<OrderDetail> {
	private static OrderDetailDao instance = new OrderDetailDao();
	
	public OrderDetailDao() {
		super(OrderDetail.class);
	}

	public static OrderDetailDao getInstance() {
		return instance;
	}

	public static void setInstance(OrderDetailDao instance) {
		OrderDetailDao.instance = instance;
	}
	
	public ArrayList<OrderDetail> getProductsByOrder(int orderID) throws Exception {
		List<Criterion> criterions = new ArrayList<Criterion>();
		Criterion criterion = Restrictions.eq("orderID", orderID);
		criterions.add(criterion);
		return (ArrayList<OrderDetail>) super.getList(criterions);
	}
}
