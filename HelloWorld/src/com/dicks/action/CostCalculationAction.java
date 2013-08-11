package com.dicks.action;

import java.util.ArrayList;

import com.dicks.dao.FeeDAO;
import com.dicks.dao.StoreDAO;
import com.dicks.pojo.Fee;
import com.opensymphony.xwork2.ActionSupport;

public class CostCalculationAction extends ActionSupport {
	FeeDAO feeDAO = FeeDAO.getInstance();
	
	private String[] storeFeeName;
	private String[] storeFeeId;
	private String[] storeFeeFlag;
	private String[] storeFeePercentage;
	private String[] storeFeeAttribute;
	private String[] storeFeeValue;

	private String[] gsiFeeName;
	private String[] gsiFeeId;
	private String[] gsiFeeFlag;
	private String[] gsiFeePercentage;
	private String[] gsiFeeAttribute;
	private String[] gsiFeeValue;	
	
	private String[] vendorFeeName;
	private String[] vendorFeeId;
	private String[] vendorFeeFlag;
	private String[] vendorFeePercentage;
	private String[] vendorFeeAttribute;
	private String[] vendorFeeValue;
	
	
	public String costCalculation() throws Exception{
		updateStoreFees();
		updateGsiFees();
		updateVendorFees();
		return SUCCESS;
	}
	
	public void updateVendorFees() throws Exception {
		if (vendorFeeId == null || vendorFeeId.length == 0) {
			deleteAll("vendor");
			return;
		}
		
		ArrayList<Fee> fees = feeDAO.getByType("vendor");		
		for(int i = 0; i < vendorFeeId.length; i++) {
			if (vendorFeeId[i].equals("new")) {
				Fee f = new Fee();	
				f.setCostName(vendorFeeName[i]);
				if (vendorFeeFlag[i].equals("p")) {
					f.setFlag("p");
					f.setAttribute(vendorFeeAttribute[i]);
					f.setPercentage((int) Math.round(Double.parseDouble(vendorFeePercentage[i]) * 100));
				} else if (vendorFeeFlag[i].equals("v")) {
					f.setFlag("v");
					f.setValue((int) Math.round(Double.parseDouble(vendorFeeValue[i]) * 100));
				}	
				f.setShippingType("vendor");
				feeDAO.createFee(f);
			} else {
				Fee f = findById(fees, Integer.parseInt(vendorFeeId[i]));
				f.setCostName(vendorFeeName[i]);

				if (vendorFeeFlag[i].equals("p")) {
					f.setFlag("p");
					f.setAttribute(vendorFeeAttribute[i]);
					f.setPercentage((int) Math.round(Double.parseDouble(vendorFeePercentage[i]) * 100));
				} else if (vendorFeeFlag[i].equals("v")) {
					f.setFlag("v");
					f.setValue((int) Math.round(Double.parseDouble(vendorFeeValue[i]) * 100));
				}			
				feeDAO.updateFee(f);
			}			
		}
		
		for (int i = 0; i < fees.size(); i++) {
			Fee f = fees.get(i);
			boolean maintain = false;
			for (int j = 0; j < vendorFeeId.length && !maintain; j++) {
				if (Integer.parseInt(vendorFeeId[j]) == f.getCostId()) maintain = true;
			}
			if (maintain == false) feeDAO.deleteFee(f);
		}
	}
	
	public void updateGsiFees() throws Exception {
		if (gsiFeeId == null || gsiFeeId.length == 0) {
			deleteAll("gsi");
			return;
		}
		
		ArrayList<Fee> fees = feeDAO.getByType("gsi");		
		for(int i = 0; i < gsiFeeId.length; i++) {
			if (gsiFeeId[i].equals("new")) {
				Fee f = new Fee();	
				f.setCostName(gsiFeeName[i]);
				if (gsiFeeFlag[i].equals("p")) {
					f.setFlag("p");
					f.setAttribute(gsiFeeAttribute[i]);
					f.setPercentage((int) Math.round(Double.parseDouble(gsiFeePercentage[i]) * 100));
				} else if (gsiFeeFlag[i].equals("v")) {
					f.setFlag("v");
					f.setValue((int) Math.round(Double.parseDouble(gsiFeeValue[i]) * 100));
				}	
				f.setShippingType("gsi");
				feeDAO.createFee(f);
			} else {
				Fee f = findById(fees, Integer.parseInt(gsiFeeId[i]));
				f.setCostName(gsiFeeName[i]);

				if (gsiFeeFlag[i].equals("p")) {
					f.setFlag("p");
					f.setAttribute(gsiFeeAttribute[i]);
					f.setPercentage((int) Math.round(Double.parseDouble(gsiFeePercentage[i]) * 100));
				} else if (gsiFeeFlag[i].equals("v")) {
					f.setFlag("v");
					f.setValue((int) Math.round(Double.parseDouble(gsiFeeValue[i]) * 100));
				}			
				feeDAO.updateFee(f);
			}			
		}
		
		for (int i = 0; i < fees.size(); i++) {
			Fee f = fees.get(i);
			boolean maintain = false;
			for (int j = 0; j < gsiFeeId.length && !maintain; j++) {
				if (Integer.parseInt(gsiFeeId[j]) == f.getCostId()) maintain = true;
			}
			if (maintain == false) feeDAO.deleteFee(f);
		}
	}
	
