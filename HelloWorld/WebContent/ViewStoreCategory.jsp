<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<jsp:include page="template_top.jsp" />

<script>
  function textAreaAdjust(o) {
      o.style.height = "1px";
      o.style.height = (25+o.scrollHeight)+"px";
  }

  $(function() {
    $( "#tabs" ).tabs({
      collapsible: true
    });
  });
</script>
	
	 <!-- content starts -->
    <div class="minibar recordable" id="minibar" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;1&quot;}" style="display:none;"><a id="menu-untoggle" href="javascript:void(0)" class="unfold" ></a></div> 
    <div class="main"  id="main-body">
        <div class="content clearfix">
                
        <div class="title-bar clearfix">
            <h1 class="l">View Category</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

        </div>
        
            <li style="list-style:none;"><span><a href="#">Home</a><span> &gt; </span></span></span>
                <span><a href="#">Manage Category</a><span> &gt; </span></span>
                <span>View Category</span>
            </li>
            <!-- Success Message and Error Message -->
            <div class="success_area" style="display:none">successMessage</div>
            <div class="warning" style="display:none">errorMessage</div>
            <!-- Success Message and Error Message -->
        
        <div><br/><br/>
            <form action="#">
            <div id="tabs">
              <ul>
                <li><a href="#tabs-1">Category: ${categoryName}</a></li>
              </ul>
              <div id="tabs-1">
              <table id="category" border="0" style="margin-left:50px;width:750px;">
                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;">Category Name<span class="red">*</span>:</div></td>
                    <td style="width:600px;"><input type="text" style="width:300px;" name="" value="${categoryName}" disabled></td>
                    <td></td>
                </tr>
                    
                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;">Category Description:</div></td>
                    <td style="width:500px;">
                      <textarea placeholder="Type category description&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;" disabled>${categoryDescr}</textarea>
                    </td>
                    <td></td>
                </tr>

                <tr style="height:40px%;">
                    <td><div class="form-title" style="width:150px;">Fulfillment Method<span class="red">*</span>:</div></td>
                    <td style="width:500px;">
                      <textarea id="storeTypeTags" placeholder="Type store type to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;" disabled>Dick's Stores&#44;&nbsp;</textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getStoreTypeCheck()" disabled>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px%;">
                    <td><div class="form-title" style="width:150px;">Region:</div></td>
                    <td style="width:500px;">
                      <textarea id="regionTags" placeholder="Type store region to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;" disabled>Northeast (New England, Mid-Atlantic)&#44;&nbsp;</textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getRegionCheck()" disabled>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px%;">
                    <td><div class="form-title" style="width:150px;">State<span class="red">*</span>:</div></td>
                    <td style="width:500px;">
                      <textarea id="stateTags" placeholder="Type store state to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;" disabled>Pennsylvania&#44;&nbsp;</textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getStateCheck()" disabled>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;">Store ID:</div></td>
                    <td style="width:500px;">
                      <textarea id="storeTags" placeholder="Type store id to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;" disabled>${StoreIdString}</textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getStoreCheck()" disabled>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px;">
                    <td><a class="button" href="categorylist.html" onclick="">Cancel</a></td>
                    <td><a class="button" href="EditCategory.html" onclick=""/>Update</a></td>
                    <td></td>
                </tr>
              </table>   
              </div>
            </div>
            </form>
        </div>
    
    <!-- content ends -->

<jsp:include page="template_bottom.jsp" />