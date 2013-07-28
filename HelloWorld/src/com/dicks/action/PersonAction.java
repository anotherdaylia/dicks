package com.dicks.action;

import com.dicks.model.Person;
import com.dicks.service.PersonService;
import com.dicks.service.impl.PersonServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

public class PersonAction extends ActionSupport{
	private String username;
	
	private String password;
	
	private int age;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	public String savePerson() throws Exception{
		Person person = new Person();
		
		person.setUsername(username);
		person.setPassword(password);
		person.setAge(age);
		
		
		java.sql.Date registerDate = new java.sql.Date(new java.util.Date().getTime());
		
		person.setRegisterDate(registerDate);
		
		PersonService personService = new PersonServiceImpl();
		personService.savePerson(person);
		
		return "sucess";
	}
}