	private void updateStoreFees() throws Exception {
		if (storeFeeId == null || storeFeeId.length == 0) {
			deleteAll("store");
			return;
		}
		
		ArrayList<Fee> storeFees = feeDAO.getByType("store");		
		for(int i = 0; i < storeFeeId.length; i++) {
			System.out.println("i: " + i);
			if (storeFeeId[i].equals("new")) {
				Fee f = new Fee();	
				f.setCostName(storeFeeName[i]);
				if (storeFeeFlag[i].equals("p")) {
					f.setFlag("p");
					f.setAttribute(storeFeeAttribute[i]);
					f.setPercentage((int) Math.round(Double.parseDouble(storeFeePercentage[i]) * 100));
				} else if (storeFeeFlag[i].equals("v")) {
					f.setFlag("v");
					f.setValue((int) Math.round(Double.parseDouble(storeFeeValue[i]) * 100));
				}	
				f.setShippingType("store");
				feeDAO.createFee(f);
			} else {
				Fee f = findById(storeFees, Integer.parseInt(storeFeeId[i]));
				f.setCostName(storeFeeName[i]);

				if (storeFeeFlag[i].equals("p")) {
					f.setFlag("p");
					f.setAttribute(storeFeeAttribute[i]);
					f.setPercentage((int) Math.round(Double.parseDouble(storeFeePercentage[i]) * 100));
				} else if (storeFeeFlag[i].equals("v")) {
					f.setFlag("v");
					f.setValue((int) Math.round(Double.parseDouble(storeFeeValue[i]) * 100));
				}			
				feeDAO.updateFee(f);
			}			
		}
		
		for (int i = 0; i < storeFees.size(); i++) {
			Fee f = storeFees.get(i);
			boolean maintain = false;
			for (int j = 0; j < storeFeeId.length && !maintain; j++) {
				if (Integer.parseInt(storeFeeId[j]) == f.getCostId()) maintain = true;
			}
			if (maintain == false) feeDAO.deleteFee(f);
		}		
	}
	
	private void deleteAll(String type) throws Exception {
		ArrayList<Fee> fees = feeDAO.getByType(type);
		for (Fee f : fees) {
			feeDAO.deleteFee(f);
		}
	}
	
	private Fee findById(ArrayList<Fee> storeFees, int id) {		
		for (Fee f : storeFees) {
			if (f.getCostId() == id) return f;
		}		
		return null;
	}

	public String[] getStoreFeeName() {
		return storeFeeName;
	}


	public void setStoreFeeName(String[] storeFeeName) {
		this.storeFeeName = storeFeeName;
	}


	public String[] getStoreFeeId() {
		return storeFeeId;
	}


	public void setStoreFeeId(String[] storeFeeId) {
		this.storeFeeId = storeFeeId;
	}


	public String[] getStoreFeeFlag() {
		return storeFeeFlag;
	}


	public void setStoreFeeFlag(String[] storeFeeFlag) {
		this.storeFeeFlag = storeFeeFlag;
	}


	public String[] getStoreFeePercentage() {
		return storeFeePercentage;
	}


	public void setStoreFeePercentage(String[] storeFeePercentage) {
		this.storeFeePercentage = storeFeePercentage;
	}


	public String[] getStoreFeeAttribute() {
		return storeFeeAttribute;
	}


	public void setStoreFeeAttribute(String[] storeFeeAttribute) {
		this.storeFeeAttribute = storeFeeAttribute;
	}


	public String[] getStoreFeeValue() {
		return storeFeeValue;
	}


	public void setStoreFeeValue(String[] storeFeeValue) {
		this.storeFeeValue = storeFeeValue;
	}
	public String[] getGsiFeeName() {
		return gsiFeeName;
	}

	public void setGsiFeeName(String[] gsiFeeName) {
		this.gsiFeeName = gsiFeeName;
	}

	public String[] getGsiFeeId() {
		return gsiFeeId;
	}

	public void setGsiFeeId(String[] gsiFeeId) {
		this.gsiFeeId = gsiFeeId;
	}

	public String[] getGsiFeeFlag() {
		return gsiFeeFlag;
	}

	public void setGsiFeeFlag(String[] gsiFeeFlag) {
		this.gsiFeeFlag = gsiFeeFlag;
	}

	public String[] getGsiFeePercentage() {
		return gsiFeePercentage;
	}

	public void setGsiFeePercentage(String[] gsiFeePercentage) {
		this.gsiFeePercentage = gsiFeePercentage;
	}

	public String[] getGsiFeeAttribute() {
		return gsiFeeAttribute;
	}

	public void setGsiFeeAttribute(String[] gsiFeeAttribute) {
		this.gsiFeeAttribute = gsiFeeAttribute;
	}

	public String[] getGsiFeeValue() {
		return gsiFeeValue;
	}

	public void setGsiFeeValue(String[] gsiFeeValue) {
		this.gsiFeeValue = gsiFeeValue;
	}

	public String[] getVendorFeeName() {
		return vendorFeeName;
	}

	public void setVendorFeeName(String[] vendorFeeName) {
		this.vendorFeeName = vendorFeeName;
	}

	public String[] getVendorFeeId() {
		return vendorFeeId;
	}

	public void setVendorFeeId(String[] vendorFeeId) {
		this.vendorFeeId = vendorFeeId;
	}

	public String[] getVendorFeeFlag() {
		return vendorFeeFlag;
	}

	public void setVendorFeeFlag(String[] vendorFeeFlag) {
		this.vendorFeeFlag = vendorFeeFlag;
	}

	public String[] getVendorFeePercentage() {
		return vendorFeePercentage;
	}

	public void setVendorFeePercentage(String[] vendorFeePercentage) {
		this.vendorFeePercentage = vendorFeePercentage;
	}

	public String[] getVendorFeeAttribute() {
		return vendorFeeAttribute;
	}

	public void setVendorFeeAttribute(String[] vendorFeeAttribute) {
		this.vendorFeeAttribute = vendorFeeAttribute;
	}

	public String[] getVendorFeeValue() {
		return vendorFeeValue;
	}

	public void setVendorFeeValue(String[] vendorFeeValue) {
		this.vendorFeeValue = vendorFeeValue;
	}
}
