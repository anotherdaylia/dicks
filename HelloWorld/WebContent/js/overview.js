var page = new T.Webpage(
		{
			components : [ "Indicator", "Tip", "ShortDate", "Table", {
				id : "FlashLine",
				type : "Flash",
				options : {
					type : "line"
				}
			}, {
				id : "FlashArea",
				type : "Flash",
				options : {
					type : "pie",
					flashContainerId : "FlashAreaContainer",
					height : 255
				}
			}, "FlashFormatConverter", {
				id : "DateCompare",
				type : "DateCompare",
				options : {
					checkedId : "LastDay"
				}
			} ],
			onbeforeInit : function() {
				var a = T.dom.one("#DateSelectBar a");
				if (a) {
					T.dom.addClass(a, "cur")
				}
			},
			oninit : function() {
				this.context.appId = this.appInfo.id;
				this.context.st = this.pageInfo.st;
				this.context.et = this.pageInfo.et;
				this.context.st2 = this.DateCompare.params.st2;
				this.context.et2 = this.DateCompare.params.et2;
				this.context.flashIndicators = this.indexInfo.flashSelected
						.join();
				this.context.outline = T.object.clone(this.outline);
				this.context.outline.fields = this.Indicator
						.map(this.outline.fields);
				this.context.outline.fields[0] = this.Indicator
						.index(this.outline.fields[0]);
				T.insertHTML("Outline", "beforeEnd", AceTemplate.format(
						"OutlineTemplate", this.context.outline));
				this.context.outlineSummary = T.object
						.clone(this.outlineSummary);
				this.context.outlineSummary.fields = this.Indicator
						.map(this.outlineSummary.fields);
				this.context.outlineSummary.fields[0].url = T.format(
						"#{0}/activitydegree?appId=#{1}",
						this.systemConfig.baseUri, this.appInfo.id);
				this.context.outlineSummary.fields[1].url = T.format(
						"#{0}/activitydegree?appId=#{1}",
						this.systemConfig.baseUri, this.appInfo.id);
				this.context.outlineSummary.fields[2].url = T.format(
						"#{0}/retaineduser?appId=#{1}",
						this.systemConfig.baseUri, this.appInfo.id);
				this.context.outlineSummary.fields[3].url = T.format(
						"#{0}/visit/frequency?appId=#{1}",
						this.systemConfig.baseUri, this.appInfo.id);
				T.insertHTML("OutlineSummary", "beforeEnd", AceTemplate.format(
						"OutlineSummaryTemplate", this.context.outlineSummary));
				this.context.page = T.object.clone(this.page);
				this.context.page.fields = this.Indicator.map(this.page.fields);
				this.context.page.fields[0] = this.Indicator
						.index(this.page.fields[0]);
				T.insertHTML("Entrance", "beforeEnd", AceTemplate.format(
						"EntranceTemplate", this.context.page));
				T.ui.Tip.loadTips();
				var a = this;
				this.FlashIndicator = new T.ui.CheckGroup({
					containerId : "FlashIndicator",
					items : this.indexInfo.flashIndicators,
					selectedItems : this.indexInfo.flashSelected,
					limit : 1,
					onchange : function(b) {
						a.onchangeFlashIndicator(b)
					},
					autoRender : true
				});
				if (!(this.userInfo.roles.ico || this.userInfo.roles.admin)
						&& (!T.config.memo || T.config.memo.NewFunTips !== 0)
						&& T.config.newFunContent && T.config.newFunContent[0]
						&& T.config.newFunContent[0].content) {
					this.NewFunctionsDialog = new T.ui.Dialog({
						width : 750,
						height : 520,
						className : "popup-new",
						content : AceTemplate.format("popupTemplate"),
						isModal : true
					});
					T.on("popupClose", "click", function() {
						a.NewFunctionsDialog.close()
					});
					T.on("popupKnown", "click", function() {
						a.NewFunctionsDialog.close();
						var b = (new Date()).getTime();
						var c = window["bd_holmes" + b] = new Image();
						c.src = T.config.systemConfig.memoUri + "?r=" + b
								+ "&global=0&type=page-tip&status=0&pageId="
								+ T.config.pageInfo.id
								+ "&appId=0&elementId=NewFunTips";
						c.onload = c.onerror = function() {
							c = null
						}
					});
					this.NewFunctionsDialog.show()
				}
			},
			ajaxMethods : {
				getFlashData : {
					name : "getFlashData",
					uri : "overview/f",
					adapter : "convertFlashDataFormat"
				}
			},
			onchangeToggleTarget : function(a) {
				if (T.dom.hasClass(a, "close")) {
					T.dom.addClass(T.dom.getParent(a), "btw")
				} else {
					T.dom.removeClass(T.dom.getParent(a), "btw")
				}
			},
			context : {
				appId : null,
				st : null,
				et : null,
				st2 : null,
				et2 : null,
				gran : 6,
				flashIndicators : null
			},
			getFlashParam : function() {
				if (this.context.gran == 5) {
					return {
						appId : this.context.appId,
						st : this.context.st,
						et : this.context.et,
						gran : this.context.gran,
						indicators : this.context.flashIndicators
					}
				}
				return {
					appId : this.context.appId,
					st : this.context.st,
					et : this.context.et,
					gran : this.context.gran,
					st2 : this.context.st2,
					et2 : this.context.et2,
					indicators : this.context.flashIndicators
				}
			},
			onchangeTable : function(a) {
				this.context.order = a;
				this.getTableData()
			},
			onchangeShortDate : function(a) {
				this.context.st = a[0];
				this.context.et = a[1];
				if ((a[1] - a[0]) / (3600 * 1000 * 24) > 2) {
					T.hide("FlashTimeCompare");
					this.context.gran = 5
				} else {
					this.DateCompare.show(parseInt(a[0]));
					this.context.st2 = this.DateCompare.params.st2;
					this.context.et2 = this.DateCompare.params.et2;
					this.context.gran = 6
				}
				this.getFlashData()
			},
			onchangeDateCompare : function(a, b) {
				this.context.st2 = a.st2;
				this.context.et2 = a.et2;
				this.getFlashData()
			},
			onchangeFlashIndicator : function(a) {
				this.context.flashIndicators = a.join();
				this.getFlashData()
			},
			onchangeTableIndicator : function(a) {
				this.context.indicators = a.join();
				this.getTableData()
			},
			ongetFlashData : function() {
				this.FlashLine.showLoading()
			},
			onflashLoaded : function(a) {
				switch (a) {
				case "FlashLine":
					this.getFlashData();
					break;
				case "FlashArea":
					this.renderFlashArea();
					break;
				default:
					break
				}
			},
			renderFlashArea : function() {
				this.district.indicator = "user_count";
				this.district.flashId = "FlashArea";
				this.district.type = "pie";
				var a = this.DataAdapter.convertFlashDataFormat(this.district);
				this.FlashFormatConverter.setFlash(a)
			},
			getFlashData : function() {
				this.ajax(this.ajaxMethods.getFlashData, this.getFlashParam())
			},
			ongetFlashDataSuccess : function(b, a) {
				this.FlashFormatConverter.setFlash(b);
				this.FlashLine
						.setIsPeriodCompare(!!(this.context.st2 || this.context.et2))
			},
			onconvertFlashDataFormat : function(a) {
				a.indicator = this.context.flashIndicators;
				a.flashId = "FlashLine";
				a.type = "line";
				a.by = "hour";
				if (this.context.gran == 5) {
					a.by = "day"
				}
			},
			onchangeDownload : function() {
				this.Download.download(this.getTableParam())
			}
		});