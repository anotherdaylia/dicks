<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
						<div style="padding-left:30px;padding-top:30px;">
                            <div style="font-size:16px;padding-bottom:30px;">Rule 3</div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Rule Name&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Store Threshold</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Category&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Market Stores</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Condition&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Fulfilled more than 50 orders on the day</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Action&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Stop allocating orders to this fulfillment source</div>
                            </div>
                            <div style="padding-bottom:30px;">
                                <div style="float:left; width:150px">Result of this rule&#58;</div>
                                <div id="orderdate" style="float:left; width:350px">Candidate fulfillment source count changed from 580 to 300</div>
                            </div>
                        </div>