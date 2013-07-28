package com.sample;

public class Rule {
	
	private int piority;
	private String group;
	private String path;
	private int ruleID;
	private String description;
	
	public Rule(){
		
	}
	
	public Rule(int ruleID, String path, String description, int piority, String group ){
		this.ruleID = ruleID;
		this.path = path;
		this.description = description;
		this.piority = piority;
		this.group = group;
	}
	
	
	public Rule(int ruleID, String path, String description, int piority ){
		this.ruleID = ruleID;
		this.path = path;
		this.description = description;
		this.piority = piority;
		this.group = "";
	}
	
	public Rule(int ruleID, String path, String description){
		this.ruleID = ruleID;
		this.path = path;
		this.description = description;
		this.piority = 0;
		this.group = "";
	}

	
	public int getRuleID(){
		return ruleID;
	}
	
	public int getPiority(){
		return piority;
	}
	
	public String getPath(){
		return path;
	}
	
	public String getDescription(){
		return description;
	}
	
	public String getGroup(){
		return group;
	}
	
	
	public void setRuleID(int ruleID){
		this.ruleID = ruleID;
	}
	
	public void setPiority(int piority){
		
			this.piority = piority;
		
	}
	
	public void setPath(String path){
		this.path = path;
	}
	
	public void setDescription(String description){
		this.description = description;
	}
	public void setGroup(String group){
		this.group = group;
	}


	
	
	
	
	
	
}

