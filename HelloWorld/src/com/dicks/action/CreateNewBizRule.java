package com.dicks.action;

import java.util.ArrayList;

import com.dicks.dao.ProdCateDAO;
import com.dicks.dao.StoreDAO;
import com.dicks.dao.RuleDAO;
import com.dicks.engine.CreateTemplate;
import com.dicks.pojo.Product;
import com.dicks.pojo.Rule;

public class CreateNewBizRule {
	private String conditions;

	private String actions;
	private String templatename;
	private String rulename;
	public String[] operator;
	public String[] attribute;
	public String[] value;
	public String categoryname;
	public Rule[] allRule;
	public String priority;

	public String[] test;

	public String getPriority(){
		return priority;
	}
	public void setPriority(String a){
		this.priority = a;
	}
	public String[] getTest(){
		return test;
	}

	public void setTest(String[] a){
		this.test = a;
		for (int i = 0; i<test.length; i++){
			System.out.println("haha"+test[i]);
		}
	}


	public Rule[] getAllRule(){
		return allRule;
	}

	public void setAllRule(Rule[] allRule){
		this.allRule = allRule;
	}

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
		try {
			allRule = RuleDAO.getInstance().getAllSortedList() ;
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		setAllRule(allRule);
		for (int i = 0 ;  i < allRule.length; i++){
		System.out.println("rule name  11111"+allRule[i].getRuleName());
		System.out.println("rule desc  1111"+ allRule[i].getRuleDescr());
		}
		return "gototemplate";
	}

	public String newrule(){
		System.out.println("prio   "+priority);

		for(int i=0;i<attribute.length;i++){
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
		String[] product = null;
		String[] cateList = new String[1];
		cateList[0] = "a";
		System.out.println("first instance of catelist is "+cateList[0]);
		try {
			product = ProdCateDAO.getInstance().getSKUByCategory(cateList);
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		System.out.println("product length is "+ product.length);
		System.out.println("hahahah first product in the list is "+product[0]);
		/*
		
		try {
			allRule = RuleDAO.getInstance().getAllSortedList() ;
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		setAllRule(allRule);
		for (int i = 0 ;  i < allRule.length; i++){
		System.out.println("rule name  "+allRule[i].getRuleName());
		System.out.println("rule desc  "+ allRule[i].getRuleDescr());
		}*/

		String[] abc = new String[2];
		abc[0] = "caocao";
		abc[1] = "caoweihua";
		setTest(abc);

		String[] action = new String[1];
		action[0] = actions;
		CreateTemplate test= new CreateTemplate(type,product,attribute,operator,value,conditions,null,action,"TH-A,ST-A,SP-A",Integer.parseInt(priority));

		return "newrule";
	}


	public String placeorder(){


		//get specific rule from rulename 
		/*try {
			allRule = RuleDAO.getInstance().getAllSortedList() ;
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		setAllRule(allRule);*/
		for (int i = 0 ;  i < allRule.length; i++){
		System.out.println("rule name  "+allRule[i].getRuleName());
		System.out.println("rule desc  "+ allRule[i].getRuleDescr());
		}



		//get the rule from the inserted position


		//compu

		return "placeorder";
	}


}