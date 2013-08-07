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
 <title>DSG - Store Threshold Template </title>
<link href="css/common.css" rel="stylesheet" type="text/css" />
 <link href="css/overview.css" rel="stylesheet" type="text/css" />  
 <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
 <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
 <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>  
 <link rel="stylesheet" href="/resources/demos/style.css" />
 <link href="css/pop.css" rel="stylesheet" type="text/css" href="">
 <script src="js/pop.js" type="text/javascript"></script>
 <script src="js/animation.js" type="text/javascript"></script>
  <script>
  
  $(function() {
    $("#sort tbody").sortable().disableSelection();
  });

  //var rule = allRule;
    function show() {
        
	    document.getElementById('secondStep').style.display='block';
	    document.getElementById('firstStep').style.display='none';
	    document.getElementById('buttons').style.display='none';
}
  
  function close() {
	  document.getElementById('secondStep').style.display='none';
	  document.getElementById('firstStep').style.display='block';
      document.getElementById('buttons').style.display='block';    
      


      
  } 

  function pageOnLoad() {
	  console.log("logged");
	  close();
  }
  
  /*function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;
 
        for(var i=0; i<rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if(null != chkbox && true == chkbox.checked) {
                table.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    }catch(e) {
        alert(e);
    }
  }*/

//style="margin-left:50px;float:left;width:800px;"
 function deleteRow(row){
    var i = row.parentNode.parentNode.rowIndex;

    var x;
    var r = confirm("Do you really want to delete this rule?");
    if(r == true){
        document.getElementById('sort').deleteRow(i);
    }
    else{
        ;
    }
 }
 
 
 function SubmitForm()
 {
	 console.log("start");
	 var rulename = '${rulename}';
	 var table = document.getElementById("sort");
	 for (var i = 0, row; row = table.rows[i]; i++){
	    //iterate through rows
	    //rows would be accessed using the "row" variable assigned in the for loop
	    for (var j = 0, col; col = row.cells[j]; j++) {
	    	console.log("caonimabi"+j);
	      if (col.innerText == rulename){

	    	  document.getElementById('priorityId').value= i;

	      }
	    	//iterate through columns
	     //columns would be accessed using the "col" variable assigned in the for loop
	    }  
	 }
   document.forms['myForm'].submit() ;
 }
 window.onload =pageOnLoad;
 
 </script>
</head>

