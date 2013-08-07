<%@ page language="java" contentType="text/html; charset=US-ASCII"
	pageEncoding="US-ASCII"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<base href="<%=basePath%>">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>DSG - Manage Category</title>

<link href="css/common.css" rel="stylesheet" type="text/css" />
<link href="css/overview.css" rel="stylesheet" type="text/css" />
<link href="css/pop.css" rel="stylesheet" type="text/css" href="">
<script src="js/jquery.min.js" type="text/javascript">
	
</script>
 <script>
 function displayCategoryList(obj) {
    var type = obj.value;
    
    if(type=="Store") {
    	document.getElementById('store_category_list').style.display = 'block';
        document.getElementById('product_category_list').style.display = 'none';
     	document.getElementById('Paging').style.display = 'block';
     	window.location.href="displayCategoryList.action?act=store";  
     	this.checked = true;
    } else if(type=="Product") {
        document.getElementById('product_category_list').style.display = 'block';
        document.getElementById('store_category_list').style.display = 'none';
        document.getElementById('Paging').style.display = 'block';
    	 document.getElementById('category_store').checked = false;
        window.location.href="displayCategoryList.action?act=product";   
        this.checked = true;

    }
 }
 </script>
<script src="js/animation.js" type="text/javascript"></script>
<script src="js/pop.js" type="text/javascript"></script>
</head>

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
						<li class="selected"><a
							href="<%=basePath%>gotocategorylist.action">Category List</a><span
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

		<!-- content starts -->
		<div class="minibar recordable" id="minibar"
			memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;1&quot;}"
			style="display: none;">
			<a id="menu-untoggle" href="javascript:void(0)" class="unfold"></a>
		</div>
		<div class="main" id="main-body">
			<div class="content clearfix">

				<div class="title-bar clearfix">
					<h1 class="l">Manage Category</h1>
					<div id="Date" class="date l"></div>
					<a id='ReportTipIco' class="report-help open l recordable"
						memo="{id:'ReportTipIco',type:'page-tip',global:0}"
						href="javascript:void(0);">&nbsp;</a> <br />
					<br />
					<div>
						<hr />
					</div>

					<li style="list-style: none;"><span><a href="#">Home</a><span>
								&gt; </span></span> <span><a href="">Manage Category</a><span><span>
									&gt; </span> <span>Category List<span></li>

					<!-- Success Message and Error Message -->
					<div class="success_area" style="display: none">successMessage</div>
					<div class="warning" style="display: none">errorMessage</div>
					<!-- Success Message and Error Message -->

					<br />

					<div>
						<a class="button" id="add-to-cart" href="#">Delete Selected </a>&nbsp;
						| &nbsp; <a href="CreateCategory.html" class="button"> + New
							Category</a>
						<div class="r">
							<input type="text" class="searchtext" placeholder="Category name" />
							<a href="#" class="button">Search</a>
						</div>
					</div>
					<br />
					<div id="Outline" class="table-list">
						<form action="">
							Category Type: <input type="radio" name="category_type"
								value="Store" id="category_store" onClick="displayCategoryList(this);">Store
							<input type="radio" name="category_type" value="Product"
								id="category_product" onClick="displayCategoryList(this);">Product

							<div id="store_category_list">
								<table cellspacing="0" cellpadding="0" class="list">
									<tbody>
										<tr class="title">
											<th><input type="checkbox" id="selectall" /></th>
											<th>Category ID</th>
											<th>Category Name</th>
											<th>Description</th>
											<th>Action</th>
										</tr>
										<c:forEach var="storeCategory" items="${storeCategoryList}">
											<tr>
												<td class=""><input type="checkbox" class="case" /></td>
												<td class="">${storeCategory.id.cateStoreId}</td>
												<td class="">${storeCategory.cateName}</td>
												<td class="">${storeCategory.cateDescr}</td>
												<td class=""><a class="button" href="ViewCategory.html">View</a>
										<a class="button" href="EditCategory.html">Edit</a></td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
							</div>

							<div id="product_category_list"  >
								<table cellspacing="0" cellpadding="0" class="list">
									<tbody>
										<tr class="title">
											<th><input type="checkbox" id="selectall" /></th>
											<th>Category ID</th>
											<th>Category Name</th>
											<th>Description</th>
											<th>Action</th>
										</tr>
											${prodCategoryList}	
										<c:forEach var="prodCategory" items="${prodCategoryList}">
											<tr>
												<td class=""><input type="checkbox" class="case" /></td>
												<td class="">${prodCategory.id.cateProdId}</td>
												<td class="">${prodCategory.cateName}</td>
												<td class="">${prodCategory.cateDescr}</td>
												<td class=""><a class="button" href="ViewCategory.html">View</a>
												<a class="button" href="EditCategory.html">Edit</a></td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
							</div>

						</form>
						<div id="Paging" style="display: none;">
							<div class="paging clearfix">
								<div class="page-size">Items per page：10</div>
								<div class="page-number">
									<a class="number selected" href="javascript:void(0);" data="1">1</a><a
										class="number" href="javascript:void(0);" data="2">2</a><a
										class="number" href="javascript:void(0);" data="3">3</a>...<a
										class="number" href="javascript:void(0);" data="5">5</a><a
										href="javascript:void(0);" class="next" data="2">Next&gt;</a>Page
									<input class="text" type="text"> <a
										href="javascript:void(0)" class="button"><span>Go</span></a>
								</div>
							</div>
						</div>

					</div>

					<!-- Deletion Pop up -->
					<div id="pop-back"></div>
					<div id="cart1" class="cart">
						<div class="popheader">
							<span class="title"><strong>&nbsp;Delete Category</strong></span>
						</div>
						<br>
						<div>&nbsp;&nbsp;Are you sure you want to delete the
							categry?</div>

						<div class="r" style="margin-right: 20px;">
							<a class="button" onclick="closePop()" type="submit">Yes</a> <a
								class="button" onclick="closePop()" type="button">No</a>
						</div>
					</div>
					<!-- Deletion pop-up ends -->

				</div>

				<!-- content ends -->


				<!-- footer starts -->
			</div>
			<div class="footer">
				<span>©2013 eBusiness Team</span>
			</div>
		</div>
		<!-- footer ends -->


	</div>


</body>
</html>