<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
 <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    %>
<jsp:include page="template_top.jsp" />
<ul class="nav">
	<li class=""><a class="recordable open" id="toggleone" href="#"
		memo="{id:'21',type:'menu',global:1,status:''}">Manage Category</a>
		<ul class="nav-two" id="navone">
			<li class="" id="catelist"><a
				href="<%=basePath%>gotocategorylist.action">Category List</a><span
				class="normal">&nbsp;</span></li>
			<li class="" id="newcatelist"><a
				href="<%=basePath%>gotonewcategory.action">New Category</a><span
				class="normal">&nbsp;</span></li>
		</ul></li>
	<li class=""><a class="recordable open" href="#" id="toggletwo"
		memo="{id:'21',type:'menu',global:1,status:''}">Manage Business
			Rule</a>
		<ul class="nav-two" id="navtwo">
			<li class="" id="bizrulelist"><a
				href="<%=basePath%>gotorulelist.action">Business Rule List</a><span
				class="normal">&nbsp;</span></li>
			<li class="" id="newbizrulelist"><a
				href="<%=basePath%>gotonewbizrulelist.action">New Business Rule</a><span
				class="normal">&nbsp;</span></li>
			<li class="" id="ruleprioritylist"><a
				href="<%=basePath%>gotoruleprioritylist.action">Business Rule
					Priority</a><span class="normal">&nbsp;</span></li>
		</ul></li>
	<li class=""><a class="recordable open" href="#" id="togglethree"
		memo="{id:'21',type:'menu',global:1,status:''}">Visualization
			Dashboard</a>
		<ul class="nav-two" id="navthree">
			<li class=""><a id="orderlist" onclick="f(this)"
				href="<%=basePath%>gotoorderlist.action">Order List</a><span
				class="normal">&nbsp;</span></li>
			<li class="" id="routelist"><a href="#">Routing
					visualization</a><span class="normal">&nbsp;</span></li>
			<li class="" id="statlist"><a href="statistics.html">Statistics</a><span
				class="normal">&nbsp;</span></li>

		</ul></li>
	<li class=""><a class="recordable open" href="#" id="togglefour"
		memo="{id:'21',type:'menu',global:1,status:''}">Place New Order</a>
		<ul class="nav-two" id="navtwo">
			<li class="" id="neworderlist"><a
				href="<%=basePath%>gotoplaceorder.action">New Order</a><span
				class="normal">&nbsp;</span></li>

		</ul></li>
</ul>
</div>
    <!-- menu bar ends -->

    <!-- content starts -->
    <div class="minibar recordable" id="minibar" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;1&quot;}" style="display:none;"><a id="menu-untoggle" href="javascript:void(0)" class="unfold" ></a></div> 
    <div class="main"  id="main-body">
    <div class="content clearfix">
                
       <div class="title-bar clearfix">
            <h1 class="l">Edit Business Rule</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>
    
            <li style="list-style:none;"><span><a href="#">Home</a><span> > </span></span>
                <span><a href="#">Manage Business Rule</a><span> > </span></span>
                <span><a href="#">Business Rule List</a><span> > </span></span>
                <span>Edit Rule</span>
            </li>
            
            <!-- Success Message and Error Message -->
            <div class="success_area" style="display:none">successMessage</div>
            <div class="warning" style="display:none">errorMessage</div>
            <!-- Success Message and Error Message -->
        </div>
        
        <div>

            <form action="#">
            <table class="text">
                <tr>
                    <td>Rule Name&#58;</td>
                    <td>Set Product Threshold</td>
                </tr>   
                <tr>
                    <td>Rule Description&#58;</td>
                    <td>Set shipping constraints according to products size or weight.</td>
                </tr>
                <tr>
                    <td>Group&#58;</td>
                    <td>All</td>
                </tr>
                <tr>
                    <td>Stage&#58;</td>
                    <td>Stage 1 - Prefiltering</td>
                </tr>
                <tr>
                    <td>Rule Template&#58;</td>
                    <td>Product Threshold</td>
                </tr>
                <tr class="drl-height">
                    <td>Rule Editor&#58;</td>
                    <td style="width:500px;">
                    <div class="drl"> 
                         
                         <div> If
                            <select style="width:50px;">
                                <option value="#">All</option> 
                                <option value="#">Any</option>
                            </select> of the following conditions are met&#58;
                        </div> 
                        <br/> 
                        <div>
                            <select style="width:70px;">
                                <option value="#">Length</option> 
                                <option value="#">Width</option>
                                <option value="#">Height</option>
                                <option value="#">Weight</option>
                            </select>&nbsp;&nbsp;
                            <select style="width:40px;">
                                <option value="#">&gt;</option> 
                                <option value="#">=</option>
                                <option value="#">&lt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text">&nbsp;&nbsp;<select style="width:70px;">
                                <option value="#">inches</option> 
                                <option value="#">feet</option>
                                <option value="#">lbs</option>
                            </select>
                        </div>
                        <br/> 
                        <div>
                            <select style="width:70px;">
                                <option value="#">Width</option> 
                                <option value="#">Length</option>
                                <option value="#">Height</option>
                                <option value="#">Weight</option>
                            </select>&nbsp;&nbsp;
                            <select style="width:40px;">
                                <option value="#">&gt;</option> 
                                <option value="#">=</option>
                                <option value="#">&lt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text">&nbsp;&nbsp;<select style="width:70px;">
                                <option value="#">inches</option> 
                                <option value="#">feet</option>
                                <option value="#">lbs</option>
                            </select>
                        </div>
                        <br/> 
                        <div>
                            <select style="width:70px;">
                                <option value="#">Height</option> 
                                <option value="#">Width</option>
                                <option value="#">Length</option>
                                <option value="#">Weight</option>

                            </select>&nbsp;&nbsp;
                            <select style="width:40px;">
                                <option value="#">&gt;</option> 
                                <option value="#">=</option>
                                <option value="#">&lt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text">&nbsp;&nbsp;<select style="width:70px;">
                                <option value="#">inches</option> 
                                <option value="#">feet</option>
                                <option value="#">lbs</option>
                            </select>
                        </div>
                        <br/> 
                         <div>
                            <select style="width:70px;">
                                <option value="#">Weight</option> 
                                <option value="#">Width</option>
                                <option value="#">Height</option>
                                <option value="#">Length</option>

                            </select>&nbsp;&nbsp;
                            <select style="width:40px;">
                                <option value="#">&gt;</option> 
                                <option value="#">=</option>
                                <option value="#">&lt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text">&nbsp;&nbsp;<select style="width:70px;">
                                <option value="#">inches</option> 
                                <option value="#">feet</option>
                                <option value="#">lbs</option>
                            </select>
                        </div>
                        <br/> 
                        <div>Perform the following action&#58;
                            <select>
                                <option value="#">Ship this product separately</option>
                                <option value="#">Inform the vendor to ship this product</option>
                                <option value="#">Route the product to warehouse</option>
                                <option value="#">Cancel this order</option>
                            </select>
                        </div>
                </div>
                <br/>
                </tr>
                <tr>
                    <td><a class="button" href="rulelist.html">Cancel</a></td>  
                    <td><a class="button" href="rulelist.html">Update</a></td>
                </tr>
            </table>   
            </form>
        </div>
    
    
 
  
    </div>
    <!-- content ends -->

                
    <!-- footer starts -->
       </div>
        <div class="footer"><span>&copy;2013 eBusiness Team</span>
        </div>
    <!-- footer ends -->

</body>
</html>
