<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    %>
        
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   
 <title>DSG - Order List</title>
 
<link rel="stylesheet" href="/resources/demos/style.css" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<link href="css/common.css" rel="stylesheet" type="text/css" />
<link href="css/overview.css" rel="stylesheet" type="text/css" />
<link href="css/pop.css" rel="stylesheet" type="text/css" href="">
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/animation.js" type="text/javascript"></script>
<script src="js/pop.js" type="text/javascript"></script>
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script> 
<script src="js/tangram.js" type="text/javascript"></script> 
<script src="js/autocomplete.js" type="text/javascript"></script>


<body>

	<div class="header">

	<div class="header-content">
			<div class="logo">
				<a href="orderlist.html"><img src="image/logo.png" /></a>
			</div>
			<div class="top-nav">
				<a href="#" target="_blank" class="trackable"> <span
					class="nav-icon help-icon"></span>Help
				</a>| <a href="#" target="_blank" class="trackable">Account</a>| <a
					href="#">Log out</a>
			</div>
		</div>
	</div>


	<div class="body clearfix">

		<!-- menu bar starts -->
		<div class="aside" id="aside-menu">
			<div class="title">
				<h1>My Tool</h1>
				<!-- <a href="javascript:void(0)" class="fold recordable" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;0&quot;}" id="menu-toggle"></a>
        -->
			</div>
			<ul class="nav">
				<li class=""><a class="recordable open" href="#"
					id="toggleone" memo="{id:'21',type:'menu',global:1,status:''}">Manage
						Category</a>
					<ul class="nav-two" id="navone">
						<li class=""><a
							href="<%=basePath%>displayCategoryList.action?act=store">Category List</a><span
							class="normal">&nbsp;</span></li>
						<li class=""><a href="#">New Category</a><span class="normal">&nbsp;</span></li>
					</ul></li>
				<li class=""><a class="recordable open" href="#" id="toggletwo"
					memo="{id:'21',type:'menu',global:1,status:''}">Manage Business
						Rule</a>
					<ul class="nav-two" id="navtwo">
						<li class=""><a href="<%=basePath%>gotorulelist.action">Business
								Rule List</a><span class="normal">&nbsp;</span></li>
						<li class=""><a href="newrule.html">New Business Rule</a><span
							class="normal">&nbsp;</span></li>

					</ul></li>
				<li class=""><a class="recordable open" href="#"
					id="togglethree" memo="{id:'21',type:'menu',global:1,status:''}">Visualization
						Dashboard</a>
					<ul class="nav-two" id="navthree">
						<li class=""><a href="<%=basePath%>gotoorderlist.action">Order
								List</a><span class="normal">&nbsp;</span></li>
						<li class=""><a href="#">Routing visualization</a><span
							class="normal">&nbsp;</span></li>
						<li class=""><a href="statistics.html">Statistics</a><span
							class="normal">&nbsp;</span></li>

					</ul></li>
			</ul>
		</div>
		<!-- menu bar ends -->