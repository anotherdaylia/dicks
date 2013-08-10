<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<jsp:include page="template_top.jsp" />

  <script defer="defer" >
 
 	 window.onload=function(){

 		var act =  document.getElementById('act').value;
        if(act=="store") {
            document.getElementById('store_category_list').style.display = 'block';
            document.getElementById('product_category_list').style.display = 'none';
            document.getElementById('Paging').style.display = 'block';
            document.getElementById('category_store').checked = true;            
        } else if(act=="product") {
            document.getElementById('product_category_list').style.display = 'block';
            document.getElementById('store_category_list').style.display = 'none';
            document.getElementById('Paging').style.display = 'block';
            
            document.getElementById('category_product').checked =true;
        }
 	 }   
 
 function displayCategoryList(obj) {
    var type = obj.value;
 
    
    if(type=="Store") {
     	window.location.href="displayCategoryList.action?act=store";  

    } else if(type=="Product") {
        window.location.href="displayCategoryList.action?act=product";   
    };
 }
</script>
 

		<!-- content starts -->
		<input type="hidden" value="${act}" id="act"/>
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
												<td class=""><a class="button" href="viewStoreCategory.action?categoryId=${storeCategory.id.cateStoreId}">View</a>
										<a class="button" href="EditCategory.html">Edit</a></td>
											</tr>
										</c:forEach>
									</tbody>
								</table>
							</div>

							<div id="product_category_list">
								<table cellspacing="0" cellpadding="0" class="list">
									<tbody>
										<tr class="title">
											<th><input type="checkbox" id="selectall" /></th>
											<th>Category ID</th>
											<th>Category Name</th>
											<th>Description</th>
											<th>Action</th>
										</tr>
										<c:choose>
											<c:when test="${ (empty prodCategoryList) }">
											
											</c:when>
											<c:otherwise>
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
				       							 
			       							</c:otherwise>
										
										</c:choose>
										
									</tbody>
								</table>
							</div>

						</form>
						<div id="Paging" >
							<div class="paging clearfix">
								<div class="page-size">Items per page:10</div>
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
							category?</div>

						<div class="r" style="margin-right: 20px;">
							<a class="button" onclick="closePop()" type="submit">Yes</a> <a
								class="button" onclick="closePop()" type="button">No</a>
						</div>
					</div>
					<!-- Deletion pop-up ends -->

				</div>

				<!-- content ends -->

<jsp:include page="template_bottom.jsp" />
			