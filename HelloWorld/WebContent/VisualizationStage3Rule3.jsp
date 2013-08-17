<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
     <%@ taglib prefix="s" uri="/struts-tags" %>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
					<div style="padding-left:30px;padding-top:30px;">
                        <div id="route" style="height:30px;font-size:16px;padding-bottom:20px;">
                            Route 3
                        </div>
                        
                        <div id="route_detail" style="height:30px;">
                            <div style="height:20px;">
                                <div style="float:left;height:10px;width:50px;font-size:12px;">
                                    From&#58;
                                </div>
                                <div id="source" style="float:left;height:10px;width:120px;font-size:12px;">
                                    Store 021, Store 032
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

                        <div id="included" style="height:60px;margin-top:30px;padding-bottom:15px;">
                            <div style="height:20px;font-size:14px;">
                                Included Packages&#58;
                            </div>
                            
                            <div>
                                <div name="packages" style="float:left;padding-left:20px;height:20px;font-size:12px;">Package 3,4&#58; </div>
                                <div name="items" style="float:left;">
                                    <div name="item" style="padding-left:30px;height:20px;font-size:12px;">Hat - quantity 1</div>
                                    <div name="item" style="padding-left:30px;height:20px;font-size:12px;">Shirt - quantity 1</div>
                                    <div name="item" style="padding-left:30px;height:20px;font-size:12px;">Swimsuit - quantity 1</div>
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
                                        <th>Package#</th>
                                        <th>Store ID</th>
                                        <th>Product</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Package 3</td>
                                        <td>Store 021</td>
                                        <td>Hat, Shirt</td>
                                        <td>$10.8</td>
                                    </tr>
                                    <tr>
                                        <td>Package 4</td>
                                        <td>Store 032</td>
                                        <td>Swimsuit</td>
                                        <td>$9.9</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total Cost</td>
                                        <td>$20.5</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail2.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>

                            <div id="top2" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #2 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Package#</th>
                                        <th>Store ID</th>
                                        <th>Product</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Package 3</td>
                                        <td>Store 005</td>
                                        <td>Hat, Swimsuit</td>
                                        <td>$11.0</td>
                                    </tr>
                                    <tr>
                                        <td>Package 4</td>
                                        <td>Store 542</td>
                                        <td>Shirt</td>
                                        <td>$10.2</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total Cost</td>
                                        <td>$21.2</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail2.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>

                            <div id="top3" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #3 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Package#</th>
                                        <th>Store ID</th>
                                        <th>Product</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Package 3</td>
                                        <td>Store 113</td>
                                        <td>Shirt, Swimsuit</td>
                                        <td>$11.5</td>
                                    </tr>
                                    <tr>
                                        <td>Package 4</td>
                                        <td>Store 265</td>
                                        <td>Hat</td>
                                        <td>$11.9</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total Cost</td>
                                        <td>$23.4</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail2.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>

                            <div id="top4" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #4 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Package#</th>
                                        <th>Store ID</th>
                                        <th>Product</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Package 3</td>
                                        <td>Store 509</td>
                                        <td>Shirt, Swimsuit</td>
                                        <td>$12.1</td>
                                    </tr>
                                    <tr>
                                        <td>Package 4</td>
                                        <td>Store 488</td>
                                        <td>Hat</td>
                                        <td>$12.0</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total Cost</td>
                                        <td>$24.1</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail2.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>

                            <div id="top5" style="float:left;width:350px;padding-bottom:15px;" class="table-list">
                                Rank #5 Route&#58;
                                <table cellspacing="0" cellpadding="0" class="list">
                                    <tr class="title">
                                        <th>Package#</th>
                                        <th>Store ID</th>
                                        <th>Product</th>
                                        <th>Total Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Package 3</td>
                                        <td>Store 021</td>
                                        <td>Hat, Swimsuit</td>
                                        <td>$12.7</td>
                                    </tr>
                                    <tr>
                                        <td>Package 4</td>
                                        <td>Store 032</td>
                                        <td>Shirt</td>
                                        <td>$12.5</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total Cost</td>
                                        <td>$25.2</td>
                                    </tr>
                                </table>
                            </div>
                            <div style="float:left;margin-top:20px;margin-left:5px;">
                                <a class="button" href="javascript:ajaxpage('VisualizationCostDetail2.html', 'block2');" style="width:96px;">View Cost Detail</a>
                            </div>
                        </div>