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
 <title>DSG-Manage Business rules</title>
 <link href="css/common.css" rel="stylesheet" type="text/css" />
 <link href="css/overview.css" rel="stylesheet" type="text/css" /> 
 <link href="css/pop.css" rel="stylesheet" type="text/css" href="">
 <script src="js/jquery.min.js" type="text/javascript"> </script>
 <script src="js/animation.js" type="text/javascript"></script>
 <script src="js/pop.js" type="text/javascript"></script>
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
    <div class="title"><h1>My Tool</h1>
       <!-- <a href="javascript:void(0)" class="fold recordable" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;0&quot;}" id="menu-toggle"></a>
        -->
    </div>
    <ul class="nav">
        <li class=""><a class="recordable open" id="toggleone" href="#" 
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Category</a>
            <ul class="nav-two" id="navone">
                <li class=""><a href="<%=basePath%>gotocategorylist.action">Category List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="#">New Category</a><span class="normal">&nbsp;</span></li>  
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="toggletwo"
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" id="navtwo">
                <li class="selected"><a href="<%=basePath%>gotorulelist.action">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="newrule.html">New Business Rule</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" id="togglethree"
            memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" id="navthree">
                <li class=""><a href="<%=basePath%>gotoorderlist.action">Order List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="#">Routing visualization</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="statistics.html">Statistics</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>   
    </ul>
    </div>
    <!-- menu bar ends -->

    <!-- content starts -->
    <div class="minibar recordable" id="minibar" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;1&quot;}" style="display:none;"><a id="menu-untoggle" href="javascript:void(0)" class="unfold" ></a></div> 
    <div class="main"  id="main-body">
        <div class="content clearfix">
                
        <div class="title-bar clearfix">
            <h1 class="l">Manage Business Rules</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

            <li style="list-style:none;">
                <span><a href="#">Home</a><span> &gt; </span></span>
                <span>Manage Business rules<span>   
            </li>

            <!-- Success Message and Error Message -->
            <div class="success_area">successMessage</div>
            <div class="warning">errorMessage</div>
            <!-- Success Message and Error Message -->

            <br/>
            <div>
            <a class="button" id="add-to-cart" href="#">Delete Selected </a>&nbsp; |  &nbsp;
            <a href="CreateCategory.html" class="button"> + New Rule</a>
            <div class="r"><input type="text" class="searchtext" placeholder="Rule name"/>
                <a href="#" class="button">Search</a>
            </div>
            </div>
        <br/>
        <div id="Outline" class="table-list">
        <table cellspacing="0" cellpadding="0" class="list">
            <tbody><tr class="title">
                <th><input type="checkbox" id="selectall"/></th>
                <th>Rule ID</th>
                <th>Rule Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
                <tr>
                    <td class=""><input type="checkbox" class="case"/></td>
                    <td class="">005</td>
                    <td class="">Rule1</td>
                    <td class="">In market store</td>
                    <td><a class="button toggle">Disable</a></td>
                    <td class=""><a class="button" href="viewrule.html">View</a>  <a class="button" href="editrule.html">Edit</a></td>
                </tr>
                    <tr>
                    <td class=""><input type="checkbox" class="case"/></td>
                    <td class="">033</td>
                    <td class="">Rule2</td>
                    <td class="">Safety stock</td>
                    <td><a class="button toggle">Disable</a></td>
                    <td class=""><a class="button" href="#">View</a>  <a class="button" href="editrule.html">Edit</a></td>
                </tr>
                <tr class="last">
                    <td class=""><input type="checkbox" class="case"/></td>
                    <td class="">039</td>
                    <td class="">Rule3</td>
                    <td class="">Ship Complete</td>
                    <td><a class="button toggle">Disable</a></td>
                    <td class=""><a class="button" href="#">View</a>  <a class="button" href="editrule.html">Edit</a></td>
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

        <!-- Deletion Pop up -->
        <div id="pop-back"></div>
        <div id="cart1" class="cart">
            <div class="popheader"> 
              <span class="title"><strong>&nbsp;Delete Category</strong></span>          
            </div><br>
            <div>&nbsp;&nbsp;Are you sure you want to delete all selected categry(categories)?</div>
            
            <div class="r" style="margin-right:20px;">
              <a class="button" onclick="closePop()" type="submit">Yes</a>
              <a class="button" onclick="closePop()" type="button">No</a>
            </div>
        </div>
        <!-- Deletion pop-up ends -->

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