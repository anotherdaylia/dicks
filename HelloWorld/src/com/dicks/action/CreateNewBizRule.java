package com.dicks.action;

import java.util.ArrayList;

public class CreateNewBizRule {
	private String conditions;
	private String operator1;
	private String size1;
	private String inches1;
	private String operator2;
	private String size2;
	private String inches2;
	private String operator3;
	private String size3;
	private String inches3;
	private String operator4;
	private String size4;
	private String inches4;
	private String shippackage;
	private String templatename;
	private String rulename;
	public ArrayList<String> operator;
	public ArrayList<String> size;
	public ArrayList<String> inches;

	
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
	
	public String getShippackage() {
		return shippackage;
	}

	public void setShippackage(String shippackage) {
		this.shippackage = shippackage;
	}

	public String getConditions() {
		return conditions;
	}

	public void setConditions(String conditions) {
		this.conditions = conditions;
	}

	public String getOperator1() {
		return operator1;
	}

	public void setOperator1(String operator1) {
		this.operator1 = operator1;
	}

	public String getSize1() {
		return size1;
	}

	public void setSize1(String size1) {
		this.size1 = size1;
	}

	public String getInches1() {
		return inches1;
	}

	public void setInches1(String inches1) {
		this.inches1 = inches1;
	}

	public String getOperator2() {
		return operator2;
	}

	public void setOperator2(String operator2) {
		this.operator2 = operator2;
	}

	public String getSize2() {
		return size2;
	}

	public void setSize2(String size2) {
		this.size2 = size2;
	}

	public String getInches2() {
		return inches2;
	}

	public void setInches2(String inches2) {
		this.inches2 = inches2;
	}

	public String getOperator3() {
		return operator3;
	}

	public void setOperator3(String operator3) {
		this.operator3 = operator3;
	}

	public String getSize3() {
		return size3;
	}

	public void setSize3(String size3) {
		this.size3 = size3;
	}

	public String getInches3() {
		return inches3;
	}

	public void setInches3(String inches3) {
		this.inches3 = inches3;
	}

	public String getOperator4() {
		return operator4;
	}

	public void setOperator4(String operator4) {
		this.operator4 = operator4;
	}

	public String getSize4() {
		return size4;
	}

	public void setSize4(String size4) {
		this.size4 = size4;
	}

	public String getInches4() {
		return inches4;
	}

	public void setInches4(String inches4) {
		this.inches4 = inches4;
	}
	
	public String gototemplate(){
		System.out.println(rulename);
		System.out.println(templatename);
		return "gototemplate";
	}
	
	public String newrule(){
		operator=new ArrayList<String>();
		size=new ArrayList<String>();
		inches=new ArrayList<String>();
		operator.add(operator1);operator.add(operator2);operator.add(operator3);operator.add(operator4);
		size.add(size1);size.add(size2);size.add(size3);size.add(size4);
		inches.add(inches1);inches.add(inches2);inches.add(inches3);inches.add(inches4);
		System.out.println(rulename);
		System.out.println(templatename);
		System.out.println();
		for(int i=0;i<4;i++){
			System.out.println(size.get(i));
			System.out.println(operator.get(i));
			System.out.println(inches.get(i));
		}
		System.out.println();
		System.out.println(conditions);
		System.out.println(shippackage);
		System.out.println();
		return "newrule";
	}

}
