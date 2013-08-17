<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
						<div style="padding-left:30px;padding-top:30px;">
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