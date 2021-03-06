/*
 * ChemWriter (TM)
 *
 * Copyright (c) 2007-2011 Metamolecular, LLC. All Rights Reserved.
 *
 * Any unauthorized reproduction, use, or modification of this work
 * is prohibited.
 *
 * Contact:
 * 
 * Metamolecular, LLC
 * 8070 La Jolla Shores Drive #464
 * La Jolla, CA 92037
 * 858.658.0860
 * info@metamolecular.com
 * http://metamolecular.com
 *
 * This work contains font path data extracted from the Nobile font, Copyright (c) 2010,
 * Vernon Adams (http://www.newtypography.co.uk/nobile/), with Reserved Font Name Nobile.
 * Nobile is licensed under the SIL Open Font License, Version 1.1. This license is available
 * at: http://chemwriter.com/licenses/ofl.txt
 *
 * This work contains code compiled from the Google Closure Library, Copyright 2006 The
 * Closure Library Authors and licensed under the Apache License Version 2.0. This license is
 * available at: http://chemwriter.com/licenses/apache.txt
 *
 * This work contains code adapted from the Apache Harmony Project, Copyright 2006, 2010
 * The Apache Software Foundation and licensed under the Apache License Version 2.0. This
 * license is available at:
 * http://chemwriter.com/licenses/apache.txt
 */
(function() {
	function f() {
		return function() {
		}
	}
	function aa(a) {
		return function(b) {
			this[a] = b
		}
	}
	function k(a) {
		return function() {
			return this[a]
		}
	}
	function m(a) {
		return function() {
			return a
		}
	}
	var p, ba = ba || {}, q = this;
	function ca(a, b, c) {
		a = a.split(".");
		c = c || q;
		!(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
		for ( var d; a.length && (d = a.shift());)
			if (!a.length && b !== undefined)
				c[d] = b;
			else
				c = c[d] ? c[d] : (c[d] = {})
	}
	function da(a, b) {
		for ( var c = a.split("."), d = b || q, e; e = c.shift();)
			if (d[e] != null)
				d = d[e];
			else
				return null;
		return d
	}
	function ea() {
	}
	function fa(a) {
		a.Hb = function() {
			return a.Vk || (a.Vk = new a)
		}
	}
	function ga(a) {
		var b = typeof a;
		if (b == "object")
			if (a) {
				if (a instanceof Array)
					return "array";
				else if (a instanceof Object)
					return b;
				var c = Object.prototype.toString.call(a);
				if (c == "[object Window]")
					return "object";
				if (c == "[object Array]" || typeof a.length == "number"
						&& typeof a.splice != "undefined"
						&& typeof a.propertyIsEnumerable != "undefined"
						&& !a.propertyIsEnumerable("splice"))
					return "array";
				if (c == "[object Function]" || typeof a.call != "undefined"
						&& typeof a.propertyIsEnumerable != "undefined"
						&& !a.propertyIsEnumerable("call"))
					return "function"
			} else
				return "null";
		else if (b == "function" && typeof a.call == "undefined")
			return "object";
		return b
	}
	function ha(a) {
		return ga(a) == "array"
	}
	function ia(a) {
		var b = ga(a);
		return b == "array" || b == "object" && typeof a.length == "number"
	}
	function r(a) {
		return typeof a == "string"
	}
	function ja(a) {
		return typeof a == "number"
	}
	function ka(a) {
		return ga(a) == "function"
	}
	function la(a) {
		a = ga(a);
		return a == "object" || a == "array" || a == "function"
	}
	function s(a) {
		return a[ma] || (a[ma] = ++na)
	}
	var ma = "closure_uid_"
			+ Math.floor(Math.random() * 2147483648).toString(36), na = 0;
	function oa(a) {
		return a.call.apply(a.xi, arguments)
	}
	function pa(a, b) {
		if (!a)
			throw Error();
		if (arguments.length > 2) {
			var c = Array.prototype.slice.call(arguments, 2);
			return function() {
				var d = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(d, c);
				return a.apply(b, d)
			}
		} else
			return function() {
				return a.apply(b, arguments)
			}
	}
	function t() {
		t = Function.prototype.xi
				&& Function.prototype.xi.toString().indexOf("native code") != -1 ? oa
				: pa;
		return t.apply(null, arguments)
	}
	function qa(a) {
		var b = Array.prototype.slice.call(arguments, 1);
		return function() {
			var c = Array.prototype.slice.call(arguments);
			c.unshift.apply(c, b);
			return a.apply(this, c)
		}
	}
	var ra = Date.now || function() {
		return +new Date
	};
	function u(a, b) {
		function c() {
		}
		c.prototype = b.prototype;
		a.ga = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a
	}
	;
	function sa(a) {
		this.stack = Error().stack || "";
		if (a)
			this.message = String(a)
	}
	u(sa, Error);
	sa.prototype.name = "CustomError";
	function ta(a) {
		for ( var b = 1; b < arguments.length; b++) {
			var c = String(arguments[b]).replace(/\$/g, "$$$$");
			a = a.replace(/\%s/, c)
		}
		return a
	}
	function ua(a, b) {
		if (b)
			return a.replace(va, "&amp;").replace(wa, "&lt;").replace(xa,
					"&gt;").replace(ya, "&quot;");
		else {
			if (!za.test(a))
				return a;
			if (a.indexOf("&") != -1)
				a = a.replace(va, "&amp;");
			if (a.indexOf("<") != -1)
				a = a.replace(wa, "&lt;");
			if (a.indexOf(">") != -1)
				a = a.replace(xa, "&gt;");
			if (a.indexOf('"') != -1)
				a = a.replace(ya, "&quot;");
			return a
		}
	}
	var va = /&/g, wa = /</g, xa = />/g, ya = /\"/g, za = /[&<>\"]/;
	function Aa(a, b, c) {
		a = c !== undefined ? a.toFixed(c) : String(a);
		c = a.indexOf(".");
		if (c == -1)
			c = a.length;
		return Array(Math.max(0, b - c) + 1).join("0") + a
	}
	function Da(a, b) {
		for ( var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
				.split("."), e = String(b)
				.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math
				.max(d.length, e.length), h = 0; c == 0 && h < g; h++) {
			var i = d[h] || "", j = e[h] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp(
					"(\\d*)(\\D*)", "g");
			do {
				var o = l.exec(i) || [ "", "", "" ], G = n.exec(j)
						|| [ "", "", "" ];
				if (o[0].length == 0 && G[0].length == 0)
					break;
				c = Ea(o[1].length == 0 ? 0 : parseInt(o[1], 10),
						G[1].length == 0 ? 0 : parseInt(G[1], 10))
						|| Ea(o[2].length == 0, G[2].length == 0)
						|| Ea(o[2], G[2])
			} while (c == 0)
		}
		return c
	}
	function Ea(a, b) {
		if (a < b)
			return -1;
		else if (a > b)
			return 1;
		return 0
	}
	var Fa = Math.random() * 2147483648 | 0;
	function Ga(a) {
		var b = Number(a);
		if (b == 0 && /^[\s\xa0]*$/.test(a))
			return NaN;
		return b
	}
	var Ha = {};
	function Ia(a) {
		return Ha[a]
				|| (Ha[a] = String(a).replace(/\-([a-z])/g, function(b, c) {
					return c.toUpperCase()
				}))
	}
	;
	function Ja(a, b) {
		b.unshift(a);
		sa.call(this, ta.apply(null, b));
		b.shift();
		this.vm = a
	}
	u(Ja, sa);
	Ja.prototype.name = "AssertionError";
	function Ka(a, b) {
		if (!a) {
			var c = Array.prototype.slice.call(arguments, 2), d = "Assertion failed";
			if (b) {
				d += ": " + b;
				var e = c
			}
			throw new Ja("" + d, e || []);
		}
		return a
	}
	function La(a) {
		throw new Ja("Failure" + (a ? ": " + a : ""), Array.prototype.slice
				.call(arguments, 1));
	}
	;
	var v = Array.prototype, Ma = v.indexOf ? function(a, b, c) {
		Ka(a.length != null);
		return v.indexOf.call(a, b, c)
	} : function(a, b, c) {
		c = c == null ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
		if (r(a)) {
			if (!r(b) || b.length != 1)
				return -1;
			return a.indexOf(b, c)
		}
		for (c = c; c < a.length; c++)
			if (c in a && a[c] === b)
				return c;
		return -1
	}, Na = v.forEach ? function(a, b, c) {
		Ka(a.length != null);
		v.forEach.call(a, b, c)
	} : function(a, b, c) {
		for ( var d = a.length, e = r(a) ? a.split("") : a, g = 0; g < d; g++)
			g in e && b.call(c, e[g], g, a)
	}, Oa = v.map ? function(a, b, c) {
		Ka(a.length != null);
		return v.map.call(a, b, c)
	}
			: function(a, b, c) {
				for ( var d = a.length, e = Array(d), g = r(a) ? a.split("")
						: a, h = 0; h < d; h++)
					if (h in g)
						e[h] = b.call(c, g[h], h, a);
				return e
			};
	function Pa(a, b, c, d) {
		if (a.reduce)
			return d ? a.reduce(t(b, d), c) : a.reduce(b, c);
		var e = c;
		Na(a, function(g, h) {
			e = b.call(d, e, g, h, a)
		});
		return e
	}
	var Qa = v.some ? function(a, b, c) {
		Ka(a.length != null);
		return v.some.call(a, b, c)
	} : function(a, b, c) {
		for ( var d = a.length, e = r(a) ? a.split("") : a, g = 0; g < d; g++)
			if (g in e && b.call(c, e[g], g, a))
				return true;
		return false
	}, Ra = v.every ? function(a, b, c) {
		Ka(a.length != null);
		return v.every.call(a, b, c)
	} : function(a, b, c) {
		for ( var d = a.length, e = r(a) ? a.split("") : a, g = 0; g < d; g++)
			if (g in e && !b.call(c, e[g], g, a))
				return false;
		return true
	};
	function Sa(a, b) {
		return Ma(a, b) >= 0
	}
	function Ta(a) {
		if (!ha(a))
			for ( var b = a.length - 1; b >= 0; b--)
				delete a[b];
		a.length = 0
	}
	function Ua(a, b) {
		var c = Ma(a, b), d;
		if (d = c >= 0) {
			Ka(a.length != null);
			v.splice.call(a, c, 1)
		}
		return d
	}
	function Va() {
		return v.concat.apply(v, arguments)
	}
	function Wa(a) {
		if (ha(a))
			return Va(a);
		else {
			for ( var b = [], c = 0, d = a.length; c < d; c++)
				b[c] = a[c];
			return b
		}
	}
	function Xa(a) {
		Ka(a.length != null);
		return v.splice.apply(a, Ya(arguments, 1))
	}
	function Ya(a, b, c) {
		Ka(a.length != null);
		return arguments.length <= 2 ? v.slice.call(a, b) : v.slice.call(a, b,
				c)
	}
	function Za(a, b) {
		return a > b ? 1 : a < b ? -1 : 0
	}
	;
	var $a, ab, bb, db, eb, fb, gb, hb;
	function ib() {
		return q.navigator ? q.navigator.userAgent : null
	}
	function jb() {
		return q.navigator
	}
	eb = db = bb = ab = $a = false;
	var kb;
	if (kb = ib()) {
		var lb = jb();
		$a = kb.indexOf("Opera") == 0;
		ab = !$a && kb.indexOf("MSIE") != -1;
		db = (bb = !$a && kb.indexOf("WebKit") != -1)
				&& kb.indexOf("Mobile") != -1;
		eb = !$a && !bb && lb.product == "Gecko"
	}
	var mb = $a, w = ab, x = eb, y = bb, nb = db, ob, pb = jb();
	ob = pb && pb.platform || "";
	fb = ob.indexOf("Mac") != -1;
	gb = ob.indexOf("Win") != -1;
	hb = ob.indexOf("Linux") != -1;
	var qb = !!jb() && (jb().appVersion || "").indexOf("X11") != -1, rb;
	a: {
		var tb = "", ub;
		if (mb && q.opera) {
			var vb = q.opera.version;
			tb = typeof vb == "function" ? vb() : vb
		} else {
			if (x)
				ub = /rv\:([^\);]+)(\)|;)/;
			else if (w)
				ub = /MSIE\s+([^\);]+)(\)|;)/;
			else if (y)
				ub = /WebKit\/(\S+)/;
			if (ub) {
				var wb = ub.exec(ib());
				tb = wb ? wb[1] : ""
			}
		}
		if (w) {
			var xb, yb = q.document;
			xb = yb ? yb.documentMode : undefined;
			if (xb > parseFloat(tb)) {
				rb = String(xb);
				break a
			}
		}
		rb = tb
	}
	var zb = {};
	function z(a) {
		return zb[a] || (zb[a] = Da(rb, a) >= 0)
	}
	var Ab = {};
	function Bb(a) {
		return Ab[a]
				|| (Ab[a] = w && document.documentMode
						&& document.documentMode >= a)
	}
	;
	var Cb, Db = !w || Bb(9);
	!x && !w || w && Bb(9) || x && z("1.9.1");
	var Eb = w && !z("9");
	function Fb(a) {
		return (a = a.className) && typeof a.split == "function" ? a
				.split(/\s+/) : []
	}
	function Gb(a) {
		var b = Fb(a), c;
		c = Ya(arguments, 1);
		for ( var d = 0, e = 0; e < c.length; e++)
			if (!Sa(b, c[e])) {
				b.push(c[e]);
				d++
			}
		c = d == c.length;
		a.className = b.join(" ");
		return c
	}
	function Hb(a) {
		var b = Fb(a), c;
		c = Ya(arguments, 1);
		for ( var d = 0, e = 0; e < b.length; e++)
			if (Sa(c, b[e])) {
				Xa(b, e--, 1);
				d++
			}
		c = d == c.length;
		a.className = b.join(" ");
		return c
	}
	;
	function Ib(a, b) {
		this.x = a !== undefined ? a : 0;
		this.y = b !== undefined ? b : 0
	}
	Ib.prototype.bb = function() {
		return new Ib(this.x, this.y)
	};
	Ib.prototype.toString = function() {
		return "(" + this.x + ", " + this.y + ")"
	};
	function A(a, b) {
		this.width = a;
		this.height = b
	}
	p = A.prototype;
	p.bb = function() {
		return new A(this.width, this.height)
	};
	p.toString = function() {
		return "(" + this.width + " x " + this.height + ")"
	};
	p.gb = function() {
		return !(this.width * this.height)
	};
	p.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	p.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	p.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	p.scale = function(a) {
		this.width *= a;
		this.height *= a;
		return this
	};
	function Jb(a, b, c) {
		for ( var d in a)
			b.call(c, a[d], d, a)
	}
	function Kb(a) {
		var b = [], c = 0;
		for ( var d in a)
			b[c++] = a[d];
		return b
	}
	function Lb(a) {
		var b = [], c = 0;
		for ( var d in a)
			b[c++] = d;
		return b
	}
	function Mb(a, b) {
		for ( var c in a)
			if (a[c] == b)
				return true;
		return false
	}
	function Nb(a, b, c) {
		if (b in a)
			return a[b];
		return c
	}
	var Ob = [ "constructor", "hasOwnProperty", "isPrototypeOf",
			"propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
	function Pb(a) {
		for ( var b, c, d = 1; d < arguments.length; d++) {
			c = arguments[d];
			for (b in c)
				a[b] = c[b];
			for ( var e = 0; e < Ob.length; e++) {
				b = Ob[e];
				if (Object.prototype.hasOwnProperty.call(c, b))
					a[b] = c[b]
			}
		}
	}
	function Qb() {
		var a = arguments.length;
		if (a == 1 && ha(arguments[0]))
			return Qb.apply(null, arguments[0]);
		if (a % 2)
			throw Error("Uneven number of arguments");
		for ( var b = {}, c = 0; c < a; c += 2)
			b[arguments[c]] = arguments[c + 1];
		return b
	}
	function Rb() {
		var a = arguments.length;
		if (a == 1 && ha(arguments[0]))
			return Rb.apply(null, arguments[0]);
		for ( var b = {}, c = 0; c < a; c++)
			b[arguments[c]] = true;
		return b
	}
	;
	function Sb(a) {
		return a ? new Tb(Ub(a)) : Cb || (Cb = new Tb)
	}
	function Vb(a) {
		return a.querySelectorAll && a.querySelector
				&& (!y || Wb(document) || z("528"))
	}
	function Xb(a, b) {
		Jb(b, function(c, d) {
			if (d == "style")
				a.style.cssText = c;
			else if (d == "class")
				a.className = c;
			else if (d == "for")
				a.htmlFor = c;
			else if (d in Yb)
				a.setAttribute(Yb[d], c);
			else if (d.lastIndexOf("aria-", 0) == 0)
				a.setAttribute(d, c);
			else
				a[d] = c
		})
	}
	var Yb = {
		cellpadding : "cellPadding",
		cellspacing : "cellSpacing",
		colspan : "colSpan",
		rowspan : "rowSpan",
		valign : "vAlign",
		height : "height",
		width : "width",
		usemap : "useMap",
		frameborder : "frameBorder",
		maxlength : "maxLength",
		type : "type"
	};
	function Zb(a) {
		var b = !y && Wb(a) ? a.documentElement : a.body;
		a = a.parentWindow || a.defaultView;
		return new Ib(a.pageXOffset || b.scrollLeft, a.pageYOffset
				|| b.scrollTop)
	}
	function B() {
		return $b(document, arguments)
	}
	function $b(a, b) {
		var c = b[0], d = b[1];
		if (!Db && d && (d.name || d.type)) {
			c = [ "<", c ];
			d.name && c.push(' name="', ua(d.name), '"');
			if (d.type) {
				c.push(' type="', ua(d.type), '"');
				var e = {};
				Pb(e, d);
				d = e;
				delete d.type
			}
			c.push(">");
			c = c.join("")
		}
		c = a.createElement(c);
		if (d)
			if (r(d))
				c.className = d;
			else
				ha(d) ? Gb.apply(null, [ c ].concat(d)) : Xb(c, d);
		b.length > 2 && ac(a, c, b, 2);
		return c
	}
	function ac(a, b, c, d) {
		function e(h) {
			if (h)
				b.appendChild(r(h) ? a.createTextNode(h) : h)
		}
		for (d = d; d < c.length; d++) {
			var g = c[d];
			ia(g) && !(la(g) && g.nodeType > 0) ? Na(bc(g) ? Wa(g) : g, e)
					: e(g)
		}
	}
	function cc(a) {
		var b;
		b = document.createElement("div");
		if (w) {
			b.innerHTML = "<br>" + a;
			b.removeChild(b.firstChild)
		} else
			b.innerHTML = a;
		if (b.childNodes.length == 1)
			b = b.removeChild(b.firstChild);
		else {
			for (a = document.createDocumentFragment(); b.firstChild;)
				a.appendChild(b.firstChild);
			b = a
		}
		return b
	}
	function Wb(a) {
		return a.compatMode == "CSS1Compat"
	}
	function dc(a) {
		ac(Ub(a), a, arguments, 1)
	}
	function ec(a) {
		for ( var b; b = a.firstChild;)
			a.removeChild(b)
	}
	function fc(a) {
		return a && a.parentNode ? a.parentNode.removeChild(a) : null
	}
	function gc(a, b) {
		if (a.contains && b.nodeType == 1)
			return a == b || a.contains(b);
		if (typeof a.compareDocumentPosition != "undefined")
			return a == b || Boolean(a.compareDocumentPosition(b) & 16);
		for (; b && a != b;)
			b = b.parentNode;
		return b == a
	}
	function Ub(a) {
		return a.nodeType == 9 ? a : a.ownerDocument || a.document
	}
	function hc(a, b) {
		if ("textContent" in a)
			a.textContent = b;
		else if (a.firstChild && a.firstChild.nodeType == 3) {
			for (; a.lastChild != a.firstChild;)
				a.removeChild(a.lastChild);
			a.firstChild.data = b
		} else {
			ec(a);
			a.appendChild(Ub(a).createTextNode(b))
		}
	}
	var ic = {
		SCRIPT : 1,
		STYLE : 1,
		HEAD : 1,
		IFRAME : 1,
		OBJECT : 1
	}, jc = {
		IMG : " ",
		BR : "\n"
	};
	function kc(a) {
		var b = a.getAttributeNode("tabindex");
		if (b && b.specified) {
			a = a.tabIndex;
			return ja(a) && a >= 0 && a < 32768
		}
		return false
	}
	function lc(a) {
		var b = [];
		mc(a, b, false);
		return b.join("")
	}
	function mc(a, b, c) {
		if (!(a.nodeName in ic))
			if (a.nodeType == 3)
				c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
						: b.push(a.nodeValue);
			else if (a.nodeName in jc)
				b.push(jc[a.nodeName]);
			else
				for (a = a.firstChild; a;) {
					mc(a, b, c);
					a = a.nextSibling
				}
	}
	function bc(a) {
		if (a && typeof a.length == "number")
			if (la(a))
				return typeof a.item == "function" || typeof a.item == "string";
			else if (ka(a))
				return typeof a.item == "function";
		return false
	}
	function Tb(a) {
		this.$ = a || q.document || document
	}
	p = Tb.prototype;
	p.$b = Sb;
	p.zd = aa("$");
	p.aa = function(a) {
		return r(a) ? this.$.getElementById(a) : a
	};
	p.la = function() {
		return $b(this.$, arguments)
	};
	p.createElement = function(a) {
		return this.$.createElement(a)
	};
	p.createTextNode = function(a) {
		return this.$.createTextNode(a)
	};
	p.appendChild = function(a, b) {
		a.appendChild(b)
	};
	p.append = dc;
	p.contains = gc;
	function nc(a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		this.left = d
	}
	nc.prototype.bb = function() {
		return new nc(this.top, this.right, this.bottom, this.left)
	};
	nc.prototype.toString = function() {
		return "(" + this.top + "t, " + this.right + "r, " + this.bottom
				+ "b, " + this.left + "l)"
	};
	nc.prototype.contains = function(a) {
		return !this || !a ? false : a instanceof nc ? a.left >= this.left
				&& a.right <= this.right && a.top >= this.top
				&& a.bottom <= this.bottom : a.x >= this.left
				&& a.x <= this.right && a.y >= this.top && a.y <= this.bottom
	};
	function oc(a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d
	}
	oc.prototype.bb = function() {
		return new oc(this.left, this.top, this.width, this.height)
	};
	oc.prototype.toString = function() {
		return "(" + this.left + ", " + this.top + " - " + this.width + "w x "
				+ this.height + "h)"
	};
	oc.prototype.contains = function(a) {
		return a instanceof oc ? this.left <= a.left
				&& this.left + this.width >= a.left + a.width
				&& this.top <= a.top
				&& this.top + this.height >= a.top + a.height
				: a.x >= this.left && a.x <= this.left + this.width
						&& a.y >= this.top && a.y <= this.top + this.height
	};
	oc.prototype.hg = function() {
		return new A(this.width, this.height)
	};
	function pc(a, b, c) {
		a.style[Ia(c)] = b
	}
	function qc(a, b) {
		var c = Ub(a);
		if (c.defaultView && c.defaultView.getComputedStyle)
			if (c = c.defaultView.getComputedStyle(a, null))
				return c[b] || c.getPropertyValue(b);
		return ""
	}
	function rc(a, b) {
		return qc(a, b) || (a.currentStyle ? a.currentStyle[b] : null)
				|| a.style && a.style[b]
	}
	function sc(a) {
		var b = a.getBoundingClientRect();
		if (w) {
			a = a.ownerDocument;
			b.left -= a.documentElement.clientLeft + a.body.clientLeft;
			b.top -= a.documentElement.clientTop + a.body.clientTop
		}
		return b
	}
	function tc(a) {
		if (w && !Bb(8))
			return a.offsetParent;
		var b = Ub(a), c = rc(a, "position"), d = c == "fixed"
				|| c == "absolute";
		for (a = a.parentNode; a && a != b; a = a.parentNode) {
			c = rc(a, "position");
			d = d && c == "static" && a != b.documentElement && a != b.body;
			if (!d
					&& (a.scrollWidth > a.clientWidth
							|| a.scrollHeight > a.clientHeight || c == "fixed"
							|| c == "absolute" || c == "relative"))
				return a
		}
		return null
	}
	function uc(a) {
		var b, c = Ub(a), d = rc(a, "position"), e = x && c.getBoxObjectFor
				&& !a.getBoundingClientRect && d == "absolute"
				&& (b = c.getBoxObjectFor(a))
				&& (b.screenX < 0 || b.screenY < 0), g = new Ib(0, 0), h;
		b = c ? c.nodeType == 9 ? c : Ub(c) : document;
		if (h = w) {
			if (h = !Bb(9)) {
				h = Sb(b);
				h = !Wb(h.$)
			}
			h = h
		}
		h = h ? b.body : b.documentElement;
		if (a == h)
			return g;
		if (a.getBoundingClientRect) {
			b = sc(a);
			a = Sb(c);
			a = Zb(a.$);
			g.x = b.left + a.x;
			g.y = b.top + a.y
		} else if (c.getBoxObjectFor && !e) {
			b = c.getBoxObjectFor(a);
			a = c.getBoxObjectFor(h);
			g.x = b.screenX - a.screenX;
			g.y = b.screenY - a.screenY
		} else {
			e = a;
			do {
				g.x += e.offsetLeft;
				g.y += e.offsetTop;
				if (e != a) {
					g.x += e.clientLeft || 0;
					g.y += e.clientTop || 0
				}
				if (y && rc(e, "position") == "fixed") {
					g.x += c.body.scrollLeft;
					g.y += c.body.scrollTop;
					break
				}
				e = e.offsetParent
			} while (e && e != a);
			if (mb || y && d == "absolute")
				g.y -= c.body.offsetTop;
			for (e = a; (e = tc(e)) && e != c.body && e != h;) {
				g.x -= e.scrollLeft;
				if (!mb || e.tagName != "TR")
					g.y -= e.scrollTop
			}
		}
		return g
	}
	function vc(a) {
		var b = new Ib;
		if (a.nodeType == 1)
			if (a.getBoundingClientRect) {
				a = sc(a);
				b.x = a.left;
				b.y = a.top
			} else {
				var c;
				c = Sb(a);
				c = Zb(c.$);
				a = uc(a);
				b.x = a.x - c.x;
				b.y = a.y - c.y
			}
		else {
			c = ka(a.Lk);
			var d = a;
			if (a.targetTouches)
				d = a.targetTouches[0];
			else if (c && a.sb.targetTouches)
				d = a.sb.targetTouches[0];
			b.x = d.clientX;
			b.y = d.clientY
		}
		return b
	}
	function wc(a, b, c) {
		if (b instanceof A) {
			c = b.height;
			b = b.width
		} else {
			if (c == undefined)
				throw Error("missing height argument");
			c = c
		}
		a.style.width = xc(b, true);
		a.style.height = xc(c, true)
	}
	function xc(a, b) {
		if (typeof a == "number")
			a = (b ? Math.round(a) : a) + "px";
		return a
	}
	function yc(a) {
		if (rc(a, "display") != "none")
			return zc(a);
		var b = a.style, c = b.display, d = b.visibility, e = b.position;
		b.visibility = "hidden";
		b.position = "absolute";
		b.display = "inline";
		a = zc(a);
		b.display = c;
		b.position = e;
		b.visibility = d;
		return a
	}
	function zc(a) {
		var b = a.offsetWidth, c = a.offsetHeight, d = y && !b && !c;
		if ((b === undefined || d) && a.getBoundingClientRect) {
			a = sc(a);
			return new A(a.right - a.left, a.bottom - a.top)
		}
		return new A(b, c)
	}
	var Ac = x ? "MozUserSelect" : y ? "WebkitUserSelect" : null;
	function Bc(a) {
		return new A(a.offsetWidth, a.offsetHeight)
	}
	function Cc(a) {
		var b = Ub(a), c = w && a.currentStyle, d;
		if (d = c) {
			b = Sb(b);
			d = Wb(b.$) && c.width != "auto" && c.height != "auto"
					&& !c.boxSizing
		}
		if (d) {
			b = Dc(a, c.width, "width", "pixelWidth");
			a = Dc(a, c.height, "height", "pixelHeight");
			return new A(b, a)
		} else {
			c = Bc(a);
			if (w) {
				b = Ec(a, "paddingLeft");
				d = Ec(a, "paddingRight");
				var e = Ec(a, "paddingTop"), g = Ec(a, "paddingBottom");
				b = new nc(e, d, g, b)
			} else {
				b = qc(a, "paddingLeft");
				d = qc(a, "paddingRight");
				e = qc(a, "paddingTop");
				g = qc(a, "paddingBottom");
				b = new nc(parseFloat(e), parseFloat(d), parseFloat(g),
						parseFloat(b))
			}
			if (w) {
				d = Fc(a, "borderLeft");
				e = Fc(a, "borderRight");
				g = Fc(a, "borderTop");
				a = Fc(a, "borderBottom");
				a = new nc(g, e, a, d)
			} else {
				d = qc(a, "borderLeftWidth");
				e = qc(a, "borderRightWidth");
				g = qc(a, "borderTopWidth");
				a = qc(a, "borderBottomWidth");
				a = new nc(parseFloat(g), parseFloat(e), parseFloat(a),
						parseFloat(d))
			}
			return new A(c.width - a.left - b.left - b.right - a.right,
					c.height - a.top - b.top - b.bottom - a.bottom)
		}
	}
	function Dc(a, b, c, d) {
		if (/^\d+px?$/.test(b))
			return parseInt(b, 10);
		else {
			var e = a.style[c], g = a.runtimeStyle[c];
			a.runtimeStyle[c] = a.currentStyle[c];
			a.style[c] = b;
			b = a.style[d];
			a.style[c] = e;
			a.runtimeStyle[c] = g;
			return b
		}
	}
	function Ec(a, b) {
		return Dc(a, a.currentStyle ? a.currentStyle[b] : null, "left",
				"pixelLeft")
	}
	var Gc = {
		thin : 2,
		medium : 4,
		thick : 6
	};
	function Fc(a, b) {
		if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == "none")
			return 0;
		var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
		if (c in Gc)
			return Gc[c];
		return Dc(a, c, "left", "pixelLeft")
	}
	;
	function C() {
		if (Hc)
			Ic[s(this)] = this
	}
	var Hc = false, Ic = {};
	C.prototype.oh = false;
	C.prototype.Zc = function() {
		if (!this.oh) {
			this.oh = true;
			this.za();
			if (Hc) {
				var a = s(this);
				if (!Ic.hasOwnProperty(a))
					throw Error(this
							+ " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
				delete Ic[a]
			}
		}
	};
	C.prototype.za = function() {
		this.Ek && Jc.apply(null, this.Ek)
	};
	function Jc() {
		for ( var a = 0, b = arguments.length; a < b; ++a) {
			var c = arguments[a];
			if (ia(c))
				Jc.apply(null, c);
			else
				c && typeof c.Zc == "function" && c.Zc()
		}
	}
	;
	var Kc = [];
	var Lc = !w || Bb(9), Mc = !w || Bb(9), Nc = w && !z("8");
	!y || z("528");
	x && z("1.9b") || w && z("8") || mb && z("9.5") || y && z("528");
	!x || z("8");
	function D(a, b) {
		C.call(this);
		this.type = a;
		this.currentTarget = this.target = b
	}
	u(D, C);
	p = D.prototype;
	p.za = function() {
		delete this.type;
		delete this.target;
		delete this.currentTarget
	};
	p.Zd = false;
	p.Bf = true;
	p.stopPropagation = function() {
		this.Zd = true
	};
	p.preventDefault = function() {
		this.Bf = false
	};
	function Oc(a) {
		Oc[" "](a);
		return a
	}
	Oc[" "] = ea;
	function Pc(a, b) {
		a && this.cd(a, b)
	}
	u(Pc, D);
	var Qc = [ 1, 4, 2 ];
	p = Pc.prototype;
	p.target = null;
	p.relatedTarget = null;
	p.offsetX = 0;
	p.offsetY = 0;
	p.clientX = 0;
	p.clientY = 0;
	p.screenX = 0;
	p.screenY = 0;
	p.button = 0;
	p.keyCode = 0;
	p.charCode = 0;
	p.ctrlKey = false;
	p.altKey = false;
	p.shiftKey = false;
	p.metaKey = false;
	p.Xh = false;
	p.sb = null;
	p.cd = function(a, b) {
		var c = this.type = a.type;
		D.call(this, c);
		this.target = a.target || a.srcElement;
		this.currentTarget = b;
		var d = a.relatedTarget;
		if (d) {
			if (x) {
				var e;
				a: {
					try {
						Oc(d.nodeName);
						e = true;
						break a
					} catch (g) {
					}
					e = false
				}
				e || (d = null)
			}
		} else if (c == "mouseover")
			d = a.fromElement;
		else if (c == "mouseout")
			d = a.toElement;
		this.relatedTarget = d;
		this.offsetX = y || a.offsetX !== undefined ? a.offsetX : a.layerX;
		this.offsetY = y || a.offsetY !== undefined ? a.offsetY : a.layerY;
		this.clientX = a.clientX !== undefined ? a.clientX : a.pageX;
		this.clientY = a.clientY !== undefined ? a.clientY : a.pageY;
		this.screenX = a.screenX || 0;
		this.screenY = a.screenY || 0;
		this.button = a.button;
		this.keyCode = a.keyCode || 0;
		this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
		this.ctrlKey = a.ctrlKey;
		this.altKey = a.altKey;
		this.shiftKey = a.shiftKey;
		this.metaKey = a.metaKey;
		this.Xh = fb ? a.metaKey : a.ctrlKey;
		this.ul = a.ul;
		this.sb = a;
		delete this.Bf;
		delete this.Zd
	};
	function Rc(a, b) {
		return Lc ? a.sb.button == b : a.type == "click" ? b == 0
				: !!(a.sb.button & Qc[b])
	}
	p.stopPropagation = function() {
		Pc.ga.stopPropagation.call(this);
		if (this.sb.stopPropagation)
			this.sb.stopPropagation();
		else
			this.sb.cancelBubble = true
	};
	p.preventDefault = function() {
		Pc.ga.preventDefault.call(this);
		var a = this.sb;
		if (a.preventDefault)
			a.preventDefault();
		else {
			a.returnValue = false;
			if (Nc)
				try {
					if (a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123)
						a.keyCode = -1
				} catch (b) {
				}
		}
	};
	p.Lk = k("sb");
	p.za = function() {
		Pc.ga.za.call(this);
		this.relatedTarget = this.currentTarget = this.target = this.sb = null
	};
	function Sc() {
	}
	var Tc = 0;
	p = Sc.prototype;
	p.key = 0;
	p.$d = false;
	p.dh = false;
	p.cd = function(a, b, c, d, e, g) {
		if (ka(a))
			this.kj = true;
		else if (a && a.handleEvent && ka(a.handleEvent))
			this.kj = false;
		else
			throw Error("Invalid listener argument");
		this.ze = a;
		this.Jj = b;
		this.src = c;
		this.type = d;
		this.capture = !!e;
		this.jg = g;
		this.dh = false;
		this.key = ++Tc;
		this.$d = false
	};
	p.handleEvent = function(a) {
		if (this.kj)
			return this.ze.call(this.jg || this.src, a);
		return this.ze.handleEvent.call(this.ze, a)
	};
	var Uc = {}, Vc = {}, Wc = {}, Xc = {};
	function E(a, b, c, d, e) {
		if (b)
			if (ha(b)) {
				for ( var g = 0; g < b.length; g++)
					E(a, b[g], c, d, e);
				return null
			} else {
				d = !!d;
				var h = Vc;
				b in h || (h[b] = {
					ta : 0,
					uc : 0
				});
				h = h[b];
				if (!(d in h)) {
					h[d] = {
						ta : 0,
						uc : 0
					};
					h.ta++
				}
				h = h[d];
				var i = s(a), j;
				h.uc++;
				if (h[i]) {
					j = h[i];
					for (g = 0; g < j.length; g++) {
						h = j[g];
						if (h.ze == c && h.jg == e) {
							if (h.$d)
								break;
							return j[g].key
						}
					}
				} else {
					j = h[i] = [];
					h.ta++
				}
				g = Yc();
				g.src = a;
				h = new Sc;
				h.cd(c, g, a, b, d, e);
				c = h.key;
				g.key = c;
				j.push(h);
				Uc[c] = h;
				Wc[i] || (Wc[i] = []);
				Wc[i].push(h);
				if (a.addEventListener) {
					if (a == q || !a.lh)
						a.addEventListener(b, g, d)
				} else
					a.attachEvent(Zc(b), g);
				return c
			}
		else
			throw Error("Invalid event type");
	}
	function Yc() {
		var a = $c, b = Mc ? function(c) {
			return a.call(b.src, b.key, c)
		} : function(c) {
			c = a.call(b.src, b.key, c);
			if (!c)
				return c
		};
		return b
	}
	function ad(a, b, c, d, e) {
		if (ha(b)) {
			for ( var g = 0; g < b.length; g++)
				ad(a, b[g], c, d, e);
			return null
		}
		a = E(a, b, c, d, e);
		Uc[a].dh = true;
		return a
	}
	function H(a, b, c, d, e) {
		if (ha(b)) {
			for ( var g = 0; g < b.length; g++)
				H(a, b[g], c, d, e);
			return null
		}
		d = !!d;
		a = bd(a, b, d);
		if (!a)
			return false;
		for (g = 0; g < a.length; g++)
			if (a[g].ze == c && a[g].capture == d && a[g].jg == e)
				return cd(a[g].key);
		return false
	}
	function cd(a) {
		if (!Uc[a])
			return false;
		var b = Uc[a];
		if (b.$d)
			return false;
		var c = b.src, d = b.type, e = b.Jj, g = b.capture;
		if (c.removeEventListener) {
			if (c == q || !c.lh)
				c.removeEventListener(d, e, g)
		} else
			c.detachEvent && c.detachEvent(Zc(d), e);
		c = s(c);
		e = Vc[d][g][c];
		if (Wc[c]) {
			var h = Wc[c];
			Ua(h, b);
			h.length == 0 && delete Wc[c]
		}
		b.$d = true;
		e.Cj = true;
		dd(d, g, c, e);
		delete Uc[a];
		return true
	}
	function dd(a, b, c, d) {
		if (!d.vg)
			if (d.Cj) {
				for ( var e = 0, g = 0; e < d.length; e++)
					if (d[e].$d)
						d[e].Jj.src = null;
					else {
						if (e != g)
							d[g] = d[e];
						g++
					}
				d.length = g;
				d.Cj = false;
				if (g == 0) {
					delete Vc[a][b][c];
					Vc[a][b].ta--;
					if (Vc[a][b].ta == 0) {
						delete Vc[a][b];
						Vc[a].ta--
					}
					Vc[a].ta == 0 && delete Vc[a]
				}
			}
	}
	function ed(a, b, c) {
		var d = 0, e = a == null, g = b == null, h = c == null;
		c = !!c;
		if (e)
			Jb(Wc, function(j) {
				for ( var l = j.length - 1; l >= 0; l--) {
					var n = j[l];
					if ((g || b == n.type) && (h || c == n.capture)) {
						cd(n.key);
						d++
					}
				}
			});
		else {
			a = s(a);
			if (Wc[a]) {
				a = Wc[a];
				for (e = a.length - 1; e >= 0; e--) {
					var i = a[e];
					if ((g || b == i.type) && (h || c == i.capture)) {
						cd(i.key);
						d++
					}
				}
			}
		}
		return d
	}
	function bd(a, b, c) {
		var d = Vc;
		if (b in d) {
			d = d[b];
			if (c in d) {
				d = d[c];
				a = s(a);
				if (d[a])
					return d[a]
			}
		}
		return null
	}
	function Zc(a) {
		if (a in Xc)
			return Xc[a];
		return Xc[a] = "on" + a
	}
	function fd(a, b, c, d, e) {
		var g = 1;
		b = s(b);
		if (a[b]) {
			a.uc--;
			a = a[b];
			if (a.vg)
				a.vg++;
			else
				a.vg = 1;
			try {
				for ( var h = a.length, i = 0; i < h; i++) {
					var j = a[i];
					if (j && !j.$d)
						g &= gd(j, e) !== false
				}
			} finally {
				a.vg--;
				dd(c, d, b, a)
			}
		}
		return Boolean(g)
	}
	function gd(a, b) {
		var c = a.handleEvent(b);
		a.dh && cd(a.key);
		return c
	}
	function $c(a, b) {
		if (!Uc[a])
			return true;
		var c = Uc[a], d = c.type, e = Vc;
		if (!(d in e))
			return true;
		e = e[d];
		var g, h;
		if (!Mc) {
			g = b || da("window.event");
			var i = true in e, j = false in e;
			if (i) {
				if (g.keyCode < 0 || g.returnValue != undefined)
					return true;
				a: {
					var l = false;
					if (g.keyCode == 0)
						try {
							g.keyCode = -1;
							break a
						} catch (n) {
							l = true
						}
					if (l || g.returnValue == undefined)
						g.returnValue = true
				}
			}
			l = new Pc;
			l.cd(g, this);
			g = true;
			try {
				if (i) {
					for ( var o = [], G = l.currentTarget; G; G = G.parentNode)
						o.push(G);
					h = e[true];
					h.uc = h.ta;
					for ( var F = o.length - 1; !l.Zd && F >= 0 && h.uc; F--) {
						l.currentTarget = o[F];
						g &= fd(h, o[F], d, true, l)
					}
					if (j) {
						h = e[false];
						h.uc = h.ta;
						for (F = 0; !l.Zd && F < o.length && h.uc; F++) {
							l.currentTarget = o[F];
							g &= fd(h, o[F], d, false, l)
						}
					}
				} else
					g = gd(c, l)
			} finally {
				if (o)
					o.length = 0;
				l.Zc()
			}
			return g
		}
		d = new Pc(b, this);
		try {
			g = gd(c, d)
		} finally {
			d.Zc()
		}
		return g
	}
	Kc[Kc.length] = function(a) {
		$c = a($c)
	};
	function jd(a) {
		C.call(this);
		this.Vd = a;
		this.$a = []
	}
	u(jd, C);
	var kd = [];
	jd.prototype.mb = function(a, b, c, d, e) {
		if (!ha(b)) {
			kd[0] = b;
			b = kd
		}
		for ( var g = 0; g < b.length; g++)
			this.$a
					.push(E(a, b[g], c || this, d || false, e || this.Vd
							|| this));
		return this
	};
	jd.prototype.Qb = function(a, b, c, d, e) {
		if (ha(b))
			for ( var g = 0; g < b.length; g++)
				this.Qb(a, b[g], c, d, e);
		else {
			a: {
				c = c || this;
				e = e || this.Vd || this;
				d = !!d;
				if (a = bd(a, b, d))
					for (b = 0; b < a.length; b++)
						if (!a[b].$d && a[b].ze == c && a[b].capture == d
								&& a[b].jg == e) {
							a = a[b];
							break a
						}
				a = null
			}
			if (a) {
				a = a.key;
				cd(a);
				Ua(this.$a, a)
			}
		}
		return this
	};
	function ld(a) {
		Na(a.$a, cd);
		a.$a.length = 0
	}
	jd.prototype.za = function() {
		jd.ga.za.call(this);
		ld(this)
	};
	jd.prototype.handleEvent = function() {
		throw Error("EventHandler.handleEvent not implemented");
	};
	function I() {
		C.call(this)
	}
	u(I, C);
	p = I.prototype;
	p.lh = true;
	p.yf = null;
	p.Mb = aa("yf");
	p.addEventListener = function(a, b, c, d) {
		E(this, a, b, c, d)
	};
	p.removeEventListener = function(a, b, c, d) {
		H(this, a, b, c, d)
	};
	p.dispatchEvent = function(a) {
		a = a;
		var b = a.type || a, c = Vc;
		if (b in c) {
			if (r(a))
				a = new D(a, this);
			else if (a instanceof D)
				a.target = a.target || this;
			else {
				var d = a;
				a = new D(b, this);
				Pb(a, d)
			}
			d = 1;
			var e;
			c = c[b];
			b = true in c;
			var g;
			if (b) {
				e = [];
				for (g = this; g; g = g.yf)
					e.push(g);
				g = c[true];
				g.uc = g.ta;
				for ( var h = e.length - 1; !a.Zd && h >= 0 && g.uc; h--) {
					a.currentTarget = e[h];
					d &= fd(g, e[h], a.type, true, a) && a.Bf != false
				}
			}
			if (false in c) {
				g = c[false];
				g.uc = g.ta;
				if (b)
					for (h = 0; !a.Zd && h < e.length && g.uc; h++) {
						a.currentTarget = e[h];
						d &= fd(g, e[h], a.type, false, a) && a.Bf != false
					}
				else
					for (e = this; !a.Zd && e && g.uc; e = e.yf) {
						a.currentTarget = e;
						d &= fd(g, e, a.type, false, a) && a.Bf != false
					}
			}
			a = Boolean(d)
		} else
			a = true;
		return a
	};
	p.za = function() {
		I.ga.za.call(this);
		ed(this);
		this.yf = null
	};
	function md() {
	}
	fa(md);
	md.prototype.gl = 0;
	md.Hb();
	function J(a) {
		C.call(this);
		this.$c = a || Sb();
		this.Df = nd
	}
	u(J, I);
	J.prototype.Uk = md.Hb();
	var nd = null;
	function od(a, b) {
		switch (a) {
		case 1:
			return b ? "disable" : "enable";
		case 2:
			return b ? "highlight" : "unhighlight";
		case 4:
			return b ? "activate" : "deactivate";
		case 8:
			return b ? "select" : "unselect";
		case 16:
			return b ? "check" : "uncheck";
		case 32:
			return b ? "focus" : "blur";
		case 64:
			return b ? "open" : "close";
		default:
		}
		throw Error("Invalid component state");
	}
	p = J.prototype;
	p.bd = null;
	p.Ja = false;
	p.ia = null;
	p.Df = null;
	p.vf = null;
	p.Fa = null;
	p.Ea = null;
	p.Ec = null;
	p.Ll = false;
	function pd(a) {
		return a.bd || (a.bd = ":" + (a.Uk.gl++).toString(36))
	}
	p.aa = k("ia");
	function qd(a) {
		return a.te || (a.te = new jd(a))
	}
	function rd(a, b) {
		if (a == b)
			throw Error("Unable to set parent component");
		if (b && a.Fa && a.bd
				&& (a.Fa.Ec && a.bd ? Nb(a.Fa.Ec, a.bd) || null : null)
				&& a.Fa != b)
			throw Error("Unable to set parent component");
		a.Fa = b;
		J.ga.Mb.call(a, b)
	}
	p.Mb = function(a) {
		if (this.Fa && this.Fa != a)
			throw Error("Method not supported");
		J.ga.Mb.call(this, a)
	};
	p.$b = k("$c");
	p.la = function() {
		this.ia = this.$c.createElement("div")
	};
	function sd(a, b, c) {
		if (a.Ja)
			throw Error("Component already rendered");
		a.ia || a.la();
		b ? b.insertBefore(a.ia, c || null) : a.$c.$.body.appendChild(a.ia);
		if (!a.Fa || a.Fa.Ja)
			a.xa()
	}
	p.xa = function() {
		this.Ja = true;
		this.Ea && Na(this.Ea, function(a) {
			!a.Ja && a.aa() && a.xa()
		}, void 0)
	};
	p.Rd = function() {
		this.Ea && Na(this.Ea, function(a) {
			a.Ja && a.Rd()
		}, void 0);
		this.te && ld(this.te);
		this.Ja = false
	};
	p.za = function() {
		J.ga.za.call(this);
		this.Ja && this.Rd();
		if (this.te) {
			this.te.Zc();
			delete this.te
		}
		this.Ea && Na(this.Ea, function(a) {
			a.Zc()
		}, void 0);
		!this.Ll && this.ia && fc(this.ia);
		this.Fa = this.vf = this.ia = this.Ec = this.Ea = null
	};
	p.Ha = function(a, b) {
		td(this, a, this.Ea ? this.Ea.length : 0, b)
	};
	function td(a, b, c, d) {
		if (b.Ja && (d || !a.Ja))
			throw Error("Component already rendered");
		if (c < 0 || c > (a.Ea ? a.Ea.length : 0))
			throw Error("Child component index out of bounds");
		if (!a.Ec || !a.Ea) {
			a.Ec = {};
			a.Ea = []
		}
		if (b.Fa == a) {
			var e = pd(b);
			a.Ec[e] = b;
			Ua(a.Ea, b)
		} else {
			e = a.Ec;
			var g = pd(b);
			if (g in e)
				throw Error('The object already contains the key "' + g + '"');
			e[g] = b
		}
		rd(b, a);
		Xa(a.Ea, c, 0, b);
		if (b.Ja && a.Ja && b.Fa == a) {
			a = a.Jc();
			a.insertBefore(b.aa(), a.childNodes[c] || null)
		} else if (d) {
			a.ia || a.la();
			c = a.Ea ? a.Ea[c + 1] || null : null;
			sd(b, a.Jc(), c ? c.ia : null)
		} else
			a.Ja && !b.Ja && b.ia && b.xa()
	}
	p.Jc = k("ia");
	p.Ue = function(a) {
		if (this.Ja)
			throw Error("Component already rendered");
		this.Df = a
	};
	p.removeChild = function(a, b) {
		if (a) {
			var c = r(a) ? a : pd(a);
			a = this.Ec && c ? Nb(this.Ec, c) || null : null;
			if (c && a) {
				var d = this.Ec;
				c in d && delete d[c];
				Ua(this.Ea, a);
				if (b) {
					a.Rd();
					a.ia && fc(a.ia)
				}
				rd(a, null)
			}
		}
		if (!a)
			throw Error("Child is not in parent component");
		return a
	};
	function ud(a, b, c, d, e) {
		if (!w && !(y && z("525")))
			return true;
		if (fb && e)
			return vd(a);
		if (e && !d)
			return false;
		if (!c && (b == 17 || b == 18))
			return false;
		if (w && d && b == a)
			return false;
		switch (a) {
		case 13:
			return !(w && Bb(9));
		case 27:
			return !y
		}
		return vd(a)
	}
	function vd(a) {
		if (a >= 48 && a <= 57)
			return true;
		if (a >= 96 && a <= 106)
			return true;
		if (a >= 65 && a <= 90)
			return true;
		if (y && a == 0)
			return true;
		switch (a) {
		case 32:
		case 63:
		case 107:
		case 109:
		case 110:
		case 111:
		case 186:
		case 59:
		case 189:
		case 187:
		case 188:
		case 190:
		case 191:
		case 192:
		case 222:
		case 219:
		case 220:
		case 221:
			return true;
		default:
			return false
		}
	}
	;
	function wd() {
	}
	var xd;
	fa(wd);
	p = wd.prototype;
	p.uh = f();
	p.la = function(a) {
		var b = a.$b().la("div", yd(this, a).join(" "), a.ke);
		Ka(a);
		Ka(b);
		a.Ka() || this.kd(b, 1, true);
		a.Lc() && this.kd(b, 8, true);
		a.Ob & 16 && this.kd(b, 16, !!(a.ob & 16));
		a.Ob & 64 && this.kd(b, 64, !!(a.ob & 64));
		return b
	};
	p.Jc = function(a) {
		return a
	};
	p.kf = function(a, b, c) {
		if (a = a.aa ? a.aa() : a)
			if (w && !z("7")) {
				var d = zd(this, Fb(a), b);
				d.push(b);
				qa(c ? Gb : Hb, a).apply(null, d)
			} else
				c ? Gb(a, b) : Hb(a, b)
	};
	p.Gh = function(a) {
		if (a.Df == null)
			a.Df = "rtl" == rc(a.Ja ? a.ia : a.$c.$.body, "direction");
		a.Df && this.Ue(a.aa(), true);
		a.Ka() && this.Ff(a, a.we())
	};
	p.Eg = function(a, b) {
		var c = !b, d = w || mb ? a.getElementsByTagName("*") : null;
		if (Ac) {
			c = c ? "none" : "";
			a.style[Ac] = c;
			if (d)
				for ( var e = 0, g; g = d[e]; e++)
					g.style[Ac] = c
		} else if (w || mb) {
			c = c ? "on" : "";
			a.setAttribute("unselectable", c);
			if (d)
				for (e = 0; g = d[e]; e++)
					g.setAttribute("unselectable", c)
		}
	};
	p.Ue = function(a, b) {
		this.kf(a, this.qe() + "-rtl", b)
	};
	p.jj = function(a) {
		var b;
		if (a.Ob & 32 && (b = a.Ud()))
			return kc(b);
		return false
	};
	p.Ff = function(a, b) {
		var c;
		if (a.Ob & 32 && (c = a.Ud())) {
			if (!b && a.ob & 32) {
				try {
					c.blur()
				} catch (d) {
				}
				a.ob & 32 && a.Xi(null)
			}
			if (kc(c) != b) {
				c = c;
				if (b)
					c.tabIndex = 0;
				else {
					c.tabIndex = -1;
					c.removeAttribute("tabIndex")
				}
			}
		}
	};
	p.di = function(a, b) {
		a.style.display = b ? "" : "none"
	};
	p.gc = function(a, b, c) {
		var d = a.aa();
		if (d) {
			var e = Ad(this, b);
			e && this.kf(a, e, c);
			this.kd(d, b, c)
		}
	};
	p.kd = function(a, b, c) {
		xd
				|| (xd = Qb(1, "disabled", 8, "selected", 16, "checked", 64,
						"expanded"));
		(b = xd[b]) && a.setAttribute("aria-" + b, c)
	};
	p.Me = function(a, b) {
		var c = this.Jc(a);
		if (c) {
			ec(c);
			if (b)
				if (r(b))
					hc(c, b);
				else {
					var d = function(e) {
						if (e) {
							var g = Ub(c);
							c.appendChild(r(e) ? g.createTextNode(e) : e)
						}
					};
					if (ha(b))
						Na(b, d);
					else
						ia(b) && !("nodeType" in b) ? Na(Wa(b), d) : d(b)
				}
		}
	};
	p.Ud = function(a) {
		return a.aa()
	};
	p.qe = m("goog-control");
	function yd(a, b) {
		var c = a.qe(), d = [ c ], e = a.qe();
		e != c && d.push(e);
		c = b.ob;
		for (e = []; c;) {
			var g = c & -c;
			e.push(Ad(a, g));
			c &= ~g
		}
		d.push.apply(d, e);
		(c = b.Hc) && d.push.apply(d, c);
		w && !z("7") && d.push.apply(d, zd(a, d));
		return d
	}
	function zd(a, b, c) {
		var d = [];
		if (c)
			b = b.concat([ c ]);
		Na([], function(e) {
			if (Ra(e, qa(Sa, b)) && (!c || Sa(e, c)))
				d.push(e.join("_"))
		});
		return d
	}
	function Ad(a, b) {
		if (!a.Di) {
			var c = a.qe();
			a.Di = Qb(1, c + "-disabled", 2, c + "-hover", 4, c + "-active", 8,
					c + "-selected", 16, c + "-checked", 32, c + "-focused",
					64, c + "-open")
		}
		return a.Di[b]
	}
	;
	function Bd() {
	}
	u(Bd, wd);
	fa(Bd);
	p = Bd.prototype;
	p.uh = m("button");
	p.kd = function(a, b, c) {
		b == 16 ? a.setAttribute("aria-pressed", c) : Bd.ga.kd.call(this, a, b,
				c)
	};
	p.la = function(a) {
		var b = Bd.ga.la.call(this, a), c = a.yh();
		c && this.ci(b, c);
		(c = a.ig()) && this.Gg(b, c);
		a.Ob & 16 && this.kd(b, 16, !!(a.ob & 16));
		return b
	};
	p.ig = ea;
	p.Gg = ea;
	p.yh = function(a) {
		return a.title
	};
	p.ci = function(a, b) {
		if (a)
			a.title = b || ""
	};
	p.qe = m("goog-button");
	function Cd(a, b) {
		C.call(this);
		a && Dd(this, a, b)
	}
	u(Cd, I);
	p = Cd.prototype;
	p.ia = null;
	p.qg = null;
	p.Jh = null;
	p.rg = null;
	p.td = -1;
	p.sd = -1;
	var Ed = {
		"3" : 13,
		"12" : 144,
		"63232" : 38,
		"63233" : 40,
		"63234" : 37,
		"63235" : 39,
		"63236" : 112,
		"63237" : 113,
		"63238" : 114,
		"63239" : 115,
		"63240" : 116,
		"63241" : 117,
		"63242" : 118,
		"63243" : 119,
		"63244" : 120,
		"63245" : 121,
		"63246" : 122,
		"63247" : 123,
		"63248" : 44,
		"63272" : 46,
		"63273" : 36,
		"63275" : 35,
		"63276" : 33,
		"63277" : 34,
		"63289" : 144,
		"63302" : 45
	}, Fd = {
		Up : 38,
		Down : 40,
		Left : 37,
		Right : 39,
		Enter : 13,
		F1 : 112,
		F2 : 113,
		F3 : 114,
		F4 : 115,
		F5 : 116,
		F6 : 117,
		F7 : 118,
		F8 : 119,
		F9 : 120,
		F10 : 121,
		F11 : 122,
		F12 : 123,
		"U+007F" : 46,
		Home : 36,
		End : 35,
		PageUp : 33,
		PageDown : 34,
		Insert : 45
	}, Gd = {
		61 : 187,
		59 : 186
	}, Hd = w || y && z("525");
	p = Cd.prototype;
	p.ue = function(a) {
		if (y && (this.td == 17 && !a.ctrlKey || this.td == 18 && !a.altKey))
			this.sd = this.td = -1;
		if (Hd && !ud(a.keyCode, this.td, a.shiftKey, a.ctrlKey, a.altKey))
			this.handleEvent(a);
		else
			this.sd = x && a.keyCode in Gd ? Gd[a.keyCode] : a.keyCode
	};
	p.Qk = function() {
		this.sd = this.td = -1
	};
	p.handleEvent = function(a) {
		var b = a.sb, c, d;
		if (w && a.type == "keypress") {
			c = this.sd;
			d = c != 13 && c != 27 ? b.keyCode : 0
		} else if (y && a.type == "keypress") {
			c = this.sd;
			d = b.charCode >= 0 && b.charCode < 63232 && vd(c) ? b.charCode : 0
		} else if (mb) {
			c = this.sd;
			d = vd(c) ? b.keyCode : 0
		} else {
			c = b.keyCode || this.sd;
			d = b.charCode || 0;
			if (fb && d == 63 && !c)
				c = 191
		}
		var e = c, g = b.keyIdentifier;
		if (c)
			if (c >= 63232 && c in Ed)
				e = Ed[c];
			else {
				if (c == 25 && a.shiftKey)
					e = 9
			}
		else if (g && g in Fd)
			e = Fd[g];
		a = e == this.td;
		this.td = e;
		b = new Id(e, d, a, b);
		try {
			this.dispatchEvent(b)
		} finally {
			b.Zc()
		}
	};
	p.aa = k("ia");
	function Dd(a, b, c) {
		a.rg && a.detach();
		a.ia = b;
		a.qg = E(a.ia, "keypress", a, c);
		a.Jh = E(a.ia, "keydown", a.ue, c, a);
		a.rg = E(a.ia, "keyup", a.Qk, c, a)
	}
	p.detach = function() {
		if (this.qg) {
			cd(this.qg);
			cd(this.Jh);
			cd(this.rg);
			this.rg = this.Jh = this.qg = null
		}
		this.ia = null;
		this.sd = this.td = -1
	};
	p.za = function() {
		Cd.ga.za.call(this);
		this.detach()
	};
	function Id(a, b, c, d) {
		d && this.cd(d, void 0);
		this.type = "key";
		this.keyCode = a;
		this.charCode = b;
		this.repeat = c
	}
	u(Id, Pc);
	function Jd(a, b) {
		if (!a)
			throw Error("Invalid class name " + a);
		if (!ka(b))
			throw Error("Invalid decorator function " + b);
		Kd[a] = b
	}
	var Ld = {}, Kd = {};
	function Md(a, b, c) {
		J.call(this, c);
		if (!(b = b)) {
			b = this.constructor;
			for ( var d; b;) {
				d = s(b);
				if (d = Ld[d])
					break;
				b = b.ga ? b.ga.constructor : null
			}
			b = d ? ka(d.Hb) ? d.Hb() : new d : null
		}
		this.Va = b;
		this.ke = a
	}
	u(Md, J);
	p = Md.prototype;
	p.ke = null;
	p.ob = 0;
	p.Ob = 39;
	p.wi = 255;
	p.vl = 0;
	p.li = true;
	p.Hc = null;
	p.Ch = true;
	p.Ug = false;
	p.jl = null;
	p.Ud = function() {
		return this.Va.Ud(this)
	};
	p.kf = function(a, b) {
		if (b) {
			if (a) {
				if (this.Hc)
					Sa(this.Hc, a) || this.Hc.push(a);
				else
					this.Hc = [ a ];
				this.Va.kf(this, a, true)
			}
		} else if (a && this.Hc) {
			Ua(this.Hc, a);
			if (this.Hc.length == 0)
				this.Hc = null;
			this.Va.kf(this, a, false)
		}
	};
	p.la = function() {
		var a = this.Va.la(this);
		this.ia = a;
		var b = this.jl || this.Va.uh();
		if (b) {
			a.setAttribute("role", b);
			a.zm = b
		}
		this.Ug || this.Va.Eg(a, false);
		this.we() || this.Va.di(a, false)
	};
	p.Jc = function() {
		return this.Va.Jc(this.aa())
	};
	p.xa = function() {
		Md.ga.xa.call(this);
		this.Va.Gh(this);
		if (this.Ob & -2) {
			this.Ch && Nd(this, true);
			if (this.Ob & 32) {
				var a = this.Ud();
				if (a) {
					var b = this.dd || (this.dd = new Cd);
					Dd(b, a);
					qd(this).mb(b, "key", this.Pk).mb(a, "focus", this.Ok).mb(
							a, "blur", this.Xi)
				}
			}
		}
	};
	function Nd(a, b) {
		var c = qd(a), d = a.aa();
		if (b) {
			c.mb(d, "mouseover", a.bj).mb(d, "mousedown", a.$i).mb(d,
					"mouseup", a.cj).mb(d, "mouseout", a.aj);
			w && c.mb(d, "dblclick", a.Yi)
		} else {
			c.Qb(d, "mouseover", a.bj).Qb(d, "mousedown", a.$i).Qb(d,
					"mouseup", a.cj).Qb(d, "mouseout", a.aj);
			w && c.Qb(d, "dblclick", a.Yi)
		}
	}
	p.Rd = function() {
		Md.ga.Rd.call(this);
		this.dd && this.dd.detach();
		this.we() && this.Ka() && this.Va.Ff(this, false)
	};
	p.za = function() {
		Md.ga.za.call(this);
		if (this.dd) {
			this.dd.Zc();
			delete this.dd
		}
		delete this.Va;
		this.Hc = this.ke = null
	};
	p.Me = function(a) {
		this.Va.Me(this.aa(), a);
		this.ke = a
	};
	function Pd(a) {
		a = a.ke;
		if (!a)
			return "";
		if (r(a))
			a = a;
		else {
			if (ha(a))
				a = Oa(a, lc).join("");
			else {
				if (Eb && "innerText" in a)
					a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
				else {
					var b = [];
					mc(a, b, true);
					a = b.join("")
				}
				a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
				a = a.replace(/\u200B/g, "");
				Eb || (a = a.replace(/ +/g, " "));
				if (a != " ")
					a = a.replace(/^\s*/, "");
				a = a
			}
			a = a
		}
		return a.replace(/[\t\r\n ]+/g, " ").replace(
				/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
	}
	p.Ue = function(a) {
		Md.ga.Ue.call(this, a);
		var b = this.aa();
		b && this.Va.Ue(b, a)
	};
	p.Eg = function(a) {
		this.Ug = a;
		var b = this.aa();
		b && this.Va.Eg(b, a)
	};
	p.we = k("li");
	p.di = function(a, b) {
		if (b || this.li != a && this.dispatchEvent(a ? "show" : "hide")) {
			var c = this.aa();
			c && this.Va.di(c, a);
			this.Ka() && this.Va.Ff(this, a);
			this.li = a;
			return true
		}
		return false
	};
	p.Ka = function() {
		return !!!(this.ob & 1)
	};
	p.Da = function(a) {
		var b = this.Fa;
		if (!(b && typeof b.Ka == "function" && !b.Ka()) && Qd(this, 1, !a)) {
			if (!a) {
				this.setActive(false);
				Rd(this, false)
			}
			this.we() && this.Va.Ff(this, a);
			this.gc(1, !a)
		}
	};
	function Rd(a, b) {
		Qd(a, 2, b) && a.gc(2, b)
	}
	p.ij = function() {
		return !!(this.ob & 4)
	};
	p.setActive = function(a) {
		Qd(this, 4, a) && this.gc(4, a)
	};
	p.Lc = function() {
		return !!(this.ob & 8)
	};
	p.Bd = function(a) {
		Qd(this, 8, a) && this.gc(8, a)
	};
	function Sd(a, b) {
		Qd(a, 64, b) && a.gc(64, b)
	}
	p.gc = function(a, b) {
		if (this.Ob & a && b != !!(this.ob & a)) {
			this.Va.gc(this, a, b);
			this.ob = b ? this.ob | a : this.ob & ~a
		}
	};
	function Td(a, b, c) {
		if (a.Ja && a.ob & b && !c)
			throw Error("Component already rendered");
		!c && a.ob & b && a.gc(b, false);
		a.Ob = c ? a.Ob | b : a.Ob & ~b
	}
	function Ud(a, b) {
		return !!(a.wi & b) && !!(a.Ob & b)
	}
	function Qd(a, b, c) {
		return !!(a.Ob & b) && !!(a.ob & b) != c
				&& (!(a.vl & b) || a.dispatchEvent(od(b, c))) && !a.oh
	}
	p.bj = function(a) {
		!Vd(a, this.aa()) && this.dispatchEvent("enter") && this.Ka()
				&& Ud(this, 2) && Rd(this, true)
	};
	p.aj = function(a) {
		if (!Vd(a, this.aa()) && this.dispatchEvent("leave")) {
			Ud(this, 4) && this.setActive(false);
			Ud(this, 2) && Rd(this, false)
		}
	};
	function Vd(a, b) {
		return !!a.relatedTarget && gc(b, a.relatedTarget)
	}
	p.$i = function(a) {
		if (this.Ka()) {
			Ud(this, 2) && Rd(this, true);
			if (Rc(a, 0) && !(y && fb && a.ctrlKey)) {
				Ud(this, 4) && this.setActive(true);
				this.Va.jj(this) && this.Ud().focus()
			}
		}
		!this.Ug && Rc(a, 0) && !(y && fb && a.ctrlKey) && a.preventDefault()
	};
	p.cj = function(a) {
		if (this.Ka()) {
			Ud(this, 2) && Rd(this, true);
			this.ij() && this.zf(a) && Ud(this, 4) && this.setActive(false)
		}
	};
	p.Yi = function(a) {
		this.Ka() && this.zf(a)
	};
	p.zf = function(a) {
		if (Ud(this, 16)) {
			var b = !!!(this.ob & 16);
			Qd(this, 16, b) && this.gc(16, b)
		}
		Ud(this, 8) && this.Bd(true);
		Ud(this, 64) && Sd(this, !!!(this.ob & 64));
		b = new D("action", this);
		if (a) {
			b.altKey = a.altKey;
			b.ctrlKey = a.ctrlKey;
			b.metaKey = a.metaKey;
			b.shiftKey = a.shiftKey;
			b.Xh = a.Xh
		}
		return this.dispatchEvent(b)
	};
	p.Ok = function() {
		Ud(this, 32) && Qd(this, 32, true) && this.gc(32, true)
	};
	p.Xi = function() {
		Ud(this, 4) && this.setActive(false);
		Ud(this, 32) && Qd(this, 32, false) && this.gc(32, false)
	};
	p.Pk = function(a) {
		if (this.we() && this.Ka() && this.Ah(a)) {
			a.preventDefault();
			a.stopPropagation();
			return true
		}
		return false
	};
	p.Ah = function(a) {
		return a.keyCode == 13 && this.zf(a)
	};
	if (!ka(Md))
		throw Error("Invalid component class " + Md);
	if (!ka(wd))
		throw Error("Invalid renderer class " + wd);
	var Wd = s(Md);
	Ld[Wd] = wd;
	Jd("goog-control", function() {
		return new Md(null)
	});
	function Xd() {
	}
	u(Xd, Bd);
	fa(Xd);
	p = Xd.prototype;
	p.uh = f();
	p.la = function(a) {
		a.Ja && false != a.Ch && Nd(a, false);
		a.Ch = false;
		a.wi &= -256;
		Td(a, 32, false);
		return a.$b().la("button", {
			"class" : yd(this, a).join(" "),
			disabled : !a.Ka(),
			title : a.yh() || "",
			value : a.ig() || ""
		}, Pd(a) || "")
	};
	p.Gh = function(a) {
		qd(a).mb(a.aa(), "click", a.zf)
	};
	p.Eg = ea;
	p.Ue = ea;
	p.jj = function(a) {
		return a.Ka()
	};
	p.Ff = ea;
	p.gc = function(a, b, c) {
		Xd.ga.gc.call(this, a, b, c);
		if ((a = a.aa()) && b == 1)
			a.disabled = c
	};
	p.ig = function(a) {
		return a.value
	};
	p.Gg = function(a, b) {
		if (a)
			a.value = b
	};
	p.kd = ea;
	function Yd(a, b, c) {
		Md.call(this, a, b || Xd.Hb(), c)
	}
	u(Yd, Md);
	p = Yd.prototype;
	p.ig = k("ck");
	p.Gg = function(a) {
		this.ck = a;
		this.Va.Gg(this.aa(), a)
	};
	p.yh = k("$j");
	p.ci = function(a) {
		this.$j = a;
		this.Va.ci(this.aa(), a)
	};
	p.za = function() {
		Yd.ga.za.call(this);
		delete this.ck;
		delete this.$j
	};
	p.xa = function() {
		Yd.ga.xa.call(this);
		if (this.Ob & 32) {
			var a = this.Ud();
			a && qd(this).mb(a, "keyup", this.Ah)
		}
	};
	p.Ah = function(a) {
		if (a.keyCode == 13 && a.type == "key" || a.keyCode == 32
				&& a.type == "keyup")
			return this.zf(a);
		return a.keyCode == 32
	};
	Jd("goog-button", function() {
		return new Yd(null)
	});
	var Zd, $d;
	$d = Zd = false;
	var ae = ib();
	if (ae)
		if (ae.indexOf("Firefox") != -1)
			Zd = true;
		else if (ae.indexOf("Camino") == -1)
			if (!(ae.indexOf("iPhone") != -1 || ae.indexOf("iPod") != -1))
				if (ae.indexOf("iPad") == -1)
					if (ae.indexOf("Android") == -1)
						if (ae.indexOf("Chrome") != -1)
							$d = true;
	var be = Zd, ce = $d;
	function de(a, b) {
		C.call(this);
		this.ng = a || 1;
		this.Kf = b || ee;
		this.$g = t(this.Bl, this);
		this.Mh = ra()
	}
	u(de, I);
	de.prototype.enabled = false;
	var ee = q.window;
	p = de.prototype;
	p.ce = null;
	p.Bl = function() {
		if (this.enabled) {
			var a = ra() - this.Mh;
			if (a > 0 && a < this.ng * 0.8)
				this.ce = this.Kf.setTimeout(this.$g, this.ng - a);
			else {
				this.dispatchEvent(fe);
				if (this.enabled) {
					this.ce = this.Kf.setTimeout(this.$g, this.ng);
					this.Mh = ra()
				}
			}
		}
	};
	p.start = function() {
		this.enabled = true;
		if (!this.ce) {
			this.ce = this.Kf.setTimeout(this.$g, this.ng);
			this.Mh = ra()
		}
	};
	p.stop = function() {
		this.enabled = false;
		if (this.ce) {
			this.Kf.clearTimeout(this.ce);
			this.ce = null
		}
	};
	p.za = function() {
		de.ga.za.call(this);
		this.stop();
		delete this.Kf
	};
	var fe = "tick";
	function ge(a, b, c) {
		if (ka(a)) {
			if (c)
				a = t(a, c)
		} else if (a && typeof a.handleEvent == "function")
			a = t(a.handleEvent, a);
		else
			throw Error("Invalid listener argument");
		return b > 2147483647 ? -1 : ee.setTimeout(a, b || 0)
	}
	;
	function he() {
		this.cb = [];
		this.ta = [];
		this.Ub = []
	}
	he.prototype.kc = null;
	he.prototype.qb = null;
	he.prototype.Rc = true;
	var ie = [];
	ie[0] = 2;
	ie[1] = 2;
	ie[2] = 6;
	ie[3] = 6;
	ie[4] = 0;
	function je(a, b) {
		if (b.qb) {
			Array.prototype.push.apply(a.cb, b.cb);
			Array.prototype.push.apply(a.ta, b.ta);
			Array.prototype.push.apply(a.Ub, b.Ub);
			a.qb = b.qb.concat();
			a.kc = b.kc.concat();
			a.Rc = a.Rc && b.Rc
		}
		return a
	}
	p = he.prototype;
	p.clear = function() {
		this.cb.length = 0;
		this.ta.length = 0;
		this.Ub.length = 0;
		delete this.kc;
		delete this.qb;
		delete this.Rc;
		return this
	};
	p.moveTo = function(a, b) {
		if (this.cb[this.cb.length - 1] == 0)
			this.Ub.length -= 2;
		else {
			this.cb.push(0);
			this.ta.push(1)
		}
		this.Ub.push(a, b);
		this.qb = this.kc = [ a, b ];
		return this
	};
	p.lineTo = function() {
		var a = this.cb[this.cb.length - 1];
		if (a == null)
			throw Error("Path cannot start with lineTo");
		if (a != 1) {
			this.cb.push(1);
			this.ta.push(0)
		}
		for (a = 0; a < arguments.length; a += 2) {
			var b = arguments[a], c = arguments[a + 1];
			this.Ub.push(b, c)
		}
		this.ta[this.ta.length - 1] += a / 2;
		this.qb = [ b, c ];
		return this
	};
	p.kh = function() {
		var a = this.cb[this.cb.length - 1];
		if (a == null)
			throw Error("Path cannot start with curve");
		if (a != 2) {
			this.cb.push(2);
			this.ta.push(0)
		}
		for (a = 0; a < arguments.length; a += 6) {
			var b = arguments[a + 4], c = arguments[a + 5];
			this.Ub.push(arguments[a], arguments[a + 1], arguments[a + 2],
					arguments[a + 3], b, c)
		}
		this.ta[this.ta.length - 1] += a / 6;
		this.qb = [ b, c ];
		return this
	};
	p.close = function() {
		var a = this.cb[this.cb.length - 1];
		if (a == null)
			throw Error("Path cannot start with close");
		if (a != 4) {
			this.cb.push(4);
			this.ta.push(1);
			this.qb = this.kc
		}
		return this
	};
	p.Ua = function(a, b, c, d) {
		var e = this.qb[0] - a * Math.cos(c * Math.PI / 180), g = this.qb[1]
				- b * Math.sin(c * Math.PI / 180), h = d * Math.PI / 180;
		d = Math.ceil(Math.abs(h) / Math.PI * 2);
		h = h / d;
		c = c * Math.PI / 180;
		for ( var i = 0; i < d; i++) {
			var j = Math.cos(c), l = Math.sin(c), n = 4 / 3 * Math.sin(h / 2)
					/ (1 + Math.cos(h / 2)), o = e + (j - n * l) * a, G = g
					+ (l + n * j) * b;
			c += h;
			j = Math.cos(c);
			l = Math.sin(c);
			this.kh(o, G, e + (j + n * l) * a, g + (l - n * j) * b, e + j * a,
					g + l * b)
		}
		return this
	};
	function ke(a, b) {
		for ( var c = a.Ub, d = 0, e = 0, g = a.cb.length; e < g; e++) {
			var h = a.cb[e], i = ie[h] * a.ta[e];
			b(h, c.slice(d, d + i));
			d += i
		}
	}
	p.bb = function() {
		var a = new this.constructor;
		a.cb = this.cb.concat();
		a.ta = this.ta.concat();
		a.Ub = this.Ub.concat();
		a.kc = this.kc && this.kc.concat();
		a.qb = this.qb && this.qb.concat();
		a.Rc = this.Rc;
		return a
	};
	var le = {};
	le[0] = he.prototype.moveTo;
	le[1] = he.prototype.lineTo;
	le[4] = he.prototype.close;
	le[2] = he.prototype.kh;
	le[3] = he.prototype.Ua;
	function me(a) {
		if (a.Rc)
			return a.bb();
		var b = new he;
		ke(a, function(c, d) {
			le[c].apply(b, d)
		});
		return b
	}
	he.prototype.transform = function(a) {
		if (!this.Rc)
			throw Error("Non-simple path");
		a.transform(this.Ub, 0, this.Ub, 0, this.Ub.length / 2);
		this.kc && a.transform(this.kc, 0, this.kc, 0, 1);
		this.qb && this.kc != this.qb && a.transform(this.qb, 0, this.qb, 0, 1);
		return this
	};
	he.prototype.gb = function() {
		return this.cb.length == 0
	};
	function ne(a, b, c, d, e) {
		J.call(this, e);
		this.width = a;
		this.height = b;
		this.Gc = c || null;
		this.hf = d || null
	}
	u(ne, J);
	p = ne.prototype;
	p.xb = null;
	p.Xc = 0;
	p.od = 0;
	p.yd = function(a, b) {
		this.Gc = a;
		this.hf = b
	};
	function oe(a) {
		return a.Gc ? new A(a.Gc, a.hf) : a.rd()
	}
	p.hg = function() {
		return this.rd()
	};
	p.rd = function() {
		if (this.Ja)
			return yc(this.aa());
		if (ja(this.width) && ja(this.height))
			return new A(this.width, this.height);
		return null
	};
	function pe(a) {
		var b = a.rd();
		return b ? b.width / oe(a).width : 0
	}
	p.Zf = function() {
		return new he
	};
	function qe() {
	}
	;
	function re(a, b) {
		this.mc = a;
		this.Ee = b || 1
	}
	u(re, qe);
	function se(a, b) {
		this.jc = a;
		this.mc = b
	}
	;
	function K(a, b, c, d, e, g) {
		if (arguments.length == 6)
			this.setTransform(a, b, c, d, e, g);
		else if (arguments.length != 0)
			throw Error("Insufficient matrix parameters");
		else {
			this.nb = this.Kb = 1;
			this.dc = this.cc = this.rc = this.sc = 0
		}
	}
	p = K.prototype;
	p.bb = function() {
		return new K(this.nb, this.dc, this.cc, this.Kb, this.rc, this.sc)
	};
	p.setTransform = function(a, b, c, d, e, g) {
		if (!ja(a) || !ja(b) || !ja(c) || !ja(d) || !ja(e) || !ja(g))
			throw Error("Invalid transform parameters");
		this.nb = a;
		this.dc = b;
		this.cc = c;
		this.Kb = d;
		this.rc = e;
		this.sc = g;
		return this
	};
	p.scale = function(a, b) {
		this.nb *= a;
		this.dc *= a;
		this.cc *= b;
		this.Kb *= b;
		return this
	};
	p.translate = function(a, b) {
		this.rc += a * this.nb + b * this.cc;
		this.sc += a * this.dc + b * this.Kb;
		return this
	};
	p.rotate = function(a, b, c) {
		var d = new K, e = Math.cos(a);
		a = Math.sin(a);
		b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e);
		c = this.nb;
		d = this.cc;
		this.nb = b.nb * c + b.dc * d;
		this.cc = b.cc * c + b.Kb * d;
		this.rc += b.rc * c + b.sc * d;
		c = this.dc;
		d = this.Kb;
		this.dc = b.nb * c + b.dc * d;
		this.Kb = b.cc * c + b.Kb * d;
		this.sc += b.rc * c + b.sc * d;
		return this
	};
	p.toString = function() {
		return "matrix("
				+ [ this.nb, this.dc, this.cc, this.Kb, this.rc, this.sc ]
						.join(",") + ")"
	};
	p.transform = function(a, b, c, d, e) {
		var g = b;
		d = d;
		for (b = b + 2 * e; g < b;) {
			e = a[g++];
			var h = a[g++];
			c[d++] = e * this.nb + h * this.cc + this.rc;
			c[d++] = e * this.dc + h * this.Kb + this.sc
		}
	};
	function te(a) {
		var b = a.nb * a.Kb - a.cc * a.dc;
		return new K(a.Kb / b, -a.dc / b, -a.cc / b, a.nb / b,
				(a.cc * a.sc - a.Kb * a.rc) / b, (a.dc * a.rc - a.nb * a.sc)
						/ b)
	}
	;
	function ue(a, b) {
		C.call(this);
		this.ia = a;
		this.oa = b;
		this.lh = false
	}
	u(ue, I);
	p = ue.prototype;
	p.oa = null;
	p.ia = null;
	p.Qa = null;
	p.aa = k("ia");
	p.addEventListener = function(a, b, c, d) {
		E(this.ia, a, b, c, d)
	};
	p.removeEventListener = function(a, b, c, d) {
		H(this.ia, a, b, c, d)
	};
	p.za = function() {
		ue.ga.za.call(this);
		ed(this.ia)
	};
	function ve(a, b, c, d) {
		ue.call(this, a, b);
		this.Ve(c);
		this.hb(d)
	}
	u(ve, ue);
	ve.prototype.fill = null;
	ve.prototype.ub = null;
	ve.prototype.hb = function(a) {
		this.fill = a;
		this.oa.Qj(this, a)
	};
	ve.prototype.Ve = function(a) {
		this.ub = a;
		this.oa.Pe(this, a)
	};
	function we(a, b, c, d) {
		ve.call(this, a, b, c, d)
	}
	u(we, ve);
	function xe(a, b) {
		ue.call(this, a, b)
	}
	u(xe, ue);
	function ze(a, b, c, d) {
		ve.call(this, a, b, c, d)
	}
	u(ze, ve);
	function Ae(a, b) {
		ue.call(this, a, b)
	}
	u(Ae, xe);
	Ae.prototype.clear = function() {
		ec(this.aa())
	};
	function Be(a, b, c, d) {
		ve.call(this, a, b, c, d)
	}
	u(Be, we);
	Be.prototype.Cc = function(a, b) {
		Ce(this.oa, this.aa(), {
			cx : a,
			cy : b
		})
	};
	function De(a, b, c, d) {
		ve.call(this, a, b, c, d)
	}
	u(De, ze);
	De.prototype.Uj = function(a) {
		Ce(this.oa, this.aa(), {
			d : Ee(a)
		})
	};
	function Fe(a, b, c, d, e) {
		ne.call(this, a, b, c, d, e);
		this.Gi = {};
		this.ki = y && !z(526);
		this.Vd = new jd(this)
	}
	var Ge;
	u(Fe, ne);
	function He(a, b, c) {
		b = a.$c.$.createElementNS("http://www.w3.org/2000/svg", b);
		c && Ce(a, b, c);
		return b
	}
	function Ce(a, b, c) {
		for ( var d in c)
			b.setAttribute(d, c[d])
	}
	p = Fe.prototype;
	p.$e = function(a, b) {
		(b || this.xb).aa().appendChild(a.aa())
	};
	p.Qj = function(a, b) {
		var c = a.aa();
		if (b instanceof re) {
			c.setAttribute("fill", b.mc);
			c.setAttribute("fill-opacity", b.Ee)
		} else
			c.setAttribute("fill", "none")
	};
	p.Pe = function(a, b) {
		var c = a.aa();
		if (b) {
			c.setAttribute("stroke", b.mc);
			var d = b.jc;
			r(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width",
					parseFloat(d) / pe(this)) : c.setAttribute("stroke-width",
					d)
		} else
			c.setAttribute("stroke", "none")
	};
	p.la = function() {
		var a = He(this, "svg", {
			width : this.width,
			height : this.height,
			overflow : "hidden"
		}), b = He(this, "g");
		this.mh = He(this, "defs");
		this.xb = new Ae(b, this);
		a.appendChild(this.mh);
		a.appendChild(b);
		this.ia = a;
		Ie(this)
	};
	p.Ef = function(a, b) {
		this.Xc = a;
		this.od = b;
		Ie(this)
	};
	p.yd = function() {
		Fe.ga.yd.apply(this, arguments);
		Ie(this)
	};
	function Ie(a) {
		if (a.Gc || a.Xc || a.od) {
			a.aa().setAttribute("preserveAspectRatio", "none");
			a.ki ? a.Ng() : a.aa().setAttribute("viewBox",
					a.Xc + " " + a.od + " " + (a.Gc ? a.Gc + " " + a.hf : ""))
		}
	}
	p.Ng = function() {
		if (this.Ja && (this.Gc || this.Xc || !this.od)) {
			var a = this.rd();
			if (a.width == 0)
				this.aa().style.visibility = "hidden";
			else {
				this.aa().style.visibility = "";
				var b = -this.Xc, c = -this.od, d = a.width / this.Gc;
				a = a.height / this.hf;
				this.xb.aa().setAttribute(
						"transform",
						"scale(" + d + " " + a + ") translate(" + b + " " + c
								+ ")")
			}
		}
	};
	p.rd = function() {
		if (!x)
			return this.Ja ? yc(this.aa()) : Fe.ga.rd.call(this);
		var a = this.width, b = this.height, c = r(a) && a.indexOf("%") != -1, d = r(b)
				&& b.indexOf("%") != -1;
		if (!this.Ja && (c || d))
			return null;
		var e, g;
		if (c) {
			e = this.aa().parentNode;
			g = yc(e);
			a = parseFloat(a) * g.width / 100
		}
		if (d) {
			e = e || this.aa().parentNode;
			g = g || yc(e);
			b = parseFloat(b) * g.height / 100
		}
		return new A(a, b)
	};
	p.clear = function() {
		this.xb.clear();
		ec(this.mh);
		this.Gi = {}
	};
	p.qh = function(a, b, c, d, e, g, h) {
		a = He(this, "ellipse", {
			cx : a,
			cy : b,
			rx : c,
			ry : d
		});
		e = new Be(a, this, e, g);
		this.$e(e, h);
		return e
	};
	p.Qd = function(a, b, c, d) {
		a = He(this, "path", {
			d : Ee(a)
		});
		b = new De(a, this, b, c);
		this.$e(b, d);
		return b
	};
	function Ee(a) {
		var b = [];
		ke(a, function(c, d) {
			switch (c) {
			case 0:
				b.push("M");
				Array.prototype.push.apply(b, d);
				break;
			case 1:
				b.push("L");
				Array.prototype.push.apply(b, d);
				break;
			case 2:
				b.push("C");
				Array.prototype.push.apply(b, d);
				break;
			case 3:
				var e = d[3];
				b.push("A", d[0], d[1], 0, Math.abs(e) > 180 ? 1 : 0, e > 0 ? 1
						: 0, d[4], d[5]);
				break;
			case 4:
				b.push("Z");
				break
			}
		});
		return b.join(" ")
	}
	p.jh = function(a) {
		var b = He(this, "g");
		(a || this.xb).aa().appendChild(b);
		return new Ae(b, this)
	};
	p.xa = function() {
		var a = this.rd();
		Fe.ga.xa.call(this);
		a || this.dispatchEvent("resize");
		if (this.ki) {
			a = this.width;
			var b = this.height;
			typeof a == "string" && a.indexOf("%") != -1
					&& typeof b == "string" && b.indexOf("%") != -1
					&& this.Vd.mb(Je(), fe, this.Ng);
			this.Ng()
		}
	};
	p.Rd = function() {
		Fe.ga.Rd.call(this);
		this.ki && this.Vd.Qb(Je(), fe, this.Ng)
	};
	p.za = function() {
		delete this.Gi;
		delete this.mh;
		delete this.xb;
		Fe.ga.za.call(this)
	};
	function Je() {
		if (!Ge) {
			Ge = new de(400);
			Ge.start()
		}
		return Ge
	}
	;
	function Ke(a, b, c, d, e) {
		Fe.call(this, a, b, c, d, e)
	}
	u(Ke, Fe);
	Ke.prototype.setTransform = function(a) {
		this.xb.aa().setAttribute("transform", a.toString())
	};
	Ke.prototype.Pe = function(a, b) {
		Ke.ga.Pe.call(this, a, b);
		var c = a.aa();
		b && b.Wi && b.jf && c.setAttribute("stroke-dasharray", b.jf.join(" "))
	};
	function Le() {
		return this.ia = this.oa.$c.aa(this.bd) || this.ia
	}
	function Me(a, b) {
		this.bd = a.id;
		ue.call(this, a, b)
	}
	u(Me, xe);
	Me.prototype.aa = Le;
	Me.prototype.clear = function() {
		ec(this.aa())
	};
	function Ne(a, b, c, d, e, g, h, i) {
		this.bd = a.id;
		ve.call(this, a, b, h, i);
		this.Ak = c;
		this.Ck = d;
		this.Nj = e;
		this.Oj = g
	}
	u(Ne, we);
	Ne.prototype.aa = Le;
	Ne.prototype.Cc = function(a, b) {
		this.Ak = a;
		this.Ck = b;
		Oe(this.aa(), a - this.Nj, b - this.Oj, this.Nj * 2, this.Oj * 2)
	};
	function Pe(a, b, c, d) {
		this.bd = a.id;
		ve.call(this, a, b, c, d)
	}
	u(Pe, ze);
	Pe.prototype.aa = Le;
	Pe.prototype.Uj = function(a) {
		Qe(this.aa(), "path", Re(a))
	};
	function Se(a, b, c, d, e) {
		ne.call(this, a, b, c, d, e);
		this.Vd = new jd(this)
	}
	u(Se, ne);
	var Te = document.documentMode && document.documentMode >= 8;
	function Ue(a) {
		var b;
		if (b = r(a)) {
			b = a.length - 1;
			b = b >= 0 && a.indexOf("%", b) == b
		}
		return b ? a : parseFloat(a.toString()) + "px"
	}
	function Ve(a) {
		return Math.round((parseFloat(a.toString()) - 0.5) * 100)
	}
	function L(a) {
		return Math.round(parseFloat(a.toString()) * 100)
	}
	function Qe(a, b, c) {
		if (Te)
			a[b] = c;
		else
			a.setAttribute(b, c)
	}
	function We(a, b) {
		var c = a.$c.createElement("g_vml_:" + b);
		c.id = "goog_" + Fa++;
		return c
	}
	function Xe(a) {
		if (Te && a.Ja)
			a.aa().innerHTML = a.aa().innerHTML
	}
	Se.prototype.$e = function(a, b) {
		(b || this.xb).aa().appendChild(a.aa());
		Xe(this)
	};
	Se.prototype.Qj = function(a, b) {
		var c = a.aa();
		c.fillcolor = "";
		for ( var d = 0; d < c.childNodes.length; d++) {
			var e = c.childNodes[d];
			e.tagName == "fill" && c.removeChild(e)
		}
		if (b instanceof re)
			if (b.mc == "transparent")
				c.filled = false;
			else if (b.Ee != 1) {
				c.filled = true;
				d = We(this, "fill");
				d.opacity = Math.round(b.Ee * 100) + "%";
				d.color = b.mc;
				c.appendChild(d)
			} else {
				c.filled = true;
				c.fillcolor = b.mc
			}
		else
			c.filled = false;
		Xe(this)
	};
	Se.prototype.Pe = function(a, b) {
		var c = a.aa();
		if (b) {
			c.stroked = true;
			var d = b.jc;
			d = r(d) && d.indexOf("px") == -1 ? parseFloat(d) : d * pe(this);
			var e = c.getElementsByTagName("stroke")[0];
			if (d < 1) {
				e = e || We(this, "stroke");
				e.opacity = d;
				e.Hm = "1px";
				e.color = b.mc;
				c.appendChild(e)
			} else {
				e && c.removeChild(e);
				c.strokecolor = b.mc;
				c.strokeweight = d + "px"
			}
		} else
			c.stroked = false;
		Xe(this)
	};
	function Oe(a, b, c, d, e) {
		var g = a.style;
		g.position = "absolute";
		g.left = Ve(b) + "px";
		g.top = Ve(c) + "px";
		g.width = L(d) + "px";
		g.height = L(e) + "px";
		if (a.tagName == "shape")
			a.coordsize = L(d) + " " + L(e)
	}
	function Ye(a, b) {
		var c = We(a, b), d = oe(a);
		Oe(c, 0, 0, d.width, d.height);
		return c
	}
	try {
		eval("document.namespaces")
	} catch (Ze) {
	}
	p = Se.prototype;
	p.la = function() {
		var a = this.$c.$;
		if (!a.namespaces.g_vml_) {
			Te ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml",
					"#default#VML") : a.namespaces.add("g_vml_",
					"urn:schemas-microsoft-com:vml");
			a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
		}
		a = this.width;
		var b = this.height, c = this.$c.la("div", {
			style : "overflow:hidden;position:relative;width:" + Ue(a)
					+ ";height:" + Ue(b)
		});
		this.ia = c;
		var d = We(this, "group"), e = d.style;
		e.position = "absolute";
		e.left = e.top = 0;
		e.width = this.width;
		e.height = this.height;
		d.coordsize = this.Gc ? L(this.Gc) + " " + L(this.hf) : L(a) + " "
				+ L(b);
		d.coordorigin = this.Xc !== undefined ? L(this.Xc) + " " + L(this.od)
				: "0 0";
		c.appendChild(d);
		this.xb = new Me(d, this);
		E(c, "resize", t(this.zh, this))
	};
	p.zh = function() {
		var a = yc(this.aa()), b = this.xb.aa().style;
		if (a.width) {
			b.width = a.width + "px";
			b.height = a.height + "px"
		} else {
			for (a = this.aa(); a && a.currentStyle
					&& a.currentStyle.display != "none";)
				a = a.parentNode;
			a && a.currentStyle && this.Vd.mb(a, "propertychange", this.zh)
		}
		this.dispatchEvent("resize")
	};
	p.Ef = function(a, b) {
		this.Xc = a;
		this.od = b;
		this.xb.aa().coordorigin = L(this.Xc) + " " + L(this.od)
	};
	p.yd = function(a, b) {
		Se.ga.yd.apply(this, arguments);
		this.xb.aa().coordsize = L(a) + " " + L(b)
	};
	p.rd = function() {
		var a = this.aa();
		return new A(a.style.pixelWidth || a.offsetWidth || 1,
				a.style.pixelHeight || a.offsetHeight || 1)
	};
	p.clear = function() {
		this.xb.clear()
	};
	p.qh = function(a, b, c, d, e, g, h) {
		var i = We(this, "oval");
		Oe(i, a - c, b - d, c * 2, d * 2);
		a = new Ne(i, this, a, b, c, d, e, g);
		this.$e(a, h);
		return a
	};
	p.Qd = function(a, b, c, d) {
		var e = Ye(this, "shape");
		Qe(e, "path", Re(a));
		a = new Pe(e, this, b, c);
		this.$e(a, d);
		return a
	};
	function Re(a) {
		var b = [];
		ke(a, function(c, d) {
			switch (c) {
			case 0:
				b.push("m");
				Array.prototype.push.apply(b, Oa(d, L));
				break;
			case 1:
				b.push("l");
				Array.prototype.push.apply(b, Oa(d, L));
				break;
			case 2:
				b.push("c");
				Array.prototype.push.apply(b, Oa(d, L));
				break;
			case 4:
				b.push("x");
				break;
			case 3:
				var e = d[2] + d[3], g = L(d[4] - d[0]
						* Math.cos(e * Math.PI / 180));
				e = L(d[5] - d[1] * Math.sin(e * Math.PI / 180));
				var h = L(d[0]), i = L(d[1]);
				b.push("ae", g, e, h, i, Math.round(d[2] * -65536), Math
						.round(d[3] * -65536));
				break
			}
		});
		return b.join(" ")
	}
	p.jh = function(a) {
		var b = Ye(this, "group");
		(a || this.xb).aa().appendChild(b);
		return new Me(b, this)
	};
	p.xa = function() {
		Se.ga.xa.call(this);
		this.zh();
		Xe(this)
	};
	p.za = function() {
		this.xb = null;
		Se.ga.za.call(this)
	};
	function $e(a, b, c, d, e) {
		Se.call(this, a, b, c, d, e);
		af || bf()
	}
	u($e, Se);
	var af = false;
	function bf() {
		af = true;
		Oe = function(a, b, c, d, e) {
			var g = a.style;
			g.position = "absolute";
			g.left = Ve(b) + "px";
			g.top = Ve(c) + "px";
			g.width = L(d) + "px";
			g.height = L(Math.abs(e)) + "px";
			if (a.tagName == "shape")
				a.coordsize = L(d) + " " + L(Math.abs(e))
		};
		Me.prototype.Ef = function(a, b) {
			this.aa().coordorigin = L(a) + " " + L(b)
		};
		Me.prototype.yd = function(a, b) {
			this.aa().coordsize = L(a) + " " + L(b)
		}
	}
	$e.prototype.setTransform = function(a) {
		a = te(a);
		this.yd(this.width * a.nb, this.height * a.Kb);
		this.Ef(a.rc, a.sc)
	};
	$e.prototype.Pe = function(a, b) {
		var c = a.aa();
		if (b) {
			c.stroked = true;
			var d = b.jc;
			d = r(d) && d.indexOf("px") == -1 ? parseFloat(d) : d * pe(this);
			var e = c.getElementsByTagName("stroke")[0] || We(this, "stroke");
			Qe(e, "weight", d + "px");
			Qe(e, "color", b.mc);
			Qe(e, "endcap", "round");
			if (b.Wi && b.jf.length > 0) {
				for ( var g = b.jf, h = [], i = 0; i < g.length; i++)
					h[i] = Math.round(g[i] / d);
				Qe(e, "dashstyle", h.join(" "))
			}
			c.appendChild(e)
		} else
			c.stroked = false;
		Xe(this)
	};
	function cf() {
		J.call(this);
		this.af = undefined;
		this.pi = "chemwriter-util.jar";
		this.oc = false
	}
	var df;
	u(cf, J);
	function ef() {
		df || (df = new cf);
		return df
	}
	p = cf.prototype;
	p.Da = aa("oc");
	p.Ka = k("oc");
	p.copy = function() {
		var a = ff;
		this.af ? this.dispatchEvent(a) : gf(this, a)
	};
	p.getData = function(a) {
		return this.af.getData(a)
	};
	p.Gk = function() {
		var a;
		a = this.aa();
		if (a.firstElementChild != undefined)
			a = a.firstElementChild;
		else {
			for (a = a.firstChild; a && a.nodeType != 1;)
				a = a.nextSibling;
			a = a
		}
		a = a;
		this.af = a;
		this.dispatchEvent(hf)
	};
	p.Fk = f();
	p.la = function() {
		this.ia = B("div", {
			"class" : "clipboard"
		})
	};
	function gf(a, b) {
		a.dispatchEvent(jf);
		ad(a, hf, function() {
			this.dispatchEvent(b)
		}, false, a);
		a.aa().innerHTML = [
				w && Da(rb, "9.0") < 0 ? '<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" codebase="http://java.sun.com/products/plugin/autodl/jinstall-1_4-windows-i586.cab#Version=1,4,0,0" height="1" width="1">'
						: '<object type="application/x-java-applet" width="1" height="1" id="applet" >',
				'<param name="name" value="ChemWriter Clipboard Utility" /><param name="code" value="com/metamolecular/jclip/ClipboardApplet.class" />',
				'<param name="archive" value="' + a.pi + '" />',
				'<param name="mayscript" value="true"> <param name="deployFail" value="chemwriter.system.Clipboard.getInstance().deployFail()"><param name="deploySuccess" value="chemwriter.system.Clipboard.getInstance().deploySuccess()"></object>' ]
				.join("")
	}
	var jf = "clipboard-applet-deploy-requested", hf = "clipboard-applet-deployed", ff = "clipboard-copy-requested";
	function kf() {
		return lf() && mf() === nf && ef().Ka()
	}
	function lf() {
		if (w)
			try {
				new ActiveXObject("JavaPlugin");
				return true
			} catch (a) {
				return false
			}
		for ( var b = 0; b < navigator.mimeTypes.length; b++)
			if (navigator.mimeTypes[b].type
					.indexOf("application/x-java-applet") !== -1)
				return true;
		return false
	}
	function of() {
		return document
				&& document.implementation
				&& document.implementation.hasFeature
				&& document.implementation.hasFeature(
						"http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
	}
	function pf() {
		return ce || be && Da(rb, "13.0") >= 0
	}
	function mf() {
		if (fb)
			return qf;
		else if (gb)
			return nf;
		else if (hb)
			return rf
	}
	function sf(a, b, c, d, e) {
		if (of())
			a = new Ke(a, b, c, d, e);
		else if (w)
			a = new $e(a, b, c, d, e);
		else
			throw Error("Vector graphics not supported on this browser.");
		a.la();
		return a
	}
	var qf = "Mac", nf = "Windows", rf = "Linux";
	function M(a, b) {
		this.da = a || 0;
		this.ea = b || 0
	}
	M.prototype.move = function(a, b) {
		this.da = a;
		this.ea = b
	};
	var tf = new K;
	function uf(a, b) {
		return a.da >= b.left && a.da <= b.left + b.width && a.ea >= b.top
				&& a.ea <= b.top + b.height
	}
	function vf(a, b) {
		var c, d, e = false;
		if (uf(a.source, b)) {
			c = a.source;
			d = a.target
		} else if (uf(a.target, b)) {
			c = a.target;
			d = a.source;
			e = true
		} else
			return;
		var g = c.da, h = c.ea, i = d.da, j = d.ea, l = i - g, n = h - j;
		d = N(c, d);
		var o = b.left, G = o + b.width, F = b.top, cb = F + b.height, ye = N(
				c, new M(G, F)), hd = N(c, new M(G, cb)), sb = N(c,
				new M(o, cb));
		c = N(c, new M(o, F));
		var Ba = 0, Ca = 0;
		if (d >= ye || d <= hd) {
			Ba = G;
			Ca = h - (Ba - g) * (n / l)
		} else if (d > hd && d < sb) {
			Ca = cb;
			Ba = g + (h - Ca) * (l / n)
		} else if (d >= sb && d <= c) {
			Ba = o;
			Ca = h - (Ba - g) * (n / l)
		} else if (d > c && d < ye) {
			Ca = F;
			Ba = g + (h - Ca) * (l / n)
		}
		if (e) {
			a.source.move(i, j);
			a.target.move(Ba, Ca)
		} else {
			a.source.move(Ba, Ca);
			a.target.move(i, j)
		}
	}
	function wf(a, b) {
		if (N(a.source, a.target) < Math.PI)
			b = -b;
		var c = O(a.source, a.target), d = b * (a.target.ea - a.source.ea) / c;
		c = -(b * (a.target.da - a.source.da)) / c;
		a.source.move(a.source.da + d, a.source.ea + c);
		a.target.move(a.target.da + d, a.target.ea + c)
	}
	function xf(a, b) {
		return new M(a.da + 0.5 * (b.da - a.da), a.ea + 0.5 * (b.ea - a.ea))
	}
	function O(a, b) {
		return Math.sqrt(Math.pow(b.da - a.da, 2) + Math.pow(b.ea - a.ea, 2))
	}
	function N(a, b) {
		var c = O(a, b), d = b.da - a.da, e = b.ea - a.ea;
		c = Math.acos(Math.abs(d) / c);
		if (d >= 0 && e >= 0)
			return c;
		if (d >= 0 && e <= 0)
			return 2 * Math.PI - c;
		if (d <= 0 && e <= 0)
			return Math.PI + c;
		return Math.PI - c
	}
	function yf(a) {
		if (a < 0)
			return 2 * Math.PI + a;
		if (a >= 2 * Math.PI)
			return a - 2 * Math.PI;
		return a
	}
	function zf(a, b, c) {
		var d = O(a, b);
		if (d != 0) {
			tf.setTransform(1, 0, 0, 1, a.da, a.ea);
			tf.rotate(c, 0, 0);
			a = [ d, 0 ];
			tf.transform(a, 0, a, 2, 1);
			b.move(a[2], a[3])
		}
	}
	function Af(a, b, c) {
		var d = [], e = new K;
		b = new M(-b, 0);
		b = [ b.da, b.ea ];
		e.rotate(c, 0, 0);
		for (c = 0; c < a; c++) {
			e.transform(b, 0, b, 2, 1);
			d[c] = new M(b[2], b[3]);
			e.rotate(2 * Math.PI / a, 0, 0)
		}
		return d
	}
	;
	function Bf(a, b) {
		var c = new D(a);
		c.wg = b;
		return c
	}
	;
	function Cf() {
	}
	;
	function Df(a, b, c, d) {
		C.call(this);
		Ef(this, c);
		if (d !== undefined)
			if (!Mb(P, d))
				throw Error(Ff);
		this.ca = a;
		this.ha = b;
		this.va = c || Q.Ma;
		this.ba = null;
		this.We = d || 0;
		this.tb = false
	}
	u(Df, I);
	p = Df.prototype;
	p.Qe = function(a) {
		this.ba = a;
		this.Mb(a)
	};
	p.contains = function(a) {
		return a === this.ca || a === this.ha
	};
	p.Ib = k("We");
	function Gf(a, b) {
		if (a.We !== b) {
			if (b !== undefined)
				if (!Mb(P, b))
					throw Error(Ff);
			var c = a.nc();
			a.We = b;
			a.dispatchEvent(Bf(Hf, c))
		}
	}
	function If(a, b) {
		if (a.va !== b) {
			Ef(a, b);
			var c = a.nc();
			a.va = b;
			a.Ia() && a.gh();
			a.dispatchEvent(Bf(Hf, c))
		}
	}
	p.Ia = function() {
		return this.va instanceof Cf
	};
	function Jf(a) {
		var b = a.ca, c = a.ha, d = a.nc();
		a.ca = c;
		a.ha = b;
		a.dispatchEvent(Bf(Hf, d))
	}
	p.Qc = function(a) {
		if (a !== this.tb) {
			this.tb = a;
			this.dispatchEvent(Kf)
		}
	};
	p.nc = function() {
		return {
			type : this.va,
			wl : this.We,
			source : this.ca,
			target : this.ha
		}
	};
	p.Gf = function(a) {
		var b = this.nc();
		this.va = a.type;
		this.We = a.wl;
		this.ca = a.source;
		this.ha = a.target;
		this.dispatchEvent(Bf(Hf, b))
	};
	function Ef(a, b) {
		if (b !== undefined)
			if (!(Mb(Q, b) || b instanceof Cf))
				throw Error(Lf);
	}
	p.gh = function() {
		this.We = P.Hd
	};
	var Kf = "bond-hover-changed", Hf = "bond-definition-changed", Q = {
		Ma : 1,
		wb : 2,
		Pf : 3
	}, P = {
		Hd : 0,
		Id : 1,
		Qg : 3,
		ee : 4,
		Fd : 6
	}, Lf = "No such bond type", Ff = "Invalid bond stereo";
	function Mf(a, b, c) {
		if (!(b && c))
			return [];
		if (b === c)
			return [ a.ca, a.ha, b ];
		if (Nf(a.ba, b, c))
			return [ a.ca, a.ha, c, b ];
		for ( var d = b.sa, e = c.sa, g = [], h = 0; h < d.length; h++)
			for ( var i = 0; i < e.length; i++)
				if (d[h] === e[i]) {
					g.push(d[h]);
					break
				}
		if (g[0])
			return [ a.ca, a.ha, c, g[0], b ];
		d = b.sa;
		e = c.sa;
		for (g = 0; g < d.length; g++)
			if (d[g] !== a.ca)
				for (h = 0; h < e.length; h++)
					if (e[h] !== a.ha)
						if (Nf(a.ba, d[g], e[h]))
							return [ a.ca, a.ha, c, e[h], d[g], b ];
		return []
	}
	function Of(a) {
		a = a.pa;
		if (a.length !== 2)
			return false;
		for ( var b = 0; b < a.length; b++)
			if (a[b].va !== Q.wb)
				return false;
		return true
	}
	function Pf(a, b) {
		var c = N(a.ca, a.ha), d = N(a.ca, b), e = yf(Math.PI + c);
		if (d < e && d > c)
			return true;
		else if (d > e && d < c)
			return true;
		return false
	}
	function Qf(a) {
		if (a.pa.length === 0)
			return 1;
		var b = [];
		a = a.pa;
		for ( var c = 0; c < a.length; c++) {
			var d = a[c];
			b[c] = Math.abs(O(d.ca, d.ha))
		}
		Ka(b.length != null);
		v.sort.call(b, Za);
		if (b.length % 2 === 0) {
			a = b.length / 2;
			return (b[a - 1] + b[a]) / 2
		}
		return b[(b.length - 1) / 2]
	}
	;
	function Rf(a, b, c) {
		D.call(this, a, b);
		this.qa = c
	}
	u(Rf, D);
	function Sf() {
		C.call(this);
		this.Zj = [];
		this.Le = undefined
	}
	u(Sf, I);
	function R(a, b) {
		b.Mb(a);
		a.Zj.push(b);
		a.dispatchEvent(new Rf(Tf, a, b))
	}
	function Uf(a, b) {
		if (!b)
			throw Error(Vf);
		a.Le && a.dispatchEvent(new Rf(Wf, a, a.Le));
		a.Le = b;
		a.dispatchEvent(new Rf(Xf, a, b))
	}
	var Tf = "toobox-tool-added", Xf = "toolbox-tool-selected", Wf = "toolbox-tool-unselected", Vf = "Invalid tool";
	function Yf() {
	}
	u(Yf, wd);
	fa(Yf);
	Yf.prototype.qe = m("button");
	Yf.prototype.Gh = function(a) {
		a.eg()
	};
	Yf.prototype.la = function(a) {
		return a.$b().la("span", yd(this, a).join(" "), a.ke,
				a.$b().la("div", "icon"))
	};
	Yf.prototype.Jc = function(a) {
		var b, c, d;
		b = a || document;
		c = null;
		if (Vb(b))
			a = b.querySelector(".icon");
		else {
			b = a || document;
			if (Vb(b))
				a = b.querySelectorAll(".icon");
			else if (b.getElementsByClassName)
				a = b.getElementsByClassName("icon");
			else {
				a = a || document;
				if (Vb(a))
					a = a.querySelectorAll(".icon");
				else if (a.getElementsByClassName) {
					var e = a.getElementsByClassName("icon");
					a = e
				} else {
					e = a.getElementsByTagName("*");
					d = {};
					for (b = c = 0; a = e[b]; b++) {
						var g = a.className;
						if (typeof g.split == "function"
								&& Sa(g.split(/\s+/), "icon"))
							d[c++] = a
					}
					d.length = c;
					a = d
				}
				a = a
			}
			a = a[0]
		}
		return (c = a) || null
	};
	function Zf(a, b) {
		Md.call(this, b);
		this.Tg = a;
		this.oa = undefined;
		Td(this, 64, true);
		Td(this, 32, false);
		var c = Yf.Hb();
		if (this.Ja)
			throw Error("Component already rendered");
		if (this.aa())
			this.ia = null;
		this.Va = c
	}
	u(Zf, Md);
	Zf.prototype.ua = function() {
		return this.Tg.ua()
	};
	Zf.prototype.eg = function() {
		var a = this.Jc(), b = yc(a);
		if (this.oa)
			this.oa.clear();
		else {
			this.oa = sf(b.width, b.height);
			sd(this.oa, a)
		}
		a = this.ua();
		$f(a, b.height);
		ag(a, this.oa, this.Ka())
	};
	function bg(a) {
		var b = a.Tg.ya();
		a.aa().setAttribute("title", b)
	}
	Zf.prototype.la = function() {
		Zf.ga.la.call(this);
		bg(this)
	};
	Zf.prototype.Da = function(a) {
		Zf.ga.Da.call(this, a);
		this.oa && this.eg()
	};
	function cg(a) {
		J.call(this, a);
		this.Hj = new Ib(0, 0)
	}
	u(cg, J);
	cg.prototype.xa = function() {
		cg.ga.xa.call(this);
		dg(this)
	};
	function dg(a) {
		if (a.Ja) {
			var b = a.aa(), c = a.Hj, d = x && (fb || qb) && z("1.9");
			if (c instanceof Ib) {
				a = c.x;
				c = c.y
			} else {
				a = c;
				c = void 0
			}
			b.style.left = xc(a, d);
			b.style.top = xc(c, d)
		}
	}
	cg.prototype.la = function() {
		this.ia = B("div", {
			"class" : "flyout"
		})
	};
	function eg(a, b, c) {
		Zf.call(this, a, c);
		this.Za = b;
		this.yc = undefined
	}
	u(eg, Zf);
	p = eg.prototype;
	p.eg = function() {
		var a = this.Jc(), b = yc(a);
		if (this.oa)
			this.oa.clear();
		else {
			this.oa = sf(b.width, b.height);
			sd(this.oa, a)
		}
		a = this.ua();
		$f(a, b.height, true);
		ag(a, this.oa, this.Ka(), true)
	};
	p.xa = function() {
		eg.ga.xa.call(this);
		E(this, "action", this.lk, false, this)
	};
	p.lk = function() {
		this.yc = this.Tg.wh();
		ad(this.yc, "flyout-done", this.Kk, false, this);
		ad(this.Za.aa(), "click", this.xj, false, this);
		fg(this.Za, gg);
		this.Za.Ha(this.yc, true);
		var a, b = this.aa();
		a = uc(b);
		b = yc(b);
		a = new oc(a.x, a.y, b.width, b.height);
		b = uc(this.Fa.aa());
		var c = this.yc;
		c.Hj = new Ib(a.left - b.x + a.width, a.top - b.y);
		dg(c)
	};
	p.Kk = function() {
		hg(this);
		H(this.Za.aa(), "click", this.xj, false, this)
	};
	p.xj = function() {
		hg(this)
	};
	function hg(a) {
		a.Za.removeChild(a.yc, true);
		fg(a.Za, ig);
		a.eg();
		bg(a);
		a.yc = undefined
	}
	;
	function jg(a, b) {
		J.call(this, b);
		this.Za = a
	}
	u(jg, J);
	jg.prototype.Yf = function(a) {
		var b;
		if (a.wh)
			if (this.Za)
				b = new eg(a, this.Za);
			else
				throw Error(kg);
		else
			b = new Zf(a);
		b.Da(a.Ka());
		this.Ha(b, true);
		return b
	};
	jg.prototype.la = function() {
		this.ia = B("div", {})
	};
	var kg = "Flyout not supported";
	function lg(a, b, c) {
		this.jc = a;
		this.mc = b;
		this.jf = c || []
	}
	lg.prototype.Wi = k("jf");
	function S(a) {
		this.Qi = false;
		this.ub = true;
		this.Mc = 2.3;
		this.uk = 2;
		if (a instanceof Function) {
			this.ra = new mg;
			a(this.ra)
		} else
			this.ra = a
	}
	S.prototype.hb = aa("Qi");
	S.prototype.Ve = aa("ub");
	S.prototype.zc = k("Mc");
	function $f(a, b, c) {
		if (c)
			b -= 4;
		var d = ng(a, a.ra);
		c = (b - 2 * a.uk - a.Mc) / (d.height >= d.width ? d.height : d.width);
		var e = -d.left + 0.5 * (b - d.width * c) / c;
		b = -d.top + 0.5 * (b - d.height * c) / c;
		d = new K;
		d.scale(c, c);
		d.translate(e, b);
		a.ra.transform(d)
	}
	function ag(a, b, c, d) {
		c = c ? og : pg;
		b.Qd(a.ra, a.ub ? new se(a.Mc, c) : undefined, a.Qi ? new re(c, 1)
				: undefined);
		if (d) {
			d = new mg;
			var e = T(a.ra);
			d.moveTo(e.left + e.width + 1, e.top + e.height + 4);
			d.lineTo(e.left + e.width + 4, e.top + e.height + 1);
			d.lineTo(e.left + e.width + 4, e.top + e.height + 4);
			d.close();
			b.Qd(d, new lg(a.Mc, c), new re("#aaaaaa", 1))
		}
	}
	function ng(a, b) {
		var c, d = c = Number.POSITIVE_INFINITY, e, g = e = Number.NEGATIVE_INFINITY;
		ke(b.Rc ? b : me(b), function(h, i) {
			for ( var j = 0, l = i.length; j < l; j += 2) {
				d = Math.min(d, i[j]);
				g = Math.max(g, i[j]);
				c = Math.min(c, i[j + 1]);
				e = Math.max(e, i[j + 1])
			}
		});
		return new oc(d, c, g - d, e - c)
	}
	var og = "#444444", pg = "#888888";
	function qg(a) {
		a.moveTo(0, 0);
		a.lineTo(20, 0);
		a.lineTo(20, 20);
		a.lineTo(0, 20);
		a.close()
	}
	function rg(a) {
		a.moveTo(10, 10);
		a.Ua(1, 1, 0, 360);
		a.moveTo(0, 10);
		a.Ua(1, 1, 0, 360);
		a.moveTo(20, 10);
		a.Ua(1, 1, 0, 360)
	}
	function sg(a) {
		a.moveTo(17, 0);
		a.lineTo(0, 17)
	}
	function tg(a) {
		a.moveTo(0, 10);
		a.lineTo(20, 10);
		a.moveTo(7, 7);
		a.lineTo(13, 13);
		a.moveTo(13, 7);
		a.lineTo(7, 13);
		a.moveTo(10, 6);
		a.lineTo(10, 14);
		var b = new K;
		b.rotate(-Math.PI / 4, 0, 0);
		a.transform(b)
	}
	function ug(a) {
		a.moveTo(17, 0);
		a.lineTo(3, 20);
		a.moveTo(0, 17);
		a.lineTo(20, 3)
	}
	function vg(a) {
		a.moveTo(17, 3);
		a.lineTo(3, 17);
		a.moveTo(3, 3);
		a.lineTo(17, 17);
		a.moveTo(20, 10);
		a.Ua(10, 10, 0, 360)
	}
	function wg(a) {
		a.moveTo(20, 10);
		a.Ua(10, 7, 0, 360);
		a.moveTo(2, 20);
		a.lineTo(5, 16)
	}
	function xg(a) {
		a.moveTo(10, 7);
		a.lineTo(10, 13);
		a.moveTo(7, 10);
		a.lineTo(13, 10);
		a.moveTo(20, 10);
		a.Ua(10, 10, 0, 360)
	}
	function yg(a) {
		a.moveTo(7, 10);
		a.lineTo(13, 10);
		a.moveTo(20, 10);
		a.Ua(10, 10, 0, 360)
	}
	function zg(a) {
		a.moveTo(125, 5);
		a.lineTo(155, 90);
		a.lineTo(245, 90);
		a.lineTo(175, 145);
		a.lineTo(200, 230);
		a.lineTo(125, 180);
		a.lineTo(50, 230);
		a.lineTo(75, 145);
		a.lineTo(5, 90);
		a.lineTo(95, 90);
		a.close()
	}
	function Ag(a) {
		a.moveTo(20, 10);
		a.Ua(10, 10, 0, 360);
		a.moveTo(17, 17);
		a.lineTo(24, 24);
		a.moveTo(7, 10);
		a.lineTo(13, 10);
		a.moveTo(10, 7);
		a.lineTo(10, 13)
	}
	function Bg(a) {
		a.moveTo(20, 10);
		a.Ua(10, 10, 0, 360);
		a.moveTo(17, 17);
		a.lineTo(24, 24);
		a.moveTo(7, 10);
		a.lineTo(13, 10)
	}
	function Cg(a) {
		a.moveTo(0, 20);
		a.lineTo(16, 0);
		a.lineTo(20, 4);
		a.close()
	}
	function Dg(a) {
		a.moveTo(0, 19.82);
		a.lineTo(0, 19.82);
		a.moveTo(2.81, 15.85);
		a.lineTo(3.95, 16.95);
		a.moveTo(5.62, 11.9);
		a.lineTo(7.89, 14.21);
		a.moveTo(8.4, 7.95);
		a.lineTo(11.84, 11.4);
		a.moveTo(11.17, 4.01);
		a.lineTo(15.78, 8.62);
		a.moveTo(14.02, 0);
		a.lineTo(19.82, 5.78);
		a.close()
	}
	function Eg(a) {
		a.moveTo(5, 10);
		a.Ua(2.5, 2, 0, 180);
		a.moveTo(10, 10);
		a.Ua(2.5, 3, 0, -180);
		a.moveTo(15, 10);
		a.Ua(2.5, 4, 0, 180);
		a.moveTo(20, 10);
		a.Ua(2.5, 5, 0, -180);
		var b = new K;
		b.rotate(-Math.PI / 4, 0, 0);
		a.transform(b)
	}
	function Fg(a) {
		a.moveTo(0, 0);
		a.Ua(10, 10, 270, 270);
		a.moveTo(0, -3);
		a.lineTo(-6, 0);
		a.lineTo(0, 3);
		a.close()
	}
	function Gg(a) {
		a.moveTo(20, 10);
		a.Ua(10, 10, 0, 270);
		a.moveTo(10, -3);
		a.lineTo(16, 0);
		a.lineTo(10, 3);
		a.close()
	}
	function Hg(a) {
		a.moveTo(0, 0);
		a.lineTo(0, 20);
		a.lineTo(18, 20);
		a.lineTo(18, 6);
		a.lineTo(12, 0);
		a.close();
		a.moveTo(18, 6);
		a.lineTo(12, 6);
		a.lineTo(12, 0)
	}
	function Ig(a) {
		a.moveTo(0, 0);
		a.lineTo(0, 20);
		a.lineTo(18, 20);
		a.lineTo(18, 6);
		a.lineTo(12, 0);
		a.close();
		a.moveTo(18, 6);
		a.lineTo(12, 6);
		a.lineTo(12, 0);
		a.moveTo(9, 8);
		a.lineTo(6, 13);
		a.lineTo(12, 13);
		a.close();
		a.moveTo(9, 10);
		a.lineTo(9, 18)
	}
	function Jg(a) {
		a.moveTo(0, 0);
		a.lineTo(0, 20);
		a.lineTo(18, 20);
		a.lineTo(18, 6);
		a.lineTo(12, 0);
		a.close();
		a.moveTo(18, 6);
		a.lineTo(12, 6);
		a.lineTo(12, 0);
		a.moveTo(9, 18);
		a.lineTo(6, 13);
		a.lineTo(12, 13);
		a.close();
		a.moveTo(9, 8);
		a.lineTo(9, 18)
	}
	function Kg(a) {
		a.moveTo(20, 10);
		a.Ua(10, 10, 0, 360);
		a.moveTo(9.5, 10);
		a.lineTo(9.5, 16);
		a.lineTo(10.5, 16);
		a.lineTo(10.5, 10);
		a.close();
		a.moveTo(11, 5);
		a.Ua(1, 1, 0, 360)
	}
	function Lg(a) {
		a.moveTo(20, 10);
		a.Ua(10, 10, 0, 360);
		a.moveTo(0, 10);
		a.lineTo(6, 10);
		a.moveTo(10, 0);
		a.lineTo(10, 6);
		a.moveTo(20, 10);
		a.lineTo(14, 10);
		a.moveTo(10, 20);
		a.lineTo(10, 14)
	}
	;
	function U(a) {
		this.vb = this.$ = undefined;
		this.tk = this.om = false;
		this.oc = true;
		this.xk = a
	}
	u(U, I);
	p = U.prototype;
	p.Ic = k("xk");
	p.pb = function(a, b) {
		this.$ = a;
		this.vb = b
	};
	p.Yc = function() {
		this.vb = this.$ = undefined
	};
	p.Qf = f();
	p.Sf = f();
	p.Wg = f();
	p.Xg = f();
	p.Vb = f();
	p.Oa = f();
	p.Fb = f();
	p.fd = f();
	p.tc = f();
	p.Vg = f();
	p.Of = f();
	p.zb = k("tk");
	p.Kc = m(false);
	p.Ka = k("oc");
	p.Da = function(a) {
		if (this.oc !== a) {
			this.oc = a;
			this.dispatchEvent(this.oc ? Mg : Ng)
		}
	};
	p.pg = function() {
		if (!this.vb)
			throw Error(Og);
		return this.vb.Wc > 0
	};
	p.ib = function() {
		if (!this.vb)
			throw Error(Og);
		this.vb.ib()
	};
	p.Gb = function() {
		if (!this.vb)
			throw Error(Og);
		this.vb.Gb()
	};
	p.Jf = function() {
		if (!this.vb)
			throw Error(Og);
		this.vb.je = false
	};
	p.ei = function() {
		if (!this.vb)
			throw Error(Og);
		this.vb.je = true
	};
	p.ua = function() {
		return new S(rg)
	};
	p.ya = m("no tooltip");
	var Og = "tool-not-connected", Mg = "tool-enabled", Ng = "tool-disabled";
	function Pg(a, b) {
		this.ja = a;
		this.fa = b;
		this.Uc = {};
		for ( var c = this.ja.Zj, d = this.ja.Le, e = 0; e < c.length; e++) {
			var g = c[e], h = this.fa.Yf(g);
			this.Uc[s(g)] = h;
			h.Yj = g;
			d && g === d && Sd(h, true)
		}
		E(this.ja, Tf, this.El, false, this);
		E(this.ja, Xf, this.Lf, false, this);
		E(this.ja, Wf, this.Mf, false, this);
		E(this.ja, Mg, this.bk, false, this);
		E(this.ja, Ng, this.bk, false, this);
		E(this.fa, "action", this.bh, false, this)
	}
	p = Pg.prototype;
	p.El = function(a) {
		var b = a.qa, c = this.fa.Yf(b);
		this.Uc[s(b)] = c;
		c.Yj = a.qa
	};
	p.Lf = function(a) {
		a = this.Uc[s(a.qa)];
		Sd(a, true)
	};
	p.Mf = function(a) {
		a = this.Uc[s(a.qa)];
		Sd(a, false)
	};
	p.bh = function(a) {
		Uf(this.ja, a.target.Yj)
	};
	p.bk = function(a) {
		a = a.target;
		this.Uc[s(a)].Da(a.Ka())
	};
	function Qg(a, b, c, d) {
		J.call(this, d);
		this.xl = c;
		this.ja = a || new Sf;
		this.fa = new jg(b);
		this.Ha(this.fa, true);
		this.Xf = new Pg(this.ja, this.fa)
	}
	u(Qg, J);
	Qg.prototype.la = function() {
		this.ia = B("div", {
			"class" : this.xl ? "subpalette" : "palette"
		})
	};
	function Rg(a, b, c) {
		J.call(this, c);
		this.le = ig;
		this.yk = a;
		this.sl = b
	}
	u(Rg, J);
	Rg.prototype.la = function() {
		this.ia = B("div", {
			"class" : this.yk
		});
		Gb(this.ia, this.le)
	};
	Rg.prototype.xa = function() {
		Rg.ga.xa.call(this);
		this.sl && wc(this.aa(), Cc(this.Fa.aa()))
	};
	function fg(a, b) {
		if (a.le !== b) {
			Hb(a.aa(), a.le);
			a.le = b;
			Gb(a.aa(), a.le)
		}
	}
	Rg.prototype.we = function() {
		return this.le !== ig
	};
	var gg = "transparent", ig = "invisible";
	var Sg = [ "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na",
			"Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V",
			"Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se",
			"Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh",
			"Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba",
			"La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho",
			"Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt",
			"Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac",
			"Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
			"Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg",
			"Cn", "Uut", "Uuq", "Uup", "Uuh", "Uus", "Uuo" ], Tg = {
		B : 13,
		Al : 13,
		Ga : 13,
		In : 13,
		Tl : 13,
		C : 14,
		Si : 14,
		Ge : 14,
		Sn : 14,
		Pb : 14,
		N : 15,
		P : 15,
		As : 15,
		Sb : 15,
		Bi : 15,
		O : 16,
		S : 16,
		Se : 16,
		Te : 16,
		Po : 16,
		F : 17,
		Cl : 17,
		Br : 17,
		I : 17,
		At : 17
	}, Ug = {
		H : [ 1, [ 1, 2, 3 ] ],
		He : [ 4, [ 3, 4 ] ],
		Li : [ 7, [ 6, 7 ] ],
		Be : [ 9, [ 9 ] ],
		B : [ 11, [ 10, 11 ] ],
		C : [ 12, [ 12, 13, 14 ] ],
		N : [ 14, [ 14, 15 ] ],
		O : [ 16, [ 16, 17, 18 ] ],
		F : [ 19, [ 19 ] ],
		Ne : [ 20, [ 20, 21, 22 ] ],
		Na : [ 23, [ 23 ] ],
		Mg : [ 24, [ 24, 25, 26 ] ],
		Al : [ 27, [ 27 ] ],
		Si : [ 28, [ 28, 29, 30 ] ],
		P : [ 31, [ 31 ] ],
		S : [ 32, [ 32, 33, 34, 36 ] ],
		Cl : [ 35, [ 35, 37 ] ],
		Ar : [ 40, [ 36, 38, 40 ] ],
		K : [ 39, [ 39, 40, 41 ] ],
		Ca : [ 40, [ 40, 42, 43, 44, 46, 48 ] ],
		Sc : [ 45, [ 45 ] ],
		Ti : [ 48, [ 46, 47, 48, 49, 50 ] ],
		V : [ 51, [ 50, 51 ] ],
		Cr : [ 53, [ 50, 52, 53, 54 ] ],
		Mn : [ 55, [ 55 ] ],
		Fe : [ 56, [ 54, 56, 57, 58 ] ],
		Co : [ 59, [ 59 ] ],
		Ni : [ 58, [ 58, 60, 61, 62, 64 ] ],
		Cu : [ 63, [ 63, 65 ] ],
		Zn : [ 64, [ 64, 66, 67, 68, 70 ] ],
		Ga : [ 69, [ 69, 71 ] ],
		Ge : [ 76, [ 70, 72, 73, 74, 76 ] ],
		As : [ 75, [ 75 ] ],
		Se : [ 80, [ 74, 76, 77, 78, 80, 82 ] ],
		Br : [ 79, [ 79, 80 ] ],
		Kr : [ 84, [ 78, 80, 82, 83, 84, 86 ] ],
		Rb : [ 85, [ 85, 87 ] ],
		Sr : [ 88, [ 84, 86, 87, 88 ] ],
		Y : [ 89, [ 89 ] ],
		Zr : [ 90, [ 90, 91, 92, 94, 96 ] ],
		Nb : [ 93, [ 93 ] ],
		Mo : [ 98, [ 92, 94, 95, 96, 97, 98, 100 ] ],
		Tc : [ 98, [ 96, 98, 99 ] ],
		Ru : [ 102, [ 96, 98, 99, 100, 101, 102, 104 ] ],
		Rh : [ 103, [ 103 ] ],
		Pd : [ 106, [ 102, 104, 105, 106, 108, 110 ] ],
		Ag : [ 107, [ 107, 108 ] ],
		Cd : [ 114, [ 106, 108, 110, 111, 112, 113, 114, 116 ] ],
		In : [ 115, [ 113, 115 ] ],
		Sn : [ 120, [ 112, 114, 115, 116, 117, 118, 119, 120, 122, 124 ] ],
		Sb : [ 121, [ 121, 123 ] ],
		Te : [ 130, [ 120, 122, 123, 124, 125, 126, 128, 130 ] ],
		I : [ 127, [ 127, 131 ] ],
		Xe : [ 132, [ 124, 126, 128, 129, 130, 131, 132, 134, 136 ] ],
		Cs : [ 133, [ 133 ] ],
		Ba : [ 138, [ 130, 132, 134, 135, 136, 137, 138 ] ],
		La : [ 139, [ 138, 139 ] ],
		Ce : [ 140, [ 136, 138, 140, 142 ] ],
		Pr : [ 141, [ 141 ] ],
		Nd : [ 142, [ 142, 143, 144, 145, 146, 148, 150 ] ],
		Pm : [ 145, [ 145 ] ],
		Sm : [ 154, [ 144, 147, 148, 149, 150, 152, 154 ] ],
		Eu : [ 153, [ 151, 153 ] ],
		Gd : [ 158, [ 152, 154, 155, 156, 157, 158, 160 ] ],
		Tb : [ 159, [ 159 ] ],
		Dy : [ 164, [ 156, 158, 160, 161, 162, 163, 164 ] ],
		Ho : [ 165, [ 165 ] ],
		Er : [ 166, [ 162, 164, 166, 167, 168, 170 ] ],
		Tm : [ 169, [ 169 ] ],
		Yb : [ 174, [ 168, 170, 171, 172, 173, 174, 176 ] ],
		Lu : [ 175, [ 175, 176 ] ],
		Hf : [ 180, [ 174, 176, 177, 178, 179, 180 ] ],
		Ta : [ 181, [ 180, 181 ] ],
		W : [ 184, [ 180, 182, 183, 184, 186 ] ],
		Re : [ 187, [ 185, 187 ] ],
		Os : [ 192, [ 184, 186, 187, 188, 189, 190, 192 ] ],
		Ir : [ 193, [ 191, 193 ] ],
		Pt : [ 198, [ 190, 192, 194, 195, 196, 198 ] ],
		Au : [ 197, [ 197 ] ],
		Hg : [ 202, [ 196, 198, 199, 200, 201, 202, 204 ] ],
		Tl : [ 205, [ 203, 205 ] ],
		Pb : [ 208, [ 204, 206, 207, 208 ] ],
		Bi : [ 209, [ 209 ] ],
		Po : [],
		At : [],
		Rn : [],
		Fr : [],
		Ra : [],
		Ac : [],
		Th : [ 232, [ 232 ] ],
		Pa : [ 231, [ 231 ] ],
		U : [ 238, [ 234, 235, 238 ] ],
		Np : [],
		Pu : [],
		Am : [],
		Cm : [],
		Bk : [],
		Cf : [],
		Es : [],
		Fm : [],
		Md : [],
		No : [],
		Lr : [],
		Rf : [],
		Db : [],
		Sg : [],
		Bh : [],
		Hs : [],
		Mt : [],
		Ds : [],
		Rg : [],
		Cn : []
	};
	function Vg(a, b) {
		if (b > -16 && b < 16)
			return a.Ia() || b <= Ma(Sg, a.ka) + 1;
		return false
	}
	;
	var Wg = [];
	function Xg(a) {
		if (Sa(Wg, a.ka))
			return 0;
		for ( var b = a.pa, c = 0; c < b.length; c++)
			if (b[c].Ia())
				return 0;
		b = (b = Tg[a.ka]) ? b : -1;
		if (b === -1)
			return 0;
		c = 0;
		switch (b) {
		case 13:
			c = a.ab != 0 ? 0 : Yg(a);
			break;
		case 14:
			c = Zg(a) > 3 ? 0 : Zg(a) > 4 ? 0 : 4 - (Zg(a) + Math.abs(a.ab));
			break;
		case 15:
			c = Yg(a);
			break;
		case 16:
			c = Zg(a) >= 2 ? 0 : Math.abs(a.ab) >= 2 ? 0 : 2 - (Zg(a) - a.ab);
			break;
		case 17:
			c = Zg(a) != 0 ? 0 : Math.abs(a.ab >= 2) ? 0 : Zg(a) > 1 ? 0
					: 1 - (Zg(a) - a.ab);
			break
		}
		return c > 0 ? c : 0
	}
	function Yg(a) {
		if (Zg(a) > 3)
			return 0;
		if (a.ab > 1)
			return 0;
		return 3 - (Zg(a) - a.ab)
	}
	;
	function $g(a, b, c, d) {
		C.call(this);
		if (a === undefined)
			throw Error(ah);
		this.ka = a;
		this.ba = null;
		this.pa = [];
		this.sa = [];
		this.pc = this.Cg = this.ab = 0;
		this.da = b || 0;
		this.ea = c || 0;
		this.Pl = d || 0;
		this.tb = this.$h = false;
		this.Ae = true
	}
	u($g, I);
	p = $g.prototype;
	p.Qe = function(a) {
		this.ba = a;
		this.Mb(a)
	};
	function Zg(a) {
		for ( var b = 0, c = 0; c < a.pa.length; c++)
			b += a.pa[c].va;
		return b
	}
	function bh(a, b) {
		if (a.ab !== b) {
			if (!Vg(a, b))
				throw Error(ch);
			var c = a.nc();
			a.ab = b;
			a.dispatchEvent(Bf(dh, c))
		}
	}
	function eh(a, b) {
		if (b !== 0)
			if (Ma(Ug[a.ka][1], b) === -1)
				throw Error(fh);
		var c = a.nc();
		a.pc = b;
		a.dispatchEvent(Bf(dh, c))
	}
	p.Lc = k("$h");
	function gh(a, b) {
		if (a.Ae != b) {
			a.Ae = b;
			a.dispatchEvent(hh)
		}
	}
	p.Qc = function(a) {
		if (this.tb !== a) {
			this.tb = a;
			this.dispatchEvent(ih)
		}
	};
	p.Bd = function(a) {
		if (this.$h !== a) {
			this.$h = a;
			this.dispatchEvent(jh)
		}
	};
	p.move = function(a, b) {
		if (!(this.da === a && this.ea === b)) {
			var c = this.nc();
			this.da = a;
			this.ea = b;
			this.dispatchEvent(Bf(dh, c))
		}
	};
	function kh(a, b) {
		if (a.Ia())
			a.ka.Ya ? lh(a.ka.Ya, b) : mh(a, b);
		else
			a.ka === b ? mh(a, "C") : mh(a, b)
	}
	function mh(a, b) {
		if (a.ka !== b) {
			if (b === undefined)
				throw Error(ah);
			a.Ia() && a.ka.Mb(null);
			var c = a.nc();
			a.ka = b;
			a.gh();
			a.Ia() && b.Mb(a);
			a.dispatchEvent(Bf(dh, c))
		}
	}
	p.Ia = function() {
		return this.ka instanceof nh
	};
	function oh(a) {
		return Ma(a.ba.na, a)
	}
	p.nc = function() {
		return {
			x : this.da,
			y : this.ea,
			Vj : this.ka,
			vk : this.ab,
			Wk : this.pc
		}
	};
	p.Gf = function(a) {
		var b = this.nc();
		this.da = a.x;
		this.ea = a.y;
		this.ka = a.Vj;
		this.ab = a.vk;
		this.pc = a.Wk;
		this.dispatchEvent(Bf(dh, b))
	};
	p.gh = function() {
		this.ab = 0;
		this.Cg = ph.gk;
		this.pc = 0
	};
	var jh = "selection-changed", ih = "atom-hover-changed", dh = "atom-definition-changed", hh = "atom-markability-changed", ph = {
		gk : 0,
		dm : 1,
		Sl : 2,
		lm : 3
	}, ah = "Invalid atom symbol", fh = "Invalid isotope", ch = "Invalid charge";
	function qh() {
		C.call(this);
		this.na = [];
		this.pa = []
	}
	u(qh, I);
	function rh(a, b) {
		for ( var c = [], d = 0; d < a.na.length; d++) {
			a.na[d].tb && c.push(a.na[d]);
			if (b && c.length === b)
				return c
		}
		return c
	}
	function sh(a) {
		for ( var b = [], c = 0; c < a.na.length; c++)
			a.na[c].Lc() && b.push(a.na[c]);
		return b
	}
	function Nf(a, b, c) {
		for ( var d = 0; d < a.pa.length; d++) {
			var e = a.pa[d];
			if (e.contains(b) && e.contains(c))
				return e
		}
	}
	p = qh.prototype;
	p.Bb = function(a, b, c, d) {
		b = new $g(a, b, c, d);
		th(this, b);
		b.Ia() && a.Mb(b);
		return b
	};
	function th(a, b) {
		b.Qe(a);
		a.na.push(b);
		a.dispatchEvent(new D(uh, b))
	}
	function vh(a, b) {
		if (Ua(a.na, b)) {
			b.Qe(null);
			b.Qc(false);
			b.Bd(false);
			for ( var c = Wa(b.pa), d = 0; d < c.length; d++)
				wh(a, c[d]);
			a.dispatchEvent(new D(xh, b))
		} else
			throw Error(yh);
	}
	function zh(a, b) {
		for ( var c = Wa(b), d = 0; d < c.length; d++) {
			var e = c[d];
			if (e.ba === a) {
				var g = a, h = e;
				e = Wa(h.sa);
				vh(g, h);
				for (h = 0; h < e.length; h++)
					e[h].sa.length === 0 && vh(g, e[h])
			}
		}
	}
	function wh(a, b) {
		if (Ua(a.pa, b)) {
			var c = b.ca, d = b.ha;
			Ua(c.pa, b);
			Ua(d.pa, b);
			Ua(c.sa, d);
			Ua(d.sa, c);
			a.dispatchEvent(new D(Ah, b));
			b.Qe(null)
		} else
			throw Error(Bh);
	}
	p.pb = function(a, b, c, d) {
		if (a === b)
			throw Error(Ch);
		a = new Df(a, b, c, d);
		Dh(this, a);
		return a
	};
	function Dh(a, b) {
		var c = b.ca, d = b.ha;
		c.pa.push(b);
		d.pa.push(b);
		c.sa.push(d);
		d.sa.push(c);
		a.pa.push(b);
		b.Qe(a);
		a.dispatchEvent(new D(Eh, b))
	}
	p.clear = function() {
		for ( var a = Wa(this.na), b = 0; b < a.length; b++)
			vh(this, a[b])
	};
	p.Hh = function() {
		return this.na.length == 0 && this.pa.length == 0
	};
	function Fh(a) {
		for ( var b = 0; b < a.na.length; b++)
			a.na[b].Bd(false)
	}
	p.copy = function() {
		for ( var a = new qh, b = 0; b < this.na.length; b++) {
			var c = this.na[b];
			a.Bb(c.ka, c.da, c.ea)
		}
		for (b = 0; b < this.pa.length; b++) {
			c = this.pa[b];
			var d = a.na[oh(c.ca)], e = a.na[oh(c.ha)];
			a.pb(d, e, c.va)
		}
		return a
	};
	var Eh = "bond-added", Ah = "bond-removed", uh = "atom-added", xh = "atom-removed", Ch = "Connecting atom with itself", yh = "No Such Atom", Bh = "No Such Bond";
	function Gh(a) {
		this.ba = a;
		this.jb = 1;
		this.sk = 0.05
	}
	Gh.prototype.Qe = aa("ba");
	Gh.prototype.oe = k("jb");
	Gh.prototype.Pc = aa("jb");
	function Hh(a, b) {
		switch (b.sa.length) {
		case 0:
			return Math.PI / 6;
		case 1:
			return Ih(a, b);
		case 2:
			var c = b.sa, d = c[1];
			c = N(b, c[0]);
			d = N(b, d);
			if (c > d) {
				var e = c;
				c = d;
				d = e
			}
			e = d - c;
			if (e > Math.PI)
				e = -(2 * Math.PI + c - d);
			return yf(c + 0.5 * e + Math.PI);
		case 3:
			a: {
				c = b.sa;
				for (d = 0; d < c.length; d++) {
					e = c[d];
					if (e.sa.length > 1) {
						c = N(e, b);
						break a
					}
				}
				c = N(c[0], b)
			}
			return c
		}
		return 0
	}
	function Ih(a, b) {
		var c = b.sa[0];
		if (c.sa.length == 2) {
			c = b.sa[0];
			var d = c.sa, e = d[0] == b ? d[1] : d[0];
			if (e === b)
				throw Error("cousin is atom");
			var g = N(c, b);
			d = yf(g + Math.PI / 3);
			g = yf(g - Math.PI / 3);
			c = N(e, c);
			return Math.abs(c - d) > Math.abs(c - g) ? g : d
		}
		c = N(c, b);
		if (c >= 0 && c <= Math.PI / 2)
			return c - Math.PI / 3;
		else if (c > Math.PI / 2 && c <= Math.PI)
			return c + Math.PI / 3;
		else if (c > Math.PI && c <= 3 * Math.PI / 2)
			return c - Math.PI / 3;
		else if (c > 3 * Math.PI / 2 && c <= 2 * Math.PI)
			return c + Math.PI / 3;
		throw Error("Unable to assign angle");
	}
	function Jh(a, b) {
		for ( var c = a.ba.na, d = 0; d < c.length; d++) {
			var e = c[d];
			if (O(b, e) < a.sk)
				return e
		}
		return null
	}
	Gh.prototype.Bb = function(a) {
		var b = Jh(this, a);
		b || (b = this.ba.Bb("C", a.da, a.ea));
		return b
	};
	function Kh(a, b, c) {
		var d = Nf(a.ba, b, c);
		d || (d = a.ba.pb(b, c));
		return d
	}
	function Lh(a, b, c) {
		var d = [], e = [];
		e = [];
		for ( var g = b.ca.sa, h = b.ha.sa, i = 0; i < g.length; i++) {
			var j = g[i];
			j === b.ca || j === b.ha || e.push(j)
		}
		for (i = 0; i < h.length; i++) {
			j = h[i];
			j === b.ca || j === b.ha || e.push(j)
		}
		for (h = g = 0; h < e.length; h++) {
			i = N(b.ca, b.ha);
			j = N(b.ca, e[h]);
			var l = yf(Math.PI + i);
			i = j < l && j > i ? true : j > l && j < i ? true : false;
			if (i)
				g++;
			else
				g--
		}
		e = N(b.ca, b.ha) >= Math.PI ? g > 0 : g < 0;
		if (e) {
			e = yf(N(b.ca, b.ha) + (Math.PI / 2 - Math.PI / c));
			c = Af(c, 0.5 * a.jb / Math.sin(Math.PI / c), e);
			e = b.ca.da - c[0].da;
			g = b.ca.ea - c[0].ea;
			for (h = 0; h < c.length; h++)
				c[h].move(c[h].da + e, c[h].ea + g);
			c = c
		} else {
			e = yf(N(b.ca, b.ha) - (Math.PI / 2 - Math.PI / c));
			c = Af(c, 0.5 * a.jb / Math.sin(Math.PI / c), e);
			e = b.ca.da - c[0].da;
			g = b.ca.ea - c[0].ea;
			for (h = 0; h < c.length; h++)
				c[h].move(c[h].da + e, c[h].ea + g);
			c = c
		}
		e = c;
		c = a.Bb(e[0]);
		g = null;
		d[0] = c;
		for (h = 1; h < e.length; h++) {
			g = a.Bb(e[h]);
			d[h] = g;
			Kh(a, c, g);
			c = g
		}
		Kh(a, g, b.ca);
		return d
	}
	function Mh(a, b, c) {
		var d = [], e = 0;
		if (b.sa.length != 0) {
			e = N(b, b.sa[0]);
			e = yf(e + Math.PI)
		} else
			e = Math.PI / 6;
		c = Af(c, 0.5 * a.jb / Math.sin(Math.PI / c), e);
		e = b.da - c[0].da;
		var g = b.ea - c[0].ea, h = b, i = null;
		d[0] = h;
		for ( var j = 1; j < c.length; j++) {
			i = a.ba.Bb("C", c[j].da + e, c[j].ea + g);
			d[j] = i;
			a.ba.pb(h, i, Q.Ma);
			h = i
		}
		a.ba.pb(i, b, Q.Ma);
		return d
	}
	function Nh(a, b, c, d) {
		var e = d || Hh(a, b), g = b.da + a.jb * Math.cos(e), h = b.ea + a.jb
				* Math.sin(e);
		d = [];
		e = Af(c, 0.5 * a.jb / Math.sin(Math.PI / c), e);
		var i = g - e[0].da, j = h - e[0].ea;
		g = a.ba.Bb("C", g, h, 0);
		d[0] = g;
		for (h = 1; h < c; h++) {
			var l = a.ba.Bb("C", e[h].da + i, e[h].ea + j);
			a.ba.pb(g, l, Q.Ma);
			g = d[h] = l
		}
		a.ba.pb(d[c - 1], d[0], Q.Ma);
		a.ba.pb(d[0], b, Q.Ma);
		return d
	}
	function Oh(a, b) {
		if (b.ka === "C")
			return Xg(b) >= 3;
		return Xg(b) >= 2
	}
	function Ph(a, b) {
		for ( var c = 1; c < b.length; c++) {
			var d = b[c - 1], e = b[c];
			Xg(d) >= 1 && Zg(d) === d.sa.length && Xg(e) >= 1
					&& Zg(e) === e.sa.length && If(Nf(e.ba, e, d), Q.wb)
		}
	}
	;
	function Qh() {
		this.ra = new he;
		this.me = false
	}
	u(Qh, I);
	Qh.prototype.moveTo = function(a, b) {
		if (this.ra.gb())
			throw Error(Rh);
		if (this.me)
			throw Error(Sh);
		this.ra.lineTo(a, b);
		this.dispatchEvent(Th)
	};
	Qh.prototype.end = function() {
		if (this.ra.gb())
			throw Error(Rh);
		this.me = true;
		this.dispatchEvent(Uh)
	};
	function Vh(a, b, c) {
		var d = false, e = 0, g = 0, h = 0, i = 0, j = 0;
		ke(a.ra, t(function(l, n) {
			if (!d) {
				switch (l) {
				case 0:
					if (i !== g || j !== h)
						e += Wh(this, i, j, g, h, b, c);
					g = i = n[0];
					h = j = n[1];
					break;
				case 1:
					for ( var o = 0; o < n.length; o += 2) {
						e += Wh(this, i, j, n[o], n[o + 1], b, c);
						i = n[o];
						j = n[o + 1]
					}
					break
				}
				if (j !== h || i !== g) {
					e += Wh(this, i, j, g, h, b, c);
					i = g;
					j = h
				}
				if (b === i && c === j) {
					e = 0;
					j = h;
					d = true
				}
			}
		}, a));
		if (j !== h)
			e += Wh(a, i, j, g, h, b, c);
		return e
	}
	function Wh(a, b, c, d, e, g, h) {
		if (g < b && g < d || g > b && g > d || h > c && h > e || b === d)
			return 0;
		if (!(h < c && h < e))
			if ((e - c) * (g - b) / (d - b) <= h - c)
				return 0;
		if (g === b)
			return b < d ? 0 : -1;
		if (g === d)
			return b < d ? 1 : 0;
		return b < d ? 1 : -1
	}
	var Th = "lasso-moved", Uh = "lasso-ended", Rh = "lasso-not-begun", Sh = "lasso-ended";
	function Xh(a) {
		C.call(this);
		this.ba = a || new qh;
		this.db = new Gh(this.ba);
		this.qc = new Qh;
		this.ba.Mb(this);
		this.qc.Mb(this);
		E(this.qc, "lasso-started", this.sg, false, this);
		E(this.qc, Th, this.tg, false, this)
	}
	u(Xh, I);
	p = Xh.prototype;
	p.gb = function() {
		return this.ba.na.length === 0 && this.ba.pa.length === 0
	};
	p.clear = function() {
		this.ba.clear()
	};
	p.Sd = function() {
		if (!this.gb()) {
			for ( var a = this.ba.na[0], b = new nc(a.ea, a.da, a.ea, a.da), c = this.ba.na, d = 1; d < c.length; d++) {
				a = c[d];
				if (a.ea > b.top)
					b.top = a.ea;
				if (a.ea < b.bottom)
					b.bottom = a.ea;
				if (a.da < b.left)
					b.left = a.da;
				if (a.da > b.right)
					b.right = a.da
			}
			return b
		}
	};
	p.hg = function() {
		if (!this.gb()) {
			var a = this.Sd();
			return new A(a.right - a.left, a.top - a.bottom)
		}
	};
	p.pe = function() {
		if (this.ba.na.length === 0)
			return new M(0, 0);
		var a = this.Sd();
		return new M(a.left + 0.5 * (a.right - a.left), a.top + 0.5
				* (a.bottom - a.top))
	};
	p.sg = function() {
		Fh(this.ba)
	};
	p.tg = function(a) {
		a = a.target;
		for ( var b = this.ba.na, c = 0; c < b.length; c++) {
			var d = b[c];
			(Vh(a, d.da, d.ea) & 1) !== 0 && d.Bd(true)
		}
	};
	function Yh(a, b) {
		this.mc = a;
		this.Ee = undefined;
		this.Ee = b === 0 ? 0 : b || 1
	}
	u(Yh, re);
	function mg() {
		he.call(this)
	}
	u(mg, he);
	mg.prototype.Od = null;
	mg.prototype.bb = function() {
		var a = mg.ga.bb.call(this);
		a.Od = this.Od && this.Od.bb();
		return a
	};
	mg.prototype.transform = function(a) {
		mg.ga.transform.call(this, a);
		this.Od = null;
		return this
	};
	function T(a) {
		if (!a.Od && !a.gb()) {
			var b, c = b = Number.POSITIVE_INFINITY, d, e = d = Number.NEGATIVE_INFINITY;
			ke(a.Rc ? a : me(a), function(g, h) {
				for ( var i = 0, j = h.length; i < j; i += 2) {
					c = Math.min(c, h[i]);
					e = Math.max(e, h[i]);
					b = Math.min(b, h[i + 1]);
					d = Math.max(d, h[i + 1])
				}
			});
			a.Od = new oc(c, b, e - c, d - b)
		}
		return a.Od
	}
	;
	var Zh = {
		A : {
			commands : [ "M", "L", "L", "Z", "M", "L", "L", "L", "L", "L", "L",
					"L", "Z" ],
			points : [ 4.611, -6.662, 3.428, -3.047, 5.725, -3.047, 3.387,
					-9.246, 5.766, -9.246, 8.813, 0, 6.65, 0, 6, -2.051, 3.152,
					-2.051, 2.502, 0, 0.3398, 0 ]
		},
		B : {
			commands : [ "M", "L", "L", "Q", "Q", "Q", "Z", "M", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "L", "L", "Z", "M", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L", "L", "Z" ],
			points : [ 3.264, -7.752, 3.264, -5.438, 4.078, -5.438, 6.012,
					-5.438, 6.012, -6.65, 6.012, -7.184, 5.748, -7.412, 5.361,
					-7.752, 4.09, -7.752, 3.961, -1.488, 4.934, -1.488, 5.15,
					-1.547, 5.367, -1.605, 5.531, -1.664, 5.695, -1.723, 5.789,
					-1.816, 5.883, -1.91, 5.965, -2.039, 6.123, -2.273, 6.123,
					-2.725, 6.123, -3.176, 5.988, -3.454, 5.854, -3.732, 5.566,
					-3.879, 5.08, -4.119, 4.066, -4.119, 3.264, -4.119, 3.264,
					-1.488, 3.551, -9.246, 5.145, -9.246, 5.924, -9.032, 6.703,
					-8.818, 7.078, -8.555, 7.922, -7.969, 7.922, -6.797, 7.922,
					-6.012, 7.354, -5.487, 6.785, -4.963, 5.918, -4.875, 7.623,
					-4.617, 8.074, -3.662, 8.256, -3.275, 8.256, -2.704, 8.256,
					-2.133, 8.068, -1.658, 7.881, -1.184, 7.547, -0.873, 7.213,
					-0.5625, 6.703, -0.3633, 5.783, 0, 4.254, 0, 1.102, 0,
					1.102, -9.246 ]
		},
		C : {
			commands : [ "M", "Q", "Q", "L", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "L", "L", "L", "L", "Q", "Q", "Q", "Z" ],
			points : [ 2.596, -4.582, 2.596, -1.4, 4.705, -1.4, 5.766, -1.4,
					6.697, -2.039, 7.283, -0.5156, 6.779, -0.09375, 5.52,
					0.09375, 5.033, 0.1699, 4.506, 0.1699, 2.607, 0.1699,
					1.526, -1.081, 0.4453, -2.332, 0.4453, -4.638, 0.4453,
					-6.943, 1.506, -8.165, 2.566, -9.387, 4.506, -9.387, 5.795,
					-9.387, 6.844, -8.953, 7.072, -8.854, 7.178, -8.783, 7.283,
					-8.713, 6.697, -7.189, 6.592, -7.266, 6.457, -7.354, 5.719,
					-7.828, 4.661, -7.828, 3.604, -7.828, 3.1, -7.055, 2.596,
					-6.281, 2.596, -4.582 ]
		},
		D : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "L", "L", "L", "Q",
					"Q", "Z", "M", "Q", "Q", "L", "L", "L", "Q", "Z" ],
			points : [ 6.527, -3.809, 6.551, -4.148, 6.551, -4.6, 6.551,
					-5.051, 6.527, -5.388, 6.504, -5.725, 6.431, -6.073, 6.357,
					-6.422, 6.234, -6.668, 5.93, -7.242, 5.347, -7.506, 4.764,
					-7.77, 3.756, -7.77, 3.27, -7.77, 3.27, -1.488, 3.756,
					-1.488, 5.273, -1.488, 5.854, -2.077, 6.434, -2.666, 6.527,
					-3.809, 8.719, -4.582, 8.719, -2.361, 7.562, -1.181, 6.404,
					0, 3.984, 0, 1.107, 0, 1.107, -9.246, 3.984, -9.246, 8.719,
					-9.246, 8.719, -4.582 ]
		},
		E : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "Z" ],
			points : [ 7.436, 0, 1.107, 0, 1.107, -9.246, 7.377, -9.246, 7.377,
					-7.67, 3.264, -7.67, 3.264, -5.443, 6.85, -5.443, 6.85,
					-4.119, 3.264, -4.119, 3.264, -1.559, 7.436, -1.559 ]
		},
		F : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 3.264, -4.113, 3.264, 0, 1.107, 0, 1.107, -9.246, 7.436,
					-9.246, 7.436, -7.67, 3.264, -7.67, 3.264, -5.438, 6.932,
					-5.438, 6.932, -4.113 ]
		},
		G : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "L", "L", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 6.574, -1.781, 6.574, -3.838, 4.477, -3.838, 4.477,
					-5.15, 8.467, -5.15, 8.467, 0, 7.078, 0, 6.797, -0.7383,
					6.563, -0.293, 5.977, -0.03809, 5.391, 0.2168, 4.641,
					0.2168, 2.807, 0.2168, 1.752, -0.9902, 0.6973, -2.197,
					0.6973, -4.512, 0.6973, -6.785, 1.869, -8.077, 3.041,
					-9.369, 5.209, -9.369, 5.766, -9.369, 6.255, -9.296, 6.744,
					-9.223, 7.049, -9.117, 7.354, -9.012, 7.573, -8.906, 7.793,
					-8.801, 7.887, -8.73, 7.986, -8.666, 7.359, -7.225, 7.23,
					-7.289, 7.011, -7.389, 6.791, -7.488, 6.231, -7.655, 5.672,
					-7.822, 5.256, -7.822, 4.113, -7.822, 3.486, -6.979, 2.859,
					-6.135, 2.859, -4.5, 2.859, -3.598, 3.064, -2.915, 3.27,
					-2.232, 3.718, -1.819, 4.166, -1.406, 4.816, -1.406, 5.871,
					-1.406, 6.574, -1.781 ]
		},
		H : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "Z" ],
			points : [ 6.328, 0, 6.328, -4.125, 3.059, -4.125, 3.059, 0,
					0.8965, 0, 0.8965, -9.246, 3.059, -9.246, 3.059, -5.449,
					6.328, -5.449, 6.328, -9.246, 8.49, -9.246, 8.49, 0 ]
		},
		I : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "Z" ],
			points : [ 0.4512, -0.9961, 1.447, -0.9961, 1.447, -8.244, 0.4512,
					-8.244, 0.4512, -9.246, 4.611, -9.246, 4.611, -8.244,
					3.609, -8.244, 3.609, -0.9961, 4.611, -0.9961, 4.611, 0,
					0.4512, 0 ]
		},
		J : {
			commands : [ "M", "Q", "Q", "Q", "L", "L", "L", "Q", "Q", "Z" ],
			points : [ 0.1816, -0.9023, 0.8965, -0.9844, 1.286, -1.187, 1.676,
					-1.389, 1.857, -1.808, 2.039, -2.227, 2.039, -2.965, 2.039,
					-9.246, 4.201, -9.246, 4.201, -3.158, 4.248, -1.254, 3.413,
					-0.3955, 2.578, 0.4629, 0.7324, 0.5039 ]
		},
		K : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "L", "Z" ],
			points : [ 3.281, -3.961, 3.281, 0, 1.119, 0, 1.119, -9.246, 3.281,
					-9.246, 3.281, -5.279, 3.762, -5.279, 6.387, -9.246, 8.59,
					-9.246, 5.467, -4.67, 8.912, 0, 6.656, 0, 3.715, -3.961 ]
		},
		L : {
			commands : [ "M", "L", "L", "L", "L", "L", "Z" ],
			points : [ 6.973, 0, 0.8145, 0, 0.8145, -9.246, 2.971, -9.246,
					2.971, -1.482, 6.973, -1.482 ]
		},
		M : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "L", "Z" ],
			points : [ 4.893, 0, 2.795, -6.357, 2.795, 0, 1.002, 0, 1.002,
					-9.246, 3.551, -9.246, 5.848, -2.391, 8.227, -9.246, 10.78,
					-9.246, 10.78, 0, 8.988, 0, 8.988, -6.357, 6.908, 0 ]
		},
		N : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 8.678, 0, 6.445, 0, 2.801, -6.293, 2.801, 0, 0.873, 0,
					0.873, -9.246, 3.182, -9.246, 6.762, -3.041, 6.762, -9.246,
					8.678, -9.246 ]
		},
		O : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Z", "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Z" ],
			points : [ 4.764, -9.404, 6.855, -9.404, 7.89, -8.147, 8.924,
					-6.891, 8.924, -4.623, 8.924, -3.51, 8.675, -2.634, 8.426,
					-1.758, 7.922, -1.131, 7.418, -0.5039, 6.621, -0.1699,
					5.824, 0.1641, 4.764, 0.1641, 3.703, 0.1641, 2.906,
					-0.1699, 2.109, -0.5039, 1.605, -1.131, 1.102, -1.758,
					0.8525, -2.634, 0.6035, -3.51, 0.6035, -4.623, 0.6035,
					-6.891, 1.638, -8.147, 2.672, -9.404, 4.764, -9.404, 4.764,
					-7.846, 4.301, -7.846, 3.949, -7.679, 3.598, -7.512, 3.375,
					-7.23, 3.152, -6.949, 3.015, -6.53, 2.877, -6.111, 2.821,
					-5.651, 2.766, -5.191, 2.766, -4.623, 2.766, -4.055, 2.821,
					-3.595, 2.877, -3.135, 3.015, -2.716, 3.152, -2.297, 3.375,
					-2.013, 3.598, -1.729, 3.949, -1.562, 4.301, -1.395, 4.764,
					-1.395, 5.227, -1.395, 5.578, -1.562, 5.93, -1.729, 6.152,
					-2.013, 6.375, -2.297, 6.513, -2.716, 6.65, -3.135, 6.706,
					-3.595, 6.762, -4.055, 6.762, -4.623, 6.762, -5.191, 6.706,
					-5.651, 6.65, -6.111, 6.513, -6.53, 6.375, -6.949, 6.152,
					-7.23, 5.93, -7.512, 5.578, -7.679, 5.227, -7.846, 4.764,
					-7.846 ]
		},
		P : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L",
					"L", "Z", "M", "Q", "Q", "Q", "Q", "Q", "L", "L", "L", "L",
					"L", "Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 3.328, -4.523, 3.756, -4.523, 4.099, -4.57, 4.441,
					-4.617, 4.746, -4.731, 5.051, -4.846, 5.256, -5.024, 5.461,
					-5.203, 5.578, -5.484, 5.695, -5.766, 5.695, -6.141, 5.695,
					-6.65, 5.549, -7.005, 5.402, -7.359, 5.109, -7.562, 4.816,
					-7.764, 4.43, -7.849, 4.043, -7.934, 3.504, -7.934, 2.977,
					-7.934, 2.977, -4.523, 7.852, -6.164, 7.852, -5.473, 7.638,
					-4.957, 7.424, -4.441, 7.046, -4.116, 6.668, -3.791, 6.088,
					-3.592, 5.508, -3.393, 4.852, -3.313, 4.195, -3.234, 3.34,
					-3.234, 2.977, -3.234, 2.977, 0, 0.8145, 0, 0.8145, -9.246,
					3.504, -9.246, 4.318, -9.246, 4.951, -9.161, 5.584, -9.076,
					6.144, -8.865, 6.703, -8.654, 7.069, -8.312, 7.436, -7.969,
					7.644, -7.427, 7.852, -6.885, 7.852, -6.164 ]
		},
		Q : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Z", "M",
					"Q", "Q", "Q", "Q", "Q", "L", "L", "L", "Q", "Q", "Q", "Q",
					"Q", "Q", "Z" ],
			points : [ 4.764, -7.846, 4.301, -7.846, 3.952, -7.679, 3.604,
					-7.512, 3.381, -7.23, 3.158, -6.949, 3.018, -6.53, 2.877,
					-6.111, 2.821, -5.651, 2.766, -5.191, 2.766, -4.623, 2.766,
					-4.055, 2.821, -3.595, 2.877, -3.135, 3.018, -2.716, 3.158,
					-2.297, 3.378, -2.013, 3.598, -1.729, 3.949, -1.562, 4.301,
					-1.395, 4.764, -1.395, 5.227, -1.395, 5.578, -1.562, 5.93,
					-1.729, 6.149, -2.013, 6.369, -2.297, 6.51, -2.716, 6.65,
					-3.135, 6.706, -3.595, 6.762, -4.055, 6.762, -4.623, 6.762,
					-5.191, 6.706, -5.651, 6.65, -6.111, 6.51, -6.53, 6.369,
					-6.949, 6.146, -7.23, 5.924, -7.512, 5.575, -7.679, 5.227,
					-7.846, 4.764, -7.846, 4.764, -9.404, 6.855, -9.404, 7.89,
					-8.147, 8.924, -6.891, 8.924, -4.623, 8.924, -3.34, 8.599,
					-2.379, 8.273, -1.418, 7.585, -0.7852, 6.896, -0.1523,
					5.865, 0.05859, 7.553, 1.371, 6.533, 2.461, 3.861, 0.09375,
					3.035, -0.03516, 2.411, -0.4219, 1.787, -0.8086, 1.392,
					-1.421, 0.9961, -2.033, 0.7998, -2.833, 0.6035, -3.633,
					0.6035, -4.623, 0.6035, -6.891, 1.638, -8.147, 2.672,
					-9.404, 4.764, -9.404 ]
		},
		R : {
			commands : [ "M", "Q", "Q", "Q", "Q", "L", "L", "L", "Q", "Q", "Q",
					"Q", "L", "L", "L", "L", "L", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Z", "M", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "L", "L", "Z" ],
			points : [ 5.186, -4.605, 5.824, -4.541, 6.302, -4.4, 6.779, -4.26,
					7.178, -3.996, 7.576, -3.732, 7.784, -3.29, 7.992, -2.848,
					7.992, -2.238, 7.992, 0, 5.854, 0, 5.854, -2.385, 5.854,
					-2.854, 5.704, -3.17, 5.555, -3.486, 5.253, -3.656, 4.951,
					-3.826, 4.576, -3.894, 4.201, -3.961, 3.668, -3.961, 2.977,
					-3.961, 2.977, 0, 0.8145, 0, 0.8145, -9.246, 3.27, -9.246,
					4.365, -9.246, 5.165, -9.146, 5.965, -9.047, 6.495, -8.862,
					7.025, -8.678, 7.342, -8.379, 7.658, -8.08, 7.79, -7.72,
					7.922, -7.359, 7.922, -6.873, 7.922, -6.393, 7.79, -6.021,
					7.658, -5.648, 7.421, -5.396, 7.184, -5.145, 6.835, -4.975,
					6.486, -4.805, 6.085, -4.717, 5.684, -4.629, 5.186, -4.605,
					3.229, -5.268, 3.762, -5.268, 4.14, -5.3, 4.518, -5.332,
					4.84, -5.42, 5.162, -5.508, 5.355, -5.66, 5.549, -5.813,
					5.657, -6.053, 5.766, -6.293, 5.766, -6.621, 5.766, -6.938,
					5.684, -7.16, 5.602, -7.383, 5.438, -7.535, 5.273, -7.688,
					4.989, -7.775, 4.705, -7.863, 4.345, -7.898, 3.984, -7.934,
					3.475, -7.934, 2.977, -7.934, 2.977, -5.268 ]
		},
		S : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "L", "L", "L", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L",
					"L", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "L", "Q", "Q", "Z" ],
			points : [ 7.412, -2.73, 7.412, 0.2402, 3.99, 0.2402, 3.48, 0.2402,
					2.959, 0.1465, 2.438, 0.05273, 2.095, -0.05859, 1.752,
					-0.1699, 1.392, -0.3369, 1.031, -0.5039, 0.9258, -0.5625,
					0.6973, -0.7031, 0.6855, -0.709, 1.16, -2.332, 1.225,
					-2.291, 1.339, -2.227, 1.453, -2.162, 1.787, -1.998, 2.121,
					-1.834, 2.432, -1.711, 2.742, -1.588, 3.135, -1.485, 3.527,
					-1.383, 3.82, -1.389, 4.096, -1.395, 4.257, -1.4, 4.418,
					-1.406, 4.629, -1.436, 4.84, -1.465, 4.96, -1.523, 5.08,
					-1.582, 5.194, -1.679, 5.309, -1.775, 5.358, -1.928, 5.408,
					-2.08, 5.408, -2.285, 5.408, -2.66, 5.229, -2.918, 5.051,
					-3.176, 4.588, -3.363, 2.104, -4.383, 1.336, -4.699,
					0.9404, -5.332, 0.5449, -5.965, 0.5449, -6.791, 0.5449,
					-7.318, 0.7412, -7.761, 0.9375, -8.203, 1.269, -8.505, 1.6,
					-8.807, 2.042, -9.021, 2.484, -9.234, 2.968, -9.331, 3.451,
					-9.428, 3.955, -9.428, 4.4, -9.428, 4.89, -9.343, 5.379,
					-9.258, 5.76, -9.141, 6.141, -9.023, 6.46, -8.906, 6.779,
					-8.789, 6.955, -8.707, 7.125, -8.625, 6.574, -6.996, 6.527,
					-7.031, 6.445, -7.084, 6.363, -7.137, 6.103, -7.274, 5.842,
					-7.412, 5.575, -7.518, 5.309, -7.623, 4.925, -7.711, 4.541,
					-7.799, 4.178, -7.799, 3.943, -7.799, 3.765, -7.79, 3.586,
					-7.781, 3.381, -7.752, 3.176, -7.723, 3.029, -7.664, 2.883,
					-7.605, 2.757, -7.515, 2.631, -7.424, 2.569, -7.283, 2.508,
					-7.143, 2.508, -6.961, 2.508, -6.82, 2.543, -6.712, 2.578,
					-6.604, 2.748, -6.454, 2.918, -6.305, 3.223, -6.182, 5.309,
					-5.355, 6.176, -5.01, 6.794, -4.307, 7.412, -3.604, 7.412,
					-2.73 ]
		},
		T : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 6.844, -7.758, 4.488, -7.758, 4.488, 0, 2.326, 0, 2.326,
					-7.758, -0.07031, -7.758, -0.07031, -9.246, 6.844, -9.246 ]
		},
		U : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "L", "L", "L", "Q", "Q", "Q", "Q", "L", "L",
					"Z" ],
			points : [ 2.982, -4.213, 3, -3.141, 3.064, -2.833, 3.129, -2.525,
					3.193, -2.317, 3.258, -2.109, 3.349, -1.975, 3.439, -1.84,
					3.568, -1.711, 3.697, -1.582, 3.867, -1.506, 4.225, -1.342,
					4.629, -1.342, 5.033, -1.342, 5.273, -1.392, 5.514, -1.441,
					5.689, -1.553, 5.865, -1.664, 5.997, -1.799, 6.129, -1.934,
					6.214, -2.145, 6.299, -2.355, 6.354, -2.558, 6.41, -2.76,
					6.434, -3.053, 6.48, -3.539, 6.48, -4.213, 6.48, -9.246,
					8.643, -9.246, 8.643, -4.236, 8.643, -2.051, 7.708, -0.917,
					6.773, 0.2168, 4.734, 0.2168, 2.666, 0.2168, 1.723,
					-0.9551, 0.8203, -2.08, 0.8203, -4.236, 0.8203, -9.246,
					2.982, -9.246 ]
		},
		V : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 1.969, -9.246, 3.926, -2.947, 5.813, -9.246, 7.852,
					-9.246, 4.969, 0, 2.824, 0, -0.04688, -9.246 ]
		},
		W : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "L", "Z" ],
			points : [ 4.705, -9.17, 7.008, -9.17, 8.221, -2.625, 9.492,
					-9.246, 11.58, -9.246, 9.598, 0, 7.225, 0, 5.854, -7.061,
					4.488, 0, 2.109, 0, 0.1289, -9.246, 2.221, -9.246, 3.492,
					-2.625 ]
		},
		X : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "Z" ],
			points : [ 4.008, -6.252, 5.801, -9.246, 8.045, -9.246, 5.215,
					-4.67, 8.045, 0, 5.754, 0, 4.008, -2.895, 2.262, 0,
					-0.0293, 0, 2.801, -4.67, -0.0293, -9.246, 2.215, -9.246 ]
		},
		Y : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 3.609, -5.303, 5.426, -9.246, 7.617, -9.246, 4.629,
					-3.035, 4.629, 0, 2.59, 0, 2.59, -3.035, -0.3633, -9.246,
					1.793, -9.246 ]
		},
		Z : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 6.803, -9.246, 6.803, -7.934, 2.73, -1.734, 6.814,
					-1.734, 6.814, 0, 0.3105, 0, 0.3105, -1.471, 4.424, -7.758,
					0.3105, -7.758, 0.3105, -9.246 ]
		},
		a : {
			commands : [ "M", "Q", "Q", "Q", "Q", "L", "Q", "Q", "Q", "Z", "M",
					"Q", "L", "Q", "Q", "Q", "L", "L", "L", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 2.924, -2.994, 2.602, -2.783, 2.602, -2.285, 2.602,
					-1.787, 2.83, -1.529, 3.059, -1.271, 3.469, -1.271, 4.113,
					-1.271, 4.564, -1.816, 4.564, -3.158, 4.576, -3.17, 4.339,
					-3.188, 4.102, -3.205, 4.002, -3.205, 3.246, -3.205, 2.924,
					-2.994, 3.656, -5.59, 2.479, -5.59, 1.471, -5.115, 0.9844,
					-6.34, 2.063, -7.008, 3.727, -7.008, 5.637, -7.008, 6.246,
					-5.789, 6.604, -5.086, 6.604, -3.949, 6.604, 0, 5.016, 0,
					4.734, -0.8789, 4.436, -0.3633, 4.014, -0.1055, 3.592,
					0.1523, 2.936, 0.1523, 1.805, 0.1523, 1.178, -0.4365,
					0.5508, -1.025, 0.5508, -2.118, 0.5508, -3.211, 1.371,
					-3.741, 2.191, -4.271, 3.668, -4.271, 4.184, -4.271, 4.564,
					-4.201, 4.564, -4.881, 4.506, -5.033, 4.383, -5.367, 4.187,
					-5.479, 3.99, -5.59, 3.656, -5.59 ]
		},
		b : {
			commands : [ "M", "Q", "L", "L", "L", "L", "L", "Q", "Q", "Q", "Q",
					"Q", "Z", "M", "Q", "Q", "Q", "Q", "L", "Q", "Z" ],
			points : [ 4.822, 0.1523, 3.352, 0.1523, 2.988, -0.9727, 2.543, 0,
					1.107, 0, 1.107, -9.832, 3.164, -10.11, 3.164, -6.211,
					3.867, -7.008, 5.016, -7.008, 5.83, -7.008, 6.41, -6.557,
					7.582, -5.654, 7.582, -3.434, 7.582, -0.6914, 5.895,
					-0.03516, 5.426, 0.1523, 4.822, 0.1523, 4.348, -1.172,
					5.531, -1.172, 5.531, -3.434, 5.531, -4.758, 5.285, -5.238,
					5.039, -5.695, 4.529, -5.695, 3.855, -5.695, 3.164, -5.016,
					3.164, -1.734, 3.68, -1.172, 4.348, -1.172 ]
		},
		c : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "L", "Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 0.8438, -1.863, 0.5859, -2.537, 0.5859, -3.349, 0.5859,
					-4.16, 0.7676, -4.737, 0.9492, -5.314, 1.266, -5.725,
					1.582, -6.135, 2.004, -6.428, 2.842, -7.008, 3.891, -7.008,
					4.67, -7.008, 5.183, -6.858, 5.695, -6.709, 6.24, -6.422,
					5.859, -5.104, 5.701, -5.256, 5.209, -5.44, 4.717, -5.625,
					4.242, -5.625, 3.369, -5.625, 3.009, -5.118, 2.648, -4.611,
					2.648, -3.434, 2.648, -1.236, 4.4, -1.236, 5.051, -1.236,
					5.777, -1.705, 5.854, -1.752, 5.854, -1.758, 6.234,
					-0.4395, 5.877, -0.252, 5.613, -0.1465, 4.893, 0.1465,
					4.043, 0.1465, 3.193, 0.1465, 2.596, -0.08789, 1.998,
					-0.3223, 1.55, -0.7559, 1.102, -1.189, 0.8438, -1.863 ]
		},
		d : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "L", "L", "L", "L", "L",
					"Q", "Q", "Q", "Q", "Q", "Q", "Z", "M", "Q", "Q", "L", "Q",
					"Q", "Q", "Z" ],
			points : [ 0.7148, -2.273, 0.627, -2.783, 0.627, -3.656, 0.627,
					-4.529, 0.9316, -5.317, 1.236, -6.105, 1.834, -6.557,
					2.432, -7.008, 3.246, -7.008, 4.418, -7.008, 5.057, -6.129,
					5.057, -9.832, 7.113, -10.11, 7.113, 0, 5.666, 0, 5.221,
					-0.9727, 5.092, -0.5332, 4.611, -0.2227, 4.037, 0.1523,
					3.369, 0.1523, 2.795, 0.1523, 2.32, -0.03223, 1.846,
					-0.2168, 1.532, -0.5361, 1.219, -0.8555, 1.011, -1.31,
					0.8027, -1.764, 0.7148, -2.273, 2.678, -3.434, 2.678,
					-1.23, 3.861, -1.23, 4.693, -1.23, 5.057, -1.734, 5.057,
					-5.016, 4.359, -5.637, 3.68, -5.637, 2.777, -5.637, 2.695,
					-4.107, 2.678, -3.85, 2.678, -3.434 ]
		},
		e : {
			commands : [ "M", "Q", "Q", "Q", "Z", "M", "L", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "L", "L", "Q", "Q", "Q", "Z" ],
			points : [ 5.08, -3.961, 5.098, -5.625, 3.902, -5.625, 3.504,
					-5.625, 3.217, -5.391, 2.672, -4.939, 2.672, -3.961, 6.018,
					-1.781, 6.404, -0.4102, 5.314, 0.1465, 4.125, 0.1523, 1.84,
					0.1523, 0.9609, -1.512, 0.5449, -2.314, 0.5684, -3.316,
					0.5918, -4.318, 0.8496, -4.975, 1.107, -5.631, 1.559,
					-6.076, 2.496, -7.008, 3.938, -7.008, 4.811, -7.008, 5.449,
					-6.621, 6.756, -5.824, 6.744, -3.902, 6.744, -2.941, 2.678,
					-2.941, 2.701, -2.168, 3.129, -1.699, 3.557, -1.236, 4.283,
					-1.242, 5.285, -1.248, 6.018, -1.781 ]
		},
		f : {
			commands : [ "M", "Q", "Q", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "Q", "Q", "Q", "L", "Q", "Z" ],
			points : [ 4.336, -8.414, 3.926, -8.414, 3.729, -8.065, 3.533,
					-7.717, 3.533, -6.803, 5.174, -6.803, 5.174, -5.953, 3.527,
					-5.953, 3.527, 0, 1.477, 0, 1.477, -5.953, 0.3633, -5.953,
					0.3633, -6.803, 1.477, -6.803, 1.477, -8.355, 2.063,
					-9.144, 2.648, -9.932, 3.867, -9.932, 4.535, -9.932, 5.209,
					-9.762, 5.209, -8.268, 4.816, -8.414, 4.336, -8.414 ]
		},
		g : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "L", "Q", "Q", "Q", "Z", "M", "L", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Z", "M", "Q", "Q", "Q", "Q", "Q", "L", "L",
					"L", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"L", "Q", "Q", "Q", "Q", "Q", "Q", "L", "L", "Z" ],
			points : [ 2.183, 0.624, 2.086, 0.8027, 2.086, 0.9756, 2.086,
					1.148, 2.106, 1.257, 2.127, 1.365, 2.206, 1.477, 2.285,
					1.588, 2.438, 1.646, 2.777, 1.781, 3.387, 1.781, 3.996,
					1.781, 4.345, 1.731, 4.693, 1.682, 4.896, 1.603, 5.098,
					1.523, 5.215, 1.389, 5.396, 1.172, 5.399, 0.8438, 5.402,
					0.5156, 5.291, 0.3574, 5.063, 0.0293, 3.844, -0.08789,
					3.023, -0.1699, 2.977, -0.1699, 2.763, 0, 2.549, 0.1699,
					2.414, 0.3076, 2.279, 0.4453, 2.183, 0.624, 3.223, -3.545,
					3.938, -3.604, 4.254, -3.627, 4.523, -3.984, 4.787, -4.348,
					4.775, -4.711, 4.775, -5.672, 3.721, -5.672, 3.176, -5.672,
					2.9, -5.452, 2.625, -5.232, 2.625, -4.649, 2.625, -4.066,
					3.012, -3.691, 3.105, -3.604, 3.223, -3.545, 6.094, -5.672,
					6.469, -5.109, 6.469, -4.787, 6.469, -4.465, 6.41, -4.195,
					6.352, -3.926, 6.185, -3.621, 6.018, -3.316, 5.76, -3.082,
					5.168, -2.572, 4.072, -2.467, 2.297, -2.297, 2.402, -1.594,
					3.973, -1.477, 5.613, -1.354, 6.398, -0.8057, 7.184,
					-0.2578, 7.184, 0.8496, 7.184, 3.275, 3.434, 3.275, 0.873,
					3.275, 0.5273, 1.928, 0.457, 1.652, 0.457, 1.195, 0.457,
					0.7383, 0.7734, 0.2813, 1.09, -0.1758, 1.67, -0.4688,
					0.7559, -0.5566, 0.6387, -1.576, 0.6035, -2.068, 0.668,
					-2.244, 0.7324, -2.42, 0.8379, -2.566, 1.066, -2.895,
					1.676, -3.094, 2.15, -3.223, 1.348, -3.258, 0.9961, -3.838,
					0.7969, -4.16, 0.7969, -4.635, 0.7969, -5.754, 1.538,
					-6.381, 2.279, -7.008, 3.527, -7.008, 4.775, -7.008, 5.32,
					-6.656, 6.1, -6.996, 6.949, -6.996, 7.541, -6.996, 7.541,
					-5.672 ]
		},
		h : {
			commands : [ "M", "L", "Q", "Q", "Q", "Q", "Q", "L", "L", "L", "Q",
					"Q", "Q", "Q", "Q", "L", "L", "L", "Z" ],
			points : [ 3.158, -10.13, 3.158, -6.193, 3.193, -6.281, 3.378,
					-6.448, 3.563, -6.615, 3.756, -6.727, 4.242, -7.008, 4.992,
					-7.008, 6.146, -7.008, 6.785, -6.311, 7.424, -5.613, 7.424,
					-4.236, 7.424, 0, 5.373, 0, 5.373, -4.377, 5.373, -5.004,
					5.089, -5.32, 4.805, -5.637, 4.415, -5.637, 4.025, -5.637,
					3.8, -5.569, 3.574, -5.502, 3.457, -5.42, 3.34, -5.338,
					3.158, -5.18, 3.158, 0, 1.107, 0, 1.107, -9.773 ]
		},
		i : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Z", "M",
					"L", "L", "L", "Z" ],
			points : [ 1.154, -9.416, 1.154, -9.902, 1.479, -10.23, 1.805,
					-10.55, 2.285, -10.55, 2.766, -10.55, 3.1, -10.23, 3.434,
					-9.902, 3.434, -9.416, 3.434, -8.93, 3.1, -8.604, 2.766,
					-8.279, 2.285, -8.279, 1.805, -8.279, 1.479, -8.604, 1.154,
					-8.93, 1.154, -9.416, 3.311, 0.01758, 1.26, 0.01758, 1.26,
					-6.779, 3.311, -6.779 ]
		},
		j : {
			commands : [ "M", "Q", "Q", "Q", "Q", "L", "L", "L", "Q", "Q", "Q",
					"Q", "Z", "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ -0.05273, 0.6621, 0.252, 0.4922, 0.4512, 0.3369, 0.6504,
					0.1816, 0.8262, -0.04688, 1.002, -0.2754, 1.087, -0.5859,
					1.172, -0.8965, 1.172, -1.307, 1.172, -6.797, 3.229,
					-6.797, 3.229, -1.189, 3.229, -0.5684, 3.018, -0.01172,
					2.807, 0.5449, 2.44, 0.9521, 2.074, 1.359, 1.603, 1.638,
					1.131, 1.916, 0.5977, 2.039, 1.084, -9.401, 1.084, -9.891,
					1.397, -10.21, 1.711, -10.54, 2.191, -10.54, 2.672, -10.54,
					2.985, -10.21, 3.299, -9.891, 3.299, -9.401, 3.299, -8.912,
					2.985, -8.587, 2.672, -8.262, 2.191, -8.262, 1.711, -8.262,
					1.397, -8.587, 1.084, -8.912, 1.084, -9.401 ]
		},
		k : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "Z" ],
			points : [ 3.164, -2.396, 3.164, 0, 1.107, 0, 1.107, -9.832, 3.164,
					-10.12, 3.164, -4.313, 5.742, -6.85, 7.975, -6.85, 4.975,
					-3.803, 8.033, 0, 5.719, 0, 3.703, -2.906 ]
		},
		l : {
			commands : [ "M", "L", "L", "L", "Z" ],
			points : [ 3.076, -10.11, 3.076, 0, 1.02, 0, 1.02, -9.832 ]
		},
		m : {
			commands : [ "M", "Q", "L", "L", "L", "L", "L", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "L", "L", "L", "Q", "Q", "Q", "L", "L",
					"L", "Q", "Q", "Q", "Z" ],
			points : [ 3.961, -5.566, 3.404, -5.309, 3.164, -4.869, 3.164, 0,
					1.107, 0, 1.107, -6.797, 2.561, -6.797, 3.018, -5.754,
					3.258, -6.393, 3.691, -6.686, 4.172, -7.008, 4.863, -7.008,
					5.52, -7.008, 5.974, -6.782, 6.428, -6.557, 6.703, -5.988,
					7.061, -6.504, 7.538, -6.756, 8.016, -7.008, 8.783, -7.008,
					9.832, -7.008, 10.37, -6.334, 10.9, -5.66, 10.9, -4.424,
					10.9, 0, 8.842, 0, 8.842, -4.582, 8.842, -5.625, 8.145,
					-5.625, 7.869, -5.625, 7.623, -5.493, 7.377, -5.361, 7.055,
					-5.051, 7.055, 0, 4.998, 0, 4.998, -4.641, 4.998, -5.443,
					4.605, -5.584, 4.494, -5.625, 4.324, -5.625, 4.09, -5.625,
					3.961, -5.566 ]
		},
		n : {
			commands : [ "M", "Q", "Q", "Q", "L", "L", "L", "Q", "Q", "Q", "Q",
					"L", "L", "L", "L", "Z" ],
			points : [ 3.023, -5.924, 3.551, -7.008, 4.813, -7.008, 6.076,
					-7.008, 6.65, -6.319, 7.225, -5.631, 7.225, -4.225, 7.225,
					0, 5.168, 0, 5.168, -4.377, 5.168, -5.063, 4.96, -5.341,
					4.752, -5.619, 4.31, -5.634, 3.867, -5.648, 3.571, -5.461,
					3.275, -5.273, 3.129, -5.016, 3.129, 0, 1.072, 0, 1.072,
					-6.797, 2.631, -6.797 ]
		},
		o : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Z", "M",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 3.75, -1.219, 4.406, -1.219, 4.723, -1.752, 5.039,
					-2.285, 5.039, -3.422, 5.039, -4.559, 4.723, -5.092, 4.406,
					-5.625, 3.75, -5.625, 3.094, -5.625, 2.777, -5.092, 2.461,
					-4.559, 2.461, -3.422, 2.461, -2.285, 2.777, -1.752, 3.094,
					-1.219, 3.75, -1.219, 3.744, -7.008, 5.344, -7.008, 6.211,
					-6.062, 7.078, -5.115, 7.078, -3.41, 7.078, -1.717, 6.217,
					-0.7822, 5.355, 0.1523, 3.75, 0.1523, 2.145, 0.1523, 1.277,
					-0.7822, 0.4102, -1.717, 0.4102, -3.41, 0.4102, -5.115,
					1.277, -6.062, 2.145, -7.008, 3.744, -7.008 ]
		},
		p : {
			commands : [ "M", "Q", "L", "L", "L", "L", "L", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Z", "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"L", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 4.594, 0.1523, 3.621, 0.1523, 2.994, -0.7031, 2.994,
					2.379, 0.9375, 2.379, 0.9375, -6.797, 2.502, -6.797, 2.889,
					-5.912, 3.064, -6.434, 3.516, -6.721, 3.973, -7.008, 4.729,
					-7.008, 5.484, -7.008, 5.979, -6.756, 6.475, -6.504, 6.797,
					-6.018, 7.441, -5.045, 7.441, -3.331, 7.441, -1.617, 6.659,
					-0.7324, 5.877, 0.1523, 4.594, 0.1523, 5.367, -2.938,
					5.379, -3.217, 5.379, -3.548, 5.379, -3.879, 5.367, -4.096,
					5.355, -4.313, 5.323, -4.573, 5.291, -4.834, 5.221, -5.01,
					5.15, -5.186, 5.039, -5.344, 4.828, -5.648, 4.354, -5.648,
					3.604, -5.648, 2.994, -5.021, 2.994, -1.898, 3.832, -1.219,
					4.377, -1.219, 4.834, -1.219, 5.051, -1.564, 5.268, -1.91,
					5.312, -2.285, 5.355, -2.66, 5.367, -2.938 ]
		},
		q : {
			commands : [ "M", "Q", "Q", "Q", "L", "L", "L", "L", "L", "Q", "Q",
					"Q", "Q", "Q", "Z", "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"L", "Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 2.373, -6.832, 2.854, -7.008, 3.428, -7.008, 4.002,
					-7.008, 4.447, -6.691, 4.781, -6.48, 5.045, -5.883, 5.332,
					-6.797, 7.09, -6.797, 7.09, 2.379, 5.033, 2.379, 5.033,
					-0.709, 4.307, 0.1465, 3.434, 0.1465, 2.813, 0.1465, 2.291,
					-0.05859, 1.77, -0.2637, 1.477, -0.627, 0.6035, -1.693,
					0.6035, -3.311, 0.6035, -6.17, 2.373, -6.832, 2.701,
					-4.283, 2.648, -3.932, 2.648, -3.519, 2.648, -3.105, 2.66,
					-2.886, 2.672, -2.666, 2.704, -2.394, 2.736, -2.121, 2.804,
					-1.931, 2.871, -1.74, 2.977, -1.57, 3.193, -1.225, 3.65,
					-1.225, 4.342, -1.225, 5.033, -1.904, 5.033, -4.869, 4.781,
					-5.273, 4.559, -5.432, 4.283, -5.625, 3.867, -5.625, 3.492,
					-5.625, 3.249, -5.446, 3.006, -5.268, 2.88, -4.951, 2.754,
					-4.635, 2.701, -4.283 ]
		},
		r : {
			commands : [ "M", "Q", "Q", "Q", "Q", "L", "Q", "Q", "L", "L", "L",
					"L", "Z" ],
			points : [ 3.041, -5.719, 3.176, -6.07, 3.357, -6.252, 3.557,
					-6.445, 3.738, -6.533, 3.938, -6.633, 4.23, -6.721, 4.523,
					-6.809, 5.098, -6.809, 5.098, -5.057, 4.799, -5.162, 4.43,
					-5.162, 3.756, -5.162, 3.1, -4.664, 3.1, 0, 1.043, 0,
					1.043, -6.797, 2.807, -6.797 ]
		},
		s : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "L", "L", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "L", "Q", "Q", "Q", "Q", "Q", "L",
					"Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 2.643, -2.906, 1.477, -3.357, 1.131, -3.732, 0.7207,
					-4.178, 0.7207, -5.063, 0.7207, -5.947, 1.444, -6.478,
					2.168, -7.008, 3.463, -7.008, 4.148, -7.008, 4.84, -6.829,
					5.531, -6.65, 5.836, -6.521, 5.977, -6.469, 5.59, -5.168,
					5.162, -5.332, 4.594, -5.464, 4.025, -5.596, 3.627, -5.604,
					3.229, -5.613, 2.994, -5.546, 2.76, -5.479, 2.675, -5.391,
					2.59, -5.303, 2.575, -5.074, 2.561, -4.846, 2.672, -4.734,
					2.783, -4.623, 3.1, -4.5, 4.846, -3.832, 5.215, -3.697,
					5.473, -3.51, 6.105, -3.053, 6.105, -2.039, 6.105, -0.6563,
					4.893, -0.1523, 4.166, 0.1465, 3.34, 0.1465, 1.746, 0.1465,
					0.7383, -0.457, 1.125, -1.793, 1.564, -1.594, 2.186,
					-1.424, 2.766, -1.271, 3.211, -1.26, 3.721, -1.248, 3.926,
					-1.365, 4.195, -1.518, 4.195, -1.986, 4.189, -2.297, 3.563,
					-2.543 ]
		},
		t : {
			commands : [ "M", "Q", "Q", "Q", "Q", "L", "L", "L", "L", "L", "L",
					"L", "L", "L", "L", "L", "Q", "Q", "Q", "Q", "Q", "L", "Q",
					"Q", "Q", "Q", "Q", "Z" ],
			points : [ 3.381, 0.09375, 2.859, 0.09375, 2.47, -0.05566, 2.08,
					-0.2051, 1.799, -0.5273, 1.518, -0.8496, 1.374, -1.383,
					1.23, -1.916, 1.23, -2.654, 1.23, -5.953, 0, -5.953, 0,
					-6.797, 1.283, -6.797, 1.342, -9.334, 3.275, -9.826, 3.275,
					-6.797, 5.186, -6.797, 5.186, -5.953, 3.275, -5.953, 3.275,
					-2.449, 3.275, -1.922, 3.437, -1.644, 3.598, -1.365, 3.984,
					-1.359, 4.184, -1.359, 4.412, -1.433, 4.641, -1.506, 4.77,
					-1.582, 4.904, -1.652, 4.898, -1.664, 5.379, -0.4277,
					5.344, -0.4043, 5.282, -0.3691, 5.221, -0.334, 5.013,
					-0.2461, 4.805, -0.1582, 4.585, -0.08789, 4.365, -0.01758,
					4.034, 0.03809, 3.703, 0.09375, 3.381, 0.09375 ]
		},
		u : {
			commands : [ "M", "Q", "Q", "Q", "L", "L", "L", "L", "L", "Q", "Q",
					"Q", "Q", "L", "L", "Z" ],
			points : [ 3.199, -2.479, 3.193, -1.898, 3.398, -1.559, 3.592,
					-1.242, 4.078, -1.219, 4.705, -1.266, 5.168, -1.781, 5.168,
					-6.797, 7.225, -6.797, 7.225, 0, 5.777, 0, 5.326, -1.037,
					5.074, -0.3926, 4.787, -0.1758, 4.371, 0.1523, 3.68,
					0.1523, 2.402, 0.1523, 1.787, -0.5449, 1.172, -1.242,
					1.172, -2.631, 1.172, -6.797, 3.199, -6.797 ]
		},
		v : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 4.693, 0, 2.209, 0, 0.03516, -6.797, 2.191, -6.797,
					3.451, -1.764, 4.699, -6.797, 6.879, -6.797 ]
		},
		w : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "L", "Z" ],
			points : [ 5.613, 0, 4.734, -3.82, 3.879, 0, 1.834, 0, 0.1406,
					-6.797, 2.045, -6.797, 2.936, -2.361, 3.861, -6.797, 5.66,
					-6.797, 6.58, -2.373, 7.512, -6.797, 9.381, -6.797, 7.682,
					0 ]
		},
		x : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "Z" ],
			points : [ 3.381, -2.027, 2.285, 0, 0.01758, 0, 2.338, -3.422,
					-0.0293, -6.797, 2.285, -6.797, 3.404, -4.881, 4.494,
					-6.797, 6.768, -6.797, 4.453, -3.422, 6.732, 0, 4.494, 0 ]
		},
		y : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "Q", "Q", "L", "Q",
					"Q", "Q", "Q", "Z" ],
			points : [ 2.965, -0.252, 0.1406, -6.797, 2.238, -6.797, 3.855,
					-2.191, 4.98, -6.797, 7.055, -6.797, 4.734, 0.1875, 4.313,
					1.488, 3.539, 2.109, 2.766, 2.73, 1.477, 2.742, 0.9023,
					1.354, 1.465, 1.313, 1.822, 1.21, 2.18, 1.107, 2.402,
					0.8906, 2.625, 0.6738, 2.736, 0.4248, 2.848, 0.1758, 2.965,
					-0.252 ]
		},
		z : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 3.457, -5.256, 0.668, -5.262, 0.668, -6.809, 5.66,
					-6.809, 5.66, -5.455, 2.842, -1.547, 5.725, -1.547, 5.725,
					0, 0.5977, 0, 0.5977, -1.365 ]
		},
		"0" : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Z", "M", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Z" ],
			points : [ 4.248, -1.365, 4.594, -1.365, 4.857, -1.474, 5.121,
					-1.582, 5.294, -1.772, 5.467, -1.963, 5.575, -2.241, 5.684,
					-2.52, 5.728, -2.83, 5.771, -3.141, 5.771, -3.527, 5.771,
					-3.967, 5.692, -4.318, 5.613, -4.67, 5.44, -4.951, 5.268,
					-5.232, 4.966, -5.388, 4.664, -5.543, 4.248, -5.543, 3.914,
					-5.543, 3.653, -5.429, 3.393, -5.314, 3.226, -5.124, 3.059,
					-4.934, 2.95, -4.664, 2.842, -4.395, 2.798, -4.102, 2.754,
					-3.809, 2.76, -3.469, 2.766, -2.982, 2.839, -2.613, 2.912,
					-2.244, 3.079, -1.954, 3.246, -1.664, 3.542, -1.515, 3.838,
					-1.365, 4.248, -1.365, 4.248, -7.066, 5.361, -7.066, 6.144,
					-6.624, 6.926, -6.182, 7.31, -5.376, 7.693, -4.57, 7.693,
					-3.457, 7.693, -2.35, 7.304, -1.541, 6.914, -0.7324, 6.135,
					-0.2871, 5.355, 0.1582, 4.251, 0.1582, 3.146, 0.1582, 2.37,
					-0.29, 1.594, -0.7383, 1.21, -1.544, 0.8262, -2.35, 0.8262,
					-3.457, 0.8262, -5.156, 1.705, -6.111, 2.584, -7.066,
					4.248, -7.066 ]
		},
		"1" : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 2.051, 0, 2.051, -5.227, 1.137, -4.834, 0.5859, -6.229,
					2.15, -6.861, 4.09, -6.85, 4.09, 0 ]
		},
		"2" : {
			commands : [ "M", "Q", "Q", "Q", "Q", "L", "Q", "L", "L", "L", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L", "L",
					"L", "L", "L", "L", "Q", "Q", "L", "Q", "L", "Q", "Q", "Q",
					"Q", "Z" ],
			points : [ 4.242, -4.605, 4.242, -5.033, 4.028, -5.241, 3.814,
					-5.449, 3.34, -5.449, 3.082, -5.449, 2.748, -5.367, 2.414,
					-5.285, 2.098, -5.156, 1.629, -4.963, 1.477, -4.898, 1.359,
					-4.84, 1.354, -4.834, 0.8203, -6.234, 0.832, -6.24, 0.9785,
					-6.316, 1.163, -6.396, 1.348, -6.475, 1.746, -6.63, 2.145,
					-6.785, 2.604, -6.882, 3.064, -6.979, 3.469, -6.979, 3.873,
					-6.979, 4.248, -6.914, 4.623, -6.85, 4.983, -6.694, 5.344,
					-6.539, 5.607, -6.308, 5.871, -6.076, 6.032, -5.71, 6.193,
					-5.344, 6.193, -4.887, 6.193, -4.195, 5.856, -3.63, 5.52,
					-3.064, 4.676, -2.32, 3.832, -1.57, 6.012, -1.57, 6.012, 0,
					0.9844, 0, 0.9844, -1.271, 2.889, -2.883, 2.912, -2.9,
					3.067, -3.029, 3.223, -3.158, 3.275, -3.205, 3.469, -3.375,
					3.615, -3.504, 3.674, -3.574, 3.844, -3.762, 3.961, -3.885,
					4.014, -3.973, 4.066, -4.061, 4.128, -4.175, 4.189, -4.289,
					4.216, -4.395, 4.242, -4.5, 4.242, -4.605 ]
		},
		"3" : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L", "L",
					"L", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L", "L",
					"L", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "L", "Q", "Q",
					"Q", "Q", "Z" ],
			points : [ 4.008, -4.857, 4.008, -5.186, 3.741, -5.347, 3.475,
					-5.508, 3.041, -5.508, 2.889, -5.508, 2.719, -5.484, 2.549,
					-5.461, 2.391, -5.426, 2.232, -5.391, 2.077, -5.347, 1.922,
					-5.303, 1.796, -5.259, 1.67, -5.215, 1.573, -5.177, 1.477,
					-5.139, 1.424, -5.121, 1.371, -5.098, 0.7031, -6.439,
					0.8086, -6.498, 0.9199, -6.557, 1.125, -6.647, 1.33,
					-6.738, 1.585, -6.826, 1.84, -6.914, 2.191, -6.979, 2.543,
					-7.043, 2.895, -7.043, 3.428, -7.043, 3.858, -6.973, 4.289,
					-6.902, 4.658, -6.738, 5.027, -6.574, 5.276, -6.319, 5.525,
					-6.064, 5.669, -5.687, 5.813, -5.309, 5.824, -4.822, 5.836,
					-4.271, 5.514, -3.806, 5.191, -3.34, 4.646, -3.205, 5.244,
					-3.059, 5.64, -2.54, 6.035, -2.021, 6.035, -1.4, 6.035,
					-0.7793, 5.807, -0.3047, 5.578, 0.1699, 5.165, 0.457,
					4.752, 0.7441, 4.207, 0.8877, 3.662, 1.031, 3, 1.031,
					2.625, 1.031, 2.262, 0.9902, 1.898, 0.9492, 1.646, 0.8906,
					1.395, 0.832, 1.198, 0.7734, 1.002, 0.7148, 0.9082, 0.6738,
					0.8086, 0.6328, 1.295, -0.8438, 1.301, -0.8438, 1.43,
					-0.791, 1.605, -0.7295, 1.781, -0.668, 2.197, -0.5742,
					2.613, -0.4805, 2.941, -0.4805, 3.533, -0.4805, 3.835,
					-0.6855, 4.137, -0.8906, 4.137, -1.383, 4.137, -1.734,
					3.882, -1.995, 3.627, -2.256, 3.237, -2.376, 2.848, -2.496,
					2.402, -2.484, 2.402, -3.926, 2.725, -3.926, 3, -3.976,
					3.275, -4.025, 3.507, -4.131, 3.738, -4.236, 3.873, -4.424,
					4.008, -4.611, 4.008, -4.857 ]
		},
		"4" : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"Z", "M", "L", "L", "Z" ],
			points : [ 4.295, -7.131, 5.771, -6.744, 5.771, -1.857, 6.826,
					-1.857, 6.826, -0.3457, 5.771, -0.3457, 5.771, 1.271,
					4.084, 1.266, 4.084, -0.3457, 0.7324, -0.3457, 0.4922,
					-1.523, 2.443, -1.846, 4.084, -1.846, 4.084, -4.295 ]
		},
		"5" : {
			commands : [ "M", "L", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"L", "L", "L", "L", "L", "L", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Z" ],
			points : [ 1.002, -0.9434, 1.125, -0.8965, 1.207, -0.8672, 1.447,
					-0.791, 1.688, -0.7148, 1.922, -0.6592, 2.156, -0.6035,
					2.476, -0.5537, 2.795, -0.5039, 3.064, -0.5039, 3.697,
					-0.498, 4.049, -0.7822, 4.4, -1.066, 4.395, -1.641, 4.389,
					-2.244, 4.093, -2.607, 3.797, -2.971, 3.223, -2.965, 2.631,
					-2.965, 1.758, -2.49, 0.9375, -3.217, 0.9375, -6.85, 5.654,
					-6.85, 5.654, -5.414, 2.584, -5.414, 2.584, -4.096, 2.584,
					-4.107, 2.681, -4.163, 2.777, -4.219, 2.985, -4.28, 3.193,
					-4.342, 3.422, -4.342, 4.676, -4.342, 5.411, -3.618, 6.146,
					-2.895, 6.146, -1.664, 6.146, -0.8203, 5.751, -0.1904,
					5.355, 0.4395, 4.655, 0.7646, 3.955, 1.09, 3.053, 1.066,
					2.484, 1.049, 1.872, 0.8965, 1.26, 0.7441, 0.7559, 0.5273 ]
		},
		"6" : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Z", "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "L", "Q", "Q", "Q", "Q", "Q", "Q",
					"Z" ],
			points : [ 2.713, -2.678, 2.725, -2.273, 2.798, -1.963, 2.871,
					-1.652, 3.021, -1.418, 3.17, -1.184, 3.422, -1.061, 3.674,
					-0.9375, 4.02, -0.9375, 4.277, -0.9375, 4.474, -1.022,
					4.67, -1.107, 4.793, -1.251, 4.916, -1.395, 4.992, -1.605,
					5.068, -1.816, 5.098, -2.039, 5.127, -2.262, 5.127, -2.537,
					5.127, -3.076, 4.857, -3.357, 4.588, -3.639, 4.066, -3.639,
					3.299, -3.639, 2.713, -3.082, 6.967, -2.262, 6.967, -1.635,
					6.765, -1.11, 6.563, -0.5859, 6.19, -0.2109, 5.818, 0.1641,
					5.265, 0.375, 4.711, 0.5859, 4.031, 0.5859, 3.281, 0.5859,
					2.663, 0.3281, 2.045, 0.07031, 1.644, -0.3721, 1.242,
					-0.8145, 1.022, -1.406, 0.8027, -1.998, 0.8027, -2.672,
					0.8027, -3.551, 1.04, -4.313, 1.277, -5.074, 1.688, -5.648,
					2.098, -6.223, 2.675, -6.683, 3.252, -7.143, 3.914, -7.45,
					4.576, -7.758, 5.338, -7.957, 5.807, -6.41, 4.078, -6.059,
					3.311, -5.039, 3.732, -5.121, 4.107, -5.121, 4.746, -5.121,
					5.291, -4.887, 5.836, -4.652, 6.199, -4.257, 6.563, -3.861,
					6.765, -3.343, 6.967, -2.824, 6.967, -2.262 ]
		},
		"7" : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "Z" ],
			points : [ 5.906, -6.85, 6.387, -5.795, 2.941, 1.383, 1.201,
					0.6094, 4.061, -5.338, 0.7617, -5.338, 0.7617, -6.85 ]
		},
		"8" : {
			commands : [ "M", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Q", "Q", "Z", "M", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "Z", "M", "Q", "Q", "Q", "Q",
					"Q", "Q", "Z" ],
			points : [ 3.829, -7.752, 4.43, -7.752, 4.942, -7.605, 5.455,
					-7.459, 5.845, -7.181, 6.234, -6.902, 6.457, -6.466, 6.68,
					-6.029, 6.68, -5.484, 6.68, -4.764, 6.246, -4.242, 5.813,
					-3.721, 5.139, -3.586, 5.467, -3.539, 5.771, -3.372, 6.076,
					-3.205, 6.313, -2.953, 6.551, -2.701, 6.694, -2.35, 6.838,
					-1.998, 6.838, -1.611, 6.838, -1.119, 6.674, -0.7207, 6.51,
					-0.3223, 6.226, -0.05273, 5.941, 0.2168, 5.552, 0.3984,
					5.162, 0.5801, 4.731, 0.6621, 4.301, 0.7441, 3.826, 0.7441,
					3.352, 0.7441, 2.921, 0.6621, 2.49, 0.5801, 2.104, 0.3984,
					1.717, 0.2168, 1.433, -0.05273, 1.148, -0.3223, 0.9814,
					-0.7207, 0.8145, -1.119, 0.8145, -1.611, 0.8145, -1.998,
					0.958, -2.35, 1.102, -2.701, 1.342, -2.953, 1.582, -3.205,
					1.887, -3.372, 2.191, -3.539, 2.514, -3.586, 1.846, -3.721,
					1.409, -4.242, 0.9727, -4.764, 0.9727, -5.484, 0.9727,
					-6.029, 1.195, -6.466, 1.418, -6.902, 1.808, -7.181, 2.197,
					-7.459, 2.713, -7.605, 3.229, -7.752, 3.829, -7.752, 3.829,
					-0.8027, 4.4, -0.8027, 4.676, -1.014, 4.951, -1.225, 4.951,
					-1.74, 4.951, -2.309, 4.664, -2.648, 4.377, -2.988, 3.826,
					-2.988, 3.275, -2.988, 2.988, -2.648, 2.701, -2.309, 2.701,
					-1.74, 2.707, -1.225, 2.982, -1.014, 3.258, -0.8027, 3.829,
					-0.8027, 3.826, -4.418, 4.342, -4.418, 4.594, -4.652,
					4.846, -4.887, 4.846, -5.402, 4.846, -6.264, 3.826, -6.264,
					2.807, -6.264, 2.807, -5.402, 2.813, -4.887, 3.062, -4.652,
					3.311, -4.418, 3.826, -4.418 ]
		},
		"9" : {
			commands : [ "M", "Q", "Q", "Q", "Q", "L", "L", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Z", "M", "Q", "Q", "Q", "Q", "Q", "Q",
					"Q", "Q", "Q", "Q", "Q", "Q", "L", "Q", "Q", "Q", "Z" ],
			points : [ 2.525, -4.008, 2.52, -3.51, 2.795, -3.199, 3.07, -2.889,
					3.521, -2.889, 3.727, -2.889, 4.069, -2.915, 4.412, -2.941,
					4.652, -2.965, 4.887, -2.988, 4.975, -3.797, 4.969, -4.172,
					4.896, -4.462, 4.822, -4.752, 4.67, -4.975, 4.518, -5.197,
					4.266, -5.317, 4.014, -5.438, 3.668, -5.438, 3.322, -5.438,
					3.094, -5.347, 2.865, -5.256, 2.745, -5.06, 2.625, -4.863,
					2.578, -4.62, 2.531, -4.377, 2.525, -4.008, 3.545, -1.436,
					2.256, -1.436, 1.468, -2.142, 0.6797, -2.848, 0.6797,
					-4.09, 0.6797, -4.928, 1.034, -5.581, 1.389, -6.234, 2.039,
					-6.598, 2.689, -6.961, 3.539, -6.961, 5.115, -6.961, 5.985,
					-6.103, 6.855, -5.244, 6.855, -3.709, 6.855, -2.813, 6.568,
					-2.01, 6.281, -1.207, 5.818, -0.6211, 5.355, -0.03516,
					4.752, 0.4307, 4.148, 0.8965, 3.533, 1.172, 2.918, 1.447,
					2.309, 1.582, 1.852, 0.02344, 2.736, -0.1582, 3.378,
					-0.5771, 4.02, -0.9961, 4.377, -1.541, 3.984, -1.436,
					3.545, -1.436 ]
		},
		"+" : {
			commands : [ "M", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L",
					"L", "Z" ],
			points : [ 5.619, -2.637, 3.984, -2.637, 3.984, -0.5684, 2.297,
					-0.5684, 2.297, -2.637, 0.6738, -2.637, 0.6738, -4.213,
					2.297, -4.213, 2.297, -6.264, 3.984, -6.264, 3.984, -4.213,
					5.619, -4.213 ]
		},
		"-" : {
			commands : [ "M", "L", "L", "L", "Z" ],
			points : [ 5.566, -3.363, 0.9141, -3.363, 0.9141, -4.898, 5.566,
					-4.898 ]
		}
	};
	function $h(a) {
		this.ra = a
	}
	$h.prototype.transform = function(a) {
		this.ra.transform(a)
	};
	$h.prototype.Sd = function() {
		return T(this.ra)
	};
	function ai() {
		this.ca = Zh
	}
	fa(ai);
	function bi(a, b) {
		var c = a.ca[b];
		if (!c)
			throw Error(ci);
		var d = c.points;
		c = c.commands;
		var e = new mg, g = 0, h = 0;
		for (g = 0; g < c.length; g += 1)
			switch (c[g]) {
			case "M":
				e.moveTo(d[h++], d[h++]);
				break;
			case "L":
				e.lineTo(d[h++], d[h++]);
				break;
			case "C":
				throw {
					name : "UnsupportedOperation",
					message : "Path command C not used."
				};
			case "Q":
				x1 = d[h++];
				y1 = d[h++];
				x2 = d[h++];
				y2 = d[h++];
				e.kh(x1, y1, x2, y2, x2, y2);
				break;
			case "Z":
				e.close();
				break;
			default:
				throw {
					name : "UnsupportedOperation",
					message : "Command " + c[g] + " not known."
				};
			}
		return new $h(e)
	}
	function di(a, b) {
		var c = [], d = bi(a, b.charAt(0));
		c.push(d);
		for ( var e = 1; e < b.length; e++) {
			var g = bi(a, b.charAt(e)), h = d;
			d = g;
			var i = new K;
			h = d.Sd().left
					- (h.Sd().left + h.Sd().width + 0.15 * h.Sd().width);
			i.translate(-h, 0);
			d.transform(i);
			c.push(g);
			d = g
		}
		return c
	}
	var ci = "Unknown character";
	function ei(a) {
		this.Fj = a;
		this.nd = undefined;
		this.Qa = new K;
		this.Je = [];
		this.ye = [];
		this.gi = undefined;
		this.Jg = 0.1
	}
	ei.prototype.pe = k("nd");
	ei.prototype.Cc = function(a) {
		var b = T(a);
		this.Qa.setTransform(1, 0, 0, 1,
				-(b.left - (this.Fj.da - 0.5 * b.width)),
				-(b.top - (this.Fj.ea - 0.5 * b.height)));
		a.transform(this.Qa);
		this.nd = a
	};
	function fi(a, b) {
		var c = a.Je.length === 0 ? T(a.nd) : T(a.Je[a.Je.length - 1]), d = T(b);
		gi(a, b, c.left + c.width + a.Jg * c.height, c.top + c.height
				- d.height);
		a.Je.push(b)
	}
	function hi(a, b) {
		var c = a.ye.length === 0 ? T(a.nd) : T(a.ye[a.ye.length - 1]), d = T(b);
		gi(a, b, c.left - d.width - a.Jg * c.height, c.top + c.height
				- d.height);
		a.ye.push(b)
	}
	ei.prototype.Zf = function() {
		if (!this.nd)
			throw Error(ii);
		var a = new mg;
		je(a, this.nd);
		for ( var b = 0; b < this.ye.length; b++)
			je(a, this.ye[b]);
		this.gi && je(a, this.gi);
		this.zi && je(a, this.zi);
		for (b = 0; b < this.Je.length; b++)
			je(a, this.Je[b]);
		return a
	};
	function gi(a, b, c, d) {
		var e = T(b);
		a.Qa.setTransform(1, 0, 0, 1, -(e.left - c), -(e.top - d));
		b.transform(a.Qa)
	}
	var ii = "label-center-not-set";
	function ji() {
		this.ie = 0.42;
		this.th = new ai;
		this.Pj = new K;
		ki(this)
	}
	function li(a, b) {
		for ( var c = di(a.th, b), d = 0; d < c.length; d++)
			c[d].ra.transform(a.Pj);
		return c
	}
	function ki(a) {
		var b = a.ie / T(bi(a.th, "C").ra).height;
		a.Pj.setTransform(b, 0, 0, -b, 0, 0)
	}
	function mi(a, b) {
		var c = b[0].ra.bb();
		b[1] && je(c, b[1].ra);
		b[2] && je(c, b[2].ra);
		return c
	}
	function ni(a, b) {
		for ( var c = 0, d = 0, e = b.sa, g = 0; g < e.length; g++) {
			var h = N(b, e[g]), i = Math.cos(h);
			h = Math.sin(h);
			if (Math.abs(i) <= 0.15)
				h *= 2;
			if (Math.abs(h) <= 0.05)
				i *= 2;
			c += i;
			d += h
		}
		h = N(new M(0, 0), new M(c, d));
		if (h <= 0.35 * Math.PI || h > 1.65 * Math.PI)
			return oi;
		else if (h > 0.35 * Math.PI && h <= 0.65 * Math.PI) {
			if (e.length === 1)
				return pi;
			return qi
		} else if (h > 0.65 * Math.PI && h <= 1.35 * Math.PI)
			return pi;
		else if (h > 1.35 * Math.PI && h <= 1.65 * Math.PI) {
			if (e.length === 1)
				return pi;
			return ri
		}
		return pi
	}
	var pi = "right", oi = "left", qi = "bottom", ri = "top";
	function si() {
		this.th = ai.Hb();
		this.Tk = new Yh("#33AA33", 0.5);
		this.de = new Yh("#000000", 0);
		this.Ml = new Yh("#999999");
		this.lc = {};
		this.ge = 0.42;
		this.Jb = 0.21;
		this.xe = new ji;
		this.lc.C = new Yh("#666666", 1);
		this.lc.N = new Yh("#0000FF", 1);
		this.lc.O = new Yh("#FF0000", 1);
		this.lc.S = new Yh("#FFCC00", 1);
		this.lc.P = new Yh("#FFCC00", 1);
		this.lc.F = new Yh("#FF00FF", 1);
		this.lc.Cl = new Yh("#00FF00", 1);
		this.lc.Br = new Yh("#CC3333", 1);
		this.lc.I = new Yh("#CC33EE", 1);
		this.lc["?"] = new Yh("#666666", 1)
	}
	si.prototype.Td = k("Jb");
	si.prototype.vc = aa("Jb");
	si.prototype.cg = function(a, b, c) {
		if (a.Ia()) {
			var d;
			if (!a.ka.Ya && !a.ka.Lb) {
				var e = this.xe;
				d = new ei(a);
				var g = new mg;
				zg(g);
				e = e.ie * 0.7 / T(g).height;
				var h = new K;
				h.setTransform(e, 0, 0, -e, 0, 0);
				g.transform(h);
				d.Cc(g);
				d = d
			} else if (a.ka.Ya) {
				e = this.xe;
				d = new ei(a);
				g = new mg;
				e = e.ie * 0.8 / 2;
				g.moveTo(0, 0);
				g.Ua(e, e, 0, 360);
				d.Cc(g);
				d = d
			} else if (a.ka.Lb) {
				g = this.xe;
				d = new ei(a);
				g = mi(g, li(g, "R" + a.ka.Lb));
				d.Cc(g);
				d = d
			}
			d = d.Zf();
			a = {
				path : b.Qd(d, null, ti(this, a), c),
				xc : T(d)
			}
		} else {
			if (a.ka === "C") {
				if (!(d = a.sa.length === 0)) {
					if (!(d = a.pc !== 0)) {
						if (!(d = a.ab !== 0))
							c: if (a.sa.length !== 2)
								d = false;
							else {
								d = a.pa;
								for (g = 0; g < d.length; g++)
									if (d[g].va !== Q.wb) {
										d = false;
										break c
									}
								d = true
							}
						d = d
					}
					d = d
				}
				d = d
			} else
				d = true;
			if (d) {
				g = this.xe;
				d = new ei(a);
				if (a.pc === 0)
					e = li(g, a.ka);
				else if (a.ka === "H")
					switch (a.pc) {
					case 1:
						e = li(g, a.ka);
						break;
					case 2:
						e = li(g, "D");
						break;
					case 3:
						e = li(g, "T");
						break
					}
				else
					e = li(g, a.ka);
				e = mi(g, e);
				d.Cc(e);
				e = a.pc;
				if (e === 0 || a.ka === "H" && a.pc !== 1)
					e = void 0;
				else {
					e = mi(g, li(g, e.toString()));
					h = g.ie * 0.45 / T(e).height;
					var i = new K;
					i.setTransform(h, 0, 0, h, 0, 0);
					e.transform(i);
					e = e
				}
				e && hi(d, e);
				i = Xg(a);
				if (i !== 0) {
					e = new mg;
					var j = li(g, "H")[0];
					je(e, j.ra);
					if (!(i < 2 || i > 9)) {
						h = new K;
						i = li(g, i.toString())[0];
						j = T(j.ra);
						var l = T(i.ra);
						h.translate(j.left + j.width, -0.3 * l.height);
						i.ra.transform(h);
						je(e, i.ra)
					}
					h = e
				} else
					h = void 0;
				if (a.ab !== 0) {
					e = a.ab;
					i = e > 0 ? "+" : "-";
					if (Math.abs(e) > 1)
						i = Math.abs(e) + i;
					e = mi(g, li(g, i))
				} else
					e = void 0;
				e = e;
				if (h || e) {
					g = ni(g, a);
					switch (g) {
					case pi:
						h && fi(d, h);
						break;
					case oi:
						h && hi(d, h);
						break;
					case ri:
						if (h) {
							h = h;
							i = T(d.nd);
							gi(d, h, i.left, i.top + i.height + d.Jg * i.height);
							d.zi = h
						}
						break;
					case qi:
						if (h) {
							h = h;
							i = T(d.nd);
							j = T(h);
							gi(d, h, i.left, i.top - j.height - d.Jg * i.height);
							d.gi = h
						}
						break
					}
					if (e)
						g === oi ? hi(d, e) : fi(d, e)
				}
				d = d.Zf();
				a = {
					path : b.Qd(d, null, ti(this, a), c),
					xc : T(d)
				}
			} else
				a = void 0
		}
		return a
	};
	function ti(a, b) {
		if (b.Ia())
			return a.Ml;
		var c = a.lc[b.ka];
		return c ? c : a.lc["?"]
	}
	;
	function ui(a) {
		this.Wj = true;
		this.Xd = 0.05;
		this.ub = new lg(0.1, "#000000");
		this.tl = new Yh("#000000", 1);
		this.dk = new lg(0.1, "#aaaaaa");
		this.oa = a;
		this.Jb = 0.21;
		this.Ab = 0.2;
		this.Dd = 0.25;
		this.de = new Yh("#000000", 0)
	}
	p = ui.prototype;
	p.Td = k("Jb");
	p.vc = aa("Jb");
	p.zc = function() {
		return this.ub.jc
	};
	p.wc = function(a) {
		this.ub.jc = a;
		this.dk = new se(a, "#aaaaaa")
	};
	p.dg = function(a, b, c, d, e) {
		var g = b.Zf();
		switch (a.va) {
		case Q.Ma:
			vi(this, g, a, c, d);
			break;
		case Q.wb:
			var h = wi(this, a), i = wi(this, a);
			if (a.Ib() === P.Qg) {
				xi(this, h, i, c, d);
				c = h.source;
				h.source = i.source;
				i.source = c
			} else {
				var j = {
					Ke : 0,
					Fi : false,
					Nf : null,
					Yg : null,
					Lg : null,
					Zg : null
				};
				if (Of(a.ca) || Of(a.ha))
					j.Fi = true;
				else {
					for ( var l = a.ca.sa, n = 0; n < l.length; n++) {
						var o = l[n];
						if (o !== a.ha)
							if (Pf(a, o)) {
								j.Nf = o;
								j.Ke += 1
							} else {
								j.Yg = o;
								j.Ke -= 1
							}
					}
					l = a.ha.sa;
					for (n = 0; n < l.length; n++) {
						o = l[n];
						if (o !== a.ca)
							if (Pf(a, o)) {
								j.Lg = o;
								j.Ke += 1
							} else {
								j.Zg = o;
								j.Ke -= 1
							}
					}
				}
				if (j.Fi)
					xi(this, h, i, c, d);
				else if (j.Ke !== 0)
					j.Ke > 0 ? yi(this, h, i, j, c, d)
							: zi(this, h, i, j, c, d);
				else {
					l = a.ca.sa.length;
					n = a.ha.sa.length;
					if (l === 3 && n === 3) {
						l = Mf(a, j.Nf, j.Lg);
						n = Mf(a, j.Yg, j.Zg);
						if (l.length === 0 && n.length === 0)
							xi(this, h, i, c, d);
						else {
							o = 0;
							if (l.length > 0)
								o += 1;
							if (n.length > 0)
								o -= 1;
							for ( var G = 2; G < l.length - 1; G++) {
								var F = l[G], cb = l[G + 1];
								F = Nf(F.ba, F, cb);
								if (F.va !== Q.Ma && !F.Ia())
									o += 1
							}
							for (G = 2; G < n.length - 1; G++) {
								F = n[G];
								cb = n[G + 1];
								F = Nf(F.ba, F, cb);
								if (F.va !== Q.Ma && !F.Ia())
									o -= 1
							}
							o > 0 ? yi(this, h, i, j, c, d) : zi(this, h, i, j,
									c, d)
						}
					} else if (l === 3 || n === 3)
						xi(this, h, i, c, d);
					else if (l === 2 && n === 2) {
						j.Nf ? Ai(this, i, j.Nf) : Bi(this, i, j.Lg);
						Ci(this, h, c, d);
						Ci(this, i, c, d);
						wf(i, this.Ab)
					} else
						xi(this, h, i, c, d)
				}
			}
			c = [ h, i ];
			for (d = 0; d < c.length; d++)
				Di(this, g, c[d]);
			break;
		case Q.Pf:
			h = [];
			for (i = 0; i < 3; i++) {
				h[i] = wi(this, a);
				Ci(this, h[i], c, d)
			}
			wf(h[0], this.Ab);
			wf(h[1], -this.Ab);
			for (c = 0; c < h.length; c++)
				Di(this, g, h[c]);
			break;
		default:
			vi(this, g, a, c, d)
		}
		c = this.tl;
		if (a.Ib() === P.ee)
			c = undefined;
		return b.Qd(g, a.Ia() ? this.dk : this.ub, c, e)
	};
	function vi(a, b, c, d, e) {
		if (c.Ia()) {
			var g = wi(a, c);
			Ci(a, g, d, e);
			var h = O(c.ca, c.ha);
			d = 0.6 * a.Dd;
			var i = 0.7 * d;
			d = {
				source : new M(0.5 * h, d),
				target : new M(0.5 * h, -d)
			};
			e = {
				source : new M(0.5 * h - i, i),
				target : new M(0.5 * h + i, -i)
			};
			h = {
				source : new M(0.5 * h + i, i),
				target : new M(0.5 * h - i, -i)
			};
			i = new K;
			var j = N(c.ca, c.ha);
			i.translate(c.ca.da, c.ca.ea);
			i.rotate(j, 0, 0);
			Di(a, b, d);
			Di(a, b, e);
			Di(a, b, h);
			b.transform(i);
			i.rotate(-j, 0, 0);
			i.translate(-c.ca.da, -c.ca.ea);
			Di(a, b, g)
		} else {
			switch (c.Ib()) {
			case P.Id:
				h = wi(a, c);
				Ci(a, h, d, e);
				d = O(c.ca, c.ha);
				g = O(c.ca, h.source);
				e = O(c.ca, h.target);
				h = g * 0.5 * a.Dd / d;
				a = e * 0.5 * a.Dd / d;
				b.moveTo(g, h);
				b.lineTo(e, a);
				b.lineTo(e, -a);
				b.lineTo(g, -h);
				b.close();
				a = new K;
				g = N(c.ca, c.ha);
				a.translate(c.ca.da, c.ca.ea);
				a.rotate(g, 0, 0);
				b.transform(a);
				return;
			case P.Fd:
				g = wi(a, c);
				Ci(a, g, d, e);
				d = O(c.ca, c.ha);
				e = O(c.ca, g.source);
				h = 2 * a.ub.jc;
				for (g = O(c.ca, g.target); g >= e;) {
					i = (a.Wj ? g * 0.5 : 0.35) * a.Dd / d;
					b.moveTo(g, i);
					b.lineTo(g, -i);
					g -= h
				}
				a = new K;
				g = N(c.ca, c.ha);
				a.translate(c.ca.da, c.ca.ea);
				a.rotate(g, 0, 0);
				b.transform(a);
				return;
			case P.ee:
				g = wi(a, c);
				Ci(a, g, d, e);
				d = O(g.source, g.target);
				a = 0.2 * a.Dd;
				e = 2 * a;
				h = Math.floor(d / (2 * a));
				i = 0;
				if (h === 0) {
					b.moveTo(2 * a, 0);
					b.Ua(a, e, 0, 180)
				}
				for ( var l = 0; l < h; l++) {
					i += 2 * a;
					j = l % 2 ? -1 : 1;
					b.moveTo(i, 0);
					b.Ua(a, 2 * i / d * e, 0, j * 180)
				}
				a = new K;
				c = N(c.ca, c.ha);
				a.translate(g.source.da, g.source.ea);
				a.rotate(c, 0, 0);
				b.transform(a);
				return
			}
			c = wi(a, c);
			Ci(a, c, d, e);
			Di(a, b, c)
		}
	}
	function Ci(a, b, c, d) {
		var e, g;
		if (c) {
			e = c.bb();
			Ei(a, e)
		}
		if (d) {
			g = d.bb();
			Ei(a, g)
		}
		if (!(e && g && e.left <= g.left + g.width
				&& g.left <= e.left + e.width && e.top <= g.top + g.height && g.top <= e.top
				+ e.height))
			if (!(g && uf(b.source, g)))
				if (!(e && uf(b.target, e))) {
					e && vf(b, e);
					g && vf(b, g)
				}
	}
	function Ei(a, b) {
		var c = b.top - a.ub.jc / 2 - a.Xd, d = b.width + a.ub.jc + 2 * a.Xd, e = b.height
				+ a.ub.jc + 2 * a.Xd;
		b.left = b.left - a.ub.jc / 2 - a.Xd;
		b.top = c;
		b.width = d;
		b.height = e
	}
	function xi(a, b, c, d, e) {
		Ci(a, b, d, e);
		Ci(a, c, d, e);
		wf(b, 0.5 * a.Ab);
		wf(c, -0.5 * a.Ab)
	}
	function yi(a, b, c, d, e, g) {
		Ai(a, c, d.Nf);
		Bi(a, c, d.Lg);
		Ci(a, b, e, g);
		Ci(a, c, e, g);
		wf(c, a.Ab)
	}
	function zi(a, b, c, d, e, g) {
		Ai(a, c, d.Yg);
		Bi(a, c, d.Zg);
		Ci(a, b, e, g);
		Ci(a, c, e, g);
		wf(c, -a.Ab)
	}
	function Ai(a, b, c) {
		if (c !== null) {
			var d = 0.5 * O(c, b.target);
			c = O(b.source, b.target);
			if (d > c)
				c = d;
			a = a.Ab / Math.tan(Math.asin(d / c)) + 2 * a.ub.jc;
			if (!(a > O(b.source, b.target))) {
				a = a / c;
				b.source.move(b.source.da + 0.5 * a
						* (b.target.da - b.source.da), b.source.ea + 0.5 * a
						* (b.target.ea - b.source.ea))
			}
		}
	}
	function Bi(a, b, c) {
		if (c !== null) {
			var d = 0.5 * O(c, b.source);
			c = O(b.source, b.target);
			if (d > c)
				c = d;
			a = a.Ab / Math.tan(Math.asin(d / c)) + 2 * a.ub.jc;
			if (!(a > O(b.source, b.target))) {
				a = a / c;
				b.target.move(b.target.da + 0.5 * a
						* (b.source.da - b.target.da), b.target.ea + 0.5 * a
						* (b.source.ea - b.target.ea))
			}
		}
	}
	function Di(a, b, c) {
		b.moveTo(c.source.da, c.source.ea);
		b.lineTo(c.target.da, c.target.ea)
	}
	function wi(a, b) {
		return {
			source : new M(b.ca.da, b.ca.ea),
			target : new M(b.ha.da, b.ha.ea)
		}
	}
	;
	function Fi(a, b) {
		J.call(this, b);
		this.wd = this.pf = undefined;
		this.Zb = false;
		this.ag = 36;
		this.jb = 1;
		this.ge = 0.45;
		this.Mc = 0.1;
		this.Xd = 0.05;
		this.Ab = 0.2;
		this.Dd = 0.25;
		this.Jb = 0.21;
		this.Bg = this.oa = undefined;
		this.Qa = new K(1, 0, 0, -1, 0, 0);
		this.Gm = new re("#555555", 1);
		this.de = new Yh("#000000", 0);
		this.Zh = new re("#33AA33", 0.5);
		this.oj = new lg(this.Mc, "#33AA33", [ 0.3, 0.3 ]);
		this.Kd = new si;
		this.Wb = new ui;
		this.Xb = {};
		this.rf = undefined;
		this.Ih = a ? false : true;
		this.Wb.Wj = of()
	}
	u(Fi, J);
	p = Fi.prototype;
	p.clear = function() {
		for ( var a in this.Xb) {
			var b = this.Xb[a];
			b.path && fc(b.path.aa());
			fc(b.handle.aa());
			delete this.Xb[a]
		}
	};
	p.oe = k("jb");
	p.re = k("ag");
	p.Oe = aa("ag");
	p.Pc = function(a) {
		this.jb = a;
		var b = this.Kd, c = this.ge * a;
		b.ge = c;
		b = b.xe;
		b.ie = c;
		ki(b);
		this.Kd.vc(this.Jb * a);
		this.Wb.vc(this.Jb * a);
		this.Wb.wc(this.Mc * a);
		this.Wb.Ab = this.Ab * a;
		this.Wb.Dd = this.Dd * a;
		this.Wb.Xd = this.Xd * a;
		this.oj = new lg(this.Mc * a, "#33AA33", [ 0.3, 0.3 ])
	};
	p.wc = function(a) {
		this.Mc = a;
		this.Wb.wc(a * this.jb)
	};
	p.jd = function(a) {
		this.Ab = a;
		this.Wb.Ab = a * this.jb
	};
	p.hd = function(a) {
		this.ge = a;
		var b = this.Kd;
		a = a * this.jb;
		b.ge = a;
		b = b.xe;
		b.ie = a;
		ki(b)
	};
	p.vc = function(a) {
		this.Jb = a;
		this.Kd.vc(a * this.jb);
		this.Wb.vc(a * this.jb)
	};
	p.Td = k("Jb");
	p.pd = k("ge");
	p.zc = k("Mc");
	p.qd = k("Ab");
	p.cg = function(a) {
		var b = this.Kd.cg(a, this.oa, this.wd), c;
		c = this.Kd;
		c = a.Ae ? this.oa.qh(a.da, a.ea, c.Jb, c.Jb, null, a.tb ? c.Tk : c.de,
				this.pf) : void 0;
		this.fe(a, {
			path : b ? b.path : undefined,
			xc : b ? b.xc : undefined,
			handle : c
		});
		return c
	};
	function Gi(a, b) {
		var c = a.Sa(b);
		c.path && fc(c.path.aa());
		c.handle && fc(c.handle.aa())
	}
	function Hi(a, b) {
		var c = a.Sa(b);
		c.path && fc(c.path.aa());
		var d = a.Sa(b.ca).xc, e = a.Sa(b.ha).xc;
		c.path = a.Wb.dg(b, a.oa, d, e, a.wd);
		if (c.handle) {
			d = xf(b.ca, b.ha);
			c.handle.Cc(d.da, d.ea)
		}
	}
	p.dg = function(a) {
		var b = this.Sa(a.ca).xc, c = this.Sa(a.ha).xc;
		b = this.Wb.dg(a, this.oa, b, c, this.wd);
		c = this.Wb;
		var d = xf(a.ca, a.ha);
		c = this.oa.qh(d.da, d.ea, c.Jb, c.Jb, null, c.de, this.pf);
		this.fe(a, {
			handle : c,
			path : b
		});
		return c
	};
	p.transform = function(a, b) {
		if (!nb)
			if (this.aa())
				this.Bg = vc(this.aa());
		var c = te(this.Qa), d = [ a - this.Bg.x, b - this.Bg.y ];
		c.transform(d, 0, d, 2, 1);
		return new Ib(d[2], d[3])
	};
	p.mg = function(a) {
		wc(this.aa(), a.width, a.height);
		this.oa = sf(a.width, a.height);
		this.Ha(this.oa, true);
		Ii(this);
		this.wd = this.oa.jh();
		this.pf = this.oa.jh();
		if (this.oa instanceof Se) {
			var b = oe(this.oa);
			a = b.width;
			b = -b.height;
			this.wd.Ef(-1, -1);
			this.wd.yd(a, b);
			this.pf.Ef(-1, -1);
			this.pf.yd(a, b)
		}
		if (this.aa())
			this.Bg = vc(this.aa());
		if (this.Ih) {
			E(this.aa(), "mousedown", this.xg, false, this);
			E(this.aa(), "mouseup", this.yg, false, this);
			E(this.aa(), "mouseout", this.Qh, false, this);
			E(this.aa(), "mouseover", this.Sh, false, this);
			E(this.aa(), "mousemove", this.dl, false, this);
			E(window && window.document, "mouseup", this.Uh, false, this)
		}
		this.rf = new Rg("info-box");
		this.Ha(this.rf, true)
	};
	p.la = function() {
		this.ia = B("div", {
			"class" : "document-view"
		})
	};
	p.Cc = function(a) {
		var b = this.pe();
		this.Qa.translate(b.x - a.da, b.y - a.ea);
		this.oa.setTransform(this.Qa)
	};
	function Ji(a, b, c) {
		a.Qa.translate(-(b.da * (c - 1)), -(b.ea * (c - 1)));
		a.Qa.scale(c, c);
		a.oa.setTransform(a.Qa)
	}
	p.translate = function(a, b) {
		this.Qa.translate(a, b);
		this.oa.setTransform(this.Qa)
	};
	p.hg = function() {
		var a = Cc(this.aa());
		return new A(a.width / this.Qa.nb, a.height / this.Qa.nb)
	};
	p.pe = function() {
		var a = yc(this.aa());
		return new Ib(-(this.Qa.rc - 0.5 * a.width) / this.Qa.nb,
				(this.Qa.sc - 0.5 * a.height) / this.Qa.nb)
	};
	function Ki(a, b) {
		if (!of())
			for ( var c = b.pa, d = 0; d < c.length; d++) {
				var e = a.Sa(c[d]).path;
				a.oa.Pe(e, a.Wb.ub)
			}
	}
	function Ii(a) {
		a.Qa.setTransform(1, 0, 0, -1, 0, 0);
		a.Qa.scale(a.ag, a.ag);
		a.oa.setTransform(a.Qa)
	}
	p.fe = function(a, b) {
		this.Xb[s(a)] = b
	};
	p.Dg = function(a) {
		delete this.Xb[s(a)]
	};
	p.Sa = function(a) {
		return this.Xb[s(a)]
	};
	p.xg = function(a) {
		if (this.Zb)
			throw Error(Li);
		a.stopPropagation();
		a.preventDefault();
		this.Zb = true
	};
	p.yg = function() {
		this.Zb = false
	};
	p.Uh = function() {
		if (this.Zb) {
			this.Zb = false;
			this.dispatchEvent(new D(Mi, this))
		}
	};
	p.Qh = function(a) {
		var b = this.aa();
		if (!(a.relatedTarget && gc(b, a.relatedTarget))) {
			this.aa().removeAttribute("tabindex");
			this.aa().blur()
		}
	};
	p.Sh = function() {
		this.aa().setAttribute("tabindex", 1E3);
		this.aa().focus()
	};
	p.dl = function(a) {
		if (this.Zb) {
			var b = new D(Ni, this);
			b.clientX = a.clientX;
			b.clientY = a.clientY;
			b.shiftKey = a.shiftKey;
			b.ctrlKey = a.ctrlKey;
			a.stopPropagation();
			a.preventDefault();
			this.dispatchEvent(b)
		}
	};
	var Ni = "document-view-mouse-draw", Mi = "document-view-mouse-up-external", Li = "document-view-already-dragging";
	function Oi(a) {
		C.call(this);
		this.ia = a;
		this.rj = E(this.ia, x ? "DOMMouseScroll" : "mousewheel", this)
	}
	u(Oi, I);
	Oi.prototype.handleEvent = function(a) {
		var b = 0, c = 0, d = 0;
		a = a.sb;
		if (a.type == "mousewheel") {
			c = 1;
			if (w || y && (gb || z("532.0")))
				c = 40;
			d = y && fb && -a.wheelDelta % c != 0 ? -a.wheelDelta
					: -a.wheelDelta / c;
			if (a.wheelDeltaX !== undefined) {
				b = y && fb && -a.wheelDeltaX % c != 0 ? -a.wheelDeltaX
						: -a.wheelDeltaX / c;
				c = y && fb && -a.wheelDeltaY % c != 0 ? -a.wheelDeltaY
						: -a.wheelDeltaY / c
			} else
				c = d
		} else {
			d = a.detail;
			if (d > 100)
				d = 3;
			else if (d < -100)
				d = -3;
			if (a.axis !== undefined && a.axis === a.HORIZONTAL_AXIS)
				b = d;
			else
				c = d
		}
		if (ja(this.sj))
			b = Math.min(Math.max(b, -this.sj), this.sj);
		if (ja(this.tj))
			c = Math.min(Math.max(c, -this.tj), this.tj);
		b = new Pi(d, a, b, c);
		try {
			this.dispatchEvent(b)
		} finally {
			b.Zc()
		}
	};
	Oi.prototype.za = function() {
		Oi.ga.za.call(this);
		cd(this.rj);
		delete this.rj
	};
	function Pi(a, b, c, d) {
		b && this.cd(b, void 0);
		this.type = "mousewheel";
		this.detail = a;
		this.pm = c;
		this.qm = d
	}
	u(Pi, Pc);
	function Qi(a, b) {
		J.call(this, b);
		this.Tf = a
	}
	u(Qi, J);
	Qi.prototype.Yc = function() {
		H(this.Tf, Ri, this.Ki, false, this)
	};
	Qi.prototype.la = function() {
		this.ia = B("div", {
			"class" : "atom-summary"
		})
	};
	Qi.prototype.xa = function() {
		Qi.ga.xa.call(this);
		Si(this);
		E(this.Tf, Ri, this.Ki, false, this)
	};
	function Si(a) {
		var b = a.$b(), c = b.la("div", {
			"class" : "content"
		}), d = a.Tf.ka;
		b.append(c, cc('<div class="message">'
				+ (!d.Ya && !d.Lb ? "Any Atom" : d.Ya ? "Atom List ["
						+ a.Tf.ka.Ya.Dc.join(", ") + "]" : "R Group " + d.Lb)
				+ "</div>"));
		b.append(a.aa(), c)
	}
	Qi.prototype.Ki = function() {
		ec(this.aa());
		Si(this)
	};
	function Ti() {
		this.hc = ""
	}
	u(Ti, I);
	Ti.prototype.nf = k("hc");
	function Ui(a, b, c) {
		this.$ = a;
		this.fa = b;
		this.qa = undefined;
		this.Xb = {};
		this.Eb = {};
		this.dd = undefined;
		this.ml = c;
		if (!c) {
			this.Eb[72] = "H";
			this.Eb[66] = "B";
			this.Eb[67] = "C";
			this.Eb[78] = "N";
			this.Eb[79] = "O";
			this.Eb[70] = "F";
			this.Eb[76] = "Cl";
			this.Eb[82] = "Br";
			this.Eb[73] = "I";
			this.Eb[80] = "P";
			this.Eb[90] = "Si";
			this.Eb[83] = "S";
			this.Eb[84] = "Sn";
			this.Vf();
			if (this.fa.aa())
				if (nb) {
					E(this.fa.aa(), "touchstart", this.Hl, false, this);
					E(this.fa.aa(), "touchmove", this.Gl, false, this);
					E(this.fa.aa(), "touchend", this.Fl, false, this)
				} else {
					E(this.fa.aa(), "mousedown", this.xg, false, this);
					E(this.fa.aa(), "mouseover", this.Sh, false, this);
					E(this.fa.aa(), "mouseout", this.Qh, false, this);
					E(this.fa.aa(), "mouseup", this.yg, false, this);
					E(this.fa, Ni, this.zj, false, this);
					E(this.fa, Mi, this.Uh, false, this);
					this.dd = new Cd(this.fa.aa());
					this.cl = new Oi(this.fa.aa());
					E(this.dd, "key", this.Yk, false, this);
					E(this.cl, "mousewheel", this.el, false, this)
				}
		}
	}
	p = Ui.prototype;
	p.zd = function(a) {
		var b = this.Xb;
		for ( var c in b)
			delete b[c];
		this.nh();
		this.fa.clear();
		this.$ = a;
		this.Vf();
		b = this.$.ba.na;
		for (a = 0; a < b.length; a++)
			Vi(this, b[a]);
		b = this.$.ba.pa;
		for (a = 0; a < b.length; a++)
			Wi(this, b[a])
	};
	p.Wf = aa("qa");
	p.nh = function() {
		H(this.$, uh, this.bf, false, this);
		H(this.$, xh, this.df, false, this);
		H(this.$, Eh, this.ef, false, this);
		H(this.$, Ah, this.gf, false, this);
		H(this.$, ih, this.ri, false, this);
		H(this.$, dh, this.cf, false, this);
		H(this.$, jh, this.ui, false, this);
		H(this.$, hh, this.si, false, this);
		H(this.$, Xi, this.ti, false, this);
		H(this.$, Kf, this.yi, false, this);
		H(this.$, Hf, this.ff, false, this);
		H(this.$, "lasso-started", this.sg, false, this);
		H(this.$, Th, this.tg, false, this);
		H(this.$, Uh, this.nj, false, this)
	};
	p.Vf = function() {
		E(this.$, uh, this.bf, false, this);
		E(this.$, xh, this.df, false, this);
		E(this.$, Eh, this.ef, false, this);
		E(this.$, Ah, this.gf, false, this);
		E(this.$, ih, this.ri, false, this);
		E(this.$, dh, this.cf, false, this);
		E(this.$, jh, this.ui, false, this);
		E(this.$, hh, this.si, false, this);
		E(this.$, Xi, this.ti, false, this);
		E(this.$, Kf, this.yi, false, this);
		E(this.$, Hf, this.ff, false, this);
		E(this.$, "lasso-started", this.sg, false, this);
		E(this.$, Th, this.tg, false, this);
		E(this.$, Uh, this.nj, false, this)
	};
	p.sg = function(a) {
		var b = this.fa;
		a = a.target;
		var c = b.oa.Qd(a.ra, b.oj, undefined, b.wd);
		b.fe(a, {
			path : c
		})
	};
	p.tg = function(a) {
		a = a.target;
		var b = this.fa.Sa(a);
		b && b.path && b.path.Uj(a.ra)
	};
	p.nj = function(a) {
		var b = this.fa;
		a = a.target;
		var c = b.Sa(a);
		b.Dg(a);
		fc(c.path.aa())
	};
	p.Yk = function(a) {
		if (!(a.metaKey || a.ctrlKey)) {
			var b = this.Eb[a.keyCode];
			if (b) {
				a = rh(this.$.ba);
				var c = sh(this.$.ba);
				if (c.length !== 0) {
					this.qa.ib();
					for ( var d = 0; d < c.length; d++)
						mh(c[d], b);
					this.qa.Gb()
				} else
					for (d = 0; d < a.length; d++)
						kh(a[d], b)
			} else if (a.keyCode === 46 || a.keyCode === 8) {
				b = rh(this.$.ba);
				c = sh(this.$.ba);
				if (b.length !== 0 || c.length !== 0) {
					this.qa.ib();
					zh(this.$.ba, b);
					zh(this.$.ba, c);
					this.qa.Gb()
				}
				Yi(this, a)
			} else if (a.keyCode === 65) {
				b = rh(this.$.ba);
				c = this.$.ba;
				a = [];
				for (d = 0; d < c.pa.length; d++)
					c.pa[d].tb && a.push(c.pa[d]);
				c = undefined;
				if (b[0]) {
					this.qa.ib();
					c = Oh(this.$.db, b[0]) ? Mh(this.$.db, b[0], 6) : Nh(
							this.$.db, b[0], 6)
				} else if (a[0]) {
					this.qa.ib();
					c = Lh(this.$.db, a[0], 6)
				} else
					return;
				Ph(this.$.db, c);
				this.qa.Gb()
			}
		}
	};
	p.bf = function(a) {
		Vi(this, a.target)
	};
	function Vi(a, b) {
		var c = a.fa.cg(b);
		if (c) {
			c = c.aa();
			var d = Zi(a, b, c);
			a.fe(b, c, d)
		}
	}
	function $i(a, b) {
		var c = a.fa, d = c.Sa(b);
		d.path && fc(d.path.aa());
		c = c.Kd.cg(b, c.oa, c.wd);
		d.path = c ? c.path : undefined;
		d.xc = c ? c.xc : undefined;
		d.handle && d.handle.Cc(b.da, b.ea)
	}
	function Zi(a, b, c) {
		return {
			handle : c,
			yj : t(function(d) {
				this.qa.Oa(b, d)
			}, a),
			Bj : t(function() {
				this.qa.zb() && b.Qc(true);
				this.qa.Qf(b)
			}, a),
			Aj : t(function() {
				this.qa.zb() && b.Qc(false);
				this.qa.Sf(b)
			}, a)
		}
	}
	function aj(a, b, c) {
		return {
			handle : c,
			yj : t(function() {
				this.qa.Fb(b)
			}, a),
			Bj : t(function() {
				this.qa.Kc() && b.Qc(true);
				this.qa.Wg(b)
			}, a),
			Aj : t(function() {
				this.qa.Kc() && b.Qc(false);
				this.qa.Xg(b)
			}, a)
		}
	}
	p.df = function(a) {
		a = a.target;
		Gi(this.fa, a);
		this.Dg(a);
		a.Ia() && bj(this)
	};
	p.ef = function(a) {
		a = a.target;
		Wi(this, a);
		cj(this, a)
	};
	function cj(a, b) {
		if (b.ca.ba)
			for ( var c = b.ca.pa, d = 0; d < c.length; d++) {
				var e = c[d];
				e.va === Q.wb && Hi(a.fa, e)
			}
		if (b.ha.ba) {
			c = b.ha.pa;
			for (d = 0; d < c.length; d++) {
				e = c[d];
				e.va === Q.wb && Hi(a.fa, e)
			}
		}
	}
	function Wi(a, b) {
		if (!a.ml) {
			$i(a, b.ca);
			$i(a, b.ha)
		}
		var c = a.fa.dg(b).aa(), d = aj(a, b, c);
		a.fe(b, c, d)
	}
	p.gf = function(a) {
		a = a.target;
		$i(this, a.ca);
		$i(this, a.ha);
		var b = this.fa.Sa(a);
		fc(b.path.aa());
		fc(b.handle.aa());
		cj(this, a)
	};
	p.ri = function(a) {
		a = a.target;
		if (!a.Lc()) {
			if (a.tb) {
				var b = this.fa;
				b.Sa(a).handle.hb(b.Zh)
			} else {
				b = this.fa;
				b.Sa(a).handle.hb(b.de)
			}
			if (a.Ia() && a.ka.Ya)
				a.tb ? dj(this, a) : bj(this, a)
		}
	};
	p.ui = function(a) {
		a = a.target;
		if (a.Lc()) {
			var b = this.fa;
			b.Sa(a).handle.hb(b.Zh)
		} else {
			b = this.fa;
			b.Sa(a).handle.hb(b.de)
		}
	};
	p.yi = function(a) {
		a = a.target;
		if (a.tb) {
			var b = this.fa;
			b.Sa(a).handle.hb(b.Zh)
		} else {
			b = this.fa;
			b.Sa(a).handle.hb(b.de)
		}
	};
	p.ti = function(a) {
		$i(this, a.target.yf)
	};
	p.cf = function(a) {
		var b = a.target;
		$i(this, b);
		for ( var c = b.pa, d = 0; d < c.length; d++) {
			var e = c[d], g;
			if (e.ca === b)
				g = e.ha;
			else if (e.ha === b)
				g = e.ca;
			else
				throw Error(yh);
			var h = g.pa;
			$i(this, g);
			Hi(this.fa, e);
			for (g = 0; g < h.length; g++) {
				var i = h[g];
				i.va === Q.wb && i !== e && Hi(this.fa, i)
			}
		}
		if (b.tb && !b.Lc())
			if (b.Ia() && b.ka.Ya)
				dj(this, b);
			else
				a.wg.Vj instanceof nh && bj(this, b)
	};
	function dj(a, b) {
		var c = a.fa.rf, d = new Qi(b);
		c.Ha(d, true);
		fg(c, "translucent")
	}
	function bj(a) {
		var b = a.fa.rf, c = b.Ea ? b.Ea[0] || null : null;
		fg(b, ig);
		if (c) {
			a.fa.rf.removeChild(c, true);
			c.Yc()
		}
	}
	p.ff = function(a) {
		var b = a.target;
		$i(this, b.ca);
		$i(this, b.ha);
		Hi(this.fa, b);
		if (b.va === Q.wb || a.wg.type === Q.wb) {
			a = b.ca.pa;
			for ( var c, d = 0; d < a.length; d++) {
				c = a[d];
				c !== b && c.va === Q.wb && Hi(this.fa, c)
			}
			a = b.ha.pa;
			for (d = 0; d < a.length; d++) {
				c = a[d];
				c !== b && c.va === Q.wb && Hi(this.fa, c)
			}
		}
	};
	p.si = function(a) {
		a = a.target;
		if (nb)
			$i(this, a);
		else {
			Gi(this.fa, a);
			this.Dg(a);
			Vi(this, a)
		}
	};
	p.Hl = function(a) {
		var b = a.sb;
		if (b.touches.length === 1) {
			this.xg(b.touches.item(0));
			a.preventDefault()
		}
	};
	p.Gl = function(a) {
		var b = a.sb;
		if (b.touches.length === 1) {
			this.zj(b.touches.item(0));
			a.preventDefault()
		}
	};
	p.Fl = function(a) {
		a = a.sb;
		this.yg(a);
		a.preventDefault()
	};
	p.xg = function(a) {
		var b = this.Sa(a.target);
		if (b)
			b.yj(a.shiftKey);
		else {
			b = this.fa.transform(a.clientX, a.clientY);
			this.qa.Vb(b.x, b.y)
		}
		Yi(this, a)
	};
	function Yi(a, b) {
		if (!nb) {
			b.stopPropagation();
			b.preventDefault()
		}
	}
	p.yg = function() {
		this.qa.tc(false)
	};
	p.Uh = function() {
		this.qa.tc(true)
	};
	p.Sh = function(a) {
		var b = this.Sa(a.target);
		if (b) {
			b.Bj();
			Yi(this, a)
		} else {
			a = rh(this.$.ba);
			for (b = 0; b < a.length; b++)
				a[b].Qc(false)
		}
	};
	p.Qh = function(a) {
		var b = this.Sa(a.target);
		if (b) {
			b.Aj();
			Yi(this, a)
		} else
			this.og(a) || this.qa.Vg()
	};
	p.og = function(a) {
		return !!a.relatedTarget && gc(this.fa.aa(), a.relatedTarget)
	};
	p.el = function(a) {
		var b = a.detail > 0 ? 0.95 : 1.05, c = this.fa.transform(a.clientX,
				a.clientY);
		Ji(this.fa, new M(c.x, c.y), b);
		Ki(this.fa, this.$.ba);
		Yi(this, a)
	};
	p.zj = function(a) {
		var b = this.fa.transform(a.clientX, a.clientY);
		this.qa.fd(b.x, b.y, a.shiftKey)
	};
	p.fe = function(a, b, c) {
		this.Xb[s(a)] = c;
		this.Xb[s(b)] = c
	};
	p.Dg = function(a) {
		var b = this.Sa(a);
		if (b) {
			this.Xb[s(a)] = undefined;
			this.Xb[s(b.handle)] = undefined
		}
	};
	p.Sa = function(a) {
		return this.Xb[s(a)]
	};
	function ej(a, b, c) {
		J.call(this, c);
		this.$ = a || new Xh;
		this.fa = new Fi(b, c);
		this.kb = this.qa = undefined;
		this.Ih = b ? false : true;
		this.Ha(this.fa, true);
		this.Xf = new Ui(this.$, this.fa, !this.Ih)
	}
	u(ej, J);
	p = ej.prototype;
	p.zd = function(a) {
		this.$ = a;
		this.Xf.zd(a)
	};
	p.mg = function(a) {
		wc(this.aa(), a.width, a.height);
		this.fa.mg(a)
	};
	p.oe = function() {
		return this.fa.oe()
	};
	p.Pc = function(a) {
		this.fa.Pc(a)
	};
	p.re = function() {
		return this.fa.re()
	};
	p.Oe = function(a) {
		this.fa.Oe(a);
		Ii(this.fa)
	};
	p.zc = function() {
		return this.fa.zc()
	};
	p.qd = function() {
		return this.fa.qd()
	};
	p.pd = function() {
		return this.fa.pd()
	};
	p.Td = function() {
		return this.fa.Td()
	};
	p.vc = function(a) {
		this.fa.vc(a)
	};
	p.jd = function(a) {
		this.fa.jd(a)
	};
	p.hd = function(a) {
		this.fa.hd(a)
	};
	p.wc = function(a) {
		this.fa.wc(a)
	};
	p.Wf = function(a, b) {
		this.qa = a;
		this.qa.pb(this.$, b);
		this.Xf.Wf(a)
	};
	function fj(a) {
		if (a.qa)
			a.qa.Yc();
		else
			throw Error(Og);
	}
	p.Of = function() {
		this.qa && this.qa.Of()
	};
	p.Ld = function() {
		this.fa.Cc(this.$.pe());
		Ki(this.fa, this.$.ba)
	};
	p.translate = function(a, b) {
		this.fa.translate(a, b)
	};
	p.mi = function() {
		var a = this.fa.pe();
		Ji(this.fa, new M(a.x, a.y), 1.2);
		Ki(this.fa, this.$.ba)
	};
	p.ni = function() {
		var a = this.fa.pe();
		Ji(this.fa, new M(a.x, a.y), 0.8);
		Ki(this.fa, this.$.ba)
	};
	p.Uf = function() {
		var a;
		if (this.$.gb())
			a = void 0;
		else {
			var b = this.$.ba.na[0];
			a = this.fa.Sa(b).xc;
			for ( var c = this.$.ba.na, d = 0.5 * this.fa.zc(), e = a ? new nc(
					a.top + a.height, a.left + a.width, a.top, a.left)
					: new nc(b.ea, b.da, b.ea, b.da), g = 1; g < c.length; g++) {
				b = c[g];
				if (a = this.fa.Sa(b).xc) {
					e.left = Math.min(e.left, a.left);
					e.right = Math.max(e.right, a.left + a.width);
					e.top = Math.max(e.top, a.top + a.height);
					e.bottom = Math.min(e.bottom, a.top)
				} else {
					e.left = Math.min(e.left, b.da - d);
					e.right = Math.max(e.right, b.da + d);
					e.top = Math.max(e.top, b.ea + d);
					e.bottom = Math.min(e.bottom, b.ea - d)
				}
			}
			a = e
		}
		if (a) {
			b = new M(a.left + 0.5 * (a.right - a.left), a.top + 0.5
					* (a.bottom - a.top));
			a = new A(a.right - a.left, a.top - a.bottom);
			c = this.fa.hg();
			d = a.bb();
			d.scale(d.width / d.height > c.width / c.height ? c.width / d.width
					: c.height / d.height);
			a = d.height / a.height;
			this.fa.Cc(b);
			Ji(this.fa, b, a);
			Ki(this.fa, this.$.ba)
		}
	};
	function gj(a, b) {
		var c = b ? b : Qf(a.$.ba), d = a.fa;
		c = a.fa.re() / c;
		d.Qa.setTransform(c, 0, 0, -c, 0, 0);
		d.oa.setTransform(d.Qa)
	}
	function hj(a, b) {
		b === ij ? Hb(a.aa(), a.kb) : Gb(a.aa(), b);
		a.kb = b
	}
	p.la = function() {
		this.ia = B("div", {
			"class" : "canvas"
		})
	};
	p.xa = function() {
		ej.ga.xa.call(this);
		jj(this)
	};
	function jj(a) {
		E(a.aa(), "selectstart", function(b) {
			b.stopPropagation();
			b.preventDefault()
		}, false, a)
	}
	var ij = "default-cursor";
	function kj(a) {
		J.call(this, a)
	}
	u(kj, J);
	kj.prototype.la = function() {
		this.ia = B("div", {
			"class" : "canvas-assembly"
		})
	};
	function lj(a) {
		J.call(this, a)
	}
	u(lj, J);
	lj.prototype.la = function() {
		this.ia = B("div", {});
		this.ia.innerHTML = '<a href="http://chemwriter.com" style="text-decoration: none; color: yellow">Demo for evaluation/testing only. Contact sales@metamolecular.com for license options.</a>';
		var a = this.ia, b = {
			position : "absolute",
			width : "100%",
			top : "0",
			"font-family" : "sans-serif",
			color : "yellow",
			"background-color" : "#cc4444",
			"font-weight" : "bold",
			"font-size" : "12px",
			"text-align" : "center",
			"padding-top" : "3px",
			"padding-bottom" : "3px"
		};
		r(b) ? pc(a, void 0, b) : Jb(b, qa(pc, a))
	};
	function mj() {
	}
	;
	function nj(a) {
		U.call(this, "lasso");
		this.ma = a;
		this.hj = this.fc = undefined
	}
	u(nj, U);
	p = nj.prototype;
	p.Qf = function(a) {
		a.Lc() && hj(this.ma, "move-cursor")
	};
	p.Sf = function(a) {
		a.Lc() && hj(this.ma, ij)
	};
	p.Vb = function(a, b) {
		nj.ga.Vb.call(this, a, b);
		var c = this.$.qc;
		c.me = false;
		c.ra.clear();
		c.ra.moveTo(a, b);
		c.dispatchEvent("lasso-started")
	};
	p.Oa = function(a, b) {
		nj.ga.Oa.call(this, a, b);
		if ((this.$.qc.ra.gb() || this.$.qc.me) && a.Lc() && !b) {
			this.fc = a;
			this.hj = oj(this);
			this.vb.je = false
		} else if (b)
			a.Bd(!a.Lc());
		else {
			Fh(this.$.ba);
			a.Bd(true)
		}
	};
	p.fd = function(a, b, c) {
		nj.ga.fd.call(this, a, b, c);
		if (this.fc) {
			a = a - this.fc.da;
			b = b - this.fc.ea;
			c = sh(this.$.ba);
			for ( var d = 0; d < c.length; d++) {
				var e = c[d];
				e.move(e.da + a, e.ea + b)
			}
		} else
			!this.$.qc.ra.gb() && !this.$.qc.me && this.$.qc.moveTo(a, b)
	};
	p.tc = function(a) {
		nj.ga.tc.call(this, a);
		if (this.fc) {
			pj(this);
			this.fc = undefined;
			this.vb.je = true
		} else
			!this.$.qc.ra.gb() && !this.$.qc.me && this.$.qc.end()
	};
	p.ua = function() {
		return new S(wg)
	};
	p.zb = m(true);
	p.ya = m("Select with Lasso");
	p.Yc = function() {
		for ( var a = this.$.ba.na, b = 0; b < a.length; b++)
			a[b].Bd(false);
		nj.ga.Yc.call(this)
	};
	function pj(a) {
		var b = Wa(a.hj), c = oj(a), d = sh(a.$.ba);
		a.vb.Jd(function() {
			for ( var e = 0; e < d.length; e++)
				d[e].move(c[e].da, c[e].ea)
		}, function() {
			for ( var e = 0; e < d.length; e++)
				d[e].move(b[e].da, b[e].ea)
		})
	}
	function oj(a) {
		var b = [];
		a = sh(a.$.ba);
		for ( var c = 0; c < a.length; c++) {
			var d = a[c];
			b[c] = new M(d.da, d.ea)
		}
		return b
	}
	;
	function qj(a) {
		U.call(this, a);
		this.fc = new M;
		this.Zb = false;
		this.Fc = []
	}
	u(qj, U);
	p = qj.prototype;
	p.Vb = function(a, b) {
		qj.ga.Vb.call(this, a, b);
		this.fc.move(a, b);
		rj(this);
		this.Zb = true
	};
	p.tc = function() {
		qj.ga.tc.call(this);
		this.Zb = false
	};
	p.Oa = function(a, b) {
		qj.ga.Oa.call(this, a, b);
		this.fc.move(a.da, a.ea);
		rj(this, a);
		this.Zb = true
	};
	function rj(a, b) {
		for ( var c = Math.PI / 6, d = b === undefined ? 0 : Hh(a.$.db, b), e = 0; e < 12; e++)
			a.Fc[e] = yf(e * c + d)
	}
	p.zb = m(true);
	p.Kc = function() {
		return !this.Zb
	};
	p.ya = m("Draw Bonds");
	function sj(a) {
		qj.call(this, a || "single-bond");
		this.ha = this.ca = null;
		this.ph = 0.15
	}
	u(sj, qj);
	p = sj.prototype;
	p.Ib = function() {
		return P.Hd
	};
	p.Vb = function(a, b) {
		sj.ga.Vb.call(this, a, b);
		this.ib();
		this.Oa(this.$.ba.Bb("C", a, b))
	};
	p.Fb = function(a) {
		if (a.Ib() !== P.Hd) {
			Gf(a, P.Hd);
			If(a, Q.Ma)
		} else
			tj(this, a)
	};
	p.Oa = function(a, b) {
		sj.ga.Oa.call(this, a, b);
		this.pg() || this.ib();
		this.ca = a;
		var c = this.$.db, d = this.Ib(), e = Hh(c, a);
		e = c.ba.Bb("C", a.da + c.jb * Math.cos(e), a.ea + c.jb * Math.sin(e));
		c.ba.pb(a, e, Q.Ma, d || P.Hd);
		this.ha = e;
		gh(this.ha, false)
	};
	p.fd = function(a, b, c) {
		sj.ga.fd.call(this, a, b);
		if (this.ca && this.ha) {
			if (this.ca.Ae) {
				this.ca.Qc(false);
				gh(this.ca, false)
			}
			if (!(Math.sqrt(Math.pow(a - this.ca.da, 2)
					+ Math.pow(b - this.ca.ea, 2)) < this.ph * this.$.db.oe())) {
				var d;
				if ((d = rh(this.$.ba, 1)[0]) && d !== this.ca && d !== this.ha) {
					this.ha.move(d.da, d.ea);
					d = true
				} else
					d = false;
				if (!d) {
					b = new M(a, b);
					if (c)
						this.ha.move(b.da, b.ea);
					else {
						c = new M(this.fc.da + this.$.db.oe(), this.fc.ea);
						if (this.Fc.length == 0)
							throw Error("atom-not-pressed");
						a = 0;
						b = N(this.fc, b);
						d = Math.abs(this.Fc[0] - b);
						for ( var e = 1; e < this.Fc.length; e++) {
							var g = Math.abs(this.Fc[e] - b);
							if (g < d) {
								d = g;
								a = e
							}
						}
						zf(this.fc, c, this.Fc[a] || 0);
						this.ha.move(c.da, c.ea)
					}
				}
			}
		}
	};
	p.tc = function() {
		sj.ga.tc.call(this);
		if (this.ha) {
			var a = Jh(this.$.db, this.ha);
			if (a !== this.ha) {
				vh(this.$.ba, this.ha);
				var b = Nf(this.$.ba, a, this.ca);
				b ? tj(this, b) : this.$.ba.pb(this.ca, a, Q.Ma, this.Ib())
			}
		}
		this.ha && !this.ha.Ae && gh(this.ha, true);
		this.ca && !this.ca.Ae && gh(this.ca, true);
		this.pg() && this.Gb();
		this.ha = this.ca = undefined
	};
	function tj(a, b) {
		switch (b.va) {
		case Q.Ma:
			type = Q.wb;
			break;
		case Q.wb:
			type = Q.Pf;
			break;
		case Q.Pf:
			type = Q.Ma;
			break;
		default:
			type = Q.Ma
		}
		If(b, type)
	}
	p.ua = function() {
		return new S(sg)
	};
	function uj() {
		U.call(this, "eraser")
	}
	u(uj, U);
	p = uj.prototype;
	p.Oa = function(a, b) {
		uj.ga.Oa.call(this, a, b);
		this.ib();
		var c = Wa(a.sa);
		vh(this.$.ba, a);
		for ( var d = 0; d < c.length; d++)
			c[d].sa.length == 0 && vh(this.$.ba, c[d]);
		this.Gb()
	};
	p.Fb = function(a) {
		uj.ga.Fb.call(this, a);
		this.ib();
		wh(this.$.ba, a);
		a.ca.sa.length === 0 && vh(this.$.ba, a.ca);
		a.ha.sa.length === 0 && vh(this.$.ba, a.ha);
		this.Gb()
	};
	p.zb = m(true);
	p.Kc = m(true);
	p.ua = function() {
		return new S(vg)
	};
	p.ya = m("Delete");
	function vj(a, b) {
		qj.call(this, b);
		this.eb = this.ca = null;
		this.Oc = a;
		this.ph = 0.15
	}
	u(vj, qj);
	p = vj.prototype;
	p.Vb = function(a, b) {
		vj.ga.Vb.call(this, a, b);
		this.ib();
		this.ca = this.$.ba.Bb("C", a, b);
		this.eb = Mh(this.$.db, this.ca, this.Oc);
		this.$f(this.eb);
		this.Jf()
	};
	p.Oa = function(a, b) {
		vj.ga.Oa.call(this, a, b);
		this.ib();
		this.ca = a;
		this.eb = Oh(this.$.db, a) ? Mh(this.$.db, this.ca, this.Oc) : Nh(
				this.$.db, this.ca, this.Oc);
		this.ca.Qc(false);
		this.$f(this.eb);
		this.Jf()
	};
	p.Fb = function(a) {
		vj.ga.Fb.call(this, a);
		this.ib();
		this.$f(Lh(this.$.db, a, this.Oc));
		a.Qc(false);
		this.Zb = true;
		this.Jf()
	};
	p.fd = function(a, b, c) {
		vj.ga.fd.call(this, a, b);
		if (this.ca || this.eb)
			if (!(Math.sqrt(Math.pow(a - this.ca.da, 2)
					+ Math.pow(b - this.ca.ea, 2)) < this.ph * this.$.db.oe())) {
				a = new M(a, b);
				b = N(this.ca, a);
				if (c)
					wj(this, b, this.eb.length % 2 ? xj(this) : N(this.ca,
							this.eb[this.eb.length / 2]));
				else {
					c = 0;
					a = N(this.ca, a);
					b = Math.abs(this.Fc[0] - a);
					for ( var d = 1; d < this.Fc.length; d++) {
						var e = Math.abs(this.Fc[d] - a);
						if (e < b) {
							b = e;
							c = d
						}
					}
					wj(this, this.Fc[c], this.eb.length % 2 ? xj(this) : N(
							this.ca, this.eb[this.eb.length / 2]))
				}
			}
	};
	p.tc = function() {
		vj.ga.tc.call(this);
		this.ei();
		this.Gb();
		this.eb = this.ca = undefined
	};
	p.zb = function() {
		return !this.Zb
	};
	p.$f = f();
	function xj(a) {
		var b = N(a.ca, a.eb[Math.floor(a.eb.length / 2)]);
		a = N(a.ca, a.eb[Math.floor(a.eb.length / 2 + 1)]);
		if (a > b)
			a -= 2 * Math.PI;
		return yf(b - (b - a) / 2 + Math.PI)
	}
	function wj(a, b, c) {
		for ( var d = 0; d < a.eb.length; d++) {
			var e = new M(a.eb[d].da, a.eb[d].ea), g = b - (c - N(a.ca, e));
			zf(new M(a.ca.da, a.ca.ea), e, g);
			a.eb[d].move(e.da, e.ea)
		}
	}
	p.ua = function() {
		var a = t(function(b) {
			var c = Af(this.Oc, 10, this.Oc === 4 || this.Oc === 8 ? Math.PI
					/ this.Oc : Math.PI / 2);
			b.moveTo(c[0].da + 10, c[0].ea + 10);
			for ( var d = 1; d < this.Oc; d++)
				b.lineTo(c[d].da + 10, c[d].ea + 10);
			b.close()
		}, this);
		return new S(a)
	};
	p.ya = function() {
		switch (this.Oc) {
		case 3:
			return "Cyclopropane";
		case 4:
			return "Cyclobutane";
		case 5:
			return "Cyclopentane";
		case 6:
			return "Cyclohexane";
		case 7:
			return "Cycloheptane";
		case 8:
			return "Cyclooctane";
		default:
			return "no tooltip"
		}
	};
	function yj() {
		U.call(this, "increase-charge")
	}
	u(yj, U);
	yj.prototype.zb = m(true);
	yj.prototype.Oa = function(a, b) {
		yj.ga.Oa.call(this, b);
		var c = a.ab + 1;
		Vg(a, c) && bh(a, c)
	};
	yj.prototype.ua = function() {
		return new S(xg)
	};
	yj.prototype.ya = m("Increase Charge");
	function zj() {
		U.call(this, "decrease-charge")
	}
	u(zj, U);
	zj.prototype.zb = m(true);
	zj.prototype.Oa = function(a, b) {
		zj.ga.Oa.call(this, b);
		var c = a.ab - 1;
		Vg(a, c) && bh(a, c)
	};
	zj.prototype.ua = function() {
		return new S(yg)
	};
	zj.prototype.ya = m("Decrease Charge");
	function Aj(a) {
		U.call(this, a);
		this.ja = new Sf;
		E(this.ja, Xf, this.Lf, false, this);
		E(this.ja, Wf, this.Mf, false, this)
	}
	u(Aj, U);
	p = Aj.prototype;
	p.pb = function(a, b) {
		Aj.ga.pb.call(this, a, b);
		V(this).pb(a, b)
	};
	p.Yc = function() {
		Aj.ga.Yc.call(this);
		V(this).Yc()
	};
	p.wh = function() {
		var a = new cg;
		a.Ha(new Qg(this.ja, undefined, true), true);
		return a
	};
	p.Qf = function(a) {
		V(this).Qf(a)
	};
	p.Sf = function(a) {
		V(this).Sf(a)
	};
	p.Wg = function(a) {
		V(this).Wg(a)
	};
	p.Xg = function(a) {
		V(this).Xg(a)
	};
	p.Vb = function(a, b) {
		V(this).Vb(a, b)
	};
	p.Oa = function(a, b) {
		V(this).Oa(a, b)
	};
	p.Fb = function(a) {
		V(this).Fb(a)
	};
	p.fd = function(a, b, c) {
		V(this).fd(a, b, c)
	};
	p.tc = function() {
		V(this).tc()
	};
	p.Vg = function() {
		V(this).Vg()
	};
	p.Of = function() {
		V(this).Of()
	};
	p.zb = function() {
		return V(this).zb()
	};
	p.Kc = function() {
		return V(this).Kc()
	};
	p.Ka = function() {
		return V(this).Ka()
	};
	p.Da = function(a) {
		V(this).Da(a)
	};
	p.pg = function() {
		V(this).pg()
	};
	p.ib = function() {
		V(this).ib()
	};
	p.Gb = function() {
		V(this).Gb()
	};
	p.Jf = function() {
		V(this).Jf()
	};
	p.ei = function() {
		V(this).ei()
	};
	p.ua = function() {
		return V(this).ua()
	};
	p.ya = function() {
		return V(this).ya()
	};
	p.Lf = function(a) {
		a.qa.pb(this.$, this.vb)
	};
	p.Mf = function(a) {
		a.qa.Yc()
	};
	function V(a) {
		a = a.ja.Le;
		if (!a)
			throw Error(Bj);
		return a
	}
	var Bj = "No tool selected.";
	function Cj(a, b) {
		J.call(this, b);
		this.fi = a
	}
	u(Cj, J);
	Cj.prototype.nf = function() {
		return this.fi.nf()
	};
	Cj.prototype.la = function() {
		this.ia = B("input", {
			type : "text",
			"class" : "element-select"
		})
	};
	Cj.prototype.xa = function() {
		Cj.ga.xa.call(this);
		var a = new Cd(this.aa());
		E(a, "key", this.Xk, true, this)
	};
	Cj.prototype.Xk = function(a) {
		var b = this.fi, c = a.keyCode;
		if (c >= 65 && c <= 90) {
			var d = b.hc;
			d = b.hc.length === 0 ? d + String.fromCharCode(c) : d
					+ String.fromCharCode(c).toLowerCase();
			a: {
				for (c = 0; c < Sg.length; c++)
					if (Sg[c].indexOf(d) === 0) {
						c = true;
						break a
					}
				c = false
			}
			if (c) {
				b.hc = d;
				b.dispatchEvent("text-field-text-changed")
			}
		} else
			switch (c) {
			case 8:
				b.hc = b.hc.slice(0, b.hc.length - 1);
				b.dispatchEvent("text-field-text-changed");
				break;
			case 13:
				b.dispatchEvent("text-field-edit-finished");
				break
			}
		this.aa().value = this.fi.nf();
		a.stopPropagation();
		a.preventDefault()
	};
	function Dj(a) {
		Aj.call(this, a)
	}
	u(Dj, Aj);
	Dj.prototype.wh = function() {
		var a = new J, b = new Ti, c = new Qg(this.ja, undefined, true), d = new Cj(
				b), e = new Yd("Add Element");
		this.yc = new cg;
		a.Ha(c, true);
		c.Ha(d, true);
		c.Ha(e, true);
		this.yc.Ha(a, true);
		ad(b, "text-field-edit-finished", this.Ik, true, this);
		ad(e.aa(), "click", function(g) {
			Ej(this, b);
			this.yc.dispatchEvent("flyout-done");
			g.stopPropagation();
			g.preventDefault()
		}, true, this);
		E(d.aa(), "click", this.zl, true, this);
		return this.yc
	};
	Dj.prototype.Ik = function(a) {
		Ej(this, a.target);
		this.yc.dispatchEvent("flyout-done")
	};
	Dj.prototype.zl = function(a) {
		a.stopPropagation();
		a.preventDefault()
	};
	function Ej(a, b) {
		if (b.nf() !== "") {
			var c = new Fj(b.nf());
			R(a.ja, c);
			Uf(a.ja, c)
		}
	}
	;
	function Gj() {
		sj.call(this, "wedge-bond")
	}
	u(Gj, sj);
	Gj.prototype.Fb = function(a) {
		a.va !== Q.Ma && If(a, Q.Ma);
		a.Ib() !== P.Id ? Gf(a, P.Id) : Jf(a)
	};
	Gj.prototype.Ib = function() {
		return P.Id
	};
	Gj.prototype.ua = function() {
		var a = new S(Cg);
		a.hb(true);
		return a
	};
	Gj.prototype.ya = m("Wedge Bond");
	function Hj() {
		sj.call(this, "hash-bond")
	}
	u(Hj, sj);
	Hj.prototype.Fb = function(a) {
		a.va !== Q.Ma && If(a, Q.Ma);
		a.Ib() !== P.Fd ? Gf(a, P.Fd) : Jf(a)
	};
	Hj.prototype.Ib = function() {
		return P.Fd
	};
	Hj.prototype.ua = function() {
		return new S(Dg)
	};
	Hj.prototype.ya = m("Hash Bond");
	function Ij() {
		vj.call(this, 6, "benzene")
	}
	u(Ij, vj);
	Ij.prototype.ya = m("Benzene");
	Ij.prototype.ua = function() {
		return new S(function(a) {
			var b = Math.PI / 2, c = Af(6, 10, b);
			a.moveTo(c[0].da + 10, c[0].ea + 10);
			for ( var d = 1; d < 6; d++)
				a.lineTo(c[d].da + 10, c[d].ea + 10);
			a.close();
			b = Af(6, 5, b);
			a.moveTo(b[0].da + 10, b[0].ea + 10);
			a.lineTo(b[1].da + 10, b[1].ea + 10);
			a.moveTo(b[2].da + 10, b[2].ea + 10);
			a.lineTo(b[3].da + 10, b[3].ea + 10);
			a.moveTo(b[4].da + 10, b[4].ea + 10);
			a.lineTo(b[5].da + 10, b[5].ea + 10)
		})
	};
	Ij.prototype.$f = function(a) {
		Ph(this.$.db, a)
	};
	function Fj(a) {
		U.call(this, "atom-label");
		this.ka = a;
		this.Em = "C"
	}
	u(Fj, U);
	p = Fj.prototype;
	p.zb = m(true);
	p.ya = function() {
		return "Label Atom: " + this.ka
	};
	p.Ic = function() {
		return "atom-label-" + this.ka.toLowerCase()
	};
	p.Oa = function(a) {
		kh(a, this.ka)
	};
	p.Vb = function(a, b) {
		Fj.ga.Vb.call(this, a, b);
		this.$.ba.Bb(this.ka, a, b)
	};
	p.ua = function() {
		var a = di(ai.Hb(), this.ka), b = a[0].ra.bb();
		a[1] && je(b, a[1].ra);
		a[2] && je(b, a[2].ra);
		a = new S(b);
		a.hb(true);
		a.Ve(false);
		return a
	};
	function Jj() {
		C.call(this);
		this.Dc = []
	}
	u(Jj, I);
	Jj.prototype.gb = function() {
		return this.Dc.length === 0
	};
	Jj.prototype.clear = function() {
		if (this.Dc.length !== 0) {
			this.Dc = [];
			this.dispatchEvent(Ri)
		}
	};
	function lh(a, b) {
		if (Ma(Sg, b) !== -1) {
			Sa(a.Dc, b) ? Ua(a.Dc, b) : a.Dc.push(b);
			a.dispatchEvent(Ri)
		} else
			throw ah;
	}
	var Ri = "element-list-changed";
	function nh() {
		this.Lb = this.Ya = undefined
	}
	u(nh, I);
	function Kj(a, b) {
		if (a.Lb !== b) {
			Lj(a, undefined);
			a.Lb = b;
			a.dispatchEvent(Xi)
		}
	}
	function Lj(a, b) {
		a.Ya && a.Ya.Mb(null);
		a.Ya = b;
		a.Lb = undefined;
		a.Ya && a.Ya.Mb(a)
	}
	var Xi = "atom-query-changed";
	function Mj(a) {
		this.va = a || Nj;
		U.call(this, this.va === Nj ? "increase-r-group" : "decrease-r-group")
	}
	u(Mj, U);
	Mj.prototype.ua = function() {
		var a = di(ai.Hb(), "R")[0].ra.bb(), b = T(a), c = b.left + b.width
				+ 0.2 * b.width, d = 0.5 * b.width;
		b = b.top;
		if (this.va === Nj) {
			a.moveTo(c + 0.5 * d, b);
			a.lineTo(c, b + d);
			a.lineTo(c + d, b + d)
		} else {
			a.moveTo(c + 0.5 * d, b + d);
			a.lineTo(c, b);
			a.lineTo(c + d, b)
		}
		a.close();
		a = new S(a);
		a.hb(true);
		a.Ve(false);
		return a
	};
	Mj.prototype.zb = m(true);
	Mj.prototype.ya = function() {
		return (this.va === Nj ? "Increase" : "Decrease") + " R-Group Number"
	};
	Mj.prototype.Oa = function(a) {
		if (!(!a.Ia() && this.va === Oj)) {
			var b = a.Ia() ? a.ka.Lb : 0, c = this.va === Nj ? 1 : -1;
			b = b ? b + c : 1;
			if (a.Ia())
				b > 0 ? Kj(a.ka, b) : mh(a, "C");
			else {
				b = new nh;
				Kj(b, 1);
				mh(a, b)
			}
		}
	};
	var Nj = 1, Oj = -1;
	function Pj(a) {
		this.va = a || Qj;
		U.call(this, this.va === Qj ? "increase-isotope" : "decrease-isotope")
	}
	u(Pj, U);
	Pj.prototype.Oa = function(a) {
		var b = Ug[a.ka];
		if (!(!b || b.length < 2)) {
			b = b[1];
			if (a.pc === 0)
				eh(a, b[0]);
			else {
				var c = Ma(b, a.pc);
				c === -1 || c === b.length - 1 ? eh(a, 0) : eh(a, b[c + 1])
			}
		}
	};
	Pj.prototype.ya = function() {
		return (this.va === Qj ? "Increase" : "Decrease") + " Isotope"
	};
	Pj.prototype.ua = function() {
		var a = di(ai.Hb(), "A")[0].ra.bb(), b = T(a), c = 0.5 * b.width;
		if (this.va === Qj) {
			a.moveTo(b.left - 0.5 * c, b.top);
			a.lineTo(b.left - c, b.top + c);
			a.lineTo(b.left, b.top + c);
			a.close()
		}
		a = new S(a);
		a.hb(true);
		a.Ve(false);
		return a
	};
	Pj.prototype.zb = m(true);
	var Qj = 1;
	function Rj() {
		U.call(this, "wildcard-atom-bond");
		this.Da(false)
	}
	u(Rj, U);
	p = Rj.prototype;
	p.Oa = function(a, b) {
		Rj.ga.Oa.call(this, b);
		a.Ia() ? mh(a, "C") : mh(a, new nh)
	};
	p.Fb = function(a) {
		a.Ia() ? If(a, Q.Ma) : If(a, new Cf)
	};
	p.zb = m(true);
	p.Kc = m(true);
	p.ua = function() {
		return new S(zg)
	};
	p.ya = m("Any Atom/Bond");
	function Sj() {
		U.call(this, "wildcard-bond")
	}
	u(Sj, U);
	Sj.prototype.Kc = m(true);
	Sj.prototype.Fb = function(a) {
		a.Ia() ? If(a, Q.Ma) : If(a, new Cf)
	};
	Sj.prototype.ua = function() {
		var a = new S(tg);
		a.hb(true);
		return a
	};
	Sj.prototype.ya = m("Any Bond");
	function Tj() {
		U.call(this);
		this.Da(false)
	}
	u(Tj, U);
	p = Tj.prototype;
	p.Ic = m("atom-list");
	p.ya = m("Atom List");
	p.ua = function() {
		var a = di(ai.Hb(), "L")[0].ra.bb();
		a = new S(a);
		a.hb(true);
		a.Ve(false);
		return a
	};
	p.zb = m(true);
	p.Oa = function(a) {
		Tj.ga.Oa.call(this, a);
		if (a.Ia()) {
			var b = a.ka;
			if (!b.Ya && !b.Lb)
				Lj(b, new Jj);
			else
				(b = b.Ya) && b.Dc.length !== 0 ? mh(a, b.Dc[0]) : mh(a, "C")
		} else {
			b = new nh;
			var c = new Jj;
			a.ka !== "C" && lh(c, a.ka);
			Lj(b, c);
			mh(a, b)
		}
	};
	function Uj(a) {
		U.call(this, a || "crossed-bond")
	}
	u(Uj, U);
	Uj.prototype.Fb = function(a) {
		this.ib();
		If(a, Q.wb);
		Gf(a, P.Qg);
		this.Gb()
	};
	Uj.prototype.ua = function() {
		return new S(ug)
	};
	Uj.prototype.ya = m("Cis or Trans Double Bond");
	Uj.prototype.Kc = m(true);
	function Vj(a) {
		U.call(this, a || "wavy-bond")
	}
	u(Vj, U);
	Vj.prototype.ya = m("Wavy Bond");
	Vj.prototype.Kc = m(true);
	Vj.prototype.Fb = function(a) {
		if (a.va == Q.Ma)
			a.Ib() === P.ee ? Jf(a) : Gf(a, P.ee);
		else {
			this.ib();
			If(a, Q.Ma);
			Gf(a, P.ee);
			this.Gb()
		}
	};
	Vj.prototype.ua = function() {
		return new S(Eg)
	};
	var Wj = [ "January", "February", "March", "April", "May", "June", "July",
			"August", "September", "October", "November", "December" ], Xj = {
		Vl : [ "BC", "AD" ],
		Ul : [ "Before Christ", "Anno Domini" ],
		Yl : [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ],
		fm : [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ],
		Xl : [ "January", "February", "March", "April", "May", "June", "July",
				"August", "September", "October", "November", "December" ],
		em : [ "January", "February", "March", "April", "May", "June", "July",
				"August", "September", "October", "November", "December" ],
		am : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
				"Oct", "Nov", "Dec" ],
		hm : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
				"Oct", "Nov", "Dec" ],
		mm : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
				"Friday", "Saturday" ],
		jm : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
				"Friday", "Saturday" ],
		cm : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
		im : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
		Zl : [ "S", "M", "T", "W", "T", "F", "S" ],
		gm : [ "S", "M", "T", "W", "T", "F", "S" ],
		bm : [ "Q1", "Q2", "Q3", "Q4" ],
		$l : [ "1st quarter", "2nd quarter", "3rd quarter", "4th quarter" ],
		Ql : [ "AM", "PM" ],
		Rl : [ "EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy" ],
		km : [ "h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a" ],
		ek : 6,
		nm : [ 5, 6 ],
		fk : 2
	};
	function Yj(a, b, c) {
		if (ja(a)) {
			this.fb = new Date(a, b || 0, c || 1);
			Zj(this, c || 1)
		} else if (la(a)) {
			this.fb = new Date(a.getFullYear(), a.getMonth(), a.getDate());
			Zj(this, a.getDate())
		} else {
			this.fb = new Date;
			this.fb.setHours(0);
			this.fb.setMinutes(0);
			this.fb.setSeconds(0);
			this.fb.setMilliseconds(0)
		}
	}
	p = Yj.prototype;
	p.Ri = Xj.ek;
	p.Ui = Xj.fk;
	p.bb = function() {
		var a = new Yj(this.fb);
		a.Ri = this.Ri;
		a.Ui = this.Ui;
		return a
	};
	p.getFullYear = function() {
		return this.fb.getFullYear()
	};
	p.getYear = function() {
		return this.getFullYear()
	};
	p.getMonth = function() {
		return this.fb.getMonth()
	};
	p.getDate = function() {
		return this.fb.getDate()
	};
	p.getTime = function() {
		return this.fb.getTime()
	};
	p.getUTCHours = function() {
		return this.fb.getUTCHours()
	};
	p.gd = function(a) {
		this.fb = new Date(a.getFullYear(), a.getMonth(), a.getDate())
	};
	p.setFullYear = function(a) {
		this.fb.setFullYear(a)
	};
	p.setMonth = function(a) {
		this.fb.setMonth(a)
	};
	p.setDate = function(a) {
		this.fb.setDate(a)
	};
	p.add = function(a) {
		if (a.Ol || a.bl) {
			var b = this.getMonth() + a.bl + a.Ol * 12, c = this.getYear()
					+ Math.floor(b / 12);
			b %= 12;
			if (b < 0)
				b += 12;
			var d;
			a: {
				switch (b) {
				case 1:
					d = c % 4 == 0 && (c % 100 != 0 || c % 400 == 0) ? 29 : 28;
					break a;
				case 5:
				case 8:
				case 10:
				case 3:
					d = 30;
					break a
				}
				d = 31
			}
			d = Math.min(d, this.getDate());
			this.setDate(1);
			this.setFullYear(c);
			this.setMonth(b);
			this.setDate(d)
		}
		if (a.Dk) {
			a = new Date((new Date(this.getYear(), this.getMonth(), this
					.getDate(), 12)).getTime()
					+ a.Dk * 864E5);
			this.setDate(1);
			this.setFullYear(a.getFullYear());
			this.setMonth(a.getMonth());
			this.setDate(a.getDate());
			Zj(this, a.getDate())
		}
	};
	p.toString = function() {
		return [ this.getFullYear(), Aa(this.getMonth() + 1, 2),
				Aa(this.getDate(), 2) ].join("")
				+ ""
	};
	function Zj(a, b) {
		if (a.getDate() != b) {
			var c = a.getDate() < b ? 1 : -1;
			a.fb.setUTCHours(a.fb.getUTCHours() + c)
		}
	}
	p.valueOf = function() {
		return this.fb.valueOf()
	};
	function $j() {
	}
	;
	function ak() {
		this.Wa = [];
		this.ah = [];
		this.jk = [];
		this.zg = [];
		this.zg[0] = 128;
		for ( var a = 1; a < 64; ++a)
			this.zg[a] = 0;
		this.reset()
	}
	u(ak, $j);
	ak.prototype.reset = function() {
		this.Wa[0] = 1732584193;
		this.Wa[1] = 4023233417;
		this.Wa[2] = 2562383102;
		this.Wa[3] = 271733878;
		this.Wa[4] = 3285377520;
		this.ak = this.qf = 0
	};
	function bk(a, b, c) {
		c || (c = 0);
		for ( var d = a.jk, e = c; e < c + 64; e += 4)
			d[e / 4] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3];
		for (e = 16; e < 80; e++) {
			var g = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
			d[e] = (g << 1 | g >>> 31) & 4294967295
		}
		b = a.Wa[0];
		c = a.Wa[1];
		var h = a.Wa[2], i = a.Wa[3], j = a.Wa[4], l;
		for (e = 0; e < 80; e++) {
			if (e < 40)
				if (e < 20) {
					g = i ^ c & (h ^ i);
					l = 1518500249
				} else {
					g = c ^ h ^ i;
					l = 1859775393
				}
			else if (e < 60) {
				g = c & h | i & (c | h);
				l = 2400959708
			} else {
				g = c ^ h ^ i;
				l = 3395469782
			}
			g = (b << 5 | b >>> 27) + g + j + l + d[e] & 4294967295;
			j = i;
			i = h;
			h = (c << 30 | c >>> 2) & 4294967295;
			c = b;
			b = g
		}
		a.Wa[0] = a.Wa[0] + b & 4294967295;
		a.Wa[1] = a.Wa[1] + c & 4294967295;
		a.Wa[2] = a.Wa[2] + h & 4294967295;
		a.Wa[3] = a.Wa[3] + i & 4294967295;
		a.Wa[4] = a.Wa[4] + j & 4294967295
	}
	ak.prototype.update = function(a, b) {
		if (b === undefined)
			b = a.length;
		var c = this.ah, d = this.qf, e = 0;
		if (r(a))
			for (; e < b;) {
				c[d++] = a.charCodeAt(e++);
				if (d == 64) {
					bk(this, c);
					d = 0
				}
			}
		else
			for (; e < b;) {
				c[d++] = a[e++];
				if (d == 64) {
					bk(this, c);
					d = 0
				}
			}
		this.qf = d;
		this.ak += b
	};
	function ck(a) {
		this.Oh = a
	}
	function dk(a) {
		var b = a.Oh;
		a = [];
		for ( var c = 0, d = 0; d < b.length; d++) {
			for ( var e = b.charCodeAt(d); e > 255;) {
				a[c++] = e & 255;
				e >>= 8
			}
			a[c++] = e
		}
		b = new ak;
		b.update(a);
		a = [];
		d = b.ak * 8;
		b.qf < 56 ? b.update(b.zg, 56 - b.qf) : b
				.update(b.zg, 64 - (b.qf - 56));
		for (c = 63; c >= 56; c--) {
			b.ah[c] = d & 255;
			d /= 256
		}
		bk(b, b.ah);
		for (c = d = 0; c < 5; c++)
			for (e = 24; e >= 0; e -= 8)
				a[d++] = b.Wa[c] >> e & 255;
		b = Array(a.length * 2);
		for (c = 0; c < a.length; ++c) {
			b[c * 2] = "0123456789abcdef".charAt(a[c] >> 4 & 15);
			b[c * 2 + 1] = "0123456789abcdef".charAt(a[c] & 15)
		}
		return b.join("")
	}
	;
	function ek() {
		function a() {
			return 0
		}
		var b = [ 26, 1, 18, 6, 25, 32, 11, 12, 39, 36, 25, 49 ], c = "";
		for (a = 0; a < b.length; a++)
			c += "M(this,this.ia,i);this.Ue=new Sg(this.da,this.ia)}"
					.charAt(b[a]);
		b = c;
		for (a = 0; a < 3; a++) {
			b = new ck(b);
			b = dk(b)
		}
		return b
	}
	;
	function fk() {
		this.sh = "";
		this.lf = {}
	}
	fk.prototype.mf = k("sh");
	fk.prototype.Ad = function(a) {
		this.sh = a;
		var b, c;
		this.lf = {};
		c = this.sh.split("\n");
		for (b = c.length; b--;) {
			a = c[b].split("=");
			if (0 in a && 1 in a)
				this.lf[a[0]] = a[1]
		}
	};
	fk.prototype.getFeature = function(a) {
		return this.lf[a] === undefined ? "" : this.lf[a]
	};
	function gk(a) {
		if (typeof a.of == "function")
			return a.of();
		if (r(a))
			return a.split("");
		if (ia(a)) {
			for ( var b = [], c = a.length, d = 0; d < c; d++)
				b.push(a[d]);
			return b
		}
		return Kb(a)
	}
	function hk(a, b, c) {
		if (typeof a.forEach == "function")
			a.forEach(b, c);
		else if (ia(a) || r(a))
			Na(a, b, c);
		else {
			var d;
			if (typeof a.gg == "function")
				d = a.gg();
			else if (typeof a.of != "function")
				if (ia(a) || r(a)) {
					d = [];
					for ( var e = a.length, g = 0; g < e; g++)
						d.push(g);
					d = d
				} else
					d = Lb(a);
			else
				d = void 0;
			e = gk(a);
			g = e.length;
			for ( var h = 0; h < g; h++)
				b.call(c, e[h], d && d[h], a)
		}
	}
	;
	function lk(a) {
		this.Nc = {};
		this.$a = [];
		var b = arguments.length;
		if (b > 1) {
			if (b % 2)
				throw Error("Uneven number of arguments");
			for ( var c = 0; c < b; c += 2)
				this.gd(arguments[c], arguments[c + 1])
		} else if (a) {
			if (a instanceof lk) {
				b = a.gg();
				c = a.of()
			} else {
				b = Lb(a);
				c = Kb(a)
			}
			for ( var d = 0; d < b.length; d++)
				this.gd(b[d], c[d])
		}
	}
	p = lk.prototype;
	p.ta = 0;
	p.Ze = 0;
	p.of = function() {
		mk(this);
		for ( var a = [], b = 0; b < this.$a.length; b++)
			a.push(this.Nc[this.$a[b]]);
		return a
	};
	p.gg = function() {
		mk(this);
		return this.$a.concat()
	};
	p.ih = function(a) {
		return nk(this.Nc, a)
	};
	p.gb = function() {
		return this.ta == 0
	};
	p.clear = function() {
		this.Nc = {};
		this.Ze = this.ta = this.$a.length = 0
	};
	p.remove = function(a) {
		if (nk(this.Nc, a)) {
			delete this.Nc[a];
			this.ta--;
			this.Ze++;
			this.$a.length > 2 * this.ta && mk(this);
			return true
		}
		return false
	};
	function mk(a) {
		if (a.ta != a.$a.length) {
			for ( var b = 0, c = 0; b < a.$a.length;) {
				var d = a.$a[b];
				if (nk(a.Nc, d))
					a.$a[c++] = d;
				b++
			}
			a.$a.length = c
		}
		if (a.ta != a.$a.length) {
			var e = {};
			for (c = b = 0; b < a.$a.length;) {
				d = a.$a[b];
				if (!nk(e, d)) {
					a.$a[c++] = d;
					e[d] = 1
				}
				b++
			}
			a.$a.length = c
		}
	}
	p.lb = function(a, b) {
		if (nk(this.Nc, a))
			return this.Nc[a];
		return b
	};
	p.gd = function(a, b) {
		if (!nk(this.Nc, a)) {
			this.ta++;
			this.$a.push(a);
			this.Ze++
		}
		this.Nc[a] = b
	};
	p.bb = function() {
		return new lk(this)
	};
	function nk(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}
	;
	function ok(a) {
		return pk(a || arguments.callee.caller, [])
	}
	function pk(a, b) {
		var c = [];
		if (Sa(b, a))
			c.push("[...circular reference...]");
		else if (a && b.length < 50) {
			c.push(qk(a) + "(");
			for ( var d = a.arguments, e = 0; e < d.length; e++) {
				e > 0 && c.push(", ");
				var g;
				g = d[e];
				switch (typeof g) {
				case "object":
					g = g ? "object" : "null";
					break;
				case "string":
					g = g;
					break;
				case "number":
					g = String(g);
					break;
				case "boolean":
					g = g ? "true" : "false";
					break;
				case "function":
					g = (g = qk(g)) ? g : "[fn]";
					break;
				case "undefined":
				default:
					g = typeof g;
					break
				}
				if (g.length > 40)
					g = g.substr(0, 40) + "...";
				c.push(g)
			}
			b.push(a);
			c.push(")\n");
			try {
				c.push(pk(a.caller, b))
			} catch (h) {
				c.push("[exception trying to get caller]\n")
			}
		} else
			a ? c.push("[...long stack...]") : c.push("[end]");
		return c.join("")
	}
	function qk(a) {
		if (rk[a])
			return rk[a];
		a = String(a);
		if (!rk[a]) {
			var b = /function ([^\(]+)/.exec(a);
			rk[a] = b ? b[1] : "[Anonymous]"
		}
		return rk[a]
	}
	var rk = {};
	function sk(a, b, c, d, e) {
		this.reset(a, b, c, d, e)
	}
	sk.prototype.rl = 0;
	sk.prototype.Oi = null;
	sk.prototype.Mi = null;
	var tk = 0;
	sk.prototype.reset = function(a, b, c, d, e) {
		this.rl = typeof e == "number" ? e : tk++;
		this.Dm = d || ra();
		this.uf = a;
		this.fl = b;
		this.um = c;
		delete this.Oi;
		delete this.Mi
	};
	sk.prototype.Rj = aa("uf");
	function uk(a) {
		this.wf = a
	}
	uk.prototype.Fa = null;
	uk.prototype.uf = null;
	uk.prototype.Ea = null;
	uk.prototype.fj = null;
	function vk(a, b) {
		this.name = a;
		this.value = b
	}
	vk.prototype.toString = k("name");
	var wk = new vk("SEVERE", 1E3), xk = new vk("WARNING", 900), yk = new vk(
			"CONFIG", 700), zk = new vk("FINE", 500);
	p = uk.prototype;
	p.getName = k("wf");
	p.Vi = function() {
		if (!this.Ea)
			this.Ea = {};
		return this.Ea
	};
	p.Rj = aa("uf");
	function Ak(a) {
		if (a.uf)
			return a.uf;
		if (a.Fa)
			return Ak(a.Fa);
		La("Root logger has no level set.");
		return null
	}
	p.log = function(a, b, c) {
		if (a.value >= Ak(this).value) {
			a = this.Mk(a, b, c);
			b = "log:" + a.fl;
			if (q.console)
				if (q.console.timeStamp)
					q.console.timeStamp(b);
				else
					q.console.markTimeline && q.console.markTimeline(b);
			q.msWriteProfilerMark && q.msWriteProfilerMark(b);
			for (b = this; b;) {
				c = b;
				var d = a;
				if (c.fj)
					for ( var e = 0, g = void 0; g = c.fj[e]; e++)
						g(d);
				b = b.Fa
			}
		}
	};
	p.Mk = function(a, b, c) {
		var d = new sk(a, String(b), this.wf);
		if (c) {
			d.Oi = c;
			var e;
			var g = arguments.callee.caller;
			try {
				var h;
				var i = da("window.location.href");
				if (r(c))
					h = {
						message : c,
						name : "Unknown error",
						lineNumber : "Not available",
						fileName : i,
						stack : "Not available"
					};
				else {
					var j, l, n = false;
					try {
						j = c.lineNumber || c.tm || "Not available"
					} catch (o) {
						j = "Not available";
						n = true
					}
					try {
						l = c.fileName || c.filename || c.sourceURL || i
					} catch (G) {
						l = "Not available";
						n = true
					}
					h = n || !c.lineNumber || !c.fileName || !c.stack ? {
						message : c.message,
						name : c.name,
						lineNumber : j,
						fileName : l,
						stack : c.stack || "Not available"
					} : c
				}
				e = "Message: " + ua(h.message)
						+ '\nUrl: <a href="view-source:' + h.fileName
						+ '" target="_new">' + h.fileName + "</a>\nLine: "
						+ h.lineNumber + "\n\nBrowser stack:\n"
						+ ua(h.stack + "-> ")
						+ "[end]\n\nJS stack traversal:\n" + ua(ok(g) + "-> ")
			} catch (F) {
				e = "Exception trying to expose exception! You win, we lose. "
						+ F
			}
			d.Mi = e
		}
		return d
	};
	function Bk(a, b, c) {
		a.log(zk, b, c)
	}
	var Ck = {}, Dk = null;
	function Ek(a) {
		if (!Dk) {
			Dk = new uk("");
			Ck[""] = Dk;
			Dk.Rj(yk)
		}
		var b;
		if (!(b = Ck[a])) {
			b = new uk(a);
			var c = a.lastIndexOf("."), d = a.substr(0, c);
			c = a.substr(c + 1);
			d = Ek(d);
			d.Vi()[c] = b;
			b.Fa = d;
			b = Ck[a] = b
		}
		return b
	}
	;
	function Fk() {
	}
	Fk.prototype.Ai = null;
	function Gk(a) {
		var b;
		if (!(b = a.Ai)) {
			b = {};
			if (Hk(a)) {
				b[0] = true;
				b[1] = true
			}
			b = a.Ai = b
		}
		return b
	}
	;
	var Ik;
	function Jk() {
	}
	u(Jk, Fk);
	function Kk(a) {
		return (a = Hk(a)) ? new ActiveXObject(a) : new XMLHttpRequest
	}
	Jk.prototype.Dh = null;
	function Hk(a) {
		if (!a.Dh && typeof XMLHttpRequest == "undefined"
				&& typeof ActiveXObject != "undefined") {
			for ( var b = [ "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0",
					"MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ], c = 0; c < b.length; c++) {
				var d = b[c];
				try {
					new ActiveXObject(d);
					return a.Dh = d
				} catch (e) {
				}
			}
			throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
		}
		return a.Dh
	}
	Ik = new Jk;
	var Lk = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
	function Mk(a) {
		C.call(this);
		this.headers = new lk;
		this.Pg = a || null
	}
	u(Mk, I);
	Mk.prototype.bc = Ek("goog.net.XhrIo");
	var Nk = /^https?$/i;
	p = Mk.prototype;
	p.md = false;
	p.wa = null;
	p.Og = null;
	p.Lh = "";
	p.pj = "";
	p.sf = 0;
	p.tf = "";
	p.rh = false;
	p.kg = false;
	p.Fh = false;
	p.Wd = false;
	p.Kg = 0;
	p.be = null;
	p.Lj = "";
	p.Nl = false;
	p.send = function(a, b, c, d) {
		if (this.wa)
			throw Error("[goog.net.XhrIo] Object is active with another request");
		b = b ? b.toUpperCase() : "GET";
		this.Lh = a;
		this.tf = "";
		this.sf = 0;
		this.pj = b;
		this.rh = false;
		this.md = true;
		this.wa = this.Pg ? Kk(this.Pg) : Kk(Ik);
		this.Og = this.Pg ? Gk(this.Pg) : Gk(Ik);
		this.wa.onreadystatechange = t(this.Ej, this);
		try {
			Bk(this.bc, Ok(this, "Opening Xhr"));
			this.Fh = true;
			this.wa.open(b, a, true);
			this.Fh = false
		} catch (e) {
			Bk(this.bc, Ok(this, "Error opening Xhr: " + e.message));
			this.ne(5, e);
			return
		}
		a = c || "";
		var g = this.headers.bb();
		d && hk(d, function(i, j) {
			g.gd(j, i)
		});
		b == "POST"
				&& !g.ih("Content-Type")
				&& g.gd("Content-Type",
						"application/x-www-form-urlencoded;charset=utf-8");
		hk(g, function(i, j) {
			this.wa.setRequestHeader(j, i)
		}, this);
		if (this.Lj)
			this.wa.ym = this.Lj;
		if ("withCredentials" in this.wa)
			this.wa.withCredentials = this.Nl;
		try {
			if (this.be) {
				ee.clearTimeout(this.be);
				this.be = null
			}
			if (this.Kg > 0) {
				Bk(this.bc, Ok(this, "Will abort after " + this.Kg
						+ "ms if incomplete"));
				this.be = ee.setTimeout(t(this.Dl, this), this.Kg)
			}
			Bk(this.bc, Ok(this, "Sending request"));
			this.kg = true;
			this.wa.send(a);
			this.kg = false
		} catch (h) {
			Bk(this.bc, Ok(this, "Send error: " + h.message));
			this.ne(5, h)
		}
	};
	p.Dl = function() {
		if (typeof ba != "undefined")
			if (this.wa) {
				this.tf = "Timed out after " + this.Kg + "ms, aborting";
				this.sf = 8;
				Bk(this.bc, Ok(this, this.tf));
				this.dispatchEvent("timeout");
				this.abort(8)
			}
	};
	p.ne = function(a, b) {
		this.md = false;
		if (this.wa) {
			this.Wd = true;
			this.wa.abort();
			this.Wd = false
		}
		this.tf = b;
		this.sf = a;
		Pk(this);
		Qk(this)
	};
	function Pk(a) {
		if (!a.rh) {
			a.rh = true;
			a.dispatchEvent("complete");
			a.dispatchEvent("error")
		}
	}
	p.abort = function(a) {
		if (this.wa && this.md) {
			Bk(this.bc, Ok(this, "Aborting"));
			this.md = false;
			this.Wd = true;
			this.wa.abort();
			this.Wd = false;
			this.sf = a || 7;
			this.dispatchEvent("complete");
			this.dispatchEvent("abort");
			Qk(this)
		}
	};
	p.za = function() {
		if (this.wa) {
			if (this.md) {
				this.md = false;
				this.Wd = true;
				this.wa.abort();
				this.Wd = false
			}
			Qk(this, true)
		}
		Mk.ga.za.call(this)
	};
	p.Ej = function() {
		!this.Fh && !this.kg && !this.Wd ? this.Wh() : Rk(this)
	};
	p.Wh = function() {
		Rk(this)
	};
	function Rk(a) {
		if (a.md)
			if (typeof ba != "undefined")
				if (a.Og[1] && Sk(a) == 4 && Tk(a) == 2)
					Bk(a.bc, Ok(a, "Local request error detected and ignored"));
				else if (a.kg && Sk(a) == 4)
					ee.setTimeout(t(a.Ej, a), 0);
				else {
					a.dispatchEvent("readystatechange");
					if (Sk(a) == 4) {
						Bk(a.bc, Ok(a, "Request complete"));
						a.md = false;
						var b = Tk(a), c;
						a: switch (b) {
						case 200:
						case 201:
						case 202:
						case 204:
						case 304:
						case 1223:
							c = true;
							break a;
						default:
							c = false;
							break a
						}
						if (!(c = c)) {
							if (b = b === 0) {
								b = String(a.Lh).match(Lk)[1] || null;
								if (!b && self.location) {
									b = self.location.protocol;
									b = b.substr(0, b.length - 1)
								}
								b = !Nk.test(b ? b.toLowerCase() : "")
							}
							c = b
						}
						if (c) {
							a.dispatchEvent("complete");
							a.dispatchEvent("success")
						} else {
							a.sf = 6;
							var d;
							try {
								d = Sk(a) > 2 ? a.wa.statusText : ""
							} catch (e) {
								Bk(a.bc, "Can not get status: " + e.message);
								d = ""
							}
							a.tf = d + " [" + Tk(a) + "]";
							Pk(a)
						}
						Qk(a)
					}
				}
	}
	function Qk(a, b) {
		if (a.wa) {
			var c = a.wa, d = a.Og[0] ? ea : null;
			a.wa = null;
			a.Og = null;
			if (a.be) {
				ee.clearTimeout(a.be);
				a.be = null
			}
			b || a.dispatchEvent("ready");
			try {
				c.onreadystatechange = d
			} catch (e) {
				a.bc.log(wk,
						"Problem encountered resetting onreadystatechange: "
								+ e.message, void 0)
			}
		}
	}
	p.ij = function() {
		return !!this.wa
	};
	function Sk(a) {
		return a.wa ? a.wa.readyState : 0
	}
	function Tk(a) {
		try {
			return Sk(a) > 2 ? a.wa.status : -1
		} catch (b) {
			a.bc.log(xk, "Can not get status: " + b.message, void 0);
			return -1
		}
	}
	function Uk(a) {
		try {
			return a.wa ? a.wa.responseText : ""
		} catch (b) {
			Bk(a.bc, "Can not get responseText: " + b.message);
			return ""
		}
	}
	function Ok(a, b) {
		return b + " [" + a.pj + " " + a.Lh + " " + Tk(a) + "]"
	}
	Kc[Kc.length] = function(a) {
		Mk.prototype.Wh = a(Mk.prototype.Wh)
	};
	function Vk(a) {
		C.call(this);
		this.wa = a || new Mk;
		E(this.wa, "success", function() {
			this.ug = new fk;
			this.ug.Ad(Uk(this.wa));
			var b;
			b = this.ug;
			var c;
			b: {
				c = [ "type", "signature" ];
				for ( var d = 0; d < c.length; d++)
					if (!b.lf[c[d]]) {
						c = false;
						break b
					}
				c = true
			}
			if (!(c = !c)) {
				c = ek();
				d = b.mf().split("\n");
				d.pop();
				c = new ck(d.join("\n") + c);
				c = b.getFeature("signature") !== dk(c)
			}
			if (c)
				b = false;
			else {
				b: {
					c = document.domain;
					d = b.getFeature("domain");
					switch (b.getFeature("type")) {
					case "website":
						c = d === c || c === [ "www", d ].join(".");
						break b;
					case "wildcard":
						c: {
							d = d.split(".");
							for (c = c.split("."); d.length > 0;)
								if (d.pop() !== c.pop()) {
									c = false;
									break c
								}
							c = true
						}
						break b
					}
					c = false
				}
				if (!(c = c))
					c = b.getFeature("type") !== "named_product" ? false : b
							.getFeature("licensee_product") !== "";
				if (c = c) {
					if (b = b.getFeature("deployment_expires")) {
						b = b.replace(",", "").split(" ");
						if (b.length !== 3)
							b = true;
						else {
							c = Ma(Wj, b[0]);
							if (c === -1)
								throw Error("id");
							d = Ga(b[1]);
							b = new Yj(Ga(b[2]), c, d);
							b = new Yj > b
						}
					} else
						b = false;
					c = !b
				}
				b = c
			}
			b = b;
			b == false && this.dispatchEvent(Wk)
		}, null, this);
		E(this.wa, "error", function() {
			this.dispatchEvent(Wk)
		}, null, this)
	}
	u(Vk, I);
	Vk.prototype.wa = null;
	Vk.prototype.ug = null;
	Vk.prototype.xd = function(a) {
		if (a) {
			this.ug = null;
			this.wa.send(a)
		} else
			this.dispatchEvent(Wk)
	};
	var Wk = "INVALID_FILE";
	function Xk(a) {
		this.ld = [];
		if (a)
			for ( var b = 0; b < a.length; b++)
				Yk(this, a[b])
	}
	u(Xk, I);
	function Yk(a, b) {
		a.ld.push(b);
		b.Mb(a)
	}
	;
	function Zk(a) {
		J.call(this, a)
	}
	u(Zk, J);
	Zk.prototype.Yf = function(a) {
		var b = new Zf(a);
		b.Da(a.Ka());
		Td(b, 64, false);
		this.Ha(b, true);
		return b
	};
	Zk.prototype.la = function() {
		this.ia = B("div", {
			"class" : "menu-view"
		})
	};
	function W(a) {
		C.call(this);
		this.rb = a;
		this.oc = true
	}
	u(W, I);
	p = W.prototype;
	p.execute = function() {
		this.dispatchEvent($k)
	};
	p.ua = function() {
		return new S(qg)
	};
	p.ya = m("no tooltip");
	p.se = f();
	p.Da = function(a) {
		if (this.oc !== a)
			(this.oc = a) ? this.dispatchEvent(al) : this.dispatchEvent(bl)
	};
	p.Ka = k("oc");
	var al = "abstract-action-action-enabled", bl = "abstract-action-action-disabled", $k = "abstract-action-action-executed";
	function cl(a, b) {
		this.vf = a;
		this.fa = b;
		this.ld = {};
		this.Uc = {};
		for ( var c = this.vf.ld, d = 0; d < c.length; d++) {
			var e = c[d], g = this.fa.Yf(e);
			this.ld[s(g)] = e;
			this.Uc[s(e)] = g
		}
		E(this.fa, "action", this.bh, false, this);
		E(this.vf, bl, this.kk, false, this);
		E(this.vf, al, this.mk, false, this)
	}
	cl.prototype.bh = function(a) {
		this.ld[s(a.target)].execute()
	};
	cl.prototype.kk = function(a) {
		this.Uc[s(a.target)].Da(false)
	};
	cl.prototype.mk = function(a) {
		this.Uc[s(a.target)].Da(true)
	};
	function dl(a, b) {
		J.call(this, b);
		this.ec = a || new Xk;
		this.uj = new Zk;
		this.Ha(this.uj, true);
		this.Xf = new cl(this.ec, this.uj)
	}
	u(dl, J);
	dl.prototype.la = function() {
		this.ia = B("div", {
			"class" : "dock"
		})
	};
	function el(a) {
		W.call(this, a)
	}
	u(el, W);
	el.prototype.ua = function() {
		var a = new S(Hg);
		a.hb(false);
		return a
	};
	el.prototype.ya = m("Clear All");
	el.prototype.execute = function() {
		el.ga.execute.call(this);
		this.rb.clear()
	};
	function fl(a) {
		W.call(this, a)
	}
	u(fl, W);
	fl.prototype.execute = function() {
		this.rb.hi();
		fl.ga.execute.call(this)
	};
	fl.prototype.ua = function() {
		var a = new S(Fg);
		a.hb(false);
		return a
	};
	fl.prototype.ya = function() {
		var a;
		switch (mf()) {
		case nf:
			a = "Control+z";
			break;
		case qf:
			a = "Command+z";
			break;
		case rf:
			a = "Control+z";
			break
		}
		return "Undo [" + a + "]"
	};
	fl.prototype.se = function() {
		switch (mf()) {
		case nf:
			return "ctrl+z";
		case qf:
			return "meta+z";
		case rf:
			return "ctrl+z"
		}
	};
	function gl(a) {
		W.call(this, a)
	}
	u(gl, W);
	gl.prototype.execute = function() {
		this.rb.Yh();
		gl.ga.execute.call(this)
	};
	gl.prototype.ya = function() {
		var a;
		switch (mf()) {
		case nf:
			a = "Control+y";
			break;
		case qf:
			a = "Command+Shift+z";
			break;
		case rf:
			a = "Control+Shift+z";
			break
		}
		return "Redo [" + a + "]"
	};
	gl.prototype.ua = function() {
		var a = new S(Gg);
		a.hb(false);
		return a
	};
	gl.prototype.se = function() {
		switch (mf()) {
		case nf:
			return "ctrl+y";
		case qf:
			return "meta+shift+z";
		case rf:
			return "ctrl+shift+z"
		}
	};
	function hl(a) {
		W.call(this, a)
	}
	u(hl, W);
	hl.prototype.execute = function() {
		hl.ga.execute.call(this);
		var a = this.rb;
		(new il(a)).show(a.Za)
	};
	hl.prototype.ua = function() {
		return new S(Kg)
	};
	hl.prototype.ya = m("About ChemWriter");
	function X(a, b, c, d) {
		a = a === undefined ? "" : a.toString();
		d = Array(b - a.length + 1).join(d || " ");
		c = c === jl ? a + d : d + a;
		if (a.length > b)
			c = a.slice(0, b);
		return c
	}
	var jl = "left";
	function kl(a) {
		this.ba = new qh;
		this.fg = ll;
		this.De = this.Yd = "";
		if (a)
			if (a.length > 2)
				throw Error(ml);
			else
				this.De = a;
		else
			this.De = "";
		this.Ph = nl;
		this.Bc = new Date;
		this.hh = "";
		this.Aa = []
	}
	p = kl.prototype;
	p.write = function(a, b, c, d) {
		if (a.na.length > 999)
			throw Error(ol);
		if (a.pa.length > 999)
			throw Error(pl);
		this.cd();
		try {
			this.ba = a;
			this.bi(b);
			this.hh = c ? c : "";
			var e = X(this.De, 2, jl, " "), g = X(this.Ph, 8, jl, " "), h = this.Bc
					.getFullYear().toString().slice(2, 4), i = X(this.Bc
					.getMonth() + 1, 2, "right", "0"), j = X(this.Bc.getDate(),
					2, "right", "0"), l = X(this.Bc.getHours(), 2, "right", "0"), n = X(
					this.Bc.getMinutes(), 2, "right", "0"), o = X("2D", 2), G = X(
					"", 2), F = X("", 10), cb = X("", 12), ye = X("", 6);
			a = e + g + i + j + h + l + n + o + G + F + cb + ye;
			this.Aa.push(this.Yd);
			this.Aa.push(a);
			this.Aa.push(this.hh);
			ql(this);
			var hd = this.ba.na;
			for (a = 0; a < hd.length; a++) {
				var sb = hd[a];
				b = void 0;
				switch (sb.ab) {
				case 3:
					b = 1;
					break;
				case 2:
					b = 2;
					break;
				case 1:
					b = 3;
					break;
				case -1:
					b = 5;
					break;
				case -2:
					b = 6;
					break;
				case -3:
					b = 7;
					break;
				default:
					b = 0
				}
				var Ba = sb.da, Ca = sb.ea, ik = sb.Pl;
				if (d) {
					Ba /= d;
					Ca /= d;
					ik /= d
				}
				var Km = X(Ba.toFixed(4), 10), Lm = X(Ca.toFixed(4), 10), Mm = X(
						ik.toFixed(4), 10), Om = X(rl(this, sb), 3, "left", " "), Pm = X(
						0, 2), Qm = X(b, 3), Rm = X(0, 3), Sm = X(0, 3), Tm = X(
						0, 3), Um = X(0, 3), Vm = X(0, 3), jk = X(0, 3), Wm = X(
						0, 3), Xm = X(0, 3), Ym = X(0, 3);
				this.Aa.push(Km + Lm + Mm + " " + Om + Pm + Qm + Rm + Sm + Tm
						+ Um + Vm + jk + jk + Wm + Xm + Ym)
			}
			var kk = this.ba.pa;
			for (d = 0; d < kk.length; d++) {
				var Od = kk[d], Zm = X(oh(Od.ca) + 1, 3), $m = X(oh(Od.ha) + 1,
						3), an = Od.Ia() ? X(8, 3) : X(Od.va, 3), bn = X(Od
						.Ib(), 3), cn = X("0", 3), dn = X("0", 3), en = X("0",
						3);
				this.Aa.push(Zm + $m + an + bn + cn + dn + en)
			}
			sl(this);
			this.Aa.push(tl + "END")
		} catch (Vn) {
			throw Error(ul);
		}
		return this.Aa.join("\n") + "\n"
	};
	p.cd = function() {
		this.ba = new qh;
		this.Aa = [];
		this.hh = this.Yd = ""
	};
	p.clear = function() {
		this.cd();
		this.De = "";
		this.Bc = new Date
	};
	p.bi = function(a) {
		this.Yd = a ? a : ""
	};
	p.getName = k("Yd");
	p.setDate = function(a) {
		this.Bc = a || new Date
	};
	p.getDate = k("Bc");
	function ql(a) {
		var b = Pa(a.ba.pa, function(n, o) {
			return n === 1 || o.Ib() !== 0 ? 1 : n
		}, 0, a), c = X(a.ba.na.length, 3), d = X(a.ba.pa.length, 3), e = X(0,
				3), g = X(0, 3);
		b = X(b, 3);
		var h = X(0, 3), i = X("", 12, "left", " "), j = X(999, 3), l = X(a.fg,
				6);
		a.Aa.push(c + d + e + g + b + h + i + j + l)
	}
	function sl(a) {
		function b(g, h, i) {
			i !== 0 && g.push([ oh(h) + 1, i ]);
			return g
		}
		var c = Pa(a.ba.na, function(g, h) {
			return b(g, h, h.ab)
		}, []);
		Pa(a.ba.na, function(g, h) {
			return b(g, h, h.Cg)
		}, []);
		var d = Pa(a.ba.na, function(g, h) {
			return b(g, h, h.pc)
		}, []), e = Pa(a.ba.na, function(g, h) {
			var i = 0;
			if (h.Ia())
				i = h.ka.Lb ? h.ka.Lb : 0;
			return b(g, h, i)
		}, []);
		vl(a, "CHG", c);
		vl(a, "ISO", d);
		vl(a, "RGP", e);
		wl(a)
	}
	function wl(a) {
		for ( var b = a.ba.na, c = 0; c < b.length; c++) {
			var d = b[c];
			if (b[c].Ia() && b[c].ka.Ya) {
				var e = a, g = d.ka.Ya;
				d = g.Dc;
				g = "M  ALS " + X(c + 1, 3) + X(g.Dc.length, 3) + " F"
						+ (d.length > 0 ? " " : "");
				for ( var h = 0; h < d.length; h++)
					g += X(d[h], 4, jl);
				e.Aa.push(g)
			}
		}
	}
	function rl(a, b) {
		if (!b.Ia())
			return b.ka;
		if (!b.ka.Ya && !b.ka.Lb)
			return "*";
		if (b.ka.Ya)
			return "L";
		if (b.ka.Lb)
			return "R#";
		return "?"
	}
	function vl(a, b, c) {
		function d(g, h) {
			var i = [], j;
			for (j = 0; j < h.length; j += g)
				i.push(h.slice(j, j + g));
			return i
		}
		if (c.length > 6) {
			c = d(6, c);
			for ( var e = 0; e < c.length; e++)
				vl(a, b, c[e])
		} else
			c.length > 0
					&& a.Aa.push(tl + b + X(c.length, 3)
							+ Pa(c, function(g, h) {
								var i = "";
								i = X(h[0], 4) + X(h[1], 4);
								return g + i
							}, ""))
	}
	var ml = "Invalid username", ul = "Corrupt molecule", ol = "Molecule contains too many atoms (>999)", pl = "Molecule contains too many bonds (>999)", ll = "V2000", nl = "CHEMW2", tl = "M  ";
	function xl(a) {
		W.call(this, a)
	}
	u(xl, W);
	xl.prototype.execute = function() {
		var a = this.rb, b, c;
		try {
			b = a.xh();
			c = new yl(a, b)
		} catch (d) {
			c = new zl(a, d.message)
		}
		c.show(a.Za);
		xl.ga.execute.call(this)
	};
	xl.prototype.ua = function() {
		var a = new S(Ig);
		a.hb(false);
		return a
	};
	xl.prototype.ya = m("Export Molfile");
	xl.prototype.se = f();
	function Al(a) {
		W.call(this, a)
	}
	u(Al, W);
	Al.prototype.ua = function() {
		return new S(Lg)
	};
	Al.prototype.ya = m("Center and Rescale");
	Al.prototype.execute = function() {
		Al.ga.execute.call(this);
		Bl(this.rb)
	};
	function Cl() {
		this.Xa = [];
		this.kb = 0
	}
	Cl.prototype.clear = function() {
		Ta(this.Xa);
		this.kb = 0
	};
	Cl.prototype.Jd = function(a) {
		this.Xa.length === 0 || this.kb === this.Xa.length
				|| this.Xa.splice(this.kb, this.Xa.length - this.kb);
		this.Xa.push(a);
		this.kb += 1
	};
	function Dl() {
		this.Xa = []
	}
	u(Dl, mj);
	Dl.prototype.clear = function() {
		Ta(this.Xa)
	};
	Dl.prototype.Jd = function(a) {
		this.Xa.push(a)
	};
	Dl.prototype.execute = function() {
		for ( var a = 0; a < this.Xa.length; a++)
			this.Xa[a].execute()
	};
	Dl.prototype.ii = function() {
		for ( var a = this.Xa.length - 1; a >= 0; a--)
			this.Xa[a].ii()
	};
	function El() {
		C.call(this);
		this.$ = null;
		this.yb = new Cl;
		this.ve = false;
		this.Wc = 0;
		this.Vc = new Dl;
		this.je = true
	}
	u(El, I);
	p = El.prototype;
	p.clear = function() {
		this.yb.clear();
		this.je = true;
		this.ve = false;
		this.Wc = 0;
		this.Vc.clear();
		this.dispatchEvent(Fl);
		this.dispatchEvent(Gl)
	};
	p.Jd = function(a, b) {
		if (this.Wc === 0) {
			Hl(this, a, b);
			this.dispatchEvent(Il);
			this.dispatchEvent(Gl)
		} else
			throw Error(Jl);
	};
	p.zd = function(a) {
		this.nh();
		this.$ = a;
		this.Vf(a)
	};
	p.ib = function() {
		this.Wc += 1
	};
	p.Gb = function() {
		if (this.Wc === 0)
			throw Error(Kl);
		this.Wc -= 1;
		if (this.Wc === 0 && this.Vc.Xa.length !== 0) {
			this.yb.Jd(this.Vc);
			this.Vc = new Dl
		}
		if (this.Wc === 0) {
			this.dispatchEvent(Il);
			this.dispatchEvent(Gl)
		}
	};
	p.hi = function() {
		if (this.yb.Xa[this.yb.kb - 1] !== undefined) {
			var a;
			a = this.yb;
			if (a = a.Xa[a.kb - 1])
				a = a;
			else
				throw Error("No previous command");
			a.ii();
			a = this.yb;
			if (a.kb > 0)
				a.kb -= 1;
			else
				throw Error("Can not step back");
		} else
			throw Error(Ll);
		this.yb.Xa[this.yb.kb - 1] !== undefined || this.dispatchEvent(Fl);
		this.dispatchEvent(Ml)
	};
	p.Yh = function() {
		if (this.yb.Xa[this.yb.kb] !== undefined) {
			var a;
			a = this.yb;
			if (a = a.Xa[a.kb])
				a = a;
			else
				throw Error("No next command");
			a.execute();
			a = this.yb;
			if (a.kb < a.Xa.length)
				a.kb += 1;
			else
				throw Error("Can not step forward");
		} else
			throw Error(Nl);
		this.yb.Xa[this.yb.kb] !== undefined || this.dispatchEvent(Gl);
		this.dispatchEvent(Il)
	};
	p.bf = function(a) {
		var b = a.target;
		a = t(function() {
			th(this.$.ba, b)
		}, this);
		var c = t(function() {
			vh(this.$.ba, b)
		}, this);
		Ol(this, a, c)
	};
	p.ef = function(a) {
		var b = a.target;
		a = t(function() {
			Dh(this.$.ba, b)
		}, this);
		var c = t(function() {
			wh(this.$.ba, b)
		}, this);
		Ol(this, a, c)
	};
	p.df = function(a) {
		var b = a.target;
		a = t(function() {
			vh(this.$.ba, b)
		}, this);
		var c = t(function() {
			th(this.$.ba, b)
		}, this);
		Ol(this, a, c)
	};
	p.gf = function(a) {
		var b = a.target;
		a = t(function() {
			wh(this.$.ba, b)
		}, this);
		var c = t(function() {
			Dh(this.$.ba, b)
		}, this);
		Ol(this, a, c, b)
	};
	p.cf = function(a) {
		var b = a.target, c = a.wg, d = b.nc();
		Ol(this, function() {
			b.Gf(d)
		}, function() {
			b.Gf(c)
		})
	};
	p.ff = function(a) {
		var b = a.target, c = a.wg, d = b.nc();
		Ol(this, function() {
			b.Gf(d)
		}, function() {
			b.Gf(c)
		})
	};
	function Ol(a, b, c) {
		if (!(a.ve || !a.je))
			if (a.Wc === 0) {
				Hl(a, b, c);
				a.dispatchEvent(Il);
				a.dispatchEvent(Gl)
			} else
				a.Vc.Jd(Pl(a, b, c))
	}
	function Hl(a, b, c) {
		a.Vc.Jd(Pl(a, b, c));
		a.yb.Jd(a.Vc);
		a.Vc = new Dl
	}
	function Pl(a, b, c) {
		var d = new mj;
		d.execute = t(function() {
			this.ve = true;
			b();
			this.ve = false
		}, a);
		d.ii = t(function() {
			this.ve = true;
			c();
			this.ve = false
		}, a);
		return d
	}
	p.Vf = function(a) {
		E(a, uh, this.bf, false, this);
		E(a, xh, this.df, false, this);
		E(a, Eh, this.ef, false, this);
		E(a, Ah, this.gf, false, this);
		E(a, dh, this.cf, false, this);
		E(a, Hf, this.ff, false, this)
	};
	p.nh = function() {
		if (this.$) {
			H(this.$, uh, this.bf, false, this);
			H(this.$, Eh, this.ef, false, this);
			H(this.$, xh, this.df, false, this);
			H(this.$, Ah, this.gf, false, this);
			H(this.$, dh, this.cf, false, this);
			H(this.$, Hf, this.ff, false, this)
		}
		this.Vc = new Dl
	};
	var Ll = "Can not undo", Nl = "Can not redo", Kl = "Not in composite edit", Jl = "In composite edit", Il = "undo-manager-undo-available", Fl = "undo-manager-undo-unavailable", Ml = "undo-manager-redo-available", Gl = "undo-manager-redo-unavailable";
	var Ql = {
		8 : "backspace",
		9 : "tab",
		13 : "enter",
		16 : "shift",
		17 : "ctrl",
		18 : "alt",
		19 : "pause",
		20 : "caps-lock",
		27 : "esc",
		32 : "space",
		33 : "pg-up",
		34 : "pg-down",
		35 : "end",
		36 : "home",
		37 : "left",
		38 : "up",
		39 : "right",
		40 : "down",
		45 : "insert",
		46 : "delete",
		48 : "0",
		49 : "1",
		50 : "2",
		51 : "3",
		52 : "4",
		53 : "5",
		54 : "6",
		55 : "7",
		56 : "8",
		57 : "9",
		59 : "semicolon",
		61 : "equals",
		65 : "a",
		66 : "b",
		67 : "c",
		68 : "d",
		69 : "e",
		70 : "f",
		71 : "g",
		72 : "h",
		73 : "i",
		74 : "j",
		75 : "k",
		76 : "l",
		77 : "m",
		78 : "n",
		79 : "o",
		80 : "p",
		81 : "q",
		82 : "r",
		83 : "s",
		84 : "t",
		85 : "u",
		86 : "v",
		87 : "w",
		88 : "x",
		89 : "y",
		90 : "z",
		93 : "context",
		96 : "num-0",
		97 : "num-1",
		98 : "num-2",
		99 : "num-3",
		100 : "num-4",
		101 : "num-5",
		102 : "num-6",
		103 : "num-7",
		104 : "num-8",
		105 : "num-9",
		106 : "num-multiply",
		107 : "num-plus",
		109 : "num-minus",
		110 : "num-period",
		111 : "num-division",
		112 : "f1",
		113 : "f2",
		114 : "f3",
		115 : "f4",
		116 : "f5",
		117 : "f6",
		118 : "f7",
		119 : "f8",
		120 : "f9",
		121 : "f10",
		122 : "f11",
		123 : "f12",
		186 : "semicolon",
		187 : "equals",
		188 : ",",
		190 : ".",
		191 : "/",
		192 : "~",
		219 : "open-square-bracket",
		220 : "\\",
		224 : "win"
	};
	function Rl(a) {
		C.call(this);
		this.If = {};
		this.ed = {
			ae : [],
			Xj : 0
		};
		this.Nk = Rb(Sl);
		this.oi = true;
		this.ok = this.pk = false;
		this.$k = true;
		this.ac = a;
		E(this.ac, "keydown", this.ue, false, this);
		fb && x && z("1.8") && E(this.ac, "keyup", this.Zi, false, this);
		if (gb && !x) {
			E(this.ac, "keypress", this.dj, false, this);
			E(this.ac, "keyup", this.ej, false, this)
		}
	}
	var Tl;
	u(Rl, I);
	var Sl = [ 27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
			19 ], Ul = {
		ik : "shortcut",
		hk : "shortcut_"
	};
	p = Rl.prototype;
	p.ql = function(a) {
		var b = Vl, c = this.If, d = arguments;
		if (r(d[1])) {
			d = d[1];
			d = d.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ")
					.toLowerCase();
			d = d.split(" ");
			for ( var e = [], g, h = 0; g = d[h]; h++) {
				var i = g.split("+"), j;
				g = 0;
				for ( var l, n = 0; l = i[n]; n++) {
					switch (l) {
					case "shift":
						g |= 1;
						continue;
					case "ctrl":
						g |= 2;
						continue;
					case "alt":
						g |= 4;
						continue;
					case "meta":
						g |= 8;
						continue
					}
					j = l;
					if (!Tl) {
						i = {};
						for ( var o in Ql)
							i[Ql[o]] = o;
						Tl = i
					}
					j = Tl[j];
					break
				}
				e.push({
					keyCode : j,
					wj : g
				})
			}
			d = e
		} else {
			o = d;
			e = 1;
			if (ha(d[1])) {
				o = d[1];
				e = 0
			}
			for (d = []; e < o.length; e += 2)
				d.push({
					keyCode : o[e],
					wj : o[e + 1]
				})
		}
		b(c, d, a)
	};
	p.za = function() {
		Rl.ga.za.call(this);
		this.If = {};
		H(this.ac, "keydown", this.ue, false, this);
		fb && x && z("1.8") && H(this.ac, "keyup", this.Zi, false, this);
		if (gb && !x) {
			H(this.ac, "keypress", this.dj, false, this);
			H(this.ac, "keyup", this.ej, false, this)
		}
		this.ac = null
	};
	p.Zi = function(a) {
		if (a.keyCode == 224) {
			this.vj = true;
			ge(function() {
				this.vj = false
			}, 400, this)
		} else {
			var b = a.metaKey || this.vj;
			if ((a.keyCode == 67 || a.keyCode == 88 || a.keyCode == 86) && b) {
				a.metaKey = b;
				this.ue(a)
			}
		}
	};
	function Wl(a, b) {
		return gb && !x && b.ctrlKey && b.altKey && !b.shiftKey
	}
	p.dj = function(a) {
		if (a.keyCode > 32 && Wl(this, a))
			this.lj = true
	};
	p.ej = function(a) {
		!this.lj && Wl(this, a) && this.ue(a)
	};
	function Vl(a, b, c) {
		var d = b.shift();
		d = d.keyCode & 255 | d.wj << 8;
		var e = a[d];
		if (e && c && (b.length == 0 || r(e)))
			throw Error("Keyboard shortcut conflicts with existing shortcut");
		if (b.length) {
			e || (e = a[d] = {});
			Vl(e, b, c)
		} else
			a[d] = c
	}
	function Xl(a, b, c, d) {
		c = c || 0;
		if ((d = (d || a.If)[b[c]]) && !r(d) && b.length - c > 1)
			return Xl(a, b, c + 1, d);
		return d
	}
	p.ue = function(a) {
		if (Yl(this, a))
			if (a.type == "keydown" && Wl(this, a))
				this.lj = false;
			else {
				var b = a.keyCode
						& 255
						| ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0)
								| (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8, c, d, e = ra();
				if (this.ed.ae.length && e - this.ed.Xj <= 1500)
					c = Xl(this, this.ed.ae);
				else
					this.ed.ae.length = 0;
				c = c ? c[b] : this.If[b];
				if (!c) {
					c = this.If[b];
					this.ed.ae = []
				}
				if (c && r(c))
					d = c;
				else if (c) {
					this.ed.ae.push(b);
					this.ed.Xj = e;
					x && a.preventDefault()
				} else
					this.ed.ae.length = 0;
				if (d) {
					this.oi && a.preventDefault();
					this.pk && a.stopPropagation();
					c = a.target;
					b = this.dispatchEvent(new Zl(Ul.ik, d, c));
					d = new Zl(Ul.hk + d, d, c);
					b &= this.dispatchEvent(d);
					b || a.preventDefault();
					this.ed.ae.length = 0
				}
			}
	};
	function Yl(a, b) {
		var c = b.keyCode;
		if (c == 16 || c == 17 || c == 18)
			return false;
		var d = b.target, e = d.tagName == "TEXTAREA" || d.tagName == "INPUT"
				|| d.tagName == "BUTTON" || d.tagName == "SELECT", g = !e
				&& (d.isContentEditable || d.ownerDocument
						&& d.ownerDocument.designMode == "on");
		if (!e && !g)
			return true;
		if (a.Nk[c] || a.ok)
			return true;
		if (g)
			return false;
		if (a.$k && (b.altKey || b.ctrlKey || b.metaKey))
			return true;
		if (d.tagName == "INPUT" && (d.type == "text" || d.type == "password"))
			return c == 13;
		if (d.tagName == "INPUT" || d.tagName == "BUTTON")
			return c != 32;
		return false
	}
	function Zl(a, b, c) {
		D.call(this, a, c);
		this.identifier = b
	}
	u(Zl, D);
	function $l(a) {
		this.rb = a;
		this.ac = a.aa();
		this.sm = this.tb = false;
		this.Kh = new Rl(document);
		this.Kh.oi = false;
		this.ld = {};
		if (!nb) {
			E(this.ac, "mouseover", this.Sk, false, this);
			E(this.ac, "mouseout", this.Rk, false, this);
			E(this.Kh, "shortcut", this.Jk, false, this)
		}
	}
	function am(a, b) {
		if (b.se()) {
			var c = s(b).toString();
			a.Kh.ql(c, b.se());
			a.ld[c] = b
		}
	}
	$l.prototype.Sk = function(a) {
		if (!this.og(a))
			this.tb = true
	};
	$l.prototype.Rk = function(a) {
		if (!this.og(a))
			this.tb = false
	};
	$l.prototype.Jk = function(a) {
		if (!(!this.tb || (this.rb.Za.Ea ? this.rb.Za.Ea.length : 0))) {
			var b = this.ld[a.identifier];
			if (b && b.Ka()) {
				b.execute();
				a.stopPropagation();
				a.preventDefault()
			}
		}
	};
	$l.prototype.og = function(a) {
		return !!a.relatedTarget && gc(this.ac, a.relatedTarget)
	};
	function bm(a, b) {
		this.Nh = a;
		this.Ci = b
	}
	bm.prototype.Nh = undefined;
	bm.prototype.Ci = undefined;
	function cm() {
		dm(this)
	}
	cm.prototype.xd = function(a, b, c) {
		if (a === undefined)
			throw new bm(undefined, "Undefined molfile");
		if (a === "")
			throw new bm(undefined, "Blank molfile");
		dm(this);
		if (b)
			this.ba = b;
		this.ba.clear();
		this.ud = a;
		this.Kj = this.ud.search(em) !== -1 ? false : true;
		this.ll = this.ud.search(fm) !== -1 ? false : true;
		this.Aa = this.ud.split("\r\n").join("\n").split("\n");
		this.Yd = this.Aa[0];
		try {
			this.De = this.Aa[1].slice(0, 2);
			this.Ph = this.Aa[1].slice(2, 8);
			var d = Y(this.Aa[1].slice(11, 12), 2) - 1, e = Y(this.Aa[1].slice(
					12, 14), 2);
			this.Bc.setFullYear(2E3 + Y(this.Aa[1].slice(14, 16), 2), d, e)
		} catch (g) {
			this.Ed.push(gm)
		}
		this.al = this.Aa[2];
		var h, i, j;
		try {
			h = this.Aa[3].slice(0, 3);
			i = this.Aa[3].slice(3, 6);
			j = this.Aa[3].slice(12, 15);
			this.fg = this.Aa[3].slice(33, 39).match(hm)[0]
		} catch (l) {
			throw new bm(4, "Invalid Input");
		}
		this.vd = Y(h, 4);
		this.xf = Y(i, 4);
		this.wk = Y(j) == true;
		this.fg !== "V2000" && this.Ed.push(im);
		if (this.Aa.length < 5 + this.vd + this.xf || this.Aa.length < 5)
			throw new bm(undefined, "Incomplete Molfile");
		jm(this, c);
		km(this);
		lm(this);
		return this.ba
	};
	cm.prototype.getName = k("Yd");
	cm.prototype.getDate = k("Bc");
	function mm(a, b) {
		if (a.search(nm) === -1)
			return a.match(hm)[0];
		else
			throw new bm(b, "Expected Letters");
	}
	function Y(a, b) {
		var c = Number(a);
		if (isNaN(c))
			throw new bm(b, "Could not convert string to number: [" + a + "]");
		return c
	}
	function dm(a) {
		a.ba = new qh;
		a.fg = "";
		a.Yd = "";
		a.De = "";
		a.Ph = "";
		a.Bc = new Date;
		a.al = "";
		a.vd = 0;
		a.xf = 0;
		a.wm = 0;
		a.wk = false;
		a.Kj = true;
		a.ll = true;
		a.ud = "";
		a.Aa = [];
		a.Ed = []
	}
	function jm(a, b) {
		var c = Ya(a.Aa, 4, 4 + a.vd);
		Pa(c, t(function(d, e, g) {
			d = g + 5;
			var h = mm(e.slice(31, 34), d), i = Y(e.slice(0, 10), d), j = Y(e
					.slice(10, 20), d), l = Y(e.slice(20, 30), d), n = Y(e
					.slice(34, 36), d);
			g = Y(e.slice(36, 39), d);
			Y(e.slice(39, 42), d);
			Y(e.slice(48, 51), d);
			if (h === "*")
				h = new nh;
			else if (h === "L") {
				h = new nh;
				Lj(h, new Jj)
			} else if (h === "R#")
				h = new nh;
			if (b) {
				i *= b;
				j *= b;
				l *= b
			}
			e = this.ba.Bb(h, i, j, l);
			if (n) {
				i = Ug[e.ka];
				h = i[1];
				i = Ma(h, i[0]);
				eh(e, h[i + n])
			}
			if (this.Kj) {
				h = n = 0;
				switch (g) {
				case 0:
					n = 0;
					break;
				case 1:
					n = 3;
					break;
				case 2:
					n = 2;
					break;
				case 3:
					n = 1;
					break;
				case 4:
					n = 0;
					h = 2;
					break;
				case 5:
					n = -1;
					break;
				case 6:
					n = -2;
					break;
				case 7:
					n = -3;
					break;
				default:
					this.Ed.push(om + d)
				}
				bh(e, n);
				if (!Mb(ph, h))
					throw Error("Invalid radical");
				e.Cg = h
			}
		}, a))
	}
	function km(a) {
		var b = Ya(a.Aa, 4 + a.vd, 4 + a.vd + a.xf);
		Pa(
				b,
				t(
						function(c, d, e) {
							c = e + 5 + this.vd;
							e = Y(d.slice(0, 3), c);
							var g = Y(d.slice(3, 6), c), h = Y(d.slice(6, 9), c);
							if (h === 8)
								h = new Cf;
							d = Y(d.slice(9, 12), c);
							if (!(d === P.Hd || d === P.Id || d === P.Qg
									|| d === P.ee || d === P.Fd))
								throw new bm(c, "Unsupported Bond Stereo: " + d);
							Gf(this.ba.pb(this.ba.na[e - 1], this.ba.na[g - 1],
									h), d)
						}, a))
	}
	function lm(a) {
		var b = Ya(a.Aa, 4 + a.vd + a.xf, a.Aa.length), c = false;
		(b = Pa(b, t(function(d, e, g, h) {
			if (c)
				return false;
			else if (e === "M  END") {
				c = true;
				return false
			} else
				return pm(this, d, e, g, h)
		}, a), true)) && a.Ed.push(qm);
		return b
	}
	function pm(a, b, c, d) {
		var e = d + 5 + a.vd + a.xf;
		if (c.search(rm) !== -1)
			sm(a, c, e);
		else if (c.search(tm) === -1) {
			d = function(g, h, i) {
				var j = [];
				if (h.length > 1 + 8 * (g + 1))
					i.Ed.push(om + e);
				else
					h.length < 1 + 8 * (g + 1) && i.Ed.push(um + e);
				for ( var l = 0; l < g; l++) {
					i = h.slice(9 + l * 8, 17 + l * 8);
					i.length === 8 && j.push(i)
				}
				return Oa(j, function(n) {
					var o = [];
					o.push(Y(n.slice(0, 4), e));
					o.push(Y(n.slice(4, 8), e));
					return o
				})
			}(Y(c.slice(6, 9)), c, a);
			if (b)
				if (c.search(vm) !== -1)
					return false;
				else if (c.search(fm) !== -1) {
					b = function(g) {
						eh(a.ba.na[g[0] - 1], g[1])
					};
					Na(d, b);
					return true
				} else if (c.search(wm) !== -1) {
					b = function(g) {
						bh(a.ba.na[g[0] - 1], g[1])
					};
					Na(d, b);
					return true
				} else if (c.search(xm) !== -1) {
					b = function(g) {
						var h = g[1];
						if (!Mb(ph, h))
							throw Error("Invalid radical");
						a.ba.na[g[0] - 1].Cg = h
					};
					Na(d, b);
					return true
				} else if (c.search(ym) !== -1) {
					b = function(g) {
						Kj(a.ba.na[g[0] - 1].ka, g[1])
					};
					Na(d, b)
				} else {
					c === "" ? a.Ed.push(zm + e) : a.Ed.push(om + e);
					return true
				}
			else
				return b
		}
	}
	function sm(a, b, c) {
		var d = Y(b.slice(7, 10), c), e = Y(b.slice(10, 13), c);
		b.slice(14, 15);
		for ( var g = 0; g < e; g++) {
			var h = 16 + g * 4;
			h = mm(b.slice(h, h + 4), c);
			lh(a.ba.na[d - 1].ka.Ya, h)
		}
	}
	var gm = "Invalid header", om = "Property ignored at line: ", qm = 'Incomple molfile, "M  END" not found.', im = "Unrecognized format, attempting to read as V2000.", zm = "Blank line at line: ", um = "Short property line at line: ", nm = /[^a-zA-Z\*\# ]/, hm = /[\w\*\#]+/, vm = /^M  END/, wm = /^M  CHG/, fm = /^M  ISO/, xm = /^M  RAD/, rm = /^M  ALS/, ym = /^M  RGP/, tm = /^M  STY/, em = /^M  CHG|^M  RAD/m;
	function Am(a) {
		this.qi = a;
		this.lg = 0
	}
	function Bm(a, b) {
		if (b < 0 || a.lg + b > a.qi.length)
			return null;
		var c = a.lg + b, d = a.qi.slice(a.lg, c);
		a.lg = c;
		return d
	}
	;
	function Cm(a) {
		if (a.length !== 2)
			throw Error(Dm);
		return a[1] * 256 + a[0]
	}
	function Em(a) {
		a = Cm(a);
		return a < 32768 ? a : a - 65536
	}
	function Fm(a) {
		if (a.length !== 4)
			throw Error(Dm);
		return a[3] * 16777216 + a[2] * 65536 + a[1] * 256 + a[0]
	}
	function Gm(a) {
		a = Fm(a);
		return a < 2147483648 ? a : a - 4294967296
	}
	var Dm = "The argument supplied is not the right length to be a number representation";
	function Hm(a) {
		return a !== undefined ? Im(this, Fm(a)) : null
	}
	function Jm(a, b) {
		return function(c) {
			return c !== undefined ? a(c) : b
		}
	}
	;
	function Nm() {
	}
	fa(Nm);
	var fn = {
		512 : Jm(function(a) {
			return new Ib(Gm(a.slice(4)), Gm(a.slice(0, 4)))
		}, null),
		1024 : Jm(Em, 1),
		1026 : Jm(Em, 6),
		1057 : Jm(function(a) {
			if (a.length !== 1)
				throw Error(Dm);
			a = a[0];
			return a < 128 ? a : a - 256
		}, 0),
		1536 : Jm(Cm, 1),
		1537 : Jm(Cm, 0),
		1540 : Hm,
		1541 : Hm,
		1792 : Jm(function(a) {
			var b = a.slice(0, 2);
			if (b.length !== 2)
				return "";
			b = Cm(b);
			return String.fromCharCode.apply(null, a.slice(2 + 10 * b))
		}, null),
		1798 : function(a, b, c) {
			return function(d) {
				return d !== undefined ? a(d) : this.Fa ? this.Fa.lb(b) : c
			}
		}(Em, 1798, 0)
	};
	function gn(a, b) {
		this.yl = a;
		this.xm = b;
		this.kl = [];
		this.Ij = {};
		this.Ea = [];
		this.fh = {};
		this.Af = {};
		if (b !== 0)
			this.Af[b] = this;
		this.Fa = null
	}
	function hn(a, b, c) {
		a.kl.push({
			Bm : b,
			data : c
		});
		a.Ij[b] = c
	}
	gn.prototype.Ha = function(a) {
		this.Ea.push(a);
		var b = a.yl, c = this.fh[b] || [];
		this.fh[b] = c;
		c.push(a);
		a.Fa = this;
		jn(this, a.Af)
	};
	gn.prototype.Vi = k("Ea");
	function jn(a, b) {
		for ( var c in b)
			a.Af[c] = b[c];
		a.Fa && jn(a.Fa, b)
	}
	function Im(a, b) {
		if (b === 0)
			return null;
		else if (b in a.Af)
			return a.Af[b];
		return a.Fa ? Im(a.Fa, b) : null
	}
	gn.prototype.lb = function(a) {
		if (a < 32768) {
			var b;
			Nm.Hb();
			b = fn[a] || null;
			if (b === null)
				throw Error(kn);
			a = this.Ij[a];
			try {
				return b.call(this, a)
			} catch (c) {
				throw Error(ln);
			}
		} else
			return this.fh[a] || []
	};
	var kn = "Unsupported property/object tag ID", ln = "Invalid property value";
	var mn = null, nn = null, on = null, pn = null;
	function qn(a, b) {
		if (!mn) {
			mn = {};
			nn = {};
			on = {};
			pn = {};
			for ( var c = 0; c < 65; c++) {
				mn[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
						.charAt(c);
				nn[mn[c]] = c;
				on[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."
						.charAt(c);
				pn[on[c]] = c
			}
		}
		c = b ? pn : nn;
		for ( var d = [], e = 0; e < a.length;) {
			var g = c[a.charAt(e++)], h = e < a.length ? c[a.charAt(e)] : 0;
			++e;
			var i = e < a.length ? c[a.charAt(e)] : 0;
			++e;
			var j = e < a.length ? c[a.charAt(e)] : 0;
			++e;
			if (g == null || h == null || i == null || j == null)
				throw Error();
			d.push(g << 2 | h >> 4);
			if (i != 64) {
				d.push(h << 4 & 240 | i >> 2);
				j != 64 && d.push(i << 6 & 192 | j)
			}
		}
		return d
	}
	;
	function rn() {
		this.Pi = [ 86, 106, 67, 68, 48, 49, 48, 48, 4, 3, 2, 1 ]
	}
	rn.prototype.xd = function(a) {
		var b;
		try {
			b = qn(a)
		} catch (c) {
			throw Error(sn);
		}
		a = new Am(b);
		b = Bm(a, this.Pi.length);
		var d = t(function(e, g) {
			return e !== this.Pi[g]
		}, this);
		if (!b || Qa(b, d))
			throw Error(tn);
		if (!Bm(a, 16))
			throw Error(tn);
		b = new gn(32768, 0);
		un(this, a, b);
		return b
	};
	function vn(a, b) {
		var c = Bm(b, 2);
		if (c === null)
			throw Error(wn);
		c = Cm(c);
		if (c === 65535) {
			c = Bm(b, 4);
			if (c === null)
				throw Error(wn);
			c = Fm(c)
		}
		c = Bm(b, c);
		if (c === null)
			throw Error(wn);
		return c
	}
	function un(a, b, c) {
		var d = 0;
		function e() {
			var h = Bm(b, 2);
			if (h === null)
				throw Error(wn);
			return d = Cm(h)
		}
		for (; e() !== 0;)
			if (d < 32768)
				hn(c, d, vn(a, b));
			else {
				var g = Bm(b, 4);
				if (g === null)
					throw Error(wn);
				g = new gn(d, Fm(g));
				un(a, b, g);
				c.Ha(g)
			}
	}
	var sn = "The provided string is not in valid Base64-encoding", tn = "The file does not have a CDX header", wn = "The CDX file is not well-formed";
	function xn() {
		this.nl = new rn
	}
	xn.prototype.xd = function(a) {
		if (!a)
			throw Error(yn);
		var b = this.nl.xd(a).lb(32769);
		a = new Xh;
		if (b.length === 0)
			return a;
		var c = b[0].lb(32771)[0];
		b = c.lb(32772);
		for ( var d = 0; d < b.length; d++) {
			var e = a, g = b[d], h = void 0;
			h = g.lb(32774);
			h = h[0] ? h[0].lb(1792).match(/[A-Z][a-z]{0,2}/)[0] : "C";
			var i = void 0;
			i = g.lb(512);
			i = [ i.x / 1E5, -i.y / 1E5 ];
			e = e.ba.Bb(h, i[0], i[1]);
			(g = g.lb(1057)) && bh(e, g)
		}
		c = c.lb(32773);
		for (d = 0; d < c.length; d++) {
			h = b;
			g = a;
			e = c[d];
			i = Ma(h, e.lb(1540));
			var j = Ma(h, e.lb(1541));
			h = void 0;
			h = e.lb(1536);
			var l = undefined;
			switch (h) {
			case Q.Ma:
				l = Q.Ma;
				break;
			case 2:
				l = Q.wb;
				break;
			case 4:
				l = Q.Pf;
				break;
			default:
				throw Error(zn);
			}
			h = l;
			i = g.ba.na[i];
			j = g.ba.na[j];
			l = void 0;
			e = e.lb(1537);
			l = P.Hd;
			if (e)
				switch (e) {
				case 3:
					l = P.Fd;
					break;
				case 4:
					l = P.Fd;
					break;
				case 6:
					l = P.Id;
					break;
				case 7:
					l = P.Id;
					break;
				default:
					throw Error(zn);
				}
			l = l;
			g.ba.pb(i, j, h, l)
		}
		return a
	};
	var yn = "cdx-reader-file-invalid", zn = "cdx-reader-unsupported-feature";
	function An(a) {
		W.call(this, a)
	}
	u(An, W);
	An.prototype.execute = function() {
		var a;
		if (a = kf()) {
			a = ef();
			a = a.Ja ? a.af === undefined : false;
			a = !a
		}
		if (a) {
			var b = this.rb;
			a = ef();
			if (a.af !== undefined)
				a.copy();
			else if ((new Bn(document)).lb("chemwriter-has-accepted-applet")) {
				b = b.Jc();
				sd(a, b);
				a.copy()
			} else
				(new Cn(b)).show(b.Za)
		} else {
			a = this.rb;
			(new Dn(a)).show(a.Za)
		}
		An.ga.execute.call(this)
	};
	An.prototype.ua = function() {
		var a = new S(Jg);
		a.hb(false);
		return a
	};
	An.prototype.ya = function() {
		if (kf()) {
			var a;
			switch (mf()) {
			case nf:
				a = "Control+v";
				break;
			case qf:
				a = "Command+v";
				break;
			case rf:
				a = "Control+v";
				break
			}
			return "Paste Molfile [" + a + "]"
		}
		return "Import Molfile"
	};
	An.prototype.se = function() {
		if (kf())
			switch (mf()) {
			case nf:
				return "ctrl+v";
			case qf:
				return "meta+v";
			case rf:
				return "ctrl+v"
			}
	};
	function En(a) {
		W.call(this, a)
	}
	u(En, W);
	En.prototype.execute = function() {
		En.ga.execute.call(this);
		this.rb.mi()
	};
	En.prototype.ya = m("Zoom In [Mouse Wheel Forward]");
	En.prototype.ua = function() {
		return new S(Ag)
	};
	function Fn(a) {
		W.call(this, a)
	}
	u(Fn, W);
	Fn.prototype.execute = function() {
		Fn.ga.execute.call(this);
		this.rb.ni()
	};
	Fn.prototype.ya = m("Zoom Out [Mouse Wheel Backward]");
	Fn.prototype.ua = function() {
		return new S(Bg)
	};
	function Gn(a) {
		J.call(this, a);
		this.Hi = new Yd("Dismiss", undefined, a);
		this.Ha(this.Hi, true)
	}
	u(Gn, J);
	Gn.prototype.ad = k("Hi");
	Gn.prototype.la = function() {
		this.ia = B("div", {
			"class" : "button-panel"
		})
	};
	function Hn(a) {
		J.call(this, a)
	}
	u(Hn, J);
	Hn.prototype.la = function() {
		this.ia = B("div", {
			"class" : "content-panel"
		})
	};
	Hn.prototype.Cb = function(a) {
		this.$b().append(this.aa(), a)
	};
	function In(a, b) {
		J.call(this, b);
		this.rb = a;
		this.mc = "#000000";
		this.Ee = 0.8;
		this.Ei = new Hn;
		this.he = new Gn;
		this.Ha(this.Ei, true);
		this.Ha(this.he, true)
	}
	u(In, J);
	p = In.prototype;
	p.show = function(a) {
		fg(a, "translucent");
		a.Ha(this, true)
	};
	p.la = function() {
		this.ia = B("div", {
			"class" : "dialog"
		})
	};
	p.xa = function() {
		In.ga.xa.call(this);
		this.Cb(this.Ei);
		this.mb()
	};
	p.mb = function() {
		E(this.he.ad(), "action", this.bg, false, this)
	};
	p.Qb = function() {
		H(this.he.ad(), "action", this.bg, false, this)
	};
	p.bg = function() {
		var a = this.Fa;
		a.removeChild(this, true);
		fg(a, ig);
		this.Qb()
	};
	p.Cb = f();
	p.ad = function() {
		return this.he.ad()
	};
	function Jn() {
		this.wf = "Application Name";
		this.vi = [];
		this.Ze = "0.0.0";
		this.Mj = "aaaaaaaa";
		this.ji = "http://metamolecular.com";
		this.zk = (new Date).getFullYear()
	}
	fa(Jn);
	Jn.prototype.getName = k("wf");
	Jn.prototype.bi = aa("wf");
	function il(a, b) {
		In.call(this, a, b);
		this.ad().Me("Done")
	}
	u(il, In);
	il.prototype.Cb = function(a) {
		var b = Jn.Hb(), c = this.$b(), d = c.la("div", {
			"class" : "content"
		});
		c.append(d, cc('<div class="program-name">' + b.getName()
				+ '<span class="super">&trade;</span></div>'));
		c.append(d, cc('<div class="version">Version: ' + b.Ze + "</div>"));
		c.append(d, cc('<div class="version">Revision: ' + b.Mj + "</div>"));
		c.append(d, cc('<div class="credits">Created By: ' + b.vi.join("; ")
				+ "</div>"));
		c
				.append(
						d,
						cc('<div class="copyright">&copy; 2007-'
								+ b.zk
								+ '&nbsp;<a href="http://metamolecular.com" target="_blank">Metamolecular, LLC</a></div>'));
		c.append(d, cc('<div class="learnmore">Learn more at <a href="' + b.ji
				+ '" target="_blank">' + b.ji.replace("http://", "")
				+ "</a></div>"));
		a.Cb(d)
	};
	function Kn(a) {
		var b = a.type;
		if (b === undefined)
			return null;
		switch (b.toLowerCase()) {
		case "checkbox":
		case "radio":
			return a.checked ? a.value : null;
		case "select-one":
			b = a.selectedIndex;
			return b >= 0 ? a.options[b].value : null;
		case "select-multiple":
			b = [];
			for ( var c, d = 0; c = a.options[d]; d++)
				c.selected && b.push(c.value);
			return b.length ? b : null;
		default:
			return a.value !== undefined ? a.value : null
		}
	}
	;
	function Dn(a, b) {
		In.call(this, a, b);
		this.Eh = new Yd("Import", undefined, b);
		this.hc = undefined;
		td(this.he, this.Eh, 0, true);
		this.ad().Me("Cancel")
	}
	u(Dn, In);
	Dn.prototype.Cb = function(a) {
		var b = this.$b(), c = b.la("div", {
			"class" : "content"
		}), d = b.la("div", {
			"class" : "title"
		}), e = cc("<p>Import File</p>");
		this.hc = b.createElement("textarea");
		this.hc.setAttribute("wrap", "off");
		this.hc.setAttribute("spellcheck", "false");
		b.append(d, e);
		b.append(c, d);
		b.append(c, this.hc);
		a.Cb(c)
	};
	Dn.prototype.Qb = function() {
		Dn.ga.Qb.call(this);
		H(this.Eh, "action", this.gj, false, this)
	};
	Dn.prototype.mb = function() {
		Dn.ga.mb.call(this);
		E(this.Eh, "action", this.gj, false, this)
	};
	Dn.prototype.gj = function() {
		this.Qb();
		this.bg();
		this.rb.Ad(Kn(this.hc))
	};
	function Ln(a, b, c, d) {
		In.call(this, a, d);
		this.ne = b;
		this.ud = c
	}
	u(Ln, In);
	Ln.prototype.Cb = function(a) {
		for ( var b = this.$b(), c = b.la("div", {
			"class" : "content"
		}), d = b.la("div", {
			"class" : "error-cause"
		}), e = cc("<p>" + this.ne.Ci + "</p>"), g = b.la("div", {
			"class" : "error"
		}), h = "", i = this.ud.split("\n"), j = 0; j < i.length; j++) {
			line = ua(i[j]).replace(/  /g, " &#160;").replace(/(\r\n|\r|\n)/g,
					"<br>");
			h += this.ne.Nh && this.ne.Nh === j + 1 ? '<div class="error-line">'
					+ line + "</div>"
					: "<div>" + line + "</div>"
		}
		b.append(g, cc('<div class="trace">' + h + "</div>"));
		b.append(d, e);
		b.append(c, d);
		b.append(c, g);
		a.Cb(c)
	};
	function yl(a, b, c) {
		In.call(this, a, c);
		this.ud = b;
		this.ad().Me("Done")
	}
	u(yl, In);
	yl.prototype.Cb = function(a) {
		var b = this.$b(), c = b.la("div", {
			"class" : "content"
		}), d = b.la("div", {
			"class" : "title"
		}), e = cc("<p>Export Molfile</p>"), g = b.createElement("textarea");
		g.setAttribute("wrap", "off");
		g.setAttribute("spellcheck", "false");
		g.setAttribute("readonly", "true");
		b.append(d, e);
		b.append(c, d);
		b.append(c, g);
		b = this.ud;
		d = g.type;
		if (d !== undefined)
			switch (d.toLowerCase()) {
			case "checkbox":
			case "radio":
				g.checked = b ? "checked" : null;
				break;
			case "select-one":
				g.selectedIndex = -1;
				if (r(b))
					for (e = 0; d = g.options[e]; e++)
						if (d.value == b) {
							d.selected = true;
							break
						}
				break;
			case "select-multiple":
				b = b;
				if (r(b))
					b = [ b ];
				for (e = 0; d = g.options[e]; e++) {
					d.selected = false;
					if (b)
						for ( var h, i = 0; h = b[i]; i++)
							if (d.value == h)
								d.selected = true
				}
				break;
			default:
				g.value = b != null ? b : ""
			}
		a.Cb(c);
		g.select()
	};
	function Cn(a, b) {
		In.call(this, a, b);
		this.ad().Me("No");
		this.Vh = new Yd("Yes", undefined, b);
		td(this.he, this.Vh, 0, true)
	}
	u(Cn, In);
	p = Cn.prototype;
	p.Cb = function(a) {
		var b = this.$b(), c = b.la("div", {
			"class" : "content"
		});
		b
				.append(
						c,
						cc('<div class="message"><p>Paste structures from drawing application?</p></div>'));
		a.Cb(c)
	};
	p.Qb = function() {
		Cn.ga.Qb.call(this);
		H(this.Vh, "action", this.Dj, false, this)
	};
	p.mb = function() {
		Cn.ga.mb.call(this);
		E(this.Vh, "action", this.Dj, false, this);
		E(this.ad(), "action", this.Hk, false, this)
	};
	p.Dj = function() {
		this.bg();
		var a = ef();
		a.Ja || this.rb.Ha(a, true);
		a.copy()
	};
	p.Hk = function() {
		var a = this.rb;
		(new Dn(a)).show(a.Za)
	};
	function zl(a, b, c) {
		In.call(this, a, c);
		this.Oh = b
	}
	u(zl, In);
	zl.prototype.Cb = function(a) {
		var b = this.$b(), c = b.la("div", {
			"class" : "content"
		});
		b.append(c, cc('<div class="message"><p>' + this.Oh + "</p></div>"));
		a.Cb(c)
	};
	function Bn(a) {
		this.$ = a
	}
	var Mn = /\s*;\s*/;
	p = Bn.prototype;
	p.Ka = function() {
		var a = navigator.cookieEnabled;
		if (a && y) {
			var b = "COOKIES_TEST_" + ra();
			Nn.gd(b, "1");
			if (!this.lb(b))
				return false;
			this.remove(b)
		}
		return a
	};
	p.gd = function(a, b, c, d, e, g) {
		if (/[;=\s]/.test(a))
			throw Error('Invalid cookie name "' + a + '"');
		if (/[;\r\n]/.test(b))
			throw Error('Invalid cookie value "' + b + '"');
		c !== undefined || (c = -1);
		e = e ? ";domain=" + e : "";
		d = d ? ";path=" + d : "";
		g = g ? ";secure" : "";
		c = c < 0 ? "" : c == 0 ? ";expires="
				+ (new Date(1970, 1, 1)).toUTCString() : ";expires="
				+ (new Date(ra() + c * 1E3)).toUTCString();
		this.$.cookie = a + "=" + b + e + d + c + g
	};
	p.lb = function(a, b) {
		for ( var c = a + "=", d = (this.$.cookie || "").split(Mn), e = 0, g; g = d[e]; e++)
			if (g.indexOf(c) == 0)
				return g.substr(c.length);
		return b
	};
	p.remove = function(a, b, c) {
		var d = this.ih(a);
		this.gd(a, "", 0, b, c);
		return d
	};
	p.gg = function() {
		return On(this).mj
	};
	p.of = function() {
		return On(this).Kl
	};
	p.gb = function() {
		return !this.$.cookie
	};
	p.ih = function(a) {
		return this.lb(a) !== undefined
	};
	p.clear = function() {
		for ( var a = On(this).mj, b = a.length - 1; b >= 0; b--)
			this.remove(a[b])
	};
	function On(a) {
		a = (a.$.cookie || "").split(Mn);
		for ( var b = [], c = [], d, e, g = 0; e = a[g]; g++) {
			d = e.indexOf("=");
			if (d == -1) {
				b.push("");
				c.push(e)
			} else {
				b.push(e.substring(0, d));
				c.push(e.substring(d + 1))
			}
		}
		return {
			mj : b,
			Kl : c
		}
	}
	var Nn = new Bn(document);
	Nn.Wl = 3950;
	function Z(a, b, c, d) {
		J.call(this, d);
		this.Za = new Rg("glass-pane", true);
		this.$ = a || new Xh;
		this.ja = b || new Sf;
		this.Gj = new Qg(this.ja, this.Za);
		this.ma = new ej(this.$);
		this.hl = new lj;
		this.eh = new kj;
		this.Ie = this.Ye = this.rm = undefined;
		this.ic = new El;
		this.Ji = 1;
		this.ic.zd(this.$);
		E(this.ic, Il, this.Il, false, this);
		E(this.ic, Fl, this.Jl, false, this);
		E(this.ic, Ml, this.ol, false, this);
		E(this.ic, Gl, this.pl, false, this);
		E(this.ja, Xf, this.Lf, false, this);
		E(this.ja, Wf, this.Mf, false, this);
		a = new sj;
		c = Pn(this, c);
		b = new Dj;
		d = new Fj("N");
		R(b.ja, new Fj("C"));
		R(b.ja, new Fj("H"));
		R(b.ja, d);
		R(b.ja, new Fj("O"));
		R(b.ja, new Fj("P"));
		R(b.ja, new Fj("S"));
		R(b.ja, new Fj("F"));
		R(b.ja, new Fj("Cl"));
		R(b.ja, new Fj("Br"));
		R(b.ja, new Fj("I"));
		R(b.ja, new Fj("Si"));
		R(b.ja, new Fj("Sn"));
		Uf(b.ja, d);
		R(this.ja, new uj);
		R(this.ja, new nj(this.ma));
		R(this.ja, b);
		R(this.ja, c);
		R(this.ja, new yj);
		R(this.ja, a);
		R(this.ja, new zj);
		R(this.ja, new Gj);
		R(this.ja, new vj(8));
		R(this.ja, new Hj);
		R(this.ja, new vj(7));
		R(this.ja, new Ij);
		R(this.ja, new vj(4));
		R(this.ja, new vj(6));
		R(this.ja, new vj(3));
		R(this.ja, new vj(5));
		Uf(this.ja, a)
	}
	u(Z, J);
	p = Z.prototype;
	p.qj = null;
	p.Zk = null;
	p.Sj = function(a) {
		this.qj = a;
		Qn(this)
	};
	p.hi = function() {
		this.ic.hi()
	};
	p.Yh = function() {
		this.ic.Yh()
	};
	p.xh = function() {
		return (new kl).write(this.$.ba, "[NO NAME]",
				"Created with ChemWriter - http://chemwriter.com", this.Ji)
	};
	p.mf = function(a) {
		if (a !== "chemical/x-mdl-molfile")
			throw Error("Unknown MIME type");
		return this.xh()
	};
	p.Ad = function(a) {
		if (a.lastIndexOf("VmpDRDAx", 0) == 0)
			a: {
				var b = new xn, c = undefined;
				try {
					c = b.xd(a)
				} catch (d) {
					if (d.message === zn) {
						this
								.message("Your ChemDraw structure contains features that can't be processed.");
						break a
					} else
						throw d;
				}
				this.Fg(c)
			}
		else
			this.Tj(a)
	};
	p.Tj = function(a) {
		var b = new Xh, c = new cm;
		try {
			c.xd(a, b.ba)
		} catch (d) {
			if (d instanceof bm) {
				if (d instanceof bm)
					(new Ln(this, d, a)).show(this.Za);
				else
					throw d;
				return
			} else
				throw d;
		}
		this.Fg(b)
	};
	p.message = function(a) {
		(new zl(this, a)).show(this.Za)
	};
	p.clear = function() {
		if (!this.Hh()) {
			this.ic.ib();
			this.$.clear();
			this.ic.Gb()
		}
	};
	p.Hh = function() {
		return this.$.gb()
	};
	p.zc = function() {
		return this.ma.zc()
	};
	p.wc = function(a) {
		this.ma.wc(a)
	};
	p.qd = function() {
		return this.ma.qd()
	};
	p.Td = function() {
		return this.ma.Td()
	};
	p.vc = function(a) {
		this.ma.vc(a)
	};
	p.jd = function(a) {
		this.ma.jd(a)
	};
	p.pd = function() {
		return this.ma.pd()
	};
	p.hd = function(a) {
		this.ma.hd(a)
	};
	p.re = function() {
		return this.ma.re()
	};
	p.Oe = function(a) {
		this.ma.Oe(a);
		Bl(this)
	};
	function Bl(a) {
		var b = a.$.gb() && pf() ? pf() ? 5 : undefined : Qf(a.$.ba);
		a.$.db.Pc(b);
		a.ma.Pc(b);
		gj(a.ma, b);
		a.ma.Ld()
	}
	p.Ld = function() {
		this.$.gb() || this.ma.Ld()
	};
	p.Uf = function() {
		this.$.gb() || this.ma.Uf()
	};
	p.mi = function() {
		this.ma.mi()
	};
	p.ni = function() {
		this.ma.ni()
	};
	p.la = function() {
		this.ia = B("div", {
			"class" : "editor"
		})
	};
	p.xa = function() {
		Z.ga.xa.call(this);
		this.Ig = new $l(this);
		this.ec = new Xk;
		this.Ye = new fl(this);
		this.Ye.Da(false);
		this.Ie = new gl(this);
		this.Ie.Da(false);
		var a = new el(this), b = new xl(this), c = new An(this), d = new hl(
				this), e = new Al(this), g = new En(this), h = new Fn(this);
		am(this.Ig, this.Ye);
		am(this.Ig, this.Ie);
		am(this.Ig, b);
		am(this.Ig, c);
		Yk(this.ec, this.Ye);
		Yk(this.ec, this.Ie);
		Yk(this.ec, e);
		Yk(this.ec, g);
		Yk(this.ec, h);
		Yk(this.ec, a);
		Yk(this.ec, b);
		Yk(this.ec, c);
		Yk(this.ec, d);
		this.Ii = new dl(this.ec);
		E(this.ec, $k, this.nk, false, this);
		this.Ha(this.Gj, true);
		this.Ha(this.eh, true);
		this.eh.Ha(this.ma, true);
		this.eh.Ha(this.Ii, true);
		this.Ha(this.Za, true);
		this.ma.mg(this.vh());
		if (a = pf() ? 5 : undefined) {
			this.$.db.Pc(a);
			this.ma.Pc(a);
			gj(this.ma, a)
		}
		a = ef();
		E(a, jf, this.qk, false, this);
		E(a, hf, this.rk, this);
		E(a, ff, this.il, false, this)
	};
	p.qk = f();
	p.rk = function() {
		(new Bn(document)).gd("chemwriter-has-accepted-applet", true)
	};
	p.il = function() {
		var a = ef().getData("chemical/x-cdx")
				|| ef().getData("chemical/x-mdl-molfile");
		a && this.Ad(a)
	};
	p.Fg = function(a) {
		if (pf()) {
			var b;
			var c = a.ba;
			if (b = pf() ? 5 : undefined) {
				if (c.pa.length === 0)
					c = 1;
				else {
					c = c.pa;
					for ( var d = c[0], e = Math.abs(O(d.ca, d.ha)), g = 1; g < c.length; g++) {
						d = c[g];
						d = Math.abs(O(d.ca, d.ha));
						if (d < e)
							e = d
					}
					c = e
				}
				b = b / c;
				b = b >= 1 ? b : 1
			} else
				b = 1;
			c = a.ba.na;
			for (e = 0; e < c.length; e++) {
				g = c[e];
				g.move(g.da * b, g.ea * b)
			}
			this.Ji = b
		}
		this.ai(a);
		this.ma.zd(a);
		fj(this.ma);
		this.ma.Wf(this.ja.Le, this.ic);
		this.ic.clear();
		this.ic.zd(a);
		this.$ = a;
		gj(this.ma);
		this.Ld()
	};
	p.ai = function(a) {
		var b = Qf(a.ba);
		this.ma.Pc(b);
		a.db.Pc(b)
	};
	p.vh = function() {
		var a = Cc(this.aa()), b = Bc(this.Gj.aa()), c = Bc(this.Ii.aa());
		return new A(a.width - b.width - 1, a.height - c.height)
	};
	function Pn(a, b) {
		if (!b || b.length === 0) {
			var c = new U;
			c.Da(false);
			c.ya = m("Query Tools (Disabled)");
			return c
		}
		c = Rn(a, b);
		if (c.length !== b.length)
			throw Error("No such tool");
		if (c.length === 1)
			return c[0];
		if (c.length > 1) {
			var d = new Aj;
			R(d.ja, c[0]);
			Uf(d.ja, c[0]);
			for ( var e = 1; e < c.length; e++)
				R(d.ja, c[e]);
			return d
		}
		return new Rj
	}
	function Rn(a, b) {
		var c = new Rj, d = new Sj, e = new Tj, g = new Mj, h = new Mj(Oj), i = new Uj, j = new Vj, l = new Pj, n = [];
		if (Sa(b, c.Ic())) {
			c.Da(true);
			n.push(c)
		}
		if (Sa(b, d.Ic())) {
			d.Da(true);
			n.push(d)
		}
		if (Sa(b, e.Ic())) {
			e.Da(true);
			n.push(e)
		}
		if (Sa(b, g.Ic())) {
			g.Da(true);
			n.push(g)
		}
		if (Sa(b, h.Ic())) {
			h.Da(true);
			n.push(h)
		}
		if (Sa(b, i.Ic())) {
			i.Da(true);
			n.push(i)
		}
		if (Sa(b, j.Ic())) {
			j.Da(true);
			n.push(j)
		}
		if (Sa(b, l.Ic())) {
			l.Da(true);
			n.push(l)
		}
		return n
	}
	p.Il = function() {
		this.Ye.Da(true)
	};
	p.Jl = function() {
		this.Ye.Da(false)
	};
	p.ol = function() {
		this.Ie.Da(true)
	};
	p.pl = function() {
		this.Ie.Da(false)
	};
	p.Lf = function(a) {
		this.ma.Wf(a.qa, this.ic)
	};
	p.Mf = function() {
		fj(this.ma)
	};
	p.nk = function() {
		this.ma.Of()
	};
	function Qn(a) {
		var b = a.Zk || new Vk;
		ad(b, Wk, function() {
			this.ma.Ha(this.hl, true)
		}, null, a);
		b.xd(a.qj)
	}
	;
	function $(a) {
		J.call(this, a);
		this.$ = new Xh;
		this.ma = new ej(this.$, true)
	}
	u($, J);
	p = $.prototype;
	p.wc = function(a) {
		this.ma.wc(a)
	};
	p.zc = function() {
		return this.ma.zc()
	};
	p.jd = function(a) {
		this.ma.jd(a)
	};
	p.qd = function() {
		return this.ma.qd(lineOffset)
	};
	p.hd = function(a) {
		this.ma.hd(a)
	};
	p.pd = function() {
		return this.ma.pd()
	};
	p.Ad = function(a) {
		var b = new Xh;
		(new cm).xd(a, b.ba);
		this.Fg(b)
	};
	p.mf = function(a) {
		if (a !== "chemical/x-mdl-molfile")
			throw Error("Unknown MIME type");
		return (new kl).write(this.$.ba, "[NO NAME]",
				"Created with ChemWriter - http://chemwriter.com")
	};
	p.Sj = f();
	p.la = function() {
		this.ia = B("div", {
			"class" : "painter"
		})
	};
	p.xa = function() {
		$.ga.xa.call(this);
		this.Ha(this.ma, true);
		this.ma.mg(this.vh())
	};
	p.Ld = function() {
		this.$.gb() || this.ma.Ld()
	};
	p.vh = function() {
		var a = Cc(this.aa());
		return new A(a.width, a.height)
	};
	p.Fg = function(a) {
		this.ai(a);
		this.ma.zd(a);
		this.$ = a;
		gj(this.ma);
		this.ma.Uf()
	};
	p.ai = function(a) {
		this.ma.Pc(Qf(a.ba))
	};
	function Sn(a) {
		J.call(this, a)
	}
	u(Sn, J);
	Sn.prototype.la = function() {
		this.ia = B("div", {
			"class" : "editor"
		})
	};
	Sn.prototype.xa = function() {
		Sn.ga.xa.call(this);
		var a = this.aa(), b = B("p", {
			"class" : "browser-notice"
		});
		hc(b, "ChemWriter 2 is not supported on IE5.");
		a.appendChild(b)
	};
	function Tn() {
		var a = Jn.Hb();
		a.bi("ChemWriter");
		a.vi = [ "Richard Apodaca", "Robert Apodaca", "Orion Jankowski",
				"Zachary Catlin" ];
		a.ji = "http://chemwriter.com";
		a.Mj = "52e93390e942cfeca28c2b9d29a0f2fbc7c066cb".substring(0, 6);
		a.Ze = "2.15.2";
		if (w && !z(6)) {
			a = new Sn;
			var b = r(id) ? document.getElementById(id) : id;
			sd(a, b)
		}
	}
	function Un(a, b) {
		a.Sj(b.licensePath);
		b.lineWidth && a.wc(b.lineWidth);
		b.lineOffset && a.jd(b.lineOffset);
		b.atomLabelHeight && a.hd(b.atomLabelHeight);
		b.hoverRadius && a.vc(b.hoverRadius);
		b.deviceBondLength && a.Oe(b.deviceBondLength);
		if (b.disableImplicitHydrogenCount)
			for ( var c = b.disableImplicitHydrogenCount, d = 0; d < c.length; d++)
				Wg.push(c[d]);
		b.molfile && a.Ad(b.molfile)
	}
	;
	ca("chemwriter.loadEditor", function(a, b) {
		Tn();
		var c = b || {};
		c.enableClipboard && ef().Da(true);
		var d = new Z(undefined, undefined, c.enableTools), e = r(a) ? document
				.getElementById(a) : a, g = B("div", {
			"class" : "chemwriter"
		});
		dc(e, g);
		sd(d, g);
		Un(d, c);
		if (c = c.appletPath)
			ef().pi = c;
		return d
	}, void 0);
	ca("chemwriter.loadPainter",
			function(a, b) {
				Tn();
				var c = b || {}, d = new $, e = r(a) ? document
						.getElementById(a) : a, g = B("div", {
					"class" : "chemwriter"
				});
				dc(e, g);
				sd(d, g);
				Un(d, c);
				return d
			}, void 0);
	ca("chemwriter.REVISION", "52e93390e942cfeca28c2b9d29a0f2fbc7c066cb",
			void 0);
	ca("chemwriter.VERSION", "2.15.2", void 0);
	ca("chemwriter.app.MIMEType.MOLFILE", "chemical/x-mdl-molfile", void 0);
	ca("chemwriter.app.Error.UNKNOWN_MIME_TYPE", "Unknown MIME type", void 0);
	ca("chemwriter.system.Clipboard", cf, void 0);
	Z.prototype.getMolfile = Z.prototype.xh;
	Z.prototype.getFile = Z.prototype.mf;
	Z.prototype.setMolfile = Z.prototype.Tj;
	Z.prototype.setFile = Z.prototype.Ad;
	Z.prototype.autocenter = Z.prototype.Ld;
	Z.prototype.autoscale = Z.prototype.Uf;
	Z.prototype.clear = Z.prototype.clear;
	Z.prototype.isBlank = Z.prototype.Hh;
	Z.prototype.getLineWidth = Z.prototype.zc;
	Z.prototype.setLineWidth = Z.prototype.wc;
	Z.prototype.getLineOffset = Z.prototype.qd;
	Z.prototype.setLineOffset = Z.prototype.jd;
	Z.prototype.setAtomLabelHeight = Z.prototype.hd;
	Z.prototype.getAtomLabelHeight = Z.prototype.pd;
	Z.prototype.setHoverRadius = Z.prototype.vc;
	Z.prototype.getHoverRadius = Z.prototype.Td;
	Z.prototype.getDeviceBondLength = Z.prototype.re;
	Z.prototype.setDeviceBondLength = Z.prototype.Oe;
	cf.getInstance = ef;
	cf.prototype.deploySuccess = cf.prototype.Gk;
	cf.prototype.deployFail = cf.prototype.Fk;
	$.prototype.getFile = $.prototype.mf;
	$.prototype.setFile = $.prototype.Ad;
	$.prototype.setLineWidth = $.prototype.wc;
	$.prototype.getLineWidth = $.prototype.zc;
	$.prototype.setLineOffset = $.prototype.jd;
	$.prototype.getLineOffset = $.prototype.qd;
	$.prototype.getAtomLabelHeight = $.prototype.pd;
	$.prototype.setAtomLabelHeight = $.prototype.hd;
})();
