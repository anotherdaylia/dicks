<%@ page language="java" contentType="text/html; charset=US-ASCII"
    pageEncoding="US-ASCII"%>
    <%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 <%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
    %>
     
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   
 <title>DSG-Manage Category</title>
 <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
 <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script> 
 <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
 <link rel="stylesheet" href="/resources/demos/style.css" />
 <link href="css/common.css" rel="stylesheet" type="text/css" /> 
 <script src="js/tangram.js" type="text/javascript"></script> 
 <script src="js/animation.js" type="text/javascript"></script>
 <script src="js/autocomplete.js" type="text/javascript"></script>
 <script>
  $(function() {
    var availableTags = [
      "All",
      "GSI Warehouse",
      "Vendor",
      "Dick's Stores"
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#storeTypeTags" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });

  $(function() {
    var availableTags = [
      "All",
      "Northeast (New England, Mid-Atlantic)",
      "Midwest (East/West North Central)",
      "South (South Atlantic, East/West South Central)",
      "West (Mountain, Pacific)"
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#regionTags" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });

  $(function() {
    var availableTags = [
      "All", "Alabama", "Alaska", "Arizona", "Arkansas",
      "California", "Colorado", "Connecticut", 
      "Delaware", "District of Columbia",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho", "Illinois", "Indiana", "Iowa",
      "Kansas", "Kentucky",
      "Louisiana",
      "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
      "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
      "Ohio", "Oklahoma", "Oregon",
      "Pennsylvania",
      "Rhode island",
      "South Carolina", "South Dakota",
      "Tennessee", "Texas",
      "Utah",
      "Vermont", "Virginia",
      "Washington", "West Virginia", "Wisconsin", "Wyoming"
    ];

    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#stateTags" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });

  $(function() {
    var availableTags = [
      "All",
      "Store01",
      "Store02",
      "Store03",
      "Store04",
      "Store05",
      "Store06",
      "Store07",
      "Store08",
      "Store09"
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#storeTags" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });

  $(function() {
    var availableTags = [
      "All",
      "Shirts",
      "Basketball",
      "Shoes",
      "Bags",
      "Kayaks",
      "Socks",
      "Accessories",
      "Bikes",
      "Camp",
      "Graphic Tees",
      "Shorts",
      "Pants",
      "Swimsuits",
      "Sweatshirts & Hoodies",
      "Jackets & Vests",
      "Extended Sizes",
      "Sports Bras",
      "Skirts, Skorts & Dresses",
      "Pants & Capris",
      "Yoga",
      "Toddler & Infant Jackets",
      "Backpacks & Duffles",
      "Sunglasses",
      "Hats",
      "Headbands",
      "Heart Rate Monitors",
      "Fishing Apparel"
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#typeTags" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });
  
  $(function() {
    var availableTags = [
      "All", "Adidas", "Antigua", "Asics", "anon",
      "Brooks", "Burton",
      "Columbia", 
      "Dallas Cowboys", 
      "Fit 2 Win", "Flow Society", 
      "Glamorise",
      "Jordan", 
      "KÃPPEN",
      "Marmot", "Mountain Hardwear", "Moving Comfort",
      "NFL Team Apparel", "Nike", 
      "Patagonia", "Patagonia", "Puma",
      "R.E.D", "Reebok", "Russell Athletic",
      "SKINS", "Saucony", "Shock Absorber", "Spanx", "Spyder",
      "TaylorMade", "The North Face",
      "Under Armour",
      "Warrior",
      "lucy"
    ];

    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $( "#brandTags" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });

  $(function() {
    var availableTags = [
      "All",
      "Rule01",
      "Rule02",
      "Rule03",
      "Rule04",
      "Rule05",
      "Rule06",
      "Rule07",
      "Rule08",
      "Rule09"
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }
 
    $('textarea[name="ruleTags"]')
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  });

  function textAreaAdjust(o) {
      o.style.height = "1px";
      o.style.height = (25+o.scrollHeight)+"px";
  }

  $(function() {
    $( "#tabs" ).tabs({
      collapsible: true
    });
  });

  function getStoreTypeCheck() {
        var sPath = "StoreTypeChk.html";
        strFeatures = "dialogWidth=300px;dialogHeight=400px;center=yes;help=no;directories=no;status=no;scrollbars=no;resizable=1;menubar=no";
        var strReturn = showModalDialog(sPath, "", strFeatures);
        if (strReturn != null) {
            strReturn = document.getElementById("storeTypeTags").value + strReturn;
            document.getElementById("storeTypeTags").value = strReturn;
        }
    }

  function getRegionCheck() {
        var sPath = "RegionChk.html";
        strFeatures = "dialogWidth=400px;dialogHeight=300px;center=yes;help=no;directories=no;status=no;scrollbars=no;resizable=1;menubar=no";
        var strReturn = showModalDialog(sPath, "", strFeatures);
        if (strReturn != null) {
            strReturn = document.getElementById("regionTags").value + strReturn;
            document.getElementById("regionTags").value = strReturn;
        }
    }

  function getStateCheck() {
        var sPath = "StateChk.html";
        strFeatures = "dialogWidth=650px;dialogHeight=400px;center=yes;help=no;directories=no;status=no;scrollbars=no;resizable=1;menubar=no";
        var strReturn = showModalDialog(sPath, "", strFeatures);
        if (strReturn != null) {
            strReturn = document.getElementById("stateTags").value + strReturn;
            document.getElementById("stateTags").value = strReturn;
        }
    }

  function getStoreCheck() {
        var sPath = "StoreChk.html";
        strFeatures = "dialogWidth=750px;dialogHeight=550px;center=yes;help=no;directories=no;status=no;scrollbars=no;resizable=1;menubar=no";
        var strReturn = showModalDialog(sPath, "", strFeatures);
        if (strReturn != null) {
            strReturn = document.getElementById("storeTags").value + strReturn;
            document.getElementById("storeTags").value = strReturn;
        }
    }

  function getTypeCheck() {
        var sPath = "TypeChk.html";
        strFeatures = "dialogWidth=500px;dialogHeight=400px;center=yes;help=no;directories=no;status=no;scrollbars=no;resizable=1;menubar=no";
        var strReturn = showModalDialog(sPath, "", strFeatures);
        if (strReturn != null) {
            strReturn = document.getElementById("typeTags").value + strReturn;
            document.getElementById("typeTags").value = strReturn;
        }
    }

    function getBrandCheck() {
        var sPath = "BrandChk.html";
        strFeatures = "dialogWidth=550px;dialogHeight=400px;center=yes;help=no;directories=no;status=no;scrollbars=no;resizable=1;menubar=no";
        var strReturn = showModalDialog(sPath, "", strFeatures);
        if (strReturn != null) {
            strReturn = document.getElementById("brandTags").value + strReturn;
            document.getElementById("brandTags").value = strReturn;
        }
    }
 </script>
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
    
    <!-- menu bar starts --><div class="aside" id="aside-menu">
    <div class="title"><h1>My Tool</h1>
       <!-- <a href="javascript:void(0)" class="fold recordable" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;0&quot;}" id="menu-toggle"></a>
        -->
    </div>
   <ul class="nav">
        <li class=""><a class="recordable open" href="#" memo="{id:'21',type:'menu',global:1,status:''}">Manage Category</a>
            <ul class="nav-two" >
                <li class=""><a href="categorylist.html">Category List</a><span class="normal">&nbsp;</span></li>
                <li class="selected"><a href="CreateCategory.html">New Category</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>
        <li class=""><a class="recordable open" href="#" memo="{id:'21',type:'menu',global:1,status:''}">Manage Business Rule</a>
            <ul class="nav-two" >
                <li class=""><a href="rulelist.html">Business Rule List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="newrule.html">New Business Rule</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li>   
        <li class=""><a class="recordable open" href="#" memo="{id:'21',type:'menu',global:1,status:''}">Visualization Dashboard</a>
            <ul class="nav-two" >
                <li class=""><a href="orderlist.html">Order List</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="#">Routing visualization</a><span class="normal">&nbsp;</span></li>
                <li class=""><a href="statistics.html">Statistics</a><span class="normal">&nbsp;</span></li>
                
            </ul>
        </li> 
        <li class=""><a href="placeorder.html" id="togglefour" memo="{id:'21',type:'menu',global:1,status:''}">Place Order</a>
        </li>   
    </ul>
    </div>
    <!-- menu bar ends -->

    <!-- content starts -->
    <div class="minibar recordable" id="minibar" memo="{&quot;id&quot;:&quot;menu-toggle&quot;,&quot;type&quot;:&quot;menu-toggle&quot;,&quot;status&quot;:&quot;1&quot;}" style="display:none;"><a id="menu-untoggle" href="javascript:void(0)" class="unfold" ></a></div> 
    <div class="main"  id="main-body">
        <div class="content clearfix">
                
        <div class="title-bar clearfix">
            <h1 class="l">New Category</h1><div id="Date" class="date l"></div>
            <a id='ReportTipIco' class="report-help open l recordable" memo="{id:'ReportTipIco',type:'page-tip',global:0}" href="javascript:void(0);">&nbsp;</a>
            <br/><br/><div><hr/></div>

        </div>
        <div ><br/><br/>
            <li style="list-style:none;"><span><a href="#">Home</a><span> &gt; </span></span></span>
                <span><a href="#">Manage Category</a><span> &gt; </span></span>
                <span>New Category</span>
            </li>
            <!-- Success Message and Error Message -->
            <div class="success_area" style="display:none">successMessage</div>
            <div class="warning" style="display:none">errorMessage</div>
            <!-- Success Message and Error Message -->
        </div>
        <div><br/><br/>
            <div id="tabs">
              <ul>
                <li><a href="#tabs-1">New Store Category</a></li>
                <li><a href="#tabs-2">New Product Category</a></li>
              </ul>
              <div id="tabs-1">
              <form action="createStoreRule.action">
              <table id="category" border="0" style="margin-left:50px;width:750px;">
                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;"><font color="red">*</font>Category Name:</div></td>
                    <td style="width:600px;"><input name="categoryName" type="text" style="width:300px;"></td>
                    <td></td>
                </tr>
                    
                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;">Category Description:</div></td>
                    <td style="width:500px;">
                      <textarea name="categoryDes" placeholder="Type category description&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;">
                      </textarea>
                    </td>
                    <td></td>
                </tr>

                <tr style="height:40px%;">
                    <td><div class="form-title" style="width:150px;"><font color="red">*</font>Store Type:</div></td>
                    <td style="width:500px;">
                      <textarea name="storeType" id="storeTypeTags" placeholder="Type store type to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;"></textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getStoreTypeCheck()"/>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px%;">
                    <td><div class="form-title" style="width:150px;">Store Region:</div></td>
                    <td style="width:500px;">
                      <textarea id="regionTag" placeholder="Type store region to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;"></textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getRegionCheck()"/>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px%;">
                    <td><div class="form-title" style="width:150px;"><font color="red">*</font>Store State:</div></td>
                    <td style="width:500px;">
                      <textarea name="storeState" id="stateTags" placeholder="Type store state to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;"></textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getStateCheck()"/>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;">Store ID:</div></td>
                    <td style="width:500px;">
                      <textarea name="storeId" id="storeTags" placeholder="Type store id to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;"></textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getStoreCheck()"/>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px;">
                    <td></td>
                    <td>
                      <span style="margin-left:10px;argin-top:10px;"><a class="button" href="categorylist.html" onclick=""/>Cancel</a></span>
                      <span style="margin-left:10px;argin-top:10px;"><input type="submit" value="New" class="button"></a></span>
                      <input type="hidden" name="flag" value="store"/>
                    </td>  
                    <td></td>
                </tr>
              </table> 
				</form> 
              </div>

              <div id="tabs-2">
              <form action="createProductRule.action">
              <table id="category2" border="0" style="margin-left:50px;width:760px;">
                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;"><font color="red">*</font>Category Name:</div></td>
                    <td style="width:600px;"><input name="categoryName" type="text" style="width:300px;"></td>
                    <td style="width:30px;"></td>
                </tr>
                    
                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;">Category Description:</div></td>
                    <td style="width:500px;">
                      <textarea name="categoryDes" placeholder="Type category description&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;"></textarea>
                    </td>
                    <td style="width:30px;"></td>
                </tr>

                <tr style="height:40px%;">
                    <td><div class="form-title" style="width:150px;"><font color="red">*</font>Product Type:</div></td>
                    <td style="width:500px;">
                      <textarea name="productType" id="typeTags" placeholder="Type product type to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;"></textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getTypeCheck()"/>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;"><font color="red">*</font>Brand:</div></td>
                    <td style="width:500px;">
                      <textarea name="brand" id="brandTags" placeholder="Type brand name to start autocomplete&hellip;" onkeyup="textAreaAdjust(this)" style="overflow:hidden;width:500px;max-width:500px;min-width:500px;margin-top:10px;"></textarea>
                    </td>
                    <td style="width:110px;">
                      <a class="button" href="#" style="margin-left:5px;margin-top:10px;width:102px;" onclick="getBrandCheck()"/>See All Options</a>
                    </td>
                </tr>

                <tr style="height:40px;">
                    <td><div class="form-title" style="width:150px;">Product SKU:</div></td>
                    <td style="width:500px;">
                      <textarea name="productSKU"  placeholder="Type product SKU&hellip;" style="width:500px;max-width:500px;min-width:500px;margin-top:10px;"></textarea>
                    </td>
                    <td style="width:110px;"></td>
                </tr>
                <tr style="height:40px;">
                    <td></td>
                    <td>
                      <span style="margin-left:10px;argin-top:10px;"><a class="button" href="categorylist.html" onclick=""/>Cancel</a></span>
                      <span style="margin-left:10px;argin-top:10px;"><input type="submit" value="New" class="button"></a></span>
                      <input type="hidden" name="flag" value="product"/>
                    </td>  
                    <td></td>
                </tr>
              </table>   
              </form>
              </div>   
            </div>
         
        </div>
    
    <!-- content ends -->

                
    <!-- footer starts -->
        </div>
            <div class="footer"><span>©2013 eBusiness Team</span></div>
        </div>
    <!-- footer ends -->

    </div>
</body>
</html>
