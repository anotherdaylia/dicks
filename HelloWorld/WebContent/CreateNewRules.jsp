<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
 <title>DSG-Manage Category</title>
 <link href="css/common.css" rel="stylesheet" type="text/css" /> 
 <script src="js/tangram.js" type="text/javascript"></script> 
 <script src="js/common.js" type="text/javascript"></script>
 <script src="js/overview.js" type="text/javascript"></script>
</head>
<body>
    <div class="header">
    <div class="header-content">
        <div class="logo">
            <a href="#"><img src="image/logo.png" /></a></div>
        <div class="top-nav">
            <a href="#" target="_blank" class="trackable">
            <span class="nav-icon help-icon"></span>Help</a>|
            <a href="#" target="_blank" class="trackable">Account</a>|
            <a href="#">Log out</a>
        </div>
    </div>
    </div>
    
   
    <div class="body clearfix">
    
    <!-- menu bar starts -->
    <div class="aside" id="aside-menu">
    <div class="title"><h1>My Tool</h1>
       <!-- <a href="javascript:void(0)" class="fold recordable" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;0&quot;}" id="menu-toggle"></a>
        -->
    </div>
    <ul class="nav">
        <li class="selected"><a  href="#" >Manage Category</a></li>
        <li class=""><a  href="#" >Manage Business Rule</a></li>
        <li class=""><a class="recordable open" href="/web/" memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" >
                <li class=""><a href="#">Real-Time visualization</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="#">Order statistics</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="#">History Order Information</a><span class="normal">&nbsp;</span></li>
            </ul>
        </li>   
    </ul>
    </div>
    <!-- menu bar ends -->

    <!-- content starts -->
    <div class="minibar recordable" id="minibar" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;1&quot;}" style="display:none;"><a id="menu-untoggle" href="javascript:void(0)" class="unfold" ></a></div> 
    <div class="main"  id="main-body">
        <div class="content clearfix">
                
        <div class="title-bar clearfix">
            <h1 class="l">Create a New Rule</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

        </div>
        <div ><br/><br/>
            <li style="list-style:none;"><span><a href="#">My Tool</a><span> > </span></span></span>
                <span><a href="#">Manage Business Rule</a><span> > </span></span>
                <span>Create a New Rule</span>
            </li>
        </div>
        <div><br/><br/>
            <form action="createrule">
            <table border="0" style="margin-left:50px;float:left;width:800px;">
                <tr style="height:40px;">
                    <td><div class="form-title">Rule Name:</div></td>
                    <td><input type="text" name="rulename" style="width:200px;"></td>
                </tr>
                    
                <tr style="height:40px;">
                    <td><div class="form-title">Rule Description:</div></td>
                    <td><input type="text" name="ruledescription" style="width:200px;"></td>
                </tr>

                <tr style="height:40px;">
                    <td><div class="form-title" >Stage:</div></td>
                    <td><select name="stage">
                        <option value="stage1">Stage1</option> 
                        <option value="stage2">Stage2</option>
                        <option value="stage3">Stage3</option>
                    </select></td>
                </tr>
                <tr style="height:40px;">
                    <td><div class="form-title" >Rule Template:</div></td>
                    <td><select style="width:200px;" name="template">
                        <option value="1">Template1</option> 
                        <option value="2">Template2</option>
                        <option value="3">Template3</option>
                    </select></td>
                </tr>
                <tr style="height:100px;">
                    <td><div class="form-title">Rule Content:</div></td>
                    <td><input type="text" name="rulecontent" style="width:400px;height:80px;"></td>
                </tr>
                <tr style="height:40px;">
                    <td></td>
                    <td><span style="margin-left:10px;"><input type="submit" value="create"></span>
                        <span style="margin-left:10px;"><input type="submit" name="cancel" value="cancel"></span>
                    </td>  
                </tr>
            </table>   

            </form>
        </div>
    
    <!-- content ends -->

                
    <!-- footer starts -->
        </div>
            <div class="footer"><span>©2013 eBusiness Team</span></div>
        </div>
    <!-- footer ends -->

    </div>
     
    
    <script type="text/javascript">
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F767db4ee1769de108fba6ac84b763cf3' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
        if (T && T.browser.chrome) {
            window.onload = function () {
                var objects = document.getElementsByTagName('object');
                for (var i = 0, m = objects.length; i < m; i++) {
                    objects[i].style.display = "";
                }
            }
        }
    </script>
</body>
</html>