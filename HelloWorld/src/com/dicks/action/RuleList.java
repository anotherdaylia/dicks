package com.dicks.action;

import java.util.ArrayList;

import com.dicks.dao.OrdersDAO;
import com.dicks.dao.RuleDAO;
import com.dicks.pojo.Orders;
import com.dicks.pojo.Rule;

public class RuleList {
	public String[] ruleList;
	public Rule[] allRule;
	public String ruleString;
	private String rulename;
	public Rule[] preRule;
	public Rule[] midRule;
	public Rule[] lastRule;
	public String ruleId;
	public String ruleType;
	public String[] attribute;
	public String[] operator;
	public String[] value;
	
	public String getRuleId(){
		return  ruleId;
	}
	
	public void setRuleId(String ruleId){
		this.ruleId = ruleId;
	}
	
	public String getRuleType(){
		return  ruleType;
	}
	
	public void setRuleType(String ruleType){
		this.ruleType = ruleType;
	}
	
	public String getRulename() {
		return rulename;
	}

	public void setRulename(String rulename) {
		this.rulename = rulename;
	}
	public String getRuleString(){
		return ruleString;
	}
	
	public void setRuleString(String ruleString){
		this.ruleString = ruleString;
	}
	public String gotorulelist(){
		
		int pre = 0;
		int mid = 0;
		int last = 0;
		try {
			allRule = RuleDAO.getInstance().getAllSortedList() ;
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		for (int i = 0; i<allRule.length;i++){
			if (allRule[i].getType().equals("n")){
				if (allRule[i].getPriority()>0){
					pre++;
				}
				else{
					last++;
				}
			}
		}
		mid = allRule.length-pre-last;
		System.out.println("all rule number is "+allRule.length);
		System.out.println("pre rule number is "+pre);
		System.out.println("mid rule number is "+mid);
		System.out.println("last rule number is "+last);
		preRule = new Rule[pre];
		midRule = new Rule[mid];
		lastRule = new Rule[last];
		for (int i = 0; i<pre;i++){
			preRule[i] = allRule[i];
			System.out.println("Pre Rule"+allRule[i].getRuleName());
		}
		for (int i = pre,j=0;i<(pre+mid);i++,j++){
			midRule[j] = allRule[i];
			System.out.println("Mid Rule"+allRule[i].getRuleName());
		}
		for (int i = (pre+mid),j=0; i < allRule.length; i++,j++){
			lastRule[j] = allRule[i];
			System.out.println("Last Rule"+allRule[i].getRuleName());
		}
		
		
		return "success";
	}
	
	
	public String goToEdit(){
		System.out.println("WTF"+ruleId);
		Rule thisRule = new Rule();
		try {
			thisRule = RuleDAO.getInstance().getRuleById(ruleId);
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		attribute = thisRule.getAttributes();
		operator = thisRule.getOperators();
		value = thisRule.getValues();
		for (int i = 0;i<attribute.length;i++){
			System.out.println("product "+attribute[i]);
			System.out.println("operator "+operator[i]);
			System.out.println("value "+value[i]);
			
		}
		return "goToEditProductThreshold";
	}
	public String reRank(){
		System.out.println("!!!!!!!!!!!"+ruleString);
		int pre = 0;
		int mid = 0;
		int last = 0;
		try {
			allRule = RuleDAO.getInstance().getAllSortedList() ;
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		Rule[] preRule = null;
		for (int i = 0; i<allRule.length;i++){
			if (allRule[i].getType().equals("n")){
				if (allRule[i].getPriority()>0){
					pre++;
				}
				else{
					last++;
				}
			}
		}
		mid = allRule.length-pre-last;
		System.out.println("all rule number is "+allRule.length);
		System.out.println("pre rule number is "+pre);
		System.out.println("mid rule number is "+mid);
		System.out.println("last rule number is "+last);
		String[] ruleStringList = ruleString.split(",");
		Rule[] newRule = new Rule[allRule.length];
		for (int i = 0 ; i < newRule.length; i++){
			newRule[i] = findRule(allRule, ruleStringList[i]);
			System.out.println("New rule "+i+" "+newRule[i].getRuleName());
		}
		
		
		return "success";
	}
	
	public Rule findRule(Rule[] rule, String find){
		Rule thisRule = new Rule();
		for (int i = 0; i<rule.length; i++){
			if (rule[i].getRuleName().equalsIgnoreCase(find)){
				thisRule = rule[i];
			}
		}
		return thisRule;
	}
}
