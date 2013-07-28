package com.dicks.dao.impl;


import org.hibernate.Session;
import org.hibernate.Transaction;

import com.dicks.dao.PersonDAO;
import com.dicks.model.Person;
import com.dicks.util.HibernateUtil;

public class PersonDAOImpl implements PersonDAO {

	@Override
	public void savePersion(Person person) {
		System.out.println("!!!!");
		Session session = HibernateUtil.openSession();
		Transaction tx = session.beginTransaction();
		
		try{
			session.save(person);
			tx.commit();
		}catch(Exception ex){
			if(null!=tx){
				tx.rollback();
			}
		}finally{
			HibernateUtil.close(session);
		}
		
		
	}

}
