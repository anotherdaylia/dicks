<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
                        <div style="padding-left:30px;padding-top:30px;">
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
                                <div id="result" style="float:left; width:350px" class="table-list">
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