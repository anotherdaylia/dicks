package com.dicks.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

import com.dicks.pojo.Rule;

public class RuleDAO extends BaseDao<Rule>{
	private static RuleDAO instance = new RuleDAO();

	public RuleDAO() {
		super(Rule.class);
	}
	
	public static RuleDAO getInstance (){
		return instance;
	}

	public	Rule[] getAllSortedList() throws Exception{
		ArrayList<Rule> ruleList =  (ArrayList<Rule>) super.getList();
		
		Collections.sort(ruleList,new Comparator<Rule>() {
			public int compare(Rule o1, Rule o2) {
				return o2.getPriority()-o1.getPriority();
			}
		} );
		
		Rule[] array = (Rule[])ruleList.toArray(new Rule[ruleList.size()]); 

		return array;
	}
	
	public void createRule(Rule rule) throws Exception{
		super.create(rule);
	}
	
	
}
