T.i18n.currentLocale = "zh-CN";
T.i18n.number.formatNumber = function(a) {
	if (a == null) {
		return ""
	}
	if (a == "--") {
		return a
	}
	if (isNaN(parseFloat(a))) {
		return a
	}
	return T.i18n.number.format(a, T.i18n.currentLocale)
};
T.i18n.number.formatRatio = function(a) {
	if (a == null) {
		return ""
	}
	if (a == "--") {
		return a
	}
	if (isNaN(parseFloat(a))) {
		return a
	}
	return T.i18n.number.format(a, T.i18n.currentLocale) + "%"
};
T.i18n.number.formatTime = function(d, g) {
	var b, f, h, e, a;
	if (d == "--") {
		return d
	}
	if (g == 2) {
		h = d / 60 | 0;
		e = Math.round(d) - h * 60;
		var c = "";
		if (h) {
			c += h + "&#039;"
		}
		c += e + "&quot;";
		return c
	}
	b = d / (24 * 3600) | 0;
	d = Math.round(d) - b * 24 * 3600;
	f = d / 3600 | 0;
	d = Math.round(d) - f * 3600;
	h = d / 60 | 0;
	e = Math.round(d) - h * 60;
	if (Math.round(b) < 10) {
		b = b > 0 ? "0" + b : ""
	}
	if (Math.round(f) < 10) {
		f = "0" + f
	}
	if (Math.round(h) < 10) {
		h = "0" + h
	}
	if (Math.round(e) < 10) {
		e = "0" + e
	}
	if (b) {
		a = b + " " + f + ":" + h + ":" + e
	} else {
		a = f + ":" + h + ":" + e
	}
	return a
};
T.config = T.config || {};
T.config.holidays = {
	"å…ƒæ—¦èŠ‚" : /01\/0[1-3]$/,
	"æ˜¥èŠ‚" : /(^2011\/02\/0[2-8]$)|(^2012\/01\/2[2-8]$)|(^2013\/02\/(09|1[0-5])$)/,
	"æƒ…äººèŠ‚" : /02\/14$/,
	"æ„šäººèŠ‚" : /04\/01$/,
	"æ¸…æ˜ŽèŠ‚" : /(^2011\/04\/0[3-5]$)|(^2012\/04\/0[2-4]$)|(^2013\/04\/0[4-6]$)/,
	"åŠ³åŠ¨èŠ‚" : /(^2011\/(04\/30|05\/0[12])$)|(^201[2-3]\/(04\/(29|30)|05\/01)$)/,
	"å„¿ç«¥èŠ‚" : /06\/01$/,
	"ç«¯åˆèŠ‚" : /(^2011\/06\/0[4-6]$)|(^2012\/06\/2[2-4]$)|(^2013\/06\/1[0-2]$)/,
	"å»ºå†›èŠ‚" : /08\/01$/,
	"ä¸­ç§‹èŠ‚" : /(^2011\/09\/1[0-2]$)|(^2012\/09\/30$)|(^2013\/09\/(19|2[0-1])$)/,
	"å›½åº†èŠ‚" : /10\/0[1-7]$/,
	"åœ£è¯žèŠ‚" : /12\/25$/
};
T.config.lineChartDayTimeMap = {
	"0" : "00:00 - 00:59",
	"1" : "01:00 - 01:59",
	"2" : "02:00 - 02:59",
	"3" : "03:00 - 03:59",
	"4" : "04:00 - 04:59",
	"5" : "05:00 - 05:59",
	"6" : "06:00 - 06:59",
	"7" : "07:00 - 07:59",
	"8" : "08:00 - 08:59",
	"9" : "09:00 - 09:59",
	"10" : "10:00 - 10:59",
	"11" : "11:00 - 11:59",
	"12" : "12:00 - 12:59",
	"13" : "13:00 - 13:59",
	"14" : "14:00 - 14:59",
	"15" : "15:00 - 15:59",
	"16" : "16:00 - 16:59",
	"17" : "17:00 - 17:59",
	"18" : "18:00 - 18:59",
	"19" : "19:00 - 19:59",
	"20" : "20:00 - 20:59",
	"21" : "21:00 - 21:59",
	"22" : "22:00 - 22:59",
	"23" : "23:00 - 23:59"
};
baidu.lang.Class.create = function(b, a) {
	return new b(a)
};
baidu.form.getValues = function(c, q) {
	c = T.g(c);
	q = q || {};
	var b = c.elements, j = b.length, e = q.replacer || function(r, i) {
		return r
	}, g = q.data || [], h, o, p, k, d, a, n, m, l;
	function f(i, r) {
		g.push({
			name : i,
			value : r
		})
	}
	for (h = 0; h < j; h++) {
		o = b[h];
		p = o.name;
		if (!o.disabled && p) {
			k = o.type;
			d = o.value;
			switch (k) {
			case "radio":
			case "checkbox":
				if (!o.checked) {
					break
				}
			case "textarea":
			case "text":
			case "password":
			case "hidden":
			case "select-one":
				f(p, e(d, p));
				break;
			case "select-multiple":
				a = o.options;
				m = a.length;
				for (n = 0; n < m; n++) {
					l = a[n];
					if (l.selected) {
						f(p, e(l.value, p))
					}
				}
				break
			}
		}
	}
	return g
};
T.createClass = function(a) {
	return T.lang.createClass(
			function(b) {
				this.options = T.extend(T.object.clone(this.options), T.object
						.clone(b));
				this._init && this._init()
			}).extend(a)
};
T.createUI = function(a) {
	return T.ui.createUI(
			function(b) {
				this.uiType = this._type;
				this.classPrefix = this._type;
				this.options = T.extend(T.object.clone(this.options), T.object
						.clone(b));
				this._init && this._init()
			}).extend(a)
};
T.inlineTip = function(b) {
	var a = T.g(b);
	if (a) {
		if (T.trim(a.value) == a.defaultValue) {
			T.dom.addClass(a, "gray")
		}
		T.on(a, "focus", function() {
			if (T.trim(this.value) == this.defaultValue) {
				T.dom.removeClass(this, "gray");
				this.value = ""
			}
		});
		T.on(a, "blur", function() {
			if (T.trim(this.value) == "") {
				T.dom.addClass(this, "gray");
				this.value = this.defaultValue
			}
		})
	}
};
T.getInlineTipInputValue = function(b) {
	var a = T.g(b);
	if (a) {
		if (a.defaultValue == T.g(b).value) {
			return ""
		} else {
			return T.g(b).value
		}
	}
	return ""
};
T.clearInlineTipInputValue = function(b) {
	var a = T.g(b);
	if (a && a.defaultValue != null) {
		T.dom.addClass(a, "gray");
		a.value = a.defaultValue
	}
};
T.getCornerPosition = function(c, b, d) {
	var c = T.g(c);
	var a = T.dom.getPosition(c);
	switch (b) {
	case "br":
		a.left += c.offsetWidth;
		a.top += c.offsetHeight;
		break;
	case "tr":
		a.left += c.offsetWidth;
		break;
	case "bl":
		a.top += c.offsetHeight;
		break
	}
	if (d) {
		if (d.left) {
			a.left += d.left
		}
		if (d.top) {
			a.top += d.top
		}
	}
	return a
};
T.setRelatedPosition = function(b, c, a, d) {
	T.dom.setPosition(b, T.getCornerPosition(c, a, d))
};
T.expose = function(a) {
	T.setRelatedPosition(a, a, "tl");
	T.dom.addClass(a, "expose")
};
T.unexpose = function(a) {
	T.dom.removeClass(a, "expose")
};
baidu.event.ons = function(d, b, a, c) {
	baidu.each(d, function(e) {
		baidu.on(e, b, a, c)
	})
};
baidu.event.uns = function(c, b, a) {
	baidu.each(c, function(d) {
		baidu.un(d, b, a)
	})
};
baidu.truncat = function(b, a) {
	if (b == null) {
		return b
	}
	if (b.length > a) {
		return b.substr(0, a - 2) + "..."
	} else {
		return b
	}
};
baidu.param = function(b) {
	var a = [];
	baidu.object.each(b, function(d, c) {
		if (d == null) {
			return
		}
		if (baidu.lang.isArray(d)) {
			baidu.each(d, function(e) {
				a.push(encodeURIComponent(c + "[]") + "="
						+ encodeURIComponent(e))
			})
		} else {
			a.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
		}
	});
	return a.join("&").replace(/%20/g, "+")
};
baidu.dragable = function(b, a) {
	var c = baidu.G(a.handler) || baidu.G(b);
	a.onbeforestart = a.onbeforestart || function() {
	};
	a.onstart = a.onafterstart || function() {
	};
	delete a.onafterstart;
	c.onmousedown = function(d) {
		a.onbeforestart();
		baidu.dragable.orgUpHandler = document.onmouseup;
		baidu.drag(b, window.event || d, a);
		document.onmouseup = function(f) {
			baidu.drag.stop();
			document.onmouseup = baidu.dragable.orgUpHandler
		};
		return false
	};
	c.onselectstart = function(d) {
		return false
	}
};
baidu.ajax.jsonPost = function(b, c, a, d) {
	baidu.ajax.request(b, {
		data : baidu.param(c),
		onsuccess : function(g) {
			var e = null;
			try {
				e = baidu.json.decode(g.responseText);
				if (e.status === 0 || e.status > 2) {
					a(e.data, e.status)
				} else {
					if (e.status === 1) {
						if (d) {
							d(e.msg)
						}
					} else {
						if (e.status === 2) {
							window.location = e.data
						}
					}
				}
			} catch (f) {
				if (d) {
					d("ç³»ç»Ÿé”™è¯¯ï¼Œè¯·ç¨å€™å†è¯•â€¦")
				}
			}
		},
		onfailure : function(e) {
			if (e.status === 0) {
				console.log("ç³»ç»Ÿé”™è¯¯ï¼Œè¯·ç¨å€™å†è¯•â€¦");
				return
			}
			if (d) {
				d("ç³»ç»Ÿé”™è¯¯ï¼Œè¯·ç¨å€™å†è¯•â€¦")
			}
		},
		method : "POST",
		noCache : true
	})
};
baidu.ajax.jsonGet = function(b, c, a, d) {
	baidu.ajax.request(b, {
		data : baidu.param(c),
		onsuccess : function(g) {
			var e = null;
			try {
				e = baidu.json.decode(g.responseText);
				if (e.status === 0 || e.status > 2) {
					a(e.data, e.status)
				} else {
					if (e.status === 1) {
						if (d) {
							d(e.msg)
						}
					} else {
						if (e.status === 2) {
							window.location = e.data
						}
					}
				}
			} catch (f) {
				if (d) {
					d("ç³»ç»Ÿé”™è¯¯ï¼Œè¯·ç¨å€™å†è¯•â€¦")
				}
			}
		},
		onfailure : function(e) {
			if (e.status === 0) {
				console.log("ç³»ç»Ÿé”™è¯¯ï¼Œè¯·ç¨å€™å†è¯•â€¦");
				return
			}
			if (d) {
				d("ç³»ç»Ÿé”™è¯¯ï¼Œè¯·ç¨å€™å†è¯•â€¦")
			}
		},
		method : "GET",
		noCache : true
	})
};
baidu.dateSpan = function(a, b) {
	if (a.getTime() != b.getTime() && b != null) {
		return baidu.date.format(a, "ï¼ˆyyyy-MM-dd")
				+ baidu.date.format(b, " ~ yyyy-MM-ddï¼‰")
	} else {
		return baidu.date.format(a, "ï¼ˆyyyy-MM-ddï¼‰")
	}
};
var EventRouter = {
	_events : {},
	_owner : null,
	register : function(a, b) {
		if (this._events[a]) {
			this._events[a].push(b)
		} else {
			this._events[a] = [ b ]
		}
	},
	dispatch : function(a) {
		var d = [].slice.call(arguments, 1);
		var c = this._events[a];
		if (c) {
			for ( var b = 0; b < c.length; b++) {
				c[b].apply(this._owner, d)
			}
		}
		if (this._owner && T.lang.isFunction(this._owner[a])) {
			this._owner[a].apply(this._owner, d)
		}
	},
	setOwner : function(a) {
		this._owner = a
	}
};
(function() {
	var b = {};
	this.tmpl = function a(e, d) {
		var c = !/\W/.test(e) ? b[e] = b[e]
				|| a(document.getElementById(e).innerHTML) : new Function(
				"obj",
				"var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"
						+ e.replace(/[\r\t\n]/g, " ").split("<%").join("\t")
								.replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(
										/\t=(.*?)%>/g, "',$1,'").split("\t")
								.join("');").split("%>").join("p.push('")
								.split("\r").join("\\'")
						+ "');}return p.join('');");
		return d ? c(d) : c
	}
})();
(function() {
	var a = {};
	getUniqueId = function(c) {
		var d = c || 8;
		var e = "";
		while (d--) {
			e += b()
		}
		if (!a[e]) {
			a[e] = 1;
			return e
		} else {
			return getUniqueId(d)
		}
	};
	var b = function() {
		var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		var c = d.length;
		return d.charAt(Math.floor(Math.random() * c))
	}
})();
var AceTemplate = AceTemplate || {};
(function() {
	var d = {
		log : function(h) {
			window.console && console.log(h)
		}
	};
	var f = {
		"#39" : "'",
		quot : '"',
		lt : "<",
		gt : ">",
		amp : "&",
		nbsp : " "
	};
	var c = {
		"'" : "#39",
		'"' : "quot",
		"<" : "lt",
		">" : "gt",
		"&" : "amp",
		" " : "nbsp"
	};
	var g = {
		g : function(h) {
			if (typeof h != "string") {
				return h
			}
			return document.getElementById(h)
		},
		decodeHTML : function(h) {
			return String(h).replace(/&(#39|quot|lt|gt|amp|nbsp);/ig,
					function(j, i) {
						return f[i]
					}).replace(/&#u([a-f\d]{4});/ig, function(i, j) {
				return String.fromCharCode(parseInt("0x" + j))
			}).replace(/&#(\d+);/ig, function(i, j) {
				return String.fromCharCode(+j)
			})
		},
		encodeHTML : function(h) {
			return String(h).replace(/['"<>& ]/g, function(i) {
				return "&" + c[i] + ";"
			})
		},
		encodeAttr : function(h) {
			return String(h).replace(/['"]/g, function(i) {
				return "&" + c[i] + ";"
			})
		},
		elementText : function(h) {
			if (!h || !h.tagName) {
				return ""
			}
			if (/^(input|textarea)$/i.test(h.tagName)) {
				return h.value
			}
			return g.decodeHTML(h.innerHTML)
		}
	};
	var a = {};
	var e = false;
	function b(j) {
		var i = [], k = [];
		i.push("with(this){");
		i
				.push(j
						.replace(/[\r\n]+/g, "\n")
						.replace(/^\n+|\s+$/mg, "")
						.replace(
								/((^\s*[<>!#^&\u0000-\u0008\u007F-\uffff].*$|^.*[<>]\s*$|^(?!\s*(else|do|try|finally)\s*$)[^'":;,\[\]{}()\n\/]+$|^(\s*(([\w-]+\s*=\s*"[^"]*")|([\w-]+\s*=\s*'[^']*')))+\s*$|^\s*([.#][\w-.]+(:\w+)?(\s*|,))*(?!(else|do|while|try|return)\b)[.#]?[\w-.*]+(:\w+)?\s*\{.*$)\s?)+/mg,
								function(l) {
									l = [
											'"',
											l
													.replace(/&none;/g, "")
													.replace(/["'\\]/g, "\\$&")
													.replace(/\n/g, "\\n")
													.replace(
															/(!?(#|@))\{(.*?)\}/g,
															function(q, n, m, p) {
																p = p
																		.replace(
																				/\\n/g,
																				"\n")
																		.replace(
																				/\\([\\'"])/g,
																				"$1");
																var o = /^[a-z$][\w+$]+$/i
																		.test(p)
																		&& !(/^(true|false|NaN|null|this)$/
																				.test(p));
																return [
																		'",',
																		o ? [
																				"typeof ",
																				p,
																				'=="undefined"?"":' ]
																				.join("")
																				: "",
																		(n == "#" ? "_encode_"
																				: ""),
																		(m == "@" ? "_encodeAttr_"
																				: ""),
																		"(", p,
																		'),"' ]
																		.join("")
															}), '"' ].join("")
											.replace(/^"",|,""$/g, "");
									if (l) {
										return [ "_output_.push(", l, ");" ]
												.join("")
									} else {
										return ""
									}
								}));
		i.push("}");
		var h = new Function("_output_", "_encode_", "_encodeAttr_", "helper",
				i.join(""));
		d.log(h);
		return h
	}
	AceTemplate.format = function(m, l, k) {
		if (!m) {
			return ""
		}
		var h, j;
		if (typeof m == "object" && m.tagName) {
			j = m;
			m = j.getAttribute("id")
		}
		k = k || this;
		h = a[m];
		if (!h) {
			if (!/[^\w-]/.test(m)) {
				if (!j) {
					j = g.g(m)
				}
				h = this.register(m, j)
			} else {
				h = b(m)
			}
		}
		var i = [];
		h.call(l || "", i, g.encodeHTML, g.encodeAttr, k);
		return i.join("")
	};
	AceTemplate.register = function(m, l) {
		if (!arguments.length && !e) {
			e = true;
			var h = document.getElementsByTagName("script");
			for ( var k = 0; k < h.length; k++) {
				var j = h[k];
				if (/^(text\/template)$/i.test(j.getAttribute("type"))) {
					var m = j.getAttribute("id");
					m && arguments.callee.call(this, m, j)
				}
			}
		}
		if (!m) {
			return
		}
		if (a[m]) {
			return a[m]
		}
		if (typeof l != "string") {
			if (typeof l == "undefined") {
				l = g.g(m)
			}
			l = g.elementText(l)
		}
		return a[m] = b(l)
	};
	AceTemplate.unregister = function(h) {
		delete a[h]
	}
})();
function loadedCallback(a) {
	EventRouter.dispatch("onflashLoaded", a)
}
function createImageSuccess(a) {
	EventRouter.dispatch("onflashCreateImageSuccess", a)
}
function hasParent(d, e) {
	var c = arguments;
	if (typeof e === "string") {
		var b = T.dom.query(e);
		var a = false;
		T.element(e).each(function(f) {
			a = a || c.callee(d, f)
		});
		return a
	} else {
		if (d === e && d === document.body) {
			return true
		} else {
			do {
				if (d === e) {
					return true
				} else {
					if (d === document.body) {
						return false
					}
				}
			} while (d = d.parentNode)
		}
		return false
	}
}
T.lang.isUrl = T.lang.isUrl
		|| function(a) {
			return /^((https|http|ftp|rtsp|mms)?:\/\/)?(([\w-]+\.)+[a-z]{2,6}|((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d))(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i
					.test(a)
		};
T.dom.one = function(c, b) {
	if (T.isString(b)) {
		b = T.g(b)
	}
	var a = T.dom.query(c, b);
	if (a.length > 0) {
		return a[0]
	} else {
		return null
	}
};
T.initShowLine = function(f, b) {
	if (!f) {
		return
	}
	var d = f.value.replace(/\r/gi, "");
	var e = d.split("\n").length;
	if (e > b) {
		T.dom.next(f).innerHTML = "æ‚¨æœ€å¤šå¯è¾“å…¥" + b + "ä¸ª";
		f.pass = false
	} else {
		f.pass = true;
		T.dom.next(f).innerHTML = ""
	}
	var a = "";
	for ( var c = 1; c <= e; c++) {
		if (document.all) {
			a += c + "\r\n"
		} else {
			a += c + "\n"
		}
	}
	T.dom.prev(f).value = a;
	T.dom.prev(f).scrollTop = f.scrollTop;
	f.onscroll = function() {
		T.dom.prev(f).scrollTop = f.scrollTop
	}
};
T.getTipElement = function(a) {
	var b = T.dom.create("div", {
		style : "position: absolute;"
	});
	b.className = "tip-container";
	b.innerHTML = '<div style="position: relative;top:8px; left:-10px;" class="tip-div tip-theme title-theme"><div class="tip-arrow"></div><div class="tip-wrap">'
			+ a + "</div></div>";
	return b
};
T.beforeUnloadAlert = function() {
	window.onbeforeunload = function() {
		return 'æ‚¨è¿˜æ²¡æœ‰ä¿å­˜åˆšæ‰çš„è®¾ç½®ã€‚å¦‚éœ€è¦ä¿å­˜è®¾ç½®ï¼Œè¯·ç‚¹å‡»"ç•™åœ¨æ­¤é¡µ"ï¼Œç„¶åŽç‚¹å‡»å½“å‰é¡µé¢çš„"ç¡®å®š"'
	}
};
T.postBtnBind = function(d, b) {
	var c = T.g(d);
	var a = function() {
		setTimeout(function() {
			T.dom.removeClass(c, "disabled")
		}, 1000)
	};
	T.on(c, "click", function(f) {
		if (T.dom.hasClass(c, "disabled")) {
			T.event.stop(f)
		} else {
			T.dom.addClass(c, "disabled");
			b(f, a)
		}
	})
};
T.isInputsChanged = (function() {
	return function(b) {
		var c = false;
		var g = b;
		for ( var e = 0; e < g.length; e++) {
			var d = g[e];
			var f = d.type;
			if (f == "text" || f == "hidden" || f == "button") {
				if (!T.dom.hasAttr(d, "dyna-value")) {
					if (d.value != d.defaultValue) {
						c = true;
						break
					}
				} else {
					if (d.value != T.dom.getAttr(d, "dyna-value")) {
						c = true;
						break
					}
				}
			} else {
				if (f == "radio" || f == "checkbox") {
					if (!T.dom.hasAttr(d, "dyna-checked")) {
						if (d.checked != d.defaultChecked) {
							c = true;
							break
						}
					} else {
						var a = T.dom.getAttr(d, "dyna-checked") == "true" ? true
								: false;
						if (d.checked != a) {
							c = true;
							break
						}
					}
				}
			}
		}
		return c
	}
})();
T.setDynaValue = function(a) {
	var e = a;
	for ( var c = 0; c < e.length; c++) {
		var b = e[c];
		var d = b.type;
		if (d == "text" || d == "hidden" || d == "textarea" || d == "button") {
			T.dom.setAttr(b, "dyna-value", b.value)
		} else {
			if (d == "radio" || d == "checkbox") {
				T.dom.setAttr(b, "dyna-checked", b.checked)
			}
		}
	}
};
T.resetForm = function(b) {
	var f = b;
	for ( var d = 0; d < f.length; d++) {
		var c = f[d];
		var e = c.type;
		var a = T.dom.hasAttr(c, "defaultText");
		if (e == "text" || e == "hidden" || e == "textarea" || e == "button") {
			if (!a) {
				c.value = c.defaultValue
			} else {
				c.value = T.dom.getAttr(c, "defaultText");
				T.dom.addClass(c, "gray")
			}
		} else {
			if (e == "radio" || e == "checkbox") {
				c.checked = c.defaultChecked
			}
		}
	}
};
T.getAncestorOrSelfByClass = function(a, c) {
	var b = T.dom.getAncestorByClass(a, c);
	if (b) {
		return b
	} else {
		if (T.dom.hasClass(a, c)) {
			return a
		} else {
			return null
		}
	}
};
T.settingTableHover = function() {
	T.element(T.q("setting-table")).mouseover(function(c) {
		var b = T.event.getTarget(c);
		var a = T.getAncestorOrSelfByClass(b, "setting-table-tr");
		if (a) {
			T.dom.addClass(a, "tr-highlight")
		}
	});
	T.element(T.q("setting-table")).mouseout(function(c) {
		var b = T.event.getTarget(c);
		var a = T.getAncestorOrSelfByClass(b, "setting-table-tr");
		if (a) {
			T.dom.removeClass(a, "tr-highlight")
		}
	})
};
T.isIco = function() {
	return T.config.userInfo.roles.ico
};
T.isUnion = function() {
	return T.config.userInfo.roles.webmaster
};
T.isCustomer = function() {
	var a = /.*customer$/i, b;
	T.object.each(T.config.userInfo.roles, function(d, c) {
		if (a.test(c) && d) {
			b = true
		}
	});
	return b
};
T.auth = function(a) {
	return T.config.userInfo.auths[a]
};
T.lang.isEmail = T.lang.isEmail || (function(a) {
	return /^\w+([-\.]\w+)*@\w+([-\.]\w+)*\.\w+([-\.]\w+)*$/i.test(a)
});
(function() {
	var b = null;
	var a = null;
	T.on(document.body, "click", function(e) {
		var g = T.event.get(e).target;
		var f = null;
		var d = null;
		do {
			if (g != document) {
				if (T.dom.hasClass(g, "layer")) {
					d = g
				}
				if (T.dom.hasAttr(g, "layer")) {
					f = g
				}
			}
		} while (g = g.parentNode);
		var c = function(j, i) {
			if (i) {
				T.dom.addClass(j, "selected")
			} else {
				T.dom.removeClass(j, "selected")
			}
			T.each(T.q("arrow", j), function(k) {
				if (i) {
					T.dom.addClass(k, "selected")
				} else {
					T.dom.removeClass(k, "selected")
				}
			})
		};
		if (f == null) {
			if (a != null && d != a) {
				T.hide(a);
				c(b, false);
				EventRouter.dispatch("onchangeToggleTarget", b);
				a = null;
				b = null
			}
		} else {
			var h = T.dom.one(T.dom.getAttr(f, "layer"));
			if (h != null) {
				if (a != null && h != a) {
					T.hide(a);
					c(b, false)
				}
				a = null;
				b = null;
				if (h.style.display == "none"
						|| T.dom.hasClass(h, "shared-layer")) {
					T.show(h);
					c(f, true);
					a = h;
					b = f
				} else {
					T.hide(h);
					c(f, false)
				}
			}
		}
	})
})();
baidu.string.format = function(c, a) {
	c = String(c);
	var b = Array.prototype.slice.call(arguments, 1), d = Object.prototype.toString;
	if (b.length) {
		b = b.length == 1 ? (a !== null
				&& (/\[object Array\]|\[object Object\]/.test(d.call(a))) ? a
				: b) : b;
		return c.replace(/(#|!)\{(.+?)(?:\s*,\s*(\d+?))*?\}/g, function(e, h,
				g, i) {
			var f = b[g];
			if ("[object Function]" == d.call(f)) {
				f = f(g)
			}
			if (i) {
				f = T.truncat(f, i)
			}
			if (h == "!") {
				f = T.string.encodeHTML(f)
			}
			return ("undefined" == typeof f ? "" : f)
		})
	}
	return c
};
baidu.format = baidu.string.format;
T.swf.createClipBoard = function(a) {
	var c = {
		id : "id" + (+new Date()),
		flashId : "head",
		flashContainer : "HeadCodeCopyBtn",
		width : 62,
		height : 22,
		clip : function(d) {
		},
		success : function(d) {
		},
		fail : function(d) {
		}
	}, b = T.object.extend(c, a);
	T.swf.create({
		id : b.id,
		width : b.width,
		height : b.height,
		ver : "9.0.28",
		errorMessage : "è¯·ä¸‹è½½æœ€æ–°çš„Flashæ’­æ”¾å™¨ï¼",
		url : T.config.systemConfig.webRoot + "/flash/clipboard.swf",
		bgcolor : "#000",
		wmode : "transparent",
		vars : {
			flashId : b.flashId
		}
	}, b.flashContainer);
	if (!window.onClip) {
		window.onClip = b.clip
	}
	if (!window.onFail) {
		window.onFail = b.fail
	}
	if (!window.onSuccess) {
		window.onSuccess = b.success
	}
};
(function(a) {
	a.fn.bgiframe = (a.browser.ie && /msie 6.0/i.test(navigator.userAgent) ? function(
			e, d) {
		d = a.extend({
			top : "auto",
			left : "auto",
			width : "auto",
			height : "auto",
			opacity : true,
			src : "javascript:false;"
		}, d);
		var c = '<iframe class="bgiframe" frameborder="0" tabindex="-1" src="'
				+ d.src
				+ '"style="display:block;position:absolute;z-index:-1;'
				+ (d.opacity !== false ? "filter:Alpha(Opacity='0');" : "")
				+ "top:"
				+ (d.top == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')"
						: b(d.top))
				+ ";left:"
				+ (d.left == "auto" ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')"
						: b(d.left))
				+ ";width:"
				+ (d.width == "auto" ? "expression(this.parentNode.offsetWidth+'px')"
						: b(d.width))
				+ ";height:"
				+ (d.height == "auto" ? "expression(this.parentNode.offsetHeight+'px')"
						: b(d.height)) + ';"/>';
		return T.array.each(e, function(f) {
			if (T.dom.query("iframe.bgiframe", f).length == 0) {
				f.insertBefore(T.dom.create(c), f.firstChild)
			}
		})
	}
			: function() {
				return this
			});
	a.fn.bgIframe = a.fn.bgiframe;
	function b(c) {
		return c && c.constructor === Number ? c + "px" : c
	}
})(T);
T.ui.CheckGroup = T
		.createUI({
			options : {
				containerId : "CheckGroup",
				onchange : function(a, b) {
				},
				limit : Number.MAX_VALUE,
				label : "",
				items : [],
				tip : false,
				selectedItems : [],
				template : '<label title="!{3}" for="!{0}"><input id="!{0}" value="!{1}" type="#{2}" title="!{3}" #{4} name="#{5}" />#{6}</label>',
				groupTemplate : '<div class="group wrapped clearfix">#{1}#{0}</div>',
				separatorTemplate : '<div class="separator"></div>',
				tipTemplate : '<a class="help" data="#{0}" href="javascript:void(0)">&nbsp;</a>',
				groupWrapTemplate : '<div class="group-wrapper">#{0}</div>'
			},
			_type : "checkGroup",
			_items : null,
			_selectedItems : null,
			_init : function() {
				if (!T.lang.isArray(this.options.items[0])) {
					this._items = [ this.options.items ]
				} else {
					this._items = this.options.items
				}
				this._selectedItems = T.object
						.clone(this.options.selectedItems);
				this._type = (this.options.limit == 1 ? "radio" : "checkbox")
			},
			_renderHtml : function() {
				var a = [];
				T.array
						.each(
								this._items,
								function(e, c) {
									var b = [], d;
									if (e.length != 0) {
										if (c != 0) {
											a
													.push(this.options.separatorTemplate)
										}
										T.array
												.each(
														e,
														function(h, g) {
															if (this.options.tip) {
																var f = T
																		.encodeHTML(h.label)
																		+ T
																				.format(
																						this.options.tipTemplate,
																						h.id)
															} else {
																f = T
																		.encodeHTML(h.label)
															}
															b
																	.push(T
																			.format(
																					this.options.template,
																					this
																							.getId(h.id),
																					h.id,
																					this._type,
																					h.label,
																					(T.array
																							.contains(
																									this._selectedItems,
																									h.id) ? ' checked="checked"'
																							: ""),
																					this
																							.getId(this.options.containerId),
																					f))
														}, this);
										d = this.options.groupWrapTemplate ? T
												.format(
														this.options.groupWrapTemplate,
														b.join(""))
												: b.join("");
										a
												.push(T
														.format(
																this.options.groupTemplate,
																d,
																this.options.label ? '<label class="label">'
																		+ this.options.label
																		+ "</label>"
																		: ""))
									}
								}, this);
				return a.join("")
			},
			_bind : function() {
				T.array.each(T.dom.query(":input", T
						.g(this.options.containerId)), function(a, b) {
					var c = this;
					this.on(a, "click", function(f) {
						if (c._type == "checkbox") {
							var d = c._selectedItems;
							if (this.checked) {
								d.push(this.value)
							} else {
								if (d.length == 1) {
									this.checked = true;
									return false
								}
								T.array.remove(d, this.value)
							}
							if (d.length > c.options.limit) {
								var e = T.array.removeAt(d, 0);
								T.g(c.getId(e)).checked = false
							}
						} else {
							if (c._selectedItems
									&& c._selectedItems.length == 1
									&& c._selectedItems[0] == this.value) {
								return
							}
							c._selectedItems = [ this.value ]
						}
						var g = [];
						T.array.each(c._selectedItems, function(h) {
							g.push(T.getAttr(c.getId(h), "title"))
						});
						c.options.onchange(c._selectedItems, g)
					})
				}, this)
			},
			reset : function() {
				var a = T.g(this.options.containerId), c = this
						.getId(this.options.items[0].id), b = this;
				if (a) {
					T.array.each(T.dom.query("input", a), function(d) {
						var e = d.id;
						if (c == e) {
							d.checked = true
						} else {
							d.checked = false
						}
					})
				}
				this._selectedItems = [ this.options.items[0].id ];
				this.options.onchange(this._selectedItems, [])
			},
			render : function() {
				var a = T.g(this.options.containerId);
				if (a) {
					T.dom.empty(a);
					T.insertHTML(a, "beforeEnd", this._renderHtml());
					this._bind()
				}
			},
			click : function(b) {
				var a = T.g(this.getId(b));
				if (a) {
					a.click()
				}
			},
			getSelectedLabels : function() {
				var b = [], a = this;
				T.array.each(this._selectedItems, function(c) {
					b.push(T.getAttr(a.getId(c), "title"))
				});
				return b
			}
		});
baidu.ui.Combobox = T
		.createUI({
			_type : "combobox",
			options : {
				containerId : null,
				items : null,
				selectedId : null,
				defaultText : "è¯·é€‰æ‹©",
				width : 200,
				onrender : T.fn.blank,
				onchange : function(a) {
				},
				comboboxTemplate : '<a class="combobox" href="javascript:void(0)" id="#{1}" layer="##{2}"><span title="!{0}" class="text ellipsis">!{0,20}</span><span class="arrow"></span></a>',
				itemTemplate : '<li><a title="!{0}" href="javascript:void(0)" data="#{1}" class="#{2}">!{0}</a></li>',
				wrapperTemplate : '<ul class="options layer" style="display:none;position:absolute;width:#{2}px" id="#{1}">#{0}</ul>'
			},
			_init : function() {
				this._selectedId = this.options.selectedId;
				this._items = this.options.items;
				this._defaultText = this.options.defaultText;
				if (this.options.searchable) {
					this._originalItems = this.options.items;
					this.options = T
							.extend(
									this.options,
									{
										defaultText : "æœªé€‰æ‹©",
										nodataText : "æ²¡æœ‰æ•°æ®",
										itemTemplate : '<li><a title="!{0}" href="javascript:void(0)" data="#{1}" class="#{2}"><span>!{0}</span></a></li>',
										wrapperTemplate : '<div class="options layer srhcom" style="display:none;position:absolute;width:#{2}px" id="#{1}"><ul id="#{1}-ul" class="">#{0}</ul><div id="#{1}-srhbar" style="display:none;" class="srhbar"><form action="javascript:void 0" id="#{1}-srhform"><input type="text" id="#{1}-keyword" class="srhword"/><a href="javascript:void(0)" class="srhbtn" id="#{1}-srhbtn"></a><a href="javascript:void(0);" style="display:none;" id="#{1}-close" class="dialog-close">Ã—</a></form></div></div>',
										onrender : function() {
											var g = this, d = g
													.getId("List-ul"), i = g
													.getId("List-keyword"), e = g
													.getId("List-srhform"), a = g
													.getId("List-srhbtn"), b = g
													.getId("List-close"), h = function(
													j) {
												g._items = j;
												T.dom.empty(d);
												T.dom
														.insertHTML(
																d,
																"beforeend",
																g
																		.genItems(!(j && j.length > 0)));
												g._bindEvents()
											}, f = function() {
												var l = T.g(i), k = l.value, j = T.array
														.filter(
																g._originalItems,
																function(m) {
																	return m.label
																			.indexOf(k) != -1
																});
												h(j)
											}, c = function() {
												T.g(i).value = "";
												f();
												T.hide(b);
												T.show(a)
											};
											g.reset = function() {
												c();
												g.select()
											};
											if (!g._originalItems
													|| g._originalItems.length <= 12) {
												return
											}
											T.show(g.getId("List-srhbar"));
											T.on(e, "submit", function(j) {
												T.event.stop(j);
												f()
											});
											T.on(a, "click", function(j) {
												T.event.stop(j);
												f()
											});
											T.on(b, "click", function(j) {
												c();
												T.g(i).focus()
											});
											T.on(i, "keyup", function(k) {
												var j = T.g(i).value;
												if (j && T.trim(j) != "") {
													T.hide(a);
													T.show(b);
													f()
												} else {
													c()
												}
											});
											if (this.options.searchTip) {
												T.g(i).value = this.options.searchTip;
												T.dom.addClass(i, "gray");
												T
														.on(
																i,
																"focus",
																function(j) {
																	T.dom
																			.removeClass(
																					i,
																					"gray");
																	if (this.value
																			&& this.value == g.options.searchTip) {
																		this.value = ""
																	}
																});
												T
														.on(
																i,
																"blur",
																function(j) {
																	if (this.value
																			&& T
																					.trim(this.value) != "") {
																		return
																	}
																	T.dom
																			.addClass(
																					i,
																					"gray");
																	this.value = g.options.searchTip
																})
											}
											T.fn.bgIframe([ T
													.g(g.getId("List")) ])
										}
									});
					T.dom.addClass(this.options.containerId, "srhcom");
					this.render(this.options.items)
				}
			},
			_selectedId : null,
			_items : null,
			_defaultText : null,
			_bindEvents : function() {
				var a = this;
				T.event.ons(T.dom.query("#" + this.getId("List") + " li a"),
						"click", function() {
							var d = T.dom.getAttr(this, "data");
							var b = T.array.find(a._items, function(e) {
								if (e.id == d) {
									return true
								}
							});
							if (!b) {
								return
							}
							var c = T.dom.one(".text", a.getId());
							if (c) {
								c.innerHTML = T.format("!{0,20}", b.label);
								c.title = b.label
							}
							a._hide();
							if (d != a._selectedId) {
								a._selectedId = d;
								a.options.onchange(d, b.label)
							}
							T.dom.removeClass(a.getId(), "selected")
						});
				T.on(this.getId(), "click", function() {
					if (T.dom.hasClass(this, "combobox-disabled")) {
						return
					}
					var b = T.dom.one(".arrow", this);
					if (!T.dom.hasClass(b, "selected")) {
						a._show()
					}
				})
			},
			_show : function() {
				var a = T.getCornerPosition(this.getId(), "bl");
				a.top--;
				T.dom.setPosition(this.getId("List"), a)
			},
			_hide : function() {
				var a = T.dom.one(".arrow", this.getId());
				if (T.dom.hasClass(a, "selected")) {
					T.dom.removeClass(a, "selected")
				}
				T.hide(this.getId("List"))
			},
			_render : function() {
				var c = this._defaultText;
				if (this._items && this._items.length > 0) {
					c = this._items[0].label;
					if (this._selectedId) {
						for ( var a in this._items) {
							var b = this._items[a];
							if (b.id == this._selectedId) {
								c = b.label;
								break
							}
						}
					} else {
						if (!this.options.selectfirst) {
							this._selectedId = this._items[0].id
						}
					}
				}
				T.dom.insertHTML(this.options.containerId, "beforeend", T
						.format(this.options.comboboxTemplate, c, this.getId(),
								this.getId("List")));
				if (this._items && this._items.length > 0) {
					T.dom.removeClass(this.getId(), "combobox-disabled");
					T.dom.insertHTML(document.body, "beforeend", T.format(
							this.options.wrapperTemplate, this.genItems(), this
									.getId("List"), this.options.width))
				} else {
					if (this.options.nodataText) {
						T.dom.removeClass(this.getId(), "combobox-disabled");
						T.dom.insertHTML(document.body, "beforeend", T.format(
								this.options.wrapperTemplate, this
										.genItems(true), this.getId("List"),
								this.options.width))
					} else {
						T.dom.addClass(this.getId(), "combobox-disabled")
					}
				}
			},
			genItems : function(c) {
				if (!c) {
					var f = [];
					for ( var d = 0, a = this._items.length; d < a; d++) {
						var e = this._items[d], b = "";
						b += e.disabled ? "disabled " : "";
						b += d == 0 ? "top " : "";
						b += d == a - 1 ? "last " : "";
						b += e.cls ? e.cls : "";
						f.push(T.format(this.options.itemTemplate, e.label,
								e.id, b))
					}
					return f.join("")
				} else {
					var b = "top last ";
					b += this.options.nodataCls ? this.options.nodataCls : "";
					return T.format(this.options.itemTemplate,
							this.options.nodataText, "", b)
				}
			},
			setDefaultText : function(a) {
				this._defaultText = a
			},
			render : function(b, a) {
				if (!T.g(this.options.containerId)) {
					return
				}
				if (!!b || b === null) {
					this._items = b
				}
				if (a !== undefined) {
					this._selectedId = a
				}
				T.dom.empty(this.options.containerId);
				if (T.g(this.getId("List"))) {
					T.dom.remove(this.getId("List"))
				}
				this._render();
				this._bindEvents();
				this.options.selectfirst && this.select(a);
				this.options.onrender.call(this)
			},
			select : function(a) {
				var b = true, c;
				if (a) {
					c = T.dom.query("#" + this.getId("List") + " li a[data="
							+ a + "]");
					if (c && c.length > 0) {
						b = false;
						T.event.fire(c[0], "click")
					}
				}
				if (b && this._items && this._items.length > 0) {
					c = T.dom.query("#" + this.getId("List") + " li a:first");
					T.event.fire(c[0], "click")
				}
			}
		});
T.CreateFlash = T.createClass({
	options : {
		ids : [],
		containerId : "FlashContainer",
		data : null,
		by : [],
		type : [],
		indicator : null
	},
	_init : function() {
		EventRouter.register("onflashLoaded", T.fn.bind(
				this._flashLoadedCallback, this));
		this.dataAdapter = new T.DataAdapter();
		this.flashFormatConverter = new T.FlashFormatConverter();
		var b = this, a = T.g(this.options.containerId);
		T.array.each(this.options.data, function(f, d) {
			var c = "Flash_" + d, e = "FlashContainerId_" + d, g = T.dom
					.create("div", {
						id : e
					});
			a.appendChild(g);
			b._initFlash({
				id : c,
				type : b.options.type[d],
				flashContainerId : e,
				flashBaseUrl : "flash/"
			})
		})
	},
	_initFlash : function(b) {
		var a = b.flashBaseUrl + b.type + ".swf";
		T.swf.create({
			id : b.id,
			url : a,
			width : b.width || "100%",
			height : b.height || "320",
			bgColor : "#FFFFFF",
			wmode : "transparent",
			errorMessage : "è½½å…¥FLASHå‡ºé”™",
			ver : "9.0.0",
			allowscriptaccess : "always",
			vars : {
				flashId : b.id,
				baseUrl : b.flashBaseUrl + "fla"
			}
		}, b.flashContainerId)
	},
	_flashLoadedCallback : function(e) {
		var a = e.split("_"), d = a[1], f = this.options.data[d];
		var h = f.msg, b = f.status, c = f.data;
		c.flashId = e;
		c.by = this.options.by[d];
		c.type = this.options.type[d];
		c.indicator = this.options.indicator;
		if (c.type == "bar") {
			c.tipLabel = "SmallTip"
		}
		var g = this.dataAdapter.convertFlashDataFormat(c);
		this.flashFormatConverter.setFlash(g)
	}
});
T.DataAdapter = T
		.createClass({
			options : {
				onflashError : function(a) {
				}
			},
			ConvertTableData : function(I) {
				var u = T.config.indexInfo.indexes;
				var f = T.array.map(u, function(i) {
					return i.id
				});
				var h = [];
				T.each(I.fields, function(j) {
					var i = T.array.indexOf(f, j);
					if (i > -1) {
						h.push(u[i])
					}
				});
				var m = h[0];
				var F = T.config.indexInfo.indicators;
				var x = T.array.map(F, function(i) {
					return i.id
				});
				var a = [];
				var t = [];
				var z = null;
				var v = null;
				T.each(I.fields, function(J, i) {
					if ("ratio_" + z == J) {
						t.push(v - t.length - 1)
					}
					z = J;
					v = i;
					var j = T.array.indexOf(x, J);
					if (j > -1) {
						a.push(F[j])
					}
				});
				var D = [];
				var b = [];
				var w = [];
				var H = false;
				var E = false;
				var q = 1;
				if (I.items[2] && I.items[2].length > 0) {
					H = true;
					q = 3
				}
				if (I.items[3] && I.items[3].length > 0) {
					E = true;
					q = 4
				}
				if (q > 1 && I.mergeIndex) {
					q = q - 1
				}
				T.array.each(h, function(i) {
					var j = {
						id : i.id,
						label : i.label,
						sortable : i.sortable,
						tip : i.tip,
						className : "table-index"
					};
					if (H && I.mergeIndex) {
						j.colspan = 2
					}
					D.push(j)
				});
				for ( var B = 0; B < a.length; B++) {
					var s = a[B];
					D.push({
						id : s.id,
						label : s.label,
						sortable : s.sortable,
						tip : s.tip,
						className : s.type
					})
				}
				for ( var B in I.items[0]) {
					var e = I.items[0][B];
					var r = I.items[1][B];
					var g = H ? I.items[2][B] : null;
					var l = E ? I.items[3][B] : null;
					if (!H) {
						var k = [];
						T.array.each(h, function(J, K) {
							if (T.lang.isObject(e[K])) {
								var j = {
									id : J.id,
									label : e[K].label,
									className : "table-index"
								};
								if (e[K].expandable != null) {
									j.expandable = e[K].expandable
								}
								if (e[K].hasOperation != null) {
									j.hasOperation = e[K].hasOperation
								}
								if (e[K].data != null) {
									j.data = e[K].data
								}
								k.push(j)
							} else {
								k.push({
									id : J.id,
									label : e[K],
									className : "table-index"
								})
							}
						});
						for ( var A = 0; A < a.length; A++) {
							var s = a[A];
							var p = this._formatTableText(r[A], s.type);
							var d = T.array.indexOf(t, A);
							if (d > -1) {
								p = p
										+ "("
										+ this._formatTableText(r[A + 1],
												"ratio") + ")";
								r.splice(A, 1)
							}
							k.push({
								id : s.id,
								label : p,
								className : s.type
							})
						}
						b.push(k)
					} else {
						var c = [];
						var G = [];
						var n = [];
						var o = {
							label : e[0],
							className : "table-index"
						};
						if (T.lang.isObject(e[0])) {
							o = {
								id : m.id,
								label : e[0].label,
								className : "table-index"
							};
							if (e[0].expandable != null) {
								o.expandable = e[0].expandable
							}
							if (e[0].hasOperation != null) {
								o.hasOperation = e[0].hasOperation
							}
							if (e[0].data != null) {
								o.data = e[0].data
							}
						}
						if (I.mergeIndex) {
							o.rowspan = 2;
							c.push(o)
						} else {
							b.push([ o, {
								label : "&nbsp;",
								className : "",
								colspan : a.length
							} ])
						}
						c.push({
							id : m.id,
							label : r[0]
						});
						G.push({
							id : m.id,
							label : g[0]
						});
						E && n.push({
							id : m.id,
							label : l[0]
						});
						for ( var A = 0; A < a.length; A++) {
							var s = a[A];
							var y = this._formatTableText(r[A + 1], s.type);
							var C = this._formatTableText(g[A + 1], s.type);
							var d = T.array.indexOf(t, A + 1);
							if (d > -1) {
								y = y
										+ "("
										+ this._formatTableText(r[A + 2],
												"ratio") + ")";
								C = C
										+ "("
										+ this._formatTableText(g[A + 2],
												"ratio") + ")";
								if (E) {
									n.push({
										id : s.id,
										label : this._formatTableText(l[A + 2],
												"ratio"),
										className : s.type
									});
									l.splice(A + 1, 1)
								}
								r.splice(A + 1, 1);
								g.splice(A + 1, 1)
							} else {
								E
										&& n.push({
											id : s.id,
											label : this._formatTableText(
													l[A + 1], "ratio"),
											className : s.type
										})
							}
							c.push({
								id : s.id,
								label : y,
								className : s.type
							});
							G.push({
								id : s.id,
								label : C,
								className : s.type
							})
						}
						b.push(c);
						b.push(G);
						E && b.push(n)
					}
				}
				if (I.pageSum && I.pageSum.length > 0) {
					var r = I.pageSum[0];
					var g = H ? I.pageSum[1] : null;
					var l = E ? I.pageSum[2] : null;
					if (!H) {
						var k = [];
						if (m) {
							k.push({
								id : m.id,
								label : "å½“é¡µæ±‡æ€»"
							})
						}
						if (a[0]) {
							for ( var B = 0; B < I.fields.length; B++) {
								if (I.fields[B] == a[0].id) {
									for ( var A = (m ? 1 : 0); A < B; A++) {
										k.push({
											id : I.fields[B],
											label : ""
										})
									}
									break
								}
							}
						}
						for ( var A = 0; A < a.length; A++) {
							var s = a[A];
							var p = this._formatTableText(r[A], s.type);
							var d = T.array.indexOf(t, A);
							if (d > -1) {
								p = p
										+ "("
										+ this._formatTableText(r[A + 1],
												"ratio") + ")";
								r.splice(A, 1)
							}
							k.push({
								id : s.id,
								label : p,
								className : s.type
							})
						}
						w.push(k)
					} else {
						var c = [];
						var G = [];
						var n = [];
						if (m) {
							w.push([ {
								id : m.id,
								label : "å½“é¡µæ±‡æ€»",
								colspan : a.length + 1
							} ])
						}
						c.push({
							id : m.id,
							label : r[0]
						});
						G.push({
							id : m.id,
							label : g[0]
						});
						E && n.push({
							id : m.id,
							label : l[0]
						});
						for ( var A = 0; A < a.length; A++) {
							var s = a[A];
							var y = this._formatTableText(r[A + 1], s.type);
							var C = this._formatTableText(g[A + 1], s.type);
							var d = T.array.indexOf(t, A);
							if (d > -1) {
								y = y
										+ "("
										+ this._formatTableText(r[A + 2],
												"ratio") + ")";
								C = C
										+ "("
										+ this._formatTableText(g[A + 2],
												"ratio") + ")";
								if (E) {
									n.push({
										id : s.id,
										label : this._formatTableText(l[A + 2],
												"ratio"),
										className : s.type
									});
									l.splice(A + 1, 1)
								}
								r.splice(A + 1, 1);
								g.splice(A + 1, 1)
							} else {
								E
										&& n.push({
											id : s.id,
											label : this._formatTableText(
													l[A + 1], "ratio"),
											className : s.type
										})
							}
							c.push({
								id : s.id,
								label : y,
								className : s.type
							});
							G.push({
								id : s.id,
								label : C,
								className : s.type
							})
						}
						w.push(c);
						H && w.push(G);
						E && w.push(n)
					}
				}
				if (I.sum && I.sum.length > 0) {
					for ( var A = 0; A < a.length; A++) {
						var s = a[A];
						var d = T.array.indexOf(t, H ? A + 1 : A);
						if (d > -1) {
							I.sum[0][A] = this._formatTableText(I.sum[0][A],
									s.type)
									+ "("
									+ this._formatTableText(I.sum[0][A + 1],
											"ratio") + ")";
							I.sum[0].splice(A + 1, 1);
							if (H) {
								I.sum[1][A] = this._formatTableText(
										I.sum[1][A], s.type)
										+ "("
										+ this._formatTableText(
												I.sum[1][A + 1], "ratio") + ")";
								I.sum[1].splice(A + 1, 1)
							}
						} else {
							I.sum[0][A] = this._formatTableText(I.sum[0][A],
									s.type);
							if (H) {
								I.sum[1][A] = this._formatTableText(
										I.sum[1][A], s.type)
							}
						}
					}
				}
				I.thead = D;
				I.tbody = b;
				I.tfoot = w;
				I.group = q;
				I.isCompare = H;
				I.indicators = a;
				return I
			},
			ConvertSimpleTableData : function(t) {
				var k = T.config.indexInfo.indexes;
				var d = T.array.map(k, function(i) {
					return i.id
				});
				var f = null;
				T.each(t.fields, function(j) {
					var i = T.array.indexOf(d, j);
					if (i > -1) {
						f = k[i]
					}
				});
				var s = T.config.indexInfo.indicators;
				var o = T.array.map(s, function(i) {
					return i.id
				});
				var a = [];
				T.each(t.fields, function(j) {
					var i = T.array.indexOf(o, j);
					if (i > -1) {
						a.push(s[i])
					}
				});
				var r = [];
				var b = [];
				var m = [];
				var g = 1;
				var c = {
					id : f.id,
					label : f.label,
					sortable : f.sortable,
					tip : f.tip,
					className : "table-index"
				};
				r.push(c);
				for ( var q = 0; q < a.length; q++) {
					var h = a[q];
					r.push({
						id : h.id,
						label : h.label,
						sortable : h.sortable,
						tip : h.tip,
						className : h.type
					})
				}
				for ( var q in t.items) {
					var l = t.items[q];
					var e = [];
					var n = 0;
					if (f) {
						e.push({
							id : f.id,
							label : l[0],
							className : "table-index"
						});
						n = 1
					}
					for ( var p = 0; p < a.length; p++) {
						var h = a[p];
						e.push({
							id : h.id,
							label : this._formatTableText(l[p + n], h.type),
							className : h.type
						})
					}
					b.push(e)
				}
				t.thead = r;
				t.tbody = b;
				t.tfoot = m;
				t.group = g;
				t.isCompare = false;
				t.indicators = a;
				return t
			},
			ConvertSubTableData : function(b) {
				var m = T.config.subTableIndicators;
				var g = T.array.map(m, function(i) {
					return i.id
				});
				var h = [];
				T.each(b.fields, function(j) {
					var i = T.array.indexOf(g, j);
					if (i > -1) {
						h.push(m[i])
					}
				});
				var f = [];
				var d = [];
				for ( var c = 0; c < h.length; c++) {
					var k = h[c];
					f.push({
						id : k.id,
						label : k.label,
						sortable : k.sortable,
						className : k.type
					})
				}
				for ( var c in b.items) {
					var e = b.items[c];
					var l = [];
					for ( var a = 0; a < h.length; a++) {
						var k = h[a];
						l.push({
							id : k.id,
							label : this._formatTableText(e[a], k.type),
							className : k.type
						})
					}
					d.push(l)
				}
				b.thead = f;
				b.tbody = d;
				b.indicators = h;
				return b
			},
			_formatTableText : function(b, a) {
				if (b == null) {
					return ""
				}
				if (b == "--") {
					return b
				}
				if (T.lang.isString(a)) {
					switch (a) {
					case "number":
						return T.i18n.number.formatNumber(b);
					case "ratio":
						return T.i18n.number.formatRatio(b);
					case "time":
						return T.i18n.number.formatTime(b);
					case "time2":
						return T.i18n.number.formatTime(b, 2)
					}
				}
				return b
			},
			ConvertFlowData : function(f) {
				var g = {};
				for ( var d in f) {
					var a = f[d].items;
					var b = a[0], e = a[1];
					var c = [];
					T.array.each(b, function(j, h) {
						c.push(j.concat(e[h]))
					});
					g[d] = c
				}
				return g
			},
			convertFlashDataFormat : function(a) {
				if (a.by == null) {
					a.by = "day"
				}
				var c, b = a.type;
				switch (b) {
				case "line":
					c = this.convertFlashLineDataFormat(a);
					break;
				case "linepie":
					c = this.convertFlashLinePieDataFormat(a);
					break;
				case "area":
					c = this.convertFlashAreaDataFormat(a);
					break;
				case "pie":
					c = this.convertFlashPieDataFormat(a);
					break;
				case "areapie":
					c = this.convertFlashAreaPieDataFormat(a);
					break;
				case "circle":
					c = this.convertFlashCircleDataFormat(a);
					break;
				case "circlegraph":
					c = this.convertFlashCircleGraphDataFormat(a);
					break;
				case "bar":
					c = this.convertFlashBarDataFormat(a);
					break;
				default:
					break
				}
				return c
			},
			convertFlashPieDataFormat : function(n) {
				var j = n.flashId, f = n.fields, h = n.items;
				var a = [ "label", "value", "ratio" ], m = [], b = [];
				var d = h[0], k = h[1];
				if ((d == null || d.length == 0)
						|| (k == null || k.length == 0)) {
					this._showErrorTip(j);
					return
				}
				for ( var e = 1, c = f.length; e < c; e++) {
					if (/^ratio/i.test(f[e])) {
						b.push(e - 1)
					}
				}
				for ( var e in b) {
					var g = b[e];
					T.array.each(k, function(i) {
						i[g] = i[g] + "%"
					})
				}
				T.array.each(d, function(o, l) {
					m.push(o.concat(k[l]))
				});
				return {
					flashId : j,
					type : n.type,
					units : this._getUnits([ n.indicator ]),
					indicator : this._getIndicatorLabel(n.indicator),
					fields : a,
					items : m
				}
			},
			convertFlashLinePieDataFormat : function(c) {
				var s = c.flashId, h = c.line, f = h.fields, t = h.items, k = c.pie, a = k.fields, e = k.items, g = [];
				var n = [ "label" ], d = [];
				var m = t[0], r = t[1];
				if ((m == null || m.length == 0)
						|| (r == null || r.length == 0)) {
					this._showErrorTip(s);
					return
				}
				for ( var p = 1, o = f.length; p < o; p++) {
					n.push(f[p])
				}
				T.array.each(m, function(u, l) {
					d.push(u.concat(r[l]))
				});
				this._addLineTip(c, n, d, "SmallTip", g);
				var b = [ "label", "value" ], q = [];
				var j = e[0], r = e[1];
				T.array.each(j, function(u, l) {
					q.push(u.concat(r[l]))
				});
				return {
					flashId : s,
					type : c.type,
					units : this._getUnits([ c.indicator ]),
					highlightIndexs : g,
					indicator : this._getIndicatorLabel(c.indicator),
					bar : c.bar,
					line : {
						fields : n,
						items : d
					},
					pie : {
						fields : b,
						items : q
					}
				}
			},
			convertFlashCircleGraphDataFormat : function(d) {
				var e = d.flashId, a = d.fields, b = d.items;
				var f = [ "label", "dataB", "dataL", "dataR" ], h = [];
				var c = b[0], g = b[1];
				if ((c == null || c.length == 0)
						|| (g == null || g.length == 0)) {
					this._showErrorTip(e);
					return
				}
				T.array.each(c, function(k, j) {
					h.push(k.concat(g[j]))
				});
				return {
					flashId : e,
					fields : f,
					items : h,
					type : d.type
				}
			},
			convertFlashBarDataFormat : function(a) {
				var b = a.flashId, e = [];
				var f = this._convertFlashDataFormat(a);
				var c = f.flashFields, d = f.flashItems;
				return {
					flashId : b,
					fields : c,
					units : this._getUnits(a.fields),
					items : d,
					type : a.type,
					highlightIndexs : e,
					indicator : this._getIndicatorLabel(a.indicator)
				}
			},
			convertFlashCircleDataFormat : function(n) {
				var j = n.flashId, f = n.fields, h = n.items;
				var a = [ "label", "value", "ratio" ], m = [], b = [];
				var d = h[0], k = h[1];
				if ((d == null || d.length == 0)
						|| (k == null || k.length == 0)) {
					this._showErrorTip(j);
					return
				}
				for ( var e = 1, c = f.length; e < c; e++) {
					if (/^ratio/i.test(f[e])) {
						b.push(e - 1)
					}
				}
				for ( var e in b) {
					var g = b[e];
					T.array.each(k, function(i) {
						i[g] = i[g] + "%"
					})
				}
				T.array.each(d, function(o, l) {
					m.push(o.concat(k[l]))
				});
				return {
					flashId : j,
					fields : a,
					units : this._getUnits(f),
					items : m,
					type : n.type,
					indicator : this._getIndicatorLabel(n.indicator)
				}
			},
			convertFlashAreaPieDataFormat : function(a) {
				return this.convertFlashAreaDataFormat(a)
			},
			convertFlashWorldMapDataFormat : function(a) {
				return this.convertFlashAreaDataFormat(a)
			},
			convertFlashAreaDataFormat : function(s) {
				var p = s.flashId, h = s.fields, n = s.items;
				var a = [ "label", "value", "ratio", "color" ], q = [];
				var c = n[0], r = n[1], o = n[2];
				if ((c == null || c.length == 0)
						|| (r == null || r.length == 0)) {
					this._showErrorTip(p);
					return
				}
				T.array.each(c, function(t, l) {
					q.push(t.concat(r[l]))
				});
				var e = 0, j = 1;
				for ( var f = 0, b = q.length; f < b; f++) {
					var r = q[f], m = r[r.length - 1];
					e = Math.max(e, m);
					j = Math.min(j, m)
				}
				var k = (e - j) / 5, g = [ e, e - k, e - k * 2, e - k * 3,
						e - k * 4, j ];
				for ( var f = 0, b = q.length; f < b; f++) {
					var r = q[f], m = r[r.length - 1], d;
					r[r.length - 1] = r[r.length - 1] + "%";
					if (m <= g[0] && m > g[1]) {
						d = "0x1556a1"
					} else {
						if (m <= g[1] && m > g[2]) {
							d = "0x136bd4"
						} else {
							if (m <= g[2] && m > g[3]) {
								d = "0x6c98d5"
							} else {
								if (m <= g[3] && m > g[4]) {
									d = "0x9fccff"
								} else {
									d = "0xdcecff"
								}
							}
						}
					}
					r.push(d)
				}
				return {
					flashId : p,
					fields : a,
					units : this._getUnits(h),
					items : q,
					type : s.type,
					indicator : this._getIndicatorLabel(s.indicator)
				}
			},
			convertFlashLineDataFormat : function(a) {
				var b = a.flashId, g = a.timeSpan, e = [], h = a.tipLabel
						|| "BigTip";
				var f = this._convertFlashDataFormat(a);
				var c = f.flashFields, d = f.flashItems;
				this._addLineTip(a, c, d, h, e);
				return {
					flashId : b,
					fields : c,
					units : this._getUnits(a.fields,
							a.items[2] ? a.items[2].length : 0),
					items : d,
					type : a.type,
					highlightIndexs : e,
					indicator : this._getIndicatorLabel(a.indicator)
				}
			},
			_addLineTip : function(a, b, d, e, c) {
				if (a.by == "hour") {
					b.push(b[0] + e);
					T.array.each(d, function(f) {
						var g = T.config.lineChartDayTimeMap[f[0]];
						if (g) {
							f.push(g)
						} else {
							f.push(f[0])
						}
					});
					T.array.each(d, function(g, f) {
						if (f == d.length - 1) {
							g[0] = f + "/ç‚¹"
						} else {
							g[0] = f
						}
					})
				} else {
					if (a.by == "day") {
						b.push(b[0] + e);
						T.array
								.each(
										d,
										function(g, f) {
											T.array
													.each(
															g,
															function(p, k) {
																if (k > 0) {
																	return
																}
																var n = false, m;
																for ( var i in T.config.holidays) {
																	m = T.config.holidays[i];
																	if (m
																			.test(p)) {
																		this
																				.push(p
																						+ " ("
																						+ i
																						+ ")");
																		c
																				.push(f);
																		n = true;
																		break
																	}
																}
																if (!n) {
																	var m = new RegExp(
																			"^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+\x24");
																	if (m
																			.test(p)) {
																		var l = new Date(
																				p), h = l
																				.getDay(), o;
																		switch (h) {
																		case 0:
																			o = p
																					+ " (æ˜ŸæœŸæ—¥) ";
																			break;
																		case 6:
																			o = p
																					+ " (æ˜ŸæœŸå…­) ";
																			break;
																		default:
																			o = p;
																			break
																		}
																		this
																				.push(o);
																		if (h == 0
																				|| h == 6) {
																			c
																					.push(f);
																			n = true
																		}
																	}
																}
															})
										})
					}
				}
			},
			_filterFlashData : function(d) {
				var a = d.fields, c = d.items;
				var f = c[1], g = c[2];
				var b = new T.Indicator({
					indicators : T.config.indexInfo.flashIndicators
				});
				var e = b.map(a);
				T.array.each(e, function(j, h) {
					if (j) {
						T.array.each(f, function(k, i) {
							k[h - 1] = j.format(k[h - 1])
						});
						T.array.each(g, function(k, i) {
							k[h - 1] = j.format(k[h - 1])
						})
					}
				})
			},
			_convertFlashDataFormat : function(c) {
				var t = c.flashId, r = c.timeSpan, k = c.fields, j = c.items, g = c.tipLabel
						|| "BigTip";
				var m = j[0], s = j[1], a = j[2];
				var d = [], p = [], n = [];
				if ((m == null || m.length == 0)
						|| (s == null || s.length == 0)) {
					this._showErrorTip(t, c);
					return {
						flashFields : [],
						flashItems : []
					}
				}
				d.push("label");
				var e = new T.Indicator({
					indicators : T.config.indexInfo.flashIndicators
				});
				var h = e.map(k);
				if (!a || a.length == 0) {
					for ( var q = 1, o = h.length; q < o; q++) {
						if (h[q]) {
							d.push(h[q].label)
						} else {
							if (/^ratio/i.test(k[q])) {
								d.push(d[d.length - 1] + g);
								n.push(q - 1)
							} else {
								d.push(k[q])
							}
						}
					}
					T.array.each(s, function(i) {
						T.array.each(i,
								function(v, l) {
									if (T.array.contains(n, l)) {
										if (h[l]) {
											i[l] = h[l].format(i[l - 1])
													+ " | å æ¯”: "
													+ T.i18n.number
															.formatRatio(i[l])
										} else {
											i[l] = T.i18n.number
													.formatNumber(i[l - 1])
													+ " | å æ¯”: "
													+ T.i18n.number
															.formatRatio(i[l])
										}
									} else {
										var u = h[l + 1];
										if (u
												&& !T.array.contains(k,
														"ratio_" + u.id)) {
											if (!T.array.contains(d, d[l + 1]
													+ g)) {
												d.push(d[l + 1] + g)
											}
											i.push(u.format(i[l]))
										}
									}
								})
					});
					T.array.each(m, function(u, l) {
						p.push(u.concat(s[l]))
					})
				} else {
					T.array.each(k, function(u, l) {
						if (/^ratio/i.test(u)) {
							n.push(l - 1)
						}
					});
					T.array.each(r, function(i) {
						d.push(i);
						d.push(i + g)
					});
					T.array.each(s, function(i) {
						T.array.each(i,
								function(v, l) {
									if (l == 0) {
										return
									}
									if (T.array.contains(n, l)) {
										if (h[l]) {
											i[l] = h[l].format(i[l - 1])
													+ " | å æ¯”: "
													+ T.i18n.number
															.formatRatio(i[l])
										} else {
											i[l] = T.i18n.number
													.formatNumber(i[l - 1])
													+ " | å æ¯”: "
													+ T.i18n.number
															.formatRatio(i[l])
										}
									} else {
										var u = h[l + 1];
										if (u
												&& !T.array.contains(k,
														"ratio_" + u.id)) {
											i.push(u.format(i[l]))
										}
									}
								})
					});
					T.array.each(a, function(i) {
						T.array.each(i,
								function(v, l) {
									if (l == 0) {
										return
									}
									if (T.array.contains(n, l)) {
										if (h[l]) {
											i[l] = h[l].format(i[l - 1])
													+ " | å æ¯”: "
													+ T.i18n.number
															.formatRatio(i[l])
										} else {
											i[l] = T.i18n.number
													.formatNumber(i[l - 1])
													+ " | å æ¯”: "
													+ T.i18n.number
															.formatRatio(i[l])
										}
									} else {
										var u = h[l + 1];
										if (u
												&& !T.array.contains(k,
														"ratio_" + u.id)) {
											i.push(u.format(i[l]))
										}
									}
								})
					});
					if (c.by == "hour") {
						var b = T.array.map(T.object.clone(s), function(i) {
							T.array.removeAt(i, 0);
							return i
						});
						var f = T.array.map(T.object.clone(a), function(i) {
							T.array.removeAt(i, 0);
							return i
						});
						T.array.each(m, function(u, l) {
							p.push(u.concat(b[l], f[l]))
						})
					} else {
						var f = T.array.map(T.object.clone(a), function(i) {
							T.array.removeAt(i, 0);
							return i
						});
						T.array.each(s, function(u, l) {
							p.push(s[l].concat(f[l]))
						})
					}
				}
				T.each(d, function(l, i) {
					d[i] = this._encodeHTML(l)
				}, this);
				return {
					flashFields : d,
					flashItems : p
				}
			},
			_showErrorTip : function(b, a) {
				var c = T.swf.getMovie(b);
				c.showErrorTip("æš‚æ— æ•°æ®");
				this.options.onflashError(b, a)
			},
			_getIndicatorLabel : function(b) {
				if (!b) {
					return
				}
				var a = b.split(","), c = [];
				T.array.each(a, function(e) {
					var d = T.array.find(T.config.indexInfo.flashIndicators,
							function(f, g) {
								return e == f.id
							});
					if (d) {
						c.push(d.label)
					}
				});
				return c.join()
			},
			_getUnits : function(a, d) {
				var c = T.array.map(a, function(e) {
					return T.array.find(T.config.indexInfo.flashIndicators,
							function(f) {
								return e == f.id
							})
				});
				var b = [];
				T.array.each(c, function(e) {
					if (e) {
						var f = e.unit;
						if (!T.array.contains(b, f)) {
							b.push(f)
						}
					}
				});
				if (d && d != 0) {
					b = b.concat(b)
				}
				return b
			},
			_encodeHTML : function(a) {
				return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;")
						.replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(
								/'/g, "&#39;")
			}
		});
T.DateCompare = T
		.createClass({
			options : {
				containerId : "FlashTimeCompare",
				onchange : function() {
				},
				isComparable : 0,
				checkedId : null,
				date : null
			},
			_checkedId : null,
			params : {},
			_init : function() {
				this._checkedId = this.options.checkedId;
				var j = T.g(this._checkedId);
				if (j) {
					j.checked = true
				}
				var a = T.g(this.options.containerId);
				if (a) {
					var f = a.getElementsByTagName("input");
					T.event.ons(f, "click", this._onchange())
				}
				var k = T.g("DateSelectBar");
				if (k) {
					var h = k.getElementsByTagName("a");
					for ( var d = 0, b = h.length; d < b; d++) {
						var c = h[d];
						if (c.className.indexOf("cur") != -1) {
							var g = c.href.indexOf("#");
							if (g != -1) {
								var e = parseInt(c.href.substring(g + 1,
										c.href.length));
								if (e == 0 || e == -1) {
									this.params.st = this.params.et = parseInt(T.config.systemConfig.now)
											+ e * 3600 * 24 * 1000;
									this.show(this.params.st)
								} else {
									this.hide()
								}
								break
							}
						}
						if (T.config.pageInfo && T.config.pageInfo.st
								&& T.config.pageInfo.st != T.config.pageInfo.et) {
							this.hide()
						}
					}
				}
			},
			_onchange : function() {
				var a = this;
				return function() {
					var d = this.id, b = a._checkedId;
					if (!b) {
						a._checkedId = d
					} else {
						var c = T.g(b);
						if (b != d) {
							c.checked = false;
							a._checkedId = d
						} else {
							a._checkedId = null
						}
					}
					a._handleParams();
					a.options.onchange(a.params, a.options.isComparable)
				}
			},
			checkComparation : function(a) {
				var c = T.g(this.options.containerId);
				if (c) {
					switch (a) {
					case 0:
						this._checkedId = "LastDay";
						break;
					case 1:
						this._checkedId = "LastWeek";
						break;
					case 2:
						this._checkedId = "LastMonth";
						break;
					default:
						this._checkedId = null
					}
					var b = c.getElementsByTagName("input");
					for ( var d = 0, e = b.length; d < e; d++) {
						b[d].checked = (d == a)
					}
				}
			},
			hide : function() {
				var a = T.g(this.options.containerId);
				if (a) {
					a.style.display = "none";
					this.params.st2 = null;
					this.params.et2 = null;
					this.options.isComparable = 0
				}
			},
			show : function(c, b) {
				var a = T.g(this.options.containerId);
				if (a) {
					var f = T.date.format(new Date(c), "yyyy-MM-dd");
					c = T.date.parse(f);
					this.options.date = c.getTime();
					if (!b) {
						this._handleParams()
					} else {
						var e = baidu.G("DateSelectBar").getElementsByTagName(
								"A");
						if (this.params.st2 + 1000 * 3600 * 24 == this.params.st) {
							this.checkComparation(0)
						} else {
							if (this.params.st2 + 1000 * 3600 * 24 * 7 == this.params.st) {
								this.checkComparation(1)
							} else {
								if (this.params.st2 + 1000 * 3600 * 24 * 30 == this.params.st) {
									this.checkComparation(2)
								} else {
									this.checkComparation()
								}
							}
						}
					}
					a.style.display = "block"
				}
			},
			_handleParams : function() {
				var a = this.options.date;
				var d = T.g("LastDay");
				var c = T.g("LastWeek");
				var b = T.g("LastMonth");
				if (d && d.checked) {
					this.params.et2 = this.params.st2 = a - 3600 * 24 * 1000;
					this.options.isComparable = 1
				} else {
					if (c && c.checked) {
						this.params.et2 = this.params.st2 = a - 7 * 3600 * 24
								* 1000;
						this.options.isComparable = 1
					} else {
						if (b && b.checked) {
							this.params.et2 = this.params.st2 = a - 30 * 3600
									* 24 * 1000;
							this.options.isComparable = 1
						} else {
							this.options.isComparable = 0;
							this.params.st2 = null;
							this.params.et2 = null
						}
					}
				}
			},
			setDate : function(a) {
				var b = T.date.format;
				this.params.st = new Date(b(new Date(a.st), "yyyy/MM/dd"))
						.getTime();
				this.params.et = new Date(b(new Date(a.et), "yyyy/MM/dd"))
						.getTime();
				if (a.st2) {
					this.params.st2 = new Date(b(new Date(a.st2), "yyyy/MM/dd"))
							.getTime()
				} else {
					this.params.st2 = null
				}
				if (a.et2) {
					this.params.et2 = new Date(b(new Date(a.et2), "yyyy/MM/dd"))
							.getTime()
				} else {
					this.params.et2 = null
				}
			},
			checked : function() {
				return T.g("LastDay").checked || T.g("LastWeek").checked
						|| T.g("LastMonth").checked
			}
		});
function DateController(a) {
	this.prefix = a.prefix || "";
	this.dateSelectBar = a.container || this.prefix + "ControlBar";
	this.singleSelection = a.singleSelection || false;
	this.alwaysCompare = a.alwaysCompare || false;
	this.calendarCount = a.calendarCount || 3;
	var b = getUniqueId();
	this.calendarContainerId = "calendarContainer" + b;
	this.maskIframeId = "Iframe" + b;
	this.calendarContainerClass = a.calendarContainerClass || "calendar-box";
	this.toolTipClass = a.toolTipClass || "date-select-tip";
	this.btnBarClass = a.toolTipClass || "button-bar";
	this.onchange = a.onchange || {};
	this.compareChange = a.compareChange || {};
	this.startDate = a.startDate || new Date(1970, 1, 1);
	this.endDate = a.endDate || new Date();
	this.otherStartDate = a.otherStartDate || null;
	this.otherEndDate = a.otherEndDate || null;
	this.todayDate = a.todayDate || new Date();
	this.firstDate = a.firstDate || new Date(1970, 1, 1);
	this.dateCompare = false;
	this.msg = "";
	this.dateSelector = null;
	this.diff;
	this.selected = {};
	this.init()
}
DateController.prototype = {
	tpl : '<iframe src="about:blank" frameborder="0" scrolling="no" id="#{maskIframeId}"></iframe><div></div><div class="#{toolTipClass}"></div><div class="#{btnBarClass}"><input type="hidden"><a class="button" href="javascript:void(0)">ç¡®å®š</a><a href="javascript:void(0)">å–æ¶ˆ</a></div>',
	init : function() {
		var a = baidu.G(this.prefix + "DateSelectBar")
				.getElementsByTagName("A");
		T.event.ons(a, "click", this.selectHandle());
		this.createCalendarContainer();
		this.createCalendar();
		this.initInputDate();
		this.initShortcutDate();
		this.bindHandle();
		this.showDateTip();
		this.hideDateBoxFn = this.hideDateBoxHandle()
	},
	bindHandle : function() {
		var a = T.g(this.dateSelectBar);
		var f = T.g(this.calendarContainerId);
		T.on(this.prefix + "DateSelect", "click", this.showDateBox(0));
		T.g(this.prefix + "CompareDate")
				&& T.on(this.prefix + "CompareDate", "click", this
						.showDustDateInput());
		T.g(this.prefix + "CompareDateSelect")
				&& T.on(this.prefix + "CompareDateSelect", "click", this
						.showDateBox(2));
		baidu.on(f, "click", function(g) {
			T.event.stopPropagation(g)
		});
		var c = f.getElementsByTagName("INPUT");
		var b = T.dom.next(c[0]);
		var e = T.dom.next(b);
		T.on(b, "click", this.submitDateSelect());
		T.on(e, "click", this.hideDateBoxHandle());
		var d = this;
		if (T.g(this.prefix + "Scroll")) {
			T.on(this.prefix + "Scroll", "click", function(g) {
				T.dom.toggleClass(this, "open");
				T.dom.toggleClass(this, "close");
				if (!T.dom.hasClass(this, "open")) {
					T.removeClass(d.prefix + "ControlBar",
							"date-controll-bar-scroll");
					T.setStyle(d.prefix + "ControlBar", "width", "100%")
				}
			});
			T.on(window, "scroll", T.fn.bind(this.dateScrollHandler, this));
			T.on(window, "resize", T.fn.bind(this.dateScrollHandler, this))
		}
	},
	dateScrollHandler : function() {
		var b = T.dom.getPosition(this.prefix + "ControlBarWrapper");
		var a = T.g(this.prefix + "Scroll");
		if (a && !T.dom.hasClass(a, "open")) {
			return
		}
		var d = document.documentElement.scrollTop + document.body.scrollTop, e = document.documentElement.scrollLeft
				+ document.body.scrollLeft;
		var c = T.g(this.prefix + "ControlBar");
		if (d > b.top) {
			T.addClass(c, "date-controll-bar-scroll");
			T.setStyles(c, {
				top : d - b.top,
				width : T.q("main")[0].offsetWidth + "px"
			})
		} else {
			T.removeClass(c, "date-controll-bar-scroll");
			T.setStyle(c, "width", "100%")
		}
		T.hide(this.calendarContainerId)
	},
	showDustDateInput : function() {
		var a = this;
		return function(b) {
			T.event.stopPropagation(b);
			if (this.checked) {
				a.showInput();
				a.showDateBox(2).call(this, b)
			} else {
				a.hideInput();
				a.otherStartDate = null;
				a.otherEndDate = null;
				a.msg = "";
				a.initInputDate();
				a.onchange(this.id)
			}
		}
	},
	submitDateSelect : function() {
		var a = this;
		return function() {
			var c = a.selected.from;
			var b = a.selected.to;
			if (a.dateCompare) {
				a.otherStartDate = c;
				a.otherEndDate = b
			} else {
				a.startDate = c;
				a.endDate = b
			}
			a.currentSubmit = true;
			a.showDateTip();
			a.initShortcutDate();
			a.hideDateBoxFn();
			a.onchange("submitDateSelect")
		}
	},
	hideDateBoxHandle : function() {
		var a = this;
		return function() {
			baidu.un(document, "click", a.hideDateBoxFn);
			baidu.hide(a.calendarContainerId);
			a.initInputDate()
		}
	},
	showDateBox : function(a) {
		var b = this;
		return function(l) {
			T.event.stop(l);
			b.msg = "";
			b.currentIndex = a;
			var s = baidu.date.format;
			var j = baidu.date.parse;
			var d = T.g(b.calendarContainerId);
			var t = baidu.dom.getPosition;
			b.dateCompare = (a == 2) ? true : false;
			b.diff = (a == 2) ? b.dateDiff(b.startDate, b.endDate) : 0;
			d.style.display = "block";
			b.dateSelector.clickState = "from";
			var q = (a == 2) ? b.otherStartDate : b.startDate;
			var r = (a == 2) ? b.otherEndDate : b.endDate;
			b.selected.from = q;
			b.selected.to = r;
			if (q) {
				q = new Date(s(q, "yyyy/MM/dd")).getTime();
				r = new Date(s(r, "yyyy/MM/dd")).getTime();
				b.dateSelector.setSelected({
					from : q,
					to : r
				})
			} else {
				b.dateSelector.setSelected({})
			}
			var m = T.g(b.prefix + "DateSelect");
			var c = T.g(b.prefix + "CompareDateSelect");
			if (b.dateCompare) {
				m = c;
				c = T.g(b.prefix + "DateSelect")
			}
			T.dom.addClass(m, "selected");
			T.dom.removeClass(m, "combobox-disabled");
			c && T.dom.removeClass(c, "selected");
			var i = (a == 2 && b.calendarCount == 3) ? -150 : 0;
			var g = 20;
			var o = t(m).left + i;
			var n = t(m).top + g;
			d.style.top = n + "px";
			d.style.left = o + "px";
			baidu.on(document, "click", b.hideDateBoxFn);
			if (baidu.ie == 6) {
				var f = T.g(b.maskIframeId);
				f.style.display = "block";
				var k = d.offsetHeight;
				var p = d.offsetWidth;
				f.style.height = (k - 5) + "px";
				f.style.width = p + "px"
			}
		}
	},
	initInputDate : function() {
		var c = baidu.G(this.dateSelectBar);
		var h = c.getElementsByTagName("INPUT");
		var a = T.g(this.prefix + "DateSelect");
		var k = baidu.date.format;
		var l = k(this.startDate, "yyyy/MM/dd");
		var j = k(this.endDate, "yyyy/MM/dd");
		var d = (l == j) ? j : l + " - " + j;
		T.dom.one(".text", a).innerHTML = d;
		T.dom.removeClass(a, "selected");
		if (this.otherStartDate && this.otherStartDate.constructor == Date) {
			var g = Math.abs(this.dateDiff(this.startDate, this.endDate));
			var f = Math.abs(this.dateDiff(this.otherStartDate,
					this.otherEndDate));
			if (f != g) {
				this.otherEndDate = new Date(this.otherStartDate.getTime() + g
						* 3600 * 24 * 1000)
			}
			this.showInput();
			var e = k(this.otherStartDate, "yyyy/MM/dd");
			var b = k(this.otherEndDate, "yyyy/MM/dd");
			var i = T.g(this.prefix + "CompareDateSelect");
			i
					&& (T.dom.one(".text", i).innerHTML = (e == b) ? b : e
							+ " - " + b);
			i && T.dom.removeClass(i, "selected")
		} else {
			this.hideInput()
		}
		this.showDateTip()
	},
	initShortcutDate : function() {
		var a = baidu.G(this.dateSelectBar);
		var o = a.getElementsByTagName("A");
		var d = o.length;
		var g = this.endDate;
		var b = this.startDate;
		var p = this.todayDate;
		var c = new Date(+T.config.systemConfig.now);
		this.removeClass();
		var m = this.dateDiff;
		var k = m(g, p);
		var e = m(b, g);
		var f = e;
		var f = Number.MAX_VALUE;
		if (k == -1 && e == 0) {
			f = -1
		}
		if (k == 0 && e != -1) {
			f = e
		}
		for ( var h = 0, d = o.length; h < d; h++) {
			var l = o[h].href.indexOf("#");
			if (l != -1) {
				var j = parseInt(o[h].href.substr(l + 1));
				if (j == f) {
					T.dom.addClass(o[h], "cur");
					break
				}
			}
		}
	},
	showInput : function() {
		var a = T.g(this.prefix + "CompareDateSelect");
		if (a && this.alwaysCompare) {
			if (this.currentIndex == 2 && this.currentSubmit) {
				T.g(this.prefix + "CompareDate")
						&& (T.g(this.prefix + "CompareDate").checked = true);
				a && (a.style.display = "");
				a && T.dom.addClass(a, "cur");
				a && T.dom.removeClass(a, "combobox-disabled")
			}
		} else {
			T.g(this.prefix + "CompareDate")
					&& (T.g(this.prefix + "CompareDate").checked = true);
			a && (a.style.display = "");
			a && T.dom.addClass(a, "cur");
			a && T.dom.removeClass(a, "combobox-disabled")
		}
		this.currentIndex = null;
		this.currentSubmit = null
	},
	hideInput : function() {
		var a = T.g(this.prefix + "CompareDateSelect");
		T.g(this.prefix + "CompareDate")
				&& (T.g(this.prefix + "CompareDate").checked = false);
		a && T.dom.removeClass(a, "cur");
		a && T.dom.addClass(a, "combobox-disabled");
		a && (T.dom.one(".text", a).innerHTML = "ä¸Žå…¶ä»–æ—¶é—´æ®µå¯¹æ¯”")
	},
	disableInput : function() {
		T.g(this.prefix + "CompareDate").checked = false;
		T.g(this.prefix + "CompareDate").style.display = "none";
		var a = T.g(this.prefix + "CompareDateSelect");
		T.dom.removeClass(a, "cur");
		T.dom.addClass(a, "combobox-disabled");
		a.style.display = "none"
	},
	enableInput : function() {
		T.g(this.prefix + "CompareDate").style.display = "inline";
		T.g(this.prefix + "CompareDateSelect").style.display = "inline"
	},
	createCalendar : function() {
		var c = baidu.G(this.calendarContainerId);
		var b = c.getElementsByTagName("DIV");
		var e = b[1];
		var h = this.todayDate;
		var d = this.firstDate;
		var f = this.todayDate.getTime();
		var a = 3600 * 24 * 1000;
		var i = baidu.date.format;
		var g = this;
		this.dateSelector = new DateSelector({
			calendarCount : this.calendarCount,
			singleSelection : this.singleSelection,
			autoFill : 0,
			onviewchange : function(k) {
				var j = new Date(f + a * 31);
				j.setDate(1);
				if (k.to - j > 0) {
					return false
				}
			},
			dateStyle : function(j) {
				if (g.dateCompare) {
					var k = g.diff ? Math.abs(Math.floor(g.diff)) + 1 : 1;
					if (this.clickState == "to"
							&& Math.abs(this.selected.from - j) < a * k) {
						return "background:#fbeaa7"
					}
				}
				if (j - h > 0 || j - d < 0) {
					return "color:#999;cursor:default;background:#fff"
				}
				if (i(j, "yyyy/MM/dd") == i(h, "yyyy/MM/dd")) {
					return "font-weight:bold; border:1px solid #a7aebc"
				}
			},
			sideButtonClass : function(j) {
				var k = h;
				if (j.type == "nextmonth"
						&& j.to >= new Date(k.getFullYear(), k.getMonth(), 1)) {
					return "ds-nextmonth-ed"
				}
			}
		});
		this.dateSelector.viewDate = new Date(f - a * 1);
		this.dateSelector.onselect = function(j) {
			var m = j.from;
			var l = j.to;
			if (h - l < 0) {
				e.style.display = "block";
				e.innerHTML = "æ‚¨æ‰€é€‰æ—¥æœŸå†…æš‚æ— æ•°æ®ï¼Œè¯·é‡æ–°é€‰æ‹©ã€‚";
				return false
			}
			if ((l - d) < 0 || (m - d) < 0) {
				return false
			}
			var k = (l - m) / a;
			if (k > 366) {
				e.style.display = "block";
				e.innerHTML = "éžå¸¸æŠ±æ­‰ï¼Œæ—¶é—´èŒƒå›´æŸ¥è¯¢ä¸èƒ½è¶…å‡º366å¤©!";
				myDateSelector.clickState = "from";
				return false
			}
			e.innerHTML = "";
			g.selected = j;
			g.onSelect()
		};
		T.dom.empty(b[0]);
		this.dateSelector.appendTo(b[0])
	},
	onSelect : function() {
		var d = baidu.date.format;
		var b = this.selected;
		var e = this.dateCompare ? T.g(this.prefix + "CompareDateSelect") : T
				.g(this.prefix + "DateSelect");
		var c = d(b.from, "yyyy/MM/dd");
		var a = d(b.to, "yyyy/MM/dd");
		T.dom.one(".text", e).innerHTML = (c == a) ? a : c + " - " + a;
		T.dom.addClass(e, "cur");
		T.dom.removeClass(e, "combobox-disabled");
		if (!T.g(this.prefix + "CompareDateSelect")) {
			T.dom.addClass(this.prefix + "DateSelect", "mt")
		}
	},
	createCalendarContainer : function() {
		var a = document.createElement("DIV");
		a.id = this.calendarContainerId;
		a.className = this.calendarContainerClass;
		a.innerHTML = baidu.format(this.tpl, {
			maskIframeId : this.maskIframeId,
			toolTipClass : this.toolTipClass,
			btnBarClass : this.btnBarClass
		});
		document.body.appendChild(a)
	},
	selectHandle : function() {
		var a = this;
		return function(g) {
			T.event.preventDefault(g);
			a.msg = "";
			var h = this.href.lastIndexOf("#") + 1;
			var d = parseInt(this.href.substring(h), 10);
			if (d != 0) {
				var b = (b == -1) ? -1 : d;
				a.startDate = new Date(a.recentDate(b));
				var f = (d == -1) ? d : 0;
				a.endDate = new Date(a.recentDate(f))
			} else {
				var c = a.todayDate;
				a.startDate = c;
				a.endDate = c
			}
			if (!a.alwaysCompare) {
				a.otherStartDate = null;
				a.otherEndDate = null;
				if (T.g(a.prefix + "CompareDateSelect")) {
					T.removeClass(a.prefix + "CompareDateSelect", "cur");
					T.addClass(a.prefix + "CompareDateSelect",
							"combobox-disabled")
				}
			}
			a.initInputDate();
			a.removeClass();
			T.dom.addClass(this, "cur");
			T.removeClass(a.prefix + "DateSelect", "cur");
			T.dom.removeClass(a.prefix + "DateSelect", "mt");
			a.showDateTip();
			a.onchange()
		}
	},
	removeClass : function() {
		var b = baidu.G(this.dateSelectBar).getElementsByTagName("A");
		for ( var a = 0, c = b.length; a < c; a++) {
			T.removeClass(b[a], "cur")
		}
	},
	dateDiff : function(b, a) {
		b.setHours(0);
		b.setMinutes(0);
		b.setSeconds(0);
		b.setMilliseconds(0);
		a.setHours(0);
		a.setMinutes(0);
		a.setSeconds(0);
		a.setMilliseconds(0);
		return parseInt((b - a) / 1000 / 60 / 60 / 24, 10)
	},
	recentDate : function(a) {
		return this.todayDate.getTime() + a * 3600 * 24 * 1000
	},
	showDateTip : function() {
		var e = baidu.G(this.prefix + "Date");
		var h = baidu.date.format;
		var f = baidu.dom.next;
		var c = this.otherStartDate && this.otherStartDate.constructor == Date ? true
				: false;
		var b = h(this.startDate, "yyyy/MM/dd");
		var g = h(this.endDate, "yyyy/MM/dd");
		var d = (b == g) ? b : (b + "~" + g);
		if (c) {
			var a = h(this.otherStartDate, "yyyy/MM/dd");
			var i = h(this.otherEndDate, "yyyy/MM/dd");
			var j = (a == i) ? a : (a + "~" + i);
			if (e) {
				e.innerHTML = "(" + d + "ä¸Ž" + j + ")"
			}
		} else {
			if (e) {
				e.innerHTML = "(" + d + ")"
			}
		}
		T.dom.one(".report-help")
				&& (T.dom.setStyle(T.dom.one(".tip-arrow"), "left", (T.dom
						.one(".report-help").offsetLeft + 2)
						+ "px"))
	},
	setDate : function(a, b) {
		this.startDate = a;
		this.endDate = b;
		this.initInputDate();
		this.onchange("submitDateSelect");
		this.initShortcutDate()
	},
	setCompareDate : function(a, b) {
		this.showInput();
		this.otherStartDate = new Date(a);
		this.otherEndDate = new Date(b);
		this.initInputDate()
	},
	hideCompareDate : function() {
		this.hideInput();
		this.otherStartDate = null;
		this.otherEndDate = null
	},
	disableCompareDate : function() {
		this.disableInput();
		this.otherStartDate = null;
		this.otherEndDate = null
	},
	enableCompareDate : function() {
		this.enableInput()
	}
};
T.ui.DatePicker = T
		.createUI({
			_type : "datepicker",
			options : {
				containerId : null,
				defaultText : "è‡ªå®šä¹‰æ—¶é—´æ®µ",
				singleSelection : false,
				calendarCount : 3,
				toolTipClass : "date-select-tip",
				btnBarClass : "button-bar",
				calendarContainerClass : "calendar-box",
				onchange : T.fn.blank,
				onshow : T.fn.blank,
				startDate : null,
				endDate : null,
				todayDate : new Date(),
				firstDate : new Date(1970, 1, 1),
				lastDate : new Date()
			},
			calendarContainerId : "calendarContainer",
			tpl : '<iframe src="about:blank" frameborder="0" scrolling="no" id="#{maskIframeId}"></iframe><div></div><div class="#{toolTipClass}"></div><div class="#{btnBarClass}"><input type="hidden"><a class="button" href="javascript:void(0)">ç¡®å®š</a><a href="javascript:void(0)">å–æ¶ˆ</a></div>',
			_init : function() {
				var a = this;
				this.selected = {};
				this.hideDateBoxFn = this.hideDateBoxHandle();
				this.eventHandle = this.showDateBox();
				this.submitDateSFn = this.submitDateSelect();
				this.initInputDate();
				T.event.on(this.options.containerId, "click", this.eventHandle)
			},
			setDate : function(a, b) {
				this.options.startDate = a;
				this.options.endDate = b;
				this.initInputDate();
				this.options.onchange("submitDateSelect")
			},
			set : function(a, b) {
				if (!a) {
					return
				}
				if (typeof a == "string") {
					this.options[a] = b
				} else {
					if (typeof a == "object") {
						T.extend(this.options, a)
					}
				}
			},
			_create : function() {
				T.event.fire(document.body, "click");
				this._createCalendar();
				var d = T.g(this.calendarContainerId);
				var b = d.getElementsByTagName("INPUT");
				var a = T.dom.next(b[0]);
				var c = T.dom.next(a);
				T.on(a, "click", this.submitDateSFn);
				T.on(c, "click", this.hideDateBoxFn);
				T.on(document, "click", this.hideDateBoxFn)
			},
			_destroy : function() {
				T.un(document, "click", this.hideDateBoxFn);
				var d = T.g(this.calendarContainerId);
				if (d) {
					var b = d.getElementsByTagName("INPUT");
					var a = T.dom.next(b[0]);
					var c = T.dom.next(a);
					T.on(a, "click", this.submitDateSFn);
					T.on(c, "click", this.hideDateBoxFn)
				}
				T.hide(this.calendarContainerId)
			},
			_createCalendarContainer : function() {
				var b = this, a = b.options;
				var c = document.createElement("DIV");
				c.id = this.calendarContainerId;
				c.className = a.calendarContainerClass;
				c.innerHTML = baidu.format(this.tpl, {
					maskIframeId : "mask-iframe",
					toolTipClass : a.toolTipClass,
					btnBarClass : a.btnBarClass
				});
				document.body.appendChild(c);
				T.event.on(c, "click", function(d) {
					T.event.stopPropagation(d)
				});
				return c
			},
			_createCalendar : function() {
				var d = T.g(this.calendarContainerId)
						|| this._createCalendarContainer();
				var c = d.getElementsByTagName("DIV"), f = T.dom.query("div."
						+ this.options.toolTipClass, d)[0];
				f.innerHTML = "";
				var h = this, b = this.options;
				var i = b.todayDate;
				var e = b.firstDate;
				var k = b.lastDate;
				var g = b.todayDate.getTime();
				var a = 3600 * 24 * 1000;
				var j = baidu.date.format;
				this.dateSelector = new DateSelector({
					calendarCount : b.calendarCount,
					singleSelection : b.singleSelection,
					autoFill : 0,
					onviewchange : function(m) {
						var l = new Date(g + a * 31);
						l.setDate(1);
						if (m.to - l > 0) {
							return false
						}
					},
					dateStyle : function(l) {
						if ((k && (l - k > 0)) || l - e < 0) {
							return "color:#999;cursor:default;background:#fff"
						}
						if (j(l, "yyyy/MM/dd") == j(i, "yyyy/MM/dd")) {
							return "font-weight:bold; border:1px solid #a7aebc"
						}
					},
					sideButtonClass : function(l) {
						var m = k;
						if (l.type == "nextmonth"
								&& l.to >= new Date(m.getFullYear(), m
										.getMonth(), 1)) {
							return "ds-nextmonth-ed"
						}
					}
				});
				this.dateSelector.viewDate = new Date(g - a * 1);
				this.dateSelector.onselect = function(l) {
					var o = l.from;
					var n = l.to;
					if (k && (k - n < 0)) {
						f.style.display = "block";
						f.innerHTML = "è¶…å‡ºæ—¶é—´èŒƒå›´ï¼Œè¯·é‡æ–°é€‰æ‹©ã€‚";
						return false
					}
					if ((n - e) < 0 || (o - e) < 0) {
						return false
					}
					var m = (n - o) / a;
					if (m > 366) {
						f.style.display = "block";
						f.innerHTML = "éžå¸¸æŠ±æ­‰ï¼Œæ—¶é—´èŒƒå›´æŸ¥è¯¢ä¸èƒ½è¶…å‡º366å¤©!";
						myDateSelector.clickState = "from";
						return false
					}
					f.innerHTML = "";
					h.selected = l;
					h.onSelect()
				};
				T.dom.empty(c[0]);
				this.dateSelector.appendTo(c[0])
			},
			showDateBox : function() {
				var b = this, a = b.options;
				return function(h) {
					T.event.stop(h);
					b._create();
					b.msg = "";
					var n = baidu.date.format;
					var g = baidu.date.parse;
					var c = T.g(b.calendarContainerId);
					var o = baidu.dom.getPosition;
					c.style.display = "block";
					b.dateSelector.clickState = "from";
					var l = a.startDate;
					var m = a.endDate;
					b.selected.from = l;
					b.selected.to = m;
					if (l) {
						l = new Date(n(l, "yyyy/MM/dd")).getTime();
						m = new Date(n(m, "yyyy/MM/dd")).getTime();
						b.dateSelector.setSelected({
							from : l,
							to : m
						})
					} else {
						b.dateSelector.setSelected({})
					}
					var i = this;
					T.dom.addClass(i, "selected");
					var f = 0;
					var d = 20;
					var k = o(i).left + f;
					var j = o(i).top + d;
					c.style.top = j + "px";
					c.style.left = k + "px";
					a.onshow.call(b, b.dateSelector)
				}
			},
			hideDateBoxHandle : function() {
				var a = this;
				return function() {
					a._destroy();
					a.initInputDate()
				}
			},
			disable : function() {
			},
			enable : function() {
			},
			initInputDate : function() {
				var e = this, d = e.options;
				var b = T.g(d.containerId);
				var f = baidu.date.format;
				T.dom.removeClass(b, "selected");
				if (d.startDate && d.startDate != "") {
					var a = f(d.startDate, "yyyy/MM/dd");
					var g = f(d.endDate, "yyyy/MM/dd");
					var c = (a == g) ? g : a + " - " + g;
					T.dom.one(".text", b).innerHTML = c
				} else {
					T.dom.one(".text", b).innerHTML = d.defaultText
				}
			},
			onSelect : function() {
				var e = this, d = e.options;
				var b = baidu.G(d.containerId);
				var g = baidu.date.format;
				var c = this.selected;
				var f = g(c.from, "yyyy/MM/dd");
				var a = g(c.to, "yyyy/MM/dd");
				T.dom.one(".text", b).innerHTML = (f == a) ? a : f + " - " + a;
				T.dom.addClass(b, "cur")
			},
			submitDateSelect : function() {
				var b = this, a = b.options;
				return function() {
					var d = b.selected.from;
					var c = b.selected.to;
					a.startDate = d;
					a.endDate = c;
					b.currentSubmit = true;
					b.hideDateBoxFn();
					b.options.onchange("submitDateSelect")
				}
			},
			dateDiff : function(b, a) {
				b.setHours(0);
				b.setMinutes(0);
				b.setSeconds(0);
				b.setMilliseconds(0);
				a.setHours(0);
				a.setMinutes(0);
				a.setSeconds(0);
				a.setMilliseconds(0);
				return parseInt((b - a) / 1000 / 60 / 60 / 24, 10)
			}
		});
function DateSelector(b) {
	this.uniqueId = getUniqueId();
	b = b || {};
	this.onselect = b.onselect || new Function();
	this.singleSelection = b.singleSelection || false;
	this.onviewchange = b.onviewchange;
	this.autoFill = b.autoFill;
	if ("undefined" == typeof this.autoFill || this.autoFill === null) {
		this.autoFill = true
	}
	this.dateStyle = b.dateStyle || "";
	this.weekStyle = b.weekStyle || "";
	this.sideButtonStyle = b.sideButtonStyle;
	this.sideButtonClass = b.sideButtonClass;
	this.calendarCount = b.calendarCount || 2;
	this.selected = b.selected || null;
	var a = this.selected ? this.selected.to : (new Date());
	this.viewDate = new Date(a.getFullYear(), a.getMonth(), 1);
	this.clickState = "from";
	this.calWrapIdPrefix = this.uniqueId + "DSCalendarWrap";
	this.wrapClass = "ds-wrap";
	this.prevClass = "ds-prev";
	this.nextClass = "ds-next";
	this.prevYearClass = "ds-prevyear";
	this.prevMonthClass = "ds-prevmonth";
	this.nextYearClass = "ds-nextyear";
	this.nextMonthClass = "ds-nextmonth";
	this.prevYearId = "DSPrevYear";
	this.prevMonthId = "DSPrevMonth";
	this.nextYearId = "DSNextYear";
	this.nextMonthId = "DSNextMonth";
	this.calWrapClass = "ds-cal-wrap";
	this.calBlankClass = "ds-cal-blank";
	this.calHeadClass = "ds-cal-head";
	this.calHeadSelClass = "ds-cal-head-selected";
	this.dateClass = "ds-date-thismonth";
	this.dateSelectedClass = "ds-date-selected";
	this.dateOtherClass = "ds-date-othermonth";
	this.weekClass = "ds-week"
}
DateSelector.getDateCountByMonth = function(a) {
	var b = new Date(a.getFullYear(), a.getMonth() + 1, 0);
	return b.getDate()
};
DateSelector.prototype = {
	setSelected : function(a) {
		this.selected = (a && a.from && a.to) ? a : {};
		this.renderCalendars();
		this.clickState = "from";
		return this
	},
	getSelected : function() {
		return this.selected
	},
	appendTo : function(c) {
		var d = document.createElement("table");
		var a = document.createElement("tbody");
		var e = document.createElement("tr");
		d.className = this.wrapClass;
		a.appendChild(e);
		d.appendChild(a);
		c.appendChild(d);
		d.onclick = this.getClickHandler();
		this.renderSide("prev", e);
		for ( var b = 0; b < this.calendarCount; b++) {
			var f = document.createElement("td");
			f.style.verticalAlign = "top";
			f.id = this.calWrapIdPrefix + b;
			f.className = this.calWrapClass;
			e.appendChild(f);
			if (b < this.calendarCount - 1) {
				f = document.createElement("td");
				f.className = this.calBlankClass;
				e.appendChild(f)
			}
		}
		this.renderSide("next", e);
		this.renderCalendars();
		this.appendTo = new Function()
	},
	renderSide : function(l, k) {
		var a = '<div class="#{yearclass}" id="#{yearId}" sign="#{type}year" style="#{yearstyle}"></div><div class="#{monthclass}" id="#{monthId}" sign="#{type}month" style="#{monthstyle}"></div>';
		var p = [ "year", "month" ], b = [ "class", "style" ];
		var q = {
			styleFn : this.sideButtonStyle || new Function(),
			classFn : this.sideButtonClass || new Function()
		};
		var h = {
			from : new Date(this.viewDate.getFullYear(), this.viewDate
					.getMonth()
					- this.calendarCount + 1, 1),
			to : this.viewDate
		};
		var f = {
			monthstyle : this[l + "MonthStyle"],
			yearstyle : this[l + "YearStyle"],
			monthclass : this[l + "MonthClass"],
			yearclass : this[l + "YearClass"],
			yearId : this[l + "YearId"],
			monthId : this[l + "MonthId"]
		};
		var o, d, n;
		for ( var g = 0; g < p.length; g++) {
			o = p[g];
			for ( var e = 0; e < b.length; e++) {
				n = q[b[e] + "Fn"];
				switch (typeof n) {
				case "function":
					h.type = l + o;
					d = n(h);
					if (d) {
						f[o + b[e]] = d
					}
					break;
				case "string":
					f[o + b[e]] = n;
					break
				}
			}
		}
		var m = this.uniqueId + l + "Side";
		var c = baidu.G(m);
		if (!c) {
			if (!k) {
				return
			}
			c = document.createElement("td");
			c.id = m;
			l = l.toLowerCase();
			c.style.verticalAlign = "top";
			c.className = this[l + "Class"];
			k.appendChild(c)
		}
		c.innerHTML = baidu.format(a, {
			type : l,
			yearclass : f.yearclass,
			monthclass : f.monthclass,
			yearstyle : f.yearstyle,
			monthstyle : f.monthstyle,
			yearId : f.yearId,
			monthId : f.monthId
		})
	},
	renderCalendars : function() {
		for ( var b = 0; b < this.calendarCount; b++) {
			var a = new Date(this.viewDate.getFullYear(), this.viewDate
					.getMonth()
					- this.calendarCount + 1 + b, 1);
			baidu.G(this.calWrapIdPrefix + b).innerHTML = this.getCalendarHtml(
					a.getFullYear(), a.getMonth())
		}
	},
	getCalendarHtml : function(h, g) {
		var e = '<div id="Calendar#{year}#{month}" class="#{clazz}" sign="month" y="#{year}" m="#{month}">#{year}å¹´#{nextmonth}æœˆ</div>';
		var c = '<td sign="date" style="#{4}" class="#{3}" y="#{2}" m="#{1}" d="#{0}">#{0}</td>';
		var i = '<table cellpadding="0" cellspacing="0" border="0" class="#{className}"><thead>#{thead}</thead><tbody>#{tbody}</tbody></table>';
		var d = [];
		var f = this.calHeadClass;
		var b = new Date(h, g, 1);
		var a = new Date(b);
		a.setMonth(a.getMonth() + 1);
		a.setDate(0);
		if (this.selected && b - this.selected.from >= 0
				&& a - this.selected.to <= 0) {
			f = this.calHeadSelClass
		}
		d.push(baidu.format(e, {
			clazz : f,
			year : h,
			month : g,
			nextmonth : (g + 1)
		}), baidu.format(i, {
			thead : this.getCalHeadHtml(),
			className : this.singleSelection ? "single" : "",
			tbody : this.getCalBodyHtml(h, g)
		}));
		return d.join("")
	},
	getCalHeadHtml : function() {
		var d = [ "æ—¥", "ä¸€", "äºŒ", "ä¸‰", "å››", "äº”", "å…­" ];
		var c = [ baidu.format(
				'<tr><td style="background:#fff;" class="#{0}"></td>',
				this.weekClass) ];
		var a = "<td>#{0}</td>";
		for ( var b = 0; b < 7; b++) {
			c.push(baidu.format(a, d[b]))
		}
		c.push("</tr>");
		return c.join("")
	},
	getCalBodyHtml : function(h, t) {
		var r = '<td sign="#{3}" style="#{5}" class="#{4}" y="#{2}" m="#{1}" d="#{0}">#{6}</td>';
		var n = '<td class="#{0}" sign="week" style="#{1}"></td>';
		var g = [];
		function j() {
			var i = Array.apply(i, arguments);
			i.unshift(r);
			g.push(baidu.format.apply(null, i))
		}
		var l = new Date(h, t, 1);
		var w = new Date(h, (t - 1), 1);
		var k = DateSelector.getDateCountByMonth(w);
		var c = DateSelector.getDateCountByMonth(l);
		var d = 0 - new Date(h, t, 1).getDay();
		var e, f, u, v, a, b;
		if (this.dateStyle.constructor == String) {
			a = this.dateStyle
		}
		if ("function" == typeof this.weekStyle) {
			b = this.weekStyle(new Date(w.getFullYear(), w.getMonth(), k + d
					+ 1))
					|| ""
		}
		g.push("<tr>", baidu.format(n, this.weekClass, b));
		for ( var s = 0; d < c; d++, s++) {
			var q = "date";
			if (s > 0 && s % 7 === 0) {
				if ("function" == typeof this.weekStyle) {
					b = this.weekStyle(new Date(h, t, d + 1)) || ""
				}
				g.push("</tr><tr>", baidu.format(n, this.weekClass, b))
			}
			if (d < 0) {
				e = k + d + 1;
				f = w.getMonth();
				u = w.getFullYear();
				v = this.dateOtherClass;
				if (!this.autoFill) {
					q = ""
				}
			} else {
				e = d + 1;
				f = t;
				u = h;
				v = this.dateClass;
				if (this.selected) {
					var m = new Date(u, f, e);
					if (m - this.selected.from >= 0
							&& m - this.selected.to <= 0) {
						v = this.dateSelectedClass
					}
				}
			}
			if ("function" == typeof this.dateStyle && q) {
				a = this.dateStyle(new Date(u, f, e)) || ""
			}
			j(e, f, u, q, v, (v == this.dateSelectedClass ? "" : a), (q ? e
					: ""))
		}
		f = t + 1;
		u = h;
		if (f > 11) {
			f = 0;
			u++
		}
		v = this.dateOtherClass;
		a = "";
		for ( var o = s % 7, p = o; o > 0 && o < 7; o++) {
			if (this.autoFill) {
				q = "date";
				e = o - p + 1;
				if ("function" == typeof this.dateStyle) {
					a = this.dateStyle(new Date(u, f, e)) || ""
				}
			} else {
				e = "&nbsp;";
				q = ""
			}
			j(e, f, u, q, v, a, e)
		}
		g.push("</tr>");
		return g.join("")
	},
	getClickHandler : function() {
		var a = this;
		return function(k) {
			k = k || window.event;
			var j = k.srcElement || k.target;
			var c = j.getAttribute("sign");
			var m = new Date(a.viewDate);
			var f, n, l, i;
			switch (c) {
			case "prevmonth":
				m.setMonth(a.viewDate.getMonth() - 1);
				break;
			case "prevyear":
				m.setFullYear(a.viewDate.getFullYear() - 1);
				break;
			case "nextmonth":
				m.setMonth(a.viewDate.getMonth() + 1);
				break;
			case "nextyear":
				m.setFullYear(a.viewDate.getFullYear() + 1);
				break;
			case "date":
				var b = new Date(j.getAttribute("y"), j.getAttribute("m"), j
						.getAttribute("d"));
				if (a.clickState == "from") {
					f = {
						from : b,
						to : b
					}
				} else {
					f = {
						from : a.selected.from,
						to : b
					};
					if (f.to - f.from < 0) {
						var g = f.to;
						f.to = f.from;
						f.from = g
					}
				}
				break;
			case "week":
				if (a.singleSelection) {
					return
				}
				var d = j.nextSibling;
				l = new Date(d.getAttribute("y"), d.getAttribute("m"), d
						.getAttribute("d"));
				i = new Date(l);
				i.setDate(i.getDate() + 6);
				f = {
					from : l,
					to : i
				};
				break;
			case "month":
				if (a.singleSelection) {
					return
				}
				l = new Date(j.getAttribute("y"), j.getAttribute("m"), 1);
				i = new Date(l);
				i.setMonth(i.getMonth() + 1);
				i.setDate(0);
				f = {
					from : l,
					to : i
				};
				break;
			default:
				return
			}
			switch (c) {
			case "prevmonth":
			case "prevyear":
			case "nextmonth":
			case "nextyear":
				if (a.onviewchange) {
					var h = new Date(m);
					h.setMonth(h.getMonth() - a.calendarCount + 1);
					n = a.onviewchange.call(a, {
						from : h,
						to : m
					});
					if (n === false) {
						return
					}
				}
				a.viewDate = m;
				a.renderSide("prev");
				a.renderSide("next");
				break;
			case "date":
			case "week":
			case "month":
				n = a.onselect.call(a, f);
				if (n === false) {
					return
				}
				a.selected = f;
				a.clickState = (c == "date" && a.clickState == "from") ? "to"
						: "from";
				if (a.singleSelection) {
					a.clickState = "from"
				}
				break
			}
			a.renderCalendars()
		}
	}
};
T.ui.Dialog = T
		.createUI({
			options : {
				id : "",
				titleText : "é»˜è®¤æ ‡é¢˜",
				content : "é»˜è®¤å†…å®¹",
				position : {
					left : 360,
					top : 100
				},
				isSingle : false,
				isModal : false,
				hasClose : true,
				className : "dialog",
				zIndex : 99999,
				bgiframe : true
			},
			_type : "dialog",
			_init : function() {
				var a = this;
				a.options.id = a.id = a.getId();
				a.render()
			},
			_getInnerString : function() {
				var b = document;
				var a = this;
				var c = [ '<div class="dialog-title">' ];
				c.push('<div class="dialog-title-text">');
				c.push(a.options.titleText);
				c.push("</div>");
				if (this.options.hasClose) {
					c
							.push('<a href="javascript:void(0);" class="dialog-close">Ã—');
					c.push("</a>")
				}
				c.push("</div>");
				c.push('<div class="dialog-content">');
				c.push(a._getContentHTML());
				c.push("</div>");
				return c.join("")
			},
			_update : function() {
				var e = this;
				var a = e.getContainer();
				if (a) {
					var f = "#" + e.id + " .dialog-title-text";
					var d = T.dom.query(f)[0];
					if (d) {
						d.innerHTML = e.options.titleText
					}
					var c = "#" + e.id + " .dialog-content";
					var b = T.dom.query(c)[0];
					if (b) {
						b.innerHTML = e._getContentHTML()
					}
					T.dom.setPosition(a, e.options.position)
				} else {
					return
				}
			},
			_setIFrame : function(d, c, a) {
				var b = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="javascript:false;"style="display:block;position:absolute;z-index:-1;background-color:transparent;filter:Alpha(Opacity=\'0\');top:'
						+ (0)
						+ "px;left:"
						+ (0)
						+ "px;width:"
						+ (c)
						+ "px;height:" + (a) + 'px;"/>';
				if (T.q("bgiframe", d).length === 0) {
					T.dom.insertHTML(d, "beforeBegin", b)
				}
			},
			_getContentHTML : function() {
				var b = this;
				var c = document;
				if (T.lang.isString(b.options.content)) {
					return b.options.content
				} else {
					if (T.lang.isElement(b.options.content)) {
						T.show(b.options.content);
						var a = c.createElement("div");
						a.appendChild(b.options.content);
						return a.innerHTML
					} else {
						return ""
					}
				}
			},
			setTitleText : function(b) {
				var a = this;
				if (T.lang.isString(b)) {
					a.options.titleText = b
				}
				a._update()
			},
			setContent : function(c) {
				var b = this;
				var a = c;
				if (T.lang.isString(a) || T.lang.isElement(a)) {
					b.options.content = a
				}
				b._update()
			},
			render : function() {
				var h = document;
				var e = this;
				var a = h.createElement("div");
				a.id = e.id;
				a.className = "dialog-container " + e.options.className;
				var d = "";
				if (e.options.isModal) {
					var c = e.options.zIndex - 1;
					var g = h.createElement("div");
					g.className = e.options.className + " modal";
					g.id = e.id + "modal";
					T.dom.setStyles(g, {
						position : "absolute",
						top : 0,
						left : 0,
						"background-color" : "black",
						width : T.page.getWidth(),
						height : T.page.getHeight(),
						opacity : 0.6,
						"z-index" : c
					});
					h.body.appendChild(g);
					g.style.cssText += "opacity: 0.6;";
					if (e.options.bgiframe && T.browser.ie
							&& (T.browser.ie < 7)) {
						var b = h.createElement("div");
						g.appendChild(b);
						e._setIFrame(g.firstChild, T.page.getWidth(), T.page
								.getHeight())
					}
					T.un(window, "resize", e._modalResizeHandler);
					T.on(window, "resize", e._modalResizeHandler)
				}
				a.innerHTML = e._getInnerString();
				h.body.appendChild(a);
				if (e.options.bgiframe && T.browser.ie && (T.browser.ie < 7)) {
					e._setIFrame(a.firstChild, a.offsetWidth, a.offsetHeight)
				}
				T.dom.setStyles(e.getContainer(), {
					position : "absolute",
					"z-index" : e.options.zIndex
				});
				if (e.options.width) {
					T.dom.setStyle(e.getContainer(), "width", e.options.width);
					e.options.position.left = T.page.getScrollLeft()
							+ (T.page.getViewWidth() - e.options.width) / 2;
					e.options.position.top = Math.max(
							T.page.getScrollTop()
									+ (T.page.getViewHeight() - e
											.getContainer().offsetHeight) / 2,
							0)
				}
				T.dom.setPosition(e.getContainer(), {
					left : e.options.position.left,
					top : e.options.position.top
				});
				if (this.options.hasClose) {
					var f = "#" + e.id + " .dialog-close";
					T.dom.query(f)[0].onclick = function() {
						e.close()
					}
				}
				e.hide()
			},
			getContainer : function() {
				return T.g(this.id)
			},
			setPosition : function(a) {
				var b = this;
				b.options.position.left = a.left;
				b.options.position.top = a.top;
				b._update()
			},
			show : function() {
				var a = this;
				T.dom.show(a.getContainer());
				if (a.options.width) {
					T.dom.setStyle(a.getContainer(), "width", a.options.width);
					a.options.position.left = T.page.getScrollLeft()
							+ (T.page.getViewWidth() - a.options.width) / 2;
					a.options.position.top = Math.max(
							T.page.getScrollTop()
									+ (T.page.getViewHeight() - a
											.getContainer().offsetHeight) / 2,
							0)
				}
				T.dom.setPosition(a.getContainer(), {
					left : a.options.position.left,
					top : a.options.position.top
				});
				if (a.getModalContainer()) {
					T.dom.show(a.getModalContainer())
				}
			},
			hide : function() {
				var a = this;
				T.dom.hide(a.getContainer());
				if (a.getModalContainer()) {
					T.dom.hide(a.getModalContainer())
				}
			},
			close : function() {
				if (!this.options.isSingle) {
					if (this.getContainer()) {
						T.dom.remove(this.getContainer())
					}
					if (this.getModalContainer()) {
						T.dom.remove(this.getModalContainer())
					}
					T.un(window, "resize", this._modalResizeHandler)
				} else {
					this.hide()
				}
				this.dispatchEvent("onclose")
			},
			getModalContainer : function() {
				return T.g(this.id + "modal")
			},
			_modalResizeHandler : function() {
				var b = T.q("modal");
				for ( var a = 0; a < b.length; a++) {
					T.dom.setStyles(b[a], {
						width : T.page.getWidth(),
						height : T.page.getHeight()
					})
				}
			}
		});
T.ui.Dialog.close = function() {
	T.element(".dialog-container, .modal").each(function(a) {
		T.dom.remove(a)
	})
};
T.dom
		.ready(function() {
			T.lang.Class.create(T.ToggleTarget, {
				memo : T.config.memo,
				onchange : function(i) {
					EventRouter.dispatch("onchangeToggleTarget", i)
				}
			});
			T.lang.Class.create(T.RecordTarget, {
				onchange : function(i) {
					EventRouter.dispatch("onchangeRecordTarget", i)
				}
			});
			T.event.ons(T.dom.query("ul.nav a.open,ul.nav a.close"), "click",
					function(i) {
						T.event.preventDefault(i);
						if (T.dom.hasClass(this, "close")) {
							T.show(T.dom.next(this))
						} else {
							T.hide(T.dom.next(this))
						}
						T.dom.toggleClass(this, "close");
						T.dom.toggleClass(this, "open")
					});
			var d = new T.ui.Layer({
				containerId : "notImpLayer",
				handlerSelector : "ul.nav li.disabled",
				type : "mouseover",
				relatedPosition : "tr",
				className : "notImp-layer",
				offset : {
					left : -5
				},
				autoRender : true,
				onchange : function(i) {
					d.content("æ²¡æœ‰æƒé™", i)
				}
			});
			var c = T.g("SetCurrentDefaultSite");
			var g = T.dom.query("#SiteList>li");
			T.array.each(g, function(j, i) {
				if (i % 2 == 1) {
					T.dom.addClass(j, "even")
				}
			});
			if (T.g("MoreNav")) {
				T.on("MoreNav", "mouseover", function() {
					T.dom.addClass(this, "more-hover")
				});
				T.on("MoreNav", "mouseout", function() {
					T.dom.removeClass(this, "more-hover")
				})
			}
			T.event.ons(g, "mouseover", function() {
				T.dom.addClass(this, "hover")
			});
			T.event.ons(g, "mouseout", function() {
				T.dom.removeClass(this, "hover")
			});
			if (T.g("ReportTipIco")) {
				T.event.on("ReportTipIco", "click", function(i) {
					T.event.preventDefault(i);
					if (T.dom.hasClass(this, "close")) {
						T.fx.expand("ReportTip")
					} else {
						T.fx.collapse("ReportTip")
					}
					T.dom.toggleClass(this, "close");
					T.dom.toggleClass(this, "open")
				})
			}
			T.fn.bgIframe(T.dom.q("bg-iframe"));
			var b = T.g("Feedback");
			var f = T.g("FeedbackForm");
			if (b) {
				T.inlineTip("FeedbackEmail");
				T.inlineTip("FeedbackContent");
				T.on(b, "click", function() {
					if (T.dom.hasClass(b, "open")) {
						T.removeClass(b, "open");
						T.fx.collapse(f, {
							orientation : "horizontal",
							onbeforeupdate : function(i) {
								if (i.target.percent > 0.9) {
									T.hide(f)
								}
							}
						})
					} else {
						T.addClass(b, "open");
						T.show(f);
						T.fx.expand(f, {
							orientation : "horizontal"
						})
					}
				});
				T
						.on(
								"FeedbackSubmitForm",
								"submit",
								function(k) {
									T.event.preventDefault(k);
									var j = T.g("FeedbackType").value;
									if (j == "åé¦ˆç±»åž‹") {
										alert("è¯·é€‰æ‹©åé¦ˆç±»åž‹");
										return
									}
									var i = T
											.getInlineTipInputValue("FeedbackEmail");
									if (!T.lang.isEmail(i)) {
										alert("è¯·è¾“å…¥æ­£ç¡®çš„é‚®ç®±");
										return
									}
									var l = T
											.getInlineTipInputValue("FeedbackContent");
									if (l == "") {
										alert("è¯·è¾“æ‚¨çš„æ„è§å’Œå»ºè®®");
										return
									}
									T.ajax.jsonPost(
											T.config.systemConfig.baseUri
													+ "/feedback", {
												type : j,
												email : i,
												content : l
											});
									alert("æ„Ÿè°¢æ‚¨çš„åé¦ˆï¼Œæˆ‘ä»¬ä¼šåŠæ—¶ä¸Žæ‚¨å–å¾—è”ç³»ã€‚");
									T
											.clearInlineTipInputValue("FeedbackContent");
									T.removeClass(b, "open");
									T.fx.collapse(f, {
										orientation : "horizontal",
										onbeforeupdate : function(m) {
											if (m.target.percent > 0.9) {
												T.hide(f)
											}
										}
									})
								})
			}
			T.inlineTip("Help");
			T.inlineTip("ReportHelp");
			T.dom.one(".report-help")
					&& (T.dom.setStyle(T.dom.one(".tip-arrow"), "left", (T.dom
							.one(".report-help").offsetLeft + 2)
							+ "px"));
			var e = function() {
				var i = {
					position : "absolute"
				};
				var j = (document.documentElement && document.documentElement.scrollTop)
						|| document.body.scrollTop;
				if (j > 50) {
					if (T.browser.ie && T.browser.ie < 7) {
						T.extend(i, {
							top : j,
							height : document.documentElement.clientHeight
						})
					} else {
						T.extend(i, {
							position : "fixed",
							top : 0,
							height : document.documentElement.clientHeight
						})
					}
				} else {
					T.extend(i, {
						top : 50,
						height : document.documentElement.clientHeight + j - 50
								- 5
					})
				}
				return i
			};
			var a = function() {
				var j = e();
				T.dom.setStyles("minibar", j);
				T.dom.setStyles("aside-menu", j);
				var i = T.dom.one("#aside-menu .app-info");
				var k = 10;
				if (i && i.style.display != "none") {
					k = 141
				}
				T.dom.one("#aside-menu .nav").style.height = j.height - 59 - k
						+ "px"
			};
			var h = function() {
				var n = T.dom.one("#aside-menu .nav");
				var k = T.dom.one(".selected", n);
				var j = k.offsetHeight;
				var m = k.offsetTop;
				var l = n.clientHeight;
				var i = 0;
				if ((i = m + j - 59 - l) > 0) {
					n.scrollTop = i;
					if (T.browser.ie && T.browser.ie < 8) {
						n.scrollTop += 59
					}
				}
			};
			if (T.g("menu-toggle")) {
				T.event.on("menu-toggle", "click", function() {
					T.dom.hide("aside-menu");
					T.dom.setStyles("main-body", {
						"margin-left" : 65
					});
					T.dom.show("minibar");
					T.dom.setStyles("minibar", e())
				});
				T.event.on("menu-untoggle", "click", function() {
					T.dom.show("aside-menu");
					T.dom.setStyles("main-body", {
						"margin-left" : 260
					});
					T.dom.hide("minibar");
					T.dom.setStyles("aside-menu", e())
				});
				T.event.on(window, "resize", function() {
					a()
				});
				T.on(window, "scroll", function() {
					a()
				});
				a();
				h()
			}
		});
T.ui.Download = T
		.createUI({
			_type : "download",
			options : {
				trigerId : null,
				reportTitle : null,
				reportId : null,
				appId : null,
				reportTypes : [ "csv" ],
				url : null,
				onchange : function(a) {
				},
				wrapperTemplate : '<div class="download-report-wrapper"><div class="download-report-title">#{title}</div><div class="download-report-items">æ–‡ä»¶ç±»åž‹ï¼š#{items}</div><div id="#{tipId}" class="download-report-tip">#{tip}</div><div class="download-report-buttons"><a class="button" id="#{downloadId}" href="javascript:void(0)"><span>ä¸‹è½½</span></a><a id="#{cancelId}" href="javascript:void(0)">å–æ¶ˆ</a></div></div>',
				itemTemplate : '<label for="#{0}" title="#{2}"><input type="radio" title="#{2}" data="#{4}" id="#{0}"#{3} name="download__report"/>#{1}</label>',
				iframeTemplate : '<iframe id="#{0}" width="0" height="0"></iframe>',
				downloads : [
						{
							id : "pdf",
							label : "PDF",
							title : "æœ¬æ ¼å¼å›¾æ–‡å¹¶èŒ‚ï¼Œé˜…è¯»æ—¶éœ€pdfç›¸åº”è½¯ä»¶ã€‚"
						},
						{
							id : "csv",
							label : "CSV",
							title : "æœ¬æ ¼å¼ä¸å«å›¾ç¤ºï¼Œæ”¯æŒè¾ƒå¤§é‡æ•°æ®ï¼Œä¾¿äºŽåŽæœŸæ•°æ®å¤„ç†ã€‚"
						},
						{
							id : "html",
							label : "HTML",
							title : "æœ¬æ ¼å¼å›¾æ–‡å¹¶èŒ‚ï¼Œæ”¯æŒæ•°æ®é‡è¾ƒå°‘ï¼Œä½“ç§¯å°ä¾¿äºŽä¸‹è½½é˜…è¯»ã€‚"
						} ]
			},
			_downloadType : null,
			_renderHTML : function() {
				var c = [];
				for ( var b in this.options.downloads) {
					var a = this.options.downloads[b];
					if (T.array.contains(this.options.reportTypes, a.id)) {
						c.push(T.format(this.options.itemTemplate, this
								.getId(a.id), a.label, a.title,
								b == 0 ? ' checked="checked"' : "", a.id))
					}
				}
				var d = this.options.downloads[0].title;
				return T.format(this.options.wrapperTemplate, {
					title : (this.options.reportTitle || "ä¸‹è½½æŠ¥å‘Š"),
					items : c.join(""),
					tipId : this.getId("Tip"),
					tip : d,
					downloadId : this.getId("Download"),
					cancelId : this.getId("Cancel")
				})
			},
			_bindEvents : function() {
				var c = this;
				for ( var b in this.options.reportTypes) {
					var a = this.options.reportTypes[b];
					T.on(this.getId(a), "click", function() {
						T.g(c.getId("Tip")).innerHTML = this.title;
						c._downloadType = T.dom.getAttr(this, "data")
					})
				}
				T.on(this.getId("Download"), "click", function() {
					c.dialog.close();
					c.options.onchange(c._downloadType)
				});
				T.on(this.getId("Cancel"), "click", function() {
					c.dialog.close()
				})
			},
			download : function(a) {
				if (a.reportId == null) {
					a.reportId = this.options.reportId
				}
				if (a.appId == null) {
					a.appId = this.options.appId
				}
				if (a.format == null) {
					a.format = this._downloadType
				}
				if (!T.g("DownloadChannel")) {
					T.insertHTML(document.body, "beforeend", T.format(
							this.options.iframeTemplate, "DownloadChannel"))
				}
				T.g("DownloadChannel").src = this.options.url + T.param(a)
			},
			_renderDialog : function() {
				this.dialog = new T.ui.Dialog({
					id : this.getId("Dialog"),
					titleText : "ä¸‹è½½æŠ¥å‘Š",
					content : this._renderHTML(),
					isModal : true,
					isSingle : true,
					width : 360
				});
				this._bindEvents()
			},
			render : function() {
				var a = this;
				this._downloadType = this.options.reportTypes[0];
				if (this.options.reportTypes.length > 1) {
					T.on(this.options.trigerId, "click", function() {
						if (!a.dialog) {
							a._renderDialog()
						}
						a.dialog.show()
					})
				} else {
					T.on(this.options.trigerId, "click", function() {
						a.options.onchange(a._downloadType)
					})
				}
			}
		});
T.FlashFormatConverter = T
		.createClass({
			options : {
				onchange : function(a) {
				}
			},
			setFlash : function(h) {
				var g = h.flashId, c = h.fields, d = h.units, e = h.items, f = h.type
						|| "line";
				if ((c && c.length == 0) || (e && e.length == 0)) {
					return
				}
				var a;
				if (f == "linepie") {
					var i = h.line, b = h.pie;
					a = {
						line : this._convertDataformat(i.fields, i.items),
						pie : this._convertDataformat(b.fields, b.items)
					}
				} else {
					a = this._convertDataformat(c, e)
				}
				this._setData(h, a);
				this._setStyle(h, a);
				h.highlightIndexs
						&& this._setHighLightItem(g, h.highlightIndexs)
			},
			_convertDataformat : function(a, b) {
				var d = [], c = [];
				T.array.each(b, function(e) {
					d.push(T.array.hash(a, e))
				});
				return d
			},
			_setData : function(c, f) {
				if (!f || f.length == 0) {
					return
				}
				var d = c.flashId, b = c.fields, e = c.type;
				var a = T.swf.getMovie(d);
				a.clear && a.clear();
				this.options.onchange(a, c, f);
				if (e == "line") {
					a.setData(f);
					c && c.indicator && a.setValueName(c.indicator)
				} else {
					if (e == "bar") {
						a.setData(f)
					} else {
						if (e == "pie") {
							a.setPieData(f, "value", "label")
						} else {
							if (e == "area") {
								c && c.indicator && a.setValueName(c.indicator);
								a.setMapData(f)
							} else {
								if (e == "areapie") {
									c && c.indicator
											&& a.setValueName(c.indicator);
									a.setMapData(f);
									a.setPieData(f, "value", "label")
								} else {
									if (e == "linepie") {
										a.setLinebarData(f.line);
										a.setPieData(f.pie, "value", "label");
										c.indicator && a.setValueName
												&& a.setValueName(c.indicator)
									} else {
										if (e == "circle") {
											c
													&& c.indicator
													&& a
															.setValueName(c.indicator);
											a.setData(f)
										} else {
											a.setData(f)
										}
									}
								}
							}
						}
					}
				}
			},
			_setStyle : function(m, d) {
				var k = m.flashId, f = m.fields, h = m.units, j = m.type;
				var b = T.swf.getMovie(k);
				if (j == "line") {
					this._setLineStyle(b, h, f)
				} else {
					if (j == "bar") {
						this._setBarStyle(b, h, f)
					} else {
						if (j == "pie") {
							b.setPieGradient(false);
							b.setPieColors([ 4767476, 14898746, 1682015,
									11060822, 5328533, 14833299, 15312960,
									12369084, 9721830, 1360336 ]);
							b.setRadius(100);
							b.setHasTip(false);
							b.addEvent();
							b.setLineStyle(2913222, 1, 0.5);
							b.setShowLabel(false);
							b.setShowLabelLine(false);
							b.setlabelLineLength(0.1)
						} else {
							if (j == "areapie") {
								b.setPieData(d, "value", "label");
								b.setPieGradient(false);
								b.setPieColors([ 4767476, 14898746, 1682015,
										11060822, 5328533, 14833299, 15312960,
										12369084, 9721830, 1360336 ]);
								b.setRadius(100);
								b.setHasTip(false);
								b.addEvent();
								b.setLineStyle(2913222, 1, 0.5);
								b.setShowLabel(false);
								b.setShowLabelLine(false);
								b.setlabelLineLength(0.1);
								b.showTopNum(4)
							} else {
								if (j == "linepie") {
									T.array.each(m.line.fields, function(i) {
										T.array.remove(m.line.fields, i
												+ "SmallTip")
									});
									h[0] && b.setTick(" / " + h[0], "left");
									b.setDataSuffix("I,III", "left");
									b.setAxisLineStyle(4681895, 2);
									if (m.bar) {
										b
												.addBarGraph(m.line.fields[1],
														"label")
									}
									for ( var e = 2, c = m.line.fields.length; e < c; e++) {
										b.addLineGraph(m.line.fields[e],
												"label");
										b.setLineDot("3", m.line.fields[e])
									}
									var a = [ 4767476, 14898746, 1682015,
											11060822, 5328533, 14833299,
											15312960, 12369084, 9721830,
											1360336 ];
									var g;
									if (m.bar) {
										g = [ 7368816 ].concat(a)
									} else {
										g = a
									}
									b.setLinebarColors(g);
									b.setSplitLine(0);
									b.setLinebarGradient(false);
									b.setShowDataTips(true);
									b.setShowBigDataTips(false);
									b.setPieGradient(false);
									b.setPieColors(a);
									b.setRadius(90);
									b.setHasTip(false);
									b.addEvent();
									b.setLineStyle(2913222, 1, 0.5);
									b.setShowLabel(false);
									b.setShowLabelLine(false);
									b.setlabelLineLength(0.1);
									b.showTopNum(3)
								} else {
									if (j == "circle") {
										b.setColors([ 4767476, 14898746,
												1682015, 11060822, 5328533,
												14833299, 15312960, 12369084,
												9721830, 1360336, 12949082,
												2913222, 3705647, 16162851,
												10208838 ])
									} else {
										if (j == "circlegraph") {
											b.setTick("æ—¶é•¿", "left");
											b.setColors([ 4767476, 14898746,
													1682015, 11060822, 5328533,
													14833299, 15312960,
													12369084, 9721830, 1360336,
													12949082, 2913222, 3705647,
													16162851, 10208838 ])
										}
									}
								}
							}
						}
					}
				}
			},
			_setLineStyle : function(b, d, a) {
				T.array.each(a, function(g) {
					T.array.remove(a, g + "BigTip")
				});
				b.setSplitLine(0);
				d = T.array.unique(d);
				var e = a[0];
				for ( var f = 1, c = a.length; f < c; f++) {
					if (f != 1 && d.length > 1) {
						b.addLineGraph(a[f], e || "label", "bottom", "right")
					} else {
						b.addLineGraph(a[f], e || "label")
					}
					this._setUnit(b, d[f - 1], f == 1 ? "left" : "right");
					if (c > 2) {
						b.addLegend("0", a[f]);
						b.setLineDot("3", a[f])
					}
				}
				b.setAxisLineStyle(4681895, 2);
				b.setColors([ 4767476, 16370368, 1682015, 11060822, 5328533,
						14833299, 15312960, 12369084, 9721830, 1360336,
						12949082, 2913222, 3705647, 16162851, 10208838 ]);
				b.setGradient(false);
				b.setShowDataTips(false);
				b.setShowBigDataTips(true)
			},
			_setBarStyle : function(b, c, a) {
				b.setSplitLine(0);
				T.array.each(a, function(d) {
					T.array.remove(a, d + "SmallTip")
				});
				c = T.array.unique(c);
				c[0] && b.setTick(" / " + c[0], "left");
				this._setUnit(b, c[0], "left");
				b.addBarGraph(a[1], a[0] || "label");
				if (a.length > 2) {
					if (c.length > 1) {
						b.addBarGraph(a[2], a[0] || "label", "bottom", "right");
						c[1] && b.setTick(" / " + c[1], "right");
						this._setUnit(b, c[1], "right")
					} else {
						b.addBarGraph(a[2], a[0] || "label")
					}
					b.setBarType("2", a[2]);
					b.addLegend("1", a[1], 6710886);
					b.addLegend("2", a[2], 6710886)
				}
				b.setAxisLineStyle(4681895, 2);
				b.setColors([ 4767476, 14898746, 1682015, 11060822, 5328533,
						14833299, 15312960, 12369084, 9721830, 1360336,
						12949082, 2913222, 3705647, 16162851, 10208838 ]);
				b.setSplitLine(0);
				b.setGradient(false);
				b.setShowDataTips(true);
				b.setShowBigDataTips(false);
				b.setBarWidth(15)
			},
			_setUnit : function(a, b, c) {
				if (!b) {
					return
				}
				a.setTick(" / " + b, c);
				switch (b) {
				case "ç™¾åˆ†æ¯”":
					a.setDataSuffix("I%", c);
					break;
				case "æ—¶é•¿":
					break;
				case "å…ƒ":
				case 0:
					a.setDataSuffix("I.DD", c);
					break;
				default:
					a.setDataSuffix("I,III", c);
					break
				}
			},
			_setHighLightItem : function(b, c) {
				if (!T.lang.isArray(c) || (c.length == 0)) {
					return false
				}
				var a = T.swf.getMovie(b);
				var d = [];
				T.each(c, function(f, e) {
					d.push({
						index : f,
						color : 14982543
					})
				});
				a.setHighLightItem(d)
			}
		});
T.ui.FlashIndicator = T
		.createUI({
			options : {
				containerId : "FlashIndicator",
				onchange : function(a) {
				},
				limit : Number.MAX_VALUE,
				defaultText : "æ²¡æœ‰å¯é€‰æ‹©çš„æŒ‡æ ‡",
				regularText : null,
				label : '<span class="text">æŒ‡æ ‡ï¼š</span>',
				defaultGroup : "0",
				className : "",
				items : null,
				selectedItems : null,
				defaultItems : null,
				wrapperTemplate : '<a href="javascript:void(0)" class="combobox trackable #{1}" memo="{id:\'flash_poin\'}" #{2}>#{0}</a>',
				indicatorContainerTempalte : '<div class="flash-indicator-container layer" style="display:none;"><div>#{0}</div>#{1}</div>',
				indicatorTextTemplate : '#{0}<span class="flash-indicator-text text">æ­£åœ¨åŠ è½½ä¸­...</span><b class="arrow"></b>',
				setDefaultTemplate : '<div id="FlashTip" class="text">(å¯åŒæ—¶é€‰æ‹©<span class="max-flash-indicator-num">#{0}</span>é¡¹)</div>',
				indicatorTemplate : '<label for="#{0}" title="!{2}"><input name="#{5}" id="#{0}" value="!{1}" type="#{3}" text="!{2}" #{4} />!{2, 10}</label>',
				indicatorWrapperTemplate : '<div class="group clearfix">#{0}</div>',
				separatorTemplate : '<div class="separator"></div>'
			},
			_flashIndicatorContainer : null,
			_flashIndicatorBtn : null,
			_flashIndicatorText : null,
			_maxFlashIndicatorNum : null,
			_defaultItems : null,
			_defaultLimit : Number.MAX_VALUE,
			_groupItems : null,
			selectedItems : [],
			_init : function() {
				this._groupItems = [];
				this.selectedItems = T.object.clone(this.options.selectedItems);
				var c = this;
				if (!T.lang.isArray(this.options.items)) {
					return
				}
				for ( var a in this.options.items) {
					var b = this.options.items[a];
					b.group = b.group || this.options.defaultGroup;
					if (this._groupItems[b.group] == null) {
						this._groupItems[b.group] = []
					}
					this._groupItems[b.group].push(b)
				}
				this._defaultLimit = this.options.limit;
				this._defaultItems = this.selectedItems
			},
			_type : "flash-indicator",
			showIndicatorContainer : function(b) {
				T.event.preventDefault(b);
				var a = T.g(this.options.containerId), c = T.dom.getPosition(a);
				T.setStyles(this._flashIndicatorContainer, {
					left : c.left + "px",
					top : c.top + a.offsetHeight + "px"
				})
			},
			showDefaultIndicatorContent : function() {
				this.options.limit = this._defaultLimit;
				this.showIndicatorContent(this._defaultItems)
			},
			showSingleIndicatorContent : function() {
				var a = this.selectedItems[0];
				this.options.limit = 1;
				this.showIndicatorContent([ a ])
			},
			showIndicatorContent : function(k) {
				var g = this._flashIndicatorText;
				if (g) {
					var b = [], d = [], h = k || this._defaultItems;
					this._set(h);
					if (this.options.regularText) {
						d.push(this.options.regularText)
					} else {
						for ( var c = 0, a = h.length; c < a; c++) {
							var j = T.g(this.getId(h[c]));
							if (j) {
								b.push(h[c]);
								d.push(T.getAttr(j, "text"))
							}
						}
						var e = this._maxFlashIndicatorNum;
						if (e) {
							e.innerHTML = e.innerHTML.replace(/\d/g,
									this.options.limit)
						}
					}
					if (h.length == 0) {
						T.array.empty(d);
						d.push(this.options.defaultText)
					}
					var f = [];
					T.each(d, function(i) {
						f.push(T.truncat(i, 10))
					});
					g.innerHTML = T.encodeHTML(f.join("ã€"));
					T.setAttr(g, "title", d.join("ã€"))
				}
			},
			_set : function(c) {
				if (!c) {
					return
				}
				this._unCheckAll();
				for ( var b = 0, a = c.length; b < a; b++) {
					var d = T.g(this.getId(c[b]));
					if (d) {
						d.checked = true
					}
				}
				this.selectedItems = c
			},
			_unCheckAll : function() {
				var a = this;
				T.array.each(this.selectedItems, function(b) {
					var c = T.g(a.getId(b));
					if (c) {
						c.checked = false
					}
				});
				this.selectedItems = []
			},
			_bind : function() {
				T.on(this._flashIndicatorText, "click", T.fn.bind(
						this.showIndicatorContainer, this));
				var a = this;
				T.array.each(T.dom.query(":input", T
						.g(this.options.containerId)), function(b, c) {
					a.on(b, "click", function(f) {
						var d = a.selectedItems;
						if (this.checked) {
							d.push(this.value)
						} else {
							if (d.length == 1) {
								this.checked = true;
								return false
							}
							T.array.remove(d, this.value)
						}
						if (d.length > a.options.limit) {
							var e = T.array.removeAt(d, 0);
							T.g(a.getId(e)).checked = false
						}
						a.showIndicatorContent(a.selectedItems);
						a.options.onchange(a.selectedItems)
					})
				})
			},
			_renderIndicators : function() {
				var d = [], g = [], a, e = (this.options.limit == 1 ? "radio"
						: "checkbox"), f = this, c = this._groupItems.length != 0 ? 'layer="#'
						+ this.options.containerId
						+ '  .flash-indicator-container"'
						: "";
				d.push(T.format(this.options.indicatorTextTemplate,
						this.options.label));
				for ( var b in this._groupItems) {
					var h = this._groupItems[b];
					a = [];
					T.array.each(h, function(i) {
						a.push(T
								.format(this.options.indicatorTemplate, this
										.getId(i.id), i.id, i.label, e,
										(T.array.contains(this.selectedItems,
												i.id) ? ' checked="checked"'
												: ""),
										this.getId(this.options.containerId)))
					}, this);
					g.push(T.format(this.options.indicatorWrapperTemplate, a
							.join("")));
					if (b != this._groupItems.length - 1) {
						g.push(this.options.separatorTemplate)
					}
				}
				d = [ T.format(this.options.wrapperTemplate, d.join(""),
						this.options.className, c) ];
				d.push(T.format(this.options.indicatorContainerTempalte, g
						.join(""), T.format(this.options.setDefaultTemplate,
						this.options.limit)));
				return d.join("")
			},
			render : function() {
				if (T.g(this.options.containerId)) {
					T.insertHTML(this.options.containerId, "beforeEnd", this
							._renderIndicators());
					this._flashIndicatorContainer = T.dom.one(
							".flash-indicator-container", T
									.g(this.options.containerId));
					this._flashIndicatorText = T.dom.one(
							".flash-indicator-text", T
									.g(this.options.containerId));
					this._maxFlashIndicatorNum = T.dom.one(
							".max-flash-indicator-num", T
									.g(this.options.containerId));
					this.showIndicatorContent(this.selectedItems);
					this._bind()
				}
			}
		});
T.Indicator = T.createClass({
	options : {
		indicators : null,
		groups : [ 1, 2 ]
	},
	_init : function() {
		var a = this;
		T.array.map(this.options.indicators, function(b) {
			b.format = a._format()
		})
	},
	_format : function() {
		var a = this;
		return function(b) {
			if (b == null) {
				return ""
			}
			if (!T.lang.isNumber(b)) {
				return b
			}
			if (T.lang.isString(this.type)) {
				switch (this.type) {
				case "number":
					return T.i18n.number.format(b, T.i18n.currentLocale);
				case "ratio":
					return T.i18n.number.format(b, T.i18n.currentLocale) + "%";
				case "time":
					return T.i18n.number.formatTime(b);
				case "time2":
					return T.i18n.number.formatTime(b, 2)
				}
			}
			return b
		}
	},
	map : function(a) {
		var b = this;
		return T.array.map(a, function(c) {
			return T.array.find(b.options.indicators, function(d) {
				return c == d.id
			})
		})
	},
	index : function(a) {
		return T.array.find(this.options.indexes, function(b) {
			return a == b.id
		})
	},
	group : function(b) {
		var a = [];
		T.array.each(this.options.groups, function(c) {
			a.push(T.array.filter(b, function(d) {
				return d && d.group == c
			}))
		});
		return a
	}
});
T.ui.Layer = T
		.createUI({
			_type : "layer",
			options : {
				containerId : null,
				handlerSelector : null,
				type : "mouseover",
				autoClose : true,
				relatedOther : false,
				relatedPosition : "br",
				closeButton : false,
				mouseoverTime : 500,
				mouseoutTime : 500,
				className : "",
				offset : {
					left : 0,
					top : 0
				},
				onchange : function(a) {
				},
				containerTemplate : '<div id="#{0}" class="layer shared-layer #{2}" style="display:none;position:absolute;">#{1}<div id="#{0}Content" class="layer-content"></div></div>',
				closeTemplate : '<div class="layer-close">X</div>'
			},
			_containerId : null,
			_handlerSelector : null,
			_init : function() {
				this._containerId = this.options.containerId;
				this._handlerSelector = this.options.handlerSelector
			},
			_show : function(a) {
				this.options.onchange(a);
				T.show(this._containerId);
				T.setRelatedPosition(this._containerId, a,
						this.options.relatedPosition, this.options.offset)
			},
			_bindClick : function() {
				var a = this;
				T.event.ons(T.dom.query(a._handlerSelector), "click",
						function() {
							a.options.onchange(this);
							if (!a.options.relatedOther) {
								T.setRelatedPosition(a._containerId, this,
										a.options.relatedPosition,
										a.options.offset)
							}
						})
			},
			_bindMouseOver : function() {
				var a = null;
				var b = this;
				if (T.g(b._containerId) == null) {
					b._render();
					T.on(b._containerId, "mouseover", function() {
						clearTimeout(a)
					});
					if (this.options.autoClose) {
						T.on(b._containerId, "mouseout", function() {
							a = setTimeout(function() {
								b.close()
							}, b.options.mouseoutTime)
						})
					}
				}
				T.event.ons(T.dom.query(b._handlerSelector), "mouseover",
						function() {
							var c = this;
							clearTimeout(a);
							if (b.options.mouseoverTime > 0) {
								a = setTimeout(function() {
									b._show(c)
								}, b.options.mouseoverTime)
							} else {
								b._show(c)
							}
						});
				if (this.options.autoClose) {
					T.event.ons(T.dom.query(b._handlerSelector), "mouseout",
							function() {
								clearTimeout(a);
								a = setTimeout(function() {
									b.close()
								}, b.options.mouseoutTime)
							})
				}
			},
			_bindEvent : function() {
				var a = this.options.type;
				var b = this;
				if (a == "click") {
					if (T.g(b._containerId) == null) {
						b._render()
					}
					this._bindClick()
				} else {
					if (a == "mouseover") {
						this._bindMouseOver()
					} else {
						if (a == "mouseover&click" || a == "click&mouseover") {
							this._bindMouseOver();
							this._bindClick()
						}
					}
				}
				if (this.options.closeButton) {
					T.event.ons(T.q("layer-close", this._containerId), "click",
							function() {
								b.close()
							})
				}
			},
			_render : function() {
				T.dom.insertHTML(document.body, "beforeend", T.format(
						this.options.containerTemplate, this._containerId,
						this.options.closeButton ? this.options.closeTemplate
								: "", this.options.className))
			},
			render : function() {
				this._bindEvent()
			},
			content : function(b, a) {
				T.g(this._containerId + "Content").innerHTML = b;
				if (a) {
					T.setRelatedPosition(this._containerId, a,
							this.options.relatedPosition, this.options.offset)
				}
			},
			setPosition : function(a) {
				T.setRelatedPosition(this._containerId, a,
						this.options.relatedPosition, this.options.offset)
			},
			close : function() {
				T.hide(this._containerId)
			}
		});
T.ui.Mask = T.createUI({
	options : {
		containerId : "GlobalModalLayer",
		zIndex : 99998
	},
	_type : "mask",
	_init : function() {
	},
	render : function() {
		var a = T.g(this.options.containerId);
		if (!a) {
			a = T.dom.create("div", {
				id : this.options.containerId,
				className : "mask-layer"
			});
			document.body.appendChild(a)
		}
		this._show();
		if (T.browser.ie && T.browser.ie < 7) {
			T.dom.addClass(document.body, "body-masked")
		}
		this.bind()
	},
	bind : function() {
		var a = this;
		this.on(window, "resize", function(b) {
			a._show()
		})
	},
	_show : function(a) {
		var b = T.g(this.options.containerId), a = a || {};
		T.dom.setStyles(b, {
			left : 0,
			top : 0,
			position : "absolute",
			width : a.width || T.page.getWidth(),
			height : a.height || T.page.getHeight(),
			"z-index" : this.options.zIndex
		})
	},
	show : function() {
		this.render()
	},
	_hide : function() {
		var a = T.g(this.options.containerId);
		T.setStyles(a, {
			left : -30,
			top : -30,
			position : "absolute",
			width : 1,
			height : 1,
			overflow : "hidden"
		})
	},
	hide : function() {
		var a = T.g(this.options.containerId);
		if (a) {
			this._hide(a)
		}
		this.dispose();
		if (T.browser.ie && T.browser.ie < 7) {
			T.dom.removeClass(document.body, "body-masked")
		}
	}
});
T.ui.Operations = T
		.createUI({
			options : {
				template : '<div id="Operations" class="operations-panel layer shared-layer" style="display:none"><div class="tip-arrow"></div><div class="tip-content"><ul id="OperationItems"></ul></div></div>',
				itemTemplate : '<li><a target="#{3}" data="#{2}" class="#{2}" href="#{0}" layer="##{2}Layer">#{1}</a></li>',
				loadingTemplate : '<div class="loading">æ­£åœ¨åŠ è½½ï¼Œè¯·ç¨å€™â€¦â€¦</div>'
			},
			_allOperations : {
				history : {
					label : "æŸ¥çœ‹åŽ†å²è¶‹åŠ¿",
					target : "_blank",
					hrefTemplate : "#{baseUri}/trend/history?#{query}"
				},
				speed : {
					label : "å¯¹è¯¥URLè¿›è¡Œé€Ÿåº¦è¯Šæ–­",
					target : "_blank",
					hrefTemplate : "#{baseUri}/opt/speed?#{query}"
				},
				area : {
					label : "æŸ¥çœ‹æŒ‰åœ°åŸŸåˆ†å¸ƒæƒ…å†µ",
					target : "_blank",
					hrefTemplate : "#{baseUri}/pro/conn?viewType=area&flag=area&#{query}"
				},
				isp : {
					label : "æŸ¥çœ‹æŒ‰ç½‘ç»œä¾›åº”å•†åˆ†å¸ƒæƒ…å†µ",
					target : "_blank",
					hrefTemplate : "#{baseUri}/pro/conn?viewType=isp&flag=isp&#{query}"
				},
				word : {
					label : "æŸ¥çœ‹ç›¸å…³çƒ­é—¨æœç´¢è¯",
					hrefTemplate : "javascript:void(0);",
					render : function(d, b) {
						var a = [ "<tr><th class='order'>åºå·</th><th>æœç´¢è¯</th><th>çƒ­é—¨ç¨‹åº¦</th></tr>" ];
						for ( var c = 0; c < b.length; c++) {
							b[c].order = c + 1;
							a
									.push(T
											.format(
													"<tr><td class='order'>#{order}</td><td><div class='word'><a href='http://www.baidu.com/s?wd=#{gbkWord}' title='!{word}' target='_blank'>!{word}</a></div></td><td><div class='ratio' style='width:#{frequence}%'></div></td></tr>",
													b[c]))
						}
						if (b.length == 0) {
							a
									.push("<tr><td class='empty' colspan='3'>æš‚æ— æ•°æ®</td></tr>")
						}
						return T
								.format(
										"<div class='title'>æŸ¥çœ‹ä¸Ž<span class='red'>&nbsp;&nbsp;!{0,30}&nbsp;&nbsp;</span>ç›¸å…³çš„çƒ­é—¨æœç´¢è¯</div><table>#{1}</table>",
										d, a.join(""))
					}
				},
				referer : {
					label : "æŸ¥çœ‹å…¥å£é¡µé“¾æŽ¥",
					hrefTemplate : "javascript:void(0);",
					render : function(d, b) {
						var a = [ "<tr><th class='order'>æŽ’å</th><th>å…¥å£é¡µé“¾æŽ¥<th></tr>" ];
						for ( var c = 0; c < b.length; c++) {
							a
									.push(T
											.format(
													"<tr><td class='order'>#{0}</td><td><div class='link'><a href='!{1}' title='!{1}' target='_blank'>!{1}</a></div></td></tr>",
													c + 1, b[c]))
						}
						if (b.length == 0) {
							a
									.push("<tr><td class='empty' colspan='2'>æš‚æ— æ•°æ®</td></tr>")
						}
						return T
								.format(
										"<div class='title'>æŸ¥çœ‹ä»¥<span class='red'>&nbsp;&nbsp;!{0,30}&nbsp;&nbsp;</span>ä¸ºæ¥æºçš„å…¥å£é¡µé¢</div><table>#{1}</table>",
										d, a.join(""))
					}
				},
				record : {
					label : "æŸ¥çœ‹ç«™ç‚¹ç´¢å¼•æƒ…å†µ",
					target : "_blank",
					hrefTemplate : "#{source_engine_url}!{site_domain}"
				},
				index : {
					label : "æŸ¥çœ‹ç™¾åº¦æŒ‡æ•°",
					target : "_blank",
					hrefTemplate : "http://index.baidu.com/main/word.php?word=#{word}"
				},
				engine : {
					label : "æŸ¥çœ‹æœç´¢æ¥è·¯URL",
					hrefTemplate : "javascript:void(0);",
					render : function(d, b) {
						var a = [ "<tr><th class='order'>æ¬¡æ•°</th><th>æœç´¢é“¾æŽ¥</th><th>ç¬¬å‡ é¡µ</th></tr>" ];
						for ( var c = 0; c < b.length; c++) {
							b[c].order = c + 1;
							a
									.push(T
											.format(
													"<tr><td class='order'>#{count}</td><td><div class='link'><a href='!{url}' title='!{url}' target='_blank'>!{url}</a></link></td><td>#{page}</td></tr>",
													b[c]))
						}
						if (b.length == 0) {
							a
									.push("<tr><td class='empty' colspan='3'>æš‚æ— æ•°æ®</td></tr>")
						}
						return T
								.format(
										"<div class='title'>æŸ¥çœ‹<span class='red'>&nbsp;&nbsp;!{0,30}&nbsp;&nbsp;</span>çš„æœç´¢æ¥è·¯URL</div><table>#{1}</table>",
										d, a.join(""))
					}
				}
			},
			_type : "operations",
			_data : null,
			_contentType : null,
			_element : null,
			_renderItems : function(c, f) {
				var e = [];
				this._data = f;
				for ( var d = 0; d < c.length; d++) {
					var b = c[d];
					b.siteId = T.config.siteInfo.id;
					var g = {
						webRoot : T.config.systemConfig.webRoot,
						baseUri : T.config.systemConfig.baseUri,
						source_engine_url : b.source_engine_url,
						userId : T.config.userInfo.id,
						query : T.param(b)
					};
					if (b.id == "index") {
						g.word = b.word
					}
					if (b.id == "record") {
						if (g.source_engine_url == "www.baidu.com/s?wd=") {
							g.site_domain = "";
							g.source_engine_url = T.config.systemConfig.baseUri
									+ "/opt/indexes?siteId="
									+ T.config.siteInfo.id
						} else {
							g.site_domain = "site:" + T.config.siteInfo.name;
							g.source_engine_url = "http://"
									+ g.source_engine_url
						}
					}
					var a = T.format(this._allOperations[b.id].hrefTemplate, g);
					e.push(T.format(this.options.itemTemplate, a,
							this._allOperations[b.id].label, b.id,
							this._allOperations[b.id].target || ""))
				}
				return e.join("")
			},
			_bindEvents : function(b) {
				var d = this;
				for ( var c = 0; c < b.length; c++) {
					var a = b[c];
					if (!this[a.id]
							&& this._allOperations[a.id].target != "_blank") {
						(function(e) {
							d[e] = new T.ui.Layer({
								containerId : e + "Layer",
								type : "click",
								closeButton : true,
								relatedOther : true,
								className : e + "-layer",
								handlerSelector : "#Operations ." + e,
								onchange : function(f) {
									d._contentType = e;
									d[e].setPosition(d._element);
									d.loading();
									d.options.onchange(d._contentType, d._data)
								}
							})
						})(a.id)
					}
					if (this._allOperations[a.id].target != "_blank") {
						this[a.id].render()
					}
				}
			},
			show : function(b, a, c) {
				this._element = b;
				if (!T.g("Operations")) {
					T.insertHTML(document.body, "beforeEnd",
							this.options.template)
				}
				T.dom.empty("OperationItems");
				T.dom.insertHTML("OperationItems", "beforeEnd", this
						._renderItems(a, c));
				T.dom.setPosition("Operations", T.getCornerPosition(b, "br"));
				this._bindEvents(a)
			},
			content : function(b, a) {
				this[this._contentType]
						.content(this._allOperations[this._contentType].render(
								b, a))
			},
			loading : function() {
				T.hide("Operations");
				this[this._contentType].content(this.options.loadingTemplate)
			}
		});
T.ui.Paging = T
		.createUI({
			options : {
				containerId : null,
				onchange : function(a) {
				},
				offset : 0,
				pageSize : 20,
				pageSizeRange : [ 20, 50, 100 ],
				pageSizeSelectText : "æ¯é¡µæ˜¾ç¤ºï¼š",
				fuzzy : false,
				withoutGoto : false,
				round : 2,
				previousTemplate : '<a href="javascript:void(0);" class="previous" data="#{0}">&lt;ä¸Šä¸€é¡µ</a>',
				pageNumberTemplate : '<a class="number#{0}" href="javascript:void(0);" data="#{1}">#{1}</a>',
				moreTemplate : "...",
				nextTemplate : '<a href="javascript:void(0);" class="next" data="#{0}">ä¸‹ä¸€é¡µ&gt;</a>',
				pagingWrapperTemplate : '<div class="paging clearfix">#{0}</div>',
				pageNumberWrapperTemplate : '<div class="page-number">#{0}#{1}</div>',
				gotoTemplate : 'ç¬¬<input class="text" type="text"/>é¡µ <a href="javascript:void(0)" class="button"><span>ç¡®å®š</span></a>',
				pageSizeWrapperTemplate : '<div class="page-size">#{0}#{1}</div>',
				pageSizeSelectTemplate : "<select>#{0}</select>",
				pageSizeOptionTemplate : '<option value="#{0}"#{1}>#{0}</option>'
			},
			_type : "paging",
			_total : 0,
			_offset : 0,
			_pageSize : 0,
			_fuzzy : false,
			_pageCount : 0,
			_currentPage : 0,
			_init : function() {
				this._offset = this.options.offset;
				this._pageSize = this.options.pageSize;
				this._fuzzy = this.options.fuzzy
			},
			_computeParams : function() {
				this._pageCount = Math.ceil(this._total / this._pageSize);
				if (this._pageCount == 0) {
					this._pageCount = 1
				}
				this._currentPage = this._offset / this._pageSize + 1
			},
			_computePageRange : function(b, c, a) {
				var e = c - a;
				var d = c + a;
				if (e < 1) {
					e = 1;
					d = Math.min(2 * a + 1, b)
				}
				if (d > b) {
					d = b;
					e = Math.max(b - 2 * a, 1)
				}
				return {
					from : e,
					to : d
				}
			},
			_renderPageSize : function() {
				if (!T.lang.isArray(this.options.pageSizeRange)
						|| this.options.pageSizeRange.length == 0) {
					return ""
				}
				if (this._total <= this.options.pageSizeRange[0]) {
					return ""
				}
				var c = "";
				for ( var b in this.options.pageSizeRange) {
					var a = this.options.pageSizeRange[b];
					c += T.format(this.options.pageSizeOptionTemplate, a,
							a == this._pageSize ? ' selected="selected"' : "")
				}
				return T.format(this.options.pageSizeWrapperTemplate,
						this.options.pageSizeSelectText, T.format(
								this.options.pageSizeSelectTemplate, c))
			},
			_renderPaging : function() {
				if (this._pageCount <= 1) {
					return ""
				}
				var c = "";
				if (this._currentPage > 1) {
					c += T.format(this.options.previousTemplate,
							this._currentPage - 1)
				}
				var b = this._computePageRange(this._pageCount,
						this._currentPage, this.options.round);
				if (!this._fuzzy) {
					if (b.from > 1) {
						c += T.format(this.options.pageNumberTemplate, "", 1)
								+ this.options.moreTemplate
					}
					for ( var a = b.from; a <= b.to; a++) {
						c += T.format(this.options.pageNumberTemplate,
								this._currentPage == a ? " selected" : "", a)
					}
					if (b.to < this._pageCount) {
						c += this.options.moreTemplate
								+ T.format(this.options.pageNumberTemplate, "",
										this._pageCount)
					}
				}
				if (this._currentPage < this._pageCount) {
					c += T.format(this.options.nextTemplate,
							this._currentPage + 1)
				}
				return T.format(this.options.pageNumberWrapperTemplate, c,
						this._fuzzy || this.options.withoutGoto ? ""
								: this.options.gotoTemplate)
			},
			_changePage : function(c) {
				var d = T.event.get(c).target;
				var b = T.getAttr(d, "data");
				if (b == null) {
					return
				}
				var a = parseInt(b, 10);
				var e = (a - 1) * this._pageSize;
				this._offset = e;
				this._currentPage = a;
				this.options.onchange({
					offset : this._offset,
					currentPage : this._currentPage,
					pageSize : this._pageSize,
					paging : this
				})
			},
			_gotoPage : function(b) {
				var c = T.q("text", this.options.containerId)[0];
				var a = parseInt(T.trim(c.value), 10);
				if (isNaN(a) || a > this._pageCount || a == this._currentPage
						|| a < 1) {
					return
				}
				var d = (a - 1) * this._pageSize;
				this._offset = d;
				this._currentPage = a;
				this.options.onchange({
					offset : this._offset,
					currentPage : this._currentPage,
					pageSize : this._pageSize,
					paging : this
				})
			},
			_changePageSize : function(a) {
				var b = T.event.get(a).target;
				this._pageSize = parseInt(b.value, 10);
				this._offset = 0;
				this._computeParams();
				this.options.onchange({
					offset : this._offset,
					currentPage : this._currentPage,
					pageSize : this._pageSize,
					paging : this
				})
			},
			_bindEvent : function() {
				T.event.ons(T.q("page-number", this.options.containerId),
						"click", T.fn.bind(this._changePage, this));
				T.event.ons(T.q("button", this.options.containerId), "click",
						T.fn.bind(this._gotoPage, this));
				T.event.ons(T.dom.query("#" + this.options.containerId
						+ " div.page-size select"), "change", T.fn.bind(
						this._changePageSize, this))
			},
			clear : function() {
				T.dom.empty(this.options.containerId)
			},
			render : function(c, d, b) {
				if (!T.g(this.options.containerId)) {
					return
				}
				if (c != null) {
					this._total = c
				}
				if (d != null) {
					this._offset = d
				}
				if (b != null) {
					this._fuzzy = b
				}
				if (c != null || d != null) {
					this._computeParams()
				}
				T.dom.empty(this.options.containerId);
				var a = this._renderPageSize() + this._renderPaging();
				if (a != null && a.length > 0) {
					T.insertHTML(this.options.containerId, "beforeend", T
							.format(this.options.pagingWrapperTemplate, a));
					this._bindEvent()
				}
			}
		});
T.RecordTarget = T.createClass({
	_type : "record-target",
	options : {
		sign : "recordable",
		recordUri : null,
		memo : null,
		onchange : function(a) {
		}
	},
	_memo : null,
	_init : function() {
		this.options.recordUri = this.options.recordUri
				|| T.config.systemConfig.memoUri;
		this._memo = T.object.clone(this.options.memo || {});
		T.on(document.body, "mousedown", T.fn.bind(this.reordHandler, this))
	},
	reordHandler : function(f) {
		var h = T.event.getTarget(f);
		if (!(h[this.options.sign] || T.dom.hasClass(h, this.options.sign))) {
			return
		}
		var c = h.id || "", b = T.getAttr(h, "memo"), d, e;
		if (b) {
			memoObj = T.json.parse(b);
			if (memoObj.hasOwnProperty("id")) {
				c = memoObj.id
			}
			if (memoObj.hasOwnProperty("type")) {
				d = memoObj.type
			}
			if (memoObj.hasOwnProperty("global")) {
				e = memoObj.global
			}
		}
		var g = {
			elementId : c,
			type : d || ""
		};
		if (!e) {
			T.extend(g, {
				appId : T.config.appInfo.id,
				pageId : T.config.pageInfo.id
			})
		}
		var a;
		if (this._memo.hasOwnProperty(c)) {
			if (this._memo[c]) {
				a = 0
			} else {
				a = 1
			}
		} else {
			if (T.dom.hasClass(h, "close")) {
				a = 1
			} else {
				if (T.dom.hasClass(h, "open")) {
					a = 0
				}
			}
		}
		this._memo[c] = a;
		g.status = a;
		this.options.onchange(g);
		this.postData(g)
	},
	postData : function(b) {
		var a = (new Date()).getTime();
		var c = window["bd_holmes" + a] = new Image();
		c.src = this.options.recordUri + "?r=" + a + "&"
				+ T.url.jsonToQuery(b, function(e, d) {
					return encodeURIComponent(e)
				});
		c.onload = c.onerror = function() {
			c = null
		}
	}
});
T.ui.SelectGroup = T
		.createUI({
			_type : "select_group",
			options : {
				containerId : null,
				label : "",
				items : [],
				selectedItems : [],
				separator : "",
				shortcuts : true,
				wrapperTemplate : '<span id="#{1}_container">#{0}<select id="#{1}" level="#{3}">#{2}</select></span>',
				optionTemplate : '<option value="!{0}"#{2}>!{1}</option>',
				onchange : function(a) {
				}
			},
			_showLevel : 1,
			_values : [],
			_getData : function(e, g, b, f) {
				if (f > b) {
					return null
				}
				for ( var c in e) {
					var d = e[c];
					if (b == f && d.id == g) {
						return d
					} else {
						var a = this._getData(d.children, g, b, f + 1);
						if (a != null) {
							return a
						}
					}
				}
				return null
			},
			_select : function(e, d) {
				var b = this._getData(this.items, e, d, 1);
				if (b == null) {
					return
				}
				var c = d + 1;
				for ( var a = c; a <= this._showLevel; a++) {
					T.dom.remove(this.getId() + "_" + a + "_container")
				}
				this._values.splice(d - 1, this._values.length - d + 1);
				this._values[d - 1] = e;
				if (b && b.children && b.children.length > 0) {
					this._showLevel = c;
					this._values[d] = b.children[0].id;
					this._render(b.children, d)
				} else {
					this._showLevel = d
				}
			},
			_getLabels : function(d) {
				var e = [];
				var a = this.items;
				for ( var c = 0; c < d.length; c++) {
					if (a == null || a.length == 0) {
						break
					}
					for ( var b in a) {
						if (d[c] == a[b].id) {
							e.push(a[b].label);
							a = a[b].children;
							break
						}
					}
				}
				return e
			},
			_change : function(b, a) {
				this._select(b, a);
				if (this._values.length == 1
						&& this._values[0] == this.items[0].id) {
					this.options.onchange(T.object.clone(this._values), [])
				} else {
					this.options.onchange(T.object.clone(this._values), this
							._getLabels(this._values))
				}
			},
			_render : function(a, g) {
				if (a) {
					var e = "";
					for ( var c in a) {
						var f = a[c];
						e += T
								.format(
										this.options.optionTemplate,
										f.id,
										f.label,
										f.id == this.options.selectedItems[g || 0] ? ' selected="selected"'
												: "")
					}
					var b = this.getId() + "_" + this._showLevel;
					if (T.g(this.getId("search_shotcuts_container"))) {
						T
								.insertHTML(
										this.getId("search_shotcuts_container"),
										"beforeBegin",
										T
												.format(
														this.options.wrapperTemplate,
														(this._showLevel == 1 ? '<label class="label">'
																+ this.options.label
																+ "</label>"
																: this.options.separator),
														b, e, this._showLevel))
					} else {
						T
								.insertHTML(
										this.options.containerId,
										"beforeEnd",
										T
												.format(
														this.options.wrapperTemplate,
														(this._showLevel == 1 ? '<label class="label">'
																+ this.options.label
																+ "</label>"
																: this.options.separator),
														b, e, this._showLevel))
					}
					var d = this;
					T.on(b, "change", function() {
						d._change(this.value,
								parseInt(T.getAttr(this, "level")))
					})
				}
			},
			_getShortcuts : function(a, d) {
				for ( var b in a) {
					var c = a[b];
					if (c.shortcut) {
						if (d == null) {
							c.allId = c.id
						} else {
							c.allId = "" + d + "," + c.id
						}
						this._shortcuts.push(c)
					}
					if (c.children && c.children.length > 0) {
						if (d == null) {
							this._getShortcuts(c.children, c.id)
						} else {
							this._getShortcuts(c.children, "" + d + "," + c.id)
						}
					}
				}
			},
			_rendShortcuts : function() {
				this._getShortcuts(this.items);
				if (this._shortcuts.length == 0) {
					return
				}
				var b = "";
				for ( var c in this._shortcuts) {
					var a = this._shortcuts[c];
					b += T
							.format(
									'<a href="javascript:void(0)" id="#{0}" data="#{1}">#{2}</a>',
									this.getId("search_shotcuts_" + a.id),
									a.allId, a.label)
				}
				T
						.insertHTML(
								this.options.containerId,
								"beforeEnd",
								T
										.format(
												'<span id="#{0}" class="search-shotcuts-container">#{1}</span>',
												this
														.getId("search_shotcuts_container"),
												b));
				var d = this;
				for ( var c in this._shortcuts) {
					var a = this._shortcuts[c];
					T.on(this.getId("search_shotcuts_" + a.id), "click",
							function() {
								d.options.onchange([ T.getAttr(this, "data") ],
										[ this.innerHTML ])
							})
				}
			},
			_renderStyles : function(b) {
				var f, e, d = T.g(this.getId() + "_" + this._showLevel);
				for ( var c = 0, a = b.length; c < a; c++) {
					f = b[c].style || false;
					if (f) {
						e = T.dom.query("option[value=" + b[c].id + "]", d);
						T.element(e).each(function(g) {
							T.dom.setStyles(g, f)
						})
					}
				}
			},
			render : function(a) {
				if (!T.g(this.options.containerId)) {
					return
				}
				if (a) {
					this.items = a;
					T.dom.empty(this.options.containerId)
				}
				this._render(this.items);
				if (this.options.shortcuts) {
					this._shortcuts = [];
					this._rendShortcuts()
				}
				if (this.options.selectedItems) {
					for ( var b = 0; b < this.options.selectedItems.length; b++) {
						var c = this.options.selectedItems[b];
						this._select(c, b + 1)
					}
				}
				this._renderStyles(this.items)
			},
			disable : function() {
				for ( var a = 1; a <= this._showLevel; a++) {
					T.g(this.getId() + "_" + a).disabled = true
				}
			},
			enable : function() {
				for ( var a = 1; a <= this._showLevel; a++) {
					T.g(this.getId() + "_" + a).disabled = false
				}
			},
			select : function(a) {
				T.g(this.getId() + "_" + this._showLevel).value = a
			},
			getGroupId : function(a) {
				return this.getId() + "_" + a
			},
			reset : function() {
				this._select(this.items[0].id, 1);
				this.select(this.items[0].id);
				this.options.onchange([], [])
			},
			getSelectedLabels : function() {
				return this._getLabels(this._values)
			}
		});
var SelectTimeGroup = function(k, j, i) {
	var h = this;
	h.st = k;
	h.et = j;
	var i = i || 6;
	var e = T.g("Hour");
	var b = T.g("Day");
	var d = T.g("FlashMonth");
	var c = T.g("FlashWeek");
	var a = T.g("FlashDay");
	var g = function() {
		if (b.checked) {
			a.disabled = false;
			if ((h.et - h.st) > (1000 * 3600 * 24 * 7)) {
				c.disabled = false;
				if ((h.et - h.st) > (1000 * 3600 * 24 * 31)) {
					d.disabled = false
				} else {
					d.disabled = true
				}
			} else {
				c.disabled = true;
				d.disabled = true
			}
		} else {
			c.disabled = true;
			d.disabled = true;
			a.disabled = true
		}
	};
	h.onchange = function() {
	};
	h.setGran = function(l, n, m) {
		h.st = l;
		h.et = n;
		switch (m) {
		case 6:
			e.checked = true;
			break;
		case 5:
			b.checked = true;
			a.checked = true;
			break;
		case 4:
			b.checked = true;
			c.checked = true;
			break;
		case 3:
			b.checked = true;
			d.checked = true;
			break;
		default:
			e.checked = true
		}
		g();
		h.onchange(m)
	};
	var f = function() {
		h.setGran(h.st, h.et, i)
	};
	f();
	T.each(T.dom.query(".time-select input"), function(l) {
		T.on(l, "click", function(o) {
			g();
			var n = T.dom.query(".first-gran input:checked")[0];
			if (n == T.g("Hour")) {
				h.onchange(6)
			} else {
				var m = T.dom.query(".second-gran input:checked")[0];
				if (m == T.g("FlashMonth")) {
					h.onchange(3)
				} else {
					if (m == T.g("FlashWeek")) {
						h.onchange(4)
					} else {
						if (m == T.g("FlashDay")) {
							h.onchange(5)
						}
					}
				}
			}
		})
	})
};
T.ShortDate = T.createClass({
	options : {
		containerId : "DateSelectBar",
		onchange : function() {
		}
	},
	_init : function() {
		var a = T.g(this.options.containerId).getElementsByTagName("A");
		for ( var b = 0, c = a.length; b < c; b++) {
			T.on(a[b], "click", this._selectHandler())
		}
	},
	_selectHandler : function() {
		var a = this;
		return function(d) {
			T.event.preventDefault(d);
			var g = this.href.lastIndexOf("#") + 1;
			var b = parseInt(this.href.substring(g), 10);
			if (b != 0) {
				var c = (b == -1) ? -1 : b;
				var f = (b == -1) ? -1 : 0;
				var b = b - 1;
				a.options.onchange([ a._recentDate(c), a._recentDate(f) ])
			} else {
				a.options.onchange([ T.config.systemConfig.now,
						+T.config.systemConfig.now ])
			}
			a.removeClass();
			this.className = "cur"
		}
	},
	removeClass : function() {
		var a = T.g(this.options.containerId).getElementsByTagName("A");
		for ( var b = 0, c = a.length; b < c; b++) {
			T.removeClass(a[b], "cur")
		}
	},
	_dateDiff : function(b, a) {
		return parseInt(Math.abs(b - a) / 1000 / 60 / 60 / 24)
	},
	_recentDate : function(a) {
		return parseInt(T.config.systemConfig.now, 10) + a * 3600 * 24 * 1000
	},
	showDateTip : function(c, g) {
		var b = baidu.G("Date");
		var f = baidu.date.format;
		var a = f(new Date(c), "yyyy/MM/dd");
		var e = f(new Date(g), "yyyy/MM/dd");
		var d = (a == e) ? a : (a + "~" + e);
		if (b) {
			b.innerHTML = "(" + d + ")"
		}
		T.dom.one(".report-help")
				&& (T.dom.setStyle(T.dom.one(".tip-arrow"), "left", (T.dom
						.one(".report-help").offsetLeft + 2)
						+ "px"))
	}
});
T.ui.Slide = T
		.createUI({
			options : {
				containerId : "SlidesContainer",
				sliderId : "Slider",
				controlId : "SilderBtn",
				controlTemplate : "<ul>#{0}</ul>",
				sliderTemplate : '<table cellspacing="0" cellpadding="0" border="0" id="SliderTable"><tbody><tr>#{0}</tr></tbody></table>',
				items : null,
				links : [],
				count : null,
				width : 680,
				height : 355,
				direction : "left",
				auto : false,
				change : 0,
				duration : 35,
				time : 10,
				pause : 2000,
				tween : null,
				onStart : function() {
				},
				onFinish : function() {
				}
			},
			_type : "slide",
			items : null,
			auto : null,
			_slider : null,
			_container : null,
			_sliderControl : null,
			_timer : null,
			_count : null,
			_target : null,
			_t : null,
			_b : null,
			_c : null,
			index : 0,
			_init : function() {
				this._slider = T.g(this.options.sliderId);
				this._container = T.g(this.options.containerId);
				this._sliderControl = T.g(this.options.controlId);
				this._timer = null;
				this._target = 0;
				this._t = this._b = this._c = 0;
				this.auto = this.options.auto;
				this.index = 0;
				this.options.tween = this.options.tween
						|| function(f, e, h, g) {
							return -h * ((f = f / g - 1) * f * f * f - 1) + e
						};
				var a = T.dom.getStyle(this._container, "position");
				if (!(a == "relative" || a == "absolute")) {
					this._container.style.position = "relative"
				}
				this.items = T.object.clone(this.options.items);
				this.count = this.options.count || this.items.length;
				this._container.style.overflow = "hidden";
				this._slider.style.position = "absolute"
			},
			renderHtml : function() {
				if (this._slider) {
					var c = [];
					for ( var e = 0, b = this.count; e < b; e++) {
						var f = this.options.links[e];
						var d = !f ? "<td><a href='#{3}'><img width = '#{1}' height='#{2}' src='#{0}' /></a></td>"
								: "<td><a href='#{3}' target='_blank'><img width = '#{1}' height='#{2}' src='#{0}' /></a></td>";
						c
								.push(T.format(d, this.items[e],
										this.options.width,
										this.options.height, f
												|| "javascript:void(0)"))
					}
					T.dom.empty(this._slider);
					T.dom.insertHTML(this._slider, "beforeEnd", T.format(
							this.options.sliderTemplate, c.join("")));
					var a = this.options.direction == "left" ? false : true;
					this._change = this.options.change ? this.options.change
							: this._slider[a ? "offsetHeight" : "offsetWidth"]
									/ this.count
				}
				if (this._sliderControl) {
					T.dom.empty(this._sliderControl);
					if (this.count != 1) {
						var g = [];
						for ( var e = 0, b = this.count; e < b; e++) {
							g.push("<li></li>")
						}
						T.dom.insertHTML(this._sliderControl, "beforeEnd", T
								.format(this.options.controlTemplate, g
										.join("")))
					}
				}
			},
			render : function(a) {
				this.renderHtml();
				this.bind()
			},
			bind : function() {
				if (this._sliderControl) {
					var a = this._sliderControl.getElementsByTagName("li");
					var b = this;
					T.array.each(a, function(d, c) {
						T.on(d, "mouseover", function(e) {
							d.className = "on";
							b.auto = false;
							b.run(c)
						});
						T.event.on(d, "mouseout", function(e) {
							d.className = "";
							b.auto = true;
							b.run()
						})
					})
				}
			},
			run : function(a) {
				if (a == this.count) {
					if (this.options.direction == "left") {
						if (T.g("SliderTable")) {
							var e = T.g("SliderTable").rows[0];
							e.appendChild(e.children[0].cloneNode(true))
						}
					} else {
						var d = baidu.g("users_logos");
						if (d) {
							for ( var c = 0; c < 5; c++) {
								var b = d.children[c].cloneNode(true);
								d.appendChild(b)
							}
						}
					}
				}
				if (a == undefined) {
					a = this.index
				} else {
					if (a < 0) {
						a = this.count - 1
					} else {
						if (a > this.count) {
							a = 0
						}
					}
				}
				this.index = a;
				this._target = -Math.abs(this._change) * this.index;
				this._t = 0;
				this._b = parseInt(T.dom.getStyle(this._slider,
						this.options.direction));
				this._c = this._target - this._b;
				this.start();
				this.move()
			},
			start : function() {
				var c = this;
				var c = this;
				var a = T.g(this.options.controlId);
				if (a) {
					var b = a.getElementsByTagName("li");
					T.array.each(b, function(e, d) {
						e.className = c.index % c.count == d ? "on" : ""
					})
				}
				this.options.onStart.call(this)
			},
			move : function() {
				clearTimeout(this._timer);
				if (this._c && this._t < this.options.duration) {
					this.moveTo(Math.round(this.options.tween(this._t++,
							this._b, this._c, this.options.duration)));
					this._timer = setTimeout(baidu.fn.bind(this.move, this),
							this.options.time)
				} else {
					if (this.index == this.count) {
						this.moveTo(0);
						if (this.options.direction == "left") {
							if (T.g("SliderTable")) {
								var c = baidu.g("SliderTable").rows[0];
								c.removeChild(c.children[c.cells.length - 1])
							}
						} else {
							var b = baidu.g("users_logos");
							if (b) {
								for ( var a = 0; a < 5; a++) {
									var d = b.children[b.children.length - 1];
									b.removeChild(d)
								}
							}
						}
					} else {
						this.moveTo(this._target)
					}
					if (this.auto) {
						this._timer = setTimeout(T.fn.bind(this.next, this),
								this.options.pause)
					}
				}
			},
			moveTo : function(a) {
				T.setStyle(this._slider, this.options.direction, a + "px")
			},
			next : function() {
				this.run(++this.index)
			},
			previous : function() {
				this.run(--this.index)
			},
			stop : function() {
				clearTimeout(this._timer);
				this.options.onFinish.call(this);
				this.moveTo(this._target)
			}
		});
(function() {
	T.SlideTrans = T.createClass({
		initialize : function(d, h, g, e, f) {
			this._slider = baidu.g(h);
			this._container = baidu.g(d);
			this._timer = null;
			this._count = Math.abs(g);
			this._target = 0;
			this._t = this._b = this._c = 0;
			this._size = f || 8;
			this.Index = 0;
			this.SetOptions(e);
			this.Auto = !!this.options.Auto;
			this.Duration = Math.abs(this.options.Duration);
			this.Time = Math.abs(this.options.Time);
			this.Pause = Math.abs(this.options.Pause);
			this.Tween = this.options.Tween;
			this.onStart = this.options.onStart;
			this.onFinish = this.options.onFinish;
			var c = !!this.options.Vertical;
			this._css = c ? "top" : "left";
			var i = a(this._container).position;
			i == "relative" || i == "absolute"
					|| (this._container.style.position = "relative");
			this._container.style.overflow = "hidden";
			this._slider.style.position = "absolute";
			this.Change = this.options.Change ? this.options.Change
					: this._slider[c ? "offsetHeight" : "offsetWidth"]
							/ this._count
		},
		SetOptions : function(c) {
			this.options = {
				Vertical : true,
				Auto : true,
				Change : 0,
				Duration : 50,
				Time : 10,
				Pause : 4000,
				onStart : function() {
				},
				onFinish : function() {
				},
				Tween : b.Quart.easeOut
			};
			T.extend(this.options, c || {})
		},
		Run : function(c) {
			if (c == this._count) {
				if (this._css == "left") {
					var g = baidu.g("SliderTable").rows[0];
					g.appendChild(g.children[0].cloneNode(true))
				} else {
					var f = baidu.g("users_logos");
					for ( var e = 0; e < this._size; e++) {
						var d = f.children[e].cloneNode(true);
						f.appendChild(d)
					}
				}
			}
			c == undefined && (c = this.Index);
			c < 0 && (c = this._count - 1) || c > this._count && (c = 0);
			this._target = -Math.abs(this.Change) * (this.Index = c);
			this._t = 0;
			this._b = parseInt(a(this._slider)[this.options.Vertical ? "top"
					: "left"]);
			this._c = this._target - this._b;
			this.onStart();
			this.Move()
		},
		Move : function() {
			clearTimeout(this._timer);
			if (this._c && this._t < this.Duration) {
				this.MoveTo(Math.round(this.Tween(this._t++, this._b, this._c,
						this.Duration)));
				this._timer = setTimeout(baidu.fn.bind(this.Move, this),
						this.Time)
			} else {
				if (this.Index == this._count) {
					this.MoveTo(0);
					if (this._css == "left") {
						var e = baidu.g("SliderTable").rows[0];
						e.removeChild(e.children[e.cells.length - 1])
					} else {
						var d = baidu.g("users_logos");
						for ( var c = 0; c < this._size; c++) {
							var f = d.children[d.children.length - 1];
							d.removeChild(f)
						}
					}
				} else {
					this.MoveTo(this._target)
				}
				this.Auto
						&& (this._timer = setTimeout(baidu.fn.bind(this.Next,
								this), this.Pause))
			}
		},
		MoveTo : function(c) {
			baidu.setStyle(this._slider, this._css, c + "px")
		},
		Next : function() {
			this.Run(++this.Index)
		},
		Previous : function() {
			this.Run(--this.Index)
		},
		Stop : function() {
			clearTimeout(this._timer);
			this.MoveTo(this._target)
		}
	});
	var b = {
		Quart : {
			easeOut : function(f, e, h, g) {
				return -h * ((f = f / g - 1) * f * f * f - 1) + e
			}
		}
	};
	var a = function(c) {
		return c.currentStyle || document.defaultView.getComputedStyle(c, null)
	}
})();
T.ui.Summary = T
		.createUI({
			_type : "summary",
			options : {
				containerId : null,
				tdTemplate : '<td#{last}><span class="text">#{text}#{tip}</span><br/><span class="value">#{value}</span>#{compare}</td>',
				tdTemplate2 : '<td#{last}><span class="value flag#{flag}">#{value}</span>#{compare}</td>',
				compareDataTemplate : '<br/><span class="compare-value">#{0}</span>',
				tableTemplate : '<table class="summary"><tbody><tr>#{0}</tr></tbody></table>',
				lastClass : ' class="last"',
				oncreate : function(f, p, d, l, t) {
					var s = this;
					if (l[f].id == "brand_new_user_count"
							|| l[f].id == "upgrade_user_count") {
						return false
					} else {
						if (l[f].id == "new_user_count" && l[f + 1]
								&& l[f + 1].id == "upgrade_user_count") {
							var c = l[f];
							var e = l[f + 1];
							var q = l[f + 2];
							var i = (f == l.length - 1 ? this.options.lastClass
									: "");
							var u = d[0][f];
							var n = d[0][f + 1];
							var j = d[0][f + 2];
							var h;
							var o = function(v) {
								if (!v || v == "--") {
									return 0
								}
								return parseInt(v.split(",").join(""), 10)
							};
							var b = '<td#{last}><div class="new-user-div">                                    <div class="clearfix">                                    <span class="text">#{text}#{tip}</span>                                    <span class="new-user-value" title="#{value}">#{value}</span>                                    <span class="new-user-value compare-value">#{compare}</span></div>                                    <div class="new-user-bar upgrade"><div id="brand-new-div" class="new-user-brand brand" style="width:#{brandWidth}"></div></div>                                    <div class="clearfix">                                    <span class="text">#{upgradeText}<a href="javascript:void(0)" data="#{upgradeId}" class="help">&nbsp;</a></span>                                    <span class="new-user-value" title="#{upgradeValue}">#{upgradeValue}</span>                                    <span class="new-user-value compare-value">#{upgradeCompare}</span>                                    </div><div id="brand-new-count-div" style="display:none;">                                    <span class="text">#{brandText}</span>                                    <span class="new-user-value" title="#{brandValue}">#{brandValue}</span>                                    <span class="new-user-value compare-value">#{brandCompare}</span>                                    </div>                                    </div></td>';
							var m = '<td#{last}><span class="value flag#{flag}">#{value}</span>#{compare}</td>';
							if (T.object.isPlain(u)) {
								p.push(T.format(m, {
									id : c.id,
									text : c.label,
									value : T.i18n.number.formatNumber(u.val),
									flag : u.flag,
									compare : t ? T.format(
											this.options.compareDataTemplate,
											d[1][f]) : ""
								}))
							} else {
								var a = '<a href="javascript:void(0)" data="#{id}" class="help">&nbsp;</a>';
								var g = T.array.find(
										T.config.indexInfo.indicators,
										function(v) {
											return v.id == c.id
										});
								var k = "";
								if (g && g.tip) {
									k = T.format(a, {
										id : c.id
									})
								}
								if (o(u) == 0) {
									return true
								}
								h = o(j) * 100 / o(u);
								h = h < 5 ? 5 : h;
								h = (h > 95 ? 95 : h) + "%";
								p.push(T.format(b, {
									tip : k,
									text : c.label,
									value : u,
									last : i,
									upgradeId : e.id,
									upgradeText : e.label,
									upgradeValue : n,
									brandWidth : h,
									brandText : q.label,
									brandValue : j,
									compare : t ? d[1][f] : "",
									upgradeCompare : t ? d[1][f + 1] : "",
									brandCompare : t ? d[1][f + 2] : ""
								}))
							}
							var r = T.dom.getAttr(this.options.containerId,
									"bound");
							if (!r) {
								T.event
										.on(
												T.g(this.options.containerId),
												"mouseover",
												function(x) {
													var w = T.event
															.getTarget(x);
													if (T.dom.hasClass(w,
															"new-user-brand")) {
														T.dom.removeClass(w,
																"brand");
														T.dom.addClass(w,
																"upgrade");
														T.dom.removeClass(
																w.parentNode,
																"upgrade");
														T.dom.addClass(
																w.parentNode,
																"brand");
														var v = T
																.g("brand-new-count-div");
														T.dom.show(v);
														T.dom.hide(T.dom
																.prev(v))
													}
												});
								T.event
										.on(
												T.g(this.options.containerId),
												"mouseout",
												function(x) {
													var w = T.event
															.getTarget(x);
													if (T.dom.hasClass(w,
															"new-user-brand")) {
														T.dom.removeClass(w,
																"upgrade");
														T.dom.addClass(w,
																"brand");
														T.dom.removeClass(
																w.parentNode,
																"brand");
														T.dom.addClass(
																w.parentNode,
																"upgrade");
														var v = T
																.g("brand-new-count-div");
														T.dom.show(T.dom
																.prev(v));
														T.dom.hide(v)
													}
												});
								T.dom.setAttr(this.options.containerId,
										"bound", "true")
							}
							return false
						}
					}
				}
			},
			_render : function(e, d) {
				var b = [];
				var f = (e[1] && e[1].length > 0);
				for ( var c = 0; c < d.length; c++) {
					if (typeof this.options.oncreate == "function") {
						var g = this.options.oncreate.call(this, c, b, e, d, f);
						if (g === false) {
							continue
						}
					}
					var h = d[c];
					var m = (c == d.length - 1 ? this.options.lastClass : "");
					var a = e[0][c];
					var l = '<a href="javascript:void(0)" data="#{id}" class="help">&nbsp;</a>';
					var k = T.array.find(T.config.indexInfo.indicators,
							function(i) {
								return i.id == h.id
							});
					var j = "";
					if (k && k.tip) {
						j = T.format(l, {
							id : h.id
						})
					}
					if (f) {
						if (T.object.isPlain(a)) {
							b.push(T.format(this.options.tdTemplate2, {
								id : h.id,
								text : h.label,
								value : T.i18n.number.formatNumber(a.val),
								flag : a.flag,
								compare : T.format(
										this.options.compareDataTemplate,
										e[1][c]),
								last : m
							}))
						} else {
							b.push(T.format(this.options.tdTemplate, {
								tip : j,
								text : h.label,
								value : a,
								compare : T.format(
										this.options.compareDataTemplate,
										e[1][c]),
								last : m
							}))
						}
					} else {
						if (T.object.isPlain(a)) {
							b.push(T.format(this.options.tdTemplate2, {
								id : h.id,
								text : h.label,
								value : T.i18n.number.formatNumber(a.val),
								flag : a.flag
							}))
						} else {
							b.push(T.format(this.options.tdTemplate, {
								tip : j,
								text : h.label,
								value : a,
								last : m
							}))
						}
					}
				}
				return T.format(this.options.tableTemplate, b.join(""))
			},
			render : function(b, a) {
				if (!T.g(this.options.containerId)) {
					return
				}
				T.dom.empty(this.options.containerId);
				T.insertHTML(this.options.containerId, "beforeend", this
						._render(b, a))
			}
		});
T.ui.Table = T
		.createUI({
			_type : "table",
			options : {
				containerId : null,
				showNumber : true,
				multilevel : false,
				hasOperations : false,
				onchange : function(a) {
				},
				onexpand : function(a) {
				},
				onoperate : function(a) {
				},
				loadingText : '<div class="loading">æ­£åœ¨åŠ è½½ï¼Œè¯·ç¨å€™â€¦â€¦</div>',
				noDataText : '<div class="empty">æš‚æ— æ•°æ®</div>',
				sumText : "å½“é¡µæ±‡æ€»",
				className : "table",
				thStyleFn : null,
				thTextFn : null,
				thTemplate : '<td colspan="#{colspan}" data="#{id}" class="#{className}"><div class="td-content"><label>#{label}</label>#{tip}</div></td>',
				theadTemplate : "<thead>#{0}</thead>",
				tdStyleFn : null,
				tdTextFn : null,
				tdTemplate : '<td colspan="#{colspan}" rowspan="#{rowspan}" class="#{className}" data="#{data}" id="#{id}"><div class="td-content" title="#{title}">#{label}</div></td>',
				operationTdTemplate : '<td colspan="#{colspan}" class="#{className}" id="#{id}"><div class="td-content" data="#{data}" layer="#Operations">#{label}</div></td>',
				tbodyTemplate : "<tbody>#{0}</tbody>",
				tfootTemplate : "<tfoot>#{0}</tfoot>",
				trTemplate : '<tr class="#{1}" id="#{2}">#{0}</tr>',
				tableTemplate : '<table class="#{2}">#{0}#{1}#{3}</table>',
				tipTemplate : '<tbody><tr><td colspan="#{colspan}">#{tip}</td></tr></tbody>'
			},
			_thead : null,
			_tbody : null,
			_tfoot : null,
			_group : 1,
			_sortField : null,
			_offset : null,
			_sortDir : null,
			_expandTrId : null,
			_continuous : false,
			_renderLoading : function() {
				return T.format(this.options.tableTemplate,
						this._renderThead(), this
								._renderTipBody(this.options.loadingText),
						this.options.className)
			},
			_renderTable : function() {
				if (this._tbody == null || this._tbody.length == 0) {
					return T.format(this.options.tableTemplate, this
							._renderThead(), this
							._renderTipBody(this.options.noDataText),
							this.options.className)
				} else {
					return T.format(this.options.tableTemplate, this
							._renderThead(), this._renderTbody(),
							this.options.className, this._renderTfoot())
				}
			},
			_renderThead : function() {
				var a = [];
				if (this._thead && this._thead.length > 0) {
					this._prefixTds(a, -1, false, "&nbsp;");
					for ( var b in this._thead) {
						var c = this._thead[b];
						if (c.sortable) {
							c.className += " sortable"
						}
						if (c.id == this._sortField) {
							c.className += " " + this._sortDir
						}
						if (c.tip) {
							c.tip = T
									.format(
											'<a class="help" data="#{id}" href="javascript:void(0)">&nbsp;</a>',
											c)
						}
						var d = c.colspan || 1;
						delete c.colspan;
						a.push(T.format(this.options.thTemplate, c));
						for ( var b = d - 1; b > 0; b--) {
							a.push("<td></td>")
						}
						if (b == 0 && this.options.hasOperations) {
							a.push(T.format(this.options.thTemplate, {
								className : "operateCol",
								label : "&nbsp;"
							}))
						}
					}
				} else {
					a.push(T.format(this.options.thTemplate, {
						label : "&nbsp;"
					}))
				}
				return T.format(this.options.theadTemplate, T.format(
						this.options.trTemplate, a.join("")))
			},
			_renderTipBody : function(b) {
				var c = 1;
				if (this._thead && this._thead.length > 0) {
					c = 0;
					for ( var a = this._thead.length - 1; a >= 0; a--) {
						c += this._thead[a].colspan || 1
					}
					if (this.options.showNumber) {
						c++
					}
					if (this.options.multilevel) {
						c++
					}
					if (this.options.hasOperations) {
						c++
					}
				}
				return T.format(this.options.tipTemplate, {
					colspan : c,
					tip : b
				})
			},
			_renderTbody : function() {
				var a = [];
				for ( var f = 0; f < this._tbody.length / this._group; f++) {
					for ( var e = 0; e < this._group; e++) {
						var h = this._tbody[f * this._group + e];
						var d = h[0].expandable == false ? false : true;
						var b = h[0].hasOperation == false ? false : true;
						var g = [];
						if (e == 0) {
							this._prefixTds(g, f, d, f + 1 + this._offset)
						} else {
							this._prefixTds(g, f, d)
						}
						for ( var c in h) {
							g.push(T.format(this.options.tdTemplate, h[c]));
							if (c == 0 && this.options.hasOperations) {
								if (this.options.hasOperations && b && e == 0) {
									g.push(T.format(
											this.options.operationTdTemplate, {
												className : "operateCol",
												label : "&nbsp;",
												data : f
											}))
								} else {
									g.push(T.format(this.options.tdTemplate, {
										className : "",
										label : "&nbsp;",
										data : f
									}))
								}
							}
						}
						if (this._group == e + 1) {
							a.push(T.format(this.options.trTemplate,
									g.join(""), "line", this._getRowId(f)))
						} else {
							a
									.push(T.format(this.options.trTemplate, g
											.join("")))
						}
					}
				}
				return T.format(this.options.tbodyTemplate, a.join(""))
			},
			_prefixTds : function(b, d, a, c) {
				if (this.options.multilevel) {
					b.push(T.format(this.options.tdTemplate, {
						id : "expand_" + (this._getRowId(d) || ""),
						className : (a && c != null) ? "expandCol"
								: "noexpandCol",
						data : d != null ? d : "",
						label : "&nbsp;"
					}))
				}
				if (this.options.showNumber && c) {
					b.push(T.format(this.options.tdTemplate, {
						className : "numberCol",
						label : c,
						rowspan : d == -1 ? 1 : this._group
					}))
				}
			},
			_renderTfoot : function() {
				var a = [];
				for ( var d = 0; d < this._tfoot.length; d = (++d)
						* this._group) {
					for ( var c = 0; c < this._group; c++) {
						var f = this._tfoot[d + c];
						var e = [];
						this._prefixTds(e, -1, true, "&nbsp;");
						for ( var b in f) {
							e.push(T.format(this.options.tdTemplate, f[b]));
							if (b == 0 && this.options.hasOperations) {
								e.push(T.format(this.options.tdTemplate, {
									className : "operateCol",
									label : "&nbsp;"
								}))
							}
						}
						a.push(T.format(this.options.trTemplate, e.join("")))
					}
				}
				return T.format(this.options.tfootTemplate, a.join(""))
			},
			_renderTdStyle : function(b) {
				var a = b.type || "";
				if (T.lang.isFunction(this.options.tdStyleFn)) {
					a = this.options.tdStyleFn(a, b)
				}
				return a
			},
			_renderThText : function(a) {
				var b = a.label;
				if (T.lang.isFunction(this.options.thTextFn)) {
					return this.options.thTextFn(b, a)
				}
				return b
			},
			_renderTdText : function(a, c) {
				var b = c.format ? c.format(a) : a;
				if (T.lang.isFunction(this.options.tdTextFn)) {
					return this.options.tdTextFn(b, field, a)
				}
				return b
			},
			_sort : function(b) {
				var a = "desc";
				var d = b.currentTarget.parentNode.parentNode;
				var c = T.getAttr(d, "data");
				if (c == this._sortField && this._sortDir == "desc") {
					a = "asc"
				}
				this._sortField = c;
				this._sortDir = a;
				this.loading();
				this.options.onchange(c + "," + a)
			},
			_expand : function(a) {
				var c = a.currentTarget;
				T.dom.toggleClass(c, "open");
				var d = parseInt(T.getAttr(c, "data"), 10);
				var b = this._getRowId(d);
				if (T.dom.hasClass(c, "open")) {
					if (T.dom.hasClass(c, "loaded")) {
						T.each(T.dom.query("tr." + b), function(e) {
							T.show(e)
						})
					} else {
						T.dom.addClass(c, "mini-loading");
						this.options
								.onexpand({
									target : c,
									expandTrId : b,
									rowIndex : d,
									data : T.object.clone(this._tbody[d
											* this._group][0].data)
								})
					}
				} else {
					T.each(T.dom.query("tr." + b), function(e) {
						T.hide(e)
					})
				}
			},
			_operate : function(a) {
				var b = a.currentTarget;
				var c = parseInt(T.getAttr(b, "data"), 10);
				this.options.onoperate({
					target : b,
					rowIndex : c,
					data : T.object.clone(this._tbody[c * this._group][0].data)
				})
			},
			_bindEvent : function() {
				T.event.ons(T.dom.query(T.format(
						"##{0} thead .sortable .td-content label",
						this.options.containerId)), "click", T.fn.bind(
						this._sort, this));
				T.event.ons(T.dom.query(T.format("##{0} tbody .expandCol",
						this.options.containerId)), "click", T.fn.bind(
						this._expand, this));
				T.event.ons(T.dom.query(T.format(
						"##{0} tbody .operateCol .td-content",
						this.options.containerId)), "click", T.fn.bind(
						this._operate, this))
			},
			render : function(a) {
				if (!T.g(this.options.containerId)) {
					return
				}
				this._thead = a.thead;
				this._tbody = a.tbody;
				this._tfoot = a.tfoot;
				this._group = a.group;
				this._offset = a.offset || 0;
				this._expandTrId = null;
				if (a.end == 0) {
					this._continuous = true
				} else {
					this._continuous = false
				}
				if (a.order) {
					this._sortField = a.order.split(",")[0];
					this._sortDir = a.order.split(",")[1]
				}
				T.dom.empty(this.options.containerId);
				T.dom.insertHTML(this.options.containerId, "beforeend", this
						._renderTable());
				this._bindEvent()
			},
			_renderSubBody : function(f, j) {
				var h = f;
				if (T.lang.isObject(f)) {
					h = f.tbody;
					h.unshift(f.thead)
				}
				var e = [];
				for ( var c = 0; c < h.length; c++) {
					var g = h[c];
					var b = [];
					this._prefixTds(b);
					var d = g[0].hasOperation == false ? false : true;
					for ( var a in g) {
						g[a].colspan = (f.colspans && f.colspans[a]) || 1;
						if (T.lang.isArray(g[a].label) && g[a].label.length > 2) {
							g[a].title = g[a].label;
							g[a].label = g[a].title[0] + "," + g[a].title[1]
									+ ",..."
						}
						b.push(T.format(this.options.tdTemplate, g[a]));
						if (a == 0 && this.options.hasOperations) {
							if (this.options.hasOperations && d) {
								b.push(T.format(
										this.options.operationTdTemplate, {
											className : "operateCol",
											label : "&nbsp;",
											data : c
										}))
							} else {
								b.push(T.format(this.options.tdTemplate, {
									className : "",
									label : "&nbsp;",
									data : c
								}))
							}
						}
					}
					e.push(T.format(this.options.trTemplate, b.join(""),
							"sub-line " + j))
				}
				return e.join("")
			},
			_getRowId : function(a) {
				return this.getId("tr_" + a)
			},
			renderSub : function(c, d) {
				var b = d.expandTrId;
				if (T.dom.hasClass("expand_" + b, "loaded")) {
					return
				}
				T.dom.addClass("expand_" + b, "loaded");
				T.dom.removeClass("expand_" + b, "mini-loading");
				T.each(T.dom.query("#" + this.options.containerId + " ." + b),
						function(e) {
							T.dom.remove(e)
						});
				T.dom.insertHTML(b, "afterend", this._renderSubBody(c, b));
				var a = this;
				T.event.ons(T.dom.query("#" + this.options.containerId + " ."
						+ b + " .operateCol .td-content"), "click", function() {
					var e = parseInt(T.getAttr(this, "data"), 10);
					a.options.onoperate({
						target : this,
						rowIndex : e,
						data : T.object.clone(c[e][0].data)
					})
				})
			},
			loading : function() {
				if (!this._continuous) {
					T.dom.empty(this.options.containerId);
					T.dom.insertHTML(this.options.containerId, "beforeend",
							this._renderLoading())
				}
			},
			showMultilevel : function(a) {
				this.options.multilevel = a
			}
		});
T.ui.TableIndicator = T
		.createUI({
			options : {
				containerId : null,
				items : null,
				selected : null,
				limit : 6,
				defaultSelected : null,
				onchange : function(a) {
				},
				shortcutsTemplate : '<div class="shortcuts"><em class="gray r">æç¤ºï¼šå¯åŒæ—¶é€‰æ‹©<em class="red"> #{1} </em>é¡¹</em><a href="javascript:void(0)" id="#{0}">ç³»ç»Ÿé»˜è®¤æŒ‡æ ‡</a></div>',
				buttonsTemplate : '<div class="buttons"><a id="#{0}" class="button" href="javascript:void(0)"><span>ç¡®å®š</span></a></div>',
				indicatorTemplate : '<label for="#{0}"><input type="checkbox" title="#{2}" value="#{1}" id="#{0}">#{2}</label>',
				indicatorWrapperTemplate : '<div class="group clearfix">#{0}</div>',
				separatorTemplate : '<div class="separator"></div>'
			},
			_init : function() {
				if (!T.lang.isArray(this.options.items)) {
					return
				}
				for ( var a in this.options.items) {
					var b = this.options.items[a];
					this._allIds.push(b.id);
					if (this._groupItems[b.group] == null) {
						this._groupItems[b.group] = []
					}
					this._groupItems[b.group].push(b)
				}
			},
			_type : "table-indicator",
			_groupItems : [],
			_allIds : [],
			_selected : [],
			_tempSelected : [],
			_change : function() {
				this._selected = T.object.clone(this._tempSelected);
				this.options.onchange(this._selected)
			},
			_cancel : function() {
				this._tempSelected = T.object.clone(this._selected);
				for ( var a in this._allIds) {
					var c = this._allIds[a];
					var b = T.g(this.getId(c));
					if (T.array.contains(this._selected, c)) {
						b.checked = true
					} else {
						b.checked = false
					}
				}
				this._highlightShortcut()
			},
			_highlightShortcut : function() {
				T.removeClass(this.getId("Default"), "selected");
				if (this._tempSelected.length == this.options.defaultSelected.length) {
					var a = true;
					for ( var b in this._tempSelected) {
						if (!T.array.contains(this.options.defaultSelected,
								this._tempSelected[b])) {
							a = false;
							break
						}
					}
					if (a) {
						T.addClass(this.getId("Default"), "selected")
					}
				}
			},
			_selectItems : function(b) {
				for ( var a in this._allIds) {
					var d = this._allIds[a];
					var c = T.g(this.getId(d));
					if (T.array.contains(b, d)) {
						c.checked = true
					} else {
						c.checked = false
					}
				}
			},
			_clickOne : function(b) {
				var c = T.event.get(b).target;
				if (c.value != null) {
					var d = c.value;
					if (c.checked == true) {
						this._tempSelected.push(d);
						if (this._tempSelected.length > this.options.limit) {
							var d = this._tempSelected.shift();
							var a = T.g(this.getId(d));
							if (a) {
								a.checked = false
							}
						}
					} else {
						if (this._tempSelected.length == 1) {
							c.checked = true;
							return
						}
						T.array.remove(this._tempSelected, d)
					}
					this._highlightShortcut()
				}
			},
			_selectDefault : function() {
				this._tempSelected = T.object
						.clone(this.options.defaultSelected);
				this._selectItems(this._tempSelected);
				this._highlightShortcut()
			},
			_initSelected : function() {
				this._selected = T.object.clone(this.options.selected);
				this._tempSelected = T.object.clone(this.options.selected);
				this._selectItems(this._tempSelected);
				this._highlightShortcut()
			},
			_renderIndicators : function() {
				var d = [];
				d.push(T.format(this.options.shortcutsTemplate, this
						.getId("Default"), this.options.limit));
				for ( var c in this._groupItems) {
					var f = [];
					var a = this._groupItems[c];
					for ( var b in a) {
						var e = a[b];
						f.push(T.format(this.options.indicatorTemplate, this
								.getId(e.id), e.id, e.label))
					}
					d.push(T.format(this.options.indicatorWrapperTemplate, f
							.join("")));
					if (c != this._groupItems.length - 1) {
						d.push(this.options.separatorTemplate)
					}
				}
				d
						.push(T.format(this.options.buttonsTemplate, this
								.getId("Ok")));
				return d.join("")
			},
			_bindEvents : function() {
				T.on(this.getId("Default"), "click", T.fn.bind(
						this._selectDefault, this));
				T.on(this.getId("Ok"), "click", T.fn.bind(this._change, this));
				T.on(this.options.containerId, "click", T.fn.bind(
						this._clickOne, this))
			},
			render : function() {
				if (!T.g(this.options.containerId)) {
					return
				}
				T.insertHTML(this.options.containerId, "beforeend", this
						._renderIndicators());
				T.dom.addClass(this.options.containerId, "table-indicator");
				this._bindEvents();
				this._initSelected()
			}
		});
T.ui.Tabs = T.createUI({
	_type : "tabs",
	options : {
		containerId : null,
		tabsSelector : ">.tabs>ul>li:not(.separator)",
		toggleSelector : ">.tabs>.toggle",
		contentsSelector : ">.tab-contents>ul>li",
		contentContainerSelector : ">.tab-contents",
		tabContainerSelector : ">.tabs>ul",
		eventType : "click",
		selectedClass : "selected",
		selectedIndex : null,
		onchange : function(a, b) {
		}
	},
	_currentIndex : null,
	_tabs : null,
	_toggle : null,
	_isOpen : false,
	_contents : null,
	_tabContainer : null,
	_contentContainer : null,
	_init : function() {
		if (!T.g(this.options.containerId)) {
			return
		}
		var c = this;
		this._tabs = T.dom.query("#" + this.options.containerId
				+ this.options.tabsSelector);
		this._contents = T.dom.query("#" + this.options.containerId
				+ this.options.contentsSelector);
		var b = T.dom.query("#" + this.options.containerId
				+ this.options.toggleSelector);
		if (b && b.length > 0) {
			this._toggle = b[0]
		}
		var d = T.dom.query("#" + this.options.containerId
				+ this.options.contentContainerSelector);
		if (d && d.length > 0) {
			this._contentContainer = d[0]
		}
		var a = T.dom.query("#" + this.options.containerId
				+ this.options.tabContainerSelector);
		if (a && a.length > 0) {
			this._tabContainer = a[0]
		}
		T.each(this._tabs, function(f, e) {
			T.on(T.dom.one("a", f), c.options.eventType, function(g) {
				c._change(e, this.parentNode)
			})
		});
		if (this._toggle) {
			T.on(this._toggle, "click", T.fn.bind(this._toggleFn, this))
		}
		if (this.options.selectedIndex != null) {
			this._change(this.options.selectedIndex,
					this._tabs[this.options.selectedIndex]);
			this._currentIndex = this.options.selectedIndex
		}
	},
	_change : function(a, b, c) {
		if (c !== false) {
			c = true
		}
		if (a == this._currentIndex) {
			this._toggleFn()
		} else {
			this._unselect(this._currentIndex);
			this._currentIndex = a;
			this.open();
			this.options.onchange(a, b, c)
		}
	},
	_unselect : function(a) {
		if (a == null) {
			return
		}
		var c = this._tabs[a];
		T.removeClass(c, this.options.selectedClass);
		var b = T.dom.next(c);
		if (b && T.dom.hasClass(b, "separator")) {
			T.dom.show(b)
		}
		var d = T.dom.prev(c);
		if (d && T.dom.hasClass(d, "separator")) {
			T.dom.show(d)
		}
		if (this._contents && this._contents.length > 0) {
			T.hide(this._contents[this._currentIndex])
		}
	},
	_select : function(a) {
		var c = this._tabs[a];
		T.addClass(this._tabContainer, this.options.selectedClass);
		T.addClass(c, this.options.selectedClass);
		var b = T.dom.next(c);
		if (b && T.dom.hasClass(b, "separator")) {
			T.dom.hide(b)
		}
		var d = T.dom.prev(c);
		if (d && T.dom.hasClass(d, "separator")) {
			T.dom.hide(d)
		}
		if (this._contents && this._contents.length > 0) {
			T.show(this._contents[a])
		}
	},
	open : function() {
		if (this._contentContainer) {
			if (this._toggle) {
				this._toggle.innerHTML = "æ”¶èµ·";
				T.dom.removeClass(this._toggle, "close");
				T.dom.addClass(this._toggle, "open")
			}
			this._isOpen = true;
			T.show(this._contentContainer)
		}
		if (this._currentIndex == null) {
			this._currentIndex = 0
		}
		this._select(this._currentIndex)
	},
	close : function() {
		if (this._contentContainer) {
			if (this._toggle) {
				T.dom.removeClass(this._toggle, "open");
				this._toggle.innerHTML = "å±•å¼€";
				T.dom.addClass(this._toggle, "close")
			}
			this._isOpen = false;
			T.hide(this._contentContainer)
		}
		T.removeClass(this._tabContainer, this.options.selectedClass);
		this._unselect(this._currentIndex)
	},
	_toggleFn : function() {
		if (this._isOpen) {
			this.close()
		} else {
			this.open()
		}
	},
	select : function(a) {
		this._change(a, this._tabs[a], false)
	},
	reset : function() {
		T.removeClass(this._currentIndex, this.options.selectedClass);
		this._currentIndex = null
	},
	hide : function(a) {
		var d = this._tabs[a];
		T.dom.hide(d);
		if (a == 0) {
			var c = T.dom.next(d);
			if (c && T.dom.hasClass(c, "separator")) {
				T.addClass(c, "invisible-separator")
			}
		} else {
			var e = T.dom.prev(d);
			if (e && T.dom.hasClass(e, "separator")) {
				T.addClass(e, "invisible-separator")
			}
		}
		if (a == this._currentIndex || this._currentIndex == null) {
			this.close();
			for ( var b in this._tabs) {
				if (b != a && this._tabs[b].style.display != "none") {
					this._currentIndex = b;
					break
				}
			}
		}
	},
	show : function(a) {
		var c = this._tabs[a];
		T.dom.show(c);
		if (a == 0) {
			var b = T.dom.next(c);
			if (b && T.dom.hasClass(b, "separator")) {
				T.removeClass(b, "invisible-separator")
			}
		} else {
			var d = T.dom.prev(c);
			if (d && T.dom.hasClass(d, "separator")) {
				T.removeClass(d, "invisible-separator")
			}
		}
	}
});
T.TimeSpan = T
		.createClass({
			options : {
				byHourId : "ByHour",
				byDayId : "ByDay",
				ByWeekId : "ByWeek",
				ByMonthId : "ByMonth",
				contianerId : "TimeSpan",
				gran : 6,
				day : 1000 * 3600 * 24,
				onchange : function(a) {
				}
			},
			_granLinks : null,
			_init : function() {
				var b = {
					"3" : this.options.ByMonthId,
					"4" : this.options.ByWeekId,
					"5" : this.options.byDayId,
					"6" : this.options.byHourId
				}, a = b[this.options.gran];
				this._granLinks = T.dom.query("#" + this.options.contianerId
						+ " a");
				this._addActiveClass(a !== undefined ? a
						: this.options.byHourId);
				this.reset(T.config.pageInfo.st, T.config.pageInfo.et);
				this.bind()
			},
			reset : function(a, e) {
				var c = T.g(this.options.ByMonthId), f = T
						.g(this.options.ByWeekId), d = T
						.g(this.options.byDayId), b = T
						.g(this.options.byHourId);
				f && T.dom.addClass(f, "disable");
				c && T.dom.addClass(c, "disable");
				if ((e - a) > (this.options.day * 7)) {
					f && T.dom.removeClass(f, "disable");
					if ((e - a) > (this.options.day * 31)) {
						c && T.dom.removeClass(c, "disable")
					}
				}
			},
			_addActiveClass : function(a) {
				T.element(this._granLinks).each(function(b) {
					T.removeClass(b, "selected")
				});
				T.addClass(a, "selected")
			},
			bind : function() {
				var a = this;
				T.event.ons(this._granLinks, "click", function(c, b) {
					var d = T.event.getTarget(c);
					if (!T.dom.hasClass(d, "disable")) {
						a._addActiveClass(d);
						a.options.onchange(T.dom.getAttr(d, "data"))
					}
				})
			}
		});
T.ui.Tip = T
		.createUI({
			options : {
				target : document.body,
				tip : null,
				position : null
			},
			_type : "tip",
			_init : function() {
				this.position = this.options.position
						|| T.dom.getPosition(this.target);
				if (T.lang.isElement(this.target)) {
					var c = T.ui.Tip.targetsTips.length;
					if (c === 0) {
						T.ui.Tip.targetsTips.push(this)
					} else {
						var b = false;
						for ( var a = 0; a < T.ui.Tip.targetsTips.length; a++) {
							if (T.ui.Tip.targetsTips[a].target === this.target) {
								T.ui.Tip.targetsTips[a] = this;
								b = true;
								break
							} else {
								b = false
							}
						}
						if (!b) {
							T.ui.Tip.targetsTips.push(this)
						}
					}
				}
			},
			getTargetPosition : function() {
				return T.dom.getPosition(this.target)
			},
			render : function() {
				if (this.getTargetPosition().left + 275 >= T.page
						.getViewWidth()) {
					T.dom.setPosition(this.tip, {
						left : T.page.getViewWidth() - 275,
						top : this.getTargetPosition().top
								+ this.target.offsetHeight + 2
					});
					var b = T.q("tip-arrow", this.tip)[0];
					var a = this.getTargetPosition().left + 275
							- T.page.getViewWidth();
					T.dom.setStyle(b, "left", 12 + a)
				} else {
					var b = T.q("tip-arrow", this.tip)[0];
					T.dom.setPosition(this.tip, {
						left : this.getTargetPosition().left,
						top : this.getTargetPosition().top
								+ this.target.offsetHeight + 2
					});
					T.dom.setStyle(b, "left", 12)
				}
				document.body.appendChild(this.tip)
			}
		});
T.ui.Tip.targetsTips = [];
T.ui.Tip.close = function() {
	T.element(".tip-container").each(function(a) {
		T.dom.remove(a)
	})
};
T.ui.Tip.bindEvent = function() {
	T.event.on(document, "click", function(h) {
		var h = h || window.event;
		var g = T.event.getTarget(h);
		var d = false;
		var f = T.ui.Tip.targetsTips;
		for ( var c = 0; c < f.length; c++) {
			if (f[c].target === g) {
				T.ui.Tip.close();
				f[c].render();
				d = true || d
			} else {
				d = false || d
			}
		}
		if (!d && !hasParent(g, ".help") && !hasParent(g, ".tip-container")) {
			T.ui.Tip.close()
		}
	});
	var a, b;
	T.event.on(document, "mouseover", function(d) {
		var d = d || window.event;
		var c = T.event.getTarget(d);
		var f = c;
		if (T.q("tip-container").length > 0) {
			if (hasParent(f, ".help") || hasParent(f, ".tip-container")) {
				clearTimeout(a)
			} else {
				clearTimeout(a);
				a = setTimeout(function() {
					T.ui.Tip.close()
				}, 500)
			}
		}
		if (hasParent(f, ".help")) {
			clearTimeout(b);
			b = setTimeout(function() {
				var g = false;
				var h = T.ui.Tip.targetsTips;
				for ( var e = 0; e < h.length; e++) {
					if (h[e].target === f) {
						T.ui.Tip.close();
						h[e].render();
						g = true || g
					} else {
						g = false || g
					}
				}
				if (!g) {
					T.ui.Tip.close()
				}
			}, 500)
		} else {
			clearTimeout(b)
		}
	})
};
T.ui.Tip.loadTips = function() {
	T.ui.Tip.targetsTips = [];
	var g = T.q("help");
	for ( var c = 0; c < g.length; c++) {
		var a = T.dom.getAttr(g[c], "tip");
		if (a) {
			var e = T.dom.create("div", {
				style : "position: absolute;"
			});
			e.className = "tip-container";
			e.innerHTML = '<div style="zoom: 1;position: relative; left:-12px;" class="tip-div tip-theme indicator-theme"><div class="tip-arrow"></div><div class="tip-wrap">'
					+ a + "</div></div>";
			new T.ui.Tip({
				target : g[c],
				tip : e
			})
		} else {
			var d = T.dom.hasAttr(g[c], "data");
			if (!d) {
				if (T.config.pageInfo.tip) {
					var e = T.dom.create("div", {
						style : "position: absolute;"
					});
					e.className = "tip-container";
					e.innerHTML = '<div style="zoom: 1;position: relative; left:-13px;" class="tip-div tip-theme report-theme"><div class="tip-arrow"></div><div class="tip-wrap"><div class="tip-head"><div class="tip-head-text">'
							+ T.config.pageInfo.title
							+ '</div><div class="tip-close" onclick="T.ui.Tip.close()">Ã—</div></div><div class="tip-body"><table class="tip-table"><tbody class="tip-table-body"><tr class="tip-row"><th class="tip-title">å«ä¹‰ï¼š</th><th class="tip-content">'
							+ T.config.pageInfo.tip.title
							+ '</th></tr><tr class="tip-row"><th class="tip-title">ä½œç”¨ï¼š</th><th class="tip-content">'
							+ T.config.pageInfo.tip.content
							+ "</th></tr></tbody></table></div></div></div>";
					new T.ui.Tip({
						target : g[c],
						tip : e
					})
				}
			} else {
				if (T.config.indexInfo.indicators) {
					var h = T.dom.getAttr(g[c], "data");
					var f = T.config.indexInfo.indicators
							.concat(T.config.indexInfo.indexes);
					for ( var b = 0; b < f.length; b++) {
						if (f[b] && f[b].tip) {
							if (f[b].id === h) {
								var e = T.dom.create("div", {
									style : "position: absolute;"
								});
								e.className = "tip-container";
								e.innerHTML = '<div style="zoom: 1;position: relative; left:-12px;" class="tip-div tip-theme indicator-theme"><div class="tip-arrow"></div><div class="tip-wrap">'
										+ f[b].tip + "</div></div>";
								new T.ui.Tip({
									target : g[c],
									tip : e
								})
							}
						}
					}
				}
			}
		}
	}
};
T.ToggleTarget = T.createClass({
	_type : "toggle-target",
	options : {
		sign : "toggleable",
		onchange : function(a) {
		},
		smoothExpandableElements : [ ".report-tip" ],
		memo : null
	},
	_memo : null,
	_init : function() {
		this._memo = T.object.clone(this.options.memo || {});
		this._initStatus();
		T.on(document.body, "click", T.fn.bind(this.toggleHandler, this))
	},
	_initStatus : function() {
		T.each(T.dom.q("recordable"), function(e) {
			var c = e.id || "", b = T.getAttr(e, "memo");
			if (b) {
				memoObj = T.json.parse(b);
				if (memoObj.hasOwnProperty("id")) {
					c = memoObj.id
				}
			}
			if (!this._memo.hasOwnProperty(c)) {
				return
			}
			var a;
			T.removeClass(e, "open");
			T.removeClass(e, "close");
			if (this._memo[c]) {
				a = true;
				T.addClass(e, "open")
			} else {
				a = false;
				T.addClass(e, "close")
			}
			var d = T.getAttr(e, "targets");
			if (d) {
				T.each(T.dom.query(d), function(f) {
					if (a) {
						T.removeClass(f, "toggleable-hidden")
					} else {
						T.addClass(f, "toggleable-hidden")
					}
				});
				if (d.indexOf("#FlashFoldedTip") != -1) {
					if (a) {
						T.addClass(T.dom.one("#FlashFoldedTip"),
								"toggleable-hidden")
					} else {
						T.removeClass(T.dom.one("#FlashFoldedTip"),
								"toggleable-hidden")
					}
				}
			}
		}, this)
	},
	toggleHandler : function(d, b) {
		var e = T.event.getTarget(d);
		if (T.dom.hasClass(e, "noLayer")) {
			return
		}
		if (!(e[this.options.sign] || T.dom.hasClass(e, this.options.sign))) {
			return
		}
		var a = T.getAttr(e, "targets");
		var c = this;
		T.each(T.dom.query(a), function(g, f) {
			T.dom.toggleClass(g, "toggleable-hidden")
		});
		T.dom.toggleClass(e, "open");
		T.dom.toggleClass(e, "close");
		this.options.onchange(e.id)
	}
});
T.TrackTarget = T.createClass({
	options : {
		sign : "trackable",
		onchange : function(a) {
		},
		trackUri : null
	},
	_type : "track-target",
	_init : function() {
		this.options.trackUrl = this.options.trackUri
				|| T.config.systemConfig.trackUri;
		T.on(document.body, "mousedown", T.fn.bind(this.trackHandler, this))
	},
	trackHandler : function(d) {
		var f = T.event.getTarget(d);
		if (!(f[this.options.sign] || T.dom.hasClass(f, this.options.sign))) {
			return
		}
		var c = f.id || "", b = T.getAttr(f, "memo");
		if (b) {
			memoObj = T.json.parse(b);
			if (memoObj.hasOwnProperty("id")) {
				c = memoObj.id
			}
		}
		var e = {
			appId : T.config.appInfo.id,
			pageId : T.config.pageInfo.id,
			elementId : c
		};
		var a = T.getAttr(f, "href");
		if (a && !(/^javascript|#/.test(a))) {
			e.url = encodeURIComponent(a)
		}
		if (f.innerHTML && !(/^\s*</i.test(f.innerHTML))
				&& !(/>\s*$/i.test(f.innerHTML))) {
			e.value = T.i18n.string.trim(f.innerHTML)
		}
		this.options.onchange(e);
		this.postData(e)
	},
	postData : function(b) {
		var a = (new Date()).getTime();
		var c = window["bd_holmes" + a] = new Image();
		c.src = this.options.trackUrl + "?r=" + a + "&"
				+ T.url.jsonToQuery(b, function(e, d) {
					return encodeURIComponent(e)
				});
		c.onload = c.onerror = function() {
			c = null
		}
	}
});
T.ui.Upload = T
		.createUI({
			_type : "upload",
			options : {
				triggerId : "upload",
				title : "æ‰¹é‡ä¸Šä¼ ",
				data : {
					method : "home/event/upload",
					MAX_FILE_SIZE : 2097152
				},
				width : 370,
				url : null,
				tip : "äº‹ä»¶IDä¸èƒ½ä¸ºç©ºï¼Œè‡ªå®šä¹‰äº‹ä»¶æœ€å¤šæ”¯æŒ20ä¸ªï¼Œè¯·æŒ‰ç…§ä¸Šä¼ æ¨¡æ¿çš„è¦æ±‚é…Œæƒ…æ·»åŠ ",
				uploadDialogTpl : '<div class="content up-content"><span class="content-tip">#{tip}</span><input type="text" id="#{id}-upFileText" disabled /><a id="#{id}-upFileBtn" class="button" href="javascript:void(0)"><span>æµè§ˆ</span></a></div><div class="button-bar"><span class="error" id="#{id}-upFileError"></span><a href="javascript:void(0);" id="#{id}-confirm" class="button disabled"><span>ä¸Šä¼ </span></a><a href="javascript:void(0);" id="#{id}-cancel">å–æ¶ˆ</a></div>',
				upLoadFormTemplate : '<body><form id="upFileForm" action="#{url}" method="post" enctype="multipart/form-data">            <input type="file" id="upFile" name="upFile" style="display:none;" />            #{hidden}        </form></body>',
				filter : function(a) {
					if (!/\.csv$/i.test(a)) {
						return "è¯·ä¸Šä¼ CSVæ ¼å¼çš„æ–‡ä»¶"
					}
				},
				success : function(a) {
				},
				error : function() {
				}
			},
			_upDialog : null,
			_uploadFrame : null,
			_uploadFileInput : null,
			_uploadForm : null,
			_error : true,
			_init : function() {
				var b = this;
				var c = this.getId();
				if (!this.options.url) {
					this.options.url = T.config.systemConfig.baseUri
							+ "/ajax/post"
				}
				this._upDialog = new T.ui.Dialog({
					titleText : this.options.title,
					content : T.format(this.options.uploadDialogTpl, {
						id : c,
						tip : this.options.tip
					}),
					width : this.options.width,
					isSingle : true,
					isModal : true
				});
				T.event.on(this.getId("upFileBtn"), "click", function() {
					T.g(b.getId("upFileError")).innerHTML = "";
					b.generateUploadFrame();
					b._uploadFileInput.click()
				});
				T.event.on(this.getId("confirm"), "click", function() {
					if (!b._uploadFileInput || !b._uploadFileInput.value) {
						return
					}
					T.dom.addClass(this, "disabled");
					b._error = true;
					b._uploadForm.submit()
				});
				T.event.on(this.getId("cancel"), "click", function() {
					b._upDialog.close()
				});
				T.event.on(this.options.triggerId, "click", function() {
					b._upDialog.show()
				});
				var a = "callback_" + new Date().getTime();
				this.options.data.callback = "parent." + a;
				window[a] = function(d) {
					b._error = false;
					if (d && d.msg) {
						b.showMessage(d.msg)
					} else {
						if (d && d.status == 0) {
							b.showMessage("ä¸Šä¼ æˆåŠŸ");
							b.options.success(d)
						} else {
							b.showMessage("ç³»ç»Ÿé”™è¯¯")
						}
					}
				}
			},
			generateUploadFrame : function() {
				var d = this;
				var e = document.createElement("iframe");
				e.style.display = "none";
				e.src = "javascript:void((function(){console.log(document);}()))";
				document.body.appendChild(e);
				var c = [];
				T.object.each(this.options.data || {}, function(g, f) {
					c.push(T.format(
							'<input type="hidden" name="#{0}" value="#{1}">',
							f, g))
				});
				var b = e.contentDocument || e.contentWindow.document;
				b.open();
				b.write(T.format(this.options.upLoadFormTemplate, {
					url : this.options.url,
					hidden : c.join("")
				}));
				var a = b.forms[0].children[0];
				if (this._uploadFrame) {
					T.dom.remove(this._uploadFrame)
				}
				this._uploadFrame = e;
				this._uploadFileInput = a;
				this._uploadForm = b.forms[0];
				T.event.on(a, "change", function(g) {
					var h = d.getFileName(this.value);
					var f = typeof d.options.filter == "function"
							&& d.options.filter(h);
					if (f) {
						T.g(d.getId("upFileError")).innerHTML = f;
						this.value = "";
						T.g(d.getId("upFileText")).value = "";
						T.dom.addClass(d.getId("confirm"), "disabled")
					} else {
						T.g(d.getId("upFileText")).value = h;
						T.dom.removeClass(d.getId("confirm"), "disabled")
					}
				});
				e.onload = function(f) {
					setTimeout(function() {
						if (d._error) {
							d.showMessage("ä¸Šä¼ å¤±è´¥ï¼Œè¯·é‡æ–°å°è¯•.");
							if (typeof d.options.error == "function") {
								d.options.error()
							}
						}
					}, 200)
				}
			},
			getFileName : function(d) {
				var b = d.lastIndexOf("/");
				var a = d.lastIndexOf("\\");
				var c = Math.max(b, a);
				if (c < 0) {
					return d
				} else {
					return d.substring(c + 1)
				}
			},
			showMessage : function(a) {
				T.g(this.getId("upFileError")).innerHTML = a
			}
		});
T.Webpage = function(a) {
	T
			.extend(
					this,
					{
						components : [],
						on : function(c, b) {
							EventRouter.register(c, b)
						},
						fire : function(b) {
							EventRouter.dispatch.apply(EventRouter, arguments)
						},
						_init : function() {
							T.extend(this, this.options);
							EventRouter.setOwner(this);
							T.extend(this, T.config);
							this.fire("onbeforeInit");
							this.initComponents(this.components);
							this._initDataAdapter({
								id : "DataAdapter"
							});
							this.fire("oninit")
						},
						initComponents : function(f) {
							for ( var d in f) {
								var c = f[d];
								var e = null;
								var b = null;
								var h = null;
								if (T.lang.isString(c)) {
									e = c;
									h = e
								} else {
									e = c.type;
									b = c.options;
									if (c.id) {
										h = c.id
									} else {
										h = e
									}
								}
								var g = "_init" + e;
								if (g != "_init" && T.lang.isFunction(this[g])) {
									this[g]({
										id : h,
										type : e,
										options : b
									})
								}
							}
						},
						_getEventName : function(c, b) {
							return b ? b + c : "onchange" + c
						},
						_initTimeSpan : function(c) {
							var b = this;
							this[c.id] = new T.TimeSpan(T.extend({
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options))
						},
						_initGuide : function(c) {
							var b = this;
							this[c.id] = new T.Guide(T.extend({
								onsuccess : function(d) {
									b.fire(b._getEventName(c.id, "onsuccess"),
											d)
								},
								onclose : function() {
									b.fire(b._getEventName(c.id, "onclose"))
								}
							}, c.options))
						},
						_initFlashFormatConverter : function(c) {
							var b = this;
							this[c.id] = new T.FlashFormatConverter({
								onchange : function(e, d, f) {
									b.fire("beforeSetFlashData", e, d, f)
								}
							})
						},
						_initToggleTarget : function(c) {
							var b = this;
							this[c.id] = T.ui.create(T.ToggleTarget, T.extend({
								data : b.memo,
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options))
						},
						_initTrackTarget : function(c) {
							var b = this;
							this[c.id] = T.ui.create(T.TrackTarget, T.extend({
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options))
						},
						_initRecordTarget : function(c) {
							var b = this;
							this[c.id] = T.ui.create(T.RecordTarget, T.extend({
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options))
						},
						_initFlash : function(e) {
							var b = this.systemConfig.webRoot + "/flash/"
									+ e.options.type + ".swf", c = "transparent";
							if (T.browser.chrome && e.options.type == "line"
									&& navigator && navigator.plugins) {
								var d = navigator.plugins["Shockwave Flash"]
										|| navigator.plugins.Flash;
								if (d
										&& (d.filename == "pepflashplayer.dll"
												|| d.filename == "PepperFlashPlayer.plugin" || d.filename == "libpepflashplayer.so")) {
									c = "opaque"
								}
							}
							T.swf.create({
								id : e.id,
								url : b,
								width : e.options.width || "100%",
								height : e.options.height || "270",
								bgColor : "#FFFFFF",
								wmode : c,
								errorMessage : "è½½å…¥FLASHå‡ºé”™",
								ver : "9.0.0",
								allowscriptaccess : "always",
								vars : {
									flashId : e.id,
									baseUrl : this.systemConfig.webRoot
											+ "/flash/fla"
								}
							}, e.options.flashContainerId || "FlashContainer");
							this[e.id] = T.swf.getMovie(e.id)
						},
						getFlash : function(b) {
							return T.swf.getMovie(b)
						},
						_initDownload : function(c) {
							var b = this;
							this[c.id] = new T.ui.Download(T.extend({
								trigerId : "DownloadReport",
								reportId : this.pageInfo.id,
								appId : this.appInfo.id,
								url : T.format("#{0}/download/?",
										this.systemConfig.baseUri),
								reportTitle : this.pageInfo.title
										+ " - ç™¾åº¦ç»Ÿè®¡",
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options));
							this[c.id].render()
						},
						_initChannelDownload : function(d) {
							var b = this;
							this[d.id] = new T.ui.Dialog(
									{
										titleText : "åˆ†æ¸ é“å¯¼å‡º",
										content : '<div class="content download-content">                            <p>è¯´æ˜Žï¼šåˆ†æ¸ é“å¯¼å‡ºæ•°æ®æ˜¯æŒ‰ç…§å•ä¸€æ¸ é“ç»´åº¦è¿›è¡Œç”¨æˆ·åŽ»é‡ï¼Œè¶‹åŠ¿åˆ†æžçš„æ€»è®¡æ•°æ®æ˜¯æ•´ä½“ç”¨æˆ·è¿›è¡ŒåŽ»é‡ï¼Œå› æ­¤åˆ†æ¸ é“æ•°æ®ç›¸åŠ ä¼šå¤§äºŽè¶‹åŠ¿åˆ†æžçš„æ€»è®¡æ•°æ®ï¼›</p>                            <p>&nbsp;</p>                            <p>å¸®åŠ©æ–‡æ¡£ï¼š<a href="http://yingxiao.baidu.com/support/mtj/index.html?castk=LTE%3D" target="_blank">http://yingxiao.baidu.com/support/mtj/index.html?castk=LTE%3D</a></p>                        </div>                        <div class="button-bar">                            <a href="javascript:void(0);" id="downloadChannelConfirm" class="button"><span>ä¸‹è½½</span></a>                            <a href="javascript:void(0);" id="downloadChannelCancel">å–æ¶ˆ</a>                        </div>',
										width : 370,
										position : {
											top : 200,
											left : 360
										},
										isSingle : true,
										isModal : true
									});
							T.event.on("channelDownload", "click", function() {
								b[d.id].show()
							});
							var c = {
								appId : this.appInfo.id,
								reportId : 28,
								format : "csv"
							};
							b[d.id].download = function(e) {
								if (!T.g("DownloadChannel")) {
									T
											.insertHTML(document.body,
													"beforeend",
													'<iframe id="DownloadChannel" width="0" height="0"></iframe>')
								}
								T.g("DownloadChannel").src = T.format(
										"#{0}/download/?",
										b.systemConfig.baseUri)
										+ T.param(T.extend(c, e))
							};
							T.event.on("downloadChannelConfirm", "click",
									function() {
										b.fire(b._getEventName(d.id))
									});
							T.event.on("downloadChannelCancel", "click",
									function() {
										b[d.id].close()
									})
						},
						_initSendReport : function(c) {
							var b = this;
							this[c.id] = new T.ui.SendReport(T.extend({
								trigerId : "SendReport",
								url : this.systemConfig.ajaxUri,
								method : "home/reportsend/add",
								reportId : this.pageInfo.id,
								siteId : this.siteInfo.id,
								reportTitle : this.pageInfo.title
										+ " - ç™¾åº¦ç»Ÿè®¡",
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options));
							this[c.id].render()
						},
						_initVersion : function(e) {
							var d = this;
							var b = T.config.pageInfo.version || 0;
							var c = T.array.find(this.versionList, function(f) {
								if (f.id == b) {
									b = f.id;
									return true
								}
							});
							if (!c) {
								b = 0
							}
							this.context.version = b;
							this[e.id] = new T.ui.CheckGroup(T.extend({
								containerId : "Version",
								label : "ç‰ˆæœ¬è¿‡æ»¤",
								limit : 1,
								selectedItems : [ b ],
								items : this.versionList,
								onchange : function(f, g) {
									d._bindFilterResult(e.id, "Version", g);
									d.fire(d._getEventName(e.id), f)
								}
							}, e.options));
							this[e.id].render();
							d._bindFilterResult(e.id, "Version", this[e.id]
									.getSelectedLabels())
						},
						_initUserType : function(e) {
							var d = this;
							var b = T.config.pageInfo.userType || 0;
							var c = T.array.find(this.userTypeList,
									function(f) {
										if (f.id == b) {
											b = f.id;
											return true
										}
									});
							if (!c) {
								b = 0
							}
							this.context.userType = b;
							this[e.id] = new T.ui.CheckGroup(T.extend({
								containerId : "UserType",
								label : "ç”¨æˆ·ç±»åž‹",
								limit : 1,
								selectedItems : [ b ],
								items : this.userTypeList,
								onchange : function(f, g) {
									d._bindFilterResult(e.id, "UserType", g);
									d.fire(d._getEventName(e.id), f)
								}
							}, e.options));
							this[e.id].render();
							d._bindFilterResult(e.id, "UserType", this[e.id]
									.getSelectedLabels())
						},
						_initChannel : function(h) {
							var f = this;
							var d = T.config.pageInfo.channel || 0;
							var e = T.array.find(this.channelList[0].children,
									function(i) {
										if (i.id == d) {
											d = i.id;
											return true
										}
									});
							if (!e) {
								d = 0
							}
							this.context.channel = d;
							var g = '<label class="label">æ¸ é“è¿‡æ»¤</label>                                <div id="Channel-Group-Combox"></div>                                <div id="Channel-Combox"></div>';
							T.dom.insertHTML("Channel", "afterBegin", g);
							var b = function(j, i) {
								f[h.id] = new T.ui.Combobox(T.extend({
									containerId : "Channel-Combox",
									defaultText : "è¯·é€‰æ‹©",
									items : j,
									selectedId : i,
									width : 156,
									searchable : true,
									searchTip : "æŸ¥è¯¢æ¸ é“",
									onchange : function(k, l) {
										f._bindFilterResult(h.id, "Channel",
												[ l ]);
										f.fire(f._getEventName(h.id), [ k ])
									}
								}, h.options))
							};
							this[h.id + "Group"] = new T.ui.Combobox(T.extend({
								containerId : "Channel-Group-Combox",
								defaultText : "æœªé€‰æ‹©",
								items : this.channelList,
								width : 156,
								searchable : true,
								searchTip : "æŸ¥è¯¢æ¸ é“ç»„",
								onchange : function(j, n) {
									var l = j;
									var k = 0;
									T.array.each(f.channelList, function(p, o) {
										if (p.id == l) {
											k = o;
											return false
										}
									});
									var m = f.channelList[k]
											&& f.channelList[k].children;
									var i = m && m[0] && m[0].id || 0;
									b(m);
									f[h.id].render(m, i);
									f.fire(f._getEventName(h.id + "Group"),
											[ j ]);
									if (m && m[0]) {
										f._bindFilterResult(h.id, "Channel",
												[ m[0].label ]);
										f.fire(f._getEventName(h.id), [ i ])
									}
								}
							}, h.options));
							b(f.channelList[0].children, d);
							var c = "å…¨éƒ¨";
							T.array.each(f.channelList[0].children,
									function(i) {
										if (i.id == d) {
											c = i.label;
											return false
										}
									});
							f._bindFilterResult(h.id, "Channel", [ c ])
						},
						_filterFlag : {},
						_bindFilterResult : function(f, b, e) {
							var d = this;
							if (T.g(b + "Result")) {
								this._filterFlag[b] = {};
								if (e == null || e.length == 0
										|| (e.length == 1 && e[0] == "å…¨éƒ¨")) {
									T.g(b + "Result").innerHTML = "";
									this._filterFlag[b].hasValue = false
								} else {
									var c = e[e.length - 1];
									if (c == "å…¨éƒ¨") {
										c = e[e.length - 2]
									}
									T.g(b + "Result").innerHTML = T
											.format(
													'<em class="result">!{0}</em><em class="reset"></em>',
													c);
									T.on(T.dom.one("#" + b + "Result .reset"),
											"click", function(g) {
												T.event.stopPropagation(g);
												d[f].reset();
												if (d[f + "Group"]) {
													d[f + "Group"].reset()
												}
											});
									this._filterFlag[b].hasValue = true
								}
							}
							this._renderFilterResult()
						},
						_renderFilterResult : function() {
							if (T.g("FilterResults")) {
								var c = false;
								for ( var b in this._filterFlag) {
									if (this._filterFlag[b].hasValue
											&& this._filterFlag[b].show !== false) {
										c = true;
										break
									}
								}
								if (c) {
									T.show("FilterResults")
								} else {
									T.hide("FilterResults")
								}
							}
						},
						showFilter : function(b) {
							T.show(b);
							T.show(b + "Result");
							if (!this._filterFlag[b]) {
								this._filterFlag[b] = {}
							}
							this._filterFlag[b].show = true;
							this._renderFilterResult()
						},
						hideFilter : function(b) {
							T.hide(b);
							T.hide(b + "Result");
							if (!this._filterFlag[b]) {
								this._filterFlag[b] = {}
							}
							this._filterFlag[b].show = false;
							this._renderFilterResult()
						},
						_initShortDate : function(c) {
							var b = this;
							this[c.id] = new T.ShortDate(T.extend({
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options))
						},
						_initDate : function(c) {
							var b = this;
							var d = c.options && c.options.singleSelection;
							this[c.id] = new DateController(T.extend({
								todayDate : T.config.pageInfo.ed ? new Date(
										+T.config.pageInfo.ed) : "",
								firstDate : T.config.pageInfo.sd ? new Date(
										+T.config.pageInfo.sd) : "",
								startDate : d ? new Date(+T.config.pageInfo.ed)
										: new Date(+T.config.pageInfo.st),
								endDate : d ? new Date(+T.config.pageInfo.ed)
										: new Date(+T.config.pageInfo.et),
								otherStartDate : d ? ""
										: (T.config.pageInfo.st2 ? new Date(
												+T.config.pageInfo.st2) : ""),
								otherEndDate : d ? ""
										: (T.config.pageInfo.et2 ? new Date(
												+T.config.pageInfo.et2) : ""),
								onchange : function(e) {
									b.fire(b._getEventName(c.id), {
										st : this.startDate
												&& this.startDate.getTime(),
										et : this.endDate
												&& this.endDate.getTime(),
										st2 : this.otherStartDate
												&& this.otherStartDate
														.getTime(),
										et2 : this.otherEndDate
												&& this.otherEndDate.getTime(),
										id : e
									})
								}
							}, c.options))
						},
						_initTable : function(c) {
							var b = this;
							this[c.id] = new T.ui.Table(T.extend({
								containerId : "Table",
								index : T.config.indexInfo.indexes[0],
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								},
								onexpand : function(d) {
									b.fire("onexpand" + c.id, d)
								},
								onoperate : function(d) {
									b.fire("onoperate" + c.id, d)
								}
							}, c.options))
						},
						_initOperations : function(c) {
							var b = this;
							this[c.id] = new T.ui.Operations(T.extend({
								onchange : function(d, e) {
									b.fire(b._getEventName(c.id), d, e)
								}
							}, c.options))
						},
						_initSummary : function(b) {
							this[b.id] = new T.ui.Summary(T.extend({
								containerId : "Summary"
							}, b.options))
						},
						_initPaging : function(c) {
							var b = this;
							this[c.id] = new T.ui.Paging(T.extend({
								containerId : "Paging",
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options))
						},
						_initFilterTabs : function(b) {
							this[b.id] = new T.ui.Tabs(T.extend({
								containerId : "FilterTabs"
							}, b.options))
						},
						_initIndicator : function(b) {
							this[b.id] = new T.Indicator(T.extend({
								indicators : this.indexInfo.indicators,
								indexes : this.indexInfo.indexes
							}, b.options))
						},
						_initDateCompare : function(c) {
							var b = this;
							this[c.id] = new T.DateCompare(T.extend({
								containerId : "FlashTimeCompare",
								onchange : function(e, d) {
									b.fire(b._getEventName(c.id), e, d)
								}
							}, c.options))
						},
						_initSimpleFlashIndicator : function(c) {
							var b = this;
							this[c.id] = new T.ui.CheckGroup(T.extend({
								containerId : "FlashIndicatorContainer",
								items : this.indexInfo.flashIndicators,
								selectedItems : this.indexInfo.flashSelected,
								limit : this.indexInfo.maxFlashSelectedNumber,
								autoRender : true,
								onchange : function(d, e) {
									b.fire(b._getEventName(c.id), d, e)
								}
							}, c.options))
						},
						_initCharacters : function(c) {
							var b = this;
							this[c.id] = new T.ui.CheckGroup(T.extend({
								containerId : "CharacterIndicatorContainer",
								limit : 1,
								tip : true,
								label : "è®¿é—®ç‰¹å¾:&nbsp;&nbsp;",
								selectedItems : [ this.characterList[0].id ],
								items : this.characterList,
								onchange : function(d, e) {
									b.fire(b._getEventName(c.id), d, e)
								}
							}, c.options));
							this[c.id].render()
						},
						_initClients : function(c) {
							var b = this;
							this[c.id] = new T.ui.CheckGroup(T.extend({
								containerId : "ClientIndicatorContainer",
								limit : 1,
								tip : true,
								selectedItems : [ this.clientList[0].id ],
								items : this.clientList,
								onchange : function(d, e) {
									b.fire(b._getEventName(c.id), d, e)
								}
							}, c.options));
							this[c.id].render()
						},
						_initFlashIndicator : function(c) {
							var b = this;
							this[c.id] = new T.ui.FlashIndicator(
									T
											.extend(
													{
														containerId : "FlashIndicator",
														items : this.indexInfo.flashIndicators,
														selectedItems : this.indexInfo.flashSelected,
														defaultItems : this.indexInfo.defaultFlashSelected,
														limit : this.indexInfo.maxFlashSelectedNumber,
														autoRender : true,
														onchange : function(d) {
															b
																	.fire(
																			b
																					._getEventName(c.id),
																			d)
														}
													}, c.options))
						},
						_initFlashIndicatorChannel : function(c) {
							var b = this;
							this[c.id] = new T.ui.FlashIndicator(T.extend({
								containerId : "FlashIndicator",
								items : this.channelList[0].children,
								selectedItems : this.defaultChannelSelected,
								defaultItems : this.defaultChannelSelected,
								limit : 5,
								autoRender : true,
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options))
						},
						_initFlashIndicatorVersion : function(c) {
							var b = this;
							this[c.id] = new T.ui.FlashIndicator(T.extend({
								containerId : "FlashIndicator",
								items : this.versionList,
								selectedItems : this.defaultVersionSelected,
								defaultItems : this.defaultVersionSelected,
								limit : 5,
								autoRender : true,
								onchange : function(d) {
									b.fire(b._getEventName(c.id), d)
								}
							}, c.options))
						},
						_initTableIndicator : function(d) {
							var b = this;
							var c = T.array.filter(this.indexInfo.indicators,
									function(e) {
										return e.id != "brand_new_user_count"
												&& e.id != "upgrade_user_count"
									});
							this.indexInfo.selected = T.array.filter(
									this.indexInfo.selected, function(e) {
										return e != "brand_new_user_count"
												&& e != "upgrade_user_count"
									});
							this[d.id] = new T.ui.TableIndicator(
									T
											.extend(
													{
														containerId : "TableIndicator",
														items : c,
														selected : this.indexInfo.selected,
														limit : this.indexInfo.maxSelectedNumber,
														defaultSelected : this.indexInfo.defaultSelected,
														autoRender : true,
														onchange : function(e) {
															b
																	.fire(
																			b
																					._getEventName(d.id),
																			e)
														},
														oncancelChange : function(
																e) {
															b
																	.fire(
																			b
																					._getEventName(
																							d.id,
																							"oncancelChange"),
																			e)
														}
													}, d.options))
						},
						_initTip : function(b) {
							T.ui.Tip.bindEvent();
							T.ui.Tip.loadTips()
						},
						_initDataAdapter : function(c) {
							var b = this;
							this.DataAdapter = new T.DataAdapter(T.extend({
								onflashError : function(e, d) {
									b.fire("onflashError", e, d)
								}
							}, c.options))
						},
						_initCombobox : function() {
							var b = new T.ui.Combobox(T.extend({
								trigerId : "ComboboxContainer",
								autoRender : true,
								items : []
							}, param.options))
						},
						auth : function(b) {
							return this.userInfo.auths[b]
						},
						role : function(b) {
							return this.userInfo.roles[b]
						},
						ajax : function(e, b, d) {
							var c = this;
							b = b || {};
							b.reportId = this.pageInfo.id;
							T.extend(b, {
								method : e.uri
							});
							c.fire("on" + e.name);
							T.ajax
									.jsonPost(
											this.systemConfig.ajaxUri,
											b,
											function(g, f) {
												if (T.lang.isString(e.adapter)
														&& T.lang
																.isFunction(c.DataAdapter[e.adapter])) {
													if (c
															.fire(
																	"on"
																			+ e.adapter,
																	g) === false) {
														return
													}
													g = c.DataAdapter[e.adapter]
															(g);
													c.fire("after" + e.adapter,
															g)
												}
												c.fire("on" + e.name
														+ "Success", g, {
													status : f,
													postData : b,
													extData : d
												})
											}, function(f) {
												c.fire(
														"on" + e.name
																+ "Failed", f)
											})
						},
						download : function(b) {
							T.g("DownloadChannel").src = b
						},
						setIndexItem : function(c, b) {
							var e = T.object.clone(c);
							for ( var d in c) {
								delete c[d]
							}
							if (T.lang.isObject(b)) {
								T.extend(c, b)
							} else {
								c.label = b
							}
							c.data = e
						},
						sendFlashImage : function(b) {
							b.createImage("http://" + window.location.host
									+ this.systemConfig.imageSaveUri,
									this.systemConfig.imageSaveMethod)
						},
						isSpecialWord : function(b) {
							return T.array.contains(
									[ "å…¶ä»–", "æœªçŸ¥", "--" ], b)
						}
					});
	T.extend(this, a);
	this._init()
};