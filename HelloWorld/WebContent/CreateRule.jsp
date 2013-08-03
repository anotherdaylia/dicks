<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
<title>Create Rule</title>
</head>
<body>
	<h1>Create New Rule</h1>
	<form action="cnr">
   		<label for="type">Type</label>
        <select name="type">
        	<option value="threshold">Threshold</option> 
            <option value="storefilter"> Store Filter</option>
            <option value="specialroute">Special Route</option>
        </select><br/>
        <br/>
        <label for="object">Object</label>
        <select name="object">
        	<option value="product">Product</option> 
            <option value="store"> Store</option>
        </select><br/>
        <br/>
        <label for="sku">SKU</label>
        <input type="text" name="sku"/><br/>
        <br/>
        <label for="attribute">Attribute</label>
        <select name="attribute">
        	<option value="size">Size</option> 
            <option value="weight"> Weight</option>
        </select><br/>
        <br/>
        <label for="operator">Operator</label>
        <select name="operator">
        	<option value="bigger">&gt;</option> 
            <option value="less">&lt;</option>
            <option value="equal">=</option>
        </select><br/>
        <br/>
        <label for="valuenumber">Value</label>
        <input type="text" name="valuenumber"/><br/>
        <br/>
        <label for="action">Action</label>
        <input type="text" name="action"/><br/>
        <br/>
        <br/><br/>
      	<input type="submit" value="Create Rules"/>
    </form>
</body>
</html>