<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
					<div style="padding-left:30px;padding-top:30px;">
                        <div id="route" style="height:30px;font-size:16px;padding-bottom:20px;">
                        <c:forEach items="${oList}" var="orderList" varStatus="loop">
                        <div id="stage1rule${loop.index+1}">
                    		<tr>
                    			<td>Rule: </td>
                        		<td>${orderList.orderId-1}</td>
                    		</tr>
                    	</div>
                  		</c:forEach>
                        </div>
                    </div>