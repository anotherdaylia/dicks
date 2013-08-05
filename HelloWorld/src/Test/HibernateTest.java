package Test;

import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.dicks.pojo.Fee;
import com.dicks.pojo.Rule;
import com.dicks.pojo.RuleCategory;
import com.dicks.pojo.User;

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
		fee.setAttribute("adf");
		fee.setCostName("Nike");
		fee.setFlag('a');;
		fee.setPercentage(134);
		fee.setShippingType("store");
		fee.setValue(345);
		
//		User user = new User();
//		user.setEmail("ssd");
//		user.setPassword("sgsg");
//		user.setUserName("aa");
		
		Rule rule = new Rule("ad", "dfgadg", "sdgd", 1, 'd', 'd', 'd', "sdgdgfs", "sdfgsdfg", "sfggfd", "sgds", "sgfdg", "sdfggfd");
	
//		RuleCategory rc = new RuleCategory();
//		rc.setRule(rule);
//		rc.setRuleID(rule.getRuleID());
//		rc.setCategoryID(2);
//		rc.setIsProductRelated(false);
		
//		Set<RuleCategory> set = new HashSet<RuleCategory>();
//		set.add(rc);
//
//		rule.setRuleCategorys(set);

		Session session = sessionFactory.openSession();
		Transaction tx = null;
	
		try
		{
			tx = session.beginTransaction();
			
			session.save(fee);
//			session.save(user);
			session.save(rule);
			
			RuleCategory rc = new RuleCategory();
			rc.setRule(rule);
			rc.setRuleID(rule.getRuleID());
			rc.setCategoryID(2);
			rc.setIsProductRelated(false);
			
			session.save(rc);

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
