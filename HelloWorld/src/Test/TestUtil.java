package Test;

import java.util.ArrayList;

import org.junit.Test;

import com.dicks.dao.FeeDao;
import com.dicks.pojo.Fee;


public class TestUtil {	
//	@Test
	public void testFee() {
		FeeDao feeDao = FeeDao.getInstance();
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
		FeeDao feeDao = FeeDao.getInstance();
		
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
	public void testCosts() {
		
	}
}

