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
 <title>DSG - Store Threshold Template </title>
 <link href="css/common.css" rel="stylesheet" type="text/css" /> 
 <script src="js/jquery.min.js" type="text/javascript"> </script>
 <script src="js/animation.js" type="text/javascript"></script>
</head>

<body>
    <div class="header">
    <div class="header-content">
        <div class="logo">
            <a href="orderlist.html"><img src="image/logo.png"/></a></div>
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
                <li class=""><a href="categorylist.html">Category List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="CreateCategory.html">New Category</a><span class="normal">&nbsp;</span></li>  
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="toggletwo"
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" id="navtwo">
                <li class=""><a href="rulelist.html">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class="selected"><a href="newrule.html">New Business Rule</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" id="togglethree"
            memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" id="navthree">
                <li class=""><a href="orderlist.html">Order List</a><span class="normal">&nbsp;</span></li>
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
                
        <div class="title-bar clearfix"></div>
            <h1 class="l">New Business Rule</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

            <li style="list-style:none;"><span><a href="#">Home</a><span> > </span></span></span>
                <span><a href="#">Manage Business Rule</a><span> > </span></span>
                <span>New Business Rule</span>
            </li>
            
            <!-- Success Message and Error Message -->
            <div class="success_area">successMessage</div>
            <div class="warning">errorMessage</div>
            <!-- Success Message and Error Message -->

            <form action="newrule">
            <table class="text">
                <tr>
                    <td>Rule Name&#58;</td>
                    <td>Set Store Threshold</td>
                </tr>   
                <tr>
                    <td>Rule Description&#58;</td>
                    <td>Set store threshold</td>
                </tr>
                <tr>
                    <td>Stage:</td>
                    <td>Stage1</td>
                </tr>
                <tr>
                    <td>Rule Template&#58;</td>
                    <td>Set Store Threshold</td>
                </tr>
                <tr class="drl-height">
                    <td colspan="2" >Rule Editor&#58;</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <div class="drl"> 
                         <div style="padding-left:100px">
                         <div> If
                            <select style="width:50px;" name="conditions">
                                <option value="#">All</option> 
                                <option value="#">Any</option>
                            </select> of the following conditions are met&#58;
                        </div>  
                        <div>
                            <select style="width:70px;" name="size1">
                                <option value="Length">Length</option> 
                                <option value="Width">Width</option>
                                <option value="Height">Height</option>
                                <option value="Weight">Weight</option>
                            </select>&nbsp;&nbsp;
                            <select style="width:40px;" name="operator1">
                                <option value="&lt;">&lt;</option> 
                                <option value="=">=</option>
                                <option value="&gt;">&gt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text" name="inches1">&nbsp;&nbsp;inches
                        </div>
                        <div>
                            <select style="width:70px;" name="size2">
                                <option value="Length">Length</option> 
                                <option value="Width">Width</option>
                                <option value="Height">Height</option>
                                <option value="Weight">Weight</option>
                            </select>&nbsp;&nbsp;
                            <select style="width:40px;" name="operator2" >
                                <option value="&lt;">&lt;</option> 
                                <option value="=">=</option>
                                <option value="&gt;">&gt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text" name="inches2">&nbsp;&nbsp;inches
                        </div>
                        <div>
                            <select style="width:70px;" name="size3">
                                <option value="Length">Length</option> 
                                <option value="Width">Width</option>
                                <option value="Height">Height</option>
                                <option value="Weight">Weight</option>

                            </select>&nbsp;&nbsp;
                             <select style="width:40px;" name="operator3" >
                                <option value="&lt;">&lt;</option> 
                                <option value="=">=</option>
                                <option value="&gt;">&gt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text" name="inches3">&nbsp;&nbsp;inches
                        </div>
                         <div>
                            <select style="width:70px;" name="size4">
                                <option value="Length">Length</option> 
                                <option value="Width">Width</option>
                                <option value="Height">Height</option>
                                <option value="Weight">Weight</option>

                            </select>&nbsp;&nbsp;
                            <select style="width:40px;" name="operator4" >
                                <option value="&lt;">&lt;</option> 
                                <option value="=">=</option>
                                <option value="&gt;">&gt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text" name="inches4">&nbsp;&nbsp;inches
                        </div>
                        <div>Perform the following action&#40;s&#41;&#58;</div>
                        <div><select name="shippackage">
                                <option value="separately">Ship this product separately</option>
                                <option value="diffpackage">Separate the product into different packages</option>
                        </select></div>
                        </div>
                    </div>
                </tr>
                <tr>
                    <td><input type="submit" value="Create" class="button"></td>  
                    <td><a class="button" href="#">Back</a><a class="button" href="#">Cancel</a></td>
                </tr>
            </table>   
            </form>
        </div>




    
    <!-- content ends -->

                
    <!-- footer starts -->
 
            <div class="footer"><span>©2013 eBusiness Team</span></div>
        
    <!-- footer ends -->

    </div>
</body>
</html>