
package com.sample;

import java.io.*;

public class createRuleJsp {

	

	
	   public static void main (String[] args) throws IOException {
		 String type ="threshold";
		 String[] product = new String[3];
		 product[0] ="abc123";
		 product[1] = "def234";
		 product[2] ="ghi456";
		 String[] attribute = new String[2];
		 attribute[0] = "weight";
		 attribute[1] ="size";
		 String[] operator = new String[2];
		 operator[0] = ">";
		 operator[1]= "<";
		 String value[] = new String[2];
		 value[0] = "5";
		 value[1] ="3";
		 String action = new String();
		 action = "minPackage";
		 
		 ThresTemplate test= new ThresTemplate(type,product,attribute,operator,value,action);
	   }
}