package com.dicks.action;

import java.util.ArrayList;

import com.dicks.dao.OrderDetailDAO;
import com.dicks.dao.OrdersDAO;
import com.dicks.pojo.OrderDetail;
import com.dicks.pojo.Orders;

public class Redirect {
	private ArrayList<Orders> ordersList;
	private OrdersDAO ordersDAO = OrdersDAO.getInstance();
	private Orders order;
	private ArrayList<OrderDetail> details;
	private String id;
	
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Orders getOrder() {
		return order;
	}

	public void setOrder(Orders order) {
		this.order = order;
	}

	public ArrayList<OrderDetail> getDetails() {
		return details;
	}

	public void setDetails(ArrayList<OrderDetail> details) {
		this.details = details;
	}

	public OrdersDAO getOrdersDAO() {
		return ordersDAO;
	}

	public void setOrdersDAO(OrdersDAO ordersDAO) {
		this.ordersDAO = ordersDAO;
	}

	public ArrayList<Orders> getOrdersList() {
		return ordersList;
	}

	public void setOrdersList(ArrayList<Orders> ordersList) {
		this.ordersList = ordersList;
	}

//	public String gotorulelist() {
//
//		return "gotorulelist";
//	}

	public String gotoorderlist() throws Exception {
		ordersList = new ArrayList<Orders>();
		ordersList = OrdersDAO.getInstance().getAllOrders();
		return "gotoorderlist";
	}

	public String gotocategorylist() {
		return "goToCategoryList";
	}

	public String gotonewbizrulelist() {
		return "gotonewbizrulelist";
	}

	public String gototemplate() {
		return "gototemplate";
	}

	public String gotoplaceorder() {
		return "gotoplaceorder";
	}
	public String gotonewcategory(){
		return "gotonewcategory";
	}
	
	public String gotoruleprioritylist(){
		return "success";
	}
	public String stage1AllRules(){
		return "success";
	}
	public String costDetail() throws Exception{
		order = OrdersDAO.getInstance().getById(Integer.parseInt(id));
		details = new ArrayList<OrderDetail>();
		details= OrderDetailDAO.getInstance().getOrderDetailsByOrder(order);
		System.out.println(details.get(0).getProduct().getProdName());
		return "success";
	}
	public String stage1Rule1() throws Exception{
		return "success";
	}
	public String stage1Rule2() throws Exception{
		return "success";
	}
	public String stage1Rule3() throws Exception{
		return "success";
	}
	public String stage2Package1() throws Exception{
		return "success";
	}
	public String stage2Package2() throws Exception{
		return "success";
	}
	public String stage2Package3() throws Exception{
		return "success";
	}
	public String stage3Rule1() throws Exception{
		return "success";
	}
	public String stage3Rule2() throws Exception{
		return "success";
	}
	public String stage3Rule3() throws Exception{
		return "success";
	}
}
