package com.dicks.action;

import java.util.ArrayList;

import com.dicks.engine.Allocate;
import com.dicks.engine.CreateTemplate;

public class PlaceOrder {
	private String[] product;
	private String[] quantity;
	
	private String shippingtype;
	private String shippingaddress;
	private String shippingzipcode;	
	
	private String id;
	private ArrayList<String> logs;
	
	public String[] getQuantity(){
		return quantity;
	}
	
	public String[] getProduct(){
		return product;
	}
	
	public void setQuantity(String[] a){
		this.quantity = a;
		
	}
	
	public void setProduct(String[] a){
		this.product = a;
		
	}
	
	
	public String getShippingaddress() {
		return shippingaddress;
	}

	public void setShippingaddress(String shippingaddress) {
		this.shippingaddress = shippingaddress;
	}

	public String getShippingzipcode() {
		return shippingzipcode;
	}

	public void setShippingzipcode(String shippingzipcode) {
		this.shippingzipcode = shippingzipcode;
	}
	
	public String getShippingtype() {
		return shippingtype;
	}

	public void setShippingtype(String shippingtype) {
		this.shippingtype = shippingtype;
	}
	
	public String placeorder() throws Exception{
		for(int i=0;i<quantity.length;i++){
			quantity[i] = quantity[i].toLowerCase();
			
			System.out.println("quantity :"+quantity[i]);
			System.out.println("product :"+product[i]);
		}
		System.out.println("product length: " + product.length);
		System.out.println("quantity length: " + quantity.length);
		
		
		Allocate test = new Allocate(product, quantity,shippingtype, shippingaddress, shippingzipcode);
		System.out.println("order id in place order: " + test.getOrderId());
		this.id = test.getOrderId();
		this.logs = test.getLogs();
		return "success";	
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public ArrayList<String> getLogs() {
		return logs;
	}

	public void setLogs(ArrayList<String> logs) {
		this.logs = logs;
	}

}
