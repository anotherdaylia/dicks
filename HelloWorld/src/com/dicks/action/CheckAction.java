package com.dicks.action;

import java.util.ArrayList;

import com.dicks.dao.StoreDAO;
import com.dicks.pojo.Store;

public class CheckAction {
	
	private ArrayList<Store> storeList;
	
	public ArrayList<Store> getStoreList() {
		return storeList;
	}

	public void setStoreList(ArrayList<Store> storeList) {
		this.storeList = storeList;
	}

	public String storeCheck() throws Exception{
		storeList = new ArrayList<Store>();
		storeList = StoreDAO.getInstance().getAllStores();
		return "success";
	}
	
	public String stateCheck(){
		return "success";
	}
	
	public String storeTypeCheck(){
		return "success";
	}
	
	public String brandCheck(){
		return "success";
	}
	
	public String typeCheck(){
		return "success";
	}
}
