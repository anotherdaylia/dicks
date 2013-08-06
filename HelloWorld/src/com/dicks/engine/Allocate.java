package com.dicks.engine;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;


import javax.print.DocFlavor.URL;
import java.util.Arrays;
import java.util.Collection;

import org.kie.api.io.ResourceType;
import org.kie.api.runtime.ClassObjectFilter;
import org.kie.internal.KnowledgeBase;
import org.kie.internal.KnowledgeBaseFactory;
import org.kie.internal.builder.KnowledgeBuilder;
import org.kie.internal.builder.KnowledgeBuilderFactory;
import org.kie.internal.definition.KnowledgePackage;
import org.kie.internal.io.ResourceFactory;
import org.kie.internal.logger.KnowledgeRuntimeLogger;
import org.kie.internal.logger.KnowledgeRuntimeLoggerFactory;
import org.kie.internal.runtime.StatefulKnowledgeSession;

import com.dicks.dao.OrdersDAO;
import com.dicks.dao.StoreDAO;
import com.dicks.pojo.Product;
import com.dicks.pojo.Orders;
import com.dicks.pojo.Store;


public class Allocate {
    public String myTab ="    ";
    public String myReturn = "\n";
    public String mySpace = " ";
    public int ruleCount = 0;
    public static String[] rules = new String[10];
    public static Rule[] ruleFile = new Rule[100];
    public static int ruleInt;
    
    
    public static Product[] product = new Product[5];
    
    
    
	public Allocate  (String[] sku, String[] quantity, String shippingType, String shippingAddress, String shippingZipcode){
		System.out.println("product "+sku[0]);
		System.out.println("quantity "+quantity[0]);
		System.out.println("shipping type "+shippingType);
		System.out.println("shipping address "+shippingAddress);
		System.out.println("shipping zip "+ shippingZipcode);
		final KnowledgeBuilder kbuilder = KnowledgeBuilderFactory.newKnowledgeBuilder();

		// this will parse and compile in one step

		kbuilder.add(ResourceFactory.newClassPathResource("com/dicks/rules/newRule_LY.drl",

				SmallTest.class), ResourceType.DRL);


		// Check the builder for errors

		if (kbuilder.hasErrors()) {

			System.out.println(kbuilder.getErrors().toString());

			throw new RuntimeException("Unable to compile \"newRule_joe.drl\".");

		}


		// get the compiled packages (which are serializable)

		final Collection<KnowledgePackage> pkgs = kbuilder.getKnowledgePackages();


		// add the packages to a KnowledgeBase (deploy the knowledge packages).

		final KnowledgeBase kbase = KnowledgeBaseFactory.newKnowledgeBase();

		kbase.addKnowledgePackages(pkgs);


		final StatefulKnowledgeSession ksession = kbase.newStatefulKnowledgeSession();
		// setup the audit logging
		// Remove comment to use FileLogger
		KnowledgeRuntimeLogger logger = KnowledgeRuntimeLoggerFactory.newFileLogger( ksession, "./smallTest" );

		// Remove comment to use ThreadedFileLogger so audit view reflects events whilst debugging
		//KnowledgeRuntimeLogger logger = KnowledgeRuntimeLoggerFactory.newThreadedFileLogger( ksession, "./helloworld", 1000 );
		
//		Product shoes = new Product();
//		shoes.setProdName("shoes");
//		shoes.setFactoryPrice(50);
//		shoes.setWeight(10);
//		shoes.setWidth(2.0);
//		Product hat = new Product();
//		hat.setProdName("hat");
//		hat.setFactoryPrice(10);
//		hat.setWeight(4);
//		hat.setWidth(2.0);
//		Product shirt = new Product();
//		shirt.setProdName("shirt");
//		shirt.setFactoryPrice(20);
//		shirt.setWeight(8);
//		shirt.setWidth(5.0);
		//get all product[] from skulist(String[])
		//get all stores from dao
//		Store s1 = new Store(1,2);
//		Store s2 = new Store(2,4);
//		Store s3 = new Store(3,5);
//		Store s4 = new Store(4,6);
//		Store s5 = new Store(5,8);
//	
//		
//		int q1 = Integer.parseInt(quantity[0]);
//		int q2 = Integer.parseInt(quantity[1]);
//		
//		
//		Orders order = new Orders(2);
//		order.addProducts(shoes, 1);
//		order.addProducts(hat, 2);
//		order.addProducts(shirt, 3);
	
		Store s1 = null;
		Store s2 = null;
		Store s3 = null;
		Store s4 = null;
		Store s5 = null;
		try {
			s1 = StoreDAO.getInstance().getById(1);
			s2 = StoreDAO.getInstance().getById(2);
			s3 = StoreDAO.getInstance().getById(3);
			s4 = StoreDAO.getInstance().getById(4);
			s5 = StoreDAO.getInstance().getById(6);
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

	
		Orders order = null;
		try {
			order = OrdersDAO.getInstance().getById(3);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		
		ksession.insert(s1);
		ksession.insert(s2);
		ksession.insert(s3);
		ksession.insert(s4);
		ksession.insert(s5);
		ksession.insert(order);

		ksession.fireAllRules();
		
		Collection<PackageE> packages = (Collection<PackageE>) ksession.getObjects( new ClassObjectFilter(PackageE.class) );
		Collection<Store> stores = (Collection<Store>) ksession.getObjects( new ClassObjectFilter(Store.class) );

		System.out.println("---------------------------------");
		System.out.println("package size: " + packages.size());
		System.out.println(Arrays.toString(packages.toArray()));
		System.out.println("store list: " + stores.size());
		System.out.println(Arrays.toString(stores.toArray()));
			
		System.out.println("end");
		
		// Remove comment if using logging
		logger.close();

		ksession.dispose();

	}
	
	private static void setUpProduct(Product p, String name, double price) {
		/*p.setPrice(price);
		p.setProductName(name);*/
	}
}
