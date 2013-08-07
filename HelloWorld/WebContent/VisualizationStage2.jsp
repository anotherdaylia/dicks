<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 <%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    %>
     

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   
 <title>DSG-Visualization Stage1</title>
 <link href="css/common.css" rel="stylesheet" type="text/css" />
 <link href="css/overview.css" rel="stylesheet" type="text/css" /> 
 <link href="css/pop.css" rel="stylesheet" type="text/css">
 <script src="js/jquery.min.js" type="text/javascript"> </script>
 <script src="js/animation.js" type="text/javascript"></script>
 <script src="js/pop.js" type="text/javascript"></script>
 <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
 <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
 <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script> 
 <link rel="stylesheet" href="/resources/demos/style.css" />
 <script>
  $(function() {
    $("#accordion").accordion({
        collapsible: true,
        active: 1,
    });
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
    <div class="aside" id="aside-menu">
    <div class="title"><h1></h1>
    </div>
    <ul class="nav">
        <li class=""><a class="recordable open" id="toggleone" href="#" memo="{id:'21',type:'menu',global:1,status:''}">Manage Category</a>
            <ul class="nav-two" id="navone">
                <li class=""><a href="categorylist.html">Category List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="CreateCategory.html">New Category</a><span class="normal">&nbsp;</span></li>  
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="toggletwo" memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" id="navtwo">
                <li class=""><a href="rulelist.html">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="newrule.html">New Business Rule</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="RulePriority.html">Business Rule Priority</a><span class="normal">&nbsp;</span></li>
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" id="togglethree" memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" id="navthree">
                <li class="selected"><a href="orderlist.html">Order List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="statistics.html">Statistics</a><span class="normal">&nbsp;</span></li>
            </ul>
        </li> 
        <li class=""><a href="placeorder.html" id="togglefour" memo="{id:'21',type:'menu',global:1,status:''}">Place Order</a>
        </li>   
    </ul>
    </div>
    <!-- menu bar ends -->


    <!-- content starts -->
    <div class="minibar recordable" id="minibar" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;1&quot;}" style="display:none;"><a id="menu-untoggle" href="javascript:void(0)" class="unfold" ></a></div> 
    <div class="main"  id="main-body">
        <div class="content clearfix">
                
        <div class="title-bar clearfix">
            <h1 class="l">Routing Visualization</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

            <li style="list-style:none;">
                <span><a href="#">Home</a><span> &gt; </span></span>
                <span><a href="#">Visualization Dashboard</a><span> &gt; </span></span>
                <span><a href="#">Order List</a><span> &gt; </span></span>                
                <span>Order Routing Visualization<span>   
            </li>

            <!-- Success Message and Error Message -->
            <div class="success_area" style="display:none;">successMessage</div>
            <div class="warning" style="display:none;">errorMessage</div>
            <!-- Success Message and Error Message -->
            <br/>
            <!-- form starts-->
            <form action="">
            <div style="padding-left:5px;width:760px;">
                <div id="block1" style="float:left;height:465px;width:150px;border:1px solid #ccc;border-radius:5px;margin-right:1px;">
                    <div id="accordion" style="float:left;width:150px;margin-top:-3px;">
                        <h3>Stage 1</h3>
                        <div>
                            <ul>
                            	<c:forEach items="${appliedRules}" var="order">
                                	<li style="height:30px;"><a href="#">${appliedRules}</li>
                            	</c:forEach>
                            </ul>
                        </div>
                        
                        <h3>Stage 2</h3>
                        <div>
                            <ul>
                                <c:forEach items="${packages}" var="order">
                                	<li style="height:30px;"><a href="#">${packages}</li>
                            	</c:forEach>
                            </ul>
                        </div>
                    
                        <h3>Stage 3</h3>
                        <div>
                            <ul>
                                <c:forEach items="${routes}" var="order">
                                	<li style="height:30px;"><a href="#">${routes}</li>
                            	</c:forEach>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div id="block2" style="float:left;height:465px;width:600px;border:1px solid #ccc;border-radius:5px;overflow-y:scroll;">
                    <div style="padding-left:20px;">
                        <div name="package" style="height:30px;font-size:18px;margin-top:10px;padding-bottom:10px;">
                            Package 1
                        </div>
                        
                        <div id="included" style="height:60px;">
                            <div style="float:left;height:20px;width:110px;font-size:14px;">
                                Included Items&#58;
                            </div>
                            
                            <div style="float:left;">
                                <div name="items" style="padding-left:20px;height:20px;font-size:12px;">
                                    Hat&#58; quantity 1
                                </div>
                                <div name="items" style="padding-left:20px;height:20px;font-size:12px;">
                                    Basketball&#58; quantity 1
                                </div>
                            </div>
                        </div>

                        <div id="split" style="height:100px;">
                            <div name="splitNo" style="float:left;height:20px;font-size:14px;">
                                Spilt 0&#58;
                            </div>
                            <div style="float:left;height:100px;">
                                <div name="failed" style="padding-left:20px;height:20px;font-size:12px;">
                                    Failed&#58; 300&#47;580 stores
                                </div>
                                <div id="success" style="padding-left:20px;height:20px;font-size:12px;">
                                    Success&#58;
                                    <table style="float:left;border-collapse:collapse;width:200px;font-size:12px;margin-left:10px;">
                                        <tr style="height:20px;background-color:#f1f1f1;border-bottom:none;">
                                            <th style="text-align:center;color:#666;"></th>
                                            <th style="text-align:center;color:#666;">Store ID</th>
                                            <th style="text-align:center;color:#666;">Total Cost</th>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">01</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">Store 01</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:right;color:#666;">&#36;10</td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">02</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">Store 02</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:right;color:#666;">&#36;15</td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">03</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">Store 03</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:right;color:#666;">&#36;21</td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">04</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">Store 04</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:right;color:#666;">&#36;32</td>
                                        </tr>
                                        <tr>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">05</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:center;color:#666;">Store 05</td>
                                            <td style="border-bottom:1px #E5E5E5 solid;text-align:right;color:#666;">&#36;53</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            <!-- form ends -->        
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