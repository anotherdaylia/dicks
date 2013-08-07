package com.dicks.dao;

import java.util.ArrayList;
import java.sql.Timestamp;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.Fee;
import com.dicks.pojo.OrderDetail;
import com.dicks.pojo.Orders;
import com.dicks.pojo.Product;

public class OrderDetailDAO extends BaseDao<OrderDetail> {
	private static OrderDetailDAO instance = new OrderDetailDAO();

	public OrderDetailDAO() {
		super(OrderDetail.class);
	}

	public static OrderDetailDAO getInstance() {
		return instance;
	}

	public static void setInstance(OrderDetailDAO instance) {
		OrderDetailDAO.instance = instance;
	}
	
	public void createOrderDetail(OrderDetail orderDetail) throws Exception {
		super.create(orderDetail);
	}

	public ArrayList<OrderDetail> getOrderDetailsByOrder(Orders orders) throws Exception {
		List<Criterion> criterions = new ArrayList<Criterion>();
		Criterion criterion = Restrictions.eq("orders.id", orders.getOrderId());
		criterions.add(criterion);
		return (ArrayList<OrderDetail>) super.getList(criterions);
	}
	
	public ArrayList<Product> getProductsByOrder(Orders orders) throws Exception {
		ArrayList<OrderDetail> details = getOrderDetailsByOrder(orders); 
		ArrayList<Product> products = new ArrayList<Product>();
		for (OrderDetail detail : details) {
			products.add(detail.getProduct());
		}
		return products;
	}
	
	public ArrayList<Timestamp> getDatesByOrder(Orders orders) throws Exception {
		ArrayList<Timestamp> times= new ArrayList<Timestamp>();
		
		return times;
	}
}