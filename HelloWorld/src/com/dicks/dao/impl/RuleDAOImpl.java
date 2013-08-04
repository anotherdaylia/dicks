package com.dicks.dao.impl;

import com.dicks.dao.BaseDao;
import com.dicks.dao.RuleDAO;
import com.dicks.pojo.Rule;

public class RuleDAOImpl extends BaseDao<Rule> implements RuleDAO{
	private static RuleDAOImpl instance = new RuleDAOImpl();

	private RuleDAOImpl() {
		super(Rule.class);
	}
	
	public static RuleDAOImpl getInstance(){
		return instance;
	} 

	@Override
	public void createRule(Rule rule) throws Exception {
		super.create(rule);
	}

}
