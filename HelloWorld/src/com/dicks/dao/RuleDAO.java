package com.dicks.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.Rule;

public class RuleDAO extends BaseDao<Rule> {
	private static RuleDAO instance = new RuleDAO();

	public RuleDAO() {
		super(Rule.class);
	}

	public static RuleDAO getInstance() {
		return instance;
	}

	public Rule[] getAllSortedList() throws Exception {
		ArrayList<Rule> ruleList = (ArrayList<Rule>) super.getList();

		Collections.sort(ruleList, new Comparator<Rule>() {
			public int compare(Rule o1, Rule o2) {
				return o2.getPriority() - o1.getPriority();
			}
		});

		Rule[] array = (Rule[]) ruleList.toArray(new Rule[ruleList.size()]);
		return array;
	}

	public Rule[] getAllRuleList() throws Exception{
		ArrayList<Rule> ruleList = (ArrayList<Rule>) super.getList();
		return (Rule[]) ruleList.toArray(new Rule[ruleList.size()]);
	}
	
	public Rule getRuleById(String ruleId) throws Exception{
		List<Criterion> criterions = new ArrayList<Criterion>();
		Criterion criterion = Restrictions.eq("ruleId", Integer.valueOf(ruleId));
		criterions.add(criterion);
		return super.get(criterions);
	}
	
	
	public void createRule(Rule rule) throws Exception {
		super.create(rule);
	}

	public void updatePriorities(Rule[] ruleArray) throws Exception{
		for(Rule rule : ruleArray){
			super.update(rule);
		}
	}
	
	public void update(Rule rule) throws Exception{
		super.update(rule);
	}

	public void updateStoreObject(Rule[] rules, int[] stordIds) throws Exception {
		for(Rule rule:rules){
			String newObject = updateStoreObject(rule.getObject(),stordIds);
			rule.setObject(newObject);
			super.update(rule);
		}
	}
	

	public void updateProdObject(Rule[] rules, String[] skus) throws Exception {
		for(Rule rule:rules){
			String newObject = updateProdObject(rule.getObject(),skus);
			rule.setObject(newObject);
			super.update(rule);
		}		
	}
	
	private String updateStoreObject(String object, int[] stordIds){
		String[] objs = object.split(",");
		int[] intObj = new int[objs.length];
		for(int i=0; i<objs.length;i++){
			intObj[i] = Integer.valueOf(objs[i]);
		}
		
		for(int i=0;i<stordIds.length;i++){
			int storeId = stordIds[i];
			for(int j=0; j<intObj.length;j++){
				if(intObj[j] == storeId){
					intObj[j]=-1;
					break;
				}
			}
		}
		
		StringBuffer sb = new StringBuffer();
		for(int i=0; i<intObj.length;i++){
			if(intObj[i]>0){
				sb.append(intObj[i]).append(",");
			}
		}
		sb.deleteCharAt(sb.length()-1);
		
		return sb.toString();
	}

	private String updateProdObject(String object, String[] skus) {
		String[] objs = object.split(",");

		for(int i=0;i<skus.length;i++){
			String sku = skus[i];
			for(int j=0; j<objs.length;j++){
				if(objs[j].equals(sku)){
					objs[j]=null;
					break;
				}
			}
		}
		
		StringBuffer sb = new StringBuffer();
		for(int i=0; i<objs.length;i++){
			if(objs[i]!=null){
				sb.append(objs[i]).append(",");
			}
		}
		sb.deleteCharAt(sb.length()-1);
		
		return sb.toString();		
	}
}
