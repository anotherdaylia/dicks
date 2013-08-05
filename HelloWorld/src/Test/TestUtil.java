package Test;

import java.sql.Date;
import java.util.ArrayList;

import org.junit.Test;

import com.dicks.dao.FeeDAO;
import com.dicks.dao.ProductDAO;
import com.dicks.pojo.Fee;
import com.dicks.pojo.Order;
import com.dicks.pojo.Product;
import com.dicks.pojo.Store;

import com.dicks.engine.Package;
import com.dicks.engine.Parcel;
import com.dicks.engine.Util;

public class TestUtil {	
//	@Test
	public void testFee() {
		FeeDAO feeDao = FeeDAO.getInstance();
		try {
			ArrayList<Fee> fees = feeDao.getByType("store");
			
			for (Fee f : fees) {
				System.out.println("fee: " + f.getCostName() + ", " + f.getValue());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
//	@Test
	public void createCosts() {
		FeeDAO feeDao = FeeDAO.getInstance();
		
		Fee transactionFee = new Fee("Transaction Fee", "store", 939, "factoryPrice|product");
		Fee freightFee = new Fee("Freight In to Store", "store", 148, "factoryPrice|product");
		Fee distributionFee = new Fee("Distribution Center Cost Allocation", "store", 148, "factoryPrice|product");
		Fee packageCost = new Fee("Packaging Cost", "store", 112);
		Fee laborCost = new Fee("Labor Cost", "store", 117);
		
		try {
			feeDao.createFee(transactionFee);
			feeDao.createFee(freightFee);
			feeDao.createFee(distributionFee);
			feeDao.createFee(packageCost);
			feeDao.createFee(laborCost);
		} catch (Exception e) {
			e.printStackTrace();
		}		
	}
	
	@Test
	public void createProduct() {
		Product product = new Product("had", 1000);
		ProductDAO productDao = ProductDAO.getInstance();
		try {
			productDao.createProduct(product);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
//	@Test
	public void createOrder() {
		
	}
	
//	@Test
	public void testCosts() {
		Product p1 = new Product("had", 1000);
		Order order = new Order(1, 1000, 'g', new Date(new java.util.Date().getTime()), "cmu", "15213", "123", "abc");
		
		Package pack = new Package(order);
		Parcel parcel = new Parcel(pack, 1);
		parcel.addProduct(p1);
		
		Store store = new Store("cmu", "15213", "store");
		
		double costs = Util.calculateCosts(parcel, store);
		
		System.out.println("total costs: " + costs);
	}
}

