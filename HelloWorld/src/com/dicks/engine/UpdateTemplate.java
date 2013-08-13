package com.dicks.engine;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;


import javax.print.DocFlavor.URL;

import com.dicks.dao.RuleDAO;
import com.dicks.pojo.Product;
import com.dicks.pojo.Vendor;
import com.dicks.pojo.Rule;

public class UpdateTemplate {
    public String myTab ="    ";
    public String myReturn = "\n";
    public String mySpace = " ";
    public int ruleCount = 0;
    public static String[] rules = new String[10];
    public static Rule[] ruleFile = new Rule[100];
    public static Rule[] ruleFiles = null;
    public static int ruleInt;
    public String typeString;
    
    
    public static Product[] product = new Product[3];
    
   
    
	public UpdateTemplate  (int ruleId, String ruleName,String ruleNames, String description,String[] objects, String[] attributes, 
			String[] operators, String[] values, String conditions, String[] routes, String[] actions, String flag){
		
		System.out.println("pre name "+ruleName);
		System.out.println("changed name "+ruleNames);
		for (int i = 0; i<values.length;i++){
			System.out.println("valueasdfads "+values[i]);
		}
		
		int ruleInt = 0;
		System.out.println("route!!"+routes);
		System.out.println("condition is!!!"+conditions);
		String condition = null;
		if (conditions != null){
			if (conditions.equals("All")){
				condition = "||";
			}
			else{
				condition = "&&";
			}
			System.out.println("condition is "+condition);
		}
		String current = null;
		try {
			current = new java.io.File( "." ).getCanonicalPath();
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	        System.out.println("Current dir:"+current);
	 String currentDir = System.getProperty("user.dir");
	        System.out.println("Current dir using System:" +currentDir);
		  /*
		  rules[0] = "./ruleTxt/ruleHeader.txt";
		  rules[1] = "./ruleTxt/rule1.txt";
		  rules[2] = "./ruleTxt/rule2.txt";
		  rules[3] = "./ruleTxt/rule3.txt";
		  */
		  System.out.println("--------------Start Adding New Rule--------------------------");
		 
			//System.out.println("!!!!"+shoes.getSku());


			try {
				ruleFiles = RuleDAO.getInstance().getAllSortedListFromStageOne();
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			System.out.println("three is "+ruleFiles.length);
			System.out.println("checking!! "+ruleName);
			for (int i = 0 ; i < ruleFiles.length; i++){
				System.out.println("checking "+ruleFiles[i].getRuleName());
				if ((ruleFiles[i].getRuleName().replace("%20"," ")).equals(ruleName)){
					ruleInt = i;
					System.out.println("num "+i);
					System.out.println("ruleID "+ruleFiles[i].getRuleId());
				}
				//System.out.println(i+" "+ruleFiles[i].getRuleDescr());

			}
			/*Rule updateRule = new Rule();
			try {
				updateRule = RuleDAO.getInstance().getRuleById(ruleId);
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}*/
			
			//System.out.println("!!!!!!!!!!!rule is "+ruleFile.length);
		  /*if (ruleFile[0] == null){
			  ruleFile[0] = new Rule("abc", "/Users/zhoufang/git/dicks3/HelloWorld/ruleTxt/rule1.txt","\"Explode Cart\"",100);
		  }
		  if (ruleFile[1] == null){
		  ruleFile[1] = new Rule("bcd", "/Users/zhoufang/git/dicks3/HelloWorld/ruleTxt/rule2.txt","\"filter stock\"",98);}
		  if (ruleFile[2] == null){
		  ruleFile[2] = new Rule("def", "/Users/zhoufang/git/dicks3/HelloWorld/ruleTxt/rule3.txt","\"Summarize\"",-5);}
*/
		  //////get all rule in database and sorted with priority---->return to ruleFile
		  /////get all product objects by a array of SKU.




		  //get priority, hardcoded for 2 for demo
		  System.out.println("Rules before editing");
		  int i = 0;
		  for (i = 0; i<ruleFiles.length;i++){
	    	  System.out.println ("Rule :"+i+"  "+ ruleFiles[i].getRuleName()+" Priority: "+ruleFiles[i].getPriority());


	      }
	      System.out.println("----------------------------------------------------------");
	      //ruleFile[i+1] = new Rule();


	      //ruleInt = 1;

	      //System.out.println("rule is at  " +ruleInt + "current rule number is "+i);

	      //System.out.println("nnnnnnnn");
	      /*for (i = 0 ; i<ruleFiles.length;i++){
	    	  System.out.println("rule "+i+" "+ruleFiles[i].getRuleName());
	      }*/
	     
	      System.out.println("rule name"+ruleName);
	      System.out.println("rule des"+description);
	      System.out.println("rule condi"+conditions);
	      for (i = 0 ; i<attributes.length;i++){
	    	  System.out.println(attributes[i]);
	    	  System.out.println(operators[i]);
	    	  System.out.println(values[i]);
	      }
	      ruleFiles[ruleInt].setRuleName(ruleNames);
	      ruleFiles[ruleInt].setRuleDescr(description);
	      ruleFiles[ruleInt].setObjects(objects);
	      ruleFiles[ruleInt].setAttributes(attributes);
	      ruleFiles[ruleInt].setOperators(operators);
	      ruleFiles[ruleInt].setValues(values);
	      ruleFiles[ruleInt].setOperators(operators);
	      //System.out.println("RIRIRIIRIRIRI"+ruleFiles[ruleInt].getValue());
	      ruleFiles[ruleInt].setCondition(condition);
	      /*ruleFiles[ruleInt].setRoutes(routes);
	      ruleFiles[ruleInt].setActions(actions);
	      ruleFiles[ruleInt].setFlag(flag);*/
		

	      try {
				RuleDAO.getInstance().update(ruleFiles[ruleInt]);
			} catch (Exception e) {
				System.out.println("eeeeeeror"+e);// TODO Auto-generated catch block
				e.printStackTrace();
			}

		   /*
		   try {
		    	 for (i  = 0 ; rules[i] != null; i++){
		    		 if (rules[i+1] == null){
		    			 //System.out.println("new file is"+"./ruleTxt/rule"+(i+1)+".txt");
		    			 //String newPath = "./ruleTxt/rule"+(i+1)+".txt";
		    			 //File file = new File(newPath);  
		    			// System.out.println("current rule is "+ruleFile[ruleInt]+ "with piority"+ruleFile[ruleInt].getPriority());
		    			 if (ruleInt > 0){
		    				 //public Rule(int ruleID, String path, String description, int piority, String type, String[] objects, 
		    							//String[] attributes, String[] operators, String[] values, String[] routes, String[] actions)
		    				 
		    				 ruleFile[ruleInt] = new Rule(ruleInt+1, null, "\""+type+ruleInt+"\"", ruleFile[ruleInt-1].getPriority()-2,type,objects,
		    						 attributes,operators,values,null,actions);
		    			 }
		    			 else{
		    				 ruleFile[ruleInt] = new Rule(ruleInt+1, null, "\""+type+ruleInt+"\"", ruleFile[ruleInt-1].getPriority()+2,type,objects,
		    						 attributes,operators,values,null,actions);
		    			 }
		    			 
		    			 FileOutputStream fop = new FileOutputStream(file);
		    	 
		    				// if file doesnt exists, then create it
		    				if (!file.exists()) {
		    					file.createNewFile();
		    				}
		    	 
		    				// get the content in bytes
		    				byte[] contentInBytes = content.getBytes();
		    	 
		    				fop.write(contentInBytes);
		    				fop.flush();
		    				fop.close();
		    	 
		    				System.out.println("Done");
		    				break;
		    	 
		    			} 
		    	 }
		    }
		     catch (IOException e) {
		    	 e.printStackTrace();
		     }			 
		    */		
	      
	      try {
				ruleFiles = RuleDAO.getInstance().getAllSortedListFromStageOne();
			} catch (Exception e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		    //combining all rules
		     try {
	             File file = new File("ruleTxt/newRule.drl");         
	             FileOutputStream fos = new FileOutputStream(file);
	             i = 0;
	             FileInputStream fis;
	             fis = new FileInputStream(new File("ruleTxt/ruleHeader.txt"));
	        	 byte[] b = new byte[1];
	        	 //System.out.print(b);
	        	 while((fis.read(b)) != -1){
	                 fos.write(b);
	             }

	             for (i=0; i < ruleFiles.length; i++){
	            	 
	            	 	System.out.println("printing file "+i);
	            	 if (ruleFiles[i].getType().equals("9")){
	            		 //System.out.println("read file");
		            	 fis = new FileInputStream(new File(ruleFiles[i].getRuleUrl()));
		            	 //System.out.println("Gettting new path-----"+ruleFile[i].getPath()+"i is  "+i);
		            	 b = new byte[1];
		            	 //System.out.print(b);
		            	 while((fis.read(b)) != -1){
		                     fos.write(b);
		                 }
	            	 }
		             else{
		            	 //conditon added
		            	 if (ruleFiles[i].getType().equalsIgnoreCase("1")){
		            		 System.out.println("This is the new Threshold rule created by the system");
		            		 byte[] contentInBytes = createThreshold(ruleFiles[i].getRuleName(),ruleFiles[i].getType(),ruleFiles[i].getPriority(),
		            				 ruleFiles[i].getObjects(),ruleFiles[i].getAttributes(),ruleFiles[i].getOperators(),ruleFiles[i].getValues(),
		            				 ruleFiles[i].getCondition(),ruleFiles[i].getActions(),ruleFiles[i].getFlag()).getBytes();
		            		 fos.write(contentInBytes);
		            	 }
		            	 else if (ruleFiles[i].getType().equalsIgnoreCase("2")){
		            		 System.out.println("This is the new Store Filter rule created by the system!!!!");
		            		 byte[] contentInBytes = createStoreRule(ruleFiles[i].getRuleName(),ruleFiles[i].getType(),ruleFiles[i].getPriority(),
		            				 ruleFiles[i].getObjects(),ruleFiles[i].getAttributes(),ruleFiles[i].getOperators(),ruleFiles[i].getValues(),
		            				 ruleFiles[i].getActions(),ruleFiles[i].getFlag()).getBytes();
		            		 fos.write(contentInBytes);
		            	 }
		            	 else if (ruleFiles[i].getType().equalsIgnoreCase("3")){
		            		 System.out.println("This is the new Special route rule created by the system!!!!");
		            		 byte[] contentInBytes = createSpecialRoute(ruleFiles[i].getRuleName(),ruleFiles[i].getType(),ruleFiles[i].getPriority(),
		            				 ruleFiles[i].getObjects(),ruleFiles[i].getAttributes(),ruleFiles[i].getOperators(),ruleFiles[i].getValues()
		            				 ,ruleFiles[i].getActions(),ruleFiles[i].getRoutes()[0],ruleFiles[i].getFlag()).getBytes();
		            		 fos.write(contentInBytes);
		            	 }


		            	 	System.out.println("----------------------------------------------------------");
		    				System.out.println("Done");
		             }


	             }

	            fos.flush();
	            fos.close();
	            System.out.println("New drl file is created!");


	       }
	      catch(Exception e){System.out.println("error: " + e);}
		     //threshold abc = new threshold("hold");
		     System.out.println("Rules after editing");

		      for (i = 0; i<ruleFiles.length;i++){
		    	  System.out.println ("Rule :"+i+"  "+ ruleFiles[i].getRuleName()+" Priority: "+ruleFiles[i].getPriority());


		      }

	}




	   public String createThreshold(String ruleName,String type, int priority, String[] object, String[] attribute, 
			   String[] operator, String[] values,String condition, String[] actions,String flag){
		   
		   System.out.println("type  "+type);
		   System.out.println("objects  "+object);
		   for (int i = 0;i<attribute.length;i++){
		   System.out.println("attribute" +attribute);
		   System.out.println("operator "+ operator);
		   System.out.println("Values "+values);
		   }
		   StringBuffer newRule = new StringBuffer();
		   newRule.append(writeRuleType(ruleName,priority));
		   newRule.append(writeWhenThreshold(object,attribute,operator,values,condition,flag));
		   newRule.append(writeThenThreshold(actions));
		   System.out.println(newRule.toString());
		   return newRule.toString();
	   }

	   public String createStoreRule(String ruleName,String type, int priority, String[] object, String[] attribute, 
			   String[] operator, String[] values,String[] actions,String flag){
		   StringBuffer newRule = new StringBuffer();
		   newRule.append(writeRuleType(ruleName,priority));
		   newRule.append(writeWhenStoreRule(object,attribute,operator,values,flag));
		   newRule.append(writeThenStoreRule(actions));
		   System.out.println(newRule.toString());
		   return newRule.toString();
	   }

	   /*public String createSpecialRoute(String type, int priority, String[] object, String[] attribute, 
			   String[] operator, String[] values,String[] actions,String[] routes,String flag){
		   //System.out.println("here");
		   StringBuffer newRule = new StringBuffer();
		   newRule.append(writeRuleType(type,priority));
		   newRule.append(writeWhenSpecialRoute(object,attribute,operator,values,routes,flag));
		   newRule.append(writeThenSpecialRoute(actions,routes));
		   System.out.println(newRule.toString());
		   return newRule.toString();
	   }*/

	   public String createSpecialRoute(String ruleName,String type, int priority, String[] object, String[] attribute, 
			   String[] operator, String[] values,String[] actions,String routes,String flag){
		   StringBuffer newRule = new StringBuffer();
		   newRule.append(writeRuleType(ruleName,priority));
		   System.out.println("rule title"+newRule.toString());
		   newRule.append(writeWhenSpecialRoute(object,attribute,operator,values,routes,flag));
		   System.out.println("when"+newRule.toString());
		   newRule.append(writeThenSpecialRoute(actions,routes));
		  return newRule.toString();
	   }
	   
	   public String writeRuleType(String type, int priority){
		   StringBuffer tmp = new StringBuffer();
		   tmp.append("rule  \""+type+"\""+myReturn);
		   tmp.append(myTab+"salience "+priority+myReturn);
		   //need to add more statement such as no-loop true dialect "java", will decide later
		   return tmp.toString();

	   }

	   public String writeWhenThreshold(String[] splits, String[] splitAttribute, String[] splitOperator, 
			   String[] splitValue,String condition,String flag){

		   //split the object 
		   //System.out.println("1"+splits[0]+"1"+splits[1]+"2"+splits[2]);
		   //first product, special case it if the input is "all"
		   StringBuffer multiObject = new StringBuffer();
		   if (splits[0].equals("ALL")){
			   multiObject.append("");
		   }
		   else{
		   multiObject.append("&& (( sku.equals(\""+splits[0]+"\"))");

		   //combing all the other products
		  //sS System.out.println("splits.size: " + splits.length);
		   for (int i = 1; i < splits.length; i++){
			   multiObject.append("|| (sku.equals(\""+splits[i]+"\"))");
			   //System.out.println("add second product");
		   }
		   multiObject.append(")");
		   }

		   //split the attribute
		  // System.out.println("1"+splitsAttribute[0]+"1"+attribute[1]+"2"+attribute[2]);
		  //System.out.println("attribute legnth"+splitAttribute.length);

		   //split the operator

		   //split the value

		   //first operator (default)
		   StringBuffer multiAttribute = new StringBuffer();
		   multiAttribute.append("("+ splitAttribute[0]+mySpace+splitOperator[0]+mySpace+splitValue[0] +")");
		   //System.out.println("first operationmulti "+multiAttribute.toString());

		   //System.out.println("length is!!!"+splitAttribute.length+mySpace+splitOperator.length+mySpace+splitValue.length);
		   //combining all the other operations
		   for (int i = 1; i < splitAttribute.length; i++){
			   //System.out.println("round "+i);
			   //System.out.println(splitAttribute[i]);
			   //System.out.println(splitOperator[i]); 
			   //System.out.println(splitValue[i]);
			   multiAttribute.append(condition+"( "+ splitAttribute[i]+mySpace+splitOperator[i]+mySpace+splitValue[i] + ")");
			   //System.out.println("add second operations!!!"+multiAttribute.toString());
		   }

		   //appending the whole "when" part

		   StringBuffer tmp = new StringBuffer();
		   tmp.append(myTab+"when"+myReturn);
		   tmp.append(myTab+myTab+"$o : Order()"+myReturn);
		   tmp.append(myTab+myTab+"$i : Product( ("+ multiAttribute+")"+multiObject.toString()+"&& (flag.equals(\""+flag+
		   		"\")))"+myReturn);
		   //tmp.append(myTab+myTab+"$p : Purchase( customer == $c, $"+attribute.charAt(0)+" : product."+attribute+mySpace+operator+mySpace+values+" )");

		   return tmp.toString();
	   }


	   public String writeThenThreshold(String[] action){
			  StringBuffer tmp = new StringBuffer();
			  System.out.println(action[0]);
		      for (int i = 0; i < action.length; i++){
				   if (action[i].equalsIgnoreCase("miniumPackage"))
				   {
					   tmp.append(myTab+"then"+myReturn);
					   tmp.append(myTab+myTab+"Package p = new Package($o);"+myReturn);
					   tmp.append(myTab+myTab+"p.addProduct($i);"+myReturn);
					   tmp.append(myTab+myTab+"insert (p);"+myReturn);
					   tmp.append(myTab+myTab+"$i.minPackage();"+myReturn);
					   tmp.append(myTab+myTab+"retract($i);"+myReturn);
				   }
		      }
		      tmp.append("end"+myReturn+myReturn);
			  return tmp.toString();
		   }

	   public String writeWhenStoreRule(String[] splits, String[] splitAttribute, 
			   String[] splitOperator, String[] splitValue,String flag){

		   //first product, special case it if the input is "all"
		   StringBuffer multiObject = new StringBuffer();
		   if (splits[0].equals("ALL")){
			   multiObject.append(")");
		   }
		   else{
		   multiObject.append("(( sku.equals(\""+splits[0]+"\"))");

		   //combing all the other products
		   //System.out.println("splits.size: " + splits.length);
		   for (int i = 1; i < splits.length; i++){
			   multiObject.append("|| (sku.equals(\""+splits[i]+"\"))");

		   }


		   multiObject.append(")");
		   }
		   /*System.out.println("multi "+multiObject.toString());
		    split the attribute
		    System.out.println(attribute);
		    String[] splitAttribute= attribute.split(",");
		  	System.out.println("1"+splitsAttribute[0]+"1"+attribute[1]+"2"+attribute[2]);
		 	System.out.println("attribute legnth"+splitAttribute.length);
		   
		   split the operator
		   System.out.println(operator);
		   String[] splitOperator = operator.split(",");
		   
		   split the value
		   System.out.println(values);
		   String[] splitValue = values.split(",");
		   
		   first operator (default)*/
		   StringBuffer multiAttribute = new StringBuffer();
		   multiAttribute.append("("+ splitAttribute[0]+mySpace+splitOperator[0]+mySpace+splitValue[0] +")");

		   //combining all the other operations
		   for (int i = 1; i < splitAttribute.length; i++){
			   multiAttribute.append("|| ( "+ splitAttribute[i]+mySpace+splitOperator[i]+mySpace+splitValue[i] + ")");
			   }

		   //appending the whole "when" part

		   StringBuffer tmp = new StringBuffer();


		   tmp.append(myTab+"when"+myReturn);


		   tmp.append(myTab+myTab+"$item: Product( "+multiObject.toString()+"&& (flag.equals(\""+flag+" \")))"+myReturn);
		   tmp.append(myTab+myTab+"$store: Store()"+myReturn);
		   tmp.append(myTab+myTab+"eval(!$store.checkStore($item, "+"\""+splitAttribute[0]+"\","+"\""+splitOperator[0]+"\","+splitValue[0]+ "))"+myReturn);
			  for (int i = 1; i < splitAttribute.length; i++){
			   tmp.append(myTab+myTab+"eval(!$store.checkStore($item, "+"\""+splitAttribute[i]+"\","+"\""+splitOperator[i]+"\","+splitValue[i]+ "))"+myReturn);

		   }

		   //tmp.append(myTab+myTab+"$p : Purchase( customer == $c, $"+attribute.charAt(0)+" : product."+attribute+mySpace+operator+mySpace+values+" )");

		   return tmp.toString();
	   }


	   public String writeThenStoreRule(String[] action){
		   StringBuffer tmp = new StringBuffer();
		   tmp.append(myTab+"then"+myReturn);
		   tmp.append(myTab+myTab+"retract($store);"+myReturn);
		   tmp.append("end"+myReturn+myReturn);
		   return tmp.toString();
	   }

	  /* public String writeWhenSpecialRoute(String[] splits, String[] splitAttribute, 
			   String[] splitOperator,  String[] splitValue, String[] route,String flag){


		   //split the object 

		   //first product, special case it if the input is "all"
		   StringBuffer multiObject = new StringBuffer();
		   if (splits[0].equals("ALL")){
			   multiObject.append("");
		   }
		   else{
		   multiObject.append("&& (( productID.equals(\""+splits[0]+"\"))");

		   //combing all the other products

		   for (int i = 1; i < splits.length; i++){
			   multiObject.append("|| (productID.equals(\""+splits[i]+"\"))");

		   }
		   multiObject.append(")");
		   }





		   //first operator (default)
		   StringBuffer multiAttribute = new StringBuffer();
		   multiAttribute.append("("+ splitAttribute[0]+mySpace+splitOperator[0]+mySpace+splitValue[0] +")");
		   System.out.println("first operationmulti "+multiAttribute.toString());

		   //combining all the other operations
		   for (int i = 1; i < splitAttribute.length; i++){
			   multiAttribute.append("|| ( "+ splitAttribute[i]+mySpace+splitOperator[i]+mySpace+splitValue[i] + ")");
			   //System.out.println("add second operations!!!"+multiAttribute.toString());
		   }

		   //appending the whole "when" part

		   StringBuffer tmp = new StringBuffer();
		   tmp.append(myTab+"when"+myReturn);
		   tmp.append(myTab+myTab+"$order : Order()"+myReturn);
		   tmp.append(myTab+myTab+"$orderE : OrderE()"+myReturn);
		   
		    
		   tmp.append(myTab+myTab+"$product : Product($id: prodId, sku.equals(\""+splits[0]+"\"))"+myReturn);
		   tmp.append(myTab+myTab+"eval ($orderE.getProductQty($id) >" + splitAttribute[0]+"))"+myReturn);
		   tmp.append(myTab+myTab+"$s : Store( storeId == "+route[0]+")"+myReturn);
		   tmp.append("eval(InventoryDAO.getInstance().checkProduct($s, $product, \""+splitOperator[0]+"\", $orderE.getProductQty($id)))"+myReturn);
		   
			
		   //tmp.append(myTab+myTab+"$i : Product( ("+ multiAttribute+")"+multiObject.toString()+
		   		//"from $o.getProducts()"+myReturn);
		   //tmp.append(myTab+myTab+"$p : Purchase( customer == $c, $"+attribute.charAt(0)+" : product."+attribute+mySpace+operator+mySpace+values+" )");

		   return tmp.toString();
	   }

	   //add action
	   public String writeThenSpecialRoute(String[] action, String[] route){
		   StringBuffer tmp = new StringBuffer();

		   tmp.append(myTab+"then"+myReturn);
		   tmp.append(myTab+myTab+"System.out.println(\"special routes for product \"+product.prod_name+\" " +
		   		"with quantity \"+$orderE.getProductQty($id)+\" is successfully allocated\");"+myReturn);
		   tmp.append(myTab+myTab+"PackageE p = new PackageE($order);"+myReturn);
		   tmp.append(myTab+myTab+"p.addProduct($product);"+myReturn);
		   tmp.append(myTab+myTab+"insert (p);"+myReturn);
		   tmp.append(myTab+myTab+"p.setAllocated(true); "+myReturn);
		   tmp.append(myTab+myTab+"retract($product);"+myReturn);
		   //add this "product/quantity", store into a new parcel result.
		   //add this parcel result into a new package result
		   tmp.append("end"+myReturn+myReturn);
		   return tmp.toString();
	   }*/
	   
	   public String writeWhenSpecialRoute(String[] splits, String[] splitAttribute, String[] splitOperator, 
			   String[] splitValue, String route,String flag){
		   
		   //split the object 
		  System.out.println("haha");
		  
		   
		  /* 
		   System.out.println("haha2");
		   System.out.println("sku "+splits[0]);
		   System.out.println("opeator "+splitOperator[0]);
		   System.out.println("value "+splitValue[0]);
		   System.out.println("route "+route);
		   //first operator (default)
		   */
		   //appending the who "when" part


		   StringBuffer tmp = new StringBuffer();
		   tmp.append(myTab+"when"+myReturn);
		   tmp.append(myTab+myTab+"$order : Orders()"+myReturn);
		   tmp.append(myTab+myTab+"$orderE : OrderE()"+myReturn);
		   
		     /*tmp.append(myTab+myTab+"$i : Product( ("+ multiAttribute+")"+multiObject.toString()+"&& (flag.equals(\""+flag+
			   		"\")))"+myReturn);
			multiple stores 
			*/
		   tmp.append(myTab+myTab+"$product : Product($id: prodId, sku.equals(\""+splits[0]+"\"))"+myReturn);
		   tmp.append(myTab+myTab+"eval ($orderE.getProductQty($id)"+splitOperator[0]+ splitValue[0]+")"+myReturn);
		   tmp.append(myTab+myTab+"$s : Store( storeId == "+route+")"+myReturn);
		   tmp.append(myTab+myTab+"eval(InventoryDAO.getInstance().checkProduct($s, $product, \""+splitOperator[0]+"\", $orderE.getProductQty($id)))"+myReturn);
		    
		   //tmp.append(myTab+myTab+"$i : Product( ("+ multiAttribute+")"+multiObject.toString()+
		   		//"from $o.getProducts()"+myReturn);
		   //tmp.append(myTab+myTab+"$p : Purchase( customer == $c, $"+attribute.charAt(0)+" : product."+attribute+mySpace+operator+mySpace+values+" )");
		   return tmp.toString();
	   }
	   
	   //add action
	   public String writeThenSpecialRoute(String[] action, String route){
		   StringBuffer tmp = new StringBuffer();
		   
		   tmp.append(myTab+"then"+myReturn);
		   tmp.append(myTab+myTab+"System.out.println(\"special routes for product \"+$product.getProdName()+\" " +
		   		"with quantity \"+$orderE.getProductQty($id)+\" is successfully allocated\");"+myReturn);
		   tmp.append(myTab+myTab+"PackageE p = new PackageE($order);"+myReturn);
		   tmp.append(myTab+myTab+"p.addProduct($product);"+myReturn);
		   tmp.append(myTab+myTab+"insert (p);"+myReturn);
		   tmp.append(myTab+myTab+"p.setAllocated(true); "+myReturn);
		   tmp.append(myTab+myTab+"retract($product);"+myReturn);
		   //add this "product/quantity", store into a new parcel result.
		   //add this parcel result into a new package result
		   tmp.append("end"+myReturn+myReturn);
		   return tmp.toString();
	   }


	   public void reRank (int rank){
		   if (ruleFiles[3] == null){
			   System.out.println("cao111");
		   }

		   System.out.println("shifting!!!!  "+rank);
		   Rule tmp = ruleFiles[rank];
		   Rule tmp2 = new Rule();
		   System.out.println("Start insertion at " +rank);
		   System.out.println("Shifting rule"+ruleFiles[rank].getRuleDescr());
		   System.out.println("Re-Ranking ......Done");
		   System.out.println("----------------------------------------------------------");
		   while (ruleFiles[rank+1] != null){
			   System.out.println("getting!!!!! "+rank);
			   tmp2 = ruleFiles[rank+1];
			   ruleFiles[rank+1] =tmp;
			   ruleFiles[rank+1].setPriority(ruleFiles[rank+1].getPriority()-2);
			   tmp = tmp2;
			   //System.out.println("round 1 "+"rank  ="+rank+"tmp = "+ tmp.getDescription()
					  // +"rule[rank]"+ruleFile[rank].getDescription()+
					   //"rule[rank+1]  "+ruleFile[rank+1].getDescription());
			  // ruleFile[rank+1].setPriority(ruleFile[rank+1].getPriority()-2);

			   rank ++;
			   if (ruleFiles[rank+1] == null){
				   System.out.println("fsajfldskafj");
			   }

		   }
		   ruleFiles[rank+1]=tmp;
		   ruleFiles[rank+1].setPriority(ruleFiles[rank+1].getPriority()-2);
		   //System.out.println("last index is "+(rank+1));
	   }

	   public void checkFlag(String type, String[] objects, String flag){
			  String[] flagLevel = flag.split("-");
			  char flagTemp = flagLevel[1].charAt(0);
			  System.out.println("product length"+product.length);
			  for (int j = 0; j < objects.length;j++)
			  {
				  for (int i = 0; i < product.length;i++)
				  {


					  if (product[i].getSku().equalsIgnoreCase(objects[j]))
					  {
						  System.out.println("checking product "+product[i].getProdId());
						  String[] splitFlag = product[i].getFlag().split(",");
						  String flagTmp = null;
						  if (type.equalsIgnoreCase("Threshold")){
							  flagTmp = splitFlag[0];
						  }
						  else if (type.equalsIgnoreCase("Store Filter")){
							  flagTmp = splitFlag[1];
						  }
						  else{
							  flagTmp = splitFlag[2];
						  }
						  flagLevel = flagTmp.split("-");
						  System.out.println("inserting flag is "+flag);
						  System.out.println("old flag is for product "+product[i].getProdId()+" is "+product[i].getFlag());
						  if ((flagLevel[1].charAt(0) - flagTemp) < 0){

							  StringBuffer newFlag = new StringBuffer();
							  if (type.equalsIgnoreCase("Threshold")){
								  newFlag.append(flag);
								  newFlag.append(","+splitFlag[1]);
								  newFlag.append(","+splitFlag[2]);
								  product[i].setFlag(newFlag.toString());

							  }
							  else if (type.equalsIgnoreCase("Store Filter")){

								  newFlag.append(splitFlag[0]);
								  newFlag.append(","+flag);
								  newFlag.append(","+splitFlag[2]);
								  product[i].setFlag(newFlag.toString());
							  }
							  else
							  {

								  newFlag.append(splitFlag[0]);
								  newFlag.append(","+splitFlag[1]);
								  newFlag.append(","+flag);
								  product[i].setFlag(newFlag.toString());
							  }
							  System.out.println("new Flag is "+newFlag.toString());
							  System.out.println();
						  }

					  }

				  }

			  }
		   }

}
