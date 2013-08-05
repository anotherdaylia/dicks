package com.dicks.engine;

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

import com.dicks.pojo.Product;



public class SmallTest {

	public static void main(String[] args) {
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
		
		Product shoes = new Product();
		shoes.setProdName("shoes");
		shoes.setFactoryPrice(50);
		shoes.setWeight(10);
		shoes.setWidth(2.0);
		Product hat = new Product();
		hat.setProdName("hat");
		hat.setFactoryPrice(10);
		hat.setWeight(4);
		hat.setWidth(2.0);
		Product shirt = new Product();
		shirt.setProdName("shirt");
		shirt.setFactoryPrice(20);
		shirt.setWeight(8);
		shirt.setWidth(5.0);
		//Product shirts = new Product(5, "hahahah", 20 , 8 ,5);

		shoes.setProdId(1);
		shoes.setProdName("shoes");
		
		Store s1 = new Store(1,2);
		Store s2 = new Store(2,4);
		Store s3 = new Store(3,5);
		Store s4 = new Store(4,6);
		Store s5 = new Store(5,8);
	
		Orders order = new Orders(2);
		order.addProducts(shoes, 1);
		order.addProducts(hat, 1);
		order.addProducts(shirt, 1);	
		
//		Orders order = new Order(2);
		//dao get product with productID
		//not dao , add product to order

		//order.addProducts(shirts,1);
		
		ksession.insert(s1);
		ksession.insert(s2);
		ksession.insert(s3);
		ksession.insert(s4);
		ksession.insert(s5);
		ksession.insert(order);

		ksession.fireAllRules();
		
		Collection<Package> packages = (Collection<Package>) ksession.getObjects( new ClassObjectFilter(Package.class) );
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
	
}
