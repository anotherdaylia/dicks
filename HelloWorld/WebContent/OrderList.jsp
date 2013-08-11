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
                <li class="" id="catelist"><a href="<%=basePath%>gotocategorylist.action">Category List</a><span class="normal">&nbsp;</span></li>
                <li class="" id="newcatelist"><a href="<%=basePath%>gotonewcategory.action">New Category</a><span class="normal">&nbsp;</span></li>  
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="toggletwo"
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" id="navtwo">
                <li class="" id="bizrulelist"><a href="<%=basePath%>gotorulelist.action">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class="" id="newbizrulelist"><a href="<%=basePath%>gotonewbizrulelist.action">New Business Rule</a><span class="normal">&nbsp;</span></li>
                <li class="" id="ruleprioritylist"><a href="<%=basePath%>gotoruleprioritylist.action">Business Rule Priority</a><span class="normal">&nbsp;</span></li> 
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" id="togglethree"
            memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" id="navthree">
                <li class="selected" ><a id="orderlist" onclick="f(this)" href="<%=basePath%>gotoorderlist.action">Order List</a><span class="normal">&nbsp;</span></li>
                <li class="" id="routelist"><a href="#">Routing visualization</a><span class="normal">&nbsp;</span></li>
                <li class="" id="statlist"><a href="statistics.html">Statistics</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="togglefour"
            memo="{id:'21',type:'menu',global:1,status:''}">Place New Order</a>
            <ul class="nav-two" id="navtwo">
                <li class="" id="neworderlist"><a href="<%=basePath%>gotoplaceorder.action">New Order</a><span class="normal">&nbsp;</span></li>
                
            </ul>
		</li>   
    </ul>
    </div>
<script>
$(function() {
$( "#datepickerstart" ).datepicker();
	});
</script>
<script>
$(function() {
$( "#datepickerend" ).datepicker();
	});
</script>
    <!-- menu bar ends -->

    <!-- content starts -->
    
    <div class="main"  id="main-body">
        <div class="content clearfix">
                
        <div class="title-bar clearfix" style="height:80px;">
            <h1 class="l">Order List</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

            <li style="list-style:none;">
                <span><a href="#">Home</a><span> &gt; </span></span>
                <span><a href="#">Visualization Dashboard</a><span><span> &gt; </span>
                <span>Order List</span>
            </li>

            <!-- Success Message and Error Message -->
            <div class="success_area" style="display:none;">successMessage</div>
            <div class="warning" style="display:none;">errorMessage</div>
            <!-- Success Message and Error Message -->
            <br/>
        </div>
        
        <div>
            <p class="title">&nbsp;Today's Summary</p>
            
            <div id="Outline" class="table-list">
            <table cellspacing="0" cellpadding="0" class="list">
                <tbody>
                    <tr class="title">
                        <th>Order Status</th>
                        <th>Received</th>
                        <th>Processed</th>
                        <th>Allocated</th>
                        <th>Reallocated</th> 
                    </tr>
                    <tr>
                        <td>Numbers</td>
                        <td>10000</td>
                        <td>10000</td>
                        <td>9000</td>
                        <td>1000</td> 
                    </tr>
                </tbody>
            </table>
            </div>
            <br/>
            <hr/>
            <br/>
            
            <div>
            <span>Start Date: <input type="text" id="datepickerstart" /></span>&nbsp;&nbsp;
            <span>End Date: <input type="text" id="datepickerend" /></span>&nbsp;&nbsp;
            <span>Order Status: <select class="search"><option>All</option>
                                        <option>Received</option>
                                        <option>In Process</option>
                                        <option>Allocated</option>
                                        <option>Reallocated</option>
            </select></span>&nbsp;&nbsp;
            <span>Order #: <input type="text" class="text"/></span>
            <span class="r"><a class="button" href="#">Search</a></span>
            </div>
            <p class="note">*Maximum 3-month length between start date and end date</p>
        </div>
        <br>
        <div id="Outline" class="table-list">
        <table cellspacing="0" cellpadding="0" class="list">
            <tr class="title">
                    <th>Order#</th>
                    <th>Order Date</th>
                    <th>Complete Date</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                  <c:forEach items="${ordersList}" var="order">
                    <tr>
                        <td>${order.orderId}</td>
                        <td>${order.orderDate}</td>
                        <td>${order.orderStatus}</td>
                        <td><a class="button" href="<%=basePath%>orderdetail.action?id=${order.orderId}">View</a></td>
                    </tr>
                  </c:forEach>
                </tbody>
            </table>
            <div id="Paging">
                <div class="paging clearfix">
                    <div class="page-size">Items per page:10
                    </div>
                    <div class="page-number">
                        <a class="number selected" href="javascript:void(0);" data="1">1</a><a class="number" href="javascript:void(0);" data="2">2</a><a class="number" href="javascript:void(0);" data="3">3</a>...<a class="number" href="javascript:void(0);" data="5">5</a><a href="javascript:void(0);" class="next" data="2">Next&gt;</a>Page <input class="text" type="text"> <a href="javascript:void(0)" class="button"><span>Go</span></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    <!-- content ends -->



                
    <!-- footer starts -->
        </div>
            <div class="footer"><span>&copy;2013 eBusiness Team</span></div>
        </div>
    <!-- footer ends -->

    </div>
</body>

</html>
