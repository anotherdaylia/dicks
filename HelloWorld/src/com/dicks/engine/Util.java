package com.dicks.engine;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;
import java.util.Set;
import org.apache.commons.lang3.text.WordUtils;

import com.dicks.dao.FeeDAO;
import com.dicks.dao.FeeDAO;
import com.dicks.dao.InventoryDAO;
import com.dicks.dao.OrderDetailDAO;
import com.dicks.dao.ProductDAO;
import com.dicks.dao.ShipmentDAO;
import com.dicks.pojo.Fee;
import com.dicks.pojo.Inventory;
import com.dicks.pojo.OrderDetail;
import com.dicks.pojo.Product;
import com.dicks.pojo.Orders;
import com.dicks.pojo.Shipment;
import com.dicks.pojo.Store;

public class Util {
	static String operator = "";
	static String attribute = "";
	static Random r = new Random();
	
	public static double getShippingDays() {
		return r.nextInt(7);
	}
	
	public static double getShippingCosts(Parcel parcel, Store store) throws Exception {
		int supplyZip = Integer.parseInt(parcel.getPack().getOrder().getShippingZip());
		int destinationZip = Integer.parseInt(store.getZip());
		Shipment shipment = ShipmentDAO.getInstance().getShipmentByOriginSupply(supplyZip, destinationZip);
		
		return shipment.getNormalRate();
	}
	
	public static void calculateAttribute(ParcelResult parcelR) {
		if (attribute.equals("retailPrice")) {
			Parcel parcel = parcelR.getParcel();
			Store store = parcelR.getSource();
			
			ArrayList<Inventory> inventories = InventoryDAO.getInstance().getInventoryByParcelStore(parcel, store);
			int attribute = 0;			
			for (Inventory inventory : inventories) {
				attribute += inventory.getRetailPrice();
			}			
			parcelR.setAttribute((double) attribute / 100.0);
		} else if (attribute.equals("shippingCost")) {
			
		} else if (attribute.equals("margin")) {
			
		} else if (attribute.equals("proximity")) {
			
		} else if (attribute.equals("totalCost")) {
			parcelR.setAttribute(parcelR.getCost());
		}
	}
	
	public static int compareParcelResult(ParcelResult arg0, ParcelResult arg1) {
		if (Util.operator.equals("max")) {
			return Double.compare(arg1.getAttribute(), arg0.getAttribute());
		} else if (Util.operator.equals("min")) {
			return Double.compare(arg0.getAttribute(), arg1.getAttribute());
		}
		return 0;
	}
	
	public static double calculateCosts(Parcel parcel, Store store) {
		Set<Product> products = parcel.getProducts().keySet();		
		long totalCosts = 0;
		FeeDAO feeDao = FeeDAO.getInstance();
		try {
			ArrayList<Fee> fees = feeDao.getByType(store.getStoreType());		
			Integer[] costs = new Integer[fees.size()];
			for (Fee fee : fees) {
				if (fee.getFlag().equals("v")) {
					totalCosts += fee.getValue();
//					System.out.println(fee.getCostName() + ": " + ((double) fee.getValue()) / 100.0);
				} else if (fee.getFlag().equals("p")) {
					String attributeName = fee.getAttribute();
					int attributeValue = 0;
					String[] names = attributeName.split(",");
//					System.out.println("names: " + Arrays.toString(names));
					if (names[1].equals("cost")) {
						for (int i = 0; i < fees.size(); i++) {
							if (fees.get(i).getCostName().equals(names[0])) {
								attributeValue = costs[i];
							}
						}
					} else if (names[1].equals("product")) {
						for (Product p : products) {
							attributeValue += getAttribute(p, Product.class, names[0]) * parcel.getProductQty(p);
//							System.out.println("product: " + p.getProdName());
						}	
//						System.out.println("product: " + fee.getPercentage()/100.0 + "% of " + names[0] + ": " + attributeValue);
					} else if (names[1].equals("store")) {
						attributeValue = getAttribute(store, Store.class, names[0]);
					} else if (names[1].equals("orderDetail")) {	
						
						ArrayList<OrderDetail> details = OrderDetailDAO.getInstance().getDetailsByParcel(parcel);
						
						//System.out.println("details size: " + details.size());
						
						for (OrderDetail detail : details) {
							int attribute = getAttribute(detail, OrderDetail.class, names[0]);
							int qty =  parcel.getProductQty(detail.getProduct());
//							System.out.println(names[1] + "-" + names[0] + ": " + attribute + " " + qty);

							attributeValue += attribute * qty;
						}
					} else if (names[1].equals("inventory")) {
						ArrayList<Inventory> inventories = InventoryDAO.getInstance().getInventoryByParcelStore(parcel, store);
						
						for (Inventory inventory : inventories) {
							attributeValue += getAttribute(inventory, Inventory.class, names[0]) * parcel.getProductQty(inventory.getProduct());
//							System.out.println("product: " + p.getProdName());
						}					
					} else if (names[1].equals("order")) {
						attributeValue = getAttribute(parcel.getPack().getOrder(), Orders.class, names[0]);
					}
					totalCosts += attributeValue * fee.getPercentage() / 10000;
//					System.out.println("total costs: " + totalCosts);
				}
			}	
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ((double) totalCosts) / 100.0;
	}
	
	public static <T> int getAttribute(T t, Class<T> clz, String name) {
		Field[] fields = clz.getDeclaredFields();
		for(Field field:fields) {
			if(field.getName().equals(name)) {				
				try {
					String methodName = "get" + WordUtils.capitalize(name);
					Method method = clz.getDeclaredMethod(methodName, new Class[0]);
					int attribute = (Integer) method.invoke(t, new Object[0]);
					return attribute;
				} catch (IllegalArgumentException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IllegalAccessException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (InvocationTargetException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (NoSuchMethodException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}		
		return 0;
	}
}
