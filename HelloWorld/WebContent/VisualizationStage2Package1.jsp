<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
					<div style="padding-left:30px;padding-top:30px;">
                        <div name="package" style="height:30px;font-size:16px;padding-bottom:20px;">
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
