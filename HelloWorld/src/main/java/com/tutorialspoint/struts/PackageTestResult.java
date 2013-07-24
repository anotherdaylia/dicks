package main.java.com.tutorialspoint.struts;

public class PackageTestResult {
	private PackageTest test;
	private String source;
	private double cost;
	
	public PackageTestResult(PackageTest test) {
		this.test = test;
	}
	
	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}
	
	public PackageTest getTest() {
		return test;
	}

	public void setTest(PackageTest test) {
		this.test = test;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	@Override
	public String toString() {		
		return "Package: " + this.test.getP() + " source: " + this.source + ", cost: " + this.cost;
	}
}
