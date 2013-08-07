    <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   
 <title>DSG-Manage Category</title>
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
    if(document.getElementById('benefits').style.display=='none') {
      document.getElementById('benefits').style.display='block';
    }
}
  
  function close() {
      if(document.getElementById('benefits').style.display=='block') {
        document.getElementById('benefits').style.display='none';
      }
  } 
  
  
  
  
  function pageOnLoad() {
	  console.log("logged");
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
	 var rulename = '${rulename}';
	 var table = document.getElementById("sort");
	 var row = table.rows[0];
	    //iterate through rows
	    //rows would be accessed using the "row" variable assigned in the for loop
	    for (var j = 0, col; col = row.cells[j]; j++) {
	      if (col.innerText == rulename){
	    	  console.log("caonimabi");
	      }
	    	//iterate through columns
	      
	      //columns would be accessed using the "col" variable assigned in the for loop
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
            <a href="#"><img src="image/logo.png" /></a></div>
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
       <!-- <a href="javascript:void(0)" class="fold recordable" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;0&quot;}" id="menu-toggle"></a>
        -->
    </div>
    <ul class="nav">
        <li class=""><a class="recordable open" href="#" memo="{id:'21',type:'menu',global:1,status:''}">Manage Category</a>
            <ul class="nav-two" >
                <li class=""><a href="categorylist.html">Category List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="CreateCategory.html">New Category</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" >
                <li class=""><a href="rulelist.html">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="newrule.html">New Business Rule</a><span class="normal">&nbsp;</span></li>
                <li class="selected"><a href="RulePriority.html">Business Rule Priority</a><span class="normal">&nbsp;</span></li> 
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" >
                <li class=""><a href="orderlist.html">Order List</a><span class="normal">&nbsp;</span></li>
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
            <h1 class="l">Business Rule Priority</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

        </div>
        <div ><br/><br/>
            <li style="list-style:none;"><span><a href="#">Home</a><span> &gt; </span></span></span>
                <span><a href="#">Manage Business Rule</a><span> &gt; </span></span>
                <span>Business Rule Priority</span>
            </li>
            <!-- Success Message and Error Message -->
            <div class="success_area" style="display:none">successMessage</div>
            <div class="warning" style="display:none">errorMessage</div>
            <!-- Success Message and Error Message -->
        </div>
        <div><br/><br/>
            <form name = "myForm" action= "placeorder">

            <h4>Hint: Please drag and drop the rule to sort the rule priority</h4><br/><br/>

            <div id ="haha"> 
                
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
                            <td style="border-bottom:1px #E5E5E5 solid;padding: 6px 10px 6px 5px;text-align: left;color:#666;background-color:#8CEEF5">${rulename}</td>
                            <td style="border-bottom:1px #E5E5E5 solid;padding: 6px 10px 6px 5px;text-align: left;color:#666;background-color:#8CEEF5">This is your new rule</td>
                </tr>
                
                <tr>
                    <td style = "text-align:right"><a class="button" href="#" onclick='SubmitForm()'>Create</a></td>
                    <td><a class="button" href="#">Back</a><a class="button" href="#">Cancel</a></td>
                    
                    
                </tr>
            </table>
            
            </div>
            
            <div id="priorityTable">
            
     		 </div>
			 	<input type="hidden" name="rulename"  value=<%=request.getAttribute("rulename")%> />
                
            </form>

        <!-- Deletion Pop up -->
        <div id="pop-back"></div>
        <div id="cart1" class="cart">
            <div class="popheader"> 
              <span class="title"><strong>&nbsp;Delete Rule</strong></span>          
            </div><br>
            <div>&nbsp;&nbsp;Are you sure you want to delete the rule?</div>
            
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