<body>
    <div class="header">
    <div class="header-content">
        <div class="logo">
            <a href="orderlist.jsp"><img src="image/logo.png"/></a></div>
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
                <li class=""><a href="categorylist.jsp">Category List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="CreateCategory.jsp">New Category</a><span class="normal">&nbsp;</span></li>  
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="toggletwo"
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" id="navtwo">
                <li class=""><a href="gotorulelist.action">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class="selected"><a href="gotonewbizrulelist.action">New Business Rule</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" id="togglethree"
            memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" id="navthree">
                <li class=""><a href="orderlist.jsp">Order List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="#">Routing visualization</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="statistics.jsp">Statistics</a><span class="normal">&nbsp;</span></li>
                
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

            <form name ="myForm" action="newrule">
            
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
                    <div id ="firstStep" class="drl"> 
                         <div style="padding-left:100px">
                         <div> If
                            <select style="width:50px;" name="conditions">
                                <option value="all">All</option> 
                                <option value="any">Any</option>
                            </select> of the following conditions are met&#58;
                        </div>  
                        <div>
                            <select style="width:70px;" name="attribute">
                                <option value="Length">Length</option> 
                                <option value="Width">Width</option>
                                <option value="Height">Height</option>
                                <option value="Weight">Weight</option>
                            </select>&nbsp;&nbsp;
                            <select style="width:40px;" name="operator">
                                <option value="&lt;">&gt;</option> 
                                <option value="=">=</option>
                                <option value="&gt;">&lt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text" name="value">&nbsp;&nbsp;<select style="width:70px;">
                                <option value="#">inches</option> 
                                <option value="#">feet</option>
                                <option value="#">lbs</option>
                            </select>
                        </div>
                        <div>
                            <select style="width:70px;" name="attribute">
                                <option value="Length">Length</option> 
                                <option value="Width">Width</option>
                                <option value="Height">Height</option>
                                <option value="Weight">Weight</option>
                            </select>&nbsp;&nbsp;
                            <select style="width:40px;" name="operator" >
                                <option value="&lt;">&gt;</option> 
                                <option value="=">=</option>
                                <option value="&gt;">&lt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text" name="value">&nbsp;&nbsp;<select style="width:70px;">
                                <option value="#">inches</option> 
                                <option value="#">feet</option>
                                <option value="#">lbs</option>
                            </select>
                        </div>
                        <div>
                            <select style="width:70px;" name="attribute">
                                <option value="Length">Length</option> 
                                <option value="Width">Width</option>
                                <option value="Height">Height</option>
                                <option value="Weight">Weight</option>

                            </select>&nbsp;&nbsp;
                             <select style="width:40px;" name="operator" >
                                <option value="&lt;">&gt;</option> 
                                <option value="=">=</option>
                                <option value="&gt;">&lt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text" name="value">&nbsp;&nbsp;<select style="width:70px;">
                                <option value="#">inches</option> 
                                <option value="#">feet</option>
                                <option value="#">lbs</option>
                            </select>
                        </div>
                         <div>
                            <select style="width:70px;" name="attribute">
                                <option value="Length">Length</option> 
                                <option value="Width">Width</option>
                                <option value="Height">Height</option>
                                <option value="Weight">Weight</option>

                            </select>&nbsp;&nbsp;
                            <select style="width:40px;" name="operator" >
                                <option value="&lt;">&gt;</option> 
                                <option value="=">=</option>
                                <option value="&gt;">&lt;</option>
                            </select>&nbsp;&nbsp;
                            <input style="width:50px;" type="text" name="value">&nbsp;&nbsp;<select style="width:70px;">
                                <option value="#">inches</option> 
                                <option value="#">feet</option>
                                <option value="#">lbs</option>
                            </select>
                        </div>
                        <div>Perform the following action&#58;</div>
                        <div><select name="actions">
                                <option value="miniumPackage">Ship this product separately</option>
                                <option value="diffpackage">Separate the product into different packages</option>
                        </select></div>
                        </div>
                    </div>
                </tr>
                <tr id = "buttons">
                    <td style = "text-align:right"><a class="button"  onclick='show()'>Next</a></td>
                    <td>
                    <a class="button" href="#">Cancel</a></td>
                    
                <input type="hidden" name="rulename" id="rulename" value=<%=request.getAttribute("rulename")%> />
                <input type="hidden" name="templatename"  value=<%=request.getAttribute("templatename")%> />
                <input type="hidden" name="categoryname"  value=<%=request.getAttribute("categoryname")%> />
           		<input type="hidden" id="priorityId" name="priority"> 
           
                    
                </tr>
                 </table>   
            
            <div id = "secondStep">
            <table id="sort" class="grid" border="0" style="border-collapse:collapse;width:100%;font-size:12px;">
			<thead>
                        <tr style="height:30px;background-color:#f1f1f1;border-bottom:none;">
                            <th style="text-align:center;color:#666;">Rule Number</th>
                            <th style="text-align:left;color:#666;">Rule Name</th>
                            <th style="text-align:left;color:#666;">Rule Description</th>
                        </tr>
                    </thead>
   			<c:set var="ruleNum" value ="1" />
            <c:forEach var="allRule" items="${allRule}" >
            
            		<tr style="height:30px;">
            				
                            <td style="border-bottom:1px #E5E5E5 solid;padding: 6px 10px 6px 5px;text-align: center;color:#666;">${ruleNum}</td>
                            <td style="border-bottom:1px #E5E5E5 solid;padding: 6px 10px 6px 5px;text-align: left;color:#666;">${allRule.ruleName}</td>
                            <td style="border-bottom:1px #E5E5E5 solid;padding: 6px 10px 6px 5px;text-align: left;color:#666;">${allRule.ruleDescr}</td>
                        </tr>
                 <c:set var="ruleNum" value="${ruleNum+1}" />   
				</c:forEach>
				<tr style="height:30px;background-color:8CEEF5">
                            <td style="border-bottom:1px #E5E5E5 solid;padding: 6px 10px 6px 5px;text-align: center;color:#666;background-color:#8CEEF5">Your New Rule</td>

                            <td style="border-bottom:1px #E5E5E5 solid;padding: 6px 10px 6px 5px;text-align: left;color:#666;background-color:#8CEEF5">${rulename.replace("%20"," ")}</td>

                            <td style="border-bottom:1px #E5E5E5 solid;padding: 6px 10px 6px 5px;text-align: left;color:#666;background-color:#8CEEF5">This is your new rule</td>
                </tr>
                <tr>
                	<td style = "text-align:right">
                	<a class="button" onclick='SubmitForm()'>Create</a></td>
                    <td><a class="button" onclick='close()'>Back</a>
                    <a class="button" href="newRules.jsp">Cancel</a></td>
                </tr>
            </table>
            </div>
            </form>
        </div>




    
    <!-- content ends -->

                
    <!-- footer starts -->
 
            <div class="footer"><span>©2013 eBusiness Team</span></div>
        
    <!-- footer ends -->

    </div>
</body>
</html>
