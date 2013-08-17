<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
        <%@ taglib prefix="s" uri="/struts-tags" %>
		<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
					<div style="padding-left:30px;padding-top:30px;">
                        <div name="package" style="height:30px;font-size:16px;padding-bottom:20px;">
                            Package 3
                        </div>

                        <div id="included" style="height:40px;padding-bottom:40px;">
                            <div style="float:left;height:20px;width:110px;font-size:14px;width:120px;">
                                Included Items&#58;
                            </div>
                            
                            <div style="float:left;">
                                <div name="items" style="height:20px;font-size:12px;width:200px;">
                                    Hat - quantity 1
                                </div>
                                <div name="items" style="height:20px;font-size:12px;width:200px;">
                                    Shirt - quantity 1
                                </div>
                                <div name="items" style="height:20px;font-size:12px;width:200px;">
                                    Swimsuit - quantity 1
                                </div>
                            </div>
                        </div>

                        <div id="split" style="height:100px;">
                            <div style="padding-bottom:40px;">
                                <div name="splitNo" style="height:20px;font-size:14px;width:120px;">
                                    Split 0
                                </div>
                                <div name="product" style="float:left;height:20px;font-size:14px;width:210px;padding-left:10px;">
                                    {Hat,Shirt,Swimsuit}:
                                </div>
                                <div style="width:200px;float:left;">
                                    <div name="failed" style="height:20px;font-size:12px;">
                                        Failed&#58; 300/300 stores
                                    </div>
                                </div>
                            </div>

                            <div style="padding-bottom:40px;">
                                <div name="splitNo" style="height:20px;font-size:14px;width:120px;">
                                    Split 1
                                </div>
                                <div style="padding-bottom:20px;">
                                    <div name="product" style="float:left;height:20px;font-size:14px;width:210px;padding-left:10px;">
                                        {Hat,Shirt},{Swimsuit}:
                                    </div>
                                    <div style="width:200px;float:left;">
                                        <div name="failed" style="height:20px;font-size:12px;">
                                            Failed&#58; 120/300 stores
                                        </div>
                                        <div name="failed" style="height:20px;font-size:12px;">
                                            Success&#58; 180/300 stores
                                        </div>
                                    </div>
                                </div>
                                <div style="padding-bottom:20px;">
                                    <div name="product" style="float:left;height:20px;font-size:14px;width:210px;padding-left:10px;">
                                        {Hat,Swimsuit},{Shirt}:
                                    </div>
                                    <div style="width:200px;float:left;">
                                        <div name="failed" style="height:20px;font-size:12px;">
                                            Failed&#58; 125/300 stores
                                        </div>
                                        <div name="failed" style="height:20px;font-size:12px;">
                                            Success&#58; 175/300 stores
                                        </div>
                                    </div>
                                </div>
                                <div style="padding-bottom:20px;">
                                    <div name="product" style="float:left;height:20px;font-size:14px;width:210px;padding-left:10px;">
                                        {Shirt,Swimsuit},{Hat}:
                                    </div>
                                    <div style="width:200px;float:left;">
                                        <div name="failed" style="height:20px;font-size:12px;">
                                            Failed&#58; 121/300 stores
                                        </div>
                                        <div name="failed" style="height:20px;font-size:12px;">
                                            Success&#58; 179/300 stores
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>