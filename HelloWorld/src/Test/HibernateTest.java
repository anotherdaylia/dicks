package Test;

import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.dicks.pojo.Customer;
import com.dicks.pojo.Fee;
import com.dicks.pojo.Inventory;
import com.dicks.pojo.Order;
import com.dicks.pojo.OrderDetail;
import com.dicks.pojo.Package;
import com.dicks.pojo.PackageDetail;
import com.dicks.pojo.Product;
import com.dicks.pojo.Rule;
import com.dicks.pojo.RuleCategory;
import com.dicks.pojo.Store;
import com.dicks.pojo.StoreCategory;
import com.dicks.pojo.User;
import com.dicks.pojo.Vendor;
import com.dicks.pojo.ProductCategory;

public class HibernateTest
{
	private static SessionFactory sessionFactory;
	
	static
	{
		try
		{
			sessionFactory = new Configuration().configure().buildSessionFactory();
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
	}
	
	public static void main(String[] args) throws Exception
	{
		Fee fee= new Fee();
		fee.setAttribute("afaf");
		fee.setCostName("Nike");
		fee.setFlag('a');;
		fee.setPercentage(134);
		fee.setShippingType("dfagda");
		fee.setValue(234);
		
//		User user = new User();
//		user.setEmail("ssd");
//		user.setPassword("sgsg");
//		user.setUserName("aa");
		
		Rule rule = new Rule("ad", "dfgadg", "sdgd", 1, "d", 'd', 'd', "sdgdgfs", "sdfgsdfg", "sfggfd", "sgds", "sgfdg", "sdfggfd");
	
		Vendor vendor = new Vendor();
		vendor.setAddress("sfdg");
		vendor.setVendorName("sgdsd");
		vendor.setZip("23424");
		
		RuleCategory rc = new RuleCategory();
		rc.setCategoryID(2);
		rc.setIsProductRelated(false);
		
		Set<RuleCategory> set = new HashSet<RuleCategory>();
		set.add(rc);

		rule.setRuleCategorys(set);
		
		Store store = new Store();
		store.setAddress("sdgsdfg");
		store.setStoreName("sdgds");
		store.setZip("sdgsd");
		
		
		Product product = new Product();
		product.setFactoryPrice(123);
		product.setFlag("g");
		product.setHeight(323.43);
		product.setLength(45.34);
		product.setProductDescr("fhs");
		product.setProductName("shfsh");
		product.setSku("sfhfhsfhfsh");
		product.setVendorID(45);
		
		Order order = new Order(23,55,'g',new java.sql.Date(2003, 5, 4), "sg","dsggd","sfdg","gddfg");
		
		Inventory inventory = new Inventory();
		inventory.setProductID(2);
		inventory.setRetailPrice(234);
		inventory.setSaftyStock(343);
		inventory.setStorage(343);
		inventory.setStoreID(435);
		
		
		Customer customer = new Customer();
		customer.setAddress("gsdgdf");
		customer.setCustomerName("sfdgsdg");
		customer.setPassword("sdgsdfg");
		customer.setSex('m');
		customer.setTel("gddgd");
		customer.setZip("sfhsdfg");
			
		Session session = sessionFactory.openSession();
		Transaction tx = null;
		
		Package package1 = new Package();
		package1.setCustomerID(2);
		package1.setDeliveryDate(new java.sql.Date(20000));
		package1.setOrderID(43);
		package1.setShippingCompany("fedex");
		package1.setShippingDay(32);
		package1.setShippingStatus('d');
		package1.setTotalAmount(34);
		package1.setWeight(45.43);
		
		PackageDetail pd = new  PackageDetail();
		pd.setPackageID(1);
		pd.setProductID(3);
		pd.setQty(32);
		pd.setUnitPrice(24);
		
		OrderDetail od = new OrderDetail();
		od.setOrderID(2);
		od.setProductID(3);
		od.setQty(13);
		od.setUnitPrice(43);
		
		ProductCategory pc = new ProductCategory();
		pc.setCategoryDescr("dfgsgsf");
		pc.setCategoryName("sdgf");
		pc.setProdCategoryID(2);
		pc.setProdID(4);
		
		StoreCategory sc = new StoreCategory();
		sc.setCategoryDescr("dfgsgsf");
		sc.setCategoryName("sdgf");
		sc.setStoreCategoryID(1);
		sc.setStoreID(4);
		
		
		try
		{
			tx = session.beginTransaction();
			
//			session.save(fee);
////			session.save(user);
////			session.save(rule);
//			session.save(vendor);
//			session.save(store);
//			session.save(product);
//			session.save(order);
//			session.save(inventory);
//			session.save(customer);
			//session.save(package1);
//			session.save(pd);
			session.save(sc);
			tx.commit();
		}
		catch(Exception ex)
		{
			if(null != tx)
			{
				tx.rollback();
			}
			
			ex.printStackTrace();
		}
		finally
		{
			session.close();
		}
	}
}
