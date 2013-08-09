package com.dicks.engine;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;


import javax.print.DocFlavor.URL;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;

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

import com.dicks.dao.CustomerDAO;
import com.dicks.dao.OrderDetailDAO;
import com.dicks.dao.OrdersDAO;
import com.dicks.dao.ProductDAO;
import com.dicks.dao.StoreDAO;
import com.dicks.pojo.Customer;
import com.dicks.pojo.OrderDetail;
import com.dicks.pojo.OrderDetailId;
import com.dicks.pojo.Product;
import com.dicks.pojo.Orders;
import com.dicks.pojo.Store;
import com.dicks.pojo.Rule;
import java.sql.Timestamp;

public class Allocate {
    public String myTab ="    ";
    public String myReturn = "\n";
    public String mySpace = " ";
    public int ruleCount = 0;
    public static String[] rules = new String[10];
    public static Rule[] ruleFile = new Rule[100];
    public static int ruleInt;
    
    
    public static Product[] product = new Product[5]; 
    
	public Allocate  (String[] skus, String[] quantities, String shippingType, String shippingAddress, String shippingZipcode) throws Exception{
		System.out.println("product "+skus[0]);
		System.out.println("quantity "+quantities[0]);
		System.out.println("shipping type "+shippingType);
		System.out.println("shipping address "+shippingAddress);
		System.out.println("shipping zip "+ shippingZipcode);
		
		Customer customer = CustomerDAO.getInstance().getById(1);
		
		Orders order = new Orders(customer, 100, "g", new Timestamp(new Date().getTime()), 
									shippingAddress, shippingZipcode, "412-622-3748", "");
		
		OrdersDAO.getInstance().createOrder(order);
		
		Product[] products = ProductDAO.getInstance().getProductsBySKUList(skus);
		System.out.println(products.length);
		
		for (int i = 0; i < products.length; i++) {
			Product product = products[i];
			Integer qty = Integer.parseInt(quantities[i]);
			System.out.println("qty: " + qty);
			OrderDetail detail = new OrderDetail(new OrderDetailId(order.getOrderId(), product.getProdId()), 
					                               product, order, product.getFactoryPrice() + 1000, qty);
			OrderDetailDAO.getInstance().createOrderDetail(detail);
		}	
		
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

		ArrayList<Store> stores = null;
		try {
			stores = StoreDAO.getInstance().getAllStores();
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		OrderE orderE = new OrderE(order);
		
		if (stores != null) {
			for (Store store : stores) {
				ksession.insert(store);
			}
		}
		
		ksession.insert(order);
		ksession.insert(orderE);
		ksession.fireAllRules();

		Collection<PackageE> packages = (Collection<PackageE>) ksession.getObjects( new ClassObjectFilter(PackageE.class) );
		Collection<Store> leftStores = (Collection<Store>) ksession.getObjects( new ClassObjectFilter(Store.class) );

		System.out.println("---------------------------------");
		System.out.println("package size: " + packages.size());
		System.out.println(Arrays.toString(packages.toArray()));
		System.out.println("store list: " + leftStores.size());
		System.out.println(Arrays.toString(leftStores.toArray()));

		System.out.println("end");

		// Remove comment if using logging
		logger.close();

		ksession.dispose();
		
		Split split = new Split(packages, leftStores);

	}

	private static void setUpProduct(Product p, String name, double price) {
		/*p.setPrice(price);
		p.setProductName(name);*/
	}
}