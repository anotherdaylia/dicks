<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
					<div style="padding-left:30px;padding-top:30px;">
                        <div id="route" style="height:30px;font-size:16px;padding-bottom:20px;">
                            Route 1
                        </div>
                        
                        <div id="route_detail" style="height:30px;">
                            <div style="height:20px;">
                                <div style="float:left;height:10px;width:50px;font-size:12px;">
                                    From&#58;
                                </div>
                                <div id="source" style="float:left;height:10px;width:60px;font-size:12px;">
                                    Store 010
                                </div>
                            </div>
                            <div style="height:20px;">
                                <div style="float:left;height:10px;width:50px;font-size:12px;">
                                    To&#58;
                                </div>
                                <div id="destination" style="float:left;height:10px;width:300px;font-size:12px;">
                                    5000 Forbes Ave, Pitsburgh, PA 15213
                                </div>
                            </div>
                        </div>

                        <div id="included" style="height:60px;margin-top:30px;">
                            <div style="height:20px;font-size:14px;">
                                Included Packages&#58;
                            </div>
                            
                            <div>
                                <div name="packages" style="float:left;padding-left:20px;height:20px;font-size:12px;">Package 1&#58; </div>
                                <div name="items" style="float:left;">
                                    <div name="item" style="padding-left:30px;height:20px;font-size:12px;">Kayak - quantity 1</div>
                                </div>
                            </div>
                        </div>

                        <div id="rank" style="height:100px;margin-top:20px;">
                            <div name="splitNo" style="height:20px;font-size:14px;padding-bottom:10px;">
                                Top Ranking Route&#58;
                            </div>
                            <div id="top1" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
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
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>

                            <div id="top2" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
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
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>

                            <div id="top3" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
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
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>

                            <div id="top4" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
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
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>

                            <div id="top5" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
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
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>
                        </div>
                    </div>