package com.dicks.pojo;

import java.io.Serializable;

public class RuleCategory implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int categoryID;
	private int ruleID;
	private boolean isProductRelated;
	private Rule rule;
	
	
	public int getCategoryID() {
		return categoryID;
	}
	public void setCategoryID(int categoryID) {
		this.categoryID = categoryID;
	}
	public int getRuleID() {
		return ruleID;
	}
	public void setRuleID(int ruleID) {
		this.ruleID = ruleID;
	}
	public boolean getIsProductRelated() {
		return isProductRelated;
	}
	public void setIsProductRelated(boolean isProductRelated) {
		this.isProductRelated = isProductRelated;
	}
	
	@Override
	public int hashCode() {
        final int prime = 31;
        int result = 1;
        String str1 = String.valueOf(categoryID);
        String str2 = String.valueOf(ruleID);
        result = prime * result + ((str1 == null) ? 0 : str1.hashCode());
        result = prime * result + ((str2 == null) ? 0 : str2.hashCode());
        return result;
	}
	
	 @Override
	    public boolean equals(Object obj)
	    {
	        if (this == obj)
	            return true;
	        if (obj == null)
	            return false;
	        if (getClass() != obj.getClass())
	            return false;
	        RuleCategory other = (RuleCategory) obj;
	        if (!(categoryID==other.categoryID))
	            return false;
	        if (!(ruleID==other.ruleID))
	            return false;
	        return true;
	    }
	public Rule getRule() {
		return rule;
	}
	public void setRule(Rule rule) {
		this.rule = rule;
	}
	
}
