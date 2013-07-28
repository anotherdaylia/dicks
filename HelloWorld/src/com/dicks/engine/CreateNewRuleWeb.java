package com.dicks.engine;

import java.util.ArrayList;

public class CreateNewRuleWeb {
//	private ArrayList<String> createinput;
	private String rulename;
	private String ruledescription;
	private String stage;
	private String template;
	private String rulecontent;
	
	public String getRulename() {
		return rulename;
	}

	public void setRulename(String rulename) {
		this.rulename = rulename;
	}

	public String getRuledescription() {
		return ruledescription;
	}

	public void setRuledescription(String ruledescription) {
		this.ruledescription = ruledescription;
	}

	public String getStage() {
		return stage;
	}

	public void setStage(String stage) {
		this.stage = stage;
	}

	public String getTemplate() {
		return template;
	}

	public void setTemplate(String template) {
		this.template = template;
	}

	public String getRulecontent() {
		return rulecontent;
	}

	public void setRulecontent(String rulecontent) {
		this.rulecontent = rulecontent;
	}
	
//	public ArrayList<String> getCreateinput() {
//		return createinput;
//	}
//
//	public void setCreateinput(ArrayList<String> createinput) {
//		this.createinput = createinput;
//	}
	
	public String gotocreate() throws Exception{
		return "gotocreatenewrule";
	}
	
	public String createrule() throws Exception{
		return "createnewrule";
	}

//	public String create() throws Exception{
//		createinput=new ArrayList<String>();
//		createinput.add(rulename);
//		createinput.add(ruledescription);
//		createinput.add("Stage 1");
//		createinput.add("Template1");
//		createinput.add("Rule Content");
//		return "createnewrule";
//	}
}
