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

	
	
	public String placeorder(){
		
		
		for(int i=0;i<4;i++){
			quantity[i] = quantity[i].toLowerCase();
			
			System.out.println("quantity :"+quantity[i]);
			System.out.println("product :"+product[i]);
		}
		
		Allocate test = new Allocate(product, quantity,shippingtype, shippingaddress, shippingzipcode);
		return "placeorder";
		
		
	}

}
