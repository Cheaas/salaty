!function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    function c(a, b) {
        b = b || ca;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }
    function d(a) {
        var b = !!a && "length" in a && a.length, c = pa.type(a);
        return "function" !== c && !pa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    function e(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    function f(a, b, c) {
        return pa.isFunction(b) ? pa.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        }) : b.nodeType ? pa.grep(a, function(a) {
            return a === b !== c;
        }) : "string" != typeof b ? pa.grep(a, function(a) {
            return ha.call(b, a) > -1 !== c;
        }) : za.test(b) ? pa.filter(b, a, c) : (b = pa.filter(b, a), pa.grep(a, function(a) {
            return ha.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
    }
    function g(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function h(a) {
        var b = {};
        return pa.each(a.match(Ea) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function i(a) {
        return a;
    }
    function j(a) {
        throw a;
    }
    function k(a, b, c, d) {
        var e;
        try {
            a && pa.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && pa.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [ a ].slice(d));
        } catch (a) {
            c.apply(void 0, [ a ]);
        }
    }
    function l() {
        ca.removeEventListener("DOMContentLoaded", l), a.removeEventListener("load", l), 
        pa.ready();
    }
    function m() {
        this.expando = pa.expando + m.uid++;
    }
    function n(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : La.test(a) ? JSON.parse(a) : a);
    }
    function o(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Ma, "-$&").toLowerCase(), 
        "string" == typeof (c = a.getAttribute(d))) {
            try {
                c = n(c);
            } catch (a) {}
            Ka.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function p(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return pa.css(a, b, "");
        }, i = h(), j = c && c[3] || (pa.cssNumber[b] ? "" : "px"), k = (pa.cssNumber[b] || "px" !== j && +i) && Oa.exec(pa.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, pa.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, 
        d.start = k, d.end = e)), e;
    }
    function q(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = Sa[d];
        return e || (b = c.body.appendChild(c.createElement(d)), e = pa.css(b, "display"), 
        b.parentNode.removeChild(b), "none" === e && (e = "block"), Sa[d] = e, e);
    }
    function r(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, 
        b ? ("none" === c && (e[f] = Ja.get(d, "display") || null, e[f] || (d.style.display = "")), 
        "" === d.style.display && Qa(d) && (e[f] = q(d))) : "none" !== c && (e[f] = "none", 
        Ja.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    function s(a, b) {
        var c;
        return c = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : [], 
        void 0 === b || b && e(a, b) ? pa.merge([ a ], c) : c;
    }
    function t(a, b) {
        for (var c = 0, d = a.length; c < d; c++) Ja.set(a[c], "globalEval", !b || Ja.get(b[c], "globalEval"));
    }
    function u(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if ((f = a[n]) || 0 === f) if ("object" === pa.type(f)) pa.merge(m, f.nodeType ? [ f ] : f); else if (Xa.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (Ua.exec(f) || [ "", "" ])[1].toLowerCase(), 
            i = Wa[h] || Wa._default, g.innerHTML = i[1] + pa.htmlPrefilter(f) + i[2], k = i[0]; k--; ) g = g.lastChild;
            pa.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", n = 0; f = m[n++]; ) if (d && pa.inArray(f, d) > -1) e && e.push(f); else if (j = pa.contains(f.ownerDocument, f), 
        g = s(l.appendChild(f), "script"), j && t(g), c) for (k = 0; f = g[k++]; ) Va.test(f.type || "") && c.push(f);
        return l;
    }
    function v() {
        return !0;
    }
    function w() {
        return !1;
    }
    function x() {
        try {
            return ca.activeElement;
        } catch (a) {}
    }
    function y(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) y(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, 
        d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = w; else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return pa().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = pa.guid++)), a.each(function() {
            pa.event.add(this, b, e, d, c);
        });
    }
    function z(a, b) {
        return e(a, "table") && e(11 !== b.nodeType ? b : b.firstChild, "tr") ? pa(">tbody", a)[0] || a : a;
    }
    function A(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function B(a) {
        var b = db.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function C(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (Ja.hasData(a) && (f = Ja.access(a), g = Ja.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; c < d; c++) pa.event.add(b, e, j[e][c]);
            }
            Ka.hasData(a) && (h = Ka.access(a), i = pa.extend({}, h), Ka.set(b, i));
        }
    }
    function D(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ta.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function E(a, b, d, e) {
        b = fa.apply([], b);
        var f, g, h, i, j, k, l = 0, m = a.length, n = m - 1, o = b[0], p = pa.isFunction(o);
        if (p || m > 1 && "string" == typeof o && !na.checkClone && cb.test(o)) return a.each(function(c) {
            var f = a.eq(c);
            p && (b[0] = o.call(this, c, f.html())), E(f, b, d, e);
        });
        if (m && (f = u(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), 
        g || e)) {
            for (h = pa.map(s(f, "script"), A), i = h.length; l < m; l++) j = f, l !== n && (j = pa.clone(j, !0, !0), 
            i && pa.merge(h, s(j, "script"))), d.call(a[l], j, l);
            if (i) for (k = h[h.length - 1].ownerDocument, pa.map(h, B), l = 0; l < i; l++) j = h[l], 
            Va.test(j.type || "") && !Ja.access(j, "globalEval") && pa.contains(k, j) && (j.src ? pa._evalUrl && pa._evalUrl(j.src) : c(j.textContent.replace(eb, ""), k));
        }
        return a;
    }
    function F(a, b, c) {
        for (var d, e = b ? pa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || pa.cleanData(s(d)), 
        d.parentNode && (c && pa.contains(d.ownerDocument, d) && t(s(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    function G(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || hb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || pa.contains(a.ownerDocument, a) || (g = pa.style(a, b)), 
        !na.pixelMarginRight() && gb.test(g) && fb.test(b) && (d = h.width, e = h.minWidth, 
        f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, 
        h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function H(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function I(a) {
        if (a in nb) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = mb.length; c--; ) if ((a = mb[c] + b) in nb) return a;
    }
    function J(a) {
        var b = pa.cssProps[a];
        return b || (b = pa.cssProps[a] = I(a) || a), b;
    }
    function K(a, b, c) {
        var d = Oa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function L(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += pa.css(a, c + Pa[f], !0, e)), 
        d ? ("content" === c && (g -= pa.css(a, "padding" + Pa[f], !0, e)), "margin" !== c && (g -= pa.css(a, "border" + Pa[f] + "Width", !0, e))) : (g += pa.css(a, "padding" + Pa[f], !0, e), 
        "padding" !== c && (g += pa.css(a, "border" + Pa[f] + "Width", !0, e)));
        return g;
    }
    function M(a, b, c) {
        var d, e = hb(a), f = G(a, b, e), g = "border-box" === pa.css(a, "boxSizing", !1, e);
        return gb.test(f) ? f : (d = g && (na.boxSizingReliable() || f === a.style[b]), 
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), (f = parseFloat(f) || 0) + L(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }
    function N(a, b, c, d, e) {
        return new N.prototype.init(a, b, c, d, e);
    }
    function O() {
        pb && (!1 === ca.hidden && a.requestAnimationFrame ? a.requestAnimationFrame(O) : a.setTimeout(O, pa.fx.interval), 
        pa.fx.tick());
    }
    function P() {
        return a.setTimeout(function() {
            ob = void 0;
        }), ob = pa.now();
    }
    function Q(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = Pa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function R(a, b, c) {
        for (var d, e = (U.tweeners[b] || []).concat(U.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function S(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && Qa(a), q = Ja.get(a, "fxshow");
        c.queue || (g = pa._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, 
        h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h();
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, pa.queue(a, "fx").length || g.empty.fire();
            });
        }));
        for (d in b) if (e = b[d], qb.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            n[d] = q && q[d] || pa.style(a, d);
        }
        if ((i = !pa.isEmptyObject(b)) || !pa.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
            j = q && q.display, null == j && (j = Ja.get(a, "display")), k = pa.css(a, "display"), 
            "none" === k && (j ? k = j : (r([ a ], !0), j = a.style.display || j, k = pa.css(a, "display"), 
            r([ a ]))), ("inline" === k || "inline-block" === k && null != j) && "none" === pa.css(a, "float") && (i || (m.done(function() {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), 
            c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = Ja.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && r([ a ], !0), m.done(function() {
                p || r([ a ]), Ja.remove(a, "fxshow");
                for (d in n) pa.style(a, d, n[d]);
            })), i = R(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, 
            i.start = 0));
        }
    }
    function T(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = pa.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = pa.cssHooks[d]) && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function U(a, b, c) {
        var d, e, f = 0, g = U.prefilters.length, h = pa.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = ob || P(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), f < 1 && i ? c : (i || h.notifyWith(a, [ j, 1, 0 ]), 
            h.resolveWith(a, [ j ]), !1);
        }, j = h.promise({
            elem: a,
            props: pa.extend({}, b),
            opts: pa.extend(!0, {
                specialEasing: {},
                easing: pa.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: ob || P(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = pa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; c < d; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [ j, 1, 0 ]), h.resolveWith(a, [ j, b ])) : h.rejectWith(a, [ j, b ]), 
                this;
            }
        }), k = j.props;
        for (T(k, j.opts.specialEasing); f < g; f++) if (d = U.prefilters[f].call(j, a, k, j.opts)) return pa.isFunction(d.stop) && (pa._queueHooks(j.elem, j.opts.queue).stop = pa.proxy(d.stop, d)), 
        d;
        return pa.map(k, R, j), pa.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), 
        pa.fx.timer(pa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j;
    }
    function V(a) {
        return (a.match(Ea) || []).join(" ");
    }
    function W(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    function X(a, b, c, d) {
        var e;
        if (Array.isArray(b)) pa.each(b, function(b, e) {
            c || Bb.test(a) ? d(a, e) : X(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== pa.type(b)) d(a, b); else for (e in b) X(a + "[" + e + "]", b[e], c, d);
    }
    function Y(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(Ea) || [];
            if (pa.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Z(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, pa.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === Nb;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function $(a, b) {
        var c, d, e = pa.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && pa.extend(!0, a, d), a;
    }
    function _(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }
    function aa(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (!(g = j[i + " " + f] || j["* " + f])) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (!0 !== g) if (g && a.throws) b = g(b); else try {
                b = g(b);
            } catch (a) {
                return {
                    state: "parsererror",
                    error: g ? a : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    var ba = [], ca = a.document, da = Object.getPrototypeOf, ea = ba.slice, fa = ba.concat, ga = ba.push, ha = ba.indexOf, ia = {}, ja = ia.toString, ka = ia.hasOwnProperty, la = ka.toString, ma = la.call(Object), na = {}, oa = "3.2.1", pa = function(a, b) {
        return new pa.fn.init(a, b);
    }, qa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ra = /^-ms-/, sa = /-([a-z])/g, ta = function(a, b) {
        return b.toUpperCase();
    };
    pa.fn = pa.prototype = {
        jquery: oa,
        constructor: pa,
        length: 0,
        toArray: function() {
            return ea.call(this);
        },
        get: function(a) {
            return null == a ? ea.call(this) : a < 0 ? this[a + this.length] : this[a];
        },
        pushStack: function(a) {
            var b = pa.merge(this.constructor(), a);
            return b.prevObject = this, b;
        },
        each: function(a) {
            return pa.each(this, a);
        },
        map: function(a) {
            return this.pushStack(pa.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(ea.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: ga,
        sort: ba.sort,
        splice: ba.splice
    }, pa.extend = pa.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || pa.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (pa.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, 
        f = c && Array.isArray(c) ? c : []) : f = c && pa.isPlainObject(c) ? c : {}, g[b] = pa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, pa.extend({
        expando: "jQuery" + (oa + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === pa.type(a);
        },
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = pa.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== ja.call(a) || (b = da(a)) && ("function" != typeof (c = ka.call(b, "constructor") && b.constructor) || la.call(c) !== ma));
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ia[ja.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            c(a);
        },
        camelCase: function(a) {
            return a.replace(ra, "ms-").replace(sa, ta);
        },
        each: function(a, b) {
            var c, e = 0;
            if (d(a)) for (c = a.length; e < c && !1 !== b.call(a[e], e, a[e]); e++) ; else for (e in a) if (!1 === b.call(a[e], e, a[e])) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(qa, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (d(Object(a)) ? pa.merge(c, "string" == typeof a ? [ a ] : a) : ga.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : ha.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]);
            return d;
        },
        map: function(a, b, c) {
            var e, f, g = 0, h = [];
            if (d(a)) for (e = a.length; g < e; g++) null != (f = b(a[g], g, c)) && h.push(f); else for (g in a) null != (f = b(a[g], g, c)) && h.push(f);
            return fa.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), pa.isFunction(a)) return d = ea.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(ea.call(arguments)));
            }, e.guid = a.guid = a.guid || pa.guid++, e;
        },
        now: Date.now,
        support: na
    }), "function" == typeof Symbol && (pa.fn[Symbol.iterator] = ba[Symbol.iterator]), 
    pa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        ia["[object " + b + "]"] = b.toLowerCase();
    });
    var ua = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, k, m = b && b.ownerDocument, o = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
            if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                if (11 !== o && (i = ra.exec(a))) if (e = i[1]) {
                    if (9 === o) {
                        if (!(g = b.getElementById(e))) return c;
                        if (g.id === e) return c.push(g), c;
                    } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), 
                    c;
                } else {
                    if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), 
                    c;
                }
                if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                    if (1 !== o) m = b, k = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), 
                        j = A(a), f = j.length; f--; ) j[f] = "#" + h + " " + n(j[f]);
                        k = j.join(","), m = sa.test(a) && l(b.parentNode) || b;
                    }
                    if (k) try {
                        return $.apply(c, m.querySelectorAll(k)), c;
                    } catch (a) {} finally {
                        h === O && b.removeAttribute("id");
                    }
                }
            }
            return C(a.replace(ha, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[O] = !0, a;
        }
        function e(a) {
            var b = H.createElement("fieldset");
            try {
                return !!a(b);
            } catch (a) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--; ) x.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return function(b) {
                return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b && b.disabled === a;
            };
        }
        function k(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function l(a) {
            return a && void 0 !== a.getElementsByTagName && a;
        }
        function m() {}
        function n(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d;
        }
        function o(a, b, c) {
            var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = R++;
            return b.first ? function(b, c, e) {
                for (;b = b[d]; ) if (1 === b.nodeType || g) return a(b, c, e);
                return !1;
            } : function(b, c, i) {
                var j, k, l, m = [ Q, h ];
                if (i) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || g) if (l = b[O] || (b[O] = {}), 
                k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else {
                    if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                    if (k[f] = m, m[2] = a(b, c, i)) return !0;
                }
                return !1;
            };
        }
        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function q(a, c, d) {
            for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
            return d;
        }
        function r(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), 
            j && b.push(h)));
            return g;
        }
        function s(a, b, c, e, f, g) {
            return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = d || q(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? p : r(p, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = r(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t);
            });
        }
        function t(a) {
            for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b;
            }, g, !0), j = o(function(a) {
                return aa(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e;
            } ]; h < e; h++) if (c = x.relative[a[h].type]) k = [ o(p(k), c) ]; else {
                if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                    for (d = ++h; d < e && !x.relative[a[d].type]; d++) ;
                    return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a));
                }
                k.push(c);
            }
            return p(k);
        }
        function u(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], q = [], s = D, t = d || f && x.find.TAG("*", j), u = Q += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++]; ) if (m(k, g || H, h)) {
                            i.push(k);
                            break;
                        }
                        j && (Q = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, q, g, h);
                    if (d) {
                        if (n > 0) for (;o--; ) p[o] || q[o] || (q[o] = Y.call(i));
                        q = r(q);
                    }
                    $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (Q = u, D = s), p;
            };
            return e ? d(g) : g;
        }
        var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date(), P = a.document, Q = 0, R = 0, S = c(), T = c(), U = c(), V = function(a, b) {
            return a === b && (F = !0), 0;
        }, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, aa = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
            return -1;
        }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]", fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)", ga = new RegExp(ca + "+", "g"), ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"), ia = new RegExp("^" + ca + "*," + ca + "*"), ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"), ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), la = new RegExp(fa), ma = new RegExp("^" + da + "$"), na = {
            ID: new RegExp("^#(" + da + ")"),
            CLASS: new RegExp("^\\.(" + da + ")"),
            TAG: new RegExp("^(" + da + "|[*])"),
            ATTR: new RegExp("^" + ea),
            PSEUDO: new RegExp("^" + fa),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ba + ")$", "i"),
            needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        }, oa = /^(?:input|select|textarea|button)$/i, pa = /^h\d$/i, qa = /^[^{]+\{\s*\[native \w/, ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, sa = /[+~]/, ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), ua = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, wa = function(a, b) {
            return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        }, xa = function() {
            G();
        }, ya = o(function(a) {
            return !0 === a.disabled && ("form" in a || "label" in a);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType;
        } catch (a) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        w = b.support = {}, z = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName;
        }, G = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : P;
            return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, 
            J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), 
            w.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), w.getElementsByTagName = e(function(a) {
                return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length;
            }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) {
                return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length;
            }), w.getById ? (x.filter.ID = function(a) {
                var b = a.replace(ta, ua);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }, x.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && J) {
                    var c = b.getElementById(a);
                    return c ? [ c ] : [];
                }
            }) : (x.filter.ID = function(a) {
                var b = a.replace(ta, ua);
                return function(a) {
                    var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }, x.find.ID = function(a, b) {
                if (void 0 !== b.getElementById && J) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if ((c = f.getAttributeNode("id")) && c.value === a) return [ f ];
                        for (e = b.getElementsByName(a), d = 0; f = e[d++]; ) if ((c = f.getAttributeNode("id")) && c.value === a) return [ f ];
                    }
                    return [];
                }
            }), x.find.TAG = w.getElementsByTagName ? function(a, b) {
                return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, x.find.CLASS = w.getElementsByClassName && function(a, b) {
                if (void 0 !== b.getElementsByClassName && J) return b.getElementsByClassName(a);
            }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) {
                I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), 
                a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), 
                a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]");
            }), e(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = H.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 
                2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), 
                I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), 
                a.querySelectorAll("*,:x"), K.push(",.*:");
            })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) {
                w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa);
            }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), 
            b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, V = b ? function(a, b) {
                if (a === b) return F = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c || (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1);
            } : function(a, b) {
                if (a === b) return F = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode; ) h.unshift(c);
                for (c = b; c = c.parentNode; ) i.unshift(c);
                for (;h[d] === i[d]; ) d++;
                return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0;
            }, H) : H;
        }, b.matches = function(a, c) {
            return b(a, null, null, c);
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
                var d = M.call(a, c);
                if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (a) {}
            return b(c, H, null, [ a ]).length > 0;
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== H && G(a), N(a, b);
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== H && G(a);
            var c = x.attrHandle[b.toLowerCase()], d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
            return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }, b.escape = function(a) {
            return (a + "").replace(va, wa);
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return E = null, a;
        }, y = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += y(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d++]; ) c += y(b);
            return c;
        }, x = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ta, ua).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = S[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"));
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (m = b; m = m[p]; ) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                                j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop(); ) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [ Q, n, t ];
                                    break;
                                }
                            } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                            j = k[a] || [], n = j[0] === Q && j[1], t = n), !1 === t) for (;(m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), 
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [ Q, t ]), m !== b)); ) ;
                            return (t -= e) === d || t % d == 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[O] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = aa(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = B(a.replace(ha, "$1"));
                    return e[O] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return a = a.replace(ta, ua), function(b) {
                        return (b.textContent || b.innerText || y(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(), 
                    function(b) {
                        var c;
                        do {
                            if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === I;
                },
                focus: function(a) {
                    return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: j(!1),
                disabled: j(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !x.pseudos.empty(a);
                },
                header: function(a) {
                    return pa.test(a.nodeName);
                },
                input: function(a) {
                    return oa.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: k(function() {
                    return [ 0 ];
                }),
                last: k(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: k(function(a, b, c) {
                    return [ c < 0 ? c + b : c ];
                }),
                even: k(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a;
                }),
                odd: k(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a;
                }),
                lt: k(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: k(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (v in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[v] = h(v);
        for (v in {
            submit: !0,
            reset: !0
        }) x.pseudos[v] = i(v);
        return m.prototype = x.filters = x.pseudos, x.setFilters = new m(), A = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = T[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = x.preFilter; h; ) {
                d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : T(a, i).slice(0);
        }, B = b.compile = function(a, b) {
            var c, d = [], e = [], f = U[a + " "];
            if (!f) {
                for (b || (b = A(a)), c = b.length; c--; ) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                f = U(a, u(e, d)), f.selector = a;
            }
            return f;
        }, C = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, k = !d && A(a = j.selector || a);
            if (c = c || [], 1 === k.length) {
                if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                    if (!(b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0])) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length);
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]); ) if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                    if (f.splice(e, 1), !(a = d.length && n(f))) return $.apply(c, d), c;
                    break;
                }
            }
            return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c;
        }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, 
        G(), w.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(H.createElement("fieldset"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), w.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(ba, function(a, b, c) {
            var d;
            if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    pa.find = ua, pa.expr = ua.selectors, pa.expr[":"] = pa.expr.pseudos, pa.uniqueSort = pa.unique = ua.uniqueSort, 
    pa.text = ua.getText, pa.isXMLDoc = ua.isXML, pa.contains = ua.contains, pa.escapeSelector = ua.escape;
    var va = function(a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
            if (e && pa(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, wa = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, xa = pa.expr.match.needsContext, ya = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, za = /^.[^:#\[\.,]*$/;
    pa.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? pa.find.matchesSelector(d, a) ? [ d ] : [] : pa.find.matches(a, pa.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, pa.fn.extend({
        find: function(a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a) return this.pushStack(pa(a).filter(function() {
                for (b = 0; b < d; b++) if (pa.contains(e[b], this)) return !0;
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) pa.find(a, e[b], c);
            return d > 1 ? pa.uniqueSort(c) : c;
        },
        filter: function(a) {
            return this.pushStack(f(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(f(this, a || [], !0));
        },
        is: function(a) {
            return !!f(this, "string" == typeof a && xa.test(a) ? pa(a) : a || [], !1).length;
        }
    });
    var Aa, Ba = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (pa.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || Aa, "string" == typeof a) {
            if (!(d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : Ba.exec(a)) || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (d[1]) {
                if (b = b instanceof pa ? b[0] : b, pa.merge(this, pa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ca, !0)), 
                ya.test(d[1]) && pa.isPlainObject(b)) for (d in b) pa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                return this;
            }
            return e = ca.getElementById(d[2]), e && (this[0] = e, this.length = 1), this;
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : pa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(pa) : pa.makeArray(a, this);
    }).prototype = pa.fn, Aa = pa(ca);
    var Ca = /^(?:parents|prev(?:Until|All))/, Da = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pa.fn.extend({
        has: function(a) {
            var b = pa(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++) if (pa.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && pa(a);
            if (!xa.test(a)) for (;d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && pa.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? pa.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? ha.call(pa(a), this[0]) : ha.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(pa.uniqueSort(pa.merge(this.get(), pa(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), pa.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return va(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return va(a, "parentNode", c);
        },
        next: function(a) {
            return g(a, "nextSibling");
        },
        prev: function(a) {
            return g(a, "previousSibling");
        },
        nextAll: function(a) {
            return va(a, "nextSibling");
        },
        prevAll: function(a) {
            return va(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return va(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return va(a, "previousSibling", c);
        },
        siblings: function(a) {
            return wa((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return wa(a.firstChild);
        },
        contents: function(a) {
            return e(a, "iframe") ? a.contentDocument : (e(a, "template") && (a = a.content || a), 
            pa.merge([], a.childNodes));
        }
    }, function(a, b) {
        pa.fn[a] = function(c, d) {
            var e = pa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = pa.filter(d, e)), 
            this.length > 1 && (Da[a] || pa.uniqueSort(e), Ca.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var Ea = /[^\x20\t\r\n\f]+/g;
    pa.Callbacks = function(a) {
        a = "string" == typeof a ? h(a) : pa.extend({}, a);
        var b, c, d, e, f = [], g = [], i = -1, j = function() {
            for (e = e || a.once, d = b = !0; g.length; i = -1) for (c = g.shift(); ++i < f.length; ) !1 === f[i].apply(c[0], c[1]) && a.stopOnFalse && (i = f.length, 
            c = !1);
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        }, k = {
            add: function() {
                return f && (c && !b && (i = f.length - 1, g.push(c)), function b(c) {
                    pa.each(c, function(c, d) {
                        pa.isFunction(d) ? a.unique && k.has(d) || f.push(d) : d && d.length && "string" !== pa.type(d) && b(d);
                    });
                }(arguments), c && !b && j()), this;
            },
            remove: function() {
                return pa.each(arguments, function(a, b) {
                    for (var c; (c = pa.inArray(b, f, c)) > -1; ) f.splice(c, 1), c <= i && i--;
                }), this;
            },
            has: function(a) {
                return a ? pa.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function() {
                return f && (f = []), this;
            },
            disable: function() {
                return e = g = [], f = c = "", this;
            },
            disabled: function() {
                return !f;
            },
            lock: function() {
                return e = g = [], c || b || (f = c = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [ a, c.slice ? c.slice() : c ], g.push(c), b || j()), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return k;
    }, pa.extend({
        Deferred: function(b) {
            var c = [ [ "notify", "progress", pa.Callbacks("memory"), pa.Callbacks("memory"), 2 ], [ "resolve", "done", pa.Callbacks("once memory"), pa.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", pa.Callbacks("once memory"), pa.Callbacks("once memory"), 1, "rejected" ] ], d = "pending", e = {
                state: function() {
                    return d;
                },
                always: function() {
                    return f.done(arguments).fail(arguments), this;
                },
                catch: function(a) {
                    return e.then(null, a);
                },
                pipe: function() {
                    var a = arguments;
                    return pa.Deferred(function(b) {
                        pa.each(c, function(c, d) {
                            var e = pa.isFunction(a[d[4]]) && a[d[4]];
                            f[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && pa.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                then: function(b, d, e) {
                    function f(b, c, d, e) {
                        return function() {
                            var h = this, k = arguments, l = function() {
                                var a, l;
                                if (!(b < g)) {
                                    if ((a = d.apply(h, k)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                    l = a && ("object" == typeof a || "function" == typeof a) && a.then, pa.isFunction(l) ? e ? l.call(a, f(g, c, i, e), f(g, c, j, e)) : (g++, 
                                    l.call(a, f(g, c, i, e), f(g, c, j, e), f(g, c, i, c.notifyWith))) : (d !== i && (h = void 0, 
                                    k = [ a ]), (e || c.resolveWith)(h, k));
                                }
                            }, m = e ? l : function() {
                                try {
                                    l();
                                } catch (a) {
                                    pa.Deferred.exceptionHook && pa.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== j && (h = void 0, 
                                    k = [ a ]), c.rejectWith(h, k));
                                }
                            };
                            b ? m() : (pa.Deferred.getStackHook && (m.stackTrace = pa.Deferred.getStackHook()), 
                            a.setTimeout(m));
                        };
                    }
                    var g = 0;
                    return pa.Deferred(function(a) {
                        c[0][3].add(f(0, a, pa.isFunction(e) ? e : i, a.notifyWith)), c[1][3].add(f(0, a, pa.isFunction(b) ? b : i)), 
                        c[2][3].add(f(0, a, pa.isFunction(d) ? d : j));
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? pa.extend(a, e) : e;
                }
            }, f = {};
            return pa.each(c, function(a, b) {
                var g = b[2], h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        },
        when: function(a) {
            var b = arguments.length, c = b, d = Array(c), e = ea.call(arguments), f = pa.Deferred(), g = function(a) {
                return function(c) {
                    d[a] = this, e[a] = arguments.length > 1 ? ea.call(arguments) : c, --b || f.resolveWith(d, e);
                };
            };
            if (b <= 1 && (k(a, f.done(g(c)).resolve, f.reject, !b), "pending" === f.state() || pa.isFunction(e[c] && e[c].then))) return f.then();
            for (;c--; ) k(e[c], g(c), f.reject);
            return f.promise();
        }
    });
    var Fa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pa.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && Fa.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }, pa.readyException = function(b) {
        a.setTimeout(function() {
            throw b;
        });
    };
    var Ga = pa.Deferred();
    pa.fn.ready = function(a) {
        return Ga.then(a).catch(function(a) {
            pa.readyException(a);
        }), this;
    }, pa.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (!0 === a ? --pa.readyWait : pa.isReady) || (pa.isReady = !0, !0 !== a && --pa.readyWait > 0 || Ga.resolveWith(ca, [ pa ]));
        }
    }), pa.ready.then = Ga.then, "complete" === ca.readyState || "loading" !== ca.readyState && !ca.documentElement.doScroll ? a.setTimeout(pa.ready) : (ca.addEventListener("DOMContentLoaded", l), 
    a.addEventListener("load", l));
    var Ha = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === pa.type(c)) {
            e = !0;
            for (h in c) Ha(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, pa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(pa(a), c);
        })), b)) for (;h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, Ia = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    m.uid = 1, m.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, Ia(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[pa.camelCase(b)] = c; else for (d in b) e[pa.camelCase(d)] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][pa.camelCase(b)];
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), 
            void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(pa.camelCase) : (b = pa.camelCase(b), b = b in d ? [ b ] : b.match(Ea) || []), 
                    c = b.length;
                    for (;c--; ) delete d[b[c]];
                }
                (void 0 === b || pa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !pa.isEmptyObject(b);
        }
    };
    var Ja = new m(), Ka = new m(), La = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ma = /[A-Z]/g;
    pa.extend({
        hasData: function(a) {
            return Ka.hasData(a) || Ja.hasData(a);
        },
        data: function(a, b, c) {
            return Ka.access(a, b, c);
        },
        removeData: function(a, b) {
            Ka.remove(a, b);
        },
        _data: function(a, b, c) {
            return Ja.access(a, b, c);
        },
        _removeData: function(a, b) {
            Ja.remove(a, b);
        }
    }), pa.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Ka.get(f), 1 === f.nodeType && !Ja.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = pa.camelCase(d.slice(5)), 
                    o(f, d, e[d])));
                    Ja.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                Ka.set(this, a);
            }) : Ha(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (void 0 !== (c = Ka.get(f, a))) return c;
                    if (void 0 !== (c = o(f, a))) return c;
                } else this.each(function() {
                    Ka.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                Ka.remove(this, a);
            });
        }
    }), pa.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = Ja.get(a, b), c && (!d || Array.isArray(c) ? d = Ja.access(a, b, pa.makeArray(c)) : d.push(c)), 
            d || [];
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = pa.queue(a, b), d = c.length, e = c.shift(), f = pa._queueHooks(a, b), g = function() {
                pa.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return Ja.get(a, c) || Ja.access(a, c, {
                empty: pa.Callbacks("once memory").add(function() {
                    Ja.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), pa.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? pa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = pa.queue(this, a, b);
                pa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && pa.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                pa.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = pa.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) (c = Ja.get(f[g], a + "queueHooks")) && c.empty && (d++, 
            c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Na = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oa = new RegExp("^(?:([+-])=|)(" + Na + ")([a-z%]*)$", "i"), Pa = [ "Top", "Right", "Bottom", "Left" ], Qa = function(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && pa.contains(a.ownerDocument, a) && "none" === pa.css(a, "display");
    }, Ra = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    }, Sa = {};
    pa.fn.extend({
        show: function() {
            return r(this, !0);
        },
        hide: function() {
            return r(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Qa(this) ? pa(this).show() : pa(this).hide();
            });
        }
    });
    var Ta = /^(?:checkbox|radio)$/i, Ua = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Va = /^$|\/(?:java|ecma)script/i, Wa = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Wa.optgroup = Wa.option, Wa.tbody = Wa.tfoot = Wa.colgroup = Wa.caption = Wa.thead, 
    Wa.th = Wa.td;
    var Xa = /<|&#?\w+;/;
    !function() {
        var a = ca.createDocumentFragment(), b = a.appendChild(ca.createElement("div")), c = ca.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), na.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", na.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ya = ca.documentElement, Za = /^key/, $a = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, _a = /^([^.]*)(?:\.(.+)|)/;
    pa.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Ja.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), e && pa.find.matchesSelector(Ya, e), 
            c.guid || (c.guid = pa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                return void 0 !== pa && pa.event.triggered !== b.type ? pa.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(Ea) || [ "" ], j = b.length; j--; ) h = _a.exec(b[j]) || [], 
            n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = pa.event.special[n] || {}, 
            n = (e ? l.delegateType : l.bindType) || n, l = pa.event.special[n] || {}, k = pa.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && pa.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            pa.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Ja.hasData(a) && Ja.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(Ea) || [ "" ], j = b.length; j--; ) if (h = _a.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = pa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    g = f = m.length; f--; ) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || pa.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) pa.event.remove(a, n + b[j], c, d, !0);
                pa.isEmptyObject(i) && Ja.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            var b, c, d, e, f, g, h = pa.event.fix(a), i = new Array(arguments.length), j = (Ja.get(this, "events") || {})[h.type] || [], k = pa.event.special[h.type] || {};
            for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
            if (h.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, h)) {
                for (g = pa.event.handlers.call(this, h, j), b = 0; (e = g[b++]) && !h.isPropagationStopped(); ) for (h.currentTarget = e.elem, 
                c = 0; (f = e.handlers[c++]) && !h.isImmediatePropagationStopped(); ) h.rnamespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, 
                h.data = f.data, void 0 !== (d = ((pa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i)) && !1 === (h.result = d) && (h.preventDefault(), 
                h.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, h), h.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (;j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? pa(e, this).index(j) > -1 : pa.find(e, this, null, [ j ]).length), 
                g[e] && f.push(d);
                f.length && h.push({
                    elem: j,
                    handlers: f
                });
            }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h;
        },
        addProp: function(a, b) {
            Object.defineProperty(pa.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: pa.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a];
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    });
                }
            });
        },
        fix: function(a) {
            return a[pa.expando] ? a : new pa.Event(a);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && e(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(a) {
                    return e(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, pa.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, pa.Event = function(a, b) {
        return this instanceof pa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? v : w, 
        this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, 
        this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, 
        b && pa.extend(this, b), this.timeStamp = a && a.timeStamp || pa.now(), void (this[pa.expando] = !0)) : new pa.Event(a, b);
    }, pa.Event.prototype = {
        constructor: pa.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = v, a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = v, a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = v, a && !this.isSimulated && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, pa.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && Za.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && $a.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        }
    }, pa.event.addProp), pa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        pa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || pa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), pa.fn.extend({
        on: function(a, b, c, d) {
            return y(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return y(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, pa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = w), 
            this.each(function() {
                pa.event.remove(this, a, c, b);
            });
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, bb = /<script|<style|<link/i, cb = /checked\s*(?:[^=]|=\s*.checked.)/i, db = /^true\/(.*)/, eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pa.extend({
        htmlPrefilter: function(a) {
            return a.replace(ab, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = pa.contains(a.ownerDocument, a);
            if (!(na.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || pa.isXMLDoc(a))) for (g = s(h), 
            f = s(a), d = 0, e = f.length; d < e; d++) D(f[d], g[d]);
            if (b) if (c) for (f = f || s(a), g = g || s(h), d = 0, e = f.length; d < e; d++) C(f[d], g[d]); else C(a, h);
            return g = s(h, "script"), g.length > 0 && t(g, !i && s(a, "script")), h;
        },
        cleanData: function(a) {
            for (var b, c, d, e = pa.event.special, f = 0; void 0 !== (c = a[f]); f++) if (Ia(c)) {
                if (b = c[Ja.expando]) {
                    if (b.events) for (d in b.events) e[d] ? pa.event.remove(c, d) : pa.removeEvent(c, d, b.handle);
                    c[Ja.expando] = void 0;
                }
                c[Ka.expando] && (c[Ka.expando] = void 0);
            }
        }
    }), pa.fn.extend({
        detach: function(a) {
            return F(this, a, !0);
        },
        remove: function(a) {
            return F(this, a);
        },
        text: function(a) {
            return Ha(this, function(a) {
                return void 0 === a ? pa.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return E(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    z(this, a).appendChild(a);
                }
            });
        },
        prepend: function() {
            return E(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = z(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return E(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return E(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (pa.cleanData(s(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return pa.clone(this, a, b);
            });
        },
        html: function(a) {
            return Ha(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !bb.test(a) && !Wa[(Ua.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = pa.htmlPrefilter(a);
                    try {
                        for (;c < d; c++) b = this[c] || {}, 1 === b.nodeType && (pa.cleanData(s(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (a) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return E(this, arguments, function(b) {
                var c = this.parentNode;
                pa.inArray(this, a) < 0 && (pa.cleanData(s(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), pa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        pa.fn[a] = function(a) {
            for (var c, d = [], e = pa(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), 
            pa(e[g])[b](c), ga.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var fb = /^margin/, gb = new RegExp("^(" + Na + ")(?!px)[a-z%]+$", "i"), hb = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    };
    !function() {
        function b() {
            if (h) {
                h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                h.innerHTML = "", Ya.appendChild(g);
                var b = a.getComputedStyle(h);
                c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", 
                e = "4px" === b.marginRight, Ya.removeChild(g), h = null;
            }
        }
        var c, d, e, f, g = ca.createElement("div"), h = ca.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", 
        na.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        g.appendChild(h), pa.extend(na, {
            pixelPosition: function() {
                return b(), c;
            },
            boxSizingReliable: function() {
                return b(), d;
            },
            pixelMarginRight: function() {
                return b(), e;
            },
            reliableMarginLeft: function() {
                return b(), f;
            }
        }));
    }();
    var ib = /^(none|table(?!-c[ea]).+)/, jb = /^--/, kb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, lb = {
        letterSpacing: "0",
        fontWeight: "400"
    }, mb = [ "Webkit", "Moz", "ms" ], nb = ca.createElement("div").style;
    pa.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = G(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = pa.camelCase(b), i = jb.test(b), j = a.style;
                return i || (b = J(h)), g = pa.cssHooks[b] || pa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, 
                "string" === f && (e = Oa.exec(c)) && e[1] && (c = p(a, b, e), f = "number"), void (null != c && c === c && ("number" === f && (c += e && e[3] || (pa.cssNumber[h] ? "" : "px")), 
                na.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c))));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = pa.camelCase(b);
            return jb.test(b) || (b = J(h)), g = pa.cssHooks[b] || pa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), 
            void 0 === e && (e = G(a, b, d)), "normal" === e && b in lb && (e = lb[b]), "" === c || c ? (f = parseFloat(e), 
            !0 === c || isFinite(f) ? f || 0 : e) : e;
        }
    }), pa.each([ "height", "width" ], function(a, b) {
        pa.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !ib.test(pa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? M(a, b, d) : Ra(a, kb, function() {
                    return M(a, b, d);
                });
            },
            set: function(a, c, d) {
                var e, f = d && hb(a), g = d && L(a, b, d, "border-box" === pa.css(a, "boxSizing", !1, f), f);
                return g && (e = Oa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = pa.css(a, b)), 
                K(a, c, g);
            }
        };
    }), pa.cssHooks.marginLeft = H(na.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(G(a, "marginLeft")) || a.getBoundingClientRect().left - Ra(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px";
    }), pa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        pa.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; d < 4; d++) e[a + Pa[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, fb.test(a) || (pa.cssHooks[a + b].set = K);
    }), pa.fn.extend({
        css: function(a, b) {
            return Ha(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (Array.isArray(b)) {
                    for (d = hb(a), e = b.length; g < e; g++) f[b[g]] = pa.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? pa.style(a, b, c) : pa.css(a, b);
            }, a, b, arguments.length > 1);
        }
    }), pa.Tween = N, N.prototype = {
        constructor: N,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || pa.easing._default, this.options = b, 
            this.start = this.now = this.cur(), this.end = d, this.unit = f || (pa.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = N.propHooks[this.prop];
            return a && a.get ? a.get(this) : N.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = N.propHooks[this.prop];
            return this.options.duration ? this.pos = b = pa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : N.propHooks._default.set(this), this;
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = pa.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0);
            },
            set: function(a) {
                pa.fx.step[a.prop] ? pa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[pa.cssProps[a.prop]] && !pa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : pa.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, pa.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, pa.fx = N.prototype.init, pa.fx.step = {};
    var ob, pb, qb = /^(?:toggle|show|hide)$/, rb = /queueHooks$/;
    pa.Animation = pa.extend(U, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                return p(c.elem, a, Oa.exec(b), c), c;
            } ]
        },
        tweener: function(a, b) {
            pa.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.match(Ea);
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], U.tweeners[c] = U.tweeners[c] || [], 
            U.tweeners[c].unshift(b);
        },
        prefilters: [ S ],
        prefilter: function(a, b) {
            b ? U.prefilters.unshift(a) : U.prefilters.push(a);
        }
    }), pa.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? pa.extend({}, a) : {
            complete: c || !c && b || pa.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !pa.isFunction(b) && b
        };
        return pa.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in pa.fx.speeds ? d.duration = pa.fx.speeds[d.duration] : d.duration = pa.fx.speeds._default), 
        null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            pa.isFunction(d.old) && d.old.call(this), d.queue && pa.dequeue(this, d.queue);
        }, d;
    }, pa.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Qa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = pa.isEmptyObject(a), f = pa.speed(b, c, d), g = function() {
                var b = U(this, pa.extend({}, a), f);
                (e || Ja.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = pa.timers, g = Ja.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                !b && c || pa.dequeue(this, a);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = Ja.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = pa.timers, g = d ? d.length : 0;
                for (c.finish = !0, pa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), pa.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = pa.fn[b];
        pa.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Q(b, !0), a, d, e);
        };
    }), pa.each({
        slideDown: Q("show"),
        slideUp: Q("hide"),
        slideToggle: Q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        pa.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), pa.timers = [], pa.fx.tick = function() {
        var a, b = 0, c = pa.timers;
        for (ob = pa.now(); b < c.length; b++) (a = c[b])() || c[b] !== a || c.splice(b--, 1);
        c.length || pa.fx.stop(), ob = void 0;
    }, pa.fx.timer = function(a) {
        pa.timers.push(a), pa.fx.start();
    }, pa.fx.interval = 13, pa.fx.start = function() {
        pb || (pb = !0, O());
    }, pa.fx.stop = function() {
        pb = null;
    }, pa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, pa.fn.delay = function(b, c) {
        return b = pa.fx ? pa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    }, function() {
        var a = ca.createElement("input"), b = ca.createElement("select"), c = b.appendChild(ca.createElement("option"));
        a.type = "checkbox", na.checkOn = "" !== a.value, na.optSelected = c.selected, a = ca.createElement("input"), 
        a.value = "t", a.type = "radio", na.radioValue = "t" === a.value;
    }();
    var sb, tb = pa.expr.attrHandle;
    pa.fn.extend({
        attr: function(a, b) {
            return Ha(this, pa.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                pa.removeAttr(this, a);
            });
        }
    }), pa.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? pa.prop(a, b, c) : (1 === f && pa.isXMLDoc(a) || (e = pa.attrHooks[b.toLowerCase()] || (pa.expr.match.bool.test(b) ? sb : void 0)), 
            void 0 !== c ? null === c ? void pa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), 
            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = pa.find.attr(a, b), 
            null == d ? void 0 : d));
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!na.radioValue && "radio" === b && e(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0, e = b && b.match(Ea);
            if (e && 1 === a.nodeType) for (;c = e[d++]; ) a.removeAttribute(c);
        }
    }), sb = {
        set: function(a, b, c) {
            return !1 === b ? pa.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, pa.each(pa.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = tb[b] || pa.find.attr;
        tb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = tb[g], tb[g] = e, e = null != c(a, b, d) ? g : null, tb[g] = f), 
            e;
        };
    });
    var ub = /^(?:input|select|textarea|button)$/i, vb = /^(?:a|area)$/i;
    pa.fn.extend({
        prop: function(a, b) {
            return Ha(this, pa.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[pa.propFix[a] || a];
            });
        }
    }), pa.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && pa.isXMLDoc(a) || (b = pa.propFix[b] || b, 
            e = pa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = pa.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : ub.test(a.nodeName) || vb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), na.optSelected || (pa.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), pa.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        pa.propFix[this.toLowerCase()] = this;
    }), pa.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (pa.isFunction(a)) return this.each(function(b) {
                pa(this).addClass(a.call(this, b, W(this)));
            });
            if ("string" == typeof a && a) for (b = a.match(Ea) || []; c = this[i++]; ) if (e = W(c), 
            d = 1 === c.nodeType && " " + V(e) + " ") {
                for (g = 0; f = b[g++]; ) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                h = V(d), e !== h && c.setAttribute("class", h);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (pa.isFunction(a)) return this.each(function(b) {
                pa(this).removeClass(a.call(this, b, W(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) for (b = a.match(Ea) || []; c = this[i++]; ) if (e = W(c), 
            d = 1 === c.nodeType && " " + V(e) + " ") {
                for (g = 0; f = b[g++]; ) for (;d.indexOf(" " + f + " ") > -1; ) d = d.replace(" " + f + " ", " ");
                h = V(d), e !== h && c.setAttribute("class", h);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : pa.isFunction(a) ? this.each(function(c) {
                pa(this).toggleClass(a.call(this, c, W(this), b), b);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) for (d = 0, e = pa(this), f = a.match(Ea) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else void 0 !== a && "boolean" !== c || (b = W(this), 
                b && Ja.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Ja.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++]; ) if (1 === c.nodeType && (" " + V(W(c)) + " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var wb = /\r/g;
    pa.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = pa.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, pa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = pa.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), (b = pa.valHooks[this.type] || pa.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = pa.valHooks[e.type] || pa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(wb, "") : null == c ? "" : c)) : void 0;
        }
    }), pa.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = pa.find.attr(a, "value");
                    return null != b ? b : V(pa.text(a));
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, f = a.options, g = a.selectedIndex, h = "select-one" === a.type, i = h ? null : [], j = h ? g + 1 : f.length;
                    for (d = g < 0 ? j : h ? g : 0; d < j; d++) if (c = f[d], (c.selected || d === g) && !c.disabled && (!c.parentNode.disabled || !e(c.parentNode, "optgroup"))) {
                        if (b = pa(c).val(), h) return b;
                        i.push(b);
                    }
                    return i;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = pa.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = pa.inArray(pa.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), pa.each([ "radio", "checkbox" ], function() {
        pa.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = pa.inArray(pa(a).val(), b) > -1;
            }
        }, na.checkOn || (pa.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var xb = /^(?:focusinfocus|focusoutblur)$/;
    pa.extend(pa.event, {
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || ca ], n = ka.call(b, "type") ? b.type : b, o = ka.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || ca, 3 !== d.nodeType && 8 !== d.nodeType && !xb.test(n + pa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), 
            n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[pa.expando] ? b : new pa.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : pa.makeArray(c, [ b ]), 
            l = pa.event.special[n] || {}, e || !l.trigger || !1 !== l.trigger.apply(d, c))) {
                if (!e && !l.noBubble && !pa.isWindow(d)) {
                    for (i = l.delegateType || n, xb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), 
                    h = g;
                    h === (d.ownerDocument || ca) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n, 
                k = (Ja.get(g, "events") || {})[b.type] && Ja.get(g, "handle"), k && k.apply(g, c), 
                (k = j && g[j]) && k.apply && Ia(g) && (b.result = k.apply(g, c), !1 === b.result && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(m.pop(), c) || !Ia(d) || j && pa.isFunction(d[n]) && !pa.isWindow(d) && (h = d[j], 
                h && (d[j] = null), pa.event.triggered = n, d[n](), pa.event.triggered = void 0, 
                h && (d[j] = h)), b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = pa.extend(new pa.Event(), c, {
                type: a,
                isSimulated: !0
            });
            pa.event.trigger(d, null, b);
        }
    }), pa.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                pa.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return pa.event.trigger(a, b, c, !0);
        }
    }), pa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        pa.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), pa.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), na.focusin = "onfocusin" in a, na.focusin || pa.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            pa.event.simulate(b, a.target, pa.event.fix(a));
        };
        pa.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = Ja.access(d, b);
                e || d.addEventListener(a, c, !0), Ja.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = Ja.access(d, b) - 1;
                e ? Ja.access(d, b, e) : (d.removeEventListener(a, c, !0), Ja.remove(d, b));
            }
        };
    });
    var yb = a.location, zb = pa.now(), Ab = /\?/;
    pa.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (a) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || pa.error("Invalid XML: " + b), 
        c;
    };
    var Bb = /\[\]$/, Cb = /\r?\n/g, Db = /^(?:submit|button|image|reset|file)$/i, Eb = /^(?:input|select|textarea|keygen)/i;
    pa.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            var c = pa.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };
        if (Array.isArray(a) || a.jquery && !pa.isPlainObject(a)) pa.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) X(c, a[c], b, e);
        return d.join("&");
    }, pa.fn.extend({
        serialize: function() {
            return pa.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = pa.prop(this, "elements");
                return a ? pa.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !pa(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !Ta.test(a));
            }).map(function(a, b) {
                var c = pa(this).val();
                return null == c ? null : Array.isArray(c) ? pa.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Cb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Cb, "\r\n")
                };
            }).get();
        }
    });
    var Fb = /%20/g, Gb = /#.*$/, Hb = /([?&])_=[^&]*/, Ib = /^(.*?):[ \t]*([^\r\n]*)$/gm, Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Kb = /^(?:GET|HEAD)$/, Lb = /^\/\//, Mb = {}, Nb = {}, Ob = "*/".concat("*"), Pb = ca.createElement("a");
    Pb.href = yb.href, pa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yb.href,
            type: "GET",
            isLocal: Jb.test(yb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ob,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": pa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? $($(a, pa.ajaxSettings), b) : $(pa.ajaxSettings, a);
        },
        ajaxPrefilter: Y(Mb),
        ajaxTransport: Y(Nb),
        ajax: function(b, c) {
            function d(b, c, d, h) {
                var j, m, n, u, v, w = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, 
                j = b >= 200 && b < 300 || 304 === b, d && (u = _(o, x, d)), u = aa(o, u, x, j), 
                j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (pa.lastModified[f] = v), 
                (v = x.getResponseHeader("etag")) && (pa.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, 
                m = u.data, n = u.error, j = !n)) : (n = w, !b && w || (w = "error", b < 0 && (b = 0))), 
                x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [ m, w, x ]) : r.rejectWith(p, [ x, w, n ]), 
                x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [ x, o, j ? m : n ]), 
                s.fireWith(p, [ x, w ]), l && (q.trigger("ajaxComplete", [ x, o ]), --pa.active || pa.event.trigger("ajaxStop")));
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = pa.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? pa(p) : pa.event, r = pa.Deferred(), s = pa.Callbacks("once memory"), t = o.statusCode || {}, u = {}, v = {}, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (k) {
                        if (!h) for (h = {}; b = Ib.exec(g); ) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return k ? g : null;
                },
                setRequestHeader: function(a, b) {
                    return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), 
                    this;
                },
                overrideMimeType: function(a) {
                    return null == k && (o.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (k) x.always(a[x.status]); else for (b in a) t[b] = [ t[b], a[b] ];
                    return this;
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b), d(0, b), this;
                }
            };
            if (r.promise(x), o.url = ((b || o.url || yb.href) + "").replace(Lb, yb.protocol + "//"), 
            o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ea) || [ "" ], 
            null == o.crossDomain) {
                j = ca.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Pb.protocol + "//" + Pb.host != j.protocol + "//" + j.host;
                } catch (a) {
                    o.crossDomain = !0;
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = pa.param(o.data, o.traditional)), 
            Z(Mb, o, c, x), k) return x;
            l = pa.event && o.global, l && 0 == pa.active++ && pa.event.trigger("ajaxStart"), 
            o.type = o.type.toUpperCase(), o.hasContent = !Kb.test(o.type), f = o.url.replace(Gb, ""), 
            o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Fb, "+")) : (n = o.url.slice(f.length), 
            o.data && (f += (Ab.test(f) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (f = f.replace(Hb, "$1"), 
            n = (Ab.test(f) ? "&" : "?") + "_=" + zb++ + n), o.url = f + n), o.ifModified && (pa.lastModified[f] && x.setRequestHeader("If-Modified-Since", pa.lastModified[f]), 
            pa.etag[f] && x.setRequestHeader("If-None-Match", pa.etag[f])), (o.data && o.hasContent && !1 !== o.contentType || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), 
            x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Ob + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (!1 === o.beforeSend.call(p, x, o) || k)) return x.abort();
            if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = Z(Nb, o, c, x)) {
                if (x.readyState = 1, l && q.trigger("ajaxSend", [ x, o ]), k) return x;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout");
                }, o.timeout));
                try {
                    k = !1, e.send(u, d);
                } catch (a) {
                    if (k) throw a;
                    d(-1, a);
                }
            } else d(-1, "No Transport");
            return x;
        },
        getJSON: function(a, b, c) {
            return pa.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return pa.get(a, void 0, b, "script");
        }
    }), pa.each([ "get", "post" ], function(a, b) {
        pa[b] = function(a, c, d, e) {
            return pa.isFunction(c) && (e = e || d, d = c, c = void 0), pa.ajax(pa.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, pa.isPlainObject(a) && a));
        };
    }), pa._evalUrl = function(a) {
        return pa.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, pa.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (pa.isFunction(a) && (a = a.call(this[0])), b = pa(a, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this;
        },
        wrapInner: function(a) {
            return pa.isFunction(a) ? this.each(function(b) {
                pa(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = pa(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = pa.isFunction(a);
            return this.each(function(c) {
                pa(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                pa(this).replaceWith(this.childNodes);
            }), this;
        }
    }), pa.expr.pseudos.hidden = function(a) {
        return !pa.expr.pseudos.visible(a);
    }, pa.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, pa.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest();
        } catch (a) {}
    };
    var Qb = {
        0: 200,
        1223: 204
    }, Rb = pa.ajaxSettings.xhr();
    na.cors = !!Rb && "withCredentials" in Rb, na.ajax = Rb = !!Rb, pa.ajaxTransport(function(b) {
        var c, d;
        if (na.cors || Rb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Qb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (a) {
                    if (c) throw a;
                }
            },
            abort: function() {
                c && c();
            }
        };
    }), pa.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1);
    }), pa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return pa.globalEval(a), a;
            }
        }
    }), pa.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), pa.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = pa("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), ca.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Sb = [], Tb = /(=)\?(?=&|$)|\?\?/;
    pa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Sb.pop() || pa.expando + "_" + zb++;
            return this[a] = !0, a;
        }
    }), pa.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = !1 !== b.jsonp && (Tb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Tb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = pa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Tb, "$1" + e) : !1 !== b.jsonp && (b.url += (Ab.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || pa.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? pa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, 
            Sb.push(e)), g && pa.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script";
    }), na.createHTMLDocument = function() {
        var a = ca.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), pa.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var d, e, f;
        return b || (na.createHTMLDocument ? (b = ca.implementation.createHTMLDocument(""), 
        d = b.createElement("base"), d.href = ca.location.href, b.head.appendChild(d)) : b = ca), 
        e = ya.exec(a), f = !c && [], e ? [ b.createElement(e[1]) ] : (e = u([ a ], b, f), 
        f && f.length && pa(f).remove(), pa.merge([], e.childNodes));
    }, pa.fn.load = function(a, b, c) {
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = V(a.slice(h)), a = a.slice(0, h)), pa.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && pa.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? pa("<div>").append(pa.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [ a.responseText, b, a ]);
            });
        }), this;
    }, pa.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        pa.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), pa.expr.pseudos.animated = function(a) {
        return pa.grep(pa.timers, function(b) {
            return a === b.elem;
        }).length;
    }, pa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = pa.css(a, "position"), l = pa(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = pa.css(a, "top"), 
            i = pa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            pa.isFunction(b) && (b = b.call(a, c, pa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, pa.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                pa.offset.setOffset(this, a, b);
            });
            var b, c, d, e, f = this[0];
            return f ? f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, 
            c = b.documentElement, e = b.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === pa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), e(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + pa.css(a[0], "borderTopWidth", !0),
                    left: d.left + pa.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - pa.css(c, "marginTop", !0),
                    left: b.left - d.left - pa.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === pa.css(a, "position"); ) a = a.offsetParent;
                return a || Ya;
            });
        }
    }), pa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        pa.fn[a] = function(d) {
            return Ha(this, function(a, d, e) {
                var f;
                return pa.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), pa.each([ "top", "left" ], function(a, b) {
        pa.cssHooks[b] = H(na.pixelPosition, function(a, c) {
            if (c) return c = G(a, b), gb.test(c) ? pa(a).position()[b] + "px" : c;
        });
    }), pa.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        pa.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            pa.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e), h = c || (!0 === e || !0 === f ? "margin" : "border");
                return Ha(this, function(b, c, e) {
                    var f;
                    return pa.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, 
                    Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? pa.css(b, c, h) : pa.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), pa.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    }), pa.holdReady = function(a) {
        a ? pa.readyWait++ : pa.ready(!0);
    }, pa.isArray = Array.isArray, pa.parseJSON = JSON.parse, pa.nodeName = e, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pa;
    });
    var Ub = a.jQuery, Vb = a.$;
    return pa.noConflict = function(b) {
        return a.$ === pa && (a.$ = Vb), b && a.jQuery === pa && (a.jQuery = Ub), pa;
    }, b || (a.jQuery = a.$ = pa), pa;
}), function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a(jQuery);
}(function(a) {
    function b(a) {
        for (var b = a.css("visibility"); "inherit" === b; ) a = a.parent(), b = a.css("visibility");
        return "hidden" !== b;
    }
    function c(a) {
        for (var b, c; a.length && a[0] !== document; ) {
            if (("absolute" === (b = a.css("position")) || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), 
            !isNaN(c) && 0 !== c)) return c;
            a = a.parent();
        }
        return 0;
    }
    function d() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, 
        this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", 
        this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", 
        this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
        this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
        this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), 
        this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = e(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function e(b) {
        var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return b.on("mouseout", c, function() {
            a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover");
        }).on("mouseover", c, f);
    }
    function f() {
        a.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
        a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), 
        -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"));
    }
    function g(b, c) {
        a.extend(b, c);
        for (var d in c) null == c[d] && (b[d] = c[d]);
        return b;
    }
    function h(a) {
        return function() {
            var b = this.element.val();
            a.apply(this, arguments), this._refresh(), b !== this.element.val() && this._trigger("change");
        };
    }
    a.ui = a.ui || {}, a.ui.version = "1.12.1";
    var i = 0, j = Array.prototype.slice;
    a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try {
                (d = a._data(e, "events")) && d.remove && a(e).triggerHandler("remove");
            } catch (a) {}
            b(c);
        };
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h = {}, i = b.split(".")[0];
        b = b.split(".")[1];
        var j = i + "-" + b;
        return d || (d = c, c = a.Widget), a.isArray(d) && (d = a.extend.apply(null, [ {} ].concat(d))), 
        a.expr[":"][j.toLowerCase()] = function(b) {
            return !!a.data(b, j);
        }, a[i] = a[i] || {}, e = a[i][b], f = a[i][b] = function(a, b) {
            return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new f(a, b);
        }, a.extend(f, e, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), g = new c(), g.options = a.widget.extend({}, g.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void (h[b] = function() {
                function a() {
                    return c.prototype[b].apply(this, arguments);
                }
                function e(a) {
                    return c.prototype[b].apply(this, a);
                }
                return function() {
                    var b, c = this._super, f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, 
                    this._superApply = f, b;
                };
            }()) : void (h[b] = d);
        }), f.prototype = a.widget.extend(g, {
            widgetEventPrefix: e ? g.widgetEventPrefix || b : b
        }, h, {
            constructor: f,
            namespace: i,
            widgetName: b,
            widgetFullName: j
        }), e ? (a.each(e._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, f, c._proto);
        }), delete e._childConstructors) : c._childConstructors.push(f), a.widget.bridge(b, f), 
        f;
    }, a.widget.extend = function(b) {
        for (var c, d, e = j.call(arguments, 1), f = 0, g = e.length; g > f; f++) for (c in e[f]) d = e[f][c], 
        e[f].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d);
        return b;
    }, a.widget.bridge = function(b, c) {
        var d = c.prototype.widgetFullName || b;
        a.fn[b] = function(e) {
            var f = "string" == typeof e, g = j.call(arguments, 1), h = this;
            return f ? this.length || "instance" !== e ? this.each(function() {
                var c, f = a.data(this, d);
                return "instance" === e ? (h = f, !1) : f ? a.isFunction(f[e]) && "_" !== e.charAt(0) ? (c = f[e].apply(f, g), 
                c !== f && void 0 !== c ? (h = c && c.jquery ? h.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + e + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + e + "'");
            }) : h = void 0 : (g.length && (e = a.widget.extend.apply(null, [ e ].concat(g))), 
            this.each(function() {
                var b = a.data(this, d);
                b ? (b.option(e || {}), b._init && b._init()) : a.data(this, d, new c(e, this));
            })), h;
        };
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(b, c) {
            c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = i++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), 
            this.focusable = a(), this.classesElementLookup = {}, c !== this && (a.data(c, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(a) {
                    a.target === c && this.destroy();
                }
            }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), 
            this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            var b = this;
            this._destroy(), a.each(this.classesElementLookup, function(a, c) {
                b._removeClass(c, a);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
            this.bindings.off(this.eventNamespace);
        },
        _destroy: a.noop,
        widget: function() {
            return this.element;
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof b) if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {}, 
                e = e[d[f]];
                if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                e[b] = c;
            } else {
                if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                g[b] = c;
            }
            return this._setOptions(g), this;
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this;
        },
        _setOption: function(a, b) {
            return "classes" === a && this._setOptionClasses(b), this.options[a] = b, "disabled" === a && this._setOptionDisabled(b), 
            this;
        },
        _setOptionClasses: function(b) {
            var c, d, e;
            for (c in b) e = this.classesElementLookup[c], b[c] !== this.options.classes[c] && e && e.length && (d = a(e.get()), 
            this._removeClass(e, c), d.addClass(this._classes({
                element: d,
                keys: c,
                classes: b,
                add: !0
            })));
        },
        _setOptionDisabled: function(a) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!a), 
            a && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _classes: function(b) {
            function c(c, f) {
                var g, h;
                for (h = 0; c.length > h; h++) g = e.classesElementLookup[c[h]] || a(), g = a(b.add ? a.unique(g.get().concat(b.element.get())) : g.not(b.element).get()), 
                e.classesElementLookup[c[h]] = g, d.push(c[h]), f && b.classes[c[h]] && d.push(b.classes[c[h]]);
            }
            var d = [], e = this;
            return b = a.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, b), this._on(b.element, {
                remove: "_untrackClassesElement"
            }), b.keys && c(b.keys.match(/\S+/g) || [], !0), b.extra && c(b.extra.match(/\S+/g) || []), 
            d.join(" ");
        },
        _untrackClassesElement: function(b) {
            var c = this;
            a.each(c.classesElementLookup, function(d, e) {
                -1 !== a.inArray(b.target, e) && (c.classesElementLookup[d] = a(e.not(b.target).get()));
            });
        },
        _removeClass: function(a, b, c) {
            return this._toggleClass(a, b, c, !1);
        },
        _addClass: function(a, b, c) {
            return this._toggleClass(a, b, c, !0);
        },
        _toggleClass: function(a, b, c, d) {
            d = "boolean" == typeof d ? d : c;
            var e = "string" == typeof a || null === a, f = {
                extra: e ? b : c,
                keys: e ? a : b,
                element: e ? this.element : a,
                add: d
            };
            return f.element.toggleClass(this._classes(f), d), this;
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, 
            c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    return b || !0 !== f.options.disabled && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0;
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/), j = i[1] + f.eventNamespace, k = i[2];
                k ? e.on(j, k, h) : c.on(j, h);
            });
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            b.off(c).off(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), 
            this.hoverable = a(this.hoverable.not(b).get());
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments);
            }
            var d = this;
            return setTimeout(c, b || 0);
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    this._addClass(a(b.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(b) {
                    this._removeClass(a(b.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    this._addClass(a(b.currentTarget), null, "ui-state-focus");
                },
                focusout: function(b) {
                    this._removeClass(a(b.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), 
            c.target = this.element[0], f = c.originalEvent) for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && !1 === g.apply(this.element[0], [ c ].concat(d)) || c.isDefaultPrevented());
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? !0 === e || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c();
            });
        };
    }), a.widget, function() {
        function b(a, b, c) {
            return [ parseFloat(a[0]) * (l.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (l.test(a[1]) ? c / 100 : 1) ];
        }
        function c(b, c) {
            return parseInt(a.css(b, c), 10) || 0;
        }
        function d(b) {
            var c = b[0];
            return 9 === c.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : a.isWindow(c) ? {
                width: b.width(),
                height: b.height(),
                offset: {
                    top: b.scrollTop(),
                    left: b.scrollLeft()
                }
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: c.pageY,
                    left: c.pageX
                }
            } : {
                width: b.outerWidth(),
                height: b.outerHeight(),
                offset: b.offset()
            };
        }
        var e, f = Math.max, g = Math.abs, h = /left|center|right/, i = /top|center|bottom/, j = /[\+\-]\d+(\.[\d]+)?%?/, k = /^\w+/, l = /%$/, m = a.fn.position;
        a.position = {
            scrollbarWidth: function() {
                if (void 0 !== e) return e;
                var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), f = d.children()[0];
                return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, 
                b === c && (c = d[0].clientWidth), d.remove(), e = b - c;
            },
            getScrollInfo: function(b) {
                var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"), d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth;
                return {
                    width: "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0,
                    height: e ? a.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(b) {
                var c = a(b || window), d = a.isWindow(c[0]), e = !!c[0] && 9 === c[0].nodeType;
                return {
                    element: c,
                    isWindow: d,
                    isDocument: e,
                    offset: d || e ? {
                        left: 0,
                        top: 0
                    } : a(b).offset(),
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: c.outerWidth(),
                    height: c.outerHeight()
                };
            }
        }, a.fn.position = function(e) {
            if (!e || !e.of) return m.apply(this, arguments);
            e = a.extend({}, e);
            var l, n, o, p, q, r, s = a(e.of), t = a.position.getWithinInfo(e.within), u = a.position.getScrollInfo(t), v = (e.collision || "flip").split(" "), w = {};
            return r = d(s), s[0].preventDefault && (e.at = "left top"), n = r.width, o = r.height, 
            p = r.offset, q = a.extend({}, p), a.each([ "my", "at" ], function() {
                var a, b, c = (e[this] || "").split(" ");
                1 === c.length && (c = h.test(c[0]) ? c.concat([ "center" ]) : i.test(c[0]) ? [ "center" ].concat(c) : [ "center", "center" ]), 
                c[0] = h.test(c[0]) ? c[0] : "center", c[1] = i.test(c[1]) ? c[1] : "center", a = j.exec(c[0]), 
                b = j.exec(c[1]), w[this] = [ a ? a[0] : 0, b ? b[0] : 0 ], e[this] = [ k.exec(c[0])[0], k.exec(c[1])[0] ];
            }), 1 === v.length && (v[1] = v[0]), "right" === e.at[0] ? q.left += n : "center" === e.at[0] && (q.left += n / 2), 
            "bottom" === e.at[1] ? q.top += o : "center" === e.at[1] && (q.top += o / 2), l = b(w.at, n, o), 
            q.left += l[0], q.top += l[1], this.each(function() {
                var d, h, i = a(this), j = i.outerWidth(), k = i.outerHeight(), m = c(this, "marginLeft"), r = c(this, "marginTop"), x = j + m + c(this, "marginRight") + u.width, y = k + r + c(this, "marginBottom") + u.height, z = a.extend({}, q), A = b(w.my, i.outerWidth(), i.outerHeight());
                "right" === e.my[0] ? z.left -= j : "center" === e.my[0] && (z.left -= j / 2), "bottom" === e.my[1] ? z.top -= k : "center" === e.my[1] && (z.top -= k / 2), 
                z.left += A[0], z.top += A[1], d = {
                    marginLeft: m,
                    marginTop: r
                }, a.each([ "left", "top" ], function(b, c) {
                    a.ui.position[v[b]] && a.ui.position[v[b]][c](z, {
                        targetWidth: n,
                        targetHeight: o,
                        elemWidth: j,
                        elemHeight: k,
                        collisionPosition: d,
                        collisionWidth: x,
                        collisionHeight: y,
                        offset: [ l[0] + A[0], l[1] + A[1] ],
                        my: e.my,
                        at: e.at,
                        within: t,
                        elem: i
                    });
                }), e.using && (h = function(a) {
                    var b = p.left - z.left, c = b + n - j, d = p.top - z.top, h = d + o - k, l = {
                        target: {
                            element: s,
                            left: p.left,
                            top: p.top,
                            width: n,
                            height: o
                        },
                        element: {
                            element: i,
                            left: z.left,
                            top: z.top,
                            width: j,
                            height: k
                        },
                        horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
                        vertical: 0 > h ? "top" : d > 0 ? "bottom" : "middle"
                    };
                    j > n && n > g(b + c) && (l.horizontal = "center"), k > o && o > g(d + h) && (l.vertical = "middle"), 
                    l.important = f(g(b), g(c)) > f(g(d), g(h)) ? "horizontal" : "vertical", e.using.call(this, a, l);
                }), i.offset(a.extend(z, {
                    using: h
                }));
            });
        }, a.ui.position = {
            fit: {
                left: function(a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, g = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - g - e;
                    b.collisionWidth > g ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - g - e, 
                    a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + g - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = f(a.left - h, a.left);
                },
                top: function(a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, g = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - g - e;
                    b.collisionHeight > g ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - g - e, 
                    a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + g - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = f(a.top - h, a.top);
                }
            },
            flip: {
                left: function(a, b) {
                    var c, d, e = b.within, f = e.offset.left + e.scrollLeft, h = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - h - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                    0 > k ? (0 > (c = a.left + m + n + o + b.collisionWidth - h - f) || g(k) > c) && (a.left += m + n + o) : l > 0 && ((d = a.left - b.collisionPosition.marginLeft + m + n + o - i) > 0 || l > g(d)) && (a.left += m + n + o);
                },
                top: function(a, b) {
                    var c, d, e = b.within, f = e.offset.top + e.scrollTop, h = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - h - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                    0 > k ? (0 > (d = a.top + n + o + p + b.collisionHeight - h - f) || g(k) > d) && (a.top += n + o + p) : l > 0 && ((c = a.top - b.collisionPosition.marginTop + n + o + p - i) > 0 || l > g(c)) && (a.top += n + o + p);
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    }(), a.ui.position, a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b);
            };
        }) : function(b, c, d) {
            return !!a.data(b, d[3]);
        }
    }), a.fn.extend({
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(a + ".ui-disableSelection", function(a) {
                    a.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection");
        }
    });
    var k = "ui-effects-", l = "ui-effects-style", m = "ui-effects-animated", n = a;
    a.effects = {
        effect: {}
    }, function(a, b) {
        function c(a, b, c) {
            var d = k[b.type] || {};
            return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), 
            isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a);
        }
        function d(c) {
            var d = i(), e = d._rgba = [];
            return c = c.toLowerCase(), n(h, function(a, f) {
                var g, h = f.re.exec(c), i = h && f.parse(h), k = f.space || "rgba";
                return i ? (g = d[k](i), d[j[k].cache] = g[j[k].cache], e = d._rgba = g._rgba, !1) : b;
            }), e.length ? ("0,0,0,0" === e.join() && a.extend(e, f.transparent), d) : f[c];
        }
        function e(a, b, c) {
            return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
        }
        var f, g = /^([\-+])=\s*(\d+\.?\d*)/, h = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [ a[1], a[2], a[3], a[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(a) {
                return [ 2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(a) {
                return [ parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(a) {
                return [ parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(a) {
                return [ a[1], a[2] / 100, a[3] / 100, a[4] ];
            }
        } ], i = a.Color = function(b, c, d, e) {
            return new a.Color.fn.parse(b, c, d, e);
        }, j = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, k = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, l = i.support = {}, m = a("<p>")[0], n = a.each;
        m.style.cssText = "background-color:rgba(1,1,1,.5)", l.rgba = m.style.backgroundColor.indexOf("rgba") > -1, 
        n(j, function(a, b) {
            b.cache = "_" + a, b.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), i.fn = a.extend(i.prototype, {
            parse: function(e, g, h, k) {
                if (e === b) return this._rgba = [ null, null, null, null ], this;
                (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                var l = this, m = a.type(e), o = this._rgba = [];
                return g !== b && (e = [ e, g, h, k ], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (n(j.rgba.props, function(a, b) {
                    o[b.idx] = c(e[b.idx], b);
                }), this) : "object" === m ? (e instanceof i ? n(j, function(a, b) {
                    e[b.cache] && (l[b.cache] = e[b.cache].slice());
                }) : n(j, function(b, d) {
                    var f = d.cache;
                    n(d.props, function(a, b) {
                        if (!l[f] && d.to) {
                            if ("alpha" === a || null == e[a]) return;
                            l[f] = d.to(l._rgba);
                        }
                        l[f][b.idx] = c(e[a], b, !0);
                    }), l[f] && 0 > a.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])));
                }), this) : b;
            },
            is: function(a) {
                var c = i(a), d = !0, e = this;
                return n(j, function(a, f) {
                    var g, h = c[f.cache];
                    return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], n(f.props, function(a, c) {
                        return null != h[c.idx] ? d = h[c.idx] === g[c.idx] : b;
                    })), d;
                }), d;
            },
            _space: function() {
                var a = [], b = this;
                return n(j, function(c, d) {
                    b[d.cache] && a.push(c);
                }), a.pop();
            },
            transition: function(a, b) {
                var d = i(a), e = d._space(), f = j[e], g = 0 === this.alpha() ? i("transparent") : this, h = g[f.cache] || f.to(g._rgba), l = h.slice();
                return d = d[f.cache], n(f.props, function(a, e) {
                    var f = e.idx, g = h[f], i = d[f], j = k[e.type] || {};
                    null !== i && (null === g ? l[f] = i : (j.mod && (i - g > j.mod / 2 ? g += j.mod : g - i > j.mod / 2 && (g -= j.mod)), 
                    l[f] = c((i - g) * b + g, e)));
                }), this[e](l);
            },
            blend: function(b) {
                if (1 === this._rgba[3]) return this;
                var c = this._rgba.slice(), d = c.pop(), e = i(b)._rgba;
                return i(a.map(c, function(a, b) {
                    return (1 - d) * e[b] + d * a;
                }));
            },
            toRgbaString: function() {
                var b = "rgba(", c = a.map(this._rgba, function(a, b) {
                    return null == a ? b > 2 ? 1 : 0 : a;
                });
                return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")";
            },
            toHslaString: function() {
                var b = "hsla(", c = a.map(this.hsla(), function(a, b) {
                    return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), 
                    a;
                });
                return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")";
            },
            toHexString: function(b) {
                var c = this._rgba.slice(), d = c.pop();
                return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                    return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), i.fn.parse.prototype = i.fn, j.hsla.to = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [ null, null, null, a[3] ];
            var b, c, d = a[0] / 255, e = a[1] / 255, f = a[2] / 255, g = a[3], h = Math.max(d, e, f), i = Math.min(d, e, f), j = h - i, k = h + i, l = .5 * k;
            return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, 
            c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [ Math.round(b) % 360, c, l, null == g ? 1 : g ];
        }, j.hsla.from = function(a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [ null, null, null, a[3] ];
            var b = a[0] / 360, c = a[1], d = a[2], f = a[3], g = .5 >= d ? d * (1 + c) : d + c - d * c, h = 2 * d - g;
            return [ Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f ];
        }, n(j, function(d, e) {
            var f = e.props, h = e.cache, j = e.to, k = e.from;
            i.fn[d] = function(d) {
                if (j && !this[h] && (this[h] = j(this._rgba)), d === b) return this[h].slice();
                var e, g = a.type(d), l = "array" === g || "object" === g ? d : arguments, m = this[h].slice();
                return n(f, function(a, b) {
                    var d = l["object" === g ? a : b.idx];
                    null == d && (d = m[b.idx]), m[b.idx] = c(d, b);
                }), k ? (e = i(k(m)), e[h] = m, e) : i(m);
            }, n(f, function(b, c) {
                i.fn[b] || (i.fn[b] = function(e) {
                    var f, h = a.type(e), i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d, j = this[i](), k = j[c.idx];
                    return "undefined" === h ? k : ("function" === h && (e = e.call(this, k), h = a.type(e)), 
                    null == e && c.empty ? this : ("string" === h && (f = g.exec(e)) && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1)), 
                    j[c.idx] = e, this[i](j)));
                });
            });
        }), i.hook = function(b) {
            var c = b.split(" ");
            n(c, function(b, c) {
                a.cssHooks[c] = {
                    set: function(b, e) {
                        var f, g, h = "";
                        if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                            if (e = i(f || e), !l.rgba && 1 !== e._rgba[3]) {
                                for (g = "backgroundColor" === c ? b.parentNode : b; ("" === h || "transparent" === h) && g && g.style; ) try {
                                    h = a.css(g, "backgroundColor"), g = g.parentNode;
                                } catch (a) {}
                                e = e.blend(h && "transparent" !== h ? h : "_default");
                            }
                            e = e.toRgbaString();
                        }
                        try {
                            b.style[c] = e;
                        } catch (a) {}
                    }
                }, a.fx.step[c] = function(b) {
                    b.colorInit || (b.start = i(b.elem, c), b.end = i(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos));
                };
            });
        }, i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        a.cssHooks.borderColor = {
            expand: function(a) {
                var b = {};
                return n([ "Top", "Right", "Bottom", "Left" ], function(c, d) {
                    b["border" + d + "Color"] = a;
                }), b;
            }
        }, f = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(n), function() {
        function b(b) {
            var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle, f = {};
            if (e && e.length && e[0] && e[e[0]]) for (d = e.length; d--; ) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]); else for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
            return f;
        }
        function c(b, c) {
            var d, f, g = {};
            for (d in c) f = c[d], b[d] !== f && (e[d] || (a.fx.step[d] || !isNaN(parseFloat(f))) && (g[d] = f));
            return g;
        }
        var d = [ "add", "remove", "toggle" ], e = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        a.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(b, c) {
            a.fx.step[c] = function(a) {
                ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (n.style(a.elem, c, a.end), 
                a.setAttr = !0);
            };
        }), a.fn.addBack || (a.fn.addBack = function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }), a.effects.animateClass = function(e, f, g, h) {
            var i = a.speed(f, g, h);
            return this.queue(function() {
                var f, g = a(this), h = g.attr("class") || "", j = i.children ? g.find("*").addBack() : g;
                j = j.map(function() {
                    return {
                        el: a(this),
                        start: b(this)
                    };
                }), f = function() {
                    a.each(d, function(a, b) {
                        e[b] && g[b + "Class"](e[b]);
                    });
                }, f(), j = j.map(function() {
                    return this.end = b(this.el[0]), this.diff = c(this.start, this.end), this;
                }), g.attr("class", h), j = j.map(function() {
                    var b = this, c = a.Deferred(), d = a.extend({}, i, {
                        queue: !1,
                        complete: function() {
                            c.resolve(b);
                        }
                    });
                    return this.el.animate(this.diff, d), c.promise();
                }), a.when.apply(a, j.get()).done(function() {
                    f(), a.each(arguments, function() {
                        var b = this.el;
                        a.each(this.diff, function(a) {
                            b.css(a, "");
                        });
                    }), i.complete.call(g[0]);
                });
            });
        }, a.fn.extend({
            addClass: function(b) {
                return function(c, d, e, f) {
                    return d ? a.effects.animateClass.call(this, {
                        add: c
                    }, d, e, f) : b.apply(this, arguments);
                };
            }(a.fn.addClass),
            removeClass: function(b) {
                return function(c, d, e, f) {
                    return arguments.length > 1 ? a.effects.animateClass.call(this, {
                        remove: c
                    }, d, e, f) : b.apply(this, arguments);
                };
            }(a.fn.removeClass),
            toggleClass: function(b) {
                return function(c, d, e, f, g) {
                    return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
                        add: c
                    } : {
                        remove: c
                    }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                        toggle: c
                    }, d, e, f);
                };
            }(a.fn.toggleClass),
            switchClass: function(b, c, d, e, f) {
                return a.effects.animateClass.call(this, {
                    add: c,
                    remove: b
                }, d, e, f);
            }
        });
    }(), function() {
        function b(b, c, d, e) {
            return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                effect: b
            }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, 
            d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, 
            b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, 
            b.complete = e || c.complete, b;
        }
        function c(b) {
            return !(b && "number" != typeof b && !a.fx.speeds[b]) || ("string" == typeof b && !a.effects.effect[b] || (!!a.isFunction(b) || "object" == typeof b && !b.effect));
        }
        function d(a, b) {
            var c = b.outerWidth(), d = b.outerHeight(), e = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/, f = e.exec(a) || [ "", 0, c, d, 0 ];
            return {
                top: parseFloat(f[1]) || 0,
                right: "auto" === f[2] ? c : parseFloat(f[2]),
                bottom: "auto" === f[3] ? d : parseFloat(f[3]),
                left: parseFloat(f[4]) || 0
            };
        }
        a.expr && a.expr.filters && a.expr.filters.animated && (a.expr.filters.animated = function(b) {
            return function(c) {
                return !!a(c).data(m) || b(c);
            };
        }(a.expr.filters.animated)), !1 !== a.uiBackCompat && a.extend(a.effects, {
            save: function(a, b) {
                for (var c = 0, d = b.length; d > c; c++) null !== b[c] && a.data(k + b[c], a[0].style[b[c]]);
            },
            restore: function(a, b) {
                for (var c, d = 0, e = b.length; e > d; d++) null !== b[d] && (c = a.data(k + b[d]), 
                a.css(b[d], c));
            },
            setMode: function(a, b) {
                return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b;
            },
            createWrapper: function(b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                var c = {
                    width: b.outerWidth(!0),
                    height: b.outerHeight(!0),
                    float: b.css("float")
                }, d = a("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), e = {
                    width: b.width(),
                    height: b.height()
                }, f = document.activeElement;
                try {
                    f.id;
                } catch (a) {
                    f = document.body;
                }
                return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).trigger("focus"), 
                d = b.parent(), "static" === b.css("position") ? (d.css({
                    position: "relative"
                }), b.css({
                    position: "relative"
                })) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each([ "top", "left", "bottom", "right" ], function(a, d) {
                    c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto");
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), b.css(e), d.css(c).show();
            },
            removeWrapper: function(b) {
                var c = document.activeElement;
                return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).trigger("focus")), 
                b;
            }
        }), a.extend(a.effects, {
            version: "1.12.1",
            define: function(b, c, d) {
                return d || (d = c, c = "effect"), a.effects.effect[b] = d, a.effects.effect[b].mode = c, 
                d;
            },
            scaledDimensions: function(a, b, c) {
                if (0 === b) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var d = "horizontal" !== c ? (b || 100) / 100 : 1, e = "vertical" !== c ? (b || 100) / 100 : 1;
                return {
                    height: a.height() * e,
                    width: a.width() * d,
                    outerHeight: a.outerHeight() * e,
                    outerWidth: a.outerWidth() * d
                };
            },
            clipToBox: function(a) {
                return {
                    width: a.clip.right - a.clip.left,
                    height: a.clip.bottom - a.clip.top,
                    left: a.clip.left,
                    top: a.clip.top
                };
            },
            unshift: function(a, b, c) {
                var d = a.queue();
                b > 1 && d.splice.apply(d, [ 1, 0 ].concat(d.splice(b, c))), a.dequeue();
            },
            saveStyle: function(a) {
                a.data(l, a[0].style.cssText);
            },
            restoreStyle: function(a) {
                a[0].style.cssText = a.data(l) || "", a.removeData(l);
            },
            mode: function(a, b) {
                var c = a.is(":hidden");
                return "toggle" === b && (b = c ? "show" : "hide"), (c ? "hide" === b : "show" === b) && (b = "none"), 
                b;
            },
            getBaseline: function(a, b) {
                var c, d;
                switch (a[0]) {
                  case "top":
                    c = 0;
                    break;

                  case "middle":
                    c = .5;
                    break;

                  case "bottom":
                    c = 1;
                    break;

                  default:
                    c = a[0] / b.height;
                }
                switch (a[1]) {
                  case "left":
                    d = 0;
                    break;

                  case "center":
                    d = .5;
                    break;

                  case "right":
                    d = 1;
                    break;

                  default:
                    d = a[1] / b.width;
                }
                return {
                    x: d,
                    y: c
                };
            },
            createPlaceholder: function(b) {
                var c, d = b.css("position"), e = b.position();
                return b.css({
                    marginTop: b.css("marginTop"),
                    marginBottom: b.css("marginBottom"),
                    marginLeft: b.css("marginLeft"),
                    marginRight: b.css("marginRight")
                }).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()), /^(static|relative)/.test(d) && (d = "absolute", 
                c = a("<" + b[0].nodeName + ">").insertAfter(b).css({
                    display: /^(inline|ruby)/.test(b.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: b.css("marginTop"),
                    marginBottom: b.css("marginBottom"),
                    marginLeft: b.css("marginLeft"),
                    marginRight: b.css("marginRight"),
                    float: b.css("float")
                }).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).addClass("ui-effects-placeholder"), 
                b.data(k + "placeholder", c)), b.css({
                    position: d,
                    left: e.left,
                    top: e.top
                }), c;
            },
            removePlaceholder: function(a) {
                var b = k + "placeholder", c = a.data(b);
                c && (c.remove(), a.removeData(b));
            },
            cleanUp: function(b) {
                a.effects.restoreStyle(b), a.effects.removePlaceholder(b);
            },
            setTransition: function(b, c, d, e) {
                return e = e || {}, a.each(c, function(a, c) {
                    var f = b.cssUnit(c);
                    f[0] > 0 && (e[c] = f[0] * d + f[1]);
                }), e;
            }
        }), a.fn.extend({
            effect: function() {
                function c(b) {
                    function c() {
                        h.removeData(m), a.effects.cleanUp(h), "hide" === d.mode && h.hide(), g();
                    }
                    function g() {
                        a.isFunction(i) && i.call(h[0]), a.isFunction(b) && b();
                    }
                    var h = a(this);
                    d.mode = k.shift(), !1 === a.uiBackCompat || f ? "none" === d.mode ? (h[j](), g()) : e.call(h[0], d, c) : (h.is(":hidden") ? "hide" === j : "show" === j) ? (h[j](), 
                    g()) : e.call(h[0], d, g);
                }
                var d = b.apply(this, arguments), e = a.effects.effect[d.effect], f = e.mode, g = d.queue, h = g || "fx", i = d.complete, j = d.mode, k = [], l = function(b) {
                    var c = a(this), d = a.effects.mode(c, j) || f;
                    c.data(m, !0), k.push(d), f && ("show" === d || d === f && "hide" === d) && c.show(), 
                    f && "none" === d || a.effects.saveStyle(c), a.isFunction(b) && b();
                };
                return a.fx.off || !e ? j ? this[j](d.duration, i) : this.each(function() {
                    i && i.call(this);
                }) : !1 === g ? this.each(l).each(c) : this.queue(h, l).queue(h, c);
            },
            show: function(a) {
                return function(d) {
                    if (c(d)) return a.apply(this, arguments);
                    var e = b.apply(this, arguments);
                    return e.mode = "show", this.effect.call(this, e);
                };
            }(a.fn.show),
            hide: function(a) {
                return function(d) {
                    if (c(d)) return a.apply(this, arguments);
                    var e = b.apply(this, arguments);
                    return e.mode = "hide", this.effect.call(this, e);
                };
            }(a.fn.hide),
            toggle: function(a) {
                return function(d) {
                    if (c(d) || "boolean" == typeof d) return a.apply(this, arguments);
                    var e = b.apply(this, arguments);
                    return e.mode = "toggle", this.effect.call(this, e);
                };
            }(a.fn.toggle),
            cssUnit: function(b) {
                var c = this.css(b), d = [];
                return a.each([ "em", "px", "%", "pt" ], function(a, b) {
                    c.indexOf(b) > 0 && (d = [ parseFloat(c), b ]);
                }), d;
            },
            cssClip: function(a) {
                return a ? this.css("clip", "rect(" + a.top + "px " + a.right + "px " + a.bottom + "px " + a.left + "px)") : d(this.css("clip"), this);
            },
            transfer: function(b, c) {
                var d = a(this), e = a(b.to), f = "fixed" === e.css("position"), g = a("body"), h = f ? g.scrollTop() : 0, i = f ? g.scrollLeft() : 0, j = e.offset(), k = {
                    top: j.top - h,
                    left: j.left - i,
                    height: e.innerHeight(),
                    width: e.innerWidth()
                }, l = d.offset(), m = a("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(b.className).css({
                    top: l.top - h,
                    left: l.left - i,
                    height: d.innerHeight(),
                    width: d.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(k, b.duration, b.easing, function() {
                    m.remove(), a.isFunction(c) && c();
                });
            }
        }), a.fx.step.clip = function(b) {
            b.clipInit || (b.start = a(b.elem).cssClip(), "string" == typeof b.end && (b.end = d(b.end, b.elem)), 
            b.clipInit = !0), a(b.elem).cssClip({
                top: b.pos * (b.end.top - b.start.top) + b.start.top,
                right: b.pos * (b.end.right - b.start.right) + b.start.right,
                bottom: b.pos * (b.end.bottom - b.start.bottom) + b.start.bottom,
                left: b.pos * (b.end.left - b.start.left) + b.start.left
            });
        };
    }(), function() {
        var b = {};
        a.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(a, c) {
            b[c] = function(b) {
                return Math.pow(b, a + 2);
            };
        }), a.extend(b, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2);
            },
            Circ: function(a) {
                return 1 - Math.sqrt(1 - a * a);
            },
            Elastic: function(a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(a) {
                return a * a * (3 * a - 2);
            },
            Bounce: function(a) {
                for (var b, c = 4; ((b = Math.pow(2, --c)) - 1) / 11 > a; ) ;
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2);
            }
        }), a.each(b, function(b, c) {
            a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                return 1 - c(1 - a);
            }, a.easing["easeInOut" + b] = function(a) {
                return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2;
            };
        });
    }();
    a.effects;
    a.effects.define("blind", "hide", function(b, c) {
        var d = {
            up: [ "bottom", "top" ],
            vertical: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            horizontal: [ "right", "left" ],
            right: [ "left", "right" ]
        }, e = a(this), f = b.direction || "up", g = e.cssClip(), h = {
            clip: a.extend({}, g)
        }, i = a.effects.createPlaceholder(e);
        h.clip[d[f][0]] = h.clip[d[f][1]], "show" === b.mode && (e.cssClip(h.clip), i && i.css(a.effects.clipToBox(h)), 
        h.clip = g), i && i.animate(a.effects.clipToBox(h), b.duration, b.easing), e.animate(h, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        });
    }), a.effects.define("bounce", function(b, c) {
        var d, e, f, g = a(this), h = b.mode, i = "hide" === h, j = "show" === h, k = b.direction || "up", l = b.distance, m = b.times || 5, n = 2 * m + (j || i ? 1 : 0), o = b.duration / n, p = b.easing, q = "up" === k || "down" === k ? "top" : "left", r = "up" === k || "left" === k, s = 0, t = g.queue().length;
        for (a.effects.createPlaceholder(g), f = g.css(q), l || (l = g["top" === q ? "outerHeight" : "outerWidth"]() / 3), 
        j && (e = {
            opacity: 1
        }, e[q] = f, g.css("opacity", 0).css(q, r ? 2 * -l : 2 * l).animate(e, o, p)), i && (l /= Math.pow(2, m - 1)), 
        e = {}, e[q] = f; m > s; s++) d = {}, d[q] = (r ? "-=" : "+=") + l, g.animate(d, o, p).animate(e, o, p), 
        l = i ? 2 * l : l / 2;
        i && (d = {
            opacity: 0
        }, d[q] = (r ? "-=" : "+=") + l, g.animate(d, o, p)), g.queue(c), a.effects.unshift(g, t, n + 1);
    }), a.effects.define("clip", "hide", function(b, c) {
        var d, e = {}, f = a(this), g = b.direction || "vertical", h = "both" === g, i = h || "horizontal" === g, j = h || "vertical" === g;
        d = f.cssClip(), e.clip = {
            top: j ? (d.bottom - d.top) / 2 : d.top,
            right: i ? (d.right - d.left) / 2 : d.right,
            bottom: j ? (d.bottom - d.top) / 2 : d.bottom,
            left: i ? (d.right - d.left) / 2 : d.left
        }, a.effects.createPlaceholder(f), "show" === b.mode && (f.cssClip(e.clip), e.clip = d), 
        f.animate(e, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        });
    }), a.effects.define("drop", "hide", function(b, c) {
        var d, e = a(this), f = b.mode, g = "show" === f, h = b.direction || "left", i = "up" === h || "down" === h ? "top" : "left", j = "up" === h || "left" === h ? "-=" : "+=", k = "+=" === j ? "-=" : "+=", l = {
            opacity: 0
        };
        a.effects.createPlaceholder(e), d = b.distance || e["top" === i ? "outerHeight" : "outerWidth"](!0) / 2, 
        l[i] = j + d, g && (e.css(l), l[i] = k + d, l.opacity = 1), e.animate(l, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        });
    }), a.effects.define("explode", "hide", function(b, c) {
        function d() {
            t.push(this), t.length === l * m && e();
        }
        function e() {
            n.css({
                visibility: "visible"
            }), a(t).remove(), c();
        }
        var f, g, h, i, j, k, l = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3, m = l, n = a(this), o = b.mode, p = "show" === o, q = n.show().css("visibility", "hidden").offset(), r = Math.ceil(n.outerWidth() / m), s = Math.ceil(n.outerHeight() / l), t = [];
        for (f = 0; l > f; f++) for (i = q.top + f * s, k = f - (l - 1) / 2, g = 0; m > g; g++) h = q.left + g * r, 
        j = g - (m - 1) / 2, n.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -g * r,
            top: -f * s
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: r,
            height: s,
            left: h + (p ? j * r : 0),
            top: i + (p ? k * s : 0),
            opacity: p ? 0 : 1
        }).animate({
            left: h + (p ? 0 : j * r),
            top: i + (p ? 0 : k * s),
            opacity: p ? 1 : 0
        }, b.duration || 500, b.easing, d);
    }), a.effects.define("fade", "toggle", function(b, c) {
        var d = "show" === b.mode;
        a(this).css("opacity", d ? 0 : 1).animate({
            opacity: d ? 1 : 0
        }, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        });
    }), a.effects.define("fold", "hide", function(b, c) {
        var d = a(this), e = b.mode, f = "show" === e, g = "hide" === e, h = b.size || 15, i = /([0-9]+)%/.exec(h), j = !!b.horizFirst, k = j ? [ "right", "bottom" ] : [ "bottom", "right" ], l = b.duration / 2, m = a.effects.createPlaceholder(d), n = d.cssClip(), o = {
            clip: a.extend({}, n)
        }, p = {
            clip: a.extend({}, n)
        }, q = [ n[k[0]], n[k[1]] ], r = d.queue().length;
        i && (h = parseInt(i[1], 10) / 100 * q[g ? 0 : 1]), o.clip[k[0]] = h, p.clip[k[0]] = h, 
        p.clip[k[1]] = 0, f && (d.cssClip(p.clip), m && m.css(a.effects.clipToBox(p)), p.clip = n), 
        d.queue(function(c) {
            m && m.animate(a.effects.clipToBox(o), l, b.easing).animate(a.effects.clipToBox(p), l, b.easing), 
            c();
        }).animate(o, l, b.easing).animate(p, l, b.easing).queue(c), a.effects.unshift(d, r, 4);
    }), a.effects.define("highlight", "show", function(b, c) {
        var d = a(this), e = {
            backgroundColor: d.css("backgroundColor")
        };
        "hide" === b.mode && (e.opacity = 0), a.effects.saveStyle(d), d.css({
            backgroundImage: "none",
            backgroundColor: b.color || "#ffff99"
        }).animate(e, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        });
    }), a.effects.define("size", function(b, c) {
        var d, e, f, g = a(this), h = [ "fontSize" ], i = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], j = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], k = b.mode, l = "effect" !== k, m = b.scale || "both", n = b.origin || [ "middle", "center" ], o = g.css("position"), p = g.position(), q = a.effects.scaledDimensions(g), r = b.from || q, s = b.to || a.effects.scaledDimensions(g, 0);
        a.effects.createPlaceholder(g), "show" === k && (f = r, r = s, s = f), e = {
            from: {
                y: r.height / q.height,
                x: r.width / q.width
            },
            to: {
                y: s.height / q.height,
                x: s.width / q.width
            }
        }, ("box" === m || "both" === m) && (e.from.y !== e.to.y && (r = a.effects.setTransition(g, i, e.from.y, r), 
        s = a.effects.setTransition(g, i, e.to.y, s)), e.from.x !== e.to.x && (r = a.effects.setTransition(g, j, e.from.x, r), 
        s = a.effects.setTransition(g, j, e.to.x, s))), ("content" === m || "both" === m) && e.from.y !== e.to.y && (r = a.effects.setTransition(g, h, e.from.y, r), 
        s = a.effects.setTransition(g, h, e.to.y, s)), n && (d = a.effects.getBaseline(n, q), 
        r.top = (q.outerHeight - r.outerHeight) * d.y + p.top, r.left = (q.outerWidth - r.outerWidth) * d.x + p.left, 
        s.top = (q.outerHeight - s.outerHeight) * d.y + p.top, s.left = (q.outerWidth - s.outerWidth) * d.x + p.left), 
        g.css(r), ("content" === m || "both" === m) && (i = i.concat([ "marginTop", "marginBottom" ]).concat(h), 
        j = j.concat([ "marginLeft", "marginRight" ]), g.find("*[width]").each(function() {
            var c = a(this), d = a.effects.scaledDimensions(c), f = {
                height: d.height * e.from.y,
                width: d.width * e.from.x,
                outerHeight: d.outerHeight * e.from.y,
                outerWidth: d.outerWidth * e.from.x
            }, g = {
                height: d.height * e.to.y,
                width: d.width * e.to.x,
                outerHeight: d.height * e.to.y,
                outerWidth: d.width * e.to.x
            };
            e.from.y !== e.to.y && (f = a.effects.setTransition(c, i, e.from.y, f), g = a.effects.setTransition(c, i, e.to.y, g)), 
            e.from.x !== e.to.x && (f = a.effects.setTransition(c, j, e.from.x, f), g = a.effects.setTransition(c, j, e.to.x, g)), 
            l && a.effects.saveStyle(c), c.css(f), c.animate(g, b.duration, b.easing, function() {
                l && a.effects.restoreStyle(c);
            });
        })), g.animate(s, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: function() {
                var b = g.offset();
                0 === s.opacity && g.css("opacity", r.opacity), l || (g.css("position", "static" === o ? "relative" : o).offset(b), 
                a.effects.saveStyle(g)), c();
            }
        });
    }), a.effects.define("scale", function(b, c) {
        var d = a(this), e = b.mode, f = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "effect" !== e ? 0 : 100), g = a.extend(!0, {
            from: a.effects.scaledDimensions(d),
            to: a.effects.scaledDimensions(d, f, b.direction || "both"),
            origin: b.origin || [ "middle", "center" ]
        }, b);
        b.fade && (g.from.opacity = 1, g.to.opacity = 0), a.effects.effect.size.call(this, g, c);
    }), a.effects.define("puff", "hide", function(b, c) {
        var d = a.extend(!0, {}, b, {
            fade: !0,
            percent: parseInt(b.percent, 10) || 150
        });
        a.effects.effect.scale.call(this, d, c);
    }), a.effects.define("pulsate", "show", function(b, c) {
        var d = a(this), e = b.mode, f = "show" === e, g = "hide" === e, h = f || g, i = 2 * (b.times || 5) + (h ? 1 : 0), j = b.duration / i, k = 0, l = 1, m = d.queue().length;
        for ((f || !d.is(":visible")) && (d.css("opacity", 0).show(), k = 1); i > l; l++) d.animate({
            opacity: k
        }, j, b.easing), k = 1 - k;
        d.animate({
            opacity: k
        }, j, b.easing), d.queue(c), a.effects.unshift(d, m, i + 1);
    }), a.effects.define("shake", function(b, c) {
        var d = 1, e = a(this), f = b.direction || "left", g = b.distance || 20, h = b.times || 3, i = 2 * h + 1, j = Math.round(b.duration / i), k = "up" === f || "down" === f ? "top" : "left", l = "up" === f || "left" === f, m = {}, n = {}, o = {}, p = e.queue().length;
        for (a.effects.createPlaceholder(e), m[k] = (l ? "-=" : "+=") + g, n[k] = (l ? "+=" : "-=") + 2 * g, 
        o[k] = (l ? "-=" : "+=") + 2 * g, e.animate(m, j, b.easing); h > d; d++) e.animate(n, j, b.easing).animate(o, j, b.easing);
        e.animate(n, j, b.easing).animate(m, j / 2, b.easing).queue(c), a.effects.unshift(e, p, i + 1);
    }), a.effects.define("slide", "show", function(b, c) {
        var d, e, f = a(this), g = {
            up: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            right: [ "left", "right" ]
        }, h = b.mode, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left", k = "up" === i || "left" === i, l = b.distance || f["top" === j ? "outerHeight" : "outerWidth"](!0), m = {};
        a.effects.createPlaceholder(f), d = f.cssClip(), e = f.position()[j], m[j] = (k ? -1 : 1) * l + e, 
        m.clip = f.cssClip(), m.clip[g[i][1]] = m.clip[g[i][0]], "show" === h && (f.cssClip(m.clip), 
        f.css(j, m[j]), m.clip = d, m[j] = e), f.animate(m, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        });
    });
    !1 !== a.uiBackCompat && a.effects.define("transfer", function(b, c) {
        a(this).transfer(b, c);
    }), a.ui.focusable = function(c, d) {
        var e, f, g, h, i, j = c.nodeName.toLowerCase();
        return "area" === j ? (e = c.parentNode, f = e.name, !(!c.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']"), 
        g.length > 0 && g.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(j) ? (h = !c.disabled) && (i = a(c).closest("fieldset")[0]) && (h = !i.disabled) : h = "a" === j ? c.href || d : d, 
        h && a(c).is(":visible") && b(a(c)));
    }, a.extend(a.expr[":"], {
        focusable: function(b) {
            return a.ui.focusable(b, null != a.attr(b, "tabindex"));
        }
    }), a.ui.focusable, a.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : a(this[0].form);
    }, a.ui.formResetMixin = {
        _formResetHandler: function() {
            var b = a(this);
            setTimeout(function() {
                var c = b.data("ui-form-reset-instances");
                a.each(c, function() {
                    this.refresh();
                });
            });
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var a = this.form.data("ui-form-reset-instances") || [];
                a.length || this.form.on("reset.ui-form-reset", this._formResetHandler), a.push(this), 
                this.form.data("ui-form-reset-instances", a);
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var b = this.form.data("ui-form-reset-instances");
                b.splice(a.inArray(this, b), 1), b.length ? this.form.data("ui-form-reset-instances", b) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    }, "1.7" === a.fn.jquery.substring(0, 3) && (a.each([ "Width", "Height" ], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), 
                f && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
            }), c;
        }
        var e = "Width" === c ? [ "Left", "Right" ] : [ "Top", "Bottom" ], f = c.toLowerCase(), g = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px");
            });
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px");
            });
        };
    }), a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }), a.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, a.ui.escapeSelector = function() {
        var a = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function(b) {
            return b.replace(a, "\\$1");
        };
    }(), a.fn.labels = function() {
        var b, c, d, e, f;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), 
        d = this.attr("id"), d && (b = this.eq(0).parents().last(), f = b.add(b.length ? b.siblings() : this.siblings()), 
        c = "label[for='" + a.ui.escapeSelector(d) + "']", e = e.add(f.find(c).addBack(c))), 
        this.pushStack(e));
    }, a.fn.scrollParent = function(b) {
        var c = this.css("position"), d = "absolute" === c, e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/, f = this.parents().filter(function() {
            var b = a(this);
            return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"));
        }).eq(0);
        return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document);
    }, a.extend(a.expr[":"], {
        tabbable: function(b) {
            var c = a.attr(b, "tabindex"), d = null != c;
            return (!d || c >= 0) && a.ui.focusable(b, d);
        }
    }), a.fn.extend({
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id");
            });
        }
    }), a.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var b = this.options;
            this.prevShow = this.prevHide = a(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), 
            this.element.attr("role", "tablist"), b.collapsible || !1 !== b.active && null != b.active || (b.active = 0), 
            this._processPanels(), 0 > b.active && (b.active += this.headers.length), this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : a()
            };
        },
        _createIcons: function() {
            var b, c, d = this.options.icons;
            d && (b = a("<span>"), this._addClass(b, "ui-accordion-header-icon", "ui-icon " + d.header), 
            b.prependTo(this.headers), c = this.active.children(".ui-accordion-header-icon"), 
            this._removeClass(c, d.header)._addClass(c, null, d.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var a;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), 
            this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), 
            "content" !== this.options.heightStyle && a.css("height", "");
        },
        _setOption: function(a, b) {
            return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || !1 !== this.options.active || this._activate(0), 
            void ("icons" === a && (this._destroyIcons(), b && this._createIcons())));
        },
        _setOptionDisabled: function(a) {
            this._super(a), this.element.attr("aria-disabled", a), this._toggleClass(null, "ui-state-disabled", !!a), 
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!a);
        },
        _keydown: function(b) {
            if (!b.altKey && !b.ctrlKey) {
                var c = a.ui.keyCode, d = this.headers.length, e = this.headers.index(b.target), f = !1;
                switch (b.keyCode) {
                  case c.RIGHT:
                  case c.DOWN:
                    f = this.headers[(e + 1) % d];
                    break;

                  case c.LEFT:
                  case c.UP:
                    f = this.headers[(e - 1 + d) % d];
                    break;

                  case c.SPACE:
                  case c.ENTER:
                    this._eventHandler(b);
                    break;

                  case c.HOME:
                    f = this.headers[0];
                    break;

                  case c.END:
                    f = this.headers[d - 1];
                }
                f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), a(f).trigger("focus"), 
                b.preventDefault());
            }
        },
        _panelKeyDown: function(b) {
            b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().trigger("focus");
        },
        refresh: function() {
            var b = this.options;
            this._processPanels(), !1 === b.active && !0 === b.collapsible || !this.headers.length ? (b.active = !1, 
            this.active = a()) : !1 === b.active ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, 
            this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), 
            this._destroyIcons(), this._refresh();
        },
        _processPanels: function() {
            var a = this.headers, b = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), 
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), 
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), 
            b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)));
        },
        _refresh: function() {
            var b, c = this.options, d = c.heightStyle, e = this.element.parent();
            this.active = this._findActive(c.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), 
            this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), 
            this.headers.attr("role", "tab").each(function() {
                var b = a(this), c = b.uniqueId().attr("id"), d = b.next(), e = d.uniqueId().attr("id");
                b.attr("aria-controls", e), d.attr("aria-labelledby", c);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(c.event), 
            "fill" === d ? (b = e.height(), this.element.siblings(":visible").each(function() {
                var c = a(this), d = c.css("position");
                "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0));
            }), this.headers.each(function() {
                b -= a(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()));
            }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function() {
                var c = a(this).is(":visible");
                c || a(this).show(), b = Math.max(b, a(this).css("height", "").height()), c || a(this).hide();
            }).height(b));
        },
        _activate: function(b) {
            var c = this._findActive(b)[0];
            c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }));
        },
        _findActive: function(b) {
            return "number" == typeof b ? this.headers.eq(b) : a();
        },
        _setupEvents: function(b) {
            var c = {
                keydown: "_keydown"
            };
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), 
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function(b) {
            var c, d, e = this.options, f = this.active, g = a(b.currentTarget), h = g[0] === f[0], i = h && e.collapsible, j = i ? a() : g.next(), k = f.next(), l = {
                oldHeader: f,
                oldPanel: k,
                newHeader: i ? a() : g,
                newPanel: j
            };
            b.preventDefault(), h && !e.collapsible || !1 === this._trigger("beforeActivate", b, l) || (e.active = !i && this.headers.index(g), 
            this.active = h ? a() : g, this._toggle(l), this._removeClass(f, "ui-accordion-header-active", "ui-state-active"), 
            e.icons && (c = f.children(".ui-accordion-header-icon"), this._removeClass(c, null, e.icons.activeHeader)._addClass(c, null, e.icons.header)), 
            h || (this._removeClass(g, "ui-accordion-header-collapsed")._addClass(g, "ui-accordion-header-active", "ui-state-active"), 
            e.icons && (d = g.children(".ui-accordion-header-icon"), this._removeClass(d, null, e.icons.header)._addClass(d, null, e.icons.activeHeader)), 
            this._addClass(g.next(), "ui-accordion-content-active")));
        },
        _toggle: function(b) {
            var c = b.newPanel, d = this.prevShow.length ? this.prevShow : b.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, 
            this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), 
            d.attr({
                "aria-hidden": "true"
            }), d.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), c.length && d.length ? d.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : c.length && this.headers.filter(function() {
                return 0 === parseInt(a(this).attr("tabIndex"), 10);
            }).attr("tabIndex", -1), c.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function(a, b, c) {
            var d, e, f, g = this, h = 0, i = a.css("box-sizing"), j = a.length && (!b.length || a.index() < b.index()), k = this.options.animate || {}, l = j && k.down || k, m = function() {
                g._toggleComplete(c);
            };
            return "number" == typeof l && (f = l), "string" == typeof l && (e = l), e = e || l.easing || k.easing, 
            f = f || l.duration || k.duration, b.length ? a.length ? (d = a.show().outerHeight(), 
            b.animate(this.hideProps, {
                duration: f,
                easing: e,
                step: function(a, b) {
                    b.now = Math.round(a);
                }
            }), void a.hide().animate(this.showProps, {
                duration: f,
                easing: e,
                complete: m,
                step: function(a, c) {
                    c.now = Math.round(a), "height" !== c.prop ? "content-box" === i && (h += c.now) : "content" !== g.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - h), 
                    h = 0);
                }
            })) : b.animate(this.hideProps, f, e, m) : a.animate(this.showProps, f, e, m);
        },
        _toggleComplete: function(a) {
            var b = a.oldPanel, c = b.prev();
            this._removeClass(b, "ui-accordion-content-active"), this._removeClass(c, "ui-accordion-header-active")._addClass(c, "ui-accordion-header-collapsed"), 
            b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a);
        }
    }), a.ui.safeActiveElement = function(a) {
        var b;
        try {
            b = a.activeElement;
        } catch (c) {
            b = a.body;
        }
        return b || (b = a.body), b.nodeName || (b = a.body), b;
    }, a.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault();
                },
                "click .ui-menu-item": function(b) {
                    var c = a(b.target), d = a(a.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), 
                    c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && d.closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(b) {
                    if (!this.previousFilter) {
                        var c = a(b.target).closest(".ui-menu-item"), d = a(b.currentTarget);
                        c[0] === d[0] && (this._removeClass(d.siblings().children(".ui-state-active"), null, "ui-state-active"), 
                        this.focus(b, d));
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var c = this.active || this.element.find(this.options.items).eq(0);
                    b || this.focus(a, c);
                },
                blur: function(b) {
                    this._delay(function() {
                        !a.contains(this.element[0], a.ui.safeActiveElement(this.document[0])) && this.collapseAll(b);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            var b = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"), c = b.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), 
            c.children().each(function() {
                var b = a(this);
                b.data("ui-menu-submenu-caret") && b.remove();
            });
        },
        _keydown: function(b) {
            var c, d, e, f, g = !0;
            switch (b.keyCode) {
              case a.ui.keyCode.PAGE_UP:
                this.previousPage(b);
                break;

              case a.ui.keyCode.PAGE_DOWN:
                this.nextPage(b);
                break;

              case a.ui.keyCode.HOME:
                this._move("first", "first", b);
                break;

              case a.ui.keyCode.END:
                this._move("last", "last", b);
                break;

              case a.ui.keyCode.UP:
                this.previous(b);
                break;

              case a.ui.keyCode.DOWN:
                this.next(b);
                break;

              case a.ui.keyCode.LEFT:
                this.collapse(b);
                break;

              case a.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                break;

              case a.ui.keyCode.ENTER:
              case a.ui.keyCode.SPACE:
                this._activate(b);
                break;

              case a.ui.keyCode.ESCAPE:
                this.collapse(b);
                break;

              default:
                g = !1, d = this.previousFilter || "", f = !1, e = b.keyCode >= 96 && 105 >= b.keyCode ? "" + (b.keyCode - 96) : String.fromCharCode(b.keyCode), 
                clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), 
                c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, 
                c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), 
                c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            g && b.preventDefault();
        },
        _activate: function(a) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(a) : this.select(a));
        },
        refresh: function() {
            var b, c, d, e, f, g = this, h = this.options.icons.submenu, i = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), 
            d = i.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var b = a(this), c = b.prev(), d = a("<span>").data("ui-menu-submenu-caret", !0);
                g._addClass(d, "ui-menu-icon", "ui-icon " + h), c.attr("aria-haspopup", "true").prepend(d), 
                b.attr("aria-labelledby", c.attr("id"));
            }), this._addClass(d, "ui-menu", "ui-widget ui-widget-content ui-front"), b = i.add(this.element), 
            c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
                var b = a(this);
                g._isDivider(b) && g._addClass(b, "ui-menu-divider", "ui-widget-content");
            }), e = c.not(".ui-menu-item, .ui-menu-divider"), f = e.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(e, "ui-menu-item")._addClass(f, "ui-menu-item-wrapper"), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), 
            this.active && !a.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(a, b) {
            if ("icons" === a) {
                var c = this.element.find(".ui-menu-icon");
                this._removeClass(c, null, this.options.icons.submenu)._addClass(c, null, b.submenu);
            }
            this._super(a, b);
        },
        _setOptionDisabled: function(a) {
            this._super(a), this.element.attr("aria-disabled", a + ""), this._toggleClass(null, "ui-state-disabled", !!a);
        },
        focus: function(a, b) {
            var c, d, e;
            this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), 
            d = this.active.children(".ui-menu-item-wrapper"), this._addClass(d, null, "ui-state-active"), 
            this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), e = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), 
            this._addClass(e, null, "ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), 
            this.activeMenu = b.parent(), this._trigger("focus", a, {
                item: b
            });
        },
        _scrollIntoView: function(b) {
            var c, d, e, f, g, h;
            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, 
            f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 
            0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h));
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), 
            this._trigger("blur", a, {
                item: this.active
            }), this.active = null);
        },
        _startOpening: function(a) {
            clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(a);
            }, this.delay));
        },
        _open: function(b) {
            var c = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c);
        },
        collapseAll: function(b, c) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element), this._close(d), this.blur(b), this._removeClass(d.find(".ui-state-active"), null, "ui-state-active"), 
                this.activeMenu = d;
            }, this.delay);
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function(b) {
            return !a(b.target).closest(".ui-menu").length;
        },
        _isDivider: function(a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text());
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b));
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b);
            }));
        },
        next: function(a) {
            this._move("next", "first", a);
        },
        previous: function(a) {
            this._move("prev", "last", a);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(a, b, c) {
            var d;
            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), 
            d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), 
            this.focus(c, d);
        },
        nextPage: function(b) {
            var c, d, e;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, 
            e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return c = a(this), 0 > c.offset().top - d - e;
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b);
        },
        previousPage: function(b) {
            var c, d, e;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, 
            e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d + e > 0;
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(b) {
            this.active = this.active || a(b.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c);
        },
        _filterMenuItems: function(b) {
            var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), d = RegExp("^" + c, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return d.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()));
            });
        }
    }), a.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var b, c, d, e = this.element[0].nodeName.toLowerCase(), f = "textarea" === e, g = "input" === e;
            this.isMultiLine = f || !g && this._isContentEditable(this.element), this.valueMethod = this.element[f || g ? "val" : "text"], 
            this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(e) {
                    if (this.element.prop("readOnly")) return b = !0, d = !0, void (c = !0);
                    b = !1, d = !1, c = !1;
                    var f = a.ui.keyCode;
                    switch (e.keyCode) {
                      case f.PAGE_UP:
                        b = !0, this._move("previousPage", e);
                        break;

                      case f.PAGE_DOWN:
                        b = !0, this._move("nextPage", e);
                        break;

                      case f.UP:
                        b = !0, this._keyEvent("previous", e);
                        break;

                      case f.DOWN:
                        b = !0, this._keyEvent("next", e);
                        break;

                      case f.ENTER:
                        this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                        break;

                      case f.TAB:
                        this.menu.active && this.menu.select(e);
                        break;

                      case f.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                        this.close(e), e.preventDefault());
                        break;

                      default:
                        c = !0, this._searchTimeout(e);
                    }
                },
                keypress: function(d) {
                    if (b) return b = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
                    if (!c) {
                        var e = a.ui.keyCode;
                        switch (d.keyCode) {
                          case e.PAGE_UP:
                            this._move("previousPage", d);
                            break;

                          case e.PAGE_DOWN:
                            this._move("nextPage", d);
                            break;

                          case e.UP:
                            this._keyEvent("previous", d);
                            break;

                          case e.DOWN:
                            this._keyEvent("next", d);
                        }
                    }
                },
                input: function(a) {
                    return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(a) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), 
                    this.close(a), void this._change(a));
                }
            }), this._initSource(), this.menu = a("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), 
            this._on(this.menu.element, {
                mousedown: function(b) {
                    b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== a.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                    });
                },
                menufocus: function(b, c) {
                    var d, e;
                    return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        a(b.target).trigger(b.originalEvent);
                    })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
                        item: e
                    }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), 
                    void ((d = c.item.attr("aria-label") || e.value) && a.trim(d).length && (this.liveRegion.children().hide(), 
                    a("<div>").text(d).appendTo(this.liveRegion))));
                },
                menuselect: function(b, c) {
                    var d = c.item.data("ui-autocomplete-item"), e = this.previous;
                    this.element[0] !== a.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), 
                    this.previous = e, this._delay(function() {
                        this.previous = e, this.selectedItem = d;
                    })), !1 !== this._trigger("select", b, {
                        item: d
                    }) && this._value(d.value), this.term = this._value(), this.close(b), this.selectedItem = d;
                }
            }), this.liveRegion = a("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), 
            this.liveRegion.remove();
        },
        _setOption: function(a, b) {
            this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === a && b && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function(b) {
            var c = this.menu.element[0];
            return b.target === this.element[0] || b.target === c || a.contains(c, b.target);
        },
        _closeOnClickOutside: function(a) {
            this._isEventTargetInWidget(a) || this.close();
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front, dialog")), 
            b.length || (b = this.document[0].body), b;
        },
        _initSource: function() {
            var b, c, d = this;
            a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                d(a.ui.autocomplete.filter(b, c.term));
            }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                    url: c,
                    data: b,
                    dataType: "json",
                    success: function(a) {
                        e(a);
                    },
                    error: function() {
                        e([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var b = this.term === this._value(), c = this.menu.element.is(":visible"), d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                (!b || b && !c && !d) && (this.selectedItem = null, this.search(null, a));
            }, this.options.delay);
        },
        search: function(a, b) {
            return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : !1 !== this._trigger("search", b) ? this._search(a) : void 0;
        },
        _search: function(a) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: a
            }, this._response());
        },
        _response: function() {
            var b = ++this.requestIndex;
            return a.proxy(function(a) {
                b === this.requestIndex && this.__response(a), --this.pending || this._removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(a) {
            a && (a = this._normalize(a)), this._trigger("response", null, {
                content: a
            }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), 
            this._trigger("open")) : this._close();
        },
        close: function(a) {
            this.cancelSearch = !0, this._close(a);
        },
        _close: function(a) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), 
            this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a));
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            });
        },
        _normalize: function(b) {
            return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                return "string" == typeof b ? {
                    label: b,
                    value: b
                } : a.extend({}, b, {
                    label: b.label || b.value,
                    value: b.value || b.label
                });
            });
        },
        _suggest: function(b) {
            var c = this.menu.element.empty();
            this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), 
            c.position(a.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            });
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(b, c) {
            var d = this;
            a.each(c, function(a, c) {
                d._renderItemData(b, c);
            });
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b);
        },
        _renderItem: function(b, c) {
            return a("<li>").append(a("<div>").text(c.label)).appendTo(b);
        },
        _move: function(a, b) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), 
            void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(a, b) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault());
        },
        _isContentEditable: function(a) {
            if (!a.length) return !1;
            var b = a.prop("contentEditable");
            return "inherit" === b ? this._isContentEditable(a.parent()) : "true" === b;
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(b, c) {
            var d = RegExp(a.ui.autocomplete.escapeRegex(c), "i");
            return a.grep(b, function(a) {
                return d.test(a.label || a.value || a);
            });
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(b) {
            var c;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, 
            this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion));
        }
    }), a.ui.autocomplete;
    var o = /ui-corner-([a-z]){2,6}/g;
    a.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance();
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh();
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), 
            this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
        },
        _initWidgets: function() {
            var b = this, c = [];
            a.each(this.options.items, function(d, e) {
                var f, g = {};
                return e ? "controlgroupLabel" === d ? (f = b.element.find(e), f.each(function() {
                    var b = a(this);
                    b.children(".ui-controlgroup-label-contents").length || b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                }), b._addClass(f, null, "ui-widget ui-widget-content ui-state-default"), void (c = c.concat(f.get()))) : void (a.fn[d] && (g = b["_" + d + "Options"] ? b["_" + d + "Options"]("middle") : {
                    classes: {}
                }, b.element.find(e).each(function() {
                    var e = a(this), f = e[d]("instance"), h = a.widget.extend({}, g);
                    if ("button" !== d || !e.parent(".ui-spinner").length) {
                        f || (f = e[d]()[d]("instance")), f && (h.classes = b._resolveClassesValues(h.classes, f)), 
                        e[d](h);
                        var i = e[d]("widget");
                        a.data(i[0], "ui-controlgroup-data", f || e[d]("instance")), c.push(i[0]);
                    }
                }))) : void 0;
            }), this.childWidgets = a(a.unique(c)), this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function(b) {
            this.childWidgets.each(function() {
                var c = a(this), d = c.data("ui-controlgroup-data");
                d && d[b] && d[b]();
            });
        },
        _updateCornerClass: function(a, b) {
            var c = this._buildSimpleOptions(b, "label").classes.label;
            this._removeClass(a, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), 
            this._addClass(a, null, c);
        },
        _buildSimpleOptions: function(a, b) {
            var c = "vertical" === this.options.direction, d = {
                classes: {}
            };
            return d.classes[b] = {
                middle: "",
                first: "ui-corner-" + (c ? "top" : "left"),
                last: "ui-corner-" + (c ? "bottom" : "right"),
                only: "ui-corner-all"
            }[a], d;
        },
        _spinnerOptions: function(a) {
            var b = this._buildSimpleOptions(a, "ui-spinner");
            return b.classes["ui-spinner-up"] = "", b.classes["ui-spinner-down"] = "", b;
        },
        _buttonOptions: function(a) {
            return this._buildSimpleOptions(a, "ui-button");
        },
        _checkboxradioOptions: function(a) {
            return this._buildSimpleOptions(a, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function(a) {
            var b = "vertical" === this.options.direction;
            return {
                width: !!b && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (b ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (b ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": b ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (b ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[a]
            };
        },
        _resolveClassesValues: function(b, c) {
            var d = {};
            return a.each(b, function(e) {
                var f = c.options.classes[e] || "";
                f = a.trim(f.replace(o, "")), d[e] = (f + " " + b[e]).replace(/\s+/g, " ");
            }), d;
        },
        _setOption: function(a, b) {
            return "direction" === a && this._removeClass("ui-controlgroup-" + this.options.direction), 
            this._super(a, b), "disabled" === a ? void this._callChildMethod(b ? "disable" : "enable") : void this.refresh();
        },
        refresh: function() {
            var b, c = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), 
            this._initWidgets(), b = this.childWidgets, this.options.onlyVisible && (b = b.filter(":visible")), 
            b.length && (a.each([ "first", "last" ], function(a, d) {
                var e = b[d]().data("ui-controlgroup-data");
                if (e && c["_" + e.widgetName + "Options"]) {
                    var f = c["_" + e.widgetName + "Options"](1 === b.length ? "only" : d);
                    f.classes = c._resolveClassesValues(f.classes, e), e.element[e.widgetName](f);
                } else c._updateCornerClass(b[d](), d);
            }), this._callChildMethod("refresh"));
        }
    }), a.widget("ui.checkboxradio", [ a.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var b, c, d = this, e = this._super() || {};
            return this._readType(), c = this.element.labels(), this.label = a(c[c.length - 1]), 
            this.label.length || a.error("No label found for checkboxradio widget"), this.originalLabel = "", 
            this.label.contents().not(this.element[0]).each(function() {
                d.originalLabel += 3 === this.nodeType ? a(this).text() : this.outerHTML;
            }), this.originalLabel && (e.label = this.originalLabel), b = this.element[0].disabled, 
            null != b && (e.disabled = b), e;
        },
        _create: function() {
            var a = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), 
            this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), 
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), 
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), 
            this._enhance(), a && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), 
            this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                }
            });
        },
        _readType: function() {
            var b = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === b && /radio|checkbox/.test(this.type) || a.error("Can't create checkboxradio on element.nodeName=" + b + " and element.type=" + this.type);
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function() {
            return this.label;
        },
        _getRadioGroup: function() {
            var b, c = this.element[0].name, d = "input[name='" + a.ui.escapeSelector(c) + "']";
            return c ? (b = this.form.length ? a(this.form[0].elements).filter(d) : a(d).filter(function() {
                return 0 === a(this).form().length;
            }), b.not(this.element)) : a([]);
        },
        _toggleClasses: function() {
            var b = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", b), 
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", b)._toggleClass(this.icon, null, "ui-icon-blank", !b), 
            "radio" === this.type && this._getRadioGroup().each(function() {
                var b = a(this).checkboxradio("instance");
                b && b._removeClass(b.label, "ui-checkboxradio-checked", "ui-state-active");
            });
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function(a, b) {
            return "label" !== a || b ? (this._super(a, b), "disabled" === a ? (this._toggleClass(this.label, null, "ui-state-disabled", b), 
            void (this.element[0].disabled = b)) : void this.refresh()) : void 0;
        },
        _updateIcon: function(b) {
            var c = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = a("<span>"), this.iconSpace = a("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (c += b ? "ui-icon-check ui-state-checked" : "ui-icon-blank", 
            this._removeClass(this.icon, null, b ? "ui-icon-blank" : "ui-icon-check")) : c += "ui-icon-blank", 
            this._addClass(this.icon, "ui-checkboxradio-icon", c), b || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), 
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), 
            this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function() {
            var a = this.label.contents().not(this.element[0]);
            this.icon && (a = a.not(this.icon[0])), this.iconSpace && (a = a.not(this.iconSpace[0])), 
            a.remove(), this.label.append(this.options.label);
        },
        refresh: function() {
            var a = this.element[0].checked, b = this.element[0].disabled;
            this._updateIcon(a), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", a), 
            null !== this.options.label && this._updateLabel(), b !== this.options.disabled && this._setOptions({
                disabled: b
            });
        }
    } ]), a.ui.checkboxradio, a.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var a, b = this._super() || {};
            return this.isInput = this.element.is("input"), a = this.element[0].disabled, null != a && (b.disabled = a), 
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (b.label = this.originalLabel), 
            b;
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), 
            this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), 
            this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), 
            this._enhance(), this.element.is("a") && this._on({
                keyup: function(b) {
                    b.keyCode === a.ui.keyCode.SPACE && (b.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                }
            });
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), 
            this._updateTooltip());
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
        },
        _updateIcon: function(b, c) {
            var d = "iconPosition" !== b, e = d ? this.options.iconPosition : c, f = "top" === e || "bottom" === e;
            this.icon ? d && this._removeClass(this.icon, null, this.options.icon) : (this.icon = a("<span>"), 
            this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), 
            d && this._addClass(this.icon, null, c), this._attachIcon(e), f ? (this._addClass(this.icon, null, "ui-widget-icon-block"), 
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = a("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), 
            this._attachIconSpace(e));
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), 
            this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function(a) {
            this.icon[/^(?:end|bottom)/.test(a) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function(a) {
            this.element[/^(?:end|bottom)/.test(a) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function(a) {
            var b = void 0 === a.showLabel ? this.options.showLabel : a.showLabel, c = void 0 === a.icon ? this.options.icon : a.icon;
            b || c || (a.showLabel = !0), this._super(a);
        },
        _setOption: function(a, b) {
            "icon" === a && (b ? this._updateIcon(a, b) : this.icon && (this.icon.remove(), 
            this.iconSpace && this.iconSpace.remove())), "iconPosition" === a && this._updateIcon(a, b), 
            "showLabel" === a && (this._toggleClass("ui-button-icon-only", null, !b), this._updateTooltip()), 
            "label" === a && (this.isInput ? this.element.val(b) : (this.element.html(b), this.icon && (this._attachIcon(this.options.iconPosition), 
            this._attachIconSpace(this.options.iconPosition)))), this._super(a, b), "disabled" === a && (this._toggleClass(null, "ui-state-disabled", b), 
            this.element[0].disabled = b, b && this.element.blur());
        },
        refresh: function() {
            var a = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOptions({
                disabled: a
            }), this._updateTooltip();
        }
    }), !1 !== a.uiBackCompat && (a.widget("ui.button", a.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), 
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), 
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, 
            this.options.iconPosition = "end"), this._super();
        },
        _setOption: function(a, b) {
            return "text" === a ? void this._super("showLabel", b) : ("showLabel" === a && (this.options.text = b), 
            "icon" === a && (this.options.icons.primary = b), "icons" === a && (b.primary ? (this._super("icon", b.primary), 
            this._super("iconPosition", "beginning")) : b.secondary && (this._super("icon", b.secondary), 
            this._super("iconPosition", "end"))), void this._superApply(arguments));
        }
    }), a.fn.button = function(b) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? b.apply(this, arguments) : (a.ui.checkboxradio || a.error("Checkboxradio widget missing"), 
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments));
        };
    }(a.fn.button), a.fn.buttonset = function() {
        return a.ui.controlgroup || a.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [ arguments[0], "items.button", arguments[2] ]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [ arguments[0], "items.button" ]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments));
    }), a.ui.button, a.extend(a.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var p;
    a.extend(d.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(a) {
            return g(this._defaults, a || {}), this;
        },
        _attachDatepicker: function(b, c) {
            var d, e, f;
            d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, 
            b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), 
            "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f);
        },
        _newInst: function(b, c) {
            return {
                id: b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: b,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: c,
                dpDiv: c ? e(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(b, c) {
            var d = a(b);
            c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), 
            d.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), 
            this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b));
        },
        _attachments: function(b, c) {
            var d, e, f, g = this._get(c, "appendText"), h = this._get(c, "isRTL");
            c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), 
            b[h ? "before" : "after"](c.append)), b.off("focus", this._showDatepicker), c.trigger && c.trigger.remove(), 
            d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.on("focus", this._showDatepicker), 
            ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), 
            c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: e,
                title: e
            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                src: f,
                alt: e,
                title: e
            }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.on("click", function() {
                return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), 
                a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1;
            }));
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b, c, d, e, f = new Date(2009, 11, 20), g = this._get(a, "dateFormat");
                g.match(/[DM]/) && (b = function(a) {
                    for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, 
                    d = e);
                    return d;
                }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), 
                a.input.attr("size", this._formatDate(a, f).length);
            }
        },
        _inlineDatepicker: function(b, c) {
            var d = a(b);
            d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), 
            a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), 
            this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(b, c, d, e, f) {
            var h, i, j, k, l, m = this._dialogInst;
            return m || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.on("keydown", this._doKeyDown), a("body").append(this._dialogInput), 
            m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), 
            g(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, 
            this._dialogInput.val(c), this._pos = f ? f.length ? f : [ f.pageX, f.pageY ] : null, 
            this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, 
            k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ i / 2 - 100 + k, j / 2 - 150 + l ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), 
            a.data(this._dialogInput[0], "datepicker", m), this;
        },
        _destroyDatepicker: function(b) {
            var c, d = a(b), e = a.data(b, "datepicker");
            d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), 
            "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty(), 
            p === e && (p = null));
        },
        _enableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, "datepicker");
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, 
            f.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), 
            d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            }));
        },
        _disableDatepicker: function(b) {
            var c, d, e = a(b), f = a.data(b, "datepicker");
            e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, 
            f.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), 
            d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
            this._disabledInputs = a.map(this._disabledInputs, function(a) {
                return a === b ? null : a;
            }), this._disabledInputs[this._disabledInputs.length] = b);
        },
        _isDisabledDatepicker: function(a) {
            if (!a) return !1;
            for (var b = 0; this._disabledInputs.length > b; b++) if (this._disabledInputs[b] === a) return !0;
            return !1;
        },
        _getInst: function(b) {
            try {
                return a.data(b, "datepicker");
            } catch (a) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(b, c, d) {
            var e, f, h, i, j = this._getInst(b);
            return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, 
            "string" == typeof c && (e = {}, e[c] = d), void (j && (this._curInst === j && this._hideDatepicker(), 
            f = this._getDateDatepicker(b, !0), h = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), 
            g(j.settings, e), null !== h && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, h)), 
            null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), 
            "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), 
            this._attachments(a(b), j), this._autoSize(j), this._setDate(j, f), this._updateAlternate(j), 
            this._updateDatepicker(j))));
        },
        _changeDatepicker: function(a, b, c) {
            this._optionDatepicker(a, b, c);
        },
        _refreshDatepicker: function(a) {
            var b = this._getInst(a);
            b && this._updateDatepicker(b);
        },
        _setDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c));
        },
        _getDateDatepicker: function(a, b) {
            var c = this._getInst(a);
            return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null;
        },
        _doKeyDown: function(b) {
            var c, d, e, f = a.datepicker._getInst(b.target), g = !0, h = f.dpDiv.is(".ui-datepicker-rtl");
            if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
              case 9:
                a.datepicker._hideDatepicker(), g = !1;
                break;

              case 13:
                return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), 
                e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), 
                c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [ d, f ])) : a.datepicker._hideDatepicker(), 
                !1;

              case 27:
                a.datepicker._hideDatepicker();
                break;

              case 33:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 34:
                a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 35:
                (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                break;

              case 36:
                (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                break;

              case 37:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), 
                g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 38:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                break;

              case 39:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), 
                g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                break;

              case 40:
                (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                break;

              default:
                g = !1;
            } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
            g && (b.preventDefault(), b.stopPropagation());
        },
        _doKeyPress: function(b) {
            var c, d, e = a.datepicker._getInst(b.target);
            return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), 
            d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0;
        },
        _doKeyUp: function(b) {
            var c = a.datepicker._getInst(b.target);
            if (c.input.val() !== c.lastVal) try {
                a.datepicker.parseDate(a.datepicker._get(c, "dateFormat"), c.input ? c.input.val() : null, a.datepicker._getFormatConfig(c)) && (a.datepicker._setDateFromField(c), 
                a.datepicker._updateAlternate(c), a.datepicker._updateDatepicker(c));
            } catch (a) {}
            return !0;
        },
        _showDatepicker: function(b) {
            if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), 
            !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                var d, e, f, h, i, j, k;
                d = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== d && (a.datepicker._curInst.dpDiv.stop(!0, !0), 
                d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), 
                e = a.datepicker._get(d, "beforeShow"), !1 !== (f = e ? e.apply(b, [ b, d ]) : {}) && (g(d.settings, f), 
                d.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(d), 
                a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), 
                a.datepicker._pos[1] += b.offsetHeight), h = !1, a(b).parents().each(function() {
                    return !(h |= "fixed" === a(this).css("position"));
                }), i = {
                    left: a.datepicker._pos[0],
                    top: a.datepicker._pos[1]
                }, a.datepicker._pos = null, d.dpDiv.empty(), d.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), a.datepicker._updateDatepicker(d), i = a.datepicker._checkOffset(d, i, h), d.dpDiv.css({
                    position: a.datepicker._inDialog && a.blockUI ? "static" : h ? "fixed" : "absolute",
                    display: "none",
                    left: i.left + "px",
                    top: i.top + "px"
                }), d.inline || (j = a.datepicker._get(d, "showAnim"), k = a.datepicker._get(d, "duration"), 
                d.dpDiv.css("z-index", c(a(b)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? d.dpDiv.show(j, a.datepicker._get(d, "showOptions"), k) : d.dpDiv[j || "show"](j ? k : null), 
                a.datepicker._shouldFocusInput(d) && d.input.trigger("focus"), a.datepicker._curInst = d));
            }
        },
        _updateDatepicker: function(b) {
            this.maxRows = 4, p = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
            var c, d = this._getNumberOfMonths(b), e = d[1], g = b.dpDiv.find("." + this._dayOverClass + " a");
            g.length > 0 && f.apply(g.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em"), 
            b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.trigger("focus"), 
            b.yearshtml && (c = b.yearshtml, setTimeout(function() {
                c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), 
                c = b.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus");
        },
        _checkOffset: function(b, c, d) {
            var e = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()), j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
            return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, 
            c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, 
            c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), 
            c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c;
        },
        _findPos: function(b) {
            for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b)); ) b = b[e ? "previousSibling" : "nextSibling"];
            return c = a(b).offset(), [ c.left, c.top ];
        },
        _hideDatepicker: function(b) {
            var c, d, e, f, g = this._curInst;
            !g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), 
            d = this._get(g, "duration"), e = function() {
                a.datepicker._tidyDialog(g);
            }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), 
            c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [ g.input ? g.input.val() : "", g ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(b) {
            if (a.datepicker._curInst) {
                var c = a(b.target), d = a.datepicker._getInst(c[0]);
                (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), 
            this._updateDatepicker(f));
        },
        _gotoToday: function(b) {
            var c, d = a(b), e = this._getInst(d[0]);
            this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, 
            e.drawYear = e.selectedYear = e.currentYear) : (c = new Date(), e.selectedDay = c.getDate(), 
            e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), 
            this._notifyChange(e), this._adjustDate(d);
        },
        _selectMonthYear: function(b, c, d) {
            var e = a(b), f = this._getInst(e[0]);
            f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), 
            this._notifyChange(f), this._adjustDate(e);
        },
        _selectDay: function(b, c, d, e) {
            var f, g = a(b);
            a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), 
            f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, 
            f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)));
        },
        _clearDate: function(b) {
            var c = a(b);
            this._selectDate(c, "");
        },
        _selectDate: function(b, c) {
            var d, e = a(b), f = this._getInst(e[0]);
            c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), 
            d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [ c, f ]) : f.input && f.input.trigger("change"), 
            f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], 
            "object" != typeof f.input[0] && f.input.trigger("focus"), this._lastInput = null);
        },
        _updateAlternate: function(b) {
            var c, d, e, f = this._get(b, "altField");
            f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), 
            e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).val(e));
        },
        noWeekends: function(a) {
            var b = a.getDay();
            return [ b > 0 && 6 > b, "" ];
        },
        iso8601Week: function(a) {
            var b, c = new Date(a.getTime());
            return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), 
            c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1;
        },
        parseDate: function(b, c, d) {
            if (null == b || null == c) throw "Invalid arguments";
            if ("" === (c = "object" == typeof c ? "" + c : c + "")) return null;
            var e, f, g, h, i = 0, j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff, k = "string" != typeof j ? j : new Date().getFullYear() % 100 + parseInt(j, 10), l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, m = (d ? d.dayNames : null) || this._defaults.dayNames, n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort, o = (d ? d.monthNames : null) || this._defaults.monthNames, p = -1, q = -1, r = -1, s = -1, t = !1, u = function(a) {
                var c = b.length > e + 1 && b.charAt(e + 1) === a;
                return c && e++, c;
            }, v = function(a) {
                var b = u(a), d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2, e = "y" === a ? d : 1, f = RegExp("^\\d{" + e + "," + d + "}"), g = c.substring(i).match(f);
                if (!g) throw "Missing number at position " + i;
                return i += g[0].length, parseInt(g[0], 10);
            }, w = function(b, d, e) {
                var f = -1, g = a.map(u(b) ? e : d, function(a, b) {
                    return [ [ b, a ] ];
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length);
                });
                if (a.each(g, function(a, b) {
                    var d = b[1];
                    return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, 
                    !1) : void 0;
                }), -1 !== f) return f + 1;
                throw "Unknown name at position " + i;
            }, x = function() {
                if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
                i++;
            };
            for (e = 0; b.length > e; e++) if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1; else switch (b.charAt(e)) {
              case "d":
                r = v("d");
                break;

              case "D":
                w("D", l, m);
                break;

              case "o":
                s = v("o");
                break;

              case "m":
                q = v("m");
                break;

              case "M":
                q = w("M", n, o);
                break;

              case "y":
                p = v("y");
                break;

              case "@":
                h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
                break;

              case "!":
                h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, 
                r = h.getDate();
                break;

              case "'":
                u("'") ? x() : t = !0;
                break;

              default:
                x();
            }
            if (c.length > i && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
            if (-1 === p ? p = new Date().getFullYear() : 100 > p && (p += new Date().getFullYear() - new Date().getFullYear() % 100 + (k >= p ? 0 : -100)), 
            s > -1) for (q = 1, r = s; !((f = this._getDaysInMonth(p, q - 1)) >= r); ) q++, 
            r -= f;
            if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
            return h;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(a, b, c) {
            if (!b) return "";
            var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = function(b) {
                var c = a.length > d + 1 && a.charAt(d + 1) === b;
                return c && d++, c;
            }, j = function(a, b, c) {
                var d = "" + b;
                if (i(a)) for (;c > d.length; ) d = "0" + d;
                return d;
            }, k = function(a, b, c, d) {
                return i(a) ? d[b] : c[b];
            }, l = "", m = !1;
            if (b) for (d = 0; a.length > d; d++) if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1; else switch (a.charAt(d)) {
              case "d":
                l += j("d", b.getDate(), 2);
                break;

              case "D":
                l += k("D", b.getDay(), e, f);
                break;

              case "o":
                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                l += j("m", b.getMonth() + 1, 2);
                break;

              case "M":
                l += k("M", b.getMonth(), g, h);
                break;

              case "y":
                l += i("y") ? b.getFullYear() : (10 > b.getFullYear() % 100 ? "0" : "") + b.getFullYear() % 100;
                break;

              case "@":
                l += b.getTime();
                break;

              case "!":
                l += 1e4 * b.getTime() + this._ticksTo1970;
                break;

              case "'":
                i("'") ? l += "'" : m = !0;
                break;

              default:
                l += a.charAt(d);
            }
            return l;
        },
        _possibleChars: function(a) {
            var b, c = "", d = !1, e = function(c) {
                var d = a.length > b + 1 && a.charAt(b + 1) === c;
                return d && b++, d;
            };
            for (b = 0; a.length > b; b++) if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1; else switch (a.charAt(b)) {
              case "d":
              case "m":
              case "y":
              case "@":
                c += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                e("'") ? c += "'" : d = !0;
                break;

              default:
                c += a.charAt(b);
            }
            return c;
        },
        _get: function(a, b) {
            return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b];
        },
        _setDateFromField: function(a, b) {
            if (a.input.val() !== a.lastVal) {
                var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e = this._getDefaultDate(a), f = e, g = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, d, g) || e;
                } catch (a) {
                    d = b ? "" : d;
                }
                a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), 
                a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, 
                this._adjustInstDate(a);
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date()));
        },
        _determineDate: function(b, c, d) {
            var e = function(a) {
                var b = new Date();
                return b.setDate(b.getDate() + a), b;
            }, f = function(c) {
                try {
                    return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b));
                } catch (a) {}
                for (var d = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date(), e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(c); i; ) {
                    switch (i[2] || "d") {
                      case "d":
                      case "D":
                        g += parseInt(i[1], 10);
                        break;

                      case "w":
                      case "W":
                        g += 7 * parseInt(i[1], 10);
                        break;

                      case "m":
                      case "M":
                        f += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f));
                        break;

                      case "y":
                      case "Y":
                        e += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f));
                    }
                    i = h.exec(c);
                }
                return new Date(e, f, g);
            }, g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
            return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), 
            g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g);
        },
        _daylightSavingAdjust: function(a) {
            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null;
        },
        _setDate: function(a, b, c) {
            var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
            a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), 
            a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), 
            this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a));
        },
        _getDate: function(a) {
            return !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
        },
        _attachHandlers: function(b) {
            var c = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\");
            b.dpDiv.find("[data-handler]").map(function() {
                var b = {
                    prev: function() {
                        a.datepicker._adjustDate(d, -c, "M");
                    },
                    next: function() {
                        a.datepicker._adjustDate(d, +c, "M");
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker();
                    },
                    today: function() {
                        a.datepicker._gotoToday(d);
                    },
                    selectDay: function() {
                        return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return a.datepicker._selectMonthYear(d, this, "M"), !1;
                    },
                    selectYear: function() {
                        return a.datepicker._selectMonthYear(d, this, "Y"), !1;
                    }
                };
                a(this).on(this.getAttribute("data-event"), b[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date(), P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())), Q = this._get(a, "isRTL"), R = this._get(a, "showButtonPanel"), S = this._get(a, "hideIfNoPrevNext"), T = this._get(a, "navigationAsDateFormat"), U = this._getNumberOfMonths(a), V = this._get(a, "showCurrentAtPos"), W = this._get(a, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), Z = this._getMinMaxDate(a, "min"), $ = this._getMinMaxDate(a, "max"), _ = a.drawMonth - V, aa = a.drawYear;
            if (0 > _ && (_ += 12, aa--), $) for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), 
            b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b; ) 0 > --_ && (_ = 11, 
            aa--);
            for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, 
            d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", 
            e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, 
            f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", 
            g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, 
            g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", 
            j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", 
            k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), 
            m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), 
            p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), 
            s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
                for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
                    if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", 
                    B = "", X) {
                        if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                          case 0:
                            B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                            break;

                          case U[1] - 1:
                            B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                            break;

                          default:
                            B += " ui-datepicker-group-middle", A = "";
                        }
                        B += "'>";
                    }
                    for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", 
                    C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", 
                    v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                    for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), 
                    F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, 
                    this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
                        for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", 
                        v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [ I ]) : [ !0, "" ], 
                        M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", 
                        I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                        B += K + "</tr>";
                    }
                    _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), 
                    x += B;
                }
                u += x;
            }
            return u += j, a._keyEvent = !1, u;
        },
        _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
            var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"), r = this._get(a, "changeYear"), s = this._get(a, "showMonthAfterYear"), t = "<div class='ui-datepicker-title'>", u = "";
            if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>"; else {
                for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                k = 0; 12 > k; k++) (!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                u += "</select>";
            }
            if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml) if (a.yearshtml = "", 
            f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>"; else {
                for (l = this._get(a, "yearRange").split(":"), m = new Date().getFullYear(), n = function(a) {
                    var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                    return isNaN(b) ? m : b;
                }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, 
                p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null;
            }
            return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), 
            t += "</div>";
        },
        _adjustInstDate: function(a, b, c) {
            var d = a.selectedYear + ("Y" === c ? b : 0), e = a.selectedMonth + ("M" === c ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
            a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), 
            ("M" === c || "Y" === c) && this._notifyChange(a);
        },
        _restrictMinMax: function(a, b) {
            var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && c > b ? c : b;
            return d && e > d ? d : e;
        },
        _notifyChange: function(a) {
            var b = this._get(a, "onChangeMonthYear");
            b && b.apply(a.input ? a.input[0] : null, [ a.selectedYear, a.selectedMonth + 1, a ]);
        },
        _getNumberOfMonths: function(a) {
            var b = this._get(a, "numberOfMonths");
            return null == b ? [ 1, 1 ] : "number" == typeof b ? [ 1, b ] : b;
        },
        _getMinMaxDate: function(a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null);
        },
        _getDaysInMonth: function(a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
        },
        _getFirstDayOfMonth: function(a, b) {
            return new Date(a, b, 1).getDay();
        },
        _canAdjustMonth: function(a, b, c, d) {
            var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
            return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), 
            this._isInRange(a, f);
        },
        _isInRange: function(a, b) {
            var c, d, e = this._getMinMaxDate(a, "min"), f = this._getMinMaxDate(a, "max"), g = null, h = null, i = this._get(a, "yearRange");
            return i && (c = i.split(":"), d = new Date().getFullYear(), g = parseInt(c[0], 10), 
            h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), 
            (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear());
        },
        _getFormatConfig: function(a) {
            var b = this._get(a, "shortYearCutoff");
            return b = "string" != typeof b ? b : new Date().getFullYear() % 100 + parseInt(b, 10), 
            {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            };
        },
        _formatDate: function(a, b, c, d) {
            b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
            var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a));
        }
    }), a.fn.datepicker = function(b) {
        if (!this.length) return this;
        a.datepicker.initialized || (a(document).on("mousedown", a.datepicker._checkExternalClick), 
        a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
        var c = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c)) : this.each(function() {
            "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this ].concat(c)) : a.datepicker._attachDatepicker(this, b);
        }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [ this[0] ].concat(c));
    }, a.datepicker = new d(), a.datepicker.initialized = !1, a.datepicker.uuid = new Date().getTime(), 
    a.datepicker.version = "1.12.1", a.datepicker, a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var q = !1;
    a(document).on("mouseup", function() {
        q = !1;
    }), a.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.on("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a);
            }).on("click." + this.widgetName, function(c) {
                return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), 
                c.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(b) {
            if (!q) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                var c = this, d = 1 === b.which, e = !("string" != typeof this.options.cancel || !b.target.nodeName) && a(b.target).closest(this.options.cancel).length;
                return !(d && !e && this._mouseCapture(b)) || (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(b), 
                !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(a) {
                    return c._mouseMove(a);
                }, this._mouseUpDelegate = function(a) {
                    return c._mouseUp(a);
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                b.preventDefault(), q = !0, !0));
            }
        },
        _mouseMove: function(b) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b);
                if (!b.which) if (b.originalEvent.altKey || b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(b);
            }
            return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), 
            b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b), 
            this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted);
        },
        _mouseUp: function(b) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(b)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
            delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, q = !1, b.preventDefault();
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    }), a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([ c, d[e] ]);
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)) for (e = 0; f.length > e; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c);
        }
    }, a.ui.safeBlur = function(b) {
        b && "body" !== b.nodeName.toLowerCase() && a(b).trigger("blur");
    }, a.widget("ui.draggable", a.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), 
            this._setHandleClassName(), this._mouseInit();
        },
        _setOption: function(a, b) {
            this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), 
            void this._mouseDestroy());
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(b), 
            !!this.handle && (this._blurActiveElement(b), this._blockFrames(!0 === c.iframeFix ? "iframe" : c.iframeFix), 
            !0));
        },
        _blockFrames: function(b) {
            this.iframeBlocks = this.document.find(b).map(function() {
                var b = a(this);
                return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function(b) {
            var c = a.ui.safeActiveElement(this.document[0]);
            a(b.target).closest(c).length || a.ui.safeBlur(c);
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this._addClass(this.helper, "ui-draggable-dragging"), 
            this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), 
            this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === a(this).css("position");
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(b), 
            this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, 
            this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), 
            this._setContainment(), !1 === this._trigger("start", b) ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), 
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0);
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            };
        },
        _mouseDrag: function(b, c) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), 
            this.positionAbs = this._convertPositionTo("absolute"), !c) {
                var d = this._uiHash();
                if (!1 === this._trigger("drag", b, d)) return this._mouseUp(new a.Event("mouseup", b)), 
                !1;
                this.position = d.position;
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", 
            a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
        },
        _mouseStop: function(b) {
            var c = this, d = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), 
            this.dropped && (d = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== c._trigger("stop", b) && c._clear();
            }) : !1 !== this._trigger("stop", b) && this._clear(), !1;
        },
        _mouseUp: function(b) {
            return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), 
            this.handleElement.is(b.target) && this.element.trigger("focus"), a.ui.mouse.prototype._mouseUp.call(this, b);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new a.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this;
        },
        _getHandle: function(b) {
            return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, 
            this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper), e = d ? a(c.helper.apply(this.element[0], [ b ])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
            return e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), 
            d && e[0] === this.element[0] && this._setPositionRelative(), e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"), 
            e;
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), 
            "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0];
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset(), c = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), 
            b.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var a = this.element.position(), b = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options, f = this.document[0];
            return this.relativeContainer = null, e.containment ? "window" === e.containment ? void (this.containment = [ a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : "document" === e.containment ? void (this.containment = [ 0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]) : e.containment.constructor === Array ? void (this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), 
            c = a(e.containment), void ((d = c[0]) && (b = /(scroll|auto)/.test(c.css("overflow")), 
            this.containment = [ (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relativeContainer = c))) : void (this.containment = null);
        },
        _convertPositionTo: function(a, b) {
            b || (b = this.position);
            var c = "absolute" === a ? 1 : -1, d = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
            };
        },
        _generatePosition: function(a, b) {
            var c, d, e, f, g = this.options, h = this._isRootNode(this.scrollParent[0]), i = a.pageX, j = a.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), 
            c = [ this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top ]) : c = this.containment, 
            a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), 
            a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), 
            a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, 
            j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, 
            f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, 
            i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), 
            "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), 
            {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [ c, d, this ], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), 
            d.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, d);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.sortables = [], a(d.options.connectToSortable).each(function() {
                var c = a(this).sortable("instance");
                c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e));
            });
        },
        stop: function(b, c, d) {
            var e = a.extend({}, c, {
                item: d.element
            });
            d.cancelHelperRemoval = !1, a.each(d.sortables, function() {
                var a = this;
                a.isOver ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, 
                a._storedCSS = {
                    position: a.placeholder.css("position"),
                    top: a.placeholder.css("top"),
                    left: a.placeholder.css("left")
                }, a._mouseStop(b), a.options.helper = a.options._helper) : (a.cancelHelperRemoval = !0, 
                a._trigger("deactivate", b, e));
            });
        },
        drag: function(b, c, d) {
            a.each(d.sortables, function() {
                var e = !1, f = this;
                f.positionAbs = d.positionAbs, f.helperProportions = d.helperProportions, f.offset.click = d.offset.click, 
                f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
                    return this.positionAbs = d.positionAbs, this.helperProportions = d.helperProportions, 
                    this.offset.click = d.offset.click, this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1), 
                    e;
                })), e ? (f.isOver || (f.isOver = 1, d._parent = c.helper.parent(), f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), 
                f.options._helper = f.options.helper, f.options.helper = function() {
                    return c.helper[0];
                }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), 
                f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, 
                f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, 
                d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
                    this.refreshPositions();
                }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), 
                c.position = f.position)) : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, 
                f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), 
                f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, 
                f.placeholder && f.placeholder.remove(), c.helper.appendTo(d._parent), d._refreshOffsets(b), 
                c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, 
                a.each(d.sortables, function() {
                    this.refreshPositions();
                }));
            });
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function(b, c, d) {
            var e = a("body"), f = d.options;
            e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor);
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._cursor && a("body").css("cursor", e._cursor);
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c, d) {
            var e = a(c.helper), f = d.options;
            e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity);
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._opacity && a(c.helper).css("opacity", e._opacity);
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function(a, b, c) {
            c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), 
            c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset());
        },
        drag: function(b, c, d) {
            var e = d.options, f = !1, g = d.scrollParentNotHidden[0], h = d.document[0];
            g !== h && "HTML" !== g.tagName ? (e.axis && "x" === e.axis || (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity ? g.scrollTop = f = g.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), 
            e.axis && "y" === e.axis || (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - a(h).scrollTop() < e.scrollSensitivity ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), 
            e.axis && "y" === e.axis || (b.pageX - a(h).scrollLeft() < e.scrollSensitivity ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))), 
            !1 !== f && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b);
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function(b, c, d) {
            var e = d.options;
            d.snapElements = [], a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
                var b = a(this), c = b.offset();
                this !== d.element[0] && d.snapElements.push({
                    item: this,
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: c.top,
                    left: c.left
                });
            });
        },
        drag: function(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o = d.options, p = o.snapTolerance, q = c.offset.left, r = q + d.helperProportions.width, s = c.offset.top, t = s + d.helperProportions.height;
            for (m = d.snapElements.length - 1; m >= 0; m--) i = d.snapElements[m].left - d.margins.left, 
            j = i + d.snapElements[m].width, k = d.snapElements[m].top - d.margins.top, l = k + d.snapElements[m].height, 
            i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item) ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                snapItem: d.snapElements[m].item
            })), d.snapElements[m].snapping = !1) : ("inner" !== o.snapMode && (e = p >= Math.abs(k - t), 
            f = p >= Math.abs(l - s), g = p >= Math.abs(i - r), h = p >= Math.abs(j - q), e && (c.position.top = d._convertPositionTo("relative", {
                top: k - d.helperProportions.height,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: i - d.helperProportions.width
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: j
            }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = p >= Math.abs(k - s), 
            f = p >= Math.abs(l - t), g = p >= Math.abs(i - q), h = p >= Math.abs(j - r), e && (c.position.top = d._convertPositionTo("relative", {
                top: k,
                left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
                top: l - d.helperProportions.height,
                left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: i
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
                top: 0,
                left: j - d.helperProportions.width
            }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                snapItem: d.snapElements[m].item
            })), d.snapElements[m].snapping = e || f || g || h || n);
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function(b, c, d) {
            var e, f = d.options, g = a.makeArray(a(f.stack)).sort(function(b, c) {
                return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
            });
            g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
                a(this).css("zIndex", e + b);
            }), this.css("zIndex", e + g.length));
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c, d) {
            var e = a(c.helper), f = d.options;
            e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex);
        },
        stop: function(b, c, d) {
            var e = d.options;
            e._zIndex && a(c.helper).css("zIndex", e._zIndex);
        }
    }), a.ui.draggable, a.widget("ui.resizable", a.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(a) {
            return parseFloat(a) || 0;
        },
        _isNumber: function(a) {
            return !isNaN(parseFloat(a));
        },
        _hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
            return b[d] > 0 || (b[d] = 1, e = b[d] > 0, b[d] = 0, e);
        },
        _create: function() {
            var b, c = this.options, d = this;
            this._addClass("ui-resizable"), a.extend(this, {
                _aspectRatio: !!c.aspectRatio,
                aspectRatio: c.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), 
            this.elementIsWrapper = !0, b = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(b), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), 
            this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(b), this._proportionallyResize()), this._setupHandles(), 
            c.autoHide && a(this.element).on("mouseenter", function() {
                c.disabled || (d._removeClass("ui-resizable-autohide"), d._handles.show());
            }).on("mouseleave", function() {
                c.disabled || d.resizing || (d._addClass("ui-resizable-autohide"), d._handles.hide());
            }), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var b, c = function(b) {
                a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                position: b.css("position"),
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: b.css("top"),
                left: b.css("left")
            }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), 
            c(this.originalElement), this;
        },
        _setOption: function(a, b) {
            switch (this._super(a, b), a) {
              case "handles":
                this._removeHandles(), this._setupHandles();
            }
        },
        _setupHandles: function() {
            var b, c, d, e, f, g = this.options, h = this;
            if (this.handles = g.handles || (a(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = a(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), 
            d = this.handles.split(","), this.handles = {}, c = 0; d.length > c; c++) b = a.trim(d[c]), 
            e = "ui-resizable-" + b, f = a("<div>"), this._addClass(f, "ui-resizable-handle " + e), 
            f.css({
                zIndex: g.zIndex
            }), this.handles[b] = ".ui-resizable-" + b, this.element.append(f);
            this._renderAxis = function(b) {
                var c, d, e, f;
                b = b || this.element;
                for (c in this.handles) this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), 
                this._on(this.handles[c], {
                    mousedown: h._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), 
                f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = [ "padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left" ].join(""), 
                b.css(e, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c]);
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), 
            this._handles.disableSelection(), this._handles.on("mouseover", function() {
                h.resizing || (this.className && (f = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), 
                h.axis = f && f[1] ? f[1] : "se");
            }), g.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
        },
        _removeHandles: function() {
            this._handles.remove();
        },
        _mouseCapture: function(b) {
            var c, d, e = !1;
            for (c in this.handles) ((d = a(this.handles[c])[0]) === b.target || a.contains(d, b.target)) && (e = !0);
            return !this.options.disabled && e;
        },
        _mouseStart: function(b) {
            var c, d, e, f = this.options, g = this.element;
            return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), 
            d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, 
            d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: c,
                top: d
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: g.width(),
                height: g.height()
            }, this.originalSize = this._helper ? {
                width: g.outerWidth(),
                height: g.outerHeight()
            } : {
                width: g.width(),
                height: g.height()
            }, this.sizeDiff = {
                width: g.outerWidth() - g.width(),
                height: g.outerHeight() - g.height()
            }, this.originalPosition = {
                left: c,
                top: d
            }, this.originalMousePosition = {
                left: b.pageX,
                top: b.pageY
            }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, 
            e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), 
            this._addClass("ui-resizable-resizing"), this._propagate("start", b), !0;
        },
        _mouseDrag: function(b) {
            var c, d, e = this.originalMousePosition, f = this.axis, g = b.pageX - e.left || 0, h = b.pageY - e.top || 0, i = this._change[f];
            return this._updatePrevProperties(), !!i && (c = i.apply(this, [ b, g, h ]), this._updateVirtualBoundaries(b.shiftKey), 
            (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), 
            this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
            a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), 
            this._applyChanges()), !1);
        },
        _mouseStop: function(b) {
            this.resizing = !1;
            var c, d, e, f, g, h, i, j = this.options, k = this;
            return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), 
            e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, 
            g = {
                width: k.helper.width() - f,
                height: k.helper.height() - e
            }, h = parseFloat(k.element.css("left")) + (k.position.left - k.originalPosition.left) || null, 
            i = parseFloat(k.element.css("top")) + (k.position.top - k.originalPosition.top) || null, 
            j.animate || this.element.css(a.extend(g, {
                top: i,
                left: h
            })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), 
            a("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", b), 
            this._helper && this.helper.remove(), !1;
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },
        _applyChanges: function() {
            var a = {};
            return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), 
            this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), 
            this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), 
            this.helper.css(a), a;
        },
        _updateVirtualBoundaries: function(a) {
            var b, c, d, e, f, g = this.options;
            f = {
                minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
                maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
                minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
                maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
            }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, 
            c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), 
            d > f.minHeight && (f.minHeight = d), f.maxWidth > c && (f.maxWidth = c), f.maxHeight > e && (f.maxHeight = e)), 
            this._vBoundaries = f;
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), 
            this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), 
            this._isNumber(a.width) && (this.size.width = a.width);
        },
        _updateRatio: function(a) {
            var b = this.position, c = this.size, d = this.axis;
            return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), 
            "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), 
            a.left = b.left + (c.width - a.width)), a;
        },
        _respectSize: function(a) {
            var b = this._vBoundaries, c = this.axis, d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width, e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height, f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width, g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height, h = this.originalPosition.left + this.originalSize.width, i = this.originalPosition.top + this.originalSize.height, j = /sw|nw|w/.test(c), k = /nw|ne|n/.test(c);
            return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), 
            e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), 
            g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, 
            a;
        },
        _getPaddingPlusBorderDimensions: function(a) {
            for (var b = 0, c = [], d = [ a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth") ], e = [ a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft") ]; 4 > b; b++) c[b] = parseFloat(d[b]) || 0, 
            c[b] += parseFloat(e[b]) || 0;
            return {
                height: c[0] + c[2],
                width: c[1] + c[3]
            };
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var a, b = 0, c = this.helper || this.element; this._proportionallyResizeElements.length > b; b++) a = this._proportionallyResizeElements[b], 
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), 
            a.css({
                height: c.height() - this.outerDimensions.height || 0,
                width: c.width() - this.outerDimensions.width || 0
            });
        },
        _renderProxy: function() {
            var b = this.element, c = this.options;
            this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), 
            this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++c.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },
        _change: {
            e: function(a, b) {
                return {
                    width: this.originalSize.width + b
                };
            },
            w: function(a, b) {
                var c = this.originalSize;
                return {
                    left: this.originalPosition.left + b,
                    width: c.width - b
                };
            },
            n: function(a, b, c) {
                var d = this.originalSize;
                return {
                    top: this.originalPosition.top + c,
                    height: d.height - c
                };
            },
            s: function(a, b, c) {
                return {
                    height: this.originalSize.height + c
                };
            },
            se: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ b, c, d ]));
            },
            sw: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ b, c, d ]));
            },
            ne: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ b, c, d ]));
            },
            nw: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ b, c, d ]));
            }
        },
        _propagate: function(b, c) {
            a.ui.plugin.call(this, b, [ c, this.ui() ]), "resize" !== b && this._trigger(b, c, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), a.ui.plugin.add("resizable", "animate", {
        stop: function(b) {
            var c = a(this).resizable("instance"), d = c.options, e = c._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, h = f ? 0 : c.sizeDiff.width, i = {
                width: c.size.width - h,
                height: c.size.height - g
            }, j = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, k = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(i, k && j ? {
                top: k,
                left: j
            } : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function() {
                    var d = {
                        width: parseFloat(c.element.css("width")),
                        height: parseFloat(c.element.css("height")),
                        top: parseFloat(c.element.css("top")),
                        left: parseFloat(c.element.css("left"))
                    };
                    e && e.length && a(e[0]).css({
                        width: d.width,
                        height: d.height
                    }), c._updateCache(d), c._propagate("resize", b);
                }
            });
        }
    }), a.ui.plugin.add("resizable", "containment", {
        start: function() {
            var b, c, d, e, f, g, h, i = a(this).resizable("instance"), j = i.options, k = i.element, l = j.containment, m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
            m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
                left: 0,
                top: 0
            }, i.containerPosition = {
                left: 0,
                top: 0
            }, i.parentData = {
                element: a(document),
                left: 0,
                top: 0,
                width: a(document).width(),
                height: a(document).height() || document.body.parentNode.scrollHeight
            }) : (b = a(m), c = [], a([ "Top", "Right", "Left", "Bottom" ]).each(function(a, d) {
                c[a] = i._num(b.css("padding" + d));
            }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
                height: b.innerHeight() - c[3],
                width: b.innerWidth() - c[1]
            }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, 
            g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, 
            i.parentData = {
                element: m,
                left: d.left,
                top: d.top,
                width: g,
                height: h
            }));
        },
        resize: function(b) {
            var c, d, e, f, g = a(this).resizable("instance"), h = g.options, i = g.containerOffset, j = g.position, k = g._aspectRatio || b.shiftKey, l = {
                top: 0,
                left: 0
            }, m = g.containerElement, n = !0;
            m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), 
            k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), 
            j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), 
            k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), 
            e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), 
            e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, 
            g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), 
            d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), 
            c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, 
            k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, 
            k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, 
            g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height);
        },
        stop: function() {
            var b = a(this).resizable("instance"), c = b.options, d = b.containerOffset, e = b.containerPosition, f = b.containerElement, g = a(b.helper), h = g.offset(), i = g.outerWidth() - b.sizeDiff.width, j = g.outerHeight() - b.sizeDiff.height;
            b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: j
            });
        }
    }), a.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var b = a(this).resizable("instance"), c = b.options;
            a(c.alsoResize).each(function() {
                var b = a(this);
                b.data("ui-resizable-alsoresize", {
                    width: parseFloat(b.width()),
                    height: parseFloat(b.height()),
                    left: parseFloat(b.css("left")),
                    top: parseFloat(b.css("top"))
                });
            });
        },
        resize: function(b, c) {
            var d = a(this).resizable("instance"), e = d.options, f = d.originalSize, g = d.originalPosition, h = {
                height: d.size.height - f.height || 0,
                width: d.size.width - f.width || 0,
                top: d.position.top - g.top || 0,
                left: d.position.left - g.left || 0
            };
            a(e.alsoResize).each(function() {
                var b = a(this), d = a(this).data("ui-resizable-alsoresize"), e = {}, f = b.parents(c.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                a.each(f, function(a, b) {
                    var c = (d[b] || 0) + (h[b] || 0);
                    c && c >= 0 && (e[b] = c || null);
                }), b.css(e);
            });
        },
        stop: function() {
            a(this).removeData("ui-resizable-alsoresize");
        }
    }), a.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var b = a(this).resizable("instance"), c = b.size;
            b.ghost = b.originalElement.clone(), b.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: c.height,
                width: c.width,
                margin: 0,
                left: 0,
                top: 0
            }), b._addClass(b.ghost, "ui-resizable-ghost"), !1 !== a.uiBackCompat && "string" == typeof b.options.ghost && b.ghost.addClass(this.options.ghost), 
            b.ghost.appendTo(b.helper);
        },
        resize: function() {
            var b = a(this).resizable("instance");
            b.ghost && b.ghost.css({
                position: "relative",
                height: b.size.height,
                width: b.size.width
            });
        },
        stop: function() {
            var b = a(this).resizable("instance");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0));
        }
    }), a.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var b, c = a(this).resizable("instance"), d = c.options, e = c.size, f = c.originalSize, g = c.originalPosition, h = c.axis, i = "number" == typeof d.grid ? [ d.grid, d.grid ] : d.grid, j = i[0] || 1, k = i[1] || 1, l = Math.round((e.width - f.width) / j) * j, m = Math.round((e.height - f.height) / k) * k, n = f.width + l, o = f.height + m, p = d.maxWidth && n > d.maxWidth, q = d.maxHeight && o > d.maxHeight, r = d.minWidth && d.minWidth > n, s = d.minHeight && d.minHeight > o;
            d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, 
            c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, 
            c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), 
            o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, 
            c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, 
            c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n));
        }
    }), a.ui.resizable, a.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(b) {
                    var c = a(this).css(b).offset().top;
                    0 > c && a(this).css("top", b.top - c);
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), 
            this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), 
            this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), 
            this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), 
            this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1, 
            this._trackFocus();
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0);
        },
        _destroy: function() {
            var a, b = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), 
            this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
            a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: a.noop,
        enable: a.noop,
        close: function(b) {
            var c = this;
            this._isOpen && !1 !== this._trigger("beforeClose", b) && (this._isOpen = !1, this._focusedElement = null, 
            this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])), 
            this._hide(this.uiDialog, this.options.hide, function() {
                c._trigger("close", b);
            }));
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(b, c) {
            var d = !1, e = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +a(this).css("z-index");
            }).get(), f = Math.max.apply(null, e);
            return f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1), 
            d = !0), d && !c && this._trigger("focus", b), d;
        },
        open: function() {
            var b = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, 
            this.opener = a(a.ui.safeActiveElement(this.document[0])), this._size(), this._position(), 
            this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), 
            this._show(this.uiDialog, this.options.show, function() {
                b._focusTabbable(), b._trigger("focus");
            }), this._makeFocusTarget(), void this._trigger("open"));
        },
        _focusTabbable: function() {
            var a = this._focusedElement;
            a || (a = this.element.find("[autofocus]")), a.length || (a = this.element.find(":tabbable")), 
            a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), 
            a.length || (a = this.uiDialog), a.eq(0).trigger("focus");
        },
        _keepFocus: function(b) {
            function c() {
                var b = a.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === b || a.contains(this.uiDialog[0], b) || this._focusTabbable();
            }
            b.preventDefault(), c.call(this), this._delay(c);
        },
        _createWrapper: function() {
            this.uiDialog = a("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), 
            this._on(this.uiDialog, {
                keydown: function(b) {
                    if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), 
                    void this.close(b);
                    if (b.keyCode === a.ui.keyCode.TAB && !b.isDefaultPrevented()) {
                        var c = this.uiDialog.find(":tabbable"), d = c.filter(":first"), e = c.filter(":last");
                        b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function() {
                            e.trigger("focus");
                        }), b.preventDefault()) : (this._delay(function() {
                            d.trigger("focus");
                        }), b.preventDefault());
                    }
                },
                mousedown: function(a) {
                    this._moveToTop(a) && this._focusTabbable();
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            });
        },
        _createTitlebar: function() {
            var b;
            this.uiDialogTitlebar = a("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), 
            this._on(this.uiDialogTitlebar, {
                mousedown: function(b) {
                    a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                }
            }), this.uiDialogTitlebarClose = a("<button type='button'></button>").button({
                label: a("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), 
            this._on(this.uiDialogTitlebarClose, {
                click: function(a) {
                    a.preventDefault(), this.close(a);
                }
            }), b = a("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(b, "ui-dialog-title"), 
            this._title(b), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": b.attr("id")
            });
        },
        _title: function(a) {
            this.options.title ? a.text(this.options.title) : a.html("&#160;");
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = a("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), 
            this.uiButtonSet = a("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), 
            this._createButtons();
        },
        _createButtons: function() {
            var b = this, c = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (a.each(c, function(c, d) {
                var e, f;
                d = a.isFunction(d) ? {
                    click: d,
                    text: c
                } : d, d = a.extend({
                    type: "button"
                }, d), e = d.click, f = {
                    icon: d.icon,
                    iconPosition: d.iconPosition,
                    showLabel: d.showLabel,
                    icons: d.icons,
                    text: d.text
                }, delete d.click, delete d.icon, delete d.iconPosition, delete d.showLabel, delete d.icons, 
                "boolean" == typeof d.text && delete d.text, a("<button></button>", d).button(f).appendTo(b.uiButtonSet).on("click", function() {
                    e.apply(b.element[0], arguments);
                });
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog));
        },
        _makeDraggable: function() {
            function b(a) {
                return {
                    position: a.position,
                    offset: a.offset
                };
            }
            var c = this, d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(d, e) {
                    c._addClass(a(this), "ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e));
                },
                drag: function(a, d) {
                    c._trigger("drag", a, b(d));
                },
                stop: function(e, f) {
                    var g = f.offset.left - c.document.scrollLeft(), h = f.offset.top - c.document.scrollTop();
                    d.position = {
                        my: "left top",
                        at: "left" + (g >= 0 ? "+" : "") + g + " top" + (h >= 0 ? "+" : "") + h,
                        of: c.window
                    }, c._removeClass(a(this), "ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f));
                }
            });
        },
        _makeResizable: function() {
            function b(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                };
            }
            var c = this, d = this.options, e = d.resizable, f = this.uiDialog.css("position"), g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: g,
                start: function(d, e) {
                    c._addClass(a(this), "ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e));
                },
                resize: function(a, d) {
                    c._trigger("resize", a, b(d));
                },
                stop: function(e, f) {
                    var g = c.uiDialog.offset(), h = g.left - c.document.scrollLeft(), i = g.top - c.document.scrollTop();
                    d.height = c.uiDialog.height(), d.width = c.uiDialog.width(), d.position = {
                        my: "left top",
                        at: "left" + (h >= 0 ? "+" : "") + h + " top" + (i >= 0 ? "+" : "") + i,
                        of: c.window
                    }, c._removeClass(a(this), "ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f));
                }
            }).css("position", f);
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(b) {
                    this._makeFocusTarget(), this._focusedElement = a(b.target);
                }
            });
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
            var b = this._trackingInstances(), c = a.inArray(this, b);
            -1 !== c && b.splice(c, 1);
        },
        _trackingInstances: function() {
            var a = this.document.data("ui-dialog-instances");
            return a || (a = [], this.document.data("ui-dialog-instances", a)), a;
        },
        _minHeight: function() {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height);
        },
        _position: function() {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide();
        },
        _setOptions: function(b) {
            var c = this, d = !1, e = {};
            a.each(b, function(a, b) {
                c._setOption(a, b), a in c.sizeRelatedOptions && (d = !0), a in c.resizableRelatedOptions && (e[a] = b);
            }), d && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", e);
        },
        _setOption: function(b, c) {
            var d, e, f = this.uiDialog;
            "disabled" !== b && (this._super(b, c), "appendTo" === b && this.uiDialog.appendTo(this._appendTo()), 
            "buttons" === b && this._createButtons(), "closeText" === b && this.uiDialogTitlebarClose.button({
                label: a("<a>").text("" + this.options.closeText).html()
            }), "draggable" === b && (d = f.is(":data(ui-draggable)"), d && !c && f.draggable("destroy"), 
            !d && c && this._makeDraggable()), "position" === b && this._position(), "resizable" === b && (e = f.is(":data(ui-resizable)"), 
            e && !c && f.resizable("destroy"), e && "string" == typeof c && f.resizable("option", "handles", c), 
            e || !1 === c || this._makeResizable()), "title" === b && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function() {
            var a, b, c, d = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                height: "auto",
                width: d.width
            }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", 
            "auto" === d.height ? this.element.css({
                minHeight: b,
                maxHeight: c,
                height: "auto"
            }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var b = a(this);
                return a("<div>").css({
                    position: "absolute",
                    width: b.outerWidth(),
                    height: b.outerHeight()
                }).appendTo(b.parent()).offset(b.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function(b) {
            return !!a(b.target).closest(".ui-dialog").length || !!a(b.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var b = !0;
                this._delay(function() {
                    b = !1;
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(a) {
                        b || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                    }
                }), this.overlay = a("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), 
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var a = this.document.data("ui-dialog-overlays") - 1;
                a ? this.document.data("ui-dialog-overlays", a) : (this._off(this.document, "focusin"), 
                this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
            }
        }
    }), !1 !== a.uiBackCompat && a.widget("ui.dialog", a.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function(a, b) {
            "dialogClass" === a && this.uiDialog.removeClass(this.options.dialogClass).addClass(b), 
            this._superApply(arguments);
        }
    }), a.ui.dialog, a.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var b, c = this.options, d = c.accept;
            this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(a) {
                return a.is(d);
            }, this.proportions = function() {
                return arguments.length ? void (b = arguments[0]) : b || (b = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                });
            }, this._addToManager(c.scope), c.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function(b) {
            a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || [], a.ui.ddmanager.droppables[b].push(this);
        },
        _splice: function(a) {
            for (var b = 0; a.length > b; b++) a[b] === this && a.splice(b, 1);
        },
        _destroy: function() {
            var b = a.ui.ddmanager.droppables[this.options.scope];
            this._splice(b);
        },
        _setOption: function(b, c) {
            if ("accept" === b) this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c);
            }; else if ("scope" === b) {
                var d = a.ui.ddmanager.droppables[this.options.scope];
                this._splice(d), this._addToManager(c);
            }
            this._super(b, c);
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this._addActiveClass(), c && this._trigger("activate", b, this.ui(c));
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this._removeActiveClass(), c && this._trigger("deactivate", b, this.ui(c));
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this._addHoverClass(), 
            this._trigger("over", b, this.ui(c)));
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this._removeHoverClass(), 
            this._trigger("out", b, this.ui(c)));
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current, e = !1;
            return !(!d || (d.currentItem || d.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var c = a(this).droppable("instance");
                return c.options.greedy && !c.options.disabled && c.options.scope === d.options.scope && c.accept.call(c.element[0], d.currentItem || d.element) && r(d, a.extend(c, {
                    offset: c.element.offset()
                }), c.options.tolerance, b) ? (e = !0, !1) : void 0;
            }), !e && (!!this.accept.call(this.element[0], d.currentItem || d.element) && (this._removeActiveClass(), 
            this._removeHoverClass(), this._trigger("drop", b, this.ui(d)), this.element)));
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            };
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover");
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active");
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active");
        }
    });
    var r = a.ui.intersect = function() {
        function a(a, b, c) {
            return a >= b && b + c > a;
        }
        return function(b, c, d, e) {
            if (!c.offset) return !1;
            var f = (b.positionAbs || b.position.absolute).left + b.margins.left, g = (b.positionAbs || b.position.absolute).top + b.margins.top, h = f + b.helperProportions.width, i = g + b.helperProportions.height, j = c.offset.left, k = c.offset.top, l = j + c.proportions().width, m = k + c.proportions().height;
            switch (d) {
              case "fit":
                return f >= j && l >= h && g >= k && m >= i;

              case "intersect":
                return f + b.helperProportions.width / 2 > j && l > h - b.helperProportions.width / 2 && g + b.helperProportions.height / 2 > k && m > i - b.helperProportions.height / 2;

              case "pointer":
                return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);

              case "touch":
                return (g >= k && m >= g || i >= k && m >= i || k > g && i > m) && (f >= j && l >= f || h >= j && l >= h || j > f && h > l);

              default:
                return !1;
            }
        };
    }();
    a.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(b, c) {
            var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null, h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            a: for (d = 0; f.length > d; d++) if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                for (e = 0; h.length > e; e++) if (h[e] === f[d].element[0]) {
                    f[d].proportions().height = 0;
                    continue a;
                }
                f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), 
                f[d].offset = f[d].element.offset(), f[d].proportions({
                    width: f[d].element[0].offsetWidth,
                    height: f[d].element[0].offsetHeight
                }));
            }
        },
        drop: function(b, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && r(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, 
                this.isover = !1, this._deactivate.call(this, c)));
            }), d;
        },
        dragStart: function(b, c) {
            b.element.parentsUntil("body").on("scroll.droppable", function() {
                b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
            });
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, e, f, g = r(b, this, this.options.tolerance, c), h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                    h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a(this).droppable("instance").options.scope === e;
                    }), f.length && (d = a(f[0]).droppable("instance"), d.greedyChild = "isover" === h)), 
                    d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, 
                    this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), 
                    d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)));
                }
            });
        },
        dragStop: function(b, c) {
            b.element.parentsUntil("body").off("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
        }
    }, !1 !== a.uiBackCompat && a.widget("ui.droppable", a.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
        }
    }), a.ui.droppable, a.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = a("<div>").appendTo(this.element), 
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
        },
        value: function(a) {
            return void 0 === a ? this.options.value : (this.options.value = this._constrainedValue(a), 
            void this._refreshValue());
        },
        _constrainedValue: function(a) {
            return void 0 === a && (a = this.options.value), this.indeterminate = !1 === a, 
            "number" != typeof a && (a = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, a));
        },
        _setOptions: function(a) {
            var b = a.value;
            delete a.value, this._super(a), this.options.value = this._constrainedValue(b), 
            this._refreshValue();
        },
        _setOption: function(a, b) {
            "max" === a && (b = Math.max(this.min, b)), this._super(a, b);
        },
        _setOptionDisabled: function(a) {
            this._super(a), this.element.attr("aria-disabled", a), this._toggleClass(null, "ui-state-disabled", !!a);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var b = this.options.value, c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || b > this.min).width(c.toFixed(0) + "%"), 
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, b === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), 
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div>").appendTo(this.valueDiv), 
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": b
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== b && (this.oldValue = b, 
            this._trigger("change")), b === this.options.max && this._trigger("complete");
        }
    }), a.widget("ui.selectable", a.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var b = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                b.elementPos = a(b.element[0]).offset(), b.selectees = a(b.options.filter, b.element[0]), 
                b._addClass(b.selectees, "ui-selectee"), b.selectees.each(function() {
                    var c = a(this), d = c.offset(), e = {
                        left: d.left - b.elementPos.left,
                        top: d.top - b.elementPos.top
                    };
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: c,
                        left: e.left,
                        top: e.top,
                        right: e.left + c.outerWidth(),
                        bottom: e.top + c.outerHeight(),
                        startselected: !1,
                        selected: c.hasClass("ui-selected"),
                        selecting: c.hasClass("ui-selecting"),
                        unselecting: c.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this._mouseInit(), this.helper = a("<div>"), this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function(b) {
            var c = this, d = this.options;
            this.opos = [ b.pageX, b.pageY ], this.elementPos = a(this.element[0]).offset(), 
            this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), 
            a(d.appendTo).append(this.helper), this.helper.css({
                left: b.pageX,
                top: b.pageY,
                width: 0,
                height: 0
            }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var d = a.data(this, "selectable-item");
                d.startselected = !0, b.metaKey || b.ctrlKey || (c._removeClass(d.$element, "ui-selected"), 
                d.selected = !1, c._addClass(d.$element, "ui-unselecting"), d.unselecting = !0, 
                c._trigger("unselecting", b, {
                    unselecting: d.element
                }));
            }), a(b.target).parents().addBack().each(function() {
                var d, e = a.data(this, "selectable-item");
                return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), 
                c._removeClass(e.$element, d ? "ui-unselecting" : "ui-selected")._addClass(e.$element, d ? "ui-selecting" : "ui-unselecting"), 
                e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {
                    selecting: e.element
                }) : c._trigger("unselecting", b, {
                    unselecting: e.element
                }), !1) : void 0;
            }));
        },
        _mouseDrag: function(b) {
            if (this.dragged = !0, !this.options.disabled) {
                var c, d = this, e = this.options, f = this.opos[0], g = this.opos[1], h = b.pageX, i = b.pageY;
                return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                    left: f,
                    top: g,
                    width: h - f,
                    height: i - g
                }), this.selectees.each(function() {
                    var c = a.data(this, "selectable-item"), j = !1, k = {};
                    c && c.element !== d.element[0] && (k.left = c.left + d.elementPos.left, k.right = c.right + d.elementPos.left, 
                    k.top = c.top + d.elementPos.top, k.bottom = c.bottom + d.elementPos.top, "touch" === e.tolerance ? j = !(k.left > h || f > k.right || k.top > i || g > k.bottom) : "fit" === e.tolerance && (j = k.left > f && h > k.right && k.top > g && i > k.bottom), 
                    j ? (c.selected && (d._removeClass(c.$element, "ui-selected"), c.selected = !1), 
                    c.unselecting && (d._removeClass(c.$element, "ui-unselecting"), c.unselecting = !1), 
                    c.selecting || (d._addClass(c.$element, "ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {
                        selecting: c.element
                    }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (d._removeClass(c.$element, "ui-selecting"), 
                    c.selecting = !1, d._addClass(c.$element, "ui-selected"), c.selected = !0) : (d._removeClass(c.$element, "ui-selecting"), 
                    c.selecting = !1, c.startselected && (d._addClass(c.$element, "ui-unselecting"), 
                    c.unselecting = !0), d._trigger("unselecting", b, {
                        unselecting: c.element
                    }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (d._removeClass(c.$element, "ui-selected"), 
                    c.selected = !1, d._addClass(c.$element, "ui-unselecting"), c.unselecting = !0, 
                    d._trigger("unselecting", b, {
                        unselecting: c.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(b) {
            var c = this;
            return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                c._removeClass(d.$element, "ui-unselecting"), d.unselecting = !1, d.startselected = !1, 
                c._trigger("unselected", b, {
                    unselected: d.element
                });
            }), a(".ui-selecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                c._removeClass(d.$element, "ui-selecting")._addClass(d.$element, "ui-selected"), 
                d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                    selected: d.element
                });
            }), this._trigger("stop", b), this.helper.remove(), !1;
        }
    }), a.widget("ui.selectmenu", [ a.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var b = this.element.uniqueId().attr("id");
            this.ids = {
                element: b,
                button: b + "-button",
                menu: b + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, 
            this.menuItems = a();
        },
        _drawButton: function() {
            var b, c = this, d = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(a) {
                    this.button.focus(), a.preventDefault();
                }
            }), this.element.hide(), this.button = a("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), 
            b = a("<span>").appendTo(this.button), this._addClass(b, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), 
            this.buttonItem = this._renderButtonItem(d).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), 
            this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                c._rendered || c._refreshMenu();
            });
        },
        _drawMenu: function() {
            var b = this;
            this.menu = a("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = a("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), 
            this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(a, c) {
                    a.preventDefault(), b._setSelection(), b._select(c.item.data("ui-selectmenu-item"), a);
                },
                focus: function(a, c) {
                    var d = c.item.data("ui-selectmenu-item");
                    null != b.focusIndex && d.index !== b.focusIndex && (b._trigger("focus", a, {
                        item: d
                    }), b.isOpen || b._select(d, a)), b.focusIndex = d.index, b.button.attr("aria-activedescendant", b.menuItems.eq(d.index).attr("id"));
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1;
            }, this.menuInstance._isDivider = function() {
                return !1;
            };
        },
        refresh: function() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), 
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function() {
            var a, b = this.element.find("option");
            this.menu.empty(), this._parseOptions(b), this._renderMenu(this.menu, this.items), 
            this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), 
            this._rendered = !0, b.length && (a = this._getSelectedItem(), this.menuInstance.focus(null, a), 
            this._setAria(a.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function(a) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), 
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, 
            this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), 
            this._trigger("open", a)));
        },
        _position: function() {
            this.menuWrap.position(a.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(a) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), 
            this._trigger("close", a));
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderButtonItem: function(b) {
            var c = a("<span>");
            return this._setText(c, b.label), this._addClass(c, "ui-selectmenu-text"), c;
        },
        _renderMenu: function(b, c) {
            var d = this, e = "";
            a.each(c, function(c, f) {
                var g;
                f.optgroup !== e && (g = a("<li>", {
                    text: f.optgroup
                }), d._addClass(g, "ui-selectmenu-optgroup", "ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), 
                g.appendTo(b), e = f.optgroup), d._renderItemData(b, f);
            });
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-selectmenu-item", b);
        },
        _renderItem: function(b, c) {
            var d = a("<li>"), e = a("<div>", {
                title: c.element.attr("title")
            });
            return c.disabled && this._addClass(d, null, "ui-state-disabled"), this._setText(e, c.label), 
            d.append(e).appendTo(b);
        },
        _setText: function(a, b) {
            b ? a.text(b) : a.html("&#160;");
        },
        _move: function(a, b) {
            var c, d, e = ".ui-menu-item";
            this.isOpen ? c = this.menuItems.eq(this.focusIndex).parent("li") : (c = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), 
            e += ":not(.ui-state-disabled)"), d = "first" === a || "last" === a ? c["first" === a ? "prevAll" : "nextAll"](e).eq(-1) : c[a + "All"](e).eq(0), 
            d.length && this.menuInstance.focus(b, d);
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function(a) {
            this[this.isOpen ? "close" : "open"](a);
        },
        _setSelection: function() {
            var a;
            this.range && (window.getSelection ? (a = window.getSelection(), a.removeAllRanges(), 
            a.addRange(this.range)) : this.range.select(), this.button.focus());
        },
        _documentClick: {
            mousedown: function(b) {
                this.isOpen && (a(b.target).closest(".ui-selectmenu-menu, #" + a.ui.escapeSelector(this.ids.button)).length || this.close(b));
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var a;
                window.getSelection ? (a = window.getSelection(), a.rangeCount && (this.range = a.getRangeAt(0))) : this.range = document.selection.createRange();
            },
            click: function(a) {
                this._setSelection(), this._toggle(a);
            },
            keydown: function(b) {
                var c = !0;
                switch (b.keyCode) {
                  case a.ui.keyCode.TAB:
                  case a.ui.keyCode.ESCAPE:
                    this.close(b), c = !1;
                    break;

                  case a.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(b);
                    break;

                  case a.ui.keyCode.UP:
                    b.altKey ? this._toggle(b) : this._move("prev", b);
                    break;

                  case a.ui.keyCode.DOWN:
                    b.altKey ? this._toggle(b) : this._move("next", b);
                    break;

                  case a.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(b) : this._toggle(b);
                    break;

                  case a.ui.keyCode.LEFT:
                    this._move("prev", b);
                    break;

                  case a.ui.keyCode.RIGHT:
                    this._move("next", b);
                    break;

                  case a.ui.keyCode.HOME:
                  case a.ui.keyCode.PAGE_UP:
                    this._move("first", b);
                    break;

                  case a.ui.keyCode.END:
                  case a.ui.keyCode.PAGE_DOWN:
                    this._move("last", b);
                    break;

                  default:
                    this.menu.trigger(b), c = !1;
                }
                c && b.preventDefault();
            }
        },
        _selectFocusedItem: function(a) {
            var b = this.menuItems.eq(this.focusIndex).parent("li");
            b.hasClass("ui-state-disabled") || this._select(b.data("ui-selectmenu-item"), a);
        },
        _select: function(a, b) {
            var c = this.element[0].selectedIndex;
            this.element[0].selectedIndex = a.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(a)), 
            this._setAria(a), this._trigger("select", b, {
                item: a
            }), a.index !== c && this._trigger("change", b, {
                item: a
            }), this.close(b);
        },
        _setAria: function(a) {
            var b = this.menuItems.eq(a.index).attr("id");
            this.button.attr({
                "aria-labelledby": b,
                "aria-activedescendant": b
            }), this.menu.attr("aria-activedescendant", b);
        },
        _setOption: function(a, b) {
            if ("icons" === a) {
                var c = this.button.find("span.ui-icon");
                this._removeClass(c, null, this.options.icons.button)._addClass(c, null, b.button);
            }
            this._super(a, b), "appendTo" === a && this.menuWrap.appendTo(this._appendTo()), 
            "width" === a && this._resizeButton();
        },
        _setOptionDisabled: function(a) {
            this._super(a), this.menuInstance.option("disabled", a), this.button.attr("aria-disabled", a), 
            this._toggleClass(this.button, null, "ui-state-disabled", a), this.element.prop("disabled", a), 
            a ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front, dialog")), 
            b.length || (b = this.document[0].body), b;
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), 
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
            var a = this.options.width;
            return !1 === a ? void this.button.css("width", "") : (null === a && (a = this.element.show().outerWidth(), 
            this.element.hide()), void this.button.outerWidth(a));
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
            var a = this._super();
            return a.disabled = this.element.prop("disabled"), a;
        },
        _parseOptions: function(b) {
            var c = this, d = [];
            b.each(function(b, e) {
                d.push(c._parseOption(a(e), b));
            }), this.items = d;
        },
        _parseOption: function(a, b) {
            var c = a.parent("optgroup");
            return {
                element: a,
                index: b,
                value: a.val(),
                label: a.text(),
                optgroup: c.attr("label") || "",
                disabled: c.prop("disabled") || a.prop("disabled")
            };
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), 
            this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
        }
    } ]), a.widget("ui.slider", a.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), 
            this._refresh(), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var b, c, d = this.options, e = this.element.find(".ui-slider-handle"), f = [];
            for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), 
            e = e.slice(0, c)), b = e.length; c > b; b++) f.push("<span tabindex='0'></span>");
            this.handles = e.add(a(f.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), 
            this.handle = this.handles.eq(0), this.handles.each(function(b) {
                a(this).data("ui-slider-handle-index", b).attr("tabIndex", 0);
            });
        },
        _createRange: function() {
            var b = this.options;
            b.range ? (!0 === b.range && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [ b.values[0], b.values[0] ] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), 
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = a("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), 
            ("min" === b.range || "max" === b.range) && this._addClass(this.range, "ui-slider-range-" + b.range)) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
        },
        _mouseCapture: function(b) {
            var c, d, e, f, g, h, i, j = this, k = this.options;
            return !k.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), c = {
                x: b.pageX,
                y: b.pageY
            }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(b) {
                var c = Math.abs(d - j.values(b));
                (e > c || e === c && (b === j._lastChangedValue || j.values(b) === k.min)) && (e = c, 
                f = a(this), g = b);
            }), !1 !== this._start(b, g) && (this._mouseSliding = !0, this._handleIndex = g, 
            this._addClass(f, null, "ui-state-active"), f.trigger("focus"), h = f.offset(), 
            i = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = i ? {
                left: 0,
                top: 0
            } : {
                left: b.pageX - h.left - f.width() / 2,
                top: b.pageY - h.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, 
            !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(a) {
            var b = {
                x: a.pageX,
                y: a.pageY
            }, c = this._normValueFromMouse(b);
            return this._slide(a, this._handleIndex, c), !1;
        },
        _mouseStop: function(a) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, 
            this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, 
            this._clickOffset = null, this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(a) {
            var b, c, d, e, f;
            return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, 
            c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), 
            e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f);
        },
        _uiHash: function(a, b, c) {
            var d = {
                handle: this.handles[a],
                handleIndex: a,
                value: void 0 !== b ? b : this.value()
            };
            return this._hasMultipleValues() && (d.value = void 0 !== b ? b : this.values(a), 
            d.values = c || this.values()), d;
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length;
        },
        _start: function(a, b) {
            return this._trigger("start", a, this._uiHash(b));
        },
        _slide: function(a, b, c) {
            var d, e = this.value(), f = this.values();
            this._hasMultipleValues() && (d = this.values(b ? 0 : 1), e = this.values(b), 2 === this.options.values.length && !0 === this.options.range && (c = 0 === b ? Math.min(d, c) : Math.max(d, c)), 
            f[b] = c), c !== e && !1 !== this._trigger("slide", a, this._uiHash(b, c, f)) && (this._hasMultipleValues() ? this.values(b, c) : this.value(c));
        },
        _stop: function(a, b) {
            this._trigger("stop", a, this._uiHash(b));
        },
        _change: function(a, b) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = b, this._trigger("change", a, this._uiHash(b)));
        },
        value: function(a) {
            return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), 
            void this._change(null, 0)) : this._value();
        },
        values: function(b, c) {
            var d, e, f;
            if (arguments.length > 1) return this.options.values[b] = this._trimAlignValue(c), 
            this._refreshValue(), void this._change(null, b);
            if (!arguments.length) return this._values();
            if (!a.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(b) : this.value();
            for (d = this.options.values, e = arguments[0], f = 0; d.length > f; f += 1) d[f] = this._trimAlignValue(e[f]), 
            this._change(null, f);
            this._refreshValue();
        },
        _setOption: function(b, c) {
            var d, e = 0;
            switch ("range" === b && !0 === this.options.range && ("min" === c ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), 
            this._super(b, c), b) {
              case "orientation":
                this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.options.range && this._refreshRange(c), this.handles.css("horizontal" === c ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), d = e - 1; d >= 0; d--) this._change(null, d);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _setOptionDisabled: function(a) {
            this._super(a), this._toggleClass(null, "ui-state-disabled", !!a);
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a);
        },
        _values: function(a) {
            var b, c, d;
            if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
            if (this._hasMultipleValues()) {
                for (c = this.options.values.slice(), d = 0; c.length > d; d += 1) c[d] = this._trimAlignValue(c[d]);
                return c;
            }
            return [];
        },
        _trimAlignValue: function(a) {
            if (this._valueMin() >= a) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1, c = (a - this._valueMin()) % b, d = a - c;
            return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5));
        },
        _calculateNewMax: function() {
            var a = this.options.max, b = this._valueMin(), c = this.options.step;
            a = Math.round((a - b) / c) * c + b, a > this.options.max && (a -= c), this.max = parseFloat(a.toFixed(this._precision()));
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), 
            a;
        },
        _precisionOf: function(a) {
            var b = "" + a, c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshRange: function(a) {
            "vertical" === a && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === a && this.range.css({
                height: "",
                bottom: ""
            });
        },
        _refreshValue: function() {
            var b, c, d, e, f, g = this.options.range, h = this.options, i = this, j = !this._animateOff && h.animate, k = {};
            this._hasMultipleValues() ? this.handles.each(function(d) {
                c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", 
                a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), !0 === i.options.range && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    left: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    width: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                    bottom: c + "%"
                }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                    height: c - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }))), b = c;
            }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, 
            k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), 
            "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                width: c + "%"
            }, h.animate), "max" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                width: 100 - c + "%"
            }, h.animate), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                height: c + "%"
            }, h.animate), "max" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                height: 100 - c + "%"
            }, h.animate));
        },
        _handleEvents: {
            keydown: function(b) {
                var c, d, e, f = a(b.target).data("ui-slider-handle-index");
                switch (b.keyCode) {
                  case a.ui.keyCode.HOME:
                  case a.ui.keyCode.END:
                  case a.ui.keyCode.PAGE_UP:
                  case a.ui.keyCode.PAGE_DOWN:
                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.RIGHT:
                  case a.ui.keyCode.DOWN:
                  case a.ui.keyCode.LEFT:
                    if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(a(b.target), null, "ui-state-active"), 
                    !1 === this._start(b, f))) return;
                }
                switch (e = this.options.step, c = d = this._hasMultipleValues() ? this.values(f) : this.value(), 
                b.keyCode) {
                  case a.ui.keyCode.HOME:
                    d = this._valueMin();
                    break;

                  case a.ui.keyCode.END:
                    d = this._valueMax();
                    break;

                  case a.ui.keyCode.PAGE_UP:
                    d = this._trimAlignValue(c + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case a.ui.keyCode.PAGE_DOWN:
                    d = this._trimAlignValue(c - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.RIGHT:
                    if (c === this._valueMax()) return;
                    d = this._trimAlignValue(c + e);
                    break;

                  case a.ui.keyCode.DOWN:
                  case a.ui.keyCode.LEFT:
                    if (c === this._valueMin()) return;
                    d = this._trimAlignValue(c - e);
                }
                this._slide(b, f, d);
            },
            keyup: function(b) {
                var c = a(b.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), 
                this._removeClass(a(b.target), null, "ui-state-active"));
            }
        }
    }), a.widget("ui.sortable", a.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(a, b, c) {
            return a >= b && b + c > a;
        },
        _isFloating: function(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(a, b) {
            this._super(a, b), "handle" === a && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            var b = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), 
            a.each(this.items, function() {
                b._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
            });
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(b, c) {
            var d = null, e = !1, f = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(b), 
            a(b.target).parents().each(function() {
                return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0;
            }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), !!d && (!(this.options.handle && !c && (a(this.options.handle, d).find("*").addBack().each(function() {
                this === b.target && (e = !0);
            }), !e)) && (this.currentItem = d, this._removeCurrentsFromItems(), !0))));
        },
        _mouseStart: function(b, c, d) {
            var e, f, g = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, 
            this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), 
            this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), 
            g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !d) for (e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("activate", b, this._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), 
            this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(b), 
            !0;
        },
        _mouseDrag: function(b) {
            var c, d, e, f, g = this.options, h = !1;
            for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - this.document.scrollTop() < g.scrollSensitivity ? h = this.document.scrollTop(this.document.scrollTop() - g.scrollSpeed) : this.window.height() - (b.pageY - this.document.scrollTop()) < g.scrollSensitivity && (h = this.document.scrollTop(this.document.scrollTop() + g.scrollSpeed)), 
            b.pageX - this.document.scrollLeft() < g.scrollSensitivity ? h = this.document.scrollLeft(this.document.scrollLeft() - g.scrollSpeed) : this.window.width() - (b.pageX - this.document.scrollLeft()) < g.scrollSensitivity && (h = this.document.scrollLeft(this.document.scrollLeft() + g.scrollSpeed))), 
            !1 !== h && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            c = this.items.length - 1; c >= 0; c--) if (d = this.items[c], e = d.item[0], (f = this._intersectsWithPointer(d)) && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" !== this.options.type || !a.contains(this.element[0], e))) {
                if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                break;
            }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), 
            this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), 
                this.options.revert) {
                    var d = this, e = this.placeholder.offset(), f = this.options.axis, g = {};
                    f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(b);
                    });
                } else this._clear(b, c);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new a.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), 
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), 
                this.containers[b].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]));
            }), !d.length && b.key && d.push(b.key + "="), d.join("&");
        },
        toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected), d = [];
            return b = b || {}, c.each(function() {
                d.push(a(b.item || this).attr(b.attribute || "id") || "");
            }), d;
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = "x" === this.options.axis || d + j > h && i > d + j, m = "y" === this.options.axis || b + k > f && g > b + k, n = l && m;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : b + this.helperProportions.width / 2 > f && g > c - this.helperProportions.width / 2 && d + this.helperProportions.height / 2 > h && i > e - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(a) {
            var b, c, d = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height), e = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            return !(!d || !e) && (b = this._getDragVerticalDirection(), c = this._getDragHorizontalDirection(), 
            this.floating ? "right" === c || "down" === b ? 2 : 1 : b && ("down" === b ? 2 : 1));
        },
        _intersectsWithSides: function(a) {
            var b = this._isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height), c = this._isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), d = this._getDragVerticalDirection(), e = this._getDragHorizontalDirection();
            return this.floating && e ? "right" === e && c || "left" === e && !c : d && ("down" === d && b || "up" === d && !b);
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== a && (a > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== a && (a > 0 ? "right" : "left");
        },
        refresh: function(a) {
            return this._refreshItems(a), this._setHandleClassName(), this.refreshPositions(), 
            this;
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor === String ? [ a.connectWith ] : a.connectWith;
        },
        _getItemsAsjQuery: function(b) {
            function c() {
                h.push(this);
            }
            var d, e, f, g, h = [], i = [], j = this._connectWith();
            if (j && b) for (d = j.length - 1; d >= 0; d--) for (f = a(j[d], this.document[0]), 
            e = f.length - 1; e >= 0; e--) (g = a.data(f[e], this.widgetFullName)) && g !== this && !g.options.disabled && i.push([ a.isFunction(g.options.items) ? g.options.items.call(g.element) : a(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g ]);
            for (i.push([ a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            d = i.length - 1; d >= 0; d--) i[d][0].each(c);
            return a(h);
        },
        _removeCurrentsFromItems: function() {
            var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(a) {
                for (var c = 0; b.length > c; c++) if (b[c] === a.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(b) {
            this.items = [], this.containers = [ this ];
            var c, d, e, f, g, h, i, j, k = this.items, l = [ [ a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                item: this.currentItem
            }) : a(this.options.items, this.element), this ] ], m = this._connectWith();
            if (m && this.ready) for (c = m.length - 1; c >= 0; c--) for (e = a(m[c], this.document[0]), 
            d = e.length - 1; d >= 0; d--) (f = a.data(e[d], this.widgetFullName)) && f !== this && !f.options.disabled && (l.push([ a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {
                item: this.currentItem
            }) : a(f.options.items, f.element), f ]), this.containers.push(f));
            for (c = l.length - 1; c >= 0; c--) for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++) i = a(h[d]), 
            i.data(this.widgetName + "-item", g), k.push({
                item: i,
                instance: g,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(b) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var c, d, e, f;
            for (c = this.items.length - 1; c >= 0; c--) d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, 
            b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, 
            d.top = f.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (c = this.containers.length - 1; c >= 0; c--) f = this.containers[c].element.offset(), 
            this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, 
            this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), 
            this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(b) {
            b = b || this;
            var c, d = b.options;
            d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                element: function() {
                    var d = b.currentItem[0].nodeName.toLowerCase(), e = a("<" + d + ">", b.document[0]);
                    return b._addClass(e, "ui-sortable-placeholder", c || b.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), 
                    "tbody" === d ? b._createTrPlaceholder(b.currentItem.find("tr").eq(0), a("<tr>", b.document[0]).appendTo(e)) : "tr" === d ? b._createTrPlaceholder(b.currentItem, e) : "img" === d && e.attr("src", b.currentItem.attr("src")), 
                    c || e.css("visibility", "hidden"), e;
                },
                update: function(a, e) {
                    (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), 
                    e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)));
                }
            }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), 
            d.placeholder.update(b, b.placeholder);
        },
        _createTrPlaceholder: function(b, c) {
            var d = this;
            b.children().each(function() {
                a("<td>&#160;</td>", d.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(c);
            });
        },
        _contactContainers: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m = null, n = null;
            for (c = this.containers.length - 1; c >= 0; c--) if (!a.contains(this.currentItem[0], this.containers[c].element[0])) if (this._intersectsWith(this.containers[c].containerCache)) {
                if (m && a.contains(this.containers[c].element[0], m.element[0])) continue;
                m = this.containers[c], n = c;
            } else this.containers[c].containerCache.over && (this.containers[c]._trigger("out", b, this._uiHash(this)), 
            this.containers[c].containerCache.over = 0);
            if (m) if (1 === this.containers.length) this.containers[n].containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash(this)), 
            this.containers[n].containerCache.over = 1); else {
                for (e = 1e4, f = null, k = m.floating || this._isFloating(this.currentItem), g = k ? "left" : "top", 
                h = k ? "width" : "height", l = k ? "pageX" : "pageY", d = this.items.length - 1; d >= 0; d--) a.contains(this.containers[n].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (i = this.items[d].item.offset()[g], 
                j = !1, b[l] - i > this.items[d][h] / 2 && (j = !0), e > Math.abs(b[l] - i) && (e = Math.abs(b[l] - i), 
                f = this.items[d], this.direction = j ? "up" : "down"));
                if (!f && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[n]) return void (this.currentContainer.containerCache.over || (this.containers[n]._trigger("over", b, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[n].element, !0), 
                this._trigger("change", b, this._uiHash()), this.containers[n]._trigger("change", b, this._uiHash(this)), 
                this.currentContainer = this.containers[n], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[n]._trigger("over", b, this._uiHash(this)), this.containers[n].containerCache.over = 1;
            }
        },
        _createHelper: function(b) {
            var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [ b, this.currentItem ])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
            return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), 
            d[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), 
            (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), 
            d;
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), 
            "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), 
            b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var b, c, d, e = this.options;
            "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === e.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === e.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), 
            d = "hidden" !== a(b).css("overflow"), this.containment = [ c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position);
            var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
            return {
                top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
            };
        },
        _generatePosition: function(b) {
            var c, d, e = this.options, f = b.pageX, g = b.pageY, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = /(html|body)/i.test(h[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), 
            b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), 
            b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), 
            b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), 
            e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], 
            g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, 
            d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], 
            f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), 
            {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
            };
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var e = this.counter;
            this._delay(function() {
                e === this.counter && this.refreshPositions(!d);
            });
        },
        _clear: function(a, b) {
            function c(a, b, c) {
                return function(d) {
                    c._trigger(a, d, b._uiHash(b));
                };
            }
            this.reverting = !1;
            var d, e = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (d in this._storedCSS) ("auto" === this._storedCSS[d] || "static" === this._storedCSS[d]) && (this._storedCSS[d] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !b && e.push(function(a) {
                this._trigger("receive", a, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || e.push(function(a) {
                this._trigger("update", a, this._uiHash());
            }), this !== this.currentContainer && (b || (e.push(function(a) {
                this._trigger("remove", a, this._uiHash());
            }), e.push(function(a) {
                return function(b) {
                    a._trigger("receive", b, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), e.push(function(a) {
                return function(b) {
                    a._trigger("update", b, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), d = this.containers.length - 1; d >= 0; d--) b || e.push(c("deactivate", this, this.containers[d])), 
            this.containers[d].containerCache.over && (e.push(c("out", this, this.containers[d])), 
            this.containers[d].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
            this.helper = null), !b) {
                for (d = 0; e.length > d; d++) e[d].call(this, a);
                this._trigger("stop", a, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            !1 === a.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            };
        }
    }), a.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
            this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), 
            this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var b = this._super(), c = this.element;
            return a.each([ "min", "max", "step" ], function(a, d) {
                var e = c.attr(d);
                null != e && e.length && (b[d] = e);
            }), b;
        },
        _events: {
            keydown: function(a) {
                this._start(a) && this._keydown(a) && a.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(a) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), 
                void (this.previous !== this.element.val() && this._trigger("change", a)));
            },
            mousewheel: function(a, b) {
                if (b) {
                    if (!this.spinning && !this._start(a)) return !1;
                    this._spin((b > 0 ? 1 : -1) * this.options.step, a), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a);
                    }, 100), a.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(b) {
                function c() {
                    this.element[0] === a.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), 
                    this.previous = d, this._delay(function() {
                        this.previous = d;
                    }));
                }
                var d;
                d = this.element[0] === a.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), 
                b.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, c.call(this);
                }), !1 !== this._start(b) && this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(b) {
                return a(b.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(b) && void this._repeat(null, a(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b) : void 0;
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
        },
        _draw: function() {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), 
            this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), 
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
        },
        _keydown: function(b) {
            var c = this.options, d = a.ui.keyCode;
            switch (b.keyCode) {
              case d.UP:
                return this._repeat(null, 1, b), !0;

              case d.DOWN:
                return this._repeat(null, -1, b), !0;

              case d.PAGE_UP:
                return this._repeat(null, c.page, b), !0;

              case d.PAGE_DOWN:
                return this._repeat(null, -c.page, b), !0;
            }
            return !1;
        },
        _start: function(a) {
            return !(!this.spinning && !1 === this._trigger("start", a)) && (this.counter || (this.counter = 1), 
            this.spinning = !0, !0);
        },
        _repeat: function(a, b, c) {
            a = a || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, b, c);
            }, a), this._spin(b * this.options.step, c);
        },
        _spin: function(a, b) {
            var c = this.value() || 0;
            this.counter || (this.counter = 1), c = this._adjustValue(c + a * this._increment(this.counter)), 
            this.spinning && !1 === this._trigger("spin", b, {
                value: c
            }) || (this._value(c), this.counter++);
        },
        _increment: function(b) {
            var c = this.options.incremental;
            return c ? a.isFunction(c) ? c(b) : Math.floor(b * b * b / 5e4 - b * b / 500 + 17 * b / 200 + 1) : 1;
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            return null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min))), 
            a;
        },
        _precisionOf: function(a) {
            var b = "" + a, c = b.indexOf(".");
            return -1 === c ? 0 : b.length - c - 1;
        },
        _adjustValue: function(a) {
            var b, c, d = this.options;
            return b = null !== d.min ? d.min : 0, c = a - b, c = Math.round(c / d.step) * d.step, 
            a = b + c, a = parseFloat(a.toFixed(this._precision())), null !== d.max && a > d.max ? d.max : null !== d.min && d.min > a ? d.min : a;
        },
        _stop: function(a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", a));
        },
        _setOption: function(a, b) {
            var c, d, e;
            return "culture" === a || "numberFormat" === a ? (c = this._parse(this.element.val()), 
            this.options[a] = b, void this.element.val(this._format(c))) : (("max" === a || "min" === a || "step" === a) && "string" == typeof b && (b = this._parse(b)), 
            "icons" === a && (d = this.buttons.first().find(".ui-icon"), this._removeClass(d, null, this.options.icons.up), 
            this._addClass(d, null, b.up), e = this.buttons.last().find(".ui-icon"), this._removeClass(e, null, this.options.icons.down), 
            this._addClass(e, null, b.down)), void this._super(a, b));
        },
        _setOptionDisabled: function(a) {
            this._super(a), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!a), 
            this.element.prop("disabled", !!a), this.buttons.button(a ? "disable" : "enable");
        },
        _setOptions: h(function(a) {
            this._super(a);
        }),
        _parse: function(a) {
            return "string" == typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a), 
            "" === a || isNaN(a) ? null : a;
        },
        _format: function(a) {
            return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function() {
            var a = this.value();
            return null !== a && a === this._adjustValue(a);
        },
        _value: function(a, b) {
            var c;
            "" !== a && null !== (c = this._parse(a)) && (b || (c = this._adjustValue(c)), a = this._format(c)), 
            this.element.val(a), this._refresh();
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: h(function(a) {
            this._stepUp(a);
        }),
        _stepUp: function(a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop());
        },
        stepDown: h(function(a) {
            this._stepDown(a);
        }),
        _stepDown: function(a) {
            this._start() && (this._spin((a || 1) * -this.options.step), this._stop());
        },
        pageUp: h(function(a) {
            this._stepUp((a || 1) * this.options.page);
        }),
        pageDown: h(function(a) {
            this._stepDown((a || 1) * this.options.page);
        }),
        value: function(a) {
            return arguments.length ? void h(this._value).call(this, a) : this._parse(this.element.val());
        },
        widget: function() {
            return this.uiSpinner;
        }
    }), !1 !== a.uiBackCompat && a.widget("ui.spinner", a.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        },
        _uiSpinnerHtml: function() {
            return "<span>";
        },
        _buttonHtml: function() {
            return "<a></a><a></a>";
        }
    }), a.ui.spinner, a.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var a = /#.*$/;
            return function(b) {
                var c, d;
                c = b.href.replace(a, ""), d = location.href.replace(a, "");
                try {
                    c = decodeURIComponent(c);
                } catch (a) {}
                try {
                    d = decodeURIComponent(d);
                } catch (a) {}
                return b.hash.length > 1 && c === d;
            };
        }(),
        _create: function() {
            var b = this, c = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, c.collapsible), 
            this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                return b.tabs.index(a);
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(c.active) : a(), 
            this._refresh(), this.active.length && this.load(c.active);
        },
        _initialActive: function() {
            var b = this.options.active, c = this.options.collapsible, d = location.hash.substring(1);
            return null === b && (d && this.tabs.each(function(c, e) {
                return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0;
            }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = !!this.tabs.length && 0)), 
            !1 !== b && -1 === (b = this.tabs.index(this.tabs.eq(b))) && (b = !c && 0), !c && !1 === b && this.anchors.length && (b = 0), 
            b;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : a()
            };
        },
        _tabKeydown: function(b) {
            var c = a(a.ui.safeActiveElement(this.document[0])).closest("li"), d = this.tabs.index(c), e = !0;
            if (!this._handlePageNav(b)) {
                switch (b.keyCode) {
                  case a.ui.keyCode.RIGHT:
                  case a.ui.keyCode.DOWN:
                    d++;
                    break;

                  case a.ui.keyCode.UP:
                  case a.ui.keyCode.LEFT:
                    e = !1, d--;
                    break;

                  case a.ui.keyCode.END:
                    d = this.anchors.length - 1;
                    break;

                  case a.ui.keyCode.HOME:
                    d = 0;
                    break;

                  case a.ui.keyCode.SPACE:
                    return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);

                  case a.ui.keyCode.ENTER:
                    return b.preventDefault(), clearTimeout(this.activating), void this._activate(d !== this.options.active && d);

                  default:
                    return;
                }
                b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), 
                b.ctrlKey || b.metaKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", d);
                }, this.delay));
            }
        },
        _panelKeydown: function(b) {
            this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), 
            this.active.trigger("focus"));
        },
        _handlePageNav: function(b) {
            return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : void 0;
        },
        _findNextTab: function(b, c) {
            function d() {
                return b > e && (b = 0), 0 > b && (b = e), b;
            }
            for (var e = this.tabs.length - 1; -1 !== a.inArray(d(), this.options.disabled); ) b = c ? b + 1 : b - 1;
            return b;
        },
        _focusNextTab: function(a, b) {
            return a = this._findNextTab(a, b), this.tabs.eq(a).trigger("focus"), a;
        },
        _setOption: function(a, b) {
            return "active" === a ? void this._activate(b) : (this._super(a, b), "collapsible" === a && (this._toggleClass("ui-tabs-collapsible", null, b), 
            b || !1 !== this.options.active || this._activate(0)), "event" === a && this._setupEvents(b), 
            void ("heightStyle" === a && this._setupHeightStyle(b)));
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var b = this.options, c = this.tablist.children(":has(a[href])");
            b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                return c.index(a);
            }), this._processTabs(), !1 !== b.active && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, 
            this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, 
            this.active = a()), this._refresh();
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), 
            this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var b = this, c = this.tabs, d = this.anchors, e = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), 
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(b) {
                a(this).is(".ui-state-disabled") && b.preventDefault();
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                a(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return a("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = a(), this.anchors.each(function(c, d) {
                var e, f, g, h = a(d).uniqueId().attr("id"), i = a(d).closest("li"), j = i.attr("aria-controls");
                b._isLocal(d) ? (e = d.hash, g = e.substring(1), f = b.element.find(b._sanitizeSelector(e))) : (g = i.attr("aria-controls") || a({}).uniqueId()[0].id, 
                e = "#" + g, f = b.element.find(e), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[c - 1] || b.tablist)), 
                f.attr("aria-live", "polite")), f.length && (b.panels = b.panels.add(f)), j && i.data("ui-tabs-aria-controls", j), 
                i.attr({
                    "aria-controls": g,
                    "aria-labelledby": h
                }), f.attr("aria-labelledby", h);
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), 
            c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)));
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function(b) {
            return a("<div>").attr("id", b).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function(b) {
            var c, d, e;
            for (a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1), 
            e = 0; d = this.tabs[e]; e++) c = a(d), !0 === b || -1 !== a.inArray(e, b) ? (c.attr("aria-disabled", "true"), 
            this._addClass(c, null, "ui-state-disabled")) : (c.removeAttr("aria-disabled"), 
            this._removeClass(c, null, "ui-state-disabled"));
            this.options.disabled = b, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === b);
        },
        _setupEvents: function(b) {
            var c = {};
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(a) {
                    a.preventDefault();
                }
            }), this._on(this.anchors, c), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(b) {
            var c, d = this.element.parent();
            "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), 
            this.element.siblings(":visible").each(function() {
                var b = a(this), d = b.css("position");
                "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function() {
                c -= a(this).outerHeight(!0);
            }), this.panels.each(function() {
                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()));
            }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                c = Math.max(c, a(this).height("").height());
            }).height(c));
        },
        _eventHandler: function(b) {
            var c = this.options, d = this.active, e = a(b.currentTarget), f = e.closest("li"), g = f[0] === d[0], h = g && c.collapsible, i = h ? a() : this._getPanelForTab(f), j = d.length ? this._getPanelForTab(d) : a(), k = {
                oldTab: d,
                oldPanel: j,
                newTab: h ? a() : f,
                newPanel: i
            };
            b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || !1 === this._trigger("beforeActivate", b, k) || (c.active = !h && this.tabs.index(f), 
            this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            i.length && this.load(this.tabs.index(f), b), this._toggle(b, k));
        },
        _toggle: function(b, c) {
            function d() {
                f.running = !1, f._trigger("activate", b, c);
            }
            function e() {
                f._addClass(c.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), 
                d());
            }
            var f = this, g = c.newPanel, h = c.oldPanel;
            this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                f._removeClass(c.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), e();
            }) : (this._removeClass(c.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
            h.hide(), e()), h.attr("aria-hidden", "true"), c.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                return 0 === a(this).attr("tabIndex");
            }).attr("tabIndex", -1), g.attr("aria-hidden", "false"), c.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function(b) {
            var c, d = this._findActive(b);
            d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }));
        },
        _findActive: function(b) {
            return !1 === b ? a() : this.tabs.eq(b);
        },
        _getIndex: function(b) {
            return "string" == typeof b && (b = this.anchors.index(this.anchors.filter("[href$='" + a.ui.escapeSelector(b) + "']"))), 
            b;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), 
            this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
            }), this.tabs.each(function() {
                var b = a(this), c = b.data("ui-tabs-aria-controls");
                c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(b) {
            var c = this.options.disabled;
            !1 !== c && (void 0 === b ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
                return a !== b ? a : null;
            }) : a.map(this.tabs, function(a, c) {
                return c !== b ? c : null;
            })), this._setOptionDisabled(c));
        },
        disable: function(b) {
            var c = this.options.disabled;
            if (!0 !== c) {
                if (void 0 === b) c = !0; else {
                    if (b = this._getIndex(b), -1 !== a.inArray(b, c)) return;
                    c = a.isArray(c) ? a.merge([ b ], c).sort() : [ b ];
                }
                this._setOptionDisabled(c);
            }
        },
        load: function(b, c) {
            b = this._getIndex(b);
            var d = this, e = this.tabs.eq(b), f = e.find(".ui-tabs-anchor"), g = this._getPanelForTab(e), h = {
                tab: e,
                panel: g
            }, i = function(a, b) {
                "abort" === b && d.panels.stop(!1, !0), d._removeClass(e, "ui-tabs-loading"), g.removeAttr("aria-busy"), 
                a === d.xhr && delete d.xhr;
            };
            this._isLocal(f[0]) || (this.xhr = a.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(e, "ui-tabs-loading"), 
            g.attr("aria-busy", "true"), this.xhr.done(function(a, b, e) {
                setTimeout(function() {
                    g.html(a), d._trigger("load", c, h), i(e, b);
                }, 1);
            }).fail(function(a, b) {
                setTimeout(function() {
                    i(a, b);
                }, 1);
            })));
        },
        _ajaxSettings: function(b, c, d) {
            var e = this;
            return {
                url: b.attr("href").replace(/#.*$/, ""),
                beforeSend: function(b, f) {
                    return e._trigger("beforeLoad", c, a.extend({
                        jqXHR: b,
                        ajaxSettings: f
                    }, d));
                }
            };
        },
        _getPanelForTab: function(b) {
            var c = a(b).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + c));
        }
    }), !1 !== a.uiBackCompat && a.widget("ui.tabs", a.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        }
    }), a.ui.tabs, a.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var b = a(this).attr("title") || "";
                return a("<a>").text(b).html();
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(b, c) {
            var d = (b.attr("aria-describedby") || "").split(/\s+/);
            d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")));
        },
        _removeDescribedBy: function(b) {
            var c = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/), e = a.inArray(c, d);
            -1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), 
            d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby");
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = a("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this.disabledTitles = a([]);
        },
        _setOption: function(b, c) {
            var d = this;
            this._super(b, c), "content" === b && a.each(this.tooltips, function(a, b) {
                d._updateContent(b.element);
            });
        },
        _setOptionDisabled: function(a) {
            this[a ? "_disable" : "_enable"]();
        },
        _disable: function() {
            var b = this;
            a.each(this.tooltips, function(c, d) {
                var e = a.Event("blur");
                e.target = e.currentTarget = d.element[0], b.close(e, !0);
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var b = a(this);
                return b.is("[title]") ? b.data("ui-tooltip-title", b.attr("title")).removeAttr("title") : void 0;
            }));
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var b = a(this);
                b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"));
            }), this.disabledTitles = a([]);
        },
        open: function(b) {
            var c = this, d = a(b ? b.target : this.element).closest(this.options.items);
            d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), 
            d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
                var b, d = a(this);
                d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, 
                c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                    element: this,
                    title: d.attr("title")
                }, d.attr("title", ""));
            }), this._registerCloseHandlers(b, d), this._updateContent(d, b));
        },
        _updateContent: function(a, b) {
            var c, d = this.options.content, e = this, f = b ? b.type : null;
            return "string" == typeof d || d.nodeType || d.jquery ? this._open(b, a, d) : void ((c = d.call(a[0], function(c) {
                e._delay(function() {
                    a.data("ui-tooltip-open") && (b && (b.type = f), this._open(b, a, c));
                });
            })) && this._open(b, a, c));
        },
        _open: function(b, c, d) {
            function e(a) {
                j.of = a, g.is(":hidden") || g.position(j);
            }
            var f, g, h, i, j = a.extend({}, this.options.position);
            if (d) {
                if (f = this._find(c)) return void f.tooltip.find(".ui-tooltip-content").html(d);
                c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title")), 
                f = this._tooltip(c), g = f.tooltip, this._addDescribedBy(c, g.attr("id")), g.find(".ui-tooltip-content").html(d), 
                this.liveRegion.children().hide(), i = a("<div>").html(g.find(".ui-tooltip-content").html()), 
                i.removeAttr("name").find("[name]").removeAttr("name"), i.removeAttr("id").find("[id]").removeAttr("id"), 
                i.appendTo(this.liveRegion), this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {
                    mousemove: e
                }), e(b)) : g.position(a.extend({
                    of: c
                }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.track && this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    g.is(":visible") && (e(j.of), clearInterval(h));
                }, a.fx.interval)), this._trigger("open", b, {
                    tooltip: g
                });
            }
        },
        _registerCloseHandlers: function(b, c) {
            var d = {
                keyup: function(b) {
                    if (b.keyCode === a.ui.keyCode.ESCAPE) {
                        var d = a.Event(b);
                        d.currentTarget = c[0], this.close(d, !0);
                    }
                }
            };
            c[0] !== this.element[0] && (d.remove = function() {
                this._removeTooltip(this._find(c).tooltip);
            }), b && "mouseover" !== b.type || (d.mouseleave = "close"), b && "focusin" !== b.type || (d.focusout = "close"), 
            this._on(!0, c, d);
        },
        close: function(b) {
            var c, d = this, e = a(b ? b.currentTarget : this.element), f = this._find(e);
            return f ? (c = f.tooltip, void (f.closing || (clearInterval(this.delayedShow), 
            e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), 
            this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function() {
                d._removeTooltip(a(this));
            }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), 
            e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), 
            b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
                a(c.element).attr("title", c.title), delete d.parents[b];
            }), f.closing = !0, this._trigger("close", b, {
                tooltip: c
            }), f.hiding || (f.closing = !1)))) : void e.removeData("ui-tooltip-open");
        },
        _tooltip: function(b) {
            var c = a("<div>").attr("role", "tooltip"), d = a("<div>").appendTo(c), e = c.uniqueId().attr("id");
            return this._addClass(d, "ui-tooltip-content"), this._addClass(c, "ui-tooltip", "ui-widget ui-widget-content"), 
            c.appendTo(this._appendTo(b)), this.tooltips[e] = {
                element: b,
                tooltip: c
            };
        },
        _find: function(a) {
            var b = a.data("ui-tooltip-id");
            return b ? this.tooltips[b] : null;
        },
        _removeTooltip: function(a) {
            a.remove(), delete this.tooltips[a.attr("id")];
        },
        _appendTo: function(a) {
            var b = a.closest(".ui-front, dialog");
            return b.length || (b = this.document[0].body), b;
        },
        _destroy: function() {
            var b = this;
            a.each(this.tooltips, function(c, d) {
                var e = a.Event("blur"), f = d.element;
                e.target = e.currentTarget = f[0], b.close(e, !0), a("#" + c).remove(), f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), 
                f.removeData("ui-tooltip-title"));
            }), this.liveRegion.remove();
        }
    }), !1 !== a.uiBackCompat && a.widget("ui.tooltip", a.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var a = this._superApply(arguments);
            return this.options.tooltipClass && a.tooltip.addClass(this.options.tooltipClass), 
            a;
        }
    }), a.ui.tooltip;
});

var bootstrap = function(a, b) {
    "use strict";
    function c(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), 
            Object.defineProperty(a, d.key, d);
        }
    }
    function d(a, b, d) {
        return b && c(a.prototype, b), d && c(a, d), a;
    }
    function e(a, b) {
        a.prototype = Object.create(b.prototype), a.prototype.constructor = a, a.__proto__ = b;
    }
    function f(a) {
        var b = !1, c = 0, d = document.createElement("span");
        return new MutationObserver(function() {
            a(), b = !1;
        }).observe(d, {
            attributes: !0
        }), function() {
            b || (b = !0, d.setAttribute("x-index", c), c += 1);
        };
    }
    function g(a) {
        var b = !1;
        return function() {
            b || (b = !0, setTimeout(function() {
                b = !1, a();
            }, ua));
        };
    }
    function h(a) {
        var b = {};
        return a && "[object Function]" === b.toString.call(a);
    }
    function i(a, b) {
        if (1 !== a.nodeType) return [];
        var c = window.getComputedStyle(a, null);
        return b ? c[b] : c;
    }
    function j(a) {
        return "HTML" === a.nodeName ? a : a.parentNode || a.host;
    }
    function k(a) {
        if (!a || -1 !== [ "HTML", "BODY", "#document" ].indexOf(a.nodeName)) return window.document.body;
        var b = i(a), c = b.overflow, d = b.overflowX;
        return /(auto|scroll)/.test(c + b.overflowY + d) ? a : k(j(a));
    }
    function l(a) {
        var b = a && a.offsetParent, c = b && b.nodeName;
        return c && "BODY" !== c && "HTML" !== c ? -1 !== [ "TD", "TABLE" ].indexOf(b.nodeName) && "static" === i(b, "position") ? l(b) : b : window.document.documentElement;
    }
    function m(a) {
        var b = a.nodeName;
        return "BODY" !== b && ("HTML" === b || l(a.firstElementChild) === a);
    }
    function n(a) {
        return null !== a.parentNode ? n(a.parentNode) : a;
    }
    function o(a, b) {
        if (!(a && a.nodeType && b && b.nodeType)) return window.document.documentElement;
        var c = a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING, d = c ? a : b, e = c ? b : a, f = document.createRange();
        f.setStart(d, 0), f.setEnd(e, 0);
        var g = f.commonAncestorContainer;
        if (a !== g && b !== g || d.contains(e)) return m(g) ? g : l(g);
        var h = n(a);
        return h.host ? o(h.host, b) : o(a, n(b).host);
    }
    function p(a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top", c = "top" === b ? "scrollTop" : "scrollLeft", d = a.nodeName;
        if ("BODY" === d || "HTML" === d) {
            var e = window.document.documentElement;
            return (window.document.scrollingElement || e)[c];
        }
        return a[c];
    }
    function q(a, b) {
        var c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], d = p(b, "top"), e = p(b, "left"), f = c ? -1 : 1;
        return a.top += d * f, a.bottom += d * f, a.left += e * f, a.right += e * f, a;
    }
    function r(a, b) {
        var c = "x" === b ? "Left" : "Top", d = "Left" === c ? "Right" : "Bottom";
        return +a["border" + c + "Width"].split("px")[0] + +a["border" + d + "Width"].split("px")[0];
    }
    function s(a, b, c, d) {
        return Math.max(b["offset" + a], b["scroll" + a], c["client" + a], c["offset" + a], c["scroll" + a], za() ? c["offset" + a] + d["margin" + ("Height" === a ? "Top" : "Left")] + d["margin" + ("Height" === a ? "Bottom" : "Right")] : 0);
    }
    function t() {
        var a = window.document.body, b = window.document.documentElement, c = za() && window.getComputedStyle(b);
        return {
            height: s("Height", a, b, c),
            width: s("Width", a, b, c)
        };
    }
    function u(a) {
        return Da({}, a, {
            right: a.left + a.width,
            bottom: a.top + a.height
        });
    }
    function v(a) {
        var b = {};
        if (za()) try {
            b = a.getBoundingClientRect();
            var c = p(a, "top"), d = p(a, "left");
            b.top += c, b.left += d, b.bottom += c, b.right += d;
        } catch (a) {} else b = a.getBoundingClientRect();
        var e = {
            left: b.left,
            top: b.top,
            width: b.right - b.left,
            height: b.bottom - b.top
        }, f = "HTML" === a.nodeName ? t() : {}, g = f.width || a.clientWidth || e.right - e.left, h = f.height || a.clientHeight || e.bottom - e.top, j = a.offsetWidth - g, k = a.offsetHeight - h;
        if (j || k) {
            var l = i(a);
            j -= r(l, "x"), k -= r(l, "y"), e.width -= j, e.height -= k;
        }
        return u(e);
    }
    function w(a, b) {
        var c = za(), d = "HTML" === b.nodeName, e = v(a), f = v(b), g = k(a), h = i(b), j = +h.borderTopWidth.split("px")[0], l = +h.borderLeftWidth.split("px")[0], m = u({
            top: e.top - f.top - j,
            left: e.left - f.left - l,
            width: e.width,
            height: e.height
        });
        if (m.marginTop = 0, m.marginLeft = 0, !c && d) {
            var n = +h.marginTop.split("px")[0], o = +h.marginLeft.split("px")[0];
            m.top -= j - n, m.bottom -= j - n, m.left -= l - o, m.right -= l - o, m.marginTop = n, 
            m.marginLeft = o;
        }
        return (c ? b.contains(g) : b === g && "BODY" !== g.nodeName) && (m = q(m, b)), 
        m;
    }
    function x(a) {
        var b = window.document.documentElement, c = w(a, b), d = Math.max(b.clientWidth, window.innerWidth || 0), e = Math.max(b.clientHeight, window.innerHeight || 0), f = p(b), g = p(b, "left");
        return u({
            top: f - c.top + c.marginTop,
            left: g - c.left + c.marginLeft,
            width: d,
            height: e
        });
    }
    function y(a) {
        var b = a.nodeName;
        return "BODY" !== b && "HTML" !== b && ("fixed" === i(a, "position") || y(j(a)));
    }
    function z(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        }, f = o(a, b);
        if ("viewport" === d) e = x(f); else {
            var g = void 0;
            "scrollParent" === d ? (g = k(j(a)), "BODY" === g.nodeName && (g = window.document.documentElement)) : g = "window" === d ? window.document.documentElement : d;
            var h = w(g, f);
            if ("HTML" !== g.nodeName || y(f)) e = h; else {
                var i = t(), l = i.height, m = i.width;
                e.top += h.top - h.marginTop, e.bottom = l + h.top, e.left += h.left - h.marginLeft, 
                e.right = m + h.left;
            }
        }
        return e.left += c, e.top += c, e.right -= c, e.bottom -= c, e;
    }
    function A(a) {
        return a.width * a.height;
    }
    function B(a, b, c, d, e) {
        var f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === a.indexOf("auto")) return a;
        var g = z(c, d, f, e), h = {
            top: {
                width: g.width,
                height: b.top - g.top
            },
            right: {
                width: g.right - b.right,
                height: g.height
            },
            bottom: {
                width: g.width,
                height: g.bottom - b.bottom
            },
            left: {
                width: b.left - g.left,
                height: g.height
            }
        }, i = Object.keys(h).map(function(a) {
            return Da({
                key: a
            }, h[a], {
                area: A(h[a])
            });
        }).sort(function(a, b) {
            return b.area - a.area;
        }), j = i.filter(function(a) {
            var b = a.width, d = a.height;
            return b >= c.clientWidth && d >= c.clientHeight;
        }), k = j.length > 0 ? j[0].key : i[0].key, l = a.split("-")[1];
        return k + (l ? "-" + l : "");
    }
    function C(a, b, c) {
        return w(c, o(b, c));
    }
    function D(a) {
        var b = window.getComputedStyle(a), c = parseFloat(b.marginTop) + parseFloat(b.marginBottom), d = parseFloat(b.marginLeft) + parseFloat(b.marginRight);
        return {
            width: a.offsetWidth + d,
            height: a.offsetHeight + c
        };
    }
    function E(a) {
        var b = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return a.replace(/left|right|bottom|top/g, function(a) {
            return b[a];
        });
    }
    function F(a, b, c) {
        c = c.split("-")[0];
        var d = D(a), e = {
            width: d.width,
            height: d.height
        }, f = -1 !== [ "right", "left" ].indexOf(c), g = f ? "top" : "left", h = f ? "left" : "top", i = f ? "height" : "width", j = f ? "width" : "height";
        return e[g] = b[g] + b[i] / 2 - d[i] / 2, e[h] = c === h ? b[h] - d[j] : b[E(h)], 
        e;
    }
    function G(a, b) {
        return Array.prototype.find ? a.find(b) : a.filter(b)[0];
    }
    function H(a, b, c) {
        if (Array.prototype.findIndex) return a.findIndex(function(a) {
            return a[b] === c;
        });
        var d = G(a, function(a) {
            return a[b] === c;
        });
        return a.indexOf(d);
    }
    function I(a, b, c) {
        return (void 0 === c ? a : a.slice(0, H(a, "name", c))).forEach(function(a) {
            a.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var c = a.function || a.fn;
            a.enabled && h(c) && (b.offsets.popper = u(b.offsets.popper), b.offsets.reference = u(b.offsets.reference), 
            b = c(b, a));
        }), b;
    }
    function J() {
        if (!this.state.isDestroyed) {
            var a = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            a.offsets.reference = C(this.state, this.popper, this.reference), a.placement = B(this.options.placement, a.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), 
            a.originalPlacement = a.placement, a.offsets.popper = F(this.popper, a.offsets.reference, a.placement), 
            a.offsets.popper.position = "absolute", a = I(this.modifiers, a), this.state.isCreated ? this.options.onUpdate(a) : (this.state.isCreated = !0, 
            this.options.onCreate(a));
        }
    }
    function K(a, b) {
        return a.some(function(a) {
            var c = a.name;
            return a.enabled && c === b;
        });
    }
    function L(a) {
        for (var b = [ !1, "ms", "Webkit", "Moz", "O" ], c = a.charAt(0).toUpperCase() + a.slice(1), d = 0; d < b.length - 1; d++) {
            var e = b[d], f = e ? "" + e + c : a;
            if (void 0 !== window.document.body.style[f]) return f;
        }
        return null;
    }
    function M() {
        return this.state.isDestroyed = !0, K(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), 
        this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", 
        this.popper.style[L("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), 
        this;
    }
    function N(a, b, c, d) {
        var e = "BODY" === a.nodeName, f = e ? window : a;
        f.addEventListener(b, c, {
            passive: !0
        }), e || N(k(f.parentNode), b, c, d), d.push(f);
    }
    function O(a, b, c, d) {
        c.updateBound = d, window.addEventListener("resize", c.updateBound, {
            passive: !0
        });
        var e = k(a);
        return N(e, "scroll", c.updateBound, c.scrollParents), c.scrollElement = e, c.eventsEnabled = !0, 
        c;
    }
    function P() {
        this.state.eventsEnabled || (this.state = O(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function Q(a, b) {
        return window.removeEventListener("resize", b.updateBound), b.scrollParents.forEach(function(a) {
            a.removeEventListener("scroll", b.updateBound);
        }), b.updateBound = null, b.scrollParents = [], b.scrollElement = null, b.eventsEnabled = !1, 
        b;
    }
    function R() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = Q(this.reference, this.state));
    }
    function S(a) {
        return "" !== a && !isNaN(parseFloat(a)) && isFinite(a);
    }
    function T(a, b) {
        Object.keys(b).forEach(function(c) {
            var d = "";
            -1 !== [ "width", "height", "top", "right", "bottom", "left" ].indexOf(c) && S(b[c]) && (d = "px"), 
            a.style[c] = b[c] + d;
        });
    }
    function U(a, b) {
        Object.keys(b).forEach(function(c) {
            !1 !== b[c] ? a.setAttribute(c, b[c]) : a.removeAttribute(c);
        });
    }
    function V(a) {
        return T(a.instance.popper, a.styles), U(a.instance.popper, a.attributes), a.arrowElement && Object.keys(a.arrowStyles).length && T(a.arrowElement, a.arrowStyles), 
        a;
    }
    function W(a, b, c, d, e) {
        var f = C(e, b, a), g = B(c.placement, f, b, a, c.modifiers.flip.boundariesElement, c.modifiers.flip.padding);
        return b.setAttribute("x-placement", g), T(b, {
            position: "absolute"
        }), c;
    }
    function X(a, b) {
        var c = b.x, d = b.y, e = a.offsets.popper, f = G(a.instance.modifiers, function(a) {
            return "applyStyle" === a.name;
        }).gpuAcceleration;
        void 0 !== f && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        var g = void 0 !== f ? f : b.gpuAcceleration, h = l(a.instance.popper), i = v(h), j = {
            position: e.position
        }, k = {
            left: Math.floor(e.left),
            top: Math.floor(e.top),
            bottom: Math.floor(e.bottom),
            right: Math.floor(e.right)
        }, m = "bottom" === c ? "top" : "bottom", n = "right" === d ? "left" : "right", o = L("transform"), p = void 0, q = void 0;
        if (q = "bottom" === m ? -i.height + k.bottom : k.top, p = "right" === n ? -i.width + k.right : k.left, 
        g && o) j[o] = "translate3d(" + p + "px, " + q + "px, 0)", j[m] = 0, j[n] = 0, j.willChange = "transform"; else {
            var r = "bottom" === m ? -1 : 1, s = "right" === n ? -1 : 1;
            j[m] = q * r, j[n] = p * s, j.willChange = m + ", " + n;
        }
        var t = {
            "x-placement": a.placement
        };
        return a.attributes = Da({}, t, a.attributes), a.styles = Da({}, j, a.styles), a.arrowStyles = Da({}, a.offsets.arrow, a.arrowStyles), 
        a;
    }
    function Y(a, b, c) {
        var d = G(a, function(a) {
            return a.name === b;
        }), e = !!d && a.some(function(a) {
            return a.name === c && a.enabled && a.order < d.order;
        });
        if (!e) {
            var f = "`" + b + "`", g = "`" + c + "`";
            console.warn(g + " modifier is required by " + f + " modifier in order to work, be sure to include it before " + f + "!");
        }
        return e;
    }
    function Z(a, b) {
        if (!Y(a.instance.modifiers, "arrow", "keepTogether")) return a;
        var c = b.element;
        if ("string" == typeof c) {
            if (!(c = a.instance.popper.querySelector(c))) return a;
        } else if (!a.instance.popper.contains(c)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), 
        a;
        var d = a.placement.split("-")[0], e = a.offsets, f = e.popper, g = e.reference, h = -1 !== [ "left", "right" ].indexOf(d), j = h ? "height" : "width", k = h ? "Top" : "Left", l = k.toLowerCase(), m = h ? "left" : "top", n = h ? "bottom" : "right", o = D(c)[j];
        g[n] - o < f[l] && (a.offsets.popper[l] -= f[l] - (g[n] - o)), g[l] + o > f[n] && (a.offsets.popper[l] += g[l] + o - f[n]);
        var p = g[l] + g[j] / 2 - o / 2, q = i(a.instance.popper, "margin" + k).replace("px", ""), r = p - u(a.offsets.popper)[l] - q;
        return r = Math.max(Math.min(f[j] - o, r), 0), a.arrowElement = c, a.offsets.arrow = {}, 
        a.offsets.arrow[l] = Math.round(r), a.offsets.arrow[m] = "", a;
    }
    function $(a) {
        return "end" === a ? "start" : "start" === a ? "end" : a;
    }
    function _(a) {
        var b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], c = Fa.indexOf(a), d = Fa.slice(c + 1).concat(Fa.slice(0, c));
        return b ? d.reverse() : d;
    }
    function aa(a, b) {
        if (K(a.instance.modifiers, "inner")) return a;
        if (a.flipped && a.placement === a.originalPlacement) return a;
        var c = z(a.instance.popper, a.instance.reference, b.padding, b.boundariesElement), d = a.placement.split("-")[0], e = E(d), f = a.placement.split("-")[1] || "", g = [];
        switch (b.behavior) {
          case Ga.FLIP:
            g = [ d, e ];
            break;

          case Ga.CLOCKWISE:
            g = _(d);
            break;

          case Ga.COUNTERCLOCKWISE:
            g = _(d, !0);
            break;

          default:
            g = b.behavior;
        }
        return g.forEach(function(h, i) {
            if (d !== h || g.length === i + 1) return a;
            d = a.placement.split("-")[0], e = E(d);
            var j = a.offsets.popper, k = a.offsets.reference, l = Math.floor, m = "left" === d && l(j.right) > l(k.left) || "right" === d && l(j.left) < l(k.right) || "top" === d && l(j.bottom) > l(k.top) || "bottom" === d && l(j.top) < l(k.bottom), n = l(j.left) < l(c.left), o = l(j.right) > l(c.right), p = l(j.top) < l(c.top), q = l(j.bottom) > l(c.bottom), r = "left" === d && n || "right" === d && o || "top" === d && p || "bottom" === d && q, s = -1 !== [ "top", "bottom" ].indexOf(d), t = !!b.flipVariations && (s && "start" === f && n || s && "end" === f && o || !s && "start" === f && p || !s && "end" === f && q);
            (m || r || t) && (a.flipped = !0, (m || r) && (d = g[i + 1]), t && (f = $(f)), a.placement = d + (f ? "-" + f : ""), 
            a.offsets.popper = Da({}, a.offsets.popper, F(a.instance.popper, a.offsets.reference, a.placement)), 
            a = I(a.instance.modifiers, a, "flip"));
        }), a;
    }
    function ba(a) {
        var b = a.offsets, c = b.popper, d = b.reference, e = a.placement.split("-")[0], f = Math.floor, g = -1 !== [ "top", "bottom" ].indexOf(e), h = g ? "right" : "bottom", i = g ? "left" : "top", j = g ? "width" : "height";
        return c[h] < f(d[i]) && (a.offsets.popper[i] = f(d[i]) - c[j]), c[i] > f(d[h]) && (a.offsets.popper[i] = f(d[h])), 
        a;
    }
    function ca(a, b, c, d) {
        var e = a.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), f = +e[1], g = e[2];
        if (!f) return a;
        if (0 === g.indexOf("%")) {
            var h = void 0;
            switch (g) {
              case "%p":
                h = c;
                break;

              case "%":
              case "%r":
              default:
                h = d;
            }
            return u(h)[b] / 100 * f;
        }
        if ("vh" === g || "vw" === g) {
            return ("vh" === g ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * f;
        }
        return f;
    }
    function da(a, b, c, d) {
        var e = [ 0, 0 ], f = -1 !== [ "right", "left" ].indexOf(d), g = a.split(/(\+|\-)/).map(function(a) {
            return a.trim();
        }), h = g.indexOf(G(g, function(a) {
            return -1 !== a.search(/,|\s/);
        }));
        g[h] && -1 === g[h].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var i = /\s*,\s*|\s+/, j = -1 !== h ? [ g.slice(0, h).concat([ g[h].split(i)[0] ]), [ g[h].split(i)[1] ].concat(g.slice(h + 1)) ] : [ g ];
        return j = j.map(function(a, d) {
            var e = (1 === d ? !f : f) ? "height" : "width", g = !1;
            return a.reduce(function(a, b) {
                return "" === a[a.length - 1] && -1 !== [ "+", "-" ].indexOf(b) ? (a[a.length - 1] = b, 
                g = !0, a) : g ? (a[a.length - 1] += b, g = !1, a) : a.concat(b);
            }, []).map(function(a) {
                return ca(a, e, b, c);
            });
        }), j.forEach(function(a, b) {
            a.forEach(function(c, d) {
                S(c) && (e[b] += c * ("-" === a[d - 1] ? -1 : 1));
            });
        }), e;
    }
    function ea(a, b) {
        var c = b.offset, d = a.placement, e = a.offsets, f = e.popper, g = e.reference, h = d.split("-")[0], i = void 0;
        return i = S(+c) ? [ +c, 0 ] : da(c, f, g, h), "left" === h ? (f.top += i[0], f.left -= i[1]) : "right" === h ? (f.top += i[0], 
        f.left += i[1]) : "top" === h ? (f.left += i[0], f.top -= i[1]) : "bottom" === h && (f.left += i[0], 
        f.top += i[1]), a.popper = f, a;
    }
    function fa(a, b) {
        var c = b.boundariesElement || l(a.instance.popper);
        a.instance.reference === c && (c = l(c));
        var d = z(a.instance.popper, a.instance.reference, b.padding, c);
        b.boundaries = d;
        var e = b.priority, f = a.offsets.popper, g = {
            primary: function(a) {
                var c = f[a];
                return f[a] < d[a] && !b.escapeWithReference && (c = Math.max(f[a], d[a])), Ca({}, a, c);
            },
            secondary: function(a) {
                var c = "right" === a ? "left" : "top", e = f[c];
                return f[a] > d[a] && !b.escapeWithReference && (e = Math.min(f[c], d[a] - ("right" === a ? f.width : f.height))), 
                Ca({}, c, e);
            }
        };
        return e.forEach(function(a) {
            var b = -1 !== [ "left", "top" ].indexOf(a) ? "primary" : "secondary";
            f = Da({}, f, g[b](a));
        }), a.offsets.popper = f, a;
    }
    function ga(a) {
        var b = a.placement, c = b.split("-")[0], d = b.split("-")[1];
        if (d) {
            var e = a.offsets, f = e.reference, g = e.popper, h = -1 !== [ "bottom", "top" ].indexOf(c), i = h ? "left" : "top", j = h ? "width" : "height", k = {
                start: Ca({}, i, f[i]),
                end: Ca({}, i, f[i] + f[j] - g[j])
            };
            a.offsets.popper = Da({}, g, k[d]);
        }
        return a;
    }
    function ha(a) {
        if (!Y(a.instance.modifiers, "hide", "preventOverflow")) return a;
        var b = a.offsets.reference, c = G(a.instance.modifiers, function(a) {
            return "preventOverflow" === a.name;
        }).boundaries;
        if (b.bottom < c.top || b.left > c.right || b.top > c.bottom || b.right < c.left) {
            if (!0 === a.hide) return a;
            a.hide = !0, a.attributes["x-out-of-boundaries"] = "";
        } else {
            if (!1 === a.hide) return a;
            a.hide = !1, a.attributes["x-out-of-boundaries"] = !1;
        }
        return a;
    }
    function ia(a) {
        var b = a.placement, c = b.split("-")[0], d = a.offsets, e = d.popper, f = d.reference, g = -1 !== [ "left", "right" ].indexOf(c), h = -1 === [ "top", "left" ].indexOf(c);
        return e[g ? "left" : "top"] = f[c] - (h ? e[g ? "width" : "height"] : 0), a.placement = E(b), 
        a.offsets.popper = u(e), a;
    }
    b = b && b.hasOwnProperty("default") ? b.default : b;
    for (var ja = function() {
        function a(a) {
            return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }
        function c() {
            return {
                bindType: g.end,
                delegateType: g.end,
                handle: function(a) {
                    if (b(a.target).is(this)) return a.handleObj.handler.apply(this, arguments);
                }
            };
        }
        function d() {
            if (window.QUnit) return !1;
            var a = document.createElement("bootstrap");
            for (var b in i) if (void 0 !== a.style[b]) return {
                end: i[b]
            };
            return !1;
        }
        function e(a) {
            var c = this, d = !1;
            return b(this).one(j.TRANSITION_END, function() {
                d = !0;
            }), setTimeout(function() {
                d || j.triggerTransitionEnd(c);
            }, a), this;
        }
        function f() {
            g = d(), b.fn.emulateTransitionEnd = e, j.supportsTransitionEnd() && (b.event.special[j.TRANSITION_END] = c());
        }
        var g = !1, h = 1e6, i = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, j = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(a) {
                do {
                    a += ~~(Math.random() * h);
                } while (document.getElementById(a));
                return a;
            },
            getSelectorFromElement: function(a) {
                var c = a.getAttribute("data-target");
                c && "#" !== c || (c = a.getAttribute("href") || "");
                try {
                    return b(document).find(c).length > 0 ? c : null;
                } catch (a) {
                    return null;
                }
            },
            reflow: function(a) {
                return a.offsetHeight;
            },
            triggerTransitionEnd: function(a) {
                b(a).trigger(g.end);
            },
            supportsTransitionEnd: function() {
                return Boolean(g);
            },
            isElement: function(a) {
                return (a[0] || a).nodeType;
            },
            typeCheckConfig: function(b, c, d) {
                for (var e in d) if (Object.prototype.hasOwnProperty.call(d, e)) {
                    var f = d[e], g = c[e], h = g && j.isElement(g) ? "element" : a(g);
                    if (!new RegExp(f).test(h)) throw new Error(b.toUpperCase() + ': Option "' + e + '" provided type "' + h + '" but expected type "' + f + '".');
                }
            }
        };
        return f(), j;
    }(), ka = d, la = e, ma = function() {
        var a = "alert", c = "4.0.0-beta.2", d = "bs.alert", e = "." + d, f = ".data-api", g = b.fn[a], h = 150, i = {
            DISMISS: '[data-dismiss="alert"]'
        }, j = {
            CLOSE: "close" + e,
            CLOSED: "closed" + e,
            CLICK_DATA_API: "click" + e + f
        }, k = {
            ALERT: "alert",
            FADE: "fade",
            SHOW: "show"
        }, l = function() {
            function a(a) {
                this._element = a;
            }
            var e = a.prototype;
            return e.close = function(a) {
                a = a || this._element;
                var b = this._getRootElement(a);
                this._triggerCloseEvent(b).isDefaultPrevented() || this._removeElement(b);
            }, e.dispose = function() {
                b.removeData(this._element, d), this._element = null;
            }, e._getRootElement = function(a) {
                var c = ja.getSelectorFromElement(a), d = !1;
                return c && (d = b(c)[0]), d || (d = b(a).closest("." + k.ALERT)[0]), d;
            }, e._triggerCloseEvent = function(a) {
                var c = b.Event(j.CLOSE);
                return b(a).trigger(c), c;
            }, e._removeElement = function(a) {
                var c = this;
                if (b(a).removeClass(k.SHOW), !ja.supportsTransitionEnd() || !b(a).hasClass(k.FADE)) return void this._destroyElement(a);
                b(a).one(ja.TRANSITION_END, function(b) {
                    return c._destroyElement(a, b);
                }).emulateTransitionEnd(h);
            }, e._destroyElement = function(a) {
                b(a).detach().trigger(j.CLOSED).remove();
            }, a._jQueryInterface = function(c) {
                return this.each(function() {
                    var e = b(this), f = e.data(d);
                    f || (f = new a(this), e.data(d, f)), "close" === c && f[c](this);
                });
            }, a._handleDismiss = function(a) {
                return function(b) {
                    b && b.preventDefault(), a.close(this);
                };
            }, ka(a, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            } ]), a;
        }();
        return b(document).on(j.CLICK_DATA_API, i.DISMISS, l._handleDismiss(new l())), b.fn[a] = l._jQueryInterface, 
        b.fn[a].Constructor = l, b.fn[a].noConflict = function() {
            return b.fn[a] = g, l._jQueryInterface;
        }, l;
    }(), na = function() {
        var a = "button", c = "4.0.0-beta.2", d = "bs.button", e = "." + d, f = ".data-api", g = b.fn[a], h = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }, i = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
        }, j = {
            CLICK_DATA_API: "click" + e + f,
            FOCUS_BLUR_DATA_API: "focus" + e + f + " blur" + e + f
        }, k = function() {
            function a(a) {
                this._element = a;
            }
            var e = a.prototype;
            return e.toggle = function() {
                var a = !0, c = !0, d = b(this._element).closest(i.DATA_TOGGLE)[0];
                if (d) {
                    var e = b(this._element).find(i.INPUT)[0];
                    if (e) {
                        if ("radio" === e.type) if (e.checked && b(this._element).hasClass(h.ACTIVE)) a = !1; else {
                            var f = b(d).find(i.ACTIVE)[0];
                            f && b(f).removeClass(h.ACTIVE);
                        }
                        if (a) {
                            if (e.hasAttribute("disabled") || d.hasAttribute("disabled") || e.classList.contains("disabled") || d.classList.contains("disabled")) return;
                            e.checked = !b(this._element).hasClass(h.ACTIVE), b(e).trigger("change");
                        }
                        e.focus(), c = !1;
                    }
                }
                c && this._element.setAttribute("aria-pressed", !b(this._element).hasClass(h.ACTIVE)), 
                a && b(this._element).toggleClass(h.ACTIVE);
            }, e.dispose = function() {
                b.removeData(this._element, d), this._element = null;
            }, a._jQueryInterface = function(c) {
                return this.each(function() {
                    var e = b(this).data(d);
                    e || (e = new a(this), b(this).data(d, e)), "toggle" === c && e[c]();
                });
            }, ka(a, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            } ]), a;
        }();
        return b(document).on(j.CLICK_DATA_API, i.DATA_TOGGLE_CARROT, function(a) {
            a.preventDefault();
            var c = a.target;
            b(c).hasClass(h.BUTTON) || (c = b(c).closest(i.BUTTON)), k._jQueryInterface.call(b(c), "toggle");
        }).on(j.FOCUS_BLUR_DATA_API, i.DATA_TOGGLE_CARROT, function(a) {
            var c = b(a.target).closest(i.BUTTON)[0];
            b(c).toggleClass(h.FOCUS, /^focus(in)?$/.test(a.type));
        }), b.fn[a] = k._jQueryInterface, b.fn[a].Constructor = k, b.fn[a].noConflict = function() {
            return b.fn[a] = g, k._jQueryInterface;
        }, k;
    }(), oa = (function() {
        var a = "carousel", c = "4.0.0-beta.2", d = "bs.carousel", e = "." + d, f = ".data-api", g = b.fn[a], h = 600, i = 37, j = 39, k = 500, l = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, m = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, n = {
            NEXT: "next",
            PREV: "prev",
            LEFT: "left",
            RIGHT: "right"
        }, o = {
            SLIDE: "slide" + e,
            SLID: "slid" + e,
            KEYDOWN: "keydown" + e,
            MOUSEENTER: "mouseenter" + e,
            MOUSELEAVE: "mouseleave" + e,
            TOUCHEND: "touchend" + e,
            LOAD_DATA_API: "load" + e + f,
            CLICK_DATA_API: "click" + e + f
        }, p = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "carousel-item-right",
            LEFT: "carousel-item-left",
            NEXT: "carousel-item-next",
            PREV: "carousel-item-prev",
            ITEM: "carousel-item"
        }, q = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, r = function() {
            function f(a, c) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, 
                this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(c), 
                this._element = b(a)[0], this._indicatorsElement = b(this._element).find(q.INDICATORS)[0], 
                this._addEventListeners();
            }
            var g = f.prototype;
            return g.next = function() {
                this._isSliding || this._slide(n.NEXT);
            }, g.nextWhenVisible = function() {
                !document.hidden && b(this._element).is(":visible") && "hidden" !== b(this._element).css("visibility") && this.next();
            }, g.prev = function() {
                this._isSliding || this._slide(n.PREV);
            }, g.pause = function(a) {
                a || (this._isPaused = !0), b(this._element).find(q.NEXT_PREV)[0] && ja.supportsTransitionEnd() && (ja.triggerTransitionEnd(this._element), 
                this.cycle(!0)), clearInterval(this._interval), this._interval = null;
            }, g.cycle = function(a) {
                a || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), 
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
            }, g.to = function(a) {
                var c = this;
                this._activeElement = b(this._element).find(q.ACTIVE_ITEM)[0];
                var d = this._getItemIndex(this._activeElement);
                if (!(a > this._items.length - 1 || a < 0)) {
                    if (this._isSliding) return void b(this._element).one(o.SLID, function() {
                        return c.to(a);
                    });
                    if (d === a) return this.pause(), void this.cycle();
                    var e = a > d ? n.NEXT : n.PREV;
                    this._slide(e, this._items[a]);
                }
            }, g.dispose = function() {
                b(this._element).off(e), b.removeData(this._element, d), this._items = null, this._config = null, 
                this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, 
                this._activeElement = null, this._indicatorsElement = null;
            }, g._getConfig = function(c) {
                return c = b.extend({}, l, c), ja.typeCheckConfig(a, c, m), c;
            }, g._addEventListeners = function() {
                var a = this;
                this._config.keyboard && b(this._element).on(o.KEYDOWN, function(b) {
                    return a._keydown(b);
                }), "hover" === this._config.pause && (b(this._element).on(o.MOUSEENTER, function(b) {
                    return a.pause(b);
                }).on(o.MOUSELEAVE, function(b) {
                    return a.cycle(b);
                }), "ontouchstart" in document.documentElement && b(this._element).on(o.TOUCHEND, function() {
                    a.pause(), a.touchTimeout && clearTimeout(a.touchTimeout), a.touchTimeout = setTimeout(function(b) {
                        return a.cycle(b);
                    }, k + a._config.interval);
                }));
            }, g._keydown = function(a) {
                if (!/input|textarea/i.test(a.target.tagName)) switch (a.which) {
                  case i:
                    a.preventDefault(), this.prev();
                    break;

                  case j:
                    a.preventDefault(), this.next();
                    break;

                  default:
                    return;
                }
            }, g._getItemIndex = function(a) {
                return this._items = b.makeArray(b(a).parent().find(q.ITEM)), this._items.indexOf(a);
            }, g._getItemByDirection = function(a, b) {
                var c = a === n.NEXT, d = a === n.PREV, e = this._getItemIndex(b), f = this._items.length - 1;
                if ((d && 0 === e || c && e === f) && !this._config.wrap) return b;
                var g = a === n.PREV ? -1 : 1, h = (e + g) % this._items.length;
                return -1 === h ? this._items[this._items.length - 1] : this._items[h];
            }, g._triggerSlideEvent = function(a, c) {
                var d = this._getItemIndex(a), e = this._getItemIndex(b(this._element).find(q.ACTIVE_ITEM)[0]), f = b.Event(o.SLIDE, {
                    relatedTarget: a,
                    direction: c,
                    from: e,
                    to: d
                });
                return b(this._element).trigger(f), f;
            }, g._setActiveIndicatorElement = function(a) {
                if (this._indicatorsElement) {
                    b(this._indicatorsElement).find(q.ACTIVE).removeClass(p.ACTIVE);
                    var c = this._indicatorsElement.children[this._getItemIndex(a)];
                    c && b(c).addClass(p.ACTIVE);
                }
            }, g._slide = function(a, c) {
                var d, e, f, g = this, i = b(this._element).find(q.ACTIVE_ITEM)[0], j = this._getItemIndex(i), k = c || i && this._getItemByDirection(a, i), l = this._getItemIndex(k), m = Boolean(this._interval);
                if (a === n.NEXT ? (d = p.LEFT, e = p.NEXT, f = n.LEFT) : (d = p.RIGHT, e = p.PREV, 
                f = n.RIGHT), k && b(k).hasClass(p.ACTIVE)) return void (this._isSliding = !1);
                if (!this._triggerSlideEvent(k, f).isDefaultPrevented() && i && k) {
                    this._isSliding = !0, m && this.pause(), this._setActiveIndicatorElement(k);
                    var r = b.Event(o.SLID, {
                        relatedTarget: k,
                        direction: f,
                        from: j,
                        to: l
                    });
                    ja.supportsTransitionEnd() && b(this._element).hasClass(p.SLIDE) ? (b(k).addClass(e), 
                    ja.reflow(k), b(i).addClass(d), b(k).addClass(d), b(i).one(ja.TRANSITION_END, function() {
                        b(k).removeClass(d + " " + e).addClass(p.ACTIVE), b(i).removeClass(p.ACTIVE + " " + e + " " + d), 
                        g._isSliding = !1, setTimeout(function() {
                            return b(g._element).trigger(r);
                        }, 0);
                    }).emulateTransitionEnd(h)) : (b(i).removeClass(p.ACTIVE), b(k).addClass(p.ACTIVE), 
                    this._isSliding = !1, b(this._element).trigger(r)), m && this.cycle();
                }
            }, f._jQueryInterface = function(a) {
                return this.each(function() {
                    var c = b(this).data(d), e = b.extend({}, l, b(this).data());
                    "object" == typeof a && b.extend(e, a);
                    var g = "string" == typeof a ? a : e.slide;
                    if (c || (c = new f(this, e), b(this).data(d, c)), "number" == typeof a) c.to(a); else if ("string" == typeof g) {
                        if (void 0 === c[g]) throw new Error('No method named "' + g + '"');
                        c[g]();
                    } else e.interval && (c.pause(), c.cycle());
                });
            }, f._dataApiClickHandler = function(a) {
                var c = ja.getSelectorFromElement(this);
                if (c) {
                    var e = b(c)[0];
                    if (e && b(e).hasClass(p.CAROUSEL)) {
                        var g = b.extend({}, b(e).data(), b(this).data()), h = this.getAttribute("data-slide-to");
                        h && (g.interval = !1), f._jQueryInterface.call(b(e), g), h && b(e).data(d).to(h), 
                        a.preventDefault();
                    }
                }
            }, ka(f, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            }, {
                key: "Default",
                get: function() {
                    return l;
                }
            } ]), f;
        }();
        return b(document).on(o.CLICK_DATA_API, q.DATA_SLIDE, r._dataApiClickHandler), b(window).on(o.LOAD_DATA_API, function() {
            b(q.DATA_RIDE).each(function() {
                var a = b(this);
                r._jQueryInterface.call(a, a.data());
            });
        }), b.fn[a] = r._jQueryInterface, b.fn[a].Constructor = r, b.fn[a].noConflict = function() {
            return b.fn[a] = g, r._jQueryInterface;
        }, r;
    }()), pa = function() {
        var a = "collapse", c = "4.0.0-beta.2", d = "bs.collapse", e = "." + d, f = ".data-api", g = b.fn[a], h = 600, i = {
            toggle: !0,
            parent: ""
        }, j = {
            toggle: "boolean",
            parent: "(string|element)"
        }, k = {
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            CLICK_DATA_API: "click" + e + f
        }, l = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        }, m = {
            WIDTH: "width",
            HEIGHT: "height"
        }, n = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, o = function() {
            function e(a, c) {
                this._isTransitioning = !1, this._element = a, this._config = this._getConfig(c), 
                this._triggerArray = b.makeArray(b('[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]'));
                for (var d = b(n.DATA_TOGGLE), e = 0; e < d.length; e++) {
                    var f = d[e], g = ja.getSelectorFromElement(f);
                    null !== g && b(g).filter(a).length > 0 && this._triggerArray.push(f);
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), 
                this._config.toggle && this.toggle();
            }
            var f = e.prototype;
            return f.toggle = function() {
                b(this._element).hasClass(l.SHOW) ? this.hide() : this.show();
            }, f.show = function() {
                var a = this;
                if (!this._isTransitioning && !b(this._element).hasClass(l.SHOW)) {
                    var c, f;
                    if (this._parent && (c = b.makeArray(b(this._parent).children().children(n.ACTIVES)), 
                    c.length || (c = null)), !(c && (f = b(c).data(d)) && f._isTransitioning)) {
                        var g = b.Event(k.SHOW);
                        if (b(this._element).trigger(g), !g.isDefaultPrevented()) {
                            c && (e._jQueryInterface.call(b(c), "hide"), f || b(c).data(d, null));
                            var i = this._getDimension();
                            b(this._element).removeClass(l.COLLAPSE).addClass(l.COLLAPSING), this._element.style[i] = 0, 
                            this._triggerArray.length && b(this._triggerArray).removeClass(l.COLLAPSED).attr("aria-expanded", !0), 
                            this.setTransitioning(!0);
                            var j = function() {
                                b(a._element).removeClass(l.COLLAPSING).addClass(l.COLLAPSE).addClass(l.SHOW), a._element.style[i] = "", 
                                a.setTransitioning(!1), b(a._element).trigger(k.SHOWN);
                            };
                            if (!ja.supportsTransitionEnd()) return void j();
                            var m = i[0].toUpperCase() + i.slice(1), o = "scroll" + m;
                            b(this._element).one(ja.TRANSITION_END, j).emulateTransitionEnd(h), this._element.style[i] = this._element[o] + "px";
                        }
                    }
                }
            }, f.hide = function() {
                var a = this;
                if (!this._isTransitioning && b(this._element).hasClass(l.SHOW)) {
                    var c = b.Event(k.HIDE);
                    if (b(this._element).trigger(c), !c.isDefaultPrevented()) {
                        var d = this._getDimension();
                        if (this._element.style[d] = this._element.getBoundingClientRect()[d] + "px", ja.reflow(this._element), 
                        b(this._element).addClass(l.COLLAPSING).removeClass(l.COLLAPSE).removeClass(l.SHOW), 
                        this._triggerArray.length) for (var e = 0; e < this._triggerArray.length; e++) {
                            var f = this._triggerArray[e], g = ja.getSelectorFromElement(f);
                            if (null !== g) {
                                var i = b(g);
                                i.hasClass(l.SHOW) || b(f).addClass(l.COLLAPSED).attr("aria-expanded", !1);
                            }
                        }
                        this.setTransitioning(!0);
                        var j = function() {
                            a.setTransitioning(!1), b(a._element).removeClass(l.COLLAPSING).addClass(l.COLLAPSE).trigger(k.HIDDEN);
                        };
                        if (this._element.style[d] = "", !ja.supportsTransitionEnd()) return void j();
                        b(this._element).one(ja.TRANSITION_END, j).emulateTransitionEnd(h);
                    }
                }
            }, f.setTransitioning = function(a) {
                this._isTransitioning = a;
            }, f.dispose = function() {
                b.removeData(this._element, d), this._config = null, this._parent = null, this._element = null, 
                this._triggerArray = null, this._isTransitioning = null;
            }, f._getConfig = function(c) {
                return c = b.extend({}, i, c), c.toggle = Boolean(c.toggle), ja.typeCheckConfig(a, c, j), 
                c;
            }, f._getDimension = function() {
                return b(this._element).hasClass(m.WIDTH) ? m.WIDTH : m.HEIGHT;
            }, f._getParent = function() {
                var a = this, c = null;
                ja.isElement(this._config.parent) ? (c = this._config.parent, void 0 !== this._config.parent.jquery && (c = this._config.parent[0])) : c = b(this._config.parent)[0];
                var d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return b(c).find(d).each(function(b, c) {
                    a._addAriaAndCollapsedClass(e._getTargetFromElement(c), [ c ]);
                }), c;
            }, f._addAriaAndCollapsedClass = function(a, c) {
                if (a) {
                    var d = b(a).hasClass(l.SHOW);
                    c.length && b(c).toggleClass(l.COLLAPSED, !d).attr("aria-expanded", d);
                }
            }, e._getTargetFromElement = function(a) {
                var c = ja.getSelectorFromElement(a);
                return c ? b(c)[0] : null;
            }, e._jQueryInterface = function(a) {
                return this.each(function() {
                    var c = b(this), f = c.data(d), g = b.extend({}, i, c.data(), "object" == typeof a && a);
                    if (!f && g.toggle && /show|hide/.test(a) && (g.toggle = !1), f || (f = new e(this, g), 
                    c.data(d, f)), "string" == typeof a) {
                        if (void 0 === f[a]) throw new Error('No method named "' + a + '"');
                        f[a]();
                    }
                });
            }, ka(e, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            }, {
                key: "Default",
                get: function() {
                    return i;
                }
            } ]), e;
        }();
        return b(document).on(k.CLICK_DATA_API, n.DATA_TOGGLE, function(a) {
            "A" === a.currentTarget.tagName && a.preventDefault();
            var c = b(this), e = ja.getSelectorFromElement(this);
            b(e).each(function() {
                var a = b(this), e = a.data(d), f = e ? "toggle" : c.data();
                o._jQueryInterface.call(a, f);
            });
        }), b.fn[a] = o._jQueryInterface, b.fn[a].Constructor = o, b.fn[a].noConflict = function() {
            return b.fn[a] = g, o._jQueryInterface;
        }, o;
    }(), qa = [ "native code", "[object MutationObserverConstructor]" ], ra = function(a) {
        return qa.some(function(b) {
            return (a || "").toString().indexOf(b) > -1;
        });
    }, sa = "undefined" != typeof window, ta = [ "Edge", "Trident", "Firefox" ], ua = 0, va = 0; va < ta.length; va += 1) if (sa && navigator.userAgent.indexOf(ta[va]) >= 0) {
        ua = 1;
        break;
    }
    var wa = sa && ra(window.MutationObserver), xa = wa ? f : g, ya = void 0, za = function() {
        return void 0 === ya && (ya = -1 !== navigator.appVersion.indexOf("MSIE 10")), ya;
    }, Aa = function(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }, Ba = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), 
                Object.defineProperty(a, d.key, d);
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    }(), Ca = function(a, b, c) {
        return b in a ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[b] = c, a;
    }, Da = Object.assign || function(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b];
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
        }
        return a;
    }, Ea = [ "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" ], Fa = Ea.slice(3), Ga = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }, Ha = {
        shift: {
            order: 100,
            enabled: !0,
            fn: ga
        },
        offset: {
            order: 200,
            enabled: !0,
            fn: ea,
            offset: 0
        },
        preventOverflow: {
            order: 300,
            enabled: !0,
            fn: fa,
            priority: [ "left", "right", "top", "bottom" ],
            padding: 5,
            boundariesElement: "scrollParent"
        },
        keepTogether: {
            order: 400,
            enabled: !0,
            fn: ba
        },
        arrow: {
            order: 500,
            enabled: !0,
            fn: Z,
            element: "[x-arrow]"
        },
        flip: {
            order: 600,
            enabled: !0,
            fn: aa,
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport"
        },
        inner: {
            order: 700,
            enabled: !1,
            fn: ia
        },
        hide: {
            order: 800,
            enabled: !0,
            fn: ha
        },
        computeStyle: {
            order: 850,
            enabled: !0,
            fn: X,
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
        },
        applyStyle: {
            order: 900,
            enabled: !0,
            fn: V,
            onLoad: W,
            gpuAcceleration: void 0
        }
    }, Ia = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: Ha
    }, Ja = function() {
        function a(b, c) {
            var d = this, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Aa(this, a), this.scheduleUpdate = function() {
                return requestAnimationFrame(d.update);
            }, this.update = xa(this.update.bind(this)), this.options = Da({}, a.Defaults, e), 
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = b.jquery ? b[0] : b, this.popper = c.jquery ? c[0] : c, this.options.modifiers = {}, 
            Object.keys(Da({}, a.Defaults.modifiers, e.modifiers)).forEach(function(b) {
                d.options.modifiers[b] = Da({}, a.Defaults.modifiers[b] || {}, e.modifiers ? e.modifiers[b] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(a) {
                return Da({
                    name: a
                }, d.options.modifiers[a]);
            }).sort(function(a, b) {
                return a.order - b.order;
            }), this.modifiers.forEach(function(a) {
                a.enabled && h(a.onLoad) && a.onLoad(d.reference, d.popper, d.options, a, d.state);
            }), this.update();
            var f = this.options.eventsEnabled;
            f && this.enableEventListeners(), this.state.eventsEnabled = f;
        }
        return Ba(a, [ {
            key: "update",
            value: function() {
                return J.call(this);
            }
        }, {
            key: "destroy",
            value: function() {
                return M.call(this);
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return P.call(this);
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return R.call(this);
            }
        } ]), a;
    }();
    Ja.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ja.placements = Ea, 
    Ja.Defaults = Ia;
    var Ka = function() {
        if (void 0 === Ja) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
        var a = "dropdown", c = "4.0.0-beta.2", d = "bs.dropdown", e = "." + d, f = ".data-api", g = b.fn[a], h = 27, i = 32, j = 9, k = 38, l = 40, m = 3, n = new RegExp(k + "|" + l + "|" + h), o = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            CLICK: "click" + e,
            CLICK_DATA_API: "click" + e + f,
            KEYDOWN_DATA_API: "keydown" + e + f,
            KEYUP_DATA_API: "keyup" + e + f
        }, p = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left"
        }, q = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
        }, r = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end"
        }, s = {
            offset: 0,
            flip: !0
        }, t = {
            offset: "(number|string|function)",
            flip: "boolean"
        }, u = function() {
            function f(a, b) {
                this._element = a, this._popper = null, this._config = this._getConfig(b), this._menu = this._getMenuElement(), 
                this._inNavbar = this._detectNavbar(), this._addEventListeners();
            }
            var g = f.prototype;
            return g.toggle = function() {
                if (!this._element.disabled && !b(this._element).hasClass(p.DISABLED)) {
                    var a = f._getParentFromElement(this._element), c = b(this._menu).hasClass(p.SHOW);
                    if (f._clearMenus(), !c) {
                        var d = {
                            relatedTarget: this._element
                        }, e = b.Event(o.SHOW, d);
                        if (b(a).trigger(e), !e.isDefaultPrevented()) {
                            var g = this._element;
                            b(a).hasClass(p.DROPUP) && (b(this._menu).hasClass(p.MENULEFT) || b(this._menu).hasClass(p.MENURIGHT)) && (g = a), 
                            this._popper = new Ja(g, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !b(a).closest(q.NAVBAR_NAV).length && b("body").children().on("mouseover", null, b.noop), 
                            this._element.focus(), this._element.setAttribute("aria-expanded", !0), b(this._menu).toggleClass(p.SHOW), 
                            b(a).toggleClass(p.SHOW).trigger(b.Event(o.SHOWN, d));
                        }
                    }
                }
            }, g.dispose = function() {
                b.removeData(this._element, d), b(this._element).off(e), this._element = null, this._menu = null, 
                null !== this._popper && this._popper.destroy(), this._popper = null;
            }, g.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
            }, g._addEventListeners = function() {
                var a = this;
                b(this._element).on(o.CLICK, function(b) {
                    b.preventDefault(), b.stopPropagation(), a.toggle();
                });
            }, g._getConfig = function(c) {
                return c = b.extend({}, this.constructor.Default, b(this._element).data(), c), ja.typeCheckConfig(a, c, this.constructor.DefaultType), 
                c;
            }, g._getMenuElement = function() {
                if (!this._menu) {
                    var a = f._getParentFromElement(this._element);
                    this._menu = b(a).find(q.MENU)[0];
                }
                return this._menu;
            }, g._getPlacement = function() {
                var a = b(this._element).parent(), c = r.BOTTOM;
                return a.hasClass(p.DROPUP) ? (c = r.TOP, b(this._menu).hasClass(p.MENURIGHT) && (c = r.TOPEND)) : b(this._menu).hasClass(p.MENURIGHT) && (c = r.BOTTOMEND), 
                c;
            }, g._detectNavbar = function() {
                return b(this._element).closest(".navbar").length > 0;
            }, g._getPopperConfig = function() {
                var a = this, c = {};
                "function" == typeof this._config.offset ? c.fn = function(c) {
                    return c.offsets = b.extend({}, c.offsets, a._config.offset(c.offsets) || {}), c;
                } : c.offset = this._config.offset;
                var d = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: c,
                        flip: {
                            enabled: this._config.flip
                        }
                    }
                };
                return this._inNavbar && (d.modifiers.applyStyle = {
                    enabled: !this._inNavbar
                }), d;
            }, f._jQueryInterface = function(a) {
                return this.each(function() {
                    var c = b(this).data(d), e = "object" == typeof a ? a : null;
                    if (c || (c = new f(this, e), b(this).data(d, c)), "string" == typeof a) {
                        if (void 0 === c[a]) throw new Error('No method named "' + a + '"');
                        c[a]();
                    }
                });
            }, f._clearMenus = function(a) {
                if (!a || a.which !== m && ("keyup" !== a.type || a.which === j)) for (var c = b.makeArray(b(q.DATA_TOGGLE)), e = 0; e < c.length; e++) {
                    var g = f._getParentFromElement(c[e]), h = b(c[e]).data(d), i = {
                        relatedTarget: c[e]
                    };
                    if (h) {
                        var k = h._menu;
                        if (b(g).hasClass(p.SHOW) && !(a && ("click" === a.type && /input|textarea/i.test(a.target.tagName) || "keyup" === a.type && a.which === j) && b.contains(g, a.target))) {
                            var l = b.Event(o.HIDE, i);
                            b(g).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && b("body").children().off("mouseover", null, b.noop), 
                            c[e].setAttribute("aria-expanded", "false"), b(k).removeClass(p.SHOW), b(g).removeClass(p.SHOW).trigger(b.Event(o.HIDDEN, i)));
                        }
                    }
                }
            }, f._getParentFromElement = function(a) {
                var c, d = ja.getSelectorFromElement(a);
                return d && (c = b(d)[0]), c || a.parentNode;
            }, f._dataApiKeydownHandler = function(a) {
                if (!(!n.test(a.which) || /button/i.test(a.target.tagName) && a.which === i || /input|textarea/i.test(a.target.tagName) || (a.preventDefault(), 
                a.stopPropagation(), this.disabled || b(this).hasClass(p.DISABLED)))) {
                    var c = f._getParentFromElement(this), d = b(c).hasClass(p.SHOW);
                    if (!d && (a.which !== h || a.which !== i) || d && (a.which === h || a.which === i)) {
                        if (a.which === h) {
                            var e = b(c).find(q.DATA_TOGGLE)[0];
                            b(e).trigger("focus");
                        }
                        return void b(this).trigger("click");
                    }
                    var g = b(c).find(q.VISIBLE_ITEMS).get();
                    if (g.length) {
                        var j = g.indexOf(a.target);
                        a.which === k && j > 0 && j--, a.which === l && j < g.length - 1 && j++, j < 0 && (j = 0), 
                        g[j].focus();
                    }
                }
            }, ka(f, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            }, {
                key: "Default",
                get: function() {
                    return s;
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return t;
                }
            } ]), f;
        }();
        return b(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, u._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.MENU, u._dataApiKeydownHandler).on(o.CLICK_DATA_API + " " + o.KEYUP_DATA_API, u._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, function(a) {
            a.preventDefault(), a.stopPropagation(), u._jQueryInterface.call(b(this), "toggle");
        }).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
            a.stopPropagation();
        }), b.fn[a] = u._jQueryInterface, b.fn[a].Constructor = u, b.fn[a].noConflict = function() {
            return b.fn[a] = g, u._jQueryInterface;
        }, u;
    }(), La = function() {
        var a = "modal", c = "4.0.0-beta.2", d = "bs.modal", e = "." + d, f = ".data-api", g = b.fn[a], h = 300, i = 150, j = 27, k = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, l = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, m = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            FOCUSIN: "focusin" + e,
            RESIZE: "resize" + e,
            CLICK_DISMISS: "click.dismiss" + e,
            KEYDOWN_DISMISS: "keydown.dismiss" + e,
            MOUSEUP_DISMISS: "mouseup.dismiss" + e,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + e,
            CLICK_DATA_API: "click" + e + f
        }, n = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show"
        }, o = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, p = function() {
            function f(a, c) {
                this._config = this._getConfig(c), this._element = a, this._dialog = b(a).find(o.DIALOG)[0], 
                this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, 
                this._originalBodyPadding = 0, this._scrollbarWidth = 0;
            }
            var g = f.prototype;
            return g.toggle = function(a) {
                return this._isShown ? this.hide() : this.show(a);
            }, g.show = function(a) {
                var c = this;
                if (!this._isTransitioning && !this._isShown) {
                    ja.supportsTransitionEnd() && b(this._element).hasClass(n.FADE) && (this._isTransitioning = !0);
                    var d = b.Event(m.SHOW, {
                        relatedTarget: a
                    });
                    b(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, 
                    this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), b(document.body).addClass(n.OPEN), 
                    this._setEscapeEvent(), this._setResizeEvent(), b(this._element).on(m.CLICK_DISMISS, o.DATA_DISMISS, function(a) {
                        return c.hide(a);
                    }), b(this._dialog).on(m.MOUSEDOWN_DISMISS, function() {
                        b(c._element).one(m.MOUSEUP_DISMISS, function(a) {
                            b(a.target).is(c._element) && (c._ignoreBackdropClick = !0);
                        });
                    }), this._showBackdrop(function() {
                        return c._showElement(a);
                    }));
                }
            }, g.hide = function(a) {
                var c = this;
                if (a && a.preventDefault(), !this._isTransitioning && this._isShown) {
                    var d = b.Event(m.HIDE);
                    if (b(this._element).trigger(d), this._isShown && !d.isDefaultPrevented()) {
                        this._isShown = !1;
                        var e = ja.supportsTransitionEnd() && b(this._element).hasClass(n.FADE);
                        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), 
                        b(document).off(m.FOCUSIN), b(this._element).removeClass(n.SHOW), b(this._element).off(m.CLICK_DISMISS), 
                        b(this._dialog).off(m.MOUSEDOWN_DISMISS), e ? b(this._element).one(ja.TRANSITION_END, function(a) {
                            return c._hideModal(a);
                        }).emulateTransitionEnd(h) : this._hideModal();
                    }
                }
            }, g.dispose = function() {
                b.removeData(this._element, d), b(window, document, this._element, this._backdrop).off(e), 
                this._config = null, this._element = null, this._dialog = null, this._backdrop = null, 
                this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, 
                this._scrollbarWidth = null;
            }, g.handleUpdate = function() {
                this._adjustDialog();
            }, g._getConfig = function(c) {
                return c = b.extend({}, k, c), ja.typeCheckConfig(a, c, l), c;
            }, g._showElement = function(a) {
                var c = this, d = ja.supportsTransitionEnd() && b(this._element).hasClass(n.FADE);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), 
                this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), 
                this._element.scrollTop = 0, d && ja.reflow(this._element), b(this._element).addClass(n.SHOW), 
                this._config.focus && this._enforceFocus();
                var e = b.Event(m.SHOWN, {
                    relatedTarget: a
                }), f = function() {
                    c._config.focus && c._element.focus(), c._isTransitioning = !1, b(c._element).trigger(e);
                };
                d ? b(this._dialog).one(ja.TRANSITION_END, f).emulateTransitionEnd(h) : f();
            }, g._enforceFocus = function() {
                var a = this;
                b(document).off(m.FOCUSIN).on(m.FOCUSIN, function(c) {
                    document === c.target || a._element === c.target || b(a._element).has(c.target).length || a._element.focus();
                });
            }, g._setEscapeEvent = function() {
                var a = this;
                this._isShown && this._config.keyboard ? b(this._element).on(m.KEYDOWN_DISMISS, function(b) {
                    b.which === j && (b.preventDefault(), a.hide());
                }) : this._isShown || b(this._element).off(m.KEYDOWN_DISMISS);
            }, g._setResizeEvent = function() {
                var a = this;
                this._isShown ? b(window).on(m.RESIZE, function(b) {
                    return a.handleUpdate(b);
                }) : b(window).off(m.RESIZE);
            }, g._hideModal = function() {
                var a = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), 
                this._isTransitioning = !1, this._showBackdrop(function() {
                    b(document.body).removeClass(n.OPEN), a._resetAdjustments(), a._resetScrollbar(), 
                    b(a._element).trigger(m.HIDDEN);
                });
            }, g._removeBackdrop = function() {
                this._backdrop && (b(this._backdrop).remove(), this._backdrop = null);
            }, g._showBackdrop = function(a) {
                var c = this, d = b(this._element).hasClass(n.FADE) ? n.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var e = ja.supportsTransitionEnd() && d;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = n.BACKDROP, 
                    d && b(this._backdrop).addClass(d), b(this._backdrop).appendTo(document.body), b(this._element).on(m.CLICK_DISMISS, function(a) {
                        if (c._ignoreBackdropClick) return void (c._ignoreBackdropClick = !1);
                        a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide());
                    }), e && ja.reflow(this._backdrop), b(this._backdrop).addClass(n.SHOW), !a) return;
                    if (!e) return void a();
                    b(this._backdrop).one(ja.TRANSITION_END, a).emulateTransitionEnd(i);
                } else if (!this._isShown && this._backdrop) {
                    b(this._backdrop).removeClass(n.SHOW);
                    var f = function() {
                        c._removeBackdrop(), a && a();
                    };
                    ja.supportsTransitionEnd() && b(this._element).hasClass(n.FADE) ? b(this._backdrop).one(ja.TRANSITION_END, f).emulateTransitionEnd(i) : f();
                } else a && a();
            }, g._adjustDialog = function() {
                var a = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), 
                this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px");
            }, g._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
            }, g._checkScrollbar = function() {
                var a = document.body.getBoundingClientRect();
                this._isBodyOverflowing = a.left + a.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
            }, g._setScrollbar = function() {
                var a = this;
                if (this._isBodyOverflowing) {
                    b(o.FIXED_CONTENT).each(function(c, d) {
                        var e = b(d)[0].style.paddingRight, f = b(d).css("padding-right");
                        b(d).data("padding-right", e).css("padding-right", parseFloat(f) + a._scrollbarWidth + "px");
                    }), b(o.STICKY_CONTENT).each(function(c, d) {
                        var e = b(d)[0].style.marginRight, f = b(d).css("margin-right");
                        b(d).data("margin-right", e).css("margin-right", parseFloat(f) - a._scrollbarWidth + "px");
                    }), b(o.NAVBAR_TOGGLER).each(function(c, d) {
                        var e = b(d)[0].style.marginRight, f = b(d).css("margin-right");
                        b(d).data("margin-right", e).css("margin-right", parseFloat(f) + a._scrollbarWidth + "px");
                    });
                    var c = document.body.style.paddingRight, d = b("body").css("padding-right");
                    b("body").data("padding-right", c).css("padding-right", parseFloat(d) + this._scrollbarWidth + "px");
                }
            }, g._resetScrollbar = function() {
                b(o.FIXED_CONTENT).each(function(a, c) {
                    var d = b(c).data("padding-right");
                    void 0 !== d && b(c).css("padding-right", d).removeData("padding-right");
                }), b(o.STICKY_CONTENT + ", " + o.NAVBAR_TOGGLER).each(function(a, c) {
                    var d = b(c).data("margin-right");
                    void 0 !== d && b(c).css("margin-right", d).removeData("margin-right");
                });
                var a = b("body").data("padding-right");
                void 0 !== a && b("body").css("padding-right", a).removeData("padding-right");
            }, g._getScrollbarWidth = function() {
                var a = document.createElement("div");
                a.className = n.SCROLLBAR_MEASURER, document.body.appendChild(a);
                var b = a.getBoundingClientRect().width - a.clientWidth;
                return document.body.removeChild(a), b;
            }, f._jQueryInterface = function(a, c) {
                return this.each(function() {
                    var e = b(this).data(d), g = b.extend({}, f.Default, b(this).data(), "object" == typeof a && a);
                    if (e || (e = new f(this, g), b(this).data(d, e)), "string" == typeof a) {
                        if (void 0 === e[a]) throw new Error('No method named "' + a + '"');
                        e[a](c);
                    } else g.show && e.show(c);
                });
            }, ka(f, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            }, {
                key: "Default",
                get: function() {
                    return k;
                }
            } ]), f;
        }();
        return b(document).on(m.CLICK_DATA_API, o.DATA_TOGGLE, function(a) {
            var c, e = this, f = ja.getSelectorFromElement(this);
            f && (c = b(f)[0]);
            var g = b(c).data(d) ? "toggle" : b.extend({}, b(c).data(), b(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || a.preventDefault();
            var h = b(c).one(m.SHOW, function(a) {
                a.isDefaultPrevented() || h.one(m.HIDDEN, function() {
                    b(e).is(":visible") && e.focus();
                });
            });
            p._jQueryInterface.call(b(c), g, this);
        }), b.fn[a] = p._jQueryInterface, b.fn[a].Constructor = p, b.fn[a].noConflict = function() {
            return b.fn[a] = g, p._jQueryInterface;
        }, p;
    }(), Ma = function() {
        if (void 0 === Ja) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
        var a = "tooltip", c = "4.0.0-beta.2", d = "bs.tooltip", e = "." + d, f = b.fn[a], g = 150, h = "bs-tooltip", i = new RegExp("(^|\\s)" + h + "\\S+", "g"), j = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)"
        }, k = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }, l = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip"
        }, m = {
            SHOW: "show",
            OUT: "out"
        }, n = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            INSERTED: "inserted" + e,
            CLICK: "click" + e,
            FOCUSIN: "focusin" + e,
            FOCUSOUT: "focusout" + e,
            MOUSEENTER: "mouseenter" + e,
            MOUSELEAVE: "mouseleave" + e
        }, o = {
            FADE: "fade",
            SHOW: "show"
        }, p = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner",
            ARROW: ".arrow"
        }, q = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
        }, r = function() {
            function f(a, b) {
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, 
                this._popper = null, this.element = a, this.config = this._getConfig(b), this.tip = null, 
                this._setListeners();
            }
            var r = f.prototype;
            return r.enable = function() {
                this._isEnabled = !0;
            }, r.disable = function() {
                this._isEnabled = !1;
            }, r.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled;
            }, r.toggle = function(a) {
                if (this._isEnabled) if (a) {
                    var c = this.constructor.DATA_KEY, d = b(a.currentTarget).data(c);
                    d || (d = new this.constructor(a.currentTarget, this._getDelegateConfig()), b(a.currentTarget).data(c, d)), 
                    d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d);
                } else {
                    if (b(this.getTipElement()).hasClass(o.SHOW)) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }, r.dispose = function() {
                clearTimeout(this._timeout), b.removeData(this.element, this.constructor.DATA_KEY), 
                b(this.element).off(this.constructor.EVENT_KEY), b(this.element).closest(".modal").off("hide.bs.modal"), 
                this.tip && b(this.tip).remove(), this._isEnabled = null, this._timeout = null, 
                this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), 
                this._popper = null, this.element = null, this.config = null, this.tip = null;
            }, r.show = function() {
                var a = this;
                if ("none" === b(this.element).css("display")) throw new Error("Please use show on visible elements");
                var c = b.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    b(this.element).trigger(c);
                    var d = b.contains(this.element.ownerDocument.documentElement, this.element);
                    if (c.isDefaultPrevented() || !d) return;
                    var e = this.getTipElement(), g = ja.getUID(this.constructor.NAME);
                    e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), 
                    this.config.animation && b(e).addClass(o.FADE);
                    var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement, i = this._getAttachment(h);
                    this.addAttachmentClass(i);
                    var j = !1 === this.config.container ? document.body : b(this.config.container);
                    b(e).data(this.constructor.DATA_KEY, this), b.contains(this.element.ownerDocument.documentElement, this.tip) || b(e).appendTo(j), 
                    b(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ja(this.element, e, {
                        placement: i,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: p.ARROW
                            }
                        },
                        onCreate: function(b) {
                            b.originalPlacement !== b.placement && a._handlePopperPlacementChange(b);
                        },
                        onUpdate: function(b) {
                            a._handlePopperPlacementChange(b);
                        }
                    }), b(e).addClass(o.SHOW), "ontouchstart" in document.documentElement && b("body").children().on("mouseover", null, b.noop);
                    var k = function() {
                        a.config.animation && a._fixTransition();
                        var c = a._hoverState;
                        a._hoverState = null, b(a.element).trigger(a.constructor.Event.SHOWN), c === m.OUT && a._leave(null, a);
                    };
                    ja.supportsTransitionEnd() && b(this.tip).hasClass(o.FADE) ? b(this.tip).one(ja.TRANSITION_END, k).emulateTransitionEnd(f._TRANSITION_DURATION) : k();
                }
            }, r.hide = function(a) {
                var c = this, d = this.getTipElement(), e = b.Event(this.constructor.Event.HIDE), f = function() {
                    c._hoverState !== m.SHOW && d.parentNode && d.parentNode.removeChild(d), c._cleanTipClass(), 
                    c.element.removeAttribute("aria-describedby"), b(c.element).trigger(c.constructor.Event.HIDDEN), 
                    null !== c._popper && c._popper.destroy(), a && a();
                };
                b(this.element).trigger(e), e.isDefaultPrevented() || (b(d).removeClass(o.SHOW), 
                "ontouchstart" in document.documentElement && b("body").children().off("mouseover", null, b.noop), 
                this._activeTrigger[q.CLICK] = !1, this._activeTrigger[q.FOCUS] = !1, this._activeTrigger[q.HOVER] = !1, 
                ja.supportsTransitionEnd() && b(this.tip).hasClass(o.FADE) ? b(d).one(ja.TRANSITION_END, f).emulateTransitionEnd(g) : f(), 
                this._hoverState = "");
            }, r.update = function() {
                null !== this._popper && this._popper.scheduleUpdate();
            }, r.isWithContent = function() {
                return Boolean(this.getTitle());
            }, r.addAttachmentClass = function(a) {
                b(this.getTipElement()).addClass(h + "-" + a);
            }, r.getTipElement = function() {
                return this.tip = this.tip || b(this.config.template)[0], this.tip;
            }, r.setContent = function() {
                var a = b(this.getTipElement());
                this.setElementContent(a.find(p.TOOLTIP_INNER), this.getTitle()), a.removeClass(o.FADE + " " + o.SHOW);
            }, r.setElementContent = function(a, c) {
                var d = this.config.html;
                "object" == typeof c && (c.nodeType || c.jquery) ? d ? b(c).parent().is(a) || a.empty().append(c) : a.text(b(c).text()) : a[d ? "html" : "text"](c);
            }, r.getTitle = function() {
                var a = this.element.getAttribute("data-original-title");
                return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), 
                a;
            }, r._getAttachment = function(a) {
                return k[a.toUpperCase()];
            }, r._setListeners = function() {
                var a = this;
                this.config.trigger.split(" ").forEach(function(c) {
                    if ("click" === c) b(a.element).on(a.constructor.Event.CLICK, a.config.selector, function(b) {
                        return a.toggle(b);
                    }); else if (c !== q.MANUAL) {
                        var d = c === q.HOVER ? a.constructor.Event.MOUSEENTER : a.constructor.Event.FOCUSIN, e = c === q.HOVER ? a.constructor.Event.MOUSELEAVE : a.constructor.Event.FOCUSOUT;
                        b(a.element).on(d, a.config.selector, function(b) {
                            return a._enter(b);
                        }).on(e, a.config.selector, function(b) {
                            return a._leave(b);
                        });
                    }
                    b(a.element).closest(".modal").on("hide.bs.modal", function() {
                        return a.hide();
                    });
                }), this.config.selector ? this.config = b.extend({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle();
            }, r._fixTitle = function() {
                var a = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), 
                this.element.setAttribute("title", ""));
            }, r._enter = function(a, c) {
                var d = this.constructor.DATA_KEY;
                return c = c || b(a.currentTarget).data(d), c || (c = new this.constructor(a.currentTarget, this._getDelegateConfig()), 
                b(a.currentTarget).data(d, c)), a && (c._activeTrigger["focusin" === a.type ? q.FOCUS : q.HOVER] = !0), 
                b(c.getTipElement()).hasClass(o.SHOW) || c._hoverState === m.SHOW ? void (c._hoverState = m.SHOW) : (clearTimeout(c._timeout), 
                c._hoverState = m.SHOW, c.config.delay && c.config.delay.show ? void (c._timeout = setTimeout(function() {
                    c._hoverState === m.SHOW && c.show();
                }, c.config.delay.show)) : void c.show());
            }, r._leave = function(a, c) {
                var d = this.constructor.DATA_KEY;
                if (c = c || b(a.currentTarget).data(d), c || (c = new this.constructor(a.currentTarget, this._getDelegateConfig()), 
                b(a.currentTarget).data(d, c)), a && (c._activeTrigger["focusout" === a.type ? q.FOCUS : q.HOVER] = !1), 
                !c._isWithActiveTrigger()) {
                    if (clearTimeout(c._timeout), c._hoverState = m.OUT, !c.config.delay || !c.config.delay.hide) return void c.hide();
                    c._timeout = setTimeout(function() {
                        c._hoverState === m.OUT && c.hide();
                    }, c.config.delay.hide);
                }
            }, r._isWithActiveTrigger = function() {
                for (var a in this._activeTrigger) if (this._activeTrigger[a]) return !0;
                return !1;
            }, r._getConfig = function(c) {
                return c = b.extend({}, this.constructor.Default, b(this.element).data(), c), "number" == typeof c.delay && (c.delay = {
                    show: c.delay,
                    hide: c.delay
                }), "number" == typeof c.title && (c.title = c.title.toString()), "number" == typeof c.content && (c.content = c.content.toString()), 
                ja.typeCheckConfig(a, c, this.constructor.DefaultType), c;
            }, r._getDelegateConfig = function() {
                var a = {};
                if (this.config) for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                return a;
            }, r._cleanTipClass = function() {
                var a = b(this.getTipElement()), c = a.attr("class").match(i);
                null !== c && c.length > 0 && a.removeClass(c.join(""));
            }, r._handlePopperPlacementChange = function(a) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(a.placement));
            }, r._fixTransition = function() {
                var a = this.getTipElement(), c = this.config.animation;
                null === a.getAttribute("x-placement") && (b(a).removeClass(o.FADE), this.config.animation = !1, 
                this.hide(), this.show(), this.config.animation = c);
            }, f._jQueryInterface = function(a) {
                return this.each(function() {
                    var c = b(this).data(d), e = "object" == typeof a && a;
                    if ((c || !/dispose|hide/.test(a)) && (c || (c = new f(this, e), b(this).data(d, c)), 
                    "string" == typeof a)) {
                        if (void 0 === c[a]) throw new Error('No method named "' + a + '"');
                        c[a]();
                    }
                });
            }, ka(f, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            }, {
                key: "Default",
                get: function() {
                    return l;
                }
            }, {
                key: "NAME",
                get: function() {
                    return a;
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return d;
                }
            }, {
                key: "Event",
                get: function() {
                    return n;
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return e;
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return j;
                }
            } ]), f;
        }();
        return b.fn[a] = r._jQueryInterface, b.fn[a].Constructor = r, b.fn[a].noConflict = function() {
            return b.fn[a] = f, r._jQueryInterface;
        }, r;
    }(), Na = function() {
        var a = "popover", c = "4.0.0-beta.2", d = "bs.popover", e = "." + d, f = b.fn[a], g = "bs-popover", h = new RegExp("(^|\\s)" + g + "\\S+", "g"), i = b.extend({}, Ma.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), j = b.extend({}, Ma.DefaultType, {
            content: "(string|element|function)"
        }), k = {
            FADE: "fade",
            SHOW: "show"
        }, l = {
            TITLE: ".popover-header",
            CONTENT: ".popover-body"
        }, m = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            INSERTED: "inserted" + e,
            CLICK: "click" + e,
            FOCUSIN: "focusin" + e,
            FOCUSOUT: "focusout" + e,
            MOUSEENTER: "mouseenter" + e,
            MOUSELEAVE: "mouseleave" + e
        }, n = function(f) {
            function n() {
                return f.apply(this, arguments) || this;
            }
            la(n, f);
            var o = n.prototype;
            return o.isWithContent = function() {
                return this.getTitle() || this._getContent();
            }, o.addAttachmentClass = function(a) {
                b(this.getTipElement()).addClass(g + "-" + a);
            }, o.getTipElement = function() {
                return this.tip = this.tip || b(this.config.template)[0], this.tip;
            }, o.setContent = function() {
                var a = b(this.getTipElement());
                this.setElementContent(a.find(l.TITLE), this.getTitle()), this.setElementContent(a.find(l.CONTENT), this._getContent()), 
                a.removeClass(k.FADE + " " + k.SHOW);
            }, o._getContent = function() {
                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
            }, o._cleanTipClass = function() {
                var a = b(this.getTipElement()), c = a.attr("class").match(h);
                null !== c && c.length > 0 && a.removeClass(c.join(""));
            }, n._jQueryInterface = function(a) {
                return this.each(function() {
                    var c = b(this).data(d), e = "object" == typeof a ? a : null;
                    if ((c || !/destroy|hide/.test(a)) && (c || (c = new n(this, e), b(this).data(d, c)), 
                    "string" == typeof a)) {
                        if (void 0 === c[a]) throw new Error('No method named "' + a + '"');
                        c[a]();
                    }
                });
            }, ka(n, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            }, {
                key: "Default",
                get: function() {
                    return i;
                }
            }, {
                key: "NAME",
                get: function() {
                    return a;
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return d;
                }
            }, {
                key: "Event",
                get: function() {
                    return m;
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return e;
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return j;
                }
            } ]), n;
        }(Ma);
        return b.fn[a] = n._jQueryInterface, b.fn[a].Constructor = n, b.fn[a].noConflict = function() {
            return b.fn[a] = f, n._jQueryInterface;
        }, n;
    }(), Oa = function() {
        var a = "scrollspy", c = "4.0.0-beta.2", d = "bs.scrollspy", e = "." + d, f = ".data-api", g = b.fn[a], h = {
            offset: 10,
            method: "auto",
            target: ""
        }, i = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, j = {
            ACTIVATE: "activate" + e,
            SCROLL: "scroll" + e,
            LOAD_DATA_API: "load" + e + f
        }, k = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active"
        }, l = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, m = {
            OFFSET: "offset",
            POSITION: "position"
        }, n = function() {
            function f(a, c) {
                var d = this;
                this._element = a, this._scrollElement = "BODY" === a.tagName ? window : a, this._config = this._getConfig(c), 
                this._selector = this._config.target + " " + l.NAV_LINKS + "," + this._config.target + " " + l.LIST_ITEMS + "," + this._config.target + " " + l.DROPDOWN_ITEMS, 
                this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, 
                b(this._scrollElement).on(j.SCROLL, function(a) {
                    return d._process(a);
                }), this.refresh(), this._process();
            }
            var g = f.prototype;
            return g.refresh = function() {
                var a = this, c = this._scrollElement !== this._scrollElement.window ? m.POSITION : m.OFFSET, d = "auto" === this._config.method ? c : this._config.method, e = d === m.POSITION ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), 
                b.makeArray(b(this._selector)).map(function(a) {
                    var c, f = ja.getSelectorFromElement(a);
                    if (f && (c = b(f)[0]), c) {
                        var g = c.getBoundingClientRect();
                        if (g.width || g.height) return [ b(c)[d]().top + e, f ];
                    }
                    return null;
                }).filter(function(a) {
                    return a;
                }).sort(function(a, b) {
                    return a[0] - b[0];
                }).forEach(function(b) {
                    a._offsets.push(b[0]), a._targets.push(b[1]);
                });
            }, g.dispose = function() {
                b.removeData(this._element, d), b(this._scrollElement).off(e), this._element = null, 
                this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, 
                this._targets = null, this._activeTarget = null, this._scrollHeight = null;
            }, g._getConfig = function(c) {
                if (c = b.extend({}, h, c), "string" != typeof c.target) {
                    var d = b(c.target).attr("id");
                    d || (d = ja.getUID(a), b(c.target).attr("id", d)), c.target = "#" + d;
                }
                return ja.typeCheckConfig(a, c, i), c;
            }, g._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }, g._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }, g._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }, g._process = function() {
                var a = this._getScrollTop() + this._config.offset, b = this._getScrollHeight(), c = this._config.offset + b - this._getOffsetHeight();
                if (this._scrollHeight !== b && this.refresh(), a >= c) {
                    var d = this._targets[this._targets.length - 1];
                    return void (this._activeTarget !== d && this._activate(d));
                }
                if (this._activeTarget && a < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, 
                void this._clear();
                for (var e = this._offsets.length; e--; ) {
                    this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]) && this._activate(this._targets[e]);
                }
            }, g._activate = function(a) {
                this._activeTarget = a, this._clear();
                var c = this._selector.split(",");
                c = c.map(function(b) {
                    return b + '[data-target="' + a + '"],' + b + '[href="' + a + '"]';
                });
                var d = b(c.join(","));
                d.hasClass(k.DROPDOWN_ITEM) ? (d.closest(l.DROPDOWN).find(l.DROPDOWN_TOGGLE).addClass(k.ACTIVE), 
                d.addClass(k.ACTIVE)) : (d.addClass(k.ACTIVE), d.parents(l.NAV_LIST_GROUP).prev(l.NAV_LINKS + ", " + l.LIST_ITEMS).addClass(k.ACTIVE), 
                d.parents(l.NAV_LIST_GROUP).prev(l.NAV_ITEMS).children(l.NAV_LINKS).addClass(k.ACTIVE)), 
                b(this._scrollElement).trigger(j.ACTIVATE, {
                    relatedTarget: a
                });
            }, g._clear = function() {
                b(this._selector).filter(l.ACTIVE).removeClass(k.ACTIVE);
            }, f._jQueryInterface = function(a) {
                return this.each(function() {
                    var c = b(this).data(d), e = "object" == typeof a && a;
                    if (c || (c = new f(this, e), b(this).data(d, c)), "string" == typeof a) {
                        if (void 0 === c[a]) throw new Error('No method named "' + a + '"');
                        c[a]();
                    }
                });
            }, ka(f, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            }, {
                key: "Default",
                get: function() {
                    return h;
                }
            } ]), f;
        }();
        return b(window).on(j.LOAD_DATA_API, function() {
            for (var a = b.makeArray(b(l.DATA_SPY)), c = a.length; c--; ) {
                var d = b(a[c]);
                n._jQueryInterface.call(d, d.data());
            }
        }), b.fn[a] = n._jQueryInterface, b.fn[a].Constructor = n, b.fn[a].noConflict = function() {
            return b.fn[a] = g, n._jQueryInterface;
        }, n;
    }(), Pa = function() {
        var a = "tab", c = "4.0.0-beta.2", d = "bs.tab", e = "." + d, f = ".data-api", g = b.fn[a], h = 150, i = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            CLICK_DATA_API: "click" + e + f
        }, j = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show"
        }, k = {
            DROPDOWN: ".dropdown",
            NAV_LIST_GROUP: ".nav, .list-group",
            ACTIVE: ".active",
            ACTIVE_UL: "> li > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }, l = function() {
            function a(a) {
                this._element = a;
            }
            var e = a.prototype;
            return e.show = function() {
                var a = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && b(this._element).hasClass(j.ACTIVE) || b(this._element).hasClass(j.DISABLED))) {
                    var c, d, e = b(this._element).closest(k.NAV_LIST_GROUP)[0], f = ja.getSelectorFromElement(this._element);
                    if (e) {
                        var g = "UL" === e.nodeName ? k.ACTIVE_UL : k.ACTIVE;
                        d = b.makeArray(b(e).find(g)), d = d[d.length - 1];
                    }
                    var h = b.Event(i.HIDE, {
                        relatedTarget: this._element
                    }), l = b.Event(i.SHOW, {
                        relatedTarget: d
                    });
                    if (d && b(d).trigger(h), b(this._element).trigger(l), !l.isDefaultPrevented() && !h.isDefaultPrevented()) {
                        f && (c = b(f)[0]), this._activate(this._element, e);
                        var m = function() {
                            var c = b.Event(i.HIDDEN, {
                                relatedTarget: a._element
                            }), e = b.Event(i.SHOWN, {
                                relatedTarget: d
                            });
                            b(d).trigger(c), b(a._element).trigger(e);
                        };
                        c ? this._activate(c, c.parentNode, m) : m();
                    }
                }
            }, e.dispose = function() {
                b.removeData(this._element, d), this._element = null;
            }, e._activate = function(a, c, d) {
                var e, f = this;
                e = "UL" === c.nodeName ? b(c).find(k.ACTIVE_UL) : b(c).children(k.ACTIVE);
                var g = e[0], i = d && ja.supportsTransitionEnd() && g && b(g).hasClass(j.FADE), l = function() {
                    return f._transitionComplete(a, g, i, d);
                };
                g && i ? b(g).one(ja.TRANSITION_END, l).emulateTransitionEnd(h) : l(), g && b(g).removeClass(j.SHOW);
            }, e._transitionComplete = function(a, c, d, e) {
                if (c) {
                    b(c).removeClass(j.ACTIVE);
                    var f = b(c.parentNode).find(k.DROPDOWN_ACTIVE_CHILD)[0];
                    f && b(f).removeClass(j.ACTIVE), "tab" === c.getAttribute("role") && c.setAttribute("aria-selected", !1);
                }
                if (b(a).addClass(j.ACTIVE), "tab" === a.getAttribute("role") && a.setAttribute("aria-selected", !0), 
                d ? (ja.reflow(a), b(a).addClass(j.SHOW)) : b(a).removeClass(j.FADE), a.parentNode && b(a.parentNode).hasClass(j.DROPDOWN_MENU)) {
                    var g = b(a).closest(k.DROPDOWN)[0];
                    g && b(g).find(k.DROPDOWN_TOGGLE).addClass(j.ACTIVE), a.setAttribute("aria-expanded", !0);
                }
                e && e();
            }, a._jQueryInterface = function(c) {
                return this.each(function() {
                    var e = b(this), f = e.data(d);
                    if (f || (f = new a(this), e.data(d, f)), "string" == typeof c) {
                        if (void 0 === f[c]) throw new Error('No method named "' + c + '"');
                        f[c]();
                    }
                });
            }, ka(a, null, [ {
                key: "VERSION",
                get: function() {
                    return c;
                }
            } ]), a;
        }();
        return b(document).on(i.CLICK_DATA_API, k.DATA_TOGGLE, function(a) {
            a.preventDefault(), l._jQueryInterface.call(b(this), "show");
        }), b.fn[a] = l._jQueryInterface, b.fn[a].Constructor = l, b.fn[a].noConflict = function() {
            return b.fn[a] = g, l._jQueryInterface;
        }, l;
    }();
    return function() {
        if (void 0 === b) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var a = b.fn.jquery.split(" ")[0].split("."), c = 9;
        if (a[0] < 2 && a[1] < c || 1 === a[0] && a[1] === c && a[2] < 1 || a[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(), a.Util = ja, a.Alert = ma, a.Button = na, a.Carousel = oa, a.Collapse = pa, 
    a.Dropdown = Ka, a.Modal = La, a.Popover = Na, a.Scrollspy = Oa, a.Tab = Pa, a.Tooltip = Ma, 
    a;
}({}, $);

!function(a, b, c) {
    if ("function" != typeof b) return console.error("nette.ajax.js: jQuery is missing, load it please");
    var d = function() {
        var d = {
            self: this,
            initialized: !1,
            contexts: {},
            on: {
                init: {},
                load: {},
                prepare: {},
                before: {},
                start: {},
                success: {},
                complete: {},
                error: {}
            },
            fire: function() {
                var a = !0, e = Array.prototype.slice.call(arguments), f = e.shift(), g = "string" == typeof f ? f : f.name, h = "object" == typeof f ? f.off || {} : {};
                return e.push(d.self), b.each(d.on[g], function(f, g) {
                    if (g === c || -1 !== b.inArray(f, h)) return !0;
                    var i = g.apply(d.contexts[f], e);
                    return a = i === c || i;
                }), a;
            },
            requestHandler: function(a) {
                var b = d.self.ajax({}, this, a);
                if (b && b._returnFalse) return !1;
            },
            ext: function(a, e, f) {
                for (;!f; ) f = "ext_" + Math.random(), d.contexts[f] && (f = c);
                b.each(a, function(a, b) {
                    d.on[a][f] = b;
                }), d.contexts[f] = b.extend(e || {}, {
                    name: function() {
                        return f;
                    },
                    ext: function(a, b) {
                        var c = d.contexts[a];
                        if (!c && b) throw "Extension '" + this.name() + "' depends on disabled extension '" + a + "'.";
                        return c;
                    }
                });
            }
        };
        this.ext = function(a, e, f) {
            if ("object" == typeof a) d.ext(a, e); else {
                if (e === c) return d.contexts[a];
                if (e) {
                    if ("string" == typeof a && d.contexts[a] !== c) throw "Cannot override already registered nette-ajax extension '" + a + "'.";
                    d.ext(e, f, a);
                } else b.each([ "init", "load", "prepare", "before", "start", "success", "complete", "error" ], function(b, e) {
                    d.on[e][a] = c;
                }), d.contexts[a] = c;
            }
            return this;
        }, this.init = function(a, b) {
            if (d.initialized) throw "Cannot initialize nette-ajax twice.";
            if ("function" == typeof a) this.ext("init", null), this.ext("init", {
                load: a
            }, b); else if ("object" == typeof a) this.ext("init", null), this.ext("init", a, b); else if (a !== c) throw "Argument of init() can be function or function-hash only.";
            return d.initialized = !0, d.fire("init"), this.load(), this;
        }, this.load = function() {
            return d.fire("load", d.requestHandler), this;
        }, this.ajax = function(e, f, g) {
            if ("string" === b.type(e) && (e = {
                url: e
            }), !e.nette && f && g) {
                var h, i = b(f), j = e.nette = {
                    e: g,
                    ui: f,
                    el: i,
                    isForm: i.is("form"),
                    isSubmit: i.is("input[type=submit]") || i.is("button[type=submit]"),
                    isImage: i.is("input[type=image]"),
                    form: null
                };
                if (j.isSubmit || j.isImage ? j.form = j.el.closest("form") : j.isForm && (j.form = j.el), 
                e.url || (e.url = j.form ? j.form.attr("action") || a.location.pathname + a.location.search : f.href), 
                e.type || (e.type = j.form ? j.form.attr("method") : "get"), i.is("[data-ajax-off]")) {
                    var k = i.attr("data-ajax-off");
                    0 === k.indexOf("[") ? e.off = i.data("ajaxOff") : -1 !== k.indexOf(",") ? e.off = k.split(",") : -1 !== k.indexOf(" ") ? e.off = k.split(" ") : e.off = k, 
                    "string" == typeof e.off && (e.off = [ e.off ]), e.off = b.grep(b.each(e.off, function(a) {
                        return b.trim(a);
                    }), function(a) {
                        return a.length;
                    });
                }
            }
            return d.fire({
                name: "prepare",
                off: e.off || {}
            }, e), e.prepare && e.prepare(e), h = e.beforeSend, e.beforeSend = function(a, b) {
                var e = d.fire({
                    name: "before",
                    off: b.off || {}
                }, a, b);
                return (e || e === c) && h && (e = h(a, b)), e;
            }, this.handleXHR(b.ajax(e), e);
        }, this.handleXHR = function(a, b) {
            return b = b || {}, !a || void 0 !== a.statusText && "canceled" === a.statusText || (a.done(function(a, c, e) {
                d.fire({
                    name: "success",
                    off: b.off || {}
                }, a, c, e, b);
            }).fail(function(a, c, e) {
                d.fire({
                    name: "error",
                    off: b.off || {}
                }, a, c, e, b);
            }).always(function(a, c) {
                d.fire({
                    name: "complete",
                    off: b.off || {}
                }, a, c, b);
            }), d.fire({
                name: "start",
                off: b.off || {}
            }, a, b), b.start && b.start(a, b)), a;
        };
    };
    b.nette = new (b.extend(d, b.nette ? b.nette : {}))(), b.fn.netteAjax = function(a, c) {
        return b.nette.ajax(c || {}, this[0], a);
    }, b.fn.netteAjaxOff = function() {
        return this.off(".nette");
    }, b.nette.ext("validation", {
        before: function(a, d) {
            if (!d.nette) return !0;
            var e = d.nette, f = e.e, g = b.extend(this.defaults, d.validate || function() {
                if (e.el.is("[data-ajax-validate]")) {
                    var a = e.el.data("ajaxValidate");
                    return !1 === a ? {
                        keys: !1,
                        url: !1,
                        form: !1
                    } : "object" == typeof a ? a : void 0;
                }
            }() || {}), h = !1;
            if (e.el.attr("data-ajax-pass") !== c && (h = e.el.data("ajaxPass"), h = "bool" != typeof h || h), 
            g.keys) {
                var i = f.button || f.ctrlKey || f.shiftKey || f.altKey || f.metaKey;
                if (e.form) {
                    if (i && e.isSubmit) return this.explicitNoAjax = !0, !1;
                    if (e.isForm && this.explicitNoAjax) return this.explicitNoAjax = !1, !1;
                } else if (i) return !1;
            }
            if (g.form && e.form) {
                (e.isSubmit || e.isImage) && (e.form.get(0)["nette-submittedBy"] = e.el.get(0));
                var j;
                if (void 0 === Nette.version || "2.3" == Nette.version) {
                    var k = this.ie();
                    j = e.form.get(0).onsubmit && !1 === e.form.get(0).onsubmit(void 0 !== k && k < 9 ? c : f);
                } else j = !1 === (e.form.get(0).onsubmit ? e.form.triggerHandler("submit") : Nette.validateForm(e.form.get(0)));
                if (j) return f.stopImmediatePropagation(), f.preventDefault(), !1;
            }
            if (g.url) {
                var l = e.form ? d.url : e.el.attr("href");
                if (/(?:^[a-z][a-z0-9+.-]*:|\/\/)/.test(l)) {
                    var m = new URL(l);
                    if (/:|^#/.test(m.pathname + m.search + m.hash)) return !1;
                } else if (/:|^#/.test(l)) return !1;
            }
            return h || (f.stopPropagation(), f.preventDefault(), a._returnFalse = !0), !0;
        }
    }, {
        defaults: {
            keys: !0,
            url: !0,
            form: !0
        },
        explicitNoAjax: !1,
        ie: function(a) {
            for (var b = 3, c = document.createElement("div"), d = c.getElementsByTagName("i"); c.innerHTML = "\x3c!--[if gt IE " + ++b + "]><i></i><![endif]--\x3e", 
            d[0]; ) ;
            return b > 4 ? b : a;
        }
    }), b.nette.ext("forms", {
        init: function() {
            var b;
            a.Nette && (b = this.ext("snippets")) && b.after(function(b) {
                b.find("form").each(function() {
                    a.Nette.initForm(this);
                });
            });
        },
        prepare: function(c) {
            var d = c.nette;
            if (d && d.form) {
                var e = d.e, f = c.data || {}, g = {};
                if (d.isSubmit) g[d.el.attr("name")] = d.el.val() || ""; else if (d.isImage) {
                    var h = d.el.offset(), i = d.el.attr("name"), j = [ Math.max(0, e.pageX - h.left), Math.max(0, e.pageY - h.top) ];
                    -1 !== i.indexOf("[", 0) ? g[i] = j : (g[i + ".x"] = j[0], g[i + ".y"] = j[1]);
                }
                var k = d.form.attr("method");
                if (k && "post" === k.toLowerCase() && "FormData" in a) {
                    var l = new FormData(d.form[0]);
                    for (var m in g) l.append(m, g[m]);
                    if ("string" != typeof f) for (var m in f) l.append(m, f[m]);
                    c.data = l, c.processData = !1, c.contentType = !1;
                } else "string" != typeof f && (f = b.param(f)), g = b.param(g), c.data = d.form.serialize() + (g ? "&" + g : "") + "&" + f;
            }
        }
    }), b.nette.ext("snippets", {
        success: function(a) {
            a.snippets && this.updateSnippets(a.snippets);
        }
    }, {
        beforeQueue: b.Callbacks(),
        afterQueue: b.Callbacks(),
        completeQueue: b.Callbacks(),
        before: function(a) {
            this.beforeQueue.add(a);
        },
        after: function(a) {
            this.afterQueue.add(a);
        },
        complete: function(a) {
            this.completeQueue.add(a);
        },
        updateSnippets: function(a, c) {
            var d = this, e = [];
            for (var f in a) {
                var g = this.getElement(f);
                g.get(0) && e.push(g.get(0)), this.updateSnippet(g, a[f], c);
            }
            b(e).promise().done(function() {
                d.completeQueue.fire();
            });
        },
        updateSnippet: function(a, b, c) {
            a.is("title") ? document.title = b : (this.beforeQueue.fire(a), this.applySnippet(a, b, c), 
            this.afterQueue.fire(a));
        },
        getElement: function(a) {
            return b("#" + this.escapeSelector(a));
        },
        applySnippet: function(a, b, c) {
            !c && a.is("[data-ajax-append]") ? a.append(b) : !c && a.is("[data-ajax-prepend]") ? a.prepend(b) : (a.html() != b || /<[^>]*script/.test(b)) && a.html(b);
        },
        escapeSelector: function(a) {
            return a.replace(/[\!"#\$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|\}~]/g, "\\$&");
        }
    }), b.nette.ext("redirect", {
        success: function(b) {
            if (b.redirect) return a.location.href = b.redirect, !1;
        }
    }), b.nette.ext("state", {
        success: function(a) {
            a.state && (this.state = a.state);
        }
    }, {
        state: null
    }), b.nette.ext("unique", {
        start: function(a) {
            this.xhr && this.xhr.abort(), this.xhr = a;
        },
        complete: function() {
            this.xhr = null;
        }
    }, {
        xhr: null
    }), b.nette.ext("abort", {
        init: function() {
            b("body").keydown(b.proxy(function(a) {
                this.xhr && "27" === a.keyCode.toString() && !(a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) && this.xhr.abort();
            }, this));
        },
        start: function(a) {
            this.xhr = a;
        },
        complete: function() {
            this.xhr = null;
        }
    }, {
        xhr: null
    }), b.nette.ext("load", {
        success: function() {
            b.nette.load();
        }
    }), b.nette.ext("init", {
        load: function(a) {
            b(this.linkSelector).off("click.nette", a).on("click.nette", a), b(this.formSelector).off("submit.nette", a).on("submit.nette", a).off("click.nette", ":image", a).on("click.nette", ":image", a).off("click.nette", ":submit", a).on("click.nette", ":submit", a), 
            b(this.buttonSelector).closest("form").off("click.nette", this.buttonSelector, a).on("click.nette", this.buttonSelector, a);
        }
    }, {
        linkSelector: "a.ajax",
        formSelector: "form.ajax",
        buttonSelector: 'input.ajax[type="submit"], button.ajax[type="submit"], input.ajax[type="image"]'
    });
}(window, window.jQuery), function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b();
}(this, function() {
    "use strict";
    function a() {
        return re.apply(null, arguments);
    }
    function b(a) {
        re = a;
    }
    function c(a) {
        return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a);
    }
    function d(a) {
        return null != a && "[object Object]" === Object.prototype.toString.call(a);
    }
    function e(a) {
        var b;
        for (b in a) return !1;
        return !0;
    }
    function f(a) {
        return void 0 === a;
    }
    function g(a) {
        return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a);
    }
    function h(a) {
        return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
    }
    function i(a, b) {
        var c, d = [];
        for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
        return d;
    }
    function j(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function k(a, b) {
        for (var c in b) j(b, c) && (a[c] = b[c]);
        return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), 
        a;
    }
    function l(a, b, c, d) {
        return sb(a, b, c, d, !0).utc();
    }
    function m() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        };
    }
    function n(a) {
        return null == a._pf && (a._pf = m()), a._pf;
    }
    function o(a) {
        if (null == a._isValid) {
            var b = n(a), c = te.call(b.parsedDateParts, function(a) {
                return null != a;
            }), d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
            if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), 
            null != Object.isFrozen && Object.isFrozen(a)) return d;
            a._isValid = d;
        }
        return a._isValid;
    }
    function p(a) {
        var b = l(NaN);
        return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b;
    }
    function q(a, b) {
        var c, d, e;
        if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), 
        f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), 
        f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), 
        f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), ue.length > 0) for (c = 0; c < ue.length; c++) d = ue[c], 
        e = b[d], f(e) || (a[d] = e);
        return a;
    }
    function r(b) {
        q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
        !1 === ve && (ve = !0, a.updateOffset(this), ve = !1);
    }
    function s(a) {
        return a instanceof r || null != a && null != a._isAMomentObject;
    }
    function t(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }
    function u(a) {
        var b = +a, c = 0;
        return 0 !== b && isFinite(b) && (c = t(b)), c;
    }
    function v(a, b, c) {
        var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0;
        for (d = 0; d < e; d++) (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
        return g + f;
    }
    function w(b) {
        !1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
    }
    function x(b, c) {
        var d = !0;
        return k(function() {
            if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
                for (var e, f = [], g = 0; g < arguments.length; g++) {
                    if (e = "", "object" == typeof arguments[g]) {
                        e += "\n[" + g + "] ";
                        for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
                        e = e.slice(0, -2);
                    } else e = arguments[g];
                    f.push(e);
                }
                w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + new Error().stack), 
                d = !1;
            }
            return c.apply(this, arguments);
        }, c);
    }
    function y(b, c) {
        null != a.deprecationHandler && a.deprecationHandler(b, c), we[b] || (w(c), we[b] = !0);
    }
    function z(a) {
        return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
    }
    function A(a) {
        var b, c;
        for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
        this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }
    function B(a, b) {
        var c, e = k({}, a);
        for (c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
        for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
        return e;
    }
    function C(a) {
        null != a && this.set(a);
    }
    function D(a, b, c) {
        var d = this._calendar[a] || this._calendar.sameElse;
        return z(d) ? d.call(b, c) : d;
    }
    function E(a) {
        var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()];
        return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1);
        }), this._longDateFormat[a]);
    }
    function F() {
        return this._invalidDate;
    }
    function G(a) {
        return this._ordinal.replace("%d", a);
    }
    function H(a, b, c, d) {
        var e = this._relativeTime[c];
        return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }
    function I(a, b) {
        var c = this._relativeTime[a > 0 ? "future" : "past"];
        return z(c) ? c(b) : c.replace(/%s/i, b);
    }
    function J(a, b) {
        var c = a.toLowerCase();
        Ge[c] = Ge[c + "s"] = Ge[b] = a;
    }
    function K(a) {
        return "string" == typeof a ? Ge[a] || Ge[a.toLowerCase()] : void 0;
    }
    function L(a) {
        var b, c, d = {};
        for (c in a) j(a, c) && (b = K(c)) && (d[b] = a[c]);
        return d;
    }
    function M(a, b) {
        He[a] = b;
    }
    function N(a) {
        var b = [];
        for (var c in a) b.push({
            unit: c,
            priority: He[c]
        });
        return b.sort(function(a, b) {
            return a.priority - b.priority;
        }), b;
    }
    function O(b, c) {
        return function(d) {
            return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b);
        };
    }
    function P(a, b) {
        return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
    }
    function Q(a, b, c) {
        a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
    }
    function R(a) {
        return a = K(a), z(this[a]) ? this[a]() : this;
    }
    function S(a, b) {
        if ("object" == typeof a) {
            a = L(a);
            for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit]);
        } else if (a = K(a), z(this[a])) return this[a](b);
        return this;
    }
    function T(a, b, c) {
        var d = "" + Math.abs(a), e = b - d.length;
        return (a >= 0 ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
    }
    function U(a, b, c, d) {
        var e = d;
        "string" == typeof d && (e = function() {
            return this[d]();
        }), a && (Le[a] = e), b && (Le[b[0]] = function() {
            return T(e.apply(this, arguments), b[1], b[2]);
        }), c && (Le[c] = function() {
            return this.localeData().ordinal(e.apply(this, arguments), a);
        });
    }
    function V(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
    }
    function W(a) {
        var b, c, d = a.match(Ie);
        for (b = 0, c = d.length; b < c; b++) Le[d[b]] ? d[b] = Le[d[b]] : d[b] = V(d[b]);
        return function(b) {
            var e, f = "";
            for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
            return f;
        };
    }
    function X(a, b) {
        return a.isValid() ? (b = Y(b, a.localeData()), Ke[b] = Ke[b] || W(b), Ke[b](a)) : a.localeData().invalidDate();
    }
    function Y(a, b) {
        function c(a) {
            return b.longDateFormat(a) || a;
        }
        var d = 5;
        for (Je.lastIndex = 0; d >= 0 && Je.test(a); ) a = a.replace(Je, c), Je.lastIndex = 0, 
        d -= 1;
        return a;
    }
    function Z(a, b, c) {
        bf[a] = z(b) ? b : function(a, d) {
            return a && c ? c : b;
        };
    }
    function $(a, b) {
        return j(bf, a) ? bf[a](b._strict, b._locale) : new RegExp(_(a));
    }
    function _(a) {
        return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
            return b || c || d || e;
        }));
    }
    function aa(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function ba(a, b) {
        var c, d = b;
        for ("string" == typeof a && (a = [ a ]), g(b) && (d = function(a, c) {
            c[b] = u(a);
        }), c = 0; c < a.length; c++) cf[a[c]] = d;
    }
    function ca(a, b) {
        ba(a, function(a, c, d, e) {
            d._w = d._w || {}, b(a, d._w, d, e);
        });
    }
    function da(a, b, c) {
        null != b && j(cf, a) && cf[a](b, c._a, c, a);
    }
    function ea(a, b) {
        return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
    }
    function fa(a, b) {
        return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || of).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone;
    }
    function ga(a, b) {
        return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[of.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }
    function ha(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
        this._shortMonthsParse = [], d = 0; d < 12; ++d) f = l([ 2e3, d ]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), 
        this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
        return c ? "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), -1 !== e ? e : null) : (e = nf.call(this._longMonthsParse, g), 
        -1 !== e ? e : null) : "MMM" === b ? -1 !== (e = nf.call(this._shortMonthsParse, g)) ? e : (e = nf.call(this._longMonthsParse, g), 
        -1 !== e ? e : null) : -1 !== (e = nf.call(this._longMonthsParse, g)) ? e : (e = nf.call(this._shortMonthsParse, g), 
        -1 !== e ? e : null);
    }
    function ia(a, b, c) {
        var d, e, f;
        if (this._monthsParseExact) return ha.call(this, a, b, c);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
        d = 0; d < 12; d++) {
            if (e = l([ 2e3, d ]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), 
            this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), 
            c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), 
            this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
            if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
            if (!c && this._monthsParse[d].test(a)) return d;
        }
    }
    function ja(a, b) {
        var c;
        if (!a.isValid()) return a;
        if ("string" == typeof b) if (/^\d+$/.test(b)) b = u(b); else if (b = a.localeData().monthsParse(b), 
        !g(b)) return a;
        return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), 
        a;
    }
    function ka(b) {
        return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month");
    }
    function la() {
        return ea(this.year(), this.month());
    }
    function ma(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = rf), 
        this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }
    function na(a) {
        return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = sf), 
        this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
    }
    function oa() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b, c, d = [], e = [], f = [];
        for (b = 0; b < 12; b++) c = l([ 2e3, b ]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), 
        f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
        for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
        for (b = 0; b < 24; b++) f[b] = aa(f[b]);
        this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
        this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
    }
    function pa(a) {
        return qa(a) ? 366 : 365;
    }
    function qa(a) {
        return a % 4 == 0 && a % 100 != 0 || a % 400 == 0;
    }
    function ra() {
        return qa(this.year());
    }
    function sa(a, b, c, d, e, f, g) {
        var h = new Date(a, b, c, d, e, f, g);
        return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
    }
    function ta(a) {
        var b = new Date(Date.UTC.apply(null, arguments));
        return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), 
        b;
    }
    function ua(a, b, c) {
        var d = 7 + b - c;
        return -(7 + ta(a, 0, d).getUTCDay() - b) % 7 + d - 1;
    }
    function va(a, b, c, d, e) {
        var f, g, h = (7 + c - d) % 7, i = ua(a, d, e), j = 1 + 7 * (b - 1) + h + i;
        return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, 
        g = j), {
            year: f,
            dayOfYear: g
        };
    }
    function wa(a, b, c) {
        var d, e, f = ua(a.year(), b, c), g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
        return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), 
        e = a.year() + 1) : (e = a.year(), d = g), {
            week: d,
            year: e
        };
    }
    function xa(a, b, c) {
        var d = ua(a, b, c), e = ua(a + 1, b, c);
        return (pa(a) - d + e) / 7;
    }
    function ya(a) {
        return wa(a, this._week.dow, this._week.doy).week;
    }
    function za() {
        return this._week.dow;
    }
    function Aa() {
        return this._week.doy;
    }
    function Ba(a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Ca(a) {
        var b = wa(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d");
    }
    function Da(a, b) {
        return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
    }
    function Ea(a, b) {
        return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
    }
    function Fa(a, b) {
        return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }
    function Ga(a) {
        return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
    }
    function Ha(a) {
        return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
    }
    function Ia(a, b, c) {
        var d, e, f, g = a.toLocaleLowerCase();
        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
        this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = l([ 2e3, 1 ]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), 
        this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
        return c ? "dddd" === b ? (e = nf.call(this._weekdaysParse, g), -1 !== e ? e : null) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), 
        -1 !== e ? e : null) : (e = nf.call(this._minWeekdaysParse, g), -1 !== e ? e : null) : "dddd" === b ? -1 !== (e = nf.call(this._weekdaysParse, g)) ? e : -1 !== (e = nf.call(this._shortWeekdaysParse, g)) ? e : (e = nf.call(this._minWeekdaysParse, g), 
        -1 !== e ? e : null) : "ddd" === b ? -1 !== (e = nf.call(this._shortWeekdaysParse, g)) ? e : -1 !== (e = nf.call(this._weekdaysParse, g)) ? e : (e = nf.call(this._minWeekdaysParse, g), 
        -1 !== e ? e : null) : -1 !== (e = nf.call(this._minWeekdaysParse, g)) ? e : -1 !== (e = nf.call(this._weekdaysParse, g)) ? e : (e = nf.call(this._shortWeekdaysParse, g), 
        -1 !== e ? e : null);
    }
    function Ja(a, b, c) {
        var d, e, f;
        if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
        this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
            if (e = l([ 2e3, 1 ]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), 
            this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), 
            this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), 
            this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), 
            this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
            if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
            if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
            if (!c && this._weekdaysParse[d].test(a)) return d;
        }
    }
    function Ka(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b;
    }
    function La(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == a ? b : this.add(a - b, "d");
    }
    function Ma(a) {
        if (!this.isValid()) return null != a ? this : NaN;
        if (null != a) {
            var b = Ea(a, this.localeData());
            return this.day(this.day() % 7 ? b : b - 7);
        }
        return this.day() || 7;
    }
    function Na(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = yf), 
        this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }
    function Oa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = zf), 
        this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }
    function Pa(a) {
        return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Af), 
        this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }
    function Qa() {
        function a(a, b) {
            return b.length - a.length;
        }
        var b, c, d, e, f, g = [], h = [], i = [], j = [];
        for (b = 0; b < 7; b++) c = l([ 2e3, 1 ]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), 
        f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), 
        j.push(f);
        for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), 
        i[b] = aa(i[b]), j[b] = aa(j[b]);
        this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
        this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), 
        this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i");
    }
    function Ra() {
        return this.hours() % 12 || 12;
    }
    function Sa() {
        return this.hours() || 24;
    }
    function Ta(a, b) {
        U(a, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), b);
        });
    }
    function Ua(a, b) {
        return b._meridiemParse;
    }
    function Va(a) {
        return "p" === (a + "").toLowerCase().charAt(0);
    }
    function Wa(a, b, c) {
        return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
    }
    function Xa(a) {
        return a ? a.toLowerCase().replace("_", "-") : a;
    }
    function Ya(a) {
        for (var b, c, d, e, f = 0; f < a.length; ) {
            for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0; ) {
                if (d = Za(e.slice(0, b).join("-"))) return d;
                if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
                b--;
            }
            f++;
        }
        return null;
    }
    function Za(a) {
        var b = null;
        if (!Ff[a] && "undefined" != typeof module && module && module.exports) try {
            b = Bf._abbr, require("./locale/" + a), $a(b);
        } catch (a) {}
        return Ff[a];
    }
    function $a(a, b) {
        var c;
        return a && (c = f(b) ? bb(a) : _a(a, b)) && (Bf = c), Bf._abbr;
    }
    function _a(a, b) {
        if (null !== b) {
            var c = Ef;
            if (b.abbr = a, null != Ff[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
            c = Ff[a]._config; else if (null != b.parentLocale) {
                if (null == Ff[b.parentLocale]) return Gf[b.parentLocale] || (Gf[b.parentLocale] = []), 
                Gf[b.parentLocale].push({
                    name: a,
                    config: b
                }), null;
                c = Ff[b.parentLocale]._config;
            }
            return Ff[a] = new C(B(c, b)), Gf[a] && Gf[a].forEach(function(a) {
                _a(a.name, a.config);
            }), $a(a), Ff[a];
        }
        return delete Ff[a], null;
    }
    function ab(a, b) {
        if (null != b) {
            var c, d = Ef;
            null != Ff[a] && (d = Ff[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Ff[a], 
            Ff[a] = c, $a(a);
        } else null != Ff[a] && (null != Ff[a].parentLocale ? Ff[a] = Ff[a].parentLocale : null != Ff[a] && delete Ff[a]);
        return Ff[a];
    }
    function bb(a) {
        var b;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Bf;
        if (!c(a)) {
            if (b = Za(a)) return b;
            a = [ a ];
        }
        return Ya(a);
    }
    function cb() {
        return ze(Ff);
    }
    function db(a) {
        var b, c = a._a;
        return c && -2 === n(a).overflow && (b = c[ef] < 0 || c[ef] > 11 ? ef : c[ff] < 1 || c[ff] > ea(c[df], c[ef]) ? ff : c[gf] < 0 || c[gf] > 24 || 24 === c[gf] && (0 !== c[hf] || 0 !== c[jf] || 0 !== c[kf]) ? gf : c[hf] < 0 || c[hf] > 59 ? hf : c[jf] < 0 || c[jf] > 59 ? jf : c[kf] < 0 || c[kf] > 999 ? kf : -1, 
        n(a)._overflowDayOfYear && (b < df || b > ff) && (b = ff), n(a)._overflowWeeks && -1 === b && (b = lf), 
        n(a)._overflowWeekday && -1 === b && (b = mf), n(a).overflow = b), a;
    }
    function eb(a) {
        var b, c, d, e, f, g, h = a._i, i = Hf.exec(h) || If.exec(h);
        if (i) {
            for (n(a).iso = !0, b = 0, c = Kf.length; b < c; b++) if (Kf[b][1].exec(i[1])) {
                e = Kf[b][0], d = !1 !== Kf[b][2];
                break;
            }
            if (null == e) return void (a._isValid = !1);
            if (i[3]) {
                for (b = 0, c = Lf.length; b < c; b++) if (Lf[b][1].exec(i[3])) {
                    f = (i[2] || " ") + Lf[b][0];
                    break;
                }
                if (null == f) return void (a._isValid = !1);
            }
            if (!d && null != f) return void (a._isValid = !1);
            if (i[4]) {
                if (!Jf.exec(i[4])) return void (a._isValid = !1);
                g = "Z";
            }
            a._f = e + (f || "") + (g || ""), lb(a);
        } else a._isValid = !1;
    }
    function fb(a) {
        var b, c, d, e, f, g, h, i, j = {
            " GMT": " +0000",
            " EDT": " -0400",
            " EST": " -0500",
            " CDT": " -0500",
            " CST": " -0600",
            " MDT": " -0600",
            " MST": " -0700",
            " PDT": " -0700",
            " PST": " -0800"
        }, k = "YXWVUTSRQPONZABCDEFGHIKLM";
        if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), 
        c = Nf.exec(b)) {
            if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), 
            f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
                var l = new Date(c[2]), m = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ][l.getDay()];
                if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void (a._isValid = !1);
            }
            switch (c[5].length) {
              case 2:
                0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");
                break;

              case 4:
                h = j[c[5]];
                break;

              default:
                h = j[" GMT"];
            }
            c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0;
        } else a._isValid = !1;
    }
    function gb(b) {
        var c = Mf.exec(b._i);
        if (null !== c) return void (b._d = new Date(+c[1]));
        eb(b), !1 === b._isValid && (delete b._isValid, fb(b), !1 === b._isValid && (delete b._isValid, 
        a.createFromInputFallback(b)));
    }
    function hb(a, b, c) {
        return null != a ? a : null != b ? b : c;
    }
    function ib(b) {
        var c = new Date(a.now());
        return b._useUTC ? [ c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate() ] : [ c.getFullYear(), c.getMonth(), c.getDate() ];
    }
    function jb(a) {
        var b, c, d, e, f = [];
        if (!a._d) {
            for (d = ib(a), a._w && null == a._a[ff] && null == a._a[ef] && kb(a), null != a._dayOfYear && (e = hb(a._a[df], d[df]), 
            (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), 
            c = ta(e, 0, a._dayOfYear), a._a[ef] = c.getUTCMonth(), a._a[ff] = c.getUTCDate()), 
            b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
            for (;b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
            24 === a._a[gf] && 0 === a._a[hf] && 0 === a._a[jf] && 0 === a._a[kf] && (a._nextDay = !0, 
            a._a[gf] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), 
            a._nextDay && (a._a[gf] = 24);
        }
    }
    function kb(a) {
        var b, c, d, e, f, g, h, i;
        if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[df], wa(tb(), 1, 4).year), 
        d = hb(b.W, 1), ((e = hb(b.E, 1)) < 1 || e > 7) && (i = !0); else {
            f = a._locale._week.dow, g = a._locale._week.doy;
            var j = wa(tb(), f, g);
            c = hb(b.gg, a._a[df], j.year), d = hb(b.w, j.week), null != b.d ? ((e = b.d) < 0 || e > 6) && (i = !0) : null != b.e ? (e = b.e + f, 
            (b.e < 0 || b.e > 6) && (i = !0)) : e = f;
        }
        d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), 
        a._a[df] = h.year, a._dayOfYear = h.dayOfYear);
    }
    function lb(b) {
        if (b._f === a.ISO_8601) return void eb(b);
        if (b._f === a.RFC_2822) return void fb(b);
        b._a = [], n(b).empty = !0;
        var c, d, e, f, g, h = "" + b._i, i = h.length, j = 0;
        for (e = Y(b._f, b._locale).match(Ie) || [], c = 0; c < e.length; c++) f = e[c], 
        d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), 
        h = h.slice(h.indexOf(d) + d.length), j += d.length), Le[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), 
        da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
        n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[gf] <= 12 && !0 === n(b).bigHour && b._a[gf] > 0 && (n(b).bigHour = void 0), 
        n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[gf] = mb(b._locale, b._a[gf], b._meridiem), 
        jb(b), db(b);
    }
    function mb(a, b, c) {
        var d;
        return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), 
        d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b;
    }
    function nb(a) {
        var b, c, d, e, f;
        if (0 === a._f.length) return n(a).invalidFormat = !0, void (a._d = new Date(NaN));
        for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), 
        b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, 
        n(b).score = f, (null == d || f < d) && (d = f, c = b));
        k(a, c || b);
    }
    function ob(a) {
        if (!a._d) {
            var b = L(a._i);
            a._a = i([ b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond ], function(a) {
                return a && parseInt(a, 10);
            }), jb(a);
        }
    }
    function pb(a) {
        var b = new r(db(qb(a)));
        return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
    }
    function qb(a) {
        var b = a._i, d = a._f;
        return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({
            nullInput: !0
        }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), 
        o(a) || (a._d = null), a));
    }
    function rb(b) {
        var e = b._i;
        f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function(a) {
            return parseInt(a, 10);
        }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b);
    }
    function sb(a, b, f, g, h) {
        var i = {};
        return !0 !== f && !1 !== f || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), 
        i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, 
        i._strict = g, pb(i);
    }
    function tb(a, b, c, d) {
        return sb(a, b, c, d, !1);
    }
    function ub(a, b) {
        var d, e;
        if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();
        for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
        return d;
    }
    function vb() {
        return ub("isBefore", [].slice.call(arguments, 0));
    }
    function wb() {
        return ub("isAfter", [].slice.call(arguments, 0));
    }
    function xb(a) {
        for (var b in a) if (-1 === Rf.indexOf(b) || null != a[b] && isNaN(a[b])) return !1;
        for (var c = !1, d = 0; d < Rf.length; ++d) if (a[Rf[d]]) {
            if (c) return !1;
            parseFloat(a[Rf[d]]) !== u(a[Rf[d]]) && (c = !0);
        }
        return !0;
    }
    function yb() {
        return this._isValid;
    }
    function zb() {
        return Sb(NaN);
    }
    function Ab(a) {
        var b = L(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0;
        this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, 
        this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), 
        this._bubble();
    }
    function Bb(a) {
        return a instanceof Ab;
    }
    function Cb(a) {
        return a < 0 ? -1 * Math.round(-1 * a) : Math.round(a);
    }
    function Db(a, b) {
        U(a, 0, 0, function() {
            var a = this.utcOffset(), c = "+";
            return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2);
        });
    }
    function Eb(a, b) {
        var c = (b || "").match(a);
        if (null === c) return null;
        var d = c[c.length - 1] || [], e = (d + "").match(Sf) || [ "-", 0, 0 ], f = 60 * e[1] + u(e[2]);
        return 0 === f ? 0 : "+" === e[0] ? f : -f;
    }
    function Fb(b, c) {
        var d, e;
        return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), 
        d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local();
    }
    function Gb(a) {
        return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
    }
    function Hb(b, c, d) {
        var e, f = this._offset || 0;
        if (!this.isValid()) return null != b ? this : NaN;
        if (null != b) {
            if ("string" == typeof b) {
                if (null === (b = Eb($e, b))) return this;
            } else Math.abs(b) < 16 && !d && (b *= 60);
            return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, 
            null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
            a.updateOffset(this, !0), this._changeInProgress = null)), this;
        }
        return this._isUTC ? f : Gb(this);
    }
    function Ib(a, b) {
        return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
    }
    function Jb(a) {
        return this.utcOffset(0, a);
    }
    function Kb(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), 
        this;
    }
    function Lb() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var a = Eb(Ze, this._i);
            null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
        }
        return this;
    }
    function Mb(a) {
        return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 == 0);
    }
    function Nb() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function Ob() {
        if (!f(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if (q(a, this), a = qb(a), a._a) {
            var b = a._isUTC ? l(a._a) : tb(a._a);
            this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
    }
    function Pb() {
        return !!this.isValid() && !this._isUTC;
    }
    function Qb() {
        return !!this.isValid() && this._isUTC;
    }
    function Rb() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset);
    }
    function Sb(a, b) {
        var c, d, e, f = a, h = null;
        return Bb(a) ? f = {
            ms: a._milliseconds,
            d: a._days,
            M: a._months
        } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Tf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, 
        f = {
            y: 0,
            d: u(h[ff]) * c,
            h: u(h[gf]) * c,
            m: u(h[hf]) * c,
            s: u(h[jf]) * c,
            ms: u(Cb(1e3 * h[kf])) * c
        }) : (h = Uf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c)
        }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), 
        f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), 
        d;
    }
    function Tb(a, b) {
        var c = a && parseFloat(a.replace(",", "."));
        return (isNaN(c) ? 0 : c) * b;
    }
    function Ub(a, b) {
        var c = {
            milliseconds: 0,
            months: 0
        };
        return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, 
        c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
    }
    function Vb(a, b) {
        var c;
        return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), 
        c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
            milliseconds: 0,
            months: 0
        };
    }
    function Wb(a, b) {
        return function(c, d) {
            var e, f;
            return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
            f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), 
            this;
        };
    }
    function Xb(b, c, d, e) {
        var f = c._milliseconds, g = Cb(c._days), h = Cb(c._months);
        b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), 
        h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h));
    }
    function Yb(a, b) {
        var c = a.diff(b, "days", !0);
        return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
    }
    function Zb(b, c) {
        var d = b || tb(), e = Fb(d, this).startOf("day"), f = a.calendarFormat(this, e) || "sameElse", g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
        return this.format(g || this.localeData().calendar(f, this, tb(d)));
    }
    function $b() {
        return new r(this);
    }
    function _b(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf());
    }
    function ac(a, b) {
        var c = s(a) ? a : tb(a);
        return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf());
    }
    function bc(a, b, c, d) {
        return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c));
    }
    function cc(a, b) {
        var c, d = s(a) ? a : tb(a);
        return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), 
        this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()));
    }
    function dc(a, b) {
        return this.isSame(a, b) || this.isAfter(a, b);
    }
    function ec(a, b) {
        return this.isSame(a, b) || this.isBefore(a, b);
    }
    function fc(a, b, c) {
        var d, e, f, g;
        return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), 
        b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, 
        g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), 
        c ? g : t(g)) : NaN) : NaN;
    }
    function gc(a, b) {
        var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months");
        return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), 
        d = (b - f) / (c - f)), -(e + d) || 0;
    }
    function hc() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function ic() {
        if (!this.isValid()) return null;
        var a = this.clone().utc();
        return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }
    function jc() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var a = "moment", b = "";
        this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
        b = "Z");
        var c = "[" + a + '("]', d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", e = b + '[")]';
        return this.format(c + d + "-MM-DD[T]HH:mm:ss.SSS" + e);
    }
    function kc(b) {
        b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var c = X(this, b);
        return this.localeData().postformat(c);
    }
    function lc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            to: this,
            from: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }
    function mc(a) {
        return this.from(tb(), a);
    }
    function nc(a, b) {
        return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
            from: this,
            to: a
        }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
    }
    function oc(a) {
        return this.to(tb(), a);
    }
    function pc(a) {
        var b;
        return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), 
        this);
    }
    function qc() {
        return this._locale;
    }
    function rc(a) {
        switch (a = K(a)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), 
        this;
    }
    function sc(a) {
        return void 0 === (a = K(a)) || "millisecond" === a ? this : ("date" === a && (a = "day"), 
        this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"));
    }
    function tc() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }
    function uc() {
        return Math.floor(this.valueOf() / 1e3);
    }
    function vc() {
        return new Date(this.valueOf());
    }
    function wc() {
        var a = this;
        return [ a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond() ];
    }
    function xc() {
        var a = this;
        return {
            years: a.year(),
            months: a.month(),
            date: a.date(),
            hours: a.hours(),
            minutes: a.minutes(),
            seconds: a.seconds(),
            milliseconds: a.milliseconds()
        };
    }
    function yc() {
        return this.isValid() ? this.toISOString() : null;
    }
    function zc() {
        return o(this);
    }
    function Ac() {
        return k({}, n(this));
    }
    function Bc() {
        return n(this).overflow;
    }
    function Cc() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    function Dc(a, b) {
        U(0, [ a, a.length ], 0, b);
    }
    function Ec(a) {
        return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function Fc(a) {
        return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function Gc() {
        return xa(this.year(), 1, 4);
    }
    function Hc() {
        var a = this.localeData()._week;
        return xa(this.year(), a.dow, a.doy);
    }
    function Ic(a, b, c, d, e) {
        var f;
        return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e));
    }
    function Jc(a, b, c, d, e) {
        var f = va(a, b, c, d, e), g = ta(f.year, 0, f.dayOfYear);
        return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), 
        this;
    }
    function Kc(a) {
        return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
    }
    function Lc(a) {
        var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == a ? b : this.add(a - b, "d");
    }
    function Mc(a, b) {
        b[kf] = u(1e3 * ("0." + a));
    }
    function Nc() {
        return this._isUTC ? "UTC" : "";
    }
    function Oc() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }
    function Pc(a) {
        return tb(1e3 * a);
    }
    function Qc() {
        return tb.apply(null, arguments).parseZone();
    }
    function Rc(a) {
        return a;
    }
    function Sc(a, b, c, d) {
        var e = bb(), f = l().set(d, b);
        return e[c](f, a);
    }
    function Tc(a, b, c) {
        if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");
        var d, e = [];
        for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
        return e;
    }
    function Uc(a, b, c, d) {
        "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, 
        a = !1, g(b) && (c = b, b = void 0), b = b || "");
        var e = bb(), f = a ? e._week.dow : 0;
        if (null != c) return Sc(b, (c + f) % 7, d, "day");
        var h, i = [];
        for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
        return i;
    }
    function Vc(a, b) {
        return Tc(a, b, "months");
    }
    function Wc(a, b) {
        return Tc(a, b, "monthsShort");
    }
    function Xc(a, b, c) {
        return Uc(a, b, c, "weekdays");
    }
    function Yc(a, b, c) {
        return Uc(a, b, c, "weekdaysShort");
    }
    function Zc(a, b, c) {
        return Uc(a, b, c, "weekdaysMin");
    }
    function $c() {
        var a = this._data;
        return this._milliseconds = dg(this._milliseconds), this._days = dg(this._days), 
        this._months = dg(this._months), a.milliseconds = dg(a.milliseconds), a.seconds = dg(a.seconds), 
        a.minutes = dg(a.minutes), a.hours = dg(a.hours), a.months = dg(a.months), a.years = dg(a.years), 
        this;
    }
    function _c(a, b, c, d) {
        var e = Sb(b, c);
        return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, 
        a._bubble();
    }
    function ad(a, b) {
        return _c(this, a, b, 1);
    }
    function bd(a, b) {
        return _c(this, a, b, -1);
    }
    function cd(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a);
    }
    function dd() {
        var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data;
        return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), 
        g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), 
        i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), 
        h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, 
        this;
    }
    function ed(a) {
        return 4800 * a / 146097;
    }
    function fd(a) {
        return 146097 * a / 4800;
    }
    function gd(a) {
        if (!this.isValid()) return NaN;
        var b, c, d = this._milliseconds;
        if ("month" === (a = K(a)) || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), 
        "month" === a ? c : c / 12;
        switch (b = this._days + Math.round(fd(this._months)), a) {
          case "week":
            return b / 7 + d / 6048e5;

          case "day":
            return b + d / 864e5;

          case "hour":
            return 24 * b + d / 36e5;

          case "minute":
            return 1440 * b + d / 6e4;

          case "second":
            return 86400 * b + d / 1e3;

          case "millisecond":
            return Math.floor(864e5 * b) + d;

          default:
            throw new Error("Unknown unit " + a);
        }
    }
    function hd() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN;
    }
    function id(a) {
        return function() {
            return this.as(a);
        };
    }
    function jd(a) {
        return a = K(a), this.isValid() ? this[a + "s"]() : NaN;
    }
    function kd(a) {
        return function() {
            return this.isValid() ? this._data[a] : NaN;
        };
    }
    function ld() {
        return t(this.days() / 7);
    }
    function md(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d);
    }
    function nd(a, b, c) {
        var d = Sb(a).abs(), e = tg(d.as("s")), f = tg(d.as("m")), g = tg(d.as("h")), h = tg(d.as("d")), i = tg(d.as("M")), j = tg(d.as("y")), k = e <= ug.ss && [ "s", e ] || e < ug.s && [ "ss", e ] || f <= 1 && [ "m" ] || f < ug.m && [ "mm", f ] || g <= 1 && [ "h" ] || g < ug.h && [ "hh", g ] || h <= 1 && [ "d" ] || h < ug.d && [ "dd", h ] || i <= 1 && [ "M" ] || i < ug.M && [ "MM", i ] || j <= 1 && [ "y" ] || [ "yy", j ];
        return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k);
    }
    function od(a) {
        return void 0 === a ? tg : "function" == typeof a && (tg = a, !0);
    }
    function pd(a, b) {
        return void 0 !== ug[a] && (void 0 === b ? ug[a] : (ug[a] = b, "s" === a && (ug.ss = b - 1), 
        !0));
    }
    function qd(a) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var b = this.localeData(), c = nd(this, !a, b);
        return a && (c = b.pastFuture(+this, c)), b.postformat(c);
    }
    function rd() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, b, c, d = vg(this._milliseconds) / 1e3, e = vg(this._days), f = vg(this._months);
        a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
        var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds();
        return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
    }
    function sd(a, b) {
        var c = a.split("_");
        return b % 10 == 1 && b % 100 != 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
    }
    function td(a, b, c) {
        var d = {
            mm: b ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
            hh: b ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
            dd: "дзень_дні_дзён",
            MM: "месяц_месяцы_месяцаў",
            yy: "год_гады_гадоў"
        };
        return "m" === c ? b ? "хвіліна" : "хвіліну" : "h" === c ? b ? "гадзіна" : "гадзіну" : a + " " + sd(d[c], +a);
    }
    function ud(a, b, c) {
        return a + " " + xd({
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        }[c], a);
    }
    function vd(a) {
        switch (wd(a)) {
          case 1:
          case 3:
          case 4:
          case 5:
          case 9:
            return a + " bloaz";

          default:
            return a + " vloaz";
        }
    }
    function wd(a) {
        return a > 9 ? wd(a % 10) : a;
    }
    function xd(a, b) {
        return 2 === b ? yd(a) : a;
    }
    function yd(a) {
        var b = {
            m: "v",
            b: "v",
            d: "z"
        };
        return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1);
    }
    function zd(a, b, c) {
        var d = a + " ";
        switch (c) {
          case "m":
            return b ? "jedna minuta" : "jedne minute";

          case "mm":
            return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";

          case "h":
            return b ? "jedan sat" : "jednog sata";

          case "hh":
            return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";

          case "dd":
            return d += 1 === a ? "dan" : "dana";

          case "MM":
            return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";

          case "yy":
            return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina";
        }
    }
    function Ad(a) {
        return a > 1 && a < 5 && 1 != ~~(a / 10);
    }
    function Bd(a, b, c, d) {
        var e = a + " ";
        switch (c) {
          case "s":
            return b || d ? "pár sekund" : "pár sekundami";

          case "m":
            return b ? "minuta" : d ? "minutu" : "minutou";

          case "mm":
            return b || d ? e + (Ad(a) ? "minuty" : "minut") : e + "minutami";

          case "h":
            return b ? "hodina" : d ? "hodinu" : "hodinou";

          case "hh":
            return b || d ? e + (Ad(a) ? "hodiny" : "hodin") : e + "hodinami";

          case "d":
            return b || d ? "den" : "dnem";

          case "dd":
            return b || d ? e + (Ad(a) ? "dny" : "dní") : e + "dny";

          case "M":
            return b || d ? "měsíc" : "měsícem";

          case "MM":
            return b || d ? e + (Ad(a) ? "měsíce" : "měsíců") : e + "měsíci";

          case "y":
            return b || d ? "rok" : "rokem";

          case "yy":
            return b || d ? e + (Ad(a) ? "roky" : "let") : e + "lety";
        }
    }
    function Cd(a, b, c, d) {
        var e = {
            m: [ "eine Minute", "einer Minute" ],
            h: [ "eine Stunde", "einer Stunde" ],
            d: [ "ein Tag", "einem Tag" ],
            dd: [ a + " Tage", a + " Tagen" ],
            M: [ "ein Monat", "einem Monat" ],
            MM: [ a + " Monate", a + " Monaten" ],
            y: [ "ein Jahr", "einem Jahr" ],
            yy: [ a + " Jahre", a + " Jahren" ]
        };
        return b ? e[c][0] : e[c][1];
    }
    function Dd(a, b, c, d) {
        var e = {
            m: [ "eine Minute", "einer Minute" ],
            h: [ "eine Stunde", "einer Stunde" ],
            d: [ "ein Tag", "einem Tag" ],
            dd: [ a + " Tage", a + " Tagen" ],
            M: [ "ein Monat", "einem Monat" ],
            MM: [ a + " Monate", a + " Monaten" ],
            y: [ "ein Jahr", "einem Jahr" ],
            yy: [ a + " Jahre", a + " Jahren" ]
        };
        return b ? e[c][0] : e[c][1];
    }
    function Ed(a, b, c, d) {
        var e = {
            m: [ "eine Minute", "einer Minute" ],
            h: [ "eine Stunde", "einer Stunde" ],
            d: [ "ein Tag", "einem Tag" ],
            dd: [ a + " Tage", a + " Tagen" ],
            M: [ "ein Monat", "einem Monat" ],
            MM: [ a + " Monate", a + " Monaten" ],
            y: [ "ein Jahr", "einem Jahr" ],
            yy: [ a + " Jahre", a + " Jahren" ]
        };
        return b ? e[c][0] : e[c][1];
    }
    function Fd(a, b, c, d) {
        var e = {
            s: [ "mõne sekundi", "mõni sekund", "paar sekundit" ],
            m: [ "ühe minuti", "üks minut" ],
            mm: [ a + " minuti", a + " minutit" ],
            h: [ "ühe tunni", "tund aega", "üks tund" ],
            hh: [ a + " tunni", a + " tundi" ],
            d: [ "ühe päeva", "üks päev" ],
            M: [ "kuu aja", "kuu aega", "üks kuu" ],
            MM: [ a + " kuu", a + " kuud" ],
            y: [ "ühe aasta", "aasta", "üks aasta" ],
            yy: [ a + " aasta", a + " aastat" ]
        };
        return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1];
    }
    function Gd(a, b, c, d) {
        var e = "";
        switch (c) {
          case "s":
            return d ? "muutaman sekunnin" : "muutama sekunti";

          case "m":
            return d ? "minuutin" : "minuutti";

          case "mm":
            e = d ? "minuutin" : "minuuttia";
            break;

          case "h":
            return d ? "tunnin" : "tunti";

          case "hh":
            e = d ? "tunnin" : "tuntia";
            break;

          case "d":
            return d ? "päivän" : "päivä";

          case "dd":
            e = d ? "päivän" : "päivää";
            break;

          case "M":
            return d ? "kuukauden" : "kuukausi";

          case "MM":
            e = d ? "kuukauden" : "kuukautta";
            break;

          case "y":
            return d ? "vuoden" : "vuosi";

          case "yy":
            e = d ? "vuoden" : "vuotta";
        }
        return e = Hd(a, d) + " " + e;
    }
    function Hd(a, b) {
        return a < 10 ? b ? $g[a] : Zg[a] : a;
    }
    function Id(a, b, c, d) {
        var e = {
            s: [ "thodde secondanim", "thodde second" ],
            m: [ "eka mintan", "ek minute" ],
            mm: [ a + " mintanim", a + " mintam" ],
            h: [ "eka horan", "ek hor" ],
            hh: [ a + " horanim", a + " hor" ],
            d: [ "eka disan", "ek dis" ],
            dd: [ a + " disanim", a + " dis" ],
            M: [ "eka mhoinean", "ek mhoino" ],
            MM: [ a + " mhoineanim", a + " mhoine" ],
            y: [ "eka vorsan", "ek voros" ],
            yy: [ a + " vorsanim", a + " vorsam" ]
        };
        return b ? e[c][0] : e[c][1];
    }
    function Jd(a, b, c) {
        var d = a + " ";
        switch (c) {
          case "m":
            return b ? "jedna minuta" : "jedne minute";

          case "mm":
            return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";

          case "h":
            return b ? "jedan sat" : "jednog sata";

          case "hh":
            return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";

          case "dd":
            return d += 1 === a ? "dan" : "dana";

          case "MM":
            return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";

          case "yy":
            return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina";
        }
    }
    function Kd(a, b, c, d) {
        var e = a;
        switch (c) {
          case "s":
            return d || b ? "néhány másodperc" : "néhány másodperce";

          case "m":
            return "egy" + (d || b ? " perc" : " perce");

          case "mm":
            return e + (d || b ? " perc" : " perce");

          case "h":
            return "egy" + (d || b ? " óra" : " órája");

          case "hh":
            return e + (d || b ? " óra" : " órája");

          case "d":
            return "egy" + (d || b ? " nap" : " napja");

          case "dd":
            return e + (d || b ? " nap" : " napja");

          case "M":
            return "egy" + (d || b ? " hónap" : " hónapja");

          case "MM":
            return e + (d || b ? " hónap" : " hónapja");

          case "y":
            return "egy" + (d || b ? " év" : " éve");

          case "yy":
            return e + (d || b ? " év" : " éve");
        }
        return "";
    }
    function Ld(a) {
        return (a ? "" : "[múlt] ") + "[" + ih[this.day()] + "] LT[-kor]";
    }
    function Md(a) {
        return a % 100 == 11 || a % 10 != 1;
    }
    function Nd(a, b, c, d) {
        var e = a + " ";
        switch (c) {
          case "s":
            return b || d ? "nokkrar sekúndur" : "nokkrum sekúndum";

          case "m":
            return b ? "mínúta" : "mínútu";

          case "mm":
            return Md(a) ? e + (b || d ? "mínútur" : "mínútum") : b ? e + "mínúta" : e + "mínútu";

          case "hh":
            return Md(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";

          case "d":
            return b ? "dagur" : d ? "dag" : "degi";

          case "dd":
            return Md(a) ? b ? e + "dagar" : e + (d ? "daga" : "dögum") : b ? e + "dagur" : e + (d ? "dag" : "degi");

          case "M":
            return b ? "mánuður" : d ? "mánuð" : "mánuði";

          case "MM":
            return Md(a) ? b ? e + "mánuðir" : e + (d ? "mánuði" : "mánuðum") : b ? e + "mánuður" : e + (d ? "mánuð" : "mánuði");

          case "y":
            return b || d ? "ár" : "ári";

          case "yy":
            return Md(a) ? e + (b || d ? "ár" : "árum") : e + (b || d ? "ár" : "ári");
        }
    }
    function Od(a, b, c, d) {
        var e = {
            m: [ "eng Minutt", "enger Minutt" ],
            h: [ "eng Stonn", "enger Stonn" ],
            d: [ "een Dag", "engem Dag" ],
            M: [ "ee Mount", "engem Mount" ],
            y: [ "ee Joer", "engem Joer" ]
        };
        return b ? e[c][0] : e[c][1];
    }
    function Pd(a) {
        return Rd(a.substr(0, a.indexOf(" "))) ? "a " + a : "an " + a;
    }
    function Qd(a) {
        return Rd(a.substr(0, a.indexOf(" "))) ? "viru " + a : "virun " + a;
    }
    function Rd(a) {
        if (a = parseInt(a, 10), isNaN(a)) return !1;
        if (a < 0) return !0;
        if (a < 10) return 4 <= a && a <= 7;
        if (a < 100) {
            var b = a % 10, c = a / 10;
            return Rd(0 === b ? c : b);
        }
        if (a < 1e4) {
            for (;a >= 10; ) a /= 10;
            return Rd(a);
        }
        return a /= 1e3, Rd(a);
    }
    function Sd(a, b, c, d) {
        return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes";
    }
    function Td(a, b, c, d) {
        return b ? Vd(c)[0] : d ? Vd(c)[1] : Vd(c)[2];
    }
    function Ud(a) {
        return a % 10 == 0 || a > 10 && a < 20;
    }
    function Vd(a) {
        return nh[a].split("_");
    }
    function Wd(a, b, c, d) {
        var e = a + " ";
        return 1 === a ? e + Td(a, b, c[0], d) : b ? e + (Ud(a) ? Vd(c)[1] : Vd(c)[0]) : d ? e + Vd(c)[1] : e + (Ud(a) ? Vd(c)[1] : Vd(c)[2]);
    }
    function Xd(a, b, c) {
        return c ? b % 10 == 1 && b % 100 != 11 ? a[2] : a[3] : b % 10 == 1 && b % 100 != 11 ? a[0] : a[1];
    }
    function Yd(a, b, c) {
        return a + " " + Xd(oh[c], a, b);
    }
    function Zd(a, b, c) {
        return Xd(oh[c], a, b);
    }
    function $d(a, b) {
        return b ? "dažas sekundes" : "dažām sekundēm";
    }
    function _d(a, b, c, d) {
        var e = "";
        if (b) switch (c) {
          case "s":
            e = "काही सेकंद";
            break;

          case "m":
            e = "एक मिनिट";
            break;

          case "mm":
            e = "%d मिनिटे";
            break;

          case "h":
            e = "एक तास";
            break;

          case "hh":
            e = "%d तास";
            break;

          case "d":
            e = "एक दिवस";
            break;

          case "dd":
            e = "%d दिवस";
            break;

          case "M":
            e = "एक महिना";
            break;

          case "MM":
            e = "%d महिने";
            break;

          case "y":
            e = "एक वर्ष";
            break;

          case "yy":
            e = "%d वर्षे";
        } else switch (c) {
          case "s":
            e = "काही सेकंदां";
            break;

          case "m":
            e = "एका मिनिटा";
            break;

          case "mm":
            e = "%d मिनिटां";
            break;

          case "h":
            e = "एका तासा";
            break;

          case "hh":
            e = "%d तासां";
            break;

          case "d":
            e = "एका दिवसा";
            break;

          case "dd":
            e = "%d दिवसां";
            break;

          case "M":
            e = "एका महिन्या";
            break;

          case "MM":
            e = "%d महिन्यां";
            break;

          case "y":
            e = "एका वर्षा";
            break;

          case "yy":
            e = "%d वर्षां";
        }
        return e.replace(/%d/i, a);
    }
    function ae(a) {
        return a % 10 < 5 && a % 10 > 1 && ~~(a / 10) % 10 != 1;
    }
    function be(a, b, c) {
        var d = a + " ";
        switch (c) {
          case "m":
            return b ? "minuta" : "minutę";

          case "mm":
            return d + (ae(a) ? "minuty" : "minut");

          case "h":
            return b ? "godzina" : "godzinę";

          case "hh":
            return d + (ae(a) ? "godziny" : "godzin");

          case "MM":
            return d + (ae(a) ? "miesiące" : "miesięcy");

          case "yy":
            return d + (ae(a) ? "lata" : "lat");
        }
    }
    function ce(a, b, c) {
        var d = {
            mm: "minute",
            hh: "ore",
            dd: "zile",
            MM: "luni",
            yy: "ani"
        }, e = " ";
        return (a % 100 >= 20 || a >= 100 && a % 100 == 0) && (e = " de "), a + e + d[c];
    }
    function de(a, b) {
        var c = a.split("_");
        return b % 10 == 1 && b % 100 != 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
    }
    function ee(a, b, c) {
        var d = {
            mm: b ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        };
        return "m" === c ? b ? "минута" : "минуту" : a + " " + de(d[c], +a);
    }
    function fe(a) {
        return a > 1 && a < 5;
    }
    function ge(a, b, c, d) {
        var e = a + " ";
        switch (c) {
          case "s":
            return b || d ? "pár sekúnd" : "pár sekundami";

          case "m":
            return b ? "minúta" : d ? "minútu" : "minútou";

          case "mm":
            return b || d ? e + (fe(a) ? "minúty" : "minút") : e + "minútami";

          case "h":
            return b ? "hodina" : d ? "hodinu" : "hodinou";

          case "hh":
            return b || d ? e + (fe(a) ? "hodiny" : "hodín") : e + "hodinami";

          case "d":
            return b || d ? "deň" : "dňom";

          case "dd":
            return b || d ? e + (fe(a) ? "dni" : "dní") : e + "dňami";

          case "M":
            return b || d ? "mesiac" : "mesiacom";

          case "MM":
            return b || d ? e + (fe(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";

          case "y":
            return b || d ? "rok" : "rokom";

          case "yy":
            return b || d ? e + (fe(a) ? "roky" : "rokov") : e + "rokmi";
        }
    }
    function he(a, b, c, d) {
        var e = a + " ";
        switch (c) {
          case "s":
            return b || d ? "nekaj sekund" : "nekaj sekundami";

          case "m":
            return b ? "ena minuta" : "eno minuto";

          case "mm":
            return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : a < 5 ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";

          case "h":
            return b ? "ena ura" : "eno uro";

          case "hh":
            return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : a < 5 ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";

          case "d":
            return b || d ? "en dan" : "enim dnem";

          case "dd":
            return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";

          case "M":
            return b || d ? "en mesec" : "enim mesecem";

          case "MM":
            return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : a < 5 ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";

          case "y":
            return b || d ? "eno leto" : "enim letom";

          case "yy":
            return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : a < 5 ? b || d ? "leta" : "leti" : b || d ? "let" : "leti";
        }
    }
    function ie(a) {
        var b = a;
        return b = -1 !== a.indexOf("jaj") ? b.slice(0, -3) + "leS" : -1 !== a.indexOf("jar") ? b.slice(0, -3) + "waQ" : -1 !== a.indexOf("DIS") ? b.slice(0, -3) + "nem" : b + " pIq";
    }
    function je(a) {
        var b = a;
        return b = -1 !== a.indexOf("jaj") ? b.slice(0, -3) + "Hu’" : -1 !== a.indexOf("jar") ? b.slice(0, -3) + "wen" : -1 !== a.indexOf("DIS") ? b.slice(0, -3) + "ben" : b + " ret";
    }
    function ke(a, b, c, d) {
        var e = le(a);
        switch (c) {
          case "mm":
            return e + " tup";

          case "hh":
            return e + " rep";

          case "dd":
            return e + " jaj";

          case "MM":
            return e + " jar";

          case "yy":
            return e + " DIS";
        }
    }
    function le(a) {
        var b = Math.floor(a % 1e3 / 100), c = Math.floor(a % 100 / 10), d = a % 10, e = "";
        return b > 0 && (e += Rh[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + Rh[c] + "maH"), 
        d > 0 && (e += ("" !== e ? " " : "") + Rh[d]), "" === e ? "pagh" : e;
    }
    function me(a, b, c, d) {
        var e = {
            s: [ "viensas secunds", "'iensas secunds" ],
            m: [ "'n míut", "'iens míut" ],
            mm: [ a + " míuts", a + " míuts" ],
            h: [ "'n þora", "'iensa þora" ],
            hh: [ a + " þoras", a + " þoras" ],
            d: [ "'n ziua", "'iensa ziua" ],
            dd: [ a + " ziuas", a + " ziuas" ],
            M: [ "'n mes", "'iens mes" ],
            MM: [ a + " mesen", a + " mesen" ],
            y: [ "'n ar", "'iens ar" ],
            yy: [ a + " ars", a + " ars" ]
        };
        return d ? e[c][0] : b ? e[c][0] : e[c][1];
    }
    function ne(a, b) {
        var c = a.split("_");
        return b % 10 == 1 && b % 100 != 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
    }
    function oe(a, b, c) {
        var d = {
            mm: b ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
            hh: b ? "година_години_годин" : "годину_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
        };
        return "m" === c ? b ? "хвилина" : "хвилину" : "h" === c ? b ? "година" : "годину" : a + " " + ne(d[c], +a);
    }
    function pe(a, b) {
        var c = {
            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
        };
        return a ? c[/(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative"][a.day()] : c.nominative;
    }
    function qe(a) {
        return function() {
            return a + "о" + (11 === this.hours() ? "б" : "") + "] LT";
        };
    }
    var re, se;
    se = Array.prototype.some ? Array.prototype.some : function(a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++) if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1;
    };
    var te = se, ue = a.momentProperties = [], ve = !1, we = {};
    a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
    var xe;
    xe = Object.keys ? Object.keys : function(a) {
        var b, c = [];
        for (b in a) j(a, b) && c.push(b);
        return c;
    };
    var ye, ze = xe, Ae = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, Be = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Ce = "Invalid date", De = "%d", Ee = /\d{1,2}/, Fe = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Ge = {}, He = {}, Ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Je = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ke = {}, Le = {}, Me = /\d/, Ne = /\d\d/, Oe = /\d{3}/, Pe = /\d{4}/, Qe = /[+-]?\d{6}/, Re = /\d\d?/, Se = /\d\d\d\d?/, Te = /\d\d\d\d\d\d?/, Ue = /\d{1,3}/, Ve = /\d{1,4}/, We = /[+-]?\d{1,6}/, Xe = /\d+/, Ye = /[+-]?\d+/, Ze = /Z|[+-]\d\d:?\d\d/gi, $e = /Z|[+-]\d\d(?::?\d\d)?/gi, _e = /[+-]?\d+(\.\d{1,3})?/, af = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, bf = {}, cf = {}, df = 0, ef = 1, ff = 2, gf = 3, hf = 4, jf = 5, kf = 6, lf = 7, mf = 8;
    ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) {
        var b;
        for (b = 0; b < this.length; ++b) if (this[b] === a) return b;
        return -1;
    };
    var nf = ye;
    U("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    }), U("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a);
    }), U("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a);
    }), J("month", "M"), M("month", 8), Z("M", Re), Z("MM", Re, Ne), Z("MMM", function(a, b) {
        return b.monthsShortRegex(a);
    }), Z("MMMM", function(a, b) {
        return b.monthsRegex(a);
    }), ba([ "M", "MM" ], function(a, b) {
        b[ef] = u(a) - 1;
    }), ba([ "MMM", "MMMM" ], function(a, b, c, d) {
        var e = c._locale.monthsParse(a, d, c._strict);
        null != e ? b[ef] = e : n(c).invalidMonth = a;
    });
    var of = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, pf = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), qf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), rf = af, sf = af;
    U("Y", 0, 0, function() {
        var a = this.year();
        return a <= 9999 ? "" + a : "+" + a;
    }), U(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    }), U(0, [ "YYYY", 4 ], 0, "year"), U(0, [ "YYYYY", 5 ], 0, "year"), U(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
    J("year", "y"), M("year", 1), Z("Y", Ye), Z("YY", Re, Ne), Z("YYYY", Ve, Pe), Z("YYYYY", We, Qe), 
    Z("YYYYYY", We, Qe), ba([ "YYYYY", "YYYYYY" ], df), ba("YYYY", function(b, c) {
        c[df] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
    }), ba("YY", function(b, c) {
        c[df] = a.parseTwoDigitYear(b);
    }), ba("Y", function(a, b) {
        b[df] = parseInt(a, 10);
    }), a.parseTwoDigitYear = function(a) {
        return u(a) + (u(a) > 68 ? 1900 : 2e3);
    };
    var tf = O("FullYear", !0);
    U("w", [ "ww", 2 ], "wo", "week"), U("W", [ "WW", 2 ], "Wo", "isoWeek"), J("week", "w"), 
    J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Re), Z("ww", Re, Ne), Z("W", Re), 
    Z("WW", Re, Ne), ca([ "w", "ww", "W", "WW" ], function(a, b, c, d) {
        b[d.substr(0, 1)] = u(a);
    });
    var uf = {
        dow: 0,
        doy: 6
    };
    U("d", 0, "do", "day"), U("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a);
    }), U("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a);
    }), U("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a);
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), 
    J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Re), 
    Z("e", Re), Z("E", Re), Z("dd", function(a, b) {
        return b.weekdaysMinRegex(a);
    }), Z("ddd", function(a, b) {
        return b.weekdaysShortRegex(a);
    }), Z("dddd", function(a, b) {
        return b.weekdaysRegex(a);
    }), ca([ "dd", "ddd", "dddd" ], function(a, b, c, d) {
        var e = c._locale.weekdaysParse(a, d, c._strict);
        null != e ? b.d = e : n(c).invalidWeekday = a;
    }), ca([ "d", "e", "E" ], function(a, b, c, d) {
        b[d] = u(a);
    });
    var vf = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), wf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), xf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), yf = af, zf = af, Af = af;
    U("H", [ "HH", 2 ], 0, "hour"), U("h", [ "hh", 2 ], 0, Ra), U("k", [ "kk", 2 ], 0, Sa), 
    U("hmm", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2);
    }), U("hmmss", 0, 0, function() {
        return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
    }), U("Hmm", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2);
    }), U("Hmmss", 0, 0, function() {
        return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
    }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), 
    Z("H", Re), Z("h", Re), Z("k", Re), Z("HH", Re, Ne), Z("hh", Re, Ne), Z("kk", Re, Ne), 
    Z("hmm", Se), Z("hmmss", Te), Z("Hmm", Se), Z("Hmmss", Te), ba([ "H", "HH" ], gf), 
    ba([ "k", "kk" ], function(a, b, c) {
        var d = u(a);
        b[gf] = 24 === d ? 0 : d;
    }), ba([ "a", "A" ], function(a, b, c) {
        c._isPm = c._locale.isPM(a), c._meridiem = a;
    }), ba([ "h", "hh" ], function(a, b, c) {
        b[gf] = u(a), n(c).bigHour = !0;
    }), ba("hmm", function(a, b, c) {
        var d = a.length - 2;
        b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d)), n(c).bigHour = !0;
    }), ba("hmmss", function(a, b, c) {
        var d = a.length - 4, e = a.length - 2;
        b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e)), n(c).bigHour = !0;
    }), ba("Hmm", function(a, b, c) {
        var d = a.length - 2;
        b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d));
    }), ba("Hmmss", function(a, b, c) {
        var d = a.length - 4, e = a.length - 2;
        b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e));
    });
    var Bf, Cf = /[ap]\.?m?\.?/i, Df = O("Hours", !0), Ef = {
        calendar: Ae,
        longDateFormat: Be,
        invalidDate: Ce,
        ordinal: De,
        dayOfMonthOrdinalParse: Ee,
        relativeTime: Fe,
        months: pf,
        monthsShort: qf,
        week: uf,
        weekdays: vf,
        weekdaysMin: xf,
        weekdaysShort: wf,
        meridiemParse: Cf
    }, Ff = {}, Gf = {}, Hf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, If = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Jf = /Z|[+-]\d\d(?::?\d\d)?/, Kf = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], Lf = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], Mf = /^\/?Date\((\-?\d+)/i, Nf = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) {
        a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }), a.ISO_8601 = function() {}, a.RFC_2822 = function() {};
    var Of = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var a = tb.apply(null, arguments);
        return this.isValid() && a.isValid() ? a < this ? this : a : p();
    }), Pf = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var a = tb.apply(null, arguments);
        return this.isValid() && a.isValid() ? a > this ? this : a : p();
    }), Qf = function() {
        return Date.now ? Date.now() : +new Date();
    }, Rf = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
    Db("Z", ":"), Db("ZZ", ""), Z("Z", $e), Z("ZZ", $e), ba([ "Z", "ZZ" ], function(a, b, c) {
        c._useUTC = !0, c._tzm = Eb($e, a);
    });
    var Sf = /([\+\-]|\d\d)/gi;
    a.updateOffset = function() {};
    var Tf = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Uf = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    Sb.fn = Ab.prototype, Sb.invalid = zb;
    var Vf = Wb(1, "add"), Wf = Wb(-1, "subtract");
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xf = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
        return void 0 === a ? this.localeData() : this.locale(a);
    });
    U(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    }), U(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), 
    Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), 
    M("isoWeekYear", 1), Z("G", Ye), Z("g", Ye), Z("GG", Re, Ne), Z("gg", Re, Ne), Z("GGGG", Ve, Pe), 
    Z("gggg", Ve, Pe), Z("GGGGG", We, Qe), Z("ggggg", We, Qe), ca([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(a, b, c, d) {
        b[d.substr(0, 2)] = u(a);
    }), ca([ "gg", "GG" ], function(b, c, d, e) {
        c[e] = a.parseTwoDigitYear(b);
    }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Me), 
    ba("Q", function(a, b) {
        b[ef] = 3 * (u(a) - 1);
    }), U("D", [ "DD", 2 ], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Re), 
    Z("DD", Re, Ne), Z("Do", function(a, b) {
        return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient;
    }), ba([ "D", "DD" ], ff), ba("Do", function(a, b) {
        b[ff] = u(a.match(Re)[0], 10);
    });
    var Yf = O("Date", !0);
    U("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), 
    Z("DDD", Ue), Z("DDDD", Oe), ba([ "DDD", "DDDD" ], function(a, b, c) {
        c._dayOfYear = u(a);
    }), U("m", [ "mm", 2 ], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Re), 
    Z("mm", Re, Ne), ba([ "m", "mm" ], hf);
    var Zf = O("Minutes", !1);
    U("s", [ "ss", 2 ], 0, "second"), J("second", "s"), M("second", 15), Z("s", Re), 
    Z("ss", Re, Ne), ba([ "s", "ss" ], jf);
    var $f = O("Seconds", !1);
    U("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    }), U(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    }), U(0, [ "SSS", 3 ], 0, "millisecond"), U(0, [ "SSSS", 4 ], 0, function() {
        return 10 * this.millisecond();
    }), U(0, [ "SSSSS", 5 ], 0, function() {
        return 100 * this.millisecond();
    }), U(0, [ "SSSSSS", 6 ], 0, function() {
        return 1e3 * this.millisecond();
    }), U(0, [ "SSSSSSS", 7 ], 0, function() {
        return 1e4 * this.millisecond();
    }), U(0, [ "SSSSSSSS", 8 ], 0, function() {
        return 1e5 * this.millisecond();
    }), U(0, [ "SSSSSSSSS", 9 ], 0, function() {
        return 1e6 * this.millisecond();
    }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Ue, Me), Z("SS", Ue, Ne), 
    Z("SSS", Ue, Oe);
    var _f;
    for (_f = "SSSS"; _f.length <= 9; _f += "S") Z(_f, Xe);
    for (_f = "S"; _f.length <= 9; _f += "S") ba(_f, Mc);
    var ag = O("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var bg = r.prototype;
    bg.add = Vf, bg.calendar = Zb, bg.clone = $b, bg.diff = fc, bg.endOf = sc, bg.format = kc, 
    bg.from = lc, bg.fromNow = mc, bg.to = nc, bg.toNow = oc, bg.get = R, bg.invalidAt = Bc, 
    bg.isAfter = _b, bg.isBefore = ac, bg.isBetween = bc, bg.isSame = cc, bg.isSameOrAfter = dc, 
    bg.isSameOrBefore = ec, bg.isValid = zc, bg.lang = Xf, bg.locale = pc, bg.localeData = qc, 
    bg.max = Pf, bg.min = Of, bg.parsingFlags = Ac, bg.set = S, bg.startOf = rc, bg.subtract = Wf, 
    bg.toArray = wc, bg.toObject = xc, bg.toDate = vc, bg.toISOString = ic, bg.inspect = jc, 
    bg.toJSON = yc, bg.toString = hc, bg.unix = uc, bg.valueOf = tc, bg.creationData = Cc, 
    bg.year = tf, bg.isLeapYear = ra, bg.weekYear = Ec, bg.isoWeekYear = Fc, bg.quarter = bg.quarters = Kc, 
    bg.month = ka, bg.daysInMonth = la, bg.week = bg.weeks = Ba, bg.isoWeek = bg.isoWeeks = Ca, 
    bg.weeksInYear = Hc, bg.isoWeeksInYear = Gc, bg.date = Yf, bg.day = bg.days = Ka, 
    bg.weekday = La, bg.isoWeekday = Ma, bg.dayOfYear = Lc, bg.hour = bg.hours = Df, 
    bg.minute = bg.minutes = Zf, bg.second = bg.seconds = $f, bg.millisecond = bg.milliseconds = ag, 
    bg.utcOffset = Hb, bg.utc = Jb, bg.local = Kb, bg.parseZone = Lb, bg.hasAlignedHourOffset = Mb, 
    bg.isDST = Nb, bg.isLocal = Pb, bg.isUtcOffset = Qb, bg.isUtc = Rb, bg.isUTC = Rb, 
    bg.zoneAbbr = Nc, bg.zoneName = Oc, bg.dates = x("dates accessor is deprecated. Use date instead.", Yf), 
    bg.months = x("months accessor is deprecated. Use month instead", ka), bg.years = x("years accessor is deprecated. Use year instead", tf), 
    bg.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), 
    bg.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);
    var cg = C.prototype;
    cg.calendar = D, cg.longDateFormat = E, cg.invalidDate = F, cg.ordinal = G, cg.preparse = Rc, 
    cg.postformat = Rc, cg.relativeTime = H, cg.pastFuture = I, cg.set = A, cg.months = fa, 
    cg.monthsShort = ga, cg.monthsParse = ia, cg.monthsRegex = na, cg.monthsShortRegex = ma, 
    cg.week = ya, cg.firstDayOfYear = Aa, cg.firstDayOfWeek = za, cg.weekdays = Fa, 
    cg.weekdaysMin = Ha, cg.weekdaysShort = Ga, cg.weekdaysParse = Ja, cg.weekdaysRegex = Na, 
    cg.weekdaysShortRegex = Oa, cg.weekdaysMinRegex = Pa, cg.isPM = Va, cg.meridiem = Wa, 
    $a("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th");
        }
    }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
    var dg = Math.abs, eg = id("ms"), fg = id("s"), gg = id("m"), hg = id("h"), ig = id("d"), jg = id("w"), kg = id("M"), lg = id("y"), mg = kd("milliseconds"), ng = kd("seconds"), og = kd("minutes"), pg = kd("hours"), qg = kd("days"), rg = kd("months"), sg = kd("years"), tg = Math.round, ug = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, vg = Math.abs, wg = Ab.prototype;
    wg.isValid = yb, wg.abs = $c, wg.add = ad, wg.subtract = bd, wg.as = gd, wg.asMilliseconds = eg, 
    wg.asSeconds = fg, wg.asMinutes = gg, wg.asHours = hg, wg.asDays = ig, wg.asWeeks = jg, 
    wg.asMonths = kg, wg.asYears = lg, wg.valueOf = hd, wg._bubble = dd, wg.get = jd, 
    wg.milliseconds = mg, wg.seconds = ng, wg.minutes = og, wg.hours = pg, wg.days = qg, 
    wg.weeks = ld, wg.months = rg, wg.years = sg, wg.humanize = qd, wg.toISOString = rd, 
    wg.toString = rd, wg.toJSON = rd, wg.locale = pc, wg.localeData = qc, wg.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), 
    wg.lang = Xf, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Ye), Z("X", _e), 
    ba("X", function(a, b, c) {
        c._d = new Date(1e3 * parseFloat(a, 10));
    }), ba("x", function(a, b, c) {
        c._d = new Date(u(a));
    }), a.version = "2.18.1", b(tb), a.fn = bg, a.min = vb, a.max = wb, a.now = Qf, 
    a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, 
    a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, 
    a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, 
    a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, 
    a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, 
    a.prototype = bg, a.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function(a) {
            return /^nm$/i.test(a);
        },
        meridiem: function(a, b, c) {
            return a < 12 ? c ? "vm" : "VM" : c ? "nm" : "NM";
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(a) {
            return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("ar-dz", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 0,
            doy: 4
        }
    }), a.defineLocale("ar-kw", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 0,
            doy: 12
        }
    });
    var xg = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0"
    }, yg = function(a) {
        return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5;
    }, zg = {
        s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
        m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
        h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
        d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
        M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
        y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
    }, Ag = function(a) {
        return function(b, c, d, e) {
            var f = yg(b), g = zg[a][yg(b)];
            return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b);
        };
    }, Bg = [ "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر" ];
    a.defineLocale("ar-ly", {
        months: Bg,
        monthsShort: Bg,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(a) {
            return "م" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "ص" : "م";
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: Ag("s"),
            m: Ag("m"),
            mm: Ag("m"),
            h: Ag("h"),
            hh: Ag("h"),
            d: Ag("d"),
            dd: Ag("d"),
            M: Ag("M"),
            MM: Ag("M"),
            y: Ag("y"),
            yy: Ag("y")
        },
        preparse: function(a) {
            return a.replace(/\u200f/g, "").replace(/،/g, ",");
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return xg[a];
            }).replace(/,/g, "،");
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), a.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var Cg = {
        "1": "١",
        "2": "٢",
        "3": "٣",
        "4": "٤",
        "5": "٥",
        "6": "٦",
        "7": "٧",
        "8": "٨",
        "9": "٩",
        "0": "٠"
    }, Dg = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
    };
    a.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(a) {
            return "م" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "ص" : "م";
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        preparse: function(a) {
            return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(a) {
                return Dg[a];
            }).replace(/،/g, ",");
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Cg[a];
            }).replace(/,/g, "،");
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Eg = {
        "1": "١",
        "2": "٢",
        "3": "٣",
        "4": "٤",
        "5": "٥",
        "6": "٦",
        "7": "٧",
        "8": "٨",
        "9": "٩",
        "0": "٠"
    }, Fg = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
    }, Gg = function(a) {
        return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5;
    }, Hg = {
        s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
        m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
        h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
        d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
        M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
        y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
    }, Ig = function(a) {
        return function(b, c, d, e) {
            var f = Gg(b), g = Hg[a][Gg(b)];
            return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b);
        };
    }, Jg = [ "كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر" ];
    a.defineLocale("ar", {
        months: Jg,
        monthsShort: Jg,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(a) {
            return "م" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "ص" : "م";
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: Ig("s"),
            m: Ig("m"),
            mm: Ig("m"),
            h: Ig("h"),
            hh: Ig("h"),
            d: Ig("d"),
            dd: Ig("d"),
            M: Ig("M"),
            MM: Ig("M"),
            y: Ig("y"),
            yy: Ig("y")
        },
        preparse: function(a) {
            return a.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(a) {
                return Fg[a];
            }).replace(/،/g, ",");
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Eg[a];
            }).replace(/,/g, "،");
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var Kg = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
    };
    a.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "birneçə saniyyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function(a) {
            return /^(gündüz|axşam)$/.test(a);
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "gecə" : a < 12 ? "səhər" : a < 17 ? "gündüz" : "axşam";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function(a) {
            if (0 === a) return a + "-ıncı";
            var b = a % 10, c = a % 100 - b, d = a >= 100 ? 100 : null;
            return a + (Kg[b] || Kg[c] || Kg[d]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("be", {
        months: {
            format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
            standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
            format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
            standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function() {
                return "[У] dddd [ў] LT";
            },
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return "[У мінулую] dddd [ў] LT";

                  case 1:
                  case 2:
                  case 4:
                    return "[У мінулы] dddd [ў] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: td,
            mm: td,
            h: td,
            hh: td,
            d: "дзень",
            dd: td,
            M: "месяц",
            MM: td,
            y: "год",
            yy: td
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function(a) {
            return /^(дня|вечара)$/.test(a);
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "ночы" : a < 12 ? "раніцы" : a < 17 ? "дня" : "вечара";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function(a, b) {
            switch (b) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return a % 10 != 2 && a % 10 != 3 || a % 100 == 12 || a % 100 == 13 ? a + "-ы" : a + "-і";

              case "D":
                return a + "-га";

              default:
                return a;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[В изминалата] dddd [в] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[В изминалия] dddd [в] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дни",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(a) {
            var b = a % 10, c = a % 100;
            return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти";
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Lg = {
        "1": "১",
        "2": "২",
        "3": "৩",
        "4": "৪",
        "5": "৫",
        "6": "৬",
        "7": "৭",
        "8": "৮",
        "9": "৯",
        "0": "০"
    }, Mg = {
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "০": "0"
    };
    a.defineLocale("bn", {
        months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
        longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর"
        },
        preparse: function(a) {
            return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function(a) {
                return Mg[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Lg[a];
            });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "রাত" === b && a >= 4 || "দুপুর" === b && a < 5 || "বিকাল" === b ? a + 12 : a;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "রাত" : a < 10 ? "সকাল" : a < 17 ? "দুপুর" : a < 20 ? "বিকাল" : "রাত";
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var Ng = {
        "1": "༡",
        "2": "༢",
        "3": "༣",
        "4": "༤",
        "5": "༥",
        "6": "༦",
        "7": "༧",
        "8": "༨",
        "9": "༩",
        "0": "༠"
    }, Og = {
        "༡": "1",
        "༢": "2",
        "༣": "3",
        "༤": "4",
        "༥": "5",
        "༦": "6",
        "༧": "7",
        "༨": "8",
        "༩": "9",
        "༠": "0"
    };
    a.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ"
        },
        preparse: function(a) {
            return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(a) {
                return Og[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Ng[a];
            });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "མཚན་མོ" === b && a >= 4 || "ཉིན་གུང" === b && a < 5 || "དགོང་དག" === b ? a + 12 : a;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "མཚན་མོ" : a < 10 ? "ཞོགས་ཀས" : a < 17 ? "ཉིན་གུང" : a < 20 ? "དགོང་དག" : "མཚན་མོ";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondennoù",
            m: "ur vunutenn",
            mm: ud,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: ud,
            M: "ur miz",
            MM: ud,
            y: "ur bloaz",
            yy: vd
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function(a) {
            return a + (1 === a ? "añ" : "vet");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";

                  case 3:
                    return "[u] [srijedu] [u] LT";

                  case 6:
                    return "[u] [subotu] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return "[prošlu] dddd [u] LT";

                  case 6:
                    return "[prošle] [subote] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: zd,
            mm: zd,
            h: zd,
            hh: zd,
            d: "dan",
            dd: zd,
            M: "mjesec",
            MM: zd,
            y: "godinu",
            yy: zd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("ca", {
        months: {
            standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "[el] D MMMM [de] YYYY",
            ll: "D MMM YYYY",
            LLL: "[el] D MMMM [de] YYYY [a les] H:mm",
            lll: "D MMM YYYY, H:mm",
            LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm",
            llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextDay: function() {
                return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastDay: function() {
                return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "uns segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function(a, b) {
            var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è";
            return "w" !== b && "W" !== b || (c = "a"), a + c;
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Pg = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), Qg = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
    a.defineLocale("cs", {
        months: Pg,
        monthsShort: Qg,
        monthsParse: function(a, b) {
            var c, d = [];
            for (c = 0; c < 12; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
            return d;
        }(Pg, Qg),
        shortMonthsParse: function(a) {
            var b, c = [];
            for (b = 0; b < 12; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
            return c;
        }(Qg),
        longMonthsParse: function(a) {
            var b, c = [];
            for (b = 0; b < 12; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
            return c;
        }(Pg),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY"
        },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[v neděli v] LT";

                  case 1:
                  case 2:
                    return "[v] dddd [v] LT";

                  case 3:
                    return "[ve středu v] LT";

                  case 4:
                    return "[ve čtvrtek v] LT";

                  case 5:
                    return "[v pátek v] LT";

                  case 6:
                    return "[v sobotu v] LT";
                }
            },
            lastDay: "[včera v] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[minulou neděli v] LT";

                  case 1:
                  case 2:
                    return "[minulé] dddd [v] LT";

                  case 3:
                    return "[minulou středu v] LT";

                  case 4:
                  case 5:
                    return "[minulý] dddd [v] LT";

                  case 6:
                    return "[minulou sobotu v] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "před %s",
            s: Bd,
            m: Bd,
            mm: Bd,
            h: Bd,
            hh: Bd,
            d: Bd,
            dd: Bd,
            M: Bd,
            MM: Bd,
            y: Bd,
            yy: Bd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return a + (/сехет$/i.exec(a) ? "рен" : /ҫул$/i.exec(a) ? "тан" : "ран");
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function(a) {
            var b = a, c = "", d = [ "", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed" ];
            return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), 
            a + c;
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "på dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[i] dddd[s kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: Cd,
            mm: "%d Minuten",
            h: Cd,
            hh: "%d Stunden",
            d: Cd,
            dd: Cd,
            M: Cd,
            MM: Cd,
            y: Cd,
            yy: Cd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("de-ch", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH.mm",
            LLLL: "dddd, D. MMMM YYYY HH.mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: Dd,
            mm: "%d Minuten",
            h: Dd,
            hh: "%d Stunden",
            d: Dd,
            dd: Dd,
            M: Dd,
            MM: Dd,
            y: Dd,
            yy: Dd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: Ed,
            mm: "%d Minuten",
            h: Ed,
            hh: "%d Stunden",
            d: Ed,
            dd: Ed,
            M: Ed,
            MM: Ed,
            y: Ed,
            yy: Ed
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Rg = [ "ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު" ], Sg = [ "އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު" ];
    a.defineLocale("dv", {
        months: Rg,
        monthsShort: Rg,
        weekdays: Sg,
        weekdaysShort: Sg,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function(a) {
            return "މފ" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "މކ" : "މފ";
        },
        calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d"
        },
        preparse: function(a) {
            return a.replace(/،/g, ",");
        },
        postformat: function(a) {
            return a.replace(/,/g, "،");
        },
        week: {
            dow: 7,
            doy: 12
        }
    }), a.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function(a, b) {
            return a ? /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] : this._monthsNominativeEl;
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ";
        },
        isPM: function(a) {
            return "μ" === (a + "").toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 6:
                    return "[το προηγούμενο] dddd [{}] LT";

                  default:
                    return "[την προηγούμενη] dddd [{}] LT";
                }
            },
            sameElse: "L"
        },
        calendar: function(a, b) {
            var c = this._calendarEl[a], d = b && b.hours();
            return z(c) && (c = c.apply(b)), c.replace("{}", d % 12 == 1 ? "στη" : "στις");
        },
        relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια"
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th");
        }
    }), a.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-a de] MMMM, YYYY",
            LLL: "D[-a de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function(a) {
            return "p" === a.charAt(0).toLowerCase();
        },
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M.";
        },
        calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "post %s",
            past: "antaŭ %s",
            s: "sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Tg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), Ug = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    a.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(a, b) {
            return a ? /-MMM-/.test(b) ? Ug[a.month()] : Tg[a.month()] : Tg;
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function() {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Vg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), Wg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    a.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(a, b) {
            return a ? /-MMM-/.test(b) ? Wg[a.month()] : Vg[a.month()] : Vg;
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextDay: function() {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: Fd,
            m: Fd,
            mm: Fd,
            h: Fd,
            hh: Fd,
            d: Fd,
            dd: "%d päeva",
            M: Fd,
            MM: Fd,
            y: Fd,
            yy: Fd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: !0,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Xg = {
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
        "0": "۰"
    }, Yg = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0"
    };
    a.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function(a) {
            return /بعد از ظهر/.test(a);
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "قبل از ظهر" : "بعد از ظهر";
        },
        calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چند ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال"
        },
        preparse: function(a) {
            return a.replace(/[۰-۹]/g, function(a) {
                return Yg[a];
            }).replace(/،/g, ",");
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Xg[a];
            }).replace(/,/g, "،");
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {
            dow: 6,
            doy: 12
        }
    });
    var Zg = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "), $g = [ "nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Zg[7], Zg[8], Zg[9] ];
    a.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: Gd,
            m: Gd,
            mm: Gd,
            h: Gd,
            hh: Gd,
            d: Gd,
            dd: Gd,
            M: Gd,
            MM: Gd,
            y: Gd,
            yy: Gd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            m: "ein minutt",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaði",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(a, b) {
            switch (b) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return a + (1 === a ? "er" : "e");

              case "w":
              case "W":
                return a + (1 === a ? "re" : "e");
            }
        }
    }), a.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(a, b) {
            switch (b) {
              default:
              case "M":
              case "Q":
              case "D":
              case "DDD":
              case "d":
                return a + (1 === a ? "er" : "e");

              case "w":
              case "W":
                return a + (1 === a ? "re" : "e");
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd’hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(a, b) {
            switch (b) {
              case "D":
                return a + (1 === a ? "er" : "");

              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
                return a + (1 === a ? "er" : "e");

              case "w":
              case "W":
                return a + (1 === a ? "re" : "e");
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var _g = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), ah = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    a.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function(a, b) {
            return a ? /-MMM-/.test(b) ? ah[a.month()] : _g[a.month()] : _g;
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(a) {
            return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var bh = [ "Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd" ], ch = [ "Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh" ], dh = [ "Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne" ], eh = [ "Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis" ], fh = [ "Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa" ];
    a.defineLocale("gd", {
        months: bh,
        monthsShort: ch,
        monthsParseExact: !0,
        weekdays: dh,
        weekdaysShort: eh,
        weekdaysMin: fh,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(a) {
            return a + (1 === a ? "d" : a % 10 == 2 ? "na" : "mh");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextDay: function() {
                return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
            },
            nextWeek: function() {
                return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
            },
            lastDay: function() {
                return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
            },
            lastWeek: function() {
                return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return 0 === a.indexOf("un") ? "n" + a : "en " + a;
            },
            past: "hai %s",
            s: "uns segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("gom-latn", {
        months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "A h:mm [vazta]",
            LTS: "A h:mm:ss [vazta]",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY A h:mm [vazta]",
            LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
            llll: "ddd, D MMM YYYY, A h:mm [vazta]"
        },
        calendar: {
            sameDay: "[Aiz] LT",
            nextDay: "[Faleam] LT",
            nextWeek: "[Ieta to] dddd[,] LT",
            lastDay: "[Kal] LT",
            lastWeek: "[Fatlo] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s",
            past: "%s adim",
            s: Id,
            m: Id,
            mm: Id,
            h: Id,
            hh: Id,
            d: Id,
            dd: Id,
            M: Id,
            MM: Id,
            y: Id,
            yy: Id
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function(a, b) {
            switch (b) {
              case "D":
                return a + "er";

              default:
              case "M":
              case "Q":
              case "DDD":
              case "d":
              case "w":
              case "W":
                return a;
            }
        },
        week: {
            dow: 1,
            doy: 4
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "rati" === b ? a < 4 ? a : a + 12 : "sokalli" === b ? a : "donparam" === b ? a > 12 ? a : a + 12 : "sanje" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "rati" : a < 12 ? "sokalli" : a < 16 ? "donparam" : a < 20 ? "sanje" : "rati";
        }
    }), a.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function(a) {
                return 2 === a ? "שעתיים" : a + " שעות";
            },
            d: "יום",
            dd: function(a) {
                return 2 === a ? "יומיים" : a + " ימים";
            },
            M: "חודש",
            MM: function(a) {
                return 2 === a ? "חודשיים" : a + " חודשים";
            },
            y: "שנה",
            yy: function(a) {
                return 2 === a ? "שנתיים" : a % 10 == 0 && 10 !== a ? a + " שנה" : a + " שנים";
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function(a) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(a);
        },
        meridiem: function(a, b, c) {
            return a < 5 ? "לפנות בוקר" : a < 10 ? "בבוקר" : a < 12 ? c ? 'לפנה"צ' : "לפני הצהריים" : a < 18 ? c ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
        }
    });
    var gh = {
        "1": "१",
        "2": "२",
        "3": "३",
        "4": "४",
        "5": "५",
        "6": "६",
        "7": "७",
        "8": "८",
        "9": "९",
        "0": "०"
    }, hh = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    };
    a.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष"
        },
        preparse: function(a) {
            return a.replace(/[१२३४५६७८९०]/g, function(a) {
                return hh[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return gh[a];
            });
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "रात" === b ? a < 4 ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "रात" : a < 10 ? "सुबह" : a < 17 ? "दोपहर" : a < 20 ? "शाम" : "रात";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.defineLocale("hr", {
        months: {
            format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
            standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";

                  case 3:
                    return "[u] [srijedu] [u] LT";

                  case 6:
                    return "[u] [subotu] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return "[prošlu] dddd [u] LT";

                  case 6:
                    return "[prošle] [subote] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: Jd,
            mm: Jd,
            h: Jd,
            hh: Jd,
            d: "dan",
            dd: Jd,
            M: "mjesec",
            MM: Jd,
            y: "godinu",
            yy: Jd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var ih = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
    a.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function(a) {
            return "u" === a.charAt(1).toLowerCase();
        },
        meridiem: function(a, b, c) {
            return a < 12 ? !0 === c ? "de" : "DE" : !0 === c ? "du" : "DU";
        },
        calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
                return Ld.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
                return Ld.call(this, !1);
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: Kd,
            m: Kd,
            mm: Kd,
            h: Kd,
            hh: Kd,
            d: Kd,
            dd: Kd,
            M: Kd,
            MM: Kd,
            y: Kd,
            yy: Kd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("hy-am", {
        months: {
            format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
            standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
            sameDay: "[այսօր] LT",
            nextDay: "[վաղը] LT",
            lastDay: "[երեկ] LT",
            nextWeek: function() {
                return "dddd [օրը ժամը] LT";
            },
            lastWeek: function() {
                return "[անցած] dddd [օրը ժամը] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function(a) {
            return /^(ցերեկվա|երեկոյան)$/.test(a);
        },
        meridiem: function(a) {
            return a < 4 ? "գիշերվա" : a < 12 ? "առավոտվա" : a < 17 ? "ցերեկվա" : "երեկոյան";
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function(a, b) {
            switch (b) {
              case "DDD":
              case "w":
              case "W":
              case "DDDo":
                return 1 === a ? a + "-ին" : a + "-րդ";

              default:
                return a;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 11 ? "pagi" : a < 15 ? "siang" : a < 19 ? "sore" : "malam";
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: Nd,
            m: Nd,
            mm: Nd,
            h: "klukkustund",
            hh: Nd,
            d: Nd,
            dd: Nd,
            M: Nd,
            MM: Nd,
            y: Nd,
            yy: Nd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[la scorsa] dddd [alle] LT";

                  default:
                    return "[lo scorso] dddd [alle] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a;
            },
            past: "%s fa",
            s: "alcuni secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("ja", {
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日 HH:mm",
            LLLL: "YYYY年M月D日 HH:mm dddd",
            l: "YYYY/MM/DD",
            ll: "YYYY年M月D日",
            lll: "YYYY年M月D日 HH:mm",
            llll: "YYYY年M月D日 HH:mm dddd"
        },
        meridiemParse: /午前|午後/i,
        isPM: function(a) {
            return "午後" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "午前" : "午後";
        },
        calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: "[来週]dddd LT",
            lastDay: "[昨日] LT",
            lastWeek: "[前週]dddd LT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function(a, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return a + "日";

              default:
                return a;
            }
        },
        relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
        }
    }), a.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 11 ? "enjing" : a < 15 ? "siyang" : a < 19 ? "sonten" : "ndalu";
        },
        calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("ka", {
        months: {
            standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
            format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
            standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
            format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L"
        },
        relativeTime: {
            future: function(a) {
                return /(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში";
            },
            past: function(a) {
                return /(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის უკან") : void 0;
            },
            s: "რამდენიმე წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი"
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function(a) {
            return 0 === a ? a : 1 === a ? a + "-ლი" : a < 20 || a <= 100 && a % 20 == 0 || a % 100 == 0 ? "მე-" + a : a + "-ე";
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var jh = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
    };
    a.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
        weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function(a) {
            var b = a % 10, c = a >= 100 ? 100 : null;
            return a + (jh[a] || jh[b] || jh[c]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
            nextDay: "[ស្អែក ម៉ោង] LT",
            nextWeek: "dddd [ម៉ោង] LT",
            lastDay: "[ម្សិលមិញ ម៉ោង] LT",
            lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sទៀត",
            past: "%sមុន",
            s: "ប៉ុន្មានវិនាទី",
            m: "មួយនាទី",
            mm: "%d នាទី",
            h: "មួយម៉ោង",
            hh: "%d ម៉ោង",
            d: "មួយថ្ងៃ",
            dd: "%d ថ្ងៃ",
            M: "មួយខែ",
            MM: "%d ខែ",
            y: "មួយឆ្នាំ",
            yy: "%d ឆ្នាំ"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var kh = {
        "1": "೧",
        "2": "೨",
        "3": "೩",
        "4": "೪",
        "5": "೫",
        "6": "೬",
        "7": "೭",
        "8": "೮",
        "9": "೯",
        "0": "೦"
    }, lh = {
        "೧": "1",
        "೨": "2",
        "೩": "3",
        "೪": "4",
        "೫": "5",
        "೬": "6",
        "೭": "7",
        "೮": "8",
        "೯": "9",
        "೦": "0"
    };
    a.defineLocale("kn", {
        months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
        monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
        monthsParseExact: !0,
        weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
        weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
        weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[ಇಂದು] LT",
            nextDay: "[ನಾಳೆ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ನಿನ್ನೆ] LT",
            lastWeek: "[ಕೊನೆಯ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ನಂತರ",
            past: "%s ಹಿಂದೆ",
            s: "ಕೆಲವು ಕ್ಷಣಗಳು",
            m: "ಒಂದು ನಿಮಿಷ",
            mm: "%d ನಿಮಿಷ",
            h: "ಒಂದು ಗಂಟೆ",
            hh: "%d ಗಂಟೆ",
            d: "ಒಂದು ದಿನ",
            dd: "%d ದಿನ",
            M: "ಒಂದು ತಿಂಗಳು",
            MM: "%d ತಿಂಗಳು",
            y: "ಒಂದು ವರ್ಷ",
            yy: "%d ವರ್ಷ"
        },
        preparse: function(a) {
            return a.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(a) {
                return lh[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return kh[a];
            });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "ರಾತ್ರಿ" === b ? a < 4 ? a : a + 12 : "ಬೆಳಿಗ್ಗೆ" === b ? a : "ಮಧ್ಯಾಹ್ನ" === b ? a >= 10 ? a : a + 12 : "ಸಂಜೆ" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "ರಾತ್ರಿ" : a < 10 ? "ಬೆಳಿಗ್ಗೆ" : a < 17 ? "ಮಧ್ಯಾಹ್ನ" : a < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function(a) {
            return a + "ನೇ";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "YYYY.MM.DD",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h:mm",
            LLLL: "YYYY년 MMMM D일 dddd A h:mm",
            l: "YYYY.MM.DD",
            ll: "YYYY년 MMMM D일",
            lll: "YYYY년 MMMM D일 A h:mm",
            llll: "YYYY년 MMMM D일 dddd A h:mm"
        },
        calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            ss: "%d초",
            m: "1분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년"
        },
        dayOfMonthOrdinalParse: /\d{1,2}일/,
        ordinal: "%d일",
        meridiemParse: /오전|오후/,
        isPM: function(a) {
            return "오후" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "오전" : "오후";
        }
    });
    var mh = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү"
    };
    a.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгүн саат] LT",
            nextDay: "[Эртең саат] LT",
            nextWeek: "dddd [саат] LT",
            lastDay: "[Кече саат] LT",
            lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ичинде",
            past: "%s мурун",
            s: "бирнече секунд",
            m: "бир мүнөт",
            mm: "%d мүнөт",
            h: "бир саат",
            hh: "%d саат",
            d: "бир күн",
            dd: "%d күн",
            M: "бир ай",
            MM: "%d ай",
            y: "бир жыл",
            yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function(a) {
            var b = a % 10, c = a >= 100 ? 100 : null;
            return a + (mh[a] || mh[b] || mh[c]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 2:
                  case 4:
                    return "[Leschten] dddd [um] LT";

                  default:
                    return "[Leschte] dddd [um] LT";
                }
            }
        },
        relativeTime: {
            future: Pd,
            past: Qd,
            s: "e puer Sekonnen",
            m: Od,
            mm: "%d Minutten",
            h: Od,
            hh: "%d Stonnen",
            d: Od,
            dd: "%d Deeg",
            M: Od,
            MM: "%d Méint",
            y: Od,
            yy: "%d Joer"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function(a) {
            return "ຕອນແລງ" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
        },
        calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ"
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function(a) {
            return "ທີ່" + a;
        }
    });
    var nh = {
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
    };
    a.defineLocale("lt", {
        months: {
            format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
            format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
            standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: Sd,
            m: Td,
            mm: Wd,
            h: Td,
            hh: Wd,
            d: Td,
            dd: Wd,
            M: Td,
            MM: Wd,
            y: Td,
            yy: Wd
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function(a) {
            return a + "-oji";
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var oh = {
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
    };
    a.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: $d,
            m: Zd,
            mm: Yd,
            h: Zd,
            hh: Yd,
            d: Zd,
            dd: Yd,
            M: Zd,
            MM: Yd,
            y: Zd,
            yy: Yd
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ph = {
        words: {
            m: [ "jedan minut", "jednog minuta" ],
            mm: [ "minut", "minuta", "minuta" ],
            h: [ "jedan sat", "jednog sata" ],
            hh: [ "sat", "sata", "sati" ],
            dd: [ "dan", "dana", "dana" ],
            MM: [ "mjesec", "mjeseca", "mjeseci" ],
            yy: [ "godina", "godine", "godina" ]
        },
        correctGrammaticalCase: function(a, b) {
            return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
        },
        translate: function(a, b, c) {
            var d = ph.words[c];
            return 1 === c.length ? b ? d[0] : d[1] : a + " " + ph.correctGrammaticalCase(a, d);
        }
    };
    a.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";

                  case 3:
                    return "[u] [srijedu] [u] LT";

                  case 6:
                    return "[u] [subotu] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
                return [ "[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT" ][this.day()];
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            m: ph.translate,
            mm: ph.translate,
            h: ph.translate,
            hh: ph.translate,
            d: "dan",
            dd: ph.translate,
            M: "mjesec",
            MM: ph.translate,
            y: "godinu",
            yy: ph.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te hēkona ruarua",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[Изминатата] dddd [во] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[Изминатиот] dddd [во] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "после %s",
            past: "пред %s",
            s: "неколку секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            M: "месец",
            MM: "%d месеци",
            y: "година",
            yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(a) {
            var b = a % 10, c = a % 100;
            return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти";
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        monthsParseExact: !0,
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "രാത്രി" === b && a >= 4 || "ഉച്ച കഴിഞ്ഞ്" === b || "വൈകുന്നേരം" === b ? a + 12 : a;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "രാത്രി" : a < 12 ? "രാവിലെ" : a < 17 ? "ഉച്ച കഴിഞ്ഞ്" : a < 20 ? "വൈകുന്നേരം" : "രാത്രി";
        }
    });
    var qh = {
        "1": "१",
        "2": "२",
        "3": "३",
        "4": "४",
        "5": "५",
        "6": "६",
        "7": "७",
        "8": "८",
        "9": "९",
        "0": "०"
    }, rh = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    };
    a.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: _d,
            m: _d,
            mm: _d,
            h: _d,
            hh: _d,
            d: _d,
            dd: _d,
            M: _d,
            MM: _d,
            y: _d,
            yy: _d
        },
        preparse: function(a) {
            return a.replace(/[१२३४५६७८९०]/g, function(a) {
                return rh[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return qh[a];
            });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "रात्री" === b ? a < 4 ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "रात्री" : a < 10 ? "सकाळी" : a < 17 ? "दुपारी" : a < 20 ? "सायंकाळी" : "रात्री";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam";
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam";
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var sh = {
        "1": "၁",
        "2": "၂",
        "3": "၃",
        "4": "၄",
        "5": "၅",
        "6": "၆",
        "7": "၇",
        "8": "၈",
        "9": "၉",
        "0": "၀"
    }, th = {
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        "၀": "0"
    };
    a.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L"
        },
        relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်"
        },
        preparse: function(a) {
            return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(a) {
                return th[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return sh[a];
            });
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var uh = {
        "1": "१",
        "2": "२",
        "3": "३",
        "4": "४",
        "5": "५",
        "6": "६",
        "7": "७",
        "8": "८",
        "9": "९",
        "0": "०"
    }, vh = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    };
    a.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        monthsParseExact: !0,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function(a) {
            return a.replace(/[१२३४५६७८९०]/g, function(a) {
                return vh[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return uh[a];
            });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "राति" === b ? a < 4 ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "साँझ" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 3 ? "राति" : a < 12 ? "बिहान" : a < 16 ? "दिउँसो" : a < 20 ? "साँझ" : "राति";
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var wh = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), xh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), yh = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ], zh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    a.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(a, b) {
            return a ? /-MMM-/.test(b) ? xh[a.month()] : wh[a.month()] : wh;
        },
        monthsRegex: zh,
        monthsShortRegex: zh,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: yh,
        longMonthsParse: yh,
        shortMonthsParse: yh,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(a) {
            return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ah = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), Bh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), Ch = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ], Dh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    a.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(a, b) {
            return a ? /-MMM-/.test(b) ? Bh[a.month()] : Ah[a.month()] : Ah;
        },
        monthsRegex: Dh,
        monthsShortRegex: Dh,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: Ch,
        longMonthsParse: Ch,
        shortMonthsParse: Ch,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(a) {
            return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Eh = {
        "1": "੧",
        "2": "੨",
        "3": "੩",
        "4": "੪",
        "5": "੫",
        "6": "੬",
        "7": "੭",
        "8": "੮",
        "9": "੯",
        "0": "੦"
    }, Fh = {
        "੧": "1",
        "੨": "2",
        "੩": "3",
        "੪": "4",
        "੫": "5",
        "੬": "6",
        "੭": "7",
        "੮": "8",
        "੯": "9",
        "੦": "0"
    };
    a.defineLocale("pa-in", {
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
            LT: "A h:mm ਵਜੇ",
            LTS: "A h:mm:ss ਵਜੇ",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
            LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
        },
        calendar: {
            sameDay: "[ਅਜ] LT",
            nextDay: "[ਕਲ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ਕਲ] LT",
            lastWeek: "[ਪਿਛਲੇ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ਵਿੱਚ",
            past: "%s ਪਿਛਲੇ",
            s: "ਕੁਝ ਸਕਿੰਟ",
            m: "ਇਕ ਮਿੰਟ",
            mm: "%d ਮਿੰਟ",
            h: "ਇੱਕ ਘੰਟਾ",
            hh: "%d ਘੰਟੇ",
            d: "ਇੱਕ ਦਿਨ",
            dd: "%d ਦਿਨ",
            M: "ਇੱਕ ਮਹੀਨਾ",
            MM: "%d ਮਹੀਨੇ",
            y: "ਇੱਕ ਸਾਲ",
            yy: "%d ਸਾਲ"
        },
        preparse: function(a) {
            return a.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(a) {
                return Fh[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Eh[a];
            });
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "ਰਾਤ" === b ? a < 4 ? a : a + 12 : "ਸਵੇਰ" === b ? a : "ਦੁਪਹਿਰ" === b ? a >= 10 ? a : a + 12 : "ਸ਼ਾਮ" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "ਰਾਤ" : a < 10 ? "ਸਵੇਰ" : a < 17 ? "ਦੁਪਹਿਰ" : a < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var Gh = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), Hh = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
    a.defineLocale("pl", {
        months: function(a, b) {
            return a ? "" === b ? "(" + Hh[a.month()] + "|" + Gh[a.month()] + ")" : /D MMMM/.test(b) ? Hh[a.month()] : Gh[a.month()] : Gh;
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: "[W] dddd [o] LT",
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[W zeszłą niedzielę o] LT";

                  case 3:
                    return "[W zeszłą środę o] LT";

                  case 6:
                    return "[W zeszłą sobotę o] LT";

                  default:
                    return "[W zeszły] dddd [o] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: be,
            mm: be,
            h: be,
            hh: be,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: be,
            y: "rok",
            yy: be
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "%s atrás",
            s: "poucos segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº"
    }), a.defineLocale("pt", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            m: "un minut",
            mm: ce,
            h: "o oră",
            hh: ce,
            d: "o zi",
            dd: ce,
            M: "o lună",
            MM: ce,
            y: "un an",
            yy: ce
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Ih = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
    a.defineLocale("ru", {
        months: {
            format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
            standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
            format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
            standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
            standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: Ih,
        longMonthsParse: Ih,
        shortMonthsParse: Ih,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сегодня в] LT",
            nextDay: "[Завтра в] LT",
            lastDay: "[Вчера в] LT",
            nextWeek: function(a) {
                if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В следующее] dddd [в] LT";

                  case 1:
                  case 2:
                  case 4:
                    return "[В следующий] dddd [в] LT";

                  case 3:
                  case 5:
                  case 6:
                    return "[В следующую] dddd [в] LT";
                }
            },
            lastWeek: function(a) {
                if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В прошлое] dddd [в] LT";

                  case 1:
                  case 2:
                  case 4:
                    return "[В прошлый] dddd [в] LT";

                  case 3:
                  case 5:
                  case 6:
                    return "[В прошлую] dddd [в] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: ee,
            mm: ee,
            h: "час",
            hh: ee,
            d: "день",
            dd: ee,
            M: "месяц",
            MM: ee,
            y: "год",
            yy: ee
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function(a) {
            return /^(дня|вечера)$/.test(a);
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "ночи" : a < 12 ? "утра" : a < 17 ? "дня" : "вечера";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function(a, b) {
            switch (b) {
              case "M":
              case "d":
              case "DDD":
                return a + "-й";

              case "D":
                return a + "-го";

              case "w":
              case "W":
                return a + "-я";

              default:
                return a;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Jh = [ "جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر" ], Kh = [ "آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر" ];
    a.defineLocale("sd", {
        months: Jh,
        monthsShort: Jh,
        weekdays: Kh,
        weekdaysShort: Kh,
        weekdaysMin: Kh,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function(a) {
            return "شام" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "صبح" : "شام";
        },
        calendar: {
            sameDay: "[اڄ] LT",
            nextDay: "[سڀاڻي] LT",
            nextWeek: "dddd [اڳين هفتي تي] LT",
            lastDay: "[ڪالهه] LT",
            lastWeek: "[گزريل هفتي] dddd [تي] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s پوء",
            past: "%s اڳ",
            s: "چند سيڪنڊ",
            m: "هڪ منٽ",
            mm: "%d منٽ",
            h: "هڪ ڪلاڪ",
            hh: "%d ڪلاڪ",
            d: "هڪ ڏينهن",
            dd: "%d ڏينهن",
            M: "هڪ مهينو",
            MM: "%d مهينا",
            y: "هڪ سال",
            yy: "%d سال"
        },
        preparse: function(a) {
            return a.replace(/،/g, ",");
        },
        postformat: function(a) {
            return a.replace(/,/g, "،");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function(a) {
            return a + " වැනි";
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function(a) {
            return "ප.ව." === a || "පස් වරු" === a;
        },
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "ප.ව." : "පස් වරු" : c ? "පෙ.ව." : "පෙර වරු";
        }
    });
    var Lh = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), Mh = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
    a.defineLocale("sk", {
        months: Lh,
        monthsShort: Mh,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[v nedeľu o] LT";

                  case 1:
                  case 2:
                    return "[v] dddd [o] LT";

                  case 3:
                    return "[v stredu o] LT";

                  case 4:
                    return "[vo štvrtok o] LT";

                  case 5:
                    return "[v piatok o] LT";

                  case 6:
                    return "[v sobotu o] LT";
                }
            },
            lastDay: "[včera o] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[minulú nedeľu o] LT";

                  case 1:
                  case 2:
                    return "[minulý] dddd [o] LT";

                  case 3:
                    return "[minulú stredu o] LT";

                  case 4:
                  case 5:
                    return "[minulý] dddd [o] LT";

                  case 6:
                    return "[minulú sobotu o] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: ge,
            m: ge,
            mm: ge,
            h: ge,
            hh: ge,
            d: ge,
            dd: ge,
            M: ge,
            MM: ge,
            y: ge,
            yy: ge
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[v] [nedeljo] [ob] LT";

                  case 3:
                    return "[v] [sredo] [ob] LT";

                  case 6:
                    return "[v] [soboto] [ob] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[v] dddd [ob] LT";
                }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[prejšnjo] [nedeljo] [ob] LT";

                  case 3:
                    return "[prejšnjo] [sredo] [ob] LT";

                  case 6:
                    return "[prejšnjo] [soboto] [ob] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prejšnji] dddd [ob] LT";
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: he,
            m: he,
            mm: he,
            h: he,
            hh: he,
            d: he,
            dd: he,
            M: he,
            MM: he,
            y: he,
            yy: he
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function(a) {
            return "M" === a.charAt(0);
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "PD" : "MD";
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Nh = {
        words: {
            m: [ "један минут", "једне минуте" ],
            mm: [ "минут", "минуте", "минута" ],
            h: [ "један сат", "једног сата" ],
            hh: [ "сат", "сата", "сати" ],
            dd: [ "дан", "дана", "дана" ],
            MM: [ "месец", "месеца", "месеци" ],
            yy: [ "година", "године", "година" ]
        },
        correctGrammaticalCase: function(a, b) {
            return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
        },
        translate: function(a, b, c) {
            var d = Nh.words[c];
            return 1 === c.length ? b ? d[0] : d[1] : a + " " + Nh.correctGrammaticalCase(a, d);
        }
    };
    a.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
        monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: !0,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[данас у] LT",
            nextDay: "[сутра у] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[у] [недељу] [у] LT";

                  case 3:
                    return "[у] [среду] [у] LT";

                  case 6:
                    return "[у] [суботу] [у] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[у] dddd [у] LT";
                }
            },
            lastDay: "[јуче у] LT",
            lastWeek: function() {
                return [ "[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT" ][this.day()];
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            m: Nh.translate,
            mm: Nh.translate,
            h: Nh.translate,
            hh: Nh.translate,
            d: "дан",
            dd: Nh.translate,
            M: "месец",
            MM: Nh.translate,
            y: "годину",
            yy: Nh.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Oh = {
        words: {
            m: [ "jedan minut", "jedne minute" ],
            mm: [ "minut", "minute", "minuta" ],
            h: [ "jedan sat", "jednog sata" ],
            hh: [ "sat", "sata", "sati" ],
            dd: [ "dan", "dana", "dana" ],
            MM: [ "mesec", "meseca", "meseci" ],
            yy: [ "godina", "godine", "godina" ]
        },
        correctGrammaticalCase: function(a, b) {
            return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
        },
        translate: function(a, b, c) {
            var d = Oh.words[c];
            return 1 === c.length ? b ? d[0] : d[1] : a + " " + Oh.correctGrammaticalCase(a, d);
        }
    };
    a.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedelju] [u] LT";

                  case 3:
                    return "[u] [sredu] [u] LT";

                  case 6:
                    return "[u] [subotu] [u] LT";

                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
                return [ "[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT" ][this.day()];
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            m: Oh.translate,
            mm: Oh.translate,
            h: Oh.translate,
            hh: Oh.translate,
            d: "dan",
            dd: Oh.translate,
            M: "mesec",
            MM: Oh.translate,
            y: "godinu",
            yy: Oh.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function(a, b, c) {
            return a < 11 ? "ekuseni" : a < 15 ? "emini" : a < 19 ? "entsambama" : "ebusuku";
        },
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "ekuseni" === b ? a : "emini" === b ? a >= 11 ? a : a + 12 : "entsambama" === b || "ebusuku" === b ? 0 === a ? 0 : a + 12 : void 0;
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "masiku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Ph = {
        "1": "௧",
        "2": "௨",
        "3": "௩",
        "4": "௪",
        "5": "௫",
        "6": "௬",
        "7": "௭",
        "8": "௮",
        "9": "௯",
        "0": "௦"
    }, Qh = {
        "௧": "1",
        "௨": "2",
        "௩": "3",
        "௪": "4",
        "௫": "5",
        "௬": "6",
        "௭": "7",
        "௮": "8",
        "௯": "9",
        "௦": "0"
    };
    a.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்"
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function(a) {
            return a + "வது";
        },
        preparse: function(a) {
            return a.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(a) {
                return Qh[a];
            });
        },
        postformat: function(a) {
            return a.replace(/\d/g, function(a) {
                return Ph[a];
            });
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function(a, b, c) {
            return a < 2 ? " யாமம்" : a < 6 ? " வைகறை" : a < 10 ? " காலை" : a < 14 ? " நண்பகல்" : a < 18 ? " எற்பாடு" : a < 22 ? " மாலை" : " யாமம்";
        },
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "யாமம்" === b ? a < 2 ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12;
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        monthsParseExact: !0,
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు"
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "రాత్రి" === b ? a < 4 ? a : a + 12 : "ఉదయం" === b ? a : "మధ్యాహ్నం" === b ? a >= 10 ? a : a + 12 : "సాయంత్రం" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "రాత్రి" : a < 10 ? "ఉదయం" : a < 17 ? "మధ్యాహ్నం" : a < 20 ? "సాయంత్రం" : "రాత్రి";
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), a.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "minutu balun",
            m: "minutu ida",
            mm: "minutus %d",
            h: "horas ida",
            hh: "horas %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
        monthsParseExact: !0,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H:mm",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function(a) {
            return "หลังเที่ยง" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
        },
        calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี"
        }
    }), a.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L"
        },
        relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(a) {
            return a;
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Rh = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
    a.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L"
        },
        relativeTime: {
            future: ie,
            past: je,
            s: "puS lup",
            m: "wa’ tup",
            mm: ke,
            h: "wa’ rep",
            hh: ke,
            d: "wa’ jaj",
            dd: ke,
            M: "wa’ jar",
            MM: ke,
            y: "wa’ DIS",
            yy: ke
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Sh = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
    };
    a.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[haftaya] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen hafta] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl"
        },
        dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: function(a) {
            if (0 === a) return a + "'ıncı";
            var b = a % 10, c = a % 100 - b, d = a >= 100 ? 100 : null;
            return a + (Sh[b] || Sh[c] || Sh[d]);
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function(a) {
            return "d'o" === a.toLowerCase();
        },
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A";
        },
        calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: me,
            m: me,
            mm: me,
            h: me,
            hh: me,
            d: me,
            dd: me,
            M: me,
            MM: me,
            y: me,
            yy: me
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), a.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }), a.defineLocale("uk", {
        months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
            standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: pe,
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
            sameDay: qe("[Сьогодні "),
            nextDay: qe("[Завтра "),
            lastDay: qe("[Вчора "),
            nextWeek: qe("[У] dddd ["),
            lastWeek: function() {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return qe("[Минулої] dddd [").call(this);

                  case 1:
                  case 2:
                  case 4:
                    return qe("[Минулого] dddd [").call(this);
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            m: oe,
            mm: oe,
            h: "годину",
            hh: oe,
            d: "день",
            dd: oe,
            M: "місяць",
            MM: oe,
            y: "рік",
            yy: oe
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function(a) {
            return /^(дня|вечора)$/.test(a);
        },
        meridiem: function(a, b, c) {
            return a < 4 ? "ночі" : a < 12 ? "ранку" : a < 17 ? "дня" : "вечора";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function(a, b) {
            switch (b) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return a + "-й";

              case "D":
                return a + "-го";

              default:
                return a;
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Th = [ "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر" ], Uh = [ "اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ" ];
    return a.defineLocale("ur", {
        months: Th,
        monthsShort: Th,
        weekdays: Uh,
        weekdaysShort: Uh,
        weekdaysMin: Uh,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function(a) {
            return "شام" === a;
        },
        meridiem: function(a, b, c) {
            return a < 12 ? "صبح" : "شام";
        },
        calendar: {
            sameDay: "[آج بوقت] LT",
            nextDay: "[کل بوقت] LT",
            nextWeek: "dddd [بوقت] LT",
            lastDay: "[گذشتہ روز بوقت] LT",
            lastWeek: "[گذشتہ] dddd [بوقت] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s بعد",
            past: "%s قبل",
            s: "چند سیکنڈ",
            m: "ایک منٹ",
            mm: "%d منٹ",
            h: "ایک گھنٹہ",
            hh: "%d گھنٹے",
            d: "ایک دن",
            dd: "%d دن",
            M: "ایک ماہ",
            MM: "%d ماہ",
            y: "ایک سال",
            yy: "%d سال"
        },
        preparse: function(a) {
            return a.replace(/،/g, ",");
        },
        postformat: function(a) {
            return a.replace(/,/g, "،");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("uz-latn", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Bugun soat] LT [da]",
            nextDay: "[Ertaga] LT [da]",
            nextWeek: "dddd [kuni soat] LT [da]",
            lastDay: "[Kecha soat] LT [da]",
            lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Yaqin %s ichida",
            past: "Bir necha %s oldin",
            s: "soniya",
            m: "bir daqiqa",
            mm: "%d daqiqa",
            h: "bir soat",
            hh: "%d soat",
            d: "bir kun",
            dd: "%d kun",
            M: "bir oy",
            MM: "%d oy",
            y: "bir yil",
            yy: "%d yil"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }), a.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: !0,
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function(a) {
            return /^ch$/i.test(a);
        },
        meridiem: function(a, b, c) {
            return a < 12 ? c ? "sa" : "SA" : c ? "ch" : "CH";
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần rồi lúc] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(a) {
            return a;
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
        monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
        monthsParseExact: !0,
        weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[T~ódá~ý át] LT",
            nextDay: "[T~ómó~rró~w át] LT",
            nextWeek: "dddd [át] LT",
            lastDay: "[Ý~ést~érdá~ý át] LT",
            lastWeek: "[L~ást] dddd [át] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "í~ñ %s",
            past: "%s á~gó",
            s: "á ~féw ~sécó~ñds",
            m: "á ~míñ~úté",
            mm: "%d m~íñú~tés",
            h: "á~ñ hó~úr",
            hh: "%d h~óúrs",
            d: "á ~dáý",
            dd: "%d d~áýs",
            M: "á ~móñ~th",
            MM: "%d m~óñt~hs",
            y: "á ~ýéár",
            yy: "%d ý~éárs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
            var b = a % 10;
            return a + (1 == ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th");
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("yo", {
        months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Ònì ni] LT",
            nextDay: "[Ọ̀la ni] LT",
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: "[Àna ni] LT",
            lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ní %s",
            past: "%s kọjá",
            s: "ìsẹjú aayá die",
            m: "ìsẹjú kan",
            mm: "ìsẹjú %d",
            h: "wákati kan",
            hh: "wákati %d",
            d: "ọjọ́ kan",
            dd: "ọjọ́ %d",
            M: "osù kan",
            MM: "osù %d",
            y: "ọdún kan",
            yy: "ọdún %d"
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah点mm分",
            LLLL: "YYYY年MMMD日ddddAh点mm分",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日 HH:mm",
            llll: "YYYY年MMMD日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12;
        },
        meridiem: function(a, b, c) {
            var d = 100 * a + b;
            return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function(a, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return a + "日";

              case "M":
                return a + "月";

              case "w":
              case "W":
                return a + "周";

              default:
                return a;
            }
        },
        relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }), a.defineLocale("zh-hk", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日 HH:mm",
            LLLL: "YYYY年MMMD日dddd HH:mm",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日 HH:mm",
            llll: "YYYY年MMMD日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            var d = 100 * a + b;
            return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(a, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return a + "日";

              case "M":
                return a + "月";

              case "w":
              case "W":
                return a + "週";

              default:
                return a;
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
        }
    }), a.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日 HH:mm",
            LLLL: "YYYY年MMMD日dddd HH:mm",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日 HH:mm",
            llll: "YYYY年MMMD日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(a, b) {
            return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0;
        },
        meridiem: function(a, b, c) {
            var d = 100 * a + b;
            return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(a, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return a + "日";

              case "M":
                return a + "月";

              case "w":
              case "W":
                return a + "週";

              default:
                return a;
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
        }
    }), a.locale("en"), a;
}), function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.bootbox = b(a.jQuery);
}(this, function a(b, c) {
    "use strict";
    function d(a) {
        var b = q[o.locale];
        return b ? b[a] : q.en[a];
    }
    function e(a, c, d) {
        a.stopPropagation(), a.preventDefault(), b.isFunction(d) && !1 === d.call(c, a) || c.modal("hide");
    }
    function f(a) {
        var b, c = 0;
        for (b in a) c++;
        return c;
    }
    function g(a, c) {
        var d = 0;
        b.each(a, function(a, b) {
            c(a, b, d++);
        });
    }
    function h(a) {
        var c, d;
        if ("object" != typeof a) throw new Error("Please supply an object of options");
        if (!a.message) throw new Error("Please specify a message");
        return a = b.extend({}, o, a), a.buttons || (a.buttons = {}), c = a.buttons, d = f(c), 
        g(c, function(a, e, f) {
            if (b.isFunction(e) && (e = c[a] = {
                callback: e
            }), "object" !== b.type(e)) throw new Error("button with key " + a + " must be an object");
            e.label || (e.label = a), e.className || (e.className = 2 >= d && f === d - 1 ? "btn-primary" : "btn-default");
        }), a;
    }
    function i(a, b) {
        var c = a.length, d = {};
        if (1 > c || c > 2) throw new Error("Invalid argument length");
        return 2 === c || "string" == typeof a[0] ? (d[b[0]] = a[0], d[b[1]] = a[1]) : d = a[0], 
        d;
    }
    function j(a, c, d) {
        return b.extend(!0, {}, a, i(c, d));
    }
    function k(a, b, c, d) {
        return m(j({
            className: "bootbox-" + a,
            buttons: l.apply(null, b)
        }, d, c), b);
    }
    function l() {
        for (var a = {}, b = 0, c = arguments.length; c > b; b++) {
            var e = arguments[b], f = e.toLowerCase(), g = e.toUpperCase();
            a[f] = {
                label: d(g)
            };
        }
        return a;
    }
    function m(a, b) {
        var d = {};
        return g(b, function(a, b) {
            d[b] = !0;
        }), g(a.buttons, function(a) {
            if (d[a] === c) throw new Error("button key " + a + " is not allowed (options are " + b.join("\n") + ")");
        }), a;
    }
    var n = {
        dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
        header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
        footer: "<div class='modal-footer'></div>",
        closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
        form: "<form class='bootbox-form'></form>",
        inputs: {
            text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
            textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
            email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
            select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
            checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
            date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
            time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
            number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
            password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
        }
    }, o = {
        locale: "en",
        backdrop: "static",
        animate: !0,
        className: null,
        closeButton: !0,
        show: !0,
        container: "body"
    }, p = {};
    p.alert = function() {
        var a;
        if (a = k("alert", [ "ok" ], [ "message", "callback" ], arguments), a.callback && !b.isFunction(a.callback)) throw new Error("alert requires callback property to be a function when provided");
        return a.buttons.ok.callback = a.onEscape = function() {
            return !b.isFunction(a.callback) || a.callback.call(this);
        }, p.dialog(a);
    }, p.confirm = function() {
        var a;
        if (a = k("confirm", [ "cancel", "confirm" ], [ "message", "callback" ], arguments), 
        a.buttons.cancel.callback = a.onEscape = function() {
            return a.callback.call(this, !1);
        }, a.buttons.confirm.callback = function() {
            return a.callback.call(this, !0);
        }, !b.isFunction(a.callback)) throw new Error("confirm requires a callback");
        return p.dialog(a);
    }, p.prompt = function() {
        var a, d, e, f, h, i, k;
        if (f = b(n.form), d = {
            className: "bootbox-prompt",
            buttons: l("cancel", "confirm"),
            value: "",
            inputType: "text"
        }, a = m(j(d, arguments, [ "title", "callback" ]), [ "cancel", "confirm" ]), i = a.show === c || a.show, 
        a.message = f, a.buttons.cancel.callback = a.onEscape = function() {
            return a.callback.call(this, null);
        }, a.buttons.confirm.callback = function() {
            var c;
            switch (a.inputType) {
              case "text":
              case "textarea":
              case "email":
              case "select":
              case "date":
              case "time":
              case "number":
              case "password":
                c = h.val();
                break;

              case "checkbox":
                var d = h.find("input:checked");
                c = [], g(d, function(a, d) {
                    c.push(b(d).val());
                });
            }
            return a.callback.call(this, c);
        }, a.show = !1, !a.title) throw new Error("prompt requires a title");
        if (!b.isFunction(a.callback)) throw new Error("prompt requires a callback");
        if (!n.inputs[a.inputType]) throw new Error("invalid prompt type");
        switch (h = b(n.inputs[a.inputType]), a.inputType) {
          case "text":
          case "textarea":
          case "email":
          case "date":
          case "time":
          case "number":
          case "password":
            h.val(a.value);
            break;

          case "select":
            var o = {};
            if (k = a.inputOptions || [], !b.isArray(k)) throw new Error("Please pass an array of input options");
            if (!k.length) throw new Error("prompt with select requires options");
            g(k, function(a, d) {
                var e = h;
                if (d.value === c || d.text === c) throw new Error("given options in wrong format");
                d.group && (o[d.group] || (o[d.group] = b("<optgroup/>").attr("label", d.group)), 
                e = o[d.group]), e.append("<option value='" + d.value + "'>" + d.text + "</option>");
            }), g(o, function(a, b) {
                h.append(b);
            }), h.val(a.value);
            break;

          case "checkbox":
            var q = b.isArray(a.value) ? a.value : [ a.value ];
            if (k = a.inputOptions || [], !k.length) throw new Error("prompt with checkbox requires options");
            if (!k[0].value || !k[0].text) throw new Error("given options in wrong format");
            h = b("<div/>"), g(k, function(c, d) {
                var e = b(n.inputs[a.inputType]);
                e.find("input").attr("value", d.value), e.find("label").append(d.text), g(q, function(a, b) {
                    b === d.value && e.find("input").prop("checked", !0);
                }), h.append(e);
            });
        }
        return a.placeholder && h.attr("placeholder", a.placeholder), a.pattern && h.attr("pattern", a.pattern), 
        a.maxlength && h.attr("maxlength", a.maxlength), f.append(h), f.on("submit", function(a) {
            a.preventDefault(), a.stopPropagation(), e.find(".btn-primary").click();
        }), e = p.dialog(a), e.off("shown.bs.modal"), e.on("shown.bs.modal", function() {
            h.focus();
        }), !0 === i && e.modal("show"), e;
    }, p.dialog = function(a) {
        a = h(a);
        var d = b(n.dialog), f = d.find(".modal-dialog"), i = d.find(".modal-body"), j = a.buttons, k = "", l = {
            onEscape: a.onEscape
        };
        if (b.fn.modal === c) throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");
        if (g(j, function(a, b) {
            k += "<button data-bb-handler='" + a + "' type='button' class='btn " + b.className + "'>" + b.label + "</button>", 
            l[a] = b.callback;
        }), i.find(".bootbox-body").html(a.message), !0 === a.animate && d.addClass("fade"), 
        a.className && d.addClass(a.className), "large" === a.size ? f.addClass("modal-lg") : "small" === a.size && f.addClass("modal-sm"), 
        a.title && i.before(n.header), a.closeButton) {
            var m = b(n.closeButton);
            a.title ? d.find(".modal-header").prepend(m) : m.css("margin-top", "-10px").prependTo(i);
        }
        return a.title && d.find(".modal-title").html(a.title), k.length && (i.after(n.footer), 
        d.find(".modal-footer").html(k)), d.on("hidden.bs.modal", function(a) {
            a.target === this && d.remove();
        }), d.on("shown.bs.modal", function() {
            d.find(".btn-primary:first").focus();
        }), "static" !== a.backdrop && d.on("click.dismiss.bs.modal", function(a) {
            d.children(".modal-backdrop").length && (a.currentTarget = d.children(".modal-backdrop").get(0)), 
            a.target === a.currentTarget && d.trigger("escape.close.bb");
        }), d.on("escape.close.bb", function(a) {
            l.onEscape && e(a, d, l.onEscape);
        }), d.on("click", ".modal-footer button", function(a) {
            var c = b(this).data("bb-handler");
            e(a, d, l[c]);
        }), d.on("click", ".bootbox-close-button", function(a) {
            e(a, d, l.onEscape);
        }), d.on("keyup", function(a) {
            27 === a.which && d.trigger("escape.close.bb");
        }), b(a.container).append(d), d.modal({
            backdrop: !!a.backdrop && "static",
            keyboard: !1,
            show: !1
        }), a.show && d.modal("show"), d;
    }, p.setDefaults = function() {
        var a = {};
        2 === arguments.length ? a[arguments[0]] = arguments[1] : a = arguments[0], b.extend(o, a);
    }, p.hideAll = function() {
        return b(".bootbox").modal("hide"), p;
    };
    var q = {
        bg_BG: {
            OK: "Ок",
            CANCEL: "Отказ",
            CONFIRM: "Потвърждавам"
        },
        br: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Sim"
        },
        cs: {
            OK: "OK",
            CANCEL: "Zrušit",
            CONFIRM: "Potvrdit"
        },
        da: {
            OK: "OK",
            CANCEL: "Annuller",
            CONFIRM: "Accepter"
        },
        de: {
            OK: "OK",
            CANCEL: "Abbrechen",
            CONFIRM: "Akzeptieren"
        },
        el: {
            OK: "Εντάξει",
            CANCEL: "Ακύρωση",
            CONFIRM: "Επιβεβαίωση"
        },
        en: {
            OK: "OK",
            CANCEL: "Cancel",
            CONFIRM: "OK"
        },
        es: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Aceptar"
        },
        et: {
            OK: "OK",
            CANCEL: "Katkesta",
            CONFIRM: "OK"
        },
        fa: {
            OK: "قبول",
            CANCEL: "لغو",
            CONFIRM: "تایید"
        },
        fi: {
            OK: "OK",
            CANCEL: "Peruuta",
            CONFIRM: "OK"
        },
        fr: {
            OK: "OK",
            CANCEL: "Annuler",
            CONFIRM: "D'accord"
        },
        he: {
            OK: "אישור",
            CANCEL: "ביטול",
            CONFIRM: "אישור"
        },
        hu: {
            OK: "OK",
            CANCEL: "Mégsem",
            CONFIRM: "Megerősít"
        },
        hr: {
            OK: "OK",
            CANCEL: "Odustani",
            CONFIRM: "Potvrdi"
        },
        id: {
            OK: "OK",
            CANCEL: "Batal",
            CONFIRM: "OK"
        },
        it: {
            OK: "OK",
            CANCEL: "Annulla",
            CONFIRM: "Conferma"
        },
        ja: {
            OK: "OK",
            CANCEL: "キャンセル",
            CONFIRM: "確認"
        },
        lt: {
            OK: "Gerai",
            CANCEL: "Atšaukti",
            CONFIRM: "Patvirtinti"
        },
        lv: {
            OK: "Labi",
            CANCEL: "Atcelt",
            CONFIRM: "Apstiprināt"
        },
        nl: {
            OK: "OK",
            CANCEL: "Annuleren",
            CONFIRM: "Accepteren"
        },
        no: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        pl: {
            OK: "OK",
            CANCEL: "Anuluj",
            CONFIRM: "Potwierdź"
        },
        pt: {
            OK: "OK",
            CANCEL: "Cancelar",
            CONFIRM: "Confirmar"
        },
        ru: {
            OK: "OK",
            CANCEL: "Отмена",
            CONFIRM: "Применить"
        },
        sq: {
            OK: "OK",
            CANCEL: "Anulo",
            CONFIRM: "Prano"
        },
        sv: {
            OK: "OK",
            CANCEL: "Avbryt",
            CONFIRM: "OK"
        },
        th: {
            OK: "ตกลง",
            CANCEL: "ยกเลิก",
            CONFIRM: "ยืนยัน"
        },
        tr: {
            OK: "Tamam",
            CANCEL: "İptal",
            CONFIRM: "Onayla"
        },
        zh_CN: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "确认"
        },
        zh_TW: {
            OK: "OK",
            CANCEL: "取消",
            CONFIRM: "確認"
        }
    };
    return p.addLocale = function(a, c) {
        return b.each([ "OK", "CANCEL", "CONFIRM" ], function(a, b) {
            if (!c[b]) throw new Error("Please supply a translation for '" + b + "'");
        }), q[a] = {
            OK: c.OK,
            CANCEL: c.CANCEL,
            CONFIRM: c.CONFIRM
        }, p;
    }, p.removeLocale = function(a) {
        return delete q[a], p;
    }, p.setLocale = function(a) {
        return p.setDefaults("locale", a);
    }, p.init = function(c) {
        return a(c || b);
    }, p;
}), function(a, b) {
    if (a.JSON) if ("function" == typeof define && define.amd) define(function() {
        return b(a);
    }); else if ("object" == typeof module && "object" == typeof module.exports) module.exports = b(a); else {
        var c = !a.Nette || !a.Nette.noInit;
        a.Nette = b(a), c && a.Nette.initOnLoad();
    }
}("undefined" != typeof window ? window : this, function(window) {
    "use strict";
    function getHandler(a) {
        return function(b) {
            return a.call(this, b);
        };
    }
    var Nette = {};
    Nette.formErrors = [], Nette.version = "2.4", Nette.addEvent = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c) : "DOMContentLoaded" === b ? a.attachEvent("onreadystatechange", function() {
            "complete" === a.readyState && c.call(this);
        }) : a.attachEvent("on" + b, getHandler(c));
    }, Nette.getValue = function(a) {
        var b;
        if (a) {
            if (a.tagName) {
                if ("radio" === a.type) {
                    var c = a.form.elements;
                    for (b = 0; b < c.length; b++) if (c[b].name === a.name && c[b].checked) return c[b].value;
                    return null;
                }
                if ("file" === a.type) return a.files || a.value;
                if ("select" === a.tagName.toLowerCase()) {
                    var d = a.selectedIndex, e = a.options, f = [];
                    if ("select-one" === a.type) return d < 0 ? null : e[d].value;
                    for (b = 0; b < e.length; b++) e[b].selected && f.push(e[b].value);
                    return f;
                }
                if (a.name && a.name.match(/\[\]$/)) {
                    var c = a.form.elements[a.name].tagName ? [ a ] : a.form.elements[a.name], f = [];
                    for (b = 0; b < c.length; b++) ("checkbox" !== c[b].type || c[b].checked) && f.push(c[b].value);
                    return f;
                }
                return "checkbox" === a.type ? a.checked : "textarea" === a.tagName.toLowerCase() ? a.value.replace("\r", "") : a.value.replace("\r", "").replace(/^\s+|\s+$/g, "");
            }
            return a[0] ? Nette.getValue(a[0]) : null;
        }
        return null;
    }, Nette.getEffectiveValue = function(a, b) {
        var c = Nette.getValue(a);
        if (a.getAttribute && c === a.getAttribute("data-nette-empty-value") && (c = ""), 
        b) {
            var d = {
                value: c
            };
            Nette.validateControl(a, null, !0, d), c = d.value;
        }
        return c;
    }, Nette.validateControl = function(a, b, c, d, e) {
        a = a.tagName ? a : a[0], b = b || Nette.parseJSON(a.getAttribute("data-nette-rules")), 
        d = void 0 === d ? {
            value: Nette.getEffectiveValue(a)
        } : d;
        for (var f = 0, g = b.length; f < g; f++) {
            var h = b[f], i = h.op.match(/(~)?([^?]+)/), j = h.control ? a.form.elements.namedItem(h.control) : a;
            if (h.neg = i[1], h.op = i[2], h.condition = !!h.rules, j) if ("optional" !== h.op) {
                if (!e || h.condition || ":filled" === h.op) {
                    j = j.tagName ? j : j[0];
                    var k = Nette.validateRule(j, h.op, h.arg, a === j ? d : void 0);
                    if (null !== k) if (h.neg && (k = !k), h.condition && k) {
                        if (!Nette.validateControl(a, h.rules, c, d, ":blank" !== h.op && e)) return !1;
                    } else if (!h.condition && !k) {
                        if (Nette.isDisabled(j)) continue;
                        if (!c) {
                            var l = Nette.isArray(h.arg) ? h.arg : [ h.arg ], m = h.msg.replace(/%(value|\d+)/g, function(b, c) {
                                return Nette.getValue("value" === c ? j : a.form.elements.namedItem(l[c].control));
                            });
                            Nette.addError(j, m);
                        }
                        return !1;
                    }
                }
            } else e = !Nette.validateRule(a, ":filled", null, d);
        }
        return !("number" === a.type && !a.validity.valid) || (c || Nette.addError(a, "Please enter a valid value."), 
        !1);
    }, Nette.validateForm = function(a, b) {
        var c = a.form || a, d = !1;
        if (Nette.formErrors = [], c["nette-submittedBy"] && null !== c["nette-submittedBy"].getAttribute("formnovalidate")) {
            var e = Nette.parseJSON(c["nette-submittedBy"].getAttribute("data-nette-validation-scope"));
            if (!e.length) return Nette.showFormErrors(c, []), !0;
            d = new RegExp("^(" + e.join("-|") + "-)");
        }
        var f, g, h = {};
        for (f = 0; f < c.elements.length; f++) if (g = c.elements[f], !g.tagName || g.tagName.toLowerCase() in {
            input: 1,
            select: 1,
            textarea: 1,
            button: 1
        }) {
            if ("radio" === g.type) {
                if (h[g.name]) continue;
                h[g.name] = !0;
            }
            if (!(d && !g.name.replace(/]\[|\[|]|$/g, "-").match(d) || Nette.isDisabled(g) || Nette.validateControl(g, null, b) || Nette.formErrors.length)) return !1;
        }
        var i = !Nette.formErrors.length;
        return Nette.showFormErrors(c, Nette.formErrors), i;
    }, Nette.isDisabled = function(a) {
        if ("radio" === a.type) {
            for (var b = 0, c = a.form.elements; b < c.length; b++) if (c[b].name === a.name && !c[b].disabled) return !1;
            return !0;
        }
        return a.disabled;
    }, Nette.addError = function(a, b) {
        Nette.formErrors.push({
            element: a,
            message: b
        });
    }, Nette.showFormErrors = function(a, b) {
        for (var c, d = [], e = 0; e < b.length; e++) {
            var f = b[e].element, g = b[e].message;
            Nette.inArray(d, g) || (d.push(g), !c && f.focus && (c = f));
        }
        d.length && (alert(d.join("\n")), c && c.focus());
    };
    var preventFiltering = !1;
    return Nette.validateRule = function(a, b, c, d) {
        d = void 0 === d ? {
            value: Nette.getEffectiveValue(a, !0)
        } : d, ":" === b.charAt(0) && (b = b.substr(1)), b = b.replace("::", "_"), b = b.replace(/\\/g, "");
        var e = Nette.isArray(c) ? c.slice(0) : [ c ];
        if (!preventFiltering) {
            preventFiltering = !0;
            for (var f = 0, g = e.length; f < g; f++) if (e[f] && e[f].control) {
                var h = a.form.elements.namedItem(e[f].control);
                e[f] = h === a ? d.value : Nette.getEffectiveValue(h, !0);
            }
            preventFiltering = !1;
        }
        return Nette.validators[b] ? Nette.validators[b](a, Nette.isArray(c) ? e : e[0], d.value, d) : null;
    }, Nette.validators = {
        filled: function(a, b, c) {
            return !("number" !== a.type || !a.validity.badInput) || "" !== c && !1 !== c && null !== c && (!Nette.isArray(c) || !!c.length) && (!window.FileList || !(c instanceof window.FileList) || c.length);
        },
        blank: function(a, b, c) {
            return !Nette.validators.filled(a, b, c);
        },
        valid: function(a) {
            return Nette.validateControl(a, null, !0);
        },
        equal: function(a, b, c) {
            function d(a) {
                return "number" == typeof a || "string" == typeof a ? "" + a : !0 === a ? "1" : "";
            }
            if (void 0 === b) return null;
            c = Nette.isArray(c) ? c : [ c ], b = Nette.isArray(b) ? b : [ b ];
            a: for (var e = 0, f = c.length; e < f; e++) {
                for (var g = 0, h = b.length; g < h; g++) if (d(c[e]) === d(b[g])) continue a;
                return !1;
            }
            return !0;
        },
        notEqual: function(a, b, c) {
            return void 0 === b ? null : !Nette.validators.equal(a, b, c);
        },
        minLength: function(a, b, c) {
            if ("number" === a.type) {
                if (a.validity.tooShort) return !1;
                if (a.validity.badInput) return null;
            }
            return c.length >= b;
        },
        maxLength: function(a, b, c) {
            if ("number" === a.type) {
                if (a.validity.tooLong) return !1;
                if (a.validity.badInput) return null;
            }
            return c.length <= b;
        },
        length: function(a, b, c) {
            if ("number" === a.type) {
                if (a.validity.tooShort || a.validity.tooLong) return !1;
                if (a.validity.badInput) return null;
            }
            return b = Nette.isArray(b) ? b : [ b, b ], (null === b[0] || c.length >= b[0]) && (null === b[1] || c.length <= b[1]);
        },
        email: function(a, b, c) {
            return /^("([ !#-[\]-~]|\\[ -~])+"|[-a-z0-9!#$%&'*+\/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+\/=?^_`{|}~]+)*)@([0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)+[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?$/i.test(c);
        },
        url: function(a, b, c, d) {
            return /^[a-z\d+.-]+:/.test(c) || (c = "http://" + c), !!/^https?:\/\/((([-_0-9a-z\u00C0-\u02FF\u0370-\u1EFF]+\.)*[0-9a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,61}[0-9a-z\u00C0-\u02FF\u0370-\u1EFF])?\.)?[a-z\u00C0-\u02FF\u0370-\u1EFF]([-0-9a-z\u00C0-\u02FF\u0370-\u1EFF]{0,17}[a-z\u00C0-\u02FF\u0370-\u1EFF])?|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[[0-9a-f:]{3,39}\])(:\d{1,5})?(\/\S*)?$/i.test(c) && (d.value = c, 
            !0);
        },
        regexp: function(a, b, c) {
            var d = "string" == typeof b && b.match(/^\/(.*)\/([imu]*)$/);
            try {
                return d && new RegExp(d[1], d[2].replace("u", "")).test(c);
            } catch (a) {}
        },
        pattern: function(a, b, c) {
            try {
                return "string" == typeof b ? new RegExp("^(?:" + b + ")$").test(c) : null;
            } catch (a) {}
        },
        integer: function(a, b, c) {
            return ("number" !== a.type || !a.validity.badInput) && /^-?[0-9]+$/.test(c);
        },
        float: function(a, b, c, d) {
            return ("number" !== a.type || !a.validity.badInput) && (c = c.replace(" ", "").replace(",", "."), 
            !!/^-?[0-9]*[.,]?[0-9]+$/.test(c) && (d.value = c, !0));
        },
        min: function(a, b, c) {
            if ("number" === a.type) {
                if (a.validity.rangeUnderflow) return !1;
                if (a.validity.badInput) return null;
            }
            return null === b || parseFloat(c) >= b;
        },
        max: function(a, b, c) {
            if ("number" === a.type) {
                if (a.validity.rangeOverflow) return !1;
                if (a.validity.badInput) return null;
            }
            return null === b || parseFloat(c) <= b;
        },
        range: function(a, b, c) {
            if ("number" === a.type) {
                if (a.validity.rangeUnderflow || a.validity.rangeOverflow) return !1;
                if (a.validity.badInput) return null;
            }
            return Nette.isArray(b) ? (null === b[0] || parseFloat(c) >= b[0]) && (null === b[1] || parseFloat(c) <= b[1]) : null;
        },
        submitted: function(a) {
            return a.form["nette-submittedBy"] === a;
        },
        fileSize: function(a, b, c) {
            if (window.FileList) for (var d = 0; d < c.length; d++) if (c[d].size > b) return !1;
            return !0;
        },
        image: function(a, b, c) {
            if (window.FileList && c instanceof window.FileList) for (var d = 0; d < c.length; d++) {
                var e = c[d].type;
                if (e && "image/gif" !== e && "image/png" !== e && "image/jpeg" !== e) return !1;
            }
            return !0;
        },
        static: function(a, b, c) {
            return b;
        }
    }, Nette.toggleForm = function(a, b) {
        var c;
        for (Nette.toggles = {}, c = 0; c < a.elements.length; c++) a.elements[c].tagName.toLowerCase() in {
            input: 1,
            select: 1,
            textarea: 1,
            button: 1
        } && Nette.toggleControl(a.elements[c], null, null, !b);
        for (c in Nette.toggles) Nette.toggle(c, Nette.toggles[c], b);
    }, Nette.toggleControl = function(a, b, c, d, e) {
        b = b || Nette.parseJSON(a.getAttribute("data-nette-rules")), e = void 0 === e ? {
            value: Nette.getEffectiveValue(a)
        } : e;
        for (var f, g = !1, h = [], i = function() {
            Nette.toggleForm(a.form, a);
        }, j = 0, k = b.length; j < k; j++) {
            var l = b[j], m = l.op.match(/(~)?([^?]+)/), n = l.control ? a.form.elements.namedItem(l.control) : a;
            if (n) {
                if (f = c, !1 !== c) {
                    if (l.neg = m[1], l.op = m[2], null === (f = Nette.validateRule(n, l.op, l.arg, a === n ? e : void 0))) continue;
                    l.neg && (f = !f), l.rules || (c = f);
                }
                if (l.rules && Nette.toggleControl(a, l.rules, f, d, e) || l.toggle) {
                    if (g = !0, d) for (var o = !document.addEventListener, p = n.tagName ? n.name : n[0].name, q = n.tagName ? n.form.elements : n, r = 0; r < q.length; r++) q[r].name !== p || Nette.inArray(h, q[r]) || (Nette.addEvent(q[r], o && q[r].type in {
                        checkbox: 1,
                        radio: 1
                    } ? "click" : "change", i), h.push(q[r]));
                    for (var s in l.toggle || []) Object.prototype.hasOwnProperty.call(l.toggle, s) && (Nette.toggles[s] = Nette.toggles[s] || (l.toggle[s] ? f : !f));
                }
            }
        }
        return g;
    }, Nette.parseJSON = function(s) {
        return "{op" === (s || "").substr(0, 3) ? eval("[" + s + "]") : JSON.parse(s || "[]");
    }, Nette.toggle = function(a, b, c) {
        var d = document.getElementById(a);
        d && (d.style.display = b ? "" : "none");
    }, Nette.initForm = function(a) {
        Nette.toggleForm(a), a.noValidate || (a.noValidate = !0, Nette.addEvent(a, "submit", function(b) {
            Nette.validateForm(a) || (b && b.stopPropagation ? (b.stopPropagation(), b.preventDefault()) : window.event && (event.cancelBubble = !0, 
            event.returnValue = !1));
        }));
    }, Nette.initOnLoad = function() {
        Nette.addEvent(document, "DOMContentLoaded", function() {
            for (var a = 0; a < document.forms.length; a++) for (var b = document.forms[a], c = 0; c < b.elements.length; c++) if (b.elements[c].getAttribute("data-nette-rules")) {
                Nette.initForm(b);
                break;
            }
            Nette.addEvent(document.body, "click", function(a) {
                for (var b = a.target || a.srcElement; b; ) {
                    if (b.form && b.type in {
                        submit: 1,
                        image: 1
                    }) {
                        b.form["nette-submittedBy"] = b;
                        break;
                    }
                    b = b.parentNode;
                }
            });
        });
    }, Nette.isArray = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a);
    }, Nette.inArray = function(a, b) {
        if ([].indexOf) return a.indexOf(b) > -1;
        for (var c = 0; c < a.length; c++) if (a[c] === b) return !0;
        return !1;
    }, Nette.webalize = function(a) {
        a = a.toLowerCase();
        var b, c, d = "";
        for (b = 0; b < a.length; b++) c = Nette.webalizeTable[a.charAt(b)], d += c || a.charAt(b);
        return d.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }, Nette.webalizeTable = {
        "á": "a",
        "ä": "a",
        "č": "c",
        "ď": "d",
        "é": "e",
        "ě": "e",
        "í": "i",
        "ľ": "l",
        "ň": "n",
        "ó": "o",
        "ô": "o",
        "ř": "r",
        "š": "s",
        "ť": "t",
        "ú": "u",
        "ů": "u",
        "ý": "y",
        "ž": "z"
    }, Nette;
}), $(document).on("click", ".order-product", function(a) {
    var b = $(this).attr("data-link");
    $.nette.ajax({
        type: "POST",
        url: b,
        success: function() {
            $("#exampleModal").modal();
        }
    });
});