layui.define(function (exports) {
    !function (t, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.echarts = e() : t.echarts = e()
    }(this, function () {
        return function (t) {
            function e(n) {
                if (i[n])return i[n].exports;
                var r = i[n] = {exports: {}, id: n, loaded: !1};
                return t[n].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }

            var i = {};
            return e.m = t, e.c = i, e.p = "", e(0)
        }([function (t, e, i) {
            t.exports = i(2), i(96), i(90), i(101), i(176), i(212), i(189), i(36), i(203), i(196), i(195), i(194), i(179), i(204), i(220)
        }, function (t, e) {
            function i(t) {
                if ("object" == typeof t && null !== t) {
                    var e = t;
                    if (t instanceof Array) {
                        e = [];
                        for (var n = 0, r = t.length; n < r; n++)e[n] = i(t[n])
                    } else if (!S(t) && !T(t)) {
                        e = {};
                        for (var o in t)t.hasOwnProperty(o) && (e[o] = i(t[o]))
                    }
                    return e
                }
                return t
            }

            function n(t, e, r) {
                if (!M(e) || !M(t))return r ? i(e) : t;
                for (var o in e)if (e.hasOwnProperty(o)) {
                    var a = t[o], s = e[o];
                    !M(s) || !M(a) || _(s) || _(a) || T(s) || T(a) || S(s) || S(a) ? !r && o in t || (t[o] = i(e[o], !0)) : n(a, s, r)
                }
                return t
            }

            function r(t, e) {
                for (var i = t[0], r = 1, o = t.length; r < o; r++)i = n(i, t[r], e);
                return i
            }

            function o(t, e) {
                for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }

            function a(t, e, i) {
                for (var n in e)e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
                return t
            }

            function s() {
                return document.createElement("canvas")
            }

            function l() {
                return L || (L = B.createCanvas().getContext("2d")), L
            }

            function h(t, e) {
                if (t) {
                    if (t.indexOf)return t.indexOf(e);
                    for (var i = 0, n = t.length; i < n; i++)if (t[i] === e)return i
                }
                return -1
            }

            function u(t, e) {
                function i() {
                }

                var n = t.prototype;
                i.prototype = e.prototype, t.prototype = new i;
                for (var r in n)t.prototype[r] = n[r];
                t.prototype.constructor = t, t.superClass = e
            }

            function c(t, e, i) {
                t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, a(t, e, i)
            }

            function d(t) {
                if (t)return "string" != typeof t && "number" == typeof t.length
            }

            function f(t, e, i) {
                if (t && e)if (t.forEach && t.forEach === O)t.forEach(e, i); else if (t.length === +t.length)for (var n = 0, r = t.length; n < r; n++)e.call(i, t[n], n, t); else for (var o in t)t.hasOwnProperty(o) && e.call(i, t[o], o, t)
            }

            function p(t, e, i) {
                if (t && e) {
                    if (t.map && t.map === R)return t.map(e, i);
                    for (var n = [], r = 0, o = t.length; r < o; r++)n.push(e.call(i, t[r], r, t));
                    return n
                }
            }

            function g(t, e, i, n) {
                if (t && e) {
                    if (t.reduce && t.reduce === N)return t.reduce(e, i, n);
                    for (var r = 0, o = t.length; r < o; r++)i = e.call(n, i, t[r], r, t);
                    return i
                }
            }

            function m(t, e, i) {
                if (t && e) {
                    if (t.filter && t.filter === z)return t.filter(e, i);
                    for (var n = [], r = 0, o = t.length; r < o; r++)e.call(i, t[r], r, t) && n.push(t[r]);
                    return n
                }
            }

            function v(t, e, i) {
                if (t && e)for (var n = 0, r = t.length; n < r; n++)if (e.call(i, t[n], n, t))return t[n]
            }

            function y(t, e) {
                var i = E.call(arguments, 2);
                return function () {
                    return t.apply(e, i.concat(E.call(arguments)))
                }
            }

            function x(t) {
                var e = E.call(arguments, 1);
                return function () {
                    return t.apply(this, e.concat(E.call(arguments)))
                }
            }

            function _(t) {
                return "[object Array]" === k.call(t)
            }

            function b(t) {
                return "function" == typeof t
            }

            function w(t) {
                return "[object String]" === k.call(t)
            }

            function M(t) {
                var e = typeof t;
                return "function" === e || !!t && "object" == e
            }

            function S(t) {
                return !!P[k.call(t)]
            }

            function T(t) {
                return t && 1 === t.nodeType && "string" == typeof t.nodeName
            }

            function A(t) {
                for (var e = 0, i = arguments.length; e < i; e++)if (null != arguments[e])return arguments[e]
            }

            function I() {
                return Function.call.apply(E, arguments)
            }

            function C(t, e) {
                if (!t)throw new Error(e)
            }

            var L, P = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1,
                "[object CanvasPattern]": 1,
                "[object Image]": 1
            }, k = Object.prototype.toString, D = Array.prototype, O = D.forEach, z = D.filter, E = D.slice, R = D.map, N = D.reduce, B = {
                inherits: u,
                mixin: c,
                clone: i,
                merge: n,
                mergeAll: r,
                extend: o,
                defaults: a,
                getContext: l,
                createCanvas: s,
                indexOf: h,
                slice: I,
                find: v,
                isArrayLike: d,
                each: f,
                map: p,
                reduce: g,
                filter: m,
                bind: y,
                curry: x,
                isArray: _,
                isString: w,
                isObject: M,
                isFunction: b,
                isBuildInObject: S,
                isDom: T,
                retrieve: A,
                assert: C,
                noop: function () {
                }
            };
            t.exports = B
        }, function (t, e, i) {
            function n(t) {
                return function (e, i, n) {
                    e = e && e.toLowerCase(), O.prototype[t].call(this, e, i, n)
                }
            }

            function r() {
                O.call(this)
            }

            function o(t, e, i) {
                function n(t, e) {
                    return t.prio - e.prio
                }

                i = i || {}, "string" == typeof e && (e = tt[e]), this.id, this.group, this._dom = t, this._zr = P.init(t, {
                    renderer: i.renderer || "canvas",
                    devicePixelRatio: i.devicePixelRatio,
                    width: i.width,
                    height: i.height
                }), this._theme = k.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new b(this), this._coordSysMgr = new w, O.call(this), this._messageCenter = new r, this._initEvents(), this.resize = k.bind(this.resize, this), this._pendingActions = [], z(J, n), z(Q, n), this._zr.animation.on("frame", this._onframe, this)
            }

            function a(t, e, i) {
                var n, r = this._model, o = this._coordSysMgr.getCoordinateSystems();
                e = L.parseFinder(r, e);
                for (var a = 0; a < o.length; a++) {
                    var s = o[a];
                    if (s[t] && null != (n = s[t](r, e, i)))return n
                }
            }

            function s(t, e) {
                var i = this._model;
                i && i.eachComponent({mainType: "series", query: e}, function (n, r) {
                    var o = this._chartsMap[n.__viewId];
                    o && o.__alive && o[t](n, i, this._api, e)
                }, this)
            }

            function l(t, e, i) {
                var n = this._api;
                E(this._componentsViews, function (r) {
                    var o = r.__model;
                    r[t](o, e, n, i), v(o, r)
                }, this), e.eachSeries(function (r, o) {
                    var a = this._chartsMap[r.__viewId];
                    a[t](r, e, n, i), v(r, a), m(r, a)
                }, this), g(this._zr, e)
            }

            function h(t, e) {
                for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, r = i ? this._componentsMap : this._chartsMap, o = this._zr, a = 0; a < n.length; a++)n[a].__alive = !1;
                e[i ? "eachComponent" : "eachSeries"](function (t, a) {
                    if (i) {
                        if ("series" === t)return
                    } else a = t;
                    var s = a.id + "_" + a.type, l = r[s];
                    if (!l) {
                        var h = S.parseClassType(a.type), u = i ? A.getClass(h.main, h.sub) : I.getClass(h.sub);
                        if (!u)return;
                        l = new u, l.init(e, this._api), r[s] = l, n.push(l), o.add(l.group)
                    }
                    a.__viewId = s, l.__alive = !0, l.__id = s, l.__model = a
                }, this);
                for (var a = 0; a < n.length;) {
                    var s = n[a];
                    s.__alive ? a++ : (o.remove(s.group), s.dispose(e, this._api), n.splice(a, 1), delete r[s.__id])
                }
            }

            function u(t, e) {
                E(Q, function (i) {
                    i.func(t, e)
                })
            }

            function c(t) {
                var e = {};
                t.eachSeries(function (t) {
                    var i = t.get("stack"), n = t.getData();
                    if (i && "list" === n.type) {
                        var r = e[i];
                        r && (n.stackedOn = r), e[i] = n
                    }
                })
            }

            function d(t, e) {
                var i = this._api;
                E(J, function (n) {
                    n.isLayout && n.func(t, i, e)
                })
            }

            function f(t, e) {
                var i = this._api;
                t.clearColorPalette(), t.eachSeries(function (t) {
                    t.clearColorPalette()
                }), E(J, function (n) {
                    n.func(t, i, e)
                })
            }

            function p(t, e) {
                var i = this._api;
                E(this._componentsViews, function (n) {
                    var r = n.__model;
                    n.render(r, t, i, e), v(r, n)
                }, this), E(this._chartsViews, function (t) {
                    t.__alive = !1
                }, this), t.eachSeries(function (n, r) {
                    var o = this._chartsMap[n.__viewId];
                    o.__alive = !0, o.render(n, t, i, e), o.group.silent = !!n.get("silent"), v(n, o), m(n, o)
                }, this), g(this._zr, t), E(this._chartsViews, function (e) {
                    e.__alive || e.remove(t, i)
                }, this)
            }

            function g(t, e) {
                var i = t.storage, n = 0;
                i.traverse(function (t) {
                    t.isGroup || n++
                }), n > e.get("hoverLayerThreshold") && !x.node && i.traverse(function (t) {
                    t.isGroup || (t.useHoverLayer = !0)
                })
            }

            function m(t, e) {
                var i = 0;
                e.group.traverse(function (t) {
                    "group" === t.type || t.ignore || i++
                });
                var n = +t.get("progressive"), r = i > t.get("progressiveThreshold") && n && !x.node;
                r && e.group.traverse(function (t) {
                    t.isGroup || (t.progressive = r ? Math.floor(i++ / n) : -1, r && t.stopAnimation(!0))
                });
                var o = t.get("blendMode") || null;
                e.group.traverse(function (t) {
                    t.isGroup || t.setStyle("blend", o)
                })
            }

            function v(t, e) {
                var i = t.get("z"), n = t.get("zlevel");
                e.group.traverse(function (t) {
                    "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
                })
            }

            function y(t) {
                function e(t, e) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n[o] = e
                    }
                }

                var i = 0, n = 1, r = 2, o = "__connectUpdateStatus";
                k.each($, function (a, s) {
                    t._messageCenter.on(s, function (a) {
                        if (nt[t.group] && t[o] !== i) {
                            var s = t.makeActionFromEvent(a), l = [];
                            k.each(it, function (e) {
                                e !== t && e.group === t.group && l.push(e)
                            }), e(l, i), E(l, function (t) {
                                t[o] !== n && t.dispatchAction(s)
                            }), e(l, r)
                        }
                    })
                })
            }

            /*!
             * ECharts, a javascript interactive chart library.
             *
             * Copyright (c) 2015, Baidu Inc.
             * All rights reserved.
             *
             * LICENSE
             * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
             */
            var x = i(11), _ = i(124), b = i(89), w = i(23), M = i(125), S = i(12), T = i(15), A = i(57), I = i(27), C = i(3), L = i(7), P = i(76), k = i(1), D = i(18), O = i(20), z = i(44), E = k.each, R = 1e3, N = 5e3, B = 1e3, V = 2e3, F = 3e3, G = 4e3, H = 5e3, W = "__flag_in_main_process", Z = "_hasGradientOrPatternBg", q = "_optionUpdated";
            r.prototype.on = n("on"), r.prototype.off = n("off"), r.prototype.one = n("one"), k.mixin(r, O);
            var j = o.prototype;
            j._onframe = function () {
                this[q] && (this[W] = !0, X.prepareAndUpdate.call(this), this[W] = !1, this[q] = !1)
            }, j.getDom = function () {
                return this._dom
            }, j.getZr = function () {
                return this._zr
            }, j.setOption = function (t, e, i) {
                if (this[W] = !0, !this._model || e) {
                    var n = new M(this._api), r = this._theme, o = this._model = new _(null, null, r, n);
                    o.init(null, null, r, n)
                }
                this._model.setOption(t, K), i ? this[q] = !0 : (X.prepareAndUpdate.call(this), this._zr.refreshImmediately(), this[q] = !1), this[W] = !1, this._flushPendingActions()
            }, j.setTheme = function () {
                console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
            }, j.getModel = function () {
                return this._model
            }, j.getOption = function () {
                return this._model && this._model.getOption()
            }, j.getWidth = function () {
                return this._zr.getWidth()
            }, j.getHeight = function () {
                return this._zr.getHeight()
            }, j.getRenderedCanvas = function (t) {
                if (x.canvasSupported) {
                    t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
                    var e = this._zr, i = e.storage.getDisplayList();
                    return k.each(i, function (t) {
                        t.stopAnimation(!0)
                    }), e.painter.getRenderedCanvas(t)
                }
            }, j.getDataURL = function (t) {
                t = t || {};
                var e = t.excludeComponents, i = this._model, n = [], r = this;
                E(e, function (t) {
                    i.eachComponent({mainType: t}, function (t) {
                        var e = r._componentsMap[t.__viewId];
                        e.group.ignore || (n.push(e), e.group.ignore = !0)
                    })
                });
                var o = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
                return E(n, function (t) {
                    t.group.ignore = !1
                }), o
            }, j.getConnectedDataURL = function (t) {
                if (x.canvasSupported) {
                    var e = this.group, i = Math.min, n = Math.max, r = 1 / 0;
                    if (nt[e]) {
                        var o = r, a = r, s = -r, l = -r, h = [], u = t && t.pixelRatio || 1;
                        k.each(it, function (r, u) {
                            if (r.group === e) {
                                var c = r.getRenderedCanvas(k.clone(t)), d = r.getDom().getBoundingClientRect();
                                o = i(d.left, o), a = i(d.top, a), s = n(d.right, s), l = n(d.bottom, l), h.push({
                                    dom: c,
                                    left: d.left,
                                    top: d.top
                                })
                            }
                        }), o *= u, a *= u, s *= u, l *= u;
                        var c = s - o, d = l - a, f = k.createCanvas();
                        f.width = c, f.height = d;
                        var p = P.init(f);
                        return E(h, function (t) {
                            var e = new C.Image({style: {x: t.left * u - o, y: t.top * u - a, image: t.dom}});
                            p.add(e)
                        }), p.refreshImmediately(), f.toDataURL("image/" + (t && t.type || "png"))
                    }
                    return this.getDataURL(t)
                }
            }, j.convertToPixel = k.curry(a, "convertToPixel"), j.convertFromPixel = k.curry(a, "convertFromPixel"), j.containPixel = function (t, e) {
                var i, n = this._model;
                return t = L.parseFinder(n, t), k.each(t, function (t, n) {
                    n.indexOf("Models") >= 0 && k.each(t, function (t) {
                        var r = t.coordinateSystem;
                        if (r && r.containPoint)i |= !!r.containPoint(e); else if ("seriesModels" === n) {
                            var o = this._chartsMap[t.__viewId];
                            o && o.containPoint && (i |= o.containPoint(e, t))
                        }
                    }, this)
                }, this), !!i
            }, j.getVisual = function (t, e) {
                var i = this._model;
                t = L.parseFinder(i, t, {defaultMainType: "series"});
                var n = t.seriesModel, r = n.getData(), o = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
                return null != o ? r.getItemVisual(o, e) : r.getVisual(e)
            };
            var X = {
                update: function (t) {
                    var e = this._model, i = this._api, n = this._coordSysMgr, r = this._zr;
                    if (e) {
                        e.restoreData(), n.create(this._model, this._api), u.call(this, e, i), c.call(this, e), n.update(e, i), f.call(this, e, t), p.call(this, e, t);
                        var o = e.get("backgroundColor") || "transparent", a = r.painter;
                        if (a.isSingleCanvas && a.isSingleCanvas())r.configLayer(0, {clearColor: o}); else {
                            if (!x.canvasSupported) {
                                var s = D.parse(o);
                                o = D.stringify(s, "rgb"), 0 === s[3] && (o = "transparent")
                            }
                            o.colorStops || o.image ? (r.configLayer(0, {clearColor: o}), this[Z] = !0, this._dom.style.background = "transparent") : (this[Z] && r.configLayer(0, {clearColor: null}), this[Z] = !1, this._dom.style.background = o)
                        }
                    }
                }, updateView: function (t) {
                    var e = this._model;
                    e && (e.eachSeries(function (t) {
                        t.getData().clearAllVisual()
                    }), f.call(this, e, t), l.call(this, "updateView", e, t))
                }, updateVisual: function (t) {
                    var e = this._model;
                    e && (e.eachSeries(function (t) {
                        t.getData().clearAllVisual()
                    }), f.call(this, e, t), l.call(this, "updateVisual", e, t))
                }, updateLayout: function (t) {
                    var e = this._model;
                    e && (d.call(this, e, t), l.call(this, "updateLayout", e, t))
                }, highlight: function (t) {
                    s.call(this, "highlight", t)
                }, downplay: function (t) {
                    s.call(this, "downplay", t)
                }, prepareAndUpdate: function (t) {
                    var e = this._model;
                    h.call(this, "component", e), h.call(this, "chart", e), X.update.call(this, t)
                }
            };
            j.resize = function (t) {
                this[W] = !0, this._zr.resize(t);
                var e = this._model && this._model.resetOption("media");
                X[e ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize(), this[W] = !1, this._flushPendingActions()
            }, j.showLoading = function (t, e) {
                if (k.isObject(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), et[t]) {
                    var i = et[t](this._api, e), n = this._zr;
                    this._loadingFX = i, n.add(i)
                }
            }, j.hideLoading = function () {
                this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
            }, j.makeActionFromEvent = function (t) {
                var e = k.extend({}, t);
                return e.type = $[t.type], e
            }, j.dispatchAction = function (t, e) {
                var i = Y[t.type];
                if (i) {
                    var n = i.actionInfo, r = n.update || "update";
                    if (this[W])return void this._pendingActions.push(t);
                    this[W] = !0;
                    var o = [t], a = !1;
                    t.batch && (a = !0, o = k.map(t.batch, function (e) {
                        return e = k.defaults(k.extend({}, e), t), e.batch = null, e
                    }));
                    for (var s, l = [], h = "highlight" === t.type || "downplay" === t.type, u = 0; u < o.length; u++) {
                        var c = o[u];
                        s = i.action(c, this._model), s = s || k.extend({}, c), s.type = n.event || s.type, l.push(s), h && X[r].call(this, c)
                    }
                    "none" === r || h || (this[q] ? (X.prepareAndUpdate.call(this, t), this[q] = !1) : X[r].call(this, t)), s = a ? {
                        type: n.event || t.type,
                        batch: l
                    } : l[0], this[W] = !1, !e && this._messageCenter.trigger(s.type, s), this._flushPendingActions()
                }
            }, j._flushPendingActions = function () {
                for (var t = this._pendingActions; t.length;) {
                    var e = t.shift();
                    this.dispatchAction(e)
                }
            }, j.on = n("on"), j.off = n("off"), j.one = n("one");
            var U = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
            j._initEvents = function () {
                E(U, function (t) {
                    this._zr.on(t, function (e) {
                        var i, n = this.getModel(), r = e.target;
                        if ("globalout" === t)i = {}; else if (r && null != r.dataIndex) {
                            var o = r.dataModel || n.getSeriesByIndex(r.seriesIndex);
                            i = o && o.getDataParams(r.dataIndex, r.dataType) || {}
                        } else r && r.eventData && (i = k.extend({}, r.eventData));
                        i && (i.event = e, i.type = t, this.trigger(t, i))
                    }, this)
                }, this), E($, function (t, e) {
                    this._messageCenter.on(e, function (t) {
                        this.trigger(e, t)
                    }, this)
                }, this)
            }, j.isDisposed = function () {
                return this._disposed
            }, j.clear = function () {
                this.setOption({series: []}, !0)
            }, j.dispose = function () {
                if (!this._disposed) {
                    this._disposed = !0;
                    var t = this._api, e = this._model;
                    E(this._componentsViews, function (i) {
                        i.dispose(e, t)
                    }), E(this._chartsViews, function (i) {
                        i.dispose(e, t)
                    }), this._zr.dispose(), delete it[this.id]
                }
            }, k.mixin(o, O);
            var Y = [], $ = {}, Q = [], K = [], J = [], tt = {}, et = {}, it = {}, nt = {}, rt = new Date - 0, ot = new Date - 0, at = "_echarts_instance_", st = {
                version: "3.3.1",
                dependencies: {zrender: "3.2.1"}
            };
            st.init = function (t, e, i) {
                var n = new o(t, e, i);
                return n.id = "ec_" + rt++, it[n.id] = n, t.setAttribute && t.setAttribute(at, n.id), y(n), n
            }, st.connect = function (t) {
                if (k.isArray(t)) {
                    var e = t;
                    t = null, k.each(e, function (e) {
                        null != e.group && (t = e.group)
                    }), t = t || "g_" + ot++, k.each(e, function (e) {
                        e.group = t
                    })
                }
                return nt[t] = !0, t
            }, st.disConnect = function (t) {
                nt[t] = !1
            }, st.dispose = function (t) {
                k.isDom(t) ? t = st.getInstanceByDom(t) : "string" == typeof t && (t = it[t]), t instanceof o && !t.isDisposed() && t.dispose()
            }, st.getInstanceByDom = function (t) {
                var e = t.getAttribute(at);
                return it[e]
            }, st.getInstanceById = function (t) {
                return it[t]
            }, st.registerTheme = function (t, e) {
                tt[t] = e
            }, st.registerPreprocessor = function (t) {
                K.push(t)
            }, st.registerProcessor = function (t, e) {
                "function" == typeof t && (e = t, t = R), Q.push({prio: t, func: e})
            }, st.registerAction = function (t, e, i) {
                "function" == typeof e && (i = e, e = "");
                var n = k.isObject(t) ? t.type : [t, t = {event: e}][0];
                t.event = (t.event || n).toLowerCase(), e = t.event, Y[n] || (Y[n] = {action: i, actionInfo: t}), $[e] = n
            }, st.registerCoordinateSystem = function (t, e) {
                w.register(t, e)
            }, st.registerLayout = function (t, e) {
                "function" == typeof t && (e = t, t = B), J.push({prio: t, func: e, isLayout: !0})
            }, st.registerVisual = function (t, e) {
                "function" == typeof t && (e = t, t = F), J.push({prio: t, func: e})
            }, st.registerLoading = function (t, e) {
                et[t] = e
            };
            var lt = S.parseClassType;
            st.extendComponentModel = function (t, e) {
                var i = S;
                if (e) {
                    var n = lt(e);
                    i = S.getClass(n.main, n.sub, !0)
                }
                return i.extend(t)
            }, st.extendComponentView = function (t, e) {
                var i = A;
                if (e) {
                    var n = lt(e);
                    i = A.getClass(n.main, n.sub, !0)
                }
                return i.extend(t)
            }, st.extendSeriesModel = function (t, e) {
                var i = T;
                if (e) {
                    e = "series." + e.replace("series.", "");
                    var n = lt(e);
                    i = T.getClass(n.main, n.sub, !0)
                }
                return i.extend(t)
            }, st.extendChartView = function (t, e) {
                var i = I;
                if (e) {
                    e.replace("series.", "");
                    var n = lt(e);
                    i = I.getClass(n.main, !0)
                }
                return i.extend(t)
            }, st.setCanvasCreator = function (t) {
                k.createCanvas = t
            }, st.registerVisual(V, i(138)), st.registerPreprocessor(i(132)), st.registerLoading("default", i(123)), st.registerAction({
                type: "highlight",
                event: "highlight",
                update: "highlight"
            }, k.noop), st.registerAction({
                type: "downplay",
                event: "downplay",
                update: "downplay"
            }, k.noop), st.List = i(14), st.Model = i(10), st.graphic = i(3), st.number = i(4), st.format = i(9), st.matrix = i(19), st.vector = i(5), st.color = i(18), st.util = {}, E(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults"], function (t) {
                st.util[t] = k[t]
            }), st.PRIORITY = {
                PROCESSOR: {FILTER: R, STATISTIC: N},
                VISUAL: {LAYOUT: B, GLOBAL: V, CHART: F, COMPONENT: G, BRUSH: H}
            }, t.exports = st
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return null != t && "none" != t
            }

            function r(t) {
                return "string" == typeof t ? _.lift(t, -.1) : t
            }

            function o(t) {
                if (t.__hoverStlDirty) {
                    var e = t.style.stroke, i = t.style.fill, o = t.__hoverStl;
                    o.fill = o.fill || (n(i) ? r(i) : null), o.stroke = o.stroke || (n(e) ? r(e) : null);
                    var a = {};
                    for (var s in o)o.hasOwnProperty(s) && (a[s] = t.style[s]);
                    t.__normalStl = a, t.__hoverStlDirty = !1
                }
            }

            function a(t) {
                t.__isHover || (o(t), t.useHoverLayer ? t.__zr && t.__zr.addHover(t, t.__hoverStl) : (t.setStyle(t.__hoverStl), t.z2 += 1), t.__isHover = !0)
            }

            function s(t) {
                if (t.__isHover) {
                    var e = t.__normalStl;
                    t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
                }
            }

            function l(t) {
                "group" === t.type ? t.traverse(function (t) {
                    "group" !== t.type && a(t)
                }) : a(t)
            }

            function h(t) {
                "group" === t.type ? t.traverse(function (t) {
                    "group" !== t.type && s(t)
                }) : s(t)
            }

            function u(t, e) {
                t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && o(t)
            }

            function c() {
                !this.__isEmphasis && l(this)
            }

            function d() {
                !this.__isEmphasis && h(this)
            }

            function f() {
                this.__isEmphasis = !0, l(this)
            }

            function p() {
                this.__isEmphasis = !1, h(this)
            }

            function g(t, e, i, n, r, o) {
                "function" == typeof r && (o = r, r = null);
                var a = n && (n.ifEnableAnimation ? n.ifEnableAnimation() : n.getShallow("animation"));
                if (a) {
                    var s = t ? "Update" : "", l = n && n.getShallow("animationDuration" + s), h = n && n.getShallow("animationEasing" + s), u = n && n.getShallow("animationDelay" + s);
                    "function" == typeof u && (u = u(r)), l > 0 ? e.animateTo(i, l, u || 0, h, o) : (e.attr(i), o && o())
                } else e.attr(i), o && o()
            }

            var m = i(1), v = i(168), y = Math.round, x = i(6), _ = i(18), b = i(19), w = i(5), M = (i(29), {});
            M.Group = i(34), M.Image = i(48), M.Text = i(74), M.Circle = i(159), M.Sector = i(165), M.Ring = i(164), M.Polygon = i(161), M.Polyline = i(162), M.Rect = i(163), M.Line = i(160), M.BezierCurve = i(158), M.Arc = i(157), M.CompoundPath = i(152), M.LinearGradient = i(87), M.RadialGradient = i(153), M.BoundingRect = i(8), M.extendShape = function (t) {
                return x.extend(t)
            }, M.extendPath = function (t, e) {
                return v.extendFromString(t, e)
            }, M.makePath = function (t, e, i, n) {
                var r = v.createFromString(t, e), o = r.getBoundingRect();
                if (i) {
                    var a = o.width / o.height;
                    if ("center" === n) {
                        var s, l = i.height * a;
                        l <= i.width ? s = i.height : (l = i.width, s = l / a);
                        var h = i.x + i.width / 2, u = i.y + i.height / 2;
                        i.x = h - l / 2, i.y = u - s / 2, i.width = l, i.height = s
                    }
                    this.resizePath(r, i)
                }
                return r
            }, M.mergePath = v.mergePath, M.resizePath = function (t, e) {
                if (t.applyTransform) {
                    var i = t.getBoundingRect(), n = i.calculateTransform(e);
                    t.applyTransform(n)
                }
            }, M.subPixelOptimizeLine = function (t) {
                var e = M.subPixelOptimize, i = t.shape, n = t.style.lineWidth;
                return y(2 * i.x1) === y(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), y(2 * i.y1) === y(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
            }, M.subPixelOptimizeRect = function (t) {
                var e = M.subPixelOptimize, i = t.shape, n = t.style.lineWidth, r = i.x, o = i.y, a = i.width, s = i.height;
                return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(r + a, n, !1) - i.x, 0 === a ? 0 : 1), i.height = Math.max(e(o + s, n, !1) - i.y, 0 === s ? 0 : 1), t
            }, M.subPixelOptimize = function (t, e, i) {
                var n = y(2 * t);
                return (n + y(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
            }, M.setHoverStyle = function (t, e) {
                "group" === t.type ? t.traverse(function (t) {
                    "group" !== t.type && u(t, e)
                }) : u(t, e), t.on("mouseover", c).on("mouseout", d), t.on("emphasis", f).on("normal", p)
            }, M.setText = function (t, e, i) {
                var n = e.getShallow("position") || "inside", r = n.indexOf("inside") >= 0 ? "white" : i, o = e.getModel("textStyle");
                m.extend(t, {
                    textDistance: e.getShallow("distance") || 5,
                    textFont: o.getFont(),
                    textPosition: n,
                    textFill: o.getTextColor() || r
                })
            }, M.updateProps = function (t, e, i, n, r) {
                g(!0, t, e, i, n, r)
            }, M.initProps = function (t, e, i, n, r) {
                g(!1, t, e, i, n, r)
            }, M.getTransform = function (t, e) {
                for (var i = b.identity([]); t && t !== e;)b.mul(i, t.getLocalTransform(), i), t = t.parent;
                return i
            }, M.applyTransform = function (t, e, i) {
                return i && (e = b.invert([], e)), w.applyTransform([], t, e)
            }, M.transformDirection = function (t, e, i) {
                var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]), r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]), o = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
                return o = M.applyTransform(o, e, i), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
            }, M.groupTransition = function (t, e, i, n) {
                function r(t) {
                    var e = {};
                    return t.traverse(function (t) {
                        !t.isGroup && t.anid && (e[t.anid] = t)
                    }), e
                }

                function o(t) {
                    var e = {position: w.clone(t.position), rotation: t.rotation};
                    return t.shape && (e.shape = m.extend({}, t.shape)), e
                }

                if (t && e) {
                    var a = r(t);
                    e.traverse(function (t) {
                        if (!t.isGroup && t.anid) {
                            var e = a[t.anid];
                            if (e) {
                                var n = o(t);
                                t.attr(o(e)), M.updateProps(t, n, i, t.dataIndex)
                            }
                        }
                    })
                }
            }, t.exports = M
        }, function (t, e) {
            function i(t) {
                return t.replace(/^\s+/, "").replace(/\s+$/, "")
            }

            var n = {}, r = 1e-4;
            n.linearMap = function (t, e, i, n) {
                var r = e[1] - e[0], o = i[1] - i[0];
                if (0 === r)return 0 === o ? i[0] : (i[0] + i[1]) / 2;
                if (n)if (r > 0) {
                    if (t <= e[0])return i[0];
                    if (t >= e[1])return i[1]
                } else {
                    if (t >= e[0])return i[0];
                    if (t <= e[1])return i[1]
                } else {
                    if (t === e[0])return i[0];
                    if (t === e[1])return i[1]
                }
                return (t - e[0]) / r * o + i[0]
            }, n.parsePercent = function (t, e) {
                switch (t) {
                    case"center":
                    case"middle":
                        t = "50%";
                        break;
                    case"left":
                    case"top":
                        t = "0%";
                        break;
                    case"right":
                    case"bottom":
                        t = "100%"
                }
                return "string" == typeof t ? i(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
            }, n.round = function (t, e) {
                return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), +(+t).toFixed(e)
            }, n.asc = function (t) {
                return t.sort(function (t, e) {
                    return t - e
                }), t
            }, n.getPrecision = function (t) {
                if (t = +t, isNaN(t))return 0;
                for (var e = 1, i = 0; Math.round(t * e) / e !== t;)e *= 10, i++;
                return i
            }, n.getPrecisionSafe = function (t) {
                var e = t.toString(), i = e.indexOf(".");
                return i < 0 ? 0 : e.length - 1 - i
            }, n.getPixelPrecision = function (t, e) {
                var i = Math.log, n = Math.LN10, r = Math.floor(i(t[1] - t[0]) / n), o = Math.round(i(Math.abs(e[1] - e[0])) / n);
                return Math.max(-r + o, 0)
            }, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function (t) {
                var e = 2 * Math.PI;
                return (t % e + e) % e
            }, n.isRadianAroundZero = function (t) {
                return t > -r && t < r
            }, n.parseDate = function (t) {
                if (t instanceof Date)return t;
                if ("string" == typeof t) {
                    var e = new Date(t);
                    return isNaN(+e) && (e = new Date(new Date(t.replace(/-/g, "/")) - new Date("1970/01/01"))), e
                }
                return new Date(Math.round(t))
            }, n.quantity = function (t) {
                return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
            }, n.nice = function (t, e) {
                var i, r = n.quantity(t), o = t / r;
                return i = e ? o < 1.5 ? 1 : o < 2.5 ? 2 : o < 4 ? 3 : o < 7 ? 5 : 10 : o < 1 ? 1 : o < 2 ? 2 : o < 3 ? 3 : o < 5 ? 5 : 10, i * r
            }, t.exports = n
        }, function (t, e) {
            var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
                create: function (t, e) {
                    var n = new i(2);
                    return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
                }, copy: function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t
                }, clone: function (t) {
                    var e = new i(2);
                    return e[0] = t[0], e[1] = t[1], e
                }, set: function (t, e, i) {
                    return t[0] = e, t[1] = i, t
                }, add: function (t, e, i) {
                    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
                }, scaleAndAdd: function (t, e, i, n) {
                    return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
                }, sub: function (t, e, i) {
                    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
                }, len: function (t) {
                    return Math.sqrt(this.lenSquare(t))
                }, lenSquare: function (t) {
                    return t[0] * t[0] + t[1] * t[1]
                }, mul: function (t, e, i) {
                    return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
                }, div: function (t, e, i) {
                    return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
                }, dot: function (t, e) {
                    return t[0] * e[0] + t[1] * e[1]
                }, scale: function (t, e, i) {
                    return t[0] = e[0] * i, t[1] = e[1] * i, t
                }, normalize: function (t, e) {
                    var i = n.len(e);
                    return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
                }, distance: function (t, e) {
                    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
                }, distanceSquare: function (t, e) {
                    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
                }, negate: function (t, e) {
                    return t[0] = -e[0], t[1] = -e[1], t
                }, lerp: function (t, e, i, n) {
                    return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
                }, applyTransform: function (t, e, i) {
                    var n = e[0], r = e[1];
                    return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
                }, min: function (t, e, i) {
                    return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
                }, max: function (t, e, i) {
                    return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
                }
            };
            n.length = n.len, n.lengthSquare = n.lenSquare, n.dist = n.distance, n.distSquare = n.distanceSquare, t.exports = n
        }, function (t, e, i) {
            function n(t) {
                r.call(this, t), this.path = new a
            }

            var r = i(37), o = i(1), a = i(28), s = i(148), l = i(63), h = l.prototype.getCanvasPattern, u = Math.abs;
            n.prototype = {
                constructor: n,
                type: "path",
                __dirtyPath: !0,
                strokeContainThreshold: 5,
                brush: function (t, e) {
                    var i = this.style, n = this.path, r = i.hasStroke(), o = i.hasFill(), a = i.fill, s = i.stroke, l = o && !!a.colorStops, u = r && !!s.colorStops, c = o && !!a.image, d = r && !!s.image;
                    if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                        var f = this.getBoundingRect();
                        l && (this._fillGradient = i.getGradient(t, a, f)), u && (this._strokeGradient = i.getGradient(t, s, f))
                    }
                    l ? t.fillStyle = this._fillGradient : c && (t.fillStyle = h.call(a, t)), u ? t.strokeStyle = this._strokeGradient : d && (t.strokeStyle = h.call(s, t));
                    var p = i.lineDash, g = i.lineDashOffset, m = !!t.setLineDash, v = this.getGlobalScale();
                    n.setScale(v[0], v[1]), this.__dirtyPath || p && !m && r ? (n = this.path.beginPath(t), p && !m && (n.setLineDash(p), n.setLineDashOffset(g)), this.buildPath(n, this.shape, !1), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), o && n.fill(t), p && m && (t.setLineDash(p), t.lineDashOffset = g), r && n.stroke(t), p && m && t.setLineDash([]), this.restoreTransform(t), (i.text || 0 === i.text) && this.drawRectText(t, this.getBoundingRect())
                },
                buildPath: function (t, e, i) {
                },
                getBoundingRect: function () {
                    var t = this._rect, e = this.style, i = !t;
                    if (i) {
                        var n = this.path;
                        this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
                    }
                    if (this._rect = t, e.hasStroke()) {
                        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                        if (this.__dirty || i) {
                            r.copy(t);
                            var o = e.lineWidth, a = e.strokeNoScale ? this.getLineScale() : 1;
                            e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), a > 1e-10 && (r.width += o / a, r.height += o / a, r.x -= o / a / 2, r.y -= o / a / 2)
                        }
                        return r
                    }
                    return t
                },
                contain: function (t, e) {
                    var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), r = this.style;
                    if (t = i[0], e = i[1], n.contain(t, e)) {
                        var o = this.path.data;
                        if (r.hasStroke()) {
                            var a = r.lineWidth, l = r.strokeNoScale ? this.getLineScale() : 1;
                            if (l > 1e-10 && (r.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), s.containStroke(o, a / l, t, e)))return !0
                        }
                        if (r.hasFill())return s.contain(o, t, e)
                    }
                    return !1
                },
                dirty: function (t) {
                    null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
                },
                animateShape: function (t) {
                    return this.animate("shape", t)
                },
                attrKV: function (t, e) {
                    "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : r.prototype.attrKV.call(this, t, e)
                },
                setShape: function (t, e) {
                    var i = this.shape;
                    if (i) {
                        if (o.isObject(t))for (var n in t)t.hasOwnProperty(n) && (i[n] = t[n]); else i[t] = e;
                        this.dirty(!0)
                    }
                    return this
                },
                getLineScale: function () {
                    var t = this.transform;
                    return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
                }
            }, n.extend = function (t) {
                var e = function (e) {
                    n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                    var i = t.shape;
                    if (i) {
                        this.shape = this.shape || {};
                        var r = this.shape;
                        for (var o in i)!r.hasOwnProperty(o) && i.hasOwnProperty(o) && (r[o] = i[o])
                    }
                    t.init && t.init.call(this, e)
                };
                o.inherits(e, n);
                for (var i in t)"style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
                return e
            }, o.inherits(n, r), t.exports = n
        }, function (t, e, i) {
            function n(t, e) {
                return t && t.hasOwnProperty(e)
            }

            var r = i(9), o = i(4), a = i(10), s = i(1), l = {};
            l.normalizeToArray = function (t) {
                return t instanceof Array ? t : null == t ? [] : [t]
            }, l.defaultEmphasis = function (t, e) {
                if (t) {
                    var i = t.emphasis = t.emphasis || {}, n = t.normal = t.normal || {};
                    s.each(e, function (t) {
                        var e = s.retrieve(i[t], n[t]);
                        null != e && (i[t] = e)
                    })
                }
            }, l.LABEL_OPTIONS = ["position", "show", "textStyle", "distance", "formatter"], l.getDataItemValue = function (t) {
                return t && (null == t.value ? t : t.value)
            }, l.isDataItemOption = function (t) {
                return s.isObject(t) && !(t instanceof Array)
            }, l.converDataValue = function (t, e) {
                var i = e && e.type;
                return "ordinal" === i ? t : ("time" !== i || isFinite(t) || null == t || "-" === t || (t = +o.parseDate(t)), null == t || "" === t ? NaN : +t)
            }, l.createDataFormatModel = function (t, e) {
                var i = new a;
                return s.mixin(i, l.dataFormatMixin), i.seriesIndex = e.seriesIndex, i.name = e.name || "", i.mainType = e.mainType, i.subType = e.subType, i.getData = function () {
                    return t
                }, i
            }, l.dataFormatMixin = {
                getDataParams: function (t, e) {
                    var i = this.getData(e), n = this.seriesIndex, r = this.name, o = this.getRawValue(t, e), a = i.getRawIndex(t), s = i.getName(t, !0), l = i.getRawDataItem(t);
                    return {
                        componentType: this.mainType,
                        componentSubType: this.subType,
                        seriesType: "series" === this.mainType ? this.subType : null,
                        seriesIndex: n,
                        seriesName: r,
                        name: s,
                        dataIndex: a,
                        data: l,
                        dataType: e,
                        value: o,
                        color: i.getItemVisual(t, "color"),
                        $vars: ["seriesName", "name", "value"]
                    }
                }, getFormattedLabel: function (t, e, i, n) {
                    e = e || "normal";
                    var o = this.getData(i), a = o.getItemModel(t), s = this.getDataParams(t, i);
                    null != n && s.value instanceof Array && (s.value = s.value[n]);
                    var l = a.get(["label", e, "formatter"]);
                    return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? r.formatTpl(l, s) : void 0
                }, getRawValue: function (t, e) {
                    var i = this.getData(e), n = i.getRawDataItem(t);
                    if (null != n)return !s.isObject(n) || n instanceof Array ? n : n.value
                }, formatTooltip: s.noop
            }, l.mappingToExists = function (t, e) {
                e = (e || []).slice();
                var i = s.map(t || [], function (t, e) {
                    return {exist: t}
                });
                return s.each(e, function (t, n) {
                    if (s.isObject(t)) {
                        for (var r = 0; r < i.length; r++)if (!i[r].option && null != t.id && i[r].exist.id === t.id + "")return i[r].option = t, void(e[n] = null);
                        for (var r = 0; r < i.length; r++) {
                            var o = i[r].exist;
                            if (!(i[r].option || null != o.id && null != t.id || null == t.name || l.isIdInner(t) || l.isIdInner(o) || o.name !== t.name + ""))return i[r].option = t, void(e[n] = null)
                        }
                    }
                }), s.each(e, function (t, e) {
                    if (s.isObject(t)) {
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n].exist;
                            if (!i[n].option && !l.isIdInner(r) && null == t.id) {
                                i[n].option = t;
                                break
                            }
                        }
                        n >= i.length && i.push({option: t})
                    }
                }), i
            }, l.isIdInner = function (t) {
                return s.isObject(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
            }, l.compressBatches = function (t, e) {
                function i(t, e, i) {
                    for (var n = 0, r = t.length; n < r; n++)for (var o = t[n].seriesId, a = l.normalizeToArray(t[n].dataIndex), s = i && i[o], h = 0, u = a.length; h < u; h++) {
                        var c = a[h];
                        s && s[c] ? s[c] = null : (e[o] || (e[o] = {}))[c] = 1
                    }
                }

                function n(t, e) {
                    var i = [];
                    for (var r in t)if (t.hasOwnProperty(r) && null != t[r])if (e)i.push(+r); else {
                        var o = n(t[r], !0);
                        o.length && i.push({seriesId: r, dataIndex: o})
                    }
                    return i
                }

                var r = {}, o = {};
                return i(t || [], r), i(e || [], o, r), [n(r), n(o)]
            }, l.queryDataIndex = function (t, e) {
                return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? s.isArray(e.dataIndex) ? s.map(e.dataIndex, function (e) {
                    return t.indexOfRawIndex(e)
                }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? s.isArray(e.name) ? s.map(e.name, function (e) {
                    return t.indexOfName(e)
                }) : t.indexOfName(e.name) : void 0
            }, l.parseFinder = function (t, e, i) {
                if (s.isString(e)) {
                    var r = {};
                    r[e + "Index"] = 0, e = r
                }
                var o = i && i.defaultMainType;
                !o || n(e, o + "Index") || n(e, o + "Id") || n(e, o + "Name") || (e[o + "Index"] = 0);
                var a = {};
                return s.each(e, function (i, n) {
                    var i = e[n];
                    if ("dataIndex" === n || "dataIndexInside" === n)return void(a[n] = i);
                    var r = n.match(/^(\w+)(Index|Id|Name)$/) || [], o = r[1], s = r[2];
                    if (o && s) {
                        var l = {mainType: o};
                        l[s.toLowerCase()] = i;
                        var h = t.queryComponents(l);
                        a[o + "Models"] = h, a[o + "Model"] = h[0]
                    }
                }), a
            }, t.exports = l
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i, n) {
                i < 0 && (t += i, i = -i), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
            }

            var r = i(5), o = i(19), a = r.applyTransform, s = Math.min, l = Math.abs, h = Math.max;
            n.prototype = {
                constructor: n, union: function (t) {
                    var e = s(t.x, this.x), i = s(t.y, this.y);
                    this.width = h(t.x + t.width, this.x + this.width) - e, this.height = h(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
                }, applyTransform: function () {
                    var t = [], e = [];
                    return function (i) {
                        i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this.height, a(t, t, i), a(e, e, i), this.x = s(t[0], e[0]), this.y = s(t[1], e[1]), this.width = l(e[0] - t[0]), this.height = l(e[1] - t[1]))
                    }
                }(), calculateTransform: function (t) {
                    var e = this, i = t.width / e.width, n = t.height / e.height, r = o.create();
                    return o.translate(r, r, [-e.x, -e.y]), o.scale(r, r, [i, n]), o.translate(r, r, [t.x, t.y]), r
                }, intersect: function (t) {
                    t instanceof n || (t = n.create(t));
                    var e = this, i = e.x, r = e.x + e.width, o = e.y, a = e.y + e.height, s = t.x, l = t.x + t.width, h = t.y, u = t.y + t.height;
                    return !(r < s || l < i || a < h || u < o)
                }, contain: function (t, e) {
                    var i = this;
                    return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
                }, clone: function () {
                    return new n(this.x, this.y, this.width, this.height)
                }, copy: function (t) {
                    this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
                }, plain: function () {
                    return {x: this.x, y: this.y, width: this.width, height: this.height}
                }
            }, n.create = function (t) {
                return new n(t.x, t.y, t.width, t.height)
            }, t.exports = n
        }, function (t, e, i) {
            var n = i(1), r = i(4), o = i(16), a = {};
            a.addCommas = function (t) {
                return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
            }, a.toCamelCase = function (t) {
                return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                    return e.toUpperCase()
                })
            }, a.normalizeCssArray = function (t) {
                var e = t.length;
                return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
            }, a.encodeHTML = function (t) {
                return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            };
            var s = ["a", "b", "c", "d", "e", "f", "g"], l = function (t, e) {
                return "{" + t + (null == e ? "" : e) + "}"
            };
            a.formatTpl = function (t, e) {
                n.isArray(e) || (e = [e]);
                var i = e.length;
                if (!i)return "";
                for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
                    var a = s[o];
                    t = t.replace(l(a), l(a, 0))
                }
                for (var h = 0; h < i; h++)for (var u = 0; u < r.length; u++)t = t.replace(l(s[u], h), e[h][r[u]]);
                return t
            };
            var h = function (t) {
                return t < 10 ? "0" + t : t
            };
            a.formatTime = function (t, e) {
                "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
                var i = r.parseDate(e), n = i.getFullYear(), o = i.getMonth() + 1, a = i.getDate(), s = i.getHours(), l = i.getMinutes(), u = i.getSeconds();
                return t = t.replace("MM", h(o)).toLowerCase().replace("yyyy", n).replace("yy", n % 100).replace("dd", h(a)).replace("d", a).replace("hh", h(s)).replace("h", s).replace("mm", h(l)).replace("m", l).replace("ss", h(u)).replace("s", u)
            }, a.capitalFirst = function (t) {
                return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
            }, a.truncateText = o.truncateText, t.exports = a
        }, function (t, e, i) {
            function n(t, e, i) {
                this.parentModel = e, this.ecModel = i, this.option = t
            }

            var r = i(1), o = i(21);
            n.prototype = {
                constructor: n, init: null, mergeOption: function (t) {
                    r.merge(this.option, t, !0)
                }, get: function (t, e) {
                    if (!t)return this.option;
                    "string" == typeof t && (t = t.split("."));
                    for (var i = this.option, n = this.parentModel, r = 0; r < t.length && (!t[r] || (i = i && "object" == typeof i ? i[t[r]] : null, null != i)); r++);
                    return null == i && n && !e && (i = n.get(t)), i
                }, getShallow: function (t, e) {
                    var i = this.option, n = null == i ? i : i[t], r = this.parentModel;
                    return null == n && r && !e && (n = r.getShallow(t)), n
                }, getModel: function (t, e) {
                    var i = this.get(t, !0), r = this.parentModel, o = new n(i, e || r && r.getModel(t), this.ecModel);
                    return o
                }, isEmpty: function () {
                    return null == this.option
                }, restoreData: function () {
                }, clone: function () {
                    var t = this.constructor;
                    return new t(r.clone(this.option))
                }, setReadOnly: function (t) {
                    o.setReadOnly(this, t)
                }
            }, o.enableClassExtend(n);
            var a = r.mixin;
            a(n, i(130)), a(n, i(127)), a(n, i(131)), a(n, i(129)), t.exports = n
        }, function (t, e) {
            function i(t) {
                var e = {}, i = {}, n = t.match(/Firefox\/([\d.]+)/), r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), o = t.match(/Edge\/([\d.]+)/);
                return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), o && (i.edge = !0, i.version = o[1]), {
                    browser: i,
                    os: e,
                    node: !1,
                    canvasSupported: !!document.createElement("canvas").getContext,
                    touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
                    pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 10)
                }
            }

            var n = {};
            n = "undefined" == typeof navigator ? {
                browser: {},
                os: {},
                node: !0,
                canvasSupported: !0
            } : i(navigator.userAgent), t.exports = n
        }, function (t, e, i) {
            function n(t) {
                var e = [];
                return o.each(u.getClassesByMainType(t), function (t) {
                    a.apply(e, t.prototype.dependencies || [])
                }), o.map(e, function (t) {
                    return l.parseClassType(t).main
                })
            }

            var r = i(10), o = i(1), a = Array.prototype.push, s = i(43), l = i(21), h = i(13), u = r.extend({
                type: "component",
                id: "",
                name: "",
                mainType: "",
                subType: "",
                componentIndex: 0,
                defaultOption: null,
                ecModel: null,
                dependentModels: [],
                uid: null,
                layoutMode: null,
                $constructor: function (t, e, i, n) {
                    r.call(this, t, e, i, n), this.uid = s.getUID("componentModel")
                },
                init: function (t, e, i, n) {
                    this.mergeDefaultAndTheme(t, i)
                },
                mergeDefaultAndTheme: function (t, e) {
                    var i = this.layoutMode, n = i ? h.getLayoutParams(t) : {}, r = e.getTheme();
                    o.merge(t, r.get(this.mainType)), o.merge(t, this.getDefaultOption()), i && h.mergeLayoutParam(t, n, i)
                },
                mergeOption: function (t, e) {
                    o.merge(this.option, t, !0);
                    var i = this.layoutMode;
                    i && h.mergeLayoutParam(this.option, t, i)
                },
                optionUpdated: function (t, e) {
                },
                getDefaultOption: function () {
                    if (!this.hasOwnProperty("__defaultOption")) {
                        for (var t = [], e = this.constructor; e;) {
                            var i = e.prototype.defaultOption;
                            i && t.push(i), e = e.superClass
                        }
                        for (var n = {}, r = t.length - 1; r >= 0; r--)n = o.merge(n, t[r], !0);
                        this.__defaultOption = n
                    }
                    return this.__defaultOption
                },
                getReferringComponents: function (t) {
                    return this.ecModel.queryComponents({
                        mainType: t,
                        index: this.get(t + "Index", !0),
                        id: this.get(t + "Id", !0)
                    })
                }
            });
            l.enableClassManagement(u, {registerWhenExtend: !0}), s.enableSubTypeDefaulter(u), s.enableTopologicalTravel(u, n), o.mixin(u, i(128)), t.exports = u
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i, n, r) {
                var o = 0, a = 0;
                null == n && (n = 1 / 0), null == r && (r = 1 / 0);
                var s = 0;
                e.eachChild(function (l, h) {
                    var u, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
                    if ("horizontal" === t) {
                        var m = f.width + (g ? -g.x + f.x : 0);
                        u = o + m, u > n || l.newline ? (o = 0, u = m, a += s + i, s = f.height) : s = Math.max(s, f.height)
                    } else {
                        var v = f.height + (g ? -g.y + f.y : 0);
                        c = a + v, c > r || l.newline ? (o += s + i, a = 0, c = v, s = f.width) : s = Math.max(s, f.width)
                    }
                    l.newline || (d[0] = o, d[1] = a, "horizontal" === t ? o = u + i : a = c + i)
                })
            }

            var r = i(1), o = i(8), a = i(4), s = i(9), l = a.parsePercent, h = r.each, u = {}, c = ["left", "right", "top", "bottom", "width", "height"];
            u.box = n, u.vbox = r.curry(n, "vertical"), u.hbox = r.curry(n, "horizontal"), u.getAvailableSize = function (t, e, i) {
                var n = e.width, r = e.height, o = l(t.x, n), a = l(t.y, r), h = l(t.x2, n), u = l(t.y2, r);
                return (isNaN(o) || isNaN(parseFloat(t.x))) && (o = 0), (isNaN(h) || isNaN(parseFloat(t.x2))) && (h = n), (isNaN(a) || isNaN(parseFloat(t.y))) && (a = 0), (isNaN(u) || isNaN(parseFloat(t.y2))) && (u = r), i = s.normalizeCssArray(i || 0), {
                    width: Math.max(h - o - i[1] - i[3], 0),
                    height: Math.max(u - a - i[0] - i[2], 0)
                }
            }, u.getLayoutRect = function (t, e, i) {
                i = s.normalizeCssArray(i || 0);
                var n = e.width, r = e.height, a = l(t.left, n), h = l(t.top, r), u = l(t.right, n), c = l(t.bottom, r), d = l(t.width, n), f = l(t.height, r), p = i[2] + i[0], g = i[1] + i[3], m = t.aspect;
                switch (isNaN(d) && (d = n - u - g - a), isNaN(f) && (f = r - c - p - h), isNaN(d) && isNaN(f) && (m > n / r ? d = .8 * n : f = .8 * r), null != m && (isNaN(d) && (d = m * f), isNaN(f) && (f = d / m)), isNaN(a) && (a = n - u - d - g), isNaN(h) && (h = r - c - f - p), t.left || t.right) {
                    case"center":
                        a = n / 2 - d / 2 - i[3];
                        break;
                    case"right":
                        a = n - d - g
                }
                switch (t.top || t.bottom) {
                    case"middle":
                    case"center":
                        h = r / 2 - f / 2 - i[0];
                        break;
                    case"bottom":
                        h = r - f - p
                }
                a = a || 0, h = h || 0, isNaN(d) && (d = n - a - (u || 0)), isNaN(f) && (f = r - h - (c || 0));
                var v = new o(a + i[3], h + i[0], d, f);
                return v.margin = i, v
            }, u.positionGroup = function (t, e, i, n) {
                var o = t.getBoundingRect();
                e = r.extend(r.clone(e), {
                    width: o.width,
                    height: o.height
                }), e = u.getLayoutRect(e, i, n), t.attr("position", [e.x - o.x, e.y - o.y])
            }, u.mergeLayoutParam = function (t, e, i) {
                function n(n) {
                    var r = {}, s = 0, l = {}, u = 0, c = i.ignoreSize ? 1 : 2;
                    if (h(n, function (e) {
                            l[e] = t[e]
                        }), h(n, function (t) {
                            o(e, t) && (r[t] = l[t] = e[t]), a(r, t) && s++,
                            a(l, t) && u++
                        }), u !== c && s) {
                        if (s >= c)return r;
                        for (var d = 0; d < n.length; d++) {
                            var f = n[d];
                            if (!o(r, f) && o(t, f)) {
                                r[f] = t[f];
                                break
                            }
                        }
                        return r
                    }
                    return l
                }

                function o(t, e) {
                    return t.hasOwnProperty(e)
                }

                function a(t, e) {
                    return null != t[e] && "auto" !== t[e]
                }

                function s(t, e, i) {
                    h(t, function (t) {
                        e[t] = i[t]
                    })
                }

                !r.isObject(i) && (i = {});
                var l = ["width", "left", "right"], u = ["height", "top", "bottom"], c = n(l), d = n(u);
                s(l, t, c), s(u, t, d)
            }, u.getLayoutParams = function (t) {
                return u.copyLayoutParams({}, t)
            }, u.copyLayoutParams = function (t, e) {
                return e && t && h(c, function (i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                }), t
            }, t.exports = u
        }, function (t, e, i) {
            (function (e) {
                function n(t) {
                    return d.isArray(t) || (t = [t]), t
                }

                function r(t, e) {
                    var i = t.dimensions, n = new v(d.map(i, t.getDimensionInfo, t), t.hostModel);
                    m(n, t);
                    for (var r = n._storage = {}, o = t._storage, a = 0; a < i.length; a++) {
                        var s = i[a], l = o[s];
                        d.indexOf(e, s) >= 0 ? r[s] = new l.constructor(o[s].length) : r[s] = o[s]
                    }
                    return n
                }

                var o = "undefined", a = "undefined" == typeof window ? e : window, s = typeof a.Float64Array === o ? Array : a.Float64Array, l = typeof a.Int32Array === o ? Array : a.Int32Array, h = {
                    "float": s,
                    "int": l,
                    ordinal: Array,
                    number: Array,
                    time: Array
                }, u = i(10), c = i(45), d = i(1), f = i(7), p = d.isObject, g = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"], m = function (t, e) {
                    d.each(g.concat(e.__wrappedMethods || []), function (i) {
                        e.hasOwnProperty(i) && (t[i] = e[i])
                    }), t.__wrappedMethods = e.__wrappedMethods
                }, v = function (t, e) {
                    t = t || ["x", "y"];
                    for (var i = {}, n = [], r = 0; r < t.length; r++) {
                        var o, a = {};
                        "string" == typeof t[r] ? (o = t[r], a = {
                            name: o,
                            stackable: !1,
                            type: "number"
                        }) : (a = t[r], o = a.name, a.type = a.type || "number"), n.push(o), i[o] = a
                    }
                    this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
                }, y = v.prototype;
                y.type = "list", y.hasItemOption = !0, y.getDimension = function (t) {
                    return isNaN(t) || (t = this.dimensions[t] || t), t
                }, y.getDimensionInfo = function (t) {
                    return d.clone(this._dimensionInfos[this.getDimension(t)])
                }, y.initData = function (t, e, i) {
                    t = t || [], this._rawData = t;
                    var n = this._storage = {}, r = this.indices = [], o = this.dimensions, a = t.length, s = this._dimensionInfos, l = [], u = {};
                    e = e || [];
                    for (var c = 0; c < o.length; c++) {
                        var d = s[o[c]], p = h[d.type];
                        n[o[c]] = new p(a)
                    }
                    var g = this;
                    i || (g.hasItemOption = !1), i = i || function (t, e, i, n) {
                            var r = f.getDataItemValue(t);
                            return f.isDataItemOption(t) && (g.hasItemOption = !0), f.converDataValue(r instanceof Array ? r[n] : r, s[e])
                        };
                    for (var m = 0; m < t.length; m++) {
                        for (var v = t[m], y = 0; y < o.length; y++) {
                            var x = o[y], _ = n[x];
                            _[m] = i(v, x, m, y)
                        }
                        r.push(m)
                    }
                    for (var c = 0; c < t.length; c++) {
                        e[c] || t[c] && null != t[c].name && (e[c] = t[c].name);
                        var b = e[c] || "", w = t[c] && t[c].id;
                        !w && b && (u[b] = u[b] || 0, w = b, u[b] > 0 && (w += "__ec__" + u[b]), u[b]++), w && (l[c] = w)
                    }
                    this._nameList = e, this._idList = l
                }, y.count = function () {
                    return this.indices.length
                }, y.get = function (t, e, i) {
                    var n = this._storage, r = this.indices[e];
                    if (null == r)return NaN;
                    var o = n[t] && n[t][r];
                    if (i) {
                        var a = this._dimensionInfos[t];
                        if (a && a.stackable)for (var s = this.stackedOn; s;) {
                            var l = s.get(t, e);
                            (o >= 0 && l > 0 || o <= 0 && l < 0) && (o += l), s = s.stackedOn
                        }
                    }
                    return o
                }, y.getValues = function (t, e, i) {
                    var n = [];
                    d.isArray(t) || (i = e, e = t, t = this.dimensions);
                    for (var r = 0, o = t.length; r < o; r++)n.push(this.get(t[r], e, i));
                    return n
                }, y.hasValue = function (t) {
                    for (var e = this.dimensions, i = this._dimensionInfos, n = 0, r = e.length; n < r; n++)if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t)))return !1;
                    return !0
                }, y.getDataExtent = function (t, e) {
                    t = this.getDimension(t);
                    var i = this._storage[t], n = this.getDimensionInfo(t);
                    e = n && n.stackable && e;
                    var r, o = (this._extent || (this._extent = {}))[t + !!e];
                    if (o)return o;
                    if (i) {
                        for (var a = 1 / 0, s = -(1 / 0), l = 0, h = this.count(); l < h; l++)r = this.get(t, l, e), r < a && (a = r), r > s && (s = r);
                        return this._extent[t + !!e] = [a, s]
                    }
                    return [1 / 0, -(1 / 0)]
                }, y.getSum = function (t, e) {
                    var i = this._storage[t], n = 0;
                    if (i)for (var r = 0, o = this.count(); r < o; r++) {
                        var a = this.get(t, r, e);
                        isNaN(a) || (n += a)
                    }
                    return n
                }, y.indexOf = function (t, e) {
                    var i = this._storage, n = i[t], r = this.indices;
                    if (n)for (var o = 0, a = r.length; o < a; o++) {
                        var s = r[o];
                        if (n[s] === e)return o
                    }
                    return -1
                }, y.indexOfName = function (t) {
                    for (var e = this.indices, i = this._nameList, n = 0, r = e.length; n < r; n++) {
                        var o = e[n];
                        if (i[o] === t)return n
                    }
                    return -1
                }, y.indexOfRawIndex = function (t) {
                    var e = this.indices, i = e[t];
                    if (null != i && i === t)return t;
                    for (var n = 0, r = e.length - 1; n <= r;) {
                        var o = (n + r) / 2 | 0;
                        if (e[o] < t)n = o + 1; else {
                            if (!(e[o] > t))return o;
                            r = o - 1
                        }
                    }
                    return -1
                }, y.indexOfNearest = function (t, e, i, n) {
                    var r = this._storage, o = r[t];
                    null == n && (n = 1 / 0);
                    var a = -1;
                    if (o)for (var s = Number.MAX_VALUE, l = 0, h = this.count(); l < h; l++) {
                        var u = e - this.get(t, l, i), c = Math.abs(u);
                        u <= n && (c < s || c === s && u > 0) && (s = c, a = l)
                    }
                    return a
                }, y.getRawIndex = function (t) {
                    var e = this.indices[t];
                    return null == e ? -1 : e
                }, y.getRawDataItem = function (t) {
                    return this._rawData[this.getRawIndex(t)]
                }, y.getName = function (t) {
                    return this._nameList[this.indices[t]] || ""
                }, y.getId = function (t) {
                    return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
                }, y.each = function (t, e, i, r) {
                    "function" == typeof t && (r = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
                    var o = [], a = t.length, s = this.indices;
                    r = r || this;
                    for (var l = 0; l < s.length; l++)switch (a) {
                        case 0:
                            e.call(r, l);
                            break;
                        case 1:
                            e.call(r, this.get(t[0], l, i), l);
                            break;
                        case 2:
                            e.call(r, this.get(t[0], l, i), this.get(t[1], l, i), l);
                            break;
                        default:
                            for (var h = 0; h < a; h++)o[h] = this.get(t[h], l, i);
                            o[h] = l, e.apply(r, o)
                    }
                }, y.filterSelf = function (t, e, i, r) {
                    "function" == typeof t && (r = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
                    var o = [], a = [], s = t.length, l = this.indices;
                    r = r || this;
                    for (var h = 0; h < l.length; h++) {
                        var u;
                        if (1 === s)u = e.call(r, this.get(t[0], h, i), h); else {
                            for (var c = 0; c < s; c++)a[c] = this.get(t[c], h, i);
                            a[c] = h, u = e.apply(r, a)
                        }
                        u && o.push(l[h])
                    }
                    return this.indices = o, this._extent = {}, this
                }, y.mapArray = function (t, e, i, n) {
                    "function" == typeof t && (n = i, i = e, e = t, t = []);
                    var r = [];
                    return this.each(t, function () {
                        r.push(e && e.apply(this, arguments))
                    }, i, n), r
                }, y.map = function (t, e, i, o) {
                    t = d.map(n(t), this.getDimension, this);
                    var a = r(this, t), s = a.indices = this.indices, l = a._storage, h = [];
                    return this.each(t, function () {
                        var i = arguments[arguments.length - 1], n = e && e.apply(this, arguments);
                        if (null != n) {
                            "number" == typeof n && (h[0] = n, n = h);
                            for (var r = 0; r < n.length; r++) {
                                var o = t[r], a = l[o], u = s[i];
                                a && (a[u] = n[r])
                            }
                        }
                    }, i, o), a
                }, y.downSample = function (t, e, i, n) {
                    for (var o = r(this, [t]), a = this._storage, s = o._storage, l = this.indices, h = o.indices = [], u = [], c = [], d = Math.floor(1 / e), f = s[t], p = this.count(), g = 0; g < a[t].length; g++)s[t][g] = a[t][g];
                    for (var g = 0; g < p; g += d) {
                        d > p - g && (d = p - g, u.length = d);
                        for (var m = 0; m < d; m++) {
                            var v = l[g + m];
                            u[m] = f[v], c[m] = v
                        }
                        var y = i(u), v = c[n(u, y) || 0];
                        f[v] = y, h.push(v)
                    }
                    return o
                }, y.getItemModel = function (t) {
                    var e = this.hostModel;
                    return t = this.indices[t], new u(this._rawData[t], e, e && e.ecModel)
                }, y.diff = function (t) {
                    var e = this._idList, i = t && t._idList;
                    return new c(t ? t.indices : [], this.indices, function (t) {
                        return i[t] || t + ""
                    }, function (t) {
                        return e[t] || t + ""
                    })
                }, y.getVisual = function (t) {
                    var e = this._visual;
                    return e && e[t]
                }, y.setVisual = function (t, e) {
                    if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, this._visual[t] = e
                }, y.setLayout = function (t, e) {
                    if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e
                }, y.getLayout = function (t) {
                    return this._layout[t]
                }, y.getItemLayout = function (t) {
                    return this._itemLayouts[t]
                }, y.setItemLayout = function (t, e, i) {
                    this._itemLayouts[t] = i ? d.extend(this._itemLayouts[t] || {}, e) : e
                }, y.clearItemLayouts = function () {
                    this._itemLayouts.length = 0
                }, y.getItemVisual = function (t, e, i) {
                    var n = this._itemVisuals[t], r = n && n[e];
                    return null != r || i ? r : this.getVisual(e)
                }, y.setItemVisual = function (t, e, i) {
                    var n = this._itemVisuals[t] || {};
                    if (this._itemVisuals[t] = n, p(e))for (var r in e)e.hasOwnProperty(r) && (n[r] = e[r]); else n[e] = i
                }, y.clearAllVisual = function () {
                    this._visual = {}, this._itemVisuals = []
                };
                var x = function (t) {
                    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
                };
                y.setItemGraphicEl = function (t, e) {
                    var i = this.hostModel;
                    e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(x, e)), this._graphicEls[t] = e
                }, y.getItemGraphicEl = function (t) {
                    return this._graphicEls[t]
                }, y.eachItemGraphicEl = function (t, e) {
                    d.each(this._graphicEls, function (i, n) {
                        i && t && t.call(e, i, n)
                    })
                }, y.cloneShallow = function () {
                    var t = d.map(this.dimensions, this.getDimensionInfo, this), e = new v(t, this.hostModel);
                    return e._storage = this._storage, m(e, this), e.indices = this.indices.slice(), this._extent && (e._extent = d.extend({}, this._extent)), e
                }, y.wrapMethod = function (t, e) {
                    var i = this[t];
                    "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                        var t = i.apply(this, arguments);
                        return e.apply(this, [t].concat(d.slice(arguments)))
                    })
                }, y.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], y.CHANGABLE_METHODS = ["filterSelf"], t.exports = v
            }).call(e, function () {
                return this
            }())
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(9), o = i(7), a = i(12), s = i(56), l = i(11), h = r.encodeHTML, u = r.addCommas, c = a.extend({
                type: "series.__base__",
                seriesIndex: 0,
                coordinateSystem: null,
                defaultOption: null,
                legendDataProvider: null,
                visualColorAccessPath: "itemStyle.normal.color",
                init: function (t, e, i, n) {
                    this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
                },
                mergeDefaultAndTheme: function (t, e) {
                    n.merge(t, e.getTheme().get(this.subType)), n.merge(t, this.getDefaultOption()), o.defaultEmphasis(t.label, o.LABEL_OPTIONS), this.fillDataTextStyle(t.data)
                },
                mergeOption: function (t, e) {
                    t = n.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                    var i = this.getInitialData(t, e);
                    i && (this._data = i, this._dataBeforeProcessed = i.cloneShallow())
                },
                fillDataTextStyle: function (t) {
                    if (t)for (var e = 0; e < t.length; e++)t[e] && t[e].label && o.defaultEmphasis(t[e].label, o.LABEL_OPTIONS)
                },
                getInitialData: function () {
                },
                getData: function (t) {
                    return null == t ? this._data : this._data.getLinkedData(t)
                },
                setData: function (t) {
                    this._data = t
                },
                getRawData: function () {
                    return this._dataBeforeProcessed
                },
                coordDimToDataDim: function (t) {
                    return [t]
                },
                dataDimToCoordDim: function (t) {
                    return t
                },
                getBaseAxis: function () {
                    var t = this.coordinateSystem;
                    return t && t.getBaseAxis && t.getBaseAxis()
                },
                formatTooltip: function (t, e, i) {
                    function o(t) {
                        var i = [];
                        return n.each(t, function (t, n) {
                            var o, s = a.getDimensionInfo(n), l = s && s.type;
                            o = "ordinal" === l ? t + "" : "time" === l ? e ? "" : r.formatTime("yyyy/mm/dd hh:mm:ss", t) : u(t), o && i.push(o)
                        }), i.join(", ")
                    }

                    var a = this._data, s = this.getRawValue(t), l = n.isArray(s) ? o(s) : u(s), c = a.getName(t), d = a.getItemVisual(t, "color"), f = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + d + '"></span>', p = this.name;
                    return "\0-" === p && (p = ""), e ? f + h(this.name) + " : " + l : (p && h(p) + "<br />") + f + (c ? h(c) + " : " + l : l)
                },
                ifEnableAnimation: function () {
                    if (l.node)return !1;
                    var t = this.getShallow("animation");
                    return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
                },
                restoreData: function () {
                    this._data = this._dataBeforeProcessed.cloneShallow()
                },
                getColorFromPalette: function (t, e) {
                    var i = this.ecModel, n = s.getColorFromPalette.call(this, t, e);
                    return n || (n = i.getColorFromPalette(t, e)), n
                },
                getAxisTooltipDataIndex: null,
                getTooltipPosition: null
            });
            n.mixin(c, o.dataFormatMixin), n.mixin(c, s), t.exports = c
        }, function (t, e, i) {
            function n(t, e) {
                var i = t + ":" + e;
                if (l[i])return l[i];
                for (var n = (t + "").split("\n"), r = 0, o = 0, a = n.length; o < a; o++)r = Math.max(p.measureText(n[o], e).width, r);
                return h > u && (h = 0, l = {}), h++, l[i] = r, r
            }

            function r(t, e, i, r) {
                var o = ((t || "") + "").split("\n").length, a = n(t, e), s = n("国", e), l = o * s, h = new d(0, 0, a, l);
                switch (h.lineHeight = s, r) {
                    case"bottom":
                    case"alphabetic":
                        h.y -= s;
                        break;
                    case"middle":
                        h.y -= s / 2
                }
                switch (i) {
                    case"end":
                    case"right":
                        h.x -= h.width;
                        break;
                    case"center":
                        h.x -= h.width / 2
                }
                return h
            }

            function o(t, e, i, n) {
                var r = e.x, o = e.y, a = e.height, s = e.width, l = i.height, h = a / 2 - l / 2, u = "left";
                switch (t) {
                    case"left":
                        r -= n, o += h, u = "right";
                        break;
                    case"right":
                        r += n + s, o += h, u = "left";
                        break;
                    case"top":
                        r += s / 2, o -= n + l, u = "center";
                        break;
                    case"bottom":
                        r += s / 2, o += a + n, u = "center";
                        break;
                    case"inside":
                        r += s / 2, o += h, u = "center";
                        break;
                    case"insideLeft":
                        r += n, o += h, u = "left";
                        break;
                    case"insideRight":
                        r += s - n, o += h, u = "right";
                        break;
                    case"insideTop":
                        r += s / 2, o += n, u = "center";
                        break;
                    case"insideBottom":
                        r += s / 2, o += a - l - n, u = "center";
                        break;
                    case"insideTopLeft":
                        r += n, o += n, u = "left";
                        break;
                    case"insideTopRight":
                        r += s - n, o += n, u = "right";
                        break;
                    case"insideBottomLeft":
                        r += n, o += a - l - n;
                        break;
                    case"insideBottomRight":
                        r += s - n, o += a - l - n, u = "right"
                }
                return {x: r, y: o, textAlign: u, textBaseline: "top"}
            }

            function a(t, e, i, r, o) {
                if (!e)return "";
                o = o || {}, r = f(r, "...");
                for (var a = f(o.maxIterations, 2), l = f(o.minChar, 0), h = n("国", i), u = n("a", i), c = f(o.placeholder, ""), d = e = Math.max(0, e - 1), p = 0; p < l && d >= u; p++)d -= u;
                var g = n(r);
                g > d && (r = "", g = 0), d = e - g;
                for (var m = (t + "").split("\n"), p = 0, v = m.length; p < v; p++) {
                    var y = m[p], x = n(y, i);
                    if (!(x <= e)) {
                        for (var _ = 0; ; _++) {
                            if (x <= d || _ >= a) {
                                y += r;
                                break
                            }
                            var b = 0 === _ ? s(y, d, u, h) : x > 0 ? Math.floor(y.length * d / x) : 0;
                            y = y.substr(0, b), x = n(y, i)
                        }
                        "" === y && (y = c), m[p] = y
                    }
                }
                return m.join("\n")
            }

            function s(t, e, i, n) {
                for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
                    var s = t.charCodeAt(o);
                    r += 0 <= s && s <= 127 ? i : n
                }
                return o
            }

            var l = {}, h = 0, u = 5e3, c = i(1), d = i(8), f = c.retrieve, p = {
                getWidth: n,
                getBoundingRect: r,
                adjustTextPositionOnRect: o,
                truncateText: a,
                measureText: function (t, e) {
                    var i = c.getContext();
                    return i.font = e || "12px sans-serif", i.measureText(t)
                }
            };
            t.exports = p
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return t > -w && t < w
            }

            function r(t) {
                return t > w || t < -w
            }

            function o(t, e, i, n, r) {
                var o = 1 - r;
                return o * o * (o * t + 3 * r * e) + r * r * (r * n + 3 * o * i)
            }

            function a(t, e, i, n, r) {
                var o = 1 - r;
                return 3 * (((e - t) * o + 2 * (i - e) * r) * o + (n - i) * r * r)
            }

            function s(t, e, i, r, o, a) {
                var s = r + 3 * (e - i) - t, l = 3 * (i - 2 * e + t), h = 3 * (e - t), u = t - o, c = l * l - 3 * s * h, d = l * h - 9 * s * u, f = h * h - 3 * l * u, p = 0;
                if (n(c) && n(d))if (n(l))a[0] = 0; else {
                    var g = -h / l;
                    g >= 0 && g <= 1 && (a[p++] = g)
                } else {
                    var m = d * d - 4 * c * f;
                    if (n(m)) {
                        var v = d / c, g = -l / s + v, y = -v / 2;
                        g >= 0 && g <= 1 && (a[p++] = g), y >= 0 && y <= 1 && (a[p++] = y)
                    } else if (m > 0) {
                        var x = b(m), w = c * l + 1.5 * s * (-d + x), M = c * l + 1.5 * s * (-d - x);
                        w = w < 0 ? -_(-w, T) : _(w, T), M = M < 0 ? -_(-M, T) : _(M, T);
                        var g = (-l - (w + M)) / (3 * s);
                        g >= 0 && g <= 1 && (a[p++] = g)
                    } else {
                        var A = (2 * c * l - 3 * s * d) / (2 * b(c * c * c)), I = Math.acos(A) / 3, C = b(c), L = Math.cos(I), g = (-l - 2 * C * L) / (3 * s), y = (-l + C * (L + S * Math.sin(I))) / (3 * s), P = (-l + C * (L - S * Math.sin(I))) / (3 * s);
                        g >= 0 && g <= 1 && (a[p++] = g), y >= 0 && y <= 1 && (a[p++] = y), P >= 0 && P <= 1 && (a[p++] = P)
                    }
                }
                return p
            }

            function l(t, e, i, o, a) {
                var s = 6 * i - 12 * e + 6 * t, l = 9 * e + 3 * o - 3 * t - 9 * i, h = 3 * e - 3 * t, u = 0;
                if (n(l)) {
                    if (r(s)) {
                        var c = -h / s;
                        c >= 0 && c <= 1 && (a[u++] = c)
                    }
                } else {
                    var d = s * s - 4 * l * h;
                    if (n(d))a[0] = -s / (2 * l); else if (d > 0) {
                        var f = b(d), c = (-s + f) / (2 * l), p = (-s - f) / (2 * l);
                        c >= 0 && c <= 1 && (a[u++] = c), p >= 0 && p <= 1 && (a[u++] = p)
                    }
                }
                return u
            }

            function h(t, e, i, n, r, o) {
                var a = (e - t) * r + t, s = (i - e) * r + e, l = (n - i) * r + i, h = (s - a) * r + a, u = (l - s) * r + s, c = (u - h) * r + h;
                o[0] = t, o[1] = a, o[2] = h, o[3] = c, o[4] = c, o[5] = u, o[6] = l, o[7] = n
            }

            function u(t, e, i, n, r, a, s, l, h, u, c) {
                var d, f, p, g, m, v = .005, y = 1 / 0;
                A[0] = h, A[1] = u;
                for (var _ = 0; _ < 1; _ += .05)I[0] = o(t, i, r, s, _), I[1] = o(e, n, a, l, _), g = x(A, I), g < y && (d = _, y = g);
                y = 1 / 0;
                for (var w = 0; w < 32 && !(v < M); w++)f = d - v, p = d + v, I[0] = o(t, i, r, s, f), I[1] = o(e, n, a, l, f), g = x(I, A), f >= 0 && g < y ? (d = f, y = g) : (C[0] = o(t, i, r, s, p), C[1] = o(e, n, a, l, p), m = x(C, A), p <= 1 && m < y ? (d = p, y = m) : v *= .5);
                return c && (c[0] = o(t, i, r, s, d), c[1] = o(e, n, a, l, d)), b(y)
            }

            function c(t, e, i, n) {
                var r = 1 - n;
                return r * (r * t + 2 * n * e) + n * n * i
            }

            function d(t, e, i, n) {
                return 2 * ((1 - n) * (e - t) + n * (i - e))
            }

            function f(t, e, i, o, a) {
                var s = t - 2 * e + i, l = 2 * (e - t), h = t - o, u = 0;
                if (n(s)) {
                    if (r(l)) {
                        var c = -h / l;
                        c >= 0 && c <= 1 && (a[u++] = c)
                    }
                } else {
                    var d = l * l - 4 * s * h;
                    if (n(d)) {
                        var c = -l / (2 * s);
                        c >= 0 && c <= 1 && (a[u++] = c)
                    } else if (d > 0) {
                        var f = b(d), c = (-l + f) / (2 * s), p = (-l - f) / (2 * s);
                        c >= 0 && c <= 1 && (a[u++] = c), p >= 0 && p <= 1 && (a[u++] = p)
                    }
                }
                return u
            }

            function p(t, e, i) {
                var n = t + i - 2 * e;
                return 0 === n ? .5 : (t - e) / n
            }

            function g(t, e, i, n, r) {
                var o = (e - t) * n + t, a = (i - e) * n + e, s = (a - o) * n + o;
                r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = i
            }

            function m(t, e, i, n, r, o, a, s, l) {
                var h, u = .005, d = 1 / 0;
                A[0] = a, A[1] = s;
                for (var f = 0; f < 1; f += .05) {
                    I[0] = c(t, i, r, f), I[1] = c(e, n, o, f);
                    var p = x(A, I);
                    p < d && (h = f, d = p)
                }
                d = 1 / 0;
                for (var g = 0; g < 32 && !(u < M); g++) {
                    var m = h - u, v = h + u;
                    I[0] = c(t, i, r, m), I[1] = c(e, n, o, m);
                    var p = x(I, A);
                    if (m >= 0 && p < d)h = m, d = p; else {
                        C[0] = c(t, i, r, v), C[1] = c(e, n, o, v);
                        var y = x(C, A);
                        v <= 1 && y < d ? (h = v, d = y) : u *= .5
                    }
                }
                return l && (l[0] = c(t, i, r, h), l[1] = c(e, n, o, h)), b(d)
            }

            var v = i(5), y = v.create, x = v.distSquare, _ = Math.pow, b = Math.sqrt, w = 1e-8, M = 1e-4, S = b(3), T = 1 / 3, A = y(), I = y(), C = y();
            t.exports = {
                cubicAt: o,
                cubicDerivativeAt: a,
                cubicRootAt: s,
                cubicExtrema: l,
                cubicSubdivide: h,
                cubicProjectPoint: u,
                quadraticAt: c,
                quadraticDerivativeAt: d,
                quadraticRootAt: f,
                quadraticExtremum: p,
                quadraticSubdivide: g,
                quadraticProjectPoint: m
            }
        }, function (t, e) {
            function i(t) {
                return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t
            }

            function n(t) {
                return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t
            }

            function r(t) {
                return t < 0 ? 0 : t > 1 ? 1 : t
            }

            function o(t) {
                return i(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
            }

            function a(t) {
                return r(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
            }

            function s(t, e, i) {
                return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function l(t, e, i) {
                return t + (e - t) * i
            }

            function h(t) {
                if (t) {
                    t += "";
                    var e = t.replace(/ /g, "").toLowerCase();
                    if (e in x)return x[e].slice();
                    if ("#" !== e.charAt(0)) {
                        var i = e.indexOf("("), n = e.indexOf(")");
                        if (i !== -1 && n + 1 === e.length) {
                            var r = e.substr(0, i), s = e.substr(i + 1, n - (i + 1)).split(","), l = 1;
                            switch (r) {
                                case"rgba":
                                    if (4 !== s.length)return;
                                    l = a(s.pop());
                                case"rgb":
                                    if (3 !== s.length)return;
                                    return [o(s[0]), o(s[1]), o(s[2]), l];
                                case"hsla":
                                    if (4 !== s.length)return;
                                    return s[3] = a(s[3]), u(s);
                                case"hsl":
                                    if (3 !== s.length)return;
                                    return u(s);
                                default:
                                    return
                            }
                        }
                    } else {
                        if (4 === e.length) {
                            var h = parseInt(e.substr(1), 16);
                            if (!(h >= 0 && h <= 4095))return;
                            return [(3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1]
                        }
                        if (7 === e.length) {
                            var h = parseInt(e.substr(1), 16);
                            if (!(h >= 0 && h <= 16777215))return;
                            return [(16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1]
                        }
                    }
                }
            }

            function u(t) {
                var e = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = a(t[1]), r = a(t[2]), o = r <= .5 ? r * (n + 1) : r + n - r * n, l = 2 * r - o, h = [i(255 * s(l, o, e + 1 / 3)), i(255 * s(l, o, e)), i(255 * s(l, o, e - 1 / 3))];
                return 4 === t.length && (h[3] = t[3]), h
            }

            function c(t) {
                if (t) {
                    var e, i, n = t[0] / 255, r = t[1] / 255, o = t[2] / 255, a = Math.min(n, r, o), s = Math.max(n, r, o), l = s - a, h = (s + a) / 2;
                    if (0 === l)e = 0, i = 0; else {
                        i = h < .5 ? l / (s + a) : l / (2 - s - a);
                        var u = ((s - n) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - o) / 6 + l / 2) / l;
                        n === s ? e = d - c : r === s ? e = 1 / 3 + u - d : o === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
                    }
                    var f = [360 * e, i, h];
                    return null != t[3] && f.push(t[3]), f
                }
            }

            function d(t, e) {
                var i = h(t);
                if (i) {
                    for (var n = 0; n < 3; n++)e < 0 ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
                    return y(i, 4 === i.length ? "rgba" : "rgb")
                }
            }

            function f(t, e) {
                var i = h(t);
                if (i)return ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1)
            }

            function p(t, e, n) {
                if (e && e.length && t >= 0 && t <= 1) {
                    n = n || [0, 0, 0, 0];
                    var r = t * (e.length - 1), o = Math.floor(r), a = Math.ceil(r), s = e[o], h = e[a], u = r - o;
                    return n[0] = i(l(s[0], h[0], u)), n[1] = i(l(s[1], h[1], u)), n[2] = i(l(s[2], h[2], u)), n[3] = i(l(s[3], h[3], u)), n
                }
            }

            function g(t, e, n) {
                if (e && e.length && t >= 0 && t <= 1) {
                    var o = t * (e.length - 1), a = Math.floor(o), s = Math.ceil(o), u = h(e[a]), c = h(e[s]), d = o - a, f = y([i(l(u[0], c[0], d)), i(l(u[1], c[1], d)), i(l(u[2], c[2], d)), r(l(u[3], c[3], d))], "rgba");
                    return n ? {color: f, leftIndex: a, rightIndex: s, value: o} : f
                }
            }

            function m(t, e, i, r) {
                if (t = h(t))return t = c(t), null != e && (t[0] = n(e)), null != i && (t[1] = a(i)), null != r && (t[2] = a(r)), y(u(t), "rgba")
            }

            function v(t, e) {
                if (t = h(t), t && null != e)return t[3] = r(e), y(t, "rgba")
            }

            function y(t, e) {
                var i = t[0] + "," + t[1] + "," + t[2];
                return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")"
            }

            var x = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, 1],
                antiquewhite: [250, 235, 215, 1],
                aqua: [0, 255, 255, 1],
                aquamarine: [127, 255, 212, 1],
                azure: [240, 255, 255, 1],
                beige: [245, 245, 220, 1],
                bisque: [255, 228, 196, 1],
                black: [0, 0, 0, 1],
                blanchedalmond: [255, 235, 205, 1],
                blue: [0, 0, 255, 1],
                blueviolet: [138, 43, 226, 1],
                brown: [165, 42, 42, 1],
                burlywood: [222, 184, 135, 1],
                cadetblue: [95, 158, 160, 1],
                chartreuse: [127, 255, 0, 1],
                chocolate: [210, 105, 30, 1],
                coral: [255, 127, 80, 1],
                cornflowerblue: [100, 149, 237, 1],
                cornsilk: [255, 248, 220, 1],
                crimson: [220, 20, 60, 1],
                cyan: [0, 255, 255, 1],
                darkblue: [0, 0, 139, 1],
                darkcyan: [0, 139, 139, 1],
                darkgoldenrod: [184, 134, 11, 1],
                darkgray: [169, 169, 169, 1],
                darkgreen: [0, 100, 0, 1],
                darkgrey: [169, 169, 169, 1],
                darkkhaki: [189, 183, 107, 1],
                darkmagenta: [139, 0, 139, 1],
                darkolivegreen: [85, 107, 47, 1],
                darkorange: [255, 140, 0, 1],
                darkorchid: [153, 50, 204, 1],
                darkred: [139, 0, 0, 1],
                darksalmon: [233, 150, 122, 1],
                darkseagreen: [143, 188, 143, 1],
                darkslateblue: [72, 61, 139, 1],
                darkslategray: [47, 79, 79, 1],
                darkslategrey: [47, 79, 79, 1],
                darkturquoise: [0, 206, 209, 1],
                darkviolet: [148, 0, 211, 1],
                deeppink: [255, 20, 147, 1],
                deepskyblue: [0, 191, 255, 1],
                dimgray: [105, 105, 105, 1],
                dimgrey: [105, 105, 105, 1],
                dodgerblue: [30, 144, 255, 1],
                firebrick: [178, 34, 34, 1],
                floralwhite: [255, 250, 240, 1],
                forestgreen: [34, 139, 34, 1],
                fuchsia: [255, 0, 255, 1],
                gainsboro: [220, 220, 220, 1],
                ghostwhite: [248, 248, 255, 1],
                gold: [255, 215, 0, 1],
                goldenrod: [218, 165, 32, 1],
                gray: [128, 128, 128, 1],
                green: [0, 128, 0, 1],
                greenyellow: [173, 255, 47, 1],
                grey: [128, 128, 128, 1],
                honeydew: [240, 255, 240, 1],
                hotpink: [255, 105, 180, 1],
                indianred: [205, 92, 92, 1],
                indigo: [75, 0, 130, 1],
                ivory: [255, 255, 240, 1],
                khaki: [240, 230, 140, 1],
                lavender: [230, 230, 250, 1],
                lavenderblush: [255, 240, 245, 1],
                lawngreen: [124, 252, 0, 1],
                lemonchiffon: [255, 250, 205, 1],
                lightblue: [173, 216, 230, 1],
                lightcoral: [240, 128, 128, 1],
                lightcyan: [224, 255, 255, 1],
                lightgoldenrodyellow: [250, 250, 210, 1],
                lightgray: [211, 211, 211, 1],
                lightgreen: [144, 238, 144, 1],
                lightgrey: [211, 211, 211, 1],
                lightpink: [255, 182, 193, 1],
                lightsalmon: [255, 160, 122, 1],
                lightseagreen: [32, 178, 170, 1],
                lightskyblue: [135, 206, 250, 1],
                lightslategray: [119, 136, 153, 1],
                lightslategrey: [119, 136, 153, 1],
                lightsteelblue: [176, 196, 222, 1],
                lightyellow: [255, 255, 224, 1],
                lime: [0, 255, 0, 1],
                limegreen: [50, 205, 50, 1],
                linen: [250, 240, 230, 1],
                magenta: [255, 0, 255, 1],
                maroon: [128, 0, 0, 1],
                mediumaquamarine: [102, 205, 170, 1],
                mediumblue: [0, 0, 205, 1],
                mediumorchid: [186, 85, 211, 1],
                mediumpurple: [147, 112, 219, 1],
                mediumseagreen: [60, 179, 113, 1],
                mediumslateblue: [123, 104, 238, 1],
                mediumspringgreen: [0, 250, 154, 1],
                mediumturquoise: [72, 209, 204, 1],
                mediumvioletred: [199, 21, 133, 1],
                midnightblue: [25, 25, 112, 1],
                mintcream: [245, 255, 250, 1],
                mistyrose: [255, 228, 225, 1],
                moccasin: [255, 228, 181, 1],
                navajowhite: [255, 222, 173, 1],
                navy: [0, 0, 128, 1],
                oldlace: [253, 245, 230, 1],
                olive: [128, 128, 0, 1],
                olivedrab: [107, 142, 35, 1],
                orange: [255, 165, 0, 1],
                orangered: [255, 69, 0, 1],
                orchid: [218, 112, 214, 1],
                palegoldenrod: [238, 232, 170, 1],
                palegreen: [152, 251, 152, 1],
                paleturquoise: [175, 238, 238, 1],
                palevioletred: [219, 112, 147, 1],
                papayawhip: [255, 239, 213, 1],
                peachpuff: [255, 218, 185, 1],
                peru: [205, 133, 63, 1],
                pink: [255, 192, 203, 1],
                plum: [221, 160, 221, 1],
                powderblue: [176, 224, 230, 1],
                purple: [128, 0, 128, 1],
                red: [255, 0, 0, 1],
                rosybrown: [188, 143, 143, 1],
                royalblue: [65, 105, 225, 1],
                saddlebrown: [139, 69, 19, 1],
                salmon: [250, 128, 114, 1],
                sandybrown: [244, 164, 96, 1],
                seagreen: [46, 139, 87, 1],
                seashell: [255, 245, 238, 1],
                sienna: [160, 82, 45, 1],
                silver: [192, 192, 192, 1],
                skyblue: [135, 206, 235, 1],
                slateblue: [106, 90, 205, 1],
                slategray: [112, 128, 144, 1],
                slategrey: [112, 128, 144, 1],
                snow: [255, 250, 250, 1],
                springgreen: [0, 255, 127, 1],
                steelblue: [70, 130, 180, 1],
                tan: [210, 180, 140, 1],
                teal: [0, 128, 128, 1],
                thistle: [216, 191, 216, 1],
                tomato: [255, 99, 71, 1],
                turquoise: [64, 224, 208, 1],
                violet: [238, 130, 238, 1],
                wheat: [245, 222, 179, 1],
                white: [255, 255, 255, 1],
                whitesmoke: [245, 245, 245, 1],
                yellow: [255, 255, 0, 1],
                yellowgreen: [154, 205, 50, 1]
            };
            t.exports = {
                parse: h,
                lift: d,
                toHex: f,
                fastMapToColor: p,
                mapToColor: g,
                modifyHSL: m,
                modifyAlpha: v,
                stringify: y
            }
        }, function (t, e) {
            var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
                create: function () {
                    var t = new i(6);
                    return n.identity(t), t
                }, identity: function (t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
                }, copy: function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
                }, mul: function (t, e, i) {
                    var n = e[0] * i[0] + e[2] * i[1], r = e[1] * i[0] + e[3] * i[1], o = e[0] * i[2] + e[2] * i[3], a = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
                    return t[0] = n, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
                }, translate: function (t, e, i) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
                }, rotate: function (t, e, i) {
                    var n = e[0], r = e[2], o = e[4], a = e[1], s = e[3], l = e[5], h = Math.sin(i), u = Math.cos(i);
                    return t[0] = n * u + a * h, t[1] = -n * h + a * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * o + h * l, t[5] = u * l - h * o, t
                }, scale: function (t, e, i) {
                    var n = i[0], r = i[1];
                    return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
                }, invert: function (t, e) {
                    var i = e[0], n = e[2], r = e[4], o = e[1], a = e[3], s = e[5], l = i * a - o * n;
                    return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - a * r) * l, t[5] = (o * r - i * s) * l, t) : null
                }
            };
            t.exports = n
        }, function (t, e) {
            var i = Array.prototype.slice, n = function () {
                this._$handlers = {}
            };
            n.prototype = {
                constructor: n, one: function (t, e, i) {
                    var n = this._$handlers;
                    if (!e || !t)return this;
                    n[t] || (n[t] = []);
                    for (var r = 0; r < n[t].length; r++)if (n[t][r].h === e)return this;
                    return n[t].push({h: e, one: !0, ctx: i || this}), this
                }, on: function (t, e, i) {
                    var n = this._$handlers;
                    if (!e || !t)return this;
                    n[t] || (n[t] = []);
                    for (var r = 0; r < n[t].length; r++)if (n[t][r].h === e)return this;
                    return n[t].push({h: e, one: !1, ctx: i || this}), this
                }, isSilent: function (t) {
                    var e = this._$handlers;
                    return e[t] && e[t].length
                }, off: function (t, e) {
                    var i = this._$handlers;
                    if (!t)return this._$handlers = {}, this;
                    if (e) {
                        if (i[t]) {
                            for (var n = [], r = 0, o = i[t].length; r < o; r++)i[t][r].h != e && n.push(i[t][r]);
                            i[t] = n
                        }
                        i[t] && 0 === i[t].length && delete i[t]
                    } else delete i[t];
                    return this
                }, trigger: function (t) {
                    if (this._$handlers[t]) {
                        var e = arguments, n = e.length;
                        n > 3 && (e = i.call(e, 1));
                        for (var r = this._$handlers[t], o = r.length, a = 0; a < o;) {
                            switch (n) {
                                case 1:
                                    r[a].h.call(r[a].ctx);
                                    break;
                                case 2:
                                    r[a].h.call(r[a].ctx, e[1]);
                                    break;
                                case 3:
                                    r[a].h.call(r[a].ctx, e[1], e[2]);
                                    break;
                                default:
                                    r[a].h.apply(r[a].ctx, e)
                            }
                            r[a].one ? (r.splice(a, 1), o--) : a++
                        }
                    }
                    return this
                }, triggerWithContext: function (t) {
                    if (this._$handlers[t]) {
                        var e = arguments, n = e.length;
                        n > 4 && (e = i.call(e, 1, e.length - 1));
                        for (var r = e[e.length - 1], o = this._$handlers[t], a = o.length, s = 0; s < a;) {
                            switch (n) {
                                case 1:
                                    o[s].h.call(r);
                                    break;
                                case 2:
                                    o[s].h.call(r, e[1]);
                                    break;
                                case 3:
                                    o[s].h.call(r, e[1], e[2]);
                                    break;
                                default:
                                    o[s].h.apply(r, e)
                            }
                            o[s].one ? (o.splice(s, 1), a--) : s++
                        }
                    }
                    return this
                }
            }, t.exports = n
        }, function (t, e, i) {
            function n(t, e) {
                var i = o.slice(arguments, 2);
                return this.superClass.prototype[e].apply(t, i)
            }

            function r(t, e, i) {
                return this.superClass.prototype[e].apply(t, i)
            }

            var o = i(1), a = {}, s = ".", l = "___EC__COMPONENT__CONTAINER___", h = a.parseClassType = function (t) {
                var e = {main: "", sub: ""};
                return t && (t = t.split(s), e.main = t[0] || "", e.sub = t[1] || ""), e
            };
            a.enableClassExtend = function (t, e) {
                t.$constructor = t, t.extend = function (t) {
                    var e = this, i = function () {
                        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
                    };
                    return o.extend(i.prototype, t), i.extend = this.extend, i.superCall = n, i.superApply = r, o.inherits(i, this), i.superClass = e, i
                }
            }, a.enableClassManagement = function (t, e) {
                function i(t) {
                    var e = n[t.main];
                    return e && e[l] || (e = n[t.main] = {}, e[l] = !0), e
                }

                e = e || {};
                var n = {};
                if (t.registerClass = function (t, e) {
                        if (e)if (e = h(e), e.sub) {
                            if (e.sub !== l) {
                                var r = i(e);
                                r[e.sub] = t
                            }
                        } else n[e.main] = t;
                        return t
                    }, t.getClass = function (t, e, i) {
                        var r = n[t];
                        if (r && r[l] && (r = e ? r[e] : null), i && !r)throw new Error("Component " + t + "." + (e || "") + " not exists. Load it first.");
                        return r
                    }, t.getClassesByMainType = function (t) {
                        t = h(t);
                        var e = [], i = n[t.main];
                        return i && i[l] ? o.each(i, function (t, i) {
                            i !== l && e.push(t)
                        }) : e.push(i), e
                    }, t.hasClass = function (t) {
                        return t = h(t), !!n[t.main]
                    }, t.getAllClassMainTypes = function () {
                        var t = [];
                        return o.each(n, function (e, i) {
                            t.push(i)
                        }), t
                    }, t.hasSubTypes = function (t) {
                        t = h(t);
                        var e = n[t.main];
                        return e && e[l]
                    }, t.parseClassType = h, e.registerWhenExtend) {
                    var r = t.extend;
                    r && (t.extend = function (e) {
                        var i = r.call(this, e);
                        return t.registerClass(i, e.type)
                    })
                }
                return t
            }, a.setReadOnly = function (t, e) {
            }, t.exports = a
        }, function (t, e, i) {
            var n = i(136), r = i(38);
            i(137), i(135);
            var o = i(32), a = i(4), s = i(1), l = i(16), h = {};
            h.getScaleExtent = function (t, e) {
                var i = t.scale, n = i.getExtent(), r = n[1] - n[0];
                if ("ordinal" === i.type)return isFinite(r) ? n : [0, 0];
                var o = e.getMin ? e.getMin() : e.get("min"), l = e.getMax ? e.getMax() : e.get("max"), h = e.getNeedCrossZero ? e.getNeedCrossZero() : !e.get("scale"), u = e.get("boundaryGap");
                s.isArray(u) || (u = [u || 0, u || 0]), u[0] = a.parsePercent(u[0], 1), u[1] = a.parsePercent(u[1], 1);
                var c = !0, d = !0;
                return null == o && (o = n[0] - u[0] * r, c = !1), null == l && (l = n[1] + u[1] * r, d = !1), "dataMin" === o && (o = n[0]), "dataMax" === l && (l = n[1]), h && (o > 0 && l > 0 && !c && (o = 0), o < 0 && l < 0 && !d && (l = 0)), [o, l]
            }, h.niceScaleExtent = function (t, e) {
                var i = t.scale, n = h.getScaleExtent(t, e), r = null != (e.getMin ? e.getMin() : e.get("min")), o = null != (e.getMax ? e.getMax() : e.get("max")), a = e.get("splitNumber");
                "log" === i.type && (i.base = e.get("logBase")), i.setExtent(n[0], n[1]), i.niceExtent(a, r, o);
                var s = e.get("minInterval");
                if (isFinite(s) && !r && !o && "interval" === i.type) {
                    var l = i.getInterval(), u = Math.max(Math.abs(l), s) / l;
                    n = i.getExtent();
                    var c = (n[1] + n[0]) / 2;
                    i.setExtent(u * (n[0] - c) + c, u * (n[1] - c) + c), i.niceExtent(a)
                }
                var l = e.get("interval");
                null != l && i.setInterval && i.setInterval(l)
            }, h.createScaleByModel = function (t, e) {
                if (e = e || t.get("type"))switch (e) {
                    case"category":
                        return new n(t.getCategories(), [1 / 0, -(1 / 0)]);
                    case"value":
                        return new r;
                    default:
                        return (o.getClass(e) || r).create(t)
                }
            }, h.ifAxisCrossZero = function (t) {
                var e = t.scale.getExtent(), i = e[0], n = e[1];
                return !(i > 0 && n > 0 || i < 0 && n < 0)
            }, h.getAxisLabelInterval = function (t, e, i, n) {
                var r, o = 0, a = 0, s = 1;
                e.length > 40 && (s = Math.floor(e.length / 40));
                for (var h = 0; h < t.length; h += s) {
                    var u = t[h], c = l.getBoundingRect(e[h], i, "center", "top");
                    c[n ? "x" : "y"] += u, c[n ? "width" : "height"] *= 1.3, r ? r.intersect(c) ? (a++, o = Math.max(o, a)) : (r.union(c), a = 0) : r = c.clone()
                }
                return 0 === o && s > 1 ? s : (o + 1) * s - 1
            }, h.getFormattedLabels = function (t, e) {
                var i = t.scale, n = i.getTicksLabels(), r = i.getTicks();
                return "string" == typeof e ? (e = function (t) {
                    return function (e) {
                        return t.replace("{value}", e)
                    }
                }(e), s.map(n, e)) : "function" == typeof e ? s.map(r, function (n, r) {
                    return e("category" === t.type ? i.getLabel(n) : n, r)
                }, this) : n
            }, t.exports = h
        }, function (t, e, i) {
            "use strict";
            function n() {
                this._coordinateSystems = []
            }

            var r = i(1), o = {};
            n.prototype = {
                constructor: n, create: function (t, e) {
                    var i = [];
                    r.each(o, function (n, r) {
                        var o = n.create(t, e);
                        i = i.concat(o || [])
                    }), this._coordinateSystems = i
                }, update: function (t, e) {
                    r.each(this._coordinateSystems, function (i) {
                        i.update && i.update(t, e)
                    })
                }, getCoordinateSystems: function () {
                    return this._coordinateSystems.slice()
                }
            }, n.register = function (t, e) {
                o[t] = e
            }, n.get = function (t) {
                return o[t]
            }, t.exports = n
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
            }

            function r(t, e, i, n) {
                return i = i || {}, n ? o(t, e, i) : u.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : o(t, e, i), i
            }

            function o(t, e, i) {
                var r = n(t);
                i.zrX = e.clientX - r.left, i.zrY = e.clientY - r.top
            }

            function a(t, e, i) {
                if (e = e || window.event, null != e.zrX)return e;
                var n = e.type, o = n && n.indexOf("touch") >= 0;
                if (o) {
                    var a = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
                    a && r(t, a, e, i)
                } else r(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
                return e
            }

            function s(t, e, i) {
                c ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
            }

            function l(t, e, i) {
                c ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
            }

            var h = i(20), u = i(11), c = "undefined" != typeof window && !!window.addEventListener, d = c ? function (t) {
                t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
            } : function (t) {
                t.returnValue = !1, t.cancelBubble = !0
            };
            t.exports = {
                clientToLocal: r,
                normalizeEvent: a,
                addEventListener: s,
                removeEventListener: l,
                stop: d,
                Dispatcher: h
            }
        }, function (t, e) {
            "use strict";
            var i = {};
            t.exports = {
                register: function (t, e) {
                    i[t] = e
                }, get: function (t) {
                    return i[t]
                }
            }
        }, function (t, e, i) {
            "use strict";
            var n = i(3), r = i(8), o = n.extendShape({
                type: "triangle",
                shape: {cx: 0, cy: 0, width: 0, height: 0},
                buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = e.width / 2, o = e.height / 2;
                    t.moveTo(i, n - o), t.lineTo(i + r, n + o), t.lineTo(i - r, n + o), t.closePath()
                }
            }), a = n.extendShape({
                type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = e.width / 2, o = e.height / 2;
                    t.moveTo(i, n - o), t.lineTo(i + r, n), t.lineTo(i, n + o), t.lineTo(i - r, n), t.closePath()
                }
            }), s = n.extendShape({
                type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                    var i = e.x, n = e.y, r = e.width / 5 * 3, o = Math.max(r, e.height), a = r / 2, s = a * a / (o - a), l = n - o + a + s, h = Math.asin(s / a), u = Math.cos(h) * a, c = Math.sin(h), d = Math.cos(h);
                    t.arc(i, l, a, Math.PI - h, 2 * Math.PI + h);
                    var f = .6 * a, p = .7 * a;
                    t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s), t.closePath()
                }
            }), l = n.extendShape({
                type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                    var i = e.height, n = e.width, r = e.x, o = e.y, a = n / 3 * 2;
                    t.moveTo(r, o), t.lineTo(r + a, o + i), t.lineTo(r, o + i / 4 * 3), t.lineTo(r - a, o + i), t.lineTo(r, o), t.closePath()
                }
            }), h = {
                line: n.Line,
                rect: n.Rect,
                roundRect: n.Rect,
                square: n.Rect,
                circle: n.Circle,
                diamond: a,
                pin: s,
                arrow: l,
                triangle: o
            }, u = {
                line: function (t, e, i, n, r) {
                    r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
                }, rect: function (t, e, i, n, r) {
                    r.x = t, r.y = e, r.width = i, r.height = n
                }, roundRect: function (t, e, i, n, r) {
                    r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4
                }, square: function (t, e, i, n, r) {
                    var o = Math.min(i, n);
                    r.x = t, r.y = e, r.width = o, r.height = o
                }, circle: function (t, e, i, n, r) {
                    r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
                }, diamond: function (t, e, i, n, r) {
                    r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
                }, pin: function (t, e, i, n, r) {
                    r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
                }, arrow: function (t, e, i, n, r) {
                    r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
                }, triangle: function (t, e, i, n, r) {
                    r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
                }
            }, c = {};
            for (var d in h)h.hasOwnProperty(d) && (c[d] = new h[d]);
            var f = n.extendShape({
                type: "symbol",
                shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
                beforeBrush: function () {
                    var t = this.style, e = this.shape;
                    "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
                },
                buildPath: function (t, e, i) {
                    var n = e.symbolType, r = c[n];
                    "none" !== e.symbolType && (r || (n = "rect", r = c[n]), u[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i))
                }
            }), p = function (t) {
                if ("image" !== this.type) {
                    var e = this.style, i = this.shape;
                    i && "line" === i.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty(!1)
                }
            }, g = {
                createSymbol: function (t, e, i, o, a, s) {
                    var l = 0 === t.indexOf("empty");
                    l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
                    var h;
                    return h = 0 === t.indexOf("image://") ? new n.Image({
                        style: {
                            image: t.slice(8),
                            x: e,
                            y: i,
                            width: o,
                            height: a
                        }
                    }) : 0 === t.indexOf("path://") ? n.makePath(t.slice(7), {}, new r(e, i, o, a)) : new f({
                        shape: {
                            symbolType: t,
                            x: e,
                            y: i,
                            width: o,
                            height: a
                        }
                    }), h.__isEmptyBrush = l, h.setColor = p, h.setColor(s), h
                }
            };
            t.exports = g
        }, function (t, e, i) {
            function n() {
                this.group = new a, this.uid = s.getUID("viewChart")
            }

            function r(t, e) {
                if (t && (t.trigger(e), "group" === t.type))for (var i = 0; i < t.childCount(); i++)r(t.childAt(i), e)
            }

            function o(t, e, i) {
                var n = h.queryDataIndex(t, e);
                null != n ? u.each(h.normalizeToArray(n), function (e) {
                    r(t.getItemGraphicEl(e), i)
                }) : t.eachItemGraphicEl(function (t) {
                    r(t, i)
                })
            }

            var a = i(34), s = i(43), l = i(21), h = i(7), u = i(1);
            n.prototype = {
                type: "chart", init: function (t, e) {
                }, render: function (t, e, i, n) {
                }, highlight: function (t, e, i, n) {
                    o(t.getData(), n, "emphasis")
                }, downplay: function (t, e, i, n) {
                    o(t.getData(), n, "normal")
                }, remove: function (t, e) {
                    this.group.removeAll()
                }, dispose: function () {
                }
            };
            var c = n.prototype;
            c.updateView = c.updateLayout = c.updateVisual = function (t, e, i, n) {
                this.render(t, e, i, n)
            }, l.enableClassExtend(n, ["dispose"]), l.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
        }, function (t, e, i) {
            "use strict";
            var n = i(17), r = i(5), o = i(73), a = i(8), s = i(33).devicePixelRatio, l = {
                M: 1,
                L: 2,
                C: 3,
                Q: 4,
                A: 5,
                Z: 6,
                R: 7
            }, h = [], u = [], c = [], d = [], f = Math.min, p = Math.max, g = Math.cos, m = Math.sin, v = Math.sqrt, y = Math.abs, x = "undefined" != typeof Float32Array, _ = function () {
                this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._ux = 0, this._uy = 0
            };
            _.prototype = {
                constructor: _,
                _lineDash: null,
                _dashOffset: 0,
                _dashIdx: 0,
                _dashSum: 0,
                setScale: function (t, e) {
                    this._ux = y(1 / s / t) || 0, this._uy = y(1 / s / e) || 0
                },
                getContext: function () {
                    return this._ctx
                },
                beginPath: function (t) {
                    return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
                },
                moveTo: function (t, e) {
                    return this.addData(l.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
                },
                lineTo: function (t, e) {
                    var i = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
                    return this.addData(l.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
                },
                bezierCurveTo: function (t, e, i, n, r, o) {
                    return this.addData(l.C, t, e, i, n, r, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, o) : this._ctx.bezierCurveTo(t, e, i, n, r, o)), this._xi = r, this._yi = o, this
                },
                quadraticCurveTo: function (t, e, i, n) {
                    return this.addData(l.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
                },
                arc: function (t, e, i, n, r, o) {
                    return this.addData(l.A, t, e, i, i, n, r - n, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, o), this._xi = g(r) * i + t, this._xi = m(r) * i + t, this
                },
                arcTo: function (t, e, i, n, r) {
                    return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
                },
                rect: function (t, e, i, n) {
                    return this._ctx && this._ctx.rect(t, e, i, n), this.addData(l.R, t, e, i, n), this
                },
                closePath: function () {
                    this.addData(l.Z);
                    var t = this._ctx, e = this._x0, i = this._y0;
                    return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
                },
                fill: function (t) {
                    t && t.fill(), this.toStatic()
                },
                stroke: function (t) {
                    t && t.stroke(), this.toStatic()
                },
                setLineDash: function (t) {
                    if (t instanceof Array) {
                        this._lineDash = t, this._dashIdx = 0;
                        for (var e = 0, i = 0; i < t.length; i++)e += t[i];
                        this._dashSum = e
                    }
                    return this
                },
                setLineDashOffset: function (t) {
                    return this._dashOffset = t, this
                },
                len: function () {
                    return this._len
                },
                setData: function (t) {
                    var e = t.length;
                    this.data && this.data.length == e || !x || (this.data = new Float32Array(e));
                    for (var i = 0; i < e; i++)this.data[i] = t[i];
                    this._len = e
                },
                appendPath: function (t) {
                    t instanceof Array || (t = [t]);
                    for (var e = t.length, i = 0, n = this._len, r = 0; r < e; r++)i += t[r].len();
                    x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
                    for (var r = 0; r < e; r++)for (var o = t[r].data, a = 0; a < o.length; a++)this.data[n++] = o[a];
                    this._len = n
                },
                addData: function (t) {
                    var e = this.data;
                    this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                    for (var i = 0; i < arguments.length; i++)e[this._len++] = arguments[i];
                    this._prevCmd = t
                },
                _expandData: function () {
                    if (!(this.data instanceof Array)) {
                        for (var t = [], e = 0; e < this._len; e++)t[e] = this.data[e];
                        this.data = t
                    }
                },
                _needsDash: function () {
                    return this._lineDash
                },
                _dashedLineTo: function (t, e) {
                    var i, n, r = this._dashSum, o = this._dashOffset, a = this._lineDash, s = this._ctx, l = this._xi, h = this._yi, u = t - l, c = e - h, d = v(u * u + c * c), g = l, m = h, y = a.length;
                    for (u /= d, c /= d, o < 0 && (o = r + o), o %= r, g -= o * u, m -= o * c; u > 0 && g <= t || u < 0 && g >= t || 0 == u && (c > 0 && m <= e || c < 0 && m >= e);)n = this._dashIdx, i = a[n], g += u * i, m += c * i, this._dashIdx = (n + 1) % y, u > 0 && g < l || u < 0 && g > l || c > 0 && m < h || c < 0 && m > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? f(g, t) : p(g, t), c >= 0 ? f(m, e) : p(m, e));
                    u = g - t, c = m - e, this._dashOffset = -v(u * u + c * c)
                },
                _dashedBezierTo: function (t, e, i, r, o, a) {
                    var s, l, h, u, c, d = this._dashSum, f = this._dashOffset, p = this._lineDash, g = this._ctx, m = this._xi, y = this._yi, x = n.cubicAt, _ = 0, b = this._dashIdx, w = p.length, M = 0;
                    for (f < 0 && (f = d + f), f %= d, s = 0; s < 1; s += .1)l = x(m, t, i, o, s + .1) - x(m, t, i, o, s), h = x(y, e, r, a, s + .1) - x(y, e, r, a, s), _ += v(l * l + h * h);
                    for (; b < w && (M += p[b], !(M > f)); b++);
                    for (s = (M - f) / _; s <= 1;)u = x(m, t, i, o, s), c = x(y, e, r, a, s), b % 2 ? g.moveTo(u, c) : g.lineTo(u, c), s += p[b] / _, b = (b + 1) % w;
                    b % 2 !== 0 && g.lineTo(o, a), l = o - u, h = a - c, this._dashOffset = -v(l * l + h * h)
                },
                _dashedQuadraticTo: function (t, e, i, n) {
                    var r = i, o = n;
                    i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, o)
                },
                toStatic: function () {
                    var t = this.data;
                    t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
                },
                getBoundingRect: function () {
                    h[0] = h[1] = c[0] = c[1] = Number.MAX_VALUE, u[0] = u[1] = d[0] = d[1] = -Number.MAX_VALUE;
                    for (var t = this.data, e = 0, i = 0, n = 0, s = 0, f = 0; f < t.length;) {
                        var p = t[f++];
                        switch (1 == f && (e = t[f], i = t[f + 1], n = e, s = i), p) {
                            case l.M:
                                n = t[f++], s = t[f++], e = n, i = s, c[0] = n, c[1] = s, d[0] = n, d[1] = s;
                                break;
                            case l.L:
                                o.fromLine(e, i, t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                                break;
                            case l.C:
                                o.fromCubic(e, i, t[f++], t[f++], t[f++], t[f++], t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                                break;
                            case l.Q:
                                o.fromQuadratic(e, i, t[f++], t[f++], t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                                break;
                            case l.A:
                                var v = t[f++], y = t[f++], x = t[f++], _ = t[f++], b = t[f++], w = t[f++] + b, M = (t[f++], 1 - t[f++]);
                                1 == f && (n = g(b) * x + v, s = m(b) * _ + y), o.fromArc(v, y, x, _, b, w, M, c, d), e = g(w) * x + v, i = m(w) * _ + y;
                                break;
                            case l.R:
                                n = e = t[f++], s = i = t[f++];
                                var S = t[f++], T = t[f++];
                                o.fromLine(n, s, n + S, s + T, c, d);
                                break;
                            case l.Z:
                                e = n, i = s
                        }
                        r.min(h, h, c), r.max(u, u, d)
                    }
                    return 0 === f && (h[0] = h[1] = u[0] = u[1] = 0), new a(h[0], h[1], u[0] - h[0], u[1] - h[1])
                },
                rebuildPath: function (t) {
                    for (var e, i, n, r, o, a, s = this.data, h = this._ux, u = this._uy, c = this._len, d = 0; d < c;) {
                        var f = s[d++];
                        switch (1 == d && (n = s[d], r = s[d + 1], e = n, i = r), f) {
                            case l.M:
                                e = n = s[d++], i = r = s[d++], t.moveTo(n, r);
                                break;
                            case l.L:
                                o = s[d++], a = s[d++], (y(o - n) > h || y(a - r) > u || d === c - 1) && (t.lineTo(o, a), n = o, r = a);
                                break;
                            case l.C:
                                t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], r = s[d - 1];
                                break;
                            case l.Q:
                                t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], r = s[d - 1];
                                break;
                            case l.A:
                                var p = s[d++], v = s[d++], x = s[d++], _ = s[d++], b = s[d++], w = s[d++], M = s[d++], S = s[d++], T = x > _ ? x : _, A = x > _ ? 1 : x / _, I = x > _ ? _ / x : 1, C = Math.abs(x - _) > .001, L = b + w;
                                C ? (t.translate(p, v), t.rotate(M), t.scale(A, I), t.arc(0, 0, T, b, L, 1 - S), t.scale(1 / A, 1 / I), t.rotate(-M), t.translate(-p, -v)) : t.arc(p, v, T, b, L, 1 - S), 1 == d && (e = g(b) * x + p, i = m(b) * _ + v), n = g(L) * x + p, r = m(L) * _ + v;
                                break;
                            case l.R:
                                e = n = s[d], i = r = s[d + 1], t.rect(s[d++], s[d++], s[d++], s[d++]);
                                break;
                            case l.Z:
                                t.closePath(), n = e, r = i
                        }
                    }
                }
            }, _.CMD = l, t.exports = _
        }, function (t, e) {
            var i = function (t) {
                this.colorStops = t || []
            };
            i.prototype = {
                constructor: i, addColorStop: function (t, e) {
                    this.colorStops.push({offset: t, color: e})
                }
            }, t.exports = i
        }, function (t, e, i) {
            function n(t, e, i, n) {
                if (!e)return t;
                var s = r(e[0]), l = o.isArray(s) && s.length || 1;
                i = i || [], n = n || "extra";
                for (var h = 0; h < l; h++)if (!t[h]) {
                    var u = i[h] || n + (h - i.length);
                    t[h] = a(e, h) ? {type: "ordinal", name: u} : u
                }
                return t
            }

            function r(t) {
                return o.isArray(t) ? t : o.isObject(t) ? t.value : t
            }

            var o = i(1), a = n.guessOrdinal = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++) {
                    var a = r(t[i]);
                    if (!o.isArray(a))return !1;
                    var a = a[e];
                    if (null != a && isFinite(a))return !1;
                    if (o.isString(a) && "-" !== a)return !0
                }
                return !1
            };
            t.exports = n
        }, function (t, e, i) {
            var n = i(1);
            t.exports = function (t) {
                for (var e = 0; e < t.length; e++)t[e][1] || (t[e][1] = t[e][0]);
                return function (e) {
                    for (var i = {}, r = 0; r < t.length; r++) {
                        var o = t[r][1];
                        if (!(e && n.indexOf(e, o) >= 0)) {
                            var a = this.getShallow(o);
                            null != a && (i[t[r][0]] = a)
                        }
                    }
                    return i
                }
            }
        }, function (t, e, i) {
            function n() {
                this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
            }

            var r = i(21), o = n.prototype;
            o.parse = function (t) {
                return t
            }, o.contain = function (t) {
                var e = this._extent;
                return t >= e[0] && t <= e[1]
            }, o.normalize = function (t) {
                var e = this._extent;
                return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
            }, o.scale = function (t) {
                var e = this._extent;
                return t * (e[1] - e[0]) + e[0]
            }, o.unionExtent = function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
            }, o.getExtent = function () {
                return this._extent.slice()
            }, o.setExtent = function (t, e) {
                var i = this._extent;
                isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
            }, o.getTicksLabels = function () {
                for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
                return t
            }, r.enableClassExtend(n), r.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
        }, function (t, e) {
            var i = 1;
            "undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
            var n = {debugMode: 0, devicePixelRatio: i};
            t.exports = n
        }, function (t, e, i) {
            var n = i(1), r = i(58), o = i(8), a = function (t) {
                t = t || {}, r.call(this, t);
                for (var e in t)t.hasOwnProperty(e) && (this[e] = t[e]);
                this._children = [], this.__storage = null, this.__dirty = !0
            };
            a.prototype = {
                constructor: a, isGroup: !0, type: "group", silent: !1, children: function () {
                    return this._children.slice()
                }, childAt: function (t) {
                    return this._children[t]
                }, childOfName: function (t) {
                    for (var e = this._children, i = 0; i < e.length; i++)if (e[i].name === t)return e[i]
                }, childCount: function () {
                    return this._children.length
                }, add: function (t) {
                    return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
                }, addBefore: function (t, e) {
                    if (t && t !== this && t.parent !== this && e && e.parent === this) {
                        var i = this._children, n = i.indexOf(e);
                        n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
                    }
                    return this
                }, _doAdd: function (t) {
                    t.parent && t.parent.remove(t), t.parent = this;
                    var e = this.__storage, i = this.__zr;
                    e && e !== t.__storage && (e.addToMap(t), t instanceof a && t.addChildrenToStorage(e)), i && i.refresh()
                }, remove: function (t) {
                    var e = this.__zr, i = this.__storage, r = this._children, o = n.indexOf(r, t);
                    return o < 0 ? this : (r.splice(o, 1), t.parent = null, i && (i.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(i)), e && e.refresh(), this)
                }, removeAll: function () {
                    var t, e, i = this._children, n = this.__storage;
                    for (e = 0; e < i.length; e++)t = i[e], n && (n.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(n)), t.parent = null;
                    return i.length = 0, this
                }, eachChild: function (t, e) {
                    for (var i = this._children, n = 0; n < i.length; n++) {
                        var r = i[n];
                        t.call(e, r, n)
                    }
                    return this
                }, traverse: function (t, e) {
                    for (var i = 0; i < this._children.length; i++) {
                        var n = this._children[i];
                        t.call(e, n), "group" === n.type && n.traverse(t, e)
                    }
                    return this
                }, addChildrenToStorage: function (t) {
                    for (var e = 0; e < this._children.length; e++) {
                        var i = this._children[e];
                        t.addToMap(i), i instanceof a && i.addChildrenToStorage(t)
                    }
                }, delChildrenFromStorage: function (t) {
                    for (var e = 0; e < this._children.length; e++) {
                        var i = this._children[e];
                        t.delFromMap(i.id), i instanceof a && i.delChildrenFromStorage(t)
                    }
                }, dirty: function () {
                    return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
                }, getBoundingRect: function (t) {
                    for (var e = null, i = new o(0, 0, 0, 0), n = t || this._children, r = [], a = 0; a < n.length; a++) {
                        var s = n[a];
                        if (!s.ignore && !s.invisible) {
                            var l = s.getBoundingRect(), h = s.getLocalTransform(r);
                            h ? (i.copy(l), i.applyTransform(h), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
                        }
                    }
                    return e || i
                }
            }, n.inherits(a, r), t.exports = a
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                for (var e = 0; e < t.length && null == t[e];)e++;
                return t[e]
            }

            function r(t) {
                var e = n(t);
                return null != e && !c.isArray(p(e))
            }

            function o(t, e, i) {
                t = t || [];
                var n = e.get("coordinateSystem"), o = m[n], a = f.get(n), s = o && o(t, e, i), v = s && s.dimensions;
                v || (v = a && a.dimensions || ["x", "y"], v = u(v, t, v.concat(["value"])));
                var y = s ? s.categoryIndex : -1, x = new h(v, e), _ = l(s, t), b = {}, w = y >= 0 && r(t) ? function (t, e, i, n) {
                    return d.isDataItemOption(t) && (x.hasItemOption = !0), n === y ? i : g(p(t), v[n])
                } : function (t, e, i, n) {
                    var r = p(t), o = g(r && r[n], v[n]);
                    d.isDataItemOption(t) && (x.hasItemOption = !0);
                    var a = s && s.categoryAxesModels;
                    return a && a[e] && "string" == typeof o && (b[e] = b[e] || a[e].getCategories(), o = c.indexOf(b[e], o), o < 0 && !isNaN(o) && (o = +o)), o
                };
                return x.hasItemOption = !1, x.initData(t, _, w), x
            }

            function a(t) {
                return "category" !== t && "time" !== t
            }

            function s(t) {
                return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
            }

            function l(t, e) {
                var i, n = [], r = t && t.dimensions[t.categoryIndex];
                if (r && (i = t.categoryAxesModels[r.name]), i) {
                    var o = i.getCategories();
                    if (o) {
                        var a = e.length;
                        if (c.isArray(e[0]) && e[0].length > 1) {
                            n = [];
                            for (var s = 0; s < a; s++)n[s] = o[e[s][t.categoryIndex || 0]]
                        } else n = o.slice(0)
                    }
                }
                return n
            }

            var h = i(14), u = i(30), c = i(1), d = i(7), f = i(23), p = d.getDataItemValue, g = d.converDataValue, m = {
                cartesian2d: function (t, e, i) {
                    var n = c.map(["xAxis", "yAxis"], function (t) {
                        return i.queryComponents({mainType: t, index: e.get(t + "Index"), id: e.get(t + "Id")})[0]
                    }), r = n[0], o = n[1], l = r.get("type"), h = o.get("type"), d = [{
                        name: "x",
                        type: s(l),
                        stackable: a(l)
                    }, {name: "y", type: s(h), stackable: a(h)}], f = "category" === l, p = "category" === h;
                    u(d, t, ["x", "y", "z"]);
                    var g = {};
                    return f && (g.x = r), p && (g.y = o), {
                        dimensions: d,
                        categoryIndex: f ? 0 : p ? 1 : -1,
                        categoryAxesModels: g
                    }
                }, polar: function (t, e, i) {
                    var n = i.queryComponents({
                        mainType: "polar",
                        index: e.get("polarIndex"),
                        id: e.get("polarId")
                    })[0], r = n.findAxisModel("angleAxis"), o = n.findAxisModel("radiusAxis"), l = o.get("type"), h = r.get("type"), c = [{
                        name: "radius",
                        type: s(l),
                        stackable: a(l)
                    }, {name: "angle", type: s(h), stackable: a(h)}], d = "category" === h, f = "category" === l;
                    u(c, t, ["radius", "angle", "value"]);
                    var p = {};
                    return f && (p.radius = o), d && (p.angle = r), {
                        dimensions: c,
                        categoryIndex: d ? 1 : f ? 0 : -1,
                        categoryAxesModels: p
                    }
                }, geo: function (t, e, i) {
                    return {dimensions: u([{name: "lng"}, {name: "lat"}], t, ["lng", "lat", "value"])}
                }
            };
            t.exports = o
        }, function (t, e, i) {
            "use strict";
            var n = i(3), r = i(1), o = i(2);
            i(54), i(106), o.extendComponentView({
                type: "grid", render: function (t, e) {
                    this.group.removeAll(), t.get("show") && this.group.add(new n.Rect({
                        shape: t.coordinateSystem.getRect(),
                        style: r.defaults({fill: t.get("backgroundColor")}, t.getItemStyle()),
                        silent: !0,
                        z2: -1
                    }))
                }
            }), o.registerPreprocessor(function (t) {
                t.xAxis && t.yAxis && !t.grid && (t.grid = {})
            })
        }, function (t, e, i) {
            function n(t) {
                t = t || {}, a.call(this, t);
                for (var e in t)t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
                this.style = new o(t.style), this._rect = null, this.__clipPaths = []
            }

            var r = i(1), o = i(64), a = i(58), s = i(75);
            n.prototype = {
                constructor: n,
                type: "displayable",
                __dirty: !0,
                invisible: !1,
                z: 0,
                z2: 0,
                zlevel: 0,
                draggable: !1,
                dragging: !1,
                silent: !1,
                culling: !1,
                cursor: "pointer",
                rectHover: !1,
                progressive: -1,
                beforeBrush: function (t) {
                },
                afterBrush: function (t) {
                },
                brush: function (t, e) {
                },
                getBoundingRect: function () {
                },
                contain: function (t, e) {
                    return this.rectContain(t, e)
                },
                traverse: function (t, e) {
                    t.call(e, this)
                },
                rectContain: function (t, e) {
                    var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
                    return n.contain(i[0], i[1])
                },
                dirty: function () {
                    this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
                },
                animateStyle: function (t) {
                    return this.animate("style", t)
                },
                attrKV: function (t, e) {
                    "style" !== t ? a.prototype.attrKV.call(this, t, e) : this.style.set(e)
                },
                setStyle: function (t, e) {
                    return this.style.set(t, e), this.dirty(!1), this
                },
                useStyle: function (t) {
                    return this.style = new o(t), this.dirty(!1), this
                }
            }, r.inherits(n, a), r.mixin(n, s), t.exports = n
        }, function (t, e, i) {
            var n = i(4), r = i(9), o = i(32), a = Math.floor, s = Math.ceil, l = n.getPrecisionSafe, h = n.round, u = o.extend({
                type: "interval",
                _interval: 0,
                setExtent: function (t, e) {
                    var i = this._extent;
                    isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
                },
                unionExtent: function (t) {
                    var e = this._extent;
                    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), u.prototype.setExtent.call(this, e[0], e[1])
                },
                getInterval: function () {
                    return this._interval || this.niceTicks(), this._interval
                },
                setInterval: function (t) {
                    this._interval = t, this._niceExtent = this._extent.slice()
                },
                getTicks: function () {
                    this._interval || this.niceTicks();
                    var t = this._interval, e = this._extent, i = [], n = 1e4;
                    if (t) {
                        var r = this._niceExtent, o = l(t) + 2;
                        e[0] < r[0] && i.push(e[0]);
                        for (var a = r[0]; a <= r[1];)if (i.push(a), a = h(a + t, o), i.length > n)return [];
                        e[1] > (i.length ? i[i.length - 1] : r[1]) && i.push(e[1])
                    }
                    return i
                },
                getTicksLabels: function () {
                    for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
                    return t
                },
                getLabel: function (t) {
                    return r.addCommas(t)
                },
                niceTicks: function (t) {
                    t = t || 5;
                    var e = this._extent, i = e[1] - e[0];
                    if (isFinite(i)) {
                        i < 0 && (i = -i, e.reverse());
                        var r = h(n.nice(i / t, !0), Math.max(l(e[0]), l(e[1])) + 2), o = l(r) + 2, u = [h(s(e[0] / r) * r, o), h(a(e[1] / r) * r, o)];
                        this._interval = r, this._niceExtent = u
                    }
                },
                niceExtent: function (t, e, i) {
                    var n = this._extent;
                    if (n[0] === n[1])if (0 !== n[0]) {
                        var r = n[0];
                        i ? n[0] -= r / 2 : (n[1] += r / 2, n[0] -= r / 2)
                    } else n[1] = 1;
                    var o = n[1] - n[0];
                    isFinite(o) || (n[0] = 0, n[1] = 1), this.niceTicks(t);
                    var l = this._interval;
                    e || (n[0] = h(a(n[0] / l) * l)), i || (n[1] = h(s(n[1] / l) * l))
                }
            });
            u.create = function () {
                return new u
            }, t.exports = u
        }, function (t, e, i) {
            function n(t) {
                this.group = new o.Group, this._symbolCtor = t || a
            }

            function r(t, e, i) {
                var n = t.getItemLayout(e);
                return n && !isNaN(n[0]) && !isNaN(n[1]) && !(i && i(e)) && "none" !== t.getItemVisual(e, "symbol")
            }

            var o = i(3), a = i(49), s = n.prototype;
            s.updateData = function (t, e) {
                var i = this.group, n = t.hostModel, a = this._data, s = this._symbolCtor, l = {
                    itemStyle: n.getModel("itemStyle.normal").getItemStyle(["color"]),
                    hoverItemStyle: n.getModel("itemStyle.emphasis").getItemStyle(),
                    symbolRotate: n.get("symbolRotate"),
                    symbolOffset: n.get("symbolOffset"),
                    hoverAnimation: n.get("hoverAnimation"),
                    labelModel: n.getModel("label.normal"),
                    hoverLabelModel: n.getModel("label.emphasis")
                };
                t.diff(a).add(function (n) {
                    var o = t.getItemLayout(n);
                    if (r(t, n, e)) {
                        var a = new s(t, n, l);
                        a.attr("position", o), t.setItemGraphicEl(n, a), i.add(a)
                    }
                }).update(function (h, u) {
                    var c = a.getItemGraphicEl(u), d = t.getItemLayout(h);
                    return r(t, h, e) ? (c ? (c.updateData(t, h, l), o.updateProps(c, {position: d}, n)) : (c = new s(t, h), c.attr("position", d)), i.add(c), void t.setItemGraphicEl(h, c)) : void i.remove(c)
                }).remove(function (t) {
                    var e = a.getItemGraphicEl(t);
                    e && e.fadeOut(function () {
                        i.remove(e)
                    })
                }).execute(), this._data = t
            }, s.updateLayout = function () {
                var t = this._data;
                t && t.eachItemGraphicEl(function (e, i) {
                    var n = t.getItemLayout(i);
                    e.attr("position", n)
                })
            }, s.remove = function (t) {
                var e = this.group, i = this._data;
                i && (t ? i.eachItemGraphicEl(function (t) {
                    t.fadeOut(function () {
                        e.remove(t)
                    })
                }) : e.removeAll())
            }, t.exports = n
        }, function (t, e, i) {
            function n(t) {
                var e = {};
                return c(["start", "end", "startValue", "endValue", "throttle"], function (i) {
                    t.hasOwnProperty(i) && (e[i] = t[i])
                }), e
            }

            function r(t, e, i, n) {
                null != i[e] && null == i[t] && (n[t] = null)
            }

            var o = i(1), a = i(11), s = i(2), l = i(7), h = i(110), u = i(180), c = o.each, d = h.eachAxisDim, f = s.extendComponentModel({
                type: "dataZoom",
                dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "series"],
                defaultOption: {
                    zlevel: 0,
                    z: 4,
                    orient: null,
                    xAxisIndex: null,
                    yAxisIndex: null,
                    filterMode: "filter",
                    throttle: null,
                    start: 0,
                    end: 100,
                    startValue: null,
                    endValue: null
                },
                init: function (t, e, i) {
                    this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0;
                    var r = n(t);
                    this.mergeDefaultAndTheme(t, i), this.doInit(r)
                },
                mergeOption: function (t) {
                    var e = n(t);
                    o.merge(this.option, t, !0), this.doInit(e)
                },
                doInit: function (t) {
                    var e = this.option;
                    a.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), r("start", "startValue", t, e), r("end", "endValue", t, e), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
                },
                _giveAxisProxies: function () {
                    var t = this._axisProxies;
                    this.eachTargetAxis(function (e, i, n, r) {
                        var o = this.dependentModels[e.axis][i], a = o.__dzAxisProxy || (o.__dzAxisProxy = new u(e.name, i, this, r));
                        t[e.name + "_" + i] = a
                    }, this)
                },
                _resetTarget: function () {
                    var t = this.option, e = this._judgeAutoMode();
                    d(function (e) {
                        var i = e.axisIndex;
                        t[i] = l.normalizeToArray(t[i])
                    }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
                },
                _judgeAutoMode: function () {
                    var t = this.option, e = !1;
                    d(function (i) {
                        null != t[i.axisIndex] && (e = !0)
                    }, this);
                    var i = t.orient;
                    return null == i && e ? "orient" : e ? void 0 : (null == i && (t.orient = "horizontal"), "axisIndex")
                },
                _autoSetAxisIndex: function () {
                    var t = !0, e = this.get("orient", !0), i = this.option;
                    if (t) {
                        var n = "vertical" === e ? {dim: "y", axisIndex: "yAxisIndex", axis: "yAxis"} : {
                            dim: "x",
                            axisIndex: "xAxisIndex",
                            axis: "xAxis"
                        };
                        this.dependentModels[n.axis].length && (i[n.axisIndex] = [0], t = !1)
                    }
                    t && d(function (e) {
                        if (t) {
                            var n = [], r = this.dependentModels[e.axis];
                            if (r.length && !n.length)for (var o = 0, a = r.length; o < a; o++)"category" === r[o].get("type") && n.push(o);
                            i[e.axisIndex] = n, n.length && (t = !1)
                        }
                    }, this), t && this.ecModel.eachSeries(function (t) {
                        this._isSeriesHasAllAxesTypeOf(t, "value") && d(function (e) {
                            var n = i[e.axisIndex], r = t.get(e.axisIndex), a = t.get(e.axisId), s = t.ecModel.queryComponents({
                                mainType: e.axis,
                                index: r,
                                id: a
                            })[0];
                            r = s.componentIndex, o.indexOf(n, r) < 0 && n.push(r)
                        })
                    }, this)
                },
                _autoSetOrient: function () {
                    var t;
                    this.eachTargetAxis(function (e) {
                        !t && (t = e.name)
                    }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
                },
                _isSeriesHasAllAxesTypeOf: function (t, e) {
                    var i = !0;
                    return d(function (n) {
                        var r = t.get(n.axisIndex), o = this.dependentModels[n.axis][r];
                        o && o.get("type") === e || (i = !1)
                    }, this), i
                },
                _setDefaultThrottle: function (t) {
                    if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                        var e = this.ecModel.option;
                        this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
                    }
                },
                getFirstTargetAxisModel: function () {
                    var t;
                    return d(function (e) {
                        if (null == t) {
                            var i = this.get(e.axisIndex);
                            i.length && (t = this.dependentModels[e.axis][i[0]])
                        }
                    }, this), t
                },
                eachTargetAxis: function (t, e) {
                    var i = this.ecModel;
                    d(function (n) {
                        c(this.get(n.axisIndex), function (r) {
                            t.call(e, n, r, this, i)
                        }, this)
                    }, this)
                },
                getAxisProxy: function (t, e) {
                    return this._axisProxies[t + "_" + e]
                },
                setRawRange: function (t) {
                    c(["start", "end", "startValue", "endValue"], function (e) {
                        this.option[e] = t[e]
                    }, this)
                },
                getPercentRange: function () {
                    var t = this.findRepresentativeAxisProxy();
                    if (t)return t.getDataPercentWindow()
                },
                getValueRange: function (t, e) {
                    if (null != t || null != e)return this.getAxisProxy(t, e).getDataValueWindow();
                    var i = this.findRepresentativeAxisProxy();
                    return i ? i.getDataValueWindow() : void 0
                },
                findRepresentativeAxisProxy: function () {
                    var t = this._axisProxies;
                    for (var e in t)if (t.hasOwnProperty(e) && t[e].hostedBy(this))return t[e];
                    for (var e in t)if (t.hasOwnProperty(e) && !t[e].hostedBy(this))return t[e]
                }
            });
            t.exports = f
        }, function (t, e, i) {
            var n = i(57);
            t.exports = n.extend({
                type: "dataZoom", render: function (t, e, i, n) {
                    this.dataZoomModel = t, this.ecModel = e, this.api = i
                }, getTargetInfo: function () {
                    function t(t, e, i, n) {
                        for (var r, o = 0; o < i.length; o++)if (i[o].model === t) {
                            r = i[o];
                            break
                        }
                        r || i.push(r = {model: t, axisModels: [], coordIndex: n}), r.axisModels.push(e)
                    }

                    var e = this.dataZoomModel, i = this.ecModel, n = [], r = [], o = [];
                    return e.eachTargetAxis(function (e, a) {
                        var s = i.getComponent(e.axis, a);
                        if (s) {
                            o.push(s);
                            var l, h = e.axis;
                            "xAxis" === h || "yAxis" === h ? l = "grid" : "angleAxis" !== h && "radiusAxis" !== h || (l = "polar");
                            var u = l ? i.queryComponents({
                                mainType: l,
                                index: s.get(l + "Index"),
                                id: s.get(l + "Id")
                            })[0] : null;
                            null != u && t(u, s, "grid" === l ? n : r, u.componentIndex)
                        }
                    }, this), {cartesians: n, polars: r, axisModels: o}
                }
            })
        }, function (t, e, i) {
            function n(t, e) {
                var i = t[1] - t[0], n = e, r = i / n / 2;
                t[0] += r, t[1] -= r
            }

            var r = i(4), o = r.linearMap, a = i(1), s = [0, 1], l = function (t, e, i) {
                this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
            };
            l.prototype = {
                constructor: l, contain: function (t) {
                    var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
                    return t >= i && t <= n
                }, containData: function (t) {
                    return this.contain(this.dataToCoord(t))
                }, getExtent: function () {
                    var t = this._extent.slice();
                    return t
                }, getPixelPrecision: function (t) {
                    return r.getPixelPrecision(t || this.scale.getExtent(), this._extent)
                }, setExtent: function (t, e) {
                    var i = this._extent;
                    i[0] = t, i[1] = e
                }, dataToCoord: function (t, e) {
                    var i = this._extent, r = this.scale;
                    return t = r.normalize(t), this.onBand && "ordinal" === r.type && (i = i.slice(), n(i, r.count())), o(t, s, i, e)
                }, coordToData: function (t, e) {
                    var i = this._extent, r = this.scale;
                    this.onBand && "ordinal" === r.type && (i = i.slice(), n(i, r.count()));
                    var a = o(t, i, s, e);
                    return this.scale.scale(a)
                }, getTicksCoords: function (t) {
                    if (this.onBand && !t) {
                        for (var e = this.getBands(), i = [], n = 0; n < e.length; n++)i.push(e[n][0]);
                        return e[n - 1] && i.push(e[n - 1][1]), i
                    }
                    return a.map(this.scale.getTicks(), this.dataToCoord, this)
                }, getLabelsCoords: function () {
                    return a.map(this.scale.getTicks(), this.dataToCoord, this)
                }, getBands: function () {
                    for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], r = t[1], o = r - n, a = 0; a < i; a++)e.push([o * a / i + n, o * (a + 1) / i + n]);
                    return e
                }, getBandWidth: function () {
                    var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
                    0 === i && (i = 1);
                    var n = Math.abs(t[1] - t[0]);
                    return Math.abs(n) / i
                }
            }, t.exports = l
        }, function (t, e, i) {
            var n = i(1), r = i(21), o = r.parseClassType, a = 0, s = {}, l = "_";
            s.getUID = function (t) {
                return [t || "", a++, Math.random()].join(l)
            }, s.enableSubTypeDefaulter = function (t) {
                var e = {};
                return t.registerSubTypeDefaulter = function (t, i) {
                    t = o(t), e[t.main] = i
                }, t.determineSubType = function (i, n) {
                    var r = n.type;
                    if (!r) {
                        var a = o(i).main;
                        t.hasSubTypes(i) && e[a] && (r = e[a](n))
                    }
                    return r
                }, t
            }, s.enableTopologicalTravel = function (t, e) {
                function i(t) {
                    var i = {}, a = [];
                    return n.each(t, function (s) {
                        var l = r(i, s), h = l.originalDeps = e(s), u = o(h, t);
                        l.entryCount = u.length, 0 === l.entryCount && a.push(s), n.each(u, function (t) {
                            n.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                            var e = r(i, t);
                            n.indexOf(e.successor, t) < 0 && e.successor.push(s)
                        })
                    }), {graph: i, noEntryList: a}
                }

                function r(t, e) {
                    return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
                }

                function o(t, e) {
                    var i = [];
                    return n.each(t, function (t) {
                        n.indexOf(e, t) >= 0 && i.push(t)
                    }), i
                }

                t.topologicalTravel = function (t, e, r, o) {
                    function a(t) {
                        h[t].entryCount--, 0 === h[t].entryCount && u.push(t)
                    }

                    function s(t) {
                        c[t] = !0, a(t)
                    }

                    if (t.length) {
                        var l = i(e), h = l.graph, u = l.noEntryList, c = {};
                        for (n.each(t, function (t) {
                            c[t] = !0
                        }); u.length;) {
                            var d = u.pop(), f = h[d], p = !!c[d];
                            p && (r.call(o, d, f.originalDeps.slice()), delete c[d]), n.each(f.successor, p ? s : a)
                        }
                        n.each(c, function () {
                            throw new Error("Circle dependency may exists")
                        })
                    }
                }
            }, t.exports = s
        }, function (t, e) {
            function i(t) {
                for (var e = 0; t >= u;)e |= 1 & t, t >>= 1;
                return t + e
            }

            function n(t, e, i, n) {
                var o = e + 1;
                if (o === i)return 1;
                if (n(t[o++], t[e]) < 0) {
                    for (; o < i && n(t[o], t[o - 1]) < 0;)o++;
                    r(t, e, o)
                } else for (; o < i && n(t[o], t[o - 1]) >= 0;)o++;
                return o - e
            }

            function r(t, e, i) {
                for (i--; e < i;) {
                    var n = t[e];
                    t[e++] = t[i], t[i--] = n
                }
            }

            function o(t, e, i, n, r) {
                for (n === e && n++; n < i; n++) {
                    for (var o, a = t[n], s = e, l = n; s < l;)o = s + l >>> 1, r(a, t[o]) < 0 ? l = o : s = o + 1;
                    var h = n - s;
                    switch (h) {
                        case 3:
                            t[s + 3] = t[s + 2];
                        case 2:
                            t[s + 2] = t[s + 1];
                        case 1:
                            t[s + 1] = t[s];
                            break;
                        default:
                            for (; h > 0;)t[s + h] = t[s + h - 1], h--
                    }
                    t[s] = a
                }
            }

            function a(t, e, i, n, r, o) {
                var a = 0, s = 0, l = 1;
                if (o(t, e[i + r]) > 0) {
                    for (s = n - r; l < s && o(t, e[i + r + l]) > 0;)a = l, l = (l << 1) + 1, l <= 0 && (l = s);
                    l > s && (l = s), a += r, l += r
                } else {
                    for (s = r + 1; l < s && o(t, e[i + r - l]) <= 0;)a = l, l = (l << 1) + 1, l <= 0 && (l = s);
                    l > s && (l = s);
                    var h = a;
                    a = r - l, l = r - h
                }
                for (a++; a < l;) {
                    var u = a + (l - a >>> 1);
                    o(t, e[i + u]) > 0 ? a = u + 1 : l = u
                }
                return l
            }

            function s(t, e, i, n, r, o) {
                var a = 0, s = 0, l = 1;
                if (o(t, e[i + r]) < 0) {
                    for (s = r + 1; l < s && o(t, e[i + r - l]) < 0;)a = l, l = (l << 1) + 1, l <= 0 && (l = s);
                    l > s && (l = s);
                    var h = a;
                    a = r - l, l = r - h
                } else {
                    for (s = n - r; l < s && o(t, e[i + r + l]) >= 0;)a = l, l = (l << 1) + 1, l <= 0 && (l = s);
                    l > s && (l = s), a += r, l += r
                }
                for (a++; a < l;) {
                    var u = a + (l - a >>> 1);
                    o(t, e[i + u]) < 0 ? l = u : a = u + 1
                }
                return l
            }

            function l(t, e) {
                function i(t, e) {
                    u[y] = t, f[y] = e, y += 1
                }

                function n() {
                    for (; y > 1;) {
                        var t = y - 2;
                        if (t >= 1 && f[t - 1] <= f[t] + f[t + 1] || t >= 2 && f[t - 2] <= f[t] + f[t - 1])f[t - 1] < f[t + 1] && t--; else if (f[t] > f[t + 1])break;
                        o(t)
                    }
                }

                function r() {
                    for (; y > 1;) {
                        var t = y - 2;
                        t > 0 && f[t - 1] < f[t + 1] && t--, o(t)
                    }
                }

                function o(i) {
                    var n = u[i], r = f[i], o = u[i + 1], c = f[i + 1];
                    f[i] = r + c, i === y - 3 && (u[i + 1] = u[i + 2], f[i + 1] = f[i + 2]), y--;
                    var d = s(t[o], t, n, r, 0, e);
                    n += d, r -= d, 0 !== r && (c = a(t[n + r - 1], t, o, c, c - 1, e), 0 !== c && (r <= c ? l(n, r, o, c) : h(n, r, o, c)))
                }

                function l(i, n, r, o) {
                    var l = 0;
                    for (l = 0; l < n; l++)x[l] = t[i + l];
                    var h = 0, u = r, d = i;
                    if (t[d++] = t[u++], 0 !== --o) {
                        if (1 === n) {
                            for (l = 0; l < o; l++)t[d + l] = t[u + l];
                            return void(t[d + o] = x[h])
                        }
                        for (var f, g, m, v = p; ;) {
                            f = 0, g = 0, m = !1;
                            do if (e(t[u], x[h]) < 0) {
                                if (t[d++] = t[u++], g++, f = 0, 0 === --o) {
                                    m = !0;
                                    break
                                }
                            } else if (t[d++] = x[h++], f++, g = 0, 1 === --n) {
                                m = !0;
                                break
                            } while ((f | g) < v);
                            if (m)break;
                            do {
                                if (f = s(t[u], x, h, n, 0, e), 0 !== f) {
                                    for (l = 0; l < f; l++)t[d + l] = x[h + l];
                                    if (d += f, h += f, n -= f, n <= 1) {
                                        m = !0;
                                        break
                                    }
                                }
                                if (t[d++] = t[u++], 0 === --o) {
                                    m = !0;
                                    break
                                }
                                if (g = a(x[h], t, u, o, 0, e), 0 !== g) {
                                    for (l = 0; l < g; l++)t[d + l] = t[u + l];
                                    if (d += g, u += g, o -= g, 0 === o) {
                                        m = !0;
                                        break
                                    }
                                }
                                if (t[d++] = x[h++], 1 === --n) {
                                    m = !0;
                                    break
                                }
                                v--
                            } while (f >= c || g >= c);
                            if (m)break;
                            v < 0 && (v = 0), v += 2
                        }
                        if (p = v, p < 1 && (p = 1), 1 === n) {
                            for (l = 0; l < o; l++)t[d + l] = t[u + l];
                            t[d + o] = x[h]
                        } else {
                            if (0 === n)throw new Error;
                            for (l = 0; l < n; l++)t[d + l] = x[h + l]
                        }
                    } else for (l = 0; l < n; l++)t[d + l] = x[h + l]
                }

                function h(i, n, r, o) {
                    var l = 0;
                    for (l = 0; l < o; l++)x[l] = t[r + l];
                    var h = i + n - 1, u = o - 1, d = r + o - 1, f = 0, g = 0;
                    if (t[d--] = t[h--], 0 !== --n) {
                        if (1 === o) {
                            for (d -= n, h -= n, g = d + 1, f = h + 1, l = n - 1; l >= 0; l--)t[g + l] = t[f + l];
                            return void(t[d] = x[u])
                        }
                        for (var m = p; ;) {
                            var v = 0, y = 0, _ = !1;
                            do if (e(x[u], t[h]) < 0) {
                                if (t[d--] = t[h--], v++, y = 0, 0 === --n) {
                                    _ = !0;
                                    break
                                }
                            } else if (t[d--] = x[u--], y++, v = 0, 1 === --o) {
                                _ = !0;
                                break
                            } while ((v | y) < m);
                            if (_)break;
                            do {
                                if (v = n - s(x[u], t, i, n, n - 1, e), 0 !== v) {
                                    for (d -= v, h -= v, n -= v, g = d + 1, f = h + 1, l = v - 1; l >= 0; l--)t[g + l] = t[f + l];
                                    if (0 === n) {
                                        _ = !0;
                                        break
                                    }
                                }
                                if (t[d--] = x[u--], 1 === --o) {
                                    _ = !0;
                                    break
                                }
                                if (y = o - a(t[h], x, 0, o, o - 1, e), 0 !== y) {
                                    for (d -= y, u -= y, o -= y, g = d + 1, f = u + 1, l = 0; l < y; l++)t[g + l] = x[f + l];
                                    if (o <= 1) {
                                        _ = !0;
                                        break
                                    }
                                }
                                if (t[d--] = t[h--], 0 === --n) {
                                    _ = !0;
                                    break
                                }
                                m--
                            } while (v >= c || y >= c);
                            if (_)break;
                            m < 0 && (m = 0), m += 2
                        }
                        if (p = m, p < 1 && (p = 1), 1 === o) {
                            for (d -= n, h -= n, g = d + 1, f = h + 1, l = n - 1; l >= 0; l--)t[g + l] = t[f + l];
                            t[d] = x[u]
                        } else {
                            if (0 === o)throw new Error;
                            for (f = d - (o - 1), l = 0; l < o; l++)t[f + l] = x[l]
                        }
                    } else for (f = d - (o - 1), l = 0; l < o; l++)t[f + l] = x[l]
                }

                var u, f, p = c, g = 0, m = d, v = 0, y = 0;
                g = t.length, g < 2 * d && (m = g >>> 1);
                var x = [];
                v = g < 120 ? 5 : g < 1542 ? 10 : g < 119151 ? 19 : 40, u = [], f = [], this.mergeRuns = n, this.forceMergeRuns = r, this.pushRun = i
            }

            function h(t, e, r, a) {
                r || (r = 0), a || (a = t.length);
                var s = a - r;
                if (!(s < 2)) {
                    var h = 0;
                    if (s < u)return h = n(t, r, a, e), void o(t, r, a, r + h, e);
                    var c = new l(t, e), d = i(s);
                    do {
                        if (h = n(t, r, a, e), h < d) {
                            var f = s;
                            f > d && (f = d), o(t, r, r + f, r + h, e), h = f
                        }
                        c.pushRun(r, h), c.mergeRuns(), s -= h, r += h
                    } while (0 !== s);
                    c.forceMergeRuns()
                }
            }

            var u = 32, c = 7, d = 256;
            t.exports = h
        }, function (t, e) {
            "use strict";
            function i(t) {
                return t
            }

            function n(t, e, n, r) {
                this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = r || i
            }

            function r(t, e, i, n) {
                for (var r = 0; r < t.length; r++) {
                    var o = n(t[r], r), a = e[o];
                    null == a ? (i.push(o), e[o] = r) : (a.length || (e[o] = a = [a]), a.push(r))
                }
            }

            n.prototype = {
                constructor: n, add: function (t) {
                    return this._add = t, this
                }, update: function (t) {
                    return this._update = t, this
                }, remove: function (t) {
                    return this._remove = t, this
                }, execute: function () {
                    var t, e = this._old, i = this._new, n = this._oldKeyGetter, o = this._newKeyGetter, a = {}, s = {}, l = [], h = [];
                    for (r(e, a, l, n), r(i, s, h, o), t = 0; t < e.length; t++) {
                        var u = l[t], c = s[u];
                        if (null != c) {
                            var d = c.length;
                            d ? (1 === d && (s[u] = null), c = c.unshift()) : s[u] = null, this._update && this._update(c, t)
                        } else this._remove && this._remove(t)
                    }
                    for (var t = 0; t < h.length; t++) {
                        var u = h[t];
                        if (s.hasOwnProperty(u)) {
                            var c = s[u];
                            if (null == c)continue;
                            if (c.length)for (var f = 0, d = c.length; f < d; f++)this._add && this._add(c[f]); else this._add && this._add(c)
                        }
                    }
                }
            }, t.exports = n
        }, function (t, e) {
            t.exports = function (t, e, i, n, r) {
                n.eachRawSeriesByType(t, function (t) {
                    var r = t.getData(), o = t.get("symbol") || e, a = t.get("symbolSize");
                    r.setVisual({
                        legendSymbol: i || o, symbol: o, symbolSize: a
                    }), n.isSeriesFiltered(t) || ("function" == typeof a && r.each(function (e) {
                        var i = t.getRawValue(e), n = t.getDataParams(e);
                        r.setItemVisual(e, "symbolSize", a(i, n))
                    }), r.each(function (t) {
                        var e = r.getItemModel(t), i = e.getShallow("symbol", !0), n = e.getShallow("symbolSize", !0);
                        null != i && r.setItemVisual(t, "symbol", i), null != n && r.setItemVisual(t, "symbolSize", n)
                    }))
                })
            }
        }, function (t, e, i) {
            var n = i(33);
            t.exports = function () {
                if (0 !== n.debugMode)if (1 == n.debugMode)for (var t in arguments)throw new Error(arguments[t]); else if (n.debugMode > 1)for (var t in arguments)console.log(arguments[t])
            }
        }, function (t, e, i) {
            function n(t) {
                r.call(this, t)
            }

            var r = i(37), o = i(8), a = i(1), s = i(150), l = new s(50);
            n.prototype = {
                constructor: n, type: "image", brush: function (t, e) {
                    var i, n = this.style, r = n.image;
                    if (n.bind(t, this, e), i = "string" == typeof r ? this._image : r, !i && r) {
                        var o = l.get(r);
                        if (!o)return i = new Image, i.onload = function () {
                            i.onload = null;
                            for (var t = 0; t < o.pending.length; t++)o.pending[t].dirty()
                        }, o = {image: i, pending: [this]}, i.src = r, l.put(r, o), void(this._image = i);
                        if (i = o.image, this._image = i, !i.width || !i.height)return void o.pending.push(this)
                    }
                    if (i) {
                        var a = n.width || i.width, s = n.height || i.height, h = n.x || 0, u = n.y || 0;
                        if (!i.width || !i.height)return;
                        if (this.setTransform(t), n.sWidth && n.sHeight) {
                            var c = n.sx || 0, d = n.sy || 0;
                            t.drawImage(i, c, d, n.sWidth, n.sHeight, h, u, a, s)
                        } else if (n.sx && n.sy) {
                            var c = n.sx, d = n.sy, f = a - c, p = s - d;
                            t.drawImage(i, c, d, f, p, h, u, a, s)
                        } else t.drawImage(i, h, u, a, s);
                        null == n.width && (n.width = a), null == n.height && (n.height = s), this.restoreTransform(t), null != n.text && this.drawRectText(t, this.getBoundingRect())
                    }
                }, getBoundingRect: function () {
                    var t = this.style;
                    return this._rect || (this._rect = new o(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
                }
            }, a.inherits(n, r), t.exports = n
        }, function (t, e, i) {
            function n(t) {
                return t = t instanceof Array ? t.slice() : [+t, +t], t[0] /= 2, t[1] /= 2, t
            }

            function r(t, e, i) {
                l.Group.call(this), this.updateData(t, e, i)
            }

            function o(t, e) {
                this.parent.drift(t, e)
            }

            var a = i(1), s = i(26), l = i(3), h = i(4), u = r.prototype;
            u._createSymbol = function (t, e, i) {
                this.removeAll();
                var r = e.hostModel, a = e.getItemVisual(i, "color"), h = s.createSymbol(t, -1, -1, 2, 2, a);
                h.attr({z2: 100, culling: !0, scale: [0, 0]}), h.drift = o;
                var u = n(e.getItemVisual(i, "symbolSize"));
                l.initProps(h, {scale: u}, r, i), this._symbolType = t, this.add(h)
            }, u.stopSymbolAnimation = function (t) {
                this.childAt(0).stopAnimation(t)
            }, u.getSymbolPath = function () {
                return this.childAt(0)
            }, u.getScale = function () {
                return this.childAt(0).scale
            }, u.highlight = function () {
                this.childAt(0).trigger("emphasis")
            }, u.downplay = function () {
                this.childAt(0).trigger("normal")
            }, u.setZ = function (t, e) {
                var i = this.childAt(0);
                i.zlevel = t, i.z = e
            }, u.setDraggable = function (t) {
                var e = this.childAt(0);
                e.draggable = t, e.cursor = t ? "move" : "pointer"
            }, u.updateData = function (t, e, i) {
                this.silent = !1;
                var r = t.getItemVisual(e, "symbol") || "circle", o = t.hostModel, a = n(t.getItemVisual(e, "symbolSize"));
                if (r !== this._symbolType)this._createSymbol(r, t, e); else {
                    var s = this.childAt(0);
                    l.updateProps(s, {scale: a}, o, e)
                }
                this._updateCommon(t, e, a, i), this._seriesModel = o
            };
            var c = ["itemStyle", "normal"], d = ["itemStyle", "emphasis"], f = ["label", "normal"], p = ["label", "emphasis"];
            u._updateCommon = function (t, e, i, r) {
                var o = this.childAt(0), s = t.hostModel, u = t.getItemVisual(e, "color");
                "image" !== o.type && o.useStyle({strokeNoScale: !0}), r = r || null;
                var g = r && r.itemStyle, m = r && r.hoverItemStyle, v = r && r.symbolRotate, y = r && r.symbolOffset, x = r && r.labelModel, _ = r && r.hoverLabelModel, b = r && r.hoverAnimation;
                if (!r || t.hasItemOption) {
                    var w = t.getItemModel(e);
                    g = w.getModel(c).getItemStyle(["color"]), m = w.getModel(d).getItemStyle(), v = w.getShallow("symbolRotate"), y = w.getShallow("symbolOffset"), x = w.getModel(f), _ = w.getModel(p), b = w.getShallow("hoverAnimation")
                } else m = a.extend({}, m);
                var M = o.style;
                o.attr("rotation", (v || 0) * Math.PI / 180 || 0), y && o.attr("position", [h.parsePercent(y[0], i[0]), h.parsePercent(y[1], i[1])]), o.setColor(u), o.setStyle(g);
                var S = t.getItemVisual(e, "opacity");
                null != S && (M.opacity = S);
                for (var T, A, I = t.dimensions.slice(); I.length && (T = I.pop(), A = t.getDimensionInfo(T).type, "ordinal" === A || "time" === A););
                null != T && x.getShallow("show") ? (l.setText(M, x, u), M.text = a.retrieve(s.getFormattedLabel(e, "normal"), t.get(T, e))) : M.text = "", null != T && _.getShallow("show") ? (l.setText(m, _, u), m.text = a.retrieve(s.getFormattedLabel(e, "emphasis"), t.get(T, e))) : m.text = "";
                var C = n(t.getItemVisual(e, "symbolSize"));
                if (o.off("mouseover").off("mouseout").off("emphasis").off("normal"), o.hoverStyle = m, l.setHoverStyle(o), b && s.ifEnableAnimation()) {
                    var L = function () {
                        var t = C[1] / C[0];
                        this.animateTo({scale: [Math.max(1.1 * C[0], C[0] + 3), Math.max(1.1 * C[1], C[1] + 3 * t)]}, 400, "elasticOut")
                    }, P = function () {
                        this.animateTo({scale: C}, 400, "elasticOut")
                    };
                    o.on("mouseover", L).on("mouseout", P).on("emphasis", L).on("normal", P)
                }
            }, u.fadeOut = function (t) {
                var e = this.childAt(0);
                this.silent = !0, e.style.text = "", l.updateProps(e, {scale: [0, 0]}, this._seriesModel, this.dataIndex, t)
            }, a.inherits(r, l.Group), t.exports = r
        }, function (t, e, i) {
            function n(t) {
                var e = {componentType: t.mainType};
                return e[t.mainType + "Index"] = t.componentIndex, e
            }

            function r(t, e, i) {
                var n, r, o = d(e - t.rotation);
                return f(o) ? (r = i > 0 ? "top" : "bottom", n = "center") : f(o - v) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = o > 0 && o < v ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                    rotation: o,
                    textAlign: n,
                    verticalAlign: r
                }
            }

            function o(t, e, i, n) {
                var r, o, a = d(i - t.rotation), s = n[0] > n[1], l = "start" === e && !s || "start" !== e && s;
                return f(a - v / 2) ? (o = l ? "bottom" : "top", r = "center") : f(a - 1.5 * v) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = a < 1.5 * v && a > v / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
                    rotation: a,
                    textAlign: r,
                    verticalAlign: o
                }
            }

            function a(t) {
                var e = t.get("tooltip");
                return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
            }

            var s = i(1), l = i(9), h = i(3), u = i(10), c = i(4), d = c.remRadian, f = c.isRadianAroundZero, p = i(5), g = p.applyTransform, m = s.retrieve, v = Math.PI, y = function (t, e) {
                this.opt = e, this.axisModel = t, s.defaults(e, {
                    labelOffset: 0,
                    nameDirection: 1,
                    tickDirection: 1,
                    labelDirection: 1,
                    silent: !0
                }), this.group = new h.Group;
                var i = new h.Group({position: e.position.slice(), rotation: e.rotation});
                i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
            };
            y.prototype = {
                constructor: y, hasBuilder: function (t) {
                    return !!x[t]
                }, add: function (t) {
                    x[t].call(this)
                }, getGroup: function () {
                    return this.group
                }
            };
            var x = {
                axisLine: function () {
                    var t = this.opt, e = this.axisModel;
                    if (e.get("axisLine.show")) {
                        var i = this.axisModel.axis.getExtent(), n = this._transform, r = [i[0], 0], o = [i[1], 0];
                        n && (g(r, r, n), g(o, o, n)), this.group.add(new h.Line(h.subPixelOptimizeLine({
                            anid: "line",
                            shape: {x1: r[0], y1: r[1], x2: o[0], y2: o[1]},
                            style: s.extend({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle()),
                            strokeContainThreshold: t.strokeContainThreshold || 5,
                            silent: !0,
                            z2: 1
                        })))
                    }
                }, axisTick: function () {
                    var t = this.axisModel;
                    if (t.get("axisTick.show"))for (var e = t.axis, i = t.getModel("axisTick"), n = this.opt, r = i.getModel("lineStyle"), o = i.get("length"), a = b(i, n.labelInterval), l = e.getTicksCoords(i.get("alignWithLabel")), u = e.scale.getTicks(), c = [], d = [], f = this._transform, p = 0; p < l.length; p++)if (!_(e, p, a)) {
                        var m = l[p];
                        c[0] = m, c[1] = 0, d[0] = m, d[1] = n.tickDirection * o, f && (g(c, c, f), g(d, d, f)), this.group.add(new h.Line(h.subPixelOptimizeLine({
                            anid: "tick_" + u[p],
                            shape: {x1: c[0], y1: c[1], x2: d[0], y2: d[1]},
                            style: s.defaults(r.getLineStyle(), {stroke: t.get("axisLine.lineStyle.color")}),
                            z2: 2,
                            silent: !0
                        })))
                    }
                }, axisLabel: function () {
                    function t(t, e) {
                        var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
                        if (i && n)return i.applyTransform(t.getLocalTransform()), n.applyTransform(e.getLocalTransform()), i.intersect(n)
                    }

                    var e = this.opt, i = this.axisModel, o = m(e.axisLabelShow, i.get("axisLabel.show"));
                    if (o) {
                        var s = i.axis, l = i.getModel("axisLabel"), c = l.getModel("textStyle"), d = l.get("margin"), f = s.scale.getTicks(), p = i.getFormattedLabels(), g = m(e.labelRotation, l.get("rotate")) || 0;
                        g = g * v / 180;
                        for (var y = r(e, g, e.labelDirection), x = i.get("data"), b = [], w = a(i), M = i.get("triggerEvent"), S = 0; S < f.length; S++)if (!_(s, S, e.labelInterval)) {
                            var T = c;
                            x && x[S] && x[S].textStyle && (T = new u(x[S].textStyle, c, i.ecModel));
                            var A = T.getTextColor() || i.get("axisLine.lineStyle.color"), I = s.dataToCoord(f[S]), C = [I, e.labelOffset + e.labelDirection * d], L = s.scale.getLabel(f[S]), P = new h.Text({
                                anid: "label_" + f[S],
                                style: {
                                    text: p[S],
                                    textAlign: T.get("align", !0) || y.textAlign,
                                    textVerticalAlign: T.get("baseline", !0) || y.verticalAlign,
                                    textFont: T.getFont(),
                                    fill: "function" == typeof A ? A(L) : A
                                },
                                position: C,
                                rotation: y.rotation,
                                silent: w,
                                z2: 10
                            });
                            M && (P.eventData = n(i), P.eventData.targetType = "axisLabel", P.eventData.value = L), this._dumbGroup.add(P), P.updateTransform(), b.push(P), this.group.add(P), P.decomposeTransform()
                        }
                        if ("category" !== s.type) {
                            if (i.getMin ? i.getMin() : i.get("min")) {
                                var k = b[0], D = b[1];
                                t(k, D) && (k.ignore = !0)
                            }
                            if (i.getMax ? i.getMax() : i.get("max")) {
                                var O = b[b.length - 1], z = b[b.length - 2];
                                t(z, O) && (O.ignore = !0)
                            }
                        }
                    }
                }, axisName: function () {
                    var t = this.opt, e = this.axisModel, i = m(t.axisName, e.get("name"));
                    if (i) {
                        var u, c = e.get("nameLocation"), d = t.nameDirection, f = e.getModel("nameTextStyle"), p = e.get("nameGap") || 0, g = this.axisModel.axis.getExtent(), y = g[0] > g[1] ? -1 : 1, x = ["start" === c ? g[0] - y * p : "end" === c ? g[1] + y * p : (g[0] + g[1]) / 2, "middle" === c ? t.labelOffset + d * p : 0], _ = e.get("nameRotate");
                        null != _ && (_ = _ * v / 180);
                        var b;
                        "middle" === c ? u = r(t, null != _ ? _ : t.rotation, d) : (u = o(t, c, _ || 0, g), b = t.axisNameAvailableWidth, null != b && (b = Math.abs(b / Math.sin(u.rotation)), !isFinite(b) && (b = null)));
                        var w = f.getFont(), M = e.get("nameTruncate", !0) || {}, S = M.ellipsis, T = m(M.maxWidth, b), A = null != S && null != T ? l.truncateText(i, T, w, S, {
                            minChar: 2,
                            placeholder: M.placeholder
                        }) : i, I = e.get("tooltip", !0), C = e.mainType, L = {componentType: C, name: i, $vars: ["name"]};
                        L[C + "Index"] = e.componentIndex;
                        var P = new h.Text({
                            anid: "name",
                            __fullText: i,
                            __truncatedText: A,
                            style: {
                                text: A,
                                textFont: w,
                                fill: f.getTextColor() || e.get("axisLine.lineStyle.color"),
                                textAlign: u.textAlign,
                                textVerticalAlign: u.verticalAlign
                            },
                            position: x,
                            rotation: u.rotation,
                            silent: a(e),
                            z2: 1,
                            tooltip: I && I.show ? s.extend({
                                content: i, formatter: function () {
                                    return i
                                }, formatterParams: L
                            }, I) : null
                        });
                        e.get("triggerEvent") && (P.eventData = n(e), P.eventData.targetType = "axisName", P.eventData.name = i), this._dumbGroup.add(P), P.updateTransform(), this.group.add(P), P.decomposeTransform()
                    }
                }
            }, _ = y.ifIgnoreOnTick = function (t, e, i) {
                var n, r = t.scale;
                return "ordinal" === r.type && ("function" == typeof i ? (n = r.getTicks()[e], !i(n, r.getLabel(n))) : e % (i + 1))
            }, b = y.getInterval = function (t, e) {
                var i = t.get("interval");
                return null != i && "auto" != i || (i = e), i
            };
            t.exports = y
        }, function (t, e, i) {
            function n(t) {
                return a.isObject(t) && null != t.value ? t.value : t
            }

            function r() {
                return "category" === this.get("type") && a.map(this.get("data"), n)
            }

            function o() {
                return s.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
            }

            var a = i(1), s = i(22);
            t.exports = {getFormattedLabels: o, getCategories: r}
        }, function (t, e, i) {
            var n = i(81), r = i(1), o = i(12), a = i(13), s = ["value", "category", "time", "log"];
            t.exports = function (t, e, i, l) {
                r.each(s, function (o) {
                    e.extend({
                        type: t + "Axis." + o, mergeDefaultAndTheme: function (e, n) {
                            var s = this.layoutMode, l = s ? a.getLayoutParams(e) : {}, h = n.getTheme();
                            r.merge(e, h.get(o + "Axis")), r.merge(e, this.getDefaultOption()), e.type = i(t, e), s && a.mergeLayoutParam(e, l, s)
                        }, defaultOption: r.mergeAll([{}, n[o + "Axis"], l], !0)
                    })
                }), o.registerSubTypeDefaulter(t + "Axis", r.curry(i, t))
            }
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                return e.type || (e.data ? "category" : "value")
            }

            var r = i(12), o = i(1), a = i(52), s = r.extend({
                type: "cartesian2dAxis", axis: null, init: function () {
                    s.superApply(this, "init", arguments), this.resetRange()
                }, mergeOption: function () {
                    s.superApply(this, "mergeOption", arguments), this.resetRange()
                }, restoreData: function () {
                    s.superApply(this, "restoreData", arguments), this.resetRange()
                }, findGridModel: function () {
                    return this.ecModel.queryComponents({
                        mainType: "grid",
                        index: this.get("gridIndex"),
                        id: this.get("gridId")
                    })[0]
                }
            });
            o.merge(s.prototype, i(51)), o.merge(s.prototype, i(82));
            var l = {offset: 0};
            a("x", s, n, l), a("y", s, n, l), t.exports = s
        }, function (t, e, i) {
            function n(t, e, i) {
                return t.findGridModel() === e
            }

            function r(t) {
                var e, i = t.model, n = i.getFormattedLabels(), r = 1, o = n.length;
                o > 40 && (r = Math.ceil(o / 40));
                for (var a = 0; a < o; a += r)if (!t.isLabelIgnored(a)) {
                    var s = i.getTextRect(n[a]);
                    e ? e.union(s) : e = s
                }
                return e
            }

            function o(t, e, i) {
                this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this._model = t
            }

            function a(t, e) {
                var i = t.getExtent(), n = i[0] + i[1];
                t.toGlobalCoord = "x" === t.dim ? function (t) {
                    return t + e
                } : function (t) {
                    return n - t + e
                }, t.toLocalCoord = "x" === t.dim ? function (t) {
                    return t - e
                } : function (t) {
                    return n - t + e
                }
            }

            function s(t, e) {
                return c.map(y, function (e) {
                    var i = t.getReferringComponents(e)[0];
                    return i
                })
            }

            function l(t) {
                return "cartesian2d" === t.get("coordinateSystem")
            }

            var h = i(13), u = i(22), c = i(1), d = i(119), f = i(117), p = c.each, g = u.ifAxisCrossZero, m = u.niceScaleExtent;
            i(120);
            var v = o.prototype;
            v.type = "grid", v.getRect = function () {
                return this._rect
            }, v.update = function (t, e) {
                function i(t) {
                    var e = n[t];
                    for (var i in e)if (e.hasOwnProperty(i)) {
                        var r = e[i];
                        if (r && ("category" === r.type || !g(r)))return !0
                    }
                    return !1
                }

                var n = this._axesMap;
                this._updateScale(t, this._model), p(n.x, function (t) {
                    m(t, t.model)
                }), p(n.y, function (t) {
                    m(t, t.model)
                }), p(n.x, function (t) {
                    i("y") && (t.onZero = !1)
                }), p(n.y, function (t) {
                    i("x") && (t.onZero = !1)
                }), this.resize(this._model, e)
            }, v.resize = function (t, e) {
                function i() {
                    p(o, function (t) {
                        var e = t.isHorizontal(), i = e ? [0, n.width] : [0, n.height], r = t.inverse ? 1 : 0;
                        t.setExtent(i[r], i[1 - r]), a(t, e ? n.x : n.y)
                    })
                }

                var n = h.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
                this._rect = n;
                var o = this._axesList;
                i(), t.get("containLabel") && (p(o, function (t) {
                    if (!t.model.get("axisLabel.inside")) {
                        var e = r(t);
                        if (e) {
                            var i = t.isHorizontal() ? "height" : "width", o = t.model.get("axisLabel.margin");
                            n[i] -= e[i] + o, "top" === t.position ? n.y += e.height + o : "left" === t.position && (n.x += e.width + o)
                        }
                    }
                }), i())
            }, v.getAxis = function (t, e) {
                var i = this._axesMap[t];
                if (null != i) {
                    if (null == e)for (var n in i)if (i.hasOwnProperty(n))return i[n];
                    return i[e]
                }
            }, v.getCartesian = function (t, e) {
                if (null != t && null != e) {
                    var i = "x" + t + "y" + e;
                    return this._coordsMap[i]
                }
                for (var n = 0, r = this._coordsList; n < r.length; n++)if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e)return r[n]
            }, v.convertToPixel = function (t, e, i) {
                var n = this._findConvertTarget(t, e);
                return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null
            }, v.convertFromPixel = function (t, e, i) {
                var n = this._findConvertTarget(t, e);
                return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
            }, v._findConvertTarget = function (t, e) {
                var i, n, r = e.seriesModel, o = e.xAxisModel || r && r.getReferringComponents("xAxis")[0], a = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
                if (r)i = r.coordinateSystem, c.indexOf(l, i) < 0 && (i = null); else if (o && a)i = this.getCartesian(o.componentIndex, a.componentIndex); else if (o)n = this.getAxis("x", o.componentIndex); else if (a)n = this.getAxis("y", a.componentIndex); else if (s) {
                    var h = s.coordinateSystem;
                    h === this && (i = this._coordsList[0])
                }
                return {cartesian: i, axis: n}
            }, v.containPoint = function (t) {
                var e = this._coordsList[0];
                if (e)return e.containPoint(t)
            }, v._initCartesian = function (t, e, i) {
                function r(i) {
                    return function (r, l) {
                        if (n(r, t, e)) {
                            var h = r.get("position");
                            "x" === i ? "top" !== h && "bottom" !== h && (h = "bottom", o[h] && (h = "top" === h ? "bottom" : "top")) : "left" !== h && "right" !== h && (h = "left", o[h] && (h = "left" === h ? "right" : "left")), o[h] = !0;
                            var c = new f(i, u.createScaleByModel(r), [0, 0], r.get("type"), h), d = "category" === c.type;
                            c.onBand = d && r.get("boundaryGap"), c.inverse = r.get("inverse"), c.onZero = r.get("axisLine.onZero"), r.axis = c, c.model = r, c.grid = this, c.index = l, this._axesList.push(c), a[i][l] = c, s[i]++
                        }
                    }
                }

                var o = {left: !1, right: !1, top: !1, bottom: !1}, a = {x: {}, y: {}}, s = {x: 0, y: 0};
                return e.eachComponent("xAxis", r("x"), this), e.eachComponent("yAxis", r("y"), this), s.x && s.y ? (this._axesMap = a, void p(a.x, function (t, e) {
                    p(a.y, function (i, n) {
                        var r = "x" + e + "y" + n, o = new d(r);
                        o.grid = this, this._coordsMap[r] = o, this._coordsList.push(o), o.addAxis(t), o.addAxis(i)
                    }, this)
                }, this)) : (this._axesMap = {}, void(this._axesList = []))
            }, v._updateScale = function (t, e) {
                function i(t, e, i) {
                    p(i.coordDimToDataDim(e.dim), function (i) {
                        e.scale.unionExtent(t.getDataExtent(i, "ordinal" !== e.scale.type))
                    })
                }

                c.each(this._axesList, function (t) {
                    t.scale.setExtent(1 / 0, -(1 / 0))
                }), t.eachSeries(function (r) {
                    if (l(r)) {
                        var o = s(r, t), a = o[0], h = o[1];
                        if (!n(a, e, t) || !n(h, e, t))return;
                        var u = this.getCartesian(a.componentIndex, h.componentIndex), c = r.getData(), d = u.getAxis("x"), f = u.getAxis("y");
                        "list" === c.type && (i(c, d, r), i(c, f, r))
                    }
                }, this)
            };
            var y = ["xAxis", "yAxis"];
            o.create = function (t, e) {
                var i = [];
                return t.eachComponent("grid", function (n, r) {
                    var a = new o(n, t, e);
                    a.name = "grid_" + r, a.resize(n, e), n.coordinateSystem = a, i.push(a)
                }), t.eachSeries(function (e) {
                    if (l(e)) {
                        var i = s(e, t), n = i[0], r = i[1], o = n.findGridModel(), a = o.coordinateSystem;
                        e.coordinateSystem = a.getCartesian(n.componentIndex, r.componentIndex)
                    }
                }), i
            }, o.dimensions = d.prototype.dimensions, i(23).register("cartesian2d", o), t.exports = o
        }, function (t, e) {
            t.exports = function (t, e) {
                e.eachSeriesByType(t, function (t) {
                    var e = t.getData(), i = t.coordinateSystem;
                    if (i) {
                        var n = i.dimensions;
                        "singleAxis" === i.type ? e.each(n[0], function (t, n) {
                            e.setItemLayout(n, isNaN(t) ? [NaN, NaN] : i.dataToPoint(t))
                        }) : e.each(n, function (t, n, r) {
                            e.setItemLayout(r, isNaN(t) || isNaN(n) ? [NaN, NaN] : i.dataToPoint([t, n]))
                        }, !0)
                    }
                })
            }
        }, function (t, e) {
            t.exports = {
                clearColorPalette: function () {
                    this._colorIdx = 0, this._colorNameMap = {}
                }, getColorFromPalette: function (t, e) {
                    e = e || this;
                    var i = e._colorIdx || 0, n = e._colorNameMap || (e._colorNameMap = {});
                    if (n[t])return n[t];
                    var r = this.get("color", !0) || [];
                    if (r.length) {
                        var o = r[i];
                        return t && (n[t] = o), e._colorIdx = (i + 1) % r.length, o
                    }
                }
            }
        }, function (t, e, i) {
            var n = i(34), r = i(43), o = i(21), a = function () {
                this.group = new n, this.uid = r.getUID("viewComponent")
            };
            a.prototype = {
                constructor: a, init: function (t, e) {
                }, render: function (t, e, i, n) {
                }, dispose: function () {
                }
            };
            var s = a.prototype;
            s.updateView = s.updateLayout = s.updateVisual = function (t, e, i, n) {
            }, o.enableClassExtend(a), o.enableClassManagement(a, {registerWhenExtend: !0}), t.exports = a
        }, function (t, e, i) {
            "use strict";
            var n = i(62), r = i(20), o = i(88), a = i(166), s = i(1), l = function (t) {
                o.call(this, t), r.call(this, t), a.call(this, t), this.id = t.id || n()
            };
            l.prototype = {
                type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function (t, e) {
                    switch (this.draggable) {
                        case"horizontal":
                            e = 0;
                            break;
                        case"vertical":
                            t = 0
                    }
                    var i = this.transform;
                    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
                }, beforeUpdate: function () {
                }, afterUpdate: function () {
                }, update: function () {
                    this.updateTransform()
                }, traverse: function (t, e) {
                }, attrKV: function (t, e) {
                    if ("position" === t || "scale" === t || "origin" === t) {
                        if (e) {
                            var i = this[t];
                            i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                        }
                    } else this[t] = e
                }, hide: function () {
                    this.ignore = !0, this.__zr && this.__zr.refresh()
                }, show: function () {
                    this.ignore = !1, this.__zr && this.__zr.refresh()
                }, attr: function (t, e) {
                    if ("string" == typeof t)this.attrKV(t, e); else if (s.isObject(t))for (var i in t)t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                    return this.dirty(!1), this
                }, setClipPath: function (t) {
                    var e = this.__zr;
                    e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
                }, removeClipPath: function () {
                    var t = this.clipPath;
                    t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
                }, addSelfToZr: function (t) {
                    this.__zr = t;
                    var e = this.animators;
                    if (e)for (var i = 0; i < e.length; i++)t.animation.addAnimator(e[i]);
                    this.clipPath && this.clipPath.addSelfToZr(t)
                }, removeSelfFromZr: function (t) {
                    this.__zr = null;
                    var e = this.animators;
                    if (e)for (var i = 0; i < e.length; i++)t.animation.removeAnimator(e[i]);
                    this.clipPath && this.clipPath.removeSelfFromZr(t)
                }
            }, s.mixin(l, a), s.mixin(l, o), s.mixin(l, r), t.exports = l
        }, function (t, e, i) {
            function n(t, e) {
                return t[e]
            }

            function r(t, e, i) {
                t[e] = i
            }

            function o(t, e, i) {
                return (e - t) * i + t
            }

            function a(t, e, i) {
                return i > .5 ? e : t
            }

            function s(t, e, i, n, r) {
                var a = t.length;
                if (1 == r)for (var s = 0; s < a; s++)n[s] = o(t[s], e[s], i); else for (var l = t[0].length, s = 0; s < a; s++)for (var h = 0; h < l; h++)n[s][h] = o(t[s][h], e[s][h], i)
            }

            function l(t, e, i) {
                var n = t.length, r = e.length;
                if (n !== r) {
                    var o = n > r;
                    if (o)t.length = r; else for (var a = n; a < r; a++)t.push(1 === i ? e[a] : x.call(e[a]))
                }
                for (var s = t[0] && t[0].length, a = 0; a < t.length; a++)if (1 === i)isNaN(t[a]) && (t[a] = e[a]); else for (var l = 0; l < s; l++)isNaN(t[a][l]) && (t[a][l] = e[a][l])
            }

            function h(t, e, i) {
                if (t === e)return !0;
                var n = t.length;
                if (n !== e.length)return !1;
                if (1 === i) {
                    for (var r = 0; r < n; r++)if (t[r] !== e[r])return !1
                } else for (var o = t[0].length, r = 0; r < n; r++)for (var a = 0; a < o; a++)if (t[r][a] !== e[r][a])return !1;
                return !0
            }

            function u(t, e, i, n, r, o, a, s, l) {
                var h = t.length;
                if (1 == l)for (var u = 0; u < h; u++)s[u] = c(t[u], e[u], i[u], n[u], r, o, a); else for (var d = t[0].length, u = 0; u < h; u++)for (var f = 0; f < d; f++)s[u][f] = c(t[u][f], e[u][f], i[u][f], n[u][f], r, o, a)
            }

            function c(t, e, i, n, r, o, a) {
                var s = .5 * (i - t), l = .5 * (n - e);
                return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e
            }

            function d(t) {
                if (y(t)) {
                    var e = t.length;
                    if (y(t[0])) {
                        for (var i = [], n = 0; n < e; n++)i.push(x.call(t[n]));
                        return i
                    }
                    return x.call(t)
                }
                return t
            }

            function f(t) {
                return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
            }

            function p(t, e, i, n, r) {
                var d = t._getter, p = t._setter, v = "spline" === e, x = n.length;
                if (x) {
                    var _, b = n[0].value, w = y(b), M = !1, S = !1, T = w && y(b[0]) ? 2 : 1;
                    n.sort(function (t, e) {
                        return t.time - e.time
                    }), _ = n[x - 1].time;
                    for (var A = [], I = [], C = n[0].value, L = !0, P = 0; P < x; P++) {
                        A.push(n[P].time / _);
                        var k = n[P].value;
                        if (w && h(k, C, T) || !w && k === C || (L = !1), C = k, "string" == typeof k) {
                            var D = m.parse(k);
                            D ? (k = D, M = !0) : S = !0
                        }
                        I.push(k)
                    }
                    if (!L) {
                        for (var O = I[x - 1], P = 0; P < x - 1; P++)w ? l(I[P], O, T) : !isNaN(I[P]) || isNaN(O) || S || M || (I[P] = O);
                        w && l(d(t._target, r), O, T);
                        var z, E, R, N, B, V, F = 0, G = 0;
                        if (M)var H = [0, 0, 0, 0];
                        var W = function (t, e) {
                            var i;
                            if (e < 0)i = 0; else if (e < G) {
                                for (z = Math.min(F + 1, x - 1), i = z; i >= 0 && !(A[i] <= e); i--);
                                i = Math.min(i, x - 2)
                            } else {
                                for (i = F; i < x && !(A[i] > e); i++);
                                i = Math.min(i - 1, x - 2)
                            }
                            F = i, G = e;
                            var n = A[i + 1] - A[i];
                            if (0 !== n)if (E = (e - A[i]) / n, v)if (N = I[i], R = I[0 === i ? i : i - 1], B = I[i > x - 2 ? x - 1 : i + 1], V = I[i > x - 3 ? x - 1 : i + 2], w)u(R, N, B, V, E, E * E, E * E * E, d(t, r), T); else {
                                var l;
                                if (M)l = u(R, N, B, V, E, E * E, E * E * E, H, 1), l = f(H); else {
                                    if (S)return a(N, B, E);
                                    l = c(R, N, B, V, E, E * E, E * E * E)
                                }
                                p(t, r, l)
                            } else if (w)s(I[i], I[i + 1], E, d(t, r), T); else {
                                var l;
                                if (M)s(I[i], I[i + 1], E, H, 1), l = f(H); else {
                                    if (S)return a(I[i], I[i + 1], E);
                                    l = o(I[i], I[i + 1], E)
                                }
                                p(t, r, l)
                            }
                        }, Z = new g({
                            target: t._target,
                            life: _,
                            loop: t._loop,
                            delay: t._delay,
                            onframe: W,
                            ondestroy: i
                        });
                        return e && "spline" !== e && (Z.easing = e), Z
                    }
                }
            }

            var g = i(144), m = i(18), v = i(1), y = v.isArrayLike, x = Array.prototype.slice, _ = function (t, e, i, o) {
                this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || n, this._setter = o || r, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
            };
            _.prototype = {
                when: function (t, e) {
                    var i = this._tracks;
                    for (var n in e)if (e.hasOwnProperty(n)) {
                        if (!i[n]) {
                            i[n] = [];
                            var r = this._getter(this._target, n);
                            if (null == r)continue;
                            0 !== t && i[n].push({time: 0, value: d(r)})
                        }
                        i[n].push({time: t, value: e[n]})
                    }
                    return this
                }, during: function (t) {
                    return this._onframeList.push(t), this
                }, _doneCallback: function () {
                    this._tracks = {}, this._clipList.length = 0;
                    for (var t = this._doneList, e = t.length, i = 0; i < e; i++)t[i].call(this)
                }, start: function (t) {
                    var e, i = this, n = 0, r = function () {
                        n--, n || i._doneCallback()
                    };
                    for (var o in this._tracks)if (this._tracks.hasOwnProperty(o)) {
                        var a = p(this, t, r, this._tracks[o], o);
                        a && (this._clipList.push(a), n++, this.animation && this.animation.addClip(a), e = a)
                    }
                    if (e) {
                        var s = e.onframe;
                        e.onframe = function (t, e) {
                            s(t, e);
                            for (var n = 0; n < i._onframeList.length; n++)i._onframeList[n](t, e)
                        }
                    }
                    return n || this._doneCallback(), this
                }, stop: function (t) {
                    for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                        var r = e[n];
                        t && r.onframe(this._target, 1), i && i.removeClip(r)
                    }
                    e.length = 0
                }, delay: function (t) {
                    return this._delay = t, this
                }, done: function (t) {
                    return t && this._doneList.push(t), this
                }, getClips: function () {
                    return this._clipList
                }
            }, t.exports = _
        }, function (t, e) {
            t.exports = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
                    setTimeout(t, 16)
                }
        }, function (t, e) {
            var i = 2 * Math.PI;
            t.exports = {
                normalizeRadian: function (t) {
                    return t %= i, t < 0 && (t += i), t
                }
            }
        }, function (t, e) {
            var i = 2311;
            t.exports = function () {
                return i++
            }
        }, function (t, e) {
            var i = function (t, e) {
                this.image = t, this.repeat = e, this.type = "pattern"
            };
            i.prototype.getCanvasPattern = function (t) {
                return this._canvasPattern || (this._canvasPattern = t.createPattern(this.image, this.repeat))
            }, t.exports = i
        }, function (t, e) {
            function i(t, e, i) {
                var n = e.x, r = e.x2, o = e.y, a = e.y2;
                e.global || (n = n * i.width + i.x, r = r * i.width + i.x, o = o * i.height + i.y, a = a * i.height + i.y);
                var s = t.createLinearGradient(n, o, r, a);
                return s
            }

            function n(t, e, i) {
                var n = i.width, r = i.height, o = Math.min(n, r), a = e.x, s = e.y, l = e.r;
                e.global || (a = a * n + i.x, s = s * r + i.y, l *= o);
                var h = t.createRadialGradient(a, s, 0, a, s, l);
                return h
            }

            var r = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]], o = function (t) {
                this.extendFrom(t)
            };
            o.prototype = {
                constructor: o,
                fill: "#000000",
                stroke: null,
                opacity: 1,
                lineDash: null,
                lineDashOffset: 0,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                lineWidth: 1,
                strokeNoScale: !1,
                text: null,
                textFill: "#000",
                textStroke: null,
                textPosition: "inside",
                textBaseline: null,
                textAlign: null,
                textVerticalAlign: null,
                textDistance: 5,
                textShadowBlur: 0,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                textTransform: !1,
                textRotation: 0,
                blend: null,
                bind: function (t, e, i) {
                    for (var n = this, o = i && i.style, a = !o, s = 0; s < r.length; s++) {
                        var l = r[s], h = l[0];
                        (a || n[h] !== o[h]) && (t[h] = n[h] || l[1])
                    }
                    if ((a || n.fill !== o.fill) && (t.fillStyle = n.fill), (a || n.stroke !== o.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== o.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== o.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                        var u = n.lineWidth;
                        t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                    }
                },
                hasFill: function () {
                    var t = this.fill;
                    return null != t && "none" !== t
                },
                hasStroke: function () {
                    var t = this.stroke;
                    return null != t && "none" !== t && this.lineWidth > 0
                },
                extendFrom: function (t, e) {
                    if (t) {
                        var i = this;
                        for (var n in t)!t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n])
                    }
                },
                set: function (t, e) {
                    "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
                },
                clone: function () {
                    var t = new this.constructor;
                    return t.extendFrom(this, !0), t
                },
                getGradient: function (t, e, r) {
                    for (var o = "radial" === e.type ? n : i, a = o(t, e, r), s = e.colorStops, l = 0; l < s.length; l++)a.addColorStop(s[l].offset, s[l].color);
                    return a
                }
            };
            for (var a = o.prototype, s = 0; s < r.length; s++) {
                var l = r[s];
                l[0] in a || (a[l[0]] = l[1])
            }
            o.getGradient = a.getGradient, t.exports = o
        }, function (t, e, i) {
            var n = i(156), r = i(155);
            t.exports = {
                buildPath: function (t, e, i) {
                    var o = e.points, a = e.smooth;
                    if (o && o.length >= 2) {
                        if (a && "spline" !== a) {
                            var s = r(o, a, i, e.smoothConstraint);
                            t.moveTo(o[0][0], o[0][1]);
                            for (var l = o.length, h = 0; h < (i ? l : l - 1); h++) {
                                var u = s[2 * h], c = s[2 * h + 1], d = o[(h + 1) % l];
                                t.bezierCurveTo(u[0], u[1], c[0], c[1], d[0], d[1])
                            }
                        } else {
                            "spline" === a && (o = n(o, i)), t.moveTo(o[0][0], o[0][1]);
                            for (var h = 1, f = o.length; h < f; h++)t.lineTo(o[h][0], o[h][1])
                        }
                        i && t.closePath()
                    }
                }
            }
        }, function (t, e, i) {
            var n = i(1);
            t.exports = {
                updateSelectedMap: function (t) {
                    this._selectTargetMap = n.reduce(t || [], function (t, e) {
                        return t[e.name] = e, t
                    }, {})
                }, select: function (t) {
                    var e = this._selectTargetMap, i = e[t], r = this.get("selectedMode");
                    "single" === r && n.each(e, function (t) {
                        t.selected = !1
                    }), i && (i.selected = !0)
                }, unSelect: function (t) {
                    var e = this._selectTargetMap[t];
                    e && (e.selected = !1)
                }, toggleSelected: function (t) {
                    var e = this._selectTargetMap[t];
                    if (null != e)return this[e.selected ? "unSelect" : "select"](t), e.selected
                }, isSelected: function (t) {
                    var e = this._selectTargetMap[t];
                    return e && e.selected
                }
            }
        }, function (t, e, i) {
            function n(t) {
                r.defaultEmphasis(t.label, r.LABEL_OPTIONS)
            }

            var r = i(7), o = i(1), a = i(11), s = i(9), l = s.addCommas, h = s.encodeHTML, u = i(2).extendComponentModel({
                type: "marker",
                dependencies: ["series", "grid", "polar", "geo"],
                init: function (t, e, i, n) {
                    this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
                },
                ifEnableAnimation: function () {
                    if (a.node)return !1;
                    var t = this.__hostSeries;
                    return this.getShallow("animation") && t && t.ifEnableAnimation()
                },
                mergeOption: function (t, e, i, r) {
                    var a = this.constructor, s = this.mainType + "Model";
                    i || e.eachSeries(function (t) {
                        var i = t.get(this.mainType), l = t[s];
                        return i && i.data ? (l ? l.mergeOption(i, e, !0) : (r && n(i), o.each(i.data, function (t) {
                            t instanceof Array ? (n(t[0]), n(t[1])) : n(t)
                        }), l = new a(i, this, e), o.extend(l, {
                            mainType: this.mainType,
                            seriesIndex: t.seriesIndex,
                            name: t.name,
                            createdBySelf: !0
                        }), l.__hostSeries = t), void(t[s] = l)) : void(t[s] = null)
                    }, this)
                },
                formatTooltip: function (t) {
                    var e = this.getData(), i = this.getRawValue(t), n = o.isArray(i) ? o.map(i, l).join(", ") : l(i), r = e.getName(t), a = this.name;
                    return (null != i || r) && (a += "<br />"), r && (a += h(r), null != i && (a += " : ")), null != i && (a += n), a
                },
                getData: function () {
                    return this._data
                },
                setData: function (t) {
                    this._data = t
                }
            });
            o.mixin(u, r.dataFormatMixin), t.exports = u
        }, function (t, e, i) {
            t.exports = i(2).extendComponentView({
                type: "marker", init: function () {
                    this.markerGroupMap = {}
                }, render: function (t, e, i) {
                    var n = this.markerGroupMap;
                    for (var r in n)n.hasOwnProperty(r) && (n[r].__keep = !1);
                    var o = this.type + "Model";
                    e.eachSeries(function (t) {
                        var n = t[o];
                        n && this.renderSeries(t, n, e, i)
                    }, this);
                    for (var r in n)n.hasOwnProperty(r) && !n[r].__keep && this.group.remove(n[r].group)
                }, renderSeries: function () {
                }
            })
        }, function (t, e, i) {
            function n(t) {
                return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
            }

            function r(t) {
                return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
            }

            function o(t, e, i) {
                var n = -1;
                do n = Math.max(l.getPrecision(t.get(e, i)), n), t = t.stackedOn; while (t);
                return n
            }

            function a(t, e, i, n, r, a) {
                var s = [], l = m(e, n, t), h = e.indexOfNearest(n, l, !0);
                s[r] = e.get(i, h, !0), s[a] = e.get(n, h, !0);
                var u = o(e, n, h);
                return u >= 0 && (s[a] = +s[a].toFixed(u)), s
            }

            var s = i(1), l = i(4), h = s.indexOf, u = s.curry, c = {
                min: u(a, "min"),
                max: u(a, "max"),
                average: u(a, "average")
            }, d = function (t, e) {
                var i = t.getData(), n = t.coordinateSystem;
                if (e && !r(e) && !s.isArray(e.coord) && n) {
                    var o = n.dimensions, a = f(e, i, n, t);
                    if (e = s.clone(e), e.type && c[e.type] && a.baseAxis && a.valueAxis) {
                        var l = h(o, a.baseAxis.dim), u = h(o, a.valueAxis.dim);
                        e.coord = c[e.type](i, a.baseDataDim, a.valueDataDim, l, u), e.value = e.coord[u]
                    } else {
                        for (var d = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], p = 0; p < 2; p++)if (c[d[p]]) {
                            var g = t.coordDimToDataDim(o[p])[0];
                            d[p] = m(i, g, d[p])
                        }
                        e.coord = d
                    }
                }
                return e
            }, f = function (t, e, i, n) {
                var r = {};
                return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = i.getAxis(n.dataDimToCoordDim(r.valueDataDim)), r.baseAxis = i.getOtherAxis(r.valueAxis), r.baseDataDim = n.coordDimToDataDim(r.baseAxis.dim)[0]) : (r.baseAxis = n.getBaseAxis(), r.valueAxis = i.getOtherAxis(r.baseAxis), r.baseDataDim = n.coordDimToDataDim(r.baseAxis.dim)[0], r.valueDataDim = n.coordDimToDataDim(r.valueAxis.dim)[0]), r
            }, p = function (t, e) {
                return !(t && t.containData && e.coord && !n(e)) || t.containData(e.coord)
            }, g = function (t, e, i, n) {
                return n < 2 ? t.coord && t.coord[n] : t.value
            }, m = function (t, e, i) {
                if ("average" === i) {
                    var n = 0, r = 0;
                    return t.each(e, function (t, e) {
                        isNaN(t) || (n += t, r++)
                    }, !0), n / r
                }
                return t.getDataExtent(e, !0)["max" === i ? 1 : 0]
            };
            t.exports = {dataTransform: d, dataFilter: p, dimValueGetter: g, getAxisInfo: f, numCalculate: m}
        }, function (t, e) {
            t.exports = function (t, e) {
                var i = e.findComponents({mainType: "legend"});
                i && i.length && e.eachSeriesByType(t, function (t) {
                    var e = t.getData();
                    e.filterSelf(function (t) {
                        for (var n = e.getName(t), r = 0; r < i.length; r++)if (!i[r].isSelected(n))return !1;
                        return !0
                    }, this)
                }, this)
            }
        }, , function (t, e) {
            t.exports = function (t, e) {
                var i = {};
                e.eachRawSeriesByType(t, function (t) {
                    var n = t.getRawData(), r = {};
                    if (!e.isSeriesFiltered(t)) {
                        var o = t.getData();
                        o.each(function (t) {
                            var e = o.getRawIndex(t);
                            r[e] = t
                        }), n.each(function (e) {
                            var a = n.getItemModel(e), s = r[e], l = null != s && o.getItemVisual(s, "color", !0);
                            if (l)n.setItemVisual(e, "color", l); else {
                                var h = a.get("itemStyle.normal.color") || t.getColorFromPalette(n.getName(e), i);
                                n.setItemVisual(e, "color", h), null != s && o.setItemVisual(s, "color", h)
                            }
                        })
                    }
                })
            }
        }, function (t, e, i) {
            var n = i(5), r = i(17), o = {}, a = Math.min, s = Math.max, l = Math.sin, h = Math.cos, u = n.create(), c = n.create(), d = n.create(), f = 2 * Math.PI;
            o.fromPoints = function (t, e, i) {
                if (0 !== t.length) {
                    var n, r = t[0], o = r[0], l = r[0], h = r[1], u = r[1];
                    for (n = 1; n < t.length; n++)r = t[n], o = a(o, r[0]), l = s(l, r[0]), h = a(h, r[1]), u = s(u, r[1]);
                    e[0] = o, e[1] = h, i[0] = l, i[1] = u
                }
            }, o.fromLine = function (t, e, i, n, r, o) {
                r[0] = a(t, i), r[1] = a(e, n), o[0] = s(t, i), o[1] = s(e, n)
            };
            var p = [], g = [];
            o.fromCubic = function (t, e, i, n, o, l, h, u, c, d) {
                var f, m = r.cubicExtrema, v = r.cubicAt, y = m(t, i, o, h, p);
                for (c[0] = 1 / 0, c[1] = 1 / 0, d[0] = -(1 / 0), d[1] = -(1 / 0), f = 0; f < y; f++) {
                    var x = v(t, i, o, h, p[f]);
                    c[0] = a(x, c[0]), d[0] = s(x, d[0]);
                }
                for (y = m(e, n, l, u, g), f = 0; f < y; f++) {
                    var _ = v(e, n, l, u, g[f]);
                    c[1] = a(_, c[1]), d[1] = s(_, d[1])
                }
                c[0] = a(t, c[0]), d[0] = s(t, d[0]), c[0] = a(h, c[0]), d[0] = s(h, d[0]), c[1] = a(e, c[1]), d[1] = s(e, d[1]), c[1] = a(u, c[1]), d[1] = s(u, d[1])
            }, o.fromQuadratic = function (t, e, i, n, o, l, h, u) {
                var c = r.quadraticExtremum, d = r.quadraticAt, f = s(a(c(t, i, o), 1), 0), p = s(a(c(e, n, l), 1), 0), g = d(t, i, o, f), m = d(e, n, l, p);
                h[0] = a(t, o, g), h[1] = a(e, l, m), u[0] = s(t, o, g), u[1] = s(e, l, m)
            }, o.fromArc = function (t, e, i, r, o, a, s, p, g) {
                var m = n.min, v = n.max, y = Math.abs(o - a);
                if (y % f < 1e-4 && y > 1e-4)return p[0] = t - i, p[1] = e - r, g[0] = t + i, void(g[1] = e + r);
                if (u[0] = h(o) * i + t, u[1] = l(o) * r + e, c[0] = h(a) * i + t, c[1] = l(a) * r + e, m(p, u, c), v(g, u, c), o %= f, o < 0 && (o += f), a %= f, a < 0 && (a += f), o > a && !s ? a += f : o < a && s && (o += f), s) {
                    var x = a;
                    a = o, o = x
                }
                for (var _ = 0; _ < a; _ += Math.PI / 2)_ > o && (d[0] = h(_) * i + t, d[1] = l(_) * r + e, m(p, d, p), v(g, d, g))
            }, t.exports = o
        }, function (t, e, i) {
            var n = i(37), r = i(1), o = i(16), a = function (t) {
                n.call(this, t)
            };
            a.prototype = {
                constructor: a, type: "text", brush: function (t, e) {
                    var i = this.style, n = i.x || 0, r = i.y || 0, a = i.text;
                    if (null != a && (a += ""), i.bind(t, this, e), a) {
                        this.setTransform(t);
                        var s, l = i.textAlign, h = i.textFont || i.font;
                        if (i.textVerticalAlign) {
                            var u = o.getBoundingRect(a, h, i.textAlign, "top");
                            switch (s = "middle", i.textVerticalAlign) {
                                case"middle":
                                    r -= u.height / 2 - u.lineHeight / 2;
                                    break;
                                case"bottom":
                                    r -= u.height - u.lineHeight / 2;
                                    break;
                                default:
                                    r += u.lineHeight / 2
                            }
                        } else s = i.textBaseline;
                        t.font = h || "12px sans-serif", t.textAlign = l || "left", t.textAlign !== l && (t.textAlign = "left"), t.textBaseline = s || "alphabetic", t.textBaseline !== s && (t.textBaseline = "alphabetic");
                        for (var c = o.measureText("国", t.font).width, d = a.split("\n"), f = 0; f < d.length; f++)i.hasFill() && t.fillText(d[f], n, r), i.hasStroke() && t.strokeText(d[f], n, r), r += c;
                        this.restoreTransform(t)
                    }
                }, getBoundingRect: function () {
                    if (!this._rect) {
                        var t = this.style, e = t.textVerticalAlign, i = o.getBoundingRect(t.text + "", t.textFont || t.font, t.textAlign, e ? "top" : t.textBaseline);
                        switch (e) {
                            case"middle":
                                i.y -= i.height / 2;
                                break;
                            case"bottom":
                                i.y -= i.height
                        }
                        i.x += t.x || 0, i.y += t.y || 0, this._rect = i
                    }
                    return this._rect
                }
            }, r.inherits(a, n), t.exports = a
        }, function (t, e, i) {
            function n(t, e) {
                return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
            }

            var r = i(16), o = i(8), a = new o, s = function () {
            };
            s.prototype = {
                constructor: s, drawRectText: function (t, e, i) {
                    var o = this.style, s = o.text;
                    if (null != s && (s += ""), s) {
                        t.save();
                        var l, h, u = o.textPosition, c = o.textDistance, d = o.textAlign, f = o.textFont || o.font, p = o.textBaseline, g = o.textVerticalAlign;
                        i = i || r.getBoundingRect(s, f, d, p);
                        var m = this.transform;
                        if (o.textTransform ? this.setTransform(t) : m && (a.copy(e), a.applyTransform(m), e = a), u instanceof Array) {
                            if (l = e.x + n(u[0], e.width), h = e.y + n(u[1], e.height), d = d || "left", p = p || "top", g) {
                                switch (g) {
                                    case"middle":
                                        h -= i.height / 2 - i.lineHeight / 2;
                                        break;
                                    case"bottom":
                                        h -= i.height - i.lineHeight / 2;
                                        break;
                                    default:
                                        h += i.lineHeight / 2
                                }
                                p = "middle"
                            }
                        } else {
                            var v = r.adjustTextPositionOnRect(u, e, i, c);
                            l = v.x, h = v.y, d = d || v.textAlign, p = p || v.textBaseline
                        }
                        t.textAlign = d || "left", t.textBaseline = p || "alphabetic";
                        var y = o.textFill, x = o.textStroke;
                        y && (t.fillStyle = y), x && (t.strokeStyle = x), t.font = f || "12px sans-serif", t.shadowBlur = o.textShadowBlur, t.shadowColor = o.textShadowColor || "transparent", t.shadowOffsetX = o.textShadowOffsetX, t.shadowOffsetY = o.textShadowOffsetY;
                        var _ = s.split("\n");
                        o.textRotation && (m && t.translate(m[4], m[5]), t.rotate(o.textRotation), m && t.translate(-m[4], -m[5]));
                        for (var b = 0; b < _.length; b++)y && t.fillText(_[b], l, h), x && t.strokeText(_[b], l, h), h += i.lineHeight;
                        t.restore()
                    }
                }
            }, t.exports = s
        }, function (t, e, i) {
            function n(t) {
                delete d[t]
            }

            /*!
             * ZRender, a high performance 2d drawing library.
             *
             * Copyright (c) 2013, Baidu Inc.
             * All rights reserved.
             *
             * LICENSE
             * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
             */
            var r = i(62), o = i(11), a = i(139), s = i(142), l = i(143), h = i(151), u = !o.canvasSupported, c = {canvas: i(141)}, d = {}, f = {};
            f.version = "3.2.1", f.init = function (t, e) {
                var i = new p(r(), t, e);
                return d[i.id] = i, i
            }, f.dispose = function (t) {
                if (t)t.dispose(); else {
                    for (var e in d)d.hasOwnProperty(e) && d[e].dispose();
                    d = {}
                }
                return f
            }, f.getInstance = function (t) {
                return d[t]
            }, f.registerPainter = function (t, e) {
                c[t] = e
            };
            var p = function (t, e, i) {
                i = i || {}, this.dom = e, this.id = t;
                var n = this, r = new s, d = i.renderer;
                if (u) {
                    if (!c.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                    d = "vml"
                } else d && c[d] || (d = "canvas");
                var f = new c[d](e, r, i);
                this.storage = r, this.painter = f;
                var p = o.node ? null : new h(f.getViewportRoot());
                this.handler = new a(r, f, p, f.root), this.animation = new l({
                    stage: {
                        update: function () {
                            n._needsRefresh && n.refreshImmediately(), n._needsRefreshHover && n.refreshHoverImmediately()
                        }
                    }
                }), this.animation.start(), this._needsRefresh;
                var g = r.delFromMap, m = r.addToMap;
                r.delFromMap = function (t) {
                    var e = r.get(t);
                    g.call(r, t), e && e.removeSelfFromZr(n)
                }, r.addToMap = function (t) {
                    m.call(r, t), t.addSelfToZr(n)
                }
            };
            p.prototype = {
                constructor: p, getId: function () {
                    return this.id
                }, add: function (t) {
                    this.storage.addRoot(t), this._needsRefresh = !0
                }, remove: function (t) {
                    this.storage.delRoot(t), this._needsRefresh = !0
                }, configLayer: function (t, e) {
                    this.painter.configLayer(t, e), this._needsRefresh = !0
                }, refreshImmediately: function () {
                    this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
                }, refresh: function () {
                    this._needsRefresh = !0
                }, addHover: function (t, e) {
                    this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
                }, removeHover: function (t) {
                    this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
                }, clearHover: function () {
                    this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
                }, refreshHover: function () {
                    this._needsRefreshHover = !0
                }, refreshHoverImmediately: function () {
                    this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
                }, resize: function (t) {
                    t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
                }, clearAnimation: function () {
                    this.animation.clear()
                }, getWidth: function () {
                    return this.painter.getWidth()
                }, getHeight: function () {
                    return this.painter.getHeight()
                }, pathToImage: function (t, e, i) {
                    var n = r();
                    return this.painter.pathToImage(n, t, e, i)
                }, setCursorStyle: function (t) {
                    this.handler.setCursorStyle(t)
                }, on: function (t, e, i) {
                    this.handler.on(t, e, i)
                }, off: function (t, e) {
                    this.handler.off(t, e)
                }, trigger: function (t, e) {
                    this.handler.trigger(t, e)
                }, clear: function () {
                    this.storage.delRoot(), this.painter.clear()
                }, dispose: function () {
                    this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, n(this.id)
                }
            }, t.exports = f
        }, function (t, e, i) {
            var n = i(2), r = i(1);
            t.exports = function (t, e) {
                r.each(e, function (e) {
                    e.update = "updateView", n.registerAction(e, function (i, n) {
                        var r = {};
                        return n.eachComponent({mainType: "series", subType: t, query: i}, function (t) {
                            t[e.method] && t[e.method](i.name);
                            var n = t.getData();
                            n.each(function (e) {
                                var i = n.getName(e);
                                r[i] = t.isSelected(i) || !1
                            })
                        }), {name: i.name, selected: r}
                    })
                })
            }
        }, , function (t, e, i) {
            function n(t) {
                if (!t.target || !t.target.draggable) {
                    var e = t.offsetX, i = t.offsetY;
                    this.containsPoint && this.containsPoint(e, i) && (this._x = e, this._y = i, this._dragging = !0)
                }
            }

            function r(t) {
                if (this._dragging && (d.stop(t.event), "pinch" !== t.gestureEvent)) {
                    if (f.isTaken(this._zr, "globalPan"))return;
                    var e = t.offsetX, i = t.offsetY, n = this._x, r = this._y, o = e - n, a = i - r;
                    this._x = e, this._y = i;
                    var s = this.target;
                    if (s) {
                        var l = s.position;
                        l[0] += o, l[1] += a, s.dirty()
                    }
                    d.stop(t.event), this.trigger("pan", o, a, n, r, e, i)
                }
            }

            function o(t) {
                this._dragging = !1
            }

            function a(t) {
                var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
                l.call(this, t, e, t.offsetX, t.offsetY)
            }

            function s(t) {
                if (!f.isTaken(this._zr, "globalPan")) {
                    var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
                    l.call(this, t, e, t.pinchX, t.pinchY)
                }
            }

            function l(t, e, i, n) {
                if (this.containsPoint && this.containsPoint(i, n)) {
                    d.stop(t.event);
                    var r = this.target, o = this.zoomLimit;
                    if (r) {
                        var a = r.position, s = r.scale, l = this.zoom = this.zoom || 1;
                        if (l *= e, o) {
                            var h = o.min || 0, u = o.max || 1 / 0;
                            l = Math.max(Math.min(u, l), h)
                        }
                        var c = l / this.zoom;
                        this.zoom = l, a[0] -= (i - a[0]) * (c - 1), a[1] -= (n - a[1]) * (c - 1), s[0] *= c, s[1] *= c, r.dirty()
                    }
                    this.trigger("zoom", e, i, n)
                }
            }

            function h(t, e) {
                this.target = e, this.containsPoint, this.zoomLimit, this.zoom, this._zr = t;
                var i = c.bind, l = i(n, this), h = i(r, this), d = i(o, this), f = i(a, this), p = i(s, this);
                u.call(this), this.setContainsPoint = function (t) {
                    this.containsPoint = t
                }, this.enable = function (e) {
                    this.disable(), null == e && (e = !0), e !== !0 && "move" !== e && "pan" !== e || (t.on("mousedown", l), t.on("mousemove", h), t.on("mouseup", d)), e !== !0 && "scale" !== e && "zoom" !== e || (t.on("mousewheel", f), t.on("pinch", p))
                }, this.disable = function () {
                    t.off("mousedown", l), t.off("mousemove", h), t.off("mouseup", d), t.off("mousewheel", f), t.off("pinch", p)
                }, this.dispose = this.disable, this.isDragging = function () {
                    return this._dragging
                }, this.isPinching = function () {
                    return this._pinching
                }
            }

            var u = i(20), c = i(1), d = i(24), f = i(115);
            c.mixin(h, u), t.exports = h
        }, function (t, e) {
            t.exports = function (t, e, i, n, r) {
                function o(t, e, i) {
                    var n = e.length ? e.slice() : [e, e];
                    return e[0] > e[1] && n.reverse(), t < 0 && n[0] + t < i[0] && (t = i[0] - n[0]), t > 0 && n[1] + t > i[1] && (t = i[1] - n[1]), t
                }

                return t ? ("rigid" === n ? (t = o(t, e, i), e[0] += t, e[1] += t) : (t = o(t, e[r], i), e[r] += t, "push" === n && e[0] > e[1] && (e[1 - r] = e[r])), e) : e
            }
        }, function (t, e, i) {
            var n = i(1), r = {
                show: !0,
                zlevel: 0,
                z: 0,
                inverse: !1,
                name: "",
                nameLocation: "end",
                nameRotate: null,
                nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
                nameTextStyle: {},
                nameGap: 15,
                silent: !1,
                triggerEvent: !1,
                tooltip: {show: !1},
                axisLine: {show: !0, onZero: !0, lineStyle: {color: "#333", width: 1, type: "solid"}},
                axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
                axisLabel: {show: !0, inside: !1, rotate: 0, margin: 8, textStyle: {fontSize: 12}},
                splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
                splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
            }, o = n.merge({
                boundaryGap: !0,
                splitLine: {show: !1},
                axisTick: {alignWithLabel: !1, interval: "auto"},
                axisLabel: {interval: "auto"}
            }, r), a = n.merge({boundaryGap: [0, 0], splitNumber: 5}, r), s = n.defaults({
                scale: !0,
                min: "dataMin",
                max: "dataMax"
            }, a), l = n.defaults({logBase: 10}, a);
            l.scale = !0, t.exports = {categoryAxis: o, valueAxis: a, timeAxis: s, logAxis: l}
        }, function (t, e) {
            t.exports = {
                getMin: function () {
                    var t = this.option, e = null != t.rangeStart ? t.rangeStart : t.min;
                    return e instanceof Date && (e = +e), e
                }, getMax: function () {
                    var t = this.option, e = null != t.rangeEnd ? t.rangeEnd : t.max;
                    return e instanceof Date && (e = +e), e
                }, getNeedCrossZero: function () {
                    var t = this.option;
                    return null == t.rangeStart && null == t.rangeEnd && !t.scale
                }, setRange: function (t, e) {
                    this.option.rangeStart = t, this.option.rangeEnd = e
                }, resetRange: function () {
                    this.option.rangeStart = this.option.rangeEnd = null
                }
            }
        }, function (t, e) {
            var i = {}, n = "\0__throttleOriginMethod", r = "\0__throttleRate", o = "\0__throttleType";
            i.throttle = function (t, e, i) {
                function n() {
                    h = (new Date).getTime(), u = null, t.apply(a, s || [])
                }

                var r, o, a, s, l = 0, h = 0, u = null;
                e = e || 0;
                var c = function () {
                    r = (new Date).getTime(), a = this, s = arguments, o = r - (i ? l : h) - e, clearTimeout(u), i ? u = setTimeout(n, e) : o >= 0 ? n() : u = setTimeout(n, -o), l = r
                };
                return c.clear = function () {
                    u && (clearTimeout(u), u = null)
                }, c
            }, i.createOrUpdate = function (t, e, a, s) {
                var l = t[e];
                if (l) {
                    var h = l[n] || l, u = l[o], c = l[r];
                    if (c !== a || u !== s) {
                        if (null == a || !s)return t[e] = h;
                        l = t[e] = i.throttle(h, a, "debounce" === s), l[n] = h, l[o] = s, l[r] = a
                    }
                    return l
                }
            }, i.clear = function (t, e) {
                var i = t[e];
                i && i[n] && (t[e] = i[n])
            }, t.exports = i
        }, function (t, e) {
            t.exports = {
                containStroke: function (t, e, i, n, r, o, a) {
                    if (0 === r)return !1;
                    var s = r, l = 0, h = t;
                    if (a > e + s && a > n + s || a < e - s && a < n - s || o > t + s && o > i + s || o < t - s && o < i - s)return !1;
                    if (t === i)return Math.abs(o - t) <= s / 2;
                    l = (e - n) / (t - i), h = (t * n - i * e) / (t - i);
                    var u = l * o - a + h, c = u * u / (l * l + 1);
                    return c <= s / 2 * s / 2
                }
            }
        }, function (t, e, i) {
            var n = i(17);
            t.exports = {
                containStroke: function (t, e, i, r, o, a, s, l, h) {
                    if (0 === s)return !1;
                    var u = s;
                    if (h > e + u && h > r + u && h > a + u || h < e - u && h < r - u && h < a - u || l > t + u && l > i + u && l > o + u || l < t - u && l < i - u && l < o - u)return !1;
                    var c = n.quadraticProjectPoint(t, e, i, r, o, a, l, h, null);
                    return c <= u / 2
                }
            }
        }, function (t, e) {
            t.exports = function (t, e, i, n, r, o) {
                if (o > e && o > n || o < e && o < n)return 0;
                if (n === e)return 0;
                var a = n < e ? 1 : -1, s = (o - e) / (n - e);
                1 !== s && 0 !== s || (a = n < e ? .5 : -.5);
                var l = s * (i - t) + t;
                return l > r ? a : 0
            }
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(29), o = function (t, e, i, n, o, a) {
                this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, r.call(this, o)
            };
            o.prototype = {constructor: o}, n.inherits(o, r), t.exports = o
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return t > s || t < -s
            }

            var r = i(19), o = i(5), a = r.identity, s = 5e-5, l = function (t) {
                t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
            }, h = l.prototype;
            h.transform = null, h.needLocalTransform = function () {
                return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
            }, h.updateTransform = function () {
                var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), n = this.transform;
                return i || e ? (n = n || r.create(), i ? this.getLocalTransform(n) : a(n), e && (i ? r.mul(n, t.transform, n) : r.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || r.create(), void r.invert(this.invTransform, n)) : void(n && a(n))
            }, h.getLocalTransform = function (t) {
                t = t || [], a(t);
                var e = this.origin, i = this.scale, n = this.rotation, o = this.position;
                return e && (t[4] -= e[0], t[5] -= e[1]), r.scale(t, t, i), n && r.rotate(t, t, n), e && (t[4] += e[0], t[5] += e[1]), t[4] += o[0], t[5] += o[1], t
            }, h.setTransform = function (t) {
                var e = this.transform, i = t.dpr || 1;
                e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
            }, h.restoreTransform = function (t) {
                var e = (this.transform, t.dpr || 1);
                t.setTransform(e, 0, 0, e, 0, 0)
            };
            var u = [];
            h.decomposeTransform = function () {
                if (this.transform) {
                    var t = this.parent, e = this.transform;
                    t && t.transform && (r.mul(u, t.invTransform, e), e = u);
                    var i = e[0] * e[0] + e[1] * e[1], o = e[2] * e[2] + e[3] * e[3], a = this.position, s = this.scale;
                    n(i - 1) && (i = Math.sqrt(i)), n(o - 1) && (o = Math.sqrt(o)), e[0] < 0 && (i = -i), e[3] < 0 && (o = -o), a[0] = e[4], a[1] = e[5], s[0] = i, s[1] = o, this.rotation = Math.atan2(-e[1] / o, e[0] / i)
                }
            }, h.getGlobalScale = function () {
                var t = this.transform;
                if (!t)return [1, 1];
                var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
                return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i]
            }, h.transformCoordToLocal = function (t, e) {
                var i = [t, e], n = this.invTransform;
                return n && o.applyTransform(i, i, n), i
            }, h.transformCoordToGlobal = function (t, e) {
                var i = [t, e], n = this.transform;
                return n && o.applyTransform(i, i, n), i
            }, t.exports = l
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                r.each(o, function (e) {
                    this[e] = r.bind(t[e], t)
                }, this)
            }

            var r = i(1), o = ["getDom", "getZr", "getWidth", "getHeight", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption"];
            t.exports = n
        }, function (t, e, i) {
            var n = i(1);
            i(54), i(91), i(92);
            var r = i(122), o = i(2);
            o.registerLayout(n.curry(r, "bar")), o.registerVisual(function (t) {
                t.eachSeriesByType("bar", function (t) {
                    var e = t.getData();
                    e.setVisual("legendSymbol", "roundRect")
                })
            }), i(36)
        }, function (t, e, i) {
            "use strict";
            var n = i(15), r = i(35);
            t.exports = n.extend({
                type: "series.bar",
                dependencies: ["grid", "polar"],
                getInitialData: function (t, e) {
                    return r(t.data, this, e)
                },
                getMarkerPosition: function (t) {
                    var e = this.coordinateSystem;
                    if (e) {
                        var i = e.dataToPoint(t, !0), n = this.getData(), r = n.getLayout("offset"), o = n.getLayout("size"), a = e.getBaseAxis().isHorizontal() ? 0 : 1;
                        return i[a] += r + o / 2, i
                    }
                    return [NaN, NaN]
                },
                brushSelector: "rect",
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    coordinateSystem: "cartesian2d",
                    legendHoverLink: !0,
                    barMinHeight: 0,
                    itemStyle: {normal: {}, emphasis: {}}
                }
            })
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                var i = t.width > 0 ? 1 : -1, n = t.height > 0 ? 1 : -1;
                e = Math.min(e, Math.abs(t.width), Math.abs(t.height)), t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t.height -= n * e
            }

            var r = i(1), o = i(3);
            r.extend(i(10).prototype, i(93)), t.exports = i(2).extendChartView({
                type: "bar", render: function (t, e, i) {
                    var n = t.get("coordinateSystem");
                    return "cartesian2d" === n && this._renderOnCartesian(t, e, i), this.group
                }, dispose: r.noop, _renderOnCartesian: function (t, e, i) {
                    function a(e, i) {
                        var a = l.getItemLayout(e), s = l.getItemModel(e).get(p) || 0;
                        n(a, s);
                        var h = new o.Rect({shape: r.extend({}, a)});
                        if (f) {
                            var u = h.shape, c = d ? "height" : "width", g = {};
                            u[c] = 0, g[c] = a[c], o[i ? "updateProps" : "initProps"](h, {shape: g}, t, e)
                        }
                        return h
                    }

                    var s = this.group, l = t.getData(), h = this._data, u = t.coordinateSystem, c = u.getBaseAxis(), d = c.isHorizontal(), f = t.get("animation"), p = ["itemStyle", "normal", "barBorderWidth"];
                    l.diff(h).add(function (t) {
                        if (l.hasValue(t)) {
                            var e = a(t);
                            l.setItemGraphicEl(t, e), s.add(e)
                        }
                    }).update(function (e, i) {
                        var r = h.getItemGraphicEl(i);
                        if (!l.hasValue(e))return void s.remove(r);
                        r || (r = a(e, !0));
                        var u = l.getItemLayout(e), c = l.getItemModel(e).get(p) || 0;
                        n(u, c), o.updateProps(r, {shape: u}, t, e), l.setItemGraphicEl(e, r), s.add(r)
                    }).remove(function (e) {
                        var i = h.getItemGraphicEl(e);
                        i && (i.style.text = "", o.updateProps(i, {shape: {width: 0}}, t, e, function () {
                            s.remove(i)
                        }))
                    }).execute(), this._updateStyle(t, l, d), this._data = l
                }, _updateStyle: function (t, e, i) {
                    function n(t, e, i, n, r) {
                        o.setText(t, e, i), t.text = n, "outside" === t.textPosition && (t.textPosition = r)
                    }

                    e.eachItemGraphicEl(function (a, s) {
                        var l = e.getItemModel(s), h = e.getItemVisual(s, "color"), u = e.getItemVisual(s, "opacity"), c = e.getItemLayout(s), d = l.getModel("itemStyle.normal"), f = l.getModel("itemStyle.emphasis").getBarItemStyle();
                        a.setShape("r", d.get("barBorderRadius") || 0), a.useStyle(r.defaults({
                            fill: h,
                            opacity: u
                        }, d.getBarItemStyle()));
                        var p = i ? c.height > 0 ? "bottom" : "top" : c.width > 0 ? "left" : "right", g = l.getModel("label.normal"), m = l.getModel("label.emphasis"), v = a.style;
                        g.get("show") ? n(v, g, h, r.retrieve(t.getFormattedLabel(s, "normal"), t.getRawValue(s)), p) : v.text = "", m.get("show") ? n(f, m, h, r.retrieve(t.getFormattedLabel(s, "emphasis"), t.getRawValue(s)), p) : f.text = "", o.setHoverStyle(a, f)
                    })
                }, remove: function (t, e) {
                    var i = this.group;
                    t.get("animation") ? this._data && this._data.eachItemGraphicEl(function (e) {
                        e.style.text = "", o.updateProps(e, {shape: {width: 0}}, t, e.dataIndex, function () {
                            i.remove(e)
                        })
                    }) : i.removeAll()
                }
            })
        }, function (t, e, i) {
            var n = i(31)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
            t.exports = {
                getBarItemStyle: function (t) {
                    var e = n.call(this, t);
                    if (this.getBorderLineDash) {
                        var i = this.getBorderLineDash();
                        i && (e.lineDash = i)
                    }
                    return e
                }
            }
        }, function (t, e, i) {
            function n(t) {
                return "_" + t + "Type"
            }

            function r(t, e, i) {
                var n = e.getItemVisual(i, "color"), r = e.getItemVisual(i, t), o = e.getItemVisual(i, t + "Size");
                if (r && "none" !== r) {
                    f.isArray(o) || (o = [o, o]);
                    var a = h.createSymbol(r, -o[0] / 2, -o[1] / 2, o[0], o[1], n);
                    return a.name = t, a
                }
            }

            function o(t) {
                var e = new c({name: "line"});
                return a(e.shape, t), e
            }

            function a(t, e) {
                var i = e[0], n = e[1], r = e[2];
                t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, r ? (t.cpx1 = r[0], t.cpy1 = r[1]) : (t.cpx1 = NaN, t.cpy1 = NaN)
            }

            function s() {
                var t = this, e = t.childOfName("fromSymbol"), i = t.childOfName("toSymbol"), n = t.childOfName("label");
                if (e || i || !n.ignore) {
                    for (var r = 1, o = this.parent; o;)o.scale && (r /= o.scale[0]), o = o.parent;
                    var a = t.childOfName("line");
                    if (this.__dirty || a.__dirty) {
                        var s = a.shape.percent, l = a.pointAt(0), h = a.pointAt(s), c = u.sub([], h, l);
                        if (u.normalize(c, c), e) {
                            e.attr("position", l);
                            var d = a.tangentAt(0);
                            e.attr("rotation", Math.PI / 2 - Math.atan2(d[1], d[0])), e.attr("scale", [r * s, r * s])
                        }
                        if (i) {
                            i.attr("position", h);
                            var d = a.tangentAt(1);
                            i.attr("rotation", -Math.PI / 2 - Math.atan2(d[1], d[0])), i.attr("scale", [r * s, r * s])
                        }
                        if (!n.ignore) {
                            n.attr("position", h);
                            var f, p, g, m = 5 * r;
                            if ("end" === n.__position)f = [c[0] * m + h[0], c[1] * m + h[1]], p = c[0] > .8 ? "left" : c[0] < -.8 ? "right" : "center", g = c[1] > .8 ? "top" : c[1] < -.8 ? "bottom" : "middle"; else if ("middle" === n.__position) {
                                var v = s / 2, d = a.tangentAt(v), y = [d[1], -d[0]], x = a.pointAt(v);
                                y[1] > 0 && (y[0] = -y[0], y[1] = -y[1]), f = [x[0] + y[0] * m, x[1] + y[1] * m], p = "center", g = "bottom";
                                var _ = -Math.atan2(d[1], d[0]);
                                h[0] < l[0] && (_ = Math.PI + _), n.attr("rotation", _)
                            } else f = [-c[0] * m + l[0], -c[1] * m + l[1]], p = c[0] > .8 ? "right" : c[0] < -.8 ? "left" : "center", g = c[1] > .8 ? "bottom" : c[1] < -.8 ? "top" : "middle";
                            n.attr({
                                style: {textVerticalAlign: n.__verticalAlign || g, textAlign: n.__textAlign || p},
                                position: f,
                                scale: [r, r]
                            })
                        }
                    }
                }
            }

            function l(t, e, i) {
                d.Group.call(this), this._createLine(t, e, i)
            }

            var h = i(26), u = i(5), c = i(175), d = i(3), f = i(1), p = i(4), g = ["fromSymbol", "toSymbol"], m = l.prototype;
            m.beforeUpdate = s, m._createLine = function (t, e, i) {
                var a = t.hostModel, s = t.getItemLayout(e), l = o(s);
                l.shape.percent = 0, d.initProps(l, {shape: {percent: 1}}, a, e), this.add(l);
                var h = new d.Text({name: "label"});
                this.add(h), f.each(g, function (i) {
                    var o = r(i, t, e);
                    this.add(o), this[n(i)] = t.getItemVisual(e, i)
                }, this), this._updateCommonStl(t, e, i)
            }, m.updateData = function (t, e, i) {
                var o = t.hostModel, s = this.childOfName("line"), l = t.getItemLayout(e), h = {shape: {}};
                a(h.shape, l), d.updateProps(s, h, o, e), f.each(g, function (i) {
                    var o = t.getItemVisual(e, i), a = n(i);
                    if (this[a] !== o) {
                        this.remove(this.childOfName(i));
                        var s = r(i, t, e);
                        this.add(s)
                    }
                    this[a] = o
                }, this), this._updateCommonStl(t, e, i)
            }, m._updateCommonStl = function (t, e, i) {
                var n = t.hostModel, r = this.childOfName("line"), o = i && i.lineStyle, a = i && i.hoverLineStyle, s = i && i.labelModel, l = i && i.hoverLabelModel;
                if (!i || t.hasItemOption) {
                    var h = t.getItemModel(e);
                    o = h.getModel("lineStyle.normal").getLineStyle(), a = h.getModel("lineStyle.emphasis").getLineStyle(), s = h.getModel("label.normal"), l = h.getModel("label.emphasis")
                }
                var u = t.getItemVisual(e, "color"), c = f.retrieve(t.getItemVisual(e, "opacity"), o.opacity, 1);
                r.useStyle(f.defaults({
                    strokeNoScale: !0,
                    fill: "none",
                    stroke: u,
                    opacity: c
                }, o)), r.hoverStyle = a, f.each(g, function (t) {
                    var e = this.childOfName(t);
                    e && (e.setColor(u), e.setStyle({opacity: c}))
                }, this);
                var m, v, y = s.getShallow("show"), x = l.getShallow("show"), _ = this.childOfName("label");
                if (y || x) {
                    var b = n.getRawValue(e);
                    v = null == b ? v = t.getName(e) : isFinite(b) ? p.round(b) : b, m = u || "#000"
                }
                if (y) {
                    var w = s.getModel("textStyle");
                    _.setStyle({
                        text: f.retrieve(n.getFormattedLabel(e, "normal", t.dataType), v),
                        textFont: w.getFont(),
                        fill: w.getTextColor() || m
                    }), _.__textAlign = w.get("align"), _.__verticalAlign = w.get("baseline"), _.__position = s.get("position")
                } else _.setStyle("text", "");
                if (x) {
                    var M = l.getModel("textStyle");
                    _.hoverStyle = {
                        text: f.retrieve(n.getFormattedLabel(e, "emphasis", t.dataType), v),
                        textFont: M.getFont(),
                        fill: M.getTextColor() || m
                    }
                } else _.hoverStyle = {text: ""};
                _.ignore = !y && !x, d.setHoverStyle(this)
            }, m.updateLayout = function (t, e) {
                this.setLinePoints(t.getItemLayout(e))
            }, m.setLinePoints = function (t) {
                var e = this.childOfName("line");
                a(e.shape, t), e.dirty()
            }, f.inherits(l, d.Group), t.exports = l
        }, function (t, e, i) {
            function n(t) {
                return isNaN(t[0]) || isNaN(t[1])
            }

            function r(t) {
                return !n(t[0]) && !n(t[1])
            }

            function o(t) {
                this._ctor = t || s, this.group = new a.Group
            }

            var a = i(3), s = i(94), l = o.prototype;
            l.updateData = function (t) {
                var e = this._lineData, i = this.group, n = this._ctor, o = t.hostModel, a = {
                    lineStyle: o.getModel("lineStyle.normal").getLineStyle(),
                    hoverLineStyle: o.getModel("lineStyle.emphasis").getLineStyle(),
                    labelModel: o.getModel("label.normal"),
                    hoverLabelModel: o.getModel("label.emphasis")
                };
                t.diff(e).add(function (e) {
                    if (r(t.getItemLayout(e))) {
                        var o = new n(t, e, a);
                        t.setItemGraphicEl(e, o), i.add(o)
                    }
                }).update(function (o, s) {
                    var l = e.getItemGraphicEl(s);
                    return r(t.getItemLayout(o)) ? (l ? l.updateData(t, o, a) : l = new n(t, o, a), t.setItemGraphicEl(o, l), void i.add(l)) : void i.remove(l)
                }).remove(function (t) {
                    i.remove(e.getItemGraphicEl(t))
                }).execute(), this._lineData = t
            }, l.updateLayout = function () {
                var t = this._lineData;
                t.eachItemGraphicEl(function (e, i) {
                    e.updateLayout(t, i)
                }, this)
            }, l.remove = function () {
                this.group.removeAll()
            }, t.exports = o
        }, function (t, e, i) {
            var n = i(1), r = i(2), o = r.PRIORITY;
            i(97), i(98), r.registerVisual(n.curry(i(46), "line", "circle", "line")), r.registerLayout(n.curry(i(55), "line")), r.registerProcessor(o.PROCESSOR.STATISTIC, n.curry(i(134), "line")), i(36)
        }, function (t, e, i) {
            "use strict";
            var n = i(35), r = i(15);
            t.exports = r.extend({
                type: "series.line",
                dependencies: ["grid", "polar"],
                getInitialData: function (t, e) {
                    return n(t.data, this, e)
                },
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    coordinateSystem: "cartesian2d",
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    clipOverflow: !0,
                    label: {normal: {position: "top"}},
                    lineStyle: {normal: {width: 2, type: "solid"}},
                    step: !1,
                    smooth: !1,
                    smoothMonotone: null,
                    symbol: "emptyCircle",
                    symbolSize: 4,
                    symbolRotate: null,
                    showSymbol: !0,
                    showAllSymbol: !1,
                    connectNulls: !1,
                    sampling: "none",
                    animationEasing: "linear",
                    progressive: 0,
                    hoverLayerThreshold: 1 / 0
                }
            })
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                if (t.length === e.length) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i], r = e[i];
                        if (n[0] !== r[0] || n[1] !== r[1])return
                    }
                    return !0
                }
            }

            function r(t) {
                return "number" == typeof t ? t : t ? .3 : 0
            }

            function o(t) {
                var e = t.getGlobalExtent();
                if (t.onBand) {
                    var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
                    e[0] += n * i, e[1] -= n * i
                }
                return e
            }

            function a(t) {
                return t >= 0 ? 1 : -1
            }

            function s(t, e) {
                var i = t.getBaseAxis(), n = t.getOtherAxis(i), r = i.onZero ? 0 : n.scale.getExtent()[0], o = n.dim, s = "x" === o || "radius" === o ? 1 : 0;
                return e.mapArray([o], function (n, l) {
                    for (var h, u = e.stackedOn; u && a(u.get(o, l)) === a(n);) {
                        h = u;
                        break
                    }
                    var c = [];
                    return c[s] = e.get(i.dim, l), c[1 - s] = h ? h.get(o, l, !0) : r, t.dataToPoint(c)
                }, !0)
            }

            function l(t, e, i) {
                var n = o(t.getAxis("x")), r = o(t.getAxis("y")), a = t.getBaseAxis().isHorizontal(), s = Math.min(n[0], n[1]), l = Math.min(r[0], r[1]), h = Math.max(n[0], n[1]) - s, u = Math.max(r[0], r[1]) - l, c = i.get("lineStyle.normal.width") || 2, d = i.get("clipOverflow") ? c / 2 : Math.max(h, u);
                a ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d);
                var f = new y.Rect({shape: {x: s, y: l, width: h, height: u}});
                return e && (f.shape[a ? "width" : "height"] = 0, y.initProps(f, {shape: {width: h, height: u}}, i)), f
            }

            function h(t, e, i) {
                var n = t.getAngleAxis(), r = t.getRadiusAxis(), o = r.getExtent(), a = n.getExtent(), s = Math.PI / 180, l = new y.Sector({
                    shape: {
                        cx: t.cx,
                        cy: t.cy,
                        r0: o[0],
                        r: o[1],
                        startAngle: -a[0] * s,
                        endAngle: -a[1] * s,
                        clockwise: n.inverse
                    }
                });
                return e && (l.shape.endAngle = -a[0] * s, y.initProps(l, {shape: {endAngle: -a[1] * s}}, i)), l
            }

            function u(t, e, i) {
                return "polar" === t.type ? h(t, e, i) : l(t, e, i)
            }

            function c(t, e, i) {
                for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, o = [], a = 0; a < t.length - 1; a++) {
                    var s = t[a + 1], l = t[a];
                    o.push(l);
                    var h = [];
                    switch (i) {
                        case"end":
                            h[r] = s[r], h[1 - r] = l[1 - r], o.push(h);
                            break;
                        case"middle":
                            var u = (l[r] + s[r]) / 2, c = [];
                            h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], o.push(h), o.push(c);
                            break;
                        default:
                            h[r] = l[r], h[1 - r] = s[1 - r], o.push(h)
                    }
                }
                return t[a] && o.push(t[a]), o
            }

            function d(t, e) {
                return Math.max(Math.min(t, e[1]), e[0])
            }

            function f(t, e) {
                var i = t.getVisual("visualMeta");
                if (i && i.length && t.count()) {
                    for (var n, r = i.length - 1; r >= 0; r--)if (i[r].dimension < 2) {
                        n = i[r];
                        break
                    }
                    if (n && "cartesian2d" === e.type) {
                        var o = n.dimension, a = t.dimensions[o], s = t.getDataExtent(a), l = n.stops, h = [];
                        l[0].interval && l.sort(function (t, e) {
                            return t.interval[0] - e.interval[0]
                        });
                        var u = l[0], c = l[l.length - 1], f = u.interval ? d(u.interval[0], s) : u.value, p = c.interval ? d(c.interval[1], s) : c.value, g = p - f;
                        if (0 === g)return t.getItemVisual(0, "color");
                        for (var r = 0; r < l.length; r++)if (l[r].interval) {
                            if (l[r].interval[1] === l[r].interval[0])continue;
                            h.push({
                                offset: (d(l[r].interval[0], s) - f) / g,
                                color: l[r].color
                            }, {offset: (d(l[r].interval[1], s) - f) / g, color: l[r].color})
                        } else h.push({offset: (l[r].value - f) / g, color: l[r].color});
                        var m = new y.LinearGradient(0, 0, 0, 0, h, (!0)), v = e.getAxis(a), x = v.toGlobalCoord(v.dataToCoord(f)), _ = v.toGlobalCoord(v.dataToCoord(p));
                        return m[a] = x, m[a + "2"] = _, m
                    }
                }
            }

            var p = i(1), g = i(39), m = i(49), v = i(99), y = i(3), x = i(7), _ = i(100), b = i(27);
            t.exports = b.extend({
                type: "line", init: function () {
                    var t = new y.Group, e = new g;
                    this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
                }, render: function (t, e, i) {
                    var o = t.coordinateSystem, a = this.group, l = t.getData(), h = t.getModel("lineStyle.normal"), d = t.getModel("areaStyle.normal"), g = l.mapArray(l.getItemLayout, !0), m = "polar" === o.type, v = this._coordSys, y = this._symbolDraw, x = this._polyline, _ = this._polygon, b = this._lineGroup, w = t.get("animation"), M = !d.isEmpty(), S = s(o, l), T = t.get("showSymbol"), A = T && !m && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, o), I = this._data;
                    I && I.eachItemGraphicEl(function (t, e) {
                        t.__temp && (a.remove(t), I.setItemGraphicEl(e, null))
                    }), T || y.remove(), a.add(b);
                    var C = !m && t.get("step");
                    x && v.type === o.type && C === this._step ? (M && !_ ? _ = this._newPolygon(g, S, o, w) : _ && !M && (b.remove(_), _ = this._polygon = null), b.setClipPath(u(o, !1, t)), T && y.updateData(l, A), l.eachItemGraphicEl(function (t) {
                        t.stopAnimation(!0)
                    }), n(this._stackedOnPoints, S) && n(this._points, g) || (w ? this._updateAnimation(l, S, o, i, C) : (C && (g = c(g, o, C), S = c(S, o, C)), x.setShape({points: g}), _ && _.setShape({
                        points: g,
                        stackedOnPoints: S
                    })))) : (T && y.updateData(l, A), C && (g = c(g, o, C), S = c(S, o, C)), x = this._newPolyline(g, o, w), M && (_ = this._newPolygon(g, S, o, w)), b.setClipPath(u(o, !0, t)));
                    var L = f(l, o) || l.getVisual("color");
                    x.useStyle(p.defaults(h.getLineStyle(), {fill: "none", stroke: L, lineJoin: "bevel"}));
                    var P = t.get("smooth");
                    if (P = r(t.get("smooth")), x.setShape({
                            smooth: P,
                            smoothMonotone: t.get("smoothMonotone"),
                            connectNulls: t.get("connectNulls")
                        }), _) {
                        var k = l.stackedOn, D = 0;
                        if (_.useStyle(p.defaults(d.getAreaStyle(), {fill: L, opacity: .7, lineJoin: "bevel"})), k) {
                            var O = k.hostModel;
                            D = r(O.get("smooth"))
                        }
                        _.setShape({
                            smooth: P,
                            stackedOnSmooth: D,
                            smoothMonotone: t.get("smoothMonotone"),
                            connectNulls: t.get("connectNulls")
                        })
                    }
                    this._data = l, this._coordSys = o, this._stackedOnPoints = S, this._points = g, this._step = C
                }, dispose: function () {
                }, highlight: function (t, e, i, n) {
                    var r = t.getData(), o = x.queryDataIndex(r, n);
                    if (!(o instanceof Array) && null != o && o >= 0) {
                        var a = r.getItemGraphicEl(o);
                        if (!a) {
                            var s = r.getItemLayout(o);
                            a = new m(r, o), a.position = s, a.setZ(t.get("zlevel"), t.get("z")), a.ignore = isNaN(s[0]) || isNaN(s[1]), a.__temp = !0, r.setItemGraphicEl(o, a), a.stopSymbolAnimation(!0), this.group.add(a)
                        }
                        a.highlight()
                    } else b.prototype.highlight.call(this, t, e, i, n)
                }, downplay: function (t, e, i, n) {
                    var r = t.getData(), o = x.queryDataIndex(r, n);
                    if (null != o && o >= 0) {
                        var a = r.getItemGraphicEl(o);
                        a && (a.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(a)) : a.downplay())
                    } else b.prototype.downplay.call(this, t, e, i, n)
                }, _newPolyline: function (t) {
                    var e = this._polyline;
                    return e && this._lineGroup.remove(e), e = new _.Polyline({
                        shape: {points: t},
                        silent: !0,
                        z2: 10
                    }), this._lineGroup.add(e), this._polyline = e, e
                }, _newPolygon: function (t, e) {
                    var i = this._polygon;
                    return i && this._lineGroup.remove(i), i = new _.Polygon({
                        shape: {points: t, stackedOnPoints: e},
                        silent: !0
                    }), this._lineGroup.add(i), this._polygon = i, i
                }, _getSymbolIgnoreFunc: function (t, e) {
                    var i = e.getAxesByScale("ordinal")[0];
                    if (i && i.isLabelIgnored)return p.bind(i.isLabelIgnored, i)
                }, _updateAnimation: function (t, e, i, n, r) {
                    var o = this._polyline, a = this._polygon, s = t.hostModel, l = v(this._data, t, this._stackedOnPoints, e, this._coordSys, i), h = l.current, u = l.stackedOnCurrent, d = l.next, f = l.stackedOnNext;
                    r && (h = c(l.current, i, r), u = c(l.stackedOnCurrent, i, r), d = c(l.next, i, r), f = c(l.stackedOnNext, i, r)), o.shape.__points = l.current, o.shape.points = h, y.updateProps(o, {shape: {points: d}}, s), a && (a.setShape({
                        points: h,
                        stackedOnPoints: u
                    }), y.updateProps(a, {shape: {points: d, stackedOnPoints: f}}, s));
                    for (var p = [], g = l.status, m = 0; m < g.length; m++) {
                        var x = g[m].cmd;
                        if ("=" === x) {
                            var _ = t.getItemGraphicEl(g[m].idx1);
                            _ && p.push({el: _, ptIdx: m})
                        }
                    }
                    o.animators && o.animators.length && o.animators[0].during(function () {
                        for (var t = 0; t < p.length; t++) {
                            var e = p[t].el;
                            e.attr("position", o.shape.__points[p[t].ptIdx])
                        }
                    })
                }, remove: function (t) {
                    var e = this.group, i = this._data;
                    this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function (t, n) {
                        t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))
                    }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
                }
            })
        }, function (t, e) {
            function i(t) {
                return t >= 0 ? 1 : -1
            }

            function n(t, e, n) {
                for (var r, o = t.getBaseAxis(), a = t.getOtherAxis(o), s = o.onZero ? 0 : a.scale.getExtent()[0], l = a.dim, h = "x" === l || "radius" === l ? 1 : 0, u = e.stackedOn, c = e.get(l, n); u && i(u.get(l, n)) === i(c);) {
                    r = u;
                    break
                }
                var d = [];
                return d[h] = e.get(o.dim, n), d[1 - h] = r ? r.get(l, n, !0) : s, t.dataToPoint(d)
            }

            function r(t, e) {
                var i = [];
                return e.diff(t).add(function (t) {
                    i.push({cmd: "+", idx: t})
                }).update(function (t, e) {
                    i.push({cmd: "=", idx: e, idx1: t})
                }).remove(function (t) {
                    i.push({cmd: "-", idx: t})
                }).execute(), i
            }

            t.exports = function (t, e, i, o, a, s) {
                for (var l = r(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], m = s.dimensions, v = 0; v < l.length; v++) {
                    var y = l[v], x = !0;
                    switch (y.cmd) {
                        case"=":
                            var _ = t.getItemLayout(y.idx), b = e.getItemLayout(y.idx1);
                            (isNaN(_[0]) || isNaN(_[1])) && (_ = b.slice()), h.push(_), u.push(b), c.push(i[y.idx]), d.push(o[y.idx1]), g.push(e.getRawIndex(y.idx1));
                            break;
                        case"+":
                            var w = y.idx;
                            h.push(a.dataToPoint([e.get(m[0], w, !0), e.get(m[1], w, !0)])), u.push(e.getItemLayout(w).slice()), c.push(n(a, e, w)), d.push(o[w]), g.push(e.getRawIndex(w));
                            break;
                        case"-":
                            var w = y.idx, M = t.getRawIndex(w);
                            M !== w ? (h.push(t.getItemLayout(w)), u.push(s.dataToPoint([t.get(m[0], w, !0), t.get(m[1], w, !0)])), c.push(i[w]), d.push(n(s, t, w)), g.push(M)) : x = !1
                    }
                    x && (f.push(y), p.push(p.length))
                }
                p.sort(function (t, e) {
                    return g[t] - g[e]
                });
                for (var S = [], T = [], A = [], I = [], C = [], v = 0; v < p.length; v++) {
                    var w = p[v];
                    S[v] = h[w], T[v] = u[w], A[v] = c[w], I[v] = d[w], C[v] = f[w]
                }
                return {current: S, next: T, stackedOnCurrent: A, stackedOnNext: I, status: C}
            }
        }, function (t, e, i) {
            function n(t) {
                return isNaN(t[0]) || isNaN(t[1])
            }

            function r(t, e, i, r, o, a, g, m, v, y, x) {
                for (var _ = 0, b = i, w = 0; w < r; w++) {
                    var M = e[b];
                    if (b >= o || b < 0)break;
                    if (n(M)) {
                        if (x) {
                            b += a;
                            continue
                        }
                        break
                    }
                    if (b === i)t[a > 0 ? "moveTo" : "lineTo"](M[0], M[1]), c(f, M); else if (v > 0) {
                        var S = b + a, T = e[S];
                        if (x)for (; T && n(e[S]);)S += a, T = e[S];
                        var A = .5, I = e[_], T = e[S];
                        if (!T || n(T))c(p, M); else {
                            n(T) && !x && (T = M), s.sub(d, T, I);
                            var C, L;
                            if ("x" === y || "y" === y) {
                                var P = "x" === y ? 0 : 1;
                                C = Math.abs(M[P] - I[P]), L = Math.abs(M[P] - T[P])
                            } else C = s.dist(M, I), L = s.dist(M, T);
                            A = L / (L + C), u(p, M, d, -v * (1 - A))
                        }
                        l(f, f, m), h(f, f, g), l(p, p, m), h(p, p, g), t.bezierCurveTo(f[0], f[1], p[0], p[1], M[0], M[1]), u(f, M, d, v * A)
                    } else t.lineTo(M[0], M[1]);
                    _ = b, b += a
                }
                return w
            }

            function o(t, e) {
                var i = [1 / 0, 1 / 0], n = [-(1 / 0), -(1 / 0)];
                if (e)for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o[0] < i[0] && (i[0] = o[0]), o[1] < i[1] && (i[1] = o[1]), o[0] > n[0] && (n[0] = o[0]), o[1] > n[1] && (n[1] = o[1])
                }
                return {min: e ? i : n, max: e ? n : i}
            }

            var a = i(6), s = i(5), l = s.min, h = s.max, u = s.scaleAndAdd, c = s.copy, d = [], f = [], p = [];
            t.exports = {
                Polyline: a.extend({
                    type: "ec-polyline",
                    shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
                    style: {fill: null, stroke: "#000"},
                    buildPath: function (t, e) {
                        var i = e.points, a = 0, s = i.length, l = o(i, e.smoothConstraint);
                        if (e.connectNulls) {
                            for (; s > 0 && n(i[s - 1]); s--);
                            for (; a < s && n(i[a]); a++);
                        }
                        for (; a < s;)a += r(t, i, a, s, s, 1, l.min, l.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
                    }
                }),
                Polygon: a.extend({
                    type: "ec-polygon",
                    shape: {
                        points: [],
                        stackedOnPoints: [],
                        smooth: 0,
                        stackedOnSmooth: 0,
                        smoothConstraint: !0,
                        smoothMonotone: null,
                        connectNulls: !1
                    },
                    buildPath: function (t, e) {
                        var i = e.points, a = e.stackedOnPoints, s = 0, l = i.length, h = e.smoothMonotone, u = o(i, e.smoothConstraint), c = o(a, e.smoothConstraint);
                        if (e.connectNulls) {
                            for (; l > 0 && n(i[l - 1]); l--);
                            for (; s < l && n(i[s]); s++);
                        }
                        for (; s < l;) {
                            var d = r(t, i, s, l, l, 1, u.min, u.max, e.smooth, h, e.connectNulls);
                            r(t, a, s + d - 1, d, l, -1, c.min, c.max, e.stackedOnSmooth, h, e.connectNulls), s += d + 1, t.closePath()
                        }
                    }
                })
            }
        }, function (t, e, i) {
            var n = i(1), r = i(2);
            i(102), i(103), i(77)("pie", [{
                type: "pieToggleSelect",
                event: "pieselectchanged",
                method: "toggleSelected"
            }, {type: "pieSelect", event: "pieselected", method: "select"}, {
                type: "pieUnSelect",
                event: "pieunselected",
                method: "unSelect"
            }]), r.registerVisual(n.curry(i(72), "pie")), r.registerLayout(n.curry(i(105), "pie")), r.registerProcessor(n.curry(i(70), "pie"))
        }, function (t, e, i) {
            "use strict";
            var n = i(14), r = i(1), o = i(7), a = i(30), s = i(66), l = i(2).extendSeriesModel({
                type: "series.pie",
                init: function (t) {
                    l.superApply(this, "init", arguments), this.legendDataProvider = function () {
                        return this._dataBeforeProcessed
                    }, this.updateSelectedMap(t.data), this._defaultLabelLine(t)
                },
                mergeOption: function (t) {
                    l.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
                },
                getInitialData: function (t, e) {
                    var i = a(["value"], t.data), r = new n(i, this);
                    return r.initData(t.data), r
                },
                getDataParams: function (t) {
                    var e = this._data, i = l.superCall(this, "getDataParams", t), n = e.getSum("value");
                    return i.percent = n ? +(e.get("value", t) / n * 100).toFixed(2) : 0, i.$vars.push("percent"), i
                },
                _defaultLabelLine: function (t) {
                    o.defaultEmphasis(t.labelLine, ["show"]);
                    var e = t.labelLine.normal, i = t.labelLine.emphasis;
                    e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
                },
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    center: ["50%", "50%"],
                    radius: [0, "75%"],
                    clockwise: !0,
                    startAngle: 90,
                    minAngle: 0,
                    selectedOffset: 10,
                    avoidLabelOverlap: !0,
                    label: {normal: {rotate: !1, show: !0, position: "outer"}, emphasis: {}},
                    labelLine: {
                        normal: {
                            show: !0,
                            length: 15,
                            length2: 15,
                            smooth: !1,
                            lineStyle: {width: 1, type: "solid"}
                        }
                    },
                    itemStyle: {normal: {borderWidth: 1}, emphasis: {}},
                    animationEasing: "cubicOut",
                    data: []
                }
            });
            r.mixin(l, s), t.exports = l;
        }, function (t, e, i) {
            function n(t, e, i, n) {
                var o = e.getData(), a = this.dataIndex, s = o.getName(a), l = e.get("selectedOffset");
                n.dispatchAction({type: "pieToggleSelect", from: t, name: s, seriesId: e.id}), o.each(function (t) {
                    r(o.getItemGraphicEl(t), o.getItemLayout(t), e.isSelected(o.getName(t)), l, i)
                })
            }

            function r(t, e, i, n, r) {
                var o = (e.startAngle + e.endAngle) / 2, a = Math.cos(o), s = Math.sin(o), l = i ? n : 0, h = [a * l, s * l];
                r ? t.animate().when(200, {position: h}).start("bounceOut") : t.attr("position", h)
            }

            function o(t, e) {
                function i() {
                    o.ignore = o.hoverIgnore, a.ignore = a.hoverIgnore
                }

                function n() {
                    o.ignore = o.normalIgnore, a.ignore = a.normalIgnore
                }

                s.Group.call(this);
                var r = new s.Sector({z2: 2}), o = new s.Polyline, a = new s.Text;
                this.add(r), this.add(o), this.add(a), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
            }

            function a(t, e, i, n, r) {
                var o = n.getModel("textStyle"), a = "inside" === r || "inner" === r;
                return {
                    fill: o.getTextColor() || (a ? "#fff" : t.getItemVisual(e, "color")),
                    opacity: t.getItemVisual(e, "opacity"),
                    textFont: o.getFont(),
                    text: l.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
                }
            }

            var s = i(3), l = i(1), h = o.prototype;
            h.updateData = function (t, e, i) {
                function n() {
                    a.stopAnimation(!0), a.animateTo({shape: {r: c.r + 10}}, 300, "elasticOut")
                }

                function o() {
                    a.stopAnimation(!0), a.animateTo({shape: {r: c.r}}, 300, "elasticOut")
                }

                var a = this.childAt(0), h = t.hostModel, u = t.getItemModel(e), c = t.getItemLayout(e), d = l.extend({}, c);
                d.label = null, i ? (a.setShape(d), a.shape.endAngle = c.startAngle, s.updateProps(a, {shape: {endAngle: c.endAngle}}, h, e)) : s.updateProps(a, {shape: d}, h, e);
                var f = u.getModel("itemStyle"), p = t.getItemVisual(e, "color");
                a.useStyle(l.defaults({
                    lineJoin: "bevel",
                    fill: p
                }, f.getModel("normal").getItemStyle())), a.hoverStyle = f.getModel("emphasis").getItemStyle(), r(this, t.getItemLayout(e), u.get("selected"), h.get("selectedOffset"), h.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && h.ifEnableAnimation() && a.on("mouseover", n).on("mouseout", o).on("emphasis", n).on("normal", o), this._updateLabel(t, e), s.setHoverStyle(this)
            }, h._updateLabel = function (t, e) {
                var i = this.childAt(1), n = this.childAt(2), r = t.hostModel, o = t.getItemModel(e), l = t.getItemLayout(e), h = l.label, u = t.getItemVisual(e, "color");
                s.updateProps(i, {shape: {points: h.linePoints || [[h.x, h.y], [h.x, h.y], [h.x, h.y]]}}, r, e), s.updateProps(n, {
                    style: {
                        x: h.x,
                        y: h.y
                    }
                }, r, e), n.attr({
                    style: {textVerticalAlign: h.verticalAlign, textAlign: h.textAlign, textFont: h.font},
                    rotation: h.rotation,
                    origin: [h.x, h.y],
                    z2: 10
                });
                var c = o.getModel("label.normal"), d = o.getModel("label.emphasis"), f = o.getModel("labelLine.normal"), p = o.getModel("labelLine.emphasis"), g = c.get("position") || d.get("position");
                n.setStyle(a(t, e, "normal", c, g)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({
                    stroke: u,
                    opacity: t.getItemVisual(e, "opacity")
                }), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = a(t, e, "emphasis", d, g), i.hoverStyle = p.getModel("lineStyle").getLineStyle();
                var m = f.get("smooth");
                m && m === !0 && (m = .4), i.setShape({smooth: m})
            }, l.inherits(o, s.Group);
            var u = i(27).extend({
                type: "pie", init: function () {
                    var t = new s.Group;
                    this._sectorGroup = t
                }, render: function (t, e, i, r) {
                    if (!r || r.from !== this.uid) {
                        var a = t.getData(), s = this._data, h = this.group, u = e.get("animation"), c = !s, d = l.curry(n, this.uid, t, u, i), f = t.get("selectedMode");
                        if (a.diff(s).add(function (t) {
                                var e = new o(a, t);
                                c && e.eachChild(function (t) {
                                    t.stopAnimation(!0)
                                }), f && e.on("click", d), a.setItemGraphicEl(t, e), h.add(e)
                            }).update(function (t, e) {
                                var i = s.getItemGraphicEl(e);
                                i.updateData(a, t), i.off("click"), f && i.on("click", d), h.add(i), a.setItemGraphicEl(t, i)
                            }).remove(function (t) {
                                var e = s.getItemGraphicEl(t);
                                h.remove(e)
                            }).execute(), u && c && a.count() > 0) {
                            var p = a.getItemLayout(0), g = Math.max(i.getWidth(), i.getHeight()) / 2, m = l.bind(h.removeClipPath, h);
                            h.setClipPath(this._createClipPath(p.cx, p.cy, g, p.startAngle, p.clockwise, m, t))
                        }
                        this._data = a
                    }
                }, dispose: function () {
                }, _createClipPath: function (t, e, i, n, r, o, a) {
                    var l = new s.Sector({shape: {cx: t, cy: e, r0: 0, r: i, startAngle: n, endAngle: n, clockwise: r}});
                    return s.initProps(l, {shape: {endAngle: n + (r ? 1 : -1) * Math.PI * 2}}, a, o), l
                }, containPoint: function (t, e) {
                    var i = e.getData(), n = i.getItemLayout(0);
                    if (n) {
                        var r = t[0] - n.cx, o = t[1] - n.cy, a = Math.sqrt(r * r + o * o);
                        return a <= n.r && a >= n.r0
                    }
                }
            });
            t.exports = u
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i, n, r, o, a) {
                function s(e, i, n, r) {
                    for (var o = e; o < i; o++)if (t[o].y += n, o > e && o + 1 < i && t[o + 1].y > t[o].y + t[o].height)return void l(o, n / 2);
                    l(i - 1, n / 2)
                }

                function l(e, i) {
                    for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
                }

                function h(t, e, i, n, r, o) {
                    for (var a = o > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)if ("center" !== t[s].position) {
                        var h = Math.abs(t[s].y - n), u = t[s].len, c = t[s].len2, d = h < r + u ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - i);
                        e && d >= a && (d = a - 10), !e && d <= a && (d = a + 10), t[s].x = i + d * o, a = d
                    }
                }

                t.sort(function (t, e) {
                    return t.y - e.y
                });
                for (var u, c = 0, d = t.length, f = [], p = [], g = 0; g < d; g++)u = t[g].y - c, u < 0 && s(g, d, -u, r), c = t[g].y + t[g].height;
                a - c < 0 && l(d - 1, c - a);
                for (var g = 0; g < d; g++)t[g].y >= i ? p.push(t[g]) : f.push(t[g]);
                h(f, !1, e, i, n, r), h(p, !0, e, i, n, r)
            }

            function r(t, e, i, r, o, a) {
                for (var s = [], l = [], h = 0; h < t.length; h++)t[h].x < e ? s.push(t[h]) : l.push(t[h]);
                n(l, e, i, r, 1, o, a), n(s, e, i, r, -1, o, a);
                for (var h = 0; h < t.length; h++) {
                    var u = t[h].linePoints;
                    if (u) {
                        var c = u[1][0] - u[2][0];
                        t[h].x < e ? u[2][0] = t[h].x + 3 : u[2][0] = t[h].x - 3, u[1][1] = u[2][1] = t[h].y, u[1][0] = u[2][0] + c
                    }
                }
            }

            var o = i(16);
            t.exports = function (t, e, i, n) {
                var a, s, l = t.getData(), h = [], u = !1;
                l.each(function (i) {
                    var n, r, c, d, f = l.getItemLayout(i), p = l.getItemModel(i), g = p.getModel("label.normal"), m = g.get("position") || p.get("label.emphasis.position"), v = p.getModel("labelLine.normal"), y = v.get("length"), x = v.get("length2"), _ = (f.startAngle + f.endAngle) / 2, b = Math.cos(_), w = Math.sin(_);
                    a = f.cx, s = f.cy;
                    var M = "inside" === m || "inner" === m;
                    if ("center" === m)n = f.cx, r = f.cy, d = "center"; else {
                        var S = (M ? (f.r + f.r0) / 2 * b : f.r * b) + a, T = (M ? (f.r + f.r0) / 2 * w : f.r * w) + s;
                        if (n = S + 3 * b, r = T + 3 * w, !M) {
                            var A = S + b * (y + e - f.r), I = T + w * (y + e - f.r), C = A + (b < 0 ? -1 : 1) * x, L = I;
                            n = C + (b < 0 ? -5 : 5), r = L, c = [[S, T], [A, I], [C, L]]
                        }
                        d = M ? "center" : b > 0 ? "left" : "right"
                    }
                    var P = g.getModel("textStyle").getFont(), k = g.get("rotate") ? b < 0 ? -_ + Math.PI : -_ : 0, D = t.getFormattedLabel(i, "normal") || l.getName(i), O = o.getBoundingRect(D, P, d, "top");
                    u = !!k, f.label = {
                        x: n,
                        y: r,
                        position: m,
                        height: O.height,
                        len: y,
                        len2: x,
                        linePoints: c,
                        textAlign: d,
                        verticalAlign: "middle",
                        font: P,
                        rotation: k
                    }, M || h.push(f.label)
                }), !u && t.get("avoidLabelOverlap") && r(h, a, s, e, i, n)
            }
        }, function (t, e, i) {
            var n = i(4), r = n.parsePercent, o = i(104), a = i(1), s = 2 * Math.PI, l = Math.PI / 180;
            t.exports = function (t, e, i, h) {
                e.eachSeriesByType(t, function (t) {
                    var e = t.get("center"), h = t.get("radius");
                    a.isArray(h) || (h = [0, h]), a.isArray(e) || (e = [e, e]);
                    var u = i.getWidth(), c = i.getHeight(), d = Math.min(u, c), f = r(e[0], u), p = r(e[1], c), g = r(h[0], d / 2), m = r(h[1], d / 2), v = t.getData(), y = -t.get("startAngle") * l, x = t.get("minAngle") * l, _ = v.getSum("value"), b = Math.PI / (_ || v.count()) * 2, w = t.get("clockwise"), M = t.get("roseType"), S = v.getDataExtent("value");
                    S[0] = 0;
                    var T = s, A = 0, I = y, C = w ? 1 : -1;
                    if (v.each("value", function (t, e) {
                            var i;
                            i = "area" !== M ? 0 === _ ? b : t * b : s / (v.count() || 1), i < x ? (i = x, T -= x) : A += t;
                            var r = I + C * i;
                            v.setItemLayout(e, {
                                angle: i,
                                startAngle: I,
                                endAngle: r,
                                clockwise: w,
                                cx: f,
                                cy: p,
                                r0: g,
                                r: M ? n.linearMap(t, S, [g, m]) : m
                            }), I = r
                        }, !0), T < s)if (T <= .001) {
                        var L = s / v.count();
                        v.each(function (t) {
                            var e = v.getItemLayout(t);
                            e.startAngle = y + C * t * L, e.endAngle = y + C * (t + 1) * L
                        })
                    } else b = T / A, I = y, v.each("value", function (t, e) {
                        var i = v.getItemLayout(e), n = i.angle === x ? x : t * b;
                        i.startAngle = I, i.endAngle = I + C * n, I += n
                    });
                    o(t, m, u, c)
                })
            }
        }, function (t, e, i) {
            "use strict";
            i(53), i(107)
        }, function (t, e, i) {
            function n(t, e) {
                function i(t, e) {
                    var i = n.getAxis(t);
                    return i.toGlobalCoord(i.dataToCoord(0))
                }

                var n = t.coordinateSystem, r = e.axis, o = {}, a = r.position, s = r.onZero ? "onZero" : a, l = r.dim, h = n.getRect(), u = [h.x, h.x + h.width, h.y, h.y + h.height], c = e.get("offset") || 0, d = {
                    x: {
                        top: u[2] - c,
                        bottom: u[3] + c
                    }, y: {left: u[0] - c, right: u[1] + c}
                };
                d.x.onZero = Math.max(Math.min(i("y"), d.x.bottom), d.x.top), d.y.onZero = Math.max(Math.min(i("x"), d.y.right), d.y.left), o.position = ["y" === l ? d.y[s] : u[0], "x" === l ? d.x[s] : u[3]], o.rotation = Math.PI / 2 * ("x" === l ? 0 : 1);
                var f = {top: -1, bottom: 1, left: -1, right: 1};
                o.labelDirection = o.tickDirection = o.nameDirection = f[a], r.onZero && (o.labelOffset = d[l][a] - d[l].onZero), e.getModel("axisTick").get("inside") && (o.tickDirection = -o.tickDirection), e.getModel("axisLabel").get("inside") && (o.labelDirection = -o.labelDirection);
                var p = e.getModel("axisLabel").get("rotate");
                return o.labelRotation = "top" === s ? -p : p, o.labelInterval = r.getLabelInterval(), o.z2 = 1, o
            }

            var r = i(1), o = i(3), a = i(50), s = a.ifIgnoreOnTick, l = a.getInterval, h = ["axisLine", "axisLabel", "axisTick", "axisName"], u = ["splitArea", "splitLine"], c = i(2).extendComponentView({
                type: "axis",
                render: function (t, e) {
                    this.group.removeAll();
                    var i = this._axisGroup;
                    if (this._axisGroup = new o.Group, this.group.add(this._axisGroup), t.get("show")) {
                        var s = t.findGridModel(), l = n(s, t), c = new a(t, l);
                        r.each(h, c.add, c), this._axisGroup.add(c.getGroup()), r.each(u, function (e) {
                            t.get(e + ".show") && this["_" + e](t, s, l.labelInterval)
                        }, this), o.groupTransition(i, this._axisGroup, t)
                    }
                },
                _splitLine: function (t, e, i) {
                    var n = t.axis, a = t.getModel("splitLine"), h = a.getModel("lineStyle"), u = h.get("color"), c = l(a, i);
                    u = r.isArray(u) ? u : [u];
                    for (var d = e.coordinateSystem.getRect(), f = n.isHorizontal(), p = 0, g = n.getTicksCoords(), m = n.scale.getTicks(), v = [], y = [], x = h.getLineStyle(), _ = 0; _ < g.length; _++)if (!s(n, _, c)) {
                        var b = n.toGlobalCoord(g[_]);
                        f ? (v[0] = b, v[1] = d.y, y[0] = b, y[1] = d.y + d.height) : (v[0] = d.x, v[1] = b, y[0] = d.x + d.width, y[1] = b);
                        var w = p++ % u.length;
                        this._axisGroup.add(new o.Line(o.subPixelOptimizeLine({
                            anid: "line_" + m[_],
                            shape: {x1: v[0], y1: v[1], x2: y[0], y2: y[1]},
                            style: r.defaults({stroke: u[w]}, x),
                            silent: !0
                        })))
                    }
                },
                _splitArea: function (t, e, i) {
                    var n = t.axis, a = t.getModel("splitArea"), h = a.getModel("areaStyle"), u = h.get("color"), c = e.coordinateSystem.getRect(), d = n.getTicksCoords(), f = n.scale.getTicks(), p = n.toGlobalCoord(d[0]), g = n.toGlobalCoord(d[0]), m = 0, v = l(a, i), y = h.getAreaStyle();
                    u = r.isArray(u) ? u : [u];
                    for (var x = 1; x < d.length; x++)if (!s(n, x, v)) {
                        var _, b, w, M, S = n.toGlobalCoord(d[x]);
                        n.isHorizontal() ? (_ = p, b = c.y, w = S - _, M = c.height) : (_ = c.x, b = g, w = c.width, M = S - b);
                        var T = m++ % u.length;
                        this._axisGroup.add(new o.Rect({
                            anid: "area_" + f[x],
                            shape: {x: _, y: b, width: w, height: M},
                            style: r.defaults({fill: u[T]}, y),
                            silent: !0
                        })), p = _ + w, g = b + M
                    }
                }
            });
            c.extend({type: "xAxis"}), c.extend({type: "yAxis"})
        }, function (t, e, i) {
            var n = i(1), r = i(110), o = i(2);
            o.registerAction("dataZoom", function (t, e) {
                var i = r.createLinkedNodesFinder(n.bind(e.eachComponent, e, "dataZoom"), r.eachAxisDim, function (t, e) {
                    return t.get(e.axisIndex)
                }), o = [];
                e.eachComponent({mainType: "dataZoom", query: t}, function (t, e) {
                    o.push.apply(o, i(t).nodes)
                }), n.each(o, function (e, i) {
                    e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
                })
            })
        }, function (t, e, i) {
            function n(t, e, i) {
                i.getAxisProxy(t.name, e).reset(i)
            }

            function r(t, e, i) {
                i.getAxisProxy(t.name, e).filterData(i)
            }

            var o = i(2);
            o.registerProcessor(function (t, e) {
                t.eachComponent("dataZoom", function (t) {
                    t.eachTargetAxis(n), t.eachTargetAxis(r)
                }), t.eachComponent("dataZoom", function (t) {
                    var e = t.findRepresentativeAxisProxy(), i = e.getDataPercentWindow(), n = e.getDataValueWindow();
                    t.setRawRange({start: i[0], end: i[1], startValue: n[0], endValue: n[1]})
                })
            })
        }, function (t, e, i) {
            var n = i(9), r = i(1), o = {}, a = ["x", "y", "z", "radius", "angle"];
            o.createNameEach = function (t, e) {
                t = t.slice();
                var i = r.map(t, n.capitalFirst);
                e = (e || []).slice();
                var o = r.map(e, n.capitalFirst);
                return function (n, a) {
                    r.each(t, function (t, r) {
                        for (var s = {name: t, capital: i[r]}, l = 0; l < e.length; l++)s[e[l]] = t + o[l];
                        n.call(a, s)
                    })
                }
            }, o.eachAxisDim = o.createNameEach(a, ["axisIndex", "axis", "index", "id"]), o.createLinkedNodesFinder = function (t, e, i) {
                function n(t, e) {
                    return r.indexOf(e.nodes, t) >= 0
                }

                function o(t, n) {
                    var o = !1;
                    return e(function (e) {
                        r.each(i(t, e) || [], function (t) {
                            n.records[e.name][t] && (o = !0)
                        })
                    }), o
                }

                function a(t, n) {
                    n.nodes.push(t), e(function (e) {
                        r.each(i(t, e) || [], function (t) {
                            n.records[e.name][t] = !0
                        })
                    })
                }

                return function (i) {
                    function r(t) {
                        !n(t, s) && o(t, s) && (a(t, s), l = !0)
                    }

                    var s = {nodes: [], records: {}};
                    if (e(function (t) {
                            s.records[t.name] = {}
                        }), !i)return s;
                    a(i, s);
                    var l;
                    do l = !1, t(r); while (l);
                    return s
                }
            }, t.exports = o
        }, function (t, e, i) {
            function n(t) {
                var e = t[a];
                return e || (e = t[a] = [{}]), e
            }

            var r = i(1), o = r.each, a = "\0_ec_hist_store", s = {
                push: function (t, e) {
                    var i = n(t);
                    o(e, function (e, n) {
                        for (var r = i.length - 1; r >= 0; r--) {
                            var o = i[r];
                            if (o[n])break
                        }
                        if (r < 0) {
                            var a = t.queryComponents({mainType: "dataZoom", subType: "select", id: n})[0];
                            if (a) {
                                var s = a.getPercentRange();
                                i[0][n] = {dataZoomId: n, start: s[0], end: s[1]}
                            }
                        }
                    }), i.push(e)
                }, pop: function (t) {
                    var e = n(t), i = e[e.length - 1];
                    e.length > 1 && e.pop();
                    var r = {};
                    return o(i, function (t, i) {
                        for (var n = e.length - 1; n >= 0; n--) {
                            var t = e[n][i];
                            if (t) {
                                r[i] = t;
                                break
                            }
                        }
                    }), r
                }, clear: function (t) {
                    t[a] = null
                }, count: function (t) {
                    return n(t).length
                }
            };
            t.exports = s
        }, function (t, e, i) {
            i(12).registerSubTypeDefaulter("dataZoom", function (t) {
                return "slider"
            })
        }, function (t, e, i) {
            function n(t) {
                N.call(this), this._zr = t, this.group = new F.Group, this._brushType, this._brushOption, this._panels, this._track = [], this._dragging, this._covers = [], this._creatingCover, this._creatingPanel, this._enableGlobalPan, this._uid = "brushController_" + it++, this._handlers = {}, Z(nt, function (t, e) {
                    this._handlers[e] = B.bind(t, this)
                }, this)
            }

            function r(t, e) {
                var i = t._zr;
                t._enableGlobalPan || G.take(i, K, t._uid), Z(t._handlers, function (t, e) {
                    i.on(e, t)
                }), t._brushType = e.brushType, t._brushOption = B.merge(B.clone(et), e, !0)
            }

            function o(t) {
                var e = t._zr;
                G.release(e, K, t._uid), Z(t._handlers, function (t, i) {
                    e.off(i, t)
                }), t._brushType = t._brushOption = null
            }

            function a(t, e) {
                var i = rt[e.brushType].createCover(t, e);
                return h(i), i.__brushOption = e, t.group.add(i), i
            }

            function s(t, e) {
                var i = c(e);
                return i.endCreating && (i.endCreating(t, e), h(e)), e
            }

            function l(t, e) {
                var i = e.__brushOption;
                c(e).updateCoverShape(t, e, i.range, i)
            }

            function h(t) {
                t.traverse(function (t) {
                    t.z = Y, t.z2 = Y
                })
            }

            function u(t, e) {
                c(e).updateCommon(t, e), l(t, e)
            }

            function c(t) {
                return rt[t.__brushOption.brushType]
            }

            function d(t, e, i) {
                var n = t._panels;
                if (!n)return !0;
                var r;
                return Z(n, function (t) {
                    t.contain(e, i) && (r = t)
                }), r
            }

            function f(t, e) {
                var i = t._panels;
                if (!i)return !0;
                var n = e.__brushOption.panelId;
                return null == n || i[n]
            }

            function p(t) {
                var e = t._covers, i = e.length;
                return Z(e, function (e) {
                    t.group.remove(e)
                }, t), e.length = 0, !!i
            }

            function g(t, e) {
                var i = q(t._covers, function (t) {
                    var e = t.__brushOption, i = B.clone(e.range);
                    return {brushType: e.brushType, panelId: e.panelId, range: i}
                });
                t.trigger("brush", i, {isEnd: !!e.isEnd, removeOnClick: !!e.removeOnClick})
            }

            function m(t) {
                var e = t._track;
                if (!e.length)return !1;
                var i = e[e.length - 1], n = e[0], r = i[0] - n[0], o = i[1] - n[1], a = U(r * r + o * o, .5);
                return a > $
            }

            function v(t) {
                var e = t.length - 1;
                return e < 0 && (e = 0), [t[0], t[e]]
            }

            function y(t, e, i, n) {
                var r = new F.Group;
                return r.add(new F.Rect({
                    name: "main",
                    style: w(i),
                    silent: !0,
                    draggable: !0,
                    cursor: "move",
                    drift: W(t, e, r, "nswe"),
                    ondragend: W(g, e, {isEnd: !0})
                })), Z(n, function (i) {
                    r.add(new F.Rect({
                        name: i,
                        style: {opacity: 0},
                        draggable: !0,
                        silent: !0,
                        invisible: !0,
                        drift: W(t, e, r, i),
                        ondragend: W(g, e, {isEnd: !0})
                    }))
                }), r
            }

            function x(t, e, i, n) {
                var r = n.brushStyle.lineWidth || 0, o = X(r, Q), a = i[0][0], s = i[1][0], l = a - r / 2, h = s - r / 2, u = i[0][1], c = i[1][1], d = u - o + r / 2, f = c - o + r / 2, p = u - a, g = c - s, m = p + r, v = g + r;
                b(t, e, "main", a, s, p, g), n.transformable && (b(t, e, "w", l, h, o, v), b(t, e, "e", d, h, o, v), b(t, e, "n", l, h, m, o), b(t, e, "s", l, f, m, o), b(t, e, "nw", l, h, o, o), b(t, e, "ne", d, h, o, o), b(t, e, "sw", l, f, o, o), b(t, e, "se", d, f, o, o))
            }

            function _(t, e) {
                var i = e.__brushOption, n = i.transformable, r = e.childAt(0);
                r.useStyle(w(i)), r.attr({
                    silent: !n,
                    cursor: n ? "move" : "default"
                }), Z(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function (i) {
                    var r = e.childOfName(i), o = T(t, i);
                    r && r.attr({silent: !n, invisible: !n, cursor: n ? tt[o] + "-resize" : null})
                })
            }

            function b(t, e, i, n, r, o, a) {
                var s = e.childOfName(i);
                s && s.setShape(P(L(t, e, [[n, r], [n + o, r + a]])))
            }

            function w(t) {
                return B.defaults({strokeNoScale: !0}, t.brushStyle)
            }

            function M(t, e, i, n) {
                var r = [j(t, i), j(e, n)], o = [X(t, i), X(e, n)];
                return [[r[0], o[0]], [r[1], o[1]]]
            }

            function S(t) {
                return F.getTransform(t.group)
            }

            function T(t, e) {
                if (e.length > 1) {
                    e = e.split("");
                    var i = [T(t, e[0]), T(t, e[1])];
                    return ("e" === i[0] || "w" === i[0]) && i.reverse(), i.join("")
                }
                var n = {w: "left", e: "right", n: "top", s: "bottom"}, r = {
                    left: "w",
                    right: "e",
                    top: "n",
                    bottom: "s"
                }, i = F.transformDirection(n[e], S(t));
                return r[i]
            }

            function A(t, e, i, n, r, o, a, s) {
                var l = n.__brushOption, h = t(l.range), c = C(i, o, a);
                Z(r.split(""), function (t) {
                    var e = J[t];
                    h[e[0]][e[1]] += c[e[0]]
                }), l.range = e(M(h[0][0], h[1][0], h[0][1], h[1][1])), u(i, n), g(i, {isEnd: !1})
            }

            function I(t, e, i, n, r) {
                var o = e.__brushOption.range, a = C(t, i, n);
                Z(o, function (t) {
                    t[0] += a[0], t[1] += a[1]
                }), u(t, e), g(t, {isEnd: !1})
            }

            function C(t, e, i) {
                var n = t.group, r = n.transformCoordToLocal(e, i), o = n.transformCoordToLocal(0, 0);
                return [r[0] - o[0], r[1] - o[1]]
            }

            function L(t, e, i) {
                var n = f(t, e);
                if (n === !0)return B.clone(i);
                var r = n.getBoundingRect();
                return B.map(i, function (t) {
                    var e = t[0];
                    e = X(e, r.x), e = j(e, r.x + r.width);
                    var i = t[1];
                    return i = X(i, r.y), i = j(i, r.y + r.height), [e, i]
                })
            }

            function P(t) {
                var e = j(t[0][0], t[1][0]), i = j(t[0][1], t[1][1]), n = X(t[0][0], t[1][0]), r = X(t[0][1], t[1][1]);
                return {x: e, y: i, width: n - e, height: r - i}
            }

            function k(t, e) {
                var i = e.offsetX, n = e.offsetY, r = t._zr;
                if (t._brushType) {
                    for (var o, a = t._panels, s = t._covers, l = 0; l < s.length; l++)if (rt[s[l].__brushOption.brushType].contain(s[l], i, n)) {
                        o = !0;
                        break
                    }
                    o || (a ? Z(a, function (t) {
                        t.contain(i, n) && r.setCursorStyle("crosshair")
                    }) : r.setCursorStyle("crosshair"))
                }
            }

            function D(t) {
                var e = t.event;
                e.preventDefault && e.preventDefault()
            }

            function O(t, e, i) {
                return t.childOfName("main").contain(e, i)
            }

            function z(t, e, i) {
                var n, r = e.offsetX, o = e.offsetY, h = t._creatingCover, u = t._creatingPanel, c = t._brushOption;
                if (t._track.push(t.group.transformCoordToLocal(r, o)), m(t) || h) {
                    if (u && !h) {
                        "single" === c.brushMode && p(t);
                        var f = B.clone(c);
                        f.panelId = u === !0 ? null : u.__brushPanelId, h = t._creatingCover = a(t, f), t._covers.push(h)
                    }
                    if (h) {
                        var g = rt[t._brushType], v = h.__brushOption;
                        v.range = g.getCreatingRange(L(t, h, t._track)), i && (s(t, h), g.updateCommon(t, h)), l(t, h), n = {isEnd: i}
                    }
                } else i && "single" === c.brushMode && c.removeOnClick && d(t, r, o) && p(t) && (n = {
                    isEnd: i,
                    removeOnClick: !0
                });
                return n
            }

            function E(t) {
                if (this._dragging) {
                    D(t);
                    var e = z(this, t, !0);
                    this._dragging = !1, this._track = [], this._creatingCover = null, e && g(this, e)
                }
            }

            function R(t) {
                return {
                    createCover: function (e, i) {
                        return y(W(A, function (e) {
                            var i = [e, [0, 100]];
                            return t && i.reverse(), i
                        }, function (e) {
                            return e[t]
                        }), e, i, [["w", "e"], ["n", "s"]][t])
                    }, getCreatingRange: function (e) {
                        var i = v(e), n = j(i[0][t], i[1][t]), r = X(i[0][t], i[1][t]);
                        return [n, r]
                    }, updateCoverShape: function (e, i, n, r) {
                        var o, a = r.brushStyle.width;
                        if (null == a) {
                            var s = f(e, i), l = 0;
                            if (s !== !0) {
                                var h = s.getBoundingRect();
                                a = t ? h.width : h.height, l = t ? h.x : h.y
                            }
                            o = [l, l + (a || 0)]
                        } else o = [-a / 2, a / 2];
                        var u = [n, o];
                        t && u.reverse(), x(e, i, u, r)
                    }, updateCommon: _, contain: O
                }
            }

            var N = i(20), B = i(1), V = i(8), F = i(3), G = i(115), H = i(45), W = B.curry, Z = B.each, q = B.map, j = Math.min, X = Math.max, U = Math.pow, Y = 1e4, $ = 6, Q = 6, K = "globalPan", J = {
                w: [0, 0],
                e: [0, 1],
                n: [1, 0],
                s: [1, 1]
            }, tt = {
                w: "ew",
                e: "ew",
                n: "ns",
                s: "ns",
                ne: "nesw",
                sw: "nesw",
                nw: "nwse",
                se: "nwse"
            }, et = {
                brushStyle: {lineWidth: 2, stroke: "rgba(0,0,0,0.3)", fill: "rgba(0,0,0,0.1)"},
                transformable: !0,
                brushMode: "single",
                removeOnClick: !1
            }, it = 0;
            n.prototype = {
                constructor: n, enableBrush: function (t) {
                    return this._brushType && o(this), t.brushType && r(this, t), this
                }, setPanels: function (t) {
                    var e = this._panels || {}, i = this._panels = t && t.length && {}, n = this.group;
                    return i && Z(t, function (t) {
                        var r = t.panelId, o = e[r];
                        o || (o = new F.Rect({silent: !0, invisible: !0}), n.add(o));
                        var a = t.rect;
                        a instanceof V || (a = V.create(a)), o.attr("shape", a.plain()), o.__brushPanelId = r, i[r] = o, e[r] = null
                    }), Z(e, function (t) {
                        t && n.remove(t)
                    }), this
                }, mount: function (t) {
                    t = t || {}, this._enableGlobalPan = t.enableGlobalPan;
                    var e = this.group;
                    return this._zr.add(e), e.attr({
                        position: t.position || [0, 0],
                        rotation: t.rotation || 0,
                        scale: t.scale || [1, 1]
                    }), this
                }, eachCover: function (t, e) {
                    Z(this._covers, t, e)
                }, updateCovers: function (t) {
                    function e(t, e) {
                        return (null != t.id ? t.id : o + e) + "-" + t.brushType
                    }

                    function i(t, i) {
                        return e(t.__brushOption, i)
                    }

                    function n(e, i) {
                        var n = t[e];
                        if (null != i && l[i] === d)h[e] = l[i]; else {
                            var r = h[e] = null != i ? (l[i].__brushOption = n, l[i]) : s(c, a(c, n));
                            u(c, r)
                        }
                    }

                    function r(t) {
                        l[t] !== d && c.group.remove(l[t])
                    }

                    t = B.map(t, function (t) {
                        return B.merge(B.clone(et), t, !0)
                    });
                    var o = "\0-brush-index-", l = this._covers, h = this._covers = [], c = this, d = this._creatingCover;
                    return new H(l, t, i, e).add(n).update(n).remove(r).execute(), this
                }, unmount: function () {
                    return this.enableBrush(!1), p(this), this._zr.remove(this.group), this
                }, dispose: function () {
                    this.unmount(), this.off()
                }
            }, B.mixin(n, N);
            var nt = {
                mousedown: function (t) {
                    if (this._dragging)E.call(this, t); else if (!t.target || !t.target.draggable) {
                        D(t);
                        var e = t.offsetX, i = t.offsetY;
                        this._creatingCover = null;
                        var n = this._creatingPanel = d(this, e, i);
                        n && (this._dragging = !0, this._track = [this.group.transformCoordToLocal(e, i)])
                    }
                }, mousemove: function (t) {
                    if (k(this, t), this._dragging) {
                        D(t);
                        var e = z(this, t, !1);
                        e && g(this, e)
                    }
                }, mouseup: E
            }, rt = {
                lineX: R(0), lineY: R(1), rect: {
                    createCover: function (t, e) {
                        return y(W(A, function (t) {
                            return t
                        }, function (t) {
                            return t
                        }), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
                    }, getCreatingRange: function (t) {
                        var e = v(t);
                        return M(e[1][0], e[1][1], e[0][0], e[0][1])
                    }, updateCoverShape: function (t, e, i, n) {
                        x(t, e, i, n)
                    }, updateCommon: _, contain: O
                }, polygon: {
                    createCover: function (t, e) {
                        var i = new F.Group;
                        return i.add(new F.Polyline({name: "main", style: w(e), silent: !0})), i
                    }, getCreatingRange: function (t) {
                        return t
                    }, endCreating: function (t, e) {
                        e.remove(e.childAt(0)), e.add(new F.Polygon({
                            name: "main",
                            draggable: !0,
                            drift: W(I, t, e),
                            ondragend: W(g, t, {isEnd: !0})
                        }))
                    }, updateCoverShape: function (t, e, i, n) {
                        e.childAt(0).setShape({points: L(t, e, i)})
                    }, updateCommon: _, contain: O
                }
            };
            t.exports = n
        }, function (t, e, i) {
            function n(t) {
                return t[0] > t[1] && t.reverse(), t
            }

            function r(t, e) {
                for (var i = !0, n = 0; n < u.length; n++) {
                    var r = u[n] + "Index";
                    if (t[r] >= 0) {
                        i = !1;
                        for (var o = 0; o < e.length; o++)if (e[o][r] === t[r])return e[o]
                    }
                }
                return i
            }

            function o(t, e, i, r) {
                var o = i.coordSys.getAxis(t);
                return n(a.map([0, 1], function (t) {
                    return e ? o.coordToData(o.toLocalCoord(r[t])) : o.toGlobalCoord(o.dataToCoord(r[t]))
                }))
            }

            var a = i(1), s = i(3), l = a.each, h = {}, u = ["geo", "xAxis", "yAxis"], c = "--", d = ["dataToPoint", "pointToData"];
            h.parseOutputRanges = function (t, e, i, n) {
                l(t, function (t, i) {
                    var o = t.panelId;
                    if (o) {
                        o = o.split(c), t[o[0] + "Index"] = +o[1];
                        var a = r(t, e);
                        t.coordRange = f[t.brushType](1, a, t.range), n && (n[i] = a)
                    }
                })
            }, h.parseInputRanges = function (t, e) {
                l(t.areas, function (e) {
                    var i = r(e, t.coordInfoList);
                    e.range = e.range || [], i && i !== !0 && (e.range = f[e.brushType](0, i, e.coordRange), e.panelId = i.panelId)
                })
            }, h.makePanelOpts = function (t) {
                var e = [];
                return l(t, function (t) {
                    var i, n = t.coordSys;
                    t.geoIndex >= 0 ? (i = n.getBoundingRect().clone(), i.applyTransform(s.getTransform(n))) : i = n.grid.getRect().clone(), e.push({
                        panelId: t.panelId,
                        rect: i
                    })
                }), e
            }, h.makeCoordInfoList = function (t, e) {
                var i = [];
                return l(u, function (n) {
                    var r = t[n + "Index"];
                    null != r && "none" !== r && ("all" === r || a.isArray(r) || (r = [r]), e.eachComponent({mainType: n}, function (t, e) {
                        if (!("all" !== r && a.indexOf(r, e) < 0)) {
                            var o, s;
                            "xAxis" === n || "yAxis" === n ? o = t.axis.grid : s = t.coordinateSystem;
                            for (var l, h = 0, u = i.length; h < u; h++) {
                                var d = i[h];
                                if ("yAxis" === n && !d.yAxis && d.xAxis) {
                                    var f = o.getCartesian(d.xAxisIndex, e);
                                    if (f) {
                                        s = f, l = d;
                                        break
                                    }
                                }
                            }
                            !l && i.push(l = {}), l[n] = t, l[n + "Index"] = e, l.panelId = n + c + e, l.coordSys = s || o.getCartesian(l.xAxisIndex, l.yAxisIndex), l.coordSys ? i[n + "Has"] = !0 : i.pop()
                        }
                    }))
                }), i
            }, h.controlSeries = function (t, e, i) {
                var n = r(t, e.coordInfoList);
                return n === !0 || n && n.coordSys === i.coordinateSystem
            };
            var f = {
                lineX: a.curry(o, "x"), lineY: a.curry(o, "y"), rect: function (t, e, i) {
                    var r = e.coordSys, o = r[d[t]]([i[0][0], i[1][0]]), a = r[d[t]]([i[0][1], i[1][1]]);
                    return [n([o[0], a[0]]), n([o[1], a[1]])]
                }, polygon: function (t, e, i) {
                    var n = e.coordSys;
                    return a.map(i, n[d[t]], n)
                }
            };
            t.exports = h
        }, function (t, e, i) {
            function n(t) {
                return t[r] || (t[r] = {})
            }

            var r = "\0_ec_interaction_mutex", o = {
                take: function (t, e, i) {
                    var r = n(t);
                    r[e] = i
                }, release: function (t, e, i) {
                    var r = n(t), o = r[e];
                    o === i && (r[e] = null)
                }, isTaken: function (t, e) {
                    return !!n(t)[e]
                }
            };
            i(2).registerAction({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
            }), t.exports = o
        }, function (t, e, i) {
            function n(t, e, i) {
                r.positionGroup(t, e.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()}, e.get("padding"))
            }

            var r = i(13), o = i(9), a = i(3);
            t.exports = {
                layout: function (t, e, i) {
                    var o = r.getLayoutRect(e.getBoxLayoutParams(), {
                        width: i.getWidth(),
                        height: i.getHeight()
                    }, e.get("padding"));
                    r.box(e.get("orient"), t, e.get("itemGap"), o.width, o.height), n(t, e, i)
                }, addBackground: function (t, e) {
                    var i = o.normalizeCssArray(e.get("padding")), n = t.getBoundingRect(), r = e.getItemStyle(["color", "opacity"]);
                    r.fill = e.get("backgroundColor");
                    var s = new a.Rect({
                        shape: {
                            x: n.x - i[3],
                            y: n.y - i[0],
                            width: n.width + i[1] + i[3],
                            height: n.height + i[0] + i[2]
                        }, style: r, silent: !0, z2: -1
                    });
                    a.subPixelOptimizeRect(s), t.add(s)
                }
            }
        }, function (t, e, i) {
            var n = i(1), r = i(42), o = i(121), a = function (t, e, i, n, o) {
                r.call(this, t, e, i), this.type = n || "value", this.position = o || "bottom"
            };
            a.prototype = {
                constructor: a, index: 0, onZero: !1, model: null, isHorizontal: function () {
                    var t = this.position;
                    return "top" === t || "bottom" === t
                }, getGlobalExtent: function () {
                    var t = this.getExtent();
                    return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
                }, getLabelInterval: function () {
                    var t = this._labelInterval;
                    return t || (t = this._labelInterval = o(this)), t
                }, isLabelIgnored: function (t) {
                    if ("category" === this.type) {
                        var e = this.getLabelInterval();
                        return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                    }
                }, toLocalCoord: null, toGlobalCoord: null
            }, n.inherits(a, r), t.exports = a
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return this._axes[t]
            }

            var r = i(1), o = function (t) {
                this._axes = {}, this._dimList = [], this.name = t || ""
            };
            o.prototype = {
                constructor: o, type: "cartesian", getAxis: function (t) {
                    return this._axes[t]
                }, getAxes: function () {
                    return r.map(this._dimList, n, this)
                }, getAxesByScale: function (t) {
                    return t = t.toLowerCase(), r.filter(this.getAxes(), function (e) {
                        return e.scale.type === t
                    })
                }, addAxis: function (t) {
                    var e = t.dim;
                    this._axes[e] = t, this._dimList.push(e)
                }, dataToCoord: function (t) {
                    return this._dataCoordConvert(t, "dataToCoord")
                }, coordToData: function (t) {
                    return this._dataCoordConvert(t, "coordToData")
                }, _dataCoordConvert: function (t, e) {
                    for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
                        var o = i[r], a = this._axes[o];
                        n[o] = a[e](t[o])
                    }
                    return n
                }
            }, t.exports = o
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                o.call(this, t)
            }

            var r = i(1), o = i(118);
            n.prototype = {
                constructor: n, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
                    return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
                }, containPoint: function (t) {
                    var e = this.getAxis("x"), i = this.getAxis("y");
                    return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
                }, containData: function (t) {
                    return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
                }, dataToPoints: function (t, e) {
                    return t.mapArray(["x", "y"], function (t, e) {
                        return this.dataToPoint([t, e])
                    }, e, this)
                }, dataToPoint: function (t, e) {
                    var i = this.getAxis("x"), n = this.getAxis("y");
                    return [i.toGlobalCoord(i.dataToCoord(t[0], e)), n.toGlobalCoord(n.dataToCoord(t[1], e))]
                }, pointToData: function (t, e) {
                    var i = this.getAxis("x"), n = this.getAxis("y");
                    return [i.coordToData(i.toLocalCoord(t[0]), e), n.coordToData(n.toLocalCoord(t[1]), e)]
                }, getOtherAxis: function (t) {
                    return this.getAxis("x" === t.dim ? "y" : "x")
                }
            }, r.inherits(n, o), t.exports = n
        }, function (t, e, i) {
            "use strict";
            i(53);
            var n = i(12);
            t.exports = n.extend({
                type: "grid",
                dependencies: ["xAxis", "yAxis"],
                layoutMode: "box",
                coordinateSystem: null,
                defaultOption: {
                    show: !1,
                    zlevel: 0,
                    z: 0,
                    left: "10%",
                    top: 60,
                    right: "10%",
                    bottom: 60,
                    containLabel: !1,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    borderColor: "#ccc"
                }
            })
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(22);
            t.exports = function (t) {
                var e = t.model, i = e.getModel("axisLabel"), o = i.get("interval");
                return "category" !== t.type || "auto" !== o ? "auto" === o ? 0 : o : r.getAxisLabelInterval(n.map(t.scale.getTicks(), t.dataToCoord, t), e.getFormattedLabels(), i.getModel("textStyle").getFont(), t.isHorizontal())
            }
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return t.get("stack") || "__ec_stack_" + t.seriesIndex
            }

            function r(t) {
                return t.dim + t.index
            }

            function o(t, e) {
                var i = {};
                s.each(t, function (t, e) {
                    var o = t.getData(), a = t.coordinateSystem, s = a.getBaseAxis(), l = s.getExtent(), u = "category" === s.type ? s.getBandWidth() : Math.abs(l[1] - l[0]) / o.count(), c = i[r(s)] || {
                            bandWidth: u,
                            remainedWidth: u,
                            autoWidthCount: 0,
                            categoryGap: "20%",
                            gap: "30%",
                            stacks: {}
                        }, d = c.stacks;
                    i[r(s)] = c;
                    var f = n(t);
                    d[f] || c.autoWidthCount++, d[f] = d[f] || {width: 0, maxWidth: 0};
                    var p = h(t.get("barWidth"), u), g = h(t.get("barMaxWidth"), u), m = t.get("barGap"), v = t.get("barCategoryGap");
                    p && !d[f].width && (p = Math.min(c.remainedWidth, p), d[f].width = p, c.remainedWidth -= p), g && (d[f].maxWidth = g), null != m && (c.gap = m), null != v && (c.categoryGap = v)
                });
                var o = {};
                return s.each(i, function (t, e) {
                    o[e] = {};
                    var i = t.stacks, n = t.bandWidth, r = h(t.categoryGap, n), a = h(t.gap, 1), l = t.remainedWidth, u = t.autoWidthCount, c = (l - r) / (u + (u - 1) * a);
                    c = Math.max(c, 0), s.each(i, function (t, e) {
                        var i = t.maxWidth;
                        !t.width && i && i < c && (i = Math.min(i, l), l -= i, t.width = i, u--)
                    }), c = (l - r) / (u + (u - 1) * a), c = Math.max(c, 0);
                    var d, f = 0;
                    s.each(i, function (t, e) {
                        t.width || (t.width = c), d = t, f += t.width * (1 + a)
                    }), d && (f -= d.width * a);
                    var p = -f / 2;
                    s.each(i, function (t, i) {
                        o[e][i] = o[e][i] || {offset: p, width: t.width}, p += t.width * (1 + a)
                    })
                }), o
            }

            function a(t, e, i) {
                var a = o(s.filter(e.getSeriesByType(t), function (t) {
                    return !e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
                })), l = {}, h = {};
                e.eachSeriesByType(t, function (t) {
                    var e = t.getData(), i = t.coordinateSystem, o = i.getBaseAxis(), s = n(t), u = a[r(o)][s], c = u.offset, d = u.width, f = i.getOtherAxis(o), p = t.get("barMinHeight") || 0, g = o.onZero ? f.toGlobalCoord(f.dataToCoord(0)) : f.getGlobalExtent()[0], m = i.dataToPoints(e, !0);
                    l[s] = l[s] || [], h[s] = h[s] || [], e.setLayout({offset: c, size: d}), e.each(f.dim, function (t, i) {
                        if (!isNaN(t)) {
                            l[s][i] || (l[s][i] = {p: g, n: g}, h[s][i] = {p: g, n: g});
                            var n, r, o, a, u = t >= 0 ? "p" : "n", v = m[i], y = l[s][i][u], x = h[s][i][u];
                            f.isHorizontal() ? (n = y, r = v[1] + c, o = v[0] - x, a = d, h[s][i][u] += o, Math.abs(o) < p && (o = (o < 0 ? -1 : 1) * p), l[s][i][u] += o) : (n = v[0] + c, r = y, o = d, a = v[1] - x, h[s][i][u] += a, Math.abs(a) < p && (a = (a <= 0 ? -1 : 1) * p), l[s][i][u] += a), e.setItemLayout(i, {
                                x: n,
                                y: r,
                                width: o,
                                height: a
                            })
                        }
                    }, !0)
                }, this)
            }

            var s = i(1), l = i(4), h = l.parsePercent;
            t.exports = a
        }, function (t, e, i) {
            var n = i(3), r = i(1), o = Math.PI;
            t.exports = function (t, e) {
                e = e || {}, r.defaults(e, {
                    text: "loading",
                    color: "#c23531",
                    textColor: "#000",
                    maskColor: "rgba(255, 255, 255, 0.8)",
                    zlevel: 0
                });
                var i = new n.Rect({
                    style: {fill: e.maskColor},
                    zlevel: e.zlevel,
                    z: 1e4
                }), a = new n.Arc({
                    shape: {startAngle: -o / 2, endAngle: -o / 2 + .1, r: 10},
                    style: {stroke: e.color, lineCap: "round", lineWidth: 5},
                    zlevel: e.zlevel,
                    z: 10001
                }), s = new n.Rect({
                    style: {
                        fill: "none",
                        text: e.text,
                        textPosition: "right",
                        textDistance: 10,
                        textFill: e.textColor
                    }, zlevel: e.zlevel, z: 10001
                });
                a.animateShape(!0).when(1e3, {endAngle: 3 * o / 2}).start("circularInOut"), a.animateShape(!0).when(1e3, {startAngle: 3 * o / 2}).delay(300).start("circularInOut");
                var l = new n.Group;
                return l.add(a), l.add(s), l.add(i), l.resize = function () {
                    var e = t.getWidth() / 2, n = t.getHeight() / 2;
                    a.setShape({cx: e, cy: n});
                    var r = a.shape.r;
                    s.setShape({x: e - r, y: n - r, width: 2 * r, height: 2 * r}), i.setShape({
                        x: 0,
                        y: 0,
                        width: t.getWidth(),
                        height: t.getHeight()
                    })
                }, l.resize(), l
            }
        }, function (t, e, i) {
            function n(t, e) {
                c.each(e, function (e, i) {
                    _.hasClass(i) || ("object" == typeof e ? t[i] = t[i] ? c.merge(t[i], e, !1) : c.clone(e) : null == t[i] && (t[i] = e))
                })
            }

            function r(t) {
                t = t, this.option = {}, this.option[w] = 1, this._componentsMap = {}, this._seriesIndices = null, n(t, this._theme.option), c.merge(t, b, !1), this.mergeOption(t)
            }

            function o(t, e) {
                c.isArray(e) || (e = e ? [e] : []);
                var i = {};
                return p(e, function (e) {
                    i[e] = (t[e] || []).slice()
                }), i
            }

            function a(t, e) {
                var i = {};
                p(e, function (t, e) {
                    var n = t.exist;
                    n && (i[n.id] = t)
                }), p(e, function (e, n) {
                    var r = e.option;
                    if (c.assert(!r || null == r.id || !i[r.id] || i[r.id] === e, "id duplicates: " + (r && r.id)), r && null != r.id && (i[r.id] = e), x(r)) {
                        var o = s(t, r, e.exist);
                        e.keyInfo = {mainType: t, subType: o}
                    }
                }), p(e, function (t, e) {
                    var n = t.exist, r = t.option, o = t.keyInfo;
                    if (x(r)) {
                        if (o.name = null != r.name ? r.name + "" : n ? n.name : "\0-", n)o.id = n.id; else if (null != r.id)o.id = r.id + ""; else {
                            var a = 0;
                            do o.id = "\0" + o.name + "\0" + a++; while (i[o.id])
                        }
                        i[o.id] = t
                    }
                })
            }

            function s(t, e, i) {
                var n = e.type ? e.type : i ? i.subType : _.determineSubType(t, e);
                return n
            }

            function l(t) {
                return m(t, function (t) {
                        return t.componentIndex
                    }) || []
            }

            function h(t, e) {
                return e.hasOwnProperty("subType") ? g(t, function (t) {
                    return t.subType === e.subType
                }) : t
            }

            function u(t) {
            }

            var c = i(1), d = i(7), f = i(10), p = c.each, g = c.filter, m = c.map, v = c.isArray, y = c.indexOf, x = c.isObject, _ = i(12), b = i(126), w = "\0_ec_inner", M = f.extend({
                constructor: M, init: function (t, e, i, n) {
                    i = i || {}, this.option = null, this._theme = new f(i),
                        this._optionManager = n
                }, setOption: function (t, e) {
                    c.assert(!(w in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption()
                }, resetOption: function (t) {
                    var e = !1, i = this._optionManager;
                    if (!t || "recreate" === t) {
                        var n = i.mountOption("recreate" === t);
                        this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : r.call(this, n), e = !0
                    }
                    if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                        var o = i.getTimelineOption(this);
                        o && (this.mergeOption(o), e = !0)
                    }
                    if (!t || "recreate" === t || "media" === t) {
                        var a = i.getMediaOption(this, this._api);
                        a.length && p(a, function (t) {
                            this.mergeOption(t, e = !0)
                        }, this)
                    }
                    return e
                }, mergeOption: function (t) {
                    function e(e, r) {
                        var s = d.normalizeToArray(t[e]), h = d.mappingToExists(n[e], s);
                        a(e, h);
                        var u = o(n, r);
                        i[e] = [], n[e] = [], p(h, function (t, r) {
                            var o = t.exist, a = t.option;
                            if (c.assert(x(a) || o, "Empty component definition"), a) {
                                var s = _.getClass(e, t.keyInfo.subType, !0);
                                if (o && o instanceof s)o.name = t.keyInfo.name, o.mergeOption(a, this), o.optionUpdated(a, !1); else {
                                    var l = c.extend({dependentModels: u, componentIndex: r}, t.keyInfo);
                                    o = new s(a, this, this, l), c.extend(o, l), o.init(a, this, this, l), o.optionUpdated(null, !0)
                                }
                            } else o.mergeOption({}, this), o.optionUpdated({}, !1);
                            n[e][r] = o, i[e][r] = o.option
                        }, this), "series" === e && (this._seriesIndices = l(n.series))
                    }

                    var i = this.option, n = this._componentsMap, r = [];
                    p(t, function (t, e) {
                        null != t && (_.hasClass(e) ? r.push(e) : i[e] = null == i[e] ? c.clone(t) : c.merge(i[e], t, !0))
                    }), _.topologicalTravel(r, _.getAllClassMainTypes(), e, this), this._seriesIndices = this._seriesIndices || []
                }, getOption: function () {
                    var t = c.clone(this.option);
                    return p(t, function (e, i) {
                        if (_.hasClass(i)) {
                            for (var e = d.normalizeToArray(e), n = e.length - 1; n >= 0; n--)d.isIdInner(e[n]) && e.splice(n, 1);
                            t[i] = e
                        }
                    }), delete t[w], t
                }, getTheme: function () {
                    return this._theme
                }, getComponent: function (t, e) {
                    var i = this._componentsMap[t];
                    if (i)return i[e || 0]
                }, queryComponents: function (t) {
                    var e = t.mainType;
                    if (!e)return [];
                    var i = t.index, n = t.id, r = t.name, o = this._componentsMap[e];
                    if (!o || !o.length)return [];
                    var a;
                    if (null != i)v(i) || (i = [i]), a = g(m(i, function (t) {
                        return o[t]
                    }), function (t) {
                        return !!t
                    }); else if (null != n) {
                        var s = v(n);
                        a = g(o, function (t) {
                            return s && y(n, t.id) >= 0 || !s && t.id === n
                        })
                    } else if (null != r) {
                        var l = v(r);
                        a = g(o, function (t) {
                            return l && y(r, t.name) >= 0 || !l && t.name === r
                        })
                    } else a = o;
                    return h(a, t)
                }, findComponents: function (t) {
                    function e(t) {
                        var e = r + "Index", i = r + "Id", n = r + "Name";
                        return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
                            mainType: r,
                            index: t[e],
                            id: t[i],
                            name: t[n]
                        } : null
                    }

                    function i(e) {
                        return t.filter ? g(e, t.filter) : e
                    }

                    var n = t.query, r = t.mainType, o = e(n), a = o ? this.queryComponents(o) : this._componentsMap[r];
                    return i(h(a, t))
                }, eachComponent: function (t, e, i) {
                    var n = this._componentsMap;
                    if ("function" == typeof t)i = e, e = t, p(n, function (t, n) {
                        p(t, function (t, r) {
                            e.call(i, n, t, r)
                        })
                    }); else if (c.isString(t))p(n[t], e, i); else if (x(t)) {
                        var r = this.findComponents(t);
                        p(r, e, i)
                    }
                }, getSeriesByName: function (t) {
                    var e = this._componentsMap.series;
                    return g(e, function (e) {
                        return e.name === t
                    })
                }, getSeriesByIndex: function (t) {
                    return this._componentsMap.series[t]
                }, getSeriesByType: function (t) {
                    var e = this._componentsMap.series;
                    return g(e, function (e) {
                        return e.subType === t
                    })
                }, getSeries: function () {
                    return this._componentsMap.series.slice()
                }, eachSeries: function (t, e) {
                    u(this), p(this._seriesIndices, function (i) {
                        var n = this._componentsMap.series[i];
                        t.call(e, n, i)
                    }, this)
                }, eachRawSeries: function (t, e) {
                    p(this._componentsMap.series, t, e)
                }, eachSeriesByType: function (t, e, i) {
                    u(this), p(this._seriesIndices, function (n) {
                        var r = this._componentsMap.series[n];
                        r.subType === t && e.call(i, r, n)
                    }, this)
                }, eachRawSeriesByType: function (t, e, i) {
                    return p(this.getSeriesByType(t), e, i)
                }, isSeriesFiltered: function (t) {
                    return u(this), c.indexOf(this._seriesIndices, t.componentIndex) < 0
                }, filterSeries: function (t, e) {
                    u(this);
                    var i = g(this._componentsMap.series, t, e);
                    this._seriesIndices = l(i)
                }, restoreData: function () {
                    var t = this._componentsMap;
                    this._seriesIndices = l(t.series);
                    var e = [];
                    p(t, function (t, i) {
                        e.push(i)
                    }), _.topologicalTravel(e, _.getAllClassMainTypes(), function (e, i) {
                        p(t[e], function (t) {
                            t.restoreData()
                        })
                    })
                }
            });
            c.mixin(M, i(56)), t.exports = M
        }, function (t, e, i) {
            function n(t) {
                this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
            }

            function r(t, e, i) {
                var n, r, o = [], a = [], s = t.timeline;
                if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, o = (t.options || []).slice()), t.media) {
                    r = r || {};
                    var l = t.media;
                    d(l, function (t) {
                        t && t.option && (t.query ? a.push(t) : n || (n = t))
                    })
                }
                return r || (r = t), r.timeline || (r.timeline = s), d([r].concat(o).concat(h.map(a, function (t) {
                    return t.option
                })), function (t) {
                    d(e, function (e) {
                        e(t, i)
                    })
                }), {baseOption: r, timelineOptions: o, mediaDefault: n, mediaList: a}
            }

            function o(t, e, i) {
                var n = {width: e, height: i, aspectratio: e / i}, r = !0;
                return h.each(t, function (t, e) {
                    var i = e.match(m);
                    if (i && i[1] && i[2]) {
                        var o = i[1], s = i[2].toLowerCase();
                        a(n[s], t, o) || (r = !1)
                    }
                }), r
            }

            function a(t, e, i) {
                return "min" === i ? t >= e : "max" === i ? t <= e : t === e
            }

            function s(t, e) {
                return t.join(",") === e.join(",")
            }

            function l(t, e) {
                e = e || {}, d(e, function (e, i) {
                    if (null != e) {
                        var n = t[i];
                        if (c.hasClass(i)) {
                            e = u.normalizeToArray(e), n = u.normalizeToArray(n);
                            var r = u.mappingToExists(n, e);
                            t[i] = p(r, function (t) {
                                return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
                            })
                        } else t[i] = g(n, e, !0)
                    }
                })
            }

            var h = i(1), u = i(7), c = i(12), d = h.each, f = h.clone, p = h.map, g = h.merge, m = /^(min|max)?(.+)$/;
            n.prototype = {
                constructor: n, setOption: function (t, e) {
                    t = f(t, !0);
                    var i = this._optionBackup, n = r.call(this, t, e, !i);
                    this._newBaseOption = n.baseOption, i ? (l(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
                }, mountOption: function (t) {
                    var e = this._optionBackup;
                    return this._timelineOptions = p(e.timelineOptions, f), this._mediaList = p(e.mediaList, f), this._mediaDefault = f(e.mediaDefault), this._currentMediaIndices = [], f(t ? e.baseOption : this._newBaseOption)
                }, getTimelineOption: function (t) {
                    var e, i = this._timelineOptions;
                    if (i.length) {
                        var n = t.getComponent("timeline");
                        n && (e = f(i[n.getCurrentIndex()], !0))
                    }
                    return e
                }, getMediaOption: function (t) {
                    var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, r = this._mediaDefault, a = [], l = [];
                    if (!n.length && !r)return l;
                    for (var h = 0, u = n.length; h < u; h++)o(n[h].query, e, i) && a.push(h);
                    return !a.length && r && (a = [-1]), a.length && !s(a, this._currentMediaIndices) && (l = p(a, function (t) {
                        return f(t === -1 ? r.option : n[t].option)
                    })), this._currentMediaIndices = a, l
                }
            }, t.exports = n
        }, function (t, e) {
            var i = "";
            "undefined" != typeof navigator && (i = navigator.platform || ""), t.exports = {
                color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
                textStyle: {
                    fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                blendMode: null,
                animation: !0,
                animationDuration: 1e3,
                animationDurationUpdate: 300,
                animationEasing: "exponentialOut",
                animationEasingUpdate: "cubicOut",
                animationThreshold: 2e3,
                progressiveThreshold: 3e3,
                progressive: 400,
                hoverLayerThreshold: 3e3
            }
        }, function (t, e, i) {
            t.exports = {getAreaStyle: i(31)([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]])}
        }, function (t, e) {
            t.exports = {
                getBoxLayoutParams: function () {
                    return {
                        left: this.get("left"),
                        top: this.get("top"),
                        right: this.get("right"),
                        bottom: this.get("bottom"),
                        width: this.get("width"),
                        height: this.get("height")
                    }
                }
            }
        }, function (t, e, i) {
            var n = i(31)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]);
            t.exports = {
                getItemStyle: function (t) {
                    var e = n.call(this, t), i = this.getBorderLineDash();
                    return i && (e.lineDash = i), e
                }, getBorderLineDash: function () {
                    var t = this.get("borderType");
                    return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
                }
            }
        }, function (t, e, i) {
            var n = i(31)([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
            t.exports = {
                getLineStyle: function (t) {
                    var e = n.call(this, t), i = this.getLineDash(e.lineWidth);
                    return i && (e.lineDash = i), e
                }, getLineDash: function (t) {
                    null == t && (t = 1);
                    var e = this.get("type"), i = Math.max(t, 2), n = 4 * t;
                    return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [i, i]
                }
            }
        }, function (t, e, i) {
            function n(t, e) {
                return t && t.getShallow(e)
            }

            var r = i(16);
            t.exports = {
                getTextColor: function () {
                    var t = this.ecModel;
                    return this.getShallow("color") || t && t.get("textStyle.color")
                }, getFont: function () {
                    var t = this.ecModel, e = t && t.getModel("textStyle");
                    return [this.getShallow("fontStyle") || n(e, "fontStyle"), this.getShallow("fontWeight") || n(e, "fontWeight"), (this.getShallow("fontSize") || n(e, "fontSize") || 12) + "px", this.getShallow("fontFamily") || n(e, "fontFamily") || "sans-serif"].join(" ")
                }, getTextRect: function (t) {
                    var e = this.get("textStyle") || {};
                    return r.getBoundingRect(t, this.getFont(), e.align, e.baseline)
                }, truncateText: function (t, e, i, n) {
                    return r.truncateText(t, e, this.getFont(), i, n)
                }
            }
        }, function (t, e, i) {
            function n(t, e) {
                e = e.split(",");
                for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++);
                return i
            }

            function r(t, e, i, n) {
                e = e.split(",");
                for (var r, o = t, a = 0; a < e.length - 1; a++)r = e[a], null == o[r] && (o[r] = {}), o = o[r];
                (n || null == o[e[a]]) && (o[e[a]] = i)
            }

            function o(t) {
                c(l, function (e) {
                    e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
                })
            }

            var a = i(1), s = i(133), l = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], h = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], u = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"], c = a.each;
            t.exports = function (t) {
                c(t.series, function (t) {
                    if (a.isObject(t)) {
                        var e = t.type;
                        if (s(t), "pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                            var i = n(t, "pointer.color");
                            null != i && r(t, "itemStyle.normal.color", i)
                        }
                        for (var l = 0; l < u.length; l++)if (u[l] === t.type) {
                            o(t);
                            break
                        }
                    }
                }), t.dataRange && (t.visualMap = t.dataRange), c(h, function (e) {
                    var i = t[e];
                    i && (a.isArray(i) || (i = [i]), c(i, function (t) {
                        o(t)
                    }))
                })
            }
        }, function (t, e, i) {
            function n(t) {
                var e = t && t.itemStyle;
                e && r.each(o, function (i) {
                    var n = e.normal, o = e.emphasis;
                    n && n[i] && (t[i] = t[i] || {}, t[i].normal ? r.merge(t[i].normal, n[i]) : t[i].normal = n[i], n[i] = null), o && o[i] && (t[i] = t[i] || {}, t[i].emphasis ? r.merge(t[i].emphasis, o[i]) : t[i].emphasis = o[i], o[i] = null)
                })
            }

            var r = i(1), o = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
            t.exports = function (t) {
                if (t) {
                    n(t), n(t.markPoint), n(t.markLine);
                    var e = t.data;
                    if (e) {
                        for (var i = 0; i < e.length; i++)n(e[i]);
                        var o = t.markPoint;
                        if (o && o.data)for (var a = o.data, i = 0; i < a.length; i++)n(a[i]);
                        var s = t.markLine;
                        if (s && s.data)for (var l = s.data, i = 0; i < l.length; i++)r.isArray(l[i]) ? (n(l[i][0]), n(l[i][1])) : n(l[i])
                    }
                }
            }
        }, function (t, e) {
            var i = {
                average: function (t) {
                    for (var e = 0, i = 0, n = 0; n < t.length; n++)isNaN(t[n]) || (e += t[n], i++);
                    return 0 === i ? NaN : e / i
                }, sum: function (t) {
                    for (var e = 0, i = 0; i < t.length; i++)e += t[i] || 0;
                    return e
                }, max: function (t) {
                    for (var e = -(1 / 0), i = 0; i < t.length; i++)t[i] > e && (e = t[i]);
                    return e
                }, min: function (t) {
                    for (var e = 1 / 0, i = 0; i < t.length; i++)t[i] < e && (e = t[i]);
                    return e
                }, nearest: function (t) {
                    return t[0]
                }
            }, n = function (t, e) {
                return Math.round(t.length / 2)
            };
            t.exports = function (t, e, r) {
                e.eachSeriesByType(t, function (t) {
                    var e = t.getData(), r = t.get("sampling"), o = t.coordinateSystem;
                    if ("cartesian2d" === o.type && r) {
                        var a = o.getBaseAxis(), s = o.getOtherAxis(a), l = a.getExtent(), h = l[1] - l[0], u = Math.round(e.count() / h);
                        if (u > 1) {
                            var c;
                            "string" == typeof r ? c = i[r] : "function" == typeof r && (c = r), c && (e = e.downSample(s.dim, 1 / u, c, n), t.setData(e))
                        }
                    }
                }, this)
            }
        }, function (t, e, i) {
            function n(t, e) {
                return c(t, u(e))
            }

            var r = i(1), o = i(32), a = i(4), s = i(38), l = o.prototype, h = s.prototype, u = a.getPrecisionSafe, c = a.round, d = Math.floor, f = Math.ceil, p = Math.pow, g = Math.log, m = o.extend({
                type: "log",
                base: 10,
                $constructor: function () {
                    o.apply(this, arguments), this._originalScale = new s
                },
                getTicks: function () {
                    var t = this._originalScale, e = this._extent, i = t.getExtent();
                    return r.map(h.getTicks.call(this), function (r) {
                        var o = a.round(p(this.base, r));
                        return o = r === e[0] && t.__fixMin ? n(o, i[0]) : o, o = r === e[1] && t.__fixMax ? n(o, i[1]) : o
                    }, this)
                },
                getLabel: h.getLabel,
                scale: function (t) {
                    return t = l.scale.call(this, t), p(this.base, t)
                },
                setExtent: function (t, e) {
                    var i = this.base;
                    t = g(t) / g(i), e = g(e) / g(i), h.setExtent.call(this, t, e)
                },
                getExtent: function () {
                    var t = this.base, e = l.getExtent.call(this);
                    e[0] = p(t, e[0]), e[1] = p(t, e[1]);
                    var i = this._originalScale, r = i.getExtent();
                    return i.__fixMin && (e[0] = n(e[0], r[0])), i.__fixMax && (e[1] = n(e[1], r[1])), e
                },
                unionExtent: function (t) {
                    this._originalScale.unionExtent(t);
                    var e = this.base;
                    t[0] = g(t[0]) / g(e), t[1] = g(t[1]) / g(e), l.unionExtent.call(this, t)
                },
                niceTicks: function (t) {
                    t = t || 10;
                    var e = this._extent, i = e[1] - e[0];
                    if (!(i === 1 / 0 || i <= 0)) {
                        var n = a.quantity(i), r = t / i * n;
                        for (r <= .5 && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;)n *= 10;
                        var o = [a.round(f(e[0] / n) * n), a.round(d(e[1] / n) * n)];
                        this._interval = n, this._niceExtent = o
                    }
                },
                niceExtent: function (t, e, i) {
                    h.niceExtent.call(this, t, e, i);
                    var n = this._originalScale;
                    n.__fixMin = e, n.__fixMax = i
                }
            });
            r.each(["contain", "normalize"], function (t) {
                m.prototype[t] = function (e) {
                    return e = g(e) / g(this.base), l[t].call(this, e)
                }
            }), m.create = function () {
                return new m
            }, t.exports = m
        }, function (t, e, i) {
            var n = i(1), r = i(32), o = r.prototype, a = r.extend({
                type: "ordinal", init: function (t, e) {
                    this._data = t, this._extent = e || [0, t.length - 1]
                }, parse: function (t) {
                    return "string" == typeof t ? n.indexOf(this._data, t) : Math.round(t)
                }, contain: function (t) {
                    return t = this.parse(t), o.contain.call(this, t) && null != this._data[t]
                }, normalize: function (t) {
                    return o.normalize.call(this, this.parse(t))
                }, scale: function (t) {
                    return Math.round(o.scale.call(this, t))
                }, getTicks: function () {
                    for (var t = [], e = this._extent, i = e[0]; i <= e[1];)t.push(i), i++;
                    return t
                }, getLabel: function (t) {
                    return this._data[t]
                }, count: function () {
                    return this._extent[1] - this._extent[0] + 1
                }, niceTicks: n.noop, niceExtent: n.noop
            });
            a.create = function () {
                return new a
            }, t.exports = a
        }, function (t, e, i) {
            var n = i(1), r = i(4), o = i(9), a = i(38), s = a.prototype, l = Math.ceil, h = Math.floor, u = 1e3, c = 60 * u, d = 60 * c, f = 24 * d, p = function (t, e, i, n) {
                for (; i < n;) {
                    var r = i + n >>> 1;
                    t[r][2] < e ? i = r + 1 : n = r
                }
                return i
            }, g = a.extend({
                type: "time", getLabel: function (t) {
                    var e = this._stepLvl, i = new Date(t);
                    return o.formatTime(e[0], i)
                }, niceExtent: function (t, e, i) {
                    var n = this._extent;
                    if (n[0] === n[1] && (n[0] -= f, n[1] += f), n[1] === -(1 / 0) && n[0] === 1 / 0) {
                        var o = new Date;
                        n[1] = new Date(o.getFullYear(), o.getMonth(), o.getDate()), n[0] = n[1] - f
                    }
                    this.niceTicks(t);
                    var a = this._interval;
                    e || (n[0] = r.round(h(n[0] / a) * a)), i || (n[1] = r.round(l(n[1] / a) * a))
                }, niceTicks: function (t) {
                    t = t || 10;
                    var e = this._extent, i = e[1] - e[0], n = i / t, o = m.length, a = p(m, n, 0, o), s = m[Math.min(a, o - 1)], u = s[2];
                    if ("year" === s[0]) {
                        var c = i / u, d = r.nice(c / t, !0);
                        u *= d
                    }
                    var f = [l(e[0] / u) * u, h(e[1] / u) * u];
                    this._stepLvl = s, this._interval = u, this._niceExtent = f
                }, parse: function (t) {
                    return +r.parseDate(t)
                }
            });
            n.each(["contain", "normalize"], function (t) {
                g.prototype[t] = function (e) {
                    return s[t].call(this, this.parse(e))
                }
            });
            var m = [["hh:mm:ss", 1, u], ["hh:mm:ss", 5, 5 * u], ["hh:mm:ss", 10, 10 * u], ["hh:mm:ss", 15, 15 * u], ["hh:mm:ss", 30, 30 * u], ["hh:mm\nMM-dd", 1, c], ["hh:mm\nMM-dd", 5, 5 * c], ["hh:mm\nMM-dd", 10, 10 * c], ["hh:mm\nMM-dd", 15, 15 * c], ["hh:mm\nMM-dd", 30, 30 * c], ["hh:mm\nMM-dd", 1, d], ["hh:mm\nMM-dd", 2, 2 * d], ["hh:mm\nMM-dd", 6, 6 * d], ["hh:mm\nMM-dd", 12, 12 * d], ["MM-dd\nyyyy", 1, f], ["week", 7, 7 * f], ["month", 1, 31 * f], ["quarter", 3, 380 * f / 4], ["half-year", 6, 380 * f / 2], ["year", 1, 380 * f]];
            g.create = function () {
                return new g
            }, t.exports = g
        }, function (t, e, i) {
            var n = i(29);
            t.exports = function (t) {
                function e(e) {
                    var i = (e.visualColorAccessPath || "itemStyle.normal.color").split("."), r = e.getData(), o = e.get(i) || e.getColorFromPalette(e.get("name"));
                    r.setVisual("color", o), t.isSeriesFiltered(e) || ("function" != typeof o || o instanceof n || r.each(function (t) {
                        r.setItemVisual(t, "color", o(e.getDataParams(t)))
                    }), r.each(function (t) {
                        var e = r.getItemModel(t), n = e.get(i, !0);
                        null != n && r.setItemVisual(t, "color", n)
                    }))
                }

                t.eachRawSeries(e)
            }
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i) {
                return {
                    type: t,
                    event: i,
                    target: e,
                    cancelBubble: !1,
                    offsetX: i.zrX,
                    offsetY: i.zrY,
                    gestureEvent: i.gestureEvent,
                    pinchX: i.pinchX,
                    pinchY: i.pinchY,
                    pinchScale: i.pinchScale,
                    wheelDelta: i.zrDelta
                }
            }

            function r() {
            }

            function o(t, e, i) {
                if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
                    for (var n = t; n;) {
                        if (n.silent || n.clipPath && !n.clipPath.contain(e, i))return !1;
                        n = n.parent
                    }
                    return !0
                }
                return !1
            }

            var a = i(1), s = i(167), l = i(20);
            r.prototype.dispose = function () {
            };
            var h = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], u = function (t, e, i, n) {
                l.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new r, this.proxy = i, i.handler = this, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, s.call(this), a.each(h, function (t) {
                    i.on && i.on(t, this[t], this)
                }, this)
            };
            u.prototype = {
                constructor: u, mousemove: function (t) {
                    var e = t.zrX, i = t.zrY, n = this.findHover(e, i, null), r = this._hovered, o = this.proxy;
                    this._hovered = n, o.setCursor && o.setCursor(n ? n.cursor : "default"), r && n !== r && r.__zr && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(n, "mousemove", t), n && n !== r && this.dispatchToElement(n, "mouseover", t)
                }, mouseout: function (t) {
                    this.dispatchToElement(this._hovered, "mouseout", t);
                    var e, i = t.toElement || t.relatedTarget;
                    do i = i && i.parentNode; while (i && 9 != i.nodeType && !(e = i === this.painterRoot));
                    !e && this.trigger("globalout", {event: t})
                }, resize: function (t) {
                    this._hovered = null
                }, dispatch: function (t, e) {
                    var i = this[t];
                    i && i.call(this, e)
                }, dispose: function () {
                    this.proxy.dispose(), this.storage = this.proxy = this.painter = null
                }, setCursorStyle: function (t) {
                    var e = this.proxy;
                    e.setCursor && e.setCursor(t)
                }, dispatchToElement: function (t, e, i) {
                    for (var r = "on" + e, o = n(e, t, i), a = t; a && (a[r] && (o.cancelBubble = a[r].call(a, o)), a.trigger(e, o), a = a.parent, !o.cancelBubble););
                    o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function (t) {
                        "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o)
                    }))
                }, findHover: function (t, e, i) {
                    for (var n = this.storage.getDisplayList(), r = n.length - 1; r >= 0; r--)if (!n[r].silent && n[r] !== i && !n[r].ignore && o(n[r], t, e))return n[r]
                }
            }, a.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
                u.prototype[t] = function (e) {
                    var i = this.findHover(e.zrX, e.zrY, null);
                    if ("mousedown" === t)this._downel = i, this._upel = i; else if ("mosueup" === t)this._upel = i; else if ("click" === t && this._downel !== this._upel)return;
                    this.dispatchToElement(i, t, e)
                }
            }), a.mixin(u, l), a.mixin(u, s), t.exports = u
        }, function (t, e, i) {
            function n() {
                return !1
            }

            function r(t, e, i, n) {
                var r = document.createElement(e), o = i.getWidth(), a = i.getHeight(), s = r.style;
                return s.position = "absolute", s.left = 0, s.top = 0, s.width = o + "px", s.height = a + "px", r.width = o * n, r.height = a * n, r.setAttribute("data-zr-dom-id", t), r
            }

            var o = i(1), a = i(33), s = i(64), l = i(63), h = function (t, e, i) {
                var s;
                i = i || a.devicePixelRatio, "string" == typeof t ? s = r(t, "canvas", e, i) : o.isObject(t) && (s = t, t = s.id), this.id = t, this.dom = s;
                var l = s.style;
                l && (s.onselectstart = n, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", l.padding = 0, l.margin = 0, l["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
            };
            h.prototype = {
                constructor: h, elCount: 0, __dirty: !0, initContext: function () {
                    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
                }, createBackBuffer: function () {
                    var t = this.dpr;
                    this.domBack = r("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
                }, resize: function (t, e) {
                    var i = this.dpr, n = this.dom, r = n.style, o = this.domBack;
                    r.width = t + "px", r.height = e + "px", n.width = t * i, n.height = e * i, o && (o.width = t * i, o.height = e * i, 1 != i && this.ctxBack.scale(i, i))
                }, clear: function (t) {
                    var e = this.dom, i = this.ctx, n = e.width, r = e.height, o = this.clearColor, a = this.motionBlur && !t, h = this.lastFrameAlpha, u = this.dpr;
                    if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / u, r / u)), i.clearRect(0, 0, n, r), o) {
                        var c;
                        o.colorStops ? (c = o.__canvasGradient || s.getGradient(i, o, {
                                x: 0,
                                y: 0,
                                width: n,
                                height: r
                            }), o.__canvasGradient = c) : o.image && (c = l.prototype.getCanvasPattern.call(o, i)), i.save(), i.fillStyle = c || o, i.fillRect(0, 0, n, r), i.restore()
                    }
                    if (a) {
                        var d = this.domBack;
                        i.save(), i.globalAlpha = h, i.drawImage(d, 0, 0, n, r), i.restore()
                    }
                }
            }, t.exports = h
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                return parseInt(t, 10)
            }

            function r(t) {
                return !!t && (!!t.isBuildin || "function" == typeof t.resize && "function" == typeof t.refresh)
            }

            function o(t) {
                t.__unusedCount++
            }

            function a(t) {
                1 == t.__unusedCount && t.clear()
            }

            function s(t, e, i) {
                return x.copy(t.getBoundingRect()), t.transform && x.applyTransform(t.transform), _.width = e, _.height = i, !x.intersect(_)
            }

            function l(t, e) {
                if (t == e)return !1;
                if (!t || !e || t.length !== e.length)return !0;
                for (var i = 0; i < t.length; i++)if (t[i] !== e[i])return !0
            }

            function h(t, e) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i], r = n.path;
                    n.setTransform(e), r.beginPath(e), n.buildPath(r, n.shape), e.clip(), n.restoreTransform(e)
                }
            }

            function u(t, e) {
                var i = document.createElement("div");
                return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
            }

            var c = i(33), d = i(1), f = i(47), p = i(8), g = i(44), m = i(140), v = i(60), y = 5, x = new p(0, 0, 0, 0), _ = new p(0, 0, 0, 0), b = function (t, e, i) {
                var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = i = d.extend({}, i || {}), this.dpr = i.devicePixelRatio || c.devicePixelRatio, this._singleCanvas = n, this.root = t;
                var r = t.style;
                r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
                var o = this._zlevelList = [], a = this._layers = {};
                if (this._layerConfig = {}, n) {
                    var s = t.width, l = t.height;
                    this._width = s, this._height = l;
                    var h = new m(t, this, 1);
                    h.initContext(), a[0] = h, o.push(0)
                } else {
                    this._width = this._getSize(0), this._height = this._getSize(1);
                    var f = this._domRoot = u(this._width, this._height);
                    t.appendChild(f)
                }
                this.pathToImage = this._createPathToImage(), this._progressiveLayers = [], this._hoverlayer, this._hoverElements = []
            };
            b.prototype = {
                constructor: b, isSingleCanvas: function () {
                    return this._singleCanvas
                }, getViewportRoot: function () {
                    return this._singleCanvas ? this._layers[0].dom : this._domRoot
                }, refresh: function (t) {
                    var e = this.storage.getDisplayList(!0), i = this._zlevelList;
                    this._paintList(e, t);
                    for (var n = 0; n < i.length; n++) {
                        var r = i[n], o = this._layers[r];
                        !o.isBuildin && o.refresh && o.refresh()
                    }
                    return this.refreshHover(), this._progressiveLayers.length && this._startProgessive(), this
                }, addHover: function (t, e) {
                    if (!t.__hoverMir) {
                        var i = new t.constructor({style: t.style, shape: t.shape});
                        i.__from = t, t.__hoverMir = i, i.setStyle(e), this._hoverElements.push(i)
                    }
                }, removeHover: function (t) {
                    var e = t.__hoverMir, i = this._hoverElements, n = d.indexOf(i, e);
                    n >= 0 && i.splice(n, 1), t.__hoverMir = null
                }, clearHover: function (t) {
                    for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                        var n = e[i].__from;
                        n && (n.__hoverMir = null)
                    }
                    e.length = 0
                }, refreshHover: function () {
                    var t = this._hoverElements, e = t.length, i = this._hoverlayer;
                    if (i && i.clear(), e) {
                        g(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                        var n = {};
                        i.ctx.save();
                        for (var r = 0; r < e;) {
                            var o = t[r], a = o.__from;
                            a && a.__zr ? (r++, a.invisible || (o.transform = a.transform, o.invTransform = a.invTransform, o.__clipPaths = a.__clipPaths, this._doPaintEl(o, i, !0, n))) : (t.splice(r, 1), a.__hoverMir = null, e--)
                        }
                        i.ctx.restore()
                    }
                }, _startProgessive: function () {
                    function t() {
                        i === e._progressiveToken && e.storage && (e._doPaintList(e.storage.getDisplayList()), e._furtherProgressive ? (e._progress++, v(t)) : e._progressiveToken = -1)
                    }

                    var e = this;
                    if (e._furtherProgressive) {
                        var i = e._progressiveToken = +new Date;
                        e._progress++, v(t)
                    }
                }, _clearProgressive: function () {
                    this._progressiveToken = -1, this._progress = 0, d.each(this._progressiveLayers, function (t) {
                        t.__dirty && t.clear()
                    })
                }, _paintList: function (t, e) {
                    null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuildinLayer(o), this._doPaintList(t, e), this.eachBuildinLayer(a)
                }, _doPaintList: function (t, e) {
                    function i(t) {
                        var e = o.dpr || 1;
                        o.save(), o.globalAlpha = 1, o.shadowBlur = 0, n.__dirty = !0, o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(t.dom, 0, 0, u * e, c * e), o.restore()
                    }

                    for (var n, r, o, a, s, l, h = 0, u = this._width, c = this._height, p = this._progress, g = 0, m = t.length; g < m; g++) {
                        var v = t[g], x = this._singleCanvas ? 0 : v.zlevel, _ = v.__frame;
                        if (_ < 0 && s && (i(s), s = null), r !== x && (o && o.restore(), a = {}, r = x, n = this.getLayer(r), n.isBuildin || f("ZLevel " + r + " has been used by unkown layer " + n.id), o = n.ctx, o.save(), n.__unusedCount = 0, (n.__dirty || e) && n.clear()), n.__dirty || e) {
                            if (_ >= 0) {
                                if (!s) {
                                    if (s = this._progressiveLayers[Math.min(h++, y - 1)], s.ctx.save(), s.renderScope = {}, s && s.__progress > s.__maxProgress) {
                                        g = s.__nextIdxNotProg - 1;
                                        continue
                                    }
                                    l = s.__progress, s.__dirty || (p = l), s.__progress = p + 1
                                }
                                _ === p && this._doPaintEl(v, s, !0, s.renderScope)
                            } else this._doPaintEl(v, n, e, a);
                            v.__dirty = !1
                        }
                    }
                    s && i(s), o && o.restore(), this._furtherProgressive = !1, d.each(this._progressiveLayers, function (t) {
                        t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
                    }, this)
                }, _doPaintEl: function (t, e, i, n) {
                    var r = e.ctx, o = t.transform;
                    if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!o || o[0] || o[3]) && (!t.culling || !s(t, this._width, this._height))) {
                        var a = t.__clipPaths;
                        (n.prevClipLayer !== e || l(a, n.prevElClipPaths)) && (n.prevElClipPaths && (n.prevClipLayer.ctx.restore(), n.prevClipLayer = n.prevElClipPaths = null, n.prevEl = null), a && (r.save(), h(a, r), n.prevClipLayer = e, n.prevElClipPaths = a)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r)
                    }
                }, getLayer: function (t) {
                    if (this._singleCanvas)return this._layers[0];
                    var e = this._layers[t];
                    return e || (e = new m("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && d.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
                }, insertLayer: function (t, e) {
                    var i = this._layers, n = this._zlevelList, o = n.length, a = null, s = -1, l = this._domRoot;
                    if (i[t])return void f("ZLevel " + t + " has been used already");
                    if (!r(e))return void f("Layer of zlevel " + t + " is not valid");
                    if (o > 0 && t > n[0]) {
                        for (s = 0; s < o - 1 && !(n[s] < t && n[s + 1] > t); s++);
                        a = i[n[s]]
                    }
                    if (n.splice(s + 1, 0, t), a) {
                        var h = a.dom;
                        h.nextSibling ? l.insertBefore(e.dom, h.nextSibling) : l.appendChild(e.dom)
                    } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
                    i[t] = e
                }, eachLayer: function (t, e) {
                    var i, n, r = this._zlevelList;
                    for (n = 0; n < r.length; n++)i = r[n], t.call(e, this._layers[i], i)
                }, eachBuildinLayer: function (t, e) {
                    var i, n, r, o = this._zlevelList;
                    for (r = 0; r < o.length; r++)n = o[r], i = this._layers[n], i.isBuildin && t.call(e, i, n)
                }, eachOtherLayer: function (t, e) {
                    var i, n, r, o = this._zlevelList;
                    for (r = 0; r < o.length; r++)n = o[r], i = this._layers[n], i.isBuildin || t.call(e, i, n)
                }, getLayers: function () {
                    return this._layers
                }, _updateLayerStatus: function (t) {
                    var e = this._layers, i = this._progressiveLayers, n = {}, r = {};
                    this.eachBuildinLayer(function (t, e) {
                        n[e] = t.elCount, t.elCount = 0, t.__dirty = !1
                    }), d.each(i, function (t, e) {
                        r[e] = t.elCount, t.elCount = 0, t.__dirty = !1
                    });
                    for (var o, a, s = 0, l = 0, h = 0, u = t.length; h < u; h++) {
                        var c = t[h], f = this._singleCanvas ? 0 : c.zlevel, p = e[f], g = c.progressive;
                        if (p && (p.elCount++, p.__dirty = p.__dirty || c.__dirty), g >= 0) {
                            a !== g && (a = g, l++);
                            var v = c.__frame = l - 1;
                            if (!o) {
                                var x = Math.min(s, y - 1);
                                o = i[x], o || (o = i[x] = new m("progressive", this, this.dpr), o.initContext()), o.__maxProgress = 0
                            }
                            o.__dirty = o.__dirty || c.__dirty, o.elCount++, o.__maxProgress = Math.max(o.__maxProgress, v), o.__maxProgress >= o.__progress && (p.__dirty = !0)
                        } else c.__frame = -1, o && (o.__nextIdxNotProg = h, s++, o = null)
                    }
                    o && (s++, o.__nextIdxNotProg = h), this.eachBuildinLayer(function (t, e) {
                        n[e] !== t.elCount && (t.__dirty = !0)
                    }), i.length = Math.min(s, y), d.each(i, function (t, e) {
                        r[e] !== t.elCount && (c.__dirty = !0), t.__dirty && (t.__progress = 0)
                    })
                }, clear: function () {
                    return this.eachBuildinLayer(this._clearLayer), this
                }, _clearLayer: function (t) {
                    t.clear()
                }, configLayer: function (t, e) {
                    if (e) {
                        var i = this._layerConfig;
                        i[t] ? d.merge(i[t], e, !0) : i[t] = e;
                        var n = this._layers[t];
                        n && d.merge(n, i[t], !0)
                    }
                }, delLayer: function (t) {
                    var e = this._layers, i = this._zlevelList, n = e[t];
                    n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(d.indexOf(i, t), 1))
                }, resize: function (t, e) {
                    var i = this._domRoot;
                    i.style.display = "none";
                    var n = this._opts;
                    if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
                        i.style.width = t + "px", i.style.height = e + "px";
                        for (var r in this._layers)this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                        d.each(this._progressiveLayers, function (i) {
                            i.resize(t, e)
                        }), this.refresh(!0)
                    }
                    return this._width = t, this._height = e, this
                }, clearLayer: function (t) {
                    var e = this._layers[t];
                    e && e.clear()
                }, dispose: function () {
                    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
                }, getRenderedCanvas: function (t) {
                    if (t = t || {}, this._singleCanvas)return this._layers[0].dom;
                    var e = new m("image", this, t.pixelRatio || this.dpr);
                    e.initContext(), e.clearColor = t.backgroundColor, e.clear();
                    for (var i = this.storage.getDisplayList(!0), n = {}, r = 0; r < i.length; r++) {
                        var o = i[r];
                        this._doPaintEl(o, e, !0, n)
                    }
                    return e.dom
                }, getWidth: function () {
                    return this._width
                }, getHeight: function () {
                    return this._height
                }, _getSize: function (t) {
                    var e = this._opts, i = ["width", "height"][t], r = ["clientWidth", "clientHeight"][t], o = ["paddingLeft", "paddingTop"][t], a = ["paddingRight", "paddingBottom"][t];
                    if (null != e[i] && "auto" !== e[i])return parseFloat(e[i]);
                    var s = this.root, l = document.defaultView.getComputedStyle(s);
                    return (s[r] || n(l[i]) || n(s.style[i])) - (n(l[o]) || 0) - (n(l[a]) || 0) | 0
                }, _pathToImage: function (t, e, n, r, o) {
                    var a = document.createElement("canvas"), s = a.getContext("2d");
                    a.width = n * o, a.height = r * o, s.clearRect(0, 0, n * o, r * o);
                    var l = {position: e.position, rotation: e.rotation, scale: e.scale};
                    e.position = [0, 0, 0], e.rotation = 0, e.scale = [1, 1], e && e.brush(s);
                    var h = i(48), u = new h({id: t, style: {x: 0, y: 0, image: a}});
                    return null != l.position && (u.position = e.position = l.position), null != l.rotation && (u.rotation = e.rotation = l.rotation), null != l.scale && (u.scale = e.scale = l.scale), u
                }, _createPathToImage: function () {
                    var t = this;
                    return function (e, i, n, r) {
                        return t._pathToImage(e, i, n, r, t.dpr)
                    }
                }
            }, t.exports = b
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
            }

            var r = i(1), o = i(11), a = i(34), s = i(44), l = function () {
                this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
            };
            l.prototype = {
                constructor: l, traverse: function (t, e) {
                    for (var i = 0; i < this._roots.length; i++)this._roots[i].traverse(t, e)
                }, getDisplayList: function (t, e) {
                    return e = e || !1, t && this.updateDisplayList(e), this._displayList
                }, updateDisplayList: function (t) {
                    this._displayListLen = 0;
                    for (var e = this._roots, i = this._displayList, r = 0, a = e.length; r < a; r++)this._updateAndAddDisplayable(e[r], null, t);
                    i.length = this._displayListLen, o.canvasSupported && s(i, n)
                }, _updateAndAddDisplayable: function (t, e, i) {
                    if (!t.ignore || i) {
                        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                        var n = t.clipPath;
                        if (n && (n.parent = t, n.updateTransform(), e ? (e = e.slice(), e.push(n)) : e = [n]), t.isGroup) {
                            for (var r = t._children, o = 0; o < r.length; o++) {
                                var a = r[o];
                                t.__dirty && (a.__dirty = !0), this._updateAndAddDisplayable(a, e, i)
                            }
                            t.__dirty = !1
                        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                    }
                }, addRoot: function (t) {
                    this._elements[t.id] || (t instanceof a && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t))
                }, delRoot: function (t) {
                    if (null == t) {
                        for (var e = 0; e < this._roots.length; e++) {
                            var i = this._roots[e];
                            i instanceof a && i.delChildrenFromStorage(this)
                        }
                        return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
                    }
                    if (t instanceof Array)for (var e = 0, n = t.length; e < n; e++)this.delRoot(t[e]); else {
                        var o;
                        o = "string" == typeof t ? this._elements[t] : t;
                        var s = r.indexOf(this._roots, o);
                        s >= 0 && (this.delFromMap(o.id), this._roots.splice(s, 1), o instanceof a && o.delChildrenFromStorage(this))
                    }
                }, addToMap: function (t) {
                    return t instanceof a && (t.__storage = this), t.dirty(!1), this._elements[t.id] = t, this
                }, get: function (t) {
                    return this._elements[t]
                }, delFromMap: function (t) {
                    var e = this._elements, i = e[t];
                    return i && (delete e[t], i instanceof a && (i.__storage = null)), this
                }, dispose: function () {
                    this._elements = this._renderList = this._roots = null
                }, displayableSortFunc: n
            }, t.exports = l
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(24).Dispatcher, o = i(60), a = i(59), s = function (t) {
                t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
                    }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, r.call(this);
            };
            s.prototype = {
                constructor: s, addClip: function (t) {
                    this._clips.push(t)
                }, addAnimator: function (t) {
                    t.animation = this;
                    for (var e = t.getClips(), i = 0; i < e.length; i++)this.addClip(e[i])
                }, removeClip: function (t) {
                    var e = n.indexOf(this._clips, t);
                    e >= 0 && this._clips.splice(e, 1)
                }, removeAnimator: function (t) {
                    for (var e = t.getClips(), i = 0; i < e.length; i++)this.removeClip(e[i]);
                    t.animation = null
                }, _update: function () {
                    for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], o = [], a = 0; a < n; a++) {
                        var s = i[a], l = s.step(t);
                        l && (r.push(l), o.push(s))
                    }
                    for (var a = 0; a < n;)i[a]._needsRemove ? (i[a] = i[n - 1], i.pop(), n--) : a++;
                    n = r.length;
                    for (var a = 0; a < n; a++)o[a].fire(r[a]);
                    this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
                }, _startLoop: function () {
                    function t() {
                        e._running && (o(t), !e._paused && e._update())
                    }

                    var e = this;
                    this._running = !0, o(t)
                }, start: function () {
                    this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
                }, stop: function () {
                    this._running = !1
                }, pause: function () {
                    this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
                }, resume: function () {
                    this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
                }, clear: function () {
                    this._clips = []
                }, animate: function (t, e) {
                    e = e || {};
                    var i = new a(t, e.loop, e.getter, e.setter);
                    return i
                }
            }, n.mixin(s, r), t.exports = s
        }, function (t, e, i) {
            function n(t) {
                this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
            }

            var r = i(145);
            n.prototype = {
                constructor: n, step: function (t) {
                    this._initialized || (this._startTime = t + this._delay, this._initialized = !0);
                    var e = (t - this._startTime) / this._life;
                    if (!(e < 0)) {
                        e = Math.min(e, 1);
                        var i = this.easing, n = "string" == typeof i ? r[i] : i, o = "function" == typeof n ? n(e) : e;
                        return this.fire("frame", o), 1 == e ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                    }
                }, restart: function (t) {
                    var e = (t - this._startTime) % this._life;
                    this._startTime = t - e + this.gap, this._needsRemove = !1
                }, fire: function (t, e) {
                    t = "on" + t, this[t] && this[t](this._target, e)
                }
            }, t.exports = n
        }, function (t, e) {
            var i = {
                linear: function (t) {
                    return t
                }, quadraticIn: function (t) {
                    return t * t
                }, quadraticOut: function (t) {
                    return t * (2 - t)
                }, quadraticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }, cubicIn: function (t) {
                    return t * t * t
                }, cubicOut: function (t) {
                    return --t * t * t + 1
                }, cubicInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }, quarticIn: function (t) {
                    return t * t * t * t
                }, quarticOut: function (t) {
                    return 1 - --t * t * t * t
                }, quarticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }, quinticIn: function (t) {
                    return t * t * t * t * t
                }, quinticOut: function (t) {
                    return --t * t * t * t * t + 1
                }, quinticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }, sinusoidalIn: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }, sinusoidalOut: function (t) {
                    return Math.sin(t * Math.PI / 2)
                }, sinusoidalInOut: function (t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                }, exponentialIn: function (t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                }, exponentialOut: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                }, exponentialInOut: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
                }, circularIn: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                }, circularOut: function (t) {
                    return Math.sqrt(1 - --t * t)
                }, circularInOut: function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }, elasticIn: function (t) {
                    var e, i = .1, n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
                }, elasticOut: function (t) {
                    var e, i = .1, n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
                }, elasticInOut: function (t) {
                    var e, i = .1, n = .4;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
                }, backIn: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                }, backOut: function (t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                }, backInOut: function (t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                }, bounceIn: function (t) {
                    return 1 - i.bounceOut(1 - t)
                }, bounceOut: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }, bounceInOut: function (t) {
                    return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
                }
            };
            t.exports = i
        }, function (t, e, i) {
            var n = i(61).normalizeRadian, r = 2 * Math.PI;
            t.exports = {
                containStroke: function (t, e, i, o, a, s, l, h, u) {
                    if (0 === l)return !1;
                    var c = l;
                    h -= t, u -= e;
                    var d = Math.sqrt(h * h + u * u);
                    if (d - c > i || d + c < i)return !1;
                    if (Math.abs(o - a) % r < 1e-4)return !0;
                    if (s) {
                        var f = o;
                        o = n(a), a = n(f)
                    } else o = n(o), a = n(a);
                    o > a && (a += r);
                    var p = Math.atan2(u, h);
                    return p < 0 && (p += r), p >= o && p <= a || p + r >= o && p + r <= a
                }
            }
        }, function (t, e, i) {
            var n = i(17);
            t.exports = {
                containStroke: function (t, e, i, r, o, a, s, l, h, u, c) {
                    if (0 === h)return !1;
                    var d = h;
                    if (c > e + d && c > r + d && c > a + d && c > l + d || c < e - d && c < r - d && c < a - d && c < l - d || u > t + d && u > i + d && u > o + d && u > s + d || u < t - d && u < i - d && u < o - d && u < s - d)return !1;
                    var f = n.cubicProjectPoint(t, e, i, r, o, a, s, l, u, c, null);
                    return f <= d / 2
                }
            }
        }, function (t, e, i) {
            "use strict";
            function n(t, e) {
                return Math.abs(t - e) < x
            }

            function r() {
                var t = b[0];
                b[0] = b[1], b[1] = t
            }

            function o(t, e, i, n, o, a, s, l, h, u) {
                if (u > e && u > n && u > a && u > l || u < e && u < n && u < a && u < l)return 0;
                var c = g.cubicRootAt(e, n, a, l, u, _);
                if (0 === c)return 0;
                for (var d, f, p = 0, m = -1, v = 0; v < c; v++) {
                    var y = _[v], x = 0 === y || 1 === y ? .5 : 1, w = g.cubicAt(t, i, o, s, y);
                    w < h || (m < 0 && (m = g.cubicExtrema(e, n, a, l, b), b[1] < b[0] && m > 1 && r(), d = g.cubicAt(e, n, a, l, b[0]), m > 1 && (f = g.cubicAt(e, n, a, l, b[1]))), p += 2 == m ? y < b[0] ? d < e ? x : -x : y < b[1] ? f < d ? x : -x : l < f ? x : -x : y < b[0] ? d < e ? x : -x : l < d ? x : -x)
                }
                return p
            }

            function a(t, e, i, n, r, o, a, s) {
                if (s > e && s > n && s > o || s < e && s < n && s < o)return 0;
                var l = g.quadraticRootAt(e, n, o, s, _);
                if (0 === l)return 0;
                var h = g.quadraticExtremum(e, n, o);
                if (h >= 0 && h <= 1) {
                    for (var u = 0, c = g.quadraticAt(e, n, o, h), d = 0; d < l; d++) {
                        var f = 0 === _[d] || 1 === _[d] ? .5 : 1, p = g.quadraticAt(t, i, r, _[d]);
                        p < a || (u += _[d] < h ? c < e ? f : -f : o < c ? f : -f)
                    }
                    return u
                }
                var f = 0 === _[0] || 1 === _[0] ? .5 : 1, p = g.quadraticAt(t, i, r, _[0]);
                return p < a ? 0 : o < e ? f : -f
            }

            function s(t, e, i, n, r, o, a, s) {
                if (s -= e, s > i || s < -i)return 0;
                var l = Math.sqrt(i * i - s * s);
                _[0] = -l, _[1] = l;
                var h = Math.abs(n - r);
                if (h < 1e-4)return 0;
                if (h % y < 1e-4) {
                    n = 0, r = y;
                    var u = o ? 1 : -1;
                    return a >= _[0] + t && a <= _[1] + t ? u : 0
                }
                if (o) {
                    var l = n;
                    n = p(r), r = p(l)
                } else n = p(n), r = p(r);
                n > r && (r += y);
                for (var c = 0, d = 0; d < 2; d++) {
                    var f = _[d];
                    if (f + t > a) {
                        var g = Math.atan2(s, f), u = o ? 1 : -1;
                        g < 0 && (g = y + g), (g >= n && g <= r || g + y >= n && g + y <= r) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (u = -u), c += u)
                    }
                }
                return c
            }

            function l(t, e, i, r, l) {
                for (var u = 0, p = 0, g = 0, y = 0, x = 0, _ = 0; _ < t.length;) {
                    var b = t[_++];
                    switch (b === h.M && _ > 1 && (i || (u += m(p, g, y, x, r, l))), 1 == _ && (p = t[_], g = t[_ + 1], y = p, x = g), b) {
                        case h.M:
                            y = t[_++], x = t[_++], p = y, g = x;
                            break;
                        case h.L:
                            if (i) {
                                if (v(p, g, t[_], t[_ + 1], e, r, l))return !0
                            } else u += m(p, g, t[_], t[_ + 1], r, l) || 0;
                            p = t[_++], g = t[_++];
                            break;
                        case h.C:
                            if (i) {
                                if (c.containStroke(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, r, l))return !0
                            } else u += o(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], r, l) || 0;
                            p = t[_++], g = t[_++];
                            break;
                        case h.Q:
                            if (i) {
                                if (d.containStroke(p, g, t[_++], t[_++], t[_], t[_ + 1], e, r, l))return !0
                            } else u += a(p, g, t[_++], t[_++], t[_], t[_ + 1], r, l) || 0;
                            p = t[_++], g = t[_++];
                            break;
                        case h.A:
                            var w = t[_++], M = t[_++], S = t[_++], T = t[_++], A = t[_++], I = t[_++], C = (t[_++], 1 - t[_++]), L = Math.cos(A) * S + w, P = Math.sin(A) * T + M;
                            _ > 1 ? u += m(p, g, L, P, r, l) : (y = L, x = P);
                            var k = (r - w) * T / S + w;
                            if (i) {
                                if (f.containStroke(w, M, T, A, A + I, C, e, k, l))return !0
                            } else u += s(w, M, T, A, A + I, C, k, l);
                            p = Math.cos(A + I) * S + w, g = Math.sin(A + I) * T + M;
                            break;
                        case h.R:
                            y = p = t[_++], x = g = t[_++];
                            var D = t[_++], O = t[_++], L = y + D, P = x + O;
                            if (i) {
                                if (v(y, x, L, x, e, r, l) || v(L, x, L, P, e, r, l) || v(L, P, y, P, e, r, l) || v(y, P, y, x, e, r, l))return !0
                            } else u += m(L, x, L, P, r, l), u += m(y, P, y, x, r, l);
                            break;
                        case h.Z:
                            if (i) {
                                if (v(p, g, y, x, e, r, l))return !0
                            } else u += m(p, g, y, x, r, l);
                            p = y, g = x
                    }
                }
                return i || n(g, x) || (u += m(p, g, y, x, r, l) || 0), 0 !== u
            }

            var h = i(28).CMD, u = i(84), c = i(147), d = i(85), f = i(146), p = i(61).normalizeRadian, g = i(17), m = i(86), v = u.containStroke, y = 2 * Math.PI, x = 1e-4, _ = [-1, -1, -1], b = [-1, -1];
            t.exports = {
                contain: function (t, e, i) {
                    return l(t, 0, !1, e, i)
                }, containStroke: function (t, e, i, n) {
                    return l(t, e, !0, i, n)
                }
            }
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
                return Math.sqrt(e * e + i * i)
            }

            function r(t) {
                return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
            }

            var o = i(24), a = function () {
                this._track = []
            };
            a.prototype = {
                constructor: a, recognize: function (t, e, i) {
                    return this._doTrack(t, e, i), this._recognize(t)
                }, clear: function () {
                    return this._track.length = 0, this
                }, _doTrack: function (t, e, i) {
                    var n = t.touches;
                    if (n) {
                        for (var r = {points: [], touches: [], target: e, event: t}, a = 0, s = n.length; a < s; a++) {
                            var l = n[a], h = o.clientToLocal(i, l, {});
                            r.points.push([h.zrX, h.zrY]), r.touches.push(l)
                        }
                        this._track.push(r)
                    }
                }, _recognize: function (t) {
                    for (var e in s)if (s.hasOwnProperty(e)) {
                        var i = s[e](this._track, t);
                        if (i)return i
                    }
                }
            };
            var s = {
                pinch: function (t, e) {
                    var i = t.length;
                    if (i) {
                        var o = (t[i - 1] || {}).points, a = (t[i - 2] || {}).points || o;
                        if (a && a.length > 1 && o && o.length > 1) {
                            var s = n(o) / n(a);
                            !isFinite(s) && (s = 1), e.pinchScale = s;
                            var l = r(o);
                            return e.pinchX = l[0], e.pinchY = l[1], {type: "pinch", target: t[0].target, event: e}
                        }
                    }
                }
            };
            t.exports = a
        }, function (t, e) {
            var i = function () {
                this.head = null, this.tail = null, this._len = 0
            }, n = i.prototype;
            n.insert = function (t) {
                var e = new r(t);
                return this.insertEntry(e), e
            }, n.insertEntry = function (t) {
                this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
            }, n.remove = function (t) {
                var e = t.prev, i = t.next;
                e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
            }, n.len = function () {
                return this._len
            };
            var r = function (t) {
                this.value = t, this.next, this.prev
            }, o = function (t) {
                this._list = new i, this._map = {}, this._maxSize = t || 10
            }, a = o.prototype;
            a.put = function (t, e) {
                var i = this._list, n = this._map;
                if (null == n[t]) {
                    var r = i.len();
                    if (r >= this._maxSize && r > 0) {
                        var o = i.head;
                        i.remove(o), delete n[o.key]
                    }
                    var a = i.insert(e);
                    a.key = t, n[t] = a
                }
            }, a.get = function (t) {
                var e = this._map[t], i = this._list;
                if (null != e)return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value
            }, a.clear = function () {
                this._list.clear(), this._map = {}
            }, t.exports = o
        }, function (t, e, i) {
            function n(t) {
                return "mousewheel" === t && d.browser.firefox ? "DOMMouseScroll" : t
            }

            function r(t, e, i) {
                var n = t._gestureMgr;
                "start" === i && n.clear();
                var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null), t.dom);
                if ("end" === i && n.clear(), r) {
                    var o = r.type;
                    e.gestureEvent = o, t.handler.dispatchToElement(r.target, o, r.event)
                }
            }

            function o(t) {
                t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
                    t._touching = !1
                }, 700)
            }

            function a() {
                return d.touchEventsSupported
            }

            function s(t) {
                function e(t, e) {
                    return function () {
                        if (!e._touching)return t.apply(e, arguments)
                    }
                }

                for (var i = 0; i < x.length; i++) {
                    var n = x[i];
                    t._handlers[n] = u.bind(_[n], t)
                }
                for (var i = 0; i < y.length; i++) {
                    var n = y[i];
                    t._handlers[n] = e(_[n], t)
                }
            }

            function l(t) {
                function e(e, i) {
                    u.each(e, function (e) {
                        p(t, n(e), i._handlers[e])
                    }, i)
                }

                c.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new f, this._handlers = {}, s(this), a() && e(x, this), e(y, this)
            }

            var h = i(24), u = i(1), c = i(20), d = i(11), f = i(149), p = h.addEventListener, g = h.removeEventListener, m = h.normalizeEvent, v = 300, y = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], x = ["touchstart", "touchend", "touchmove"], _ = {
                mousemove: function (t) {
                    t = m(this.dom, t), this.trigger("mousemove", t)
                }, mouseout: function (t) {
                    t = m(this.dom, t);
                    var e = t.toElement || t.relatedTarget;
                    if (e != this.dom)for (; e && 9 != e.nodeType;) {
                        if (e === this.dom)return;
                        e = e.parentNode
                    }
                    this.trigger("mouseout", t)
                }, touchstart: function (t) {
                    t = m(this.dom, t), this._lastTouchMoment = new Date, r(this, t, "start"), _.mousemove.call(this, t), _.mousedown.call(this, t), o(this)
                }, touchmove: function (t) {
                    t = m(this.dom, t), r(this, t, "change"), _.mousemove.call(this, t), o(this)
                }, touchend: function (t) {
                    t = m(this.dom, t), r(this, t, "end"), _.mouseup.call(this, t), +new Date - this._lastTouchMoment < v && _.click.call(this, t), o(this)
                }
            };
            u.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
                _[t] = function (e) {
                    e = m(this.dom, e), this.trigger(t, e)
                }
            });
            var b = l.prototype;
            b.dispose = function () {
                for (var t = y.concat(x), e = 0; e < t.length; e++) {
                    var i = t[e];
                    g(this.dom, n(i), this._handlers[i])
                }
            }, b.setCursor = function (t) {
                this.dom.style.cursor = t || "default"
            }, u.mixin(l, c), t.exports = l
        }, function (t, e, i) {
            var n = i(6);
            t.exports = n.extend({
                type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                    for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++)t = t || e[i].__dirtyPath;
                    this.__dirtyPath = t, this.__dirty = this.__dirty || t
                }, beforeBrush: function () {
                    this._updatePathDirty();
                    for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++)t[i].path.setScale(e[0], e[1])
                }, buildPath: function (t, e) {
                    for (var i = e.paths || [], n = 0; n < i.length; n++)i[n].buildPath(t, i[n].shape, !0)
                }, afterBrush: function () {
                    for (var t = this.shape.paths, e = 0; e < t.length; e++)t[e].__dirtyPath = !1
                }, getBoundingRect: function () {
                    return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
                }
            })
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(29), o = function (t, e, i, n, o) {
                this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = o || !1, r.call(this, n)
            };
            o.prototype = {constructor: o}, n.inherits(o, r), t.exports = o
        }, function (t, e) {
            t.exports = {
                buildPath: function (t, e) {
                    var i, n, r, o, a = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
                    l < 0 && (a += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? i = n = r = o = u : u instanceof Array ? 1 === u.length ? i = n = r = o = u[0] : 2 === u.length ? (i = r = u[0], n = o = u[1]) : 3 === u.length ? (i = u[0], n = o = u[1], r = u[2]) : (i = u[0], n = u[1], r = u[2], o = u[3]) : i = n = r = o = 0;
                    var c;
                    i + n > l && (c = i + n, i *= l / c, n *= l / c), r + o > l && (c = r + o, r *= l / c, o *= l / c), n + r > h && (c = n + r, n *= h / c, r *= h / c), i + o > h && (c = i + o, i *= h / c, o *= h / c), t.moveTo(a + i, s), t.lineTo(a + l - n, s), 0 !== n && t.quadraticCurveTo(a + l, s, a + l, s + n), t.lineTo(a + l, s + h - r), 0 !== r && t.quadraticCurveTo(a + l, s + h, a + l - r, s + h), t.lineTo(a + o, s + h), 0 !== o && t.quadraticCurveTo(a, s + h, a, s + h - o), t.lineTo(a, s + i), 0 !== i && t.quadraticCurveTo(a, s, a + i, s)
                }
            }
        }, function (t, e, i) {
            var n = i(5), r = n.min, o = n.max, a = n.scale, s = n.distance, l = n.add;
            t.exports = function (t, e, i, h) {
                var u, c, d, f, p = [], g = [], m = [], v = [];
                if (h) {
                    d = [1 / 0, 1 / 0], f = [-(1 / 0), -(1 / 0)];
                    for (var y = 0, x = t.length; y < x; y++)r(d, d, t[y]), o(f, f, t[y]);
                    r(d, d, h[0]), o(f, f, h[1])
                }
                for (var y = 0, x = t.length; y < x; y++) {
                    var _ = t[y];
                    if (i)u = t[y ? y - 1 : x - 1], c = t[(y + 1) % x]; else {
                        if (0 === y || y === x - 1) {
                            p.push(n.clone(t[y]));
                            continue
                        }
                        u = t[y - 1], c = t[y + 1]
                    }
                    n.sub(g, c, u), a(g, g, e);
                    var b = s(_, u), w = s(_, c), M = b + w;
                    0 !== M && (b /= M, w /= M), a(m, g, -b), a(v, g, w);
                    var S = l([], _, m), T = l([], _, v);
                    h && (o(S, S, d), r(S, S, f), o(T, T, d), r(T, T, f)), p.push(S), p.push(T)
                }
                return i && p.push(p.shift()), p
            }
        }, function (t, e, i) {
            function n(t, e, i, n, r, o, a) {
                var s = .5 * (i - t), l = .5 * (n - e);
                return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e
            }

            var r = i(5);
            t.exports = function (t, e) {
                for (var i = t.length, o = [], a = 0, s = 1; s < i; s++)a += r.distance(t[s - 1], t[s]);
                var l = a / 2;
                l = l < i ? i : l;
                for (var s = 0; s < l; s++) {
                    var h, u, c, d = s / (l - 1) * (e ? i : i - 1), f = Math.floor(d), p = d - f, g = t[f % i];
                    e ? (h = t[(f - 1 + i) % i], u = t[(f + 1) % i], c = t[(f + 2) % i]) : (h = t[0 === f ? f : f - 1], u = t[f > i - 2 ? i - 1 : f + 1], c = t[f > i - 3 ? i - 1 : f + 2]);
                    var m = p * p, v = p * m;
                    o.push([n(h[0], g[0], u[0], c[0], p, m, v), n(h[1], g[1], u[1], c[1], p, m, v)])
                }
                return o
            }
        }, function (t, e, i) {
            t.exports = i(6).extend({
                type: "arc",
                shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = e.clockwise, l = Math.cos(o), h = Math.sin(o);
                    t.moveTo(l * r + i, h * r + n), t.arc(i, n, r, o, a, !s)
                }
            })
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i) {
                var n = t.cpx2, r = t.cpy2;
                return null === n || null === r ? [(i ? c : h)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? c : h)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? u : l)(t.x1, t.cpx1, t.x2, e), (i ? u : l)(t.y1, t.cpy1, t.y2, e)]
            }

            var r = i(17), o = i(5), a = r.quadraticSubdivide, s = r.cubicSubdivide, l = r.quadraticAt, h = r.cubicAt, u = r.quadraticDerivativeAt, c = r.cubicDerivativeAt, d = [];
            t.exports = i(6).extend({
                type: "bezier-curve",
                shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    var i = e.x1, n = e.y1, r = e.x2, o = e.y2, l = e.cpx1, h = e.cpy1, u = e.cpx2, c = e.cpy2, f = e.percent;
                    0 !== f && (t.moveTo(i, n), null == u || null == c ? (f < 1 && (a(i, l, r, f, d), l = d[1], r = d[2], a(n, h, o, f, d), h = d[1], o = d[2]), t.quadraticCurveTo(l, h, r, o)) : (f < 1 && (s(i, l, u, r, f, d), l = d[1], u = d[2], r = d[3], s(n, h, c, o, f, d), h = d[1], c = d[2], o = d[3]), t.bezierCurveTo(l, h, u, c, r, o)))
                },
                pointAt: function (t) {
                    return n(this.shape, t, !1)
                },
                tangentAt: function (t) {
                    var e = n(this.shape, t, !0);
                    return o.normalize(e, e)
                }
            })
        }, function (t, e, i) {
            "use strict";
            t.exports = i(6).extend({
                type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, i) {
                    i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
                }
            })
        }, function (t, e, i) {
            t.exports = i(6).extend({
                type: "line",
                shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    var i = e.x1, n = e.y1, r = e.x2, o = e.y2, a = e.percent;
                    0 !== a && (t.moveTo(i, n), a < 1 && (r = i * (1 - a) + r * a, o = n * (1 - a) + o * a), t.lineTo(r, o))
                },
                pointAt: function (t) {
                    var e = this.shape;
                    return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
                }
            })
        }, function (t, e, i) {
            var n = i(65);
            t.exports = i(6).extend({
                type: "polygon",
                shape: {points: null, smooth: !1, smoothConstraint: null},
                buildPath: function (t, e) {
                    n.buildPath(t, e, !0)
                }
            })
        }, function (t, e, i) {
            var n = i(65);
            t.exports = i(6).extend({
                type: "polyline",
                shape: {points: null, smooth: !1, smoothConstraint: null},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    n.buildPath(t, e, !1)
                }
            })
        }, function (t, e, i) {
            var n = i(154);
            t.exports = i(6).extend({
                type: "rect",
                shape: {r: 0, x: 0, y: 0, width: 0, height: 0},
                buildPath: function (t, e) {
                    var i = e.x, r = e.y, o = e.width, a = e.height;
                    e.r ? n.buildPath(t, e) : t.rect(i, r, o, a), t.closePath()
                }
            })
        }, function (t, e, i) {
            t.exports = i(6).extend({
                type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = 2 * Math.PI;
                    t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0)
                }
            })
        }, function (t, e, i) {
            t.exports = i(6).extend({
                type: "sector",
                shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
                buildPath: function (t, e) {
                    var i = e.cx, n = e.cy, r = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), a = e.startAngle, s = e.endAngle, l = e.clockwise, h = Math.cos(a), u = Math.sin(a);
                    t.moveTo(h * r + i, u * r + n), t.lineTo(h * o + i, u * o + n), t.arc(i, n, o, a, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, a, l), t.closePath()
                }
            })
        }, function (t, e, i) {
            "use strict";
            var n = i(59), r = i(1), o = r.isString, a = r.isFunction, s = r.isObject, l = i(47), h = function () {
                this.animators = []
            };
            h.prototype = {
                constructor: h, animate: function (t, e) {
                    var i, o = !1, a = this, s = this.__zr;
                    if (t) {
                        var h = t.split("."), u = a;
                        o = "shape" === h[0];
                        for (var c = 0, d = h.length; c < d; c++)u && (u = u[h[c]]);
                        u && (i = u)
                    } else i = a;
                    if (!i)return void l('Property "' + t + '" is not existed in element ' + a.id);
                    var f = a.animators, p = new n(i, e);
                    return p.during(function (t) {
                        a.dirty(o)
                    }).done(function () {
                        f.splice(r.indexOf(f, p), 1)
                    }), f.push(p), s && s.animation.addAnimator(p), p
                }, stopAnimation: function (t) {
                    for (var e = this.animators, i = e.length, n = 0; n < i; n++)e[n].stop(t);
                    return e.length = 0, this
                }, animateTo: function (t, e, i, n, r) {
                    function s() {
                        h--, h || r && r()
                    }

                    o(i) ? (r = n, n = i, i = 0) : a(n) ? (r = n, n = "linear", i = 0) : a(i) ? (r = i, i = 0) : a(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, n, r);
                    var l = this.animators.slice(), h = l.length;
                    h || r && r();
                    for (var u = 0; u < l.length; u++)l[u].done(s).start(n)
                }, _animateToShallow: function (t, e, i, n, o) {
                    var a = {}, l = 0;
                    for (var h in i)if (i.hasOwnProperty(h))if (null != e[h])s(i[h]) && !r.isArrayLike(i[h]) ? this._animateToShallow(t ? t + "." + h : h, e[h], i[h], n, o) : (a[h] = i[h], l++); else if (null != i[h])if (t) {
                        var u = {};
                        u[t] = {}, u[t][h] = i[h], this.attr(u)
                    } else this.attr(h, i[h]);
                    return l > 0 && this.animate(t, !1).when(null == n ? 500 : n, a).delay(o || 0), this
                }
            }, t.exports = h
        }, function (t, e) {
            function i() {
                this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
            }

            i.prototype = {
                constructor: i, _dragStart: function (t) {
                    var e = t.target;
                    e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(e, "dragstart", t.event))
                }, _drag: function (t) {
                    var e = this._draggingTarget;
                    if (e) {
                        var i = t.offsetX, n = t.offsetY, r = i - this._x, o = n - this._y;
                        this._x = i, this._y = n, e.drift(r, o, t), this.dispatchToElement(e, "drag", t.event);
                        var a = this.findHover(i, n, e), s = this._dropTarget;
                        this._dropTarget = a, e !== a && (s && a !== s && this.dispatchToElement(s, "dragleave", t.event), a && a !== s && this.dispatchToElement(a, "dragenter", t.event))
                    }
                }, _dragEnd: function (t) {
                    var e = this._draggingTarget;
                    e && (e.dragging = !1), this.dispatchToElement(e, "dragend", t.event), this._dropTarget && this.dispatchToElement(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
                }
            }, t.exports = i
        }, function (t, e, i) {
            function n(t, e, i, n, r, o, a, s, l, h, u) {
                var g = l * (p / 180), y = f(g) * (t - i) / 2 + d(g) * (e - n) / 2, x = -1 * d(g) * (t - i) / 2 + f(g) * (e - n) / 2, _ = y * y / (a * a) + x * x / (s * s);
                _ > 1 && (a *= c(_), s *= c(_));
                var b = (r === o ? -1 : 1) * c((a * a * (s * s) - a * a * (x * x) - s * s * (y * y)) / (a * a * (x * x) + s * s * (y * y))) || 0, w = b * a * x / s, M = b * -s * y / a, S = (t + i) / 2 + f(g) * w - d(g) * M, T = (e + n) / 2 + d(g) * w + f(g) * M, A = v([1, 0], [(y - w) / a, (x - M) / s]), I = [(y - w) / a, (x - M) / s], C = [(-1 * y - w) / a, (-1 * x - M) / s], L = v(I, C);
                m(I, C) <= -1 && (L = p), m(I, C) >= 1 && (L = 0), 0 === o && L > 0 && (L -= 2 * p), 1 === o && L < 0 && (L += 2 * p), u.addData(h, S, T, a, s, A, L, g, o)
            }

            function r(t) {
                if (!t)return [];
                var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
                for (e = 0; e < u.length; e++)i = i.replace(new RegExp(u[e], "g"), "|" + u[e]);
                var r, o = i.split("|"), a = 0, l = 0, h = new s, c = s.CMD;
                for (e = 1; e < o.length; e++) {
                    var d, f = o[e], p = f.charAt(0), g = 0, m = f.slice(1).replace(/e,-/g, "e-").split(",");
                    m.length > 0 && "" === m[0] && m.shift();
                    for (var v = 0; v < m.length; v++)m[v] = parseFloat(m[v]);
                    for (; g < m.length && !isNaN(m[g]) && !isNaN(m[0]);) {
                        var y, x, _, b, w, M, S, T = a, A = l;
                        switch (p) {
                            case"l":
                                a += m[g++], l += m[g++], d = c.L, h.addData(d, a, l);
                                break;
                            case"L":
                                a = m[g++], l = m[g++], d = c.L, h.addData(d, a, l);
                                break;
                            case"m":
                                a += m[g++], l += m[g++], d = c.M, h.addData(d, a, l), p = "l";
                                break;
                            case"M":
                                a = m[g++], l = m[g++], d = c.M, h.addData(d, a, l), p = "L";
                                break;
                            case"h":
                                a += m[g++], d = c.L, h.addData(d, a, l);
                                break;
                            case"H":
                                a = m[g++], d = c.L, h.addData(d, a, l);
                                break;
                            case"v":
                                l += m[g++], d = c.L, h.addData(d, a, l);
                                break;
                            case"V":
                                l = m[g++], d = c.L, h.addData(d, a, l);
                                break;
                            case"C":
                                d = c.C, h.addData(d, m[g++], m[g++], m[g++], m[g++], m[g++], m[g++]), a = m[g - 2], l = m[g - 1];
                                break;
                            case"c":
                                d = c.C, h.addData(d, m[g++] + a, m[g++] + l, m[g++] + a, m[g++] + l, m[g++] + a, m[g++] + l), a += m[g - 2], l += m[g - 1];
                                break;
                            case"S":
                                y = a, x = l;
                                var I = h.len(), C = h.data;
                                r === c.C && (y += a - C[I - 4], x += l - C[I - 3]), d = c.C, T = m[g++], A = m[g++], a = m[g++], l = m[g++], h.addData(d, y, x, T, A, a, l);
                                break;
                            case"s":
                                y = a, x = l;
                                var I = h.len(), C = h.data;
                                r === c.C && (y += a - C[I - 4], x += l - C[I - 3]), d = c.C, T = a + m[g++], A = l + m[g++], a += m[g++], l += m[g++], h.addData(d, y, x, T, A, a, l);
                                break;
                            case"Q":
                                T = m[g++], A = m[g++], a = m[g++], l = m[g++], d = c.Q, h.addData(d, T, A, a, l);
                                break;
                            case"q":
                                T = m[g++] + a, A = m[g++] + l, a += m[g++], l += m[g++], d = c.Q, h.addData(d, T, A, a, l);
                                break;
                            case"T":
                                y = a, x = l;
                                var I = h.len(), C = h.data;
                                r === c.Q && (y += a - C[I - 4], x += l - C[I - 3]), a = m[g++], l = m[g++], d = c.Q, h.addData(d, y, x, a, l);
                                break;
                            case"t":
                                y = a, x = l;
                                var I = h.len(), C = h.data;
                                r === c.Q && (y += a - C[I - 4], x += l - C[I - 3]), a += m[g++], l += m[g++], d = c.Q, h.addData(d, y, x, a, l);
                                break;
                            case"A":
                                _ = m[g++], b = m[g++], w = m[g++], M = m[g++], S = m[g++], T = a, A = l, a = m[g++], l = m[g++], d = c.A, n(T, A, a, l, M, S, _, b, w, d, h);
                                break;
                            case"a":
                                _ = m[g++], b = m[g++], w = m[g++], M = m[g++], S = m[g++], T = a, A = l, a += m[g++], l += m[g++], d = c.A, n(T, A, a, l, M, S, _, b, w, d, h)
                        }
                    }
                    "z" !== p && "Z" !== p || (d = c.Z, h.addData(d)), r = d
                }
                return h.toStatic(), h
            }

            function o(t, e) {
                var i, n = r(t);
                return e = e || {}, e.buildPath = function (t) {
                    t.setData(n.data), i && l(t, i);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, e.applyTransform = function (t) {
                    i || (i = h.create()), h.mul(i, t, i), this.dirty(!0)
                }, e
            }

            var a = i(6), s = i(28), l = i(169), h = i(19), u = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"], c = Math.sqrt, d = Math.sin, f = Math.cos, p = Math.PI, g = function (t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            }, m = function (t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e))
            }, v = function (t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(m(t, e))
            };
            t.exports = {
                createFromString: function (t, e) {
                    return new a(o(t, e))
                }, extendFromString: function (t, e) {
                    return a.extend(o(t, e))
                }, mergePath: function (t, e) {
                    for (var i = [], n = t.length, r = 0; r < n; r++) {
                        var o = t[r];
                        o.__dirty && o.buildPath(o.path, o.shape, !0), i.push(o.path)
                    }
                    var s = new a(e);
                    return s.buildPath = function (t) {
                        t.appendPath(i);
                        var e = t.getContext();
                        e && t.rebuildPath(e)
                    }, s
                }
            }
        }, function (t, e, i) {
            function n(t, e) {
                var i, n, o, u, c, d, f = t.data, p = r.M, g = r.C, m = r.L, v = r.R, y = r.A, x = r.Q;
                for (o = 0, u = 0; o < f.length;) {
                    switch (i = f[o++], u = o, n = 0, i) {
                        case p:
                            n = 1;
                            break;
                        case m:
                            n = 1;
                            break;
                        case g:
                            n = 3;
                            break;
                        case x:
                            n = 2;
                            break;
                        case y:
                            var _ = e[4], b = e[5], w = l(e[0] * e[0] + e[1] * e[1]), M = l(e[2] * e[2] + e[3] * e[3]), S = h(-e[1] / M, e[0] / w);
                            f[o++] += _, f[o++] += b, f[o++] *= w, f[o++] *= M, f[o++] += S, f[o++] += S, o += 2, u = o;
                            break;
                        case v:
                            d[0] = f[o++], d[1] = f[o++], a(d, d, e), f[u++] = d[0], f[u++] = d[1], d[0] += f[o++], d[1] += f[o++], a(d, d, e), f[u++] = d[0], f[u++] = d[1]
                    }
                    for (c = 0; c < n; c++) {
                        var d = s[c];
                        d[0] = f[o++], d[1] = f[o++], a(d, d, e), f[u++] = d[0], f[u++] = d[1]
                    }
                }
            }

            var r = i(28).CMD, o = i(5), a = o.applyTransform, s = [[], [], []], l = Math.sqrt, h = Math.atan2;
            t.exports = n
        }, function (t, e, i) {
            if (!i(11).canvasSupported) {
                var n, r = "urn:schemas-microsoft-com:vml", o = window, a = o.document, s = !1;
                try {
                    !a.namespaces.zrvml && a.namespaces.add("zrvml", r), n = function (t) {
                        return a.createElement("<zrvml:" + t + ' class="zrvml">')
                    }
                } catch (l) {
                    n = function (t) {
                        return a.createElement("<" + t + ' xmlns="' + r + '" class="zrvml">')
                    }
                }
                var h = function () {
                    if (!s) {
                        s = !0;
                        var t = a.styleSheets;
                        t.length < 31 ? a.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
                    }
                };
                t.exports = {doc: a, initVML: h, createNode: n}
            }
        }, , , , function (t, e, i) {
            function n() {
                this.group = new r.Group, this._symbolEl = new a({})
            }

            var r = i(3), o = i(26), a = r.extendShape({
                shape: {points: null, sizes: null},
                symbolProxy: null,
                buildPath: function (t, e) {
                    for (var i = e.points, n = e.sizes, r = this.symbolProxy, o = r.shape, a = 0; a < i.length; a++) {
                        var s = i[a], l = n[a];
                        l[0] < 4 ? t.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (o.x = s[0] - l[0] / 2, o.y = s[1] - l[1] / 2, o.width = l[0], o.height = l[1], r.buildPath(t, o, !0))
                    }
                },
                findDataIndex: function (t, e) {
                    for (var i = this.shape, n = i.points, r = i.sizes, o = n.length - 1; o >= 0; o--) {
                        var a = n[o], s = r[o], l = a[0] - s[0] / 2, h = a[1] - s[1] / 2;
                        if (t >= l && e >= h && t <= l + s[0] && e <= h + s[1])return o
                    }
                    return -1
                }
            }), s = n.prototype;
            s.updateData = function (t) {
                this.group.removeAll();
                var e = this._symbolEl, i = t.hostModel;
                e.setShape({
                    points: t.mapArray(t.getItemLayout), sizes: t.mapArray(function (e) {
                        var i = t.getItemVisual(e, "symbolSize");
                        return i instanceof Array || (i = [i, i]), i
                    })
                }), e.symbolProxy = o.createSymbol(t.getVisual("symbol"), 0, 0, 0, 0), e.setColor = e.symbolProxy.setColor, e.useStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));
                var n = t.getVisual("color");
                n && e.setColor(n), e.seriesIndex = i.seriesIndex, e.on("mousemove", function (t) {
                    e.dataIndex = null;
                    var i = e.findDataIndex(t.offsetX, t.offsetY);
                    i > 0 && (e.dataIndex = i)
                }), this.group.add(e)
            }, s.updateLayout = function (t) {
                var e = t.getData();
                this._symbolEl.setShape({points: e.mapArray(e.getItemLayout)})
            }, s.remove = function () {
                this.group.removeAll()
            }, t.exports = n
        }, function (t, e, i) {
            function n(t) {
                return isNaN(+t.cpx1) || isNaN(+t.cpy1)
            }

            var r = i(3), o = i(5), a = r.Line.prototype, s = r.BezierCurve.prototype;
            t.exports = r.extendShape({
                type: "ec-line",
                style: {stroke: "#000", fill: null},
                shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
                buildPath: function (t, e) {
                    (n(e) ? a : s).buildPath(t, e)
                },
                pointAt: function (t) {
                    return n(this.shape) ? a.pointAt.call(this, t) : s.pointAt.call(this, t)
                },
                tangentAt: function (t) {
                    var e = this.shape, i = n(e) ? [e.x2 - e.x1, e.y2 - e.y1] : s.tangentAt.call(this, t);
                    return o.normalize(i, i)
                }
            })
        }, function (t, e, i) {
            var n = i(1), r = i(2);
            i(177), i(178), r.registerVisual(n.curry(i(46), "scatter", "circle", null)), r.registerLayout(n.curry(i(55), "scatter")), i(36)
        }, function (t, e, i) {
            "use strict";
            var n = i(35), r = i(15);
            t.exports = r.extend({
                type: "series.scatter",
                dependencies: ["grid", "polar"],
                getInitialData: function (t, e) {
                    var i = n(t.data, this, e);
                    return i
                },
                brushSelector: "point",
                defaultOption: {
                    coordinateSystem: "cartesian2d",
                    zlevel: 0,
                    z: 2,
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    symbolSize: 10,
                    large: !1,
                    largeThreshold: 2e3,
                    itemStyle: {normal: {opacity: .8}}
                }
            })
        }, function (t, e, i) {
            var n = i(39), r = i(174);
            i(2).extendChartView({
                type: "scatter", init: function () {
                    this._normalSymbolDraw = new n, this._largeSymbolDraw = new r
                }, render: function (t, e, i) {
                    var n = t.getData(), r = this._largeSymbolDraw, o = this._normalSymbolDraw, a = this.group, s = t.get("large") && n.count() > t.get("largeThreshold") ? r : o;
                    this._symbolDraw = s, s.updateData(n), a.add(s.group), a.remove(s === r ? o.group : r.group)
                }, updateLayout: function (t) {
                    this._symbolDraw.updateLayout(t)
                }, remove: function (t, e) {
                    this._symbolDraw && this._symbolDraw.remove(e, !0)
                }, dispose: function () {
                }
            })
        }, function (t, e, i) {
            i(112), i(40), i(41), i(185), i(186), i(181), i(182), i(109), i(108)
        }, function (t, e, i) {
            function n(t, e) {
                var i = [1 / 0, -(1 / 0)];
                return h(e, function (e) {
                    var n = e.getData();
                    n && h(e.coordDimToDataDim(t), function (t) {
                        var e = n.getDataExtent(t);
                        e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
                    })
                }, this), i
            }

            function r(t, e, i) {
                var n = i.getAxisModel(), r = n.axis.scale, a = [0, 100], s = [t.start, t.end], c = [];
                return e = e.slice(), o(e, n, r), h(["startValue", "endValue"], function (e) {
                    c.push(null != t[e] ? r.parse(t[e]) : null)
                }), h([0, 1], function (t) {
                    var i = c[t], n = s[t];
                    null != n || null == i ? (null == n && (n = a[t]), i = r.parse(l.linearMap(n, a, e, !0))) : n = l.linearMap(i, e, a, !0), c[t] = i, s[t] = n
                }), {valueWindow: u(c), percentWindow: u(s)}
            }

            function o(t, e, i) {
                return h(["min", "max"], function (n, r) {
                    var o = e.get(n, !0);
                    null != o && (o + "").toLowerCase() !== "data" + n && (t[r] = i.parse(o))
                }), e.get("scale", !0) || (t[0] > 0 && (t[0] = 0), t[1] < 0 && (t[1] = 0)), t
            }

            function a(t, e) {
                var i = t.getAxisModel(), n = t._percentWindow, r = t._valueWindow;
                if (n) {
                    var o = e || 0 === n[0] && 100 === n[1], a = !e && l.getPixelPrecision(r, [0, 500]), s = !(e || a < 20 && a >= 0), h = e || o || s;
                    i.setRange && i.setRange(h ? null : +r[0].toFixed(a), h ? null : +r[1].toFixed(a))
                }
            }

            var s = i(1), l = i(4), h = s.each, u = l.asc, c = function (t, e, i, n) {
                this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this.ecModel = n, this._dataZoomModel = i
            };
            c.prototype = {
                constructor: c, hostedBy: function (t) {
                    return this._dataZoomModel === t
                }, getDataExtent: function () {
                    return this._dataExtent.slice()
                }, getDataValueWindow: function () {
                    return this._valueWindow.slice()
                }, getDataPercentWindow: function () {
                    return this._percentWindow.slice()
                }, getTargetSeriesModels: function () {
                    var t = [], e = this.ecModel;
                    return e.eachSeries(function (i) {
                        var n = i.get("coordinateSystem");
                        if ("cartesian2d" === n || "polar" === n) {
                            var r = this._dimName, o = e.queryComponents({
                                mainType: r + "Axis",
                                index: i.get(r + "AxisIndex"),
                                id: i.get(r + "AxisId")
                            })[0];
                            this._axisIndex === (o && o.componentIndex) && t.push(i)
                        }
                    }, this), t
                }, getAxisModel: function () {
                    return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
                }, getOtherAxisModel: function () {
                    var t, e, i = this._dimName, n = this.ecModel, r = this.getAxisModel(), o = "x" === i || "y" === i;
                    o ? (e = "gridIndex", t = "x" === i ? "y" : "x") : (e = "polarIndex", t = "angle" === i ? "radius" : "angle");
                    var a;
                    return n.eachComponent(t + "Axis", function (t) {
                        (t.get(e) || 0) === (r.get(e) || 0) && (a = t)
                    }), a
                }, reset: function (t) {
                    if (t === this._dataZoomModel) {
                        var e = this._dataExtent = n(this._dimName, this.getTargetSeriesModels()), i = r(t.option, e, this);
                        this._valueWindow = i.valueWindow, this._percentWindow = i.percentWindow, a(this)
                    }
                }, restore: function (t) {
                    t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, a(this, !0))
                }, filterData: function (t) {
                    function e(t) {
                        return t >= o[0] && t <= o[1]
                    }

                    if (t === this._dataZoomModel) {
                        var i = this._dimName, n = this.getTargetSeriesModels(), r = t.get("filterMode"), o = this._valueWindow, a = this.getOtherAxisModel();
                        t.get("$fromToolbox") && a && "category" === a.get("type") && (r = "empty"), h(n, function (t) {
                            var n = t.getData();
                            n && h(t.coordDimToDataDim(i), function (i) {
                                "empty" === r ? t.setData(n.map(i, function (t) {
                                    return e(t) ? t : NaN
                                })) : n.filterSelf(i, e)
                            })
                        })
                    }
                }
            }, t.exports = c
        }, function (t, e, i) {
            t.exports = i(40).extend({type: "dataZoom.inside", defaultOption: {silent: !1, zoomLock: !1}})
        }, function (t, e, i) {
            function n(t) {
                var e = [0, 100];
                return !(t[0] <= e[1]) && (t[0] = e[1]), !(t[1] <= e[1]) && (t[1] = e[1]), !(t[0] >= e[0]) && (t[0] = e[0]), !(t[1] >= e[0]) && (t[1] = e[0]), t
            }

            var r = i(41), o = i(1), a = i(80), s = i(187), l = o.bind, h = r.extend({
                type: "dataZoom.inside", init: function (t, e) {
                    this._range
                }, render: function (t, e, i, n) {
                    h.superApply(this, "render", arguments), s.shouldRecordRange(n, t.id) && (this._range = t.getPercentRange());
                    var r = this.getTargetInfo();
                    o.each(["cartesians", "polars"], function (e) {
                        var n = r[e], a = o.map(n, function (t) {
                            return s.generateCoordId(t.model)
                        });
                        o.each(n, function (n) {
                            var r = n.model, o = r.coordinateSystem;
                            s.register(i, {
                                coordId: s.generateCoordId(r),
                                allCoordIds: a,
                                coordinateSystem: o,
                                containsPoint: l(u[e].containsPoint, this, o),
                                dataZoomId: t.id,
                                throttleRate: t.get("throttle", !0),
                                panGetRange: l(this._onPan, this, n, e),
                                zoomGetRange: l(this._onZoom, this, n, e)
                            })
                        }, this)
                    }, this)
                }, dispose: function () {
                    s.unregister(this.api, this.dataZoomModel.id), h.superApply(this, "dispose", arguments), this._range = null
                }, _onPan: function (t, e, i, n, r, o, s, l, h) {
                    if (this.dataZoomModel.option.silent)return this._range;
                    var c = this._range.slice(), d = t.axisModels[0];
                    if (d) {
                        var f = u[e].getDirectionInfo([o, s], [l, h], d, i, t), p = f.signal * (c[1] - c[0]) * f.pixel / f.pixelLength;
                        return a(p, c, [0, 100], "rigid"), this._range = c
                    }
                }, _onZoom: function (t, e, i, r, o, a) {
                    var s = this.dataZoomModel.option;
                    if (s.silent || s.zoomLock)return this._range;
                    var l = this._range.slice(), h = t.axisModels[0];
                    if (h) {
                        var c = u[e].getDirectionInfo(null, [o, a], h, i, t), d = (c.pixel - c.pixelStart) / c.pixelLength * (l[1] - l[0]) + l[0];
                        return r = Math.max(1 / r, 0), l[0] = (l[0] - d) * r + d, l[1] = (l[1] - d) * r + d, this._range = n(l)
                    }
                }
            }), u = {
                cartesians: {
                    getDirectionInfo: function (t, e, i, n, r) {
                        var o = i.axis, a = {}, s = r.model.coordinateSystem.getRect();
                        return t = t || [0, 0], "x" === o.dim ? (a.pixel = e[0] - t[0], a.pixelLength = s.width, a.pixelStart = s.x, a.signal = o.inverse ? 1 : -1) : (a.pixel = e[1] - t[1], a.pixelLength = s.height, a.pixelStart = s.y, a.signal = o.inverse ? -1 : 1), a
                    }, containsPoint: function (t, e, i) {
                        return t.getRect().contain(e, i)
                    }
                }, polars: {
                    getDirectionInfo: function (t, e, i, n, r) {
                        var o = i.axis, a = {}, s = r.model.coordinateSystem, l = s.getRadiusAxis().getExtent(), h = s.getAngleAxis().getExtent();
                        return t = t ? s.pointToCoord(t) : [0, 0], e = s.pointToCoord(e), "radiusAxis" === i.mainType ? (a.pixel = e[0] - t[0], a.pixelLength = l[1] - l[0], a.pixelStart = l[0], a.signal = o.inverse ? 1 : -1) : (a.pixel = e[1] - t[1], a.pixelLength = h[1] - h[0], a.pixelStart = h[0], a.signal = o.inverse ? -1 : 1), a
                    }, containsPoint: function (t, e, i) {
                        var n = t.getRadiusAxis().getExtent()[1], r = t.cx, o = t.cy;
                        return Math.pow(e - r, 2) + Math.pow(i - o, 2) <= Math.pow(n, 2)
                    }
                }
            };
            t.exports = h
        }, function (t, e, i) {
            var n = i(40);
            t.exports = n.extend({type: "dataZoom.select"})
        }, function (t, e, i) {
            t.exports = i(41).extend({type: "dataZoom.select"})
        }, function (t, e, i) {
            var n = i(40), r = n.extend({
                type: "dataZoom.slider",
                layoutMode: "box",
                defaultOption: {
                    show: !0,
                    right: "ph",
                    top: "ph",
                    width: "ph",
                    height: "ph",
                    left: null,
                    bottom: null,
                    backgroundColor: "rgba(47,69,84,0)",
                    dataBackground: {
                        lineStyle: {color: "#2f4554", width: .5, opacity: .3},
                        areaStyle: {color: "rgba(47,69,84,0.3)", opacity: .3}
                    },
                    borderColor: "#ddd",
                    fillerColor: "rgba(167,183,204,0.4)",
                    handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
                    handleSize: "100%",
                    handleStyle: {color: "#a7b7cc"},
                    labelPrecision: null,
                    labelFormatter: null,
                    showDetail: !0,
                    showDataShadow: "auto",
                    realtime: !0,
                    zoomLock: !1,
                    textStyle: {color: "#333"}
                }
            });
            t.exports = r
        }, function (t, e, i) {
            function n(t) {
                return "x" === t ? "y" : "x"
            }

            var r = i(1), o = i(3), a = i(83), s = i(41), l = o.Rect, h = i(4), u = h.linearMap, c = i(13), d = i(80), f = h.asc, p = r.bind, g = r.each, m = 7, v = 1, y = 30, x = "horizontal", _ = "vertical", b = 5, w = ["line", "bar", "candlestick", "scatter"], M = s.extend({
                type: "dataZoom.slider",
                init: function (t, e) {
                    this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, this.api = e
                },
                render: function (t, e, i, n) {
                    return M.superApply(this, "render", arguments), a.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (n && "dataZoom" === n.type && n.from === this.uid || this._buildView(), void this._updateView())
                },
                remove: function () {
                    M.superApply(this, "remove", arguments), a.clear(this, "_dispatchZoomAction")
                },
                dispose: function () {
                    M.superApply(this, "dispose", arguments), a.clear(this, "_dispatchZoomAction")
                },
                _buildView: function () {
                    var t = this.group;
                    t.removeAll(), this._resetLocation(), this._resetInterval();
                    var e = this._displayables.barGroup = new o.Group;
                    this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup()
                },
                _resetLocation: function () {
                    var t = this.dataZoomModel, e = this.api, i = this._findCoordRect(), n = {
                        width: e.getWidth(),
                        height: e.getHeight()
                    }, o = this._orient === x ? {
                        right: n.width - i.x - i.width,
                        top: n.height - y - m,
                        width: i.width,
                        height: y
                    } : {right: m, top: i.y, width: y, height: i.height}, a = c.getLayoutParams(t.option);
                    r.each(["right", "top", "width", "height"], function (t) {
                        "ph" === a[t] && (a[t] = o[t])
                    });
                    var s = c.getLayoutRect(a, n, t.padding);
                    this._location = {
                        x: s.x,
                        y: s.y
                    }, this._size = [s.width, s.height], this._orient === _ && this._size.reverse()
                },
                _positionGroup: function () {
                    var t = this.group, e = this._location, i = this._orient, n = this.dataZoomModel.getFirstTargetAxisModel(), r = n && n.get("inverse"), o = this._displayables.barGroup, a = (this._dataShadowInfo || {}).otherAxisInverse;
                    o.attr(i !== x || r ? i === x && r ? {scale: a ? [-1, 1] : [-1, -1]} : i !== _ || r ? {
                        scale: a ? [-1, -1] : [-1, 1],
                        rotation: Math.PI / 2
                    } : {scale: a ? [1, -1] : [1, 1], rotation: Math.PI / 2} : {scale: a ? [1, 1] : [1, -1]});
                    var s = t.getBoundingRect([o]);
                    t.attr("position", [e.x - s.x, e.y - s.y])
                },
                _getViewExtent: function () {
                    return [0, this._size[0]]
                },
                _renderBackground: function () {
                    var t = this.dataZoomModel, e = this._size;
                    this._displayables.barGroup.add(new l({
                        silent: !0,
                        shape: {x: 0, y: 0, width: e[0], height: e[1]},
                        style: {fill: t.get("backgroundColor")},
                        z2: -40
                    }))
                },
                _renderDataShadow: function () {
                    var t = this._dataShadowInfo = this._prepareDataShadowInfo();
                    if (t) {
                        var e = this._size, i = t.series, n = i.getRawData(), a = i.getShadowDim ? i.getShadowDim() : t.otherDim, s = n.getDataExtent(a), l = .3 * (s[1] - s[0]);
                        s = [s[0] - l, s[1] + l];
                        var h, c = [0, e[1]], d = [0, e[0]], f = [[e[0], 0], [0, 0]], p = [], g = d[1] / (n.count() - 1), m = 0, v = Math.round(n.count() / e[0]);
                        n.each([a], function (t, e) {
                            if (v > 0 && e % v)return void(m += g);
                            var i = null == t || isNaN(t) || "" === t, n = i ? 0 : u(t, s, c, !0);
                            i && !h && e ? (f.push([f[f.length - 1][0], 0]), p.push([p[p.length - 1][0], 0])) : !i && h && (f.push([m, 0]), p.push([m, 0])), f.push([m, n]), p.push([m, n]), m += g, h = i
                        });
                        var y = this.dataZoomModel;
                        this._displayables.barGroup.add(new o.Polygon({
                            shape: {points: f},
                            style: r.defaults({fill: y.get("dataBackgroundColor")}, y.getModel("dataBackground.areaStyle").getAreaStyle()),
                            silent: !0,
                            z2: -20
                        })), this._displayables.barGroup.add(new o.Polyline({
                            shape: {points: p},
                            style: y.getModel("dataBackground.lineStyle").getLineStyle(),
                            silent: !0,
                            z2: -19
                        }))
                    }
                },
                _prepareDataShadowInfo: function () {
                    var t = this.dataZoomModel, e = t.get("showDataShadow");
                    if (e !== !1) {
                        var i, o = this.ecModel;
                        return t.eachTargetAxis(function (a, s) {
                            var l = t.getAxisProxy(a.name, s).getTargetSeriesModels();
                            r.each(l, function (t) {
                                if (!(i || e !== !0 && r.indexOf(w, t.get("type")) < 0)) {
                                    var l = n(a.name), h = o.getComponent(a.axis, s).axis;
                                    i = {
                                        thisAxis: h,
                                        series: t,
                                        thisDim: a.name,
                                        otherDim: l,
                                        otherAxisInverse: t.coordinateSystem.getOtherAxis(h).inverse
                                    }
                                }
                            }, this)
                        }, this), i
                    }
                },
                _renderHandle: function () {
                    var t = this._displayables, e = t.handles = [], i = t.handleLabels = [], n = this._displayables.barGroup, r = this._size, a = this.dataZoomModel;
                    n.add(t.filler = new l({
                        draggable: !0,
                        cursor: "move",
                        drift: p(this._onDragMove, this, "all"),
                        ondragstart: p(this._showDataInfo, this, !0),
                        ondragend: p(this._onDragEnd, this),
                        onmouseover: p(this._showDataInfo, this, !0),
                        onmouseout: p(this._showDataInfo, this, !1),
                        style: {fill: a.get("fillerColor"), textPosition: "inside"}
                    })), n.add(new l(o.subPixelOptimizeRect({
                        silent: !0,
                        shape: {x: 0, y: 0, width: r[0], height: r[1]},
                        style: {
                            stroke: a.get("dataBackgroundColor") || a.get("borderColor"),
                            lineWidth: v,
                            fill: "rgba(0,0,0,0)"
                        }
                    })));
                    var s = a.get("handleIcon");
                    g([0, 1], function (t) {
                        var r = o.makePath(s, {
                            style: {strokeNoScale: !0},
                            rectHover: !0,
                            cursor: "vertical" === this._orient ? "ns-resize" : "ew-resize",
                            draggable: !0,
                            drift: p(this._onDragMove, this, t),
                            ondragend: p(this._onDragEnd, this),
                            onmouseover: p(this._showDataInfo, this, !0),
                            onmouseout: p(this._showDataInfo, this, !1)
                        }, {x: -.5, y: 0, width: 1, height: 1}, "center"), l = r.getBoundingRect();
                        this._handleHeight = h.parsePercent(a.get("handleSize"), this._size[1]), this._handleWidth = l.width / l.height * this._handleHeight, r.setStyle(a.getModel("handleStyle").getItemStyle());
                        var u = a.get("handleColor");
                        null != u && (r.style.fill = u), n.add(e[t] = r);
                        var c = a.textStyleModel;
                        this.group.add(i[t] = new o.Text({
                            silent: !0,
                            invisible: !0,
                            style: {
                                x: 0,
                                y: 0,
                                text: "",
                                textVerticalAlign: "middle",
                                textAlign: "center",
                                fill: c.getTextColor(),
                                textFont: c.getFont()
                            },
                            z2: 10
                        }))
                    }, this)
                },
                _resetInterval: function () {
                    var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
                    this._handleEnds = [u(t[0], [0, 100], e, !0), u(t[1], [0, 100], e, !0)]
                },
                _updateInterval: function (t, e) {
                    var i = this._handleEnds, n = this._getViewExtent();
                    d(e, i, n, "all" === t || this.dataZoomModel.get("zoomLock") ? "rigid" : "cross", t), this._range = f([u(i[0], n, [0, 100], !0), u(i[1], n, [0, 100], !0)])
                },
                _updateView: function () {
                    var t = this._displayables, e = this._handleEnds, i = f(e.slice()), n = this._size;
                    g([0, 1], function (i) {
                        var r = t.handles[i], o = this._handleHeight;
                        r.attr({scale: [o, o], position: [e[i], n[1] / 2 - o / 2]})
                    }, this), t.filler.setShape({x: i[0], y: 0, width: i[1] - i[0], height: n[1]}), this._updateDataInfo()
                },
                _updateDataInfo: function () {
                    function t(t) {
                        var e = o.getTransform(i.handles[t].parent, this.group), s = o.transformDirection(0 === t ? "right" : "left", e), l = this._handleWidth / 2 + b, u = o.applyTransform([h[t] + (0 === t ? -l : l), this._size[1] / 2], e);
                        n[t].setStyle({
                            x: u[0],
                            y: u[1],
                            textVerticalAlign: r === x ? "middle" : s,
                            textAlign: r === x ? s : "center",
                            text: a[t]
                        })
                    }

                    var e = this.dataZoomModel, i = this._displayables, n = i.handleLabels, r = this._orient, a = ["", ""];
                    if (e.get("showDetail")) {
                        var s, l;
                        e.eachTargetAxis(function (t, i) {
                            s || (s = e.getAxisProxy(t.name, i).getDataValueWindow(), l = this.ecModel.getComponent(t.axis, i).axis)
                        }, this), s && (a = [this._formatLabel(s[0], l), this._formatLabel(s[1], l)])
                    }
                    var h = f(this._handleEnds.slice());
                    t.call(this, 0), t.call(this, 1)
                },
                _formatLabel: function (t, e) {
                    var i = this.dataZoomModel, n = i.get("labelFormatter"), o = i.get("labelPrecision");
                    null != o && "auto" !== o || (o = e.getPixelPrecision());
                    var a = null == t && isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(o, 20));
                    return r.isFunction(n) ? n(t, a) : r.isString(n) ? n.replace("{value}", a) : a
                },
                _showDataInfo: function (t) {
                    t = this._dragging || t;
                    var e = this._displayables.handleLabels;
                    e[0].attr("invisible", !t), e[1].attr("invisible", !t)
                },
                _onDragMove: function (t, e, i) {
                    this._dragging = !0;
                    var n = this._applyBarTransform([e, i], !0);
                    this._updateInterval(t, n[0]), this._updateView(), this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
                },
                _onDragEnd: function () {
                    this._dragging = !1, this._showDataInfo(!1), this._dispatchZoomAction()
                },
                _dispatchZoomAction: function () {
                    var t = this._range;
                    this.api.dispatchAction({
                        type: "dataZoom",
                        from: this.uid,
                        dataZoomId: this.dataZoomModel.id,
                        start: t[0],
                        end: t[1]
                    })
                },
                _applyBarTransform: function (t, e) {
                    var i = this._displayables.barGroup.getLocalTransform();
                    return o.applyTransform(t, i, e)
                },
                _findCoordRect: function () {
                    var t, e = this.getTargetInfo();
                    if (e.cartesians.length)t = e.cartesians[0].model.coordinateSystem.getRect(); else {
                        var i = this.api.getWidth(), n = this.api.getHeight();
                        t = {x: .2 * i, y: .2 * n, width: .6 * i, height: .6 * n}
                    }
                    return t
                }
            });
            t.exports = M
        }, function (t, e, i) {
            function n(t) {
                var e = t.getZr();
                return e[p] || (e[p] = {})
            }

            function r(t, e, i) {
                var n = new c(t.getZr());
                return n.enable(), n.on("pan", f(a, i)), n.on("zoom", f(s, i)), n
            }

            function o(t) {
                u.each(t, function (e, i) {
                    e.count || (e.controller.dispose(), delete t[i])
                })
            }

            function a(t, e, i, n, r, o, a) {
                l(t, function (s) {
                    return s.panGetRange(t.controller, e, i, n, r, o, a)
                })
            }

            function s(t, e, i, n) {
                l(t, function (r) {
                    return r.zoomGetRange(t.controller, e, i, n)
                })
            }

            function l(t, e) {
                var i = [];
                u.each(t.dataZoomInfos, function (t) {
                    var n = e(t);
                    n && i.push({dataZoomId: t.dataZoomId, start: n[0], end: n[1]})
                }), t.dispatchAction(i)
            }

            function h(t, e) {
                t.dispatchAction({type: "dataZoom", batch: e})
            }

            var u = i(1), c = i(79), d = i(83), f = u.curry, p = "\0_ec_dataZoom_roams", g = {
                register: function (t, e) {
                    var i = n(t), a = e.dataZoomId, s = e.coordId;
                    u.each(i, function (t, i) {
                        var n = t.dataZoomInfos;
                        n[a] && u.indexOf(e.allCoordIds, s) < 0 && (delete n[a], t.count--)
                    }), o(i);
                    var l = i[s];
                    l || (l = i[s] = {
                        coordId: s,
                        dataZoomInfos: {},
                        count: 0
                    }, l.controller = r(t, e, l), l.dispatchAction = u.curry(h, t)), l.controller.setContainsPoint(e.containsPoint), d.createOrUpdate(l, "dispatchAction", e.throttleRate, "fixRate"), !l.dataZoomInfos[a] && l.count++, l.dataZoomInfos[a] = e
                }, unregister: function (t, e) {
                    var i = n(t);
                    u.each(i, function (t) {
                        t.controller.dispose();
                        var i = t.dataZoomInfos;
                        i[e] && (delete i[e], t.count--)
                    }), o(i)
                }, shouldRecordRange: function (t, e) {
                    if (t && "dataZoom" === t.type && t.batch)for (var i = 0, n = t.batch.length; i < n; i++)if (t.batch[i].dataZoomId === e)return !1;
                    return !0
                }, generateCoordId: function (t) {
                    return t.type + "\0_" + t.id
                }
            };
            t.exports = g
        }, function (t, e, i) {
            i(112), i(40), i(41), i(183), i(184), i(109), i(108)
        }, function (t, e, i) {
            i(190), i(192), i(191);
            var n = i(2);
            n.registerProcessor(i(193))
        }, function (t, e, i) {
            "use strict";
            var n = i(1), r = i(10), o = i(2).extendComponentModel({
                type: "legend",
                dependencies: ["series"],
                layoutMode: {type: "box", ignoreSize: !0},
                init: function (t, e, i) {
                    this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}
                },
                mergeOption: function (t) {
                    o.superCall(this, "mergeOption", t)
                },
                optionUpdated: function () {
                    this._updateData(this.ecModel);
                    var t = this._data;
                    if (t[0] && "single" === this.get("selectedMode")) {
                        for (var e = !1, i = 0; i < t.length; i++) {
                            var n = t[i].get("name");
                            if (this.isSelected(n)) {
                                this.select(n), e = !0;
                                break
                            }
                        }
                        !e && this.select(t[0].get("name"))
                    }
                },
                _updateData: function (t) {
                    var e = n.map(this.get("data") || [], function (t) {
                        return "string" != typeof t && "number" != typeof t || (t = {name: t}), new r(t, this, this.ecModel)
                    }, this);
                    this._data = e;
                    var i = n.map(t.getSeries(), function (t) {
                        return t.name
                    });
                    t.eachSeries(function (t) {
                        if (t.legendDataProvider) {
                            var e = t.legendDataProvider();
                            i = i.concat(e.mapArray(e.getName))
                        }
                    }), this._availableNames = i
                },
                getData: function () {
                    return this._data
                },
                select: function (t) {
                    var e = this.option.selected, i = this.get("selectedMode");
                    if ("single" === i) {
                        var r = this._data;
                        n.each(r, function (t) {
                            e[t.get("name")] = !1
                        })
                    }
                    e[t] = !0
                },
                unSelect: function (t) {
                    "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
                },
                toggleSelected: function (t) {
                    var e = this.option.selected;
                    e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
                },
                isSelected: function (t) {
                    var e = this.option.selected;
                    return !(e.hasOwnProperty(t) && !e[t]) && n.indexOf(this._availableNames, t) >= 0
                },
                defaultOption: {
                    zlevel: 0,
                    z: 4,
                    show: !0,
                    orient: "horizontal",
                    left: "center",
                    top: "top",
                    align: "auto",
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "#ccc",
                    borderWidth: 0,
                    padding: 5,
                    itemGap: 10,
                    itemWidth: 25,
                    itemHeight: 14,
                    inactiveColor: "#ccc",
                    textStyle: {color: "#333"},
                    selectedMode: !0,
                    tooltip: {show: !1}
                }
            });
            t.exports = o
        }, function (t, e, i) {
            function n(t, e) {
                e.dispatchAction({type: "legendToggleSelect", name: t})
            }

            function r(t, e, i) {
                var n = i.getZr().storage.getDisplayList()[0];
                n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
                    type: "highlight",
                    seriesName: t.name,
                    name: e
                })
            }

            function o(t, e, i) {
                var n = i.getZr().storage.getDisplayList()[0];
                n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
                    type: "downplay",
                    seriesName: t.name,
                    name: e
                })
            }

            var a = i(1), s = i(26), l = i(3), h = i(116), u = a.curry;
            t.exports = i(2).extendComponentView({
                type: "legend", init: function () {
                    this._symbolTypeStore = {}
                }, render: function (t, e, i) {
                    var s = this.group;
                    if (s.removeAll(), t.get("show")) {
                        var c = t.get("selectedMode"), d = t.get("align");
                        "auto" === d && (d = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left");
                        var f = {};
                        a.each(t.getData(), function (a) {
                            var h = a.get("name");
                            if ("" === h || "\n" === h)return void s.add(new l.Group({newline: !0}));
                            var p = e.getSeriesByName(h)[0];
                            if (!f[h])if (p) {
                                var g = p.getData(), m = g.getVisual("color");
                                "function" == typeof m && (m = m(p.getDataParams(0)));
                                var v = g.getVisual("legendSymbol") || "roundRect", y = g.getVisual("symbol"), x = this._createItem(h, a, t, v, y, d, m, c);
                                x.on("click", u(n, h, i)).on("mouseover", u(r, p, null, i)).on("mouseout", u(o, p, null, i)), f[h] = !0
                            } else e.eachRawSeries(function (e) {
                                if (!f[h] && e.legendDataProvider) {
                                    var s = e.legendDataProvider(), l = s.indexOfName(h);
                                    if (l < 0)return;
                                    var p = s.getItemVisual(l, "color"), g = "roundRect", m = this._createItem(h, a, t, g, null, d, p, c);
                                    m.on("click", u(n, h, i)).on("mouseover", u(r, e, h, i)).on("mouseout", u(o, e, h, i)), f[h] = !0
                                }
                            }, this)
                        }, this), h.layout(s, t, i), h.addBackground(s, t)
                    }
                }, _createItem: function (t, e, i, n, r, o, h, u) {
                    var c = i.get("itemWidth"), d = i.get("itemHeight"), f = i.get("inactiveColor"), p = i.isSelected(t), g = new l.Group, m = e.getModel("textStyle"), v = e.get("icon"), y = e.getModel("tooltip"), x = y.parentModel;
                    if (n = v || n, g.add(s.createSymbol(n, 0, 0, c, d, p ? h : f)), !v && r && (r !== n || "none" == r)) {
                        var _ = .8 * d;
                        "none" === r && (r = "circle"), g.add(s.createSymbol(r, (c - _) / 2, (d - _) / 2, _, _, p ? h : f))
                    }
                    var b = "left" === o ? c + 5 : -5, w = o, M = i.get("formatter"), S = t;
                    "string" == typeof M && M ? S = M.replace("{name}", t) : "function" == typeof M && (S = M(t));
                    var T = new l.Text({
                        style: {
                            text: S,
                            x: b,
                            y: d / 2,
                            fill: p ? m.getTextColor() : f,
                            textFont: m.getFont(),
                            textAlign: w,
                            textVerticalAlign: "middle"
                        }
                    });
                    g.add(T);
                    var A = new l.Rect({
                        shape: g.getBoundingRect(),
                        invisible: !0,
                        tooltip: y.get("show") ? a.extend({
                            content: t,
                            formatter: x.get("formatter", !0) || function () {
                                return t
                            },
                            formatterParams: {
                                componentType: "legend",
                                legendIndex: i.componentIndex,
                                name: t,
                                $vars: ["name"]
                            }
                        }, y.option) : null
                    });
                    return g.add(A), g.eachChild(function (t) {
                        t.silent = !0
                    }), A.silent = !u, this.group.add(g), l.setHoverStyle(g), g
                }
            })
        }, function (t, e, i) {
            function n(t, e, i) {
                var n, r = {}, a = "toggleSelected" === t;
                return i.eachComponent("legend", function (i) {
                    a && null != n ? i[n ? "select" : "unSelect"](e.name) : (i[t](e.name), n = i.isSelected(e.name));
                    var s = i.getData();
                    o.each(s, function (t) {
                        var e = t.get("name");
                        if ("\n" !== e && "" !== e) {
                            var n = i.isSelected(e);
                            e in r ? r[e] = r[e] && n : r[e] = n
                        }
                    })
                }), {name: e.name, selected: r}
            }

            var r = i(2), o = i(1);
            r.registerAction("legendToggleSelect", "legendselectchanged", o.curry(n, "toggleSelected")), r.registerAction("legendSelect", "legendselected", o.curry(n, "select")), r.registerAction("legendUnSelect", "legendunselected", o.curry(n, "unSelect"))
        }, function (t, e) {
            t.exports = function (t) {
                var e = t.findComponents({mainType: "legend"});
                e && e.length && t.filterSeries(function (t) {
                    for (var i = 0; i < e.length; i++)if (!e[i].isSelected(t.name))return !1;
                    return !0
                })
            }
        }, function (t, e, i) {
            i(197), i(198), i(2).registerPreprocessor(function (t) {
                t.markArea = t.markArea || {}
            })
        }, function (t, e, i) {
            i(199), i(200), i(2).registerPreprocessor(function (t) {
                t.markLine = t.markLine || {}
            })
        }, function (t, e, i) {
            i(201), i(202), i(2).registerPreprocessor(function (t) {
                t.markPoint = t.markPoint || {}
            })
        }, function (t, e, i) {
            t.exports = i(67).extend({
                type: "markArea",
                defaultOption: {
                    zlevel: 0,
                    z: 1,
                    tooltip: {trigger: "item"},
                    animation: !1,
                    label: {normal: {show: !0, position: "top"}, emphasis: {show: !0, position: "top"}},
                    itemStyle: {normal: {borderWidth: 0}}
                }
            })
        }, function (t, e, i) {
            function n(t) {
                return !isNaN(t) && !isFinite(t)
            }

            function r(t, e, i, r) {
                var o = 1 - t;
                return n(e[o]) && n(i[o])
            }

            function o(t, e) {
                var i = e.coord[0], n = e.coord[1];
                return !("cartesian2d" !== t.type || !i || !n || !r(1, i, n, t) && !r(0, i, n, t)) || (f.dataFilter(t, {
                        coord: i,
                        x: e.x0,
                        y: e.y0
                    }) || f.dataFilter(t, {coord: n, x: e.x1, y: e.y1}))
            }

            function a(t, e, i, r, o) {
                var a, s = r.coordinateSystem, l = t.getItemModel(e), h = u.parsePercent(l.get(i[0]), o.getWidth()), c = u.parsePercent(l.get(i[1]), o.getHeight());
                if (isNaN(h) || isNaN(c)) {
                    if (r.getMarkerPosition)a = r.getMarkerPosition(t.getValues(i, e)); else {
                        var d = t.get(i[0], e), f = t.get(i[1], e);
                        a = s.dataToPoint([d, f], !0)
                    }
                    if ("cartesian2d" === s.type) {
                        var p = s.getAxis("x"), g = s.getAxis("y"), d = t.get(i[0], e), f = t.get(i[1], e);
                        n(d) ? a[0] = p.toGlobalCoord(p.getExtent()["x0" === i[0] ? 0 : 1]) : n(f) && (a[1] = g.toGlobalCoord(g.getExtent()["y0" === i[1] ? 0 : 1]))
                    }
                    isNaN(h) || (a[0] = h), isNaN(c) || (a[1] = c)
                } else a = [h, c];
                return a
            }

            function s(t, e, i) {
                var n, r, a = ["x0", "y0", "x1", "y1"];
                t ? (n = l.map(t && t.dimensions, function (t) {
                    var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                    return i.name = t, i
                }), r = new h(l.map(a, function (t, e) {
                    return {name: t, type: n[e % 2].type}
                }), i)) : (n = [{name: "value", type: "float"}], r = new h(n, i));
                var s = l.map(i.get("data"), l.curry(p, e, t, i));
                t && (s = l.filter(s, l.curry(o, t)));
                var u = t ? function (t, e, i, n) {
                    return t.coord[Math.floor(n / 2)][n % 2]
                } : function (t) {
                    return t.value
                };
                return r.initData(s, null, u), r.hasItemOption = !0, r
            }

            var l = i(1), h = i(14), u = i(4), c = i(3), d = i(18), f = i(69), p = function (t, e, i, n) {
                var r = f.dataTransform(t, n[0]), o = f.dataTransform(t, n[1]), a = l.retrieve, s = r.coord, h = o.coord;
                s[0] = a(s[0], -(1 / 0)), s[1] = a(s[1], -(1 / 0)), h[0] = a(h[0], 1 / 0), h[1] = a(h[1], 1 / 0);
                var u = l.mergeAll([{}, r, o]);
                return u.coord = [r.coord, o.coord], u.x0 = r.x, u.y0 = r.y, u.x1 = o.x, u.y1 = o.y, u
            }, g = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
            i(68).extend({
                type: "markArea", updateLayout: function (t, e, i) {
                    e.eachSeries(function (t) {
                        var e = t.markAreaModel;
                        if (e) {
                            var n = e.getData();
                            n.each(function (e) {
                                var r = l.map(g, function (r) {
                                    return a(n, e, r, t, i)
                                });
                                n.setItemLayout(e, r);
                                var o = n.getItemGraphicEl(e);
                                o.setShape("points", r)
                            })
                        }
                    }, this)
                }, renderSeries: function (t, e, i, n) {
                    var r = t.coordinateSystem, o = t.name, h = t.getData(), u = this.markerGroupMap, f = u[o];
                    f || (f = u[o] = {group: new c.Group}), this.group.add(f.group), f.__keep = !0;
                    var p = s(r, t, e);
                    e.setData(p), p.each(function (e) {
                        p.setItemLayout(e, l.map(g, function (i) {
                            return a(p, e, i, t, n)
                        })), p.setItemVisual(e, {color: h.getVisual("color")})
                    }), p.diff(f.__data).add(function (t) {
                        var e = new c.Polygon({shape: {points: p.getItemLayout(t)}});
                        p.setItemGraphicEl(t, e), f.group.add(e)
                    }).update(function (t, i) {
                        var n = f.__data.getItemGraphicEl(i);
                        c.updateProps(n, {shape: {points: p.getItemLayout(t)}}, e, t), f.group.add(n), p.setItemGraphicEl(t, n)
                    }).remove(function (t) {
                        var e = f.__data.getItemGraphicEl(t);
                        f.group.remove(e)
                    }).execute(), p.eachItemGraphicEl(function (t, i) {
                        var n = p.getItemModel(i), r = n.getModel("label.normal"), o = n.getModel("label.emphasis"), a = p.getItemVisual(i, "color");
                        t.useStyle(l.defaults(n.getModel("itemStyle.normal").getItemStyle(), {
                            fill: d.modifyAlpha(a, .4),
                            stroke: a
                        })), t.hoverStyle = n.getModel("itemStyle.normal").getItemStyle();
                        var s = p.getName(i) || "", h = a || t.style.fill;
                        c.setText(t.style, r, h), t.style.text = l.retrieve(e.getFormattedLabel(i, "normal"), s), c.setText(t.hoverStyle, o, h), t.hoverStyle.text = l.retrieve(e.getFormattedLabel(i, "emphasis"), s), c.setHoverStyle(t, {}), t.dataModel = e
                    }), f.__data = p, f.group.silent = e.get("silent") || t.get("silent")
                }
            })
        }, function (t, e, i) {
            t.exports = i(67).extend({
                type: "markLine",
                defaultOption: {
                    zlevel: 0,
                    z: 5,
                    symbol: ["circle", "arrow"],
                    symbolSize: [8, 16],
                    precision: 2,
                    tooltip: {trigger: "item"},
                    label: {normal: {show: !0, position: "end"}, emphasis: {show: !0}},
                    lineStyle: {normal: {type: "dashed"}, emphasis: {width: 3}},
                    animationEasing: "linear"
                }
            })
        }, function (t, e, i) {
            function n(t) {
                return !isNaN(t) && !isFinite(t)
            }

            function r(t, e, i, r) {
                var o = 1 - t, a = r.dimensions[t];
                return n(e[o]) && n(i[o]) && e[t] === i[t] && r.getAxis(a).containData(e[t])
            }

            function o(t, e) {
                if ("cartesian2d" === t.type) {
                    var i = e[0].coord, n = e[1].coord;
                    if (i && n && (r(1, i, n, t) || r(0, i, n, t)))return !0
                }
                return c.dataFilter(t, e[0]) && c.dataFilter(t, e[1])
            }

            function a(t, e, i, r, o) {
                var a, s = r.coordinateSystem, l = t.getItemModel(e), h = u.parsePercent(l.get("x"), o.getWidth()), c = u.parsePercent(l.get("y"), o.getHeight());
                if (isNaN(h) || isNaN(c)) {
                    if (r.getMarkerPosition)a = r.getMarkerPosition(t.getValues(t.dimensions, e)); else {
                        var d = s.dimensions, f = t.get(d[0], e), p = t.get(d[1], e);
                        a = s.dataToPoint([f, p])
                    }
                    if ("cartesian2d" === s.type) {
                        var g = s.getAxis("x"), m = s.getAxis("y"), d = s.dimensions;
                        n(t.get(d[0], e)) ? a[0] = g.toGlobalCoord(g.getExtent()[i ? 0 : 1]) : n(t.get(d[1], e)) && (a[1] = m.toGlobalCoord(m.getExtent()[i ? 0 : 1]))
                    }
                    isNaN(h) || (a[0] = h), isNaN(c) || (a[1] = c)
                } else a = [h, c];
                t.setItemLayout(e, a)
            }

            function s(t, e, i) {
                var n;
                n = t ? l.map(t && t.dimensions, function (t) {
                    var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                    return i.name = t, i
                }) : [{name: "value", type: "float"}];
                var r = new h(n, i), a = new h(n, i), s = new h([], i), u = l.map(i.get("data"), l.curry(f, e, t, i));
                t && (u = l.filter(u, l.curry(o, t)));
                var d = t ? c.dimValueGetter : function (t) {
                    return t.value
                };
                return r.initData(l.map(u, function (t) {
                    return t[0]
                }), null, d), a.initData(l.map(u, function (t) {
                    return t[1]
                }), null, d), s.initData(l.map(u, function (t) {
                    return t[2]
                })), s.hasItemOption = !0, {from: r, to: a, line: s}
            }

            var l = i(1), h = i(14), u = i(4), c = i(69), d = i(95), f = function (t, e, i, n) {
                var r = t.getData(), o = n.type;
                if (!l.isArray(n) && ("min" === o || "max" === o || "average" === o || null != n.xAxis || null != n.yAxis)) {
                    var a, s, h;
                    if (null != n.yAxis || null != n.xAxis)s = null != n.yAxis ? "y" : "x", a = e.getAxis(s), h = l.retrieve(n.yAxis, n.xAxis); else {
                        var u = c.getAxisInfo(n, r, e, t);
                        s = u.valueDataDim, a = u.valueAxis, h = c.numCalculate(r, s, o)
                    }
                    var d = "x" === s ? 0 : 1, f = 1 - d, p = l.clone(n), g = {};
                    p.type = null, p.coord = [], g.coord = [], p.coord[f] = -(1 / 0), g.coord[f] = 1 / 0;
                    var m = i.get("precision");
                    m >= 0 && "number" == typeof h && (h = +h.toFixed(m)), p.coord[d] = g.coord[d] = h, n = [p, g, {
                        type: o,
                        valueIndex: n.valueIndex,
                        value: h
                    }]
                }
                return n = [c.dataTransform(t, n[0]), c.dataTransform(t, n[1]), l.extend({}, n[2])], n[2].type = n[2].type || "", l.merge(n[2], n[0]), l.merge(n[2], n[1]), n
            };
            i(68).extend({
                type: "markLine", updateLayout: function (t, e, i) {
                    e.eachSeries(function (t) {
                        var e = t.markLineModel;
                        if (e) {
                            var n = e.getData(), r = e.__from, o = e.__to;
                            r.each(function (e) {
                                a(r, e, !0, t, i), a(o, e, !1, t, i)
                            }), n.each(function (t) {
                                n.setItemLayout(t, [r.getItemLayout(t), o.getItemLayout(t)])
                            }), this.markerGroupMap[t.name].updateLayout()
                        }
                    }, this)
                }, renderSeries: function (t, e, i, n) {
                    function r(e, i, r) {
                        var o = e.getItemModel(i);
                        a(e, i, r, t, n), e.setItemVisual(i, {
                            symbolSize: o.get("symbolSize") || x[r ? 0 : 1],
                            symbol: o.get("symbol", !0) || y[r ? 0 : 1],
                            color: o.get("itemStyle.normal.color") || u.getVisual("color")
                        })
                    }

                    var o = t.coordinateSystem, h = t.name, u = t.getData(), c = this.markerGroupMap, f = c[h];
                    f || (f = c[h] = new d), this.group.add(f.group);
                    var p = s(o, t, e), g = p.from, m = p.to, v = p.line;
                    e.__from = g, e.__to = m, e.setData(v);
                    var y = e.get("symbol"), x = e.get("symbolSize");
                    l.isArray(y) || (y = [y, y]), "number" == typeof x && (x = [x, x]), p.from.each(function (t) {
                        r(g, t, !0), r(m, t, !1)
                    }), v.each(function (t) {
                        var e = v.getItemModel(t).get("lineStyle.normal.color");
                        v.setItemVisual(t, {color: e || g.getItemVisual(t, "color")}), v.setItemLayout(t, [g.getItemLayout(t), m.getItemLayout(t)]), v.setItemVisual(t, {
                            fromSymbolSize: g.getItemVisual(t, "symbolSize"),
                            fromSymbol: g.getItemVisual(t, "symbol"),
                            toSymbolSize: m.getItemVisual(t, "symbolSize"),
                            toSymbol: m.getItemVisual(t, "symbol")
                        })
                    }), f.updateData(v), p.line.eachItemGraphicEl(function (t, i) {
                        t.traverse(function (t) {
                            t.dataModel = e
                        })
                    }), f.__keep = !0, f.group.silent = e.get("silent") || t.get("silent")
                }
            })
        }, function (t, e, i) {
            t.exports = i(67).extend({
                type: "markPoint",
                defaultOption: {
                    zlevel: 0,
                    z: 5,
                    symbol: "pin",
                    symbolSize: 50,
                    tooltip: {trigger: "item"},
                    label: {normal: {show: !0, position: "inside"}, emphasis: {show: !0}},
                    itemStyle: {normal: {borderWidth: 2}}
                }
            })
        }, function (t, e, i) {
            function n(t, e, i) {
                var n = e.coordinateSystem;
                t.each(function (r) {
                    var o, a = t.getItemModel(r), l = s.parsePercent(a.get("x"), i.getWidth()), h = s.parsePercent(a.get("y"), i.getHeight());
                    if (isNaN(l) || isNaN(h)) {
                        if (e.getMarkerPosition)o = e.getMarkerPosition(t.getValues(t.dimensions, r)); else if (n) {
                            var u = t.get(n.dimensions[0], r), c = t.get(n.dimensions[1], r);
                            o = n.dataToPoint([u, c])
                        }
                    } else o = [l, h];
                    isNaN(l) || (o[0] = l), isNaN(h) || (o[1] = h), t.setItemLayout(r, o)
                })
            }

            function r(t, e, i) {
                var n;
                n = t ? a.map(t && t.dimensions, function (t) {
                    var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                    return i.name = t, i
                }) : [{name: "value", type: "float"}];
                var r = new l(n, i), o = a.map(i.get("data"), a.curry(h.dataTransform, e));
                return t && (o = a.filter(o, a.curry(h.dataFilter, t))), r.initData(o, null, t ? h.dimValueGetter : function (t) {
                    return t.value
                }), r
            }

            var o = i(39), a = i(1), s = i(4), l = i(14), h = i(69);
            i(68).extend({
                type: "markPoint", updateLayout: function (t, e, i) {
                    e.eachSeries(function (t) {
                        var e = t.markPointModel;
                        e && (n(e.getData(), t, i), this.markerGroupMap[t.name].updateLayout(e))
                    }, this)
                }, renderSeries: function (t, e, i, a) {
                    var s = t.coordinateSystem, l = t.name, h = t.getData(), u = this.markerGroupMap, c = u[l];
                    c || (c = u[l] = new o);
                    var d = r(s, t, e);
                    e.setData(d), n(e.getData(), t, a), d.each(function (t) {
                        var i = d.getItemModel(t), n = i.getShallow("symbolSize");
                        "function" == typeof n && (n = n(e.getRawValue(t), e.getDataParams(t))), d.setItemVisual(t, {
                            symbolSize: n,
                            color: i.get("itemStyle.normal.color") || h.getVisual("color"),
                            symbol: i.getShallow("symbol")
                        })
                    }), c.updateData(d), this.group.add(c.group), d.eachItemGraphicEl(function (t) {
                        t.traverse(function (t) {
                            t.dataModel = e
                        })
                    }), c.__keep = !0, c.group.silent = e.get("silent") || t.get("silent")
                }
            })
        }, function (t, e, i) {
            "use strict";
            var n = i(2), r = i(3), o = i(13);
            n.extendComponentModel({
                type: "title",
                layoutMode: {type: "box", ignoreSize: !0},
                defaultOption: {
                    zlevel: 0,
                    z: 6,
                    show: !0,
                    text: "",
                    target: "blank",
                    subtext: "",
                    subtarget: "blank",
                    left: 0,
                    top: 0,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "#ccc",
                    borderWidth: 0,
                    padding: 5,
                    itemGap: 10,
                    textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
                    subtextStyle: {color: "#aaa"}
                }
            }), n.extendComponentView({
                type: "title", render: function (t, e, i) {
                    if (this.group.removeAll(), t.get("show")) {
                        var n = this.group, a = t.getModel("textStyle"), s = t.getModel("subtextStyle"), l = t.get("textAlign"), h = t.get("textBaseline"), u = new r.Text({
                            style: {
                                text: t.get("text"),
                                textFont: a.getFont(),
                                fill: a.getTextColor()
                            }, z2: 10
                        }), c = u.getBoundingRect(), d = t.get("subtext"), f = new r.Text({
                            style: {
                                text: d,
                                textFont: s.getFont(),
                                fill: s.getTextColor(),
                                y: c.height + t.get("itemGap"),
                                textBaseline: "top"
                            }, z2: 10
                        }), p = t.get("link"), g = t.get("sublink");
                        u.silent = !p, f.silent = !g, p && u.on("click", function () {
                            window.open(p, "_" + t.get("target"))
                        }), g && f.on("click", function () {
                            window.open(g, "_" + t.get("subtarget"))
                        }), n.add(u), d && n.add(f);
                        var m = n.getBoundingRect(), v = t.getBoxLayoutParams();
                        v.width = m.width, v.height = m.height;
                        var y = o.getLayoutRect(v, {width: i.getWidth(), height: i.getHeight()}, t.get("padding"));
                        l || (l = t.get("left") || t.get("right"), "middle" === l && (l = "center"), "right" === l ? y.x += y.width : "center" === l && (y.x += y.width / 2)), h || (h = t.get("top") || t.get("bottom"), "center" === h && (h = "middle"), "bottom" === h ? y.y += y.height : "middle" === h && (y.y += y.height / 2), h = h || "top"), n.attr("position", [y.x, y.y]);
                        var x = {textAlign: l, textVerticalAlign: h};
                        u.setStyle(x), f.setStyle(x), m = n.getBoundingRect();
                        var _ = y.margin, b = t.getItemStyle(["color", "opacity"]);
                        b.fill = t.get("backgroundColor");
                        var w = new r.Rect({
                            shape: {
                                x: m.x - _[3],
                                y: m.y - _[0],
                                width: m.width + _[1] + _[3],
                                height: m.height + _[0] + _[2]
                            }, style: b, silent: !0
                        });
                        r.subPixelOptimizeRect(w), n.add(w)
                    }
                }
            })
        }, function (t, e, i) {
            i(205), i(206), i(211), i(209), i(207), i(208), i(210)
        }, function (t, e, i) {
            var n = i(25), r = i(1), o = i(2).extendComponentModel({
                type: "toolbox",
                layoutMode: {type: "box", ignoreSize: !0},
                mergeDefaultAndTheme: function (t) {
                    o.superApply(this, "mergeDefaultAndTheme", arguments), r.each(this.option.feature, function (t, e) {
                        var i = n.get(e);
                        i && r.merge(t, i.defaultOption)
                    })
                },
                defaultOption: {
                    show: !0,
                    z: 6,
                    zlevel: 0,
                    orient: "horizontal",
                    left: "right",
                    top: "top",
                    backgroundColor: "transparent",
                    borderColor: "#ccc",
                    borderWidth: 0,
                    padding: 5,
                    itemSize: 15,
                    itemGap: 8,
                    showTitle: !0,
                    iconStyle: {normal: {borderColor: "#666", color: "none"}, emphasis: {borderColor: "#3E98C5"}}
                }
            });
            t.exports = o
        }, function (t, e, i) {
            (function (e) {
                function n(t) {
                    return 0 === t.indexOf("my")
                }

                var r = i(25), o = i(1), a = i(3), s = i(10), l = i(45), h = i(116), u = i(16);
                t.exports = i(2).extendComponentView({
                    type: "toolbox", render: function (t, e, i, c) {
                        function d(o, a) {
                            var l, h = y[o], u = y[a], d = m[h], p = new s(d, t, t.ecModel);
                            if (h && !u) {
                                if (n(h))l = {model: p, onclick: p.option.onclick, featureName: h}; else {
                                    var g = r.get(h);
                                    if (!g)return;
                                    l = new g(p, e, i)
                                }
                                v[h] = l
                            } else {
                                if (l = v[u], !l)return;
                                l.model = p, l.ecModel = e, l.api = i
                            }
                            return !h && u ? void(l.dispose && l.dispose(e, i)) : !p.get("show") || l.unusable ? void(l.remove && l.remove(e, i)) : (f(p, l, h), p.setIconStatus = function (t, e) {
                                var i = this.option, n = this.iconPaths;
                                i.iconStatus = i.iconStatus || {}, i.iconStatus[t] = e, n[t] && n[t].trigger(e)
                            }, void(l.render && l.render(p, e, i, c)))
                        }

                        function f(n, r, s) {
                            var l = n.getModel("iconStyle"), h = r.getIcons ? r.getIcons() : n.get("icon"), u = n.get("title") || {};
                            if ("string" == typeof h) {
                                var c = h, d = u;
                                h = {}, u = {}, h[s] = c, u[s] = d
                            }
                            var f = n.iconPaths = {};
                            o.each(h, function (s, h) {
                                var c = l.getModel("normal").getItemStyle(), d = l.getModel("emphasis").getItemStyle(), m = {
                                    x: -g / 2,
                                    y: -g / 2,
                                    width: g,
                                    height: g
                                }, v = 0 === s.indexOf("image://") ? (m.image = s.slice(8), new a.Image({style: m})) : a.makePath(s.replace("path://", ""), {
                                    style: c,
                                    hoverStyle: d,
                                    rectHover: !0
                                }, m, "center");
                                a.setHoverStyle(v), t.get("showTitle") && (v.__title = u[h], v.on("mouseover", function () {
                                    var t = l.getModel("emphasis").getItemStyle();
                                    v.setStyle({
                                        text: u[h],
                                        textPosition: t.textPosition || "bottom",
                                        textFill: t.fill || t.stroke || "#000",
                                        textAlign: t.textAlign || "center"
                                    })
                                }).on("mouseout", function () {
                                    v.setStyle({textFill: null})
                                })), v.trigger(n.get("iconStatus." + h) || "normal"), p.add(v), v.on("click", o.bind(r.onclick, r, e, i, h)), f[h] = v
                            })
                        }

                        var p = this.group;
                        if (p.removeAll(), t.get("show")) {
                            var g = +t.get("itemSize"), m = t.get("feature") || {}, v = this._features || (this._features = {}), y = [];
                            o.each(m, function (t, e) {
                                y.push(e)
                            }), new l(this._featureNames || [], y).add(d).update(d).remove(o.curry(d, null)).execute(), this._featureNames = y, h.layout(p, t, i), h.addBackground(p, t), p.eachChild(function (t) {
                                var e = t.__title, n = t.hoverStyle;
                                if (n && e) {
                                    var r = u.getBoundingRect(e, n.font), o = t.position[0] + p.position[0], a = t.position[1] + p.position[1] + g, s = !1;
                                    a + r.height > i.getHeight() && (n.textPosition = "top", s = !0);
                                    var l = s ? -5 - r.height : g + 8;
                                    o + r.width / 2 > i.getWidth() ? (n.textPosition = ["100%", l], n.textAlign = "right") : o - r.width / 2 < 0 && (n.textPosition = [0, l],
                                        n.textAlign = "left")
                                }
                            })
                        }
                    }, updateView: function (t, e, i, n) {
                        o.each(this._features, function (t) {
                            t.updateView && t.updateView(t.model, e, i, n)
                        })
                    }, updateLayout: function (t, e, i, n) {
                        o.each(this._features, function (t) {
                            t.updateLayout && t.updateLayout(t.model, e, i, n)
                        })
                    }, remove: function (t, e) {
                        o.each(this._features, function (i) {
                            i.remove && i.remove(t, e)
                        }), this.group.removeAll()
                    }, dispose: function (t, e) {
                        o.each(this._features, function (i) {
                            i.dispose && i.dispose(t, e)
                        })
                    }
                })
            }).call(e, i(217))
        }, function (t, e, i) {
            function n(t) {
                var e = {}, i = [], n = [];
                return t.eachRawSeries(function (t) {
                    var r = t.coordinateSystem;
                    if (!r || "cartesian2d" !== r.type && "polar" !== r.type)i.push(t); else {
                        var o = r.getBaseAxis();
                        if ("category" === o.type) {
                            var a = o.dim + "_" + o.index;
                            e[a] || (e[a] = {
                                categoryAxis: o,
                                valueAxis: r.getOtherAxis(o),
                                series: []
                            }, n.push({axisDim: o.dim, axisIndex: o.index})), e[a].series.push(t)
                        } else i.push(t)
                    }
                }), {seriesGroupByCategoryAxis: e, other: i, meta: n}
            }

            function r(t) {
                var e = [];
                return p.each(t, function (t, i) {
                    var n = t.categoryAxis, r = t.valueAxis, o = r.dim, a = [" "].concat(p.map(t.series, function (t) {
                        return t.name
                    })), s = [n.model.getCategories()];
                    p.each(t.series, function (t) {
                        s.push(t.getRawData().mapArray(o, function (t) {
                            return t
                        }))
                    });
                    for (var l = [a.join(v)], h = 0; h < s[0].length; h++) {
                        for (var u = [], c = 0; c < s.length; c++)u.push(s[c][h]);
                        l.push(u.join(v))
                    }
                    e.push(l.join("\n"))
                }), e.join("\n\n" + m + "\n\n")
            }

            function o(t) {
                return p.map(t, function (t) {
                    var e = t.getRawData(), i = [t.name], n = [];
                    return e.each(e.dimensions, function () {
                        for (var t = arguments.length, r = arguments[t - 1], o = e.getName(r), a = 0; a < t - 1; a++)n[a] = arguments[a];
                        i.push((o ? o + v : "") + n.join(v))
                    }), i.join("\n")
                }).join("\n\n" + m + "\n\n")
            }

            function a(t) {
                var e = n(t);
                return {
                    value: p.filter([r(e.seriesGroupByCategoryAxis), o(e.other)], function (t) {
                        return t.replace(/[\n\t\s]/g, "")
                    }).join("\n\n" + m + "\n\n"), meta: e.meta
                }
            }

            function s(t) {
                return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }

            function l(t) {
                var e = t.slice(0, t.indexOf("\n"));
                if (e.indexOf(v) >= 0)return !0
            }

            function h(t) {
                for (var e = t.split(/\n+/g), i = s(e.shift()).split(y), n = [], r = p.map(i, function (t) {
                    return {name: t, data: []}
                }), o = 0; o < e.length; o++) {
                    var a = s(e[o]).split(y);
                    n.push(a.shift());
                    for (var l = 0; l < a.length; l++)r[l] && (r[l].data[o] = a[l])
                }
                return {series: r, categories: n}
            }

            function u(t) {
                for (var e = t.split(/\n+/g), i = s(e.shift()), n = [], r = 0; r < e.length; r++) {
                    var o, a = s(e[r]).split(y), l = "", h = !1;
                    isNaN(a[0]) ? (h = !0, l = a[0], a = a.slice(1), n[r] = {
                        name: l,
                        value: []
                    }, o = n[r].value) : o = n[r] = [];
                    for (var u = 0; u < a.length; u++)o.push(+a[u]);
                    1 === o.length && (h ? n[r].value = o[0] : n[r] = o[0])
                }
                return {name: i, data: n}
            }

            function c(t, e) {
                var i = t.split(new RegExp("\n*" + m + "\n*", "g")), n = {series: []};
                return p.each(i, function (t, i) {
                    if (l(t)) {
                        var r = h(t), o = e[i], a = o.axisDim + "Axis";
                        o && (n[a] = n[a] || [], n[a][o.axisIndex] = {data: r.categories}, n.series = n.series.concat(r.series))
                    } else {
                        var r = u(t);
                        n.series.push(r)
                    }
                }), n
            }

            function d(t) {
                this._dom = null, this.model = t
            }

            function f(t, e) {
                return p.map(t, function (t, i) {
                    var n = e && e[i];
                    return p.isObject(n) && !p.isArray(n) ? (p.isObject(t) && !p.isArray(t) && (t = t.value), p.defaults({value: t}, n)) : t
                })
            }

            var p = i(1), g = i(24), m = new Array(60).join("-"), v = "\t", y = new RegExp("[" + v + "]+", "g");
            d.defaultOption = {
                show: !0,
                readOnly: !1,
                optionToContent: null,
                contentToOption: null,
                icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
                title: "数据视图",
                lang: ["数据视图", "关闭", "刷新"],
                backgroundColor: "#fff",
                textColor: "#000",
                textareaColor: "#fff",
                textareaBorderColor: "#333",
                buttonColor: "#c23531",
                buttonTextColor: "#fff"
            }, d.prototype.onclick = function (t, e) {
                function i() {
                    n.removeChild(o), S._dom = null
                }

                var n = e.getDom(), r = this.model;
                this._dom && n.removeChild(this._dom);
                var o = document.createElement("div");
                o.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", o.style.backgroundColor = r.get("backgroundColor") || "#fff";
                var s = document.createElement("h4"), l = r.get("lang") || [];
                s.innerHTML = l[0] || r.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = r.get("textColor");
                var h = document.createElement("div"), u = document.createElement("textarea");
                h.style.cssText = "display:block;width:100%;overflow:hidden;";
                var d = r.get("optionToContent"), f = r.get("contentToOption"), m = a(t);
                if ("function" == typeof d) {
                    var y = d(e.getOption());
                    "string" == typeof y ? h.innerHTML = y : p.isDom(y) && h.appendChild(y)
                } else h.appendChild(u), u.readOnly = r.get("readOnly"), u.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", u.style.color = r.get("textColor"), u.style.borderColor = r.get("textareaBorderColor"), u.style.backgroundColor = r.get("textareaColor"), u.value = m.value;
                var x = m.meta, _ = document.createElement("div");
                _.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
                var b = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px", w = document.createElement("div"), M = document.createElement("div");
                b += ";background-color:" + r.get("buttonColor"), b += ";color:" + r.get("buttonTextColor");
                var S = this;
                g.addEventListener(w, "click", i), g.addEventListener(M, "click", function () {
                    var t;
                    try {
                        t = "function" == typeof f ? f(h, e.getOption()) : c(u.value, x)
                    } catch (n) {
                        throw i(), new Error("Data view format error " + n)
                    }
                    t && e.dispatchAction({type: "changeDataView", newOption: t}), i()
                }), w.innerHTML = l[1], M.innerHTML = l[2], M.style.cssText = b, w.style.cssText = b, !r.get("readOnly") && _.appendChild(M), _.appendChild(w), g.addEventListener(u, "keydown", function (t) {
                    if (9 === (t.keyCode || t.which)) {
                        var e = this.value, i = this.selectionStart, n = this.selectionEnd;
                        this.value = e.substring(0, i) + v + e.substring(n), this.selectionStart = this.selectionEnd = i + 1, g.stop(t)
                    }
                }), o.appendChild(s), o.appendChild(h), o.appendChild(_), h.style.height = n.clientHeight - 80 + "px", n.appendChild(o), this._dom = o
            }, d.prototype.remove = function (t, e) {
                this._dom && e.getDom().removeChild(this._dom)
            }, d.prototype.dispose = function (t, e) {
                this.remove(t, e)
            }, i(25).register("dataView", d), i(2).registerAction({
                type: "changeDataView",
                event: "dataViewChanged",
                update: "prepareAndUpdate"
            }, function (t, e) {
                var i = [];
                p.each(t.newOption.series, function (t) {
                    var n = e.getSeriesByName(t.name)[0];
                    if (n) {
                        var r = n.get("data");
                        i.push({name: t.name, data: f(t.data, r)})
                    } else i.push(p.extend({type: "scatter"}, t))
                }), e.mergeOption(p.defaults({series: i}, t.newOption))
            }), t.exports = d
        }, function (t, e, i) {
            "use strict";
            function n(t, e, i) {
                (this._brushController = new l(i.getZr())).on("brush", s.bind(this._onBrush, this)).mount(), this._isZoomActive
            }

            function r(t) {
                var e = {};
                return s.each(["xAxisIndex", "yAxisIndex"], function (i) {
                    e[i] = t[i], null == e[i] && (e[i] = "all"), (e[i] === !1 || "none" === e[i]) && (e[i] = [])
                }), e
            }

            function o(t, e) {
                t.setIconStatus("back", u.count(e) > 1 ? "emphasis" : "normal")
            }

            function a(t, e, i, n) {
                var o = i._isZoomActive;
                n && "takeGlobalCursor" === n.type && (o = "dataZoomSelect" === n.key && n.dataZoomSelectActive), i._isZoomActive = o, t.setIconStatus("zoom", o ? "emphasis" : "normal");
                var a = h.makeCoordInfoList(r(t.option), e), s = a.xAxisHas && !a.yAxisHas ? "lineX" : !a.xAxisHas && a.yAxisHas ? "lineY" : "rect";
                i._brushController.setPanels(h.makePanelOpts(a)).enableBrush(!!o && {
                        brushType: s,
                        brushStyle: {lineWidth: 0, fill: "rgba(0,0,0,0.2)"}
                    })
            }

            var s = i(1), l = i(113), h = i(114), u = i(111), c = s.each;
            i(188);
            var d = "\0_ec_\0toolbox-dataZoom_";
            n.defaultOption = {
                show: !0,
                icon: {
                    zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
                    back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
                },
                title: {zoom: "区域缩放", back: "区域缩放还原"}
            };
            var f = n.prototype;
            f.render = function (t, e, i, n) {
                this.model = t, this.ecModel = e, this.api = i, a(t, e, this, n), o(t, e)
            }, f.onclick = function (t, e, i) {
                p[i].call(this)
            }, f.remove = function (t, e) {
                this._brushController.unmount()
            }, f.dispose = function (t, e) {
                this._brushController.dispose()
            };
            var p = {
                zoom: function () {
                    var t = !this._isZoomActive;
                    this.api.dispatchAction({type: "takeGlobalCursor", key: "dataZoomSelect", dataZoomSelectActive: t})
                }, back: function () {
                    this._dispatchZoomAction(u.pop(this.ecModel))
                }
            };
            f._onBrush = function (t, e) {
                function i(t, e, i) {
                    var r = n(t, i[t], a);
                    r && (o[r.id] = {dataZoomId: r.id, startValue: e[0], endValue: e[1]})
                }

                function n(t, e, i) {
                    var n;
                    return i.eachComponent({mainType: "dataZoom", subType: "select"}, function (r, o) {
                        var a = r.get(t + "Index");
                        null != a && i.getComponent(t, a) === e && (n = r)
                    }), n
                }

                if (e.isEnd && t.length) {
                    var o = {}, a = this.ecModel;
                    this._brushController.updateCovers([]);
                    var s = h.makeCoordInfoList(r(this.model.option), a), l = [];
                    h.parseOutputRanges(t, s, a, l);
                    var c = t[0], d = l[0], f = c.coordRange, p = c.brushType;
                    if (d && f)if ("rect" === p)i("xAxis", f[0], d), i("yAxis", f[1], d); else {
                        var g = {lineX: "xAxis", lineY: "yAxis"};
                        i(g[p], f, d)
                    }
                    u.push(a, o), this._dispatchZoomAction(o)
                }
            }, f._dispatchZoomAction = function (t) {
                var e = [];
                c(t, function (t, i) {
                    e.push(s.clone(t))
                }), e.length && this.api.dispatchAction({type: "dataZoom", from: this.uid, batch: e})
            }, i(25).register("dataZoom", n), i(2).registerPreprocessor(function (t) {
                function e(t, e) {
                    if (e) {
                        var r = t + "Index", o = e[r];
                        null == o || "all" == o || s.isArray(o) || (o = o === !1 || "none" === o ? [] : [o]), i(t, function (e, i) {
                            if (null == o || "all" == o || s.indexOf(o, i) !== -1) {
                                var a = {type: "select", $fromToolbox: !0, id: d + t + i};
                                a[r] = i, n.push(a)
                            }
                        })
                    }
                }

                function i(e, i) {
                    var n = t[e];
                    s.isArray(n) || (n = n ? [n] : []), c(n, i)
                }

                if (t) {
                    var n = t.dataZoom || (t.dataZoom = []);
                    s.isArray(n) || (t.dataZoom = n = [n]);
                    var r = t.toolbox;
                    if (r && (s.isArray(r) && (r = r[0]), r && r.feature)) {
                        var o = r.feature.dataZoom;
                        e("xAxis", o), e("yAxis", o)
                    }
                }
            }), t.exports = n
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                this.model = t
            }

            var r = i(1);
            n.defaultOption = {
                show: !0,
                type: [],
                icon: {
                    line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
                    bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
                    stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
                    tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
                },
                title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"},
                option: {},
                seriesIndex: {}
            };
            var o = n.prototype;
            o.getIcons = function () {
                var t = this.model, e = t.get("icon"), i = {};
                return r.each(t.get("type"), function (t) {
                    e[t] && (i[t] = e[t])
                }), i
            };
            var a = {
                line: function (t, e, i, n) {
                    if ("bar" === t)return r.merge({
                        id: e,
                        type: "line",
                        data: i.get("data"),
                        stack: i.get("stack"),
                        markPoint: i.get("markPoint"),
                        markLine: i.get("markLine")
                    }, n.get("option.line") || {}, !0)
                }, bar: function (t, e, i, n) {
                    if ("line" === t)return r.merge({
                        id: e,
                        type: "bar",
                        data: i.get("data"),
                        stack: i.get("stack"),
                        markPoint: i.get("markPoint"),
                        markLine: i.get("markLine")
                    }, n.get("option.bar") || {}, !0)
                }, stack: function (t, e, i, n) {
                    if ("line" === t || "bar" === t)return r.merge({
                        id: e,
                        stack: "__ec_magicType_stack__"
                    }, n.get("option.stack") || {}, !0)
                }, tiled: function (t, e, i, n) {
                    if ("line" === t || "bar" === t)return r.merge({id: e, stack: ""}, n.get("option.tiled") || {}, !0)
                }
            }, s = [["line", "bar"], ["stack", "tiled"]];
            o.onclick = function (t, e, i) {
                var n = this.model, o = n.get("seriesIndex." + i);
                if (a[i]) {
                    var l = {series: []}, h = function (e) {
                        var o = e.subType, s = e.id, h = a[i](o, s, e, n);
                        h && (r.defaults(h, e.option), l.series.push(h));
                        var u = e.coordinateSystem;
                        if (u && "cartesian2d" === u.type && ("line" === i || "bar" === i)) {
                            var c = u.getAxesByScale("ordinal")[0];
                            if (c) {
                                var d = c.dim, f = d + "Axis", p = t.queryComponents({
                                    mainType: f,
                                    index: e.get(name + "Index"),
                                    id: e.get(name + "Id")
                                })[0], g = p.componentIndex;
                                l[f] = l[f] || [];
                                for (var m = 0; m <= g; m++)l[f][g] = l[f][g] || {};
                                l[f][g].boundaryGap = "bar" === i
                            }
                        }
                    };
                    r.each(s, function (t) {
                        r.indexOf(t, i) >= 0 && r.each(t, function (t) {
                            n.setIconStatus(t, "normal")
                        })
                    }), n.setIconStatus(i, "emphasis"), t.eachComponent({
                        mainType: "series",
                        query: null == o ? null : {seriesIndex: o}
                    }, h), e.dispatchAction({type: "changeMagicType", currentType: i, newOption: l})
                }
            };
            var l = i(2);
            l.registerAction({
                type: "changeMagicType",
                event: "magicTypeChanged",
                update: "prepareAndUpdate"
            }, function (t, e) {
                e.mergeOption(t.newOption)
            }), i(25).register("magicType", n), t.exports = n
        }, function (t, e, i) {
            "use strict";
            function n(t) {
                this.model = t
            }

            var r = i(111);
            n.defaultOption = {
                show: !0,
                icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
                title: "还原"
            };
            var o = n.prototype;
            o.onclick = function (t, e, i) {
                r.clear(t), e.dispatchAction({type: "restore", from: this.uid})
            }, i(25).register("restore", n), i(2).registerAction({
                type: "restore",
                event: "restore",
                update: "prepareAndUpdate"
            }, function (t, e) {
                e.resetOption("recreate")
            }), t.exports = n
        }, function (t, e, i) {
            function n(t) {
                this.model = t
            }

            var r = i(11);
            n.defaultOption = {
                show: !0,
                icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
                title: "保存为图片",
                type: "png",
                name: "",
                excludeComponents: ["toolbox"],
                pixelRatio: 1,
                lang: ["右键另存为图片"]
            }, n.prototype.unusable = !r.canvasSupported;
            var o = n.prototype;
            o.onclick = function (t, e) {
                var i = this.model, n = i.get("name") || t.get("title.0.text") || "echarts", r = document.createElement("a"), o = i.get("type", !0) || "png";
                r.download = n + "." + o, r.target = "_blank";
                var a = e.getConnectedDataURL({
                    type: o,
                    backgroundColor: i.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
                    excludeComponents: i.get("excludeComponents"),
                    pixelRatio: i.get("pixelRatio")
                });
                if (r.href = a, "function" == typeof MouseEvent) {
                    var s = new MouseEvent("click", {view: window, bubbles: !0, cancelable: !1});
                    r.dispatchEvent(s)
                } else {
                    var l = i.get("lang"), h = '<body style="margin:0;"><img src="' + a + '" style="max-width:100%;" title="' + (l && l[0] || "") + '" /></body>', u = window.open();
                    u.document.write(h)
                }
            }, i(25).register("saveAsImage", n), t.exports = n
        }, function (t, e, i) {
            i(214), i(215), i(2).registerAction({type: "showTip", event: "showTip", update: "none"}, function () {
            }), i(2).registerAction({type: "hideTip", event: "hideTip", update: "none"}, function () {
            })
        }, function (t, e, i) {
            function n(t) {
                var e = "cubic-bezier(0.23, 1, 0.32, 1)", i = "left " + t + "s " + e + ",top " + t + "s " + e;
                return l.map(g, function (t) {
                    return t + "transition:" + i
                }).join(";")
            }

            function r(t) {
                var e = [], i = t.get("fontSize"), n = t.getTextColor();
                return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), d(["decoration", "align"], function (i) {
                    var n = t.get(i);
                    n && e.push("text-" + i + ":" + n)
                }), e.join(";")
            }

            function o(t) {
                t = t;
                var e = [], i = t.get("transitionDuration"), o = t.get("backgroundColor"), a = t.getModel("textStyle"), s = t.get("padding");
                return i && e.push(n(i)), o && (p.canvasSupported ? e.push("background-Color:" + o) : (e.push("background-Color:#" + h.toHex(o)), e.push("filter:alpha(opacity=70)"))), d(["width", "color", "radius"], function (i) {
                    var n = "border-" + i, r = f(n), o = t.get(r);
                    null != o && e.push(n + ":" + o + ("color" === i ? "" : "px"))
                }), e.push(r(a)), null != s && e.push("padding:" + c.normalizeCssArray(s).join("px ") + "px"), e.join(";") + ";"
            }

            function a(t, e) {
                var i = document.createElement("div"), n = e.getZr();
                this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
                var r = this;
                i.onmouseenter = function () {
                    r.enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
                }, i.onmousemove = function (e) {
                    if (e = e || window.event, !r.enterable) {
                        var i = n.handler;
                        u.normalizeEvent(t, e, !0), i.dispatch("mousemove", e)
                    }
                }, i.onmouseleave = function () {
                    r.enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
                }, s(i, t)
            }

            function s(t, e) {
                function i(t) {
                    n(t.target) || t.preventDefault()
                }

                function n(i) {
                    for (; i && i !== e;) {
                        if (i === t)return !0;
                        i = i.parentNode
                    }
                }

                u.addEventListener(e, "touchstart", i), u.addEventListener(e, "touchmove", i), u.addEventListener(e, "touchend", i)
            }

            var l = i(1), h = i(18), u = i(24), c = i(9), d = l.each, f = c.toCamelCase, p = i(11), g = ["", "-webkit-", "-moz-", "-o-"], m = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
            a.prototype = {
                constructor: a, enterable: !0, update: function () {
                    var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), i = t.style;
                    "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
                }, show: function (t) {
                    clearTimeout(this._hideTimeout);
                    var e = this.el;
                    e.style.cssText = m + o(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0
                }, setContent: function (t) {
                    var e = this.el;
                    e.innerHTML = t, e.style.display = t ? "block" : "none"
                }, moveTo: function (t, e) {
                    var i = this.el.style;
                    i.left = t + "px", i.top = e + "px", this._x = t, this._y = e
                }, hide: function () {
                    this.el.style.display = "none", this._show = !1
                }, hideLater: function (t) {
                    !this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(l.bind(this.hide, this), t)) : this.hide())
                }, isShow: function () {
                    return this._show
                }
            }, t.exports = a
        }, function (t, e, i) {
            i(2).extendComponentModel({
                type: "tooltip",
                defaultOption: {
                    zlevel: 0,
                    z: 8,
                    show: !0,
                    showContent: !0,
                    trigger: "item",
                    triggerOn: "mousemove",
                    alwaysShowContent: !1,
                    showDelay: 0,
                    hideDelay: 100,
                    transitionDuration: .4,
                    enterable: !1,
                    backgroundColor: "rgba(50,50,50,0.7)",
                    borderColor: "#333",
                    borderRadius: 4,
                    borderWidth: 0,
                    padding: 5,
                    extraCssText: "",
                    axisPointer: {
                        type: "line",
                        axis: "auto",
                        animation: !0,
                        animationDurationUpdate: 200,
                        animationEasingUpdate: "exponentialOut",
                        lineStyle: {color: "#555", width: 1, type: "solid"},
                        crossStyle: {color: "#555", width: 1, type: "dashed", textStyle: {}},
                        shadowStyle: {color: "rgba(150,150,150,0.3)"}
                    },
                    textStyle: {color: "#fff", fontSize: 14}
                }
            })
        }, function (t, e, i) {
            function n(t, e) {
                if (!t || !e)return !1;
                var i = g.round;
                return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1])
            }

            function r(t, e, i, n) {
                return {x1: t, y1: e, x2: i, y2: n}
            }

            function o(t, e, i, n) {
                return {x: t, y: e, width: i, height: n}
            }

            function a(t, e, i, n, r, o) {
                return {cx: t, cy: e, r0: i, r: n, startAngle: r, endAngle: o, clockwise: !0}
            }

            function s(t, e, i, n, r) {
                var o = i.clientWidth, a = i.clientHeight, s = 20;
                return t + o + s > n ? t -= o + s : t += s, e + a + s > r ? e -= a + s : e += s, [t, e]
            }

            function l(t, e, i) {
                var n = i.clientWidth, r = i.clientHeight, o = 5, a = 0, s = 0, l = e.width, h = e.height;
                switch (t) {
                    case"inside":
                        a = e.x + l / 2 - n / 2, s = e.y + h / 2 - r / 2;
                        break;
                    case"top":
                        a = e.x + l / 2 - n / 2, s = e.y - r - o;
                        break;
                    case"bottom":
                        a = e.x + l / 2 - n / 2, s = e.y + h + o;
                        break;
                    case"left":
                        a = e.x - n - o, s = e.y + h / 2 - r / 2;
                        break;
                    case"right":
                        a = e.x + l + o, s = e.y + h / 2 - r / 2
                }
                return [a, s]
            }

            function h(t, e, i, n, r, o, a) {
                var h = a.getWidth(), u = a.getHeight(), c = o && o.getBoundingRect().clone();
                if (o && c.applyTransform(o.transform), "function" == typeof t && (t = t([e, i], r, n.el, c)), f.isArray(t))e = v(t[0], h), i = v(t[1], u); else if ("string" == typeof t && o) {
                    var d = l(t, c, n.el);
                    e = d[0], i = d[1]
                } else {
                    var d = s(e, i, n.el, h, u);
                    e = d[0], i = d[1]
                }
                n.moveTo(e, i)
            }

            function u(t) {
                var e = t.coordinateSystem, i = t.get("tooltip.trigger", !0);
                return !(!e || "cartesian2d" !== e.type && "polar" !== e.type && "singleAxis" !== e.type || "item" === i)
            }

            var c = i(213), d = i(3), f = i(1), p = i(9), g = i(4), m = i(7), v = g.parsePercent, y = i(11), x = i(10);
            i(2).extendComponentView({
                type: "tooltip", _axisPointers: {}, init: function (t, e) {
                    if (!y.node) {
                        var i = new c(e.getDom(), e);
                        this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._manuallyHideTip, this)
                    }
                }, render: function (t, e, i) {
                    if (!y.node) {
                        this.group.removeAll(), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};
                        var n = this._tooltipContent;
                        n.update(), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);
                        var r = this._crossText;
                        r && this.group.add(r);
                        var o = t.get("triggerOn");
                        if (null != this._lastX && null != this._lastY && "none" !== o) {
                            var a = this;
                            clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                                a._manuallyShowTip({x: a._lastX, y: a._lastY})
                            })
                        }
                        var s = this._api.getZr();
                        s.off("click", this._tryShow), s.off("mousemove", this._mousemove), s.off("mouseout", this._hide), s.off("globalout", this._hide), "click" === o ? s.on("click", this._tryShow, this) : "mousemove" === o && (s.on("mousemove", this._mousemove, this), s.on("mouseout", this._hide, this), s.on("globalout", this._hide, this))
                    }
                }, _mousemove: function (t) {
                    var e = this._tooltipModel.get("showDelay"), i = this;
                    clearTimeout(this._showTimeout), e > 0 ? this._showTimeout = setTimeout(function () {
                        i._tryShow(t)
                    }, e) : this._tryShow(t)
                }, _manuallyShowTip: function (t) {
                    if (t.from !== this.uid) {
                        var e = this._ecModel, i = t.seriesIndex, n = e.getSeriesByIndex(i), r = this._api;
                        if (null == t.x || null == t.y) {
                            if (n || e.eachSeries(function (t) {
                                    u(t) && !n && (n = t)
                                }), n) {
                                var o = n.getData(), a = m.queryDataIndex(o, t);
                                if (null == a || f.isArray(a))return;
                                var s, l, h = o.getItemGraphicEl(a), c = n.coordinateSystem;
                                if (n.getTooltipPosition) {
                                    var d = n.getTooltipPosition(a) || [];
                                    s = d[0], l = d[1]
                                } else if (c && c.dataToPoint) {
                                    var d = c.dataToPoint(o.getValues(f.map(c.dimensions, function (t) {
                                        return n.coordDimToDataDim(t)[0]
                                    }), a, !0));
                                    s = d && d[0], l = d && d[1]
                                } else if (h) {
                                    var p = h.getBoundingRect().clone();
                                    p.applyTransform(h.transform), s = p.x + p.width / 2, l = p.y + p.height / 2
                                }
                                null != s && null != l && this._tryShow({
                                    offsetX: s,
                                    offsetY: l,
                                    position: t.position,
                                    target: h,
                                    event: {}
                                })
                            }
                        } else {
                            var h = r.getZr().handler.findHover(t.x, t.y);
                            this._tryShow({offsetX: t.x, offsetY: t.y, position: t.position, target: h, event: {}})
                        }
                    }
                }, _manuallyHideTip: function (t) {
                    t.from !== this.uid && this._hide()
                }, _prepareAxisTriggerData: function (t, e) {
                    var i = {};
                    return e.eachSeries(function (t) {
                        if (u(t)) {
                            var e, n, r = t.coordinateSystem;
                            "cartesian2d" === r.type ? (e = r.getBaseAxis(), n = e.dim + e.index) : "singleAxis" === r.type ? (e = r.getAxis(), n = e.dim + e.type) : (e = r.getBaseAxis(), n = e.dim + r.name), i[n] = i[n] || {
                                    coordSys: [],
                                    series: []
                                }, i[n].coordSys.push(r), i[n].series.push(t)
                        }
                    }, this), i
                }, _tryShow: function (t) {
                    var e = t.target, i = this._tooltipModel, n = i.get("trigger"), r = this._ecModel, o = this._api;
                    if (i)if (this._lastX = t.offsetX, this._lastY = t.offsetY, e && null != e.dataIndex) {
                        var a = e.dataModel || r.getSeriesByIndex(e.seriesIndex), s = e.dataIndex, l = a.getData().getItemModel(s);
                        "axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, r, t) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(a, s, e.dataType, t)), o.dispatchAction({
                            type: "showTip",
                            from: this.uid,
                            dataIndexInside: e.dataIndex,
                            seriesIndex: e.seriesIndex
                        })
                    } else if (e && e.tooltip) {
                        var h = e.tooltip;
                        if ("string" == typeof h) {
                            var u = h;
                            h = {content: u, formatter: u}
                        }
                        var c = new x(h, i), d = c.get("content"), f = Math.random();
                        this._showTooltipContent(c, d, c.get("formatterParams") || {}, f, t.offsetX, t.offsetY, t.position, e, o)
                    } else"item" === n ? this._hide() : this._showAxisTooltip(i, r, t), "cross" === i.get("axisPointer.type") && o.dispatchAction({
                        type: "showTip",
                        from: this.uid,
                        x: t.offsetX,
                        y: t.offsetY
                    })
                }, _showAxisTooltip: function (t, e, i) {
                    var r = t.getModel("axisPointer"), o = r.get("type");
                    if ("cross" === o) {
                        var a = i.target;
                        if (a && null != a.dataIndex) {
                            var s = e.getSeriesByIndex(a.seriesIndex), l = a.dataIndex;
                            this._showItemTooltipContent(s, l, a.dataType, i)
                        }
                    }
                    this._showAxisPointer();
                    var h = !0;
                    f.each(this._seriesGroupByAxis, function (t) {
                        var e = t.coordSys, a = e[0], s = [i.offsetX, i.offsetY];
                        if (!a.containPoint(s))return void this._hideAxisPointer(a.name);
                        h = !1;
                        var l = a.dimensions, u = a.pointToData(s, !0);
                        s = a.dataToPoint(u);
                        var c = a.getBaseAxis(), d = r.get("axis");
                        "auto" === d && (d = c.dim);
                        var p = !1, g = this._lastHover;
                        if ("cross" === o)n(g.data, u) && (p = !0), g.data = u; else {
                            var m = f.indexOf(l, d);
                            g.data === u[m] && (p = !0), g.data = u[m]
                        }
                        "cartesian2d" !== a.type || p ? "polar" !== a.type || p ? "singleAxis" !== a.type || p || this._showSinglePointer(r, a, d, s) : this._showPolarPointer(r, a, d, s) : this._showCartesianPointer(r, a, d, s), "cross" !== o && this._dispatchAndShowSeriesTooltipContent(a, t.series, s, u, p, i.position)
                    }, this), this._tooltipModel.get("show") || this._hideAxisPointer(), h && this._hide()
                }, _showCartesianPointer: function (t, e, i, n) {
                    function a(i, n, o) {
                        var a = "x" === i ? r(n[0], o[0], n[0], o[1]) : r(o[0], n[1], o[1], n[1]), s = l._getPointerElement(e, t, i, a);
                        d.subPixelOptimizeLine({
                            shape: a,
                            style: s.style
                        }), c ? d.updateProps(s, {shape: a}, t) : s.attr({shape: a})
                    }

                    function s(i, n, r) {
                        var a = e.getAxis(i), s = a.getBandWidth(), h = r[1] - r[0], u = "x" === i ? o(n[0] - s / 2, r[0], s, h) : o(r[0], n[1] - s / 2, h, s), f = l._getPointerElement(e, t, i, u);
                        c ? d.updateProps(f, {shape: u}, t) : f.attr({shape: u})
                    }

                    var l = this, h = t.get("type"), u = e.getBaseAxis(), c = "cross" !== h && "category" === u.type && u.getBandWidth() > 20;
                    if ("cross" === h)a("x", n, e.getAxis("y").getGlobalExtent()), a("y", n, e.getAxis("x").getGlobalExtent()), this._updateCrossText(e, n, t); else {
                        var f = e.getAxis("x" === i ? "y" : "x"), p = f.getGlobalExtent();
                        "cartesian2d" === e.type && ("line" === h ? a : s)(i, n, p)
                    }
                }, _showSinglePointer: function (t, e, i, n) {
                    function o(i, n, o) {
                        var s = e.getAxis(), h = s.orient, u = "horizontal" === h ? r(n[0], o[0], n[0], o[1]) : r(o[0], n[1], o[1], n[1]), c = a._getPointerElement(e, t, i, u);
                        l ? d.updateProps(c, {shape: u}, t) : c.attr({shape: u})
                    }

                    var a = this, s = t.get("type"), l = "cross" !== s && "category" === e.getBaseAxis().type, h = e.getRect(), u = [h.y, h.y + h.height];
                    o(i, n, u)
                }, _showPolarPointer: function (t, e, i, n) {
                    function o(i, n, o) {
                        var a, s = e.pointToCoord(n);
                        if ("angle" === i) {
                            var h = e.coordToPoint([o[0], s[1]]), u = e.coordToPoint([o[1], s[1]]);
                            a = r(h[0], h[1], u[0], u[1])
                        } else a = {cx: e.cx, cy: e.cy, r: s[0]};
                        var c = l._getPointerElement(e, t, i, a);
                        f ? d.updateProps(c, {shape: a}, t) : c.attr({shape: a})
                    }

                    function s(i, n, r) {
                        var o, s = e.getAxis(i), h = s.getBandWidth(), u = e.pointToCoord(n), c = Math.PI / 180;
                        o = "angle" === i ? a(e.cx, e.cy, r[0], r[1], (-u[1] - h / 2) * c, (-u[1] + h / 2) * c) : a(e.cx, e.cy, u[0] - h / 2, u[0] + h / 2, 0, 2 * Math.PI);
                        var p = l._getPointerElement(e, t, i, o);
                        f ? d.updateProps(p, {shape: o}, t) : p.attr({shape: o})
                    }

                    var l = this, h = t.get("type"), u = e.getAngleAxis(), c = e.getRadiusAxis(), f = "cross" !== h && "category" === e.getBaseAxis().type;
                    if ("cross" === h)o("angle", n, c.getExtent()), o("radius", n, u.getExtent()), this._updateCrossText(e, n, t); else {
                        var p = e.getAxis("radius" === i ? "angle" : "radius"), g = p.getExtent();
                        ("line" === h ? o : s)(i, n, g)
                    }
                }, _updateCrossText: function (t, e, i) {
                    var n = i.getModel("crossStyle"), r = n.getModel("textStyle"), o = this._tooltipModel, a = this._crossText;
                    a || (a = this._crossText = new d.Text({
                        style: {
                            textAlign: "left",
                            textVerticalAlign: "bottom"
                        }
                    }), this.group.add(a));
                    var s = t.pointToData(e), l = t.dimensions;
                    s = f.map(s, function (e, i) {
                        var n = t.getAxis(l[i]);
                        return e = "category" === n.type || "time" === n.type ? n.scale.getLabel(e) : p.addCommas(e.toFixed(n.getPixelPrecision()))
                    }), a.setStyle({
                        fill: r.getTextColor() || n.get("color"),
                        textFont: r.getFont(),
                        text: s.join(", "),
                        x: e[0] + 5,
                        y: e[1] - 5
                    }), a.z = o.get("z"), a.zlevel = o.get("zlevel")
                }, _getPointerElement: function (t, e, i, n) {
                    var r = this._tooltipModel, o = r.get("z"), a = r.get("zlevel"), s = this._axisPointers, l = t.name;
                    if (s[l] = s[l] || {}, s[l][i])return s[l][i];
                    var h = e.get("type"), u = e.getModel(h + "Style"), c = "shadow" === h, f = u[c ? "getAreaStyle" : "getLineStyle"](), p = "polar" === t.type ? c ? "Sector" : "radius" === i ? "Circle" : "Line" : c ? "Rect" : "Line";
                    c ? f.stroke = null : f.fill = null;
                    var g = s[l][i] = new d[p]({style: f, z: o, zlevel: a, silent: !0, shape: n});
                    return this.group.add(g), g
                }, _dispatchAndShowSeriesTooltipContent: function (t, e, i, n, r, o) {
                    var a = this._tooltipModel, s = t.getBaseAxis(), l = "x" === s.dim || "radius" === s.dim ? 0 : 1, u = f.map(e, function (t) {
                        return {
                            seriesIndex: t.seriesIndex,
                            dataIndexInside: t.getAxisTooltipDataIndex ? t.getAxisTooltipDataIndex(t.coordDimToDataDim(s.dim), n, s) : t.getData().indexOfNearest(t.coordDimToDataDim(s.dim)[0], n[l], !1, "category" === s.type ? .5 : null)
                        }
                    }), c = this._lastHover, d = this._api;
                    if (c.payloadBatch && !r && d.dispatchAction({
                            type: "downplay",
                            batch: c.payloadBatch
                        }), r || (d.dispatchAction({
                            type: "highlight",
                            batch: u
                        }), c.payloadBatch = u), d.dispatchAction({
                            type: "showTip",
                            dataIndexInside: u[0].dataIndexInside,
                            seriesIndex: u[0].seriesIndex,
                            from: this.uid
                        }), s && a.get("showContent") && a.get("show")) {
                        var p = f.map(e, function (t, e) {
                            return t.getDataParams(u[e].dataIndexInside)
                        });
                        if (r)h(o || a.get("position"), i[0], i[1], this._tooltipContent, p, null, d); else {
                            var g = u[0].dataIndexInside, m = "time" === s.type ? s.scale.getLabel(n[l]) : e[0].getData().getName(g), v = (m ? m + "<br />" : "") + f.map(e, function (t, e) {
                                    return t.formatTooltip(u[e].dataIndexInside, !0)
                                }).join("<br />"), y = "axis_" + t.name + "_" + g;
                            this._showTooltipContent(a, v, p, y, i[0], i[1], o, null, d)
                        }
                    }
                }, _showItemTooltipContent: function (t, e, i, n) {
                    var r = this._api, o = t.getData(i), a = o.getItemModel(e), s = a.get("tooltip", !0);
                    if ("string" == typeof s) {
                        var l = s;
                        s = {formatter: l}
                    }
                    var h = this._tooltipModel, u = t.getModel("tooltip", h), c = new x(s, u, u.ecModel), d = t.getDataParams(e, i), f = t.formatTooltip(e, !1, i), p = "item_" + t.name + "_" + e;
                    this._showTooltipContent(c, f, d, p, n.offsetX, n.offsetY, n.position, n.target, r)
                }, _showTooltipContent: function (t, e, i, n, r, o, a, s, l) {
                    if (this._ticket = "", t.get("showContent") && t.get("show")) {
                        var u = this._tooltipContent, c = t.get("formatter");
                        a = a || t.get("position");
                        var d = e;
                        if (c)if ("string" == typeof c)d = p.formatTpl(c, i); else if ("function" == typeof c) {
                            var f = this, g = n, m = function (t, e) {
                                t === f._ticket && (u.setContent(e), h(a, r, o, u, i, s, l))
                            };
                            f._ticket = g, d = c(i, g, m)
                        }
                        u.show(t), u.setContent(d), h(a, r, o, u, i, s, l)
                    }
                }, _showAxisPointer: function (t) {
                    if (t) {
                        var e = this._axisPointers[t];
                        e && f.each(e, function (t) {
                            t.show()
                        })
                    } else this.group.eachChild(function (t) {
                        t.show()
                    }), this.group.show()
                }, _resetLastHover: function () {
                    var t = this._lastHover;
                    t.payloadBatch && this._api.dispatchAction({
                        type: "downplay",
                        batch: t.payloadBatch
                    }), this._lastHover = {}
                }, _hideAxisPointer: function (t) {
                    if (t) {
                        var e = this._axisPointers[t];
                        e && f.each(e, function (t) {
                            t.hide()
                        })
                    } else this.group.children().length && this.group.hide()
                }, _hide: function () {
                    clearTimeout(this._showTimeout), this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")), this._api.dispatchAction({
                        type: "hideTip",
                        from: this.uid
                    }), this._lastX = this._lastY = null
                }, dispose: function (t, e) {
                    if (!y.node) {
                        var i = e.getZr();
                        this._tooltipContent.hide(), i.off("click", this._tryShow), i.off("mousemove", this._mousemove), i.off("mouseout", this._hide), i.off("globalout", this._hide), e.off("showTip", this._manuallyShowTip), e.off("hideTip", this._manuallyHideTip)
                    }
                }
            })
        }, , function (t, e) {
            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function n() {
                throw new Error("clearTimeout has not been defined")
            }

            function r(t) {
                if (u === setTimeout)return setTimeout(t, 0);
                if ((u === i || !u) && setTimeout)return u = setTimeout, setTimeout(t, 0);
                try {
                    return u(t, 0)
                } catch (e) {
                    try {
                        return u.call(null, t, 0)
                    } catch (e) {
                        return u.call(this, t, 0)
                    }
                }
            }

            function o(t) {
                if (c === clearTimeout)return clearTimeout(t);
                if ((c === n || !c) && clearTimeout)return c = clearTimeout, clearTimeout(t);
                try {
                    return c(t)
                } catch (e) {
                    try {
                        return c.call(null, t)
                    } catch (e) {
                        return c.call(this, t)
                    }
                }
            }

            function a() {
                g && f && (g = !1, f.length ? p = f.concat(p) : m = -1, p.length && s())
            }

            function s() {
                if (!g) {
                    var t = r(a);
                    g = !0;
                    for (var e = p.length; e;) {
                        for (f = p, p = []; ++m < e;)f && f[m].run();
                        m = -1, e = p.length
                    }
                    f = null, g = !1, o(t)
                }
            }

            function l(t, e) {
                this.fun = t, this.array = e
            }

            function h() {
            }

            var u, c, d = t.exports = {};
            !function () {
                try {
                    u = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    u = i
                }
                try {
                    c = "function" == typeof clearTimeout ? clearTimeout : n
                } catch (t) {
                    c = n
                }
            }();
            var f, p = [], g = !1, m = -1;
            d.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)for (var i = 1; i < arguments.length; i++)e[i - 1] = arguments[i];
                p.push(new l(t, e)), 1 !== p.length || g || r(s)
            }, l.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = h, d.addListener = h, d.once = h, d.off = h, d.removeListener = h, d.removeAllListeners = h, d.emit = h, d.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, d.cwd = function () {
                return "/"
            }, d.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, d.umask = function () {
                return 0
            }
        }, function (t, e, i) {
            function n(t) {
                return parseInt(t, 10)
            }

            function r(t, e) {
                s.initVML(), this.root = t, this.storage = e;
                var i = document.createElement("div"), n = document.createElement("div");
                i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this.resize();
                var r = e.delFromMap, o = e.addToMap;
                e.delFromMap = function (t) {
                    var i = e.get(t);
                    r.call(e, t), i && i.onRemove && i.onRemove(n)
                }, e.addToMap = function (t) {
                    t.onAdd && t.onAdd(n), o.call(e, t)
                }, this._firstPaint = !0
            }

            function o(t) {
                return function () {
                    a('In IE8.0 VML mode painter not support method "' + t + '"')
                }
            }

            var a = i(47), s = i(170);
            r.prototype = {
                constructor: r, getViewportRoot: function () {
                    return this._vmlViewport
                }, refresh: function () {
                    var t = this.storage.getDisplayList(!0, !0);
                    this._paintList(t)
                }, _paintList: function (t) {
                    for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.invisible || n.ignore ? (n.__alreadyNotVisible || n.onRemove(e), n.__alreadyNotVisible = !0) : (n.__alreadyNotVisible && n.onAdd(e), n.__alreadyNotVisible = !1, n.__dirty && (n.beforeBrush && n.beforeBrush(), (n.brushVML || n.brush).call(n, e), n.afterBrush && n.afterBrush())), n.__dirty = !1
                    }
                    this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
                }, resize: function (t, e) {
                    var t = null == t ? this._getWidth() : t, e = null == e ? this._getHeight() : e;
                    if (this._width != t || this._height != e) {
                        this._width = t, this._height = e;
                        var i = this._vmlViewport.style;
                        i.width = t + "px", i.height = e + "px"
                    }
                }, dispose: function () {
                    this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
                }, getWidth: function () {
                    return this._width
                }, getHeight: function () {
                    return this._height
                }, clear: function () {
                    this._vmlViewport && this.root.removeChild(this._vmlViewport)
                }, _getWidth: function () {
                    var t = this.root, e = t.currentStyle;
                    return (t.clientWidth || n(e.width)) - n(e.paddingLeft) - n(e.paddingRight) | 0
                }, _getHeight: function () {
                    var t = this.root, e = t.currentStyle;
                    return (t.clientHeight || n(e.height)) - n(e.paddingTop) - n(e.paddingBottom) | 0
                }
            };
            for (var l = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], h = 0; h < l.length; h++) {
                var u = l[h];
                r.prototype[u] = o(u)
            }
            t.exports = r
        }, function (t, e, i) {
            if (!i(11).canvasSupported) {
                var n = i(5), r = i(8), o = i(28).CMD, a = i(18), s = i(16), l = i(75), h = i(37), u = i(48), c = i(74), d = i(6), f = i(29), p = i(170), g = Math.round, m = Math.sqrt, v = Math.abs, y = Math.cos, x = Math.sin, _ = Math.max, b = n.applyTransform, w = ",", M = "progid:DXImageTransform.Microsoft", S = 21600, T = S / 2, A = 1e5, I = 1e3, C = function (t) {
                    t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = S + "," + S, t.coordorigin = "0,0"
                }, L = function (t) {
                    return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
                }, P = function (t, e, i) {
                    return "rgb(" + [t, e, i].join(",") + ")"
                }, k = function (t, e) {
                    e && t && e.parentNode !== t && t.appendChild(e)
                }, D = function (t, e) {
                    e && t && e.parentNode === t && t.removeChild(e)
                }, O = function (t, e, i) {
                    return (parseFloat(t) || 0) * A + (parseFloat(e) || 0) * I + i
                }, z = function (t, e) {
                    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
                }, E = function (t, e, i) {
                    var n = a.parse(e);
                    i = +i, isNaN(i) && (i = 1), n && (t.color = P(n[0], n[1], n[2]), t.opacity = i * n[3])
                }, R = function (t) {
                    var e = a.parse(t);
                    return [P(e[0], e[1], e[2]), e[3]]
                }, N = function (t, e, i) {
                    var n = e.fill;
                    if (null != n)if (n instanceof f) {
                        var r, o = 0, a = [0, 0], s = 0, l = 1, h = i.getBoundingRect(), u = h.width, c = h.height;
                        if ("linear" === n.type) {
                            r = "gradient";
                            var d = i.transform, p = [n.x * u, n.y * c], g = [n.x2 * u, n.y2 * c];
                            d && (b(p, p, d), b(g, g, d));
                            var m = g[0] - p[0], v = g[1] - p[1];
                            o = 180 * Math.atan2(m, v) / Math.PI, o < 0 && (o += 360), o < 1e-6 && (o = 0)
                        } else {
                            r = "gradientradial";
                            var p = [n.x * u, n.y * c], d = i.transform, y = i.scale, x = u, w = c;
                            a = [(p[0] - h.x) / x, (p[1] - h.y) / w], d && b(p, p, d), x /= y[0] * S, w /= y[1] * S;
                            var M = _(x, w);
                            s = 0 / M, l = 2 * n.r / M - s
                        }
                        var T = n.colorStops.slice();
                        T.sort(function (t, e) {
                            return t.offset - e.offset
                        });
                        for (var A = T.length, I = [], C = [], L = 0; L < A; L++) {
                            var P = T[L], k = R(P.color);
                            C.push(P.offset * l + s + " " + k[0]), 0 !== L && L !== A - 1 || I.push(k)
                        }
                        if (A >= 2) {
                            var D = I[0][0], O = I[1][0], z = I[0][1] * e.opacity, N = I[1][1] * e.opacity;
                            t.type = r, t.method = "none", t.focus = "100%", t.angle = o, t.color = D, t.color2 = O, t.colors = C.join(","), t.opacity = N, t.opacity2 = z
                        }
                        "radial" === r && (t.focusposition = a.join(","))
                    } else E(t, n, e.opacity)
                }, B = function (t, e) {
                    null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof f || E(t, e.stroke, e.opacity)
                }, V = function (t, e, i, n) {
                    var r = "fill" == e, o = t.getElementsByTagName(e)[0];
                    null != i[e] && "none" !== i[e] && (r || !r && i.lineWidth) ? (t[r ? "filled" : "stroked"] = "true", i[e] instanceof f && D(t, o), o || (o = p.createNode(e)), r ? N(o, i, n) : B(o, i), k(t, o)) : (t[r ? "filled" : "stroked"] = "false", D(t, o))
                }, F = [[], [], []], G = function (t, e) {
                    var i, n, r, a, s, l, h = o.M, u = o.C, c = o.L, d = o.A, f = o.Q, p = [];
                    for (a = 0; a < t.length;) {
                        switch (r = t[a++], n = "", i = 0, r) {
                            case h:
                                n = " m ", i = 1, s = t[a++], l = t[a++], F[0][0] = s, F[0][1] = l;
                                break;
                            case c:
                                n = " l ", i = 1, s = t[a++], l = t[a++], F[0][0] = s, F[0][1] = l;
                                break;
                            case f:
                            case u:
                                n = " c ", i = 3;
                                var v, _, M = t[a++], A = t[a++], I = t[a++], C = t[a++];
                                r === f ? (v = I, _ = C, I = (I + 2 * M) / 3, C = (C + 2 * A) / 3, M = (s + 2 * M) / 3, A = (l + 2 * A) / 3) : (v = t[a++], _ = t[a++]), F[0][0] = M, F[0][1] = A, F[1][0] = I, F[1][1] = C, F[2][0] = v, F[2][1] = _, s = v, l = _;
                                break;
                            case d:
                                var L = 0, P = 0, k = 1, D = 1, O = 0;
                                e && (L = e[4], P = e[5], k = m(e[0] * e[0] + e[1] * e[1]), D = m(e[2] * e[2] + e[3] * e[3]), O = Math.atan2(-e[1] / D, e[0] / k));
                                var z = t[a++], E = t[a++], R = t[a++], N = t[a++], B = t[a++] + O, V = t[a++] + B + O;
                                a++;
                                var G = t[a++], H = z + y(B) * R, W = E + x(B) * N, M = z + y(V) * R, A = E + x(V) * N, Z = G ? " wa " : " at ";
                                Math.abs(H - M) < 1e-10 && (Math.abs(V - B) > .01 ? G && (H += 270 / S) : Math.abs(W - E) < 1e-10 ? G && H < z || !G && H > z ? A -= 270 / S : A += 270 / S : G && W < E || !G && W > E ? M += 270 / S : M -= 270 / S), p.push(Z, g(((z - R) * k + L) * S - T), w, g(((E - N) * D + P) * S - T), w, g(((z + R) * k + L) * S - T), w, g(((E + N) * D + P) * S - T), w, g((H * k + L) * S - T), w, g((W * D + P) * S - T), w, g((M * k + L) * S - T), w, g((A * D + P) * S - T)), s = M, l = A;
                                break;
                            case o.R:
                                var q = F[0], j = F[1];
                                q[0] = t[a++], q[1] = t[a++], j[0] = q[0] + t[a++], j[1] = q[1] + t[a++], e && (b(q, q, e), b(j, j, e)), q[0] = g(q[0] * S - T), j[0] = g(j[0] * S - T), q[1] = g(q[1] * S - T), j[1] = g(j[1] * S - T), p.push(" m ", q[0], w, q[1], " l ", j[0], w, q[1], " l ", j[0], w, j[1], " l ", q[0], w, j[1]);
                                break;
                            case o.Z:
                                p.push(" x ")
                        }
                        if (i > 0) {
                            p.push(n);
                            for (var X = 0; X < i; X++) {
                                var U = F[X];
                                e && b(U, U, e), p.push(g(U[0] * S - T), w, g(U[1] * S - T), X < i - 1 ? w : "")
                            }
                        }
                    }
                    return p.join("")
                };
                d.prototype.brushVML = function (t) {
                    var e = this.style, i = this._vmlEl;
                    i || (i = p.createNode("shape"), C(i), this._vmlEl = i), V(i, "fill", e, this), V(i, "stroke", e, this);
                    var n = this.transform, r = null != n, o = i.getElementsByTagName("stroke")[0];
                    if (o) {
                        var a = e.lineWidth;
                        if (r && !e.strokeNoScale) {
                            var s = n[0] * n[3] - n[1] * n[2];
                            a *= m(v(s))
                        }
                        o.weight = a + "px"
                    }
                    var l = this.path;
                    this.__dirtyPath && (l.beginPath(), this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1), i.path = G(l.data, this.transform), i.style.zIndex = O(this.zlevel, this.z, this.z2), k(t, i), e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
                }, d.prototype.onRemove = function (t) {
                    D(t, this._vmlEl), this.removeRectText(t)
                }, d.prototype.onAdd = function (t) {
                    k(t, this._vmlEl), this.appendRectText(t)
                };
                var H = function (t) {
                    return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
                };
                u.prototype.brushVML = function (t) {
                    var e, i, n = this.style, r = n.image;
                    if (H(r)) {
                        var o = r.src;
                        if (o === this._imageSrc)e = this._imageWidth, i = this._imageHeight; else {
                            var a = r.runtimeStyle, s = a.width, l = a.height;
                            a.width = "auto", a.height = "auto", e = r.width, i = r.height, a.width = s, a.height = l, this._imageSrc = o, this._imageWidth = e, this._imageHeight = i
                        }
                        r = o
                    } else r === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
                    if (r) {
                        var h = n.x || 0, u = n.y || 0, c = n.width, d = n.height, f = n.sWidth, v = n.sHeight, y = n.sx || 0, x = n.sy || 0, S = f && v, T = this._vmlEl;
                        T || (T = p.doc.createElement("div"), C(T), this._vmlEl = T);
                        var A, I = T.style, L = !1, P = 1, D = 1;
                        if (this.transform && (A = this.transform, P = m(A[0] * A[0] + A[1] * A[1]), D = m(A[2] * A[2] + A[3] * A[3]), L = A[1] || A[2]), L) {
                            var z = [h, u], E = [h + c, u], R = [h, u + d], N = [h + c, u + d];
                            b(z, z, A), b(E, E, A), b(R, R, A), b(N, N, A);
                            var B = _(z[0], E[0], R[0], N[0]), V = _(z[1], E[1], R[1], N[1]), F = [];
                            F.push("M11=", A[0] / P, w, "M12=", A[2] / D, w, "M21=", A[1] / P, w, "M22=", A[3] / D, w, "Dx=", g(h * P + A[4]), w, "Dy=", g(u * D + A[5])), I.padding = "0 " + g(B) + "px " + g(V) + "px 0", I.filter = M + ".Matrix(" + F.join("") + ", SizingMethod=clip)"
                        } else A && (h = h * P + A[4], u = u * D + A[5]), I.filter = "", I.left = g(h) + "px", I.top = g(u) + "px";
                        var G = this._imageEl, W = this._cropEl;
                        G || (G = p.doc.createElement("div"), this._imageEl = G);
                        var Z = G.style;
                        if (S) {
                            if (e && i)Z.width = g(P * e * c / f) + "px", Z.height = g(D * i * d / v) + "px"; else {
                                var q = new Image, j = this;
                                q.onload = function () {
                                    q.onload = null, e = q.width, i = q.height, Z.width = g(P * e * c / f) + "px", Z.height = g(D * i * d / v) + "px", j._imageWidth = e, j._imageHeight = i, j._imageSrc = r
                                }, q.src = r
                            }
                            W || (W = p.doc.createElement("div"), W.style.overflow = "hidden", this._cropEl = W);
                            var X = W.style;
                            X.width = g((c + y * c / f) * P), X.height = g((d + x * d / v) * D), X.filter = M + ".Matrix(Dx=" + -y * c / f * P + ",Dy=" + -x * d / v * D + ")", W.parentNode || T.appendChild(W), G.parentNode != W && W.appendChild(G)
                        } else Z.width = g(P * c) + "px", Z.height = g(D * d) + "px", T.appendChild(G), W && W.parentNode && (T.removeChild(W), this._cropEl = null);
                        var U = "", Y = n.opacity;
                        Y < 1 && (U += ".Alpha(opacity=" + g(100 * Y) + ") "), U += M + ".AlphaImageLoader(src=" + r + ", SizingMethod=scale)", Z.filter = U, T.style.zIndex = O(this.zlevel, this.z, this.z2), k(t, T), n.text && this.drawRectText(t, this.getBoundingRect())
                    }
                }, u.prototype.onRemove = function (t) {
                    D(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
                }, u.prototype.onAdd = function (t) {
                    k(t, this._vmlEl), this.appendRectText(t)
                };
                var W, Z = "normal", q = {}, j = 0, X = 100, U = document.createElement("div"), Y = function (t) {
                    var e = q[t];
                    if (!e) {
                        j > X && (j = 0, q = {});
                        var i, n = U.style;
                        try {
                            n.font = t, i = n.fontFamily.split(",")[0]
                        } catch (r) {
                        }
                        e = {
                            style: n.fontStyle || Z,
                            variant: n.fontVariant || Z,
                            weight: n.fontWeight || Z,
                            size: 0 | parseFloat(n.fontSize || 12),
                            family: i || "Microsoft YaHei"
                        }, q[t] = e, j++
                    }
                    return e
                };
                s.measureText = function (t, e) {
                    var i = p.doc;
                    W || (W = i.createElement("div"), W.style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", p.doc.body.appendChild(W));
                    try {
                        W.style.font = e
                    } catch (n) {
                    }
                    return W.innerHTML = "", W.appendChild(i.createTextNode(t)), {width: W.offsetWidth}
                };
                for (var $ = new r, Q = function (t, e, i, n) {
                    var r = this.style, o = r.text;
                    if (o) {
                        var a, l, h = r.textAlign, u = Y(r.textFont), c = u.style + " " + u.variant + " " + u.weight + " " + u.size + 'px "' + u.family + '"', d = r.textBaseline, f = r.textVerticalAlign;
                        i = i || s.getBoundingRect(o, c, h, d);
                        var m = this.transform;
                        if (m && !n && ($.copy(e), $.applyTransform(m), e = $), n)a = e.x, l = e.y; else {
                            var v = r.textPosition, y = r.textDistance;
                            if (v instanceof Array)a = e.x + z(v[0], e.width), l = e.y + z(v[1], e.height), h = h || "left", d = d || "top"; else {
                                var x = s.adjustTextPositionOnRect(v, e, i, y);
                                a = x.x, l = x.y, h = h || x.textAlign, d = d || x.textBaseline
                            }
                        }
                        if (f) {
                            switch (f) {
                                case"middle":
                                    l -= i.height / 2;
                                    break;
                                case"bottom":
                                    l -= i.height
                            }
                            d = "top"
                        }
                        var _ = u.size;
                        switch (d) {
                            case"hanging":
                            case"top":
                                l += _ / 1.75;
                                break;
                            case"middle":
                                break;
                            default:
                                l -= _ / 2.25
                        }
                        switch (h) {
                            case"left":
                                break;
                            case"center":
                                a -= i.width / 2;
                                break;
                            case"right":
                                a -= i.width
                        }
                        var M, S, T, A = p.createNode, I = this._textVmlEl;
                        I ? (T = I.firstChild, M = T.nextSibling, S = M.nextSibling) : (I = A("line"), M = A("path"), S = A("textpath"), T = A("skew"), S.style["v-text-align"] = "left", C(I), M.textpathok = !0, S.on = !0, I.from = "0 0", I.to = "1000 0.05", k(I, T), k(I, M), k(I, S), this._textVmlEl = I);
                        var P = [a, l], D = I.style;
                        m && n ? (b(P, P, m), T.on = !0, T.matrix = m[0].toFixed(3) + w + m[2].toFixed(3) + w + m[1].toFixed(3) + w + m[3].toFixed(3) + ",0,0", T.offset = (g(P[0]) || 0) + "," + (g(P[1]) || 0), T.origin = "0 0", D.left = "0px", D.top = "0px") : (T.on = !1, D.left = g(a) + "px", D.top = g(l) + "px"), S.string = L(o);
                        try {
                            S.style.font = c
                        } catch (E) {
                        }
                        V(I, "fill", {
                            fill: n ? r.fill : r.textFill,
                            opacity: r.opacity
                        }, this), V(I, "stroke", {
                            stroke: n ? r.stroke : r.textStroke,
                            opacity: r.opacity,
                            lineDash: r.lineDash
                        }, this), I.style.zIndex = O(this.zlevel, this.z, this.z2), k(t, I)
                    }
                }, K = function (t) {
                    D(t, this._textVmlEl), this._textVmlEl = null
                }, J = function (t) {
                    k(t, this._textVmlEl)
                }, tt = [l, h, u, d, c], et = 0; et < tt.length; et++) {
                    var it = tt[et].prototype;
                    it.drawRectText = Q, it.removeRectText = K, it.appendRectText = J
                }
                c.prototype.brushVML = function (t) {
                    var e = this.style;
                    e.text ? this.drawRectText(t, {
                        x: e.x || 0,
                        y: e.y || 0,
                        width: 0,
                        height: 0
                    }, this.getBoundingRect(), !0) : this.removeRectText(t)
                }, c.prototype.onRemove = function (t) {
                    this.removeRectText(t)
                }, c.prototype.onAdd = function (t) {
                    this.appendRectText(t)
                }
            }
        }, function (t, e, i) {
            i(219), i(76).registerPainter("vml", i(218))
        }])
    });
    exports('echarts_common');
});