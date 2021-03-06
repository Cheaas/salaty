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
}(window, window.jQuery);