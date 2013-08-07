 <%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    %>
     <base href="<%=basePath%>">
 
 <div class="aside" id="aside-menu">
    <div class="title"><h1>My Tool</h1>
       <!-- <a href="javascript:void(0)" class="fold recordable" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;0&quot;}" id="menu-toggle"></a>
        -->
    </div>
    <ul class="nav">
        <li class=""><a class="recordable open" id="toggleone" href="#" 
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Category</a>
            <ul class="nav-two" id="navone">
                <li class=""><a href="<%=basePath%>gotocategorylist.action">Category List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="<%=basePath%>gotonewcategory.action">New Category</a><span class="normal">&nbsp;</span></li>  
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="toggletwo"
            memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" id="navtwo">
                <li class=""><a href="<%=basePath%>gotorulelist.action">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="<%=basePath%>gotonewbizrulelist.action">New Business Rule</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" id="togglethree"
            memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" id="navthree">
                <li class="selected"><a href="<%=basePath%>gotoorderlist.action">Order List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="#">Routing visualization</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="statistics.html">Statistics</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" id="togglefour"
            memo="{id:'21',type:'menu',global:1,status:''}">Place New Order</a>
            <ul class="nav-two" id="navtwo">
                <li class=""><a href="<%=basePath%>gotoplaceorder.action">New Order</a><span class="normal">&nbsp;</span></li>
                
            </ul>   
    </ul>
    </div>