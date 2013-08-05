package com.dicks.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

import com.dicks.pojo.Fee;

public class FeeDao extends BaseDao<Fee> {
	private static FeeDao instance = new FeeDao();
	
	public FeeDao() {
		super(Fee.class);
	}

	public static FeeDao getInstance() {
		return instance;
	}

	public static void setInstance(FeeDao instance) {
		FeeDao.instance = instance;
	}
	
	public void createFee(Fee fee) throws Exception {
		super.create(fee);
	}
	
	public ArrayList<Fee> getByType(String type) throws Exception {
		List<Criterion> criterions = new ArrayList<Criterion>();
		Criterion criterion = Restrictions.eq("shippingType", type);
		criterions.add(criterion);
		return (ArrayList<Fee>) super.getList(criterions);
	}
}
