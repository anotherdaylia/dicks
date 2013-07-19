package src.main.java.com.sample;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

public class Split {
	public static void main(String[] args) {
//		String str=args[0];
//		String[] aStr=str.split(",");
//		int[] a = new int[aStr.length];
//		for(int i=0;i<aStr.length;i++){
//			a[i]=Integer.parseInt(aStr[i]);
//		}
		int[] a = {1,2,3,4,5,6,7,8,9,10};
		Combination[][] matrix = setUpMatrix(a);
		//printMatrix(matrix);
				
		printMatrix(matrix);
		
		for (int i = 1; i < a.length; i++) {
			//System.out.println(i);
			printCombinations(a.length, i, a, matrix);
		}
		
//        try {
//    		for (int i = 0; i < a.length; i++) {
//    			BufferedWriter out = new BufferedWriter(new FileWriter("file" + i + ".txt"));
//                for (int j = 0; j < a.length; j++) {
//                	out.write(matrix[i][j].toString());
//                	out.newLine();
//                	out.newLine();
//                }
//                
//                out.close();
//    		}        
//        } catch (IOException e) {
//        	System.out.println(e.getMessage());
//        }
		
//		for (int i = 0; i < a.length; i++) {
//	        for (int j = 0; j <= i; j++) {
//	        	ArrayList<Bag> list = matrix[i][j].list;
//	        	for (int k = 0; k < list.size(); k++) {
//	        		System.out.println(list.get(k));
//	        	}
//	        }
//		}  
	}
	
	public static Combination[][] setUpMatrix(int[] a) {
		Combination[][] matrix = new Combination[a.length][a.length];
		matrix[0][0] = new Combination();
		Bag origin = new Bag();
		origin.addToBag(a[0], 0);
		matrix[0][0].list.add(origin);
		//System.out.println(matrix[0][0]);
		
		for (int i = 1; i < a.length; i++) {
			//System.out.println(i);
			Combination c = new Combination();
			Bag b = new Bag();
			b.copyBag(matrix[i - 1][0].list.get(0));
			b.addToBag(a[i], 0);
			c.list.add(b);
			matrix[i][0] = c;
		}
		
		for (int i = 1; i < a.length; i++) {
			Combination c = new Combination();
			Bag b = new Bag();
			//System.out.println(i);
			b.copyBag(matrix[i - 1][i - 1].list.get(0));
			b.addToBag(a[i], i);
			c.list.add(b);
			matrix[i][i] = c;
		}
		return matrix;
	}
	
	public static void printCombinations(int n, int m, int[] a, Combination[][] matrix) {

		if (m == 1) {
			return;
		}
		
		for (int i = m; i < n; i++) {
			//System.out.println("i : " + i);
			Combination c = new Combination();	
			c.addNewItem(a[i], matrix[i-1][m-2], matrix[i-1][m-1]);
			matrix[i][m-1] = c;
		}
		

		System.out.println();
		printMatrix(matrix);
	}
	
	
	public static void printMatrix(Combination[][] matrix) {
		for (int i = 0; i < matrix.length; i++) {
			for (int j = 0; j < matrix[0].length; j++) {
				System.out.print((matrix[i][j]==null? 0 : matrix[i][j].list.size()) + ", ");
			}
			System.out.println();
		}
	}
	
	public static class Combination {
		ArrayList<Bag> list = new ArrayList<Bag>();
	
		public void addNewItem(int item, Combination c1, Combination c2) {
			for (int i = 0; i < c1.list.size(); i++) {
				Bag b = new Bag();
				b.addNewItemAsPackage(item, c1.list.get(i));
				list.add(b);
			}
			
			for (int i = 0; i < c2.list.size(); i++) {
				Bag from = c2.list.get(i);
				for (int j = 0; j < from.list.size(); j++) {
					Bag b = new Bag();
					b.addNewItemTo(item, from, j);
					list.add(b);
				}
			}
		}
		
		
		@Override
		public String toString() {
			return Arrays.toString(list.toArray());
		}
	}
	
	public static class Bag {
		ArrayList<ArrayList<Integer>> list = new ArrayList<ArrayList<Integer>>();
	
		public void copyBag(Bag bag) {
			ArrayList<ArrayList<Integer>> from = bag.list;
			for (int i = 0; i < from.size(); i++) {
				ArrayList<Integer> sub = new ArrayList<Integer>();
				sub.addAll(from.get(i));
				list.add(sub);
			}
		}
		
		public void addNewItemAsPackage(int item, Bag bag) {
			ArrayList<ArrayList<Integer>> from = bag.list;
			list = new ArrayList<ArrayList<Integer>>();
			for (int i = 0; i < from.size(); i++) {
				ArrayList<Integer> sub = new ArrayList<Integer>();
				sub.addAll(from.get(i));
				list.add(sub);
			}
			ArrayList<Integer> newItem = new ArrayList<Integer>();
			newItem.add(item);
			list.add(newItem);
		}		
		
		public void addNewItemTo(int item, Bag bag, int index) {
			ArrayList<ArrayList<Integer>> from = bag.list;
			list = new ArrayList<ArrayList<Integer>>();
			for (int i = 0; i < from.size(); i++) {
				ArrayList<Integer> sub = new ArrayList<Integer>();
				sub.addAll(from.get(i));
				list.add(sub);
			}
			list.get(index).add(item);
		}
		
		public void addToBag(int item, int bag) {
			if (list.size() <= bag) {
				ArrayList<Integer> newBag = new ArrayList<Integer>();
				newBag.add(item);
				list.add(newBag);
				//System.out.println("in create");
			} else {
				list.get(bag).add(item);
			}			
		}
		
		@Override
		public String toString() {
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < list.size(); i++) {
				ArrayList<Integer> sub = list.get(i);
				for (int j = 0; j < sub.size(); j++) {
					sb.append(sub.get(j));
					if (j != sub.size() - 1) {
						sb.append(", ");
					}
				}
				if (i != list.size() - 1) sb.append(" / ");
			}
			return sb.toString();
		}
	}
}
