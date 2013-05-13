/*
 * ChemVector (TM)
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
	function aa(a) {
		return function(b) {
			this[a] = b;
		};
	}
	function ba(a) {
		return function() {
			return this[a];
		};
	}
	var h, ca = ca || {}, o = this;
	function da(a, b, c) {
		a = a.split(".");
		c = c || o;
		!(a[0] in c) && c.execScript && c.execScript("var " + a[0]);
		for ( var d; a.length && (d = a.shift());)
			if (!a.length && b !== undefined)
				c[d] = b;
			else
				c = c[d] ? c[d] : (c[d] = {});
	}
	function ea(a, b) {
		for ( var c = a.split("."), d = b || o, e; e = c.shift();)
			if (d[e] != null)
				d = d[e];
			else
				return null;
		return d;
	}
	function fa() {
	}
	function ga(a) {
		a.db = function() {
			return a.ze || (a.ze = new a);
		};
	}
	function ha(a) {
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
					return "function";
			} else
				return "null";
		else if (b == "function" && typeof a.call == "undefined")
			return "object";
		return b;
	}
	function ia(a) {
		return ha(a) == "array";
	}
	function ka(a) {
		var b = ha(a);
		return b == "array" || b == "object" && typeof a.length == "number";
	}
	function r(a) {
		return typeof a == "string";
	}
	function la(a) {
		return typeof a == "number";
	}
	function ma(a) {
		a = ha(a);
		return a == "object" || a == "array" || a == "function";
	}
	function t(a) {
		return a[na] || (a[na] = ++oa);
	}
	var na = "closure_uid_"
			+ Math.floor(Math.random() * 2147483648).toString(36), oa = 0;
	function qa(a) {
		return a.call.apply(a.Bd, arguments);
	}
	function ra(a, b) {
		if (!a)
			throw Error();
		if (arguments.length > 2) {
			var c = Array.prototype.slice.call(arguments, 2);
			return function() {
				var d = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(d, c);
				return a.apply(b, d);
			};
		} else
			return function() {
				return a.apply(b, arguments);
			};
	}
	function u() {
		u = Function.prototype.Bd
				&& Function.prototype.Bd.toString().indexOf("native code") != -1 ? qa
				: ra;
		return u.apply(null, arguments);
	}
	function sa(a) {
		var b = Array.prototype.slice.call(arguments, 1);
		return function() {
			var c = Array.prototype.slice.call(arguments);
			c.unshift.apply(c, b);
			return a.apply(this, c);
		};
	}
	var ta = Date.now || function() {
		return +new Date;
	};
	function v(a, b) {
		function c() {
		}
		c.prototype = b.prototype;
		a.bb = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a;
	}
	;
	function ua(a) {
		this.stack = Error().stack || "";
		if (a)
			this.message = String(a);
	}
	v(ua, Error);
	ua.prototype.name = "CustomError";
	function va(a, b) {
		var c = a.length - b.length;
		return c >= 0 && a.indexOf(b, c) == c;
	}
	function wa(a) {
		for ( var b = 1; b < arguments.length; b++) {
			var c = String(arguments[b]).replace(/\$/g, "$$$$");
			a = a.replace(/\%s/, c);
		}
		return a;
	}
	var za = /&/g, Aa = /</g, Ba = />/g, Ca = /\"/g, Da = /[&<>\"]/;
	function ya(a, b) {
		if (b)
			return a.replace(za, "&amp;").replace(Aa, "&lt;").replace(Ba,
					"&gt;").replace(Ca, "&quot;");
		else {
			if (!Da.test(a))
				return a;
			if (a.indexOf("&") != -1)
				a = a.replace(za, "&amp;");
			if (a.indexOf("<") != -1)
				a = a.replace(Aa, "&lt;");
			if (a.indexOf(">") != -1)
				a = a.replace(Ba, "&gt;");
			if (a.indexOf('"') != -1)
				a = a.replace(Ca, "&quot;");
			return a;
		}
	}
	
	function Ea(a, b) {
		if (a < b)
			return -1;
		else if (a > b)
			return 1;
		return 0;
	}
	;
	function Fa(a, b) {
		b.unshift(a);
		ua.call(this, wa.apply(null, b));
		b.shift();
		this.Gf = a;
	}
	v(Fa, ua);
	Fa.prototype.name = "AssertionError";
	function Ga(a, b) {
		if (!a) {
			var c = Array.prototype.slice.call(arguments, 2), d = "Assertion failed";
			if (b) {
				d += ": " + b;
				var e = c;
			}
			throw new Fa("" + d, e || []);
		}
		return a;
	}
	function Ha(a) {
		throw new Fa("Failure" + (a ? ": " + a : ""), Array.prototype.slice
				.call(arguments, 1));
	}
	;
	var z = Array.prototype, B = z.indexOf ? function(a, b, c) {
		Ga(a.length != null);
		return z.indexOf.call(a, b, c);
	} : function(a, b, c) {
		c = c == null ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
		if (r(a)) {
			if (!r(b) || b.length != 1)
				return -1;
			return a.indexOf(b, c);
		}
		for (c = c; c < a.length; c++)
			if (c in a && a[c] === b)
				return c;
		return -1;
	}, Ia = z.forEach ? function(a, b, c) {
		Ga(a.length != null);
		z.forEach.call(a, b, c);
	} : function(a, b, c) {
		for ( var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
			f in e && b.call(c, e[f], f, a);
	}, Ja = z.map ? function(a, b, c) {
		Ga(a.length != null);
		return z.map.call(a, b, c);
	}
			: function(a, b, c) {
				for ( var d = a.length, e = Array(d), f = r(a) ? a.split("")
						: a, g = 0; g < d; g++)
					if (g in f)
						e[g] = b.call(c, f[g], g, a);
				return e;
			};
	function Ka(a, b, c, d) {
		if (a.reduce)
			return d ? a.reduce(u(b, d), c) : a.reduce(b, c);
		var e = c;
		Ia(a, function(f, g) {
			e = b.call(d, e, f, g, a);
		});
		return e;
	}
	var La = z.some ? function(a, b, c) {
		Ga(a.length != null);
		return z.some.call(a, b, c);
	} : function(a, b, c) {
		for ( var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
			if (f in e && b.call(c, e[f], f, a))
				return true;
		return false;
	};
	function C(a, b) {
		var c = B(a, b), d;
		if (d = c >= 0) {
			Ga(a.length != null);
			z.splice.call(a, c, 1);
		}
		return d;
	}
	function Ma() {
		return z.concat.apply(z, arguments);
	}
	function Na(a) {
		if (ia(a))
			return Ma(a);
		else {
			for ( var b = [], c = 0, d = a.length; c < d; c++)
				b[c] = a[c];
			return b;
		}
	}
	function Oa(a) {
		Ga(a.length != null);
		return z.splice.apply(a, Pa(arguments, 1));
	}
	function Pa(a, b, c) {
		Ga(a.length != null);
		return arguments.length <= 2 ? z.slice.call(a, b) : z.slice.call(a, b,
				c);
	}
	function Qa(a, b) {
		return a > b ? 1 : a < b ? -1 : 0;
	}
	;
	var Ra, Ua, Va, Wa;
	function Xa() {
		return o.navigator ? o.navigator.userAgent : null;
	}
	Wa = Va = Ua = Ra = false;
	var Ya;
	if (Ya = Xa()) {
		var Za = o.navigator;
		Ra = Ya.indexOf("Opera") == 0;
		Ua = !Ra && Ya.indexOf("MSIE") != -1;
		Va = !Ra && Ya.indexOf("WebKit") != -1;
		Wa = !Ra && !Va && Za.product == "Gecko";
	}
	var $a = Ra, D = Ua, ab = Wa, bb = Va, cb = o.navigator, db = (cb
			&& cb.platform || "").indexOf("Mac") != -1, eb;
	a: {
		var fb = "", gb;
		if ($a && o.opera) {
			var hb = o.opera.version;
			fb = typeof hb == "function" ? hb() : hb;
		} else {
			if (ab)
				gb = /rv\:([^\);]+)(\)|;)/;
			else if (D)
				gb = /MSIE\s+([^\);]+)(\)|;)/;
			else if (bb)
				gb = /WebKit\/(\S+)/;
			if (gb) {
				var ib = gb.exec(Xa());
				fb = ib ? ib[1] : "";
			}
		}
		if (D) {
			var jb, kb = o.document;
			jb = kb ? kb.documentMode : undefined;
			if (jb > parseFloat(fb)) {
				eb = String(jb);
				break a;
			}
		}
		eb = fb;
	}
	var lb = {};
	function mb(a) {
		var b;
		if (!(b = lb[a])) {
			b = 0;
			for ( var c = String(eb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
					.split("."), d = String(a).replace(
					/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(
					c.length, d.length), f = 0; b == 0 && f < e; f++) {
				var g = c[f] || "", i = d[f] || "", k = RegExp("(\\d*)(\\D*)",
						"g"), j = RegExp("(\\d*)(\\D*)", "g");
				do {
					var l = k.exec(g) || [ "", "", "" ], m = j.exec(i)
							|| [ "", "", "" ];
					if (l[0].length == 0 && m[0].length == 0)
						break;
					b = Ea(l[1].length == 0 ? 0 : parseInt(l[1], 10),
							m[1].length == 0 ? 0 : parseInt(m[1], 10))
							|| Ea(l[2].length == 0, m[2].length == 0)
							|| Ea(l[2], m[2]);
				} while (b == 0)
			}
			b = lb[a] = b >= 0;
		}
		return b;
	}
	var nb = {};
	function ob(a) {
		return nb[a]
				|| (nb[a] = D && document.documentMode
						&& document.documentMode >= a);
	}
	;
	var pb, qb = !D || ob(9);
	!ab && !D || D && ob(9) || ab && mb("1.9.1");
	D && mb("9");
	function rb(a) {
		var b;
		b = (b = a.className) && typeof b.split == "function" ? b.split(/\s+/)
				: [];
		var c;
		c = Pa(arguments, 1);
		for ( var d = 0, e = 0; e < c.length; e++)
			if (!(B(b, c[e]) >= 0)) {
				b.push(c[e]);
				d++;
			}
		c = d == c.length;
		a.className = b.join(" ");
		return c;
	}
	;
	function sb(a, b) {
		this.x = a !== undefined ? a : 0;
		this.y = b !== undefined ? b : 0;
	}
	sb.prototype.va = function() {
		return new sb(this.x, this.y);
	};
	sb.prototype.toString = function() {
		return "(" + this.x + ", " + this.y + ")";
	};
	function tb(a, b) {
		this.width = a;
		this.height = b;
	}
	h = tb.prototype;
	h.va = function() {
		return new tb(this.width, this.height);
	};
	h.toString = function() {
		return "(" + this.width + " x " + this.height + ")";
	};
	h.mb = function() {
		return !(this.width * this.height);
	};
	h.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this;
	};
	h.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this;
	};
	h.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this;
	};
	h.scale = function(a) {
		this.width *= a;
		this.height *= a;
		return this;
	};
	function ub(a, b, c) {
		for ( var d in a)
			b.call(c, a[d], d, a);
	}
	function vb(a) {
		var b = [], c = 0;
		for ( var d in a)
			b[c++] = a[d];
		return b;
	}
	function wb(a) {
		var b = [], c = 0;
		for ( var d in a)
			b[c++] = d;
		return b;
	}
	function xb(a, b) {
		for ( var c in a)
			if (a[c] == b)
				return true;
		return false;
	}
	function yb(a, b, c) {
		if (b in a)
			return a[b];
		return c;
	}
	var zb = [ "constructor", "hasOwnProperty", "isPrototypeOf",
			"propertyIsEnumerable", "toLocaleString", "toString", "valueOf" ];
	function Ab(a) {
		for ( var b, c, d = 1; d < arguments.length; d++) {
			c = arguments[d];
			for (b in c)
				a[b] = c[b];
			for ( var e = 0; e < zb.length; e++) {
				b = zb[e];
				if (Object.prototype.hasOwnProperty.call(c, b))
					a[b] = c[b];
			}
		}
	}
	;
	function Bb(a) {
		return a.querySelectorAll && a.querySelector
				&& (!bb || document.compatMode == "CSS1Compat" || mb("528"));
	}
	function Cb(a, b, c, d) {
		a = d || a;
		b = b && b != "*" ? b.toUpperCase() : "";
		if (Bb(a) && (b || c))
			return a.querySelectorAll(b + (c ? "." + c : ""));
		if (c && a.getElementsByClassName) {
			a = a.getElementsByClassName(c);
			if (b) {
				d = {};
				for ( var e = 0, f = 0, g; g = a[f]; f++)
					if (b == g.nodeName)
						d[e++] = g;
				d.length = e;
				return d;
			} else
				return a;
		}
		a = a.getElementsByTagName(b || "*");
		if (c) {
			d = {};
			for (f = e = 0; g = a[f]; f++) {
				b = g.className;
				if (typeof b.split == "function" && B(b.split(/\s+/), c) >= 0)
					d[e++] = g;
			}
			d.length = e;
			return d;
		} else
			return a;
	}
	function Db(a, b) {
		ub(b, function(c, d) {
			if (d == "style")
				a.style.cssText = c;
			else if (d == "class")
				a.className = c;
			else if (d == "for")
				a.htmlFor = c;
			else if (d in Eb)
				a.setAttribute(Eb[d], c);
			else if (d.lastIndexOf("aria-", 0) == 0)
				a.setAttribute(d, c);
			else
				a[d] = c;
		});
	}
	var Eb = {
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
	function Fb() {
		return Gb(document, arguments);
	}
	function Gb(a, b) {
		var c = b[0], d = b[1];
		if (!qb && d && (d.name || d.type)) {
			c = [ "<", c ];
			d.name && c.push(' name="', ya(d.name), '"');
			if (d.type) {
				c.push(' type="', ya(d.type), '"');
				var e = {};
				Ab(e, d);
				d = e;
				delete d.type;
			}
			c.push(">");
			c = c.join("");
		}
		c = a.createElement(c);
		if (d)
			if (r(d))
				c.className = d;
			else
				ia(d) ? rb.apply(null, [ c ].concat(d)) : Db(c, d);
		b.length > 2 && Hb(a, c, b, 2);
		return c;
	}
	function Hb(a, b, c, d) {
		function e(g) {
			if (g)
				b.appendChild(r(g) ? a.createTextNode(g) : g);
		}
		for (d = d; d < c.length; d++) {
			var f = c[d];
			ka(f) && !(ma(f) && f.nodeType > 0) ? Ia(Ib(f) ? Na(f) : f, e)
					: e(f);
		}
	}
	function Ib(a) {
		if (a && typeof a.length == "number")
			if (ma(a))
				return typeof a.item == "function" || typeof a.item == "string";
			else if (ha(a) == "function")
				return typeof a.item == "function";
		return false;
	}
	function Jb(a) {
		this.Wa = a || o.document || document;
	}
	h = Jb.prototype;
	h.Ha = function(a) {
		return r(a) ? this.Wa.getElementById(a) : a;
	};
	h.lb = function() {
		return Gb(this.Wa, arguments);
	};
	h.createElement = function(a) {
		return this.Wa.createElement(a);
	};
	h.createTextNode = function(a) {
		return this.Wa.createTextNode(a);
	};
	h.appendChild = function(a, b) {
		a.appendChild(b);
	};
	h.contains = function(a, b) {
		if (a.contains && b.nodeType == 1)
			return a == b || a.contains(b);
		if (typeof a.compareDocumentPosition != "undefined")
			return a == b || Boolean(a.compareDocumentPosition(b) & 16);
		for (; b && a != b;)
			b = b.parentNode;
		return b == a;
	};
	function Kb(a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		this.left = d;
	}
	Kb.prototype.va = function() {
		return new Kb(this.top, this.right, this.bottom, this.left);
	};
	Kb.prototype.toString = function() {
		return "(" + this.top + "t, " + this.right + "r, " + this.bottom
				+ "b, " + this.left + "l)";
	};
	Kb.prototype.contains = function(a) {
		return !this || !a ? false : a instanceof Kb ? a.left >= this.left
				&& a.right <= this.right && a.top >= this.top
				&& a.bottom <= this.bottom : a.x >= this.left
				&& a.x <= this.right && a.y >= this.top && a.y <= this.bottom;
	};
	function Lb(a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d;
	}
	Lb.prototype.va = function() {
		return new Lb(this.left, this.top, this.width, this.height);
	};
	Lb.prototype.toString = function() {
		return "(" + this.left + ", " + this.top + " - " + this.width + "w x "
				+ this.height + "h)";
	};
	Lb.prototype.contains = function(a) {
		return a instanceof Lb ? this.left <= a.left
				&& this.left + this.width >= a.left + a.width
				&& this.top <= a.top
				&& this.top + this.height >= a.top + a.height
				: a.x >= this.left && a.x <= this.left + this.width
						&& a.y >= this.top && a.y <= this.top + this.height;
	};
	Lb.prototype.fd = function() {
		return new tb(this.width, this.height);
	};
	function Mb(a, b, c) {
		if (b instanceof tb) {
			c = b.height;
			b = b.width;
		} else {
			if (c == undefined)
				throw Error("missing height argument");
			c = c;
		}
		a.style.width = Nb(b, true);
		a.style.height = Nb(c, true);
	}
	function Nb(a, b) {
		if (typeof a == "number")
			a = (b ? Math.round(a) : a) + "px";
		return a;
	}
	function Ob(a) {
		var b = a.offsetWidth, c = a.offsetHeight, d = bb && !b && !c;
		if ((b === undefined || d) && a.getBoundingClientRect) {
			b = a.getBoundingClientRect();
			if (D) {
				a = a.ownerDocument;
				b.left -= a.documentElement.clientLeft + a.body.clientLeft;
				b.top -= a.documentElement.clientTop + a.body.clientTop;
			}
			return new tb(b.right - b.left, b.bottom - b.top);
		}
		return new tb(b, c);
	}
	function Pb(a, b) {
		if (D)
			a.cssText = b;
		else
			a[bb ? "innerText" : "innerHTML"] = b;
	}
	;
	function E() {
		if (Qb)
			Rb[t(this)] = this;
	}
	var Qb = false, Rb = {};
	E.prototype.Fd = false;
	E.prototype.wb = function() {
		if (!this.Fd) {
			this.Fd = true;
			this.Oa();
			if (Qb) {
				var a = t(this);
				if (!Rb.hasOwnProperty(a))
					throw Error(this
							+ " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
				delete Rb[a];
			}
		}
	};
	E.prototype.Oa = function() {
		this.te && Sb.apply(null, this.te);
	};
	function Sb() {
		for ( var a = 0, b = arguments.length; a < b; ++a) {
			var c = arguments[a];
			if (ka(c))
				Sb.apply(null, c);
			else
				c && typeof c.wb == "function" && c.wb();
		}
	}
	;
	var Tb = [];
	!D || ob(9);
	var $b = !D || ob(9);
	D && mb("8");
	!bb || mb("528");
	ab && mb("1.9b") || D && mb("8") || $a && mb("9.5") || bb && mb("528");
	!ab || mb("8");
	function F(a, b) {
		E.call(this);
		this.type = a;
		this.currentTarget = this.target = b;
	}
	v(F, E);
	F.prototype.Oa = function() {
		delete this.type;
		delete this.target;
		delete this.currentTarget;
	};
	F.prototype.Ib = false;
	F.prototype.Hc = true;
	function ac(a) {
		ac[" "](a);
		return a;
	}
	ac[" "] = fa;
	function bc(a, b) {
		a && this.zc(a, b);
	}
	v(bc, F);
	h = bc.prototype;
	h.target = null;
	h.relatedTarget = null;
	h.offsetX = 0;
	h.offsetY = 0;
	h.clientX = 0;
	h.clientY = 0;
	h.screenX = 0;
	h.screenY = 0;
	h.button = 0;
	h.keyCode = 0;
	h.charCode = 0;
	h.ctrlKey = false;
	h.altKey = false;
	h.shiftKey = false;
	h.metaKey = false;
	h.bf = false;
	h.Id = null;
	h.zc = function(a, b) {
		var c = this.type = a.type;
		F.call(this, c);
		this.target = a.target || a.srcElement;
		this.currentTarget = b;
		var d = a.relatedTarget;
		if (d) {
			if (ab) {
				var e;
				a: {
					try {
						ac(d.nodeName);
						e = true;
						break a;
					} catch (f) {
					}
					e = false;
				}
				e || (d = null);
			}
		} else if (c == "mouseover")
			d = a.fromElement;
		else if (c == "mouseout")
			d = a.toElement;
		this.relatedTarget = d;
		this.offsetX = bb || a.offsetX !== undefined ? a.offsetX : a.layerX;
		this.offsetY = bb || a.offsetY !== undefined ? a.offsetY : a.layerY;
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
		this.bf = db ? a.metaKey : a.ctrlKey;
		this.jf = a.jf;
		this.Id = a;
		delete this.Hc;
		delete this.Ib;
	};
	h.Oa = function() {
		bc.bb.Oa.call(this);
		this.relatedTarget = this.currentTarget = this.target = this.Id = null;
	};
	function cc() {
	}
	var dc = 0;
	h = cc.prototype;
	h.key = 0;
	h.Jb = false;
	h.Vc = false;
	h.zc = function(a, b, c, d, e, f) {
		if (ha(a) == "function")
			this.Td = true;
		else if (a && a.handleEvent && ha(a.handleEvent) == "function")
			this.Td = false;
		else
			throw Error("Invalid listener argument");
		this.ic = a;
		this.be = b;
		this.src = c;
		this.type = d;
		this.capture = !!e;
		this.gd = f;
		this.Vc = false;
		this.key = ++dc;
		this.Jb = false;
	};
	h.handleEvent = function(a) {
		if (this.Td)
			return this.ic.call(this.gd || this.src, a);
		return this.ic.handleEvent.call(this.ic, a);
	};
	var ec = {}, G = {}, fc = {}, gc = {};
	function H(a, b, c, d, e) {
		if (b)
			if (ia(b)) {
				for ( var f = 0; f < b.length; f++)
					H(a, b[f], c, d, e);
				return null;
			} else {
				d = !!d;
				var g = G;
				b in g || (g[b] = {
					ea : 0,
					Sa : 0
				});
				g = g[b];
				if (!(d in g)) {
					g[d] = {
						ea : 0,
						Sa : 0
					};
					g.ea++;
				}
				g = g[d];
				var i = t(a), k;
				g.Sa++;
				if (g[i]) {
					k = g[i];
					for (f = 0; f < k.length; f++) {
						g = k[f];
						if (g.ic == c && g.gd == e) {
							if (g.Jb)
								break;
							return k[f].key;
						}
					}
				} else {
					k = g[i] = [];
					g.ea++;
				}
				f = hc();
				f.src = a;
				g = new cc;
				g.zc(c, f, a, b, d, e);
				c = g.key;
				f.key = c;
				k.push(g);
				ec[c] = g;
				fc[i] || (fc[i] = []);
				fc[i].push(g);
				if (a.addEventListener) {
					if (a == o || !a.$c)
						a.addEventListener(b, f, d);
				} else
					a.attachEvent(ic(b), f);
				return c;
			}
		else
			throw Error("Invalid event type");
	}
	function hc() {
		var a = jc, b = $b ? function(c) {
			return a.call(b.src, b.key, c);
		} : function(c) {
			c = a.call(b.src, b.key, c);
			if (!c)
				return c;
		};
		return b;
	}
	function kc(a, b, c, d, e) {
		if (ia(b)) {
			for ( var f = 0; f < b.length; f++)
				kc(a, b[f], c, d, e);
			return null;
		}
		a = H(a, b, c, d, e);
		ec[a].Vc = true;
		return a;
	}
	function lc(a, b, c, d, e) {
		if (ia(b)) {
			for ( var f = 0; f < b.length; f++)
				lc(a, b[f], c, d, e);
			return null;
		}
		d = !!d;
		a: {
			f = G;
			if (b in f) {
				f = f[b];
				if (d in f) {
					f = f[d];
					a = t(a);
					if (f[a]) {
						a = f[a];
						break a;
					}
				}
			}
			a = null;
		}
		if (!a)
			return false;
		for (f = 0; f < a.length; f++)
			if (a[f].ic == c && a[f].capture == d && a[f].gd == e)
				return mc(a[f].key);
		return false;
	}
	function mc(a) {
		if (!ec[a])
			return false;
		var b = ec[a];
		if (b.Jb)
			return false;
		var c = b.src, d = b.type, e = b.be, f = b.capture;
		if (c.removeEventListener) {
			if (c == o || !c.$c)
				c.removeEventListener(d, e, f);
		} else
			c.detachEvent && c.detachEvent(ic(d), e);
		c = t(c);
		e = G[d][f][c];
		if (fc[c]) {
			var g = fc[c];
			C(g, b);
			g.length == 0 && delete fc[c];
		}
		b.Jb = true;
		e.Xd = true;
		nc(d, f, c, e);
		delete ec[a];
		return true;
	}
	function nc(a, b, c, d) {
		if (!d.Cc)
			if (d.Xd) {
				for ( var e = 0, f = 0; e < d.length; e++)
					if (d[e].Jb)
						d[e].be.src = null;
					else {
						if (e != f)
							d[f] = d[e];
						f++;
					}
				d.length = f;
				d.Xd = false;
				if (f == 0) {
					delete G[a][b][c];
					G[a][b].ea--;
					if (G[a][b].ea == 0) {
						delete G[a][b];
						G[a].ea--;
					}
					G[a].ea == 0 && delete G[a];
				}
			}
	}
	function oc(a, b, c) {
		var d = 0, e = a == null, f = b == null, g = c == null;
		c = !!c;
		if (e)
			ub(fc, function(k) {
				for ( var j = k.length - 1; j >= 0; j--) {
					var l = k[j];
					if ((f || b == l.type) && (g || c == l.capture)) {
						mc(l.key);
						d++;
					}
				}
			});
		else {
			a = t(a);
			if (fc[a]) {
				a = fc[a];
				for (e = a.length - 1; e >= 0; e--) {
					var i = a[e];
					if ((f || b == i.type) && (g || c == i.capture)) {
						mc(i.key);
						d++;
					}
				}
			}
		}
		return d;
	}
	function ic(a) {
		if (a in gc)
			return gc[a];
		return gc[a] = "on" + a;
	}
	function pc(a, b, c, d, e) {
		var f = 1;
		b = t(b);
		if (a[b]) {
			a.Sa--;
			a = a[b];
			if (a.Cc)
				a.Cc++;
			else
				a.Cc = 1;
			try {
				for ( var g = a.length, i = 0; i < g; i++) {
					var k = a[i];
					if (k && !k.Jb)
						f &= qc(k, e) !== false;
				}
			} finally {
				a.Cc--;
				nc(c, d, b, a);
			}
		}
		return Boolean(f);
	}
	function qc(a, b) {
		var c = a.handleEvent(b);
		a.Vc && mc(a.key);
		return c;
	}
	function jc(a, b) {
		if (!ec[a])
			return true;
		var c = ec[a], d = c.type, e = G;
		if (!(d in e))
			return true;
		e = e[d];
		var f, g;
		if (!$b) {
			f = b || ea("window.event");
			var i = true in e, k = false in e;
			if (i) {
				if (f.keyCode < 0 || f.returnValue != undefined)
					return true;
				a: {
					var j = false;
					if (f.keyCode == 0)
						try {
							f.keyCode = -1;
							break a;
						} catch (l) {
							j = true;
						}
					if (j || f.returnValue == undefined)
						f.returnValue = true;
				}
			}
			j = new bc;
			j.zc(f, this);
			f = true;
			try {
				if (i) {
					for ( var m = [], A = j.currentTarget; A; A = A.parentNode)
						m.push(A);
					g = e[true];
					g.Sa = g.ea;
					for ( var w = m.length - 1; !j.Ib && w >= 0 && g.Sa; w--) {
						j.currentTarget = m[w];
						f &= pc(g, m[w], d, true, j);
					}
					if (k) {
						g = e[false];
						g.Sa = g.ea;
						for (w = 0; !j.Ib && w < m.length && g.Sa; w++) {
							j.currentTarget = m[w];
							f &= pc(g, m[w], d, false, j);
						}
					}
				} else
					f = qc(c, j);
			} finally {
				if (m)
					m.length = 0;
				j.wb();
			}
			return f;
		}
		d = new bc(b, this);
		try {
			f = qc(c, d);
		} finally {
			d.wb();
		}
		return f;
	}
	Tb[Tb.length] = function(a) {
		jc = a(jc);
	};
	function I() {
		E.call(this);
	}
	v(I, E);
	h = I.prototype;
	h.$c = true;
	h.Fc = null;
	h.ab = aa("Fc");
	h.addEventListener = function(a, b, c, d) {
		H(this, a, b, c, d);
	};
	h.removeEventListener = function(a, b, c, d) {
		lc(this, a, b, c, d);
	};
	h.dispatchEvent = function(a) {
		a = a;
		var b = a.type || a, c = G;
		if (b in c) {
			if (r(a))
				a = new F(a, this);
			else if (a instanceof F)
				a.target = a.target || this;
			else {
				var d = a;
				a = new F(b, this);
				Ab(a, d);
			}
			d = 1;
			var e;
			c = c[b];
			b = true in c;
			var f;
			if (b) {
				e = [];
				for (f = this; f; f = f.Fc)
					e.push(f);
				f = c[true];
				f.Sa = f.ea;
				for ( var g = e.length - 1; !a.Ib && g >= 0 && f.Sa; g--) {
					a.currentTarget = e[g];
					d &= pc(f, e[g], a.type, true, a) && a.Hc != false;
				}
			}
			if (false in c) {
				f = c[false];
				f.Sa = f.ea;
				if (b)
					for (g = 0; !a.Ib && g < e.length && f.Sa; g++) {
						a.currentTarget = e[g];
						d &= pc(f, e[g], a.type, false, a) && a.Hc != false;
					}
				else
					for (e = this; !a.Ib && e && f.Sa; e = e.Fc) {
						a.currentTarget = e;
						d &= pc(f, e, a.type, false, a) && a.Hc != false;
					}
			}
			a = Boolean(d);
		} else
			a = true;
		return a;
	};
	h.Oa = function() {
		I.bb.Oa.call(this);
		oc(this);
		this.Fc = null;
	};
	var rc = o.window;
	function sc(a) {
		if (typeof a.vc == "function")
			return a.vc();
		if (r(a))
			return a.split("");
		if (ka(a)) {
			for ( var b = [], c = a.length, d = 0; d < c; d++)
				b.push(a[d]);
			return b;
		}
		return vb(a);
	}
	function tc(a, b, c) {
		if (typeof a.forEach == "function")
			a.forEach(b, c);
		else if (ka(a) || r(a))
			Ia(a, b, c);
		else {
			var d;
			if (typeof a.ed == "function")
				d = a.ed();
			else if (typeof a.vc != "function")
				if (ka(a) || r(a)) {
					d = [];
					for ( var e = a.length, f = 0; f < e; f++)
						d.push(f);
					d = d;
				} else
					d = wb(a);
			else
				d = void 0;
			e = sc(a);
			f = e.length;
			for ( var g = 0; g < f; g++)
				b.call(c, e[g], d && d[g], a);
		}
	}
	;
	function uc(a) {
		this.qb = {};
		this.xa = [];
		var b = arguments.length;
		if (b > 1) {
			if (b % 2)
				throw Error("Uneven number of arguments");
			for ( var c = 0; c < b; c += 2)
				vc(this, arguments[c], arguments[c + 1]);
		} else if (a) {
			if (a instanceof uc) {
				b = a.ed();
				c = a.vc();
			} else {
				b = wb(a);
				c = vb(a);
			}
			for ( var d = 0; d < b.length; d++)
				vc(this, b[d], c[d]);
		}
	}
	h = uc.prototype;
	h.ea = 0;
	h.le = 0;
	h.vc = function() {
		wc(this);
		for ( var a = [], b = 0; b < this.xa.length; b++)
			a.push(this.qb[this.xa[b]]);
		return a;
	};
	h.ed = function() {
		wc(this);
		return this.xa.concat();
	};
	h.mb = function() {
		return this.ea == 0;
	};
	h.clear = function() {
		this.qb = {};
		this.le = this.ea = this.xa.length = 0;
	};
	function wc(a) {
		if (a.ea != a.xa.length) {
			for ( var b = 0, c = 0; b < a.xa.length;) {
				var d = a.xa[b];
				if (Object.prototype.hasOwnProperty.call(a.qb, d))
					a.xa[c++] = d;
				b++;
			}
			a.xa.length = c;
		}
		if (a.ea != a.xa.length) {
			var e = {};
			for (c = b = 0; b < a.xa.length;) {
				d = a.xa[b];
				if (!Object.prototype.hasOwnProperty.call(e, d)) {
					a.xa[c++] = d;
					e[d] = 1;
				}
				b++;
			}
			a.xa.length = c;
		}
	}
	h.Ea = function(a, b) {
		if (Object.prototype.hasOwnProperty.call(this.qb, a))
			return this.qb[a];
		return b;
	};
	function vc(a, b, c) {
		if (!Object.prototype.hasOwnProperty.call(a.qb, b)) {
			a.ea++;
			a.xa.push(b);
			a.le++;
		}
		a.qb[b] = c;
	}
	h.va = function() {
		return new uc(this);
	};
	function xc(a) {
		return yc(a || arguments.callee.caller, []);
	}
	function yc(a, b) {
		var c = [];
		if (B(b, a) >= 0)
			c.push("[...circular reference...]");
		else if (a && b.length < 50) {
			c.push(zc(a) + "(");
			for ( var d = a.arguments, e = 0; e < d.length; e++) {
				e > 0 && c.push(", ");
				var f;
				f = d[e];
				switch (typeof f) {
				case "object":
					f = f ? "object" : "null";
					break;
				case "string":
					f = f;
					break;
				case "number":
					f = String(f);
					break;
				case "boolean":
					f = f ? "true" : "false";
					break;
				case "function":
					f = (f = zc(f)) ? f : "[fn]";
					break;
				case "undefined":
				default:
					f = typeof f;
					break;
				}
				if (f.length > 40)
					f = f.substr(0, 40) + "...";
				c.push(f);
			}
			b.push(a);
			c.push(")\n");
			try {
				c.push(yc(a.caller, b));
			} catch (g) {
				c.push("[exception trying to get caller]\n");
			}
		} else
			a ? c.push("[...long stack...]") : c.push("[end]");
		return c.join("");
	}
	function zc(a) {
		if (Ac[a])
			return Ac[a];
		a = String(a);
		if (!Ac[a]) {
			var b = /function ([^\(]+)/.exec(a);
			Ac[a] = b ? b[1] : "[Anonymous]";
		}
		return Ac[a];
	}
	var Ac = {};
	function Bc(a, b, c, d, e) {
		this.reset(a, b, c, d, e);
	}
	Bc.prototype.hf = 0;
	Bc.prototype.Kd = null;
	Bc.prototype.Jd = null;
	var Cc = 0;
	Bc.prototype.reset = function(a, b, c, d, e) {
		this.hf = typeof e == "number" ? e : Cc++;
		this.Sf = d || ta();
		this.gc = a;
		this.Ue = b;
		this.Df = c;
		delete this.Kd;
		delete this.Jd;
	};
	Bc.prototype.je = aa("gc");
	function Dc(a) {
		this.Ve = a;
	}
	Dc.prototype.ha = null;
	Dc.prototype.gc = null;
	Dc.prototype.ga = null;
	Dc.prototype.Rd = null;
	function Ec(a, b) {
		this.name = a;
		this.value = b;
	}
	Ec.prototype.toString = ba("name");
	var Fc = new Ec("SEVERE", 1E3), Gc = new Ec("WARNING", 900), Hc = new Ec(
			"CONFIG", 700), Ic = new Ec("FINE", 500);
	Dc.prototype.Qd = function() {
		if (!this.ga)
			this.ga = {};
		return this.ga;
	};
	Dc.prototype.je = aa("gc");
	function Jc(a) {
		if (a.gc)
			return a.gc;
		if (a.ha)
			return Jc(a.ha);
		Ha("Root logger has no level set.");
		return null;
	}
	Dc.prototype.log = function(a, b, c) {
		if (a.value >= Jc(this).value) {
			a = this.we(a, b, c);
			b = "log:" + a.Ue;
			if (o.console)
				if (o.console.timeStamp)
					o.console.timeStamp(b);
				else
					o.console.markTimeline && o.console.markTimeline(b);
			o.msWriteProfilerMark && o.msWriteProfilerMark(b);
			for (b = this; b;) {
				c = b;
				var d = a;
				if (c.Rd)
					for ( var e = 0, f = void 0; f = c.Rd[e]; e++)
						f(d);
				b = b.ha;
			}
		}
	};
	Dc.prototype.we = function(a, b, c) {
		var d = new Bc(a, String(b), this.Ve);
		if (c) {
			d.Kd = c;
			var e;
			var f = arguments.callee.caller;
			try {
				var g;
				var i = ea("window.location.href");
				if (r(c))
					g = {
						message : c,
						name : "Unknown error",
						lineNumber : "Not available",
						fileName : i,
						stack : "Not available"
					};
				else {
					var k, j, l = false;
					try {
						k = c.lineNumber || c.Bf || "Not available";
					} catch (m) {
						k = "Not available";
						l = true;
					}
					try {
						j = c.fileName || c.filename || c.sourceURL || i;
					} catch (A) {
						j = "Not available";
						l = true;
					}
					g = l || !c.lineNumber || !c.fileName || !c.stack ? {
						message : c.message,
						name : c.name,
						lineNumber : k,
						fileName : j,
						stack : c.stack || "Not available"
					} : c;
				}
				e = "Message: " + ya(g.message)
						+ '\nUrl: <a href="view-source:' + g.fileName
						+ '" target="_new">' + g.fileName + "</a>\nLine: "
						+ g.lineNumber + "\n\nBrowser stack:\n"
						+ ya(g.stack + "-> ")
						+ "[end]\n\nJS stack traversal:\n" + ya(xc(f) + "-> ");
			} catch (w) {
				e = "Exception trying to expose exception! You win, we lose. "
						+ w;
			}
			d.Jd = e;
		}
		return d;
	};
	function Kc(a, b, c) {
		a.log(Ic, b, c);
	}
	var Lc = {}, Mc = null;
	function Nc(a) {
		if (!Mc) {
			Mc = new Dc("");
			Lc[""] = Mc;
			Mc.je(Hc);
		}
		var b;
		if (!(b = Lc[a])) {
			b = new Dc(a);
			var c = a.lastIndexOf("."), d = a.substr(0, c);
			c = a.substr(c + 1);
			d = Nc(d);
			d.Qd()[c] = b;
			b.ha = d;
			b = Lc[a] = b;
		}
		return b;
	}
	;
	function Oc() {
	}
	Oc.prototype.sc = null;
	var Pc;
	function Qc() {
	}
	v(Qc, Oc);
	function Rc(a) {
		return (a = Sc(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
	}
	function Tc(a) {
		var b = {};
		if (Sc(a)) {
			b[0] = true;
			b[1] = true;
		}
		return b;
	}
	Qc.prototype.hd = null;
	function Sc(a) {
		if (!a.hd && typeof XMLHttpRequest == "undefined"
				&& typeof ActiveXObject != "undefined") {
			for ( var b = [ "MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0",
					"MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ], c = 0; c < b.length; c++) {
				var d = b[c];
				try {
					new ActiveXObject(d);
					return a.hd = d;
				} catch (e) {
				}
			}
			throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
		}
		return a.hd;
	}
	Pc = new Qc;
	var Uc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
	function Vc(a) {
		E.call(this);
		this.headers = new uc;
		this.Vb = a || null;
	}
	v(Vc, I);
	Vc.prototype.Ka = Nc("goog.net.XhrIo");
	var Wc = /^https?$/i, Xc = [];
	function Yc(a, b, c, d, e, f) {
		var g = new Vc;
		Xc.push(g);
		b && H(g, "complete", b);
		H(g, "ready", sa(Zc, g));
		if (f)
			g.lc = Math.max(0, f);
		g.send(a, c, d, e);
	}
	function Zc(a) {
		a.wb();
		C(Xc, a);
	}
	h = Vc.prototype;
	h.jb = false;
	h.da = null;
	h.Mc = null;
	h.ld = "";
	h.Vd = "";
	h.ec = 0;
	h.fc = "";
	h.cd = false;
	h.xc = false;
	h.jd = false;
	h.xb = false;
	h.lc = 0;
	h.Bb = null;
	h.fe = "";
	h.qf = false;
	h.send = function(a, b, c, d) {
		if (this.da)
			throw Error("[goog.net.XhrIo] Object is active with another request");
		b = b ? b.toUpperCase() : "GET";
		this.ld = a;
		this.fc = "";
		this.ec = 0;
		this.Vd = b;
		this.cd = false;
		this.jb = true;
		this.da = this.Vb ? Rc(this.Vb) : Rc(Pc);
		this.Mc = this.Vb ? this.Vb.sc || (this.Vb.sc = Tc(this.Vb)) : Pc.sc
				|| (Pc.sc = Tc(Pc));
		this.da.onreadystatechange = u(this.Yd, this);
		try {
			Kc(this.Ka, $c(this, "Opening Xhr"));
			this.jd = true;
			this.da.open(b, a, true);
			this.jd = false;
		} catch (e) {
			Kc(this.Ka, $c(this, "Error opening Xhr: " + e.message));
			md(this, 5, e);
			return
		}
		a = c || "";
		var f = this.headers.va();
		d && tc(d, function(i, k) {
			vc(f, k, i);
		});
		b == "POST"
				&& !Object.prototype.hasOwnProperty.call(f.qb, "Content-Type")
				&& vc(f, "Content-Type",
						"application/x-www-form-urlencoded;charset=utf-8");
		tc(f, function(i, k) {
			this.da.setRequestHeader(k, i);
		}, this);
		if (this.fe)
			this.da.Lf = this.fe;
		if ("withCredentials" in this.da)
			this.da.withCredentials = this.qf;
		try {
			if (this.Bb) {
				rc.clearTimeout(this.Bb);
				this.Bb = null;
			}
			if (this.lc > 0) {
				Kc(this.Ka, $c(this, "Will abort after " + this.lc
						+ "ms if incomplete"));
				this.Bb = rc.setTimeout(u(this.mf, this), this.lc);
			}
			Kc(this.Ka, $c(this, "Sending request"));
			this.xc = true;
			this.da.send(a);
			this.xc = false;
		} catch (g) {
			Kc(this.Ka, $c(this, "Send error: " + g.message));
			md(this, 5, g);
		}
	};
	h.mf = function() {
		if (typeof ca != "undefined")
			if (this.da) {
				this.fc = "Timed out after " + this.lc + "ms, aborting";
				this.ec = 8;
				Kc(this.Ka, $c(this, this.fc));
				this.dispatchEvent("timeout");
				this.abort(8);
			}
	};
	function md(a, b, c) {
		a.jb = false;
		if (a.da) {
			a.xb = true;
			a.da.abort();
			a.xb = false;
		}
		a.fc = c;
		a.ec = b;
		nd(a);
		od(a);
	}
	function nd(a) {
		if (!a.cd) {
			a.cd = true;
			a.dispatchEvent("complete");
			a.dispatchEvent("error");
		}
	}
	h.abort = function(a) {
		if (this.da && this.jb) {
			Kc(this.Ka, $c(this, "Aborting"));
			this.jb = false;
			this.xb = true;
			this.da.abort();
			this.xb = false;
			this.ec = a || 7;
			this.dispatchEvent("complete");
			this.dispatchEvent("abort");
			od(this);
		}
	};
	h.Oa = function() {
		if (this.da) {
			if (this.jb) {
				this.jb = false;
				this.xb = true;
				this.da.abort();
				this.xb = false;
			}
			od(this, true);
		}
		Vc.bb.Oa.call(this);
	};
	h.Yd = function() {
		!this.jd && !this.xc && !this.xb ? this.nd() : pd(this);
	};
	h.nd = function() {
		pd(this);
	};
	function pd(a) {
		if (a.jb)
			if (typeof ca != "undefined")
				if (a.Mc[1] && qd(a) == 4 && rd(a) == 2)
					Kc(a.Ka, $c(a, "Local request error detected and ignored"));
				else if (a.xc && qd(a) == 4)
					rc.setTimeout(u(a.Yd, a), 0);
				else {
					a.dispatchEvent("readystatechange");
					if (qd(a) == 4) {
						Kc(a.Ka, $c(a, "Request complete"));
						a.jb = false;
						var b = rd(a), c;
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
							break a;
						}
						if (!(c = c)) {
							if (b = b === 0) {
								b = String(a.ld).match(Uc)[1] || null;
								if (!b && self.location) {
									b = self.location.protocol;
									b = b.substr(0, b.length - 1);
								}
								b = !Wc.test(b ? b.toLowerCase() : "");
							}
							c = b;
						}
						if (c) {
							a.dispatchEvent("complete");
							a.dispatchEvent("success");
						} else {
							a.ec = 6;
							var d;
							try {
								d = qd(a) > 2 ? a.da.statusText : "";
							} catch (e) {
								Kc(a.Ka, "Can not get status: " + e.message);
								d = "";
							}
							a.fc = d + " [" + rd(a) + "]";
							nd(a);
						}
						od(a);
					}
				}
	}
	function od(a, b) {
		if (a.da) {
			var c = a.da, d = a.Mc[0] ? fa : null;
			a.da = null;
			a.Mc = null;
			if (a.Bb) {
				rc.clearTimeout(a.Bb);
				a.Bb = null;
			}
			b || a.dispatchEvent("ready");
			try {
				c.onreadystatechange = d;
			} catch (e) {
				a.Ka.log(Fc,
						"Problem encountered resetting onreadystatechange: "
								+ e.message, void 0);
			}
		}
	}
	function qd(a) {
		return a.da ? a.da.readyState : 0;
	}
	function rd(a) {
		try {
			return qd(a) > 2 ? a.da.status : -1;
		} catch (b) {
			a.Ka.log(Gc, "Can not get status: " + b.message, void 0);
			return -1;
		}
	}
	function sd(a) {
		try {
			return a.da ? a.da.responseText : "";
		} catch (b) {
			Kc(a.Ka, "Can not get responseText: " + b.message);
			return "";
		}
	}
	function $c(a, b) {
		return b + " [" + a.Vd + " " + a.ld + " " + rd(a) + "]";
	}
	Tb[Tb.length] = function(a) {
		Vc.prototype.nd = a(Vc.prototype.nd);
	};
	function J(a, b, c, d, e, f) {
		if (arguments.length == 6)
			this.setTransform(a, b, c, d, e, f);
		else if (arguments.length != 0)
			throw Error("Insufficient matrix parameters");
		else {
			this.Xa = this.$a = 1;
			this.Za = this.Ya = this.ob = this.pb = 0;
		}
	}
	h = J.prototype;
	h.va = function() {
		return new J(this.Xa, this.Za, this.Ya, this.$a, this.ob, this.pb);
	};
	h.setTransform = function(a, b, c, d, e, f) {
		if (!la(a) || !la(b) || !la(c) || !la(d) || !la(e) || !la(f))
			throw Error("Invalid transform parameters");
		this.Xa = a;
		this.Za = b;
		this.Ya = c;
		this.$a = d;
		this.ob = e;
		this.pb = f;
		return this;
	};
	h.scale = function(a, b) {
		this.Xa *= a;
		this.Za *= a;
		this.Ya *= b;
		this.$a *= b;
		return this;
	};
	h.translate = function(a, b) {
		this.ob += a * this.Xa + b * this.Ya;
		this.pb += a * this.Za + b * this.$a;
		return this;
	};
	h.rotate = function(a, b, c) {
		var d = new J, e = Math.cos(a);
		a = Math.sin(a);
		b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e);
		c = this.Xa;
		d = this.Ya;
		this.Xa = b.Xa * c + b.Za * d;
		this.Ya = b.Ya * c + b.$a * d;
		this.ob += b.ob * c + b.pb * d;
		c = this.Za;
		d = this.$a;
		this.Za = b.Xa * c + b.Za * d;
		this.$a = b.Ya * c + b.$a * d;
		this.pb += b.ob * c + b.pb * d;
		return this;
	};
	h.toString = function() {
		return "matrix("
				+ [ this.Xa, this.Za, this.Ya, this.$a, this.ob, this.pb ]
						.join(",") + ")";
	};
	h.transform = function(a, b, c, d, e) {
		var f = b;
		d = d;
		for (b = b + 2 * e; f < b;) {
			e = a[f++];
			var g = a[f++];
			c[d++] = e * this.Xa + g * this.Ya + this.ob;
			c[d++] = e * this.Za + g * this.$a + this.pb;
		}
	};
	function K(a, b) {
		this.$ = a || 0;
		this.aa = b || 0;
	}
	K.prototype.move = function(a, b) {
		this.$ = a;
		this.aa = b;
	};
	new J;
	function td(a, b) {
		return a.$ >= b.left && a.$ <= b.left + b.width && a.aa >= b.top
				&& a.aa <= b.top + b.height;
	}
	function ud(a, b) {
		var c, d, e = false;
		if (td(a.source, b)) {
			c = a.source;
			d = a.target;
		} else if (td(a.target, b)) {
			c = a.target;
			d = a.source;
			e = true;
		} else
			return;
		var f = c.$, g = c.aa, i = d.$, k = d.aa, j = i - f, l = g - k;
		d = L(c, d);
		var m = b.left, A = m + b.width, w = b.top, ja = w + b.height, M = L(c,
				new K(A, w)), n = L(c, new K(A, ja)), q = L(c, new K(m, ja));
		c = L(c, new K(m, w));
		var x = 0, N = 0;
		if (d >= M || d <= n) {
			x = A;
			N = g - (x - f) * (l / j);
		} else if (d > n && d < q) {
			N = ja;
			x = f + (g - N) * (j / l);
		} else if (d >= q && d <= c) {
			x = m;
			N = g - (x - f) * (l / j);
		} else if (d > c && d < M) {
			N = w;
			x = f + (g - N) * (j / l);
		}
		if (e) {
			a.source.move(i, k);
			a.target.move(x, N);
		} else {
			a.source.move(x, N);
			a.target.move(i, k);
		}
	}
	function vd(a, b) {
		if (L(a.source, a.target) < Math.PI)
			b = -b;
		var c = O(a.source, a.target), d = b * (a.target.aa - a.source.aa) / c;
		c = -(b * (a.target.$ - a.source.$)) / c;
		a.source.move(a.source.$ + d, a.source.aa + c);
		a.target.move(a.target.$ + d, a.target.aa + c);
	}
	function O(a, b) {
		return Math.sqrt(Math.pow(b.$ - a.$, 2) + Math.pow(b.aa - a.aa, 2));
	}
	function L(a, b) {
		var c = O(a, b), d = b.$ - a.$, e = b.aa - a.aa;
		c = Math.acos(Math.abs(d) / c);
		if (d >= 0 && e >= 0)
			return c;
		if (d >= 0 && e <= 0)
			return 2 * Math.PI - c;
		if (d <= 0 && e <= 0)
			return Math.PI + c;
		return Math.PI - c;
	}
	;
	function wd(a, b) {
		var c = new F(a);
		c.Ff = b;
		return c;
	}
	;
	function xd() {
	}
	;
	function yd(a, b, c, d) {
		E.call(this);
		if (c !== undefined)
			if (!(xb(Q, c) || c instanceof xd))
				throw Error(zd);
		if (d !== undefined)
			if (!xb(R, d))
				throw Error(Ad);
		this.ba = a;
		this.ia = b;
		this.ib = c || Q.tb;
		this.ca = null;
		this.Ab = d || 0;
		this.bc = false;
	}
	v(yd, I);
	h = yd.prototype;
	h.Ob = function(a) {
		this.ca = a;
		this.ab(a);
	};
	h.contains = function(a) {
		return a === this.ba || a === this.ia;
	};
	h.eb = function() {
		return this.ib instanceof xd;
	};
	h.ie = function(a) {
		if (a !== this.bc) {
			this.bc = a;
			this.dispatchEvent(Bd);
		}
	};
	h.$b = function() {
		return {
			type : this.ib,
			Of : this.Ab,
			source : this.ba,
			target : this.ia
		};
	};
	var Bd = "bond-hover-changed", Q = {
		tb : 1,
		Wb : 2,
		Nc : 3
	}, R = {
		yd : 0,
		Zb : 1,
		xd : 3,
		oc : 4,
		Xb : 6
	}, zd = "No such bond type", Ad = "Invalid bond stereo";
	function Cd(a, b, c) {
		if (!(b && c))
			return [];
		if (b === c)
			return [ a.ba, a.ia, b ];
		if (Dd(a.ca, b, c))
			return [ a.ba, a.ia, c, b ];
		for ( var d = b.ya, e = c.ya, f = [], g = 0; g < d.length; g++)
			for ( var i = 0; i < e.length; i++)
				if (d[g] === e[i]) {
					f.push(d[g]);
					break;
				}
		if (f[0])
			return [ a.ba, a.ia, c, f[0], b ];
		d = b.ya;
		e = c.ya;
		for (f = 0; f < d.length; f++)
			if (d[f] !== a.ba)
				for (g = 0; g < e.length; g++)
					if (e[g] !== a.ia)
						if (Dd(a.ca, d[f], e[g]))
							return [ a.ba, a.ia, c, e[g], d[f], b ];
		return [];
	}
	function Ed(a) {
		a = a.oa;
		if (a.length !== 2)
			return false;
		for ( var b = 0; b < a.length; b++)
			if (a[b].ib !== Q.Wb)
				return false;
		return true;
	}
	function Fd(a, b) {
		var c = L(a.ba, a.ia), d = L(a.ba, b), e;
		e = Math.PI + c;
		e = e < 0 ? 2 * Math.PI + e : e >= 2 * Math.PI ? e - 2 * Math.PI : e;
		if (d < e && d > c)
			return true;
		else if (d > e && d < c)
			return true;
		return false;
	}
	;
	function S() {
		this.na = [];
		this.ea = [];
		this.Fa = [];
	}
	S.prototype.Ma = null;
	S.prototype.ra = null;
	S.prototype.gb = true;
	var Gd = [];
	Gd[0] = 2;
	Gd[1] = 2;
	Gd[2] = 6;
	Gd[3] = 6;
	Gd[4] = 0;
	function Hd(a, b) {
		if (b.ra) {
			Array.prototype.push.apply(a.na, b.na);
			Array.prototype.push.apply(a.ea, b.ea);
			Array.prototype.push.apply(a.Fa, b.Fa);
			a.ra = b.ra.concat();
			a.Ma = b.Ma.concat();
			a.gb = a.gb && b.gb;
		}
		return a;
	}
	h = S.prototype;
	h.clear = function() {
		this.na.length = 0;
		this.ea.length = 0;
		this.Fa.length = 0;
		delete this.Ma;
		delete this.ra;
		delete this.gb;
		return this;
	};
	h.moveTo = function(a, b) {
		if (this.na[this.na.length - 1] == 0)
			this.Fa.length -= 2;
		else {
			this.na.push(0);
			this.ea.push(1);
		}
		this.Fa.push(a, b);
		this.ra = this.Ma = [ a, b ];
		return this;
	};
	h.lineTo = function() {
		var a = this.na[this.na.length - 1];
		if (a == null)
			throw Error("Path cannot start with lineTo");
		if (a != 1) {
			this.na.push(1);
			this.ea.push(0);
		}
		for (a = 0; a < arguments.length; a += 2) {
			var b = arguments[a], c = arguments[a + 1];
			this.Fa.push(b, c);
		}
		this.ea[this.ea.length - 1] += a / 2;
		this.ra = [ b, c ];
		return this;
	};
	h.Zc = function() {
		var a = this.na[this.na.length - 1];
		if (a == null)
			throw Error("Path cannot start with curve");
		if (a != 2) {
			this.na.push(2);
			this.ea.push(0);
		}
		for (a = 0; a < arguments.length; a += 6) {
			var b = arguments[a + 4], c = arguments[a + 5];
			this.Fa.push(arguments[a], arguments[a + 1], arguments[a + 2],
					arguments[a + 3], b, c);
		}
		this.ea[this.ea.length - 1] += a / 6;
		this.ra = [ b, c ];
		return this;
	};
	h.close = function() {
		var a = this.na[this.na.length - 1];
		if (a == null)
			throw Error("Path cannot start with close");
		if (a != 4) {
			this.na.push(4);
			this.ea.push(1);
			this.ra = this.Ma;
		}
		return this;
	};
	h.Pc = function(a, b, c, d) {
		var e = this.ra[0] - a * Math.cos(c * Math.PI / 180), f = this.ra[1]
				- b * Math.sin(c * Math.PI / 180), g = d * Math.PI / 180;
		d = Math.ceil(Math.abs(g) / Math.PI * 2);
		g = g / d;
		c = c * Math.PI / 180;
		for ( var i = 0; i < d; i++) {
			var k = Math.cos(c), j = Math.sin(c), l = 4 / 3 * Math.sin(g / 2)
					/ (1 + Math.cos(g / 2)), m = e + (k - l * j) * a, A = f
					+ (j + l * k) * b;
			c += g;
			k = Math.cos(c);
			j = Math.sin(c);
			this.Zc(m, A, e + (k + l * j) * a, f + (j - l * k) * b, e + k * a,
					f + j * b);
		}
		return this;
	};
	function Id(a, b) {
		for ( var c = a.Fa, d = 0, e = 0, f = a.na.length; e < f; e++) {
			var g = a.na[e], i = Gd[g] * a.ea[e];
			b(g, c.slice(d, d + i));
			d += i;
		}
	}
	h.va = function() {
		var a = new this.constructor;
		a.na = this.na.concat();
		a.ea = this.ea.concat();
		a.Fa = this.Fa.concat();
		a.Ma = this.Ma && this.Ma.concat();
		a.ra = this.ra && this.ra.concat();
		a.gb = this.gb;
		return a;
	};
	var Jd = {};
	Jd[0] = S.prototype.moveTo;
	Jd[1] = S.prototype.lineTo;
	Jd[4] = S.prototype.close;
	Jd[2] = S.prototype.Zc;
	Jd[3] = S.prototype.Pc;
	function Kd(a) {
		if (a.gb)
			return a.va();
		var b = new S;
		Id(a, function(c, d) {
			Jd[c].apply(b, d);
		});
		return b;
	}
	S.prototype.transform = function(a) {
		if (!this.gb)
			throw Error("Non-simple path");
		a.transform(this.Fa, 0, this.Fa, 0, this.Fa.length / 2);
		this.Ma && a.transform(this.Ma, 0, this.Ma, 0, 1);
		this.ra && this.Ma != this.ra && a.transform(this.ra, 0, this.ra, 0, 1);
		return this;
	};
	S.prototype.mb = function() {
		return this.na.length == 0;
	};
	function Ld() {
	}
	ga(Ld);
	Ld.prototype.We = 0;
	Ld.db();
	function V(a) {
		E.call(this);
		this.uc = a || pb || (pb = new Jb);
		this.gf = Md;
	}
	v(V, I);
	V.prototype.ye = Ld.db();
	var Md = null;
	h = V.prototype;
	h.cc = null;
	h.Ia = false;
	h.fa = null;
	h.gf = null;
	h.Je = null;
	h.ha = null;
	h.ga = null;
	h.Ua = null;
	h.of = false;
	function Nd(a) {
		return a.cc || (a.cc = ":" + (a.ye.We++).toString(36));
	}
	h.Ha = ba("fa");
	function Od(a, b) {
		if (a == b)
			throw Error("Unable to set parent component");
		if (b && a.ha && a.cc
				&& (a.ha.Ua && a.cc ? yb(a.ha.Ua, a.cc) || null : null)
				&& a.ha != b)
			throw Error("Unable to set parent component");
		a.ha = b;
		V.bb.ab.call(a, b);
	}
	h.ab = function(a) {
		if (this.ha && this.ha != a)
			throw Error("Method not supported");
		V.bb.ab.call(this, a);
	};
	h.lb = function() {
		this.fa = this.uc.createElement("div");
	};
	h.pd = function(a) {
		this.Gc(a);
	};
	h.Gc = function(a, b) {
		if (this.Ia)
			throw Error("Component already rendered");
		this.fa || this.lb();
		a ? a.insertBefore(this.fa, b || null) : this.uc.Wa.body
				.appendChild(this.fa);
		if (!this.ha || this.ha.Ia)
			Pd(this);
	};
	function Pd(a) {
		a.Ia = true;
		a.ga && Ia(a.ga, function(b) {
			!b.Ia && b.Ha() && Pd(b);
		}, void 0);
	}
	function Qd(a) {
		a.ga && Ia(a.ga, function(b) {
			b.Ia && Qd(b);
		}, void 0);
		a.wc && a.wc.Kf();
		a.Ia = false;
	}
	h.Oa = function() {
		V.bb.Oa.call(this);
		this.Ia && Qd(this);
		if (this.wc) {
			this.wc.wb();
			delete this.wc;
		}
		this.ga && Ia(this.ga, function(a) {
			a.wb();
		}, void 0);
		!this.of && this.fa && this.fa && this.fa.parentNode
				&& this.fa.parentNode.removeChild(this.fa);
		this.ha = this.Je = this.fa = this.Ua = this.ga = null;
	};
	h.Oc = function(a, b) {
		var c = this.ga ? this.ga.length : 0;
		if (a.Ia && (b || !this.Ia))
			throw Error("Component already rendered");
		if (c < 0 || c > (this.ga ? this.ga.length : 0))
			throw Error("Child component index out of bounds");
		if (!this.Ua || !this.ga) {
			this.Ua = {};
			this.ga = [];
		}
		if (a.ha == this) {
			this.Ua[Nd(a)] = a;
			C(this.ga, a);
		} else {
			var d = this.Ua, e = Nd(a);
			if (e in d)
				throw Error('The object already contains the key "' + e + '"');
			d[e] = a;
		}
		Od(a, this);
		Oa(this.ga, c, 0, a);
		if (a.Ia && this.Ia && a.ha == this) {
			d = this.fa;
			d.insertBefore(a.Ha(), d.childNodes[c] || null);
		} else if (b) {
			this.fa || this.lb();
			c = this.ga ? this.ga[c + 1] || null : null;
			a.Gc(this.fa, c ? c.fa : null);
		} else
			this.Ia && !a.Ia && a.fa && Pd(a);
	};
	h.removeChild = function(a, b) {
		if (a) {
			var c = r(a) ? a : Nd(a);
			a = this.Ua && c ? yb(this.Ua, c) || null : null;
			if (c && a) {
				var d = this.Ua;
				c in d && delete d[c];
				C(this.ga, a);
				if (b) {
					Qd(a);
					a.fa && a.fa && a.fa.parentNode
							&& a.fa.parentNode.removeChild(a.fa);
				}
				Od(a, null);
			}
		}
		if (!a)
			throw Error("Child is not in parent component");
		return a;
	};
	function Rd() {
	}
	;
	function Sd(a, b) {
		this.Va = a;
		this.Zd = b || 1;
	}
	v(Sd, Rd);
	function Td(a, b) {
		this.ja = a;
		this.Va = b;
	}
	Td.prototype.wa = ba("ja");
	function Ud(a, b) {
		E.call(this);
		this.fa = a;
		this.Qa = b;
		this.$c = false;
	}
	v(Ud, I);
	h = Ud.prototype;
	h.Qa = null;
	h.fa = null;
	h.nc = null;
	h.Ha = ba("fa");
	h.addEventListener = function(a, b, c, d) {
		H(this.fa, a, b, c, d);
	};
	h.removeEventListener = function(a, b, c, d) {
		lc(this.fa, a, b, c, d);
	};
	h.Oa = function() {
		Ud.bb.Oa.call(this);
		oc(this.fa);
	};
	function Vd(a, b) {
		Ud.call(this, a, b);
	}
	v(Vd, Ud);
	function Wd(a, b) {
		Ud.call(this, a, b);
	}
	v(Wd, Vd);
	Wd.prototype.clear = function() {
		for ( var a = this.Ha(), b; b = a.firstChild;)
			a.removeChild(b);
	};
	Wd.prototype.Jc = function(a, b) {
		this.Qa.Mf(this.Ha(), {
			width : a,
			height : b
		});
	};
	try {
		eval("document.namespaces");
	} catch (Xd) {
	}
	;
	function Yd() {
		return document
				&& document.implementation
				&& document.implementation.hasFeature
				&& document.implementation.hasFeature(
						"http://www.w3.org/TR/SVG11/feature#Shape", "1.1");
	}
	;
	var Zd = [ "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na",
			"Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V",
			"Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se",
			"Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh",
			"Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba",
			"La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho",
			"Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt",
			"Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac",
			"Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
			"Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg",
			"Cn", "Uut", "Uuq", "Uup", "Uuh", "Uus", "Uuo" ], $d = {
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
	}, ae = {
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
	var be = [];
	function ce(a) {
		if (B(be, a.ua) >= 0)
			return 0;
		for ( var b = a.oa, c = 0; c < b.length; c++)
			if (b[c].eb())
				return 0;
		b = (b = $d[a.ua]) ? b : -1;
		if (b === -1)
			return 0;
		c = 0;
		switch (b) {
		case 13:
			c = a.Aa != 0 ? 0 : de(a);
			break;
		case 14:
			c = ee(a) > 3 ? 0 : ee(a) > 4 ? 0 : 4 - (ee(a) + Math.abs(a.Aa));
			break;
		case 15:
			c = de(a);
			break;
		case 16:
			c = ee(a) >= 2 ? 0 : Math.abs(a.Aa) >= 2 ? 0 : 2 - (ee(a) - a.Aa);
			break;
		case 17:
			c = ee(a) != 0 ? 0 : Math.abs(a.Aa >= 2) ? 0 : ee(a) > 1 ? 0
					: 1 - (ee(a) - a.Aa);
			break;
		}
		return c > 0 ? c : 0;
	}
	function de(a) {
		if (ee(a) > 3)
			return 0;
		if (a.Aa > 1)
			return 0;
		return 3 - (ee(a) - a.Aa);
	}
	;
	function fe(a, b, c, d) {
		E.call(this);
		if (a === undefined)
			throw Error(ge);
		this.ua = a;
		this.ca = null;
		this.oa = [];
		this.ya = [];
		this.yb = this.ce = this.Aa = 0;
		this.$ = b || 0;
		this.aa = c || 0;
		this.Tf = d || 0;
		this.bc = this.he = false;
		this.Ef = true;
	}
	v(fe, I);
	h = fe.prototype;
	h.Ob = function(a) {
		this.ca = a;
		this.ab(a);
	};
	function ee(a) {
		for ( var b = 0, c = 0; c < a.oa.length; c++)
			b += a.oa[c].ib;
		return b;
	}
	function he(a, b) {
		if (a.Aa !== b) {
			if (!(b > -16 && b < 16 ? a.eb() || b <= B(Zd, a.ua) + 1 : false))
				throw Error(ie);
			var c = a.$b();
			a.Aa = b;
			a.dispatchEvent(wd(je, c));
		}
	}
	function ke(a, b) {
		if (b !== 0)
			if (ae[a.ua][1].indexOf(b) === -1)
				throw Error(le);
		var c = a.$b();
		a.yb = b;
		a.dispatchEvent(wd(je, c));
	}
	h.ie = function(a) {
		if (this.bc !== a) {
			this.bc = a;
			this.dispatchEvent(me);
		}
	};
	function ne(a, b) {
		if (a.he !== b) {
			a.he = b;
			a.dispatchEvent(oe);
		}
	}
	h.move = function(a, b) {
		if (!(this.$ === a && this.aa === b)) {
			var c = this.$b();
			this.$ = a;
			this.aa = b;
			this.dispatchEvent(wd(je, c));
		}
	};
	h.eb = function() {
		return this.ua instanceof pe;
	};
	h.$b = function() {
		return {
			x : this.$,
			y : this.aa,
			Pf : this.ua,
			xf : this.Aa,
			Af : this.yb
		};
	};
	var oe = "selection-changed", me = "atom-hover-changed", je = "atom-definition-changed", qe = {
		tf : 0,
		uf : 1,
		sf : 2,
		vf : 3
	}, ge = "Invalid atom symbol", le = "Invalid isotope", ie = "Invalid charge";
	function re() {
		E.call(this);
		this.Ub = [];
	}
	v(re, I);
	re.prototype.mb = function() {
		return this.Ub.length === 0;
	};
	re.prototype.clear = function() {
		if (this.Ub.length !== 0) {
			this.Ub = [];
			this.dispatchEvent(se);
		}
	};
	var se = "element-list-changed";
	function pe() {
		this.od = this.Fb = undefined;
	}
	v(pe, I);
	function te(a, b) {
		a.Fb && a.Fb.ab(null);
		a.Fb = b;
		a.od = undefined;
		a.Fb && a.Fb.ab(a);
	}
	;
	function ue() {
		E.call(this);
		this.ka = [];
		this.oa = [];
	}
	v(ue, I);
	function Dd(a, b, c) {
		for ( var d = 0; d < a.oa.length; d++) {
			var e = a.oa[d];
			if (e.contains(b) && e.contains(c))
				return e;
		}
	}
	ue.prototype.pc = function(a, b, c, d) {
		b = new fe(a, b, c, d);
		b.Ob(this);
		this.ka.push(b);
		this.dispatchEvent(new F(ve, b));
		b.eb() && a.ab(b);
		return b;
	};
	function we(a, b, c, d, e) {
		if (b === c)
			throw Error(xe);
		b = new yd(b, c, d, e);
		c = b.ba;
		d = b.ia;
		c.oa.push(b);
		d.oa.push(b);
		c.ya.push(d);
		d.ya.push(c);
		a.oa.push(b);
		b.Ob(a);
		a.dispatchEvent(new F(ye, b));
		return b;
	}
	ue.prototype.clear = function() {
		for ( var a = Na(this.ka), b = 0; b < a.length; b++) {
			var c = a[b];
			if (C(this.ka, c)) {
				c.Ob(null);
				c.ie(false);
				ne(c, false);
				for ( var d = Na(c.oa), e = 0; e < d.length; e++) {
					var f = d[e];
					if (C(this.oa, f)) {
						var g = f.ba, i = f.ia;
						C(g.oa, f);
						C(i.oa, f);
						C(g.ya, i);
						C(i.ya, g);
						this.dispatchEvent(new F(ze, f));
						f.Ob(null);
					} else
						throw Error(Ae);
				}
				this.dispatchEvent(new F(Be, c));
			} else
				throw Error(Ce);
		}
	};
	var ye = "bond-added", ze = "bond-removed", ve = "atom-added", Be = "atom-removed", xe = "Connecting atom with itself", Ce = "No Such Atom", Ae = "No Such Bond";
	function De(a, b) {
		this.Ie = a;
		this.pe = b;
	}
	De.prototype.Ie = undefined;
	De.prototype.pe = undefined;
	function Ee() {
		Fe(this);
	}
	Ee.prototype.fb = function(a, b, c) {
		if (a === undefined)
			throw new De(undefined, "Undefined molfile");
		if (a === "")
			throw new De(undefined, "Blank molfile");
		Fe(this);
		if (b)
			this.ca = b;
		this.ca.clear();
		this.Dc = a;
		this.de = this.Dc.search(Ge) !== -1 ? false : true;
		this.ef = this.Dc.search(He) !== -1 ? false : true;
		this.qa = this.Dc.split("\r\n").join("\n").split("\n");
		this.Me = this.qa[0];
		try {
			this.Pe = this.qa[1].slice(0, 2);
			this.Oe = this.qa[1].slice(2, 8);
			var d = W(this.qa[1].slice(11, 12), 2) - 1, e = W(this.qa[1].slice(
					12, 14), 2);
			this.Le.setFullYear(2E3 + W(this.qa[1].slice(14, 16), 2), d, e);
		} catch (f) {
			this.sb.push(Ie);
		}
		this.Ke = this.qa[2];
		var g, i, k;
		try {
			g = this.qa[3].slice(0, 3);
			i = this.qa[3].slice(3, 6);
			k = this.qa[3].slice(12, 15);
			this.Od = this.qa[3].slice(33, 39).match(Je)[0];
		} catch (j) {
			throw new De(4, "Invalid Input");
		}
		this.rb = W(g, 4);
		this.jc = W(i, 4);
		this.re = W(k) == true;
		this.Od !== "V2000" && this.sb.push(Ke);
		if (this.qa.length < 5 + this.rb + this.jc || this.qa.length < 5)
			throw new De(undefined, "Incomplete Molfile");
		Le(this, c);
		Me(this);
		Ne(this);
		return this.ca;
	};
	function Oe(a, b) {
		if (a.search(Pe) === -1)
			return a.match(Je)[0];
		else
			throw new De(b, "Expected Letters");
	}
	function W(a, b) {
		var c = Number(a);
		if (isNaN(c))
			throw new De(b, "Could not convert string to number: [" + a + "]");
		return c;
	}
	function Fe(a) {
		a.ca = new ue;
		a.Od = "";
		a.Me = "";
		a.Pe = "";
		a.Oe = "";
		a.Le = new Date;
		a.Ke = "";
		a.rb = 0;
		a.jc = 0;
		a.If = 0;
		a.re = false;
		a.de = true;
		a.ef = true;
		a.Dc = "";
		a.qa = [];
		a.sb = [];
	}
	function Le(a, b) {
		var c = Pa(a.qa, 4, 4 + a.rb);
		Ka(c, u(function(d, e, f) {
			d = f + 5;
			var g = Oe(e.slice(31, 34), d), i = W(e.slice(0, 10), d), k = W(e
					.slice(10, 20), d), j = W(e.slice(20, 30), d), l = W(e
					.slice(34, 36), d);
			f = W(e.slice(36, 39), d);
			W(e.slice(39, 42), d);
			W(e.slice(48, 51), d);
			if (g === "*")
				g = new pe;
			else if (g === "L") {
				g = new pe;
				te(g, new re);
			} else if (g === "R#")
				g = new pe;
			if (b) {
				i *= b;
				k *= b;
				j *= b;
			}
			e = this.ca.pc(g, i, k, j);
			if (l) {
				g = ae[e.ua];
				i = g[1];
				ke(e, i[i.indexOf(g[0]) + l]);
			}
			if (this.de) {
				g = l = 0;
				switch (f) {
				case 0:
					l = 0;
					break;
				case 1:
					l = 3;
					break;
				case 2:
					l = 2;
					break;
				case 3:
					l = 1;
					break;
				case 4:
					l = 0;
					g = 2;
					break;
				case 5:
					l = -1;
					break;
				case 6:
					l = -2;
					break;
				case 7:
					l = -3;
					break;
				default:
					this.sb.push(Qe + d);
				}
				he(e, l);
				if (!xb(qe, g))
					throw Error("Invalid radical");
				e.ce = g;
			}
		}, a));
	}
	function Me(a) {
		var b = Pa(a.qa, 4 + a.rb, 4 + a.rb + a.jc);
		Ka(
				b,
				u(
						function(c, d, e) {
							c = e + 5 + this.rb;
							e = W(d.slice(0, 3), c);
							var f = W(d.slice(3, 6), c), g = W(d.slice(6, 9), c);
							if (g === 8)
								g = new xd;
							d = W(d.slice(9, 12), c);
							if (!(d === R.yd || d === R.Zb || d === R.xd
									|| d === R.oc || d === R.Xb))
								throw new De(c, "Unsupported Bond Stereo: " + d);
							c = we(this.ca, this.ca.ka[e - 1],
									this.ca.ka[f - 1], g);
							if (c.Ab !== d) {
								if (d !== undefined)
									if (!xb(R, d))
										throw Error(Ad);
								e = c.$b();
								c.Ab = d;
								c
										.dispatchEvent(wd(
												"bond-definition-changed", e));
							}
						}, a));
	}
	function Ne(a) {
		var b = Pa(a.qa, 4 + a.rb + a.jc, a.qa.length), c = false;
		(b = Ka(b, u(function(d, e, f, g) {
			if (c)
				return false;
			else if (e === "M  END") {
				c = true;
				return false;
			} else
				return Re(this, d, e, f, g);
		}, a), true)) && a.sb.push(Se);
		return b;
	}
	function Re(a, b, c, d) {
		var e = d + 5 + a.rb + a.jc;
		if (c.search(Te) !== -1)
			Ue(a, c, e);
		else if (c.search(Ve) === -1) {
			d = function(f, g, i) {
				var k = [];
				if (g.length > 1 + 8 * (f + 1))
					i.sb.push(Qe + e);
				else
					g.length < 1 + 8 * (f + 1) && i.sb.push(We + e);
				for ( var j = 0; j < f; j++) {
					i = g.slice(9 + j * 8, 17 + j * 8);
					i.length === 8 && k.push(i);
				}
				return Ja(k, function(l) {
					var m = [];
					m.push(W(l.slice(0, 4), e));
					m.push(W(l.slice(4, 8), e));
					return m;
				});
			}(W(c.slice(6, 9)), c, a);
			if (b)
				if (c.search(Xe) !== -1)
					return false;
				else if (c.search(He) !== -1) {
					b = function(f) {
						ke(a.ca.ka[f[0] - 1], f[1]);
					};
					Ia(d, b);
					return true;
				} else if (c.search(Ye) !== -1) {
					b = function(f) {
						he(a.ca.ka[f[0] - 1], f[1]);
					};
					Ia(d, b);
					return true;
				} else if (c.search(Ze) !== -1) {
					b = function(f) {
						var g = f[1];
						if (!xb(qe, g))
							throw Error("Invalid radical");
						a.ca.ka[f[0] - 1].ce = g;
					};
					Ia(d, b);
					return true;
				} else if (c.search($e) !== -1) {
					b = function(f) {
						var g = a.ca.ka[f[0] - 1].ua;
						f = f[1];
						if (g.od !== f) {
							te(g, undefined);
							g.od = f;
							g.dispatchEvent("atom-query-changed");
						}
					};
					Ia(d, b);
				} else {
					c === "" ? a.sb.push(af + e) : a.sb.push(Qe + e);
					return true;
				}
			else
				return b;
		}
	}
	function Ue(a, b, c) {
		var d = W(b.slice(7, 10), c), e = W(b.slice(10, 13), c);
		b.slice(14, 15);
		for ( var f = 0; f < e; f++) {
			var g = 16 + f * 4, i = Oe(b.slice(g, g + 4), c);
			g = a.ca.ka[d - 1].ua.Fb;
			var k = i;
			if (B(Zd, k) !== -1) {
				i = g;
				k = k;
				B(i.Ub, k) >= 0 ? C(i.Ub, k) : i.Ub.push(k);
				g.dispatchEvent(se);
			} else
				throw ge;
		}
	}
	var Ie = "Invalid header", Qe = "Property ignored at line: ", Se = 'Incomple molfile, "M  END" not found.', Ke = "Unrecognized format, attempting to read as V2000.", af = "Blank line at line: ", We = "Short property line at line: ", Pe = /[^a-zA-Z\*\# ]/, Je = /[\w\*\#]+/, Xe = /^M  END/, Ye = /^M  CHG/, He = /^M  ISO/, Ze = /^M  RAD/, Te = /^M  ALS/, $e = /^M  RGP/, Ve = /^M  STY/, Ge = /^M  CHG|^M  RAD/m;
	function bf() {
	}
	;
	function cf() {
		this.la = [];
		this.Uc = [];
		this.ne = [];
		this.Ec = [];
		this.Ec[0] = 128;
		for ( var a = 1; a < 64; ++a)
			this.Ec[a] = 0;
		this.reset();
	}
	v(cf, bf);
	cf.prototype.reset = function() {
		this.la[0] = 1732584193;
		this.la[1] = 4023233417;
		this.la[2] = 2562383102;
		this.la[3] = 271733878;
		this.la[4] = 3285377520;
		this.ke = this.dc = 0;
	};
	function df(a, b, c) {
		c || (c = 0);
		for ( var d = a.ne, e = c; e < c + 64; e += 4)
			d[e / 4] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3];
		for (e = 16; e < 80; e++) {
			var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
			d[e] = (f << 1 | f >>> 31) & 4294967295;
		}
		b = a.la[0];
		c = a.la[1];
		var g = a.la[2], i = a.la[3], k = a.la[4], j;
		for (e = 0; e < 80; e++) {
			if (e < 40)
				if (e < 20) {
					f = i ^ c & (g ^ i);
					j = 1518500249;
				} else {
					f = c ^ g ^ i;
					j = 1859775393;
				}
			else if (e < 60) {
				f = c & g | i & (c | g);
				j = 2400959708;
			} else {
				f = c ^ g ^ i;
				j = 3395469782;
			}
			f = (b << 5 | b >>> 27) + f + k + j + d[e] & 4294967295;
			k = i;
			i = g;
			g = (c << 30 | c >>> 2) & 4294967295;
			c = b;
			b = f;
		}
		a.la[0] = a.la[0] + b & 4294967295;
		a.la[1] = a.la[1] + c & 4294967295;
		a.la[2] = a.la[2] + g & 4294967295;
		a.la[3] = a.la[3] + i & 4294967295;
		a.la[4] = a.la[4] + k & 4294967295;
	}
	cf.prototype.update = function(a, b) {
		if (b === undefined)
			b = a.length;
		var c = this.Uc, d = this.dc, e = 0;
		if (r(a))
			for (; e < b;) {
				c[d++] = a.charCodeAt(e++);
				if (d == 64) {
					df(this, c);
					d = 0;
				}
			}
		else
			for (; e < b;) {
				c[d++] = a[e++];
				if (d == 64) {
					df(this, c);
					d = 0;
				}
			}
		this.dc = d;
		this.ke += b;
	};
	function ef(a) {
		for ( var b = [], c = 0, d = 0; d < a.length; d++) {
			for ( var e = a.charCodeAt(d); e > 255;) {
				b[c++] = e & 255;
				e >>= 8;
			}
			b[c++] = e;
		}
		a = new cf;
		a.update(b);
		b = [];
		d = a.ke * 8;
		a.dc < 56 ? a.update(a.Ec, 56 - a.dc) : a
				.update(a.Ec, 64 - (a.dc - 56));
		for (c = 63; c >= 56; c--) {
			a.Uc[c] = d & 255;
			d /= 256;
		}
		df(a, a.Uc);
		for (c = d = 0; c < 5; c++)
			for (e = 24; e >= 0; e -= 8)
				b[d++] = a.la[c] >> e & 255;
		a = [];
		for (c = 0; c < b.length; c++) {
			a[c * 2] = "0123456789abcdef".charAt(b[c] >> 4 & 15);
			a[c * 2 + 1] = "0123456789abcdef".charAt(b[c] & 15);
		}
		return a.join("");
	}
	;
	function ff() {
		E.call(this);
		this.da = new Vc;
		this.md = false;
		this.hc();
	}
	v(ff, I);
	ga(ff);
	ff.prototype.fb = function(a) {
		a ? this.da.send(a) : this.dispatchEvent(gf);
	};
	ff.prototype.hc = function() {
		H(this.da, "success", this.af, false, this);
		H(this.da, "error", this.$e, false, this);
	};
	ff.prototype.af = function() {
		sd(this.da);
		if (sd(this.da)) {
			var a = sd(this.da).split("\n"), b;
			if (a.length < 5)
				b = false;
			else {
				var c = a.length;
				b = a[c - 1];
				c = Pa(a, 0, c - 1).join("\n");
				var d;
				d = "";
				for ( var e = 4, f = 0; f < 10; f++) {
					e += f * 7;
					d += "0123456789abcdef".charAt(e % 16);
				}
				d = d + ef(a[4]);
				c = ef(c + d);
				b = b === c;
			}
			if (b) {
				b = {};
				for (c = 0; c < a.length - 1; c++) {
					d = a[c].split(": ");
					b[d[0]] = d[1];
				}
				if (!(a = b["License Type"] === "redistribution"))
					if (b["License Type"] !== "website")
						a = false;
					else {
						a = document.domain;
						b = b["Licensed Host"];
						a = a === b || a === "www." + b;
					}
				if (a)
					this.md = true;
			}
		}
		this.md ? this.dispatchEvent(hf) : this.dispatchEvent(gf);
	};
	ff.prototype.$e = function() {
		this.dispatchEvent(gf);
	};
	var gf = "var w=3", hf = "var w=5";
	function X() {
		S.call(this);
	}
	v(X, S);
	X.prototype.ub = null;
	X.prototype.va = function() {
		var a = X.bb.va.call(this);
		a.ub = this.ub && this.ub.va();
		return a;
	};
	X.prototype.transform = function(a) {
		X.bb.transform.call(this, a);
		this.ub = null;
		return this;
	};
	function Y(a) {
		if (!a.ub && !a.mb()) {
			var b, c = b = Number.POSITIVE_INFINITY, d, e = d = Number.NEGATIVE_INFINITY;
			Id(a.gb ? a : Kd(a), function(f, g) {
				for ( var i = 0, k = g.length; i < k; i += 2) {
					c = Math.min(c, g[i]);
					e = Math.max(e, g[i]);
					b = Math.min(b, g[i + 1]);
					d = Math.max(d, g[i + 1]);
				}
			});
			a.ub = new Lb(c, b, e - c, d - b);
		}
		return a.ub;
	}
	;
	function Z(a, b) {
		this.Va = a;
		this.Zd = undefined;
		this.Zd = b === 0 ? 0 : b || 1;
	}
	v(Z, Sd);
	Z.prototype.Ic = aa("Va");
	var jf = {
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
	function kf(a) {
		this.ta = a;
	}
	kf.prototype.transform = function(a) {
		this.ta.transform(a);
	};
	kf.prototype.Gb = function() {
		return Y(this.ta);
	};
	function lf() {
		this.ba = jf;
	}
	ga(lf);
	function mf(a, b) {
		var c = a.ba[b];
		if (!c)
			throw Error(nf);
		var d = c.points;
		c = c.commands;
		var e = new X, f = 0, g = 0;
		for (f = 0; f < c.length; f += 1)
			switch (c[f]) {
			case "M":
				e.moveTo(d[g++], d[g++]);
				break;
			case "L":
				e.lineTo(d[g++], d[g++]);
				break;
			case "C":
				throw {
					name : "UnsupportedOperation",
					message : "Path command C not used."
				};
			case "Q":
				x1 = d[g++];
				y1 = d[g++];
				x2 = d[g++];
				y2 = d[g++];
				e.Zc(x1, y1, x2, y2, x2, y2);
				break;
			case "Z":
				e.close();
				break;
			default:
				throw {
					name : "UnsupportedOperation",
					message : "Command " + c[f] + " not known."
				};
			}
		return new kf(e);
	}
	var nf = "Unknown character";
	function of(a) {
		this.$d = a;
		this.vb = undefined;
		this.nc = new J;
		this.Kb = [];
		this.Hb = [];
		this.wd = undefined;
		this.Kc = 0.1;
	}
	function pf(a, b) {
		var c = a.Kb.length === 0 ? Y(a.vb) : Y(a.Kb[a.Kb.length - 1]), d = Y(b);
		qf(a, b, c.left + c.width + a.Kc * c.height, c.top + c.height
				- d.height);
		a.Kb.push(b);
	}
	function rf(a, b) {
		var c = a.Hb.length === 0 ? Y(a.vb) : Y(a.Hb[a.Hb.length - 1]), d = Y(b);
		qf(a, b, c.left - d.width - a.Kc * c.height, c.top + c.height
				- d.height);
		a.Hb.push(b);
	}
	of.prototype.tc = function() {
		if (!this.vb)
			throw Error(Hf);
		var a = new X;
		Hd(a, this.vb);
		for ( var b = 0; b < this.Hb.length; b++)
			Hd(a, this.Hb[b]);
		this.wd && Hd(a, this.wd);
		this.Dd && Hd(a, this.Dd);
		for (b = 0; b < this.Kb.length; b++)
			Hd(a, this.Kb[b]);
		return a;
	};
	function qf(a, b, c, d) {
		var e = Y(b);
		a.nc.setTransform(1, 0, 0, 1, -(e.left - c), -(e.top - d));
		b.transform(a.nc);
	}
	var Hf = "label-center-not-set";
	function If() {
		this.Wc = 0.42;
		this.dd = new lf;
		this.Lb = new J;
		Jf(this);
	}
	function Kf(a, b) {
		var c = a.dd, d = [], e = mf(c, b.charAt(0));
		d.push(e);
		for ( var f = 1; f < b.length; f++) {
			var g = mf(c, b.charAt(f)), i = e;
			e = g;
			var k = new J;
			i = e.Gb().left
					- (i.Gb().left + i.Gb().width + 0.15 * i.Gb().width);
			k.translate(-i, 0);
			e.transform(k);
			d.push(g);
			e = g;
		}
		for (c = 0; c < d.length; c++)
			d[c].ta.transform(a.Lb);
		return d;
	}
	function Jf(a) {
		var b = a.Wc / Y(mf(a.dd, "C").ta).height;
		a.Lb.setTransform(b, 0, 0, -b, 0, 0);
	}
	function Lf(a, b) {
		var c = b[0].ta.va();
		b[1] && Hd(c, b[1].ta);
		b[2] && Hd(c, b[2].ta);
		return c;
	}
	function Mf(a, b) {
		for ( var c = 0, d = 0, e = b.ya, f = 0; f < e.length; f++) {
			var g = L(b, e[f]), i = Math.cos(g);
			g = Math.sin(g);
			if (Math.abs(i) <= 0.15)
				g *= 2;
			if (Math.abs(g) <= 0.05)
				i *= 2;
			c += i;
			d += g;
		}
		g = L(new K(0, 0), new K(c, d));
		if (g <= 0.35 * Math.PI || g > 1.65 * Math.PI)
			return Nf;
		else if (g > 0.35 * Math.PI && g <= 0.65 * Math.PI) {
			if (e.length === 1)
				return Of;
			return Pf;
		} else if (g > 0.65 * Math.PI && g <= 1.35 * Math.PI)
			return Of;
		else if (g > 1.35 * Math.PI && g <= 1.65 * Math.PI) {
			if (e.length === 1)
				return Of;
			return Qf;
		}
		return Of;
	}
	var Of = "right", Nf = "left", Pf = "bottom", Qf = "top";
	function Rf() {
		this.dd = lf.db();
		this.zf = new Z("#33AA33", 0.5);
		this.nf = new Z("#000000", 0);
		this.pf = new Z("#999999");
		this.Da = {};
		this.qc = 0.42;
		this.xe = 0.21;
		this.Ud = new If;
		this.Da.C = new Z("#666666", 1);
		this.Da.N = new Z("#0000FF", 1);
		this.Da.O = new Z("#FF0000", 1);
		this.Da.S = new Z("#FFCC00", 1);
		this.Da.P = new Z("#FFCC00", 1);
		this.Da.F = new Z("#FF00FF", 1);
		this.Da.Cl = new Z("#00FF00", 1);
		this.Da.Br = new Z("#CC3333", 1);
		this.Da.I = new Z("#CC33EE", 1);
		this.Da["?"] = new Z("#666666", 1);
	}
	;
	function Sf(a, b, c) {
		this.ja = a;
		this.Va = b;
		this.yf = c || [];
	}
	Sf.prototype.wa = ba("ja");
	Sf.prototype.Ic = aa("Va");
	function Tf(a) {
		this.lf = true;
		this.nb = 0.05;
		this.za = new Sf(0.1, "#000000");
		this.Qb = new Z("#000000", 1);
		this.me = new Sf(0.1, "#aaaaaa");
		this.Qa = a;
		this.xe = 0.21;
		this.Ja = 0.2;
		this.hb = 0.25;
		this.nf = new Z("#000000", 0);
	}
	h = Tf.prototype;
	h.rd = function(a) {
		this.za.Ic(a);
		this.Qb.Ic(a);
	};
	h.sd = aa("nb");
	h.ud = aa("hb");
	h.td = function(a) {
		this.za.ja = a;
		this.me = new Td(a, "#aaaaaa");
	};
	h.Hd = function(a, b, c, d, e) {
		var f = b.tc();
		switch (a.ib) {
		case Q.tb:
			this.ac(f, a, c, d);
			break;
		case Q.Wb:
			Uf(this, f, a, c, d);
			break;
		case Q.Nc:
			Vf(this, f, a, c, d);
			break;
		default:
			this.ac(f, a, c, d);
		}
		c = this.Qb;
		if (a.Ab === R.oc)
			c = undefined;
		return b.cb(f, a.eb() ? this.me : this.za, c, e);
	};
	h.ac = function(a, b, c, d) {
		if (b.eb()) {
			var e = Wf(this, b);
			$(this, e, c, d);
			var f = O(b.ba, b.ia);
			c = 0.6 * this.hb;
			var g = 0.7 * c;
			c = {
				source : new K(0.5 * f, c),
				target : new K(0.5 * f, -c)
			};
			d = {
				source : new K(0.5 * f - g, g),
				target : new K(0.5 * f + g, -g)
			};
			f = {
				source : new K(0.5 * f + g, g),
				target : new K(0.5 * f - g, -g)
			};
			g = new J;
			var i = L(b.ba, b.ia);
			g.translate(b.ba.$, b.ba.aa);
			g.rotate(i, 0, 0);
			Xf(this, a, c);
			Xf(this, a, d);
			Xf(this, a, f);
			a.transform(g);
			g.rotate(-i, 0, 0);
			g.translate(-b.ba.$, -b.ba.aa);
			Xf(this, a, e);
		} else {
			switch (b.Ab) {
			case R.Zb:
				Yf(this, a, b, c, d);
				return;
			case R.Xb:
				Zf(this, a, b, c, d);
				return;
			case R.oc:
				$f(this, a, b, c, d);
				return
			}
			b = Wf(this, b);
			$(this, b, c, d);
			Xf(this, a, b);
		}
	};
	function $(a, b, c, d) {
		var e, f;
		if (c) {
			e = c.va();
			ag(a, e);
		}
		if (d) {
			f = d.va();
			ag(a, f);
		}
		if (!(e && f && e.left <= f.left + f.width
				&& f.left <= e.left + e.width && e.top <= f.top + f.height && f.top <= e.top
				+ e.height))
			if (!(f && td(b.source, f)))
				if (!(e && td(b.target, e))) {
					e && ud(b, e);
					f && ud(b, f)
				}
	}
	function ag(a, b) {
		var c = b.left - a.za.wa() / 2 - a.nb, d = b.top - a.za.wa() / 2 - a.nb, e = b.width
				+ a.za.wa() + 2 * a.nb, f = b.height + a.za.wa() + 2 * a.nb;
		b.left = c;
		b.top = d;
		b.width = e;
		b.height = f
	}
	function $f(a, b, c, d, e) {
		var f = Wf(a, c);
		$(a, f, d, e);
		d = O(f.source, f.target);
		a = 0.2 * a.hb;
		e = 2 * a;
		var g = Math.floor(d / (2 * a)), i = 0, k;
		if (g === 0) {
			b.moveTo(2 * a, 0);
			b.Pc(a, e, 0, 180)
		}
		for ( var j = 0; j < g; j++) {
			i += 2 * a;
			k = j % 2 ? -1 : 1;
			b.moveTo(i, 0);
			b.Pc(a, 2 * i / d * e, 0, k * 180)
		}
		d = new J;
		c = L(c.ba, c.ia);
		d.translate(f.source.$, f.source.aa);
		d.rotate(c, 0, 0);
		b.transform(d)
	}
	function Yf(a, b, c, d, e) {
		var f = Wf(a, c);
		$(a, f, d, e);
		e = O(c.ba, c.ia);
		d = O(c.ba, f.source);
		f = O(c.ba, f.target);
		var g = d * 0.5 * a.hb / e;
		a = f * 0.5 * a.hb / e;
		b.moveTo(d, g);
		b.lineTo(f, a);
		b.lineTo(f, -a);
		b.lineTo(d, -g);
		b.close();
		a = new J;
		d = L(c.ba, c.ia);
		a.translate(c.ba.$, c.ba.aa);
		a.rotate(d, 0, 0);
		b.transform(a)
	}
	function Zf(a, b, c, d, e) {
		var f = Wf(a, c);
		$(a, f, d, e);
		d = O(c.ba, c.ia);
		e = O(c.ba, f.source);
		var g = O(c.ba, f.target);
		f = 2 * a.za.wa();
		for (g = g; g >= e;) {
			var i = (a.lf ? g * 0.5 : 0.35) * a.hb / d;
			b.moveTo(g, i);
			b.lineTo(g, -i);
			g -= f
		}
		a = new J;
		d = L(c.ba, c.ia);
		a.translate(c.ba.$, c.ba.aa);
		a.rotate(d, 0, 0);
		b.transform(a)
	}
	function Uf(a, b, c, d, e) {
		var f;
		f = Wf(a, c);
		var g = Wf(a, c);
		if (c.Ab === R.xd) {
			bg(a, f, g, d, e);
			d = f.source;
			f.source = g.source;
			g.source = d
		} else {
			var i = {
				Mb : 0,
				Ed : false,
				mc : null,
				Qc : null,
				Lc : null,
				Rc : null
			};
			if (Ed(c.ba) || Ed(c.ia))
				i.Ed = true;
			else {
				for ( var k = c.ba.ya, j = 0; j < k.length; j++) {
					var l = k[j];
					if (l !== c.ia)
						if (Fd(c, l)) {
							i.mc = l;
							i.Mb += 1
						} else {
							i.Qc = l;
							i.Mb -= 1
						}
				}
				k = c.ia.ya;
				for (j = 0; j < k.length; j++) {
					l = k[j];
					if (l !== c.ba)
						if (Fd(c, l)) {
							i.Lc = l;
							i.Mb += 1
						} else {
							i.Rc = l;
							i.Mb -= 1
						}
				}
			}
			if (i.Ed)
				bg(a, f, g, d, e);
			else if (i.Mb !== 0)
				i.Mb > 0 ? cg(a, f, g, i, d, e) : dg(a, f, g, i, d, e);
			else {
				k = c.ba.ya.length;
				j = c.ia.ya.length;
				if (k === 3 && j === 3) {
					k = Cd(c, i.mc, i.Lc);
					c = Cd(c, i.Qc, i.Rc);
					if (k.length === 0 && c.length === 0)
						bg(a, f, g, d, e);
					else {
						j = 0;
						if (k.length > 0)
							j += 1;
						if (c.length > 0)
							j -= 1;
						for (l = 2; l < k.length - 1; l++) {
							var m = k[l], A = k[l + 1];
							m = Dd(m.ca, m, A);
							if (m.ib !== Q.tb && !m.eb())
								j += 1
						}
						for (l = 2; l < c.length - 1; l++) {
							m = c[l];
							A = c[l + 1];
							m = Dd(m.ca, m, A);
							if (m.ib !== Q.tb && !m.eb())
								j -= 1
						}
						j > 0 ? cg(a, f, g, i, d, e) : dg(a, f, g, i, d, e)
					}
				} else if (k === 3 || j === 3)
					bg(a, f, g, d, e);
				else if (k === 2 && j === 2) {
					i.mc ? eg(a, g, i.mc) : fg(a, g, i.Lc);
					$(a, f, d, e);
					$(a, g, d, e);
					vd(g, a.Ja)
				} else
					bg(a, f, g, d, e)
			}
		}
		f = [ f, g ];
		for (g = 0; g < f.length; g++)
			Xf(a, b, f[g])
	}
	function Vf(a, b, c, d, e) {
		for ( var f = [], g = 0; g < 3; g++) {
			f[g] = Wf(a, c);
			$(a, f[g], d, e)
		}
		vd(f[0], a.Ja);
		vd(f[1], -a.Ja);
		for (c = 0; c < f.length; c++)
			Xf(a, b, f[c])
	}
	function bg(a, b, c, d, e) {
		$(a, b, d, e);
		$(a, c, d, e);
		vd(b, 0.5 * a.Ja);
		vd(c, -0.5 * a.Ja)
	}
	function cg(a, b, c, d, e, f) {
		eg(a, c, d.mc);
		fg(a, c, d.Lc);
		$(a, b, e, f);
		$(a, c, e, f);
		vd(c, a.Ja)
	}
	function dg(a, b, c, d, e, f) {
		eg(a, c, d.Qc);
		fg(a, c, d.Rc);
		$(a, b, e, f);
		$(a, c, e, f);
		vd(c, -a.Ja)
	}
	function eg(a, b, c) {
		if (c !== null) {
			var d = 0.5 * O(c, b.target);
			c = O(b.source, b.target);
			if (d > c)
				c = d;
			a = a.Ja / Math.tan(Math.asin(d / c)) + 2 * a.za.wa();
			if (!(a > O(b.source, b.target))) {
				a = a / c;
				b.source.move(b.source.$ + 0.5 * a * (b.target.$ - b.source.$),
						b.source.aa + 0.5 * a * (b.target.aa - b.source.aa))
			}
		}
	}
	function fg(a, b, c) {
		if (c !== null) {
			var d = 0.5 * O(c, b.source);
			c = O(b.source, b.target);
			if (d > c)
				c = d;
			a = a.Ja / Math.tan(Math.asin(d / c)) + 2 * a.za.wa();
			if (!(a > O(b.source, b.target))) {
				a = a / c;
				b.target.move(b.target.$ + 0.5 * a * (b.source.$ - b.target.$),
						b.target.aa + 0.5 * a * (b.source.aa - b.target.aa))
			}
		}
	}
	function Xf(a, b, c) {
		b.moveTo(c.source.$, c.source.aa);
		b.lineTo(c.target.$, c.target.aa)
	}
	function Wf(a, b) {
		return {
			source : new K(b.ba.$, b.ba.aa),
			target : new K(b.ia.$, b.ia.aa)
		}
	}
	;
	function gg(a) {
		this.Ad = a;
		this.yc = 0
	}
	function hg(a, b) {
		if (b < 0 || a.yc + b > a.Ad.length)
			return null;
		var c = a.yc + b, d = a.Ad.slice(a.yc, c);
		a.yc = c;
		return d
	}
	;
	function ig(a) {
		if (a.length !== 2)
			throw Error(jg);
		return a[1] * 256 + a[0]
	}
	function kg(a) {
		a = ig(a);
		return a < 32768 ? a : a - 65536
	}
	function lg(a) {
		if (a.length !== 4)
			throw Error(jg);
		return a[3] * 16777216 + a[2] * 65536 + a[1] * 256 + a[0]
	}
	function mg(a) {
		a = lg(a);
		return a < 2147483648 ? a : a - 4294967296
	}
	var jg = "The argument supplied is not the right length to be a number representation";
	function ng(a) {
		return a !== undefined ? og(this, lg(a)) : null
	}
	function pg(a, b) {
		return function(c) {
			return c !== undefined ? a(c) : b
		}
	}
	;
	function qg() {
	}
	ga(qg);
	var rg = {
		512 : pg(function(a) {
			return new sb(mg(a.slice(4)), mg(a.slice(0, 4)))
		}, null),
		1024 : pg(kg, 1),
		1026 : pg(kg, 6),
		1057 : pg(function(a) {
			if (a.length !== 1)
				throw Error(jg);
			a = a[0];
			return a < 128 ? a : a - 256
		}, 0),
		1536 : pg(ig, 1),
		1537 : pg(ig, 0),
		1540 : ng,
		1541 : ng,
		1792 : pg(function(a) {
			var b = a.slice(0, 2);
			if (b.length !== 2)
				return "";
			b = ig(b);
			return String.fromCharCode.apply(null, a.slice(2 + 10 * b))
		}, null),
		1798 : function(a, b, c) {
			return function(d) {
				return d !== undefined ? a(d) : this.ha ? this.ha.Ea(b) : c
			}
		}(kg, 1798, 0)
	};
	function sg(a, b) {
		this.kf = a;
		this.Jf = b;
		this.cf = [];
		this.ae = {};
		this.ga = [];
		this.Xc = {};
		this.kc = {};
		if (b !== 0)
			this.kc[b] = this;
		this.ha = null
	}
	function tg(a, b, c) {
		a.cf.push({
			Qf : b,
			data : c
		});
		a.ae[b] = c
	}
	sg.prototype.Oc = function(a) {
		this.ga.push(a);
		var b = a.kf, c = this.Xc[b] || [];
		this.Xc[b] = c;
		c.push(a);
		a.ha = this;
		ug(this, a.kc)
	};
	sg.prototype.Qd = ba("ga");
	function ug(a, b) {
		for ( var c in b)
			a.kc[c] = b[c];
		a.ha && ug(a.ha, b)
	}
	function og(a, b) {
		if (b === 0)
			return null;
		else if (b in a.kc)
			return a.kc[b];
		return a.ha ? og(a.ha, b) : null
	}
	sg.prototype.Ea = function(a) {
		if (a < 32768) {
			var b;
			qg.db();
			b = rg[a] || null;
			if (b === null)
				throw Error(vg);
			a = this.ae[a];
			try {
				return b.call(this, a)
			} catch (c) {
				throw Error(wg);
			}
		} else
			return this.Xc[a] || []
	};
	var vg = "Unsupported property/object tag ID", wg = "Invalid property value";
	var xg = null, yg = null, zg = null, Ag = null;
	function Bg(a, b) {
		if (!ka(a))
			throw Error("encodeByteArray takes an array as a parameter");
		Cg();
		for ( var c = b ? zg : xg, d = [], e = 0; e < a.length; e += 3) {
			var f = a[e], g = e + 1 < a.length, i = g ? a[e + 1] : 0, k = e + 2 < a.length, j = k ? a[e + 2]
					: 0, l = f >> 2;
			f = (f & 3) << 4 | i >> 4;
			i = (i & 15) << 2 | j >> 6;
			j = j & 63;
			if (!k) {
				j = 64;
				g || (i = 64)
			}
			d.push(c[l], c[f], c[i], c[j])
		}
		return d.join("")
	}
	function Dg(a, b) {
		Cg();
		for ( var c = b ? Ag : yg, d = [], e = 0; e < a.length;) {
			var f = c[a.charAt(e++)], g = e < a.length ? c[a.charAt(e)] : 0;
			++e;
			var i = e < a.length ? c[a.charAt(e)] : 0;
			++e;
			var k = e < a.length ? c[a.charAt(e)] : 0;
			++e;
			if (f == null || g == null || i == null || k == null)
				throw Error();
			d.push(f << 2 | g >> 4);
			if (i != 64) {
				d.push(g << 4 & 240 | i >> 2);
				k != 64 && d.push(i << 6 & 192 | k)
			}
		}
		return d
	}
	function Cg() {
		if (!xg) {
			xg = {};
			yg = {};
			zg = {};
			Ag = {};
			for ( var a = 0; a < 65; a++) {
				xg[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
						.charAt(a);
				yg[xg[a]] = a;
				zg[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."
						.charAt(a);
				Ag[zg[a]] = a
			}
		}
	}
	;
	function Eg() {
		this.Ld = [ 86, 106, 67, 68, 48, 49, 48, 48, 4, 3, 2, 1 ]
	}
	Eg.prototype.fb = function(a) {
		var b;
		try {
			b = Dg(a)
		} catch (c) {
			throw Error(Fg);
		}
		a = new gg(b);
		b = hg(a, this.Ld.length);
		var d = u(function(e, f) {
			return e !== this.Ld[f]
		}, this);
		if (!b || La(b, d))
			throw Error(Gg);
		if (!hg(a, 16))
			throw Error(Gg);
		b = new sg(32768, 0);
		Hg(this, a, b);
		return b
	};
	function Ig(a, b) {
		var c = hg(b, 2);
		if (c === null)
			throw Error(Jg);
		c = ig(c);
		if (c === 65535) {
			c = hg(b, 4);
			if (c === null)
				throw Error(Jg);
			c = lg(c)
		}
		c = hg(b, c);
		if (c === null)
			throw Error(Jg);
		return c
	}
	function Hg(a, b, c) {
		var d = 0;
		function e() {
			var g = hg(b, 2);
			if (g === null)
				throw Error(Jg);
			return d = ig(g)
		}
		for (; e() !== 0;)
			if (d < 32768)
				tg(c, d, Ig(a, b));
			else {
				var f = hg(b, 4);
				if (f === null)
					throw Error(Jg);
				f = new sg(d, lg(f));
				Hg(a, b, f);
				c.Oc(f)
			}
	}
	var Fg = "The provided string is not in valid Base64-encoding", Gg = "The file does not have a CDX header", Jg = "The CDX file is not well-formed";
	function Kg(a) {
		this.ca = a;
		this.wf = 1;
		this.oe = 0.05
	}
	Kg.prototype.Ob = aa("ca");
	Kg.prototype.pc = function(a) {
		var b;
		a: {
			b = this.ca.ka;
			for ( var c = 0; c < b.length; c++) {
				var d = b[c];
				if (O(a, d) < this.oe) {
					b = d;
					break a
				}
			}
			b = null
		}
		b || (b = this.ca.pc("C", a.$, a.aa));
		return b
	};
	function Lg() {
		this.ta = new S;
		this.ue = false
	}
	v(Lg, I);
	Lg.prototype.moveTo = function(a, b) {
		if (this.ta.mb())
			throw Error(Mg);
		if (this.ue)
			throw Error(Ng);
		this.ta.lineTo(a, b);
		this.dispatchEvent(Og)
	};
	function Pg(a, b, c) {
		var d = false, e = 0, f = 0, g = 0, i = 0, k = 0;
		Id(a.ta, u(function(j, l) {
			if (!d) {
				switch (j) {
				case 0:
					if (i !== f || k !== g)
						e += Qg(this, i, k, f, g, b, c);
					f = i = l[0];
					g = k = l[1];
					break;
				case 1:
					for ( var m = 0; m < l.length; m += 2) {
						e += Qg(this, i, k, l[m], l[m + 1], b, c);
						i = l[m];
						k = l[m + 1]
					}
					break
				}
				if (k !== g || i !== f) {
					e += Qg(this, i, k, f, g, b, c);
					i = f;
					k = g
				}
				if (b === i && c === k) {
					e = 0;
					k = g;
					d = true
				}
			}
		}, a));
		if (k !== g)
			e += Qg(a, i, k, f, g, b, c);
		return e
	}
	function Qg(a, b, c, d, e, f, g) {
		if (f < b && f < d || f > b && f > d || g > c && g > e || b === d)
			return 0;
		if (!(g < c && g < e))
			if ((e - c) * (f - b) / (d - b) <= g - c)
				return 0;
		if (f === b)
			return b < d ? 0 : -1;
		if (f === d)
			return b < d ? 1 : 0;
		return b < d ? 1 : -1
	}
	var Og = "lasso-moved", Mg = "lasso-not-begun", Ng = "lasso-ended";
	function Rg(a) {
		E.call(this);
		this.ca = a || new ue;
		this.Nf = new Kg(this.ca);
		this.kd = new Lg;
		this.ca.ab(this);
		this.kd.ab(this);
		H(this.kd, "lasso-started", this.Ae, false, this);
		H(this.kd, Og, this.De, false, this)
	}
	v(Rg, I);
	h = Rg.prototype;
	h.mb = function() {
		return this.ca.ka.length === 0 && this.ca.oa.length === 0
	};
	h.clear = function() {
		this.ca.clear()
	};
	h.Gb = function() {
		if (!this.mb()) {
			for ( var a = this.ca.ka[0], b = new Kb(a.aa, a.$, a.aa, a.$), c = this.ca.ka, d = 1; d < c.length; d++) {
				a = c[d];
				if (a.aa > b.top)
					b.top = a.aa;
				if (a.aa < b.bottom)
					b.bottom = a.aa;
				if (a.$ < b.left)
					b.left = a.$;
				if (a.$ > b.right)
					b.right = a.$
			}
			return b
		}
	};
	h.fd = function() {
		if (!this.mb()) {
			var a = this.Gb();
			return new tb(a.right - a.left, a.top - a.bottom)
		}
	};
	h.Ae = function() {
		for ( var a = this.ca, b = 0; b < a.ka.length; b++)
			ne(a.ka[b], false)
	};
	h.De = function(a) {
		a = a.target;
		for ( var b = this.ca.ka, c = 0; c < b.length; c++) {
			var d = b[c];
			(Pg(a, d.$, d.aa) & 1) !== 0 && ne(d, true)
		}
	};
	function Sg() {
		this.ff = new Eg
	}
	Sg.prototype.fb = function(a) {
		if (!a)
			throw Error(Tg);
		var b = this.ff.fb(a).Ea(32769);
		a = new Rg;
		if (b.length === 0)
			return a;
		var c = b[0].Ea(32771)[0];
		b = c.Ea(32772);
		for ( var d = 0; d < b.length; d++) {
			var e = a, f = b[d], g = void 0;
			g = f.Ea(32774);
			g = g[0] ? g[0].Ea(1792).match(/[A-Z][a-z]{0,2}/)[0] : "C";
			var i = void 0;
			i = f.Ea(512);
			i = [ i.x / 1E5, -i.y / 1E5 ];
			e = e.ca.pc(g, i[0], i[1]);
			(f = f.Ea(1057)) && he(e, f)
		}
		c = c.Ea(32773);
		for (d = 0; d < c.length; d++) {
			g = b;
			f = a;
			e = c[d];
			i = B(g, e.Ea(1540));
			var k = B(g, e.Ea(1541));
			g = void 0;
			g = e.Ea(1536);
			var j = undefined;
			switch (g) {
			case Q.tb:
				j = Q.tb;
				break;
			case 2:
				j = Q.Wb;
				break;
			case 4:
				j = Q.Nc;
				break;
			default:
				throw Error(Ug);
			}
			g = j;
			i = f.ca.ka[i];
			k = f.ca.ka[k];
			j = void 0;
			e = e.Ea(1537);
			j = R.yd;
			if (e)
				switch (e) {
				case 3:
					j = R.Xb;
					break;
				case 4:
					j = R.Xb;
					break;
				case 6:
					j = R.Zb;
					break;
				case 7:
					j = R.Zb;
					break;
				default:
					throw Error(Ug);
				}
			j = j;
			we(f.ca, i, k, g, j)
		}
		return a
	};
	var Tg = "cdx-reader-file-invalid", Ug = "cdx-reader-unsupported-feature";
	function Vg() {
		Rf.call(this)
	}
	v(Vg, Rf);
	function Wg() {
		Tf.call(this);
		this.Eb = new X
	}
	v(Wg, Tf);
	Wg.prototype.Hd = function(a, b, c, d) {
		switch (a.ib) {
		case Q.tb:
			this.ac(a, b, c, d);
			return;
		case Q.Wb:
			Uf(this, this.Eb, a, c, d);
			break;
		case Q.Nc:
			Vf(this, this.Eb, a, c, d);
			break;
		default:
			this.ac(this.Eb, a, c, d)
		}
	};
	Wg.prototype.ac = function(a, b, c, d) {
		switch (a.Ab) {
		case R.Zb:
			var e = new X;
			Yf(this, e, a, c, d);
			b.cb(e, this.za, this.Qb);
			return;
		case R.Xb:
			e = new X;
			Zf(this, e, a, c, d);
			b.cb(e, this.za, this.Qb);
			return;
		case R.oc:
			e = new X;
			$f(this, e, a, c, d);
			b.cb(e, this.za, this.Qb);
			return
		}
		a = Wf(this, a);
		$(this, a, c, d);
		Xf(this, this.Eb, a)
	};
	function Xg(a, b) {
		E.call(this);
		this.Qe = new Ee;
		this.qe = new Sg;
		this.kb = new Wg;
		this.rc = new Vg;
		this.hb = 0.25;
		this.nb = 0.05;
		this.Wd = 0.1;
		this.qc = 0.42;
		this.Ja = 0.2;
		this.ja = a || 100;
		this.pa = b || 100
	}
	v(Xg, I);
	function Yg(a, b) {
		var c = b["atom-colors"];
		if (c)
			for ( var d in c) {
				var e = a.rc, f = d, g = c[d];
				if (B(Zd, f) === -1)
					throw Error("No such element");
				var i = e.Da[f];
				i || (i = e.Da[f] = new Z("#000000", 1));
				i.Ic(g)
			}
		a.ud(b["stereo-width"]);
		a.sd(b["line-end-padding"]);
		a.td(b["line-width"]);
		if (c = b["line-offset"])
			a.Ja = c;
		a.rd(b["line-color"]);
		if (c = b["atom-label-height"])
			a.qc = c;
		if (c = b["disable-implicit-hydrogens"])
			for (d = 0; d < c.length; d++)
				be.push(c[d]);
		a.dispatchEvent(Zg)
	}
	h = Xg.prototype;
	h.ud = function(a) {
		if (a)
			this.hb = a
	};
	h.sd = function(a) {
		if (a)
			this.nb = a
	};
	h.rd = function(a) {
		a && this.kb.rd(a)
	};
	h.td = function(a) {
		if (a)
			this.Wd = a
	};
	h.fd = function() {
		return new tb(this.ja, this.pa)
	};
	h.Jc = function(a, b) {
		this.ja = a;
		this.pa = b
	};
	var Zg = "painter-stylesheet-changed";
	function $g(a, b) {
		V.call(this);
		this.ja = a;
		this.pa = b;
		this.Cb = this.sa = undefined
	}
	v($g, V);
	var ah = undefined;
	h = $g.prototype;
	h.wa = ba("ja");
	h.qd = function(a, b) {
		if (this.sa) {
			this.ja = a;
			this.pa = b;
			var c = this.sa, d = new tb(c.right - c.left, c.top - c.bottom), e = new tb(
					this.ja, this.pa), f = d.va();
			f.scale(f.width / f.height > e.width / e.height ? e.width / f.width
					: e.height / f.height);
			d = f.height / d.height;
			f = new J;
			var g = c.left + 0.5 * Math.abs(c.right - c.left), i = c.top + 0.5
					* (c.bottom - c.top), k = 0.5 * e.width / d;
			e = 0.5 * e.height / d;
			var j = Yd() ? -1 : 1;
			f.scale(d, j * d);
			f.translate(k - g, j * (e + i));
			this.setTransform(f);
			return c
		}
	};
	h.vd = aa("sa");
	h.zd = function() {
		var a = new X;
		a.moveTo(this.sa.left, this.sa.top);
		a.lineTo(this.sa.right, this.sa.bottom);
		this.Cb = this.cb(a, new Td(0.02 * (this.sa.right - this.sa.left),
				"gray"))
	};
	h.ee = function() {
		if (this.Cb) {
			var a = this.Cb;
			this.ma.Ha().removeChild(a)
		}
	};
	h.cb = function(a, b, c, d) {
		a = {
			d : bh(this, a)
		};
		if (b)
			if (b.Va) {
				a.stroke = b.Va;
				a["stroke-width"] = b.wa()
			} else
				a.stroke = "none";
		a.fill = c ? c.Va : "none";
		b = ch(this, "path", a);
		(d || this.ma).Ha().appendChild(b);
		return b
	};
	h.setTransform = function(a) {
		this.ma.Ha().setAttribute("transform", a.toString())
	};
	h.clear = function() {
		this.ma.clear()
	};
	h.tc = function() {
		return new S
	};
	h.lb = function() {
		if (!ah) {
			var a = pb || (pb = new Jb), b = null;
			if (D) {
				b = a.Wa.createStyleSheet();
				Pb(b,
						".chemvector svg path { stroke-linecap: round; stroke-linejoin: round; }")
			} else {
				var c = Cb(a.Wa, "head", void 0, void 0)[0];
				if (!c) {
					b = Cb(a.Wa, "body", void 0, void 0)[0];
					c = a.lb("head");
					b.parentNode.insertBefore(c, b)
				}
				b = a.lb("style");
				Pb(b,
						".chemvector svg path { stroke-linecap: round; stroke-linejoin: round; }");
				a.appendChild(c, b)
			}
			ah = b
		}
		a = ch(this, "svg", {
			overflow : "hidden"
		});
		c = ch(this, "g");
		this.se = ch(this, "defs");
		this.ma = new Wd(c, this);
		a.appendChild(this.se);
		a.appendChild(c);
		this.fa = a
	};
	function ch(a, b, c) {
		a = a.uc.Wa.createElementNS("http://www.w3.org/2000/svg", b);
		if (c)
			for ( var d in c)
				a.setAttribute(d, c[d]);
		return a
	}
	function bh(a, b) {
		var c = [];
		Id(b, function(d, e) {
			switch (d) {
			case 0:
				c.push(dh);
				Array.prototype.push.apply(c, e);
				break;
			case 1:
				c.push(eh);
				Array.prototype.push.apply(c, e);
				break;
			case 2:
				c.push(fh);
				Array.prototype.push.apply(c, e);
				break;
			case 3:
				var f = e[3];
				c.push(gh, e[0], e[1], 0, Math.abs(f) > 180 ? 1 : 0, f > 0 ? 1
						: 0, e[4], e[5]);
				break;
			case 4:
				c.push(hh);
				break
			}
		});
		return c.join(" ")
	}
	var dh = "M", eh = "L", fh = "C", gh = "A", hh = "Z";
	function ih(a, b) {
		V.call(this);
		this.ja = a;
		this.pa = b;
		this.Cb = this.ma = undefined
	}
	v(ih, V);
	h = ih.prototype;
	h.zd = function() {
		var a = new X;
		a.moveTo(this.sa.left, this.sa.top);
		a.lineTo(this.sa.right, this.sa.bottom);
		this.Cb = this.cb(a, new Td(0.02 * (this.sa.right - this.sa.left),
				"gray"))
	};
	h.ee = function() {
		this.Cb && this.ma.removeChild(this.Cb)
	};
	h.cb = function(a, b, c) {
		var d = jh(this, "shape");
		d.path = kh(this, a);
		if (b && b.wa()) {
			d.stroked = "true";
			d.strokeweight = 100 / this.Lb * b.wa();
			a = Fb("v:stroke");
			a.endcap = "round";
			d.appendChild(a)
		} else
			d.stroked = "false";
		if (c && c.Va) {
			d.fill = "true";
			d.fillcolor = c.Va
		} else
			d.fill = "false";
		d.coordsize = this.ja + " " + this.pa;
		d.style.width = this.ja.toString();
		d.style.height = this.pa.toString();
		this.ma.appendChild(d);
		return d
	};
	h.vd = function(a) {
		this.sa = a;
		if (this.ja / this.pa < (a.right - a.left) / (a.bottom - a.top)) {
			var b = Math.round((a.right - a.left) * 100), c = Math
					.round((a.bottom - a.top) * 100);
			b = b / this.ja;
			var d = this.ja * b, e = this.pa * b;
			c = Math.round(a.top * 100) - 0.5 * (e - c);
			this.ma.coordsize = d + " " + e;
			this.ma.coordorigin = Math.round(a.left * 100) + " " + c;
			a = b
		} else {
			e = Math.round(Math.abs(a.right - a.left) * 100);
			c = Math.round(Math.abs(a.bottom - a.top) * 100) / this.pa;
			b = this.ja * c;
			d = this.pa * c;
			e = Math.round(a.left * 100) - 0.5 * Math.abs(b - e);
			this.ma.coordsize = b + " " + d;
			this.ma.coordorigin = e + " " + Math.round(a.top * 100);
			a = c
		}
		this.Lb = a
	};
	h.qd = function(a, b) {
		var c = 100 / this.Lb;
		this.ja = a;
		this.pa = b;
		this.Ha().style.width = this.ja + "px";
		this.Ha().style.height = this.pa + "px";
		this.ma.style.width = this.ja;
		this.ma.style.height = this.pa;
		this.vd(this.sa);
		c = 100 / this.Lb / c;
		for ( var d = this.ma.childNodes, e = 0; e < d.length; e++) {
			var f = d[e];
			if (f.stroked)
				f.strokeweight *= c
		}
	};
	h.tc = function() {
		return new X
	};
	h.lb = function() {
		var a = this.uc.Wa;
		if (!a.namespaces.v) {
			a.namespaces.add("v", "urn:schemas-microsoft-com:vml");
			a.createStyleSheet().addRule("v\\: *",
					"behavior:url(#default#VML); position:absolute")
		}
		this.fa = Fb("div", {
			style : "width: " + this.ja + "px; height: " + this.pa
					+ "px; position: relative",
			"class" : "vml"
		});
		this.ma = jh(this, "group");
		this.ma.style.width = this.ja + "px";
		this.ma.style.height = this.pa + "px";
		this.ma.style.flip = "y";
		this.ma.coordorigin = "0 0";
		this.ma.coordsize = this.ja + " " + this.pa;
		this.fa.appendChild(this.ma)
	};
	function jh(a, b) {
		var c = Fb("v:" + b);
		c.style.left = "0";
		c.style.top = "0";
		c.style.position = "absolute";
		return c
	}
	try {
		eval("document.namespaces")
	} catch (lh) {
	}
	function kh(a, b) {
		var c = [];
		Id(b, function(d, e) {
			switch (d) {
			case 0:
				c.push("m");
				Array.prototype.push.apply(c, Ja(e, mh));
				break;
			case 1:
				c.push("l");
				Array.prototype.push.apply(c, Ja(e, mh));
				break;
			case 2:
				c.push("c");
				Array.prototype.push.apply(c, Ja(e, mh));
				break;
			case 4:
				c.push("x");
				break;
			case 3:
				var f = e[2] + e[3];
				c.push("ae", mh(e[4] - e[0] * Math.cos(f * Math.PI / 180)),
						mh(e[5] - e[1] * Math.sin(f * Math.PI / 180)),
						mh(e[0]), mh(e[1]), Math.round(e[2] * -65536), Math
								.round(e[3] * -65536));
				break
			}
		});
		return c.join(" ")
	}
	function mh(a) {
		return Math.round(parseFloat(a.toString()) * 100)
	}
	;
	function nh() {
		V.call(this);
		this.rf = this.Qa = undefined;
		this.bd = !ff.db().md;
		this.hc()
	}
	v(nh, V);
	h = nh.prototype;
	h.Jc = function(a, b) {
		Mb(this.Ha(), a, b);
		this.Qa.qd(a, b)
	};
	h.wa = function() {
		return this.Qa.wa()
	};
	h.lb = function() {
		this.fa = Fb("div", {
			"class" : "image"
		})
	};
	h.pd = function(a, b) {
		nh.bb.pd.call(this, a, b);
		this.rf = a
	};
	h.hc = function() {
		this.bd && kc(ff.db(), hf, this.Ye, false, this)
	};
	h.Ye = function() {
		if (this.Qa)
			this.Qa.ee();
		else
			this.bd = false
	};
	function oh() {
		E.call(this)
	}
	v(oh, I);
	oh.prototype.fb = function(a, b) {
		var c, d = window.ActiveXObject !== undefined;
		c = d ? new ActiveXObject("MSXML2.XMLHTTP.3.0") : new XMLHttpRequest;
		c.overrideMimeType
				&& c.overrideMimeType("text/plain; charset=x-user-defined");
		c.onreadystatechange = u(function() {
			if (c.readyState == 4) {
				var e = d && b === "chemical/x-cdx" ? c.responseBody
						: c.responseText;
				if (b === "chemical/x-cdx")
					if (d)
						ph(this, e);
					else {
						for ( var f = [], g = 0; g < e.length; g++)
							f.push(e.charCodeAt(g) & 255);
						this.ad = Bg(f)
					}
				else
					this.ad = e;
				this.dispatchEvent(qh)
			}
		}, this);
		c.open("GET", a, true);
		c.send(null)
	};
	oh.prototype.getData = ba("ad");
	function ph(a, b) {
		for ( var c = {}, d = 0; d < 256; d++)
			for ( var e = 0; e < 256; e++)
				c[String.fromCharCode(d + e * 256)] = String.fromCharCode(d)
						+ String.fromCharCode(e);
		d = IEBinaryToArray_ByteStr(b);
		e = IEBinaryToArray_ByteStr_Last(b);
		e = d.replace(/[\s\S]/g, function(g) {
			return c[g]
		}) + e;
		var f = [];
		for (d = 0; d < e.length; d++)
			f.push(e.charCodeAt(d) & 255);
		a.ad = Bg(f)
	}
	var qh = "file-read";
	function rh() {
		this.Yc = 0;
		this.Bc = []
	}
	rh.prototype.push = function(a) {
		if (this.Bc.length === this.Yc) {
			this.Bc.push(a);
			sh(this, a)
		} else
			this.Bc.push(a)
	};
	function sh(a, b) {
		window.setTimeout(u(function() {
			b();
			var c;
			this.Yc += 1;
			(c = this.Bc[this.Yc]) && sh(this, c)
		}, a), 10)
	}
	;
	function th() {
		this.zb = new Xg;
		this.Ee = ff.db();
		this.Sd = {};
		this.df = new rh;
		this.hc()
	}
	ga(th);
	var uh = {};
	function vh() {
		th.db().ge()
	}
	h = th.prototype;
	h.ve = function(a) {
		return this.Sd[a]
	};
	h.ge = function() {
		this.Ee.fb(uh.licensePath);
		if (window.ActiveXObject !== undefined) {
			var a = "<SCRIPT type='text/vbscript' DEFER>";
			a += 'Function IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = ""\r\n   End If\r\nEnd Function';
			a += "<\/SCRIPT>";
			var b = document.createElement("div");
			document.body.appendChild(b);
			b.innerHTML = "<input type=hidden>" + a
		}
		wh(this)
	};
	h.hc = function() {
		H(this.zb, Zg, this.Ze, false, this)
	};
	function xh() {
		for ( var a = Cb(document, "link", void 0, void 0), b = 0; b < a.length; b++) {
			var c = a[b];
			if (c.getAttribute("rel") === "stylesheet/chemical")
				return c.getAttribute("href")
		}
	}
	h.Ze = function() {
		var a;
		a = document;
		var b = "object".toUpperCase();
		if (Bb(a) && (b || 1))
			a = a.querySelectorAll(b + ".chemvector-object");
		else {
			a = a.getElementsByTagName(b || "*");
			b = {};
			for ( var c = 0, d = 0, e; e = a[d]; d++) {
				var f = e.className;
				if (typeof f.split == "function"
						&& B(f.split(/\s+/), "chemvector-object") >= 0)
					b[c++] = e
			}
			b.length = c;
			a = b
		}
		for (b = 0; b < a.length; b++) {
			c = a[b];
			d = yh(this, c, "src");
			e = yh(this, c, "mime-type", "chemical/x-mdl-molfile");
			if (d)
				zh(this, c, d, e);
			else if (d = yh(this, c, "data"))
				Fh(this, d.split("\\n").join("\n"), c);
			else
				window.console && window.console.error && console.error(Gh)
		}
	};
	function wh(a) {
		var b = xh(a);
		b ? Yc(
				b,
				u(
						function(c) {
							c = c.target;
							if (rd(c) >= 200 && rd(c) < 300)
								try {
									var d = this.zb, e;
									if (c.da)
										b: {
											var f = String(c.da.responseText);
											if (/^\s*$/.test(f) ? false
													: /^[\],:{}\s\u2028\u2029]*$/
															.test(f
																	.replace(
																			/\\["\\\/bfnrtu]/g,
																			"@")
																	.replace(
																			/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
																			"]")
																	.replace(
																			/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,
																			"")))
												try {
													e = eval("(" + f + ")");
													break b
												} catch (g) {
												}
											throw Error("Invalid JSON string: "
													+ f);
										}
									Yg(d, e)
								} catch (i) {
									window.console
											&& console
													.warn("ChemVector stylesheet format not recognized for: "
															+ b);
									Yg(this.zb, {})
								}
							else {
								window.console
										&& console
												.warn("ChemVector stylesheet not found: "
														+ b);
								Yg(this.zb, {})
							}
						}, a))
				: Yg(a.zb, {})
	}
	function zh(a, b, c, d) {
		var e = new oh;
		kc(e, qh, function() {
			Fh(this, e.getData(), b)
		}, false, a);
		e.fb(c, d)
	}
	h.Gc = function(a, b) {
		var c = new nh, d = b.getAttribute("id"), e;
		e = d ? Fb("div", {
			"class" : "chemvector",
			id : d
		}) : Fb("div", {
			"class" : "chemvector"
		});
		var f = b.getAttribute("width") || "100", g = b.getAttribute("height")
				|| "100";
		d = b.getAttribute("id");
		var i = b.parentNode;
		i && i.replaceChild(e, b);
		Mb(e, va(f, "%") ? f : f + "px", va(g, "%") ? g : g + "px");
		c.pd(e);
		a: {
			f = e.nodeType == 9 ? e : e.ownerDocument || e.document;
			if (f.defaultView && f.defaultView.getComputedStyle)
				if (f = f.defaultView.getComputedStyle(e, null)) {
					f = f.display || f.getPropertyValue("display");
					break a
				}
			f = ""
		}
		if ((f || (e.currentStyle ? e.currentStyle.display : null) || e.style
				&& e.style.display) != "none")
			e = Ob(e);
		else {
			f = e.style;
			g = f.display;
			i = f.visibility;
			var k = f.position;
			f.visibility = "hidden";
			f.position = "absolute";
			f.display = "inline";
			e = Ob(e);
			f.display = g;
			f.position = k;
			f.visibility = i;
			e = e
		}
		this.zb.Jc(e.width, e.height);
		try {
			var j = this.zb, l = j.fd(), m = l.width, A = l.height;
			if (Yd())
				var w = new $g(m, A);
			else if (D)
				w = new ih(m, A);
			else
				throw Error("Vector graphics not supported on this browser.");
			c.Qa = w;
			c.Oc(c.Qa, true);
			var ja = c.Qa, M = a.lastIndexOf("VmpDRDAx", 0) == 0 ? j.qe.fb(a).ca
					: j.Qe.fb(a), n;
			if (M.oa.length === 0)
				n = 1;
			else {
				l = [];
				var q = M.oa;
				for (m = 0; m < q.length; m++) {
					var x = q[m];
					l[m] = Math.abs(O(x.ba, x.ia))
				}
				Ga(l.length != null);
				z.sort.call(l, Qa);
				if (l.length % 2 === 0) {
					var N = l.length / 2;
					n = (l[N - 1] + l[N]) / 2
				} else
					n = l[(l.length - 1) / 2]
			}
			n = n;
			j.kb.ud(j.hb * n);
			j.kb.sd(j.nb * n);
			j.kb.td(j.Wd * n);
			j.kb.Ja = j.Ja * n;
			var pa = j.rc, Sa = j.qc * n;
			pa.qc = Sa;
			var p = pa.Ud;
			p.Wc = Sa;
			Jf(p);
			pa = {};
			var Ta = M.ka;
			for (Sa = 0; Sa < Ta.length; Sa++) {
				var xa = Ta[Sa], ad, bd;
				if (xa.ua === "C") {
					p = void 0;
					if (!(p = xa.ya.length === 0)) {
						n = void 0;
						if (!(n = xa.yb !== 0)) {
							q = void 0;
							if (!(q = xa.Aa !== 0))
								b: if (xa.ya.length !== 2)
									q = false;
								else {
									var sf = xa.oa;
									for (x = 0; x < sf.length; x++)
										if (sf[x].ib !== Q.Wb) {
											q = false;
											break b
										}
									q = true
								}
							n = q
						}
						p = n
					}
					bd = p
				} else
					bd = true;
				if (bd) {
					p = xa;
					var T = j.rc.Ud, y = new of(p);
					n = void 0;
					if (p.yb === 0)
						n = Kf(T, p.ua);
					else if (p.ua === "H")
						switch (p.yb) {
						case 1:
							n = Kf(T, p.ua);
							break;
						case 2:
							n = Kf(T, "D");
							break;
						case 3:
							n = Kf(T, "T");
							break
						}
					else
						n = Kf(T, p.ua);
					var cd = Lf(T, n), Ub = Y(cd);
					y.nc.setTransform(1, 0, 0, 1,
							-(Ub.left - (y.$d.$ - 0.5 * Ub.width)),
							-(Ub.top - (y.$d.aa - 0.5 * Ub.height)));
					cd.transform(y.nc);
					y.vb = cd;
					n = void 0;
					var tf = p.yb;
					if (tf === 0 || p.ua === "H" && p.yb !== 1)
						n = void 0;
					else {
						var dd = Lf(T, Kf(T, tf.toString())), uf = T.Wc * 0.45
								/ Y(dd).height, vf = new J;
						vf.setTransform(uf, 0, 0, uf, 0, 0);
						dd.transform(vf);
						n = dd
					}
					n && rf(y, n);
					q = void 0;
					var Vb = ce(p);
					if (Vb !== 0) {
						var ed = new X, wf = Kf(T, "H")[0];
						Hd(ed, wf.ta);
						if (!(Vb < 2 || Vb > 9)) {
							var xf = new J, fd = Kf(T, Vb.toString())[0], yf = Y(wf.ta), Ah = Y(fd.ta);
							xf.translate(yf.left + yf.width, -0.3 * Ah.height);
							fd.ta.transform(xf);
							Hd(ed, fd.ta)
						}
						q = ed
					} else
						q = void 0;
					n = void 0;
					x = void 0;
					if (p.Aa !== 0) {
						var gd = p.Aa;
						N = gd > 0 ? "+" : "-";
						if (Math.abs(gd) > 1)
							N = Math.abs(gd) + N;
						x = Lf(T, Kf(T, N))
					} else
						x = void 0;
					n = x;
					if (q || n) {
						var zf = Mf(T, p);
						switch (zf) {
						case Of:
							q && pf(y, q);
							break;
						case Nf:
							q && rf(y, q);
							break;
						case Qf:
							if (q) {
								p = q;
								var Wb = Y(y.vb);
								qf(y, p, Wb.left, Wb.top + Wb.height + y.Kc
										* Wb.height);
								y.Dd = p
							}
							break;
						case Pf:
							if (q) {
								p = q;
								var hd = Y(y.vb), Bh = Y(p);
								qf(y, p, hd.left, hd.top - Bh.height - y.Kc
										* hd.height);
								y.wd = p
							}
							break
						}
						if (n)
							zf === Nf ? rf(y, n) : pf(y, n)
					}
					ad = y.tc()
				} else
					ad = undefined;
				if (p = ad)
					pa[t(xa)] = p
			}
			var P = M.ka[0], Xb = pa[t(P)], U = Xb ? Y(Xb) : undefined, Af = M.ka, Yb = 0.5 * j.kb.za
					.wa(), s = U ? new Kb(U.top + U.height, U.left + U.width,
					U.top, U.left) : new Kb(P.aa, P.$, P.aa, P.$);
			for (Ta = 1; Ta < Af.length; Ta++) {
				P = Af[Ta];
				if (U = (Xb = pa[t(P)]) ? Y(Xb) : undefined) {
					s.left = Math.min(s.left, U.left);
					s.right = Math.max(s.right, U.left + U.width);
					s.top = Math.max(s.top, U.top + U.height);
					s.bottom = Math.min(s.bottom, U.top)
				} else {
					s.left = Math.min(s.left, P.$ - Yb);
					s.right = Math.max(s.right, P.$ + Yb);
					s.top = Math.max(s.top, P.aa + Yb);
					s.bottom = Math.min(s.bottom, P.aa - Yb)
				}
			}
			if (!Yd()) {
				var Ch = s.top;
				s.top = s.bottom;
				s.bottom = Ch
			}
			ja.vd(s);
			ja.qd(j.ja, j.pa);
			var Bf = M.ka;
			for (P = 0; P < Bf.length; P++) {
				var id = Bf[P], Cf = pa[t(id)];
				if (Cf) {
					var jd;
					var kd = j.rc;
					if (id.eb())
						jd = kd.pf;
					else {
						var Df = kd.Da[id.ua];
						jd = Df ? Df : kd.Da["?"]
					}
					ja.cb(Cf, null, jd)
				}
			}
			var ld = M.oa;
			for (M = 0; M < ld.length; M++) {
				var Ef = ld[M], Ff = pa[t(Ef.ba)], Gf = pa[t(Ef.ia)], Dh = Ff ? Y(Ff)
						: undefined, Eh = Gf ? Y(Gf) : undefined;
				j.kb.Hd(ld[M], ja, Dh, Eh, void 0)
			}
			var Zb = j.kb;
			ja.cb(Zb.Eb, Zb.za, Zb.Qb);
			Zb.Eb.clear();
			c.bd && c.Qa.zd()
		} catch (Ih) {
			c.Ha().className = "problem-image";
			window.console && window.console.error && console.error(Hh)
		}
		if (d)
			this.Sd[d] = c
	};
	function Fh(a, b, c) {
		a.df.push(u(function() {
			this.Gc(b, c)
		}, a))
	}
	function yh(a, b, c, d) {
		a = [];
		for ( var e = 0; e < b.childNodes.length; e++)
			b.childNodes[e].nodeType === 1 && a.push(b.childNodes[e]);
		for (b = 0; b < a.length; b++) {
			e = a[b].getAttribute("name");
			var f = a[b].getAttribute("value");
			if (e === c && f)
				return f
		}
		return d
	}
	var Gh = 'ChemVector Error: <object> tag lacks <param> subelement with either "src" or "data" name', Hh = "ChemVector Error: Structure data could not be rendered";
	da("chemvector.browser.ImageLoader.init", function(a) {
		uh = a || {};
		kc(window, "load", vh, false)
	}, void 0);
	da("chemvector.browser.ImageLoader.getInstance", th.db, void 0);
	th.prototype.getImage = th.prototype.ve;
	th.prototype.run = th.prototype.ge;
	nh.prototype.setSize = nh.prototype.Jc;
})();
