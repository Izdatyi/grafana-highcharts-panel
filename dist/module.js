define(["app/plugins/sdk"], function(__WEBPACK_EXTERNAL_MODULE_1__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelCtrl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdk = __webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // will be resolved to app/plugins/sdk

// Remove next imports if you don't need separate styles for light and dark themes


// Remove up to here


var Highcharts = __webpack_require__(11);
// try {
//   const Highcharts = require('highcharts');
// } catch (err) { }

// for debugging
window.Highcharts = Highcharts;

var Ctrl = function (_MetricsPanelCtrl) {
  _inherits(Ctrl, _MetricsPanelCtrl);

  function Ctrl($scope, $injector) {
    _classCallCheck(this, Ctrl);

    console.log("<constructor>");
    console.log("Highcharts version:", Highcharts.version);

    var _this = _possibleConstructorReturn(this, (Ctrl.__proto__ || Object.getPrototypeOf(Ctrl)).call(this, $scope, $injector));

    _this.events.on('data-received', _this._onDataReceived.bind(_this));
    return _this;
  }

  _createClass(Ctrl, [{
    key: '_onDataReceived',
    value: function _onDataReceived(data) {
      console.log("_onDataReceived:", data);
      // if (!this.chart) {
      //   this.chart = this._createChart(data);
      // } else {
      //   this._updateChart(data);
      // }
    }
  }, {
    key: 'link',
    value: function link(scope, element) {
      this.initStyles();
    }
  }, {
    key: 'initStyles',
    value: function initStyles() {
      window.System.import(this.panelPath + 'css/panel.base.css!');
      // Remove next lines if you don't need separate styles for light and dark themes
      if (grafanaBootData.user.lightTheme) {
        window.System.import(this.panelPath + 'css/panel.light.css!');
      } else {
        window.System.import(this.panelPath + 'css/panel.dark.css!');
      }
      // Remove up to here
    }
  }, {
    key: 'panelPath',
    get: function get() {
      if (this._panelPath === undefined) {
        this._panelPath = '/public/plugins/' + this.pluginId + '/';
      }
      return this._panelPath;
    }
  }]);

  return Ctrl;
}(_sdk.MetricsPanelCtrl);

Ctrl.templateUrl = 'partials/template.html';

exports.PanelCtrl = Ctrl;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 Highcharts JS v7.0.2 (2019-01-17)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (M, I) {
  "object" === ( false ? "undefined" : _typeof(module)) && module.exports ? (I["default"] = I, module.exports = M.document ? I(M) : I) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return I(M);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : M.Highcharts = I(M);
})("undefined" !== typeof window ? window : undefined, function (M) {
  var I = function () {
    var a = "undefined" === typeof M ? window : M,
        z = a.document,
        F = a.navigator && a.navigator.userAgent || "",
        G = z && z.createElementNS && !!z.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        h = /(edge|msie|trident)/i.test(F) && !a.opera,
        c = -1 !== F.indexOf("Firefox"),
        r = -1 !== F.indexOf("Chrome"),
        u = c && 4 > parseInt(F.split("Firefox/")[1], 10);return a.Highcharts ? a.Highcharts.error(16, !0) : { product: "Highcharts", version: "7.0.2", deg2rad: 2 * Math.PI / 360, doc: z, hasBidiBug: u, hasTouch: z && void 0 !== z.documentElement.ontouchstart, isMS: h, isWebKit: -1 !== F.indexOf("AppleWebKit"), isFirefox: c, isChrome: r, isSafari: !r && -1 !== F.indexOf("Safari"), isTouchDevice: /(Mobile|Android|Windows Phone)/.test(F), SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, symbolSizes: {},
      svg: G, win: a, marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"], noop: function noop() {}, charts: [] };
  }();(function (a) {
    a.timers = [];var z = a.charts,
        F = a.doc,
        G = a.win;a.error = function (h, c, r) {
      var u = a.isNumber(h) ? "Highcharts error #" + h + ": www.highcharts.com/errors/" + h : h;r && a.fireEvent(r, "displayError", { code: h });if (c) throw Error(u);G.console && console.log(u);
    };a.Fx = function (a, c, r) {
      this.options = c;this.elem = a;this.prop = r;
    };a.Fx.prototype = { dSetter: function dSetter() {
        var a = this.paths[0],
            c = this.paths[1],
            r = [],
            u = this.now,
            w = a.length,
            x;if (1 === u) r = this.toD;else if (w === c.length && 1 > u) for (; w--;) {
          x = parseFloat(a[w]), r[w] = isNaN(x) ? c[w] : u * parseFloat(c[w] - x) + x;
        } else r = c;this.elem.attr("d", r, null, !0);
      }, update: function update() {
        var a = this.elem,
            c = this.prop,
            r = this.now,
            u = this.options.step;if (this[c + "Setter"]) this[c + "Setter"]();else a.attr ? a.element && a.attr(c, r, null, !0) : a.style[c] = r + this.unit;u && u.call(a, r, this);
      }, run: function run(h, c, r) {
        var u = this,
            w = u.options,
            x = function x(a) {
          return x.stopped ? !1 : u.step(a);
        },
            p = G.requestAnimationFrame || function (a) {
          setTimeout(a, 13);
        },
            g = function g() {
          for (var d = 0; d < a.timers.length; d++) {
            a.timers[d]() || a.timers.splice(d--, 1);
          }a.timers.length && p(g);
        };h !== c || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = h, this.end = c, this.unit = r, this.now = this.start, this.pos = 0, x.elem = this.elem, x.prop = this.prop, x() && 1 === a.timers.push(x) && p(g)) : (delete w.curAnim[this.prop], w.complete && 0 === Object.keys(w.curAnim).length && w.complete.call(this.elem));
      }, step: function step(h) {
        var c = +new Date(),
            r,
            u = this.options,
            w = this.elem,
            x = u.complete,
            p = u.duration,
            g = u.curAnim;w.attr && !w.element ? h = !1 : h || c >= p + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), r = g[this.prop] = !0, a.objectEach(g, function (a) {
          !0 !== a && (r = !1);
        }), r && x && x.call(w), h = !1) : (this.pos = u.easing((c - this.startTime) / p), this.now = this.start + (this.end - this.start) * this.pos, this.update(), h = !0);return h;
      }, initPath: function initPath(h, c, r) {
        function u(a) {
          var b, k;for (f = a.length; f--;) {
            b = "M" === a[f] || "L" === a[f], k = /[a-zA-Z]/.test(a[f + 3]), b && k && a.splice(f + 1, 0, a[f + 1], a[f + 2], a[f + 1], a[f + 2]);
          }
        }function w(a, l) {
          for (; a.length < b;) {
            a[0] = l[b - a.length];var k = a.slice(0, n);[].splice.apply(a, [0, 0].concat(k));v && (k = a.slice(a.length - n), [].splice.apply(a, [a.length, 0].concat(k)), f--);
          }a[0] = "M";
        }function x(a, f) {
          for (var k = (b - a.length) / n; 0 < k && k--;) {
            l = a.slice().splice(a.length / t - n, n * t), l[0] = f[b - n - k * n], m && (l[n - 6] = l[n - 2], l[n - 5] = l[n - 1]), [].splice.apply(a, [a.length / t, 0].concat(l)), v && k--;
          }
        }c = c || "";var p,
            g = h.startX,
            d = h.endX,
            m = -1 < c.indexOf("C"),
            n = m ? 7 : 3,
            b,
            l,
            f;c = c.split(" ");r = r.slice();var v = h.isArea,
            t = v ? 2 : 1,
            H;m && (u(c), u(r));if (g && d) {
          for (f = 0; f < g.length; f++) {
            if (g[f] === d[0]) {
              p = f;break;
            } else if (g[0] === d[d.length - g.length + f]) {
              p = f;H = !0;break;
            }
          }void 0 === p && (c = []);
        }c.length && a.isNumber(p) && (b = r.length + p * t * n, H ? (w(c, r), x(r, c)) : (w(r, c), x(c, r)));return [c, r];
      }, fillSetter: function fillSetter() {
        a.Fx.prototype.strokeSetter.apply(this, arguments);
      }, strokeSetter: function strokeSetter() {
        this.elem.attr(this.prop, a.color(this.start).tweenTo(a.color(this.end), this.pos), null, !0);
      } };a.merge = function () {
      var h,
          c = arguments,
          r,
          u = {},
          w = function w(c, p) {
        "object" !== (typeof c === "undefined" ? "undefined" : _typeof(c)) && (c = {});a.objectEach(p, function (g, d) {
          !a.isObject(g, !0) || a.isClass(g) || a.isDOMElement(g) ? c[d] = p[d] : c[d] = w(c[d] || {}, g);
        });return c;
      };!0 === c[0] && (u = c[1], c = Array.prototype.slice.call(c, 2));r = c.length;for (h = 0; h < r; h++) {
        u = w(u, c[h]);
      }return u;
    };a.pInt = function (a, c) {
      return parseInt(a, c || 10);
    };a.isString = function (a) {
      return "string" === typeof a;
    };a.isArray = function (a) {
      a = Object.prototype.toString.call(a);return "[object Array]" === a || "[object Array Iterator]" === a;
    };a.isObject = function (h, c) {
      return !!h && "object" === (typeof h === "undefined" ? "undefined" : _typeof(h)) && (!c || !a.isArray(h));
    };a.isDOMElement = function (h) {
      return a.isObject(h) && "number" === typeof h.nodeType;
    };a.isClass = function (h) {
      var c = h && h.constructor;return !(!a.isObject(h, !0) || a.isDOMElement(h) || !c || !c.name || "Object" === c.name);
    };a.isNumber = function (a) {
      return "number" === typeof a && !isNaN(a) && Infinity > a && -Infinity < a;
    };a.erase = function (a, c) {
      for (var h = a.length; h--;) {
        if (a[h] === c) {
          a.splice(h, 1);break;
        }
      }
    };a.defined = function (a) {
      return void 0 !== a && null !== a;
    };a.attr = function (h, c, r) {
      var u;a.isString(c) ? a.defined(r) ? h.setAttribute(c, r) : h && h.getAttribute && ((u = h.getAttribute(c)) || "class" !== c || (u = h.getAttribute(c + "Name"))) : a.defined(c) && a.isObject(c) && a.objectEach(c, function (a, c) {
        h.setAttribute(c, a);
      });return u;
    };a.splat = function (h) {
      return a.isArray(h) ? h : [h];
    };a.syncTimeout = function (a, c, r) {
      if (c) return setTimeout(a, c, r);a.call(0, r);
    };a.clearTimeout = function (h) {
      a.defined(h) && clearTimeout(h);
    };a.extend = function (a, c) {
      var h;a || (a = {});for (h in c) {
        a[h] = c[h];
      }return a;
    };a.pick = function () {
      var a = arguments,
          c,
          r,
          u = a.length;for (c = 0; c < u; c++) {
        if (r = a[c], void 0 !== r && null !== r) return r;
      }
    };
    a.css = function (h, c) {
      a.isMS && !a.svg && c && void 0 !== c.opacity && (c.filter = "alpha(opacity\x3d" + 100 * c.opacity + ")");a.extend(h.style, c);
    };a.createElement = function (h, c, r, u, w) {
      h = F.createElement(h);var x = a.css;c && a.extend(h, c);w && x(h, { padding: 0, border: "none", margin: 0 });r && x(h, r);u && u.appendChild(h);return h;
    };a.extendClass = function (h, c) {
      var r = function r() {};r.prototype = new h();a.extend(r.prototype, c);return r;
    };a.pad = function (a, c, r) {
      return Array((c || 2) + 1 - String(a).replace("-", "").length).join(r || 0) + a;
    };a.relativeLength = function (a, c, r) {
      return (/%$/.test(a) ? c * parseFloat(a) / 100 + (r || 0) : parseFloat(a)
      );
    };a.wrap = function (a, c, r) {
      var h = a[c];a[c] = function () {
        var a = Array.prototype.slice.call(arguments),
            c = arguments,
            p = this;p.proceed = function () {
          h.apply(p, arguments.length ? arguments : c);
        };a.unshift(h);a = r.apply(this, a);p.proceed = null;return a;
      };
    };a.datePropsToTimestamps = function (h) {
      a.objectEach(h, function (c, r) {
        a.isObject(c) && "function" === typeof c.getTime ? h[r] = c.getTime() : (a.isObject(c) || a.isArray(c)) && a.datePropsToTimestamps(c);
      });
    };a.formatSingle = function (h, c, r) {
      var u = /\.([0-9])/,
          w = a.defaultOptions.lang;/f$/.test(h) ? (r = (r = h.match(u)) ? r[1] : -1, null !== c && (c = a.numberFormat(c, r, w.decimalPoint, -1 < h.indexOf(",") ? w.thousandsSep : ""))) : c = (r || a.time).dateFormat(h, c);return c;
    };a.format = function (h, c, r) {
      for (var u = "{", w = !1, x, p, g, d, m = [], n; h;) {
        u = h.indexOf(u);if (-1 === u) break;x = h.slice(0, u);if (w) {
          x = x.split(":");p = x.shift().split(".");d = p.length;n = c;for (g = 0; g < d; g++) {
            n && (n = n[p[g]]);
          }x.length && (n = a.formatSingle(x.join(":"), n, r));m.push(n);
        } else m.push(x);h = h.slice(u + 1);u = (w = !w) ? "}" : "{";
      }m.push(h);return m.join("");
    };a.getMagnitude = function (a) {
      return Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
    };a.normalizeTickInterval = function (h, c, r, u, w) {
      var x,
          p = h;r = a.pick(r, 1);x = h / r;c || (c = w ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === u && (1 === r ? c = c.filter(function (a) {
        return 0 === a % 1;
      }) : .1 >= r && (c = [1 / r])));for (u = 0; u < c.length && !(p = c[u], w && p * r >= h || !w && x <= (c[u] + (c[u + 1] || c[u])) / 2); u++) {}return p = a.correctFloat(p * r, -Math.round(Math.log(.001) / Math.LN10));
    };a.stableSort = function (a, c) {
      var h = a.length,
          u,
          w;for (w = 0; w < h; w++) {
        a[w].safeI = w;
      }a.sort(function (a, p) {
        u = c(a, p);return 0 === u ? a.safeI - p.safeI : u;
      });for (w = 0; w < h; w++) {
        delete a[w].safeI;
      }
    };a.arrayMin = function (a) {
      for (var c = a.length, h = a[0]; c--;) {
        a[c] < h && (h = a[c]);
      }return h;
    };a.arrayMax = function (a) {
      for (var c = a.length, h = a[0]; c--;) {
        a[c] > h && (h = a[c]);
      }return h;
    };a.destroyObjectProperties = function (h, c) {
      a.objectEach(h, function (a, u) {
        a && a !== c && a.destroy && a.destroy();delete h[u];
      });
    };a.discardElement = function (h) {
      var c = a.garbageBin;c || (c = a.createElement("div"));
      h && c.appendChild(h);c.innerHTML = "";
    };a.correctFloat = function (a, c) {
      return parseFloat(a.toPrecision(c || 14));
    };a.setAnimation = function (h, c) {
      c.renderer.globalAnimation = a.pick(h, c.options.chart.animation, !0);
    };a.animObject = function (h) {
      return a.isObject(h) ? a.merge(h) : { duration: h ? 500 : 0 };
    };a.timeUnits = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 };a.numberFormat = function (h, c, r, u) {
      h = +h || 0;c = +c;var w = a.defaultOptions.lang,
          x = (h.toString().split(".")[1] || "").split("e")[0].length,
          p,
          g,
          d = h.toString().split("e");-1 === c ? c = Math.min(x, 20) : a.isNumber(c) ? c && d[1] && 0 > d[1] && (p = c + +d[1], 0 <= p ? (d[0] = (+d[0]).toExponential(p).split("e")[0], c = p) : (d[0] = d[0].split(".")[0] || 0, h = 20 > c ? (d[0] * Math.pow(10, d[1])).toFixed(c) : 0, d[1] = 0)) : c = 2;g = (Math.abs(d[1] ? d[0] : h) + Math.pow(10, -Math.max(c, x) - 1)).toFixed(c);x = String(a.pInt(g));p = 3 < x.length ? x.length % 3 : 0;r = a.pick(r, w.decimalPoint);u = a.pick(u, w.thousandsSep);h = (0 > h ? "-" : "") + (p ? x.substr(0, p) + u : "");h += x.substr(p).replace(/(\d{3})(?=\d)/g, "$1" + u);c && (h += r + g.slice(-c));
      d[1] && 0 !== +h && (h += "e" + d[1]);return h;
    };Math.easeInOutSine = function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    };a.getStyle = function (h, c, r) {
      if ("width" === c) return Math.max(0, Math.min(h.offsetWidth, h.scrollWidth, h.getBoundingClientRect && "none" === a.getStyle(h, "transform", !1) ? Math.floor(h.getBoundingClientRect().width) : Infinity) - a.getStyle(h, "padding-left") - a.getStyle(h, "padding-right"));if ("height" === c) return Math.max(0, Math.min(h.offsetHeight, h.scrollHeight) - a.getStyle(h, "padding-top") - a.getStyle(h, "padding-bottom"));
      G.getComputedStyle || a.error(27, !0);if (h = G.getComputedStyle(h, void 0)) h = h.getPropertyValue(c), a.pick(r, "opacity" !== c) && (h = a.pInt(h));return h;
    };a.inArray = function (a, c, r) {
      return c.indexOf(a, r);
    };a.find = Array.prototype.find ? function (a, c) {
      return a.find(c);
    } : function (a, c) {
      var h,
          u = a.length;for (h = 0; h < u; h++) {
        if (c(a[h], h)) return a[h];
      }
    };a.keys = Object.keys;a.offset = function (a) {
      var c = F.documentElement;a = a.parentElement || a.parentNode ? a.getBoundingClientRect() : { top: 0, left: 0 };return { top: a.top + (G.pageYOffset || c.scrollTop) - (c.clientTop || 0), left: a.left + (G.pageXOffset || c.scrollLeft) - (c.clientLeft || 0) };
    };a.stop = function (h, c) {
      for (var r = a.timers.length; r--;) {
        a.timers[r].elem !== h || c && c !== a.timers[r].prop || (a.timers[r].stopped = !0);
      }
    };a.objectEach = function (a, c, r) {
      for (var h in a) {
        a.hasOwnProperty(h) && c.call(r || a[h], a[h], h, a);
      }
    };a.objectEach({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function (h, c) {
      a[c] = function (a) {
        return Array.prototype[h].apply(a, [].slice.call(arguments, 1));
      };
    });a.addEvent = function (h, c, r, u) {
      var w,
          x = h.addEventListener || a.addEventListenerPolyfill;w = "function" === typeof h && h.prototype ? h.prototype.protoEvents = h.prototype.protoEvents || {} : h.hcEvents = h.hcEvents || {};a.Point && h instanceof a.Point && h.series && h.series.chart && (h.series.chart.runTrackerClick = !0);x && x.call(h, c, r, !1);w[c] || (w[c] = []);w[c].push(r);u && a.isNumber(u.order) && (r.order = u.order, w[c].sort(function (a, g) {
        return a.order - g.order;
      }));return function () {
        a.removeEvent(h, c, r);
      };
    };a.removeEvent = function (h, c, r) {
      function u(g, d) {
        var m = h.removeEventListener || a.removeEventListenerPolyfill;m && m.call(h, g, d, !1);
      }function w(g) {
        var d, m;h.nodeName && (c ? (d = {}, d[c] = !0) : d = g, a.objectEach(d, function (a, b) {
          if (g[b]) for (m = g[b].length; m--;) {
            u(b, g[b][m]);
          }
        }));
      }var x, p;["protoEvents", "hcEvents"].forEach(function (a) {
        var d = h[a];d && (c ? (x = d[c] || [], r ? (p = x.indexOf(r), -1 < p && (x.splice(p, 1), d[c] = x), u(c, r)) : (w(d), d[c] = [])) : (w(d), h[a] = {}));
      });
    };a.fireEvent = function (h, c, r, u) {
      var w, x, p, g, d;r = r || {};F.createEvent && (h.dispatchEvent || h.fireEvent) ? (w = F.createEvent("Events"), w.initEvent(c, !0, !0), a.extend(w, r), h.dispatchEvent ? h.dispatchEvent(w) : h.fireEvent(c, w)) : ["protoEvents", "hcEvents"].forEach(function (m) {
        if (h[m]) for (x = h[m][c] || [], p = x.length, r.target || a.extend(r, { preventDefault: function preventDefault() {
            r.defaultPrevented = !0;
          }, target: h, type: c }), g = 0; g < p; g++) {
          (d = x[g]) && !1 === d.call(h, r) && r.preventDefault();
        }
      });u && !r.defaultPrevented && u.call(h, r);
    };a.animate = function (h, c, r) {
      var u,
          w = "",
          x,
          p,
          g;a.isObject(r) || (g = arguments, r = { duration: g[2], easing: g[3], complete: g[4] });a.isNumber(r.duration) || (r.duration = 400);r.easing = "function" === typeof r.easing ? r.easing : Math[r.easing] || Math.easeInOutSine;r.curAnim = a.merge(c);a.objectEach(c, function (d, g) {
        a.stop(h, g);p = new a.Fx(h, r, g);x = null;"d" === g ? (p.paths = p.initPath(h, h.d, c.d), p.toD = c.d, u = 0, x = 1) : h.attr ? u = h.attr(g) : (u = parseFloat(a.getStyle(h, g)) || 0, "opacity" !== g && (w = "px"));x || (x = d);x && x.match && x.match("px") && (x = x.replace(/px/g, ""));p.run(u, x, w);
      });
    };a.seriesType = function (h, c, r, u, w) {
      var x = a.getOptions(),
          p = a.seriesTypes;x.plotOptions[h] = a.merge(x.plotOptions[c], r);p[h] = a.extendClass(p[c] || function () {}, u);p[h].prototype.type = h;w && (p[h].prototype.pointClass = a.extendClass(a.Point, w));return p[h];
    };a.uniqueKey = function () {
      var a = Math.random().toString(36).substring(2, 9),
          c = 0;return function () {
        return "highcharts-" + a + "-" + c++;
      };
    }();a.isFunction = function (a) {
      return "function" === typeof a;
    };G.jQuery && (G.jQuery.fn.highcharts = function () {
      var h = [].slice.call(arguments);if (this[0]) return h[0] ? (new a[a.isString(h[0]) ? h.shift() : "Chart"](this[0], h[0], h[1]), this) : z[a.attr(this[0], "data-highcharts-chart")];
    });
  })(I);
  (function (a) {
    var z = a.isNumber,
        F = a.merge,
        G = a.pInt;a.Color = function (h) {
      if (!(this instanceof a.Color)) return new a.Color(h);this.init(h);
    };a.Color.prototype = { parsers: [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function parse(a) {
          return [G(a[1]), G(a[2]), G(a[3]), parseFloat(a[4], 10)];
        } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function parse(a) {
          return [G(a[1]), G(a[2]), G(a[3]), 1];
        } }], names: { white: "#ffffff", black: "#000000" },
      init: function init(h) {
        var c, r, u, w;if ((this.input = h = this.names[h && h.toLowerCase ? h.toLowerCase() : ""] || h) && h.stops) this.stops = h.stops.map(function (c) {
          return new a.Color(c[1]);
        });else if (h && h.charAt && "#" === h.charAt() && (c = h.length, h = parseInt(h.substr(1), 16), 7 === c ? r = [(h & 16711680) >> 16, (h & 65280) >> 8, h & 255, 1] : 4 === c && (r = [(h & 3840) >> 4 | (h & 3840) >> 8, (h & 240) >> 4 | h & 240, (h & 15) << 4 | h & 15, 1])), !r) for (u = this.parsers.length; u-- && !r;) {
          w = this.parsers[u], (c = w.regex.exec(h)) && (r = w.parse(c));
        }this.rgba = r || [];
      }, get: function get(a) {
        var c = this.input,
            h = this.rgba,
            u;this.stops ? (u = F(c), u.stops = [].concat(u.stops), this.stops.forEach(function (c, h) {
          u.stops[h] = [u.stops[h][0], c.get(a)];
        })) : u = h && z(h[0]) ? "rgb" === a || !a && 1 === h[3] ? "rgb(" + h[0] + "," + h[1] + "," + h[2] + ")" : "a" === a ? h[3] : "rgba(" + h.join(",") + ")" : c;return u;
      }, brighten: function brighten(a) {
        var c,
            h = this.rgba;if (this.stops) this.stops.forEach(function (c) {
          c.brighten(a);
        });else if (z(a) && 0 !== a) for (c = 0; 3 > c; c++) {
          h[c] += G(255 * a), 0 > h[c] && (h[c] = 0), 255 < h[c] && (h[c] = 255);
        }return this;
      }, setOpacity: function setOpacity(a) {
        this.rgba[3] = a;return this;
      },
      tweenTo: function tweenTo(a, c) {
        var h = this.rgba,
            u = a.rgba;u.length && h && h.length ? (a = 1 !== u[3] || 1 !== h[3], c = (a ? "rgba(" : "rgb(") + Math.round(u[0] + (h[0] - u[0]) * (1 - c)) + "," + Math.round(u[1] + (h[1] - u[1]) * (1 - c)) + "," + Math.round(u[2] + (h[2] - u[2]) * (1 - c)) + (a ? "," + (u[3] + (h[3] - u[3]) * (1 - c)) : "") + ")") : c = a.input || "none";return c;
      } };a.color = function (h) {
      return new a.Color(h);
    };
  })(I);(function (a) {
    var z,
        F,
        G = a.addEvent,
        h = a.animate,
        c = a.attr,
        r = a.charts,
        u = a.color,
        w = a.css,
        x = a.createElement,
        p = a.defined,
        g = a.deg2rad,
        d = a.destroyObjectProperties,
        m = a.doc,
        n = a.extend,
        b = a.erase,
        l = a.hasTouch,
        f = a.isArray,
        v = a.isFirefox,
        t = a.isMS,
        H = a.isObject,
        D = a.isString,
        A = a.isWebKit,
        k = a.merge,
        E = a.noop,
        C = a.objectEach,
        y = a.pick,
        e = a.pInt,
        q = a.removeEvent,
        L = a.splat,
        K = a.stop,
        T = a.svg,
        J = a.SVG_NS,
        N = a.symbolSizes,
        R = a.win;z = a.SVGElement = function () {
      return this;
    };n(z.prototype, { opacity: 1, SVG_NS: J, textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "), init: function init(e, q) {
        this.element = "span" === q ? x(q) : m.createElementNS(this.SVG_NS, q);this.renderer = e;a.fireEvent(this, "afterInit");
      }, animate: function animate(e, q, b) {
        q = a.animObject(y(q, this.renderer.globalAnimation, !0));y(m.hidden, m.msHidden, m.webkitHidden, !1) && (q.duration = 0);0 !== q.duration ? (b && (q.complete = b), h(this, e, q)) : (this.attr(e, null, b), q.step && q.step.call(this));return this;
      }, complexColor: function complexColor(e, q, b) {
        var B = this.renderer,
            l,
            d,
            n,
            g,
            J,
            m,
            E,
            v,
            P,
            c,
            t,
            K = [],
            L;a.fireEvent(this.renderer, "complexColor", { args: arguments }, function () {
          e.radialGradient ? d = "radialGradient" : e.linearGradient && (d = "linearGradient");d && (n = e[d], J = B.gradients, E = e.stops, c = b.radialReference, f(n) && (e[d] = n = { x1: n[0], y1: n[1], x2: n[2], y2: n[3], gradientUnits: "userSpaceOnUse" }), "radialGradient" === d && c && !p(n.gradientUnits) && (g = n, n = k(n, B.getRadialAttr(c, g), { gradientUnits: "userSpaceOnUse" })), C(n, function (a, e) {
            "id" !== e && K.push(e, a);
          }), C(E, function (a) {
            K.push(a);
          }), K = K.join(","), J[K] ? t = J[K].attr("id") : (n.id = t = a.uniqueKey(), J[K] = m = B.createElement(d).attr(n).add(B.defs), m.radAttr = g, m.stops = [], E.forEach(function (e) {
            0 === e[1].indexOf("rgba") ? (l = a.color(e[1]), v = l.get("rgb"), P = l.get("a")) : (v = e[1], P = 1);e = B.createElement("stop").attr({ offset: e[0], "stop-color": v, "stop-opacity": P }).add(m);m.stops.push(e);
          })), L = "url(" + B.url + "#" + t + ")", b.setAttribute(q, L), b.gradient = K, e.toString = function () {
            return L;
          });
        });
      }, applyTextOutline: function applyTextOutline(e) {
        var B = this.element,
            q,
            f,
            k,
            l,
            d;-1 !== e.indexOf("contrast") && (e = e.replace(/contrast/g, this.renderer.getContrast(B.style.fill)));e = e.split(" ");f = e[e.length - 1];if ((k = e[0]) && "none" !== k && a.svg) {
          this.fakeTS = !0;e = [].slice.call(B.getElementsByTagName("tspan"));this.ySetter = this.xSetter;k = k.replace(/(^[\d\.]+)(.*?)$/g, function (a, e, B) {
            return 2 * e + B;
          });for (d = e.length; d--;) {
            q = e[d], "highcharts-text-outline" === q.getAttribute("class") && b(e, B.removeChild(q));
          }l = B.firstChild;e.forEach(function (a, e) {
            0 === e && (a.setAttribute("x", B.getAttribute("x")), e = B.getAttribute("y"), a.setAttribute("y", e || 0), null === e && B.setAttribute("y", 0));a = a.cloneNode(1);c(a, { "class": "highcharts-text-outline", fill: f, stroke: f, "stroke-width": k, "stroke-linejoin": "round" });
            B.insertBefore(a, l);
          });
        }
      }, symbolCustomAttribs: "x y width height r start end innerR anchorX anchorY rounded".split(" "), attr: function attr(e, q, b, f) {
        var B,
            k = this.element,
            l,
            d = this,
            n,
            g,
            J = this.symbolCustomAttribs;"string" === typeof e && void 0 !== q && (B = e, e = {}, e[B] = q);"string" === typeof e ? d = (this[e + "Getter"] || this._defaultGetter).call(this, e, k) : (C(e, function (B, q) {
          n = !1;f || K(this, q);this.symbolName && -1 !== a.inArray(q, J) && (l || (this.symbolAttr(e), l = !0), n = !0);!this.rotation || "x" !== q && "y" !== q || (this.doTransform = !0);n || (g = this[q + "Setter"] || this._defaultSetter, g.call(this, B, q, k), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(q) && this.updateShadows(q, B, g));
        }, this), this.afterSetters());b && b.call(this);return d;
      }, afterSetters: function afterSetters() {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      }, updateShadows: function updateShadows(a, e, q) {
        for (var B = this.shadows, b = B.length; b--;) {
          q.call(B[b], "height" === a ? Math.max(e - (B[b].cutHeight || 0), 0) : "d" === a ? this.d : e, a, B[b]);
        }
      }, addClass: function addClass(a, e) {
        var B = this.attr("class") || "";-1 === B.indexOf(a) && (e || (a = (B + (B ? " " : "") + a).replace("  ", " ")), this.attr("class", a));return this;
      }, hasClass: function hasClass(a) {
        return -1 !== (this.attr("class") || "").split(" ").indexOf(a);
      }, removeClass: function removeClass(a) {
        return this.attr("class", (this.attr("class") || "").replace(a, ""));
      }, symbolAttr: function symbolAttr(a) {
        var e = this;"x y r start end width height innerR anchorX anchorY".split(" ").forEach(function (B) {
          e[B] = y(a[B], e[B]);
        });e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
      },
      clip: function clip(a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      }, crisp: function crisp(a, e) {
        var B;e = e || a.strokeWidth || 0;B = Math.round(e) % 2 / 2;a.x = Math.floor(a.x || this.x || 0) + B;a.y = Math.floor(a.y || this.y || 0) + B;a.width = Math.floor((a.width || this.width || 0) - 2 * B);a.height = Math.floor((a.height || this.height || 0) - 2 * B);p(a.strokeWidth) && (a.strokeWidth = e);return a;
      }, css: function css(a) {
        var B = this.styles,
            q = {},
            b = this.element,
            f,
            k = "",
            l,
            d = !B,
            g = ["textOutline", "textOverflow", "width"];a && a.color && (a.fill = a.color);B && C(a, function (a, e) {
          a !== B[e] && (q[e] = a, d = !0);
        });d && (B && (a = n(B, q)), a && (null === a.width || "auto" === a.width ? delete this.textWidth : "text" === b.nodeName.toLowerCase() && a.width && (f = this.textWidth = e(a.width))), this.styles = a, f && !T && this.renderer.forExport && delete a.width, b.namespaceURI === this.SVG_NS ? (l = function l(a, e) {
          return "-" + e.toLowerCase();
        }, C(a, function (a, e) {
          -1 === g.indexOf(e) && (k += e.replace(/([A-Z])/g, l) + ":" + a + ";");
        }), k && c(b, "style", k)) : w(b, a), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline)));return this;
      }, getStyle: function getStyle(a) {
        return R.getComputedStyle(this.element || this, "").getPropertyValue(a);
      }, strokeWidth: function strokeWidth() {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;var a = this.getStyle("stroke-width"),
            q;a.indexOf("px") === a.length - 2 ? a = e(a) : (q = m.createElementNS(J, "rect"), c(q, { width: a, "stroke-width": 0 }), this.element.parentNode.appendChild(q), a = q.getBBox().width, q.parentNode.removeChild(q));return a;
      }, on: function on(a, e) {
        var q = this,
            B = q.element;l && "click" === a ? (B.ontouchstart = function (a) {
          q.touchEventFired = Date.now();a.preventDefault();e.call(B, a);
        }, B.onclick = function (a) {
          (-1 === R.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (q.touchEventFired || 0)) && e.call(B, a);
        }) : B["on" + a] = e;return this;
      }, setRadialReference: function setRadialReference(a) {
        var e = this.renderer.gradients[this.element.gradient];this.element.radialReference = a;e && e.radAttr && e.animate(this.renderer.getRadialAttr(a, e.radAttr));return this;
      }, translate: function translate(a, e) {
        return this.attr({ translateX: a,
          translateY: e });
      }, invert: function invert(a) {
        this.inverted = a;this.updateTransform();return this;
      }, updateTransform: function updateTransform() {
        var a = this.translateX || 0,
            e = this.translateY || 0,
            q = this.scaleX,
            b = this.scaleY,
            f = this.inverted,
            k = this.rotation,
            l = this.matrix,
            d = this.element;f && (a += this.width, e += this.height);a = ["translate(" + a + "," + e + ")"];p(l) && a.push("matrix(" + l.join(",") + ")");f ? a.push("rotate(90) scale(-1,1)") : k && a.push("rotate(" + k + " " + y(this.rotationOriginX, d.getAttribute("x"), 0) + " " + y(this.rotationOriginY, d.getAttribute("y") || 0) + ")");(p(q) || p(b)) && a.push("scale(" + y(q, 1) + " " + y(b, 1) + ")");a.length && d.setAttribute("transform", a.join(" "));
      }, toFront: function toFront() {
        var a = this.element;a.parentNode.appendChild(a);return this;
      }, align: function align(a, e, q) {
        var B,
            f,
            k,
            l,
            d = {};f = this.renderer;k = f.alignedObjects;var n, g;if (a) {
          if (this.alignOptions = a, this.alignByTranslate = e, !q || D(q)) this.alignTo = B = q || "renderer", b(k, this), k.push(this), q = null;
        } else a = this.alignOptions, e = this.alignByTranslate, B = this.alignTo;q = y(q, f[B], f);B = a.align;f = a.verticalAlign;k = (q.x || 0) + (a.x || 0);l = (q.y || 0) + (a.y || 0);"right" === B ? n = 1 : "center" === B && (n = 2);n && (k += (q.width - (a.width || 0)) / n);d[e ? "translateX" : "x"] = Math.round(k);"bottom" === f ? g = 1 : "middle" === f && (g = 2);g && (l += (q.height - (a.height || 0)) / g);d[e ? "translateY" : "y"] = Math.round(l);this[this.placed ? "animate" : "attr"](d);this.placed = !0;this.alignAttr = d;return this;
      }, getBBox: function getBBox(a, e) {
        var q,
            B = this.renderer,
            b,
            f = this.element,
            k = this.styles,
            l,
            d = this.textStr,
            J,
            m = B.cache,
            E = B.cacheKeys,
            v = f.namespaceURI === this.SVG_NS,
            c;e = y(e, this.rotation);
        b = e * g;l = B.styledMode ? f && z.prototype.getStyle.call(f, "font-size") : k && k.fontSize;p(d) && (c = d.toString(), -1 === c.indexOf("\x3c") && (c = c.replace(/[0-9]/g, "0")), c += ["", e || 0, l, this.textWidth, k && k.textOverflow].join());c && !a && (q = m[c]);if (!q) {
          if (v || B.forExport) {
            try {
              (J = this.fakeTS && function (a) {
                [].forEach.call(f.querySelectorAll(".highcharts-text-outline"), function (e) {
                  e.style.display = a;
                });
              }) && J("none"), q = f.getBBox ? n({}, f.getBBox()) : { width: f.offsetWidth, height: f.offsetHeight }, J && J("");
            } catch (Y) {}if (!q || 0 > q.width) q = { width: 0, height: 0 };
          } else q = this.htmlGetBBox();B.isSVG && (a = q.width, B = q.height, v && (q.height = B = { "11px,17": 14, "13px,20": 16 }[k && k.fontSize + "," + Math.round(B)] || B), e && (q.width = Math.abs(B * Math.sin(b)) + Math.abs(a * Math.cos(b)), q.height = Math.abs(B * Math.cos(b)) + Math.abs(a * Math.sin(b))));if (c && 0 < q.height) {
            for (; 250 < E.length;) {
              delete m[E.shift()];
            }m[c] || E.push(c);m[c] = q;
          }
        }return q;
      }, show: function show(a) {
        return this.attr({ visibility: a ? "inherit" : "visible" });
      }, hide: function hide() {
        return this.attr({ visibility: "hidden" });
      }, fadeOut: function fadeOut(a) {
        var e = this;e.animate({ opacity: 0 }, { duration: a || 150, complete: function complete() {
            e.attr({ y: -9999 });
          } });
      }, add: function add(a) {
        var e = this.renderer,
            q = this.element,
            B;a && (this.parentGroup = a);this.parentInverted = a && a.inverted;void 0 !== this.textStr && e.buildText(this);this.added = !0;if (!a || a.handleZ || this.zIndex) B = this.zIndexSetter();B || (a ? a.element : e.box).appendChild(q);if (this.onAdd) this.onAdd();return this;
      }, safeRemoveChild: function safeRemoveChild(a) {
        var e = a.parentNode;e && e.removeChild(a);
      }, destroy: function destroy() {
        var a = this,
            e = a.element || {},
            q = a.renderer,
            f = q.isSVG && "SPAN" === e.nodeName && a.parentGroup,
            k = e.ownerSVGElement,
            l = a.clipPath;e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null;K(a);l && k && ([].forEach.call(k.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
          var e = a.getAttribute("clip-path"),
              q = l.element.id;(-1 < e.indexOf("(#" + q + ")") || -1 < e.indexOf('("#' + q + '")')) && a.removeAttribute("clip-path");
        }), a.clipPath = l.destroy());if (a.stops) {
          for (k = 0; k < a.stops.length; k++) {
            a.stops[k] = a.stops[k].destroy();
          }a.stops = null;
        }a.safeRemoveChild(e);for (q.styledMode || a.destroyShadows(); f && f.div && 0 === f.div.childNodes.length;) {
          e = f.parentGroup, a.safeRemoveChild(f.div), delete f.div, f = e;
        }a.alignTo && b(q.alignedObjects, a);C(a, function (e, q) {
          delete a[q];
        });return null;
      }, shadow: function shadow(a, e, q) {
        var b = [],
            f,
            B,
            k = this.element,
            l,
            d,
            n,
            g;if (!a) this.destroyShadows();else if (!this.shadows) {
          d = y(a.width, 3);n = (a.opacity || .15) / d;g = this.parentInverted ? "(-1,-1)" : "(" + y(a.offsetX, 1) + ", " + y(a.offsetY, 1) + ")";for (f = 1; f <= d; f++) {
            B = k.cloneNode(0), l = 2 * d + 1 - 2 * f, c(B, { stroke: a.color || "#000000", "stroke-opacity": n * f, "stroke-width": l, transform: "translate" + g, fill: "none" }), B.setAttribute("class", (B.getAttribute("class") || "") + " highcharts-shadow"), q && (c(B, "height", Math.max(c(B, "height") - l, 0)), B.cutHeight = l), e ? e.element.appendChild(B) : k.parentNode && k.parentNode.insertBefore(B, k), b.push(B);
          }this.shadows = b;
        }return this;
      }, destroyShadows: function destroyShadows() {
        (this.shadows || []).forEach(function (a) {
          this.safeRemoveChild(a);
        }, this);this.shadows = void 0;
      }, xGetter: function xGetter(a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));return this._defaultGetter(a);
      }, _defaultGetter: function _defaultGetter(a) {
        a = y(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);/^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));return a;
      }, dSetter: function dSetter(a, e, q) {
        a && a.join && (a = a.join(" "));/(NaN| {2}|^$)/.test(a) && (a = "M 0 0");this[e] !== a && (q.setAttribute(e, a), this[e] = a);
      }, dashstyleSetter: function dashstyleSetter(a) {
        var q,
            b = this["stroke-width"];"inherit" === b && (b = 1);if (a = a && a.toLowerCase()) {
          a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");for (q = a.length; q--;) {
            a[q] = e(a[q]) * b;
          }a = a.join(",").replace(/NaN/g, "none");this.element.setAttribute("stroke-dasharray", a);
        }
      }, alignSetter: function alignSetter(a) {
        this.alignValue = a;this.element.setAttribute("text-anchor", { left: "start", center: "middle", right: "end" }[a]);
      }, opacitySetter: function opacitySetter(a, e, q) {
        this[e] = a;q.setAttribute(e, a);
      }, titleSetter: function titleSetter(a) {
        var e = this.element.getElementsByTagName("title")[0];e || (e = m.createElementNS(this.SVG_NS, "title"), this.element.appendChild(e));e.firstChild && e.removeChild(e.firstChild);e.appendChild(m.createTextNode(String(y(a), "").replace(/<[^>]*>/g, "").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e")));
      }, textSetter: function textSetter(a) {
        a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this));
      }, fillSetter: function fillSetter(a, e, q) {
        "string" === typeof a ? q.setAttribute(e, a) : a && this.complexColor(a, e, q);
      }, visibilitySetter: function visibilitySetter(a, e, q) {
        "inherit" === a ? q.removeAttribute(e) : this[e] !== a && q.setAttribute(e, a);this[e] = a;
      }, zIndexSetter: function zIndexSetter(a, q) {
        var b = this.renderer,
            f = this.parentGroup,
            k = (f || b).element || b.box,
            l,
            d = this.element,
            B,
            n,
            b = k === b.box;l = this.added;var g;p(a) ? (d.setAttribute("data-z-index", a), a = +a, this[q] === a && (l = !1)) : p(this[q]) && d.removeAttribute("data-z-index");this[q] = a;if (l) {
          (a = this.zIndex) && f && (f.handleZ = !0);q = k.childNodes;for (g = q.length - 1; 0 <= g && !B; g--) {
            if (f = q[g], l = f.getAttribute("data-z-index"), n = !p(l), f !== d) if (0 > a && n && !b && !g) k.insertBefore(d, q[g]), B = !0;else if (e(l) <= a || n && (!p(a) || 0 <= a)) k.insertBefore(d, q[g + 1] || null), B = !0;
          }B || (k.insertBefore(d, q[b ? 3 : 0] || null), B = !0);
        }return B;
      }, _defaultSetter: function _defaultSetter(a, e, q) {
        q.setAttribute(e, a);
      } });z.prototype.yGetter = z.prototype.xGetter;z.prototype.translateXSetter = z.prototype.translateYSetter = z.prototype.rotationSetter = z.prototype.verticalAlignSetter = z.prototype.rotationOriginXSetter = z.prototype.rotationOriginYSetter = z.prototype.scaleXSetter = z.prototype.scaleYSetter = z.prototype.matrixSetter = function (a, e) {
      this[e] = a;this.doTransform = !0;
    };z.prototype["stroke-widthSetter"] = z.prototype.strokeSetter = function (a, e, q) {
      this[e] = a;this.stroke && this["stroke-width"] ? (z.prototype.fillSetter.call(this, this.stroke, "stroke", q), q.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === a && this.hasStroke && (q.removeAttribute("stroke"), this.hasStroke = !1);
    };F = a.SVGRenderer = function () {
      this.init.apply(this, arguments);
    };n(F.prototype, { Element: z, SVG_NS: J, init: function init(a, e, q, b, f, k, l) {
        var d;d = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" });l || d.css(this.getStyle(b));b = d.element;a.appendChild(b);c(a, "dir", "ltr");-1 === a.innerHTML.indexOf("xmlns") && c(b, "xmlns", this.SVG_NS);this.isSVG = !0;this.box = b;this.boxWrapper = d;this.alignedObjects = [];this.url = (v || A) && m.getElementsByTagName("base").length ? R.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 7.0.2"));
        this.defs = this.createElement("defs").add();this.allowHTML = k;this.forExport = f;this.styledMode = l;this.gradients = {};this.cache = {};this.cacheKeys = [];this.imgCount = 0;this.setSize(e, q, !1);var n;v && a.getBoundingClientRect && (e = function e() {
          w(a, { left: 0, top: 0 });n = a.getBoundingClientRect();w(a, { left: Math.ceil(n.left) - n.left + "px", top: Math.ceil(n.top) - n.top + "px" });
        }, e(), this.unSubPixelFix = G(R, "resize", e));
      }, definition: function definition(a) {
        function e(a, b) {
          var f;L(a).forEach(function (a) {
            var k = q.createElement(a.tagName),
                l = {};
            C(a, function (a, e) {
              "tagName" !== e && "children" !== e && "textContent" !== e && (l[e] = a);
            });k.attr(l);k.add(b || q.defs);a.textContent && k.element.appendChild(m.createTextNode(a.textContent));e(a.children || [], k);f = k;
          });return f;
        }var q = this;return e(a);
      }, getStyle: function getStyle(a) {
        return this.style = n({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a);
      }, setStyle: function setStyle(a) {
        this.boxWrapper.css(this.getStyle(a));
      }, isHidden: function isHidden() {
        return !this.boxWrapper.getBBox().width;
      }, destroy: function destroy() {
        var a = this.defs;this.box = null;this.boxWrapper = this.boxWrapper.destroy();d(this.gradients || {});this.gradients = null;a && (this.defs = a.destroy());this.unSubPixelFix && this.unSubPixelFix();return this.alignedObjects = null;
      }, createElement: function createElement(a) {
        var e = new this.Element();e.init(this, a);return e;
      }, draw: E, getRadialAttr: function getRadialAttr(a, e) {
        return { cx: a[0] - a[2] / 2 + e.cx * a[2], cy: a[1] - a[2] / 2 + e.cy * a[2], r: e.r * a[2] };
      }, truncate: function truncate(a, e, q, b, f, k, l) {
        var d = this,
            n = a.rotation,
            g,
            B = b ? 1 : 0,
            J = (q || b).length,
            E = J,
            c = [],
            p = function p(a) {
          e.firstChild && e.removeChild(e.firstChild);a && e.appendChild(m.createTextNode(a));
        },
            v = function v(k, n) {
          n = n || k;if (void 0 === c[n]) if (e.getSubStringLength) try {
            c[n] = f + e.getSubStringLength(0, b ? n + 1 : n);
          } catch (Z) {} else d.getSpanWidth && (p(l(q || b, k)), c[n] = f + d.getSpanWidth(a, e));return c[n];
        },
            t,
            C;a.rotation = 0;t = v(e.textContent.length);if (C = f + t > k) {
          for (; B <= J;) {
            E = Math.ceil((B + J) / 2), b && (g = l(b, E)), t = v(E, g && g.length - 1), B === J ? B = J + 1 : t > k ? J = E - 1 : B = E;
          }0 === J ? p("") : q && J === q.length - 1 || p(g || l(q || b, E));
        }b && b.splice(0, E);a.actualWidth = t;a.rotation = n;
        return C;
      }, escapes: { "\x26": "\x26amp;", "\x3c": "\x26lt;", "\x3e": "\x26gt;", "'": "\x26#39;", '"': "\x26quot;" }, buildText: function buildText(a) {
        var q = a.element,
            b = this,
            f = b.forExport,
            k = y(a.textStr, "").toString(),
            l = -1 !== k.indexOf("\x3c"),
            d = q.childNodes,
            n,
            g = c(q, "x"),
            B = a.styles,
            E = a.textWidth,
            p = B && B.lineHeight,
            v = B && B.textOutline,
            t = B && "ellipsis" === B.textOverflow,
            K = B && "nowrap" === B.whiteSpace,
            L = B && B.fontSize,
            A,
            h,
            H = d.length,
            B = E && !a.added && this.box,
            N = function N(a) {
          var k;b.styledMode || (k = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : L || b.style.fontSize || 12);return p ? e(p) : b.fontMetrics(k, a.getAttribute("style") ? a : q).h;
        },
            D = function D(a, e) {
          C(b.escapes, function (q, b) {
            e && -1 !== e.indexOf(q) || (a = a.toString().replace(new RegExp(q, "g"), b));
          });return a;
        },
            x = function x(a, e) {
          var q;q = a.indexOf("\x3c");a = a.substring(q, a.indexOf("\x3e") - q);q = a.indexOf(e + "\x3d");if (-1 !== q && (q = q + e.length + 1, e = a.charAt(q), '"' === e || "'" === e)) return a = a.substring(q + 1), a.substring(0, a.indexOf(e));
        };A = [k, t, K, p, v, L, E].join();if (A !== a.textCache) {
          for (a.textCache = A; H--;) {
            q.removeChild(d[H]);
          }l || v || t || E || -1 !== k.indexOf(" ") ? (B && B.appendChild(q), l ? (k = b.styledMode ? k.replace(/<(b|strong)>/g, '\x3cspan class\x3d"highcharts-strong"\x3e').replace(/<(i|em)>/g, '\x3cspan class\x3d"highcharts-emphasized"\x3e') : k.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e'), k = k.replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g)) : k = [k], k = k.filter(function (a) {
            return "" !== a;
          }), k.forEach(function (e, k) {
            var l,
                d = 0,
                B = 0;e = e.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||");l = e.split("|||");l.forEach(function (e) {
              if ("" !== e || 1 === l.length) {
                var p = {},
                    v = m.createElementNS(b.SVG_NS, "tspan"),
                    C,
                    y;(C = x(e, "class")) && c(v, "class", C);if (C = x(e, "style")) C = C.replace(/(;| |^)color([ :])/, "$1fill$2"), c(v, "style", C);(y = x(e, "href")) && !f && (c(v, "onclick", 'location.href\x3d"' + y + '"'), c(v, "class", "highcharts-anchor"), b.styledMode || w(v, { cursor: "pointer" }));e = D(e.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");if (" " !== e) {
                  v.appendChild(m.createTextNode(e));d ? p.dx = 0 : k && null !== g && (p.x = g);c(v, p);q.appendChild(v);!d && h && (!T && f && w(v, { display: "block" }), c(v, "dy", N(v)));if (E) {
                    var A = e.replace(/([^\^])-/g, "$1- ").split(" "),
                        p = !K && (1 < l.length || k || 1 < A.length);y = 0;var H = N(v);if (t) n = b.truncate(a, v, e, void 0, 0, Math.max(0, E - parseInt(L || 12, 10)), function (a, e) {
                      return a.substring(0, e) + "\u2026";
                    });else if (p) for (; A.length;) {
                      A.length && !K && 0 < y && (v = m.createElementNS(J, "tspan"), c(v, { dy: H, x: g }), C && c(v, "style", C), v.appendChild(m.createTextNode(A.join(" ").replace(/- /g, "-"))), q.appendChild(v)), b.truncate(a, v, null, A, 0 === y ? B : 0, E, function (a, e) {
                        return A.slice(0, e).join(" ").replace(/- /g, "-");
                      }), B = a.actualWidth, y++;
                    }
                  }d++;
                }
              }
            });h = h || q.childNodes.length;
          }), t && n && a.attr("title", D(a.textStr, ["\x26lt;", "\x26gt;"])), B && B.removeChild(q), v && a.applyTextOutline && a.applyTextOutline(v)) : q.appendChild(m.createTextNode(D(k)));
        }
      }, getContrast: function getContrast(a) {
        a = u(a).rgba;a[0] *= 1;a[1] *= 1.2;a[2] *= .5;return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
      }, button: function button(a, e, q, b, f, l, d, g, J) {
        var B = this.label(a, e, q, J, null, null, null, null, "button"),
            E = 0,
            v = this.styledMode;B.attr(k({ padding: 8, r: 2 }, f));if (!v) {
          var m, p, c, C;f = k({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontWeight: "normal" } }, f);m = f.style;delete f.style;l = k(f, { fill: "#e6e6e6" }, l);p = l.style;delete l.style;d = k(f, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, d);c = d.style;delete d.style;g = k(f, { style: { color: "#cccccc" } }, g);C = g.style;delete g.style;
        }G(B.element, t ? "mouseover" : "mouseenter", function () {
          3 !== E && B.setState(1);
        });G(B.element, t ? "mouseout" : "mouseleave", function () {
          3 !== E && B.setState(E);
        });B.setState = function (a) {
          1 !== a && (B.state = E = a);B.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);v || B.attr([f, l, d, g][a || 0]).css([m, p, c, C][a || 0]);
        };v || B.attr(f).css(n({ cursor: "default" }, m));return B.on("click", function (a) {
          3 !== E && b.call(B, a);
        });
      }, crispLine: function crispLine(a, e) {
        a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - e % 2 / 2);a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + e % 2 / 2);return a;
      }, path: function path(a) {
        var e = this.styledMode ? {} : { fill: "none" };f(a) ? e.d = a : H(a) && n(e, a);return this.createElement("path").attr(e);
      }, circle: function circle(a, e, q) {
        a = H(a) ? a : void 0 === a ? {} : { x: a, y: e, r: q };e = this.createElement("circle");e.xSetter = e.ySetter = function (a, e, q) {
          q.setAttribute("c" + e, a);
        };return e.attr(a);
      }, arc: function arc(a, e, q, b, k, f) {
        H(a) ? (b = a, e = b.y, q = b.r, a = b.x) : b = { innerR: b, start: k, end: f };a = this.symbol("arc", a, e, q, q, b);a.r = q;return a;
      }, rect: function rect(a, e, q, b, k, f) {
        k = H(a) ? a.r : k;var l = this.createElement("rect");a = H(a) ? a : void 0 === a ? {} : { x: a, y: e, width: Math.max(q, 0), height: Math.max(b, 0) };this.styledMode || (void 0 !== f && (a.strokeWidth = f, a = l.crisp(a)), a.fill = "none");k && (a.r = k);l.rSetter = function (a, e, q) {
          c(q, { rx: a, ry: a });
        };return l.attr(a);
      }, setSize: function setSize(a, e, q) {
        var b = this.alignedObjects,
            k = b.length;this.width = a;this.height = e;for (this.boxWrapper.animate({ width: a, height: e }, { step: function step() {
            this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
          }, duration: y(q, !0) ? void 0 : 0 }); k--;) {
          b[k].align();
        }
      }, g: function g(a) {
        var e = this.createElement("g");return a ? e.attr({ "class": "highcharts-" + a }) : e;
      }, image: function image(a, e, q, b, k, f) {
        var l = { preserveAspectRatio: "none" },
            d,
            g = function g(a, e) {
          a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : a.setAttribute("hc-svg-href", e);
        },
            J = function J(e) {
          g(d.element, a);f.call(d, e);
        };1 < arguments.length && n(l, { x: e, y: q, width: b, height: k });d = this.createElement("image").attr(l);f ? (g(d.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"), l = new R.Image(), G(l, "load", J), l.src = a, l.complete && J({})) : g(d.element, a);return d;
      }, symbol: function symbol(a, e, q, b, k, f) {
        var l = this,
            d,
            g = /^url\((.*?)\)$/,
            J = g.test(a),
            E = !J && (this.symbols[a] ? a : "circle"),
            v = E && this.symbols[E],
            c = p(e) && v && v.call(this.symbols, Math.round(e), Math.round(q), b, k, f),
            B,
            t;v ? (d = this.path(c), l.styledMode || d.attr("fill", "none"), n(d, { symbolName: E, x: e, y: q, width: b, height: k }), f && n(d, f)) : J && (B = a.match(g)[1], d = this.image(B), d.imgwidth = y(N[B] && N[B].width, f && f.width), d.imgheight = y(N[B] && N[B].height, f && f.height), t = function t() {
          d.attr({ width: d.width, height: d.height });
        }, ["width", "height"].forEach(function (a) {
          d[a + "Setter"] = function (a, e) {
            var q = {},
                b = this["img" + e],
                k = "width" === e ? "translateX" : "translateY";this[e] = a;p(b) && (this.element && this.element.setAttribute(e, b), this.alignByTranslate || (q[k] = ((this[e] || 0) - b) / 2, this.attr(q)));
          };
        }), p(e) && d.attr({ x: e, y: q }), d.isImg = !0, p(d.imgwidth) && p(d.imgheight) ? t() : (d.attr({ width: 0, height: 0 }), x("img", { onload: function onload() {
            var a = r[l.chartIndex];0 === this.width && (w(this, { position: "absolute",
              top: "-999em" }), m.body.appendChild(this));N[B] = { width: this.width, height: this.height };d.imgwidth = this.width;d.imgheight = this.height;d.element && t();this.parentNode && this.parentNode.removeChild(this);l.imgCount--;if (!l.imgCount && a && a.onload) a.onload();
          }, src: B }), this.imgCount++));return d;
      }, symbols: { circle: function circle(a, e, q, b) {
          return this.arc(a + q / 2, e + b / 2, q / 2, b / 2, { start: 0, end: 2 * Math.PI, open: !1 });
        }, square: function square(a, e, q, b) {
          return ["M", a, e, "L", a + q, e, a + q, e + b, a, e + b, "Z"];
        }, triangle: function triangle(a, e, q, b) {
          return ["M", a + q / 2, e, "L", a + q, e + b, a, e + b, "Z"];
        }, "triangle-down": function triangleDown(a, e, q, b) {
          return ["M", a, e, "L", a + q, e, a + q / 2, e + b, "Z"];
        }, diamond: function diamond(a, e, q, b) {
          return ["M", a + q / 2, e, "L", a + q, e + b / 2, a + q / 2, e + b, a, e + b / 2, "Z"];
        }, arc: function arc(a, e, q, b, k) {
          var f = k.start,
              l = k.r || q,
              d = k.r || b || q,
              n = k.end - .001;q = k.innerR;b = y(k.open, .001 > Math.abs(k.end - k.start - 2 * Math.PI));var g = Math.cos(f),
              J = Math.sin(f),
              E = Math.cos(n),
              n = Math.sin(n);k = .001 > k.end - f - Math.PI ? 0 : 1;l = ["M", a + l * g, e + d * J, "A", l, d, 0, k, 1, a + l * E, e + d * n];p(q) && l.push(b ? "M" : "L", a + q * E, e + q * n, "A", q, q, 0, k, 0, a + q * g, e + q * J);l.push(b ? "" : "Z");return l;
        }, callout: function callout(a, e, q, b, k) {
          var f = Math.min(k && k.r || 0, q, b),
              l = f + 6,
              d = k && k.anchorX;k = k && k.anchorY;var n;n = ["M", a + f, e, "L", a + q - f, e, "C", a + q, e, a + q, e, a + q, e + f, "L", a + q, e + b - f, "C", a + q, e + b, a + q, e + b, a + q - f, e + b, "L", a + f, e + b, "C", a, e + b, a, e + b, a, e + b - f, "L", a, e + f, "C", a, e, a, e, a + f, e];d && d > q ? k > e + l && k < e + b - l ? n.splice(13, 3, "L", a + q, k - 6, a + q + 6, k, a + q, k + 6, a + q, e + b - f) : n.splice(13, 3, "L", a + q, b / 2, d, k, a + q, b / 2, a + q, e + b - f) : d && 0 > d ? k > e + l && k < e + b - l ? n.splice(33, 3, "L", a, k + 6, a - 6, k, a, k - 6, a, e + f) : n.splice(33, 3, "L", a, b / 2, d, k, a, b / 2, a, e + f) : k && k > b && d > a + l && d < a + q - l ? n.splice(23, 3, "L", d + 6, e + b, d, e + b + 6, d - 6, e + b, a + f, e + b) : k && 0 > k && d > a + l && d < a + q - l && n.splice(3, 3, "L", d - 6, e, d, e - 6, d + 6, e, q - f, e);return n;
        } }, clipRect: function clipRect(e, q, b, k) {
        var f = a.uniqueKey(),
            d = this.createElement("clipPath").attr({ id: f }).add(this.defs);e = this.rect(e, q, b, k, 0).add(d);e.id = f;e.clipPath = d;e.count = 0;return e;
      }, text: function text(a, e, q, b) {
        var k = {};if (b && (this.allowHTML || !this.forExport)) return this.html(a, e, q);k.x = Math.round(e || 0);q && (k.y = Math.round(q));p(a) && (k.text = a);a = this.createElement("text").attr(k);b || (a.xSetter = function (a, e, q) {
          var b = q.getElementsByTagName("tspan"),
              k,
              f = q.getAttribute(e),
              d;for (d = 0; d < b.length; d++) {
            k = b[d], k.getAttribute(e) === f && k.setAttribute(e, a);
          }q.setAttribute(e, a);
        });return a;
      }, fontMetrics: function fontMetrics(a, q) {
        a = !this.styledMode && /px/.test(a) || !R.getComputedStyle ? a || q && q.style && q.style.fontSize || this.style && this.style.fontSize : q && z.prototype.getStyle.call(q, "font-size");a = /px/.test(a) ? e(a) : 12;q = 24 > a ? a + 3 : Math.round(1.2 * a);return { h: q, b: Math.round(.8 * q), f: a };
      }, rotCorr: function rotCorr(a, e, q) {
        var b = a;e && q && (b = Math.max(b * Math.cos(e * g), 4));return { x: -a / 3 * Math.sin(e * g), y: b };
      }, label: function label(e, b, f, d, l, g, J, E, v) {
        var m = this,
            c = m.styledMode,
            t = m.g("button" !== v && "label"),
            C = t.text = m.text("", 0, 0, J).attr({ zIndex: 1 }),
            K,
            L,
            B = 0,
            y = 3,
            A = 0,
            H,
            h,
            N,
            D,
            T,
            x = {},
            r,
            u,
            R = /^url\((.*?)\)$/.test(d),
            w = c || R,
            P = function P() {
          return c ? K.strokeWidth() % 2 / 2 : (r ? parseInt(r, 10) : 0) % 2 / 2;
        },
            U,
            O,
            S;v && t.addClass("highcharts-" + v);U = function U() {
          var a = C.element.style,
              e = {};L = (void 0 === H || void 0 === h || T) && p(C.textStr) && C.getBBox();t.width = (H || L.width || 0) + 2 * y + A;t.height = (h || L.height || 0) + 2 * y;u = y + Math.min(m.fontMetrics(a && a.fontSize, C).b, L ? L.height : Infinity);w && (K || (t.box = K = m.symbols[d] || R ? m.symbol(d) : m.rect(), K.addClass(("button" === v ? "" : "highcharts-label-box") + (v ? " highcharts-" + v + "-box" : "")), K.add(t), a = P(), e.x = a, e.y = (E ? -u : 0) + a), e.width = Math.round(t.width), e.height = Math.round(t.height), K.attr(n(e, x)), x = {});
        };O = function O() {
          var a = A + y,
              e;e = E ? 0 : u;p(H) && L && ("center" === T || "right" === T) && (a += { center: .5, right: 1 }[T] * (H - L.width));
          if (a !== C.x || e !== C.y) C.attr("x", a), C.hasBoxWidthChanged && (L = C.getBBox(!0), U()), void 0 !== e && C.attr("y", e);C.x = a;C.y = e;
        };S = function S(a, e) {
          K ? K.attr(a, e) : x[a] = e;
        };t.onAdd = function () {
          C.add(t);t.attr({ text: e || 0 === e ? e : "", x: b, y: f });K && p(l) && t.attr({ anchorX: l, anchorY: g });
        };t.widthSetter = function (e) {
          H = a.isNumber(e) ? e : null;
        };t.heightSetter = function (a) {
          h = a;
        };t["text-alignSetter"] = function (a) {
          T = a;
        };t.paddingSetter = function (a) {
          p(a) && a !== y && (y = t.padding = a, O());
        };t.paddingLeftSetter = function (a) {
          p(a) && a !== A && (A = a, O());
        };t.alignSetter = function (a) {
          a = { left: 0, center: .5, right: 1 }[a];a !== B && (B = a, L && t.attr({ x: N }));
        };t.textSetter = function (a) {
          void 0 !== a && C.textSetter(a);U();O();
        };t["stroke-widthSetter"] = function (a, e) {
          a && (w = !0);r = this["stroke-width"] = a;S(e, a);
        };c ? t.rSetter = function (a, e) {
          S(e, a);
        } : t.strokeSetter = t.fillSetter = t.rSetter = function (a, e) {
          "r" !== e && ("fill" === e && a && (w = !0), t[e] = a);S(e, a);
        };t.anchorXSetter = function (a, e) {
          l = t.anchorX = a;S(e, Math.round(a) - P() - N);
        };t.anchorYSetter = function (a, e) {
          g = t.anchorY = a;S(e, a - D);
        };t.xSetter = function (a) {
          t.x = a;B && (a -= B * ((H || L.width) + 2 * y), t["forceAnimate:x"] = !0);N = Math.round(a);t.attr("translateX", N);
        };t.ySetter = function (a) {
          D = t.y = Math.round(a);t.attr("translateY", D);
        };var G = t.css;J = { css: function css(a) {
            if (a) {
              var e = {};a = k(a);t.textProps.forEach(function (q) {
                void 0 !== a[q] && (e[q] = a[q], delete a[q]);
              });C.css(e);"width" in e && U();"fontSize" in e && (U(), O());
            }return G.call(t, a);
          }, getBBox: function getBBox() {
            return { width: L.width + 2 * y, height: L.height + 2 * y, x: L.x - y, y: L.y - y };
          }, destroy: function destroy() {
            q(t.element, "mouseenter");q(t.element, "mouseleave");
            C && (C = C.destroy());K && (K = K.destroy());z.prototype.destroy.call(t);t = m = U = O = S = null;
          } };c || (J.shadow = function (a) {
          a && (U(), K && K.shadow(a));return t;
        });return n(t, J);
      } });a.Renderer = F;
  })(I);(function (a) {
    var z = a.attr,
        F = a.createElement,
        G = a.css,
        h = a.defined,
        c = a.extend,
        r = a.isFirefox,
        u = a.isMS,
        w = a.isWebKit,
        x = a.pick,
        p = a.pInt,
        g = a.SVGElement,
        d = a.SVGRenderer,
        m = a.win;c(g.prototype, { htmlCss: function htmlCss(a) {
        var b = "SPAN" === this.element.tagName && a && "width" in a,
            d = x(b && a.width, void 0),
            f;b && (delete a.width, this.textWidth = d, f = !0);a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");this.styles = c(this.styles, a);G(this.element, a);f && this.htmlUpdateTransform();return this;
      }, htmlGetBBox: function htmlGetBBox() {
        var a = this.element;return { x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight };
      }, htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var a = this.renderer,
              b = this.element,
              d = this.translateX || 0,
              f = this.translateY || 0,
              g = this.x || 0,
              t = this.y || 0,
              m = this.textAlign || "left",
              c = { left: 0, center: .5, right: 1 }[m],
              A = this.styles,
              k = A && A.whiteSpace;G(b, { marginLeft: d, marginTop: f });!a.styledMode && this.shadows && this.shadows.forEach(function (a) {
            G(a, { marginLeft: d + 1, marginTop: f + 1 });
          });this.inverted && b.childNodes.forEach(function (e) {
            a.invertChild(e, b);
          });if ("SPAN" === b.tagName) {
            var A = this.rotation,
                E = this.textWidth && p(this.textWidth),
                C = [A, m, b.innerHTML, this.textWidth, this.textAlign].join(),
                y;(y = E !== this.oldTextWidth) && !(y = E > this.oldTextWidth) && ((y = this.textPxLength) || (G(b, { width: "", whiteSpace: k || "nowrap" }), y = b.offsetWidth), y = y > E);y && (/[ \-]/.test(b.textContent || b.innerText) || "ellipsis" === b.style.textOverflow) ? (G(b, { width: E + "px", display: "block", whiteSpace: k || "normal" }), this.oldTextWidth = E, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;C !== this.cTT && (k = a.fontMetrics(b.style.fontSize, b).b, !h(A) || A === (this.oldRotation || 0) && m === this.oldAlign || this.setSpanRotation(A, c, k), this.getSpanCorrection(!h(A) && this.textPxLength || b.offsetWidth, k, c, A, m));G(b, { left: g + (this.xCorr || 0) + "px", top: t + (this.yCorr || 0) + "px" });this.cTT = C;this.oldRotation = A;this.oldAlign = m;
          }
        } else this.alignOnAdd = !0;
      }, setSpanRotation: function setSpanRotation(a, b, d) {
        var f = {},
            l = this.renderer.getTransformKey();f[l] = f.transform = "rotate(" + a + "deg)";f[l + (r ? "Origin" : "-origin")] = f.transformOrigin = 100 * b + "% " + d + "px";G(this.element, f);
      }, getSpanCorrection: function getSpanCorrection(a, b, d) {
        this.xCorr = -a * d;this.yCorr = -b;
      } });c(d.prototype, { getTransformKey: function getTransformKey() {
        return u && !/Edge/.test(m.navigator.userAgent) ? "-ms-transform" : w ? "-webkit-transform" : r ? "MozTransform" : m.opera ? "-o-transform" : "";
      }, html: function html(d, b, l) {
        var f = this.createElement("span"),
            n = f.element,
            t = f.renderer,
            m = t.isSVG,
            p = function p(a, b) {
          ["opacity", "visibility"].forEach(function (k) {
            a[k + "Setter"] = function (a, e, q) {
              g.prototype[k + "Setter"].call(this, a, e, q);b[e] = a;
            };
          });a.addedSetters = !0;
        },
            A = a.charts[t.chartIndex],
            A = A && A.styledMode;f.textSetter = function (a) {
          a !== n.innerHTML && delete this.bBox;this.textStr = a;n.innerHTML = x(a, "");f.doTransform = !0;
        };m && p(f, f.element.style);f.xSetter = f.ySetter = f.alignSetter = f.rotationSetter = function (a, b) {
          "align" === b && (b = "textAlign");f[b] = a;f.doTransform = !0;
        };f.afterSetters = function () {
          this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
        };f.attr({ text: d, x: Math.round(b), y: Math.round(l) }).css({ position: "absolute" });A || f.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });n.style.whiteSpace = "nowrap";f.css = f.htmlCss;m && (f.add = function (a) {
          var b,
              k = t.box.parentNode,
              d = [];if (this.parentGroup = a) {
            if (b = a.div, !b) {
              for (; a;) {
                d.push(a), a = a.parentGroup;
              }d.reverse().forEach(function (a) {
                function e(e, q) {
                  a[q] = e;"translateX" === q ? l.left = e + "px" : l.top = e + "px";a.doTransform = !0;
                }var l,
                    g = z(a.element, "class");g && (g = { className: g });b = a.div = a.div || F("div", g, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, pointerEvents: a.styles && a.styles.pointerEvents }, b || k);l = b.style;c(a, { classSetter: function (a) {
                    return function (e) {
                      this.element.setAttribute("class", e);a.className = e;
                    };
                  }(b), on: function on() {
                    d[0].div && f.on.apply({ element: d[0].div }, arguments);return a;
                  }, translateXSetter: e, translateYSetter: e });
                a.addedSetters || p(a, l);
              });
            }
          } else b = k;b.appendChild(n);f.added = !0;f.alignOnAdd && f.htmlUpdateTransform();return f;
        });return f;
      } });
  })(I);(function (a) {
    var z = a.defined,
        F = a.extend,
        G = a.merge,
        h = a.pick,
        c = a.timeUnits,
        r = a.win;a.Time = function (a) {
      this.update(a, !1);
    };a.Time.prototype = { defaultOptions: {}, update: function update(a) {
        var c = h(a && a.useUTC, !0),
            x = this;this.options = a = G(!0, this.options || {}, a);this.Date = a.Date || r.Date;this.timezoneOffset = (this.useUTC = c) && a.timezoneOffset;this.getTimezoneOffset = this.timezoneOffsetFunction();
        (this.variableTimezone = !(c && !a.getTimezoneOffset && !a.timezone)) || this.timezoneOffset ? (this.get = function (a, g) {
          var d = g.getTime(),
              m = d - x.getTimezoneOffset(g);g.setTime(m);a = g["getUTC" + a]();g.setTime(d);return a;
        }, this.set = function (a, g, d) {
          var m;if ("Milliseconds" === a || "Seconds" === a || "Minutes" === a && 0 === g.getTimezoneOffset() % 60) g["set" + a](d);else m = x.getTimezoneOffset(g), m = g.getTime() - m, g.setTime(m), g["setUTC" + a](d), a = x.getTimezoneOffset(g), m = g.getTime() + a, g.setTime(m);
        }) : c ? (this.get = function (a, g) {
          return g["getUTC" + a]();
        }, this.set = function (a, g, d) {
          return g["setUTC" + a](d);
        }) : (this.get = function (a, g) {
          return g["get" + a]();
        }, this.set = function (a, g, d) {
          return g["set" + a](d);
        });
      }, makeTime: function makeTime(c, r, x, p, g, d) {
        var m, n, b;this.useUTC ? (m = this.Date.UTC.apply(0, arguments), n = this.getTimezoneOffset(m), m += n, b = this.getTimezoneOffset(m), n !== b ? m += b - n : n - 36E5 !== this.getTimezoneOffset(m - 36E5) || a.isSafari || (m -= 36E5)) : m = new this.Date(c, r, h(x, 1), h(p, 0), h(g, 0), h(d, 0)).getTime();return m;
      }, timezoneOffsetFunction: function timezoneOffsetFunction() {
        var c = this,
            h = this.options,
            x = r.moment;if (!this.useUTC) return function (a) {
          return 6E4 * new Date(a).getTimezoneOffset();
        };if (h.timezone) {
          if (x) return function (a) {
            return 6E4 * -x.tz(a, h.timezone).utcOffset();
          };a.error(25);
        }return this.useUTC && h.getTimezoneOffset ? function (a) {
          return 6E4 * h.getTimezoneOffset(a);
        } : function () {
          return 6E4 * (c.timezoneOffset || 0);
        };
      }, dateFormat: function dateFormat(c, h, x) {
        if (!a.defined(h) || isNaN(h)) return a.defaultOptions.lang.invalidDate || "";c = a.pick(c, "%Y-%m-%d %H:%M:%S");var p = this,
            g = new this.Date(h),
            d = this.get("Hours", g),
            m = this.get("Day", g),
            n = this.get("Date", g),
            b = this.get("Month", g),
            l = this.get("FullYear", g),
            f = a.defaultOptions.lang,
            v = f.weekdays,
            t = f.shortWeekdays,
            H = a.pad,
            g = a.extend({ a: t ? t[m] : v[m].substr(0, 3), A: v[m], d: H(n), e: H(n, 2, " "), w: m, b: f.shortMonths[b], B: f.months[b], m: H(b + 1), o: b + 1, y: l.toString().substr(2, 2), Y: l, H: H(d), k: d, I: H(d % 12 || 12), l: d % 12 || 12, M: H(p.get("Minutes", g)), p: 12 > d ? "AM" : "PM", P: 12 > d ? "am" : "pm", S: H(g.getSeconds()), L: H(Math.floor(h % 1E3), 3) }, a.dateFormats);a.objectEach(g, function (a, b) {
          for (; -1 !== c.indexOf("%" + b);) {
            c = c.replace("%" + b, "function" === typeof a ? a.call(p, h) : a);
          }
        });return x ? c.substr(0, 1).toUpperCase() + c.substr(1) : c;
      }, resolveDTLFormat: function resolveDTLFormat(c) {
        return a.isObject(c, !0) ? c : (c = a.splat(c), { main: c[0], from: c[1], to: c[2] });
      }, getTimeTicks: function getTimeTicks(a, r, x, p) {
        var g = this,
            d = [],
            m,
            n = {},
            b;m = new g.Date(r);var l = a.unitRange,
            f = a.count || 1,
            v;p = h(p, 1);if (z(r)) {
          g.set("Milliseconds", m, l >= c.second ? 0 : f * Math.floor(g.get("Milliseconds", m) / f));l >= c.second && g.set("Seconds", m, l >= c.minute ? 0 : f * Math.floor(g.get("Seconds", m) / f));l >= c.minute && g.set("Minutes", m, l >= c.hour ? 0 : f * Math.floor(g.get("Minutes", m) / f));l >= c.hour && g.set("Hours", m, l >= c.day ? 0 : f * Math.floor(g.get("Hours", m) / f));l >= c.day && g.set("Date", m, l >= c.month ? 1 : Math.max(1, f * Math.floor(g.get("Date", m) / f)));l >= c.month && (g.set("Month", m, l >= c.year ? 0 : f * Math.floor(g.get("Month", m) / f)), b = g.get("FullYear", m));l >= c.year && g.set("FullYear", m, b - b % f);l === c.week && (b = g.get("Day", m), g.set("Date", m, g.get("Date", m) - b + p + (b < p ? -7 : 0)));b = g.get("FullYear", m);p = g.get("Month", m);var t = g.get("Date", m),
              H = g.get("Hours", m);r = m.getTime();g.variableTimezone && (v = x - r > 4 * c.month || g.getTimezoneOffset(r) !== g.getTimezoneOffset(x));r = m.getTime();for (m = 1; r < x;) {
            d.push(r), r = l === c.year ? g.makeTime(b + m * f, 0) : l === c.month ? g.makeTime(b, p + m * f) : !v || l !== c.day && l !== c.week ? v && l === c.hour && 1 < f ? g.makeTime(b, p, t, H + m * f) : r + l * f : g.makeTime(b, p, t + m * f * (l === c.day ? 1 : 7)), m++;
          }d.push(r);l <= c.hour && 1E4 > d.length && d.forEach(function (a) {
            0 === a % 18E5 && "000000000" === g.dateFormat("%H%M%S%L", a) && (n[a] = "day");
          });
        }d.info = F(a, { higherRanks: n, totalRange: l * f });return d;
      } };
  })(I);
  (function (a) {
    var z = a.color,
        F = a.merge;a.defaultOptions = { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: { loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " " }, global: {}, time: a.Time.prototype.defaultOptions, chart: { styledMode: !1, borderRadius: 0, colorCount: 10, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc" }, title: { text: "Chart title", align: "center",
        margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: { enabled: !0, align: "center", alignColumns: !0, layout: "horizontal", labelFormatter: function labelFormatter() {
          return this.name;
        }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" },
        shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } } }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center" } }, tooltip: { enabled: !0, animation: a.svg, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M",
          day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", padding: 8, snap: a.isTouchDevice ? 25 : 10, headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e', pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>", backgroundColor: z("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, shadow: !0, style: { color: "#333333", cursor: "default", fontSize: "12px", pointerEvents: "none",
          whiteSpace: "nowrap" } }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" } };a.setOptions = function (z) {
      a.defaultOptions = F(!0, a.defaultOptions, z);a.time.update(F(a.defaultOptions.global, a.defaultOptions.time), !1);return a.defaultOptions;
    };a.getOptions = function () {
      return a.defaultOptions;
    };a.defaultPlotOptions = a.defaultOptions.plotOptions;a.time = new a.Time(F(a.defaultOptions.global, a.defaultOptions.time));a.dateFormat = function (z, h, c) {
      return a.time.dateFormat(z, h, c);
    };
  })(I);(function (a) {
    var z = a.correctFloat,
        F = a.defined,
        G = a.destroyObjectProperties,
        h = a.fireEvent,
        c = a.isNumber,
        r = a.merge,
        u = a.pick,
        w = a.deg2rad;a.Tick = function (a, c, g, d, m) {
      this.axis = a;this.pos = c;this.type = g || "";this.isNewLabel = this.isNew = !0;this.parameters = m || {};this.tickmarkOffset = this.parameters.tickmarkOffset;this.options = this.parameters.options;g || d || this.addLabel();
    };a.Tick.prototype = { addLabel: function addLabel() {
        var c = this,
            p = c.axis,
            g = p.options,
            d = p.chart,
            m = p.categories,
            n = p.names,
            b = c.pos,
            l = u(c.options && c.options.labels, g.labels),
            f = p.tickPositions,
            v = b === f[0],
            t = b === f[f.length - 1],
            m = this.parameters.category || (m ? u(m[b], n[b], b) : b),
            h = c.label,
            f = f.info,
            D,
            A,
            k,
            E;p.isDatetimeAxis && f && (A = d.time.resolveDTLFormat(g.dateTimeLabelFormats[!g.grid && f.higherRanks[b] || f.unitName]), D = A.main);c.isFirst = v;c.isLast = t;c.formatCtx = { axis: p, chart: d, isFirst: v, isLast: t, dateTimeLabelFormat: D, tickPositionInfo: f, value: p.isLog ? z(p.lin2log(m)) : m, pos: b };
        g = p.labelFormatter.call(c.formatCtx, this.formatCtx);if (E = A && A.list) c.shortenLabel = function () {
          for (k = 0; k < E.length; k++) {
            if (h.attr({ text: p.labelFormatter.call(a.extend(c.formatCtx, { dateTimeLabelFormat: E[k] })) }), h.getBBox().width < p.getSlotWidth(c) - 2 * u(l.padding, 5)) return;
          }h.attr({ text: "" });
        };if (F(h)) h && h.textStr !== g && (!h.textWidth || l.style && l.style.width || h.styles.width || h.css({ width: null }), h.attr({ text: g }));else {
          if (c.label = h = F(g) && l.enabled ? d.renderer.text(g, 0, 0, l.useHTML).add(p.labelGroup) : null) d.styledMode || h.css(r(l.style)), h.textPxLength = h.getBBox().width;c.rotation = 0;
        }
      }, getLabelSize: function getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      }, handleOverflow: function handleOverflow(a) {
        var c = this.axis,
            g = c.options.labels,
            d = a.x,
            m = c.chart.chartWidth,
            n = c.chart.spacing,
            b = u(c.labelLeft, Math.min(c.pos, n[3])),
            n = u(c.labelRight, Math.max(c.isRadial ? 0 : c.pos + c.len, m - n[1])),
            l = this.label,
            f = this.rotation,
            v = { left: 0, center: .5, right: 1 }[c.labelAlign || l.attr("align")],
            t = l.getBBox().width,
            h = c.getSlotWidth(this),
            D = h,
            A = 1,
            k,
            E = {};if (f || "justify" !== u(g.overflow, "justify")) 0 > f && d - v * t < b ? k = Math.round(d / Math.cos(f * w) - b) : 0 < f && d + v * t > n && (k = Math.round((m - d) / Math.cos(f * w)));else if (m = d + (1 - v) * t, d - v * t < b ? D = a.x + D * (1 - v) - b : m > n && (D = n - a.x + D * v, A = -1), D = Math.min(h, D), D < h && "center" === c.labelAlign && (a.x += A * (h - D - v * (h - Math.min(t, D)))), t > D || c.autoRotation && (l.styles || {}).width) k = D;k && (this.shortenLabel ? this.shortenLabel() : (E.width = Math.floor(k), (g.style || {}).textOverflow || (E.textOverflow = "ellipsis"), l.css(E)));
      }, getPosition: function getPosition(c, p, g, d) {
        var m = this.axis,
            n = m.chart,
            b = d && n.oldChartHeight || n.chartHeight;c = { x: c ? a.correctFloat(m.translate(p + g, null, null, d) + m.transB) : m.left + m.offset + (m.opposite ? (d && n.oldChartWidth || n.chartWidth) - m.right - m.left : 0), y: c ? b - m.bottom + m.offset - (m.opposite ? m.height : 0) : a.correctFloat(b - m.translate(p + g, null, null, d) - m.transB) };h(this, "afterGetPosition", { pos: c });return c;
      }, getLabelPosition: function getLabelPosition(a, c, g, d, m, n, b, l) {
        var f = this.axis,
            v = f.transA,
            t = f.reversed,
            p = f.staggerLines,
            D = f.tickRotCorr || { x: 0, y: 0 },
            A = m.y,
            k = d || f.reserveSpaceDefault ? 0 : -f.labelOffset * ("center" === f.labelAlign ? .5 : 1),
            E = {};F(A) || (A = 0 === f.side ? g.rotation ? -8 : -g.getBBox().height : 2 === f.side ? D.y + 8 : Math.cos(g.rotation * w) * (D.y - g.getBBox(!1, 0).height / 2));a = a + m.x + k + D.x - (n && d ? n * v * (t ? -1 : 1) : 0);c = c + A - (n && !d ? n * v * (t ? 1 : -1) : 0);p && (g = b / (l || 1) % p, f.opposite && (g = p - g - 1), c += f.labelOffset / p * g);E.x = a;E.y = Math.round(c);h(this, "afterGetLabelPosition", { pos: E, tickmarkOffset: n, index: b });return E;
      }, getMarkPath: function getMarkPath(a, c, g, d, m, n) {
        return n.crispLine(["M", a, c, "L", a + (m ? 0 : -g), c + (m ? g : 0)], d);
      }, renderGridLine: function renderGridLine(a, c, g) {
        var d = this.axis,
            m = d.options,
            n = this.gridLine,
            b = {},
            l = this.pos,
            f = this.type,
            v = u(this.tickmarkOffset, d.tickmarkOffset),
            t = d.chart.renderer,
            p = f ? f + "Grid" : "grid",
            h = m[p + "LineWidth"],
            A = m[p + "LineColor"],
            m = m[p + "LineDashStyle"];n || (d.chart.styledMode || (b.stroke = A, b["stroke-width"] = h, m && (b.dashstyle = m)), f || (b.zIndex = 1), a && (c = 0), this.gridLine = n = t.path().attr(b).addClass("highcharts-" + (f ? f + "-" : "") + "grid-line").add(d.gridGroup));if (n && (g = d.getPlotLinePath(l + v, n.strokeWidth() * g, a, "pass"))) n[a || this.isNew ? "attr" : "animate"]({ d: g, opacity: c });
      }, renderMark: function renderMark(a, c, g) {
        var d = this.axis,
            m = d.options,
            n = d.chart.renderer,
            b = this.type,
            l = b ? b + "Tick" : "tick",
            f = d.tickSize(l),
            v = this.mark,
            t = !v,
            p = a.x;a = a.y;var h = u(m[l + "Width"], !b && d.isXAxis ? 1 : 0),
            m = m[l + "Color"];f && (d.opposite && (f[0] = -f[0]), t && (this.mark = v = n.path().addClass("highcharts-" + (b ? b + "-" : "") + "tick").add(d.axisGroup), d.chart.styledMode || v.attr({ stroke: m, "stroke-width": h })), v[t ? "attr" : "animate"]({ d: this.getMarkPath(p, a, f[0], v.strokeWidth() * g, d.horiz, n), opacity: c }));
      },
      renderLabel: function renderLabel(a, p, g, d) {
        var m = this.axis,
            n = m.horiz,
            b = m.options,
            l = this.label,
            f = b.labels,
            v = f.step,
            m = u(this.tickmarkOffset, m.tickmarkOffset),
            t = !0,
            h = a.x;a = a.y;l && c(h) && (l.xy = a = this.getLabelPosition(h, a, l, n, f, m, d, v), this.isFirst && !this.isLast && !u(b.showFirstLabel, 1) || this.isLast && !this.isFirst && !u(b.showLastLabel, 1) ? t = !1 : !n || f.step || f.rotation || p || 0 === g || this.handleOverflow(a), v && d % v && (t = !1), t && c(a.y) ? (a.opacity = g, l[this.isNewLabel ? "attr" : "animate"](a), this.isNewLabel = !1) : (l.attr("y", -9999), this.isNewLabel = !0));
      }, render: function render(c, p, g) {
        var d = this.axis,
            m = d.horiz,
            n = this.pos,
            b = u(this.tickmarkOffset, d.tickmarkOffset),
            n = this.getPosition(m, n, b, p),
            b = n.x,
            l = n.y,
            d = m && b === d.pos + d.len || !m && l === d.pos ? -1 : 1;g = u(g, 1);this.isActive = !0;this.renderGridLine(p, g, d);this.renderMark(n, g, d);this.renderLabel(n, p, g, c);this.isNew = !1;a.fireEvent(this, "afterRender");
      }, destroy: function destroy() {
        G(this, this.axis);
      } };
  })(I);var X = function (a) {
    var z = a.addEvent,
        F = a.animObject,
        G = a.arrayMax,
        h = a.arrayMin,
        c = a.color,
        r = a.correctFloat,
        u = a.defaultOptions,
        w = a.defined,
        x = a.deg2rad,
        p = a.destroyObjectProperties,
        g = a.extend,
        d = a.fireEvent,
        m = a.format,
        n = a.getMagnitude,
        b = a.isArray,
        l = a.isNumber,
        f = a.isString,
        v = a.merge,
        t = a.normalizeTickInterval,
        H = a.objectEach,
        D = a.pick,
        A = a.removeEvent,
        k = a.splat,
        E = a.syncTimeout,
        C = a.Tick,
        y = function y() {
      this.init.apply(this, arguments);
    };a.extend(y.prototype, { defaultOptions: { dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: !1 }, second: { main: "%H:%M:%S", range: !1 }, minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e. %b" },
          week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: !1, labels: { enabled: !0, indentation: 10, x: 0, style: { color: "#666666", cursor: "default", fontSize: "11px" } }, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", minPadding: .01, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", style: { color: "#666666" } }, type: "linear", minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb",
        lineWidth: 1, gridLineColor: "#e6e6e6", tickColor: "#ccd6eb" }, defaultYAxisOptions: { endOnTick: !0, maxPadding: .05, minPadding: .05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { allowOverlap: !1, enabled: !1, formatter: function formatter() {
            return a.numberFormat(this.total, -1);
          }, style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 }, defaultLeftAxisOptions: { labels: { x: -15 }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { x: 15 },
        title: { rotation: 90 } }, defaultBottomAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { autoRotation: [-45], x: 0 }, title: { rotation: 0 } }, init: function init(a, q) {
        var e = q.isX,
            b = this;b.chart = a;b.horiz = a.inverted && !b.isZAxis ? !e : e;b.isXAxis = e;b.coll = b.coll || (e ? "xAxis" : "yAxis");d(this, "init", { userOptions: q });b.opposite = q.opposite;b.side = q.side || (b.horiz ? b.opposite ? 0 : 2 : b.opposite ? 1 : 3);b.setOptions(q);var f = this.options,
            l = f.type;b.labelFormatter = f.labels.formatter || b.defaultLabelFormatter;
        b.userOptions = q;b.minPixelPadding = 0;b.reversed = f.reversed;b.visible = !1 !== f.visible;b.zoomEnabled = !1 !== f.zoomEnabled;b.hasNames = "category" === l || !0 === f.categories;b.categories = f.categories || b.hasNames;b.names || (b.names = [], b.names.keys = {});b.plotLinesAndBandsGroups = {};b.isLog = "logarithmic" === l;b.isDatetimeAxis = "datetime" === l;b.positiveValuesOnly = b.isLog && !b.allowNegativeLog;b.isLinked = w(f.linkedTo);b.ticks = {};b.labelEdge = [];b.minorTicks = {};b.plotLinesAndBands = [];b.alternateBands = {};b.len = 0;b.minRange = b.userMinRange = f.minRange || f.maxZoom;b.range = f.range;b.offset = f.offset || 0;b.stacks = {};b.oldStacks = {};b.stacksTouched = 0;b.max = null;b.min = null;b.crosshair = D(f.crosshair, k(a.options.tooltip.crosshairs)[e ? 0 : 1], !1);q = b.options.events;-1 === a.axes.indexOf(b) && (e ? a.axes.splice(a.xAxis.length, 0, b) : a.axes.push(b), a[b.coll].push(b));b.series = b.series || [];a.inverted && !b.isZAxis && e && void 0 === b.reversed && (b.reversed = !0);H(q, function (a, e) {
          z(b, e, a);
        });b.lin2log = f.linearToLogConverter || b.lin2log;b.isLog && (b.val2lin = b.log2lin, b.lin2val = b.lin2log);d(this, "afterInit");
      }, setOptions: function setOptions(a) {
        this.options = v(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], v(u[this.coll], a));d(this, "afterSetOptions", { userOptions: a });
      }, defaultLabelFormatter: function defaultLabelFormatter() {
        var e = this.axis,
            q = this.value,
            b = e.chart.time,
            k = e.categories,
            f = this.dateTimeLabelFormat,
            d = u.lang,
            l = d.numericSymbols,
            d = d.numericSymbolMagnitude || 1E3,
            g = l && l.length,
            n,
            c = e.options.labels.format,
            e = e.isLog ? Math.abs(q) : e.tickInterval;if (c) n = m(c, this, b);else if (k) n = q;else if (f) n = b.dateFormat(f, q);else if (g && 1E3 <= e) for (; g-- && void 0 === n;) {
          b = Math.pow(d, g + 1), e >= b && 0 === 10 * q % b && null !== l[g] && 0 !== q && (n = a.numberFormat(q / b, -1) + l[g]);
        }void 0 === n && (n = 1E4 <= Math.abs(q) ? a.numberFormat(q, -1) : a.numberFormat(q, -1, void 0, ""));return n;
      }, getSeriesExtremes: function getSeriesExtremes() {
        var a = this,
            q = a.chart;d(this, "getSeriesExtremes", null, function () {
          a.hasVisibleSeries = !1;a.dataMin = a.dataMax = a.threshold = null;a.softThreshold = !a.isXAxis;a.buildStacks && a.buildStacks();a.series.forEach(function (e) {
            if (e.visible || !q.options.chart.ignoreHiddenSeries) {
              var b = e.options,
                  f = b.threshold,
                  k;a.hasVisibleSeries = !0;a.positiveValuesOnly && 0 >= f && (f = null);if (a.isXAxis) b = e.xData, b.length && (e = h(b), k = G(b), l(e) || e instanceof Date || (b = b.filter(l), e = h(b), k = G(b)), b.length && (a.dataMin = Math.min(D(a.dataMin, b[0], e), e), a.dataMax = Math.max(D(a.dataMax, b[0], k), k)));else if (e.getExtremes(), k = e.dataMax, e = e.dataMin, w(e) && w(k) && (a.dataMin = Math.min(D(a.dataMin, e), e), a.dataMax = Math.max(D(a.dataMax, k), k)), w(f) && (a.threshold = f), !b.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
            }
          });
        });d(this, "afterGetSeriesExtremes");
      }, translate: function translate(a, q, b, k, f, d) {
        var e = this.linkedParent || this,
            g = 1,
            n = 0,
            c = k ? e.oldTransA : e.transA;k = k ? e.oldMin : e.min;var t = e.minPixelPadding;f = (e.isOrdinal || e.isBroken || e.isLog && f) && e.lin2val;c || (c = e.transA);b && (g *= -1, n = e.len);e.reversed && (g *= -1, n -= g * (e.sector || e.len));q ? (a = (a * g + n - t) / c + k, f && (a = e.lin2val(a))) : (f && (a = e.val2lin(a)), a = l(k) ? g * (a - k) * c + n + g * t + (l(d) ? c * d : 0) : void 0);return a;
      }, toPixels: function toPixels(a, q) {
        return this.translate(a, !1, !this.horiz, null, !0) + (q ? 0 : this.pos);
      }, toValue: function toValue(a, q) {
        return this.translate(a - (q ? 0 : this.pos), !0, !this.horiz, null, !0);
      }, getPlotLinePath: function getPlotLinePath(a, q, b, k, f) {
        var e = this,
            g = e.chart,
            n = e.left,
            c = e.top,
            t,
            m,
            v,
            E,
            C = b && g.oldChartHeight || g.chartHeight,
            p = b && g.oldChartWidth || g.chartWidth,
            h,
            L = e.transB,
            y,
            A = function A(a, e, q) {
          if ("pass" !== k && a < e || a > q) k ? a = Math.min(Math.max(e, a), q) : h = !0;return a;
        };
        y = { value: a, lineWidth: q, old: b, force: k, translatedValue: f };d(this, "getPlotLinePath", y, function (d) {
          f = D(f, e.translate(a, null, null, b));f = Math.min(Math.max(-1E5, f), 1E5);t = v = Math.round(f + L);m = E = Math.round(C - f - L);l(f) ? e.horiz ? (m = c, E = C - e.bottom, t = v = A(t, n, n + e.width)) : (t = n, v = p - e.right, m = E = A(m, c, c + e.height)) : (h = !0, k = !1);d.path = h && !k ? null : g.renderer.crispLine(["M", t, m, "L", v, E], q || 1);
        });return y.path;
      }, getLinearTickPositions: function getLinearTickPositions(a, q, b) {
        var e,
            k = r(Math.floor(q / a) * a);b = r(Math.ceil(b / a) * a);var f = [],
            d;r(k + a) === k && (d = 20);if (this.single) return [q];for (q = k; q <= b;) {
          f.push(q);q = r(q + a, d);if (q === e) break;e = q;
        }return f;
      }, getMinorTickInterval: function getMinorTickInterval() {
        var a = this.options;return !0 === a.minorTicks ? D(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
      }, getMinorTickPositions: function getMinorTickPositions() {
        var a = this,
            q = a.options,
            b = a.tickPositions,
            k = a.minorTickInterval,
            f = [],
            d = a.pointRangePadding || 0,
            l = a.min - d,
            d = a.max + d,
            g = d - l;if (g && g / k < a.len / 3) if (a.isLog) this.paddedTicks.forEach(function (e, q, b) {
          q && f.push.apply(f, a.getLogTickPositions(k, b[q - 1], b[q], !0));
        });else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) f = f.concat(a.getTimeTicks(a.normalizeTimeTickInterval(k), l, d, q.startOfWeek));else for (q = l + (b[0] - l) % k; q <= d && q !== f[0]; q += k) {
          f.push(q);
        }0 !== f.length && a.trimTicks(f);return f;
      }, adjustForMinRange: function adjustForMinRange() {
        var a = this.options,
            q = this.min,
            b = this.max,
            f,
            k,
            d,
            l,
            g,
            n,
            c,
            t;this.isXAxis && void 0 === this.minRange && !this.isLog && (w(a.min) || w(a.max) ? this.minRange = null : (this.series.forEach(function (a) {
          n = a.xData;for (l = c = a.xIncrement ? 1 : n.length - 1; 0 < l; l--) {
            if (g = n[l] - n[l - 1], void 0 === d || g < d) d = g;
          }
        }), this.minRange = Math.min(5 * d, this.dataMax - this.dataMin)));b - q < this.minRange && (k = this.dataMax - this.dataMin >= this.minRange, t = this.minRange, f = (t - b + q) / 2, f = [q - f, D(a.min, q - f)], k && (f[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), q = G(f), b = [q + t, D(a.max, q + t)], k && (b[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), b = h(b), b - q < t && (f[0] = b - t, f[1] = D(a.min, b - t), q = G(f)));this.min = q;this.max = b;
      }, getClosest: function getClosest() {
        var a;this.categories ? a = 1 : this.series.forEach(function (e) {
          var q = e.closestPointRange,
              b = e.visible || !e.chart.options.chart.ignoreHiddenSeries;!e.noSharedTooltip && w(q) && b && (a = w(a) ? Math.min(a, q) : q);
        });return a;
      }, nameToX: function nameToX(a) {
        var e = b(this.categories),
            f = e ? this.categories : this.names,
            k = a.options.x,
            d;a.series.requireSorting = !1;w(k) || (k = !1 === this.options.uniqueNames ? a.series.autoIncrement() : e ? f.indexOf(a.name) : D(f.keys[a.name], -1));-1 === k ? e || (d = f.length) : d = k;void 0 !== d && (this.names[d] = a.name, this.names.keys[a.name] = d);return d;
      }, updateNames: function updateNames() {
        var a = this,
            b = this.names;
        0 < b.length && (Object.keys(b.keys).forEach(function (a) {
          delete b.keys[a];
        }), b.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (e) {
          e.xIncrement = null;if (!e.points || e.isDirtyData) a.max = Math.max(a.max, e.xData.length - 1), e.processData(), e.generatePoints();e.data.forEach(function (b, q) {
            var f;b && b.options && void 0 !== b.name && (f = a.nameToX(b), void 0 !== f && f !== b.x && (b.x = f, e.xData[q] = f));
          });
        }));
      }, setAxisTranslation: function setAxisTranslation(a) {
        var e = this,
            b = e.max - e.min,
            k = e.axisPointRange || 0,
            l,
            g = 0,
            n = 0,
            c = e.linkedParent,
            t = !!e.categories,
            m = e.transA,
            v = e.isXAxis;if (v || t || k) l = e.getClosest(), c ? (g = c.minPointOffset, n = c.pointRangePadding) : e.series.forEach(function (a) {
          var b = t ? 1 : v ? D(a.options.pointRange, l, 0) : e.axisPointRange || 0;a = a.options.pointPlacement;k = Math.max(k, b);e.single || (g = Math.max(g, v && f(a) ? 0 : b / 2), n = Math.max(n, v && "on" === a ? 0 : b));
        }), c = e.ordinalSlope && l ? e.ordinalSlope / l : 1, e.minPointOffset = g *= c, e.pointRangePadding = n *= c, e.pointRange = Math.min(k, b), v && (e.closestPointRange = l);a && (e.oldTransA = m);e.translationSlope = e.transA = m = e.staticScale || e.len / (b + n || 1);e.transB = e.horiz ? e.left : e.bottom;e.minPixelPadding = m * g;d(this, "afterSetAxisTranslation");
      }, minFromRange: function minFromRange() {
        return this.max - this.range;
      }, setTickInterval: function setTickInterval(e) {
        var b = this,
            f = b.chart,
            k = b.options,
            g = b.isLog,
            c = b.isDatetimeAxis,
            m = b.isXAxis,
            v = b.isLinked,
            E = k.maxPadding,
            C = k.minPadding,
            p,
            h = k.tickInterval,
            y = k.tickPixelInterval,
            A = b.categories,
            H = l(b.threshold) ? b.threshold : null,
            x = b.softThreshold,
            u,
            z,
            G;c || A || v || this.getTickAmount();z = D(b.userMin, k.min);G = D(b.userMax, k.max);
        v ? (b.linkedParent = f[b.coll][k.linkedTo], p = b.linkedParent.getExtremes(), b.min = D(p.min, p.dataMin), b.max = D(p.max, p.dataMax), k.type !== b.linkedParent.options.type && a.error(11, 1, f)) : (!x && w(H) && (b.dataMin >= H ? (p = H, C = 0) : b.dataMax <= H && (u = H, E = 0)), b.min = D(z, p, b.dataMin), b.max = D(G, u, b.dataMax));g && (b.positiveValuesOnly && !e && 0 >= Math.min(b.min, D(b.dataMin, b.min)) && a.error(10, 1, f), b.min = r(b.log2lin(b.min), 15), b.max = r(b.log2lin(b.max), 15));b.range && w(b.max) && (b.userMin = b.min = z = Math.max(b.dataMin, b.minFromRange()), b.userMax = G = b.max, b.range = null);d(b, "foundExtremes");b.beforePadding && b.beforePadding();b.adjustForMinRange();!(A || b.axisPointRange || b.usePercentage || v) && w(b.min) && w(b.max) && (f = b.max - b.min) && (!w(z) && C && (b.min -= f * C), !w(G) && E && (b.max += f * E));l(k.softMin) && !l(b.userMin) && (b.min = Math.min(b.min, k.softMin));l(k.softMax) && !l(b.userMax) && (b.max = Math.max(b.max, k.softMax));l(k.floor) && (b.min = Math.min(Math.max(b.min, k.floor), Number.MAX_VALUE));l(k.ceiling) && (b.max = Math.max(Math.min(b.max, k.ceiling), D(b.userMax, -Number.MAX_VALUE)));x && w(b.dataMin) && (H = H || 0, !w(z) && b.min < H && b.dataMin >= H ? b.min = H : !w(G) && b.max > H && b.dataMax <= H && (b.max = H));b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : v && !h && y === b.linkedParent.options.tickPixelInterval ? h = b.linkedParent.tickInterval : D(h, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, A ? 1 : (b.max - b.min) * y / Math.max(b.len, y));m && !e && b.series.forEach(function (a) {
          a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
        });b.setAxisTranslation(!0);b.beforeSetTickPositions && b.beforeSetTickPositions();b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));b.pointRange && !h && (b.tickInterval = Math.max(b.pointRange, b.tickInterval));e = D(k.minTickInterval, b.isDatetimeAxis && b.closestPointRange);!h && b.tickInterval < e && (b.tickInterval = e);c || g || h || (b.tickInterval = t(b.tickInterval, null, n(b.tickInterval), D(k.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));this.tickAmount || (b.tickInterval = b.unsquish());
        this.setTickPositions();
      }, setTickPositions: function setTickPositions() {
        var e = this.options,
            b,
            k = e.tickPositions;b = this.getMinorTickInterval();var f = e.tickPositioner,
            l = e.startOnTick,
            g = e.endOnTick;this.tickmarkOffset = this.categories && "between" === e.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;this.minorTickInterval = "auto" === b && this.tickInterval ? this.tickInterval / 5 : b;this.single = this.min === this.max && w(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== e.allowDecimals);this.tickPositions = b = k && k.slice();
        !b && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (b = [this.min, this.max], a.error(19, !1, this.chart)) : b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, e.units), this.min, this.max, e.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()], b[0] === b[1] && (b.length = 1)), this.tickPositions = b, f && (f = f.apply(this, [this.min, this.max]))) && (this.tickPositions = b = f);this.paddedTicks = b.slice(0);this.trimTicks(b, l, g);this.isLinked || (this.single && 2 > b.length && (this.min -= .5, this.max += .5), k || f || this.adjustTickAmount());d(this, "afterSetTickPositions");
      }, trimTicks: function trimTicks(a, b, k) {
        var e = a[0],
            f = a[a.length - 1],
            q = this.minPointOffset || 0;d(this, "trimTicks");if (!this.isLinked) {
          if (b && -Infinity !== e) this.min = e;else for (; this.min - q > a[0];) {
            a.shift();
          }if (k) this.max = f;else for (; this.max + q < a[a.length - 1];) {
            a.pop();
          }0 === a.length && w(e) && !this.options.tickPositions && a.push((f + e) / 2);
        }
      }, alignToOthers: function alignToOthers() {
        var a = {},
            b,
            k = this.options;!1 === this.chart.options.chart.alignTicks || !1 === k.alignTicks || !1 === k.startOnTick || !1 === k.endOnTick || this.isLog || this.chart[this.coll].forEach(function (e) {
          var k = e.options,
              k = [e.horiz ? k.left : k.top, k.width, k.height, k.pane].join();e.series.length && (a[k] ? b = !0 : a[k] = 1);
        });return b;
      }, getTickAmount: function getTickAmount() {
        var a = this.options,
            b = a.tickAmount,
            k = a.tickPixelInterval;!w(a.tickInterval) && this.len < k && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);!b && this.alignToOthers() && (b = Math.ceil(this.len / k) + 1);4 > b && (this.finalTickAmt = b, b = 5);this.tickAmount = b;
      }, adjustTickAmount: function adjustTickAmount() {
        var a = this.options,
            b = this.tickInterval,
            k = this.tickPositions,
            f = this.tickAmount,
            d = this.finalTickAmt,
            l = k && k.length,
            g = D(this.threshold, this.softThreshold ? 0 : null),
            n;if (this.hasData()) {
          if (l < f) {
            for (n = this.min; k.length < f;) {
              k.length % 2 || n === g ? k.push(r(k[k.length - 1] + b)) : k.unshift(r(k[0] - b));
            }this.transA *= (l - 1) / (f - 1);this.min = a.startOnTick ? k[0] : Math.min(this.min, k[0]);this.max = a.endOnTick ? k[k.length - 1] : Math.max(this.max, k[k.length - 1]);
          } else l > f && (this.tickInterval *= 2, this.setTickPositions());if (w(d)) {
            for (b = a = k.length; b--;) {
              (3 === d && 1 === b % 2 || 2 >= d && 0 < b && b < a - 1) && k.splice(b, 1);
            }this.finalTickAmt = void 0;
          }
        }
      }, setScale: function setScale() {
        var a, b;this.oldMin = this.min;this.oldMax = this.max;this.oldAxisLength = this.len;this.setAxisSize();b = this.len !== this.oldAxisLength;this.series.forEach(function (e) {
          if (e.isDirtyData || e.isDirty || e.xAxis.isDirty) a = !0;
        });b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks();d(this, "afterSetScale");
      }, setExtremes: function setExtremes(a, b, k, f, l) {
        var e = this,
            q = e.chart;
        k = D(k, !0);e.series.forEach(function (a) {
          delete a.kdTree;
        });l = g(l, { min: a, max: b });d(e, "setExtremes", l, function () {
          e.userMin = a;e.userMax = b;e.eventArgs = l;k && q.redraw(f);
        });
      }, zoom: function zoom(a, b) {
        var e = this.dataMin,
            k = this.dataMax,
            f = this.options,
            l = Math.min(e, D(f.min, e)),
            q = Math.max(k, D(f.max, k));a = { newMin: a, newMax: b };d(this, "zoom", a, function (a) {
          var b = a.newMin,
              f = a.newMax;if (b !== this.min || f !== this.max) this.allowZoomOutside || (w(e) && (b < l && (b = l), b > q && (b = q)), w(k) && (f < l && (f = l), f > q && (f = q))), this.displayBtn = void 0 !== b || void 0 !== f, this.setExtremes(b, f, !1, void 0, { trigger: "zoom" });a.zoomed = !0;
        });return a.zoomed;
      }, setAxisSize: function setAxisSize() {
        var e = this.chart,
            b = this.options,
            k = b.offsets || [0, 0, 0, 0],
            f = this.horiz,
            d = this.width = Math.round(a.relativeLength(D(b.width, e.plotWidth - k[3] + k[1]), e.plotWidth)),
            l = this.height = Math.round(a.relativeLength(D(b.height, e.plotHeight - k[0] + k[2]), e.plotHeight)),
            g = this.top = Math.round(a.relativeLength(D(b.top, e.plotTop + k[0]), e.plotHeight, e.plotTop)),
            b = this.left = Math.round(a.relativeLength(D(b.left, e.plotLeft + k[3]), e.plotWidth, e.plotLeft));this.bottom = e.chartHeight - l - g;this.right = e.chartWidth - d - b;this.len = Math.max(f ? d : l, 0);this.pos = f ? b : g;
      }, getExtremes: function getExtremes() {
        var a = this.isLog;return { min: a ? r(this.lin2log(this.min)) : this.min, max: a ? r(this.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
      }, getThreshold: function getThreshold(a) {
        var e = this.isLog,
            b = e ? this.lin2log(this.min) : this.min,
            e = e ? this.lin2log(this.max) : this.max;null === a || -Infinity === a ? a = b : Infinity === a ? a = e : b > a ? a = b : e < a && (a = e);return this.translate(a, 0, 1, 0, 1);
      }, autoLabelAlign: function autoLabelAlign(a) {
        var e = (D(a, 0) - 90 * this.side + 720) % 360;a = { align: "center" };d(this, "autoLabelAlign", a, function (a) {
          15 < e && 165 > e ? a.align = "right" : 195 < e && 345 > e && (a.align = "left");
        });return a.align;
      }, tickSize: function tickSize(a) {
        var e = this.options,
            b = e[a + "Length"],
            k = D(e[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0),
            f;k && b && ("inside" === e[a + "Position"] && (b = -b), f = [b, k]);a = { tickSize: f };d(this, "afterTickSize", a);return a.tickSize;
      }, labelMetrics: function labelMetrics() {
        var a = this.tickPositions && this.tickPositions[0] || 0;return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      }, unsquish: function unsquish() {
        var a = this.options.labels,
            b = this.horiz,
            k = this.tickInterval,
            f = k,
            d = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / k),
            l,
            g = a.rotation,
            n = this.labelMetrics(),
            c,
            t = Number.MAX_VALUE,
            m,
            v = this.max - this.min,
            E = function E(a) {
          var b = a / (d || 1),
              b = 1 < b ? Math.ceil(b) : 1;b * k > v && Infinity !== a && Infinity !== d && (b = Math.ceil(v / k));return r(b * k);
        };
        b ? (m = !a.staggerLines && !a.step && (w(g) ? [g] : d < D(a.autoRotationLimit, 80) && a.autoRotation)) && m.forEach(function (a) {
          var b;if (a === g || a && -90 <= a && 90 >= a) c = E(Math.abs(n.h / Math.sin(x * a))), b = c + Math.abs(a / 360), b < t && (t = b, l = a, f = c);
        }) : a.step || (f = E(n.h));this.autoRotation = m;this.labelRotation = D(l, g);return f;
      }, getSlotWidth: function getSlotWidth(a) {
        var b = this.chart,
            e = this.horiz,
            k = this.options.labels,
            f = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            d = b.margin[3];return a && a.slotWidth || e && 2 > (k.step || 0) && !k.rotation && (this.staggerLines || 1) * this.len / f || !e && (k.style && parseInt(k.style.width, 10) || d && d - b.spacing[3] || .33 * b.chartWidth);
      }, renderUnsquish: function renderUnsquish() {
        var a = this.chart,
            b = a.renderer,
            k = this.tickPositions,
            d = this.ticks,
            l = this.options.labels,
            g = l && l.style || {},
            n = this.horiz,
            c = this.getSlotWidth(),
            t = Math.max(1, Math.round(c - 2 * (l.padding || 5))),
            m = {},
            v = this.labelMetrics(),
            E = l.style && l.style.textOverflow,
            C,
            p,
            h = 0,
            y;f(l.rotation) || (m.rotation = l.rotation || 0);k.forEach(function (a) {
          (a = d[a]) && a.label && a.label.textPxLength > h && (h = a.label.textPxLength);
        });
        this.maxLabelLength = h;if (this.autoRotation) h > t && h > v.h ? m.rotation = this.labelRotation : this.labelRotation = 0;else if (c && (C = t, !E)) for (p = "clip", t = k.length; !n && t--;) {
          if (y = k[t], y = d[y].label) y.styles && "ellipsis" === y.styles.textOverflow ? y.css({ textOverflow: "clip" }) : y.textPxLength > c && y.css({ width: c + "px" }), y.getBBox().height > this.len / k.length - (v.h - v.f) && (y.specificTextOverflow = "ellipsis");
        }m.rotation && (C = h > .5 * a.chartHeight ? .33 * a.chartHeight : h, E || (p = "ellipsis"));if (this.labelAlign = l.align || this.autoLabelAlign(this.labelRotation)) m.align = this.labelAlign;k.forEach(function (a) {
          var b = (a = d[a]) && a.label,
              e = g.width,
              k = {};b && (b.attr(m), a.shortenLabel ? a.shortenLabel() : C && !e && "nowrap" !== g.whiteSpace && (C < b.textPxLength || "SPAN" === b.element.tagName) ? (k.width = C, E || (k.textOverflow = b.specificTextOverflow || p), b.css(k)) : b.styles && b.styles.width && !k.width && !e && b.css({ width: null }), delete b.specificTextOverflow, a.rotation = m.rotation);
        }, this);this.tickRotCorr = b.rotCorr(v.b, this.labelRotation || 0, 0 !== this.side);
      }, hasData: function hasData() {
        return this.hasVisibleSeries || w(this.min) && w(this.max) && this.tickPositions && 0 < this.tickPositions.length;
      }, addTitle: function addTitle(a) {
        var b = this.chart.renderer,
            e = this.horiz,
            k = this.opposite,
            f = this.options.title,
            d,
            l = this.chart.styledMode;this.axisTitle || ((d = f.textAlign) || (d = (e ? { low: "left", middle: "center", high: "right" } : { low: k ? "right" : "left", middle: "center", high: k ? "left" : "right" })[f.align]), this.axisTitle = b.text(f.text, 0, 0, f.useHTML).attr({ zIndex: 7, rotation: f.rotation || 0, align: d }).addClass("highcharts-axis-title"), l || this.axisTitle.css(v(f.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);l || f.style.width || this.isRadial || this.axisTitle.css({ width: this.len });this.axisTitle[a ? "show" : "hide"](!0);
      }, generateTick: function generateTick(a) {
        var b = this.ticks;b[a] ? b[a].addLabel() : b[a] = new C(this, a);
      }, getOffset: function getOffset() {
        var a = this,
            b = a.chart,
            k = b.renderer,
            f = a.options,
            l = a.tickPositions,
            g = a.ticks,
            n = a.horiz,
            c = a.side,
            t = b.inverted && !a.isZAxis ? [1, 0, 3, 2][c] : c,
            m,
            v,
            E = 0,
            C,
            p = 0,
            h = f.title,
            y = f.labels,
            A = 0,
            r = b.axisOffset,
            b = b.clipOffset,
            x = [-1, 1, 1, -1][c],
            u = f.className,
            z = a.axisParent;m = a.hasData();a.showAxis = v = m || D(f.showEmpty, !0);a.staggerLines = a.horiz && y.staggerLines;a.axisGroup || (a.gridGroup = k.g("grid").attr({ zIndex: f.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (u || "")).add(z), a.axisGroup = k.g("axis").attr({ zIndex: f.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (u || "")).add(z), a.labelGroup = k.g("axis-labels").attr({ zIndex: y.zIndex || 7 }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (u || "")).add(z));m || a.isLinked ? (l.forEach(function (b, e) {
          a.generateTick(b, e);
        }), a.renderUnsquish(), a.reserveSpaceDefault = 0 === c || 2 === c || { 1: "left", 3: "right" }[c] === a.labelAlign, D(y.reserveSpace, "center" === a.labelAlign ? !0 : null, a.reserveSpaceDefault) && l.forEach(function (a) {
          A = Math.max(g[a].getLabelSize(), A);
        }), a.staggerLines && (A *= a.staggerLines), a.labelOffset = A * (a.opposite ? -1 : 1)) : H(g, function (a, b) {
          a.destroy();delete g[b];
        });h && h.text && !1 !== h.enabled && (a.addTitle(v), v && !1 !== h.reserveSpace && (a.titleOffset = E = a.axisTitle.getBBox()[n ? "height" : "width"], C = h.offset, p = w(C) ? 0 : D(h.margin, n ? 5 : 10)));a.renderLine();a.offset = x * D(f.offset, r[c]);a.tickRotCorr = a.tickRotCorr || { x: 0, y: 0 };k = 0 === c ? -a.labelMetrics().h : 2 === c ? a.tickRotCorr.y : 0;p = Math.abs(A) + p;A && (p = p - k + x * (n ? D(y.y, a.tickRotCorr.y + 8 * x) : y.x));a.axisTitleMargin = D(C, p);a.getMaxLabelDimensions && (a.maxLabelDimensions = a.getMaxLabelDimensions(g, l));n = this.tickSize("tick");r[c] = Math.max(r[c], a.axisTitleMargin + E + x * a.offset, p, m && l.length && n ? n[0] + x * a.offset : 0);f = f.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);b[t] = Math.max(b[t], f);d(this, "afterGetOffset");
      }, getLinePath: function getLinePath(a) {
        var b = this.chart,
            e = this.opposite,
            k = this.offset,
            f = this.horiz,
            d = this.left + (e ? this.width : 0) + k,
            k = b.chartHeight - this.bottom - (e ? this.height : 0) + k;e && (a *= -1);return b.renderer.crispLine(["M", f ? this.left : d, f ? k : this.top, "L", f ? b.chartWidth - this.right : d, f ? k : b.chartHeight - this.bottom], a);
      }, renderLine: function renderLine() {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
      }, getTitlePosition: function getTitlePosition() {
        var a = this.horiz,
            b = this.left,
            k = this.top,
            f = this.len,
            l = this.options.title,
            g = a ? b : k,
            n = this.opposite,
            c = this.offset,
            t = l.x || 0,
            m = l.y || 0,
            v = this.axisTitle,
            E = this.chart.renderer.fontMetrics(l.style && l.style.fontSize, v),
            v = Math.max(v.getBBox(null, 0).height - E.h - 1, 0),
            f = { low: g + (a ? 0 : f), middle: g + f / 2, high: g + (a ? f : 0) }[l.align],
            b = (a ? k + this.height : b) + (a ? 1 : -1) * (n ? -1 : 1) * this.axisTitleMargin + [-v, v, E.f, -v][this.side],
            a = { x: a ? f + t : b + (n ? this.width : 0) + c + t, y: a ? b + m - (n ? this.height : 0) + c : f + m };d(this, "afterGetTitlePosition", { titlePosition: a });return a;
      }, renderMinorTick: function renderMinorTick(a) {
        var b = this.chart.hasRendered && l(this.oldMin),
            e = this.minorTicks;e[a] || (e[a] = new C(this, a, "minor"));b && e[a].isNew && e[a].render(null, !0);e[a].render(null, !1, 1);
      }, renderTick: function renderTick(a, b) {
        var e = this.isLinked,
            k = this.ticks,
            f = this.chart.hasRendered && l(this.oldMin);if (!e || a >= this.min && a <= this.max) k[a] || (k[a] = new C(this, a)), f && k[a].isNew && k[a].render(b, !0, -1), k[a].render(b);
      }, render: function render() {
        var b = this,
            k = b.chart,
            f = b.options,
            g = b.isLog,
            n = b.isLinked,
            c = b.tickPositions,
            t = b.axisTitle,
            m = b.ticks,
            v = b.minorTicks,
            p = b.alternateBands,
            h = f.stackLabels,
            y = f.alternateGridColor,
            A = b.tickmarkOffset,
            D = b.axisLine,
            r = b.showAxis,
            x = F(k.renderer.globalAnimation),
            u,
            w;b.labelEdge.length = 0;b.overlap = !1;[m, v, p].forEach(function (a) {
          H(a, function (a) {
            a.isActive = !1;
          });
        });if (b.hasData() || n) b.minorTickInterval && !b.categories && b.getMinorTickPositions().forEach(function (a) {
          b.renderMinorTick(a);
        }), c.length && (c.forEach(function (a, e) {
          b.renderTick(a, e);
        }), A && (0 === b.min || b.single) && (m[-1] || (m[-1] = new C(b, -1, null, !0)), m[-1].render(-1))), y && c.forEach(function (e, f) {
          w = void 0 !== c[f + 1] ? c[f + 1] + A : b.max - A;0 === f % 2 && e < b.max && w <= b.max + (k.polar ? -A : A) && (p[e] || (p[e] = new a.PlotLineOrBand(b)), u = e + A, p[e].options = { from: g ? b.lin2log(u) : u, to: g ? b.lin2log(w) : w, color: y }, p[e].render(), p[e].isActive = !0);
        }), b._addedPlotLB || ((f.plotLines || []).concat(f.plotBands || []).forEach(function (a) {
          b.addPlotBandOrLine(a);
        }), b._addedPlotLB = !0);[m, v, p].forEach(function (a) {
          var b,
              e = [],
              f = x.duration;H(a, function (a, b) {
            a.isActive || (a.render(b, !1, 0), a.isActive = !1, e.push(b));
          });E(function () {
            for (b = e.length; b--;) {
              a[e[b]] && !a[e[b]].isActive && (a[e[b]].destroy(), delete a[e[b]]);
            }
          }, a !== p && k.hasRendered && f ? f : 0);
        });D && (D[D.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(D.strokeWidth()) }), D.isPlaced = !0, D[r ? "show" : "hide"](!0));t && r && (f = b.getTitlePosition(), l(f.y) ? (t[t.isNew ? "attr" : "animate"](f), t.isNew = !1) : (t.attr("y", -9999), t.isNew = !0));h && h.enabled && b.renderStackTotals();
        b.isDirty = !1;d(this, "afterRender");
      }, redraw: function redraw() {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) {
          a.render();
        }));this.series.forEach(function (a) {
          a.isDirty = !0;
        });
      }, keepProps: "extKey hcEvents names series userMax userMin".split(" "), destroy: function destroy(a) {
        var b = this,
            e = b.stacks,
            k = b.plotLinesAndBands,
            f;d(this, "destroy", { keepEvents: a });a || A(b);H(e, function (a, b) {
          p(a);e[b] = null;
        });[b.ticks, b.minorTicks, b.alternateBands].forEach(function (a) {
          p(a);
        });if (k) for (a = k.length; a--;) {
          k[a].destroy();
        }"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
          b[a] && (b[a] = b[a].destroy());
        });for (f in b.plotLinesAndBandsGroups) {
          b.plotLinesAndBandsGroups[f] = b.plotLinesAndBandsGroups[f].destroy();
        }H(b, function (a, e) {
          -1 === b.keepProps.indexOf(e) && delete b[e];
        });
      }, drawCrosshair: function drawCrosshair(a, b) {
        var e,
            k = this.crosshair,
            f = D(k.snap, !0),
            l,
            g = this.cross;d(this, "drawCrosshair", { e: a, point: b });a || (a = this.cross && this.cross.e);if (this.crosshair && !1 !== (w(b) || !f)) {
          f ? w(b) && (l = D(b.crosshairPos, this.isXAxis ? b.plotX : this.len - b.plotY)) : l = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos);w(l) && (e = this.getPlotLinePath(b && (this.isXAxis ? b.x : D(b.stackY, b.y)), null, null, null, l) || null);if (!w(e)) {
            this.hideCrosshair();return;
          }f = this.categories && !this.isRadial;g || (this.cross = g = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (f ? "category " : "thin ") + k.className).attr({ zIndex: D(k.zIndex, 2) }).add(), this.chart.styledMode || (g.attr({ stroke: k.color || (f ? c("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": D(k.width, 1) }).css({ "pointer-events": "none" }), k.dashStyle && g.attr({ dashstyle: k.dashStyle })));g.show().attr({ d: e });f && !k.width && g.attr({ "stroke-width": this.transA });this.cross.e = a;
        } else this.hideCrosshair();d(this, "afterDrawCrosshair", { e: a, point: b });
      }, hideCrosshair: function hideCrosshair() {
        this.cross && this.cross.hide();d(this, "afterHideCrosshair");
      } });return a.Axis = y;
  }(I);(function (a) {
    var z = a.Axis,
        F = a.getMagnitude,
        G = a.normalizeTickInterval,
        h = a.timeUnits;
    z.prototype.getTimeTicks = function () {
      return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
    };z.prototype.normalizeTimeTickInterval = function (a, r) {
      var c = r || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];r = c[c.length - 1];var w = h[r[0]],
          x = r[1],
          p;for (p = 0; p < c.length && !(r = c[p], w = h[r[0]], x = r[1], c[p + 1] && a <= (w * x[x.length - 1] + h[c[p + 1][0]]) / 2); p++) {}w === h.year && a < 5 * w && (x = [1, 2, 5]);a = G(a / w, x, "year" === r[0] ? Math.max(F(a / w), 1) : 1);return { unitRange: w, count: a, unitName: r[0] };
    };
  })(I);(function (a) {
    var z = a.Axis,
        F = a.getMagnitude,
        G = a.normalizeTickInterval,
        h = a.pick;z.prototype.getLogTickPositions = function (a, r, u, w) {
      var c = this.options,
          p = this.len,
          g = [];w || (this._minorAutoInterval = null);if (.5 <= a) a = Math.round(a), g = this.getLinearTickPositions(a, r, u);else if (.08 <= a) for (var p = Math.floor(r), d, m, n, b, l, c = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; p < u + 1 && !l; p++) {
        for (m = c.length, d = 0; d < m && !l; d++) {
          n = this.log2lin(this.lin2log(p) * c[d]), n > r && (!w || b <= u) && void 0 !== b && g.push(b), b > u && (l = !0), b = n;
        }
      } else r = this.lin2log(r), u = this.lin2log(u), a = w ? this.getMinorTickInterval() : c.tickInterval, a = h("auto" === a ? null : a, this._minorAutoInterval, c.tickPixelInterval / (w ? 5 : 1) * (u - r) / ((w ? p / this.tickPositions.length : p) || 1)), a = G(a, null, F(a)), g = this.getLinearTickPositions(a, r, u).map(this.log2lin), w || (this._minorAutoInterval = a / 5);w || (this.tickInterval = a);return g;
    };z.prototype.log2lin = function (a) {
      return Math.log(a) / Math.LN10;
    };z.prototype.lin2log = function (a) {
      return Math.pow(10, a);
    };
  })(I);(function (a, z) {
    var F = a.arrayMax,
        G = a.arrayMin,
        h = a.defined,
        c = a.destroyObjectProperties,
        r = a.erase,
        u = a.merge,
        w = a.pick;a.PlotLineOrBand = function (a, c) {
      this.axis = a;c && (this.options = c, this.id = c.id);
    };a.PlotLineOrBand.prototype = { render: function render() {
        a.fireEvent(this, "render");var c = this,
            p = c.axis,
            g = p.horiz,
            d = c.options,
            m = d.label,
            n = c.label,
            b = d.to,
            l = d.from,
            f = d.value,
            v = h(l) && h(b),
            t = h(f),
            H = c.svgElem,
            D = !H,
            A = [],
            k = d.color,
            E = w(d.zIndex, 0),
            C = d.events,
            A = { "class": "highcharts-plot-" + (v ? "band " : "line ") + (d.className || "") },
            y = {},
            e = p.chart.renderer,
            q = v ? "bands" : "lines";p.isLog && (l = p.log2lin(l), b = p.log2lin(b), f = p.log2lin(f));p.chart.styledMode || (t ? (A.stroke = k, A["stroke-width"] = d.width, d.dashStyle && (A.dashstyle = d.dashStyle)) : v && (k && (A.fill = k), d.borderWidth && (A.stroke = d.borderColor, A["stroke-width"] = d.borderWidth)));y.zIndex = E;q += "-" + E;(k = p.plotLinesAndBandsGroups[q]) || (p.plotLinesAndBandsGroups[q] = k = e.g("plot-" + q).attr(y).add());D && (c.svgElem = H = e.path().attr(A).add(k));
        if (t) A = p.getPlotLinePath(f, H.strokeWidth());else if (v) A = p.getPlotBandPath(l, b, d);else return;D && A && A.length ? (H.attr({ d: A }), C && a.objectEach(C, function (a, b) {
          H.on(b, function (a) {
            C[b].apply(c, [a]);
          });
        })) : H && (A ? (H.show(), H.animate({ d: A })) : (H.hide(), n && (c.label = n = n.destroy())));m && h(m.text) && A && A.length && 0 < p.width && 0 < p.height && !A.isFlat ? (m = u({ align: g && v && "center", x: g ? !v && 4 : 10, verticalAlign: !g && v && "middle", y: g ? v ? 16 : 10 : v ? 6 : -4, rotation: g && !v && 90 }, m), this.renderLabel(m, A, v, E)) : n && n.hide();return c;
      }, renderLabel: function renderLabel(a, c, g, d) {
        var m = this.label,
            n = this.axis.chart.renderer;m || (m = { align: a.textAlign || a.align, rotation: a.rotation, "class": "highcharts-plot-" + (g ? "band" : "line") + "-label " + (a.className || "") }, m.zIndex = d, this.label = m = n.text(a.text, 0, 0, a.useHTML).attr(m).add(), this.axis.chart.styledMode || m.css(a.style));d = c.xBounds || [c[1], c[4], g ? c[6] : c[1]];c = c.yBounds || [c[2], c[5], g ? c[7] : c[2]];g = G(d);n = G(c);m.align(a, !1, { x: g, y: n, width: F(d) - g, height: F(c) - n });m.show();
      }, destroy: function destroy() {
        r(this.axis.plotLinesAndBands, this);delete this.axis;
        c(this);
      } };a.extend(z.prototype, { getPlotBandPath: function getPlotBandPath(a, c) {
        var g = this.getPlotLinePath(c, null, null, !0),
            d = this.getPlotLinePath(a, null, null, !0),
            m = [],
            n = this.horiz,
            b = 1,
            l;a = a < this.min && c < this.min || a > this.max && c > this.max;if (d && g) for (a && (l = d.toString() === g.toString(), b = 0), a = 0; a < d.length; a += 6) {
          n && g[a + 1] === d[a + 1] ? (g[a + 1] += b, g[a + 4] += b) : n || g[a + 2] !== d[a + 2] || (g[a + 2] += b, g[a + 5] += b), m.push("M", d[a + 1], d[a + 2], "L", d[a + 4], d[a + 5], g[a + 4], g[a + 5], g[a + 1], g[a + 2], "z"), m.isFlat = l;
        }return m;
      }, addPlotBand: function addPlotBand(a) {
        return this.addPlotBandOrLine(a, "plotBands");
      }, addPlotLine: function addPlotLine(a) {
        return this.addPlotBandOrLine(a, "plotLines");
      }, addPlotBandOrLine: function addPlotBandOrLine(c, p) {
        var g = new a.PlotLineOrBand(this, c).render(),
            d = this.userOptions;g && (p && (d[p] = d[p] || [], d[p].push(c)), this.plotLinesAndBands.push(g));return g;
      }, removePlotBandOrLine: function removePlotBandOrLine(a) {
        for (var c = this.plotLinesAndBands, g = this.options, d = this.userOptions, m = c.length; m--;) {
          c[m].id === a && c[m].destroy();
        }[g.plotLines || [], d.plotLines || [], g.plotBands || [], d.plotBands || []].forEach(function (d) {
          for (m = d.length; m--;) {
            d[m].id === a && r(d, d[m]);
          }
        });
      }, removePlotBand: function removePlotBand(a) {
        this.removePlotBandOrLine(a);
      }, removePlotLine: function removePlotLine(a) {
        this.removePlotBandOrLine(a);
      } });
  })(I, X);(function (a) {
    var z = a.doc,
        F = a.extend,
        G = a.format,
        h = a.isNumber,
        c = a.merge,
        r = a.pick,
        u = a.splat,
        w = a.syncTimeout,
        x = a.timeUnits;a.Tooltip = function () {
      this.init.apply(this, arguments);
    };a.Tooltip.prototype = { init: function init(a, g) {
        this.chart = a;this.options = g;this.crosshairs = [];this.now = { x: 0, y: 0 };this.isHidden = !0;this.split = g.split && !a.inverted;this.shared = g.shared || this.split;this.outside = g.outside && !this.split;
      }, cleanSplit: function cleanSplit(a) {
        this.chart.series.forEach(function (g) {
          var d = g && g.tt;d && (!d.isActive || a ? g.tt = d.destroy() : d.isActive = !1);
        });
      }, applyFilter: function applyFilter() {
        var a = this.chart;a.renderer.definition({ tagName: "filter", id: "drop-shadow-" + a.index, opacity: .5, children: [{ tagName: "feGaussianBlur", "in": "SourceAlpha", stdDeviation: 1 }, { tagName: "feOffset", dx: 1, dy: 1 }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", type: "linear", slope: .3 }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", "in": "SourceGraphic" }] }] });a.renderer.definition({ tagName: "style", textContent: ".highcharts-tooltip-" + a.index + "{filter:url(#drop-shadow-" + a.index + ")}" });
      }, getLabel: function getLabel() {
        var c = this,
            g = this.chart.renderer,
            d = this.chart.styledMode,
            m = this.options,
            n,
            b;this.label || (this.outside && (this.container = n = a.doc.createElement("div"), n.className = "highcharts-tooltip-container", a.css(n, { position: "absolute", top: "1px", pointerEvents: m.style && m.style.pointerEvents }), a.doc.body.appendChild(n), this.renderer = g = new a.Renderer(n, 0, 0)), this.split ? this.label = g.g("tooltip") : (this.label = g.label("", 0, 0, m.shape || "callout", null, null, m.useHTML, null, "tooltip").attr({ padding: m.padding, r: m.borderRadius }), d || this.label.attr({ fill: m.backgroundColor, "stroke-width": m.borderWidth }).css(m.style).shadow(m.shadow)), d && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index)), this.outside && (b = { x: this.label.xSetter, y: this.label.ySetter }, this.label.xSetter = function (a, f) {
          b[f].call(this.label, c.distance);
          n.style.left = a + "px";
        }, this.label.ySetter = function (a, f) {
          b[f].call(this.label, c.distance);n.style.top = a + "px";
        }), this.label.attr({ zIndex: 8 }).add());return this.label;
      }, update: function update(a) {
        this.destroy();c(!0, this.chart.options.tooltip.userOptions, a);this.init(this.chart, c(!0, this.options, a));
      }, destroy: function destroy() {
        this.label && (this.label = this.label.destroy());this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());this.renderer && (this.renderer = this.renderer.destroy(), a.discardElement(this.container));
        a.clearTimeout(this.hideTimer);a.clearTimeout(this.tooltipTimeout);
      }, move: function move(c, g, d, m) {
        var n = this,
            b = n.now,
            l = !1 !== n.options.animation && !n.isHidden && (1 < Math.abs(c - b.x) || 1 < Math.abs(g - b.y)),
            f = n.followPointer || 1 < n.len;F(b, { x: l ? (2 * b.x + c) / 3 : c, y: l ? (b.y + g) / 2 : g, anchorX: f ? void 0 : l ? (2 * b.anchorX + d) / 3 : d, anchorY: f ? void 0 : l ? (b.anchorY + m) / 2 : m });n.getLabel().attr(b);l && (a.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          n && n.move(c, g, d, m);
        }, 32));
      }, hide: function hide(c) {
        var g = this;a.clearTimeout(this.hideTimer);
        c = r(c, this.options.hideDelay, 500);this.isHidden || (this.hideTimer = w(function () {
          g.getLabel()[c ? "fadeOut" : "hide"]();g.isHidden = !0;
        }, c));
      }, getAnchor: function getAnchor(a, c) {
        var d = this.chart,
            g = d.pointer,
            n = d.inverted,
            b = d.plotTop,
            l = d.plotLeft,
            f = 0,
            v = 0,
            t,
            h;a = u(a);this.followPointer && c ? (void 0 === c.chartX && (c = g.normalize(c)), a = [c.chartX - d.plotLeft, c.chartY - b]) : a[0].tooltipPos ? a = a[0].tooltipPos : (a.forEach(function (a) {
          t = a.series.yAxis;h = a.series.xAxis;f += a.plotX + (!n && h ? h.left - l : 0);v += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!n && t ? t.top - b : 0);
        }), f /= a.length, v /= a.length, a = [n ? d.plotWidth - v : f, this.shared && !n && 1 < a.length && c ? c.chartY - b : n ? d.plotHeight - f : v]);return a.map(Math.round);
      }, getPosition: function getPosition(a, c, d) {
        var g = this.chart,
            n = this.distance,
            b = {},
            l = g.inverted && d.h || 0,
            f,
            v = this.outside,
            t = v ? z.documentElement.clientWidth - 2 * n : g.chartWidth,
            h = v ? Math.max(z.body.scrollHeight, z.documentElement.scrollHeight, z.body.offsetHeight, z.documentElement.offsetHeight, z.documentElement.clientHeight) : g.chartHeight,
            p = g.pointer.chartPosition,
            A = ["y", h, c, (v ? p.top - n : 0) + d.plotY + g.plotTop, v ? 0 : g.plotTop, v ? h : g.plotTop + g.plotHeight],
            k = ["x", t, a, (v ? p.left - n : 0) + d.plotX + g.plotLeft, v ? 0 : g.plotLeft, v ? t : g.plotLeft + g.plotWidth],
            E = !this.followPointer && r(d.ttBelow, !g.inverted === !!d.negative),
            C = function C(a, e, k, f, d, c) {
          var g = k < f - n,
              q = f + n + k < e,
              t = f - n - k;f += n;if (E && q) b[a] = f;else if (!E && g) b[a] = t;else if (g) b[a] = Math.min(c - k, 0 > t - l ? t : t - l);else if (q) b[a] = Math.max(d, f + l + k > e ? f : f + l);else return !1;
        },
            y = function y(a, e, k, f) {
          var d;f < n || f > e - n ? d = !1 : b[a] = f < k / 2 ? 1 : f > e - k / 2 ? e - k - 2 : f - k / 2;return d;
        },
            e = function e(a) {
          var b = A;A = k;k = b;f = a;
        },
            q = function q() {
          !1 !== C.apply(0, A) ? !1 !== y.apply(0, k) || f || (e(!0), q()) : f ? b.x = b.y = 0 : (e(!0), q());
        };(g.inverted || 1 < this.len) && e();q();return b;
      }, defaultFormatter: function defaultFormatter(a) {
        var c = this.points || u(this),
            d;d = [a.tooltipFooterHeaderFormatter(c[0])];d = d.concat(a.bodyFormatter(c));d.push(a.tooltipFooterHeaderFormatter(c[0], !0));return d;
      }, refresh: function refresh(c, g) {
        var d,
            m = this.options,
            n,
            b = c,
            l,
            f = {},
            v = [];d = m.formatter || this.defaultFormatter;var f = this.shared,
            t,
            h = this.chart.styledMode;m.enabled && (a.clearTimeout(this.hideTimer), this.followPointer = u(b)[0].series.tooltipOptions.followPointer, l = this.getAnchor(b, g), g = l[0], n = l[1], !f || b.series && b.series.noSharedTooltip ? f = b.getLabelConfig() : (b.forEach(function (a) {
          a.setState("hover");v.push(a.getLabelConfig());
        }), f = { x: b[0].category, y: b[0].y }, f.points = v, b = b[0]), this.len = v.length, f = d.call(f, this), t = b.series, this.distance = r(t.tooltipOptions.distance, 16), !1 === f ? this.hide() : (d = this.getLabel(), this.isHidden && d.attr({ opacity: 1 }).show(), this.split ? this.renderSplit(f, u(c)) : (m.style.width && !h || d.css({ width: this.chart.spacingBox.width }), d.attr({ text: f && f.join ? f.join("") : f }), d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + r(b.colorIndex, t.colorIndex)), h || d.attr({ stroke: m.borderColor || b.color || t.color || "#666666" }), this.updatePosition({ plotX: g, plotY: n, negative: b.negative, ttBelow: b.ttBelow, h: l[2] || 0 })), this.isHidden = !1));
      }, renderSplit: function renderSplit(c, g) {
        var d = this,
            m = [],
            n = this.chart,
            b = n.renderer,
            l = !0,
            f = this.options,
            v = 0,
            t,
            h = this.getLabel(),
            p = n.plotTop;
        a.isString(c) && (c = [!1, c]);c.slice(0, g.length + 1).forEach(function (a, k) {
          if (!1 !== a && "" !== a) {
            k = g[k - 1] || { isHeader: !0, plotX: g[0].plotX, plotY: n.plotHeight };var c = k.series || d,
                C = c.tt,
                y = k.series || {},
                e = "highcharts-color-" + r(k.colorIndex, y.colorIndex, "none");C || (C = { padding: f.padding, r: f.borderRadius }, n.styledMode || (C.fill = f.backgroundColor, C.stroke = f.borderColor || k.color || y.color || "#333333", C["stroke-width"] = f.borderWidth), c.tt = C = b.label(null, null, null, (k.isHeader ? f.headerShape : f.shape) || "callout", null, null, f.useHTML).addClass("highcharts-tooltip-box " + e).attr(C).add(h));C.isActive = !0;C.attr({ text: a });n.styledMode || C.css(f.style).shadow(f.shadow);a = C.getBBox();y = a.width + C.strokeWidth();k.isHeader ? (v = a.height, n.xAxis[0].opposite && (t = !0, p -= v), y = Math.max(0, Math.min(k.plotX + n.plotLeft - y / 2, n.chartWidth + (n.scrollablePixels ? n.scrollablePixels - n.marginRight : 0) - y))) : y = k.plotX + n.plotLeft - r(f.distance, 16) - y;0 > y && (l = !1);a = (k.series && k.series.yAxis && k.series.yAxis.pos) + (k.plotY || 0);a -= p;k.isHeader && (a = t ? -v : n.plotHeight + v);m.push({ target: a, rank: k.isHeader ? 1 : 0, size: c.tt.getBBox().height + 1, point: k, x: y, tt: C });
          }
        });this.cleanSplit();f.positioner && m.forEach(function (a) {
          var b = f.positioner.call(d, a.tt.getBBox().width, a.size, a.point);a.x = b.x;a.align = 0;a.target = b.y;a.rank = r(b.rank, a.rank);
        });a.distribute(m, n.plotHeight + v);m.forEach(function (a) {
          var b = a.point,
              c = b.series;a.tt.attr({ visibility: void 0 === a.pos ? "hidden" : "inherit", x: l || b.isHeader || f.positioner ? a.x : b.plotX + n.plotLeft + d.distance, y: a.pos + p, anchorX: b.isHeader ? b.plotX + n.plotLeft : b.plotX + c.xAxis.pos, anchorY: b.isHeader ? n.plotTop + n.plotHeight / 2 : b.plotY + c.yAxis.pos });
        });
      }, updatePosition: function updatePosition(a) {
        var c = this.chart,
            d = this.getLabel(),
            m = (this.options.positioner || this.getPosition).call(this, d.width, d.height, a),
            n = a.plotX + c.plotLeft;a = a.plotY + c.plotTop;var b;this.outside && (b = (this.options.borderWidth || 0) + 2 * this.distance, this.renderer.setSize(d.width + b, d.height + b, !1), n += c.pointer.chartPosition.left - m.x, a += c.pointer.chartPosition.top - m.y);this.move(Math.round(m.x), Math.round(m.y || 0), n, a);
      }, getDateFormat: function getDateFormat(a, c, d, m) {
        var g = this.chart.time,
            b = g.dateFormat("%m-%d %H:%M:%S.%L", c),
            l,
            f,
            v = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 },
            t = "millisecond";for (f in x) {
          if (a === x.week && +g.dateFormat("%w", c) === d && "00:00:00.000" === b.substr(6)) {
            f = "week";break;
          }if (x[f] > a) {
            f = t;break;
          }if (v[f] && b.substr(v[f]) !== "01-01 00:00:00.000".substr(v[f])) break;"week" !== f && (t = f);
        }f && (l = g.resolveDTLFormat(m[f]).main);return l;
      }, getXDateFormat: function getXDateFormat(a, c, d) {
        c = c.dateTimeLabelFormats;var g = d && d.closestPointRange;
        return (g ? this.getDateFormat(g, a.x, d.options.startOfWeek, c) : c.day) || c.year;
      }, tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(c, g) {
        var d = g ? "footer" : "header",
            m = c.series,
            n = m.tooltipOptions,
            b = n.xDateFormat,
            l = m.xAxis,
            f = l && "datetime" === l.options.type && h(c.key),
            v = n[d + "Format"];g = { isFooter: g, labelConfig: c };a.fireEvent(this, "headerFormatter", g, function (a) {
          f && !b && (b = this.getXDateFormat(c, n, l));f && b && (c.point && c.point.tooltipDateKeys || ["key"]).forEach(function (a) {
            v = v.replace("{point." + a + "}", "{point." + a + ":" + b + "}");
          });m.chart.styledMode && (v = this.styledModeFormat(v));a.text = G(v, { point: c, series: m }, this.chart.time);
        });return g.text;
      }, bodyFormatter: function bodyFormatter(a) {
        return a.map(function (a) {
          var d = a.series.tooltipOptions;return (d[(a.point.formatPrefix || "point") + "Formatter"] || a.point.tooltipFormatter).call(a.point, d[(a.point.formatPrefix || "point") + "Format"] || "");
        });
      }, styledModeFormat: function styledModeFormat(a) {
        return a.replace('style\x3d"font-size: 10px"', 'class\x3d"highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class\x3d"highcharts-color-{$1.colorIndex}"');
      } };
  })(I);
  (function (a) {
    var z = a.addEvent,
        F = a.attr,
        G = a.charts,
        h = a.color,
        c = a.css,
        r = a.defined,
        u = a.extend,
        w = a.find,
        x = a.fireEvent,
        p = a.isNumber,
        g = a.isObject,
        d = a.offset,
        m = a.pick,
        n = a.splat,
        b = a.Tooltip;a.Pointer = function (a, b) {
      this.init(a, b);
    };a.Pointer.prototype = { init: function init(a, f) {
        this.options = f;this.chart = a;this.runChartClick = f.chart.events && !!f.chart.events.click;this.pinchDown = [];this.lastValidTouch = {};b && (a.tooltip = new b(a, f.tooltip), this.followTouchMove = m(f.tooltip.followTouchMove, !0));this.setDOMEvents();
      }, zoomOption: function zoomOption(a) {
        var b = this.chart,
            d = b.options.chart,
            l = d.zoomType || "",
            b = b.inverted;/touch/.test(a.type) && (l = m(d.pinchType, l));this.zoomX = a = /x/.test(l);this.zoomY = l = /y/.test(l);this.zoomHor = a && !b || l && b;this.zoomVert = l && !b || a && b;this.hasZoom = a || l;
      }, normalize: function normalize(a, b) {
        var f;f = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;b || (this.chartPosition = b = d(this.chart.container));return u(a, { chartX: Math.round(f.pageX - b.left), chartY: Math.round(f.pageY - b.top) });
      }, getCoordinates: function getCoordinates(a) {
        var b = { xAxis: [], yAxis: [] };
        this.chart.axes.forEach(function (f) {
          b[f.isXAxis ? "xAxis" : "yAxis"].push({ axis: f, value: f.toValue(a[f.horiz ? "chartX" : "chartY"]) });
        });return b;
      }, findNearestKDPoint: function findNearestKDPoint(a, b, d) {
        var f;a.forEach(function (a) {
          var l = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y");a = a.searchPoint(d, l);if ((l = g(a, !0)) && !(l = !g(f, !0))) var l = f.distX - a.distX,
              c = f.dist - a.dist,
              k = (a.series.group && a.series.group.zIndex) - (f.series.group && f.series.group.zIndex),
              l = 0 < (0 !== l && b ? l : 0 !== c ? c : 0 !== k ? k : f.series.index > a.series.index ? -1 : 1);l && (f = a);
        });return f;
      }, getPointFromEvent: function getPointFromEvent(a) {
        a = a.target;for (var b; a && !b;) {
          b = a.point, a = a.parentNode;
        }return b;
      }, getChartCoordinatesFromPoint: function getChartCoordinatesFromPoint(a, b) {
        var f = a.series,
            d = f.xAxis,
            f = f.yAxis,
            l = m(a.clientX, a.plotX),
            c = a.shapeArgs;if (d && f) return b ? { chartX: d.len + d.pos - l, chartY: f.len + f.pos - a.plotY } : { chartX: l + d.pos, chartY: a.plotY + f.pos };if (c && c.x && c.y) return { chartX: c.x, chartY: c.y };
      }, getHoverData: function getHoverData(a, b, d, c, n, h) {
        var f,
            k = [];c = !(!c || !a);var l = b && !b.stickyTracking ? [b] : d.filter(function (a) {
          return a.visible && !(!n && a.directTouch) && m(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });b = (f = c ? a : this.findNearestKDPoint(l, n, h)) && f.series;f && (n && !b.noSharedTooltip ? (l = d.filter(function (a) {
          return a.visible && !(!n && a.directTouch) && m(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), l.forEach(function (a) {
          var b = w(a.points, function (a) {
            return a.x === f.x && !a.isNull;
          });g(b) && (a.chart.isBoosting && (b = a.getPoint(b)), k.push(b));
        })) : k.push(f));return { hoverPoint: f, hoverSeries: b, hoverPoints: k };
      }, runPointActions: function runPointActions(b, f) {
        var d = this.chart,
            c = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0,
            l = c ? c.shared : !1,
            g = f || d.hoverPoint,
            n = g && g.series || d.hoverSeries,
            n = this.getHoverData(g, n, d.series, "touchmove" !== b.type && (!!f || n && n.directTouch && this.isDirectTouch), l, b),
            k,
            g = n.hoverPoint;k = n.hoverPoints;f = (n = n.hoverSeries) && n.tooltipOptions.followPointer;l = l && n && !n.noSharedTooltip;if (g && (g !== d.hoverPoint || c && c.isHidden)) {
          (d.hoverPoints || []).forEach(function (a) {
            -1 === k.indexOf(a) && a.setState();
          });(k || []).forEach(function (a) {
            a.setState("hover");
          });
          if (d.hoverSeries !== n) n.onMouseOver();d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");if (!g.series) return;g.firePointEvent("mouseOver");d.hoverPoints = k;d.hoverPoint = g;c && c.refresh(l ? k : g, b);
        } else f && c && !c.isHidden && (g = c.getAnchor([{}], b), c.updatePosition({ plotX: g[0], plotY: g[1] }));this.unDocMouseMove || (this.unDocMouseMove = z(d.container.ownerDocument, "mousemove", function (b) {
          var k = G[a.hoverChartIndex];if (k) k.pointer.onDocumentMouseMove(b);
        }));d.axes.forEach(function (f) {
          var d = m(f.crosshair.snap, !0),
              c = d ? a.find(k, function (a) {
            return a.series[f.coll] === f;
          }) : void 0;c || !d ? f.drawCrosshair(b, c) : f.hideCrosshair();
        });
      }, reset: function reset(a, b) {
        var f = this.chart,
            d = f.hoverSeries,
            c = f.hoverPoint,
            l = f.hoverPoints,
            g = f.tooltip,
            k = g && g.shared ? l : c;a && k && n(k).forEach(function (b) {
          b.series.isCartesian && void 0 === b.plotX && (a = !1);
        });if (a) g && k && k.length && (g.refresh(k), g.shared && l ? l.forEach(function (a) {
          a.setState(a.state, !0);a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
        }) : c && (c.setState(c.state, !0), f.axes.forEach(function (a) {
          a.crosshair && a.drawCrosshair(null, c);
        })));else {
          if (c) c.onMouseOut();l && l.forEach(function (a) {
            a.setState();
          });if (d) d.onMouseOut();g && g.hide(b);this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());f.axes.forEach(function (a) {
            a.hideCrosshair();
          });this.hoverX = f.hoverPoints = f.hoverPoint = null;
        }
      }, scaleGroups: function scaleGroups(a, b) {
        var f = this.chart,
            d;f.series.forEach(function (c) {
          d = a || c.getPlotBox();c.xAxis && c.xAxis.zoomEnabled && c.group && (c.group.attr(d), c.markerGroup && (c.markerGroup.attr(d), c.markerGroup.clip(b ? f.clipRect : null)), c.dataLabelsGroup && c.dataLabelsGroup.attr(d));
        });f.clipRect.attr(b || f.clipBox);
      }, dragStart: function dragStart(a) {
        var b = this.chart;b.mouseIsDown = a.type;b.cancelClick = !1;b.mouseDownX = this.mouseDownX = a.chartX;b.mouseDownY = this.mouseDownY = a.chartY;
      }, drag: function drag(a) {
        var b = this.chart,
            d = b.options.chart,
            c = a.chartX,
            l = a.chartY,
            g = this.zoomHor,
            n = this.zoomVert,
            k = b.plotLeft,
            m = b.plotTop,
            C = b.plotWidth,
            y = b.plotHeight,
            e,
            q = this.selectionMarker,
            p = this.mouseDownX,
            r = this.mouseDownY,
            u = d.panKey && a[d.panKey + "Key"];q && q.touch || (c < k ? c = k : c > k + C && (c = k + C), l < m ? l = m : l > m + y && (l = m + y), this.hasDragged = Math.sqrt(Math.pow(p - c, 2) + Math.pow(r - l, 2)), 10 < this.hasDragged && (e = b.isInsidePlot(p - k, r - m), b.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !u && !q && (this.selectionMarker = q = b.renderer.rect(k, m, g ? 1 : C, n ? 1 : y, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), b.styledMode || q.attr({ fill: d.selectionMarkerFill || h("#335cad").setOpacity(.25).get() })), q && g && (c -= p, q.attr({ width: Math.abs(c), x: (0 < c ? 0 : c) + p })), q && n && (c = l - r, q.attr({ height: Math.abs(c), y: (0 < c ? 0 : c) + r })), e && !q && d.panning && b.pan(a, d.panning)));
      }, drop: function drop(a) {
        var b = this,
            d = this.chart,
            l = this.hasPinched;if (this.selectionMarker) {
          var g = { originalEvent: a, xAxis: [], yAxis: [] },
              n = this.selectionMarker,
              m = n.attr ? n.attr("x") : n.x,
              k = n.attr ? n.attr("y") : n.y,
              E = n.attr ? n.attr("width") : n.width,
              C = n.attr ? n.attr("height") : n.height,
              h;if (this.hasDragged || l) d.axes.forEach(function (e) {
            if (e.zoomEnabled && r(e.min) && (l || b[{ xAxis: "zoomX",
              yAxis: "zoomY" }[e.coll]])) {
              var f = e.horiz,
                  d = "touchend" === a.type ? e.minPixelPadding : 0,
                  c = e.toValue((f ? m : k) + d),
                  f = e.toValue((f ? m + E : k + C) - d);g[e.coll].push({ axis: e, min: Math.min(c, f), max: Math.max(c, f) });h = !0;
            }
          }), h && x(d, "selection", g, function (a) {
            d.zoom(u(a, l ? { animation: !1 } : null));
          });p(d.index) && (this.selectionMarker = this.selectionMarker.destroy());l && this.scaleGroups();
        }d && p(d.index) && (c(d.container, { cursor: d._cursor }), d.cancelClick = 10 < this.hasDragged, d.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      }, onContainerMouseDown: function onContainerMouseDown(a) {
        a = this.normalize(a);2 !== a.button && (this.zoomOption(a), a.preventDefault && a.preventDefault(), this.dragStart(a));
      }, onDocumentMouseUp: function onDocumentMouseUp(b) {
        G[a.hoverChartIndex] && G[a.hoverChartIndex].pointer.drop(b);
      }, onDocumentMouseMove: function onDocumentMouseMove(a) {
        var b = this.chart,
            d = this.chartPosition;a = this.normalize(a, d);!d || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset();
      }, onContainerMouseLeave: function onContainerMouseLeave(b) {
        var f = G[a.hoverChartIndex];
        f && (b.relatedTarget || b.toElement) && (f.pointer.reset(), f.pointer.chartPosition = null);
      }, onContainerMouseMove: function onContainerMouseMove(b) {
        var f = this.chart;r(a.hoverChartIndex) && G[a.hoverChartIndex] && G[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = f.index);b = this.normalize(b);b.returnValue = !1;"mousedown" === f.mouseIsDown && this.drag(b);!this.inClass(b.target, "highcharts-tracker") && !f.isInsidePlot(b.chartX - f.plotLeft, b.chartY - f.plotTop) || f.openMenu || this.runPointActions(b);
      }, inClass: function inClass(a, b) {
        for (var f; a;) {
          if (f = F(a, "class")) {
            if (-1 !== f.indexOf(b)) return !0;if (-1 !== f.indexOf("highcharts-container")) return !1;
          }a = a.parentNode;
        }
      }, onTrackerMouseOut: function onTrackerMouseOut(a) {
        var b = this.chart.hoverSeries;a = a.relatedTarget || a.toElement;this.isDirectTouch = !1;if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut();
      }, onContainerClick: function onContainerClick(a) {
        var b = this.chart,
            d = b.hoverPoint,
            c = b.plotLeft,
            l = b.plotTop;a = this.normalize(a);b.cancelClick || (d && this.inClass(a.target, "highcharts-tracker") ? (x(d.series, "click", u(a, { point: d })), b.hoverPoint && d.firePointEvent("click", a)) : (u(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - c, a.chartY - l) && x(b, "click", a)));
      }, setDOMEvents: function setDOMEvents() {
        var b = this,
            f = b.chart.container,
            d = f.ownerDocument;f.onmousedown = function (a) {
          b.onContainerMouseDown(a);
        };f.onmousemove = function (a) {
          b.onContainerMouseMove(a);
        };f.onclick = function (a) {
          b.onContainerClick(a);
        };this.unbindContainerMouseLeave = z(f, "mouseleave", b.onContainerMouseLeave);
        a.unbindDocumentMouseUp || (a.unbindDocumentMouseUp = z(d, "mouseup", b.onDocumentMouseUp));a.hasTouch && (f.ontouchstart = function (a) {
          b.onContainerTouchStart(a);
        }, f.ontouchmove = function (a) {
          b.onContainerTouchMove(a);
        }, a.unbindDocumentTouchEnd || (a.unbindDocumentTouchEnd = z(d, "touchend", b.onDocumentTouchEnd)));
      }, destroy: function destroy() {
        var b = this;b.unDocMouseMove && b.unDocMouseMove();this.unbindContainerMouseLeave();a.chartCount || (a.unbindDocumentMouseUp && (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()), a.unbindDocumentTouchEnd && (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b, function (a, d) {
          b[d] = null;
        });
      } };
  })(I);(function (a) {
    var z = a.charts,
        F = a.extend,
        G = a.noop,
        h = a.pick;F(a.Pointer.prototype, { pinchTranslate: function pinchTranslate(a, h, u, w, x, p) {
        this.zoomHor && this.pinchTranslateDirection(!0, a, h, u, w, x, p);this.zoomVert && this.pinchTranslateDirection(!1, a, h, u, w, x, p);
      }, pinchTranslateDirection: function pinchTranslateDirection(a, h, u, w, x, p, g, d) {
        var c = this.chart,
            n = a ? "x" : "y",
            b = a ? "X" : "Y",
            l = "chart" + b,
            f = a ? "width" : "height",
            v = c["plot" + (a ? "Left" : "Top")],
            t,
            r,
            D = d || 1,
            A = c.inverted,
            k = c.bounds[a ? "h" : "v"],
            E = 1 === h.length,
            C = h[0][l],
            y = u[0][l],
            e = !E && h[1][l],
            q = !E && u[1][l],
            L;u = function u() {
          !E && 20 < Math.abs(C - e) && (D = d || Math.abs(y - q) / Math.abs(C - e));r = (v - y) / D + C;t = c["plot" + (a ? "Width" : "Height")] / D;
        };u();h = r;h < k.min ? (h = k.min, L = !0) : h + t > k.max && (h = k.max - t, L = !0);L ? (y -= .8 * (y - g[n][0]), E || (q -= .8 * (q - g[n][1])), u()) : g[n] = [y, q];A || (p[n] = r - v, p[f] = t);p = A ? 1 / D : D;x[f] = t;x[n] = h;w[A ? a ? "scaleY" : "scaleX" : "scale" + b] = D;w["translate" + b] = p * v + (y - p * C);
      }, pinch: function pinch(a) {
        var c = this,
            u = c.chart,
            w = c.pinchDown,
            x = a.touches,
            p = x.length,
            g = c.lastValidTouch,
            d = c.hasZoom,
            m = c.selectionMarker,
            n = {},
            b = 1 === p && (c.inClass(a.target, "highcharts-tracker") && u.runTrackerClick || c.runChartClick),
            l = {};1 < p && (c.initiated = !0);d && c.initiated && !b && a.preventDefault();[].map.call(x, function (a) {
          return c.normalize(a);
        });"touchstart" === a.type ? ([].forEach.call(x, function (a, b) {
          w[b] = { chartX: a.chartX, chartY: a.chartY };
        }), g.x = [w[0].chartX, w[1] && w[1].chartX], g.y = [w[0].chartY, w[1] && w[1].chartY], u.axes.forEach(function (a) {
          if (a.zoomEnabled) {
            var b = u.bounds[a.horiz ? "h" : "v"],
                f = a.minPixelPadding,
                d = a.toPixels(h(a.options.min, a.dataMin)),
                c = a.toPixels(h(a.options.max, a.dataMax)),
                g = Math.max(d, c);b.min = Math.min(a.pos, Math.min(d, c) - f);b.max = Math.max(a.pos + a.len, g + f);
          }
        }), c.res = !0) : c.followTouchMove && 1 === p ? this.runPointActions(c.normalize(a)) : w.length && (m || (c.selectionMarker = m = F({ destroy: G, touch: !0 }, u.plotBox)), c.pinchTranslate(w, x, n, m, l, g), c.hasPinched = d, c.scaleGroups(n, l), c.res && (c.res = !1, this.reset(!1, 0)));
      }, touch: function touch(c, r) {
        var u = this.chart,
            w,
            x;
        if (u.index !== a.hoverChartIndex) this.onContainerMouseLeave({ relatedTarget: !0 });a.hoverChartIndex = u.index;1 === c.touches.length ? (c = this.normalize(c), (x = u.isInsidePlot(c.chartX - u.plotLeft, c.chartY - u.plotTop)) && !u.openMenu ? (r && this.runPointActions(c), "touchmove" === c.type && (r = this.pinchDown, w = r[0] ? 4 <= Math.sqrt(Math.pow(r[0].chartX - c.chartX, 2) + Math.pow(r[0].chartY - c.chartY, 2)) : !1), h(w, !0) && this.pinch(c)) : r && this.reset()) : 2 === c.touches.length && this.pinch(c);
      }, onContainerTouchStart: function onContainerTouchStart(a) {
        this.zoomOption(a);
        this.touch(a, !0);
      }, onContainerTouchMove: function onContainerTouchMove(a) {
        this.touch(a);
      }, onDocumentTouchEnd: function onDocumentTouchEnd(c) {
        z[a.hoverChartIndex] && z[a.hoverChartIndex].pointer.drop(c);
      } });
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.charts,
        G = a.css,
        h = a.doc,
        c = a.extend,
        r = a.noop,
        u = a.Pointer,
        w = a.removeEvent,
        x = a.win,
        p = a.wrap;if (!a.hasTouch && (x.PointerEvent || x.MSPointerEvent)) {
      var g = {},
          d = !!x.PointerEvent,
          m = function m() {
        var b = [];b.item = function (a) {
          return this[a];
        };a.objectEach(g, function (a) {
          b.push({ pageX: a.pageX, pageY: a.pageY, target: a.target });
        });
        return b;
      },
          n = function n(b, d, f, c) {
        "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !F[a.hoverChartIndex] || (c(b), c = F[a.hoverChartIndex].pointer, c[d]({ type: f, target: b.currentTarget, preventDefault: r, touches: m() }));
      };c(u.prototype, { onContainerPointerDown: function onContainerPointerDown(a) {
          n(a, "onContainerTouchStart", "touchstart", function (a) {
            g[a.pointerId] = { pageX: a.pageX, pageY: a.pageY, target: a.currentTarget };
          });
        }, onContainerPointerMove: function onContainerPointerMove(a) {
          n(a, "onContainerTouchMove", "touchmove", function (a) {
            g[a.pointerId] = { pageX: a.pageX,
              pageY: a.pageY };g[a.pointerId].target || (g[a.pointerId].target = a.currentTarget);
          });
        }, onDocumentPointerUp: function onDocumentPointerUp(a) {
          n(a, "onDocumentTouchEnd", "touchend", function (a) {
            delete g[a.pointerId];
          });
        }, batchMSEvents: function batchMSEvents(a) {
          a(this.chart.container, d ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);a(this.chart.container, d ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);a(h, d ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        } });p(u.prototype, "init", function (a, d, f) {
        a.call(this, d, f);this.hasZoom && G(d.container, { "-ms-touch-action": "none", "touch-action": "none" });
      });p(u.prototype, "setDOMEvents", function (a) {
        a.apply(this);(this.hasZoom || this.followTouchMove) && this.batchMSEvents(z);
      });p(u.prototype, "destroy", function (a) {
        this.batchMSEvents(w);a.call(this);
      });
    }
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.css,
        G = a.discardElement,
        h = a.defined,
        c = a.fireEvent,
        r = a.isFirefox,
        u = a.marginNames,
        w = a.merge,
        x = a.pick,
        p = a.setAnimation,
        g = a.stableSort,
        d = a.win,
        m = a.wrap;a.Legend = function (a, b) {
      this.init(a, b);
    };a.Legend.prototype = { init: function init(a, b) {
        this.chart = a;this.setOptions(b);b.enabled && (this.render(), z(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }), this.proximate ? this.unchartrender = z(this.chart, "render", function () {
          this.legend.proximatePositions();this.legend.positionItems();
        }) : this.unchartrender && this.unchartrender());
      }, setOptions: function setOptions(a) {
        var b = x(a.padding, 8);this.options = a;this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = w(this.itemStyle, a.itemHiddenStyle));this.itemMarginTop = a.itemMarginTop || 0;this.padding = b;this.initialItemY = b - 5;this.symbolWidth = x(a.symbolWidth, 16);this.pages = [];this.proximate = "proximate" === a.layout && !this.chart.inverted;
      }, update: function update(a, b) {
        var d = this.chart;this.setOptions(w(!0, this.options, a));this.destroy();d.isDirtyLegend = d.isDirtyBox = !0;x(b, !0) && d.redraw();c(this, "afterUpdate");
      }, colorizeItem: function colorizeItem(a, b) {
        a.legendGroup[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");if (!this.chart.styledMode) {
          var d = this.options,
              f = a.legendItem,
              g = a.legendLine,
              n = a.legendSymbol,
              m = this.itemHiddenStyle.color,
              d = b ? d.itemStyle.color : m,
              h = b ? a.color || m : m,
              p = a.options && a.options.marker,
              k = { fill: h };f && f.css({ fill: d, color: d });g && g.attr({ stroke: h });n && (p && n.isMarker && (k = a.pointAttribs(), b || (k.stroke = k.fill = m)), n.attr(k));
        }c(this, "afterColorizeItem", { item: a, visible: b });
      }, positionItems: function positionItems() {
        this.allItems.forEach(this.positionItem, this);this.chart.isResizing || this.positionCheckboxes();
      }, positionItem: function positionItem(a) {
        var b = this.options,
            d = b.symbolPadding,
            b = !b.rtl,
            f = a._legendItemPos,
            c = f[0],
            f = f[1],
            g = a.checkbox;if ((a = a.legendGroup) && a.element) a[h(a.translateY) ? "animate" : "attr"]({ translateX: b ? c : this.legendWidth - c - 2 * d - 4, translateY: f });g && (g.x = c, g.y = f);
      }, destroyItem: function destroyItem(a) {
        var b = a.checkbox;["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (b) {
          a[b] && (a[b] = a[b].destroy());
        });b && G(a.checkbox);
      }, destroy: function destroy() {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }this.getAllItems().forEach(function (b) {
          ["legendItem", "legendGroup"].forEach(a, b);
        });"clipRect up down pager nav box title group".split(" ").forEach(a, this);this.display = null;
      }, positionCheckboxes: function positionCheckboxes() {
        var a = this.group && this.group.alignAttr,
            b,
            d = this.clipHeight || this.legendHeight,
            f = this.titleHeight;a && (b = a.translateY, this.allItems.forEach(function (c) {
          var g = c.checkbox,
              l;g && (l = b + f + g.y + (this.scrollOffset || 0) + 3, F(g, { left: a.translateX + c.checkboxOffset + g.x - 20 + "px", top: l + "px", display: this.proximate || l > b - 6 && l < b + d - 6 ? "" : "none" }));
        }, this));
      }, renderTitle: function renderTitle() {
        var a = this.options,
            b = this.padding,
            d = a.title,
            f = 0;d.text && (this.title || (this.title = this.chart.renderer.label(d.text, b - 3, b - 4, null, null, null, a.useHTML, null, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({ width: this.maxLegendWidth + "px" }), a = this.title.getBBox(), f = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: f }));this.titleHeight = f;
      }, setText: function setText(d) {
        var b = this.options;d.legendItem.attr({ text: b.labelFormat ? a.format(b.labelFormat, d, this.chart.time) : b.labelFormatter.call(d) });
      }, renderItem: function renderItem(a) {
        var b = this.chart,
            d = b.renderer,
            f = this.options,
            c = this.symbolWidth,
            g = f.symbolPadding,
            n = this.itemStyle,
            m = this.itemHiddenStyle,
            h = "horizontal" === f.layout ? x(f.itemDistance, 20) : 0,
            k = !f.rtl,
            E = a.legendItem,
            C = !a.series,
            y = !C && a.series.drawLegendSymbol ? a.series : a,
            e = y.options,
            e = this.createCheckboxForItem && e && e.showCheckbox,
            h = c + g + h + (e ? 20 : 0),
            q = f.useHTML,
            p = a.options.className;E || (a.legendGroup = d.g("legend-item").addClass("highcharts-" + y.type + "-series highcharts-color-" + a.colorIndex + (p ? " " + p : "") + (C ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a.legendItem = E = d.text("", k ? c + g : -g, this.baseline || 0, q), b.styledMode || E.css(w(a.visible ? n : m)), E.attr({ align: k ? "left" : "right", zIndex: 2 }).add(a.legendGroup), this.baseline || (this.fontMetrics = d.fontMetrics(b.styledMode ? 12 : n.fontSize, E), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, E.attr("y", this.baseline)), this.symbolHeight = f.symbolHeight || this.fontMetrics.f, y.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, E, q), e && this.createCheckboxForItem(a));this.colorizeItem(a, a.visible);
        !b.styledMode && n.width || E.css({ width: (f.itemWidth || this.widthOption || b.spacingBox.width) - h });this.setText(a);b = E.getBBox();a.itemWidth = a.checkboxOffset = f.itemWidth || a.legendItemWidth || b.width + h;this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth);this.totalItemWidth += a.itemWidth;this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || b.height || this.symbolHeight);
      }, layoutItem: function layoutItem(a) {
        var b = this.options,
            d = this.padding,
            f = "horizontal" === b.layout,
            c = a.itemHeight,
            g = b.itemMarginBottom || 0,
            n = this.itemMarginTop,
            m = f ? x(b.itemDistance, 20) : 0,
            h = this.maxLegendWidth,
            b = b.alignColumns && this.totalItemWidth > h ? this.maxItemWidth : a.itemWidth;f && this.itemX - d + b > h && (this.itemX = d, this.itemY += n + this.lastLineHeight + g, this.lastLineHeight = 0);this.lastItemY = n + this.itemY + g;this.lastLineHeight = Math.max(c, this.lastLineHeight);a._legendItemPos = [this.itemX, this.itemY];f ? this.itemX += b : (this.itemY += n + c + g, this.lastLineHeight = c);this.offsetWidth = this.widthOption || Math.max((f ? this.itemX - d - (a.checkbox ? 0 : m) : b) + d, this.offsetWidth);
      }, getAllItems: function getAllItems() {
        var a = [];this.chart.series.forEach(function (b) {
          var d = b && b.options;b && x(d.showInLegend, h(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === d.legendType ? b.data : b)));
        });c(this, "afterGetAllItems", { allItems: a });return a;
      }, getAlignment: function getAlignment() {
        var a = this.options;return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0);
      }, adjustMargins: function adjustMargins(a, b) {
        var d = this.chart,
            f = this.options,
            c = this.getAlignment();c && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (g, l) {
          g.test(c) && !h(a[l]) && (d[u[l]] = Math.max(d[u[l]], d.legend[(l + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][l] * f[l % 2 ? "x" : "y"] + x(f.margin, 12) + b[l] + (0 === l && void 0 !== d.options.title.margin ? d.titleOffset + d.options.title.margin : 0)));
        });
      }, proximatePositions: function proximatePositions() {
        var d = this.chart,
            b = [],
            c = "left" === this.options.align;this.allItems.forEach(function (f) {
          var g, l;g = c;f.xAxis && f.points && (f.xAxis.options.reversed && (g = !g), g = a.find(g ? f.points : f.points.slice(0).reverse(), function (b) {
            return a.isNumber(b.plotY);
          }), l = f.legendGroup.getBBox().height, b.push({ target: f.visible ? (g ? g.plotY : f.xAxis.height) - .3 * l : d.plotHeight, size: l, item: f }));
        }, this);a.distribute(b, d.plotHeight);b.forEach(function (a) {
          a.item._legendItemPos[1] = d.plotTop - d.spacing[0] + a.pos;
        });
      }, render: function render() {
        var d = this.chart,
            b = d.renderer,
            c = this.group,
            f,
            m,
            h,
            p = this.box,
            r = this.options,
            A = this.padding;this.itemX = A;this.itemY = this.initialItemY;this.lastItemY = this.offsetWidth = 0;this.widthOption = a.relativeLength(r.width, d.spacingBox.width - A);m = d.spacingBox.width - 2 * A - r.x;-1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (m /= 2);this.maxLegendWidth = this.widthOption || m;c || (this.group = c = b.g("legend").attr({ zIndex: 7 }).add(), this.contentGroup = b.g().attr({ zIndex: 1 }).add(c), this.scrollGroup = b.g().add(this.contentGroup));this.renderTitle();f = this.getAllItems();g(f, function (a, b) {
          return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
        });r.reversed && f.reverse();this.allItems = f;this.display = m = !!f.length;this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;f.forEach(this.renderItem, this);f.forEach(this.layoutItem, this);f = (this.widthOption || this.offsetWidth) + A;h = this.lastItemY + this.lastLineHeight + this.titleHeight;h = this.handleOverflow(h);h += A;p || (this.box = p = b.rect().addClass("highcharts-legend-box").attr({ r: r.borderRadius }).add(c), p.isNew = !0);d.styledMode || p.attr({ stroke: r.borderColor, "stroke-width": r.borderWidth || 0, fill: r.backgroundColor || "none" }).shadow(r.shadow);
        0 < f && 0 < h && (p[p.isNew ? "attr" : "animate"](p.crisp.call({}, { x: 0, y: 0, width: f, height: h }, p.strokeWidth())), p.isNew = !1);p[m ? "show" : "hide"]();d.styledMode && "none" === c.getStyle("display") && (f = h = 0);this.legendWidth = f;this.legendHeight = h;m && (b = d.spacingBox, /(lth|ct|rth)/.test(this.getAlignment()) && (b = w(b, { y: b.y + d.titleOffset + d.options.title.margin })), c.align(w(r, { width: f, height: h, verticalAlign: this.proximate ? "top" : r.verticalAlign }), !0, b));this.proximate || this.positionItems();
      }, handleOverflow: function handleOverflow(a) {
        var b = this,
            d = this.chart,
            f = d.renderer,
            c = this.options,
            g = c.y,
            m = this.padding,
            g = d.spacingBox.height + ("top" === c.verticalAlign ? -g : g) - m,
            n = c.maxHeight,
            h,
            k = this.clipRect,
            E = c.navigation,
            C = x(E.animation, !0),
            y = E.arrowSize || 12,
            e = this.nav,
            q = this.pages,
            p,
            r = this.allItems,
            u = function u(a) {
          "number" === typeof a ? k.attr({ height: a }) : k && (b.clipRect = k.destroy(), b.contentGroup.clip());b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + m + "px,9999px," + (m + a) + "px,0)" : "auto");
        };"horizontal" !== c.layout || "middle" === c.verticalAlign || c.floating || (g /= 2);n && (g = Math.min(g, n));q.length = 0;a > g && !1 !== E.enabled ? (this.clipHeight = h = Math.max(g - 20 - this.titleHeight - m, 0), this.currentPage = x(this.currentPage, 1), this.fullHeight = a, r.forEach(function (a, b) {
          var e = a._legendItemPos[1],
              d = Math.round(a.legendItem.getBBox().height),
              k = q.length;if (!k || e - q[k - 1] > h && (p || e) !== q[k - 1]) q.push(p || e), k++;a.pageIx = k - 1;p && (r[b - 1].pageIx = k - 1);b === r.length - 1 && e + d - q[k - 1] > h && e !== p && (q.push(e), a.pageIx = k);e !== p && (p = e);
        }), k || (k = b.clipRect = f.clipRect(0, m, 9999, 0), b.contentGroup.clip(k)), u(h), e || (this.nav = e = f.g().attr({ zIndex: 1 }).add(this.group), this.up = f.symbol("triangle", 0, 0, y, y).on("click", function () {
          b.scroll(-1, C);
        }).add(e), this.pager = f.text("", 15, 10).addClass("highcharts-legend-navigation"), d.styledMode || this.pager.css(E.style), this.pager.add(e), this.down = f.symbol("triangle-down", 0, 0, y, y).on("click", function () {
          b.scroll(1, C);
        }).add(e)), b.scroll(0), a = g) : e && (u(), this.nav = e.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);return a;
      }, scroll: function scroll(a, b) {
        var d = this.pages,
            f = d.length;a = this.currentPage + a;var c = this.clipHeight,
            g = this.options.navigation,
            m = this.pager,
            n = this.padding;a > f && (a = f);0 < a && (void 0 !== b && p(b, this.chart), this.nav.attr({ translateX: n, translateY: c + this.padding + 7 + this.titleHeight, visibility: "visible" }), this.up.attr({ "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), m.attr({ text: a + "/" + f }), this.down.attr({ x: 18 + this.pager.getBBox().width, "class": a === f ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }), this.chart.styledMode || (this.up.attr({ fill: 1 === a ? g.inactiveColor : g.activeColor }).css({ cursor: 1 === a ? "default" : "pointer" }), this.down.attr({ fill: a === f ? g.inactiveColor : g.activeColor }).css({ cursor: a === f ? "default" : "pointer" })), this.scrollOffset = -d[a - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = a, this.positionCheckboxes());
      } };a.LegendSymbolMixin = { drawRectangle: function drawRectangle(a, b) {
        var d = a.symbolHeight,
            f = a.options.squareSymbol;b.legendSymbol = this.chart.renderer.rect(f ? (a.symbolWidth - d) / 2 : 0, a.baseline - d + 1, f ? d : a.symbolWidth, d, x(a.options.symbolRadius, d / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(b.legendGroup);
      }, drawLineMarker: function drawLineMarker(a) {
        var b = this.options,
            d = b.marker,
            f = a.symbolWidth,
            c = a.symbolHeight,
            g = c / 2,
            m = this.chart.renderer,
            n = this.legendGroup;a = a.baseline - Math.round(.3 * a.fontMetrics.b);var h = {};this.chart.styledMode || (h = { "stroke-width": b.lineWidth || 0 }, b.dashStyle && (h.dashstyle = b.dashStyle));this.legendLine = m.path(["M", 0, a, "L", f, a]).addClass("highcharts-graph").attr(h).add(n);
        d && !1 !== d.enabled && f && (b = Math.min(x(d.radius, g), g), 0 === this.symbol.indexOf("url") && (d = w(d, { width: c, height: c }), b = 0), this.legendSymbol = d = m.symbol(this.symbol, f / 2 - b, a - b, 2 * b, 2 * b, d).addClass("highcharts-point").add(n), d.isMarker = !0);
      } };(/Trident\/7\.0/.test(d.navigator.userAgent) || r) && m(a.Legend.prototype, "positionItem", function (a, b) {
      var d = this,
          f = function f() {
        b._legendItemPos && a.call(d, b);
      };f();d.bubbleLegend || setTimeout(f);
    });
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.animate,
        G = a.animObject,
        h = a.attr,
        c = a.doc,
        r = a.Axis,
        u = a.createElement,
        w = a.defaultOptions,
        x = a.discardElement,
        p = a.charts,
        g = a.css,
        d = a.defined,
        m = a.extend,
        n = a.find,
        b = a.fireEvent,
        l = a.isNumber,
        f = a.isObject,
        v = a.isString,
        t = a.Legend,
        H = a.marginNames,
        D = a.merge,
        A = a.objectEach,
        k = a.Pointer,
        E = a.pick,
        C = a.pInt,
        y = a.removeEvent,
        e = a.seriesTypes,
        q = a.splat,
        L = a.syncTimeout,
        K = a.win,
        T = a.Chart = function () {
      this.getArgs.apply(this, arguments);
    };a.chart = function (a, b, e) {
      return new T(a, b, e);
    };m(T.prototype, { callbacks: [], getArgs: function getArgs() {
        var a = [].slice.call(arguments);if (v(a[0]) || a[0].nodeName) this.renderTo = a.shift();this.init(a[0], a[1]);
      }, init: function init(e, d) {
        var k,
            f,
            c = e.series,
            g = e.plotOptions || {};b(this, "init", { args: arguments }, function () {
          e.series = null;k = D(w, e);for (f in k.plotOptions) {
            k.plotOptions[f].tooltip = g[f] && D(g[f].tooltip) || void 0;
          }k.tooltip.userOptions = e.chart && e.chart.forExport && e.tooltip.userOptions || e.tooltip;k.series = e.series = c;this.userOptions = e;var q = k.chart,
              l = q.events;this.margin = [];this.spacing = [];this.bounds = { h: {}, v: {} };this.labelCollectors = [];this.callback = d;this.isResizing = 0;this.options = k;this.axes = [];this.series = [];this.time = e.time && Object.keys(e.time).length ? new a.Time(e.time) : a.time;this.styledMode = q.styledMode;this.hasCartesianSeries = q.showAxes;var m = this;m.index = p.length;p.push(m);a.chartCount++;l && A(l, function (a, b) {
            z(m, b, a);
          });m.xAxis = [];m.yAxis = [];m.pointCount = m.colorCounter = m.symbolCounter = 0;b(m, "afterInit");m.firstRender();
        });
      }, initSeries: function initSeries(b) {
        var d = this.options.chart;(d = e[b.type || d.type || d.defaultSeriesType]) || a.error(17, !0, this);d = new d();d.init(this, b);return d;
      }, orderSeries: function orderSeries(a) {
        var b = this.series;for (a = a || 0; a < b.length; a++) {
          b[a] && (b[a].index = a, b[a].name = b[a].getName());
        }
      }, isInsidePlot: function isInsidePlot(a, b, e) {
        var d = e ? b : a;a = e ? a : b;return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight;
      }, redraw: function redraw(e) {
        b(this, "beforeRedraw");var d = this.axes,
            k = this.series,
            f = this.pointer,
            c = this.legend,
            g = this.userOptions.legend,
            q = this.isDirtyLegend,
            l,
            n,
            h = this.hasCartesianSeries,
            E = this.isDirtyBox,
            C,
            t = this.renderer,
            p = t.isHidden(),
            y = [];this.setResponsive && this.setResponsive(!1);a.setAnimation(e, this);p && this.temporaryDisplay();this.layOutTitles();for (e = k.length; e--;) {
          if (C = k[e], C.options.stacking && (l = !0, C.isDirty)) {
            n = !0;break;
          }
        }if (n) for (e = k.length; e--;) {
          C = k[e], C.options.stacking && (C.isDirty = !0);
        }k.forEach(function (a) {
          a.isDirty && ("point" === a.options.legendType ? (a.updateTotals && a.updateTotals(), q = !0) : g && (g.labelFormatter || g.labelFormat) && (q = !0));a.isDirtyData && b(a, "updatedData");
        });q && c && c.options.enabled && (c.render(), this.isDirtyLegend = !1);l && this.getStacks();
        h && d.forEach(function (a) {
          a.updateNames();a.updateYNames && a.updateYNames();a.setScale();
        });this.getMargins();h && (d.forEach(function (a) {
          a.isDirty && (E = !0);
        }), d.forEach(function (a) {
          var e = a.min + "," + a.max;a.extKey !== e && (a.extKey = e, y.push(function () {
            b(a, "afterSetExtremes", m(a.eventArgs, a.getExtremes()));delete a.eventArgs;
          }));(E || l) && a.redraw();
        }));E && this.drawChartBox();b(this, "predraw");k.forEach(function (a) {
          (E || a.isDirty) && a.visible && a.redraw();a.isDirtyData = !1;
        });f && f.reset(!0);t.draw();b(this, "redraw");
        b(this, "render");p && this.temporaryDisplay(!0);y.forEach(function (a) {
          a.call();
        });
      }, get: function get(a) {
        function b(b) {
          return b.id === a || b.options && b.options.id === a;
        }var e,
            d = this.series,
            k;e = n(this.axes, b) || n(this.series, b);for (k = 0; !e && k < d.length; k++) {
          e = n(d[k].points || [], b);
        }return e;
      }, getAxes: function getAxes() {
        var a = this,
            e = this.options,
            d = e.xAxis = q(e.xAxis || {}),
            e = e.yAxis = q(e.yAxis || {});b(this, "getAxes");d.forEach(function (a, b) {
          a.index = b;a.isX = !0;
        });e.forEach(function (a, b) {
          a.index = b;
        });d.concat(e).forEach(function (b) {
          new r(a, b);
        });b(this, "afterGetAxes");
      }, getSelectedPoints: function getSelectedPoints() {
        var a = [];this.series.forEach(function (b) {
          a = a.concat((b[b.hasGroupedData ? "points" : "data"] || []).filter(function (a) {
            return a.selected;
          }));
        });return a;
      }, getSelectedSeries: function getSelectedSeries() {
        return this.series.filter(function (a) {
          return a.selected;
        });
      }, setTitle: function setTitle(a, b, e) {
        var d = this,
            k = d.options,
            f = d.styledMode,
            c;c = k.title = D(!f && { style: { color: "#333333", fontSize: k.isStock ? "16px" : "18px" } }, k.title, a);k = k.subtitle = D(!f && { style: { color: "#666666" } }, k.subtitle, b);
        [["title", a, c], ["subtitle", b, k]].forEach(function (a, b) {
          var e = a[0],
              k = d[e],
              c = a[1];a = a[2];k && c && (d[e] = k = k.destroy());a && !k && (d[e] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + e, zIndex: a.zIndex || 4 }).add(), d[e].update = function (a) {
            d.setTitle(!b && a, b && a);
          }, f || d[e].css(a.style));
        });d.layOutTitles(e);
      }, layOutTitles: function layOutTitles(a) {
        var b = 0,
            e,
            d = this.renderer,
            k = this.spacingBox;["title", "subtitle"].forEach(function (a) {
          var e = this[a],
              f = this.options[a];a = "title" === a ? -3 : f.verticalAlign ? 0 : b + 2;var c;e && (this.styledMode || (c = f.style.fontSize), c = d.fontMetrics(c, e).b, e.css({ width: (f.width || k.width + f.widthAdjust) + "px" }).align(m({ y: a + c }, f), !1, "spacingBox"), f.floating || f.verticalAlign || (b = Math.ceil(b + e.getBBox(f.useHTML).height)));
        }, this);e = this.titleOffset !== b;this.titleOffset = b;!this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && E(a, !0) && this.isDirtyBox && this.redraw());
      }, getChartSize: function getChartSize() {
        var b = this.options.chart,
            e = b.width,
            b = b.height,
            k = this.renderTo;d(e) || (this.containerWidth = a.getStyle(k, "width"));d(b) || (this.containerHeight = a.getStyle(k, "height"));this.chartWidth = Math.max(0, e || this.containerWidth || 600);this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      }, temporaryDisplay: function temporaryDisplay(b) {
        var e = this.renderTo;if (b) for (; e && e.style;) {
          e.hcOrigStyle && (a.css(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (c.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
        } else for (; e && e.style;) {
          c.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, c.body.appendChild(e));if ("none" === a.getStyle(e, "display", !1) || e.hcOricDetached) e.hcOrigStyle = { display: e.style.display, height: e.style.height, overflow: e.style.overflow }, b = { display: "block", overflow: "hidden" }, e !== this.renderTo && (b.height = 0), a.css(e, b), e.offsetWidth || e.style.setProperty("display", "block", "important");e = e.parentNode;if (e === c.body) break;
        }
      }, setClassName: function setClassName(a) {
        this.container.className = "highcharts-container " + (a || "");
      }, getContainer: function getContainer() {
        var e,
            d = this.options,
            k = d.chart,
            f,
            q;e = this.renderTo;var n = a.uniqueKey(),
            E,
            t;e || (this.renderTo = e = k.renderTo);v(e) && (this.renderTo = e = c.getElementById(e));e || a.error(13, !0, this);f = C(h(e, "data-highcharts-chart"));l(f) && p[f] && p[f].hasRendered && p[f].destroy();h(e, "data-highcharts-chart", this.index);e.innerHTML = "";k.skipClone || e.offsetWidth || this.temporaryDisplay();this.getChartSize();f = this.chartWidth;q = this.chartHeight;g(e, { overflow: "hidden" });this.styledMode || (E = m({ position: "relative", overflow: "hidden", width: f + "px", height: q + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)" }, k.style));this.container = e = u("div", { id: n }, E, e);this._cursor = e.style.cursor;this.renderer = new (a[k.renderer] || a.Renderer)(e, f, q, null, k.forExport, d.exporting && d.exporting.allowHTML, this.styledMode);this.setClassName(k.className);if (this.styledMode) for (t in d.defs) {
          this.renderer.definition(d.defs[t]);
        } else this.renderer.setStyle(k.style);this.renderer.chartIndex = this.index;b(this, "afterGetContainer");
      },
      getMargins: function getMargins(a) {
        var e = this.spacing,
            k = this.margin,
            f = this.titleOffset;this.resetMargins();f && !d(k[0]) && (this.plotTop = Math.max(this.plotTop, f + this.options.title.margin + e[0]));this.legend && this.legend.display && this.legend.adjustMargins(k, e);b(this, "getMargins");a || this.getAxisMargins();
      }, getAxisMargins: function getAxisMargins() {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            e = a.margin;a.hasCartesianSeries && a.axes.forEach(function (a) {
          a.visible && a.getOffset();
        });H.forEach(function (k, f) {
          d(e[f]) || (a[k] += b[f]);
        });a.setChartSize();
      },
      reflow: function reflow(b) {
        var e = this,
            k = e.options.chart,
            f = e.renderTo,
            g = d(k.width) && d(k.height),
            q = k.width || a.getStyle(f, "width"),
            k = k.height || a.getStyle(f, "height"),
            f = b ? b.target : K;if (!g && !e.isPrinting && q && k && (f === K || f === c)) {
          if (q !== e.containerWidth || k !== e.containerHeight) a.clearTimeout(e.reflowTimeout), e.reflowTimeout = L(function () {
            e.container && e.setSize(void 0, void 0, !1);
          }, b ? 100 : 0);e.containerWidth = q;e.containerHeight = k;
        }
      }, setReflow: function setReflow(a) {
        var b = this;!1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = z(K, "resize", function (a) {
          b.reflow(a);
        }), z(this, "destroy", this.unbindReflow));
      }, setSize: function setSize(e, k, d) {
        var f = this,
            c = f.renderer,
            q;f.isResizing += 1;a.setAnimation(d, f);f.oldChartHeight = f.chartHeight;f.oldChartWidth = f.chartWidth;void 0 !== e && (f.options.chart.width = e);void 0 !== k && (f.options.chart.height = k);f.getChartSize();f.styledMode || (q = c.globalAnimation, (q ? F : g)(f.container, { width: f.chartWidth + "px", height: f.chartHeight + "px" }, q));f.setChartSize(!0);c.setSize(f.chartWidth, f.chartHeight, d);f.axes.forEach(function (a) {
          a.isDirty = !0;a.setScale();
        });f.isDirtyLegend = !0;f.isDirtyBox = !0;f.layOutTitles();f.getMargins();f.redraw(d);f.oldChartHeight = null;b(f, "resize");L(function () {
          f && b(f, "endResize", null, function () {
            --f.isResizing;
          });
        }, G(q).duration);
      }, setChartSize: function setChartSize(a) {
        var e = this.inverted,
            k = this.renderer,
            d = this.chartWidth,
            f = this.chartHeight,
            c = this.options.chart,
            g = this.spacing,
            q = this.clipOffset,
            l,
            m,
            n,
            h;this.plotLeft = l = Math.round(this.plotLeft);this.plotTop = m = Math.round(this.plotTop);
        this.plotWidth = n = Math.max(0, Math.round(d - l - this.marginRight));this.plotHeight = h = Math.max(0, Math.round(f - m - this.marginBottom));this.plotSizeX = e ? h : n;this.plotSizeY = e ? n : h;this.plotBorderWidth = c.plotBorderWidth || 0;this.spacingBox = k.spacingBox = { x: g[3], y: g[0], width: d - g[3] - g[1], height: f - g[0] - g[2] };this.plotBox = k.plotBox = { x: l, y: m, width: n, height: h };d = 2 * Math.floor(this.plotBorderWidth / 2);e = Math.ceil(Math.max(d, q[3]) / 2);k = Math.ceil(Math.max(d, q[0]) / 2);this.clipBox = { x: e, y: k, width: Math.floor(this.plotSizeX - Math.max(d, q[1]) / 2 - e), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, q[2]) / 2 - k)) };a || this.axes.forEach(function (a) {
          a.setAxisSize();a.setAxisTranslation();
        });b(this, "afterSetChartSize", { skipAxes: a });
      }, resetMargins: function resetMargins() {
        b(this, "resetMargins");var a = this,
            e = a.options.chart;["margin", "spacing"].forEach(function (b) {
          var k = e[b],
              d = f(k) ? k : [k, k, k, k];["Top", "Right", "Bottom", "Left"].forEach(function (k, f) {
            a[b][f] = E(e[b + k], d[f]);
          });
        });H.forEach(function (b, e) {
          a[b] = E(a.margin[e], a.spacing[e]);
        });a.axisOffset = [0, 0, 0, 0];a.clipOffset = [0, 0, 0, 0];
      }, drawChartBox: function drawChartBox() {
        var a = this.options.chart,
            e = this.renderer,
            k = this.chartWidth,
            d = this.chartHeight,
            f = this.chartBackground,
            c = this.plotBackground,
            g = this.plotBorder,
            q,
            l = this.styledMode,
            m = this.plotBGImage,
            n = a.backgroundColor,
            h = a.plotBackgroundColor,
            E = a.plotBackgroundImage,
            C,
            t = this.plotLeft,
            p = this.plotTop,
            y = this.plotWidth,
            v = this.plotHeight,
            r = this.plotBox,
            A = this.clipRect,
            u = this.clipBox,
            w = "animate";f || (this.chartBackground = f = e.rect().addClass("highcharts-background").add(), w = "attr");if (l) q = C = f.strokeWidth();else {
          q = a.borderWidth || 0;C = q + (a.shadow ? 8 : 0);n = { fill: n || "none" };if (q || f["stroke-width"]) n.stroke = a.borderColor, n["stroke-width"] = q;f.attr(n).shadow(a.shadow);
        }f[w]({ x: C / 2, y: C / 2, width: k - C - q % 2, height: d - C - q % 2, r: a.borderRadius });w = "animate";c || (w = "attr", this.plotBackground = c = e.rect().addClass("highcharts-plot-background").add());c[w](r);l || (c.attr({ fill: h || "none" }).shadow(a.plotShadow), E && (m ? m.animate(r) : this.plotBGImage = e.image(E, t, p, y, v).add()));A ? A.animate({ width: u.width,
          height: u.height }) : this.clipRect = e.clipRect(u);w = "animate";g || (w = "attr", this.plotBorder = g = e.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());l || g.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" });g[w](g.crisp({ x: t, y: p, width: y, height: v }, -g.strokeWidth()));this.isDirtyBox = !1;b(this, "afterDrawChartBox");
      }, propFromSeries: function propFromSeries() {
        var a = this,
            b = a.options.chart,
            k,
            d = a.options.series,
            f,
            c;["inverted", "angular", "polar"].forEach(function (g) {
          k = e[b.type || b.defaultSeriesType];
          c = b[g] || k && k.prototype[g];for (f = d && d.length; !c && f--;) {
            (k = e[d[f].type]) && k.prototype[g] && (c = !0);
          }a[g] = c;
        });
      }, linkSeries: function linkSeries() {
        var a = this,
            e = a.series;e.forEach(function (a) {
          a.linkedSeries.length = 0;
        });e.forEach(function (b) {
          var e = b.options.linkedTo;v(e) && (e = ":previous" === e ? a.series[b.index - 1] : a.get(e)) && e.linkedParent !== b && (e.linkedSeries.push(b), b.linkedParent = e, b.visible = E(b.options.visible, e.options.visible, b.visible));
        });b(this, "afterLinkSeries");
      }, renderSeries: function renderSeries() {
        this.series.forEach(function (a) {
          a.translate();
          a.render();
        });
      }, renderLabels: function renderLabels() {
        var a = this,
            b = a.options.labels;b.items && b.items.forEach(function (e) {
          var k = m(b.style, e.style),
              d = C(k.left) + a.plotLeft,
              f = C(k.top) + a.plotTop + 12;delete k.left;delete k.top;a.renderer.text(e.html, d, f).attr({ zIndex: 2 }).css(k).add();
        });
      }, render: function render() {
        var a = this.axes,
            b = this.renderer,
            e = this.options,
            k = 0,
            d,
            f,
            c;this.setTitle();this.legend = new t(this, e.legend);this.getStacks && this.getStacks();this.getMargins(!0);this.setChartSize();e = this.plotWidth;a.some(function (a) {
          if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return k = 21, !0;
        });d = this.plotHeight = Math.max(this.plotHeight - k, 0);a.forEach(function (a) {
          a.setScale();
        });this.getAxisMargins();f = 1.1 < e / this.plotWidth;c = 1.05 < d / this.plotHeight;if (f || c) a.forEach(function (a) {
          (a.horiz && f || !a.horiz && c) && a.setTickInterval(!0);
        }), this.getMargins();this.drawChartBox();this.hasCartesianSeries && a.forEach(function (a) {
          a.visible && a.render();
        });this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add());this.renderSeries();
        this.renderLabels();this.addCredits();this.setResponsive && this.setResponsive();this.hasRendered = !0;
      }, addCredits: function addCredits(a) {
        var b = this;a = D(!0, this.options.credits, a);a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          a.href && (K.location.href = a.href);
        }).attr({ align: a.position.align, zIndex: 8 }), b.styledMode || this.credits.css(a.style), this.credits.add().align(a.position), this.credits.update = function (a) {
          b.credits = b.credits.destroy();b.addCredits(a);
        });
      }, destroy: function destroy() {
        var e = this,
            k = e.axes,
            d = e.series,
            f = e.container,
            c,
            g = f && f.parentNode;b(e, "destroy");e.renderer.forExport ? a.erase(p, e) : p[e.index] = void 0;a.chartCount--;e.renderTo.removeAttribute("data-highcharts-chart");y(e);for (c = k.length; c--;) {
          k[c] = k[c].destroy();
        }this.scroller && this.scroller.destroy && this.scroller.destroy();for (c = d.length; c--;) {
          d[c] = d[c].destroy();
        }"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (a) {
          var b = e[a];b && b.destroy && (e[a] = b.destroy());
        });f && (f.innerHTML = "", y(f), g && x(f));A(e, function (a, b) {
          delete e[b];
        });
      }, firstRender: function firstRender() {
        var e = this,
            d = e.options;if (!e.isReadyToRender || e.isReadyToRender()) {
          e.getContainer();e.resetMargins();e.setChartSize();e.propFromSeries();e.getAxes();(a.isArray(d.series) ? d.series : []).forEach(function (a) {
            e.initSeries(a);
          });e.linkSeries();b(e, "beforeRender");k && (e.pointer = new k(e, d));e.render();if (!e.renderer.imgCount && e.onload) e.onload();e.temporaryDisplay(!0);
        }
      }, onload: function onload() {
        [this.callback].concat(this.callbacks).forEach(function (a) {
          a && void 0 !== this.index && a.apply(this, [this]);
        }, this);b(this, "load");b(this, "render");d(this.index) && this.setReflow(this.options.chart.reflow);this.onload = null;
      } });
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.Chart;z(F, "afterSetChartSize", function (z) {
      var h = this.options.chart.scrollablePlotArea;(h = h && h.minWidth) && !this.renderer.forExport && (this.scrollablePixels = h = Math.max(0, h - this.chartWidth)) && (this.plotWidth += h, this.clipBox.width += h, z.skipAxes || this.axes.forEach(function (c) {
        1 === c.side ? c.getPlotLinePath = function () {
          var h = this.right,
              u;this.right = h - c.chart.scrollablePixels;u = a.Axis.prototype.getPlotLinePath.apply(this, arguments);this.right = h;return u;
        } : (c.setAxisSize(), c.setAxisTranslation());
      }));
    });z(F, "render", function () {
      this.scrollablePixels ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
    });F.prototype.setUpScrolling = function () {
      this.scrollingContainer = a.createElement("div", { className: "highcharts-scrolling" }, { overflowX: "auto", WebkitOverflowScrolling: "touch" }, this.renderTo);
      this.innerContainer = a.createElement("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling = null;
    };F.prototype.applyFixed = function () {
      var z = this.container,
          h,
          c,
          r = !this.fixedDiv;r && (this.fixedDiv = a.createElement("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: 2 }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = h = new a.Renderer(this.fixedDiv, 0, 0), this.scrollableMask = h.path().attr({ fill: a.color(this.options.chart.backgroundColor || "#fff").setOpacity(.85).get(), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), [this.inverted ? ".highcharts-xaxis" : ".highcharts-yaxis", this.inverted ? ".highcharts-xaxis-labels" : ".highcharts-yaxis-labels", ".highcharts-contextbutton", ".highcharts-credits", ".highcharts-legend", ".highcharts-subtitle", ".highcharts-title", ".highcharts-legend-checkbox"].forEach(function (a) {
        [].forEach.call(z.querySelectorAll(a), function (a) {
          (a.namespaceURI === h.SVG_NS ? h.box : h.box.parentNode).appendChild(a);a.style.pointerEvents = "auto";
        });
      }));this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);c = this.chartWidth + this.scrollablePixels;a.stop(this.container);this.container.style.width = c + "px";this.renderer.boxWrapper.attr({ width: c, height: this.chartHeight, viewBox: [0, 0, c, this.chartHeight].join(" ") });this.chartBackground.attr({ width: c });r && (c = this.options.chart.scrollablePlotArea, c.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixels * c.scrollPositionX));r = this.axisOffset;c = this.plotTop - r[0] - 1;var r = this.plotTop + this.plotHeight + r[2],
          u = this.plotLeft + this.plotWidth - this.scrollablePixels;this.scrollableMask.attr({ d: this.scrollablePixels ? ["M", 0, c, "L", this.plotLeft - 1, c, "L", this.plotLeft - 1, r, "L", 0, r, "Z", "M", u, c, "L", this.chartWidth, c, "L", this.chartWidth, r, "L", u, r, "Z"] : ["M", 0, 0] });
    };
  })(I);(function (a) {
    var z,
        F = a.extend,
        G = a.erase,
        h = a.fireEvent,
        c = a.format,
        r = a.isArray,
        u = a.isNumber,
        w = a.pick,
        x = a.uniqueKey,
        p = a.defined,
        g = a.removeEvent;
    a.Point = z = function z() {};a.Point.prototype = { init: function init(a, c, g) {
        var b;b = a.chart.options.chart.colorCount;var d = a.chart.styledMode;this.series = a;d || (this.color = a.color);this.applyOptions(c, g);this.id = p(this.id) ? this.id : x();a.options.colorByPoint ? (d || (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter], b = b.length), c = a.colorCounter, a.colorCounter++, a.colorCounter === b && (a.colorCounter = 0)) : c = a.colorIndex;this.colorIndex = w(this.colorIndex, c);a.chart.pointCount++;h(this, "afterInit");
        return this;
      }, applyOptions: function applyOptions(a, c) {
        var d = this.series,
            b = d.options.pointValKey || d.pointValKey;a = z.prototype.optionsToObject.call(this, a);F(this, a);this.options = this.options ? F(this.options, a) : a;a.group && delete this.group;a.dataLabels && delete this.dataLabels;b && (this.y = this[b]);this.isNull = w(this.isValid && !this.isValid(), null === this.x || !u(this.y, !0));this.selected && (this.state = "select");"name" in this && void 0 === c && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));void 0 === this.x && d && (this.x = void 0 === c ? d.autoIncrement(this) : c);return this;
      }, setNestedProperty: function setNestedProperty(d, c, g) {
        g.split(".").reduce(function (b, d, f, g) {
          b[d] = g.length - 1 === f ? c : a.isObject(b[d], !0) ? b[d] : {};return b[d];
        }, d);return d;
      }, optionsToObject: function optionsToObject(d) {
        var c = {},
            g = this.series,
            b = g.options.keys,
            l = b || g.pointArrayMap || ["y"],
            f = l.length,
            h = 0,
            t = 0;if (u(d) || null === d) c[l[0]] = d;else if (r(d)) for (!b && d.length > f && (g = _typeof(d[0]), "string" === g ? c.name = d[0] : "number" === g && (c.x = d[0]), h++); t < f;) {
          b && void 0 === d[h] || (0 < l[t].indexOf(".") ? a.Point.prototype.setNestedProperty(c, d[h], l[t]) : c[l[t]] = d[h]), h++, t++;
        } else "object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) && (c = d, d.dataLabels && (g._hasPointLabels = !0), d.marker && (g._hasPointMarkers = !0));return c;
      }, getClassName: function getClassName() {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      }, getZone: function getZone() {
        var a = this.series,
            c = a.zones,
            a = a.zoneAxis || "y",
            g = 0,
            b;for (b = c[g]; this[a] >= b.value;) {
          b = c[++g];
        }this.nonZonedColor || (this.nonZonedColor = this.color);this.color = b && b.color && !this.options.color ? b.color : this.nonZonedColor;return b;
      }, destroy: function destroy() {
        var a = this.series.chart,
            c = a.hoverPoints,
            h;a.pointCount--;c && (this.setState(), G(c, this), c.length || (a.hoverPoints = null));if (this === a.hoverPoint) this.onMouseOut();if (this.graphic || this.dataLabel || this.dataLabels) g(this), this.destroyElements();
        this.legendItem && a.legend.destroyItem(this);for (h in this) {
          this[h] = null;
        }
      }, destroyElements: function destroyElements() {
        for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], c, g = 6; g--;) {
          c = a[g], this[c] && (this[c] = this[c].destroy());
        }this.dataLabels && (this.dataLabels.forEach(function (a) {
          a.element && a.destroy();
        }), delete this.dataLabels);this.connectors && (this.connectors.forEach(function (a) {
          a.element && a.destroy();
        }), delete this.connectors);
      }, getLabelConfig: function getLabelConfig() {
        return { x: this.category, y: this.y, color: this.color,
          colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal };
      }, tooltipFormatter: function tooltipFormatter(a) {
        var d = this.series,
            g = d.tooltipOptions,
            b = w(g.valueDecimals, ""),
            l = g.valuePrefix || "",
            f = g.valueSuffix || "";d.chart.styledMode && (a = d.chart.tooltip.styledModeFormat(a));(d.pointArrayMap || ["y"]).forEach(function (d) {
          d = "{point." + d;if (l || f) a = a.replace(RegExp(d + "}", "g"), l + d + "}" + f);a = a.replace(RegExp(d + "}", "g"), d + ":,." + b + "f}");
        });return c(a, { point: this, series: this.series }, d.chart.time);
      }, firePointEvent: function firePointEvent(a, c, g) {
        var b = this,
            d = this.series.options;(d.point.events[a] || b.options && b.options.events && b.options.events[a]) && this.importEvents();"click" === a && d.allowPointSelect && (g = function g(a) {
          b.select && b.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });h(this, a, c, g);
      }, visible: !0 };
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.animObject,
        G = a.arrayMax,
        h = a.arrayMin,
        c = a.correctFloat,
        r = a.defaultOptions,
        u = a.defaultPlotOptions,
        w = a.defined,
        x = a.erase,
        p = a.extend,
        g = a.fireEvent,
        d = a.isArray,
        m = a.isNumber,
        n = a.isString,
        b = a.merge,
        l = a.objectEach,
        f = a.pick,
        v = a.removeEvent,
        t = a.splat,
        H = a.SVGElement,
        D = a.syncTimeout,
        A = a.win;a.Series = a.seriesType("line", null, { lineWidth: 2, allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: { lineWidth: 0, lineColor: "#ffffff", enabledThreshold: 2, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } } },
      point: { events: {} }, dataLabels: { align: "center", formatter: function formatter() {
          return null === this.y ? "" : a.numberFormat(this.y, -1);
        }, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0, padding: 5 }, cropThreshold: 300, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: { animation: { duration: 0 } } }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x" }, { isCartesian: !0, pointClass: a.Point, sorted: !0, requireSorting: !0, directTouch: !1, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], coll: "series", init: function init(a, b) {
        g(this, "init", { options: b });var k = this,
            d,
            e = a.series,
            c;k.chart = a;k.options = b = k.setOptions(b);k.linkedSeries = [];k.bindAxes();p(k, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected });d = b.events;l(d, function (a, b) {
          z(k, b, a);
        });if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;k.getColor();k.getSymbol();k.parallelArrays.forEach(function (a) {
          k[a + "Data"] = [];
        });k.setData(b.data, !1);k.isCartesian && (a.hasCartesianSeries = !0);e.length && (c = e[e.length - 1]);k._i = f(c && c._i, -1) + 1;a.orderSeries(this.insert(e));g(this, "afterInit");
      }, insert: function insert(a) {
        var b = this.options.index,
            k;if (m(b)) {
          for (k = a.length; k--;) {
            if (b >= f(a[k].options.index, a[k]._i)) {
              a.splice(k + 1, 0, this);break;
            }
          }-1 === k && a.unshift(this);k += 1;
        } else a.push(this);return f(k, a.length - 1);
      }, bindAxes: function bindAxes() {
        var b = this,
            d = b.options,
            f = b.chart,
            c;g(this, "bindAxes", null, function () {
          (b.axisTypes || []).forEach(function (e) {
            f[e].forEach(function (a) {
              c = a.options;if (d[e] === c.index || void 0 !== d[e] && d[e] === c.id || void 0 === d[e] && 0 === c.index) b.insert(a.series), b[e] = a, a.isDirty = !0;
            });b[e] || b.optionalAxis === e || a.error(18, !0, f);
          });
        });
      }, updateParallelArrays: function updateParallelArrays(a, b) {
        var k = a.series,
            d = arguments,
            e = m(b) ? function (e) {
          var d = "y" === e && k.toYData ? k.toYData(a) : a[e];k[e + "Data"][b] = d;
        } : function (a) {
          Array.prototype[b].apply(k[a + "Data"], Array.prototype.slice.call(d, 2));
        };k.parallelArrays.forEach(e);
      }, autoIncrement: function autoIncrement() {
        var a = this.options,
            b = this.xIncrement,
            d,
            c = a.pointIntervalUnit,
            e = this.chart.time,
            b = f(b, a.pointStart, 0);this.pointInterval = d = f(this.pointInterval, a.pointInterval, 1);c && (a = new e.Date(b), "day" === c ? e.set("Date", a, e.get("Date", a) + d) : "month" === c ? e.set("Month", a, e.get("Month", a) + d) : "year" === c && e.set("FullYear", a, e.get("FullYear", a) + d), d = a.getTime() - b);this.xIncrement = b + d;return b;
      }, setOptions: function setOptions(a) {
        var d = this.chart,
            k = d.options,
            c = k.plotOptions,
            e = (d.userOptions || {}).plotOptions || {},
            q = c[this.type],
            l = d.styledMode;this.userOptions = b(a);d = b(q, c.series, a);this.tooltipOptions = b(r.tooltip, r.plotOptions.series && r.plotOptions.series.tooltip, r.plotOptions[this.type].tooltip, k.tooltip.userOptions, c.series && c.series.tooltip, c[this.type].tooltip, a.tooltip);this.stickyTracking = f(a.stickyTracking, e[this.type] && e[this.type].stickyTracking, e.series && e.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : d.stickyTracking);null === q.marker && delete d.marker;this.zoneAxis = d.zoneAxis;a = this.zones = (d.zones || []).slice();!d.negativeColor && !d.negativeFillColor || d.zones || (k = { value: d[this.zoneAxis + "Threshold"] || d.threshold || 0, className: "highcharts-negative" }, l || (k.color = d.negativeColor, k.fillColor = d.negativeFillColor), a.push(k));a.length && w(a[a.length - 1].value) && a.push(l ? {} : { color: this.color, fillColor: this.fillColor });g(this, "afterSetOptions", { options: d });return d;
      }, getName: function getName() {
        return f(this.options.name, "Series " + (this.index + 1));
      }, getCyclic: function getCyclic(a, b, d) {
        var k,
            e = this.chart,
            c = this.userOptions,
            g = a + "Index",
            l = a + "Counter",
            m = d ? d.length : f(e.options.chart[a + "Count"], e[a + "Count"]);b || (k = f(c[g], c["_" + g]), w(k) || (e.series.length || (e[l] = 0), c["_" + g] = k = e[l] % m, e[l] += 1), d && (b = d[k]));void 0 !== k && (this[g] = k);this[a] = b;
      }, getColor: function getColor() {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || u[this.type].color, this.chart.options.colors);
      }, getSymbol: function getSymbol() {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      }, drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker, updateData: function updateData(b) {
        var d = this.options,
            k = this.points,
            f = [],
            e,
            c,
            g,
            l = this.requireSorting;this.xIncrement = null;b.forEach(function (b) {
          var c, q, h;c = a.defined(b) && this.pointClass.prototype.optionsToObject.call({ series: this }, b) || {};h = c.x;if ((c = c.id) || m(h)) c && (q = (q = this.chart.get(c)) && q.index), void 0 === q && m(h) && (q = this.xData.indexOf(h, g)), -1 === q || void 0 === q || k[q].touched ? f.push(b) : b !== d.data[q] ? (k[q].update(b, !1, null, !1), k[q].touched = !0, l && (g = q + 1)) : k[q] && (k[q].touched = !0), e = !0;
        }, this);if (e) for (b = k.length; b--;) {
          c = k[b], c.touched || c.remove(!1), c.touched = !1;
        } else if (b.length === k.length) b.forEach(function (a, b) {
          k[b].update && a !== d.data[b] && k[b].update(a, !1, null, !1);
        });else return !1;f.forEach(function (a) {
          this.addPoint(a, !1);
        }, this);return !0;
      }, setData: function setData(b, c, g, l) {
        var e = this,
            k = e.points,
            h = k && k.length || 0,
            t,
            E = e.options,
            p = e.chart,
            v = null,
            C = e.xAxis,
            y = E.turboThreshold,
            r = this.xData,
            A = this.yData,
            u = (t = e.pointArrayMap) && t.length,
            w = E.keys,
            D = 0,
            x = 1,
            H;b = b || [];t = b.length;c = f(c, !0);!1 !== l && t && h && !e.cropped && !e.hasGroupedData && e.visible && !e.isSeriesBoosting && (H = this.updateData(b));if (!H) {
          e.xIncrement = null;e.colorCounter = 0;this.parallelArrays.forEach(function (a) {
            e[a + "Data"].length = 0;
          });if (y && t > y) {
            for (g = 0; null === v && g < t;) {
              v = b[g], g++;
            }if (m(v)) for (g = 0; g < t; g++) {
              r[g] = this.autoIncrement(), A[g] = b[g];
            } else if (d(v)) {
              if (u) for (g = 0; g < t; g++) {
                v = b[g], r[g] = v[0], A[g] = v.slice(1, u + 1);
              } else for (w && (D = w.indexOf("x"), x = w.indexOf("y"), D = 0 <= D ? D : 0, x = 0 <= x ? x : 1), g = 0; g < t; g++) {
                v = b[g], r[g] = v[D], A[g] = v[x];
              }
            } else a.error(12, !1, p);
          } else for (g = 0; g < t; g++) {
            void 0 !== b[g] && (v = { series: e }, e.pointClass.prototype.applyOptions.apply(v, [b[g]]), e.updateParallelArrays(v, g));
          }A && n(A[0]) && a.error(14, !0, p);e.data = [];e.options.data = e.userOptions.data = b;for (g = h; g--;) {
            k[g] && k[g].destroy && k[g].destroy();
          }C && (C.minRange = C.userMinRange);e.isDirty = p.isDirtyBox = !0;e.isDirtyData = !!k;g = !1;
        }"point" === E.legendType && (this.processData(), this.generatePoints());c && p.redraw(g);
      }, processData: function processData(b) {
        var d = this.xData,
            k = this.yData,
            f = d.length,
            e;e = 0;var c,
            g,
            l = this.xAxis,
            m,
            h = this.options;m = h.cropThreshold;var n = this.getExtremesFromAll || h.getExtremesFromAll,
            t = this.isCartesian,
            h = l && l.val2lin,
            p = l && l.isLog,
            v = this.requireSorting,
            r,
            A;if (t && !this.isDirty && !l.isDirty && !this.yAxis.isDirty && !b) return !1;l && (b = l.getExtremes(), r = b.min, A = b.max);t && this.sorted && !n && (!m || f > m || this.forceCrop) && (d[f - 1] < r || d[0] > A ? (d = [], k = []) : this.yData && (d[0] < r || d[f - 1] > A) && (e = this.cropData(this.xData, this.yData, r, A), d = e.xData, k = e.yData, e = e.start, c = !0));for (m = d.length || 1; --m;) {
          f = p ? h(d[m]) - h(d[m - 1]) : d[m] - d[m - 1], 0 < f && (void 0 === g || f < g) ? g = f : 0 > f && v && (a.error(15, !1, this.chart), v = !1);
        }this.cropped = c;this.cropStart = e;this.processedXData = d;this.processedYData = k;this.closestPointRange = g;
      }, cropData: function cropData(a, b, d, c, e) {
        var k = a.length,
            g = 0,
            l = k,
            m;e = f(e, this.cropShoulder, 1);for (m = 0; m < k; m++) {
          if (a[m] >= d) {
            g = Math.max(0, m - e);break;
          }
        }for (d = m; d < k; d++) {
          if (a[d] > c) {
            l = d + e;break;
          }
        }return { xData: a.slice(g, l), yData: b.slice(g, l), start: g, end: l };
      }, generatePoints: function generatePoints() {
        var a = this.options,
            b = a.data,
            d = this.data,
            f,
            e = this.processedXData,
            c = this.processedYData,
            l = this.pointClass,
            m = e.length,
            h = this.cropStart || 0,
            n,
            v = this.hasGroupedData,
            a = a.keys,
            r,
            A = [],
            u;d || v || (d = [], d.length = b.length, d = this.data = d);a && v && (this.options.keys = !1);for (u = 0; u < m; u++) {
          n = h + u, v ? (r = new l().init(this, [e[u]].concat(t(c[u]))), r.dataGroup = this.groupMap[u], r.dataGroup.options && (r.options = r.dataGroup.options, p(r, r.dataGroup.options), delete r.dataLabels)) : (r = d[n]) || void 0 === b[n] || (d[n] = r = new l().init(this, b[n], e[u])), r && (r.index = n, A[u] = r);
        }this.options.keys = a;if (d && (m !== (f = d.length) || v)) for (u = 0; u < f; u++) {
          u !== h || v || (u += m), d[u] && (d[u].destroyElements(), d[u].plotX = void 0);
        }this.data = d;this.points = A;g(this, "afterGeneratePoints");
      }, getExtremes: function getExtremes(a) {
        var b = this.yAxis,
            k = this.processedXData,
            f,
            e = [],
            c = 0;f = this.xAxis.getExtremes();var l = f.min,
            n = f.max,
            t,
            p,
            v = this.requireSorting ? 1 : 0,
            r,
            A;a = a || this.stackedYData || this.processedYData || [];f = a.length;for (A = 0; A < f; A++) {
          if (p = k[A], r = a[A], t = (m(r, !0) || d(r)) && (!b.positiveValuesOnly || r.length || 0 < r), p = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (k[A + v] || p) >= l && (k[A - v] || p) <= n, t && p) if (t = r.length) for (; t--;) {
            "number" === typeof r[t] && (e[c++] = r[t]);
          } else e[c++] = r;
        }this.dataMin = h(e);this.dataMax = G(e);g(this, "afterGetExtremes");
      }, translate: function translate() {
        this.processedXData || this.processData();this.generatePoints();var a = this.options,
            b = a.stacking,
            d = this.xAxis,
            l = d.categories,
            e = this.yAxis,
            q = this.points,
            h = q.length,
            n = !!this.modifyValue,
            t,
            p = this.pointPlacementToXValue(),
            v = m(p),
            r = a.threshold,
            A = a.startFromThreshold ? r : 0,
            u,
            D,
            x,
            H,
            z = this.zoneAxis || "y",
            G = Number.MAX_VALUE;for (t = 0; t < h; t++) {
          var F = q[t],
              I = F.x,
              Q = F.y;D = F.low;var M = b && e.stacks[(this.negStacks && Q < (A ? 0 : r) ? "-" : "") + this.stackKey],
              V;e.positiveValuesOnly && null !== Q && 0 >= Q && (F.isNull = !0);F.plotX = u = c(Math.min(Math.max(-1E5, d.translate(I, 0, 0, 0, 1, p, "flags" === this.type)), 1E5));b && this.visible && !F.isNull && M && M[I] && (H = this.getStackIndicator(H, I, this.index), V = M[I], Q = V.points[H.key], D = Q[0], Q = Q[1], D === A && H.key === M[I].base && (D = f(m(r) && r, e.min)), e.positiveValuesOnly && 0 >= D && (D = null), F.total = F.stackTotal = V.total, F.percentage = V.total && F.y / V.total * 100, F.stackY = Q, V.setOffset(this.pointXOffset || 0, this.barW || 0));F.yBottom = w(D) ? Math.min(Math.max(-1E5, e.translate(D, 0, 1, 0, 1)), 1E5) : null;n && (Q = this.modifyValue(Q, F));F.plotY = D = "number" === typeof Q && Infinity !== Q ? Math.min(Math.max(-1E5, e.translate(Q, 0, 1, 0, 1)), 1E5) : void 0;F.isInside = void 0 !== D && 0 <= D && D <= e.len && 0 <= u && u <= d.len;F.clientX = v ? c(d.translate(I, 0, 0, 0, 1, p)) : u;F.negative = F[z] < (a[z + "Threshold"] || r || 0);F.category = l && void 0 !== l[F.x] ? l[F.x] : F.x;F.isNull || (void 0 !== x && (G = Math.min(G, Math.abs(u - x))), x = u);F.zone = this.zones.length && F.getZone();
        }this.closestPointRangePx = G;g(this, "afterTranslate");
      }, getValidPoints: function getValidPoints(a, b) {
        var d = this.chart;return (a || this.points || []).filter(function (a) {
          return b && !d.isInsidePlot(a.plotX, a.plotY, d.inverted) ? !1 : !a.isNull;
        });
      }, setClip: function setClip(a) {
        var b = this.chart,
            d = this.options,
            f = b.renderer,
            e = b.inverted,
            k = this.clipBox,
            c = k || b.clipBox,
            g = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, c.height, d.xAxis, d.yAxis].join(),
            l = b[g],
            m = b[g + "m"];l || (a && (c.width = 0, e && (c.x = b.plotSizeX), b[g + "m"] = m = f.clipRect(e ? b.plotSizeX + 99 : -99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight)), b[g] = l = f.clipRect(c), l.count = { length: 0 });a && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1);!1 !== d.clip && (this.group.clip(a || k ? l : b.clipRect), this.markerGroup.clip(m), this.sharedClipKey = g);a || (l.count[this.index] && (delete l.count[this.index], --l.count.length), 0 === l.count.length && g && b[g] && (k || (b[g] = b[g].destroy()), b[g + "m"] && (b[g + "m"] = b[g + "m"].destroy())));
      }, animate: function animate(a) {
        var b = this.chart,
            d = F(this.options.animation),
            f;a ? this.setClip(d) : (f = this.sharedClipKey, (a = b[f]) && a.animate({ width: b.plotSizeX, x: 0 }, d), b[f + "m"] && b[f + "m"].animate({ width: b.plotSizeX + 99, x: 0 }, d), this.animate = null);
      }, afterAnimate: function afterAnimate() {
        this.setClip();g(this, "afterAnimate");this.finishedAnimating = !0;
      }, drawPoints: function drawPoints() {
        var a = this.points,
            b = this.chart,
            d,
            c,
            e,
            g,
            l = this.options.marker,
            m,
            h,
            n,
            t = this[this.specialGroup] || this.markerGroup;d = this.xAxis;
        var p,
            v = f(l.enabled, !d || d.isRadial ? !0 : null, this.closestPointRangePx >= l.enabledThreshold * l.radius);if (!1 !== l.enabled || this._hasPointMarkers) for (d = 0; d < a.length; d++) {
          c = a[d], g = c.graphic, m = c.marker || {}, h = !!c.marker, e = v && void 0 === m.enabled || m.enabled, n = !1 !== c.isInside, e && !c.isNull ? (e = f(m.symbol, this.symbol), p = this.markerAttribs(c, c.selected && "select"), g ? g[n ? "show" : "hide"](!0).animate(p) : n && (0 < p.width || c.hasImage) && (c.graphic = g = b.renderer.symbol(e, p.x, p.y, p.width, p.height, h ? m : l).add(t)), g && !b.styledMode && g.attr(this.pointAttribs(c, c.selected && "select")), g && g.addClass(c.getClassName(), !0)) : g && (c.graphic = g.destroy());
        }
      }, markerAttribs: function markerAttribs(a, b) {
        var d = this.options.marker,
            c = a.marker || {},
            e = c.symbol || d.symbol,
            k = f(c.radius, d.radius);b && (d = d.states[b], b = c.states && c.states[b], k = f(b && b.radius, d && d.radius, k + (d && d.radiusPlus || 0)));a.hasImage = e && 0 === e.indexOf("url");a.hasImage && (k = 0);a = { x: Math.floor(a.plotX) - k, y: a.plotY - k };k && (a.width = a.height = 2 * k);return a;
      }, pointAttribs: function pointAttribs(a, b) {
        var d = this.options.marker,
            c = a && a.options,
            e = c && c.marker || {},
            k = this.color,
            g = c && c.color,
            l = a && a.color,
            c = f(e.lineWidth, d.lineWidth);a = a && a.zone && a.zone.color;k = g || a || l || k;a = e.fillColor || d.fillColor || k;k = e.lineColor || d.lineColor || k;b && (d = d.states[b], b = e.states && e.states[b] || {}, c = f(b.lineWidth, d.lineWidth, c + f(b.lineWidthPlus, d.lineWidthPlus, 0)), a = b.fillColor || d.fillColor || a, k = b.lineColor || d.lineColor || k);return { stroke: k, "stroke-width": c, fill: a };
      }, destroy: function destroy() {
        var b = this,
            d = b.chart,
            f = /AppleWebKit\/533/.test(A.navigator.userAgent),
            c,
            e,
            q = b.data || [],
            m,
            h;g(b, "destroy");v(b);(b.axisTypes || []).forEach(function (a) {
          (h = b[a]) && h.series && (x(h.series, b), h.isDirty = h.forceRedraw = !0);
        });b.legendItem && b.chart.legend.destroyItem(b);for (e = q.length; e--;) {
          (m = q[e]) && m.destroy && m.destroy();
        }b.points = null;a.clearTimeout(b.animationTimeout);l(b, function (a, b) {
          a instanceof H && !a.survive && (c = f && "group" === b ? "hide" : "destroy", a[c]());
        });d.hoverSeries === b && (d.hoverSeries = null);x(d.series, b);d.orderSeries();l(b, function (a, e) {
          delete b[e];
        });
      }, getGraphPath: function getGraphPath(a, b, d) {
        var f = this,
            e = f.options,
            c = e.step,
            k,
            g = [],
            l = [],
            m;a = a || f.points;(k = a.reversed) && a.reverse();(c = { right: 1, center: 2 }[c] || c && 3) && k && (c = 4 - c);!e.connectNulls || b || d || (a = this.getValidPoints(a));a.forEach(function (k, q) {
          var h = k.plotX,
              n = k.plotY,
              t = a[q - 1];(k.leftCliff || t && t.rightCliff) && !d && (m = !0);k.isNull && !w(b) && 0 < q ? m = !e.connectNulls : k.isNull && !b ? m = !0 : (0 === q || m ? q = ["M", k.plotX, k.plotY] : f.getPointSpline ? q = f.getPointSpline(a, k, q) : c ? (q = 1 === c ? ["L", t.plotX, n] : 2 === c ? ["L", (t.plotX + h) / 2, t.plotY, "L", (t.plotX + h) / 2, n] : ["L", h, t.plotY], q.push("L", h, n)) : q = ["L", h, n], l.push(k.x), c && (l.push(k.x), 2 === c && l.push(k.x)), g.push.apply(g, q), m = !1);
        });g.xMap = l;return f.graphPath = g;
      }, drawGraph: function drawGraph() {
        var a = this,
            b = this.options,
            d = (this.gappedPath || this.getGraphPath).call(this),
            f = this.chart.styledMode,
            e = [["graph", "highcharts-graph"]];f || e[0].push(b.lineColor || this.color, b.dashStyle);e = a.getZonesGraphs(e);e.forEach(function (e, c) {
          var k = e[0],
              g = a[k];g ? (g.endX = a.preventGraphAnimation ? null : d.xMap, g.animate({ d: d })) : d.length && (a[k] = a.chart.renderer.path(d).addClass(e[1]).attr({ zIndex: 1 }).add(a.group), f || (g = { stroke: e[2], "stroke-width": b.lineWidth, fill: a.fillGraph && a.color || "none" }, e[3] ? g.dashstyle = e[3] : "square" !== b.linecap && (g["stroke-linecap"] = g["stroke-linejoin"] = "round"), g = a[k].attr(g).shadow(2 > c && b.shadow)));g && (g.startX = d.xMap, g.isArea = d.isArea);
        });
      }, getZonesGraphs: function getZonesGraphs(a) {
        this.zones.forEach(function (b, d) {
          d = ["zone-graph-" + d, "highcharts-graph highcharts-zone-graph-" + d + " " + (b.className || "")];this.chart.styledMode || d.push(b.color || this.color, b.dashStyle || this.options.dashStyle);a.push(d);
        }, this);return a;
      }, applyZones: function applyZones() {
        var a = this,
            b = this.chart,
            d = b.renderer,
            c = this.zones,
            e,
            g,
            l = this.clips || [],
            m,
            h = this.graph,
            n = this.area,
            t = Math.max(b.chartWidth, b.chartHeight),
            p = this[(this.zoneAxis || "y") + "Axis"],
            v,
            r,
            A = b.inverted,
            u,
            w,
            D,
            x,
            H = !1;c.length && (h || n) && p && void 0 !== p.min && (r = p.reversed, u = p.horiz, h && !this.showLine && h.hide(), n && n.hide(), v = p.getExtremes(), c.forEach(function (c, k) {
          e = r ? u ? b.plotWidth : 0 : u ? 0 : p.toPixels(v.min) || 0;e = Math.min(Math.max(f(g, e), 0), t);g = Math.min(Math.max(Math.round(p.toPixels(f(c.value, v.max), !0) || 0), 0), t);H && (e = g = p.toPixels(v.max));w = Math.abs(e - g);D = Math.min(e, g);x = Math.max(e, g);p.isXAxis ? (m = { x: A ? x : D, y: 0, width: w, height: t }, u || (m.x = b.plotHeight - m.x)) : (m = { x: 0, y: A ? x : D, width: t, height: w }, u && (m.y = b.plotWidth - m.y));A && d.isVML && (m = p.isXAxis ? { x: 0, y: r ? D : x, height: m.width, width: b.chartWidth } : { x: m.y - b.plotLeft - b.spacingBox.x, y: 0, width: m.height, height: b.chartHeight });l[k] ? l[k].animate(m) : (l[k] = d.clipRect(m), h && a["zone-graph-" + k].clip(l[k]), n && a["zone-area-" + k].clip(l[k]));H = c.value > v.max;a.resetZones && 0 === g && (g = void 0);
        }), this.clips = l);
      }, invertGroups: function invertGroups(a) {
        function b() {
          ["group", "markerGroup"].forEach(function (b) {
            d[b] && (c.renderer.isVML && d[b].attr({ width: d.yAxis.len, height: d.xAxis.len }), d[b].width = d.yAxis.len, d[b].height = d.xAxis.len, d[b].invert(a));
          });
        }var d = this,
            c = d.chart,
            e;d.xAxis && (e = z(c, "resize", b), z(d, "destroy", e), b(a), d.invertGroups = b);
      }, plotGroup: function plotGroup(a, b, d, c, e) {
        var f = this[a],
            k = !f;k && (this[a] = f = this.chart.renderer.g().attr({ zIndex: c || .1 }).add(e));f.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (w(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (f.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);f.attr({ visibility: d })[k ? "attr" : "animate"](this.getPlotBox());return f;
      }, getPlotBox: function getPlotBox() {
        var a = this.chart,
            b = this.xAxis,
            d = this.yAxis;a.inverted && (b = d, d = this.xAxis);return { translateX: b ? b.left : a.plotLeft, translateY: d ? d.top : a.plotTop, scaleX: 1, scaleY: 1 };
      }, render: function render() {
        var a = this,
            b = a.chart,
            d,
            c = a.options,
            e = !!a.animate && b.renderer.isSVG && F(c.animation).duration,
            f = a.visible ? "inherit" : "hidden",
            l = c.zIndex,
            m = a.hasRendered,
            h = b.seriesGroup,
            n = b.inverted;g(this, "render");d = a.plotGroup("group", "series", f, l, h);a.markerGroup = a.plotGroup("markerGroup", "markers", f, l, h);e && a.animate(!0);d.inverted = a.isCartesian ? n : !1;a.drawGraph && (a.drawGraph(), a.applyZones());a.drawDataLabels && a.drawDataLabels();a.visible && a.drawPoints();a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();a.invertGroups(n);
        !1 === c.clip || a.sharedClipKey || m || d.clip(b.clipRect);e && a.animate();m || (a.animationTimeout = D(function () {
          a.afterAnimate();
        }, e));a.isDirty = !1;a.hasRendered = !0;g(a, "afterRender");
      }, redraw: function redraw() {
        var a = this.chart,
            b = this.isDirty || this.isDirtyData,
            d = this.group,
            c = this.xAxis,
            e = this.yAxis;d && (a.inverted && d.attr({ width: a.plotWidth, height: a.plotHeight }), d.animate({ translateX: f(c && c.left, a.plotLeft), translateY: f(e && e.top, a.plotTop) }));this.translate();this.render();b && delete this.kdTree;
      }, kdAxisArray: ["clientX", "plotY"], searchPoint: function searchPoint(a, b) {
        var d = this.xAxis,
            c = this.yAxis,
            e = this.chart.inverted;return this.searchKDTree({ clientX: e ? d.len - a.chartY + d.pos : a.chartX - d.pos, plotY: e ? c.len - a.chartX + c.pos : a.chartY - c.pos }, b, a);
      }, buildKDTree: function buildKDTree(a) {
        function b(a, c, f) {
          var e, k;if (k = a && a.length) return e = d.kdAxisArray[c % f], a.sort(function (a, b) {
            return a[e] - b[e];
          }), k = Math.floor(k / 2), { point: a[k], left: b(a.slice(0, k), c + 1, f), right: b(a.slice(k + 1), c + 1, f) };
        }this.buildingKdTree = !0;var d = this,
            c = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;delete d.kdTree;D(function () {
          d.kdTree = b(d.getValidPoints(null, !d.directTouch), c, c);d.buildingKdTree = !1;
        }, d.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
      }, searchKDTree: function searchKDTree(a, b, d) {
        function c(a, b, d, l) {
          var m = b.point,
              h = e.kdAxisArray[d % l],
              q,
              n,
              t = m;n = w(a[f]) && w(m[f]) ? Math.pow(a[f] - m[f], 2) : null;q = w(a[k]) && w(m[k]) ? Math.pow(a[k] - m[k], 2) : null;q = (n || 0) + (q || 0);m.dist = w(q) ? Math.sqrt(q) : Number.MAX_VALUE;m.distX = w(n) ? Math.sqrt(n) : Number.MAX_VALUE;h = a[h] - m[h];q = 0 > h ? "left" : "right";n = 0 > h ? "right" : "left";b[q] && (q = c(a, b[q], d + 1, l), t = q[g] < t[g] ? q : m);b[n] && Math.sqrt(h * h) < t[g] && (a = c(a, b[n], d + 1, l), t = a[g] < t[g] ? a : t);return t;
        }var e = this,
            f = this.kdAxisArray[0],
            k = this.kdAxisArray[1],
            g = b ? "distX" : "dist";b = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1;this.kdTree || this.buildingKdTree || this.buildKDTree(d);if (this.kdTree) return c(a, this.kdTree, b, b);
      }, pointPlacementToXValue: function pointPlacementToXValue() {
        var a = this.options.pointPlacement;"between" === a && (a = .5);m(a) && (a *= f(this.options.pointRange || this.xAxis.pointRange));return a;
      } });
  })(I);(function (a) {
    var z = a.Axis,
        F = a.Chart,
        G = a.correctFloat,
        h = a.defined,
        c = a.destroyObjectProperties,
        r = a.format,
        u = a.objectEach,
        w = a.pick,
        x = a.Series;a.StackItem = function (a, c, d, m, h) {
      var b = a.chart.inverted;this.axis = a;this.isNegative = d;this.options = c;this.x = m;this.total = null;this.points = {};this.stack = h;this.rightCliff = this.leftCliff = 0;this.alignOptions = { align: c.align || (b ? d ? "left" : "right" : "center"), verticalAlign: c.verticalAlign || (b ? "middle" : d ? "bottom" : "top"), y: w(c.y, b ? 4 : d ? 14 : -6), x: w(c.x, b ? d ? -6 : 6 : 0) };this.textAlign = c.textAlign || (b ? d ? "right" : "left" : "center");
    };a.StackItem.prototype = { destroy: function destroy() {
        c(this, this.axis);
      }, render: function render(a) {
        var c = this.axis.chart,
            d = this.options,
            m = d.format,
            m = m ? r(m, this, c.time) : d.formatter.call(this);this.label ? this.label.attr({ text: m, visibility: "hidden" }) : this.label = c.renderer.text(m, null, null, d.useHTML).css(d.style).attr({ align: this.textAlign, rotation: d.rotation, visibility: "hidden" }).add(a);this.label.labelrank = c.plotHeight;
      }, setOffset: function setOffset(a, c) {
        var d = this.axis,
            g = d.chart,
            n = d.translate(d.usePercentage ? 100 : this.total, 0, 0, 0, 1),
            b = d.translate(0),
            b = h(n) && Math.abs(n - b);a = g.xAxis[0].translate(this.x) + a;d = h(n) && this.getStackBox(g, this, a, n, c, b, d);(c = this.label) && d && (c.align(this.alignOptions, null, d), d = c.alignAttr, c[!1 === this.options.crop || g.isInsidePlot(d.x, d.y) ? "show" : "hide"](!0));
      }, getStackBox: function getStackBox(a, c, d, m, h, b, l) {
        var f = c.axis.reversed,
            g = a.inverted;a = l.height + l.pos - (g ? a.plotLeft : a.plotTop);c = c.isNegative && !f || !c.isNegative && f;return { x: g ? c ? m : m - b : d, y: g ? a - d - h : c ? a - m - b : a - m, width: g ? b : h, height: g ? h : b };
      } };F.prototype.getStacks = function () {
      var a = this;a.yAxis.forEach(function (a) {
        a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks);
      });a.series.forEach(function (c) {
        !c.options.stacking || !0 !== c.visible && !1 !== a.options.chart.ignoreHiddenSeries || (c.stackKey = c.type + w(c.options.stack, ""));
      });
    };z.prototype.buildStacks = function () {
      var a = this.series,
          c = w(this.options.reversedStacks, !0),
          d = a.length,
          m;if (!this.isXAxis) {
        this.usePercentage = !1;for (m = d; m--;) {
          a[c ? m : d - m - 1].setStackedPoints();
        }for (m = 0; m < d; m++) {
          a[m].modifyStacks();
        }
      }
    };z.prototype.renderStackTotals = function () {
      var a = this.chart,
          c = a.renderer,
          d = this.stacks,
          m = this.stackTotalGroup;m || (this.stackTotalGroup = m = c.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add());m.translate(a.plotLeft, a.plotTop);u(d, function (a) {
        u(a, function (a) {
          a.render(m);
        });
      });
    };z.prototype.resetStacks = function () {
      var a = this,
          c = a.stacks;a.isXAxis || u(c, function (d) {
        u(d, function (c, g) {
          c.touched < a.stacksTouched ? (c.destroy(), delete d[g]) : (c.total = null, c.cumulative = null);
        });
      });
    };z.prototype.cleanStacks = function () {
      var a;this.isXAxis || (this.oldStacks && (a = this.stacks = this.oldStacks), u(a, function (a) {
        u(a, function (a) {
          a.cumulative = a.total;
        });
      }));
    };x.prototype.setStackedPoints = function () {
      if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var c = this.processedXData,
            g = this.processedYData,
            d = [],
            m = g.length,
            n = this.options,
            b = n.threshold,
            l = w(n.startFromThreshold && b, 0),
            f = n.stack,
            n = n.stacking,
            v = this.stackKey,
            t = "-" + v,
            r = this.negStacks,
            u = this.yAxis,
            A = u.stacks,
            k = u.oldStacks,
            E,
            C,
            y,
            e,
            q,
            x,
            z;u.stacksTouched += 1;for (q = 0; q < m; q++) {
          x = c[q], z = g[q], E = this.getStackIndicator(E, x, this.index), e = E.key, y = (C = r && z < (l ? 0 : b)) ? t : v, A[y] || (A[y] = {}), A[y][x] || (k[y] && k[y][x] ? (A[y][x] = k[y][x], A[y][x].total = null) : A[y][x] = new a.StackItem(u, u.options.stackLabels, C, x, f)), y = A[y][x], null !== z ? (y.points[e] = y.points[this.index] = [w(y.cumulative, l)], h(y.cumulative) || (y.base = e), y.touched = u.stacksTouched, 0 < E.index && !1 === this.singleStacks && (y.points[e][0] = y.points[this.index + "," + x + ",0"][0])) : y.points[e] = y.points[this.index] = null, "percent" === n ? (C = C ? v : t, r && A[C] && A[C][x] ? (C = A[C][x], y.total = C.total = Math.max(C.total, y.total) + Math.abs(z) || 0) : y.total = G(y.total + (Math.abs(z) || 0))) : y.total = G(y.total + (z || 0)), y.cumulative = w(y.cumulative, l) + (z || 0), null !== z && (y.points[e].push(y.cumulative), d[q] = y.cumulative);
        }"percent" === n && (u.usePercentage = !0);this.stackedYData = d;u.oldStacks = {};
      }
    };x.prototype.modifyStacks = function () {
      var a = this,
          c = a.stackKey,
          d = a.yAxis.stacks,
          m = a.processedXData,
          h,
          b = a.options.stacking;a[b + "Stacker"] && [c, "-" + c].forEach(function (c) {
        for (var f = m.length, g, l; f--;) {
          if (g = m[f], h = a.getStackIndicator(h, g, a.index, c), l = (g = d[c] && d[c][g]) && g.points[h.key]) a[b + "Stacker"](l, g, f);
        }
      });
    };x.prototype.percentStacker = function (a, c, d) {
      c = c.total ? 100 / c.total : 0;a[0] = G(a[0] * c);a[1] = G(a[1] * c);this.stackedYData[d] = a[1];
    };x.prototype.getStackIndicator = function (a, c, d, m) {
      !h(a) || a.x !== c || m && a.key !== m ? a = { x: c, index: 0, key: m } : a.index++;a.key = [d, c, a.index].join();return a;
    };
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.animate,
        G = a.Axis,
        h = a.Chart,
        c = a.createElement,
        r = a.css,
        u = a.defined,
        w = a.erase,
        x = a.extend,
        p = a.fireEvent,
        g = a.isNumber,
        d = a.isObject,
        m = a.isArray,
        n = a.merge,
        b = a.objectEach,
        l = a.pick,
        f = a.Point,
        v = a.Series,
        t = a.seriesTypes,
        H = a.setAnimation,
        D = a.splat;a.cleanRecursively = function (c, f) {
      var k = {};b(c, function (b, g) {
        if (d(c[g], !0) && f[g]) b = a.cleanRecursively(c[g], f[g]), Object.keys(b).length && (k[g] = b);else if (d(c[g]) || c[g] !== f[g]) k[g] = c[g];
      });return k;
    };x(h.prototype, { addSeries: function addSeries(a, b, d) {
        var c,
            f = this;a && (b = l(b, !0), p(f, "addSeries", { options: a }, function () {
          c = f.initSeries(a);f.isDirtyLegend = !0;f.linkSeries();
          p(f, "afterAddSeries");b && f.redraw(d);
        }));return c;
      }, addAxis: function addAxis(a, b, d, c) {
        var f = b ? "xAxis" : "yAxis",
            e = this.options;a = n(a, { index: this[f].length, isX: b });b = new G(this, a);e[f] = D(e[f] || {});e[f].push(a);l(d, !0) && this.redraw(c);return b;
      }, showLoading: function showLoading(a) {
        var b = this,
            d = b.options,
            f = b.loadingDiv,
            g = d.loading,
            e = function e() {
          f && r(f, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" });
        };f || (b.loadingDiv = f = c("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container), b.loadingSpan = c("span", { className: "highcharts-loading-inner" }, null, f), z(b, "redraw", e));f.className = "highcharts-loading";b.loadingSpan.innerHTML = a || d.lang.loading;b.styledMode || (r(f, x(g.style, { zIndex: 10 })), r(b.loadingSpan, g.labelStyle), b.loadingShown || (r(f, { opacity: 0, display: "" }), F(f, { opacity: g.style.opacity || .5 }, { duration: g.showDuration || 0 })));b.loadingShown = !0;e();
      }, hideLoading: function hideLoading() {
        var a = this.options,
            b = this.loadingDiv;b && (b.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || F(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function complete() {
            r(b, { display: "none" });
          } }));this.loadingShown = !1;
      }, propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
      collectionsWithUpdate: "xAxis yAxis zAxis series colorAxis pane".split(" "), update: function update(d, c, f, m) {
        var k = this,
            e = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle" },
            h,
            t,
            v,
            r = [];p(k, "update", { options: d });d.isResponsiveOptions || k.setResponsive(!1, !0);d = a.cleanRecursively(d, k.options);if (h = d.chart) {
          n(!0, k.options.chart, h);"className" in h && k.setClassName(h.className);"reflow" in h && k.setReflow(h.reflow);if ("inverted" in h || "polar" in h || "type" in h) k.propFromSeries(), t = !0;"alignTicks" in h && (t = !0);
          b(h, function (a, b) {
            -1 !== k.propsRequireUpdateSeries.indexOf("chart." + b) && (v = !0);-1 !== k.propsRequireDirtyBox.indexOf(b) && (k.isDirtyBox = !0);
          });!k.styledMode && "style" in h && k.renderer.setStyle(h.style);
        }!k.styledMode && d.colors && (this.options.colors = d.colors);d.plotOptions && n(!0, this.options.plotOptions, d.plotOptions);b(d, function (a, b) {
          if (k[b] && "function" === typeof k[b].update) k[b].update(a, !1);else if ("function" === typeof k[e[b]]) k[e[b]](a);"chart" !== b && -1 !== k.propsRequireUpdateSeries.indexOf(b) && (v = !0);
        });
        this.collectionsWithUpdate.forEach(function (a) {
          var b;d[a] && ("series" === a && (b = [], k[a].forEach(function (a, e) {
            a.options.isInternal || b.push(l(a.options.index, e));
          })), D(d[a]).forEach(function (e, d) {
            (d = u(e.id) && k.get(e.id) || k[a][b ? b[d] : d]) && d.coll === a && (d.update(e, !1), f && (d.touched = !0));if (!d && f) if ("series" === a) k.addSeries(e, !1).touched = !0;else if ("xAxis" === a || "yAxis" === a) k.addAxis(e, "xAxis" === a, !1).touched = !0;
          }), f && k[a].forEach(function (a) {
            a.touched || a.options.isInternal ? delete a.touched : r.push(a);
          }));
        });r.forEach(function (a) {
          a.remove && a.remove(!1);
        });t && k.axes.forEach(function (a) {
          a.update({}, !1);
        });v && k.series.forEach(function (a) {
          a.update({}, !1);
        });d.loading && n(!0, k.options.loading, d.loading);t = h && h.width;h = h && h.height;g(t) && t !== k.chartWidth || g(h) && h !== k.chartHeight ? k.setSize(t, h, m) : l(c, !0) && k.redraw(m);p(k, "afterUpdate", { options: d });
      }, setSubtitle: function setSubtitle(a) {
        this.setTitle(void 0, a);
      } });x(f.prototype, { update: function update(a, b, c, f) {
        function k() {
          e.applyOptions(a);null === e.y && m && (e.graphic = m.destroy());d(a, !0) && (m && m.element && a && a.marker && void 0 !== a.marker.symbol && (e.graphic = m.destroy()), a && a.dataLabels && e.dataLabel && (e.dataLabel = e.dataLabel.destroy()), e.connector && (e.connector = e.connector.destroy()));h = e.index;g.updateParallelArrays(e, h);t.data[h] = d(t.data[h], !0) || d(a, !0) ? e.options : l(a, t.data[h]);g.isDirty = g.isDirtyData = !0;!g.fixedBox && g.hasCartesianSeries && (n.isDirtyBox = !0);"point" === t.legendType && (n.isDirtyLegend = !0);b && n.redraw(c);
        }var e = this,
            g = e.series,
            m = e.graphic,
            h,
            n = g.chart,
            t = g.options;b = l(b, !0);!1 === f ? k() : e.firePointEvent("update", { options: a }, k);
      }, remove: function remove(a, b) {
        this.series.removePoint(this.series.data.indexOf(this), a, b);
      } });x(v.prototype, { addPoint: function addPoint(a, b, d, c) {
        var f = this.options,
            e = this.data,
            k = this.chart,
            g = this.xAxis,
            g = g && g.hasNames && g.names,
            m = f.data,
            h,
            n,
            t = this.xData,
            v,
            p;b = l(b, !0);h = { series: this };this.pointClass.prototype.applyOptions.apply(h, [a]);p = h.x;v = t.length;if (this.requireSorting && p < t[v - 1]) for (n = !0; v && t[v - 1] > p;) {
          v--;
        }this.updateParallelArrays(h, "splice", v, 0, 0);this.updateParallelArrays(h, v);g && h.name && (g[p] = h.name);
        m.splice(v, 0, a);n && (this.data.splice(v, 0, null), this.processData());"point" === f.legendType && this.generatePoints();d && (e[0] && e[0].remove ? e[0].remove(!1) : (e.shift(), this.updateParallelArrays(h, "shift"), m.shift()));this.isDirtyData = this.isDirty = !0;b && k.redraw(c);
      }, removePoint: function removePoint(a, b, d) {
        var c = this,
            f = c.data,
            e = f[a],
            k = c.points,
            g = c.chart,
            m = function m() {
          k && k.length === f.length && k.splice(a, 1);f.splice(a, 1);c.options.data.splice(a, 1);c.updateParallelArrays(e || { series: c }, "splice", a, 1);e && e.destroy();c.isDirty = !0;c.isDirtyData = !0;b && g.redraw();
        };H(d, g);b = l(b, !0);e ? e.firePointEvent("remove", null, m) : m();
      }, remove: function remove(a, b, d) {
        function c() {
          f.destroy();f.remove = null;e.isDirtyLegend = e.isDirtyBox = !0;e.linkSeries();l(a, !0) && e.redraw(b);
        }var f = this,
            e = f.chart;!1 !== d ? p(f, "remove", null, c) : c();
      }, update: function update(b, d) {
        b = a.cleanRecursively(b, this.userOptions);var c = this,
            f = c.chart,
            k = c.userOptions,
            e = c.initialType || c.type,
            g = b.type || k.type || f.options.chart.type,
            m = t[e].prototype,
            h,
            v = ["group", "markerGroup", "dataLabelsGroup"],
            r = ["navigatorSeries", "baseSeries"],
            u = c.finishedAnimating && { animation: !1 },
            w = ["data", "name", "turboThreshold"],
            A = Object.keys(b),
            D = 0 < A.length;A.forEach(function (a) {
          -1 === w.indexOf(a) && (D = !1);
        });if (D) b.data && this.setData(b.data, !1), b.name && this.setName(b.name, !1);else {
          r = v.concat(r);r.forEach(function (a) {
            r[a] = c[a];delete c[a];
          });b = n(k, u, { index: c.index, pointStart: l(k.pointStart, c.xData[0]) }, { data: c.options.data }, b);c.remove(!1, null, !1);for (h in m) {
            c[h] = void 0;
          }t[g || e] ? x(c, t[g || e].prototype) : a.error(17, !0, f);
          r.forEach(function (a) {
            c[a] = r[a];
          });c.init(f, b);b.zIndex !== k.zIndex && v.forEach(function (a) {
            c[a] && c[a].attr({ zIndex: b.zIndex });
          });c.initialType = e;f.linkSeries();
        }p(this, "afterUpdate");l(d, !0) && f.redraw(D ? void 0 : !1);
      }, setName: function setName(a) {
        this.name = this.options.name = this.userOptions.name = a;this.chart.isDirtyLegend = !0;
      } });x(G.prototype, { update: function update(a, d) {
        var c = this.chart,
            f = a && a.events || {};a = n(this.userOptions, a);c.options[this.coll].indexOf && (c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)] = a);b(c.options[this.coll].events, function (a, b) {
          "undefined" === typeof f[b] && (f[b] = void 0);
        });this.destroy(!0);this.init(c, x(a, { events: f }));c.isDirtyBox = !0;l(d, !0) && c.redraw();
      }, remove: function remove(a) {
        for (var b = this.chart, d = this.coll, c = this.series, f = c.length; f--;) {
          c[f] && c[f].remove(!1);
        }w(b.axes, this);w(b[d], this);m(b.options[d]) ? b.options[d].splice(this.options.index, 1) : delete b.options[d];b[d].forEach(function (a, b) {
          a.options.index = a.userOptions.index = b;
        });this.destroy();b.isDirtyBox = !0;l(a, !0) && b.redraw();
      },
      setTitle: function setTitle(a, b) {
        this.update({ title: a }, b);
      }, setCategories: function setCategories(a, b) {
        this.update({ categories: a }, b);
      } });
  })(I);(function (a) {
    var z = a.color,
        F = a.pick,
        G = a.Series,
        h = a.seriesType;h("area", "line", { softThreshold: !1, threshold: 0 }, { singleStacks: !1, getStackPoints: function getStackPoints(c) {
        var h = [],
            u = [],
            w = this.xAxis,
            x = this.yAxis,
            p = x.stacks[this.stackKey],
            g = {},
            d = this.index,
            m = x.series,
            n = m.length,
            b,
            l = F(x.options.reversedStacks, !0) ? 1 : -1,
            f;c = c || this.points;if (this.options.stacking) {
          for (f = 0; f < c.length; f++) {
            c[f].leftNull = c[f].rightNull = null, g[c[f].x] = c[f];
          }a.objectEach(p, function (a, b) {
            null !== a.total && u.push(b);
          });u.sort(function (a, b) {
            return a - b;
          });b = m.map(function (a) {
            return a.visible;
          });u.forEach(function (a, c) {
            var m = 0,
                t,
                v;if (g[a] && !g[a].isNull) h.push(g[a]), [-1, 1].forEach(function (k) {
              var m = 1 === k ? "rightNull" : "leftNull",
                  h = 0,
                  r = p[u[c + k]];if (r) for (f = d; 0 <= f && f < n;) {
                t = r.points[f], t || (f === d ? g[a][m] = !0 : b[f] && (v = p[a].points[f]) && (h -= v[1] - v[0])), f += l;
              }g[a][1 === k ? "rightCliff" : "leftCliff"] = h;
            });else {
              for (f = d; 0 <= f && f < n;) {
                if (t = p[a].points[f]) {
                  m = t[1];break;
                }f += l;
              }m = x.translate(m, 0, 1, 0, 1);h.push({ isNull: !0, plotX: w.translate(a, 0, 0, 0, 1), x: a, plotY: m, yBottom: m });
            }
          });
        }return h;
      }, getGraphPath: function getGraphPath(a) {
        var c = G.prototype.getGraphPath,
            h = this.options,
            w = h.stacking,
            x = this.yAxis,
            p,
            g,
            d = [],
            m = [],
            n = this.index,
            b,
            l = x.stacks[this.stackKey],
            f = h.threshold,
            v = x.getThreshold(h.threshold),
            t,
            h = h.connectNulls || "percent" === w,
            H = function H(c, g, k) {
          var h = a[c];c = w && l[h.x].points[n];var t = h[k + "Null"] || 0;k = h[k + "Cliff"] || 0;var p,
              e,
              h = !0;k || t ? (p = (t ? c[0] : c[1]) + k, e = c[0] + k, h = !!t) : !w && a[g] && a[g].isNull && (p = e = f);void 0 !== p && (m.push({ plotX: b, plotY: null === p ? v : x.getThreshold(p), isNull: h, isCliff: !0 }), d.push({ plotX: b, plotY: null === e ? v : x.getThreshold(e), doCurve: !1 }));
        };a = a || this.points;w && (a = this.getStackPoints(a));for (p = 0; p < a.length; p++) {
          if (g = a[p].isNull, b = F(a[p].rectPlotX, a[p].plotX), t = F(a[p].yBottom, v), !g || h) h || H(p, p - 1, "left"), g && !w && h || (m.push(a[p]), d.push({ x: p, plotX: b, plotY: t })), h || H(p, p + 1, "right");
        }p = c.call(this, m, !0, !0);d.reversed = !0;g = c.call(this, d, !0, !0);g.length && (g[0] = "L");g = p.concat(g);c = c.call(this, m, !1, h);g.xMap = p.xMap;this.areaPath = g;return c;
      }, drawGraph: function drawGraph() {
        this.areaPath = [];G.prototype.drawGraph.apply(this);var a = this,
            h = this.areaPath,
            u = this.options,
            w = [["area", "highcharts-area", this.color, u.fillColor]];this.zones.forEach(function (c, h) {
          w.push(["zone-area-" + h, "highcharts-area highcharts-zone-area-" + h + " " + c.className, c.color || a.color, c.fillColor || u.fillColor]);
        });w.forEach(function (c) {
          var p = c[0],
              g = a[p];g ? (g.endX = a.preventGraphAnimation ? null : h.xMap, g.animate({ d: h })) : (g = { zIndex: 0 }, a.chart.styledMode || (g.fill = F(c[3], z(c[2]).setOpacity(F(u.fillOpacity, .75)).get())), g = a[p] = a.chart.renderer.path(h).addClass(c[1]).attr(g).add(a.group), g.isArea = !0);g.startX = h.xMap;g.shiftUnit = u.step ? 2 : 1;
        });
      }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle });
  })(I);(function (a) {
    var z = a.pick;a = a.seriesType;a("spline", "line", {}, { getPointSpline: function getPointSpline(a, G, h) {
        var c = G.plotX,
            r = G.plotY,
            u = a[h - 1];h = a[h + 1];var w, x, p, g;if (u && !u.isNull && !1 !== u.doCurve && !G.isCliff && h && !h.isNull && !1 !== h.doCurve && !G.isCliff) {
          a = u.plotY;p = h.plotX;h = h.plotY;var d = 0;w = (1.5 * c + u.plotX) / 2.5;x = (1.5 * r + a) / 2.5;p = (1.5 * c + p) / 2.5;g = (1.5 * r + h) / 2.5;p !== w && (d = (g - x) * (p - c) / (p - w) + r - g);x += d;g += d;x > a && x > r ? (x = Math.max(a, r), g = 2 * r - x) : x < a && x < r && (x = Math.min(a, r), g = 2 * r - x);g > h && g > r ? (g = Math.max(h, r), x = 2 * r - g) : g < h && g < r && (g = Math.min(h, r), x = 2 * r - g);G.rightContX = p;G.rightContY = g;
        }G = ["C", z(u.rightContX, u.plotX), z(u.rightContY, u.plotY), z(w, c), z(x, r), c, r];u.rightContX = u.rightContY = null;return G;
      } });
  })(I);(function (a) {
    var z = a.seriesTypes.area.prototype,
        F = a.seriesType;F("areaspline", "spline", a.defaultPlotOptions.area, { getStackPoints: z.getStackPoints, getGraphPath: z.getGraphPath, drawGraph: z.drawGraph, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle });
  })(I);(function (a) {
    var z = a.animObject,
        F = a.color,
        G = a.extend,
        h = a.defined,
        c = a.isNumber,
        r = a.merge,
        u = a.pick,
        w = a.Series,
        x = a.seriesType,
        p = a.svg;x("column", "line", { borderRadius: 0, crisp: !0, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc",
          borderColor: "#000000" } }, dataLabels: { align: null, verticalAlign: null, y: null }, softThreshold: !1, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" }, { cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function init() {
        w.prototype.init.apply(this, arguments);var a = this,
            d = a.chart;d.hasRendered && d.series.forEach(function (d) {
          d.type === a.type && (d.isDirty = !0);
        });
      }, getColumnMetrics: function getColumnMetrics() {
        var a = this,
            d = a.options,
            c = a.xAxis,
            h = a.yAxis,
            b = c.options.reversedStacks,
            b = c.reversed && !b || !c.reversed && b,
            l,
            f = {},
            v = 0;!1 === d.grouping ? v = 1 : a.chart.series.forEach(function (b) {
          var d = b.options,
              c = b.yAxis,
              g;b.type !== a.type || !b.visible && a.chart.options.chart.ignoreHiddenSeries || h.len !== c.len || h.pos !== c.pos || (d.stacking ? (l = b.stackKey, void 0 === f[l] && (f[l] = v++), g = f[l]) : !1 !== d.grouping && (g = v++), b.columnIndex = g);
        });var t = Math.min(Math.abs(c.transA) * (c.ordinalSlope || d.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
            p = t * d.groupPadding,
            r = (t - 2 * p) / (v || 1),
            d = Math.min(d.maxPointWidth || c.len, u(d.pointWidth, r * (1 - 2 * d.pointPadding)));a.columnMetrics = { width: d, offset: (r - d) / 2 + (p + ((a.columnIndex || 0) + (b ? 1 : 0)) * r - t / 2) * (b ? -1 : 1) };return a.columnMetrics;
      }, crispCol: function crispCol(a, d, c, h) {
        var b = this.chart,
            g = this.borderWidth,
            f = -(g % 2 ? .5 : 0),
            g = g % 2 ? .5 : 1;b.inverted && b.renderer.isVML && (g += 1);this.options.crisp && (c = Math.round(a + c) + f, a = Math.round(a) + f, c -= a);h = Math.round(d + h) + g;f = .5 >= Math.abs(d) && .5 < h;d = Math.round(d) + g;h -= d;f && h && (--d, h += 1);return { x: a, y: d, width: c, height: h };
      }, translate: function translate() {
        var a = this,
            d = a.chart,
            c = a.options,
            n = a.dense = 2 > a.closestPointRange * a.xAxis.transA,
            n = a.borderWidth = u(c.borderWidth, n ? 0 : 1),
            b = a.yAxis,
            l = c.threshold,
            f = a.translatedThreshold = b.getThreshold(l),
            v = u(c.minPointLength, 5),
            t = a.getColumnMetrics(),
            p = t.width,
            r = a.barW = Math.max(p, 1 + 2 * n),
            A = a.pointXOffset = t.offset;d.inverted && (f -= .5);c.pointPadding && (r = Math.ceil(r));w.prototype.translate.apply(a);a.points.forEach(function (c) {
          var g = u(c.yBottom, f),
              k = 999 + Math.abs(g),
              m = p,
              k = Math.min(Math.max(-k, c.plotY), b.len + k),
              e = c.plotX + A,
              n = r,
              t = Math.min(k, g),
              w,
              D = Math.max(k, g) - t;v && Math.abs(D) < v && (D = v, w = !b.reversed && !c.negative || b.reversed && c.negative, c.y === l && a.dataMax <= l && b.min < l && (w = !w), t = Math.abs(t - f) > v ? g - v : f - (w ? v : 0));h(c.options.pointWidth) && (m = n = Math.ceil(c.options.pointWidth), e -= Math.round((m - p) / 2));c.barX = e;c.pointWidth = m;c.tooltipPos = d.inverted ? [b.len + b.pos - d.plotLeft - k, a.xAxis.len - e - n / 2, D] : [e + n / 2, k + b.pos - d.plotTop, D];c.shapeType = c.shapeType || "rect";c.shapeArgs = a.crispCol.apply(a, c.isNull ? [e, f, n, 0] : [e, t, n, D]);
        });
      }, getSymbol: a.noop,
      drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, drawGraph: function drawGraph() {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      }, pointAttribs: function pointAttribs(a, d) {
        var c = this.options,
            g,
            b = this.pointAttrToOptions || {};g = b.stroke || "borderColor";var h = b["stroke-width"] || "borderWidth",
            f = a && a.color || this.color,
            v = a && a[g] || c[g] || this.color || f,
            t = a && a[h] || c[h] || this[h] || 0,
            b = c.dashStyle;a && this.zones.length && (f = a.getZone(), f = a.options.color || f && f.color || this.color);d && (a = r(c.states[d], a.options.states && a.options.states[d] || {}), d = a.brightness, f = a.color || void 0 !== d && F(f).brighten(a.brightness).get() || f, v = a[g] || v, t = a[h] || t, b = a.dashStyle || b);g = { fill: f, stroke: v, "stroke-width": t };b && (g.dashstyle = b);return g;
      }, drawPoints: function drawPoints() {
        var a = this,
            d = this.chart,
            h = a.options,
            n = d.renderer,
            b = h.animationLimit || 250,
            l;a.points.forEach(function (f) {
          var g = f.graphic,
              m = g && d.pointCount < b ? "animate" : "attr";if (c(f.plotY) && null !== f.y) {
            l = f.shapeArgs;if (g) g[m](r(l));else f.graphic = g = n[f.shapeType](l).add(f.group || a.group);h.borderRadius && g.attr({ r: h.borderRadius });d.styledMode || g[m](a.pointAttribs(f, f.selected && "select")).shadow(h.shadow, null, h.stacking && !h.borderRadius);g.addClass(f.getClassName(), !0);
          } else g && (f.graphic = g.destroy());
        });
      }, animate: function animate(a) {
        var d = this,
            c = this.yAxis,
            g = d.options,
            b = this.chart.inverted,
            h = {},
            f = b ? "translateX" : "translateY",
            v;p && (a ? (h.scaleY = .001, a = Math.min(c.pos + c.len, Math.max(c.pos, c.toPixels(g.threshold))), b ? h.translateX = a - c.len : h.translateY = a, d.clipBox && d.setClip(), d.group.attr(h)) : (v = d.group.attr(f), d.group.animate({ scaleY: 1 }, G(z(d.options.animation), { step: function step(a, b) {
            h[f] = v + b.pos * (c.pos - v);d.group.attr(h);
          } })), d.animate = null));
      }, remove: function remove() {
        var a = this,
            d = a.chart;d.hasRendered && d.series.forEach(function (d) {
          d.type === a.type && (d.isDirty = !0);
        });w.prototype.remove.apply(a, arguments);
      } });
  })(I);(function (a) {
    a = a.seriesType;a("bar", "column", null, { inverted: !0 });
  })(I);(function (a) {
    var z = a.Series,
        F = a.seriesType;F("scatter", "line", { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
        pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e" } }, { sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, drawGraph: function drawGraph() {
        this.options.lineWidth && z.prototype.drawGraph.call(this);
      }, applyJitter: function applyJitter() {
        var a = this,
            h = this.options.jitter,
            c = this.points.length;h && this.points.forEach(function (r, u) {
          ["x", "y"].forEach(function (w, x) {
            var p,
                g = "plot" + w.toUpperCase(),
                d,
                m;h[w] && !r.isNull && (p = a[w + "Axis"], m = h[w] * p.transA, p && !p.isLog && (d = Math.max(0, r[g] - m), p = Math.min(p.len, r[g] + m), x = 1E4 * Math.sin(u + x * c), r[g] = d + (p - d) * (x - Math.floor(x)), "x" === w && (r.clientX = r.plotX)));
          });
        });
      } });a.addEvent(z, "afterTranslate", function () {
      this.applyJitter && this.applyJitter();
    });
  })(I);(function (a) {
    var z = a.deg2rad,
        F = a.isNumber,
        G = a.pick,
        h = a.relativeLength;a.CenteredSeriesMixin = { getCenter: function getCenter() {
        var a = this.options,
            r = this.chart,
            u = 2 * (a.slicedOffset || 0),
            w = r.plotWidth - 2 * u,
            r = r.plotHeight - 2 * u,
            x = a.center,
            x = [G(x[0], "50%"), G(x[1], "50%"), a.size || "100%", a.innerSize || 0],
            p = Math.min(w, r),
            g,
            d;for (g = 0; 4 > g; ++g) {
          d = x[g], a = 2 > g || 2 === g && /%$/.test(d), x[g] = h(d, [w, r, p, x[2]][g]) + (a ? u : 0);
        }x[3] > x[2] && (x[3] = x[2]);return x;
      }, getStartAndEndRadians: function getStartAndEndRadians(a, h) {
        a = F(a) ? a : 0;h = F(h) && h > a && 360 > h - a ? h : a + 360;return { start: z * (a + -90), end: z * (h + -90) };
      } };
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.CenteredSeriesMixin,
        G = a.defined,
        h = a.extend,
        c = F.getStartAndEndRadians,
        r = a.noop,
        u = a.pick,
        w = a.Point,
        x = a.Series,
        p = a.seriesType,
        g = a.setAnimation;p("pie", "line", { center: [null, null], clip: !1, colorByPoint: !0, dataLabels: { allowOverlap: !0, connectorPadding: 5, distance: 30, enabled: !0, formatter: function formatter() {
          return this.point.isNull ? void 0 : this.point.name;
        }, softConnector: !0, x: 0, connectorShape: "fixedOffset", crookDistance: "70%" }, ignoreHiddenPoint: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, states: { hover: { brightness: .1 } } }, { isCartesian: !1, requireSorting: !1, directTouch: !0, noSharedTooltip: !0,
      trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttribs: a.seriesTypes.column.prototype.pointAttribs, animate: function animate(a) {
        var d = this,
            c = d.points,
            b = d.startAngleRad;a || (c.forEach(function (a) {
          var c = a.graphic,
              g = a.shapeArgs;c && (c.attr({ r: a.startR || d.center[3] / 2, start: b, end: b }), c.animate({ r: g.r, start: g.start, end: g.end }, d.options.animation));
        }), d.animate = null);
      }, updateTotals: function updateTotals() {
        var a,
            c = 0,
            g = this.points,
            b = g.length,
            h,
            f = this.options.ignoreHiddenPoint;for (a = 0; a < b; a++) {
          h = g[a], c += f && !h.visible ? 0 : h.isNull ? 0 : h.y;
        }this.total = c;for (a = 0; a < b; a++) {
          h = g[a], h.percentage = 0 < c && (h.visible || !f) ? h.y / c * 100 : 0, h.total = c;
        }
      }, generatePoints: function generatePoints() {
        x.prototype.generatePoints.call(this);this.updateTotals();
      }, getX: function getX(a, c, g) {
        var b = this.center,
            d = this.radii ? this.radii[g.index] : b[2] / 2;return b[0] + (c ? -1 : 1) * Math.cos(Math.asin(Math.max(Math.min((a - b[1]) / (d + g.labelDistance), 1), -1))) * (d + g.labelDistance) + (0 < g.labelDistance ? (c ? -1 : 1) * this.options.dataLabels.padding : 0);
      }, translate: function translate(a) {
        this.generatePoints();var d = 0,
            g = this.options,
            b = g.slicedOffset,
            h = b + (g.borderWidth || 0),
            f,
            p,
            t = c(g.startAngle, g.endAngle),
            r = this.startAngleRad = t.start,
            t = (this.endAngleRad = t.end) - r,
            w = this.points,
            A,
            k,
            x = g.dataLabels.distance,
            g = g.ignoreHiddenPoint,
            C,
            y = w.length,
            e;a || (this.center = a = this.getCenter());for (C = 0; C < y; C++) {
          e = w[C];e.labelDistance = u(e.options.dataLabels && e.options.dataLabels.distance, x);this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, e.labelDistance);f = r + d * t;if (!g || e.visible) d += e.percentage / 100;p = r + d * t;e.shapeType = "arc";
          e.shapeArgs = { x: a[0], y: a[1], r: a[2] / 2, innerR: a[3] / 2, start: Math.round(1E3 * f) / 1E3, end: Math.round(1E3 * p) / 1E3 };p = (p + f) / 2;p > 1.5 * Math.PI ? p -= 2 * Math.PI : p < -Math.PI / 2 && (p += 2 * Math.PI);e.slicedTranslation = { translateX: Math.round(Math.cos(p) * b), translateY: Math.round(Math.sin(p) * b) };A = Math.cos(p) * a[2] / 2;k = Math.sin(p) * a[2] / 2;e.tooltipPos = [a[0] + .7 * A, a[1] + .7 * k];e.half = p < -Math.PI / 2 || p > Math.PI / 2 ? 1 : 0;e.angle = p;f = Math.min(h, e.labelDistance / 5);e.labelPosition = { natural: { x: a[0] + A + Math.cos(p) * e.labelDistance, y: a[1] + k + Math.sin(p) * e.labelDistance }, "final": {}, alignment: 0 > e.labelDistance ? "center" : e.half ? "right" : "left", connectorPosition: { breakAt: { x: a[0] + A + Math.cos(p) * f, y: a[1] + k + Math.sin(p) * f }, touchingSliceAt: { x: a[0] + A, y: a[1] + k } } };
        }
      }, drawGraph: null, drawPoints: function drawPoints() {
        var a = this,
            c = a.chart,
            g = c.renderer,
            b,
            l,
            f,
            p,
            t = a.options.shadow;!t || a.shadowGroup || c.styledMode || (a.shadowGroup = g.g("shadow").add(a.group));a.points.forEach(function (d) {
          l = d.graphic;if (d.isNull) l && (d.graphic = l.destroy());else {
            p = d.shapeArgs;b = d.getTranslate();if (!c.styledMode) {
              var m = d.shadowGroup;t && !m && (m = d.shadowGroup = g.g("shadow").add(a.shadowGroup));m && m.attr(b);f = a.pointAttribs(d, d.selected && "select");
            }l ? (l.setRadialReference(a.center), c.styledMode || l.attr(f), l.animate(h(p, b))) : (d.graphic = l = g[d.shapeType](p).setRadialReference(a.center).attr(b).add(a.group), c.styledMode || l.attr(f).attr({ "stroke-linejoin": "round" }).shadow(t, m));l.attr({ visibility: d.visible ? "inherit" : "hidden" });l.addClass(d.getClassName());
          }
        });
      }, searchPoint: r, sortByAngle: function sortByAngle(a, c) {
        a.sort(function (a, b) {
          return void 0 !== a.angle && (b.angle - a.angle) * c;
        });
      }, drawLegendSymbol: a.LegendSymbolMixin.drawRectangle, getCenter: F.getCenter, getSymbol: r }, { init: function init() {
        w.prototype.init.apply(this, arguments);var a = this,
            c;a.name = u(a.name, "Slice");c = function c(_c) {
          a.slice("select" === _c.type);
        };z(a, "select", c);z(a, "unselect", c);return a;
      }, isValid: function isValid() {
        return a.isNumber(this.y, !0) && 0 <= this.y;
      }, setVisible: function setVisible(a, c) {
        var d = this,
            b = d.series,
            g = b.chart,
            f = b.options.ignoreHiddenPoint;c = u(c, f);a !== d.visible && (d.visible = d.options.visible = a = void 0 === a ? !d.visible : a, b.options.data[b.data.indexOf(d)] = d.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (b) {
          if (d[b]) d[b][a ? "show" : "hide"](!0);
        }), d.legendItem && g.legend.colorizeItem(d, a), a || "hover" !== d.state || d.setState(""), f && (b.isDirty = !0), c && g.redraw());
      }, slice: function slice(a, c, h) {
        var b = this.series;g(h, b.chart);u(c, !0);this.sliced = this.options.sliced = G(a) ? a : !this.sliced;b.options.data[b.data.indexOf(this)] = this.options;this.graphic.animate(this.getTranslate());this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      },
      getTranslate: function getTranslate() {
        return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
      }, haloPath: function haloPath(a) {
        var c = this.shapeArgs;return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c.x, c.y, c.r + a, c.r + a, { innerR: this.shapeArgs.r - 1, start: c.start, end: c.end });
      }, connectorShapes: { fixedOffset: function fixedOffset(a, c, g) {
          var b = c.breakAt;c = c.touchingSliceAt;return ["M", a.x, a.y].concat(g.softConnector ? ["C", a.x + ("left" === a.alignment ? -5 : 5), a.y, 2 * b.x - c.x, 2 * b.y - c.y, b.x, b.y] : ["L", b.x, b.y]).concat(["L", c.x, c.y]);
        }, straight: function straight(a, c) {
          c = c.touchingSliceAt;return ["M", a.x, a.y, "L", c.x, c.y];
        }, crookedLine: function crookedLine(c, g, h) {
          g = g.touchingSliceAt;var b = this.series,
              d = b.center[0],
              f = b.chart.plotWidth,
              m = b.chart.plotLeft,
              b = c.alignment,
              t = this.shapeArgs.r;h = a.relativeLength(h.crookDistance, 1);h = "left" === b ? d + t + (f + m - d - t) * (1 - h) : m + (d - t) * h;d = ["L", h, c.y];if ("left" === b ? h > c.x || h < g.x : h < c.x || h > g.x) d = [];return ["M", c.x, c.y].concat(d).concat(["L", g.x, g.y]);
        } }, getConnectorPath: function getConnectorPath() {
        var a = this.labelPosition,
            c = this.series.options.dataLabels,
            g = c.connectorShape,
            b = this.connectorShapes;b[g] && (g = b[g]);return g.call(this, { x: a.final.x, y: a.final.y, alignment: a.alignment }, a.connectorPosition, c);
      } });
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.arrayMax,
        G = a.defined,
        h = a.extend,
        c = a.format,
        r = a.merge,
        u = a.noop,
        w = a.pick,
        x = a.relativeLength,
        p = a.Series,
        g = a.seriesTypes,
        d = a.stableSort,
        m = a.isArray,
        n = a.splat;a.distribute = function (b, c, f) {
      function g(a, b) {
        return a.target - b.target;
      }var h,
          l = !0,
          m = b,
          n = [],
          k;k = 0;var p = m.reducedLen || c;for (h = b.length; h--;) {
        k += b[h].size;
      }if (k > p) {
        d(b, function (a, b) {
          return (b.rank || 0) - (a.rank || 0);
        });for (k = h = 0; k <= p;) {
          k += b[h].size, h++;
        }n = b.splice(h - 1, b.length);
      }d(b, g);for (b = b.map(function (a) {
        return { size: a.size, targets: [a.target], align: w(a.align, .5) };
      }); l;) {
        for (h = b.length; h--;) {
          l = b[h], k = (Math.min.apply(0, l.targets) + Math.max.apply(0, l.targets)) / 2, l.pos = Math.min(Math.max(0, k - l.size * l.align), c - l.size);
        }h = b.length;for (l = !1; h--;) {
          0 < h && b[h - 1].pos + b[h - 1].size > b[h].pos && (b[h - 1].size += b[h].size, b[h - 1].targets = b[h - 1].targets.concat(b[h].targets), b[h - 1].align = .5, b[h - 1].pos + b[h - 1].size > c && (b[h - 1].pos = c - b[h - 1].size), b.splice(h, 1), l = !0);
        }
      }m.push.apply(m, n);h = 0;b.some(function (b) {
        var d = 0;if (b.targets.some(function () {
          m[h].pos = b.pos + d;if (Math.abs(m[h].pos - m[h].target) > f) return m.slice(0, h + 1).forEach(function (a) {
            delete a.pos;
          }), m.reducedLen = (m.reducedLen || c) - .1 * c, m.reducedLen > .1 * c && a.distribute(m, c, f), !0;d += m[h].size;h++;
        })) return !0;
      });d(m, g);
    };p.prototype.drawDataLabels = function () {
      function b(a, b) {
        var c = b.filter;return c ? (b = c.operator, a = a[c.property], c = c.value, "\x3e" === b && a > c || "\x3c" === b && a < c || "\x3e\x3d" === b && a >= c || "\x3c\x3d" === b && a <= c || "\x3d\x3d" === b && a == c || "\x3d\x3d\x3d" === b && a === c ? !0 : !1) : !0;
      }function d(a, b) {
        var c = [],
            e;if (m(a) && !m(b)) c = a.map(function (a) {
          return r(a, b);
        });else if (m(b) && !m(a)) c = b.map(function (b) {
          return r(a, b);
        });else if (m(a) || m(b)) for (e = Math.max(a.length, b.length); e--;) {
          c[e] = r(a[e], b[e]);
        } else c = r(a, b);return c;
      }var f = this,
          g = f.chart,
          h = f.options,
          p = h.dataLabels,
          u = f.points,
          A,
          k = f.hasRendered || 0,
          x,
          C = w(p.defer, !!h.animation),
          y = g.renderer,
          p = d(d(g.options.plotOptions && g.options.plotOptions.series && g.options.plotOptions.series.dataLabels, g.options.plotOptions && g.options.plotOptions[f.type] && g.options.plotOptions[f.type].dataLabels), p);a.fireEvent(this, "drawDataLabels");if (m(p) || p.enabled || f._hasPointLabels) x = f.plotGroup("dataLabelsGroup", "data-labels", C && !k ? "hidden" : "visible", p.zIndex || 6), C && (x.attr({ opacity: +k }), k || z(f, "afterAnimate", function () {
        f.visible && x.show(!0);x[h.animation ? "animate" : "attr"]({ opacity: 1 }, { duration: 200 });
      })), u.forEach(function (e) {
        A = n(d(p, e.dlOptions || e.options && e.options.dataLabels));A.forEach(function (d, k) {
          var l = d.enabled && !e.isNull && b(e, d),
              m,
              q,
              t,
              n,
              p = e.dataLabels ? e.dataLabels[k] : e.dataLabel,
              r = e.connectors ? e.connectors[k] : e.connector,
              v = !p;l && (m = e.getLabelConfig(), q = d[e.formatPrefix + "Format"] || d.format, m = G(q) ? c(q, m, g.time) : (d[e.formatPrefix + "Formatter"] || d.formatter).call(m, d), q = d.style, t = d.rotation, g.styledMode || (q.color = w(d.color, q.color, f.color, "#000000"), "contrast" === q.color && (e.contrastColor = y.getContrast(e.color || f.color), q.color = d.inside || 0 > w(d.distance, e.labelDistance) || h.stacking ? e.contrastColor : "#000000"), h.cursor && (q.cursor = h.cursor)), n = { r: d.borderRadius || 0, rotation: t, padding: d.padding, zIndex: 1 }, g.styledMode || (n.fill = d.backgroundColor, n.stroke = d.borderColor, n["stroke-width"] = d.borderWidth), a.objectEach(n, function (a, b) {
            void 0 === a && delete n[b];
          }));!p || l && G(m) ? l && G(m) && (p ? n.text = m : (e.dataLabels = e.dataLabels || [], p = e.dataLabels[k] = t ? y.text(m, 0, -9999).addClass("highcharts-data-label") : y.label(m, 0, -9999, d.shape, null, null, d.useHTML, null, "data-label"), k || (e.dataLabel = p), p.addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (d.className || "") + (d.useHTML ? " highcharts-tracker" : ""))), p.options = d, p.attr(n), g.styledMode || p.css(q).shadow(d.shadow), p.added || p.add(x), f.alignDataLabel(e, p, d, null, v)) : (e.dataLabel = e.dataLabel && e.dataLabel.destroy(), e.dataLabels && (1 === e.dataLabels.length ? delete e.dataLabels : delete e.dataLabels[k]), k || delete e.dataLabel, r && (e.connector = e.connector.destroy(), e.connectors && (1 === e.connectors.length ? delete e.connectors : delete e.connectors[k])));
        });
      });a.fireEvent(this, "afterDrawDataLabels");
    };p.prototype.alignDataLabel = function (a, c, d, g, m) {
      var b = this.chart,
          f = this.isCartesian && b.inverted,
          l = w(a.dlBox && a.dlBox.centerX, a.plotX, -9999),
          k = w(a.plotY, -9999),
          n = c.getBBox(),
          t,
          p = d.rotation,
          e = d.align,
          q = this.visible && (a.series.forceDL || b.isInsidePlot(l, Math.round(k), f) || g && b.isInsidePlot(l, f ? g.x + 1 : g.y + g.height - 1, f)),
          r = "justify" === w(d.overflow, "justify");if (q && (t = b.renderer.fontMetrics(b.styledMode ? void 0 : d.style.fontSize, c).b, g = h({ x: f ? this.yAxis.len - k : l, y: Math.round(f ? this.xAxis.len - l : k), width: 0, height: 0 }, g), h(d, { width: n.width, height: n.height }), p ? (r = !1, l = b.renderer.rotCorr(t, p), l = { x: g.x + d.x + g.width / 2 + l.x, y: g.y + d.y + { top: 0, middle: .5, bottom: 1 }[d.verticalAlign] * g.height }, c[m ? "attr" : "animate"](l).attr({ align: e }), k = (p + 720) % 360, k = 180 < k && 360 > k, "left" === e ? l.y -= k ? n.height : 0 : "center" === e ? (l.x -= n.width / 2, l.y -= n.height / 2) : "right" === e && (l.x -= n.width, l.y -= k ? 0 : n.height), c.placed = !0, c.alignAttr = l) : (c.align(d, null, g), l = c.alignAttr), r && 0 <= g.height ? a.isLabelJustified = this.justifyDataLabel(c, d, l, n, g, m) : w(d.crop, !0) && (q = b.isInsidePlot(l.x, l.y) && b.isInsidePlot(l.x + n.width, l.y + n.height)), d.shape && !p)) c[m ? "attr" : "animate"]({ anchorX: f ? b.plotWidth - a.plotY : a.plotX, anchorY: f ? b.plotHeight - a.plotX : a.plotY });q || (c.attr({ y: -9999 }), c.placed = !1);
    };p.prototype.justifyDataLabel = function (a, c, d, g, h, m) {
      var b = this.chart,
          f = c.align,
          k = c.verticalAlign,
          l,
          n,
          t = a.box ? 0 : a.padding || 0;l = d.x + t;0 > l && ("right" === f ? c.align = "left" : c.x = -l, n = !0);l = d.x + g.width - t;l > b.plotWidth && ("left" === f ? c.align = "right" : c.x = b.plotWidth - l, n = !0);l = d.y + t;0 > l && ("bottom" === k ? c.verticalAlign = "top" : c.y = -l, n = !0);l = d.y + g.height - t;l > b.plotHeight && ("top" === k ? c.verticalAlign = "bottom" : c.y = b.plotHeight - l, n = !0);n && (a.placed = !m, a.align(c, null, h));return n;
    };g.pie && (g.pie.prototype.dataLabelPositioners = { radialDistributionY: function radialDistributionY(a) {
        return a.top + a.distributeBox.pos;
      }, radialDistributionX: function radialDistributionX(a, c, d, g) {
        return a.getX(d < c.top + 2 || d > c.bottom - 2 ? g : d, c.half, c);
      }, justify: function justify(a, c, d) {
        return d[0] + (a.half ? -1 : 1) * (c + a.labelDistance);
      },
      alignToPlotEdges: function alignToPlotEdges(a, c, d, g) {
        a = a.getBBox().width;return c ? a + g : d - a - g;
      }, alignToConnectors: function alignToConnectors(a, c, d, g) {
        var b = 0,
            f;a.forEach(function (a) {
          f = a.dataLabel.getBBox().width;f > b && (b = f);
        });return c ? b + g : d - b - g;
      } }, g.pie.prototype.drawDataLabels = function () {
      var b = this,
          c = b.data,
          d,
          g = b.chart,
          h = b.options.dataLabels,
          m = h.connectorPadding,
          n = w(h.connectorWidth, 1),
          r = g.plotWidth,
          k = g.plotHeight,
          u = g.plotLeft,
          x = Math.round(g.chartWidth / 3),
          y,
          e = b.center,
          q = e[2] / 2,
          z = e[1],
          K,
          I,
          J,
          N,
          R = [[], []],
          B,
          P,
          M,
          S,
          O = [0, 0, 0, 0],
          W = b.dataLabelPositioners;
      b.visible && (h.enabled || b._hasPointLabels) && (c.forEach(function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1);
      }), p.prototype.drawDataLabels.apply(b), c.forEach(function (a) {
        a.dataLabel && (a.visible ? (R[a.half].push(a), a.dataLabel._pos = null, !G(h.style.width) && !G(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > x && (a.dataLabel.css({ width: .7 * x }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
      }), R.forEach(function (c, f) {
        var l,
            n,
            p = c.length,
            t = [],
            v;if (p) for (b.sortByAngle(c, f - .5), 0 < b.maxLabelDistance && (l = Math.max(0, z - q - b.maxLabelDistance), n = Math.min(z + q + b.maxLabelDistance, g.plotHeight), c.forEach(function (a) {
          0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, z - q - a.labelDistance), a.bottom = Math.min(z + q + a.labelDistance, g.plotHeight), v = a.dataLabel.getBBox().height || 21, a.distributeBox = { target: a.labelPosition.natural.y - a.top + v / 2, size: v, rank: a.y }, t.push(a.distributeBox));
        }), l = n + v - l, a.distribute(t, l, l / 5)), S = 0; S < p; S++) {
          d = c[S];J = d.labelPosition;K = d.dataLabel;M = !1 === d.visible ? "hidden" : "inherit";P = l = J.natural.y;t && G(d.distributeBox) && (void 0 === d.distributeBox.pos ? M = "hidden" : (N = d.distributeBox.size, P = W.radialDistributionY(d)));delete d.positionIndex;if (h.justify) B = W.justify(d, q, e);else switch (h.alignTo) {case "connectors":
              B = W.alignToConnectors(c, f, r, u);break;case "plotEdges":
              B = W.alignToPlotEdges(K, f, r, u);break;default:
              B = W.radialDistributionX(b, d, P, l);}K._attr = { visibility: M, align: J.alignment };K._pos = { x: B + h.x + ({ left: m, right: -m }[J.alignment] || 0), y: P + h.y - 10 };J.final.x = B;J.final.y = P;w(h.crop, !0) && (I = K.getBBox().width, l = null, B - I < m && 1 === f ? (l = Math.round(I - B + m), O[3] = Math.max(l, O[3])) : B + I > r - m && 0 === f && (l = Math.round(B + I - r + m), O[1] = Math.max(l, O[1])), 0 > P - N / 2 ? O[0] = Math.max(Math.round(-P + N / 2), O[0]) : P + N / 2 > k && (O[2] = Math.max(Math.round(P + N / 2 - k), O[2])), K.sideOverflow = l);
        }
      }), 0 === F(O) || this.verifyDataLabelOverflow(O)) && (this.placeDataLabels(), n && this.points.forEach(function (a) {
        var c;y = a.connector;if ((K = a.dataLabel) && K._pos && a.visible && 0 < a.labelDistance) {
          M = K._attr.visibility;if (c = !y) a.connector = y = g.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + a.colorIndex + (a.className ? " " + a.className : "")).add(b.dataLabelsGroup), g.styledMode || y.attr({ "stroke-width": n, stroke: h.connectorColor || a.color || "#666666" });y[c ? "attr" : "animate"]({ d: a.getConnectorPath() });y.attr("visibility", M);
        } else y && (a.connector = y.destroy());
      }));
    }, g.pie.prototype.placeDataLabels = function () {
      this.points.forEach(function (a) {
        var b = a.dataLabel;b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({ width: b._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({ y: -9999 }));
      }, this);
    }, g.pie.prototype.alignDataLabel = u, g.pie.prototype.verifyDataLabelOverflow = function (a) {
      var b = this.center,
          c = this.options,
          d = c.center,
          g = c.minSize || 80,
          h,
          m = null !== c.size;m || (null !== d[0] ? h = Math.max(b[2] - Math.max(a[1], a[3]), g) : (h = Math.max(b[2] - a[1] - a[3], g), b[0] += (a[3] - a[1]) / 2), null !== d[1] ? h = Math.max(Math.min(h, b[2] - Math.max(a[0], a[2])), g) : (h = Math.max(Math.min(h, b[2] - a[0] - a[2]), g), b[1] += (a[0] - a[2]) / 2), h < b[2] ? (b[2] = h, b[3] = Math.min(x(c.innerSize || 0, h), h), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : m = !0);return m;
    });g.column && (g.column.prototype.alignDataLabel = function (a, c, d, g, h) {
      var b = this.chart.inverted,
          f = a.series,
          l = a.dlBox || a.shapeArgs,
          k = w(a.below, a.plotY > w(this.translatedThreshold, f.yAxis.len)),
          m = w(d.inside, !!this.options.stacking);l && (g = r(l), 0 > g.y && (g.height += g.y, g.y = 0), l = g.y + g.height - f.yAxis.len, 0 < l && (g.height -= l), b && (g = { x: f.yAxis.len - g.y - g.height, y: f.xAxis.len - g.x - g.width, width: g.height, height: g.width }), m || (b ? (g.x += k ? 0 : g.width, g.width = 0) : (g.y += k ? g.height : 0, g.height = 0)));d.align = w(d.align, !b || m ? "center" : k ? "right" : "left");d.verticalAlign = w(d.verticalAlign, b || m ? "middle" : k ? "top" : "bottom");p.prototype.alignDataLabel.call(this, a, c, d, g, h);a.isLabelJustified && a.contrastColor && c.css({ color: a.contrastColor });
    });
  })(I);(function (a) {
    var z = a.Chart,
        F = a.isArray,
        G = a.objectEach,
        h = a.pick,
        c = a.addEvent,
        r = a.fireEvent;c(z, "render", function () {
      var a = [];(this.labelCollectors || []).forEach(function (c) {
        a = a.concat(c());
      });(this.yAxis || []).forEach(function (c) {
        c.options.stackLabels && !c.options.stackLabels.allowOverlap && G(c.stacks, function (c) {
          G(c, function (c) {
            a.push(c.label);
          });
        });
      });(this.series || []).forEach(function (c) {
        var r = c.options.dataLabels;c.visible && (!1 !== r.enabled || c._hasPointLabels) && c.points.forEach(function (c) {
          c.visible && (F(c.dataLabels) ? c.dataLabels : c.dataLabel ? [c.dataLabel] : []).forEach(function (g) {
            var d = g.options;g.labelrank = h(d.labelrank, c.labelrank, c.shapeArgs && c.shapeArgs.height);d.allowOverlap || a.push(g);
          });
        });
      });this.hideOverlappingLabels(a);
    });z.prototype.hideOverlappingLabels = function (a) {
      var c = this,
          h = a.length,
          p = c.renderer,
          g,
          d,
          m,
          n,
          b,
          l,
          f = function f(a, b, c, d, _f, g, h, l) {
        return !(_f > a + c || _f + h < a || g > b + d || g + l < b);
      };m = function m(a) {
        var b,
            c,
            d,
            f = a.box ? 0 : a.padding || 0;d = 0;if (a && (!a.alignAttr || a.placed)) return b = a.alignAttr || { x: a.attr("x"), y: a.attr("y") }, c = a.parentGroup, a.width || (d = a.getBBox(), a.width = d.width, a.height = d.height, d = p.fontMetrics(null, a.element).h), { x: b.x + (c.translateX || 0) + f, y: b.y + (c.translateY || 0) + f - d, width: a.width - 2 * f, height: a.height - 2 * f };
      };for (d = 0; d < h; d++) {
        if (g = a[d]) g.oldOpacity = g.opacity, g.newOpacity = 1, g.absoluteBox = m(g);
      }a.sort(function (a, b) {
        return (b.labelrank || 0) - (a.labelrank || 0);
      });for (d = 0; d < h; d++) {
        for (l = (m = a[d]) && m.absoluteBox, g = d + 1; g < h; ++g) {
          if (b = (n = a[g]) && n.absoluteBox, l && b && m !== n && 0 !== m.newOpacity && 0 !== n.newOpacity && (b = f(l.x, l.y, l.width, l.height, b.x, b.y, b.width, b.height))) (m.labelrank < n.labelrank ? m : n).newOpacity = 0;
        }
      }a.forEach(function (a) {
        var b, d;a && (d = a.newOpacity, a.oldOpacity !== d && (a.alignAttr && a.placed ? (d ? a.show(!0) : b = function b() {
          a.hide();
        }, a.alignAttr.opacity = d, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b), r(c, "afterHideOverlappingLabels")) : a.attr({ opacity: d })), a.isOld = !0);
      });
    };
  })(I);(function (a) {
    var z = a.addEvent,
        F = a.Chart,
        G = a.createElement,
        h = a.css,
        c = a.defaultOptions,
        r = a.defaultPlotOptions,
        u = a.extend,
        w = a.fireEvent,
        x = a.hasTouch,
        p = a.isObject,
        g = a.Legend,
        d = a.merge,
        m = a.pick,
        n = a.Point,
        b = a.Series,
        l = a.seriesTypes,
        f = a.svg,
        v;v = a.TrackerMixin = { drawTrackerPoint: function drawTrackerPoint() {
        var a = this,
            b = a.chart,
            c = b.pointer,
            d = function d(a) {
          var b = c.getPointFromEvent(a);void 0 !== b && (c.isDirectTouch = !0, b.onMouseOver(a));
        };a.points.forEach(function (a) {
          a.graphic && (a.graphic.element.point = a);a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a);
        });a._hasTracking || (a.trackerGroups.forEach(function (f) {
          if (a[f]) {
            a[f].addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function (a) {
              c.onTrackerMouseOut(a);
            });if (x) a[f].on("touchstart", d);!b.styledMode && a.options.cursor && a[f].css(h).css({ cursor: a.options.cursor });
          }
        }), a._hasTracking = !0);w(this, "afterDrawTracker");
      }, drawTrackerGraph: function drawTrackerGraph() {
        var a = this,
            b = a.options,
            c = b.trackByArea,
            d = [].concat(c ? a.areaPath : a.graphPath),
            g = d.length,
            h = a.chart,
            l = h.pointer,
            m = h.renderer,
            e = h.options.tooltip.snap,
            n = a.tracker,
            p,
            r = function r() {
          if (h.hoverSeries !== a) a.onMouseOver();
        },
            u = "rgba(192,192,192," + (f ? .0001 : .002) + ")";if (g && !c) for (p = g + 1; p--;) {
          "M" === d[p] && d.splice(p + 1, 0, d[p + 1] - e, d[p + 2], "L"), (p && "M" === d[p] || p === g) && d.splice(p, 0, "L", d[p - 2] + e, d[p - 1]);
        }n ? n.attr({ d: d }) : a.graph && (a.tracker = m.path(d).attr({ visibility: a.visible ? "visible" : "hidden", zIndex: 2 }).addClass(c ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), h.styledMode || a.tracker.attr({ "stroke-linejoin": "round", stroke: u, fill: c ? u : "none", "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * e) }), [a.tracker, a.markerGroup].forEach(function (a) {
          a.addClass("highcharts-tracker").on("mouseover", r).on("mouseout", function (a) {
            l.onTrackerMouseOut(a);
          });b.cursor && !h.styledMode && a.css({ cursor: b.cursor });if (x) a.on("touchstart", r);
        }));w(this, "afterDrawTracker");
      } };l.column && (l.column.prototype.drawTracker = v.drawTrackerPoint);l.pie && (l.pie.prototype.drawTracker = v.drawTrackerPoint);l.scatter && (l.scatter.prototype.drawTracker = v.drawTrackerPoint);u(g.prototype, { setItemEvents: function setItemEvents(a, b, c) {
        var f = this,
            g = f.chart.renderer.boxWrapper,
            h = "highcharts-legend-" + (a instanceof n ? "point" : "series") + "-active",
            l = f.chart.styledMode;(c ? b : a.legendGroup).on("mouseover", function () {
          a.setState("hover");g.addClass(h);l || b.css(f.options.itemHoverStyle);
        }).on("mouseout", function () {
          f.styledMode || b.css(d(a.visible ? f.itemStyle : f.itemHiddenStyle));g.removeClass(h);a.setState();
        }).on("click", function (b) {
          var c = function c() {
            a.setVisible && a.setVisible();
          };g.removeClass(h);b = { browserEvent: b };a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : w(a, "legendItemClick", b, c);
        });
      }, createCheckboxForItem: function createCheckboxForItem(a) {
        a.checkbox = G("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container);z(a.checkbox, "click", function (b) {
          w(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () {
            a.select();
          });
        });
      } });u(F.prototype, { showResetZoom: function showResetZoom() {
        function a() {
          b.zoomOut();
        }var b = this,
            d = c.lang,
            f = b.options.chart.resetZoomButton,
            g = f.theme,
            h = g.states,
            l = "chart" === f.relativeTo ? null : "plotBox";w(this, "beforeShowResetZoom", null, function () {
          b.resetZoomButton = b.renderer.button(d.resetZoom, null, null, a, g, h && h.hover).attr({ align: f.position.align, title: d.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(f.position, !1, l);
        });
      }, zoomOut: function zoomOut() {
        w(this, "selection", { resetSelection: !0 }, this.zoom);
      }, zoom: function zoom(a) {
        var b,
            c = this.pointer,
            d = !1,
            f;!a || a.resetSelection ? (this.axes.forEach(function (a) {
          b = a.zoom();
        }), c.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
          var f = a.axis;c[f.isXAxis ? "zoomX" : "zoomY"] && (b = f.zoom(a.min, a.max), f.displayBtn && (d = !0));
        });f = this.resetZoomButton;d && !f ? this.showResetZoom() : !d && p(f) && (this.resetZoomButton = f.destroy());b && this.redraw(m(this.options.chart.animation, a && a.animation, 100 > this.pointCount));
      }, pan: function pan(a, b) {
        var c = this,
            d = c.hoverPoints,
            f;w(this, "pan", { originalEvent: a }, function () {
          d && d.forEach(function (a) {
            a.setState();
          });("xy" === b ? [1, 0] : [1]).forEach(function (b) {
            b = c[b ? "xAxis" : "yAxis"][0];var d = b.horiz,
                g = a[d ? "chartX" : "chartY"],
                d = d ? "mouseDownX" : "mouseDownY",
                e = c[d],
                k = (b.pointRange || 0) / 2,
                h = b.reversed && !c.inverted || !b.reversed && c.inverted ? -1 : 1,
                l = b.getExtremes(),
                m = b.toValue(e - g, !0) + k * h,
                h = b.toValue(e + b.len - g, !0) - k * h,
                n = h < m,
                e = n ? h : m,
                m = n ? m : h,
                h = Math.min(l.dataMin, k ? l.min : b.toValue(b.toPixels(l.min) - b.minPixelPadding)),
                k = Math.max(l.dataMax, k ? l.max : b.toValue(b.toPixels(l.max) + b.minPixelPadding)),
                n = h - e;0 < n && (m += n, e = h);n = m - k;0 < n && (m = k, e -= n);b.series.length && e !== l.min && m !== l.max && (b.setExtremes(e, m, !1, !1, { trigger: "pan" }), f = !0);c[d] = g;
          });f && c.redraw(!1);h(c.container, { cursor: "move" });
        });
      } });u(n.prototype, { select: function select(a, b) {
        var c = this,
            d = c.series,
            f = d.chart;a = m(a, !c.selected);c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
          c.selected = c.options.selected = a;d.options.data[d.data.indexOf(c)] = c.options;c.setState(a && "select");b || f.getSelectedPoints().forEach(function (a) {
            a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[d.data.indexOf(a)] = a.options, a.setState(""), a.firePointEvent("unselect"));
          });
        });
      }, onMouseOver: function onMouseOver(a) {
        var b = this.series.chart,
            c = b.pointer;a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);c.runPointActions(a, this);
      }, onMouseOut: function onMouseOut() {
        var a = this.series.chart;this.firePointEvent("mouseOut");(a.hoverPoints || []).forEach(function (a) {
          a.setState();
        });a.hoverPoints = a.hoverPoint = null;
      }, importEvents: function importEvents() {
        if (!this.hasImportedEvents) {
          var b = this,
              c = d(b.series.options.point, b.options).events;b.events = c;a.objectEach(c, function (a, c) {
            z(b, c, a);
          });this.hasImportedEvents = !0;
        }
      }, setState: function setState(a, b) {
        var c = Math.floor(this.plotX),
            d = this.plotY,
            f = this.series,
            g = f.options.states[a || "normal"] || {},
            h = r[f.type].marker && f.options.marker,
            l = h && !1 === h.enabled,
            e = h && h.states && h.states[a || "normal"] || {},
            n = !1 === e.enabled,
            p = f.stateMarkerGraphic,
            t = this.marker || {},
            v = f.chart,
            x = f.halo,
            z,
            F = h && f.markerAttribs;a = a || "";if (!(a === this.state && !b || this.selected && "select" !== a || !1 === g.enabled || a && (n || l && !1 === e.enabled) || a && t.states && t.states[a] && !1 === t.states[a].enabled)) {
          F && (z = f.markerAttribs(this, a));if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), v.styledMode || this.graphic.animate(f.pointAttribs(this, a), m(v.options.chart.animation, g.animation)), z && this.graphic.animate(z, m(v.options.chart.animation, e.animation, h.animation)), p && p.hide();else {
            if (a && e) {
              h = t.symbol || f.symbol;p && p.currentSymbol !== h && (p = p.destroy());if (p) p[b ? "animate" : "attr"]({ x: z.x, y: z.y });else h && (f.stateMarkerGraphic = p = v.renderer.symbol(h, z.x, z.y, z.width, z.height).add(f.markerGroup), p.currentSymbol = h);!v.styledMode && p && p.attr(f.pointAttribs(this, a));
            }p && (p[a && v.isInsidePlot(c, d, v.inverted) ? "show" : "hide"](), p.element.point = this);
          }(c = g.halo) && c.size ? (x || (f.halo = x = v.renderer.path().add((this.graphic || p).parentGroup)), x.show()[b ? "animate" : "attr"]({ d: this.haloPath(c.size) }), x.attr({ "class": "highcharts-halo highcharts-color-" + m(this.colorIndex, f.colorIndex) + (this.className ? " " + this.className : ""), zIndex: -1 }), x.point = this, v.styledMode || x.attr(u({ fill: this.color || f.color, "fill-opacity": c.opacity }, c.attributes))) : x && x.point && x.point.haloPath && x.animate({ d: x.point.haloPath(0) }, null, x.hide);this.state = a;w(this, "afterSetState");
        }
      }, haloPath: function haloPath(a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      } });u(b.prototype, { onMouseOver: function onMouseOver() {
        var a = this.chart,
            b = a.hoverSeries;if (b && b !== this) b.onMouseOut();this.options.events.mouseOver && w(this, "mouseOver");this.setState("hover");a.hoverSeries = this;
      }, onMouseOut: function onMouseOut() {
        var a = this.options,
            b = this.chart,
            c = b.tooltip,
            d = b.hoverPoint;b.hoverSeries = null;if (d) d.onMouseOut();this && a.events.mouseOut && w(this, "mouseOut");!c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();this.setState();
      }, setState: function setState(a) {
        var b = this,
            c = b.options,
            d = b.graph,
            f = c.states,
            g = c.lineWidth,
            c = 0;a = a || "";if (b.state !== a && ([b.group, b.markerGroup, b.dataLabelsGroup].forEach(function (c) {
          c && (b.state && c.removeClass("highcharts-series-" + b.state), a && c.addClass("highcharts-series-" + a));
        }), b.state = a, !(b.chart.styledMode || f[a] && !1 === f[a].enabled) && (a && (g = f[a].lineWidth || g + (f[a].lineWidthPlus || 0)), d && !d.dashstyle))) for (g = { "stroke-width": g }, d.animate(g, m(f[a || "normal"] && f[a || "normal"].animation, b.chart.options.chart.animation)); b["zone-graph-" + c];) {
          b["zone-graph-" + c].attr(g), c += 1;
        }
      }, setVisible: function setVisible(a, b) {
        var c = this,
            d = c.chart,
            f = c.legendItem,
            g,
            h = d.options.chart.ignoreHiddenSeries,
            l = c.visible;g = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !l : a) ? "show" : "hide";["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
          if (c[a]) c[a][g]();
        });
        if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();f && d.legend.colorizeItem(c, a);c.isDirty = !0;c.options.stacking && d.series.forEach(function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });c.linkedSeries.forEach(function (b) {
          b.setVisible(a, !1);
        });h && (d.isDirtyBox = !0);w(c, g);!1 !== b && d.redraw();
      }, show: function show() {
        this.setVisible(!0);
      }, hide: function hide() {
        this.setVisible(!1);
      }, select: function select(a) {
        this.selected = a = this.options.selected = void 0 === a ? !this.selected : a;this.checkbox && (this.checkbox.checked = a);w(this, a ? "select" : "unselect");
      }, drawTracker: v.drawTrackerGraph });
  })(I);(function (a) {
    var z = a.Chart,
        F = a.isArray,
        G = a.isObject,
        h = a.pick,
        c = a.splat;z.prototype.setResponsive = function (c, h) {
      var r = this.options.responsive,
          u = [],
          p = this.currentResponsive;!h && r && r.rules && r.rules.forEach(function (g) {
        void 0 === g._id && (g._id = a.uniqueKey());this.matchResponsiveRule(g, u, c);
      }, this);h = a.merge.apply(0, u.map(function (c) {
        return a.find(r.rules, function (a) {
          return a._id === c;
        }).chartOptions;
      }));h.isResponsiveOptions = !0;u = u.toString() || void 0;u !== (p && p.ruleIds) && (p && this.update(p.undoOptions, c), u ? (p = this.currentOptions(h), p.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: u, mergedOptions: h, undoOptions: p }, this.update(h, c)) : this.currentResponsive = void 0);
    };z.prototype.matchResponsiveRule = function (a, c) {
      var r = a.condition;(r.callback || function () {
        return this.chartWidth <= h(r.maxWidth, Number.MAX_VALUE) && this.chartHeight <= h(r.maxHeight, Number.MAX_VALUE) && this.chartWidth >= h(r.minWidth, 0) && this.chartHeight >= h(r.minHeight, 0);
      }).call(this) && c.push(a._id);
    };z.prototype.currentOptions = function (h) {
      function r(h, p, g, d) {
        var m;a.objectEach(h, function (a, b) {
          if (!d && -1 < ["series", "xAxis", "yAxis"].indexOf(b)) for (a = c(a), g[b] = [], m = 0; m < a.length; m++) {
            p[b][m] && (g[b][m] = {}, r(a[m], p[b][m], g[b][m], d + 1));
          } else G(a) ? (g[b] = F(a) ? [] : {}, r(a, p[b] || {}, g[b], d + 1)) : g[b] = p[b] || null;
        });
      }var w = {};r(h, this.options, w, 0);return w;
    };
  })(I);return I;
});
//# sourceMappingURL=highcharts.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ])});;
//# sourceMappingURL=module.js.map