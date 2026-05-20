/*! For license information please see index_dae5d31e6846054fc731.js.LICENSE.txt */
"use strict";
(self.webpackChunke20230313version_fe = self.webpackChunke20230313version_fe || []).push([[826], {
    30502: function(t, e, r) {
        var n = r(9134)
          , o = (r(82526),
        r(41817),
        r(72443),
        r(92401),
        r(8722),
        r(32165),
        r(69007),
        r(16066),
        r(83510),
        r(41840),
        r(6982),
        r(32159),
        r(96649),
        r(39341),
        r(60543),
        r(9170),
        r(92222),
        r(50545),
        r(26541),
        r(43290),
        r(57327),
        r(65465),
        r(34553),
        r(84944),
        r(86535),
        r(89554),
        r(91038),
        r(26699),
        r(82772),
        r(79753),
        r(66992),
        r(69600),
        r(94986),
        r(21249),
        r(26572),
        r(85827),
        r(96644),
        r(47042),
        r(5212),
        r(2707),
        r(38706),
        r(40561),
        r(33792),
        r(99244),
        r(18264),
        r(76938),
        r(39575),
        r(16716),
        r(3843),
        r(28733),
        r(5735),
        r(96078),
        r(83710),
        r(24812),
        r(4855),
        r(68309),
        r(35837),
        r(38862),
        r(73706),
        r(51532),
        r(99752),
        r(82376),
        r(73181),
        r(23484),
        r(2388),
        r(88621),
        r(60403),
        r(84755),
        r(25438),
        r(90332),
        r(40658),
        r(40197),
        r(44914),
        r(52420),
        r(60160),
        r(60970),
        r(10408),
        r(73689),
        r(9653),
        r(93299),
        r(35192),
        r(33161),
        r(44048),
        r(78285),
        r(44363),
        r(55994),
        r(61874),
        r(9494),
        r(56977),
        r(55147),
        r(19601),
        r(78011),
        r(59595),
        r(33321),
        r(69070),
        r(35500),
        r(69720),
        r(43371),
        r(38559),
        r(38880),
        r(49337),
        r(36210),
        r(30489),
        r(43304),
        r(41825),
        r(98410),
        r(72200),
        r(47941),
        r(94869),
        r(33952),
        r(57227),
        r(60514),
        r(68304),
        r(41539),
        r(26833),
        r(54678),
        r(91058),
        r(88674),
        r(17922),
        r(34668),
        r(17727),
        r(36535),
        r(12419),
        r(69596),
        r(52586),
        r(74819),
        r(95683),
        r(39361),
        r(51037),
        r(5898),
        r(67556),
        r(14361),
        r(83593),
        r(39532),
        r(81299),
        r(24603),
        r(74916),
        r(92087),
        r(88386),
        r(77601),
        r(39714),
        r(70189),
        r(79841),
        r(27852),
        r(94953),
        r(32023),
        r(78783),
        r(4723),
        r(76373),
        r(66528),
        r(83112),
        r(38992),
        r(82481),
        r(15306),
        r(68757),
        r(64765),
        r(23123),
        r(23157),
        r(73210),
        r(48702),
        r(55674),
        r(15218),
        r(74475),
        r(57929),
        r(50915),
        r(29253),
        r(42125),
        r(78830),
        r(58734),
        r(29254),
        r(37268),
        r(7397),
        r(60086),
        r(80623),
        r(44197),
        r(76495),
        r(87145),
        r(35109),
        r(65125),
        r(82472),
        r(49743),
        r(8255),
        r(29135),
        r(92990),
        r(18927),
        r(33105),
        r(35035),
        r(74345),
        r(7174),
        r(32846),
        r(98145),
        r(44731),
        r(77209),
        r(96319),
        r(58867),
        r(37789),
        r(33739),
        r(95206),
        r(29368),
        r(14483),
        r(12056),
        r(3462),
        r(30678),
        r(27462),
        r(33824),
        r(55021),
        r(12974),
        r(15016),
        r(4129),
        r(38478),
        r(54747),
        r(33948),
        r(84633),
        r(85844),
        r(32564),
        r(60285),
        r(83753),
        r(41637),
        r(35666),
        r(54628))
          , i = r.n(o)
          , a = r(28985)
          , c = r.n(a)
          , u = r(3124)
          , l = r.n(u)
          , s = r(10311)
          , f = r.n(s)
          , p = r(26820)
          , h = r.n(p)
          , d = r(46356)
          , v = r.n(d)
          , y = "hkrpg_global"
          , b = {
            scrollPanel: {
                scrollingX: !1,
                scrollingY: !0
            },
            rail: {
                background: "#CCCCCC",
                size: "0.03rem"
            },
            bar: {
                size: "0.03rem",
                background: "#867656",
                keepShow: !0
            }
        }
          , m = n.QS.isBili
          , g = n.QS.sign_type && n.QS.auth_appid && n.QS.authkey_ver && n.QS.authkey
          , w = function() {
            var t = 2;
            return g ? t = 3 : n.IS_BBS && (t = 1),
            t
        }
          , A = {
            Home: 1,
            Ava: 2,
            Light: 3,
            Act: 4,
            Scene: 5,
            Play: 8
        }
          , O = ["silwolf", "luocha", "yukong"]
          , k = {
            effect: "fade",
            speed: 600,
            simulateTouch: !1,
            allowTouchMove: !1,
            fadeEffect: {
                crossFade: !0
            }
        }
          , S = function() {
            var t = f().prototype.$getLang()
              , e = "lang=".concat(t, "&game_biz=").concat(y, "&mhy_presentation_style=fullscreen&mhy_auth_required=true&mhy_landscape=true&mhy_hide_status_bar=true").concat(m ? "&isBili=1" : "");
            return "".concat(window.location.origin + window.location.pathname, "?").concat(e)
        }
          , E = r(69182)
          , x = r(59380)
          , j = r.n(x)
          , L = r(68359)
          , I = r.n(L)
          , T = r(32628)
          , P = r.n(T)
          , C = r(41699)
          , G = r.n(C);
        function B(t) {
            return B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            B(t)
        }
        function R() {
            R = function() {
                return t
            }
            ;
            var t = {}
              , e = Object.prototype
              , r = e.hasOwnProperty
              , n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
              , o = "function" == typeof Symbol ? Symbol : {}
              , i = o.iterator || "@@iterator"
              , a = o.asyncIterator || "@@asyncIterator"
              , c = o.toStringTag || "@@toStringTag";
            function u(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, e, r) {
                    return t[e] = r
                }
            }
            function l(t, e, r, o) {
                var i = e && e.prototype instanceof p ? e : p
                  , a = Object.create(i.prototype)
                  , c = new E(o || []);
                return n(a, "_invoke", {
                    value: A(t, r, c)
                }),
                a
            }
            function s(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var f = {};
            function p() {}
            function h() {}
            function d() {}
            var v = {};
            u(v, i, (function() {
                return this
            }
            ));
            var y = Object.getPrototypeOf
              , b = y && y(y(x([])));
            b && b !== e && r.call(b, i) && (v = b);
            var m = d.prototype = p.prototype = Object.create(v);
            function g(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    u(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function w(t, e) {
                function o(n, i, a, c) {
                    var u = s(t[n], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , f = l.value;
                        return f && "object" == B(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            o("next", t, a, c)
                        }
                        ), (function(t) {
                            o("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            l.value = t,
                            a(l)
                        }
                        ), (function(t) {
                            return o("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                n(this, "_invoke", {
                    value: function(t, r) {
                        function n() {
                            return new e((function(e, n) {
                                o(t, r, e, n)
                            }
                            ))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                })
            }
            function A(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n)
                        throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                            var c = O(a, r);
                            if (c) {
                                if (c === f)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n)
                                throw n = "completed",
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = s(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield",
                            u.arg === f)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed",
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }
            function O(t, e) {
                var r = e.method
                  , n = t.iterator[r];
                if (void 0 === n)
                    return e.delegate = null,
                    "throw" === r && t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    O(t, e),
                    "throw" === e.method) || "return" !== r && (e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    f;
                var o = s(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    f;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                f) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                f)
            }
            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(k, this),
                this.reset(!0)
            }
            function x(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , o = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: j
                }
            }
            function j() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = d,
            n(m, "constructor", {
                value: d,
                configurable: !0
            }),
            n(d, "constructor", {
                value: h,
                configurable: !0
            }),
            h.displayName = u(d, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                u(t, c, "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            g(w.prototype),
            u(w.prototype, a, (function() {
                return this
            }
            )),
            t.AsyncIterator = w,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new w(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            g(m),
            u(m, c, "Generator"),
            u(m, i, (function() {
                return this
            }
            )),
            u(m, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            t.values = x,
            E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(r, n) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = r,
                        n && (e.method = "next",
                        e.arg = void 0),
                        !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    f) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                S(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: x(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            t
        }
        function W(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function z(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        W(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        W(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var N = !(!window.ActiveXObject && !("ActiveXObject"in window))
          , V = function(t) {
            return t > 9 ? t : "0".concat(t)
        }
          , Z = function() {
            var t = z(R().mark((function t() {
                return R().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", new Promise(function() {
                                var t = z(R().mark((function t(e) {
                                    var r, o;
                                    return R().wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                if (t.prev = 0,
                                                r = "",
                                                !n.IS_BBS) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.next = 5,
                                                f().prototype.$bbsApp.getHTTPRequestHeaders();
                                            case 5:
                                                0 === (o = t.sent).retcode && o.data["x-rpc-device_id"] && (r = o.data["x-rpc-device_id"]),
                                                t.next = 12;
                                                break;
                                            case 9:
                                                return t.next = 11,
                                                G().getVisitorId();
                                            case 11:
                                                r = t.sent;
                                            case 12:
                                                e(r),
                                                t.next = 18;
                                                break;
                                            case 15:
                                                t.prev = 15,
                                                t.t0 = t.catch(0),
                                                e("");
                                            case 18:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t, null, [[0, 15]])
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }()
          , D = function(t) {
            console.log("scroll", t.target.innerHTML),
            t.stopPropagation()
        }
          , H = r(9669)
          , M = ["params"]
          , F = ["errorMessageHandler", "toastPending", "toastError", "method"];
        function Q() {
            Q = function() {
                return t
            }
            ;
            var t = {}
              , e = Object.prototype
              , r = e.hasOwnProperty
              , n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
              , o = "function" == typeof Symbol ? Symbol : {}
              , i = o.iterator || "@@iterator"
              , a = o.asyncIterator || "@@asyncIterator"
              , c = o.toStringTag || "@@toStringTag";
            function u(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, e, r) {
                    return t[e] = r
                }
            }
            function l(t, e, r, o) {
                var i = e && e.prototype instanceof p ? e : p
                  , a = Object.create(i.prototype)
                  , c = new E(o || []);
                return n(a, "_invoke", {
                    value: A(t, r, c)
                }),
                a
            }
            function s(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var f = {};
            function p() {}
            function h() {}
            function d() {}
            var v = {};
            u(v, i, (function() {
                return this
            }
            ));
            var y = Object.getPrototypeOf
              , b = y && y(y(x([])));
            b && b !== e && r.call(b, i) && (v = b);
            var m = d.prototype = p.prototype = Object.create(v);
            function g(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    u(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function w(t, e) {
                function o(n, i, a, c) {
                    var u = s(t[n], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , f = l.value;
                        return f && "object" == Y(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            o("next", t, a, c)
                        }
                        ), (function(t) {
                            o("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            l.value = t,
                            a(l)
                        }
                        ), (function(t) {
                            return o("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                n(this, "_invoke", {
                    value: function(t, r) {
                        function n() {
                            return new e((function(e, n) {
                                o(t, r, e, n)
                            }
                            ))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                })
            }
            function A(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n)
                        throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                            var c = O(a, r);
                            if (c) {
                                if (c === f)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n)
                                throw n = "completed",
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = s(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield",
                            u.arg === f)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed",
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }
            function O(t, e) {
                var r = e.method
                  , n = t.iterator[r];
                if (void 0 === n)
                    return e.delegate = null,
                    "throw" === r && t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    O(t, e),
                    "throw" === e.method) || "return" !== r && (e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    f;
                var o = s(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    f;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                f) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                f)
            }
            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(k, this),
                this.reset(!0)
            }
            function x(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , o = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: j
                }
            }
            function j() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = d,
            n(m, "constructor", {
                value: d,
                configurable: !0
            }),
            n(d, "constructor", {
                value: h,
                configurable: !0
            }),
            h.displayName = u(d, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                u(t, c, "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            g(w.prototype),
            u(w.prototype, a, (function() {
                return this
            }
            )),
            t.AsyncIterator = w,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new w(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            g(m),
            u(m, c, "Generator"),
            u(m, i, (function() {
                return this
            }
            )),
            u(m, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            t.values = x,
            E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(r, n) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = r,
                        n && (e.method = "next",
                        e.arg = void 0),
                        !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    f) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                S(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: x(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            t
        }
        function Y(t) {
            return Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Y(t)
        }
        function U(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function J(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function X(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? J(Object(r), !0).forEach((function(e) {
                    q(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function q(t, e, r) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" !== Y(t) || null === t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, "string");
                        if ("object" !== Y(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" === Y(e) ? e : String(e)
            }(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function K(t, e) {
            if (null == t)
                return {};
            var r, n, o = function(t, e) {
                if (null == t)
                    return {};
                var r, n, o = {}, i = Object.keys(t);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    e.indexOf(r) >= 0 || (o[r] = t[r]);
                return o
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
            }
            return o
        }
        var _ = null
          , $ = r.n(H)().create({
            baseURL: "./sg-public-api.hoyoverse.com",
            withCredentials: !0
        });
        $.interceptors.request.use((function(t) {
            var e = t.params
              , r = void 0 === e ? {} : e;
            return X(X({}, K(t, M)), {}, {
                params: X(X({
                    t: N ? Date.now() : void 0
                }, n.QS.authkey ? n.QS : {}), r)
            })
        }
        ));
        var tt = 0;
        function et() {
            tt > 0 && 0 == (tt -= 1) && _ && a.Toast.clear(_)
        }
        function rt() {
            var t;
            return t = Q().mark((function t(e) {
                var r, n, o, i, c, u, l, s, f, p, h, d, v, y, b, m = arguments;
                return Q().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return o = (n = m.length > 1 && void 0 !== m[1] ? m[1] : {}).errorMessageHandler,
                            i = n.toastPending,
                            c = void 0 !== i && i,
                            u = n.toastError,
                            l = void 0 === u || u,
                            s = n.method,
                            f = void 0 === s ? "get" : s,
                            p = K(n, F),
                            h = m.length > 2 && void 0 !== m[2] ? m[2] : f,
                            (d = !0 === c ? {
                                showContent: !1,
                                opacity: 0,
                                duration: 0
                            } : !1 === c ? void 0 : "object" === Y(c) ? X({
                                duration: null !== (r = c.duration) && void 0 !== r ? r : 0
                            }, c) : {
                                duration: 0,
                                message: c
                            }) && (g = d,
                            0 === tt && (_ = a.Toast.loading(g)),
                            tt += 1),
                            t.prev = 4,
                            t.t0 = ot,
                            t.next = 8,
                            $.request(X(X({}, p), {}, {
                                url: e,
                                method: h
                            }));
                        case 8:
                            return t.t1 = t.sent,
                            t.t2 = {
                                showError: !!l
                            },
                            v = (0,
                            t.t0)(t.t1, t.t2),
                            d && et(),
                            t.abrupt("return", v);
                        case 15:
                            throw t.prev = 15,
                            t.t3 = t.catch(4),
                            d && et(),
                            l && t.t3[ut] && (y = o ? o(t.t3.data.retcode, t.t3.data.message) : t.t3.data.message || "Network Error",
                            (b = y && X(X({
                                duration: 3e3,
                                showContent: !0
                            }, "boolean" == typeof l ? {} : l), {}, {
                                message: y
                            })) && (0,
                            a.Toast)(b)),
                            t.t3;
                        case 20:
                        case "end":
                            return t.stop()
                        }
                    var g
                }
                ), t, null, [[4, 15]])
            }
            )),
            rt = function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        U(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        U(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
            ,
            rt.apply(this, arguments)
        }
        var nt = Symbol("needAttention");
        function ot(t) {
            var e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).showError
              , r = void 0 !== e && e;
            if ("function" == typeof t.then)
                return t.then((function(t) {
                    return ot(t)
                }
                ));
            var n = t;
            if (0 !== n.data.retcode)
                throw r && (n[nt] = !0),
                n;
            return n.data.data
        }
        var it = Symbol("isRequestError")
          , at = Symbol("isNetworkError")
          , ct = Symbol("isResponseError")
          , ut = Symbol("isAxiosResponse");
        $.interceptors.request.use(void 0, (function(t) {
            throw t[it] = !0,
            t
        }
        )),
        $.interceptors.response.use((function(t) {
            return t[ut] = !0,
            t
        }
        ), (function(t) {
            throw t.request && t.response ? t[ct] = !0 : t[at] = !0,
            t
        }
        ));
        var lt = function(t) {
            return rt.apply(this, arguments)
        }
          , st = r(54698)
          , ft = r.n(st);
        function pt(t) {
            return pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            pt(t)
        }
        var ht = ["params"];
        function dt() {
            dt = function() {
                return t
            }
            ;
            var t = {}
              , e = Object.prototype
              , r = e.hasOwnProperty
              , n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
              , o = "function" == typeof Symbol ? Symbol : {}
              , i = o.iterator || "@@iterator"
              , a = o.asyncIterator || "@@asyncIterator"
              , c = o.toStringTag || "@@toStringTag";
            function u(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, e, r) {
                    return t[e] = r
                }
            }
            function l(t, e, r, o) {
                var i = e && e.prototype instanceof p ? e : p
                  , a = Object.create(i.prototype)
                  , c = new E(o || []);
                return n(a, "_invoke", {
                    value: A(t, r, c)
                }),
                a
            }
            function s(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var f = {};
            function p() {}
            function h() {}
            function d() {}
            var v = {};
            u(v, i, (function() {
                return this
            }
            ));
            var y = Object.getPrototypeOf
              , b = y && y(y(x([])));
            b && b !== e && r.call(b, i) && (v = b);
            var m = d.prototype = p.prototype = Object.create(v);
            function g(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    u(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function w(t, e) {
                function o(n, i, a, c) {
                    var u = s(t[n], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , f = l.value;
                        return f && "object" == pt(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            o("next", t, a, c)
                        }
                        ), (function(t) {
                            o("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            l.value = t,
                            a(l)
                        }
                        ), (function(t) {
                            return o("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                n(this, "_invoke", {
                    value: function(t, r) {
                        function n() {
                            return new e((function(e, n) {
                                o(t, r, e, n)
                            }
                            ))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                })
            }
            function A(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n)
                        throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                            var c = O(a, r);
                            if (c) {
                                if (c === f)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n)
                                throw n = "completed",
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = s(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield",
                            u.arg === f)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed",
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }
            function O(t, e) {
                var r = e.method
                  , n = t.iterator[r];
                if (void 0 === n)
                    return e.delegate = null,
                    "throw" === r && t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    O(t, e),
                    "throw" === e.method) || "return" !== r && (e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    f;
                var o = s(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    f;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                f) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                f)
            }
            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(k, this),
                this.reset(!0)
            }
            function x(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , o = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: j
                }
            }
            function j() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = d,
            n(m, "constructor", {
                value: d,
                configurable: !0
            }),
            n(d, "constructor", {
                value: h,
                configurable: !0
            }),
            h.displayName = u(d, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                u(t, c, "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            g(w.prototype),
            u(w.prototype, a, (function() {
                return this
            }
            )),
            t.AsyncIterator = w,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new w(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            g(m),
            u(m, c, "Generator"),
            u(m, i, (function() {
                return this
            }
            )),
            u(m, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            t.values = x,
            E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(r, n) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = r,
                        n && (e.method = "next",
                        e.arg = void 0),
                        !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    f) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                S(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: x(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            t
        }
        function vt(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function yt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? vt(Object(r), !0).forEach((function(e) {
                    bt(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : vt(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function bt(t, e, r) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" !== pt(t) || null === t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, "string");
                        if ("object" !== pt(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" === pt(e) ? e : String(e)
            }(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function mt(t, e) {
            if (null == t)
                return {};
            var r, n, o = function(t, e) {
                if (null == t)
                    return {};
                var r, n, o = {}, i = Object.keys(t);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    e.indexOf(r) >= 0 || (o[r] = t[r]);
                return o
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
            }
            return o
        }
        function gt(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        f().use(i()),
        f().use(c()),
        f().use(h()),
        f().use(l(), {
            schemaName: n.IS_SEA ? "hoyolab" : "mihoyobbs"
        }),
        f().use(v(), {
            fullScreen: "rawClip",
            designWidth: 2400,
            designHeight: 1080,
            minRatio: 1.75,
            forceHorizon: !0,
            setCanvasBG: !0,
            el: "#app"
        }),
        window.document.documentElement.setAttribute("area", n.IS_SEA ? "sea" : "cn"),
        window.document.documentElement.setAttribute("device", n.IS_MOB ? "mobile" : "pc"),
        f().use(ft(), {
            siteId: "G-2JBSKP4G0R"
        });
        var wt = function() {
            var t, e = (t = dt().mark((function t() {
                var e, r;
                return dt().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            (0,
                            n.getLang)(n.IS_SEA, y);
                        case 2:
                            return e = t.sent,
                            f().use(I(), {
                                appId: "537",
                                dataBelong: ["hkrpg"],
                                env: "production",
                                type: "event",
                                isSea: n.IS_SEA,
                                pagename: "首页",
                                pageExtrainfo: {
                                    is_App: n.IS_BBS ? "bbs" : n.IS_MOB ? "m" : "pc"
                                },
                                userExtrainfo: {
                                    lang: e
                                }
                            }),
                            f().prototype.$trackEvent = function(t, e, r, o, i) {
                                f().prototype.$mia.trackEvent(t, e, r, o, i),
                                n.IS_SEA && f().prototype.$ga.trackEvent(t, e, r, o)
                            }
                            ,
                            t.prev = 5,
                            t.next = 8,
                            (0,
                            E.initAppI18n)(f(), {
                                appId: "m20230313hy24fjgw74",
                                gameBiz: y,
                                env: "sea",
                                lang: e,
                                zone: n.IS_SEA ? "s3" : "aliOss"
                            });
                        case 8:
                            return document.title = f().prototype.$getI18nWord("page_title"),
                            (0,
                            T.initWechatShare)({
                                biz: "hkrpg",
                                title: f().prototype.$getI18nWord("share_title"),
                                link: S(),
                                desc: f().prototype.$getI18nWord("share_desc"),
                                img_url: f().prototype.$getI18nWord("wechart_share_img")
                            }),
                            t.next = 12,
                            Z();
                        case 12:
                            r = t.sent,
                            console.log(r),
                            $.interceptors.request.use((function(t) {
                                var e = t.params
                                  , o = void 0 === e ? {} : e;
                                return yt(yt({}, mt(t, ht)), {}, {
                                    params: yt(yt(yt({
                                        t: n.isIE ? Date.now() : void 0
                                    }, n.QS.authkey ? n.QS : {}), o), {}, {
                                        device_id: r
                                    })
                                })
                            }
                            )),
                            t.next = 20;
                            break;
                        case 17:
                            t.prev = 17,
                            t.t0 = t.catch(5),
                            j()({
                                type: "loadErr",
                                lang: e
                            });
                        case 20:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, null, [[5, 17]])
            }
            )),
            function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        gt(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        gt(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
            );
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , At = wt
          , Ot = r(56739)
          , kt = r(34271)
          , St = r(44070)
          , Et = r.n(St)
          , xt = r(23464)
          , jt = r.n(xt)
          , Lt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAAkFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+WABnwAAAAL3RSTlMAHv3MLbuLiAUU6fLUYg8K799e3FwX8+vYlG1fPyQaB/dWULinnWVIDePBsTI4MEVDVRkAAAGaSURBVEjHvZbZloIwDIZpcWjZBFFkR9zHZabv/3aTtkfrXDX1wlwl5/CdhPzlL56M0sNG+Ej4/UiQDAl2Osn6/fSFo8IgjzRF/EkIFFWyWIj8rjolQqAowiIh6EW3+vVRVBjEwNSruS5nGGpkFTCLlEOOpcYgooImBfRBUyFbwwPLVQY5liKB3MEy3UCOpcogp0IkHcyGosxsiw52gKLMbHUH74OkjD7fkGOpkeVKH0jRFGFKH+hjowbDqNmUPjbq9qw1c4K92ajp8Cw7WLY6OzaqagZTtvGigHNgpQLyWp7SDG0eG0Jmupx76OiPt0PhucWwn+hU9W5QmguIoxvUUgkduBP0Iw/PuuWOrZaJD3q5Bd+etwT/eHnWFM+UXj0GDdll+6rXFem9laHOe4r1Xv9ZN9Tioubbbj0H7yVveW/s7r1Mey938t7qk96bOnuvqIv5G97L0d5r9LF7L/mvD62lPliKE31vS+9FU2MTSX3k/wGGupZqOLk3nPcCRdc7bQe5vrdRVP4wjlSdaxzVlI+8R1vVbPA+Gn82DjofHj4l4QAAAABJRU5ErkJggg==";
        function It(t) {
            return It = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            It(t)
        }
        function Tt(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Pt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Tt(Object(r), !0).forEach((function(e) {
                    Ct(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Tt(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function Ct(t, e, r) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" !== It(t) || null === t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, "string");
                        if ("object" !== It(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(t);
                return "symbol" === It(e) ? e : String(e)
            }(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Gt() {
            Gt = function() {
                return t
            }
            ;
            var t = {}
              , e = Object.prototype
              , r = e.hasOwnProperty
              , n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
              , o = "function" == typeof Symbol ? Symbol : {}
              , i = o.iterator || "@@iterator"
              , a = o.asyncIterator || "@@asyncIterator"
              , c = o.toStringTag || "@@toStringTag";
            function u(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, e, r) {
                    return t[e] = r
                }
            }
            function l(t, e, r, o) {
                var i = e && e.prototype instanceof p ? e : p
                  , a = Object.create(i.prototype)
                  , c = new E(o || []);
                return n(a, "_invoke", {
                    value: A(t, r, c)
                }),
                a
            }
            function s(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var f = {};
            function p() {}
            function h() {}
            function d() {}
            var v = {};
            u(v, i, (function() {
                return this
            }
            ));
            var y = Object.getPrototypeOf
              , b = y && y(y(x([])));
            b && b !== e && r.call(b, i) && (v = b);
            var m = d.prototype = p.prototype = Object.create(v);
            function g(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    u(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function w(t, e) {
                function o(n, i, a, c) {
                    var u = s(t[n], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , f = l.value;
                        return f && "object" == It(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            o("next", t, a, c)
                        }
                        ), (function(t) {
                            o("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            l.value = t,
                            a(l)
                        }
                        ), (function(t) {
                            return o("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                n(this, "_invoke", {
                    value: function(t, r) {
                        function n() {
                            return new e((function(e, n) {
                                o(t, r, e, n)
                            }
                            ))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                })
            }
            function A(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n)
                        throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                            var c = O(a, r);
                            if (c) {
                                if (c === f)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n)
                                throw n = "completed",
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = s(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield",
                            u.arg === f)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed",
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }
            function O(t, e) {
                var r = e.method
                  , n = t.iterator[r];
                if (void 0 === n)
                    return e.delegate = null,
                    "throw" === r && t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    O(t, e),
                    "throw" === e.method) || "return" !== r && (e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    f;
                var o = s(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    f;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                f) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                f)
            }
            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(k, this),
                this.reset(!0)
            }
            function x(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , o = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: j
                }
            }
            function j() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = d,
            n(m, "constructor", {
                value: d,
                configurable: !0
            }),
            n(d, "constructor", {
                value: h,
                configurable: !0
            }),
            h.displayName = u(d, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                u(t, c, "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            g(w.prototype),
            u(w.prototype, a, (function() {
                return this
            }
            )),
            t.AsyncIterator = w,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new w(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            g(m),
            u(m, c, "Generator"),
            u(m, i, (function() {
                return this
            }
            )),
            u(m, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            t.values = x,
            E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(r, n) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = r,
                        n && (e.method = "next",
                        e.arg = void 0),
                        !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    f) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                S(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: x(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            t
        }
        function Bt(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function Rt(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        Bt(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        Bt(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var Wt = function() {
            var t = Rt(Gt().mark((function t() {
                var e, r, n = arguments;
                return Gt().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                            t.next = 3,
                            lt("/event/merlin_v2/v3/flow/run/".concat(y, "/rpg_version_page/2"), e, "get");
                        case 3:
                            return r = t.sent,
                            t.abrupt("return", r);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }()
          , zt = function() {
            var t = Rt(Gt().mark((function t() {
                var e, r, n = arguments;
                return Gt().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                            t.next = 3,
                            lt("/event/merlin_v2/v3/flow/run/".concat(y, "/rpg_version_page/1"), e, "post");
                        case 3:
                            return r = t.sent,
                            t.abrupt("return", r);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }()
          , Nt = function() {
            var t = Rt(Gt().mark((function t() {
                var e, r, n = arguments;
                return Gt().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return e = n.length > 0 && void 0 !== n[0] ? n[0] : {},
                            t.next = 3,
                            lt("/flow/run/".concat(y, "/rpg_version_page_out/3"), Pt(Pt({}, e), {}, {
                                baseURL: "./sg-public-api.hoyoverse.com/event/merlin_v2/v2"
                            }), "get");
                        case 3:
                            return r = t.sent,
                            t.abrupt("return", r);
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }();
        function Vt(t) {
            return Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Vt(t)
        }
        function Zt() {
            Zt = function() {
                return t
            }
            ;
            var t = {}
              , e = Object.prototype
              , r = e.hasOwnProperty
              , n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
              , o = "function" == typeof Symbol ? Symbol : {}
              , i = o.iterator || "@@iterator"
              , a = o.asyncIterator || "@@asyncIterator"
              , c = o.toStringTag || "@@toStringTag";
            function u(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, e, r) {
                    return t[e] = r
                }
            }
            function l(t, e, r, o) {
                var i = e && e.prototype instanceof p ? e : p
                  , a = Object.create(i.prototype)
                  , c = new E(o || []);
                return n(a, "_invoke", {
                    value: A(t, r, c)
                }),
                a
            }
            function s(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var f = {};
            function p() {}
            function h() {}
            function d() {}
            var v = {};
            u(v, i, (function() {
                return this
            }
            ));
            var y = Object.getPrototypeOf
              , b = y && y(y(x([])));
            b && b !== e && r.call(b, i) && (v = b);
            var m = d.prototype = p.prototype = Object.create(v);
            function g(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    u(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function w(t, e) {
                function o(n, i, a, c) {
                    var u = s(t[n], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , f = l.value;
                        return f && "object" == Vt(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            o("next", t, a, c)
                        }
                        ), (function(t) {
                            o("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            l.value = t,
                            a(l)
                        }
                        ), (function(t) {
                            return o("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                n(this, "_invoke", {
                    value: function(t, r) {
                        function n() {
                            return new e((function(e, n) {
                                o(t, r, e, n)
                            }
                            ))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                })
            }
            function A(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n)
                        throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                            var c = O(a, r);
                            if (c) {
                                if (c === f)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n)
                                throw n = "completed",
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = s(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield",
                            u.arg === f)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed",
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }
            function O(t, e) {
                var r = e.method
                  , n = t.iterator[r];
                if (void 0 === n)
                    return e.delegate = null,
                    "throw" === r && t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    O(t, e),
                    "throw" === e.method) || "return" !== r && (e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    f;
                var o = s(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    f;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                f) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                f)
            }
            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(k, this),
                this.reset(!0)
            }
            function x(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , o = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: j
                }
            }
            function j() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = d,
            n(m, "constructor", {
                value: d,
                configurable: !0
            }),
            n(d, "constructor", {
                value: h,
                configurable: !0
            }),
            h.displayName = u(d, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                u(t, c, "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            g(w.prototype),
            u(w.prototype, a, (function() {
                return this
            }
            )),
            t.AsyncIterator = w,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new w(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            g(m),
            u(m, c, "Generator"),
            u(m, i, (function() {
                return this
            }
            )),
            u(m, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            t.values = x,
            E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(r, n) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = r,
                        n && (e.method = "next",
                        e.arg = void 0),
                        !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    f) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                S(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: x(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            t
        }
        function Dt(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function Ht(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        Dt(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        Dt(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var Mt, Ft, Qt, Yt, Ut, Jt, Xt, qt, Kt, _t, $t, te, ee, re = (0,
        o.createStore)({
            state: {
                pageInfo: {},
                isAnimating: !0,
                shareState: !0,
                volume: .5,
                curTab: "",
                modelStatus: !1
            },
            getters: {
                pageInfoInited: function(t) {
                    return Object.keys(t.pageInfo).length > 0
                }
            }
        }), ne = re.updateState, oe = re.state, ie = function() {
            var t = Ht(Zt().mark((function t() {
                var e, r, o;
                return Zt().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            (0,
                            n.getLang)(n.IS_SEA, y);
                        case 2:
                            return e = t.sent,
                            r = w(),
                            t.next = 6,
                            Wt({
                                params: {
                                    lang: e,
                                    game_biz: y,
                                    source: r
                                }
                            });
                        case 6:
                            o = t.sent,
                            oe.shareState = o.is_reward,
                            console.log(o, "get");
                        case 9:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }(), ae = function() {
            var t = Ht(Zt().mark((function t() {
                var e, r;
                return Zt().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            (0,
                            n.getLang)(n.IS_SEA, y);
                        case 2:
                            return e = t.sent,
                            r = w(),
                            t.next = 6,
                            zt({
                                params: {
                                    lang: e,
                                    game_biz: y,
                                    source: r
                                }
                            });
                        case 6:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function() {
                return t.apply(this, arguments)
            }
        }(), ce = re, ue = r(51319);
        function le(t) {
            return le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            le(t)
        }
        function se() {
            se = function() {
                return t
            }
            ;
            var t = {}
              , e = Object.prototype
              , r = e.hasOwnProperty
              , n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
              , o = "function" == typeof Symbol ? Symbol : {}
              , i = o.iterator || "@@iterator"
              , a = o.asyncIterator || "@@asyncIterator"
              , c = o.toStringTag || "@@toStringTag";
            function u(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, e, r) {
                    return t[e] = r
                }
            }
            function l(t, e, r, o) {
                var i = e && e.prototype instanceof p ? e : p
                  , a = Object.create(i.prototype)
                  , c = new E(o || []);
                return n(a, "_invoke", {
                    value: A(t, r, c)
                }),
                a
            }
            function s(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var f = {};
            function p() {}
            function h() {}
            function d() {}
            var v = {};
            u(v, i, (function() {
                return this
            }
            ));
            var y = Object.getPrototypeOf
              , b = y && y(y(x([])));
            b && b !== e && r.call(b, i) && (v = b);
            var m = d.prototype = p.prototype = Object.create(v);
            function g(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    u(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function w(t, e) {
                function o(n, i, a, c) {
                    var u = s(t[n], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , f = l.value;
                        return f && "object" == le(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            o("next", t, a, c)
                        }
                        ), (function(t) {
                            o("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            l.value = t,
                            a(l)
                        }
                        ), (function(t) {
                            return o("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                n(this, "_invoke", {
                    value: function(t, r) {
                        function n() {
                            return new e((function(e, n) {
                                o(t, r, e, n)
                            }
                            ))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                })
            }
            function A(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n)
                        throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                            var c = O(a, r);
                            if (c) {
                                if (c === f)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n)
                                throw n = "completed",
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = s(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield",
                            u.arg === f)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed",
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }
            function O(t, e) {
                var r = e.method
                  , n = t.iterator[r];
                if (void 0 === n)
                    return e.delegate = null,
                    "throw" === r && t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    O(t, e),
                    "throw" === e.method) || "return" !== r && (e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    f;
                var o = s(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    f;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                f) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                f)
            }
            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(k, this),
                this.reset(!0)
            }
            function x(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , o = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: j
                }
            }
            function j() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = d,
            n(m, "constructor", {
                value: d,
                configurable: !0
            }),
            n(d, "constructor", {
                value: h,
                configurable: !0
            }),
            h.displayName = u(d, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                u(t, c, "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            g(w.prototype),
            u(w.prototype, a, (function() {
                return this
            }
            )),
            t.AsyncIterator = w,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new w(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            g(m),
            u(m, c, "Generator"),
            u(m, i, (function() {
                return this
            }
            )),
            u(m, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            t.values = x,
            E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(r, n) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = r,
                        n && (e.method = "next",
                        e.arg = void 0),
                        !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    f) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                S(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: x(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            t
        }
        function fe(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function pe(t, e, r, n) {
            r && Object.defineProperty(t, e, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function he(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, (void 0,
                o = function(t, e) {
                    if ("object" !== le(t) || null === t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, "string");
                        if ("object" !== le(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key),
                "symbol" === le(o) ? o : String(o)), n)
            }
            var o
        }
        function de(t, e) {
            return de = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            de(t, e)
        }
        function ve(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function ye(t) {
            return ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            ye(t)
        }
        function be(t, e, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(t) {
                i[t] = n[t]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(t, e, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(t, e, i),
            i = null),
            i
        }
        var me, ge, we, Ae, Oe, ke, Se, Ee, xe = (Mt = (0,
        Ot.wA)({
            components: {
                LangSelect: Et(),
                meAudio: jt()
            }
        }),
        Ft = (0,
        Ot.fI)(),
        Qt = (0,
        Ot.fI)(),
        Yt = (0,
        o.State)("shareState"),
        Ut = (0,
        o.State)("volume"),
        Jt = (0,
        o.State)("curTab"),
        Mt((qt = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && de(t, e)
            }(l, t);
            var e, r, o, i, a, c, u = (a = l,
            c = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = ye(a);
                if (c) {
                    var r = ye(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === le(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return ve(t)
                }(this, t)
            }
            );
            function l() {
                var t;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, l);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return pe(t = u.call.apply(u, [this].concat(r)), "isLoading", Kt, ve(t)),
                pe(t, "isHome", _t, ve(t)),
                pe(t, "shareState", $t, ve(t)),
                pe(t, "volume", te, ve(t)),
                pe(t, "curTab", ee, ve(t)),
                t.openlink = new ue.OpenLink({
                    bbsApp: t.$bbsApp
                }),
                t.themeConfig = {
                    defaultColor: "rgba(0, 0, 0, 0.6)",
                    activeColor: "#C7C7C7",
                    railColor: "#C7C7C7"
                },
                t
            }
            return e = l,
            r = [{
                key: "shareOptsCn",
                get: function() {
                    return {
                        type: "image",
                        title: this.$getI18nWord("share_title"),
                        desc: this.$getI18nWord("share_desc"),
                        url: S(),
                        img_url: m ? this.$getI18nWord("pic_share_bili") : this.$getI18nWord("pic_share")
                    }
                }
            }, {
                key: "shareOptsSea",
                get: function() {
                    return {
                        key: "m20230313hy24fjgw74",
                        game_biz: y,
                        title_key: "share_title",
                        desc_key: "share_desc",
                        url: S(),
                        img_key: "pic_share"
                    }
                }
            }, {
                key: "effectSrc",
                get: function() {
                    var t = this
                      , e = Number(this.$getI18nWord("num_roles"))
                      , r = [];
                    return new Array(e).fill(1).forEach((function(e, n) {
                        var o = n + 1;
                        r.push(t.$getI18nWord("audio1_role".concat(o)), t.$getI18nWord("audio2_role".concat(o)), t.$getI18nWord("model_audio_".concat(o)))
                    }
                    )),
                    r
                }
            }, {
                key: "handleEffectEnd",
                value: function() {
                    ne({
                        volume: .5
                    })
                }
            }, {
                key: "onLangSelect",
                value: function(t) {
                    this.$trackEvent("Button", "Click", "language", A[this.curTab], {
                        lang: t
                    })
                }
            }, {
                key: "jumpToDownload",
                value: function() {
                    if (this.$trackEvent("Button", "Click", "download", A[this.curTab]),
                    n.IS_SEA || !n.IS_BBS) {
                        var t = this.$getI18nWord("link_download");
                        !n.IS_SEA && m && (t = this.$getI18nWord("link_download_bili")),
                        t && this.$mJump(t)
                    } else
                        this.openlink.open({
                            host: "mihoyo",
                            type: "deepLink",
                            args: {
                                deep_link: "mihoyobbs://gameCenter/".concat(this.$getI18nWord("download_bbs_id"))
                            }
                        })
                }
            }, {
                key: "handleAudioClick",
                value: function() {
                    this.$trackEvent("Button", "Click", "music", A[this.curTab])
                }
            }, {
                key: "openVideo",
                value: function() {
                    if (this.$trackEvent("Button", "Click", "pv", A[this.curTab]),
                    n.IS_SEA || m) {
                        var t = this.$getI18nWord("link_video_main");
                        t && this.$mJump(t)
                    } else
                        this.openlink.open({
                            type: "article",
                            args: {
                                game_id: "6",
                                post_id: this.$getI18nWord("link_video_id")
                            },
                            host: "mihoyo"
                        })
                }
            }, {
                key: "close",
                value: function() {
                    this.$bbsApp.closePage()
                }
            }, {
                key: "onShare",
                value: (o = se().mark((function t(e) {
                    return se().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (console.log(e),
                                this.$trackEvent("Button", "Click", "share", e.value, {
                                    id: A[this.curTab]
                                }),
                                !g || this.shareState) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 5,
                                ae();
                            case 5:
                                return ne({
                                    shareState: !0
                                }),
                                t.next = 8,
                                ie();
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                )),
                i = function() {
                    var t = this
                      , e = arguments;
                    return new Promise((function(r, n) {
                        var i = o.apply(t, e);
                        function a(t) {
                            fe(i, r, n, a, c, "next", t)
                        }
                        function c(t) {
                            fe(i, r, n, a, c, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
                ,
                function(t) {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "render",
                value: function() {
                    var t = arguments[0];
                    return t("div", {
                        class: kt.Z.wrap
                    }, [t("div", {
                        class: kt.Z.leftGroup
                    }, [n.IS_BBS && t("img", {
                        class: kt.Z.closeBtn,
                        attrs: {
                            src: Lt
                        },
                        on: {
                            click: this.close
                        }
                    })]), t("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t("div", {
                        class: kt.Z.rightGroup,
                        directives: [{
                            name: "show",
                            value: !this.isLoading
                        }]
                    }, [n.IS_SEA && !n.IS_BBS && t("lang-select", {
                        class: [kt.Z.btn, kt.Z.langBtn],
                        ref: "lang",
                        attrs: {
                            icon: "data:image/png;base64,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",
                            lang: this.$getLang(),
                            biz: y,
                            reload: !0,
                            themeConfig: this.themeConfig,
                            preventScroll: !0
                        },
                        on: {
                            select: this.onLangSelect
                        }
                    }), !g && !(n.IS_SEA && n.IS_BBS) && t("img", {
                        class: [kt.Z.btn, kt.Z.downloadBtn],
                        attrs: {
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAyVBMVEUAAADk5OTl5eXk5OTk5OTl5eXg4ODk5OTk5OTk5OTk5OTk5OTl5eXk5OTk5OTl5eXk5OTk5OTl5eXq6urm5ubk5OTk5OTj4+Pk5OTl5eXj4+Pm5ubl5eXm5ubl5eXl5eXf39/l5eXV1dXk5ORaWlq8vLzg4OC+vr5jY2Pc3NzNzc3V1dXPz891dXWjo6Pa2trJycne3t7T09PAwMDDw8PLy8vFxcXR0dGVlZWPj4/Hx8etra3X19eLi4tra2uzs7NdXV2hoaF3d3e47vGOAAAAI3RSTlMA3OpaSBUKdpyZ9fDhx724byIHDB+p9ubk19VQTyin9CB2DLRbYt4AAAPiSURBVFjDzZlre5owFMeBatV2VVt7v2/xJAZYAUFtnbPdvv+HmiWB05oEuTzbs/8LLxB/niTnnCQHa4farU63f+2cE3LuXPe7nVbbqq/9m55NFNm9m/1auNb9AzHo4b5VlfZtaJNC2cNRlb52HLJTTqd0z/e+kFL6slcKdzogH8U9d5nEsFGcLF2Pf7o5OC1h3iG2p17IYEss9Ci2ONxl5EkXGwez1K7QX/GIbuhR4PlhausswFbdk0I3PkLcHADmC062xBfpDUQeFbj6sZ3/bAnA3IhoFbkMYMlzDzo28e4uidSUAfMpMYr6G2Te4PLOYN9FbsIimSFOj5wBJJmRF1ob2/aHTkVkp4IYmJf1uq2Z3yNSUTQE8LOZUee6J+64jLmlkQuArHFP8WfJg43KEz1svLcVbzI+WBoMpLRWea8PP0fhgFQFoo0rGddKh6t1GceRcaXT+5iv9JNCXybrJwMxhISKbIb5sUN26HW80czgPXE2jJ2MN3KENwfG6Hh6B4LJwwFEp52RBA6l7SGvBSQzWIoPQwm05R/FtB6QMghEBMr1Ulyeg0/qAYkPc/FBrK5n0kBGawLRxLPUZw7kQLikLpC4IFzg4N1zbsWfAET1gRGA6N5tnmY8SEh9IJmDlycdW/r7oglwAWE2z+0sK/AmQJ5llLZ0Gg4xaQIkMXDpOF/lEIa6yfN1wHCqTRGejOeunHdfa9eTAqQ/x29M49vS67pWP31fwkpt9HssiRIoeJtPL5rULeO5b12l74luTn6NBRGBgqcbTS7d7tpyxJhq3fpZEBEoeD90ri1n1bFE4AlPNxEl0MSTkSaCzxLfxVcTUQILeEhAYBFRAJFXAMQuFxHX8gV55i7jpBiJKOQZJ8XgNp5LkajlUdfTuo3q2JKx9vGbhudvBuBZ59ja0AvGY9kcicjDS4Eu9Dqa5DAdb8XXszJ+L+9XpprkgOlLD0Qi8hCoSV+YYKMiIHGnpAiICVZdAhBoFgLVJQAXqXpAdZHCZbQ+EJdRZaFH4OR7kSYCqCz0ylYEgSU0VbYiymapBlDdLFn2ton8rRTvjeu2c7jhXMIs3wKvJ7u1ftVuOHFLzAECUlnqlhg37T7EtDJO3bTjsYImEFYHqscKPPhwhgHY5OCDRzMPwKvGw18MtIdHXxzd6hweH7XHW+KijbWOt6geEhc1DuBdc4nABwhpgxKBWsTwGMRBgyKGWmbhCUCTMotaCKI+NCwEqaWq+a5S1VwpVZUrpkUKTS2m/dVyX/OCZL2SKUtRmpLp478t6jYvO5s1alAYN5fuD0y0g7PW//Bw4cPjjyvx+OOqzOOPPxFXxgmJMc5HAAAAAElFTkSuQmCC"
                        },
                        on: {
                            click: this.jumpToDownload
                        }
                    }), t("me-audio", {
                        ref: "audio",
                        class: [kt.Z.btn, kt.Z.audioBtn],
                        attrs: {
                            activeIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA5FBMVEUAAADg4ODk5OTk5OTk5OTj4+Pk5OTj4+Pk5OTk5OTl5eXk5OTk5OTk5OTk5OTk5OTk5OTj4+Pl5eXo6Ojj4+Pl5eXk5OTl5eXo6Ojl5eXj4+Pl5eXk5OTk5OTm5ubl5eXm5ubm5ubl5eXk5OTj4+Pk5OTk5ORaWlq8vLzj4+O+vr7e3t7c3NxqamphYWHa2trV1dXQ0NDOzs7g4ODGxsbMzMzKysrIyMjDw8OIiIjAwMB/f3/T09PX19d4eHjBwcFcXFy1tbWwsLBzc3NtbW2oqKicnJyTk5OEhIRnZ2eLi4ugoKDdRqqRAAAAJnRSTlMACnZI9CDrnPDl4d3a1r2Zb1tYFhUHx5wM6d24qfZQTygjp9y4xdL8UJ4AAARJSURBVFjDzZl5d5swDMAZbEnXM23aptfuzciGciUBlvvqse37f58lsYlJjA2B9/amf8ID/ItkyZIttBy5NPTW6cntB4Q+3J6ctnTjUisvbz6eHSNBjs8+vimFM76+RRJ5+9XYW7nGEVLKUeNmH5xeQ7lS0wtbfnGICsnhRSHcu/v0IGx7QRT3YCm9OAo8G6effn+Xzzs/SNG8kMCOkNBLMQ/Oc3BXdf6yG671ivyhbeGlWK7nR2tdQ5e/Vb9ShvE1x3UAoDOw0Y7Yg/UDjry+VEzft82w5SgSWChTrIAskZu/+iadyM/vk7kbECB+G0ml7S+RQTKX7z9n874kPGT5cZfi5MguQGwnxC9ZvOYd965loVxxx0A8dn3XzPDvD7Sn4AjATzwj+rpOX+oS0sVFkT5AN4keIZ7p/S4AfylfPP7y+U7AsPVBVkCCCstwY/XBdvDco8JAN376PXKc2UbHIb2638ovCBUwGfvw53UxMdey2MwjYdFzkcp/NF8pnGJFs5f+LzMlj4hJCDEdcMjzo85oChMTjgjEYwjolZ7wbmpUC1cg4lliohyIXABqdC2pCg36IAqF1PKbA+RA1IUOvWgw4BH7o/Hu+p2ahYBtAi6tXKxe0tsd8KUKqoHIT1Sk1fWBKUiEBPNTDRRVfFjHzFvm/QCVBaIAQroDWEXOJ+pPAKso8PH1eb4NtABohHxaAs/YEopRPnAy//lEVlWvz4HMATQ1ni2Bx8zigRrojF5mSR0RgQNm8/Gy0FGLCdiZQGbiNKAekwFtINTmpmawGz2UCaQmUlEAUY8pZLB17EGUCXS4YmpgBB5bzy3mdz8baBUE+hCwUnDK/mBYDThkJp5qJ+vfGOxqQJuF3YlWY3NqVQNazKu3Gl14ALgaEAPQxaehUsC5DIjLAf2JFFjK5HbflJpcwint3sg0pU5Rhs1IBLZnfVoBZWGjCuxgIgDDhUlFGtiKpefOzV1gh9dn2dKTJQccPD2au0CX7x2kySE7fQ2fVzQB+Mx50vTFE2xqKFlpIgLxYwq4kCTYrBJAJmYmcGCm5FVWAsQixWZKBPpp4FRWpMQy+mxKgJbDH8zbsjIqFvp5Grg17oXfD5Cs0ItbEScF7G9H5iJxcRch2VZE3Cw5wkxx4ouzwv2hISLbLGlH2yqOOG8k5CC7Q9ipTb6d0xqJitSQ2Yb3a4DkIttw8i2xDeBuzf1IyVNsiTU98dWYmjgdOROnP8VKjnTTzo8VOIYQFRfxWCEcfGwCfnGSePARj2YegLcfj4+4zzw8+vToVv3wqJ3zw56HKhxvudQ5sfA8DjivJbYIrvkxPcSF4iVUtgh4E8MjMHYrNDHENosdA1Rqs4iNoAAqNYJ48NyVaVXdvdunmWYJNGUzTfR1a992X+vqHzUk1S1TskbltkyrN3X/eduZy02JxniV1v2D8T98XKDSNPT66vMHxqvPH3XdaOYM+AtG1giJejGtlAAAAABJRU5ErkJggg==",
                            icon: "data:image/png;base64,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",
                            src: this.$getI18nWord("music_main"),
                            volume: this.volume,
                            effectSrc: this.effectSrc,
                            effectConfig: {
                                volume: 1
                            }
                        },
                        on: {
                            effectEnd: this.handleEffectEnd,
                            tap: this.handleAudioClick
                        }
                    }), t("share", {
                        class: [kt.Z.btn, kt.Z.shareBtn],
                        attrs: {
                            icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA1VBMVEUAAADg4ODl5eXk5OTk5OTk5OTk5OTk5OTj4+Pk5OTk5OTl5eXk5OTk5OTl5eXk5OTl5eXl5eXk5OTo6Ojj4+Pl5eXk5OTo6Ojl5eXk5OTm5ubl5eXm5ubm5ubl5eXj4+Pk5OTk5ORaWlq8vLzi4uK+vr7c3NzLy8vV1dXNzc3e3t7Pz8/a2trGxsbAwMDg4ODIyMjDw8PR0dHX19dqampeXl6QkJBbW1u3t7d3d3diYmKEhIR8fHyvr6+lpaWLi4uzs7OUlJRubm6dnZ1ycnKsrKygoKArDlsHAAAAIXRSTlMACvXcdlpInCCZ69jw5eHHuKhvFhUHvQzW6FBPKCPp1bwhu/nZAAAERUlEQVRYw82ZaXuiMBDHqbW6ak/t9th7HAg3Aoq1tcf22u//kbYmgaSCCdTn2Wd/b3rJn8xkjmRqaDjttLu/fv5oAbR+/DzrtjunxsfZ+dIbQIlB78vOh+Q6Jy3YQOuk03hxw11Qsjs8byLX7oOWfru25XuHUIvDvVpyn45BwiSOGycRvhElsesQEySOP9VY3r6k5tgWrmHZjqS5r1vk5y4UBDZdV+xPiWe+4QWOH9O12gEUdD8rw/hIyIWIGKYE1iAp/YOQPDpVuG+3eCxEtFwPKvFcCzEkRQRtdOS3g9x3qYWWP4GNTHwL0c99efCtWu/7QbGENLGpnELSRkxIrvi9Sm8kcsP0PNASRGg5udWjiv09goaYMaKf70x5r3vsQ65luSbUJEV0gdErxTNQXETxIT2O+PDeWsDw/LBoMkBtpoXV+++D5xgUgpo1TnlelwyuZTI+PM2unx3ZjxYpGb3D6pV+U8hyTMnuoMDGhD1wKOpjm6tpA+V2nPNb/DLK3djO9c77LD8CneLduOCGiAhHZD/0864wBEpsE1BzPRa8MzoEypAL7vIXRRONxVeS4FzKawsDloG8XwIlRB/UkLHEAwj8fImsu57wBVoT3Z5kkuAjVCzxhMZMizlCm3HxrbzCBUi4aLMTwCpyvrK3I3rqlJhfyXpP78zxEFmEfC3KjIOJsp7e34xlshDeEaJTFJ0BtzhVOG8xozKz368Z+2b97Sm3efDW6NgjFhKd87I/HsD0/mE5X5S2j6DFbB7xoCEY6Zz34ICCCAkPnDZ3YbzWMWx/IjvvNtSEADo8n7t8332QWFyv0nU+Fc7TpbnPo65rnPEXTKU9eBwzZsJ5OqbcxDPjgn5NkFQWFe48PYSH3YXR5z71xAJnXEk4T4/Hd/XSYImHKJxky3rMeXpMRJZ8BpQEF7KgC80EoUIQZUG7sWDZ5HQbwZbYlOpKnz2ThpsyKIdNIgoVC+omYVMV2HDHFTPWhq9jqB/Y1akXL98kr5Y2JC8rxav5FOqm3qbi4Nm2R539ekPb8P2kZnHQl6/gkTrgJYJa5asosIqWYrMasUzp0sPIN0FRYBu0gOzZm86zVYe6Mze1gLpNynvOaAjldWNubmhS9dtouhzL3EN1G23S6KOXsXz6qm70jY4iEzknF5VHkWaHJXiSbd58WDJ26y5RXuHr5uOcMcyXqKtVc0kwVBw4+ZGYIAagJBR6L6biSGy0c1dEmkr1KA5LikN7ca0wE7XRomPfoOpaIS4+xMIU1CSri8+fQH3xEVczB9GBRognjisvjz69um1/eRS3PVe5Rv31VtATiukHLuDd6hEBt9o2a7ViWzkiEEMMx8IoaDrEUI5ZSILYcMyiGwT5uM0gaPtRVZNhmldS0w3Tth/3/YOBpH5kalEp7ch0+6HuPx87C84bDsa3H93/D/9cYIw67e7ZxWULoHV5sfr3x8hQ8xfeX6NJ63mRLwAAAABJRU5ErkJggg==",
                            isSea: n.IS_SEA,
                            shareOptsCn: this.shareOptsCn,
                            shareOptsSea: this.shareOptsSea,
                            popoverOpts: {
                                arrowPos: "right"
                            }
                        },
                        on: {
                            share: this.onShare
                        }
                    }), t("div", {
                        directives: [{
                            name: "show",
                            value: g && this.isHome && !this.shareState
                        }],
                        class: kt.Z.shareAward,
                        domProps: {
                            innerHTML: this.$getI18nWord("share_award")
                        }
                    })])])])
                }
            }],
            r && he(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            l
        }(f()),
        Kt = be(qt.prototype, "isLoading", [Ft], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        _t = be(qt.prototype, "isHome", [Qt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        $t = be(qt.prototype, "shareState", [Yt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        te = be(qt.prototype, "volume", [Ut], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ee = be(qt.prototype, "curTab", [Jt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Xt = qt)) || Xt), je = r(75436), Le = r(76360), Ie = "data:image/png;base64,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", Te = r(94067);
        function Pe(t) {
            return Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Pe(t)
        }
        function Ce(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Ge(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ce(Object(r), !0).forEach((function(e) {
                    Be(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function Be(t, e, r) {
            return (e = ze(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Re(t, e, r, n) {
            r && Object.defineProperty(t, e, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function We(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, ze(n.key), n)
            }
        }
        function ze(t) {
            var e = function(t, e) {
                if ("object" !== Pe(t) || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" !== Pe(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" === Pe(e) ? e : String(e)
        }
        function Ne(t, e) {
            return Ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Ne(t, e)
        }
        function Ve(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function Ze(t) {
            return Ze = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Ze(t)
        }
        function De(t, e, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(t) {
                i[t] = n[t]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(t, e, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(t, e, i),
            i = null),
            i
        }
        var He, Me, Fe, Qe, Ye, Ue, Je, Xe = (me = (0,
        Ot.fI)(),
        ge = (0,
        Ot.fI)(),
        we = (0,
        Ot.fI)(),
        (0,
        Ot.wA)((Oe = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Ne(t, e)
            }(a, t);
            var e, r, n, o, i = (n = a,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = Ze(n);
                if (o) {
                    var r = Ze(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === Pe(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Ve(t)
                }(this, t)
            }
            );
            function a() {
                var t;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return Re(t = i.call.apply(i, [this].concat(r)), "videoSrc", ke, Ve(t)),
                Re(t, "tsSrc", Se, Ve(t)),
                Re(t, "poster", Ee, Ve(t)),
                t.originVideoProps = {
                    width: "100%",
                    controls: !1,
                    loop: !0,
                    "object-fit": "cover"
                },
                t.showPoster = !0,
                t.videoEvent = {
                    canplay: t.videoPlay.bind(Ve(t))
                },
                t
            }
            return e = a,
            r = [{
                key: "mounted",
                value: function() {
                    ne({
                        modelStatus: !0
                    })
                }
            }, {
                key: "closePage",
                value: function() {
                    ne({
                        modelStatus: !1
                    }),
                    this.$emit("close")
                }
            }, {
                key: "videoPlay",
                value: function() {
                    this.showPoster = !1,
                    console.log(this, "videoplay")
                }
            }, {
                key: "render",
                value: function() {
                    var t = arguments[0];
                    return t("div", {
                        class: Te.Z.wrap
                    }, [t("img", {
                        class: Te.Z.closeBtn,
                        on: {
                            click: this.closePage
                        },
                        attrs: {
                            src: Lt
                        }
                    }), t("img", {
                        directives: [{
                            name: "show",
                            value: this.showPoster
                        }],
                        class: Te.Z.poster,
                        attrs: {
                            src: this.poster
                        }
                    }), this.videoSrc && t("event-video", {
                        class: Te.Z.video,
                        attrs: {
                            autoplay: !0,
                            src: this.videoSrc,
                            tsSrc: this.tsSrc,
                            isAutoRetryError: !0,
                            originVideoProps: this.originVideoProps,
                            userPoster: this.poster,
                            loop: !0
                        },
                        props: Ge({}, {
                            onEvents: this.videoEvent
                        })
                    })])
                }
            }],
            r && We(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            a
        }(f()),
        ke = De(Oe.prototype, "videoSrc", [me], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Se = De(Oe.prototype, "tsSrc", [ge], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ee = De(Oe.prototype, "poster", [we], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ae = Oe)) || Ae);
        function qe(t) {
            return qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            qe(t)
        }
        function Ke(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function _e(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ke(Object(r), !0).forEach((function(e) {
                    $e(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ke(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function $e(t, e, r) {
            return (e = rr(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function tr(t, e, r, n) {
            r && Object.defineProperty(t, e, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function er(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, rr(n.key), n)
            }
        }
        function rr(t) {
            var e = function(t, e) {
                if ("object" !== qe(t) || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" !== qe(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" === qe(e) ? e : String(e)
        }
        function nr(t, e) {
            return nr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            nr(t, e)
        }
        function or(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function ir(t) {
            return ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            ir(t)
        }
        function ar(t, e, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(t) {
                i[t] = n[t]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(t, e, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(t, e, i),
            i = null),
            i
        }
        var cr, ur, lr, sr, fr, pr, hr, dr = (He = (0,
        Ot.wA)({}),
        Me = (0,
        o.State)("isAnimating"),
        Fe = (0,
        o.State)("effectPlayer"),
        He((Ye = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && nr(t, e)
            }(c, t);
            var e, r, o, i, a = (o = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = ir(o);
                if (i) {
                    var r = ir(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === qe(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return or(t)
                }(this, t)
            }
            );
            function c() {
                var t;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return tr(t = a.call.apply(a, [this].concat(r)), "isAnimating", Ue, or(t)),
                tr(t, "effectPlayer", Je, or(t)),
                t.audioIndex = 0,
                t.curRoleIndex = 1,
                t.modelAudio = null,
                t
            }
            return e = c,
            r = [{
                key: "swiperOption",
                get: function() {
                    var t = this;
                    return _e(_e({}, k), {}, {
                        pagination: {
                            el: ".role-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(e, r) {
                                var n = e + 1;
                                return '<div class="'.concat(r, ' role-swiper-bullet-custom">\n                    <img class="role-swiper-img" src="').concat(t.$getI18nWord("icon_role".concat(n)), '" />\n                  </div>')
                            }
                        }
                    })
                }
            }, {
                key: "roleNum",
                get: function() {
                    return Number(this.$getI18nWord("num_roles"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var t = [];
                    try {
                        t = JSON.parse(this.$getI18nWord("link_role_view"))
                    } catch (e) {
                        t = []
                    }
                    return t
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "avatar_show", "2")
                }
            }, {
                key: "playModelAudio",
                value: function() {
                    ne({
                        volume: .2
                    }),
                    this.$effectPlayer.play(3 * this.curRoleIndex - 1, !0)
                }
            }, {
                key: "roleChange",
                value: function() {
                    var t;
                    this.$effectPlayer.stop();
                    var e = (null === (t = this.$refs.roleSwiper.swiper) || void 0 === t ? void 0 : t.activeIndex) + 1;
                    this.audioIndex = 0,
                    this.curRoleIndex = e,
                    this.$trackEvent("Button", "Click", "avatar_switch", String(e), {
                        name: this.$getI18nWord("name_role".concat(e))
                    }),
                    this.$emit("changeRole", e)
                }
            }, {
                key: "onAudioTap",
                value: function(t) {
                    ne({
                        volume: .2
                    }),
                    this.$trackEvent("Button", "Click", "avatar_voice", String(this.curRoleIndex), {
                        name: this.$getI18nWord("name_role".concat(this.curRoleIndex))
                    }),
                    this.audioIndex = this.audioIndex ? 0 : 1,
                    this.$effectPlayer.play(3 * t + this.audioIndex, !0)
                }
            }, {
                key: "openVideo",
                value: function(t) {
                    this.$trackEvent("Button", "Click", "avatar_play", String(this.curRoleIndex), {
                        name: this.$getI18nWord("name_role".concat(this.curRoleIndex))
                    }),
                    this.$effectPlayer.stop(),
                    this.$commonModal(Xe, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_role".concat(t)),
                            tsSrc: this.$getI18nWord("video_role".concat(t, "_ts")),
                            poster: "".concat(this.$getI18nWord("video_role".concat(t)), "?x-oss-process=video/snapshot,t_1,f_jpg,m_fast")
                        }
                    })
                }
            }, {
                key: "openModel",
                value: function(t) {
                    this.$trackEvent("Button", "Click", "avatar_3d", String(this.curRoleIndex), {
                        name: this.$getI18nWord("name_role".concat(this.curRoleIndex))
                    }),
                    this.$emit("openModel", t)
                }
            }, {
                key: "onPlayed",
                value: function(t) {
                    console.log("played", t)
                }
            }, {
                key: "jumpToBbs",
                value: function() {
                    this.$trackEvent("Button", "Click", "avatar_more", String(this.curRoleIndex), {
                        name: this.$getI18nWord("name_role".concat(this.curRoleIndex))
                    });
                    var t = this.bbsLink[this.curRoleIndex - 1];
                    t && this.$mJump(t)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = arguments[0]
                      , r = this.$getI18nWord
                      , o = new Array(this.roleNum).fill(1)
                      , i = [r("icon_text_left"), r("icon_text_right")];
                    return e("div", {
                        class: Le.Z.wrap
                    }, [e("swiper", {
                        ref: "roleSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.roleChange
                        }
                    }, [o.map((function(n, o) {
                        var a = o + 1;
                        return e("swiper-slide", {
                            class: Le.Z.roleSwiper
                        }, [e("div", {
                            class: Le.Z.leftGroup
                        }, [e("div", {
                            class: Le.Z.roleNamebox,
                            style: {
                                backgroundImage: "url(".concat(r("info_role".concat(a)), ")")
                            }
                        }, [e("div", {
                            class: Le.Z.name,
                            domProps: {
                                innerHTML: r("name_role".concat(a))
                            }
                        }), e("img", {
                            class: Le.Z.roleAttr,
                            attrs: {
                                src: r("icon_attr_role".concat(a))
                            }
                        })]), e("div", {
                            class: Le.Z.attrBox
                        }, [e("div", [r("text_fate"), "：", r("fate_role".concat(a))]), e("div", [r("text_attr"), "：", r("attr_role".concat(a))])]), e("div", {
                            class: Le.Z.roleWords,
                            on: {
                                mousewheel: D,
                                touchStart: D,
                                touchend: D,
                                touchmove: D
                            }
                        }, [i[0] && e("img", {
                            class: Le.Z.symbolLeft,
                            attrs: {
                                src: i[0]
                            }
                        }), e("vue-scroll", {
                            attrs: {
                                ops: b
                            },
                            ref: "scroll"
                        }, [e("div", {
                            class: Le.Z.roleWordsContent
                        }, [r("words_role".concat(a))])]), i[1] && e("img", {
                            class: Le.Z.symbolRight,
                            attrs: {
                                src: i[1]
                            }
                        })])]), e("div", {
                            class: Le.Z.btnGroup
                        }, [e("img", {
                            class: Le.Z.videoImg,
                            on: {
                                click: t.onAudioTap.bind(t, o)
                            },
                            attrs: {
                                src: "data:image/png;base64,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"
                            }
                        }), e("img", {
                            class: Le.Z.videoImg,
                            on: {
                                click: t.openVideo.bind(t, a)
                            },
                            attrs: {
                                src: Ie
                            }
                        }), e("img", {
                            class: Le.Z.videoImg,
                            on: {
                                click: t.openModel.bind(t, o)
                            },
                            attrs: {
                                src: "data:image/png;base64,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"
                            }
                        })]), e("div", {
                            class: Le.Z.rightGroup,
                            on: {
                                touchStart: D,
                                touchend: D,
                                mousewheel: D,
                                touchmove: D
                            }
                        }, [e("div", {
                            class: Le.Z.contentWrap
                        }, [e("vue-scroll", {
                            attrs: {
                                ops: b
                            },
                            ref: "scroll"
                        }, [e("h1", {
                            attrs: {
                                h1: !0
                            },
                            class: Le.Z.title
                        }, [r("title_role_story")]), e("div", {
                            class: Le.Z.content,
                            domProps: {
                                innerHTML: r("story_role".concat(a))
                            }
                        }), e("h1", {
                            class: Le.Z.title
                        }, [r("title_setting")]), e("div", {
                            class: Le.Z.content,
                            domProps: {
                                innerHTML: r("setting_role".concat(a))
                            }
                        })])])])])
                    }
                    )), !n.IS_SEA && e("div", {
                        class: Le.Z.decorateText
                    }, ["CHARACTER"]), e("div", {
                        class: ["role-swiper-pagination", Le.Z.roleSwiperPagination],
                        on: {
                            touchmove: D
                        },
                        slot: "pagination"
                    })]), e("div", {
                        directives: [{
                            name: "show",
                            value: !m && this.bbsLink[this.curRoleIndex - 1]
                        }],
                        class: Le.Z.jumpTip,
                        on: {
                            click: this.jumpToBbs
                        },
                        domProps: {
                            innerHTML: r("jump_title_role")
                        }
                    })])
                }
            }],
            r && er(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            c
        }(f()),
        Ue = ar(Ye.prototype, "isAnimating", [Me], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Je = ar(Ye.prototype, "effectPlayer", [Fe], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Qe = Ye)) || Qe), vr = r(16310);
        function yr(t) {
            return yr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            yr(t)
        }
        function br(t, e, r, n) {
            r && Object.defineProperty(t, e, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function mr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, (void 0,
                o = function(t, e) {
                    if ("object" !== yr(t) || null === t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, "string");
                        if ("object" !== yr(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key),
                "symbol" === yr(o) ? o : String(o)), n)
            }
            var o
        }
        function gr(t, e) {
            return gr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            gr(t, e)
        }
        function wr(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function Ar(t) {
            return Ar = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Ar(t)
        }
        function Or(t, e, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(t) {
                i[t] = n[t]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(t, e, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(t, e, i),
            i = null),
            i
        }
        var kr, Sr = (cr = (0,
        Ot.fI)(),
        ur = (0,
        o.State)("curTab"),
        lr = (0,
        Ot.RL)("showState", {
            immediate: !0
        }),
        (0,
        Ot.wA)((fr = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && gr(t, e)
            }(a, t);
            var e, r, n, o, i = (n = a,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = Ar(n);
                if (o) {
                    var r = Ar(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === yr(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return wr(t)
                }(this, t)
            }
            );
            function a() {
                var t;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return br(t = i.call.apply(i, [this].concat(r)), "showState", pr, wr(t)),
                br(t, "curTab", hr, wr(t)),
                t.offset = 2,
                t.curIndex = 0,
                t.isRotating = !1,
                t
            }
            return e = a,
            r = [{
                key: "tabs",
                get: function() {
                    try {
                        return JSON.parse(this.$getI18nWord("tabs_title"))
                    } catch (t) {
                        return []
                    }
                }
            }, {
                key: "tabsIcon",
                get: function() {
                    try {
                        return JSON.parse(this.$getI18nWord("tabs_icon")).list || []
                    } catch (t) {
                        return []
                    }
                }
            }, {
                key: "getTabs",
                value: function() {
                    console.log(this.showState, "change"),
                    this.showState && this.changeTab(0, this.tabs[0])
                }
            }, {
                key: "nextPage",
                value: function(t) {
                    if (t > 0 && this.curIndex < this.tabs.length - 1)
                        this.curIndex++;
                    else {
                        if (!(t < 0 && this.curIndex > 0))
                            return;
                        this.curIndex--
                    }
                    this.changeTab(this.curIndex, this.tabs[this.curIndex])
                }
            }, {
                key: "changeTab",
                value: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , r = arguments.length > 1 ? arguments[1] : void 0;
                    r.id !== this.curTab && (this.isRotating = !0,
                    this.offset = 2 - e,
                    this.curIndex = e,
                    ne({
                        curTab: r.id
                    }),
                    this.$emit("tabChange", r),
                    setTimeout((function() {
                        t.isRotating = !1
                    }
                    ), 300))
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = arguments[0];
                    return e("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e("div", {
                        class: vr.Z.wrap,
                        directives: [{
                            name: "show",
                            value: this.showState
                        }]
                    }, [e("div", {
                        class: vr.Z.wrapBg
                    }), e("div", {
                        class: [vr.Z.tabBox, this.isRotating && vr.Z.fadeName],
                        ref: "tab",
                        style: {
                            transform: "rotate(".concat(26 * this.offset, "deg)")
                        }
                    }, [this.tabs.map((function(r, n) {
                        return e("div", {
                            class: [vr.Z.tabItem, vr.Z["tabItem".concat(n + t.offset)]],
                            style: {
                                transform: "translateX(-50%) translateY(-50%) rotate(".concat(-26 * t.offset, "deg)")
                            },
                            on: {
                                click: t.changeTab.bind(t, n, r)
                            }
                        }, [e("img", {
                            attrs: {
                                src: n + t.offset === 2 ? t.tabsIcon[n].url : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABUpJREFUWEfNmHtsFFUUxr8z+6hU0JKKJoIBeQmRSKtixCDEmCCC1YKdKcVg8BH8Q0NbZWd3p4Ir0N12FmWrIUbUQMQUO4NFhAiBGCMYNBopJCgQfEBC4wOJhQilu905ZnY7hO7ObndpQebPnXu/+9tz7r3nO0O4xh7Klye8dO7NUXLOFgRhBrMxiUGjCLjB1GHgLIGPEwmHDMP4ygXslMP6H/mskTNQ0DP/QVBcBmgagJ3E/CUcQhuTcTxacOofc1F317ChxMIoxI1SJnoIwKMA7wU7VCX88d5cwPoECvnmjYbhfIuBCcTU0HX9+eZAYNv5XMQDgbLCgnOFC5jYR8ARCN1L/A2tv2abmxUo5JGqmBAB4Y3oII4EAno0F5DUMYGA6HZ3Ug0YrzBxbV2j3pxJJyNQ0CMuB9HTzFxRF9YPXA5I6px6j1hCRJvB/KES1lfYadoCBT2SAoLITsesuuCmPwcCxtKoV6puoe7uHWBqVcLaqlTtNKCeNK2Agx9QQvqpgYSxtIJ+cRjitI8Yy/1hbdOla/QCWrlUvN0h0LfM/Ei2NPGPATdiZ8rBXA5gKoBbAURBfBJMbQBvgXvoVrozkHHPNXgrJxvMu+IG379stf6bBdULKCRL2wHs9ataY6bI8IHauWBWAYztI3o/g+ClkkhrpnFBryQTY7pf1R5LA2rwitMMpg3FHUUTX1i3LpYqwprowLjhQQBynmlUcaxdIUmPp857d/Fi1+mijsNg4RnrnroYoZBH+oyJtyqq/oHdgtxWY0YtXxhLSqXSiNdONyiLzwH0uKJqT5jvE0BmOYgJriMuo+A2z+qN59Kis7+mAgQ9z8j0Hs4Q6e7I5vQ7qqzQfX7QSZcRm+BZveWvBFC9R1xEJMxS1Jb5aTDmBo52/AJgRL+AgHa4i0bbbfSgLDUz8666sL4hARTyVq5n8D6lUXsvDait5ikAH/UTJjmdeCGVNKVphTyVzzPxNEXVFiWAgrL4vQG8+Kqqf2cDZKaqYmCA6BMqWZOmtUoW7xOAtYqqT0mmTJZOkSM2QQltOW0DdBzAyAEBAk5QaWRUqlbQP7cYcddRRdVu6omQdKG4o2iI7XFvq7kAoGCAgKJUGknT6jn+/yqqVmABdRV3FA3OAHQWwJCrDfQ3HLE7MqTsKIDxAwSUa8r+300d8lVO4Ti/o4S1e62UbSCmr/3hlveviWOfvBhppqJqC67oxTg4PobGvd2VdspkqRmg3Yrasj557BOmKX44Wtg5ws4vc1u1CJDWv33EEpU2pZUf03ebpYOdjommGbxYXIOyuA3Ap5mLa60KsOfyoChMpWtsC3OyuKJcUfWyi8U1cVsn2hxjfVb7MXZEBMQv5Qm1Fsfaq7PYj5/AwrNp9iNR02RpOxP2KI2aacBsH95f/SSIGnIyaAy/XYW3hE2DBsYMRdXmWL/1doy+eaPZcH4jEM30NbYczAiVdAAiiEz3eA+A4T1j20H0A9i0sEV6Ngtbv7TqLhLiu0nonnppr5Zm8uu94gJiev1qmHwmfi21R7Ntg0KytIyBcnY6Zl+ZNij+OZi32vVmfTWKCwWiimzpy2eD93QaZqO4Ma9G0VrETB+YmogQ7k8rnajmQztqmeEBcfVltdIW1EpP5RgncRNA4xlG43UxNL+8Ru/MJTJv1oqDOp1UJRD5GHwszrRkWbjFtMMZnz6/flgzG7zSdIPNi9H6HENfwIGD9p9jMJmJH7Y+xwhEYV+jtieXP5EzkCWW7FDccwCeAcYkJowk4EbzPQNniHEChEPM2ANX9466YOvvuYDY3kP5TLxSY/8DdG6KQ2JvSbkAAAAASUVORK5CYII="
                            }
                        }), e("div", {
                            class: vr.Z.tabName
                        }, [r.name])])
                    }
                    ))])])])
                }
            }],
            r && mr(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            a
        }(f()),
        pr = Or(fr.prototype, "showState", [cr], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        hr = Or(fr.prototype, "curTab", [ur], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Or(fr.prototype, "getTabs", [lr], Object.getOwnPropertyDescriptor(fr.prototype, "getTabs"), fr.prototype),
        sr = fr)) || sr), Er = r(12357);
        function xr(t) {
            return xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            xr(t)
        }
        function jr(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Lr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? jr(Object(r), !0).forEach((function(e) {
                    Ir(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function Ir(t, e, r) {
            return (e = Pr(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Tr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Pr(n.key), n)
            }
        }
        function Pr(t) {
            var e = function(t, e) {
                if ("object" !== xr(t) || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" !== xr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" === xr(e) ? e : String(e)
        }
        function Cr(t, e) {
            return Cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Cr(t, e)
        }
        function Gr(t) {
            return Gr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Gr(t)
        }
        var Br, Rr = (0,
        Ot.wA)(kr = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Cr(t, e)
            }(a, t);
            var e, r, n, o, i = (n = a,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = Gr(n);
                if (o) {
                    var r = Gr(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === xr(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(this, t)
            }
            );
            function a() {
                var t;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return (t = i.call.apply(i, [this].concat(r))).curIndex = 1,
                t
            }
            return e = a,
            r = [{
                key: "swiperOption",
                get: function() {
                    var t = this;
                    return Lr(Lr({}, k), {}, {
                        pagination: {
                            el: ".weapon-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(e, r) {
                                var n = e + 1;
                                return '<div class="'.concat(r, ' role-swiper-bullet-custom">\n                    <img class="role-swiper-img" src="').concat(t.$getI18nWord("icon_weapon".concat(n)), '" />\n                  </div>')
                            }
                        }
                    })
                }
            }, {
                key: "weaponNum",
                get: function() {
                    return Number(this.$getI18nWord("num_weapons"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var t = [];
                    try {
                        t = JSON.parse(this.$getI18nWord("link_weapon_view"))
                    } catch (e) {
                        t = []
                    }
                    return t
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "equip_show", "3")
                }
            }, {
                key: "lightChange",
                value: function() {
                    var t;
                    this.curIndex = (null === (t = this.$refs.weaponSwiper.swiper) || void 0 === t ? void 0 : t.activeIndex) + 1,
                    this.$trackEvent("Button", "Click", "equip_switch", String(this.curIndex))
                }
            }, {
                key: "jumpToBbs",
                value: function() {
                    this.$trackEvent("Button", "Click", "equip_more", String(this.curIndex), {
                        name: this.$getI18nWord("name_weapon".concat(this.curIndex))
                    });
                    var t = this.bbsLink[this.curIndex - 1];
                    t && this.$mJump(t)
                }
            }, {
                key: "render",
                value: function() {
                    var t = arguments[0]
                      , e = this.$getI18nWord
                      , r = new Array(this.weaponNum).fill(1);
                    return t("div", {
                        class: Er.Z.wrap
                    }, [t("swiper", {
                        ref: "weaponSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.lightChange
                        }
                    }, [r.map((function(r, n) {
                        var o = n + 1;
                        return t("swiper-slide", {
                            class: Er.Z.roleSwiper
                        }, [t("div", {
                            class: Er.Z.leftGroup
                        }, [t("div", {
                            class: Er.Z.roleNamebox,
                            style: {
                                backgroundImage: "url(".concat(e("info_weapon".concat(o)), ")")
                            }
                        }, [t("div", {
                            class: Er.Z.name,
                            domProps: {
                                innerHTML: e("name_weapon".concat(o))
                            }
                        }), t("img", {
                            class: Er.Z.roleAttr
                        })]), t("div", {
                            class: Er.Z.attrBox
                        }, [t("div", [e("text_fate"), ": ", e("fate_weapon".concat(o))])]), t("div", {
                            class: Er.Z.roleWords
                        }, [t("div", {
                            class: Er.Z.roleWordsWrap,
                            directives: [{
                                name: "show",
                                value: e("approach_weapon".concat(o))
                            }],
                            on: {
                                mousewheel: D,
                                touchStart: D,
                                touchend: D,
                                touchmove: D
                            }
                        }, [t("div", {
                            class: Er.Z.title
                        }, [e("text_approach")]), t("div", {
                            class: Er.Z.scroll
                        }, [t("vue-scroll", {
                            attrs: {
                                ops: b
                            },
                            ref: "scroll"
                        }, [t("div", {
                            class: Er.Z.approachContent,
                            domProps: {
                                innerHTML: e("approach_weapon".concat(o))
                            }
                        })])])])])]), t("div", {
                            class: Er.Z.mainImg
                        }, [t("img", {
                            class: Er.Z.weaponImg,
                            attrs: {
                                src: e("img_weapon".concat(o))
                            }
                        })]), t("div", {
                            class: Er.Z.rightGroup,
                            on: {
                                mousewheel: D,
                                touchStart: D,
                                touchend: D,
                                touchmove: D
                            }
                        }, [t("div", {
                            class: Er.Z.roleStory
                        }, [t("h1", {
                            class: Er.Z.title
                        }, [e("text_equip_skill")]), t("div", {
                            class: Er.Z.subTitle
                        }, [e("sub_title_weapon".concat(o))]), t("vue-scroll", {
                            attrs: {
                                ops: b
                            },
                            ref: "scroll"
                        }, [t("div", {
                            class: Er.Z.content,
                            domProps: {
                                innerHTML: e("desc_weapon".concat(o))
                            }
                        })])])])])
                    }
                    )), t("div", {
                        class: ["weapon-swiper-pagination", Er.Z.weaponSwiperPagination],
                        slot: "pagination"
                    })]), t("div", {
                        directives: [{
                            name: "show",
                            value: !m && this.bbsLink[this.curIndex - 1]
                        }],
                        class: Er.Z.jumpTip,
                        on: {
                            click: this.jumpToBbs
                        },
                        domProps: {
                            innerHTML: e("jump_title_light")
                        }
                    })])
                }
            }],
            r && Tr(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            a
        }(f())) || kr, Wr = r(32436), zr = "data:image/png;base64,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";
        function Nr(t) {
            return Nr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Nr(t)
        }
        function Vr(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function Zr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Vr(Object(r), !0).forEach((function(e) {
                    Dr(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Vr(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function Dr(t, e, r) {
            return (e = Mr(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function Hr(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, Mr(n.key), n)
            }
        }
        function Mr(t) {
            var e = function(t, e) {
                if ("object" !== Nr(t) || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" !== Nr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" === Nr(e) ? e : String(e)
        }
        function Fr(t, e) {
            return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Fr(t, e)
        }
        function Qr(t) {
            return Qr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Qr(t)
        }
        var Yr, Ur = (0,
        Ot.wA)(Br = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Fr(t, e)
            }(c, t);
            var e, r, o, i, a = (o = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = Qr(o);
                if (i) {
                    var r = Qr(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === Nr(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(this, t)
            }
            );
            function c() {
                var t;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return (t = a.call.apply(a, [this].concat(r))).curIndex = 1,
                t
            }
            return e = c,
            r = [{
                key: "swiperOption",
                get: function() {
                    var t = this;
                    return Zr(Zr({}, k), {}, {
                        pagination: {
                            el: ".event-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(e, r) {
                                var n = e + 1;
                                return '<div class="'.concat(r, ' event-swiper-bullet-custom">\n                    <img class="event-swiper-img" src="').concat(t.$getI18nWord("img_event_tab".concat(n)), '" />\n                  </div>')
                            }
                        }
                    })
                }
            }, {
                key: "eventNum",
                get: function() {
                    return Number(this.$getI18nWord("num_events"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var t = [];
                    try {
                        t = JSON.parse(this.$getI18nWord("link_event_view"))
                    } catch (e) {
                        t = []
                    }
                    return t
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "activity_show", "4")
                }
            }, {
                key: "eventChange",
                value: function() {
                    var t, e = (null === (t = this.$refs.eventSwiper.swiper) || void 0 === t ? void 0 : t.activeIndex) + 1;
                    e !== this.eventNum && (this.$refs.pagination.style.transform = e > 2 ? "translateX(".concat(-3.11 * (e - 2), "rem)") : "translateX(0)"),
                    this.$emit("changeEvent", e),
                    this.curIndex = e,
                    this.$trackEvent("Button", "Click", "activity_switch", String(this.curIndex), {
                        name: this.$getI18nWord("name_event".concat(this.curIndex))
                    })
                }
            }, {
                key: "openVideo",
                value: function(t) {
                    this.$trackEvent("Button", "Click", "activity_play", String(this.curIndex), {
                        name: this.$getI18nWord("name_event".concat(this.curIndex))
                    }),
                    this.$commonModal(Xe, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_event".concat(t)),
                            tsSrc: this.$getI18nWord("video_event".concat(t, "_ts")),
                            poster: this.$getI18nWord("img_event".concat(t))
                        }
                    })
                }
            }, {
                key: "jumpToBbs",
                value: function(t) {
                    this.$trackEvent("Button", "Click", "activity_more", String(t), {
                        name: this.$getI18nWord("name_event".concat(t))
                    });
                    var e = this.bbsLink[t - 1];
                    e && this.$mJump(e)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = arguments[0]
                      , r = this.$getI18nWord
                      , o = this.eventNum
                      , i = new Array(o).fill(1);
                    return e("div", {
                        class: Wr.Z.wrap
                    }, [e("swiper", {
                        ref: "eventSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.eventChange
                        }
                    }, [i.map((function(i, a) {
                        var c = a + 1
                          , u = [];
                        try {
                            u = JSON.parse(r("award_event".concat(c))).list
                        } catch (t) {
                            u = []
                        }
                        return e("swiper-slide", {
                            class: Wr.Z.roleSwiper
                        }, [e("div", {
                            class: Wr.Z.leftWrap
                        }, [e("div", {
                            class: Wr.Z.mainPic
                        }, [e("img", {
                            attrs: {
                                src: r("img_event".concat(c))
                            },
                            class: Wr.Z.picView
                        }), !m && t.bbsLink[a] && e("div", {
                            class: Wr.Z.jumpTip,
                            on: {
                                click: t.jumpToBbs.bind(t, c)
                            },
                            domProps: {
                                innerHTML: r("jump_title_event")
                            }
                        })])]), e("div", {
                            class: Wr.Z.rightWrap
                        }, [e("div", {
                            class: Wr.Z.countBox
                        }, [!n.IS_SEA && e("span", {
                            class: Wr.Z.decorateText
                        }, ["EVENT"]), e("span", {
                            class: Wr.Z.count
                        }, [V(c)]), "/", V(o)]), e("div", {
                            class: Wr.Z.title
                        }, [r("video_event".concat(c)) ? e("img", {
                            class: Wr.Z.videoImg,
                            on: {
                                click: t.openVideo.bind(t, c)
                            },
                            attrs: {
                                src: zr
                            }
                        }) : e("img", {
                            class: [Wr.Z.videoImg, Wr.Z.noPointer],
                            attrs: {
                                src: "data:image/png;base64,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"
                            }
                        }), e("div", {
                            class: Wr.Z.name,
                            domProps: {
                                innerHTML: r("name_event".concat(c))
                            }
                        })]), e("div", {
                            class: Wr.Z.eventDes,
                            on: {
                                mousewheel: D,
                                touchStart: D,
                                touchend: D,
                                touchmove: D
                            }
                        }, [e("vue-scroll", {
                            attrs: {
                                ops: b
                            },
                            ref: "scroll"
                        }, [e("div", [e("div", {
                            class: Wr.Z.eventTime,
                            domProps: {
                                innerHTML: r("time_event".concat(c))
                            }
                        }), e("div", {
                            class: Wr.Z.content,
                            domProps: {
                                innerHTML: r("desc_event".concat(c))
                            }
                        })])])]), e("div", {
                            class: Wr.Z.awardBox
                        }, [e("div", {
                            class: Wr.Z.awardTitle,
                            directives: [{
                                name: "show",
                                value: u.length
                            }],
                            domProps: {
                                innerHTML: r("title_event_award")
                            }
                        }), e("div", {
                            class: Wr.Z.awardGroup,
                            directives: [{
                                name: "show",
                                value: u.length
                            }]
                        }, [u.map((function(t) {
                            return e("img", {
                                class: Wr.Z.awardItem,
                                attrs: {
                                    src: t.url
                                }
                            })
                        }
                        ))])]), r("main_award_event".concat(c)) && e("div", {
                            class: Wr.Z.cadBox
                        }, [e("img", {
                            class: Wr.Z.cardImg,
                            attrs: {
                                src: r("main_award_event".concat(c))
                            }
                        }), e("div", {
                            class: Wr.Z.cardName,
                            domProps: {
                                innerHTML: r("name_award_event".concat(c))
                            }
                        })])])])
                    }
                    )), e("div", {
                        class: Wr.Z.eventSwiperPagination
                    }, [e("div", {
                        class: ["event-swiper-pagination", Wr.Z.eventPage],
                        ref: "pagination",
                        slot: "pagination"
                    })])])])
                }
            }],
            r && Hr(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            c
        }(f())) || Br, Jr = r(48531), Xr = r.n(Jr), qr = r(9596);
        function Kr(t) {
            return Kr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Kr(t)
        }
        function _r(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function $r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? _r(Object(r), !0).forEach((function(e) {
                    tn(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _r(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function tn(t, e, r) {
            return (e = rn(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function en(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, rn(n.key), n)
            }
        }
        function rn(t) {
            var e = function(t, e) {
                if ("object" !== Kr(t) || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" !== Kr(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" === Kr(e) ? e : String(e)
        }
        function nn(t, e) {
            return nn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            nn(t, e)
        }
        function on(t) {
            return on = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            on(t)
        }
        var an, cn = (0,
        Ot.wA)(Yr = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && nn(t, e)
            }(c, t);
            var e, r, o, i, a = (o = c,
            i = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = on(o);
                if (i) {
                    var r = on(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === Kr(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(this, t)
            }
            );
            function c() {
                var t;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, c);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return (t = a.call.apply(a, [this].concat(r))).curIndex = 1,
                t
            }
            return e = c,
            r = [{
                key: "swiperOption",
                get: function() {
                    var t = this;
                    return $r($r({}, k), {}, {
                        pagination: {
                            el: ".event-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(e, r) {
                                var n = e + 1;
                                return '<div class="'.concat(r, ' event-swiper-bullet-custom">\n                    <img class="event-swiper-img" src="').concat(t.$getI18nWord("img_scene".concat(n)), '" />\n                  </div>')
                            }
                        }
                    })
                }
            }, {
                key: "eventNum",
                get: function() {
                    return Number(this.$getI18nWord("num_scenes"))
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var t = [];
                    try {
                        t = JSON.parse(this.$getI18nWord("link_scene_view"))
                    } catch (e) {
                        t = []
                    }
                    return t
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "maze_show", "5")
                }
            }, {
                key: "eventChange",
                value: function() {
                    var t, e = (null === (t = this.$refs.eventSwiper.swiper) || void 0 === t ? void 0 : t.activeIndex) + 1;
                    this.$trackEvent("Button", "Click", "maze_switch", e, {
                        name: this.$getI18nWord("name_scene".concat(e))
                    }),
                    this.curIndex = e,
                    e !== this.eventNum && (this.$refs.pagination.style.transform = e > 2 ? "translateX(".concat(-3.11 * (e - 2), "rem)") : "translateX(0)"),
                    this.$emit("changeScene", e)
                }
            }, {
                key: "openVideo",
                value: function(t) {
                    this.$trackEvent("Button", "Click", "maze_play", t, {
                        name: this.$getI18nWord("name_scene".concat(t))
                    }),
                    this.$commonModal(Xe, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_scene".concat(t)),
                            tsSrc: this.$getI18nWord("video_scene".concat(t, "_ts")),
                            poster: this.$getI18nWord("img_scene".concat(t))
                        }
                    })
                }
            }, {
                key: "jumpToBbs",
                value: function() {
                    this.$trackEvent("Button", "Click", "maze_more", String(this.curIndex), {
                        name: this.$getI18nWord("name_scene".concat(this.curIndex))
                    });
                    var t = this.bbsLink[this.curIndex - 1];
                    t && this.$mJump(t)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = arguments[0]
                      , r = this.$getI18nWord
                      , o = this.eventNum
                      , i = new Array(o).fill(1);
                    return e("div", {
                        class: qr.Z.wrap
                    }, [e("swiper", {
                        ref: "eventSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.eventChange
                        }
                    }, [i.map((function(i, a) {
                        var c = a + 1;
                        return e("swiper-slide", {
                            class: qr.Z.roleSwiper
                        }, [e("div", {
                            class: qr.Z.leftWrap
                        }), e("div", {
                            class: qr.Z.rightWrap,
                            on: {
                                mousewheel: D,
                                wheel: D,
                                touchStart: D,
                                touchend: D,
                                touchmove: D
                            }
                        }, [e("div", {
                            class: qr.Z.countBox
                        }, [!n.IS_SEA && e("span", {
                            class: qr.Z.decorateText
                        }, ["SCENE"]), e("span", {
                            class: qr.Z.count
                        }, [V(c)]), "/", V(o)]), e("div", {
                            class: qr.Z.title
                        }, [r("video_scene".concat(c)) ? e("img", {
                            class: qr.Z.videoImg,
                            on: {
                                click: t.openVideo.bind(t, c)
                            },
                            attrs: {
                                src: zr
                            }
                        }) : e("img", {
                            class: [qr.Z.videoImg, qr.Z.noPointer],
                            attrs: {
                                src: "data:image/png;base64,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"
                            }
                        }), e("div", {
                            class: qr.Z.name,
                            domProps: {
                                innerHTML: r("name_scene".concat(c))
                            }
                        })]), e("div", {
                            class: qr.Z.eventDes
                        }, [e("vue-scroll", {
                            attrs: {
                                ops: b
                            },
                            ref: "scroll"
                        }, [e("div", {
                            class: qr.Z.content,
                            domProps: {
                                innerHTML: r("desc_scene".concat(c))
                            }
                        })])])])])
                    }
                    )), e("div", {
                        directives: [{
                            name: "show",
                            value: !m && this.bbsLink[this.curIndex - 1]
                        }],
                        class: qr.Z.jumpTip,
                        on: {
                            click: this.jumpToBbs
                        },
                        domProps: {
                            innerHTML: r("jump_title_scene")
                        }
                    }), e("div", {
                        class: qr.Z.eventSwiperPagination
                    }, [e("div", {
                        class: ["event-swiper-pagination", qr.Z.eventPage],
                        ref: "pagination",
                        slot: "pagination"
                    })])])])
                }
            }],
            r && en(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            c
        }(f())) || Yr, un = r(59385);
        function ln(t) {
            return ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ln(t)
        }
        function sn(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function fn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? sn(Object(r), !0).forEach((function(e) {
                    pn(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : sn(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function pn(t, e, r) {
            return (e = dn(e))in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function hn(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, dn(n.key), n)
            }
        }
        function dn(t) {
            var e = function(t, e) {
                if ("object" !== ln(t) || null === t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, "string");
                    if ("object" !== ln(n))
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" === ln(e) ? e : String(e)
        }
        function vn(t, e) {
            return vn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            vn(t, e)
        }
        function yn(t) {
            return yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            yn(t)
        }
        var bn, mn, gn, wn, An, On, kn, Sn, En, xn, jn = (0,
        Ot.wA)(an = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && vn(t, e)
            }(a, t);
            var e, r, n, o, i = (n = a,
            o = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = yn(n);
                if (o) {
                    var r = yn(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === ln(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(this, t)
            }
            );
            function a() {
                return function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, a),
                i.apply(this, arguments)
            }
            return e = a,
            r = [{
                key: "playTabs",
                get: function() {
                    var t = null;
                    try {
                        t = JSON.parse(this.$getI18nWord("tabs_play"))
                    } catch (e) {
                        t = []
                    }
                    return t
                }
            }, {
                key: "swiperOption",
                get: function() {
                    var t = this;
                    return fn(fn({}, k), {}, {
                        pagination: {
                            el: ".play-swiper-pagination",
                            clickable: !0,
                            renderBullet: function(e, r) {
                                return '<div class="'.concat(r, ' play-swiper-bullet-custom">\n                    ').concat(t.playTabs[e], "\n                  </div>")
                            }
                        }
                    })
                }
            }, {
                key: "bbsLink",
                get: function() {
                    var t = [];
                    try {
                        t = JSON.parse(this.$getI18nWord("link_play_view"))
                    } catch (e) {
                        t = []
                    }
                    return t
                }
            }, {
                key: "mounted",
                value: function() {
                    this.$trackEvent("page", "show", "mechanics_show", "8")
                }
            }, {
                key: "playChange",
                value: function() {
                    var t, e = null === (t = this.$refs.playSwiper.swiper) || void 0 === t ? void 0 : t.activeIndex;
                    this.$trackEvent("Button", "Click", "mechanics_switch", String(e + 1), {
                        name: this.playTabs[e]
                    })
                }
            }, {
                key: "openVideo",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.$trackEvent("Button", "Click", "mechanics_play", String(t), {
                        name: this.playTabs[t - 1]
                    }),
                    this.$commonModal(Xe, {
                        dialogInfo: {
                            videoSrc: this.$getI18nWord("video_play".concat(t)),
                            tsSrc: this.$getI18nWord("video_play".concat(t, "_ts")),
                            poster: this.$getI18nWord("img_play".concat(t))
                        }
                    })
                }
            }, {
                key: "jumpToBbs",
                value: function(t) {
                    this.$trackEvent("Button", "Click", "mechanics_more", String(t), {
                        name: this.playTabs[t]
                    });
                    var e = this.bbsLink[t - 1];
                    e && this.$mJump(e)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = arguments[0]
                      , r = this.$getI18nWord
                      , n = this.playTabs;
                    return e("div", {
                        class: un.Z.wrap
                    }, [e("swiper", {
                        class: un.Z.playSwiperContiner,
                        ref: "playSwiper",
                        attrs: {
                            options: this.swiperOption
                        },
                        on: {
                            slideChange: this.playChange
                        }
                    }, [n.map((function(n, o) {
                        var i = o + 1
                          , a = r("img_play".concat(i))
                          , c = [];
                        try {
                            c = JSON.parse(r("award_play".concat(i))).list
                        } catch (t) {
                            c = []
                        }
                        return e("swiper-slide", {
                            class: un.Z.playSwiper
                        }, [e("div", {
                            class: un.Z.leftWrap
                        }, [e("div", {
                            class: un.Z.playView,
                            style: "background-image: url(".concat(a, ")")
                        }, [r("video_play".concat(i)) && e("img", {
                            class: un.Z.videoBtn,
                            attrs: {
                                src: Ie
                            },
                            on: {
                                click: t.openVideo.bind(t, i)
                            }
                        }), !m && t.bbsLink[o] && e("div", {
                            class: un.Z.jumpTip,
                            on: {
                                click: t.jumpToBbs.bind(t, i)
                            },
                            domProps: {
                                innerHTML: r("jump_title_play")
                            }
                        })]), e("div", {
                            class: un.Z.desWrap,
                            on: {
                                mousewheel: D,
                                touchStart: D,
                                touchend: D,
                                touchmove: D
                            }
                        }, [e("vue-scroll", {
                            attrs: {
                                ops: b
                            },
                            ref: "scroll"
                        }, [e("div", {
                            class: un.Z.evetDes,
                            domProps: {
                                innerHTML: r("des_play".concat(i))
                            }
                        })])])]), e("div", {
                            class: un.Z.rightWrap
                        }, [e("div", {
                            class: un.Z.awardBox,
                            directives: [{
                                name: "show",
                                value: c.length
                            }]
                        }, [e("div", {
                            class: un.Z.awardTitle,
                            domProps: {
                                innerHTML: r("title_play_award")
                            }
                        }), e("div", {
                            class: un.Z.awardGroup
                        }, [c.map((function(t) {
                            return e("img", {
                                class: un.Z.awardItem,
                                attrs: {
                                    src: t.url
                                }
                            })
                        }
                        ))])])])])
                    }
                    )), e("div", {
                        class: ["play-swiper-pagination", un.Z.playSwiperPagination],
                        slot: "pagination"
                    })])])
                }
            }],
            r && hn(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            a
        }(f())) || an;
        function Ln(t) {
            return Ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ln(t)
        }
        function In() {
            In = function() {
                return t
            }
            ;
            var t = {}
              , e = Object.prototype
              , r = e.hasOwnProperty
              , n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            }
              , o = "function" == typeof Symbol ? Symbol : {}
              , i = o.iterator || "@@iterator"
              , a = o.asyncIterator || "@@asyncIterator"
              , c = o.toStringTag || "@@toStringTag";
            function u(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, e, r) {
                    return t[e] = r
                }
            }
            function l(t, e, r, o) {
                var i = e && e.prototype instanceof p ? e : p
                  , a = Object.create(i.prototype)
                  , c = new E(o || []);
                return n(a, "_invoke", {
                    value: A(t, r, c)
                }),
                a
            }
            function s(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = l;
            var f = {};
            function p() {}
            function h() {}
            function d() {}
            var v = {};
            u(v, i, (function() {
                return this
            }
            ));
            var y = Object.getPrototypeOf
              , b = y && y(y(x([])));
            b && b !== e && r.call(b, i) && (v = b);
            var m = d.prototype = p.prototype = Object.create(v);
            function g(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    u(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function w(t, e) {
                function o(n, i, a, c) {
                    var u = s(t[n], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , f = l.value;
                        return f && "object" == Ln(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            o("next", t, a, c)
                        }
                        ), (function(t) {
                            o("throw", t, a, c)
                        }
                        )) : e.resolve(f).then((function(t) {
                            l.value = t,
                            a(l)
                        }
                        ), (function(t) {
                            return o("throw", t, a, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var i;
                n(this, "_invoke", {
                    value: function(t, r) {
                        function n() {
                            return new e((function(e, n) {
                                o(t, r, e, n)
                            }
                            ))
                        }
                        return i = i ? i.then(n, n) : n()
                    }
                })
            }
            function A(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n)
                        throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (r.method = o,
                    r.arg = i; ; ) {
                        var a = r.delegate;
                        if (a) {
                            var c = O(a, r);
                            if (c) {
                                if (c === f)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === r.method)
                            r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n)
                                throw n = "completed",
                                r.arg;
                            r.dispatchException(r.arg)
                        } else
                            "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = s(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield",
                            u.arg === f)
                                continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed",
                        r.method = "throw",
                        r.arg = u.arg)
                    }
                }
            }
            function O(t, e) {
                var r = e.method
                  , n = t.iterator[r];
                if (void 0 === n)
                    return e.delegate = null,
                    "throw" === r && t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    O(t, e),
                    "throw" === e.method) || "return" !== r && (e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
                    f;
                var o = s(n, t.iterator, e.arg);
                if ("throw" === o.type)
                    return e.method = "throw",
                    e.arg = o.arg,
                    e.delegate = null,
                    f;
                var i = o.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                f) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                f)
            }
            function k(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(k, this),
                this.reset(!0)
            }
            function x(t) {
                if (t) {
                    var e = t[i];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , o = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: j
                }
            }
            function j() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = d,
            n(m, "constructor", {
                value: d,
                configurable: !0
            }),
            n(d, "constructor", {
                value: h,
                configurable: !0
            }),
            h.displayName = u(d, c, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d,
                u(t, c, "GeneratorFunction")),
                t.prototype = Object.create(m),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            g(w.prototype),
            u(w.prototype, a, (function() {
                return this
            }
            )),
            t.AsyncIterator = w,
            t.async = function(e, r, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new w(l(e, r, n, o),i);
                return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            g(m),
            u(m, c, "Generator"),
            u(m, i, (function() {
                return this
            }
            )),
            u(m, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(t) {
                var e = Object(t)
                  , r = [];
                for (var n in e)
                    r.push(n);
                return r.reverse(),
                function t() {
                    for (; r.length; ) {
                        var n = r.pop();
                        if (n in e)
                            return t.value = n,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            t.values = x,
            E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(r, n) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = r,
                        n && (e.method = "next",
                        e.arg = void 0),
                        !!n
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var c = r.call(i, "catchLoc")
                              , u = r.call(i, "finallyLoc");
                            if (c && u) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (c) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t,
                    a.arg = e,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    f) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    f
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            f
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                S(r)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: x(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            t
        }
        function Tn(t, e, r, n, o, i, a) {
            try {
                var c = t[i](a)
                  , u = c.value
            } catch (t) {
                return void r(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(n, o)
        }
        function Pn(t) {
            return function() {
                var e = this
                  , r = arguments;
                return new Promise((function(n, o) {
                    var i = t.apply(e, r);
                    function a(t) {
                        Tn(i, n, o, a, c, "next", t)
                    }
                    function c(t) {
                        Tn(i, n, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        function Cn(t, e, r, n) {
            r && Object.defineProperty(t, e, {
                enumerable: r.enumerable,
                configurable: r.configurable,
                writable: r.writable,
                value: r.initializer ? r.initializer.call(n) : void 0
            })
        }
        function Gn(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, (void 0,
                o = function(t, e) {
                    if ("object" !== Ln(t) || null === t)
                        return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, "string");
                        if ("object" !== Ln(n))
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(t)
                }(n.key),
                "symbol" === Ln(o) ? o : String(o)), n)
            }
            var o
        }
        function Bn(t, e) {
            return Bn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            ,
            Bn(t, e)
        }
        function Rn(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function Wn(t) {
            return Wn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            Wn(t)
        }
        function zn(t, e, r, n, o) {
            var i = {};
            return Object.keys(n).forEach((function(t) {
                i[t] = n[t]
            }
            )),
            i.enumerable = !!i.enumerable,
            i.configurable = !!i.configurable,
            ("value"in i || i.initializer) && (i.writable = !0),
            i = r.slice().reverse().reduce((function(r, n) {
                return n(t, e, r) || r
            }
            ), i),
            o && void 0 !== i.initializer && (i.value = i.initializer ? i.initializer.call(o) : void 0,
            i.initializer = void 0),
            void 0 === i.initializer && (Object.defineProperty(t, e, i),
            i = null),
            i
        }
        var Nn = (bn = (0,
        Ot.wA)({
            components: {
                effect: Xr(),
                TopNav: xe,
                MainTab: Sr,
                PageRole: dr,
                PageEvent: Ur,
                PageScene: cn,
                PagePlay: jn
            }
        }),
        mn = (0,
        o.State)("isAnimating"),
        gn = (0,
        o.State)("curTab"),
        wn = (0,
        o.State)("modelStatus"),
        An = (0,
        Ot.RL)("isAnimating", {
            immediate: !0
        }),
        bn((kn = function(t) {
            !function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && Bn(t, e)
            }(b, t);
            var e, r, o, i, a, c, u, l, s, f, p, h, d, v = (h = b,
            d = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            function() {
                var t, e = Wn(h);
                if (d) {
                    var r = Wn(this).constructor;
                    t = Reflect.construct(e, arguments, r)
                } else
                    t = e.apply(this, arguments);
                return function(t, e) {
                    if (e && ("object" === Ln(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return Rn(t)
                }(this, t)
            }
            );
            function b() {
                var t;
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, b);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return Cn(t = v.call.apply(v, [this].concat(r)), "isAnimating", Sn, Rn(t)),
                Cn(t, "curTab", En, Rn(t)),
                Cn(t, "modelStatus", xn, Rn(t)),
                t.isHome = !0,
                t.isLoading = !0,
                t.enterTime = Date.now(),
                t.animateToast = null,
                t.roleSwitch = !1,
                t
            }
            return e = b,
            r = [{
                key: "onAnimating",
                value: (p = Pn(In().mark((function t() {
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!this.isAnimating) {
                                    t.next = 4;
                                    break
                                }
                                this.animateToast = this.$mtoast({
                                    showContent: !1,
                                    opacity: 0,
                                    duration: 0
                                }),
                                t.next = 8;
                                break;
                            case 4:
                                return this.$mtoast.clear(this.animateToast),
                                t.next = 7,
                                (0,
                                n.asyncTimeout)(400).promise;
                            case 7:
                                this.animateToast = null;
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return p.apply(this, arguments)
                }
                )
            }, {
                key: "mounted",
                value: function() {
                    var t, e, r, n;
                    this.$mtoast.allowToastMultiple(),
                    null === (t = window) || void 0 === t || null === (e = t.performance) || void 0 === e || e.mark("firstMeaningfulPaintEnd"),
                    null === (r = window) || void 0 === r || null === (n = r.performance) || void 0 === n || n.measure("firstMeaningfulPaintEnd", "navigationStart", "firstMeaningfulPaintEnd"),
                    this.getInfo(),
                    this.$trackEvent("page", "view", "home_enter", "")
                }
            }, {
                key: "handleDirection",
                value: function(t) {
                    if (!(this.isAnimating || this.modelStatus || this.animateToast))
                        if (console.log(t),
                        "swipedown" === t) {
                            if (this.isHome && !this.isLoading)
                                return void this.handlePageChange();
                            this.$refs.tab.nextPage(1)
                        } else
                            "swipeup" !== t || this.isHome || this.$refs.tab.nextPage(-1)
                }
            }, {
                key: "getInfo",
                value: (f = Pn(In().mark((function t() {
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!g) {
                                    t.next = 5;
                                    break
                                }
                                return t.next = 3,
                                ie();
                            case 3:
                                t.next = 7;
                                break;
                            case 5:
                                return t.next = 7,
                                Nt({
                                    toastError: !1,
                                    params: {
                                        lang: this.$getLang(),
                                        game_biz: y,
                                        source: w()
                                    }
                                });
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return f.apply(this, arguments)
                }
                )
            }, {
                key: "handleRoleChange",
                value: (s = Pn(In().mark((function t(e) {
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (console.log(e, "role"),
                                !this.roleSwitch) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return this.roleSwitch = !0,
                                t.prev = 4,
                                t.next = 7,
                                this.$refs.effect.changeAva(e);
                            case 7:
                                return t.prev = 7,
                                this.roleSwitch = !1,
                                t.finish(7);
                            case 10:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[4, , 7, 10]])
                }
                ))),
                function(t) {
                    return s.apply(this, arguments)
                }
                )
            }, {
                key: "handleTabChange",
                value: (l = Pn(In().mark((function t(e) {
                    var r;
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (r = e.id,
                                console.log(r, "handleTabChange"),
                                this.$refs.effect) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return");
                            case 4:
                                return ne({
                                    isAnimating: !0
                                }),
                                t.prev = 5,
                                t.next = 8,
                                this.$refs.effect["enter".concat(r)]();
                            case 8:
                                "Ava" === r && this.$refs.effect.changeAva(1);
                            case 9:
                                return t.prev = 9,
                                ne({
                                    isAnimating: !1
                                }),
                                t.finish(9);
                            case 12:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[5, , 9, 12]])
                }
                ))),
                function(t) {
                    return l.apply(this, arguments)
                }
                )
            }, {
                key: "handlePageChange",
                value: (u = Pn(In().mark((function t() {
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                this.isHome && !this.isLoading && (this.isHome = !1);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function() {
                    return u.apply(this, arguments)
                }
                )
            }, {
                key: "handleEventChange",
                value: (c = Pn(In().mark((function t(e) {
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.$refs.effect.changeAct(e);
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return c.apply(this, arguments)
                }
                )
            }, {
                key: "handleSceneChange",
                value: (a = Pn(In().mark((function t(e) {
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                this.$refs.effect.changeScene(e);
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))),
                function(t) {
                    return a.apply(this, arguments)
                }
                )
            }, {
                key: "animateComplete",
                value: function() {
                    console.log("MainPage"),
                    ne({
                        isAnimating: !1,
                        curTab: "Home"
                    }),
                    this.isLoading = !1;
                    var t = Date.now() - this.enterTime;
                    this.$trackEvent("page", "loading_finish", "home_finish", String(t))
                }
            }, {
                key: "backHome",
                value: (i = Pn(In().mark((function t() {
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return ne({
                                    isAnimating: !0,
                                    curTab: "Home"
                                }),
                                t.prev = 1,
                                t.next = 4,
                                this.$refs.effect.enterMain();
                            case 4:
                                this.isHome = !0;
                            case 5:
                                return t.prev = 5,
                                ne({
                                    isAnimating: !1
                                }),
                                t.finish(5);
                            case 8:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[1, , 5, 8]])
                }
                ))),
                function() {
                    return i.apply(this, arguments)
                }
                )
            }, {
                key: "openRoleModel",
                value: (o = Pn(In().mark((function t(e) {
                    return In().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return ne({
                                    modelStatus: !0
                                }),
                                t.prev = 1,
                                t.next = 4,
                                this.$refs.effect.showAvaModel(O[e]);
                            case 4:
                                t.next = 9;
                                break;
                            case 6:
                                t.prev = 6,
                                t.t0 = t.catch(1),
                                ne({
                                    modelStatus: !1
                                });
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[1, 6]])
                }
                ))),
                function(t) {
                    return o.apply(this, arguments)
                }
                )
            }, {
                key: "handleRoleSpeak",
                value: function(t) {
                    console.log("roleSpeak", t),
                    this.$refs.pageRole.playModelAudio()
                }
            }, {
                key: "handleAvaClose",
                value: function() {
                    ne({
                        modelStatus: !1
                    }),
                    this.$effectPlayer.stop(),
                    ne({
                        volume: .5
                    })
                }
            }, {
                key: "loadingComplete",
                value: function() {
                    console.log("loadingPage")
                }
            }, {
                key: "onWebglError",
                value: function() {
                    j()({
                        type: "webglErr",
                        lang: this.$getLang()
                    }),
                    this.$mtoast(this.$getI18nWord("tip_no_webgl"))
                }
            }, {
                key: "onLoadError",
                value: function() {
                    j()({
                        type: "loadErr",
                        lang: this.$getLang()
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = arguments[0]
                      , e = {
                        Ava: t("page-role", {
                            ref: "pageRole",
                            on: {
                                changeRole: this.handleRoleChange,
                                openModel: this.openRoleModel
                            }
                        }),
                        Light: t(Rr),
                        Act: t("page-event", {
                            on: {
                                changeEvent: this.handleEventChange
                            }
                        }),
                        Scene: t("page-scene", {
                            on: {
                                changeScene: this.handleSceneChange
                            }
                        }),
                        Play: t("page-play")
                    };
                    return t("div", {
                        class: [je.Z.indexPage, this.modelStatus && je.Z.underEffect],
                        directives: [{
                            name: "direction",
                            value: {
                                handler: this.handleDirection,
                                rotate: this.$frame.env.rotate,
                                enablePc: !1
                            }
                        }]
                    }, [t("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [t("img", {
                        directives: [{
                            name: "show",
                            value: !this.isLoading && this.isHome
                        }],
                        class: je.Z.mainLogo,
                        attrs: {
                            src: this.$getI18nWord("home_top_logo")
                        }
                    })]), t("top-nav", {
                        attrs: {
                            isLoading: this.isLoading,
                            isHome: this.isHome
                        }
                    }), t("main-tab", {
                        ref: "tab",
                        attrs: {
                            showState: !this.isHome
                        },
                        on: {
                            tabChange: this.handleTabChange
                        }
                    }), t("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [!this.isHome && e[this.curTab]]), t(Xr(), {
                        ref: "effect",
                        class: je.Z.effect,
                        directives: [{
                            name: "append-to-element",
                            value: "#canvas-bg"
                        }],
                        attrs: {
                            disable: !1,
                            width: this.$frame.canvasStateToLayout.width,
                            height: this.$frame.canvasStateToLayout.height,
                            rotate: this.$frame.env.rotate,
                            isSea: n.IS_SEA
                        },
                        on: {
                            buildMainComplete: this.animateComplete,
                            buildLoadingComplete: this.loadingComplete,
                            roleSpeak: this.handleRoleSpeak,
                            closeAvaModel: this.handleAvaClose,
                            webglError: this.onWebglError,
                            loadError: this.onLoadError
                        }
                    }), this.isHome && !this.isAnimating && t("div", {
                        class: je.Z.clickMask,
                        on: {
                            click: this.handlePageChange
                        }
                    }, [t("img", {
                        class: je.Z.nextPage,
                        attrs: {
                            src: "data:image/png;base64,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"
                        }
                    })]), t("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [!this.isHome && t("img", {
                        class: je.Z.backTop,
                        attrs: {
                            src: "data:image/png;base64,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"
                        },
                        on: {
                            click: this.backHome
                        }
                    })])])
                }
            }],
            r && Gn(e.prototype, r),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            b
        }(f()),
        Sn = zn(kn.prototype, "isAnimating", [mn], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        En = zn(kn.prototype, "curTab", [gn], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        xn = zn(kn.prototype, "modelStatus", [wn], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        zn(kn.prototype, "onAnimating", [An], Object.getOwnPropertyDescriptor(kn.prototype, "onAnimating"), kn.prototype),
        On = kn)) || On)
          , Vn = r(88853)
          , Zn = r.n(Vn)
          , Dn = r(50618)
          , Hn = r.n(Dn)
          , Mn = r(17804)
          , Fn = r.n(Mn)
          , Qn = r(88499)
          , Yn = r.n(Qn)
          , Un = r(6281)
          , Jn = r.n(Un);
        f().use(Yn()),
        f().directive("direction", Jn()),
        f().use(Fn()),
        f().use(Hn(), {
            isSea: n.IS_SEA
        }),
        f().use(P()),
        f().use(Zn());
        var Xn = {
            store: ce,
            render: function(t) {
                return t(Nn)
            }
        };
        At().then((function() {
            new (f())(Xn).$mount("#app")
        }
        ))
    },
    10311: function(t) {
        t.exports = Vue
    }
}, function(t) {
    t.O(0, [216, 532], (function() {
        return 30502,
        t(t.s = 30502)
    }
    )),
    t.O()
}
]);
