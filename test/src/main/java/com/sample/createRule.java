
package src.main.java.com.sample;

import java.io.*;

public class createRule {

	public static String ruleType = new String();
    public static StringBuffer objectTypeBuffer = new StringBuffer();
    public static String objectType = new String();
    public static String operator = new String();
    public static String actions = new String();
    public static String values = new String();
    public static String attribute = new String();
    public static int ruleCount = 0;
    public static String myTab ="    ";
    public static String myReturn = "\n";
    public static String mySpace = " ";
    public static StringBuffer attributeBuffer = new StringBuffer();
    public static StringBuffer operatorBuffer = new StringBuffer();
    public static StringBuffer valueBuffer = new StringBuffer();

	
	   public static void main (String[] args) throws IOException {

	      //  prompt the user to enter their name
	      
	     
	      
	      

	      //  open up standard input
	      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

	      String input = null;

	      
	      //read rule type till get the correct one
	      do{
	    	  System.out.print("Enter your type of the rule you want to create (threshold, special route): ");
	    	  input = br.readLine();
	      }
	      while (!input.equalsIgnoreCase("threshold"));
	      ruleType = input;
	      System.out.println("Thanks for the type, " + ruleType);
	      
	      
	      do{
	    	  System.out.print("Enter the object you want to put your rules on (store, product) ");
	    	  input = br.readLine();
	      }
	      while (!input.equalsIgnoreCase("product"));
	      objectTypeBuffer.append("product");
	      if (input.equalsIgnoreCase("product")){
	    	  System.out.print("please type SKU of the product to apply the rule ");
	    	  input = br.readLine();
	    	  
	    	  if (input.equalsIgnoreCase("all")){
	    		  objectTypeBuffer.append(",ALL");
	    	  }
	    	  else{ 
	    	  
		    	  do {
		    		  objectTypeBuffer.append(","+input);
		    		  System.out.print("type SKU to add more or NEXT to continue");
		    		  
			    	  input = br.readLine();
			    	  
		    	  }
		    	  while (!input.equalsIgnoreCase("next"));
	    	}
	    	  

	      }
	      
	      System.out.print("Enter the attribute of the product to apply the rule ");
	      input = br.readLine();
	      attributeBuffer.append(input);
	      
	      do{
	    	  System.out.print("Enter the operator to set the condition of the rule (>,<,=)");
	    	  input = br.readLine();
	      }
	      while (!((input.equalsIgnoreCase(">"))||(input.equalsIgnoreCase("<"))||(input.equalsIgnoreCase("="))));
	      //operator = input;
	      operatorBuffer.append(input);
	      //first attribute and operator
	      System.out.print("Enter the value associate with the operation ");
	      input = br.readLine();
	      valueBuffer.append( input) ;
	      
	      System.out.print("Enter new attribute of the product to apply the rule or next to to set actions");
	      input = br.readLine();
	      while (!(input.equals("next"))) {
	    	  
		      attributeBuffer.append(","+input);
		      
		      do{
		    	  System.out.print("Enter the operator to set the condition of the rule (>,<,=)");
		    	  input = br.readLine();
		      }
		      while (!((input.equalsIgnoreCase(">"))||(input.equalsIgnoreCase("<"))||(input.equalsIgnoreCase("="))));
		      //operator = input;
		      operatorBuffer.append(","+input);
		      
		      System.out.print("Enter the value associate with the operation ");
		      input = br.readLine();
		      valueBuffer.append(","+input) ;
		      
		      
		      System.out.print("Enter the attribute of the product to apply the rule ");
		      input = br.readLine();
		      
    	  }
    	  
	      
	      
	      
	      
	      System.out.print("Enter the action you want to do");
	      input = br.readLine();
	      actions = input;
	      
	      
	      
	      System.out.println("thank you for your input, are you trying to make a rule of type of\n "+ ruleType+ "which will do action: "
	      +actions+" when the value of object "+ objectTypeBuffer.toString() + " is "+ operator + values);
	      
	     writeDrl(ruleType, objectTypeBuffer.toString(),attributeBuffer.toString(), operatorBuffer.toString()
	    		 ,valueBuffer.toString(),actions);
	} 	
	   public static void writeDrl(String type, String object, String attribute, 
			   String operator, String values, String actions ){
		   StringBuffer newRule = new StringBuffer();
		   newRule.append(writeRuleType(type));
		   newRule.append(writeWhen(object,attribute,operator,values));
		   newRule.append(writeThen(actions));
		   System.out.println(newRule.toString());
		   
		   
	   }
	   
