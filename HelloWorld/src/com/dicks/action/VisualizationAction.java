package com.dicks.action;

import java.util.ArrayList;

import com.dicks.dao.OrdersDAO;
import com.dicks.dao.RuleDAO;
import com.dicks.pojo.Orders;
import com.dicks.pojo.Rule;

public class VisualizationAction {
	public ArrayList<Orders> oList;
	
	public ArrayList<Orders> getoList() {
		return oList;
	}

	public void setoList(ArrayList<Orders> oList) {
		this.oList = oList;
	}

	public String stage1Visual() throws Exception{
		oList = OrdersDAO.getInstance().getAllOrders() ;
		return "success";
	}
	
}
