package com.dicks.engine;

import java.util.ArrayList;

public class CreateRuleWeb {
	private String type;
	private String object;
	private String sku;
	private String attribute;
	private String operator;
	private String valuenumber;
	private String action;
	private ArrayList<String> typeArray;
	private ArrayList<String> objectArray;
	private ArrayList<String> skuArray;
	private ArrayList<String> attributeArray;
	private ArrayList<String> operatorArray;
	private ArrayList<String> valuenumberArray;
	private ArrayList<String> actionArray;
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getObject() {
		return object;
	}
	public void setObject(String object) {
		this.object = object;
	}
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public String getAttribute() {
		return attribute;
	}
	public void setAttribute(String attribute) {
		this.attribute = attribute;
	}
	public String getOperator() {
		return operator;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	public String getValuenumber() {
		return valuenumber;
	}
	public void setValuenumber(String valuenumber) {
		this.valuenumber = valuenumber;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	
	public String gotocreatenew() throws Exception{

		return "gotocreatenew";
	}
	
	public String cnr() throws Exception{
		typeArray=new ArrayList<String>();
		objectArray=new ArrayList<String>();
		skuArray=new ArrayList<String>();
		attributeArray=new ArrayList<String>();
		operatorArray=new ArrayList<String>();
		valuenumberArray=new ArrayList<String>();
		actionArray=new ArrayList<String>();
		typeArray.add(type);
		objectArray.add(object);
		skuArray.add(sku);
		attributeArray.add(attribute);
		operatorArray.add(operator);
		valuenumberArray.add(valuenumber);
		actionArray.add(action);
		System.out.println(typeArray.get(0));
		System.out.println(objectArray.get(0));
		System.out.println(skuArray.get(0));
		System.out.println(attributeArray.get(0));
		System.out.println(operatorArray.get(0));
		System.out.println(valuenumberArray.get(0));
		System.out.println(actionArray.get(0));
		
//		ThresTemplate test= new ThresTemplate(type,product,attribute,operator,value,action);
		return "cnr";
	}

}