	   public static String writeRuleType(String type){
		   StringBuffer tmp = new StringBuffer();
		   tmp.append("rule  \"Mininum Package"+type+ruleCount+"\""+myReturn);
		  
		   //need to add more statement such as no-loop true dialect "java", will decide later
		   
		   return tmp.toString();
		   
	   }
	   
	   public static String writeWhen(String object, String attribute, String operator, String values){
		   System.out.println("attribute!!!!"+attribute);
		   
		   //split the object 
		   System.out.println(object);
		   String[] splits = object.split(",");
		   //System.out.println("1"+splits[0]+"1"+splits[1]+"2"+splits[2]);
		   //first product, special case it if the input is "all"
		   StringBuffer multiObject = new StringBuffer();
		   if (splits[1].equals("ALL")){
			   multiObject.append("");
		   }
		   else{
		   multiObject.append("&& (( productID == "+splits[1]+" )");
		   
		   //combing all the other products
		   System.out.println("splits.size: " + splits.length);
		   for (int i = 2; i < splits.length; i++){
			   multiObject.append("|| (productID == "+splits[i]+" )");
			   System.out.println("add second product");
		   }
		   multiObject.append("))");
		   }
		   
		   //split the attribute
		   System.out.println(attribute);
		   String[] splitAttribute= attribute.split(",");
		  // System.out.println("1"+splitsAttribute[0]+"1"+attribute[1]+"2"+attribute[2]);
		  System.out.println("attribute legnth"+splitAttribute.length);
		   
		   //split the operator
		   System.out.println(operator);
		   String[] splitOperator = operator.split(",");
		   
		   //split the value
		   System.out.println(values);
		   String[] splitValue = values.split(",");
		   
		   //first operator (default)
		   StringBuffer multiAttribute = new StringBuffer();
		   multiAttribute.append("("+ splitAttribute[0]+mySpace+splitOperator[0]+mySpace+splitValue[0] +")");
		   System.out.println("first operationmulti "+multiAttribute.toString());
		   
		   System.out.println("length is!!!"+splitAttribute.length+mySpace+splitOperator.length+mySpace+splitValue.length);
		   //combining all the other operations
		   for (int i = 1; i < splitAttribute.length; i++){
			   System.out.println("round "+i);
			   System.out.println(splitAttribute[i]);
			   System.out.println(splitOperator[i]); 
			   System.out.println(splitValue[i]);
			   multiAttribute.append("|| ( "+ splitAttribute[i]+mySpace+splitOperator[i]+mySpace+splitValue[i] + ")");
			   System.out.println("add second operations!!!"+multiAttribute.toString());
		   }
		   
		   //appending the whole "when" part

		   StringBuffer tmp = new StringBuffer();
		   tmp.append(myTab+"when"+myReturn);
		   tmp.append(myTab+myTab+"$o : Order()"+myReturn);
		   tmp.append(myTab+myTab+"$i : Product( ("+ multiAttribute+")"+multiObject.toString()+
		   		"from $o.getProducts()"+myReturn);
		   //tmp.append(myTab+myTab+"$p : Purchase( customer == $c, $"+attribute.charAt(0)+" : product."+attribute+mySpace+operator+mySpace+values+" )");
		   
		   
		   
		   
		   
		  
		   
		   return tmp.toString();
	   }
	   
	   public static String writeThen(String action){
		   StringBuffer tmp = new StringBuffer();
		   tmp.append(myTab+"then"+myReturn);
		   tmp.append(myTab+myTab+"$i.minPackage();"+myReturn);
		   tmp.append("end");
		   return tmp.toString();
	   }
}


