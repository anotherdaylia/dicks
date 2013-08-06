package com.dicks.pojo;

import java.util.HashSet;
import java.util.Set;

/**
 * Rule entity. @author MyEclipse Persistence Tools
 */

public class Rule implements java.io.Serializable {

	// Fields

	private Integer ruleId;
	private String ruleName;
	private String ruleUrl;
	private String ruleDescr;
	private Integer priority;
	private String flag;
	private String type;
	private String stage;
	private String object;
	private String attribute;
	private String operator;
	private String value;
	private String route;
	private String action;
	private String condition;
	private boolean isSpecial;
	private Set ruleCates = new HashSet(0);

	// Constructors

	/** default constructor */
	public Rule() {
	}

	/** minimal constructor */
	public Rule(String ruleName, String ruleUrl, String ruleDescr,
			Integer priority, String flag, String type, String stage,
			String object, String attribute, String operator, String value,
			String route, String action) {
		this.ruleName = ruleName;
		this.ruleUrl = ruleUrl;
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

	/** full constructor */
	public Rule(String ruleName, String ruleUrl, String ruleDescr,
			Integer priority, String flag, String type, String stage,
			String object, String attribute, String operator, String value,
			String route, String action, String condition, Set ruleCates) {
		this.ruleName = ruleName;
		this.ruleUrl = ruleUrl;
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
		this.condition = condition;
		this.ruleCates = ruleCates;
	}

	// Property accessors

	public Integer getRuleId() {
		return this.ruleId;
	}

	public void setRuleId(Integer ruleId) {
		this.ruleId = ruleId;
	}

	public String getRuleName() {
		return this.ruleName;
	}

	public void setRuleName(String ruleName) {
		this.ruleName = ruleName;
	}

	public String getRuleUrl() {
		return this.ruleUrl;
	}

	public void setRuleUrl(String ruleUrl) {
		this.ruleUrl = ruleUrl;
	}

	public String getRuleDescr() {
		return this.ruleDescr;
	}

	public void setRuleDescr(String ruleDescr) {
		this.ruleDescr = ruleDescr;
	}

	public Integer getPriority() {
		return this.priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	public String getFlag() {
		return this.flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStage() {
		return this.stage;
	}

	public void setStage(String stage) {
		this.stage = stage;
	}

	public String getObject() {
		return this.object;
	}

	public void setObject(String object) {
		this.object = object;
	}

	public String getAttribute() {
		return this.attribute;
	}

	public void setAttribute(String attribute) {
		this.attribute = attribute;
	}

	public String getOperator() {
		return this.operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public String getValue() {
		return this.value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getRoute() {
		return this.route;
	}

	public void setRoute(String route) {
		this.route = route;
	}

	public String getAction() {
		return this.action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getCondition() {
		return this.condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public Set getRuleCates() {
		return this.ruleCates;
	}

	public void setRuleCates(Set ruleCates) {
		this.ruleCates = ruleCates;
	}

	public boolean GetIsSpecial() {
		return isSpecial;
	}

	public void setIsSpecial(boolean isSpecial) {
		this.isSpecial = isSpecial;
	}

}