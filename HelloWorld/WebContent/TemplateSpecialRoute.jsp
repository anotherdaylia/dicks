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
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Group</a>
            <ul class="nav-two" id="navone">
                <li class="" id="catelist"><a href="<%=basePath%>gotocategorylist.action">Group List</a><span class="normal">&nbsp;</span></li>
                <li class="" id="newcatelist"><a href="<%=basePath%>gotonewcategory.action">New Group</a><span class="normal">&nbsp;</span></li>  
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="toggletwo"
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" id="navtwo">
                <li class="" id="bizrulelist"><a href="<%=basePath%>gotorulelist.action">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class="selected" id="newbizrulelist"><a href="<%=basePath%>gotonewbizrulelist.action">New Business Rule</a><span class="normal">&nbsp;</span></li>
                <li class="" id="ruleprioritylist"><a href="<%=basePath%>gotoruleprioritylist.action">Business Rule Priority</a><span class="normal">&nbsp;</span></li> 
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" id="togglethree"
            memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" id="navthree">
                <li class="" ><a id="orderlist" onclick="f(this)" href="<%=basePath%>gotoorderlist.action">Order List</a><span class="normal">&nbsp;</span></li>
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
    var availableTags = [
      "All",
      "Normal Mall",
      "Monroeville Mall",
      "West Mifflin",
      "Homestead",
      "Yonkers",
      "Paramus",
      "Station Island",
      "GSI",
      "Vendor Direct"
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#tags" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });

function textAreaAdjust(o) {
      o.style.height = "1px";
      o.style.height = (15+o.scrollHeight)+"px";
  }

function addSpecialRoute(myDiv) {

  var ni = document.getElementById(myDiv.id);

  var numi = document.getElementById('theValue');

  var num = (document.getElementById('theValue').value -1)+2;

  numi.value = num;

  var newdiv = document.createElement('div');

  var divIdName = 'specialroute'+num;

  newdiv.setAttribute('id',divIdName);

  newdiv.innerHTML = '<div style=\'padding-top:10px;padding-bottom:10px;\'>If the product quantity is&nbsp&nbsp&nbsp&nbsp </div><div style=\'padding-bottom:10px;\'><select style=\'width:120px;\' name=\'operator\' ><option value=\'&lt;\'>More Than</option> <option value=\'=\'>Equal</option><option value=\'&gt;\'>Less than</option></select>&nbsp;&nbsp; <input type=\'text\' name=\'productcount\' style=\'width:50px;\'> </div><div style=\'padding-bottom:10px;\'><div style=\'padding-bottom:10px;float:left;\'>Ship the product from&#58;&nbsp;&nbsp;</div><div style=\'padding-bottom:10px;float:left;\'class=\'ui-widget\'><textarea id=\'tags\' name = \'sources\' style=\'overflow:hidden;max-width:300px;width:300px;height:15px;\' onkeyup=\'textAreaAdjust(this)\' placeholder=\'Type in fulfillment sources&hellip;\' ></textarea></div> <a href=\'javascript:;\' onclick=\'removeElement('+divIdName+')\'>Remove</a></div><br/>';

                        

  ni.appendChild(newdiv);

}

function removeElement(divNum) {
  //var d = document.getElementById("myDiv");

  var olddiv = document.getElementById(divNum.id);

  olddiv.parentNode.removeChild(olddiv);

  //d.removeChild(olddiv);

};
</script>
<script>
function goBack(){
	window.history.go(-1);
}
</script>
    <!-- menu bar ends -->

    <!-- content starts -->
    <div class="minibar recordable" id="minibar" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;1&quot;}" style="display:none;"><a id="menu-untoggle" href="javascript:void(0)" class="unfold" ></a></div> 
    <div class="main"  id="main-body">
        <div class="content clearfix">
                
          <div class="title-bar clearfix">
            <h1 class="l">New Business Rule</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>
          
            <div>
            <li style="list-style:none;"><span><a href="#">Home</a><span> > </span></span></span>
                <span><a href="#">Manage Business Rule</a><span> > </span></span>
                <span>New Business Rule</span>
            </li>
            </div>
            <!-- Success Message and Error Message -->
            <div class="success_area" style="display:none">successMessage</div>
            <div class="warning" style="display:none">errorMessage</div>
            <!-- Success Message and Error Message -->
          </div>

            <form action="specialroute">
            <table id="rule" class="text">
                <tr>
                    <td>Rule Name&#58;</td>
                    <td>Special Route</td>
                </tr>   
                <tr>
                    <td>Rule Description&#58;</td>
                    <td>Set special route for products</td>
                </tr>
                <tr>
                    <td>Category&#58;</td>
                    <td>Fishing&#44;&nbsp;Clothes</td>
                </tr>
                <tr>
                    <td>Stage:</td>
                    <td>Stage1 - preprocessing</td>
                </tr>
                <tr>
                    <td>Rule Template&#58;</td>
                    <td>Special Route</td>
                </tr>
                <tr class="drl-height">
                    <td>Rule Editor&#58;</td>
                    <td style="width:500px;">
                    <div class="drl"> 
                      <div id="specialroute1">
                        <div style="padding-bottom:10px;">If the product quantity is &nbsp;&nbsp;&nbsp;</div>
                        <div id ="operatorDiv" style="padding-bottom:10px;">
                        <select style="width:120px;" name="operator" >
                                <option value="&lt;">More Than</option> 
                                <option value="=">Equal</option>
                                <option value="&gt;">Less than</option>
                            </select>&nbsp;&nbsp;
                            <input type="text" name="productcount" style="width:50px;"> 
                           </div>
                        <div style="padding-bottom:10px;float:left;">Ship the product from&#58;&nbsp;&nbsp;</div>
                        <div style="padding-bottom:10px;float:left;"class="ui-widget"><textarea id="tags" name = "sources" style="overflow:hidden;max-width:300px;width:300px;height:15px;" onkeyup="textAreaAdjust(this)" placeholder="Type in fulfillment sources&hellip;" ></textarea></div>
                      </div>
                      
                      <input type="hidden" value="1" id="theValue"/>
                        <a class="button" href="javascript:;" onclick="addSpecialRoute(myDiv);">+ Add Special Route</a>
                        <div id="myDiv"></div>
   
                     <input type="hidden" name="rulename"  value=<%=request.getAttribute("rulename")%> />
	                <input type="hidden" name="templatename"  value=<%=request.getAttribute("templatename")%> />
	                <input type="hidden" name="categoryname"  value=<%=request.getAttribute("categoryname")%> />
	           		<input type="hidden" id="priorityId" name="priority">   
                    </div>
                    </td>
                </tr>
                <tr>
                    <td><input type="button" value="Back" onclick="goBack()" class="button"> <a class="button" href="<%=basePath%>gotorulelist.action">Cancel</a></td>  
                    <td><input type="submit" value="Create" class="button"></td>
                </tr>
            </table>   
            </form>
          </div>
        </div>
    </div>

    <!-- content ends -->

                
    <!-- footer starts -->
      
    

      <div class="footer"><span>©2013 eBusiness Team</span></div>
    <!-- footer ends -->
    
</body>
</html>
