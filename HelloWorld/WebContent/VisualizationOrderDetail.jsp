<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
   <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    %>
 <jsp:include page="template_top.jsp" />
 <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script> 
 <ul class="nav">
        <li class=""><a class="recordable open" id="toggleone" href="#" 
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Group</a>
            <ul class="nav-two" id="navone">
                <li class="" id="catelist"><a href="<%=basePath%>gotocategorylist.action?act=store">Group List</a><span class="normal">&nbsp;</span></li>
                <li class="" id="newcatelist"><a href="<%=basePath%>gotonewcategory.action">New Group</a><span class="normal">&nbsp;</span></li>  
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
<script >
  function changeDiv(obj) {
		var className= obj.className;
		if(className=="button"){
			var button = document.getElementsByClassName("button");
			for(var j=1;j<=button.length;j++){
				if(obj.id=="input"+j.toString()){
					$("#cost"+j.toString()).show();
				}
				else{
					$("#cost"+j.toString()).hide();
				}
			}
			var block = document.getElementsByClassName("block");
			for(var i in block){
				$('#'+block[i].id).hide();
	  		}
		}
		else{
			var block = document.getElementsByClassName("block");
			for(var i in block){
				if(className==block[i].id){
					$('#'+block[i].id).show();
				}
				else{
					$('#'+block[i].id).hide();
				}
	  		}
			$("#cost1").hide();
		}
  }
</script>
 <script>
  $(function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: 0,
    });
  });
  </script>


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
            
            <!-- form starts Ying edit according to html -->
