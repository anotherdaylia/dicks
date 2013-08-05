package com.dicks.pojo;

import java.util.Set;

public class Rule {
	private String ruleName;
	private int ruleID;
	private String ruleURL;
	private String ruleDescr;
	private int priority;
	private String flag; 
	private char type;
	private char stage;
	private String object;
	private String attribute;
	private String operator;
	private String value;
	private String route;
	private String action;	
//	private Set<RuleCategory> ruleCategorys;

//	public Set<RuleCategory> getRuleCategorys() {
//		return ruleCategorys;
//	}
//	public void setRuleCategorys(Set<RuleCategory> ruleCategorys) {
//		this.ruleCategorys = ruleCategorys;
//	}

	public Rule(){}
	
	public Rule(String ruleName,  String ruleURL,
			String ruleDescr, int priority, String flag, char type, char stage,
			String object, String attribute, String operator, String value,
			String route, String action) {
		super();
		this.ruleName = ruleName;
		this.ruleURL = ruleURL;
		this.ruleDescr = ruleDescr;
		this.priority = priority;
		this.flag = flag;
		this.type = type;
		this.stage = stage;
		this.object = object;
		this.attribute = attribute;
		this.operator = operator;
		this.value = value;
		this.route = route;
		this.action = action;
	}
	public String getRuleURL() {
		return ruleURL;
	}
	public void setRuleURL(String ruleURL) {
		this.ruleURL = ruleURL;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public char getType() {
		return type;
	}
	public void setType(char type) {
		this.type = type;
	}
	public char getStage() {
		return stage;
	}
	public void setStage(char stage) {
		this.stage = stage;
	}
	public String getObject() {
		return object;
	}
	public void setObject(String object) {
		this.object = object;
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
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public String getRoute() {
		return route;
	}
	public void setRoute(String route) {
		this.route = route;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getRuleName() {
		return ruleName;
	}
	public void setRuleName(String ruleName) {
		this.ruleName = ruleName;
	}
	public int getRuleID() {
		return ruleID;
	}
	public void setRuleID(int ruleID) {
		this.ruleID = ruleID;
	}

	public String getRuleDescr() {
		return ruleDescr;
	}
	public void setRuleDescr(String ruleDescr) {
		this.ruleDescr = ruleDescr;
	}
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}
	
	
	
}
