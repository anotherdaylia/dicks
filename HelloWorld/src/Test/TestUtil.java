package Test;

import java.util.Date;
import java.util.ArrayList;

import org.junit.Test;

import com.dicks.dao.CustomerDAO;
import com.dicks.dao.FeeDAO;
import com.dicks.dao.ProductDAO;
import com.dicks.dao.VendorDAO;
import com.dicks.pojo.Customer;
import com.dicks.pojo.Fee;
import com.dicks.pojo.Orders;
import com.dicks.pojo.Product;
import com.dicks.pojo.Store;
import com.dicks.pojo.Vendor;

import com.dicks.engine.Allocate;
import com.dicks.engine.Package;
import com.dicks.engine.Parcel;
import com.dicks.engine.Util;
import java.sql.Timestamp;

public class TestUtil {	
	
	@Test
	public void testAllocate() {
		
		Allocate allocate = new Allocate(null, null, null, null, null);
	}
	
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
	
//	@Test
	public void createVendor() {
		Vendor vendor = new Vendor("nike", "abc", "21253");
		VendorDAO vendorDAO = VendorDAO.getInstance();
		try {
			vendorDAO.createVendor(vendor);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
//	@Test
	public void createProduct() {
		try {
			Vendor vendor = VendorDAO.getInstance().getById(7);
			
			Product product = new Product(vendor, "hat", "123-456-789", "nike shoes", 5000, 2000, "TH-A,ST-A,SP-A");
			ProductDAO productDao = ProductDAO.getInstance();
			productDao.createProduct(product);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
//	@Test
	public void createOrder() {
		try {
			Product p1 = ProductDAO.getInstance().getById(4);
			Customer customer = CustomerDAO.getInstance().getById(1);
			Orders order = new Orders(customer, 10000, "f", new Timestamp(new Date().getTime()), "cmu", "15213", "412-637-2008", "mike");
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
//	@Test
	public void testCosts() {
		try {
			Product p1 = ProductDAO.getInstance().getById(4);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Customer customer = new Customer();
		
//		Package pack = new Package(order);
//		Parcel parcel = new Parcel(pack, 1);
//		parcel.addProduct(p1);
//		
//		Store store = new Store("cmu", "15213", "store");
		
//		double costs = Util.calculateCosts(parcel, store);
//		
//		System.out.println("total costs: " + costs);
	}
}

