package com.dicks.engine;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.LinkedList;

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

import com.dicks.pojo.Orders;
import com.dicks.dao.InventoryDAO;
import com.dicks.dao.OrdersDAO;
import com.dicks.dao.ProductDAO;
import com.dicks.dao.StoreDAO;
import com.dicks.engine.PackageTest;
import com.dicks.engine.PackageTestResult;
import com.dicks.engine.Parcel;
import com.dicks.pojo.Product;
import com.dicks.engine.PackageE;
import com.dicks.pojo.Store;
import com.dicks.engine.Util;

public class Split {
	public static void main(String[] args) {	
				
//		ArrayList<PackageTestResult> results = getTestResult(p1, order);
//		
//		for (PackageTestResult r : results) {
//			System.out.println(r);
//		}		
	}
	
	public Split(Collection<PackageE> packages, Collection<Store> stores) {
//		Store s1 = null;
//		Store s2 = null;
//		Store s3 = null;
//		Store s4 = null;
//		Store s5 = null;
//		
//		Product shoes = null;
//		Product shirt = null;
//		Product hat = null;
//		try {
//			s1 = StoreDAO.getInstance().getById(1);
//			s2 = StoreDAO.getInstance().getById(2);
//			s3 = StoreDAO.getInstance().getById(3);
//			s4 = StoreDAO.getInstance().getById(4);
//			s5 = StoreDAO.getInstance().getById(6);
//			
//			ProductDAO productDAO = ProductDAO.getInstance();
//			shoes = productDAO.getById(5);
//			shirt = productDAO.getById(7);
//			hat = productDAO.getById(6);
//		} catch (Exception e1) {
//			// TODO Auto-generated catch block
//			e1.printStackTrace();
//		}
//	
//		Orders order = null;
//		try {
//			order = OrdersDAO.getInstance().getById(3);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}	
//		
		SplitGenerater.cache(10);
		SplitGenerater.buildIndex(10);
		
		final KnowledgeBuilder kbuilder = KnowledgeBuilderFactory.newKnowledgeBuilder();
		
		kbuilder.add(ResourceFactory.newClassPathResource("com/dicks/rules/evaluate.drl",

				Split.class), ResourceType.DRL);

		// Check the builder for errors
		if (kbuilder.hasErrors()) {
			System.out.println(kbuilder.getErrors().toString());
			throw new RuntimeException("Unable to compile \"evaluate.drl\".");
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

		for (PackageE pack : packages) {
			ksession.insert(pack);
		}
		
		for (Store store : stores) {
			ksession.insert(store);
		}
		
		System.out.println("----------------------");
		
		ksession.fireAllRules();
		
		// Remove comment if using logging
		logger.close();

		ksession.dispose();
	}
	
	public static ArrayList<PackageTest> getTests(PackageE pack) {
		Product[] products = pack.getProducts().toArray(new Product[pack.getProducts().size()]);
		Combination[][] matrix = setUpMatrix(products);
		System.out.println("split num: " + pack.getSplitNum());
		for (int i = 1; i < pack.getSplitNum() + 1; i++) {
//			System.out.println("i: " + i);
			printCombinations(products.length, i + 1, products, matrix);
		}
		
		Combination c = matrix[products.length - 1][pack.getSplitNum()];
//		System.out.println("i: " + (products.length - 1) + ", j: " + pack.getSplitNum());
		ArrayList<Bag> list = c.list;
		
		ArrayList<PackageTest> packageTests = new ArrayList<PackageTest>();
		
		for (int i = 0; i < list.size(); i++) {
			PackageTest packageTest = new PackageTest(pack);
			Bag bag = list.get(i);
			ArrayList<ArrayList<Product>> allocations = bag.list;
			
			for (int j = 0; j < allocations.size(); j++) {
				Parcel parcel = new Parcel(pack);
				for (Product product : allocations.get(j)) {
					parcel.addProduct(product);
				}
				packageTest.addParcel(parcel);
			}
			packageTests.add(packageTest);
//			System.out.println(packageTest);
		}		
		return packageTests;
	}
	
	public static PackageTestResult getTestResult(final Orders order, Parcel test, ArrayList<Store> stores) throws Exception {
		ArrayList<Store> testStores = new ArrayList<Store>();
		for (int j = 0; j < stores.size(); j++) {
			Store s = stores.get(j);
			if (InventoryDAO.getInstance().containAllroductsParcel(s, test)) {
				testStores.add(s);
			} else {
				System.out.println("filter out: " + s.getStoreId());
			}
		}
		
		if (testStores.size() == 0) return null;
				
		// possible problem
		PackageTestResult r = new PackageTestResult(test);
		Collections.sort(testStores, new Comparator<Store>() {
			@Override
			public int compare(Store arg0, Store arg1) {
				return (int) (Util.getShippingCosts() 
								- Util.getShippingCosts()); 
			}
			
		});
		
		System.out.println("stores: " + Arrays.toString(stores.toArray()));
		
		Store source = testStores.get(0);
		//System.out.println("source: " + source.getZoneID());
		r.setSource(source);
		r.setCost(Util.getShippingCosts());
		return r;
	}
	
	public static Combination[][] setUpMatrix(Product[] a) {
		Combination[][] matrix = new Combination[a.length][a.length];
		matrix[0][0] = new Combination();
		Bag origin = new Bag();
		origin.addToBag(a[0], 0);
		matrix[0][0].list.add(origin);
		//System.out.println(matrix[0][0]);
		
		for (int i = 1; i < a.length; i++) {
			//System.out.println(i);
			Combination c = new Combination();
			Bag b = new Bag();
			b.copyBag(matrix[i - 1][0].list.get(0));
			b.addToBag(a[i], 0);
			c.list.add(b);
			matrix[i][0] = c;
		}
		
		for (int i = 1; i < a.length; i++) {
			Combination c = new Combination();
			Bag b = new Bag();
			//System.out.println(i);
			b.copyBag(matrix[i - 1][i - 1].list.get(0));
			b.addToBag(a[i], i);
			c.list.add(b);
			matrix[i][i] = c;
		}
		return matrix;
	}
	
	public static void printCombinations(int n, int m, Product[] a, Combination[][] matrix) {
		if (m == 1) {
			return;
		}	
//		System.out.println("m: " + m + ", n: " + n);		
		for (int i = m; i < n; i++) {
			//System.out.println("i : " + i);
			Combination c = new Combination();	
			c.addNewItem(a[i], matrix[i-1][m-2], matrix[i-1][m-1]);
			matrix[i][m-1] = c;
		}
	
		System.out.println();
		printMatrix(matrix);
	}
	
	
	public static void printMatrix(Combination[][] matrix) {
		for (int i = 0; i < matrix.length; i++) {
			for (int j = 0; j < matrix[0].length; j++) {
				System.out.print((matrix[i][j]==null? 0 : matrix[i][j].list.size()) + ", ");
			}
			System.out.println();
		}
	}
	
	public static class Combination {
		ArrayList<Bag> list = new ArrayList<Bag>();
	
		public void addNewItem(Product item, Combination c1, Combination c2) {
			for (int i = 0; i < c1.list.size(); i++) {
				Bag b = new Bag();
				b.addNewItemAsPackage(item, c1.list.get(i));
				list.add(b);
			}
			
			for (int i = 0; i < c2.list.size(); i++) {
				Bag from = c2.list.get(i);
				for (int j = 0; j < from.list.size(); j++) {
					Bag b = new Bag();
					b.addNewItemTo(item, from, j);
					list.add(b);
				}
			}
		}		
		
		@Override
		public String toString() {
			return Arrays.toString(list.toArray());
		}
	}
	
	public static class Bag {
		ArrayList<ArrayList<Product>> list = new ArrayList<ArrayList<Product>>();
	
		public void copyBag(Bag bag) {
			ArrayList<ArrayList<Product>> from = bag.list;
			for (int i = 0; i < from.size(); i++) {
				ArrayList<Product> sub = new ArrayList<Product>();
				sub.addAll(from.get(i));
				list.add(sub);
			}
		}
		
		public void addNewItemAsPackage(Product item, Bag bag) {
			ArrayList<ArrayList<Product>> from = bag.list;
			list = new ArrayList<ArrayList<Product>>();
			for (int i = 0; i < from.size(); i++) {
				ArrayList<Product> sub = new ArrayList<Product>();
				sub.addAll(from.get(i));
				list.add(sub);
			}
			ArrayList<Product> newItem = new ArrayList<Product>();
			newItem.add(item);
			list.add(newItem);
		}		
		
		public void addNewItemTo(Product item, Bag bag, int index) {
			ArrayList<ArrayList<Product>> from = bag.list;
			list = new ArrayList<ArrayList<Product>>();
			for (int i = 0; i < from.size(); i++) {
				ArrayList<Product> sub = new ArrayList<Product>();
				sub.addAll(from.get(i));
				list.add(sub);
			}
			list.get(index).add(item);
		}
		
		public void addToBag(Product item, int bag) {
			if (list.size() <= bag) {
				ArrayList<Product> newBag = new ArrayList<Product>();
				newBag.add(item);
				list.add(newBag);
				//System.out.println("in create");
			} else {
				list.get(bag).add(item);
			}			
		}
		
		@Override
		public String toString() {
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < list.size(); i++) {
				ArrayList<Product> sub = list.get(i);
				for (int j = 0; j < sub.size(); j++) {
					sb.append(sub.get(j));
					if (j != sub.size() - 1) {
						sb.append(", ");
					}
				}
				if (i != list.size() - 1) sb.append(" / ");
			}
			return sb.toString();
		}
	}

	// File
//  try {
//		for (int i = 0; i < a.length; i++) {
//			BufferedWriter out = new BufferedWriter(new FileWriter("file" + i + ".txt"));
//          for (int j = 0; j < a.length; j++) {
//          	out.write(matrix[i][j].toString());
//          	out.newLine();
//          	out.newLine();
//          }
//          
//          out.close();
//		}        
//  } catch (IOException e) {
//  	System.out.println(e.getMessage());
//  }
	
//	for (int i = 0; i < a.length; i++) {
//      for (int j = 0; j <= i; j++) {
//      	ArrayList<Bag> list = matrix[i][j].list;
//      	for (int k = 0; k < list.size(); k++) {
//      		System.out.println(list.get(k));
//      	}
//      }
//	}  

}
