package com.dicks.service.impl;

import com.dicks.dao.PersonDAO;
import com.dicks.dao.impl.PersonDAOImpl;
import com.dicks.model.Person;
import com.dicks.service.PersonService;

public class PersonServiceImpl implements PersonService {

	
	public void savePerson(Person person) {
		PersonDAO personDAO = new PersonDAOImpl() ;

		personDAO.savePersion(person);

	}
	
}
