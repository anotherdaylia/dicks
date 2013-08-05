package com.dicks.action;

import java.util.ArrayList;

import com.dicks.engine.CreateTemplate;

public class CreateNewBizRule {
	private String conditions;
	
	private String actions;
	private String templatename;
	private String rulename;
	public String[] operator;
	public String[] attribute;
	public String[] value;
	public String categoryname;
	
	public String getCategory(){
		System.out.println("mlgb"+categoryname);
		return categoryname;
	}
	
	public String[] getAttribute(){
		return attribute;
	}
	
	public String[] getOperator(){
		return operator;
	}
	public String[] value(){
		return value;
	}
	
	public void setAttribute(String[] a){
		this.attribute = a;
		
	}
	
	public void setOperator(String[] a){
		this.operator = a;
		
	}
	
	public void setValue(String[] a){
		this.value = a;
		
	}
	public String getTemplatename() {
		return templatename;
	}

	public void setTemplatename(String templatename) {
		this.templatename = templatename;
	}

	public String getRulename() {
		return rulename;
	}

	public void setRulename(String rulename) {
		this.rulename = rulename;
	}
	
	public String getActions() {
		return actions;
	}

	public void setActions(String actions) {
		this.actions = actions;
	}

	public String getConditions() {
		return conditions;
	}

	public void setConditions(String conditions) {
		this.conditions = conditions;
	}


	
	public String gototemplate(){
		System.out.println(rulename);
		System.out.println(templatename);
		System.out.println(categoryname);
		return "gototemplate";
	}
	
	public String newrule(){
		
		
		for(int i=0;i<4;i++){
			attribute[i] = attribute[i].toLowerCase();
			
			System.out.println("attribute :"+attribute[i]);
			System.out.println("operator :"+operator[i]);
			System.out.println("value :"+value[i]);
		}
		
		System.out.println("condition "+conditions);
		System.out.println("template "+templatename);
		System.out.println("rule name "+rulename);
		System.out.println("cagegory name "+categoryname);
		System.out.println("action111"+actions);
		String[] categoryList= categoryname.split(",");
		
		
		/// Micky, given a categoryList, call DAO function to return product[]; 
		// if there is categoryList[0] and categroyList[1], need to combine product[] together from both of the categoryList
		
		String type = null;
		if (templatename.equalsIgnoreCase("product_threshold")){
			type = "Threshold";
		}
		String[] product = new String[3];
		product[0] = "001";
		product[1] = "002";
		product[2] = "003";
		
		String[] action = new String[1];
		action[0] = actions;
		CreateTemplate test= new CreateTemplate(type,product,attribute,operator,value,conditions,null,action,"TH-A,ST-A,SP-A",5);
		
		return "newrule";
	}

}