<div style="padding-left:5px;width:890px;">
                <div id="accordion" style="float:left;width:280px;margin-top:-3px;">
                        <h3>Order Details</h3>
                        <div>
                            <ul>
                                <li style="height:30px;"><a onClick="changeDiv(this)" class="detail">Order Details</a></li>
                            </ul>
                        </div>

                        <h3>Stage 1 - Prefiltering</h3>
                        <div>
                            <ul>
                            <c:forEach items="${oList}" var="orderlist" varStatus="loop">
                    		<tr>
                    		<c:if test="${loop.first}">
                    			<li style="height:30px;"><a onClick="changeDiv(this)" class="stage1rule${loop.index}">All Rules</a></li>
           					</c:if>
           						<li style="height:30px;"><a onClick="changeDiv(this)" class="stage1rule${loop.index+1}">Rule: ${loop.index+1}</a></li>
                    		</tr>
                  			</c:forEach>
                            </ul>
                        </div>
                        
                        <h3>Stage 2 - Candidate Determination</h3>
                        <div>
                            <ul>
                            <%int i=0; %>
                            <%for (i=0;i<3;i++){ %>
                                <li style="height:30px;"><a onClick="changeDiv(this)" class="stage2package<%=i+1%>">Package <%=i+1%></a></li>
                            <%} %>
                            </ul>
                        </div>
                    
                        <h3>Stage 3 - Evaluation</h3>
                        <div>
                            <ul>
                            <%for (i=0;i<3;i++){ %>
                                <li style="height:30px;"><a onClick="changeDiv(this)" class="stage3route<%=i+1%>">Package <%=i+1%></a></li>
                            <%} %>
                            </ul>
                        </div>
                    </div>

                
                <div id="block2" style="float:left;height:465px;width:600px;border:1px solid #ccc;border-radius:5px;overflow-y:scroll;">
                    <form>
                        <div style="padding-left:30px;padding-top:30px;" id="detail" class="block">
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Order Date:</div>
                                <div id="orderdate" style="float:left; width:350px">${order.orderDate}</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Shipping Address:</div>
                                <div id="address" style="float:left; width:350px">${order.shippingAddr}</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Order Details:</div>
                                <div id="products" style="float:left; width:350px" class="table-list">
                                    <br/>
                                    <table cellspacing="0" cellpadding="0" class="list">
                                        <tr class="title">
                                            <th style="width:200px;">Product</th>
                                            <th>Quantity</th>
                                        </tr>
                                        <c:forEach items="${details}" var="orderdetail">
                    						<tr>
                        						<td>${orderdetail.getProduct().getProdName()}</td>
                        						<td>${orderdetail.qty}</td>
                    						</tr>
                  						</c:forEach>
                                    </table>
                                </div>
                                <div style="display: block; width: 500px">
                                	
                                	<h1><b> Stage 1 </b></h1>
                                	<c:forEach var="name" items="${stage1.getRuleNames()}">
										<div> 
											<h1> ${name} </h1>
											<c:forEach var="logdetail" items="${stage1.getLogsByName(name)} ">
												<p> 
													${logdetail}
												</p>
											</c:forEach>
											<br/>
									    </div>
									</c:forEach>
									
									<h1><b> Stage 2 </b></h1>
									<c:forEach var="name" items="${stage2.getRuleNames()}">				
										<div> 
											<h1> ${name} </h1>
											<c:forEach var="logdetail" items="${stage2.getLogsByName(name)} ">
												<p> 
													${logdetail}
												</p>
											</c:forEach>
											<br/>
									    </div>
									</c:forEach>
									
									<h1><b> Stage 3 </b></h1>
									<c:forEach var="name" items="${stage3.getRuleNames()}">				
										<div> 
											<h1> ${name} </h1>
											<c:forEach var="logdetail" items="${stage3.getLogsByName(name)} ">
												<p> 
													${logdetail}
												</p>
											</c:forEach>
											<br/>
									    </div>
									</c:forEach>
									
                                </div>
                            </div>
                        </div>
                        <div id="stage1rule0" class="block" style="display:none;padding-left:30px;padding-top:30px;">
                            <div style="font-size:16px;padding-bottom:30px;">All Rules</div>
                            <div id="rule1">
                                <div style="padding-bottom:30px;">
                                    <div style="float:left; width:100px">Rule 1:</div>
                                    <div id="rule1" style="float:left; width:350px">Product Threshold</div>
                                </div>
                                <div style="padding-bottom:30px;padding-left:100px;">Minimum package number changed from 1 to 2.</div>
                            </div>

                            <div id="rule2">
                                <div style="padding-bottom:30px;">
                                    <div style="float:left; width:100px">Rule 2:</div>
                                    <div id="rule1" style="float:left; width:350px">Vendor Direct</div>
                                </div>
                                <div style="padding-bottom:30px;padding-left:100px;">Minimum package number changed from 2 to 3.</div>
                            </div>

                            <div id="rule3">
                                <div style="padding-bottom:30px;">
                                    <div style="float:left; width:100px">Rule 3:</div>
                                    <div id="rule1" style="float:left; width:350px">Store Threshold</div>
                                </div>
                                <div style="padding-bottom:30px;padding-left:100px;">Candidate fulfillment source count changed from 580 to 300.</div>
                            </div>

                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:100px">Result:</div>
                                <div style="float:left; width:350px" class="table-list">
                                    <br/>
                                    <table cellspacing="0" cellpadding="0" class="list">
                                        <tr class="title">
                                            <th style="width:100px;">Package #</th>
                                            <th style="width:150px;">Product</th>
                                            <th style="width:100px;">Quantity</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Kayak</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Golf Bag</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Hat</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Shirt</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Swimsuit</td>
                                            <td>1</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div id="stage1rule1" class="block" style="display:none;padding-left:30px;padding-top:30px;">
                            <div style="font-size:16px;padding-bottom:30px;">Rule 1</div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Rule Name&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Product Threshold</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Category&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Boat</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Condition&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Weight exceeds 20 lbs</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Action&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Ship this item in a separate package</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Result of this rule&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Kayak will be shipped in a separate package</div>
                            </div>
                        </div>

                        <div id="stage2package1" class="block" style="display:none;padding-left:20px;">
                         <div name="package" style="height:30px;font-size:18px;margin-top:10px;">
                            Package 1
                        </div>

                        <div id="included" style="height:40px;">
                            <div style="float:left;height:20px;width:110px;font-size:14px;width:120px;">
                                Included Items&#58;
                            </div>
                            
                            <div style="float:left;">
                                <div name="items" style="height:20px;font-size:12px;width:200px;">
                                    Kayak - quantity 1
                                </div>
                            </div>
                        </div>

                        <div id="split" style="height:100px;">
                            
                            <div name="splitNo" style="height:20px;font-size:14px;width:120px;">
                                Split 0
                            </div>
                            <div name="product" style="float:left;height:20px;font-size:14px;width:110px;padding-left:10px;">
                                {Kayak}:
                            </div>
                            <div style="float:left;width:200px;">
                                <div name="failed" style="height:20px;font-size:12px;">
                                    Failed&#58; 100/300 stores
                                </div>
                                <div name="success" style="height:20px;font-size:12px;">
                                    Success&#58; 200/300 stores
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="stage3route1" class="block" style="display:none;padding-left:20px;">
                        <div class="route" style="height:30px;font-size:18px;margin-top:10px;padding-bottom:10px;">
                            Route 1
                        </div>
                        
                        <div id="route_detail" style="height:30px;">
                            <div style="height:20px;">
                                <div style="float:left;height:10px;width:50px;font-size:12px;">
                                    From:
                                </div>
                                <div id="source" style="float:left;height:10px;width:60px;font-size:12px;">
                                    Store 010
                                </div>
                            </div>
                            <div style="height:20px;">
                                <div style="float:left;height:10px;width:50px;font-size:12px;">
                                    To:
                                </div>
                                <div id="destination" style="float:left;height:10px;width:300px;font-size:12px;">
                                    5000 Forbes Ave, Pitsburgh, PA 15213
                                </div>
                            </div>
                        </div>

                        <div id="included" style="height:60px;margin-top:30px;">
                            <div style="height:20px;font-size:14px;">
                                Included Packages:
                            </div>
                            
                            <div>
                                <div name="packages" style="float:left;padding-left:20px;height:20px;font-size:12px;">Package 1: </div>
                                <div name="items" style="float:left;">
                                    <div name="item" style="padding-left:30px;height:20px;font-size:12px;">Kayak - quantity 1</div>
                                </div>
                            </div>
                        </div>
                         <div id="rank" style="height:100px;margin-top:20px;">
                            <div class="title" name="splitNo" style="height:20px;font-size:14px;padding-bottom:10px;">
                                Top Ranking Route&#58;
                            </div>
                            <div style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #1 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Store ID</th>
                                        <th>Product ID</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Store 010</td>
                                        <td>Kayak</td>
                                        <td>$16.7</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <input id="input1" class="button" style="width:96px;" value="View Cost Detail" onClick="changeDiv(this)">
                            </div>

                            <div style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #2 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Store ID</th>
                                        <th>Product ID</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Store 021</td>
                                        <td>Kayak</td>
                                        <td>$18.0</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <input id="input2" class="button" style="width:96px;" value="View Cost Detail" onClick="changeDiv(this)">
                            </div>

                            <div style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #3 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Store ID</th>
                                        <th>Product ID</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Store 032</td>
                                        <td>Kayak</td>
                                        <td>$21.0</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <input id="input3" class="button" style="width:96px;" value="View Cost Detail" onClick="changeDiv(this)">
                            </div>

                            <div style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #4 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Store ID</th>
                                        <th>Product ID</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Store 053</td>
                                        <td>Kayak</td>
                                        <td>$23.2</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <input id="input4" class="button" style="width:96px;" value="View Cost Detail" onClick="changeDiv(this)">
                            </div>

                            <div style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #5 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Store ID</th>
                                        <th>Product ID</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Store 013</td>
                                        <td>Kayak</td>
                                        <td>$24.0</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <input id="input5" class="button" style="width:96px;" value="View Cost Detail" onClick="changeDiv(this)">
                            </div>
                        </div>
                    </div>

                    <div id="cost1" style="padding-left:20px;display:none;" >
                                                <div id="route" style="height:30px;font-size:18px;margin-top:10px;padding-bottom:10px;">
                            Route 1
                        </div>
                        
                        <div id="route_detail" style="height:30px;">
                            <div style="height:20px;">
                                <div style="float:left;height:10px;width:50px;font-size:12px;">
                                    From:
                                </div>
                                <div id="source" style="float:left;height:10px;width:60px;font-size:12px;">
                                    Store 010
                                </div>
                            </div>
                            <div style="height:20px;">
                                <div style="float:left;height:10px;width:50px;font-size:12px;">
                                    To:
                                </div>
                                <div id="destination" style="float:left;height:10px;width:300px;font-size:12px;">
                                    5000 Forbes Ave, Pitsburgh, PA 15213
                                </div>
                            </div>
                        </div>

                        <div id="included" style="height:60px;margin-top:30px;">
                            <div style="height:20px;font-size:14px;">
                                Included Packages:
                            </div>
                            
                            <div>
                                <div name="packages" style="float:left;padding-left:20px;height:20px;font-size:12px;">Package 1: </div>
                                <div name="items" style="float:left;">
                                    <div name="item" style="padding-left:30px;height:20px;font-size:12px;">Kayak - quantity 1</div>
                                </div>
                            </div>
                        </div>

                        <div style="height:100px;margin-top:20px;">
                            <div style="float:left;height:20px;font-size:14px;">
                                Cost Detail:
                            </div>
                            <div style="float:left; width:350px; padding-left:10px;" class="table-list">
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Cost</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr>
                                        <td>Transaction Fees</td>
                                        <td>$2.0</td>
                                    </tr>
                                    <tr>
                                        <td>Freight In to Store Cost</td>
                                        <td>$3.5</td>
                                    </tr>
                                    <tr>
                                        <td>Distribution Center Cost</td>
                                        <td>$3.5</td>
                                    </tr>
                                    <tr>
                                        <td>Packaging Cost</td>
                                        <td>$3.2</td>
                                    </tr>
                                    <tr>
                                        <td>Labor Cost</td>
                                        <td>$4.5</td>
                                    </tr>
                                    <tr>
                                        <td>Total Cost</td>
                                        <td>$16.7</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <!-- form ends -->
            <!-- form ends -->

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
    