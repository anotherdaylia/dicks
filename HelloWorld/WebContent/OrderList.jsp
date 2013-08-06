
<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    %>
     <base href="<%=basePath%>">
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   
 <title>DSG - Order List</title>
 <link href="css/common.css" rel="stylesheet" type="text/css" />
 <link href="css/overview.css" rel="stylesheet" type="text/css" /> 
 <script src="js/jquery.min.js" type="text/javascript"> </script>
 <script src="js/animation.js" type="text/javascript"></script>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css" />
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
</head>

<body>
    <div class="header">
    <div class="header-content">
        <div class="logo">
            <a href="orderlist.html"><img src="image/logo.png" /></a></div>
        <div class="top-nav">
            <a href="#" target="_blank" class="trackable">
            <span class="nav-icon help-icon"></span>Help</a>|
            <a href="#" target="_blank" class="trackable">Account</a>|
            <a href="#">Log out</a>
        </div>
    </div>
    </div>
    
   
    <div class="body clearfix">
    
    <!-- menu bar starts -->
    <jsp:include page="NavigationTemplate.jsp" />
    <!-- menu bar ends -->

    <!-- content starts -->
    
    <div class="main"  id="main-body">
        <div class="content clearfix">
                
        <div class="title-bar clearfix">
            <h1 class="l">Existing Order List</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

            <li style="list-style:none;">
                <span><a href="#">Home</a><span> &gt; </span></span>
                <span><a href="#">Visualization Dashboard</a><span><span> &gt; </span>
                <span>Order List</span>
            </li>

            <!-- Success Message and Error Message -->
            <div class="success_area">successMessage</div>
            <div class="warning">errorMessage</div>
            <!-- Success Message and Error Message -->

            <br/>
        
        <div>
            <div>
            <span>Start Date: <input type="text" id="datepickerstart" /></span>&nbsp;&nbsp;
            <span>End Date: <input type="text" id="datepickerend" /></span>&nbsp;&nbsp;
            <span>Order Status: <select><option>All</option>
                                        <option>Completed</option>
                                        <option>Cancelled</option>
                                        <option>Pending</option>
            </select></span>&nbsp;&nbsp;
            <span>Order #: <input type="text" class="text"/></span>
            <span class="r"><a class="button" href="#">Search</a></span>
            </div>
            <p class="note">*Maximun 3-month length between start date and end date</p>
        </div>
        <br>
        <div id="Outline" class="table-list">
        <table cellspacing="0" cellpadding="0" class="list">
            <tbody><tr class="title">
                    <th>Order#</th>
                    <th>Order Date</th>
                    <th>Complete Date</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                    <tr>
                        <td class="">1098737</td>
                        <td class="">02/10/2013</td>
                        <td class="">02/13/2013</td>
                        <td class="">Completed</td>
                        <td class=""><a class="button" href="#">View</a></td>
                    </tr>
                        <tr>
                        <td class="">1098735</td>
                        <td class="">03/10/2013</td>
                        <td class="">03/12/2013</td>
                        <td class="">Completed</td>
                        <td class=""><a class="button" href="#">View</a></td>
                    </tr>
                    <tr class="last">
                        <td class="">1098634</td>
                        <td class="">07/21/2013</td>
                        <td class="">-</td>
                        <td class="">Pending</td>
                        <td class=""><a class="button" href="#">View</a></td>
                    </tr>
                </tbody>
            </table>
            <div id="Paging">
                <div class="paging clearfix">
                    <div class="page-size">Items per page：10
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
            <div class="footer"><span>©2013 eBusiness Team</span></div>
        </div>
    <!-- footer ends -->

    </div>
</body>

</html>
