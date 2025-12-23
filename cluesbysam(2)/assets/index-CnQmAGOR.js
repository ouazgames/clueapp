(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const h of r)
      if (h.type === "childList")
        for (const m of h.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && s(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(r) {
    const h = {};
    return (
      r.integrity && (h.integrity = r.integrity),
      r.referrerPolicy && (h.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const h = f(r);
    fetch(r.href, h);
  }
})();
const jg =
  "https://www.youtube.com/watch?v=607VN4VZLxU&list=PLrsktZJm5gWcEQ7MIWa87-yYbjsSEl6bY";
function wg(a) {
  try {
    const i = new URL(a);
    return i.hostname === "youtu.be"
      ? `https://www.youtube.com/embed/${i.pathname.slice(1)}`
      : i.pathname === "/watch" && i.searchParams.get("v")
      ? `https://www.youtube.com/embed/${i.searchParams.get("v")}`
      : i.pathname.startsWith("/shorts/")
      ? `https://www.youtube.com/embed/${i.pathname.split("/")[2]}`
      : i.pathname.startsWith("/embed/")
      ? i.href
      : null;
  } catch {
    return null;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const a = document.getElementById("daily-tutorial"),
    i = document.createElement("iframe");
  (i.width = "300"),
    (i.height = "196"),
    (i.src = wg(jg)),
    (i.title = "YouTube video player"),
    (i.frameBorder = "0"),
    (i.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),
    (i.referrerPolicy = "strict-origin-when-cross-origin"),
    (i.allowFullscreen = !0),
    a.appendChild(i);
});
function Yg(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Pf = { exports: {} },
  Fa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var q1;
function qg() {
  if (q1) return Fa;
  q1 = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function f(s, r, h) {
    var m = null;
    if (
      (h !== void 0 && (m = "" + h),
      r.key !== void 0 && (m = "" + r.key),
      "key" in r)
    ) {
      h = {};
      for (var x in r) x !== "key" && (h[x] = r[x]);
    } else h = r;
    return (
      (r = h.ref),
      { $$typeof: a, type: s, key: m, ref: r !== void 0 ? r : null, props: h }
    );
  }
  return (Fa.Fragment = i), (Fa.jsx = f), (Fa.jsxs = f), Fa;
}
var B1;
function Bg() {
  return B1 || ((B1 = 1), (Pf.exports = qg())), Pf.exports;
}
var T = Bg(),
  es = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X1;
function Xg() {
  if (X1) return ie;
  X1 = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    f = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    w = Symbol.iterator;
  function q(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (w && v[w]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var B = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    K = Object.assign,
    ee = {};
  function te(v, H, X) {
    (this.props = v),
      (this.context = H),
      (this.refs = ee),
      (this.updater = X || B);
  }
  (te.prototype.isReactComponent = {}),
    (te.prototype.setState = function (v, H) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, H, "setState");
    }),
    (te.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function se() {}
  se.prototype = te.prototype;
  function ne(v, H, X) {
    (this.props = v),
      (this.context = H),
      (this.refs = ee),
      (this.updater = X || B);
  }
  var me = (ne.prototype = new se());
  (me.constructor = ne), K(me, te.prototype), (me.isPureReactComponent = !0);
  var ge = Array.isArray,
    F = { H: null, A: null, T: null, S: null },
    be = Object.prototype.hasOwnProperty;
  function _e(v, H, X, O, N, Z) {
    return (
      (X = Z.ref),
      { $$typeof: a, type: v, key: H, ref: X !== void 0 ? X : null, props: Z }
    );
  }
  function Se(v, H) {
    return _e(v.type, H, void 0, void 0, void 0, v.props);
  }
  function L(v) {
    return typeof v == "object" && v !== null && v.$$typeof === a;
  }
  function V(v) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (X) {
        return H[X];
      })
    );
  }
  var pe = /\/+/g;
  function Ue(v, H) {
    return typeof v == "object" && v !== null && v.key != null
      ? V("" + v.key)
      : H.toString(36);
  }
  function Ce() {}
  function Ne(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (
          (typeof v.status == "string"
            ? v.then(Ce, Ce)
            : ((v.status = "pending"),
              v.then(
                function (H) {
                  v.status === "pending" &&
                    ((v.status = "fulfilled"), (v.value = H));
                },
                function (H) {
                  v.status === "pending" &&
                    ((v.status = "rejected"), (v.reason = H));
                }
              )),
          v.status)
        ) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function I(v, H, X, O, N) {
    var Z = typeof v;
    (Z === "undefined" || Z === "boolean") && (v = null);
    var G = !1;
    if (v === null) G = !0;
    else
      switch (Z) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case a:
            case i:
              G = !0;
              break;
            case C:
              return (G = v._init), I(G(v._payload), H, X, O, N);
          }
      }
    if (G)
      return (
        (N = N(v)),
        (G = O === "" ? "." + Ue(v, 0) : O),
        ge(N)
          ? ((X = ""),
            G != null && (X = G.replace(pe, "$&/") + "/"),
            I(N, H, X, "", function (Oe) {
              return Oe;
            }))
          : N != null &&
            (L(N) &&
              (N = Se(
                N,
                X +
                  (N.key == null || (v && v.key === N.key)
                    ? ""
                    : ("" + N.key).replace(pe, "$&/") + "/") +
                  G
              )),
            H.push(N)),
        1
      );
    G = 0;
    var fe = O === "" ? "." : O + ":";
    if (ge(v))
      for (var he = 0; he < v.length; he++)
        (O = v[he]), (Z = fe + Ue(O, he)), (G += I(O, H, X, Z, N));
    else if (((he = q(v)), typeof he == "function"))
      for (v = he.call(v), he = 0; !(O = v.next()).done; )
        (O = O.value), (Z = fe + Ue(O, he++)), (G += I(O, H, X, Z, N));
    else if (Z === "object") {
      if (typeof v.then == "function") return I(Ne(v), H, X, O, N);
      throw (
        ((H = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return G;
  }
  function D(v, H, X) {
    if (v == null) return v;
    var O = [],
      N = 0;
    return (
      I(v, O, "", "", function (Z) {
        return H.call(X, Z, N++);
      }),
      O
    );
  }
  function J(v) {
    if (v._status === -1) {
      var H = v._result;
      (H = H()),
        H.then(
          function (X) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = X));
          },
          function (X) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = X));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = H));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var k =
    typeof reportError == "function"
      ? reportError
      : function (v) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof v == "object" &&
                v !== null &&
                typeof v.message == "string"
                  ? String(v.message)
                  : String(v),
              error: v,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", v);
            return;
          }
          console.error(v);
        };
  function ce() {}
  return (
    (ie.Children = {
      map: D,
      forEach: function (v, H, X) {
        D(
          v,
          function () {
            H.apply(this, arguments);
          },
          X
        );
      },
      count: function (v) {
        var H = 0;
        return (
          D(v, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (v) {
        return (
          D(v, function (H) {
            return H;
          }) || []
        );
      },
      only: function (v) {
        if (!L(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (ie.Component = te),
    (ie.Fragment = f),
    (ie.Profiler = r),
    (ie.PureComponent = ne),
    (ie.StrictMode = s),
    (ie.Suspense = b),
    (ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (ie.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ie.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (ie.cloneElement = function (v, H, X) {
      if (v == null)
        throw Error(
          "The argument must be a React element, but you passed " + v + "."
        );
      var O = K({}, v.props),
        N = v.key,
        Z = void 0;
      if (H != null)
        for (G in (H.ref !== void 0 && (Z = void 0),
        H.key !== void 0 && (N = "" + H.key),
        H))
          !be.call(H, G) ||
            G === "key" ||
            G === "__self" ||
            G === "__source" ||
            (G === "ref" && H.ref === void 0) ||
            (O[G] = H[G]);
      var G = arguments.length - 2;
      if (G === 1) O.children = X;
      else if (1 < G) {
        for (var fe = Array(G), he = 0; he < G; he++)
          fe[he] = arguments[he + 2];
        O.children = fe;
      }
      return _e(v.type, N, void 0, void 0, Z, O);
    }),
    (ie.createContext = function (v) {
      return (
        (v = {
          $$typeof: m,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: h, _context: v }),
        v
      );
    }),
    (ie.createElement = function (v, H, X) {
      var O,
        N = {},
        Z = null;
      if (H != null)
        for (O in (H.key !== void 0 && (Z = "" + H.key), H))
          be.call(H, O) &&
            O !== "key" &&
            O !== "__self" &&
            O !== "__source" &&
            (N[O] = H[O]);
      var G = arguments.length - 2;
      if (G === 1) N.children = X;
      else if (1 < G) {
        for (var fe = Array(G), he = 0; he < G; he++)
          fe[he] = arguments[he + 2];
        N.children = fe;
      }
      if (v && v.defaultProps)
        for (O in ((G = v.defaultProps), G)) N[O] === void 0 && (N[O] = G[O]);
      return _e(v, Z, void 0, void 0, null, N);
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (v) {
      return { $$typeof: x, render: v };
    }),
    (ie.isValidElement = L),
    (ie.lazy = function (v) {
      return { $$typeof: C, _payload: { _status: -1, _result: v }, _init: J };
    }),
    (ie.memo = function (v, H) {
      return { $$typeof: y, type: v, compare: H === void 0 ? null : H };
    }),
    (ie.startTransition = function (v) {
      var H = F.T,
        X = {};
      F.T = X;
      try {
        var O = v(),
          N = F.S;
        N !== null && N(X, O),
          typeof O == "object" &&
            O !== null &&
            typeof O.then == "function" &&
            O.then(ce, k);
      } catch (Z) {
        k(Z);
      } finally {
        F.T = H;
      }
    }),
    (ie.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (ie.use = function (v) {
      return F.H.use(v);
    }),
    (ie.useActionState = function (v, H, X) {
      return F.H.useActionState(v, H, X);
    }),
    (ie.useCallback = function (v, H) {
      return F.H.useCallback(v, H);
    }),
    (ie.useContext = function (v) {
      return F.H.useContext(v);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (v, H) {
      return F.H.useDeferredValue(v, H);
    }),
    (ie.useEffect = function (v, H) {
      return F.H.useEffect(v, H);
    }),
    (ie.useId = function () {
      return F.H.useId();
    }),
    (ie.useImperativeHandle = function (v, H, X) {
      return F.H.useImperativeHandle(v, H, X);
    }),
    (ie.useInsertionEffect = function (v, H) {
      return F.H.useInsertionEffect(v, H);
    }),
    (ie.useLayoutEffect = function (v, H) {
      return F.H.useLayoutEffect(v, H);
    }),
    (ie.useMemo = function (v, H) {
      return F.H.useMemo(v, H);
    }),
    (ie.useOptimistic = function (v, H) {
      return F.H.useOptimistic(v, H);
    }),
    (ie.useReducer = function (v, H, X) {
      return F.H.useReducer(v, H, X);
    }),
    (ie.useRef = function (v) {
      return F.H.useRef(v);
    }),
    (ie.useState = function (v) {
      return F.H.useState(v);
    }),
    (ie.useSyncExternalStore = function (v, H, X) {
      return F.H.useSyncExternalStore(v, H, X);
    }),
    (ie.useTransition = function () {
      return F.H.useTransition();
    }),
    (ie.version = "19.0.0"),
    ie
  );
}
var G1;
function Zs() {
  return G1 || ((G1 = 1), (es.exports = Xg())), es.exports;
}
var Ae = Zs();
const Gg = Yg(Ae);
var ts = { exports: {} },
  Ia = {},
  ls = { exports: {} },
  ns = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L1;
function Lg() {
  return (
    L1 ||
      ((L1 = 1),
      (function (a) {
        function i(D, J) {
          var k = D.length;
          D.push(J);
          e: for (; 0 < k; ) {
            var ce = (k - 1) >>> 1,
              v = D[ce];
            if (0 < r(v, J)) (D[ce] = J), (D[k] = v), (k = ce);
            else break e;
          }
        }
        function f(D) {
          return D.length === 0 ? null : D[0];
        }
        function s(D) {
          if (D.length === 0) return null;
          var J = D[0],
            k = D.pop();
          if (k !== J) {
            D[0] = k;
            e: for (var ce = 0, v = D.length, H = v >>> 1; ce < H; ) {
              var X = 2 * (ce + 1) - 1,
                O = D[X],
                N = X + 1,
                Z = D[N];
              if (0 > r(O, k))
                N < v && 0 > r(Z, O)
                  ? ((D[ce] = Z), (D[N] = k), (ce = N))
                  : ((D[ce] = O), (D[X] = k), (ce = X));
              else if (N < v && 0 > r(Z, k)) (D[ce] = Z), (D[N] = k), (ce = N);
              else break e;
            }
          }
          return J;
        }
        function r(D, J) {
          var k = D.sortIndex - J.sortIndex;
          return k !== 0 ? k : D.id - J.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          a.unstable_now = function () {
            return h.now();
          };
        } else {
          var m = Date,
            x = m.now();
          a.unstable_now = function () {
            return m.now() - x;
          };
        }
        var b = [],
          y = [],
          C = 1,
          w = null,
          q = 3,
          B = !1,
          K = !1,
          ee = !1,
          te = typeof setTimeout == "function" ? setTimeout : null,
          se = typeof clearTimeout == "function" ? clearTimeout : null,
          ne = typeof setImmediate < "u" ? setImmediate : null;
        function me(D) {
          for (var J = f(y); J !== null; ) {
            if (J.callback === null) s(y);
            else if (J.startTime <= D)
              s(y), (J.sortIndex = J.expirationTime), i(b, J);
            else break;
            J = f(y);
          }
        }
        function ge(D) {
          if (((ee = !1), me(D), !K))
            if (f(b) !== null) (K = !0), Ne();
            else {
              var J = f(y);
              J !== null && I(ge, J.startTime - D);
            }
        }
        var F = !1,
          be = -1,
          _e = 5,
          Se = -1;
        function L() {
          return !(a.unstable_now() - Se < _e);
        }
        function V() {
          if (F) {
            var D = a.unstable_now();
            Se = D;
            var J = !0;
            try {
              e: {
                (K = !1), ee && ((ee = !1), se(be), (be = -1)), (B = !0);
                var k = q;
                try {
                  t: {
                    for (
                      me(D), w = f(b);
                      w !== null && !(w.expirationTime > D && L());

                    ) {
                      var ce = w.callback;
                      if (typeof ce == "function") {
                        (w.callback = null), (q = w.priorityLevel);
                        var v = ce(w.expirationTime <= D);
                        if (((D = a.unstable_now()), typeof v == "function")) {
                          (w.callback = v), me(D), (J = !0);
                          break t;
                        }
                        w === f(b) && s(b), me(D);
                      } else s(b);
                      w = f(b);
                    }
                    if (w !== null) J = !0;
                    else {
                      var H = f(y);
                      H !== null && I(ge, H.startTime - D), (J = !1);
                    }
                  }
                  break e;
                } finally {
                  (w = null), (q = k), (B = !1);
                }
                J = void 0;
              }
            } finally {
              J ? pe() : (F = !1);
            }
          }
        }
        var pe;
        if (typeof ne == "function")
          pe = function () {
            ne(V);
          };
        else if (typeof MessageChannel < "u") {
          var Ue = new MessageChannel(),
            Ce = Ue.port2;
          (Ue.port1.onmessage = V),
            (pe = function () {
              Ce.postMessage(null);
            });
        } else
          pe = function () {
            te(V, 0);
          };
        function Ne() {
          F || ((F = !0), pe());
        }
        function I(D, J) {
          be = te(function () {
            D(a.unstable_now());
          }, J);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (a.unstable_continueExecution = function () {
            K || B || ((K = !0), Ne());
          }),
          (a.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_e = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (a.unstable_getFirstCallbackNode = function () {
            return f(b);
          }),
          (a.unstable_next = function (D) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = q;
            }
            var k = q;
            q = J;
            try {
              return D();
            } finally {
              q = k;
            }
          }),
          (a.unstable_pauseExecution = function () {}),
          (a.unstable_requestPaint = function () {}),
          (a.unstable_runWithPriority = function (D, J) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var k = q;
            q = D;
            try {
              return J();
            } finally {
              q = k;
            }
          }),
          (a.unstable_scheduleCallback = function (D, J, k) {
            var ce = a.unstable_now();
            switch (
              (typeof k == "object" && k !== null
                ? ((k = k.delay),
                  (k = typeof k == "number" && 0 < k ? ce + k : ce))
                : (k = ce),
              D)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = k + v),
              (D = {
                id: C++,
                callback: J,
                priorityLevel: D,
                startTime: k,
                expirationTime: v,
                sortIndex: -1,
              }),
              k > ce
                ? ((D.sortIndex = k),
                  i(y, D),
                  f(b) === null &&
                    D === f(y) &&
                    (ee ? (se(be), (be = -1)) : (ee = !0), I(ge, k - ce)))
                : ((D.sortIndex = v), i(b, D), K || B || ((K = !0), Ne())),
              D
            );
          }),
          (a.unstable_shouldYield = L),
          (a.unstable_wrapCallback = function (D) {
            var J = q;
            return function () {
              var k = q;
              q = J;
              try {
                return D.apply(this, arguments);
              } finally {
                q = k;
              }
            };
          });
      })(ns)),
    ns
  );
}
var Q1;
function Qg() {
  return Q1 || ((Q1 = 1), (ls.exports = Lg())), ls.exports;
}
var as = { exports: {} },
  ct = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Z1;
function Zg() {
  if (Z1) return ct;
  Z1 = 1;
  var a = Zs();
  function i(b) {
    var y = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        y += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f() {}
  var s = {
      d: {
        f,
        r: function () {
          throw Error(i(522));
        },
        D: f,
        C: f,
        L: f,
        m: f,
        X: f,
        S: f,
        M: f,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function h(b, y, C) {
    var w =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: w == null ? null : "" + w,
      children: b,
      containerInfo: y,
      implementation: C,
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(b, y) {
    if (b === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ct.createPortal = function (b, y) {
      var C =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(i(299));
      return h(b, y, null, C);
    }),
    (ct.flushSync = function (b) {
      var y = m.T,
        C = s.p;
      try {
        if (((m.T = null), (s.p = 2), b)) return b();
      } finally {
        (m.T = y), (s.p = C), s.d.f();
      }
    }),
    (ct.preconnect = function (b, y) {
      typeof b == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        s.d.C(b, y));
    }),
    (ct.prefetchDNS = function (b) {
      typeof b == "string" && s.d.D(b);
    }),
    (ct.preinit = function (b, y) {
      if (typeof b == "string" && y && typeof y.as == "string") {
        var C = y.as,
          w = x(C, y.crossOrigin),
          q = typeof y.integrity == "string" ? y.integrity : void 0,
          B = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        C === "style"
          ? s.d.S(b, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: w,
              integrity: q,
              fetchPriority: B,
            })
          : C === "script" &&
            s.d.X(b, {
              crossOrigin: w,
              integrity: q,
              fetchPriority: B,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (ct.preinitModule = function (b, y) {
      if (typeof b == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var C = x(y.as, y.crossOrigin);
            s.d.M(b, {
              crossOrigin: C,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && s.d.M(b);
    }),
    (ct.preload = function (b, y) {
      if (
        typeof b == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var C = y.as,
          w = x(C, y.crossOrigin);
        s.d.L(b, C, {
          crossOrigin: w,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (ct.preloadModule = function (b, y) {
      if (typeof b == "string")
        if (y) {
          var C = x(y.as, y.crossOrigin);
          s.d.m(b, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: C,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else s.d.m(b);
    }),
    (ct.requestFormReset = function (b) {
      s.d.r(b);
    }),
    (ct.unstable_batchedUpdates = function (b, y) {
      return b(y);
    }),
    (ct.useFormState = function (b, y, C) {
      return m.H.useFormState(b, y, C);
    }),
    (ct.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (ct.version = "19.0.0"),
    ct
  );
}
var V1;
function Vg() {
  if (V1) return as.exports;
  V1 = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (as.exports = Zg()), as.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $1;
function $g() {
  if ($1) return Ia;
  $1 = 1;
  var a = Qg(),
    i = Zs(),
    f = Vg();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var h = Symbol.for("react.element"),
    m = Symbol.for("react.transitional.element"),
    x = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    y = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    w = Symbol.for("react.provider"),
    q = Symbol.for("react.consumer"),
    B = Symbol.for("react.context"),
    K = Symbol.for("react.forward_ref"),
    ee = Symbol.for("react.suspense"),
    te = Symbol.for("react.suspense_list"),
    se = Symbol.for("react.memo"),
    ne = Symbol.for("react.lazy"),
    me = Symbol.for("react.offscreen"),
    ge = Symbol.for("react.memo_cache_sentinel"),
    F = Symbol.iterator;
  function be(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _e = Symbol.for("react.client.reference");
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === _e ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case x:
        return "Portal";
      case C:
        return "Profiler";
      case y:
        return "StrictMode";
      case ee:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case B:
          return (e.displayName || "Context") + ".Provider";
        case q:
          return (e._context.displayName || "Context") + ".Consumer";
        case K:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case se:
          return (
            (t = e.displayName || null), t !== null ? t : Se(e.type) || "Memo"
          );
        case ne:
          (t = e._payload), (e = e._init);
          try {
            return Se(e(t));
          } catch {}
      }
    return null;
  }
  var L = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = Object.assign,
    pe,
    Ue;
  function Ce(e) {
    if (pe === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (pe = (t && t[1]) || ""),
          (Ue =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      pe +
      e +
      Ue
    );
  }
  var Ne = !1;
  function I(e, t) {
    if (!e || Ne) return "";
    Ne = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var U = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(U.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(U, []);
                } catch (z) {
                  var E = z;
                }
                Reflect.construct(e, [], U);
              } else {
                try {
                  U.call();
                } catch (z) {
                  E = z;
                }
                e.call(U.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                E = z;
              }
              (U = e()) &&
                typeof U.catch == "function" &&
                U.catch(function () {});
            }
          } catch (z) {
            if (z && E && typeof z.stack == "string") return [z.stack, E.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = n.DetermineComponentFrameRoot(),
        o = c[0],
        d = c[1];
      if (o && d) {
        var g = o.split(`
`),
          S = d.split(`
`);
        for (
          u = n = 0;
          n < g.length && !g[n].includes("DetermineComponentFrameRoot");

        )
          n++;
        for (; u < S.length && !S[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (n === g.length || u === S.length)
          for (
            n = g.length - 1, u = S.length - 1;
            1 <= n && 0 <= u && g[n] !== S[u];

          )
            u--;
        for (; 1 <= n && 0 <= u; n--, u--)
          if (g[n] !== S[u]) {
            if (n !== 1 || u !== 1)
              do
                if ((n--, u--, 0 > u || g[n] !== S[u])) {
                  var A =
                    `
` + g[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      A.includes("<anonymous>") &&
                      (A = A.replace("<anonymous>", e.displayName)),
                    A
                  );
                }
              while (1 <= n && 0 <= u);
            break;
          }
      }
    } finally {
      (Ne = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? Ce(l) : "";
  }
  function D(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ce(e.type);
      case 16:
        return Ce("Lazy");
      case 13:
        return Ce("Suspense");
      case 19:
        return Ce("SuspenseList");
      case 0:
      case 15:
        return (e = I(e.type, !1)), e;
      case 11:
        return (e = I(e.type.render, !1)), e;
      case 1:
        return (e = I(e.type, !0)), e;
      default:
        return "";
    }
  }
  function J(e) {
    try {
      var t = "";
      do (t += D(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function k(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function ce(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (k(e) !== e) throw Error(s(188));
  }
  function H(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = k(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var u = l.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (((n = u.return), n !== null)) {
          l = n;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === l) return v(u), e;
          if (c === n) return v(u), t;
          c = c.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== n.return) (l = u), (n = c);
      else {
        for (var o = !1, d = u.child; d; ) {
          if (d === l) {
            (o = !0), (l = u), (n = c);
            break;
          }
          if (d === n) {
            (o = !0), (n = u), (l = c);
            break;
          }
          d = d.sibling;
        }
        if (!o) {
          for (d = c.child; d; ) {
            if (d === l) {
              (o = !0), (l = c), (n = u);
              break;
            }
            if (d === n) {
              (o = !0), (n = c), (l = u);
              break;
            }
            d = d.sibling;
          }
          if (!o) throw Error(s(189));
        }
      }
      if (l.alternate !== n) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? e : t;
  }
  function X(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = X(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var O = Array.isArray,
    N = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    G = [],
    fe = -1;
  function he(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > fe || ((e.current = G[fe]), (G[fe] = null), fe--);
  }
  function je(e, t) {
    fe++, (G[fe] = e.current), (e.current = t);
  }
  var ht = he(null),
    ea = he(null),
    rl = he(null),
    cu = he(null);
  function fu(e, t) {
    switch ((je(rl, t), je(ea, e), je(ht, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? h1(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = h1(e)), (t = m1(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Oe(ht), je(ht, t);
  }
  function dn() {
    Oe(ht), Oe(ea), Oe(rl);
  }
  function Qi(e) {
    e.memoizedState !== null && je(cu, e);
    var t = ht.current,
      l = m1(t, e.type);
    t !== l && (je(ea, e), je(ht, l));
  }
  function su(e) {
    ea.current === e && (Oe(ht), Oe(ea)),
      cu.current === e && (Oe(cu), ($a._currentValue = Z));
  }
  var Zi = Object.prototype.hasOwnProperty,
    Vi = a.unstable_scheduleCallback,
    $i = a.unstable_cancelCallback,
    hh = a.unstable_shouldYield,
    mh = a.unstable_requestPaint,
    qt = a.unstable_now,
    gh = a.unstable_getCurrentPriorityLevel,
    tr = a.unstable_ImmediatePriority,
    lr = a.unstable_UserBlockingPriority,
    ru = a.unstable_NormalPriority,
    yh = a.unstable_LowPriority,
    nr = a.unstable_IdlePriority,
    vh = a.log,
    ph = a.unstable_setDisableYieldValue,
    ta = null,
    mt = null;
  function bh(e) {
    if (mt && typeof mt.onCommitFiberRoot == "function")
      try {
        mt.onCommitFiberRoot(ta, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function ol(e) {
    if (
      (typeof vh == "function" && ph(e),
      mt && typeof mt.setStrictMode == "function")
    )
      try {
        mt.setStrictMode(ta, e);
      } catch {}
  }
  var gt = Math.clz32 ? Math.clz32 : Mh,
    Sh = Math.log,
    xh = Math.LN2;
  function Mh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Sh(e) / xh) | 0)) | 0;
  }
  var ou = 128,
    du = 4194304;
  function Bl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function hu(e, t) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes,
      o = e.warmLanes;
    e = e.finishedLanes !== 0;
    var d = l & 134217727;
    return (
      d !== 0
        ? ((l = d & ~u),
          l !== 0
            ? (n = Bl(l))
            : ((c &= d),
              c !== 0
                ? (n = Bl(c))
                : e || ((o = d & ~o), o !== 0 && (n = Bl(o)))))
        : ((d = l & ~u),
          d !== 0
            ? (n = Bl(d))
            : c !== 0
            ? (n = Bl(c))
            : e || ((o = l & ~o), o !== 0 && (n = Bl(o)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          !(t & u) &&
          ((u = n & -n),
          (o = t & -t),
          u >= o || (u === 32 && (o & 4194176) !== 0))
        ? t
        : n
    );
  }
  function la(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function _h(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ar() {
    var e = ou;
    return (ou <<= 1), !(ou & 4194176) && (ou = 128), e;
  }
  function ur() {
    var e = du;
    return (du <<= 1), !(du & 62914560) && (du = 4194304), e;
  }
  function ki(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function na(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Th(e, t, l, n, u, c) {
    var o = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var d = e.entanglements,
      g = e.expirationTimes,
      S = e.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var A = 31 - gt(l),
        U = 1 << A;
      (d[A] = 0), (g[A] = -1);
      var E = S[A];
      if (E !== null)
        for (S[A] = null, A = 0; A < E.length; A++) {
          var z = E[A];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~U;
    }
    n !== 0 && ir(e, n, 0),
      c !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(o & ~t));
  }
  function ir(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var n = 31 - gt(t);
    (e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (l & 4194218));
  }
  function cr(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var n = 31 - gt(l),
        u = 1 << n;
      (u & t) | (e[n] & t) && (e[n] |= t), (l &= ~u);
    }
  }
  function fr(e) {
    return (
      (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function sr() {
    var e = N.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : D1(e.type));
  }
  function Eh(e, t) {
    var l = N.p;
    try {
      return (N.p = e), t();
    } finally {
      N.p = l;
    }
  }
  var dl = Math.random().toString(36).slice(2),
    ut = "__reactFiber$" + dl,
    rt = "__reactProps$" + dl,
    hn = "__reactContainer$" + dl,
    Ki = "__reactEvents$" + dl,
    zh = "__reactListeners$" + dl,
    Ah = "__reactHandles$" + dl,
    rr = "__reactResources$" + dl,
    aa = "__reactMarker$" + dl;
  function Ji(e) {
    delete e[ut], delete e[rt], delete e[Ki], delete e[zh], delete e[Ah];
  }
  function Xl(e) {
    var t = e[ut];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[hn] || l[ut])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = v1(e); e !== null; ) {
            if ((l = e[ut])) return l;
            e = v1(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function mn(e) {
    if ((e = e[ut] || e[hn])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ua(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function gn(e) {
    var t = e[rr];
    return (
      t ||
        (t = e[rr] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Je(e) {
    e[aa] = !0;
  }
  var or = new Set(),
    dr = {};
  function Gl(e, t) {
    yn(e, t), yn(e + "Capture", t);
  }
  function yn(e, t) {
    for (dr[e] = t, e = 0; e < t.length; e++) or.add(t[e]);
  }
  var Vt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Nh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    hr = {},
    mr = {};
  function Oh(e) {
    return Zi.call(mr, e)
      ? !0
      : Zi.call(hr, e)
      ? !1
      : Nh.test(e)
      ? (mr[e] = !0)
      : ((hr[e] = !0), !1);
  }
  function mu(e, t, l) {
    if (Oh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function gu(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function $t(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  function Mt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function gr(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Rh(e) {
    var t = gr(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        c = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (o) {
            (n = "" + o), c.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (o) {
            n = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function yu(e) {
    e._valueTracker || (e._valueTracker = Rh(e));
  }
  function yr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      n = "";
    return (
      e && (n = gr(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function vu(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ch = /[\n"\\]/g;
  function _t(e) {
    return e.replace(Ch, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wi(e, t, l, n, u, c, o, d) {
    (e.name = ""),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (e.type = o)
        : e.removeAttribute("type"),
      t != null
        ? o === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Mt(t))
          : e.value !== "" + Mt(t) && (e.value = "" + Mt(t))
        : (o !== "submit" && o !== "reset") || e.removeAttribute("value"),
      t != null
        ? Fi(e, o, Mt(t))
        : l != null
        ? Fi(e, o, Mt(l))
        : n != null && e.removeAttribute("value"),
      u == null && c != null && (e.defaultChecked = !!c),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.name = "" + Mt(d))
        : e.removeAttribute("name");
  }
  function vr(e, t, l, n, u, c, o, d) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || l != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) return;
      (l = l != null ? "" + Mt(l) : ""),
        (t = t != null ? "" + Mt(t) : l),
        d || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = n ?? u),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = d ? e.checked : !!n),
      (e.defaultChecked = !!n),
      o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.name = o);
  }
  function Fi(e, t, l) {
    (t === "number" && vu(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function vn(e, t, l, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < l.length; u++) t["$" + l[u]] = !0;
      for (l = 0; l < e.length; l++)
        (u = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== u && (e[l].selected = u),
          u && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Mt(l), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === l) {
          (e[u].selected = !0), n && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function pr(e, t, l) {
    if (
      t != null &&
      ((t = "" + Mt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Mt(l) : "";
  }
  function br(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(s(92));
        if (O(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), (t = l);
    }
    (l = Mt(t)),
      (e.defaultValue = l),
      (n = e.textContent),
      n === l && n !== "" && n !== null && (e.value = n);
  }
  function pn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Sr(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? n
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : n
      ? e.setProperty(t, l)
      : typeof l != "number" || l === 0 || Dh.has(t)
      ? t === "float"
        ? (e.cssFloat = l)
        : (e[t] = ("" + l).trim())
      : (e[t] = l + "px");
  }
  function xr(e, t, l) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), l != null)) {
      for (var n in l)
        !l.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
            ? (e.cssFloat = "")
            : (e[n] = ""));
      for (var u in t)
        (n = t[u]), t.hasOwnProperty(u) && l[u] !== n && Sr(e, u, n);
    } else for (var c in t) t.hasOwnProperty(c) && Sr(e, c, t[c]);
  }
  function Ii(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Hh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Uh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pu(e) {
    return Uh.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Pi = null;
  function ec(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var bn = null,
    Sn = null;
  function Mr(e) {
    var t = mn(e);
    if (t && (e = t.stateNode)) {
      var l = e[rt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Wi(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + _t("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var u = n[rt] || null;
                if (!u) throw Error(s(90));
                Wi(
                  n,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (n = l[t]), n.form === e.form && yr(n);
          }
          break e;
        case "textarea":
          pr(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && vn(e, !!l.multiple, t, !1);
      }
    }
  }
  var tc = !1;
  function _r(e, t, l) {
    if (tc) return e(t, l);
    tc = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((tc = !1),
        (bn !== null || Sn !== null) &&
          (ti(), bn && ((t = bn), (e = Sn), (Sn = bn = null), Mr(t), e)))
      )
        for (t = 0; t < e.length; t++) Mr(e[t]);
    }
  }
  function ia(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[rt] || null;
    if (n === null) return null;
    l = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(s(231, t, typeof l));
    return l;
  }
  var lc = !1;
  if (Vt)
    try {
      var ca = {};
      Object.defineProperty(ca, "passive", {
        get: function () {
          lc = !0;
        },
      }),
        window.addEventListener("test", ca, ca),
        window.removeEventListener("test", ca, ca);
    } catch {
      lc = !1;
    }
  var hl = null,
    nc = null,
    bu = null;
  function Tr() {
    if (bu) return bu;
    var e,
      t = nc,
      l = t.length,
      n,
      u = "value" in hl ? hl.value : hl.textContent,
      c = u.length;
    for (e = 0; e < l && t[e] === u[e]; e++);
    var o = l - e;
    for (n = 1; n <= o && t[l - n] === u[c - n]; n++);
    return (bu = u.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Su(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function xu() {
    return !0;
  }
  function Er() {
    return !1;
  }
  function ot(e) {
    function t(l, n, u, c, o) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = n),
        (this.nativeEvent = c),
        (this.target = o),
        (this.currentTarget = null);
      for (var d in e)
        e.hasOwnProperty(d) && ((l = e[d]), (this[d] = l ? l(c) : c[d]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? xu
          : Er),
        (this.isPropagationStopped = Er),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = xu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = xu));
        },
        persist: function () {},
        isPersistent: xu,
      }),
      t
    );
  }
  var Ll = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Mu = ot(Ll),
    fa = V({}, Ll, { view: 0, detail: 0 }),
    jh = ot(fa),
    ac,
    uc,
    sa,
    _u = V({}, fa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== sa &&
              (sa && e.type === "mousemove"
                ? ((ac = e.screenX - sa.screenX), (uc = e.screenY - sa.screenY))
                : (uc = ac = 0),
              (sa = e)),
            ac);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : uc;
      },
    }),
    zr = ot(_u),
    wh = V({}, _u, { dataTransfer: 0 }),
    Yh = ot(wh),
    qh = V({}, fa, { relatedTarget: 0 }),
    ic = ot(qh),
    Bh = V({}, Ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xh = ot(Bh),
    Gh = V({}, Ll, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Lh = ot(Gh),
    Qh = V({}, Ll, { data: 0 }),
    Ar = ot(Qh),
    Zh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Vh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    $h = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function kh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = $h[e])
      ? !!t[e]
      : !1;
  }
  function cc() {
    return kh;
  }
  var Kh = V({}, fa, {
      key: function (e) {
        if (e.key) {
          var t = Zh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Su(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Vh[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cc,
      charCode: function (e) {
        return e.type === "keypress" ? Su(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Su(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Jh = ot(Kh),
    Wh = V({}, _u, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nr = ot(Wh),
    Fh = V({}, fa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cc,
    }),
    Ih = ot(Fh),
    Ph = V({}, Ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    em = ot(Ph),
    tm = V({}, _u, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    lm = ot(tm),
    nm = V({}, Ll, { newState: 0, oldState: 0 }),
    am = ot(nm),
    um = [9, 13, 27, 32],
    fc = Vt && "CompositionEvent" in window,
    ra = null;
  Vt && "documentMode" in document && (ra = document.documentMode);
  var im = Vt && "TextEvent" in window && !ra,
    Or = Vt && (!fc || (ra && 8 < ra && 11 >= ra)),
    Rr = " ",
    Cr = !1;
  function Dr(e, t) {
    switch (e) {
      case "keyup":
        return um.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Hr(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var xn = !1;
  function cm(e, t) {
    switch (e) {
      case "compositionend":
        return Hr(t);
      case "keypress":
        return t.which !== 32 ? null : ((Cr = !0), Rr);
      case "textInput":
        return (e = t.data), e === Rr && Cr ? null : e;
      default:
        return null;
    }
  }
  function fm(e, t) {
    if (xn)
      return e === "compositionend" || (!fc && Dr(e, t))
        ? ((e = Tr()), (bu = nc = hl = null), (xn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Or && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ur(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sm[e.type] : t === "textarea";
  }
  function jr(e, t, l, n) {
    bn ? (Sn ? Sn.push(n) : (Sn = [n])) : (bn = n),
      (t = ii(t, "onChange")),
      0 < t.length &&
        ((l = new Mu("onChange", "change", null, l, n)),
        e.push({ event: l, listeners: t }));
  }
  var oa = null,
    da = null;
  function rm(e) {
    f1(e, 0);
  }
  function Tu(e) {
    var t = ua(e);
    if (yr(t)) return e;
  }
  function wr(e, t) {
    if (e === "change") return t;
  }
  var Yr = !1;
  if (Vt) {
    var sc;
    if (Vt) {
      var rc = "oninput" in document;
      if (!rc) {
        var qr = document.createElement("div");
        qr.setAttribute("oninput", "return;"),
          (rc = typeof qr.oninput == "function");
      }
      sc = rc;
    } else sc = !1;
    Yr = sc && (!document.documentMode || 9 < document.documentMode);
  }
  function Br() {
    oa && (oa.detachEvent("onpropertychange", Xr), (da = oa = null));
  }
  function Xr(e) {
    if (e.propertyName === "value" && Tu(da)) {
      var t = [];
      jr(t, da, e, ec(e)), _r(rm, t);
    }
  }
  function om(e, t, l) {
    e === "focusin"
      ? (Br(), (oa = t), (da = l), oa.attachEvent("onpropertychange", Xr))
      : e === "focusout" && Br();
  }
  function dm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tu(da);
  }
  function hm(e, t) {
    if (e === "click") return Tu(t);
  }
  function mm(e, t) {
    if (e === "input" || e === "change") return Tu(t);
  }
  function gm(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var yt = typeof Object.is == "function" ? Object.is : gm;
  function ha(e, t) {
    if (yt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var u = l[n];
      if (!Zi.call(t, u) || !yt(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Gr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Lr(e, t) {
    var l = Gr(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (((n = e + l.textContent.length), e <= t && n >= t))
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Gr(l);
    }
  }
  function Qr(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Qr(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Zr(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = vu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = vu(e.document);
    }
    return t;
  }
  function oc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function ym(e, t) {
    var l = Zr(t);
    t = e.focusedElem;
    var n = e.selectionRange;
    if (
      l !== t &&
      t &&
      t.ownerDocument &&
      Qr(t.ownerDocument.documentElement, t)
    ) {
      if (n !== null && oc(t)) {
        if (
          ((e = n.start),
          (l = n.end),
          l === void 0 && (l = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(l, t.value.length));
        else if (
          ((l = ((e = t.ownerDocument || document) && e.defaultView) || window),
          l.getSelection)
        ) {
          l = l.getSelection();
          var u = t.textContent.length,
            c = Math.min(n.start, u);
          (n = n.end === void 0 ? c : Math.min(n.end, u)),
            !l.extend && c > n && ((u = n), (n = c), (c = u)),
            (u = Lr(t, c));
          var o = Lr(t, n);
          u &&
            o &&
            (l.rangeCount !== 1 ||
              l.anchorNode !== u.node ||
              l.anchorOffset !== u.offset ||
              l.focusNode !== o.node ||
              l.focusOffset !== o.offset) &&
            ((e = e.createRange()),
            e.setStart(u.node, u.offset),
            l.removeAllRanges(),
            c > n
              ? (l.addRange(e), l.extend(o.node, o.offset))
              : (e.setEnd(o.node, o.offset), l.addRange(e)));
        }
      }
      for (e = [], l = t; (l = l.parentNode); )
        l.nodeType === 1 &&
          e.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (l = e[t]),
          (l.element.scrollLeft = l.left),
          (l.element.scrollTop = l.top);
    }
  }
  var vm = Vt && "documentMode" in document && 11 >= document.documentMode,
    Mn = null,
    dc = null,
    ma = null,
    hc = !1;
  function Vr(e, t, l) {
    var n =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    hc ||
      Mn == null ||
      Mn !== vu(n) ||
      ((n = Mn),
      "selectionStart" in n && oc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (ma && ha(ma, n)) ||
        ((ma = n),
        (n = ii(dc, "onSelect")),
        0 < n.length &&
          ((t = new Mu("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: n }),
          (t.target = Mn))));
  }
  function Ql(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var _n = {
      animationend: Ql("Animation", "AnimationEnd"),
      animationiteration: Ql("Animation", "AnimationIteration"),
      animationstart: Ql("Animation", "AnimationStart"),
      transitionrun: Ql("Transition", "TransitionRun"),
      transitionstart: Ql("Transition", "TransitionStart"),
      transitioncancel: Ql("Transition", "TransitionCancel"),
      transitionend: Ql("Transition", "TransitionEnd"),
    },
    mc = {},
    $r = {};
  Vt &&
    (($r = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete _n.animationend.animation,
      delete _n.animationiteration.animation,
      delete _n.animationstart.animation),
    "TransitionEvent" in window || delete _n.transitionend.transition);
  function Zl(e) {
    if (mc[e]) return mc[e];
    if (!_n[e]) return e;
    var t = _n[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in $r) return (mc[e] = t[l]);
    return e;
  }
  var kr = Zl("animationend"),
    Kr = Zl("animationiteration"),
    Jr = Zl("animationstart"),
    pm = Zl("transitionrun"),
    bm = Zl("transitionstart"),
    Sm = Zl("transitioncancel"),
    Wr = Zl("transitionend"),
    Fr = new Map(),
    Ir =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Ut(e, t) {
    Fr.set(e, t), Gl(t, [e]);
  }
  var Tt = [],
    Tn = 0,
    gc = 0;
  function Eu() {
    for (var e = Tn, t = (gc = Tn = 0); t < e; ) {
      var l = Tt[t];
      Tt[t++] = null;
      var n = Tt[t];
      Tt[t++] = null;
      var u = Tt[t];
      Tt[t++] = null;
      var c = Tt[t];
      if (((Tt[t++] = null), n !== null && u !== null)) {
        var o = n.pending;
        o === null ? (u.next = u) : ((u.next = o.next), (o.next = u)),
          (n.pending = u);
      }
      c !== 0 && Pr(l, u, c);
    }
  }
  function zu(e, t, l, n) {
    (Tt[Tn++] = e),
      (Tt[Tn++] = t),
      (Tt[Tn++] = l),
      (Tt[Tn++] = n),
      (gc |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n);
  }
  function yc(e, t, l, n) {
    return zu(e, t, l, n), Au(e);
  }
  function ml(e, t) {
    return zu(e, null, null, t), Au(e);
  }
  function Pr(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var u = !1, c = e.return; c !== null; )
      (c.childLanes |= l),
        (n = c.alternate),
        n !== null && (n.childLanes |= l),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = c),
        (c = c.return);
    u &&
      t !== null &&
      e.tag === 3 &&
      ((c = e.stateNode),
      (u = 31 - gt(l)),
      (c = c.hiddenUpdates),
      (e = c[u]),
      e === null ? (c[u] = [t]) : e.push(t),
      (t.lane = l | 536870912));
  }
  function Au(e) {
    if (50 < Ba) throw ((Ba = 0), (_f = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var En = {},
    eo = new WeakMap();
  function Et(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = eo.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: J(t) }), eo.set(e, t), t);
    }
    return { value: e, source: t, stack: J(t) };
  }
  var zn = [],
    An = 0,
    Nu = null,
    Ou = 0,
    zt = [],
    At = 0,
    Vl = null,
    kt = 1,
    Kt = "";
  function $l(e, t) {
    (zn[An++] = Ou), (zn[An++] = Nu), (Nu = e), (Ou = t);
  }
  function to(e, t, l) {
    (zt[At++] = kt), (zt[At++] = Kt), (zt[At++] = Vl), (Vl = e);
    var n = kt;
    e = Kt;
    var u = 32 - gt(n) - 1;
    (n &= ~(1 << u)), (l += 1);
    var c = 32 - gt(t) + u;
    if (30 < c) {
      var o = u - (u % 5);
      (c = (n & ((1 << o) - 1)).toString(32)),
        (n >>= o),
        (u -= o),
        (kt = (1 << (32 - gt(t) + u)) | (l << u) | n),
        (Kt = c + e);
    } else (kt = (1 << c) | (l << u) | n), (Kt = e);
  }
  function vc(e) {
    e.return !== null && ($l(e, 1), to(e, 1, 0));
  }
  function pc(e) {
    for (; e === Nu; )
      (Nu = zn[--An]), (zn[An] = null), (Ou = zn[--An]), (zn[An] = null);
    for (; e === Vl; )
      (Vl = zt[--At]),
        (zt[At] = null),
        (Kt = zt[--At]),
        (zt[At] = null),
        (kt = zt[--At]),
        (zt[At] = null);
  }
  var ft = null,
    et = null,
    xe = !1,
    jt = null,
    Bt = !1,
    bc = Error(s(519));
  function kl(e) {
    var t = Error(s(418, ""));
    throw (va(Et(t, e)), bc);
  }
  function lo(e) {
    var t = e.stateNode,
      l = e.type,
      n = e.memoizedProps;
    switch (((t[ut] = e), (t[rt] = n), l)) {
      case "dialog":
        ye("cancel", t), ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ga.length; l++) ye(Ga[l], t);
        break;
      case "source":
        ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ye("error", t), ye("load", t);
        break;
      case "details":
        ye("toggle", t);
        break;
      case "input":
        ye("invalid", t),
          vr(
            t,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0
          ),
          yu(t);
        break;
      case "select":
        ye("invalid", t);
        break;
      case "textarea":
        ye("invalid", t), br(t, n.value, n.defaultValue, n.children), yu(t);
    }
    (l = n.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      n.suppressHydrationWarning === !0 ||
      d1(t.textContent, l)
        ? (n.popover != null && (ye("beforetoggle", t), ye("toggle", t)),
          n.onScroll != null && ye("scroll", t),
          n.onScrollEnd != null && ye("scrollend", t),
          n.onClick != null && (t.onclick = ci),
          (t = !0))
        : (t = !1),
      t || kl(e);
  }
  function no(e) {
    for (ft = e.return; ft; )
      switch (ft.tag) {
        case 3:
        case 27:
          Bt = !0;
          return;
        case 5:
        case 13:
          Bt = !1;
          return;
        default:
          ft = ft.return;
      }
  }
  function ga(e) {
    if (e !== ft) return !1;
    if (!xe) return no(e), (xe = !0), !1;
    var t = !1,
      l;
    if (
      ((l = e.tag !== 3 && e.tag !== 27) &&
        ((l = e.tag === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || Xf(e.type, e.memoizedProps))),
        (l = !l)),
      l && (t = !0),
      t && et && kl(e),
      no(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                et = Yt(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        et = null;
      }
    } else et = ft ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ya() {
    (et = ft = null), (xe = !1);
  }
  function va(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  var pa = Error(s(460)),
    ao = Error(s(474)),
    Sc = { then: function () {} };
  function uo(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Ru() {}
  function io(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Ru, Ru), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === pa ? Error(s(483)) : e);
      default:
        if (typeof t.status == "string") t.then(Ru, Ru);
        else {
          if (((e = De), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = n);
                }
              },
              function (n) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = n);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === pa ? Error(s(483)) : e);
        }
        throw ((ba = t), pa);
    }
  }
  var ba = null;
  function co() {
    if (ba === null) throw Error(s(459));
    var e = ba;
    return (ba = null), e;
  }
  var Nn = null,
    Sa = 0;
  function Cu(e) {
    var t = Sa;
    return (Sa += 1), Nn === null && (Nn = []), io(Nn, e, t);
  }
  function xa(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Du(e, t) {
    throw t.$$typeof === h
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function fo(e) {
    var t = e._init;
    return t(e._payload);
  }
  function so(e) {
    function t(M, p) {
      if (e) {
        var _ = M.deletions;
        _ === null ? ((M.deletions = [p]), (M.flags |= 16)) : _.push(p);
      }
    }
    function l(M, p) {
      if (!e) return null;
      for (; p !== null; ) t(M, p), (p = p.sibling);
      return null;
    }
    function n(M) {
      for (var p = new Map(); M !== null; )
        M.key !== null ? p.set(M.key, M) : p.set(M.index, M), (M = M.sibling);
      return p;
    }
    function u(M, p) {
      return (M = zl(M, p)), (M.index = 0), (M.sibling = null), M;
    }
    function c(M, p, _) {
      return (
        (M.index = _),
        e
          ? ((_ = M.alternate),
            _ !== null
              ? ((_ = _.index), _ < p ? ((M.flags |= 33554434), p) : _)
              : ((M.flags |= 33554434), p))
          : ((M.flags |= 1048576), p)
      );
    }
    function o(M) {
      return e && M.alternate === null && (M.flags |= 33554434), M;
    }
    function d(M, p, _, R) {
      return p === null || p.tag !== 6
        ? ((p = gf(_, M.mode, R)), (p.return = M), p)
        : ((p = u(p, _)), (p.return = M), p);
    }
    function g(M, p, _, R) {
      var Q = _.type;
      return Q === b
        ? A(M, p, _.props.children, R, _.key)
        : p !== null &&
          (p.elementType === Q ||
            (typeof Q == "object" &&
              Q !== null &&
              Q.$$typeof === ne &&
              fo(Q) === p.type))
        ? ((p = u(p, _.props)), xa(p, _), (p.return = M), p)
        : ((p = Wu(_.type, _.key, _.props, null, M.mode, R)),
          xa(p, _),
          (p.return = M),
          p);
    }
    function S(M, p, _, R) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== _.containerInfo ||
        p.stateNode.implementation !== _.implementation
        ? ((p = yf(_, M.mode, R)), (p.return = M), p)
        : ((p = u(p, _.children || [])), (p.return = M), p);
    }
    function A(M, p, _, R, Q) {
      return p === null || p.tag !== 7
        ? ((p = nn(_, M.mode, R, Q)), (p.return = M), p)
        : ((p = u(p, _)), (p.return = M), p);
    }
    function U(M, p, _) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return (p = gf("" + p, M.mode, _)), (p.return = M), p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case m:
            return (
              (_ = Wu(p.type, p.key, p.props, null, M.mode, _)),
              xa(_, p),
              (_.return = M),
              _
            );
          case x:
            return (p = yf(p, M.mode, _)), (p.return = M), p;
          case ne:
            var R = p._init;
            return (p = R(p._payload)), U(M, p, _);
        }
        if (O(p) || be(p))
          return (p = nn(p, M.mode, _, null)), (p.return = M), p;
        if (typeof p.then == "function") return U(M, Cu(p), _);
        if (p.$$typeof === B) return U(M, ku(M, p), _);
        Du(M, p);
      }
      return null;
    }
    function E(M, p, _, R) {
      var Q = p !== null ? p.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return Q !== null ? null : d(M, p, "" + _, R);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case m:
            return _.key === Q ? g(M, p, _, R) : null;
          case x:
            return _.key === Q ? S(M, p, _, R) : null;
          case ne:
            return (Q = _._init), (_ = Q(_._payload)), E(M, p, _, R);
        }
        if (O(_) || be(_)) return Q !== null ? null : A(M, p, _, R, null);
        if (typeof _.then == "function") return E(M, p, Cu(_), R);
        if (_.$$typeof === B) return E(M, p, ku(M, _), R);
        Du(M, _);
      }
      return null;
    }
    function z(M, p, _, R, Q) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return (M = M.get(_) || null), d(p, M, "" + R, Q);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case m:
            return (
              (M = M.get(R.key === null ? _ : R.key) || null), g(p, M, R, Q)
            );
          case x:
            return (
              (M = M.get(R.key === null ? _ : R.key) || null), S(p, M, R, Q)
            );
          case ne:
            var oe = R._init;
            return (R = oe(R._payload)), z(M, p, _, R, Q);
        }
        if (O(R) || be(R)) return (M = M.get(_) || null), A(p, M, R, Q, null);
        if (typeof R.then == "function") return z(M, p, _, Cu(R), Q);
        if (R.$$typeof === B) return z(M, p, _, ku(p, R), Q);
        Du(p, R);
      }
      return null;
    }
    function $(M, p, _, R) {
      for (
        var Q = null, oe = null, W = p, P = (p = 0), Ie = null;
        W !== null && P < _.length;
        P++
      ) {
        W.index > P ? ((Ie = W), (W = null)) : (Ie = W.sibling);
        var Me = E(M, W, _[P], R);
        if (Me === null) {
          W === null && (W = Ie);
          break;
        }
        e && W && Me.alternate === null && t(M, W),
          (p = c(Me, p, P)),
          oe === null ? (Q = Me) : (oe.sibling = Me),
          (oe = Me),
          (W = Ie);
      }
      if (P === _.length) return l(M, W), xe && $l(M, P), Q;
      if (W === null) {
        for (; P < _.length; P++)
          (W = U(M, _[P], R)),
            W !== null &&
              ((p = c(W, p, P)),
              oe === null ? (Q = W) : (oe.sibling = W),
              (oe = W));
        return xe && $l(M, P), Q;
      }
      for (W = n(W); P < _.length; P++)
        (Ie = z(W, M, P, _[P], R)),
          Ie !== null &&
            (e &&
              Ie.alternate !== null &&
              W.delete(Ie.key === null ? P : Ie.key),
            (p = c(Ie, p, P)),
            oe === null ? (Q = Ie) : (oe.sibling = Ie),
            (oe = Ie));
      return (
        e &&
          W.forEach(function (Hl) {
            return t(M, Hl);
          }),
        xe && $l(M, P),
        Q
      );
    }
    function ae(M, p, _, R) {
      if (_ == null) throw Error(s(151));
      for (
        var Q = null, oe = null, W = p, P = (p = 0), Ie = null, Me = _.next();
        W !== null && !Me.done;
        P++, Me = _.next()
      ) {
        W.index > P ? ((Ie = W), (W = null)) : (Ie = W.sibling);
        var Hl = E(M, W, Me.value, R);
        if (Hl === null) {
          W === null && (W = Ie);
          break;
        }
        e && W && Hl.alternate === null && t(M, W),
          (p = c(Hl, p, P)),
          oe === null ? (Q = Hl) : (oe.sibling = Hl),
          (oe = Hl),
          (W = Ie);
      }
      if (Me.done) return l(M, W), xe && $l(M, P), Q;
      if (W === null) {
        for (; !Me.done; P++, Me = _.next())
          (Me = U(M, Me.value, R)),
            Me !== null &&
              ((p = c(Me, p, P)),
              oe === null ? (Q = Me) : (oe.sibling = Me),
              (oe = Me));
        return xe && $l(M, P), Q;
      }
      for (W = n(W); !Me.done; P++, Me = _.next())
        (Me = z(W, M, P, Me.value, R)),
          Me !== null &&
            (e &&
              Me.alternate !== null &&
              W.delete(Me.key === null ? P : Me.key),
            (p = c(Me, p, P)),
            oe === null ? (Q = Me) : (oe.sibling = Me),
            (oe = Me));
      return (
        e &&
          W.forEach(function (Ug) {
            return t(M, Ug);
          }),
        xe && $l(M, P),
        Q
      );
    }
    function Xe(M, p, _, R) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === b &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case m:
            e: {
              for (var Q = _.key; p !== null; ) {
                if (p.key === Q) {
                  if (((Q = _.type), Q === b)) {
                    if (p.tag === 7) {
                      l(M, p.sibling),
                        (R = u(p, _.props.children)),
                        (R.return = M),
                        (M = R);
                      break e;
                    }
                  } else if (
                    p.elementType === Q ||
                    (typeof Q == "object" &&
                      Q !== null &&
                      Q.$$typeof === ne &&
                      fo(Q) === p.type)
                  ) {
                    l(M, p.sibling),
                      (R = u(p, _.props)),
                      xa(R, _),
                      (R.return = M),
                      (M = R);
                    break e;
                  }
                  l(M, p);
                  break;
                } else t(M, p);
                p = p.sibling;
              }
              _.type === b
                ? ((R = nn(_.props.children, M.mode, R, _.key)),
                  (R.return = M),
                  (M = R))
                : ((R = Wu(_.type, _.key, _.props, null, M.mode, R)),
                  xa(R, _),
                  (R.return = M),
                  (M = R));
            }
            return o(M);
          case x:
            e: {
              for (Q = _.key; p !== null; ) {
                if (p.key === Q)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === _.containerInfo &&
                    p.stateNode.implementation === _.implementation
                  ) {
                    l(M, p.sibling),
                      (R = u(p, _.children || [])),
                      (R.return = M),
                      (M = R);
                    break e;
                  } else {
                    l(M, p);
                    break;
                  }
                else t(M, p);
                p = p.sibling;
              }
              (R = yf(_, M.mode, R)), (R.return = M), (M = R);
            }
            return o(M);
          case ne:
            return (Q = _._init), (_ = Q(_._payload)), Xe(M, p, _, R);
        }
        if (O(_)) return $(M, p, _, R);
        if (be(_)) {
          if (((Q = be(_)), typeof Q != "function")) throw Error(s(150));
          return (_ = Q.call(_)), ae(M, p, _, R);
        }
        if (typeof _.then == "function") return Xe(M, p, Cu(_), R);
        if (_.$$typeof === B) return Xe(M, p, ku(M, _), R);
        Du(M, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          p !== null && p.tag === 6
            ? (l(M, p.sibling), (R = u(p, _)), (R.return = M), (M = R))
            : (l(M, p), (R = gf(_, M.mode, R)), (R.return = M), (M = R)),
          o(M))
        : l(M, p);
    }
    return function (M, p, _, R) {
      try {
        Sa = 0;
        var Q = Xe(M, p, _, R);
        return (Nn = null), Q;
      } catch (W) {
        if (W === pa) throw W;
        var oe = Ct(29, W, null, M.mode);
        return (oe.lanes = R), (oe.return = M), oe;
      } finally {
      }
    };
  }
  var Kl = so(!0),
    ro = so(!1),
    On = he(null),
    Hu = he(0);
  function oo(e, t) {
    (e = ul), je(Hu, e), je(On, t), (ul = e | t.baseLanes);
  }
  function xc() {
    je(Hu, ul), je(On, On.current);
  }
  function Mc() {
    (ul = Hu.current), Oe(On), Oe(Hu);
  }
  var Nt = he(null),
    Xt = null;
  function gl(e) {
    var t = e.alternate;
    je($e, $e.current & 1),
      je(Nt, e),
      Xt === null &&
        (t === null || On.current !== null || t.memoizedState !== null) &&
        (Xt = e);
  }
  function ho(e) {
    if (e.tag === 22) {
      if ((je($e, $e.current), je(Nt, e), Xt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Xt = e);
      }
    } else yl();
  }
  function yl() {
    je($e, $e.current), je(Nt, Nt.current);
  }
  function Jt(e) {
    Oe(Nt), Xt === e && (Xt = null), Oe($e);
  }
  var $e = he(0);
  function Uu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var xm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    Mm = a.unstable_scheduleCallback,
    _m = a.unstable_NormalPriority,
    ke = {
      $$typeof: B,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function _c() {
    return { controller: new xm(), data: new Map(), refCount: 0 };
  }
  function Ma(e) {
    e.refCount--,
      e.refCount === 0 &&
        Mm(_m, function () {
          e.controller.abort();
        });
  }
  var _a = null,
    Tc = 0,
    Rn = 0,
    Cn = null;
  function Tm(e, t) {
    if (_a === null) {
      var l = (_a = []);
      (Tc = 0),
        (Rn = Cf()),
        (Cn = {
          status: "pending",
          value: void 0,
          then: function (n) {
            l.push(n);
          },
        });
    }
    return Tc++, t.then(mo, mo), t;
  }
  function mo() {
    if (--Tc === 0 && _a !== null) {
      Cn !== null && (Cn.status = "fulfilled");
      var e = _a;
      (_a = null), (Rn = 0), (Cn = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Em(e, t) {
    var l = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      e.then(
        function () {
          (n.status = "fulfilled"), (n.value = t);
          for (var u = 0; u < l.length; u++) (0, l[u])(t);
        },
        function (u) {
          for (n.status = "rejected", n.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        }
      ),
      n
    );
  }
  var go = L.S;
  L.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Tm(e, t),
      go !== null && go(e, t);
  };
  var Jl = he(null);
  function Ec() {
    var e = Jl.current;
    return e !== null ? e : De.pooledCache;
  }
  function ju(e, t) {
    t === null ? je(Jl, Jl.current) : je(Jl, t.pool);
  }
  function yo() {
    var e = Ec();
    return e === null ? null : { parent: ke._currentValue, pool: e };
  }
  var vl = 0,
    re = null,
    Ee = null,
    Le = null,
    wu = !1,
    Dn = !1,
    Wl = !1,
    Yu = 0,
    Ta = 0,
    Hn = null,
    zm = 0;
  function Ge() {
    throw Error(s(321));
  }
  function zc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!yt(e[l], t[l])) return !1;
    return !0;
  }
  function Ac(e, t, l, n, u, c) {
    return (
      (vl = c),
      (re = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? Fl : pl),
      (Wl = !1),
      (c = l(n, u)),
      (Wl = !1),
      Dn && (c = po(t, l, n, u)),
      vo(e),
      c
    );
  }
  function vo(e) {
    L.H = Gt;
    var t = Ee !== null && Ee.next !== null;
    if (((vl = 0), (Le = Ee = re = null), (wu = !1), (Ta = 0), (Hn = null), t))
      throw Error(s(300));
    e === null ||
      We ||
      ((e = e.dependencies), e !== null && $u(e) && (We = !0));
  }
  function po(e, t, l, n) {
    re = e;
    var u = 0;
    do {
      if ((Dn && (Hn = null), (Ta = 0), (Dn = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (Le = Ee = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        (c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0);
      }
      (L.H = Il), (c = t(l, n));
    } while (Dn);
    return c;
  }
  function Am() {
    var e = L.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ea(t) : t),
      (e = e.useState()[0]),
      (Ee !== null ? Ee.memoizedState : null) !== e && (re.flags |= 1024),
      t
    );
  }
  function Nc() {
    var e = Yu !== 0;
    return (Yu = 0), e;
  }
  function Oc(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function Rc(e) {
    if (wu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      wu = !1;
    }
    (vl = 0), (Le = Ee = re = null), (Dn = !1), (Ta = Yu = 0), (Hn = null);
  }
  function dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Le === null ? (re.memoizedState = Le = e) : (Le = Le.next = e), Le;
  }
  function Qe() {
    if (Ee === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Le === null ? re.memoizedState : Le.next;
    if (t !== null) (Le = t), (Ee = e);
    else {
      if (e === null)
        throw re.alternate === null ? Error(s(467)) : Error(s(310));
      (Ee = e),
        (e = {
          memoizedState: Ee.memoizedState,
          baseState: Ee.baseState,
          baseQueue: Ee.baseQueue,
          queue: Ee.queue,
          next: null,
        }),
        Le === null ? (re.memoizedState = Le = e) : (Le = Le.next = e);
    }
    return Le;
  }
  var qu;
  qu = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Ea(e) {
    var t = Ta;
    return (
      (Ta += 1),
      Hn === null && (Hn = []),
      (e = io(Hn, e, t)),
      (t = re),
      (Le === null ? t.memoizedState : Le.next) === null &&
        ((t = t.alternate),
        (L.H = t === null || t.memoizedState === null ? Fl : pl)),
      e
    );
  }
  function Bu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ea(e);
      if (e.$$typeof === B) return it(e);
    }
    throw Error(s(438, String(e)));
  }
  function Cc(e) {
    var t = null,
      l = re.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var n = re.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = qu()), (re.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = ge;
    return t.index++, l;
  }
  function Wt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xu(e) {
    var t = Qe();
    return Dc(t, Ee, e);
  }
  function Dc(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = l;
    var u = e.baseQueue,
      c = n.pending;
    if (c !== null) {
      if (u !== null) {
        var o = u.next;
        (u.next = c.next), (c.next = o);
      }
      (t.baseQueue = u = c), (n.pending = null);
    }
    if (((c = e.baseState), u === null)) e.memoizedState = c;
    else {
      t = u.next;
      var d = (o = null),
        g = null,
        S = t,
        A = !1;
      do {
        var U = S.lane & -536870913;
        if (U !== S.lane ? (ve & U) === U : (vl & U) === U) {
          var E = S.revertLane;
          if (E === 0)
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: S.action,
                  hasEagerState: S.hasEagerState,
                  eagerState: S.eagerState,
                  next: null,
                }),
              U === Rn && (A = !0);
          else if ((vl & E) === E) {
            (S = S.next), E === Rn && (A = !0);
            continue;
          } else
            (U = {
              lane: 0,
              revertLane: S.revertLane,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null,
            }),
              g === null ? ((d = g = U), (o = c)) : (g = g.next = U),
              (re.lanes |= E),
              (Al |= E);
          (U = S.action),
            Wl && l(c, U),
            (c = S.hasEagerState ? S.eagerState : l(c, U));
        } else
          (E = {
            lane: U,
            revertLane: S.revertLane,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          }),
            g === null ? ((d = g = E), (o = c)) : (g = g.next = E),
            (re.lanes |= U),
            (Al |= U);
        S = S.next;
      } while (S !== null && S !== t);
      if (
        (g === null ? (o = c) : (g.next = d),
        !yt(c, e.memoizedState) && ((We = !0), A && ((l = Cn), l !== null)))
      )
        throw l;
      (e.memoizedState = c),
        (e.baseState = o),
        (e.baseQueue = g),
        (n.lastRenderedState = c);
    }
    return u === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Hc(e) {
    var t = Qe(),
      l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch,
      u = l.pending,
      c = t.memoizedState;
    if (u !== null) {
      l.pending = null;
      var o = (u = u.next);
      do (c = e(c, o.action)), (o = o.next);
      while (o !== u);
      yt(c, t.memoizedState) || (We = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (l.lastRenderedState = c);
    }
    return [c, n];
  }
  function bo(e, t, l) {
    var n = re,
      u = Qe(),
      c = xe;
    if (c) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var o = !yt((Ee || u).memoizedState, l);
    if (
      (o && ((u.memoizedState = l), (We = !0)),
      (u = u.queue),
      wc(Mo.bind(null, n, u, e), [e]),
      u.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Un(9, xo.bind(null, n, u, l, t), { destroy: void 0 }, null),
        De === null)
      )
        throw Error(s(349));
      c || vl & 60 || So(n, t, l);
    }
    return l;
  }
  function So(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = re.updateQueue),
      t === null
        ? ((t = qu()), (re.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function xo(e, t, l, n) {
    (t.value = l), (t.getSnapshot = n), _o(t) && To(e);
  }
  function Mo(e, t, l) {
    return l(function () {
      _o(t) && To(e);
    });
  }
  function _o(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !yt(e, l);
    } catch {
      return !0;
    }
  }
  function To(e) {
    var t = ml(e, 2);
    t !== null && st(t, e, 2);
  }
  function Uc(e) {
    var t = dt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Wl)) {
        ol(!0);
        try {
          l();
        } finally {
          ol(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Eo(e, t, l, n) {
    return (e.baseState = l), Dc(e, Ee, typeof n == "function" ? n : Wt);
  }
  function Nm(e, t, l, n, u) {
    if (Qu(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          c.listeners.push(o);
        },
      };
      L.T !== null ? l(!0) : (c.isTransition = !1),
        n(c),
        (l = t.pending),
        l === null
          ? ((c.next = t.pending = c), zo(t, c))
          : ((c.next = l.next), (t.pending = l.next = c));
    }
  }
  function zo(e, t) {
    var l = t.action,
      n = t.payload,
      u = e.state;
    if (t.isTransition) {
      var c = L.T,
        o = {};
      L.T = o;
      try {
        var d = l(u, n),
          g = L.S;
        g !== null && g(o, d), Ao(e, t, d);
      } catch (S) {
        jc(e, t, S);
      } finally {
        L.T = c;
      }
    } else
      try {
        (c = l(u, n)), Ao(e, t, c);
      } catch (S) {
        jc(e, t, S);
      }
  }
  function Ao(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (n) {
            No(e, t, n);
          },
          function (n) {
            return jc(e, t, n);
          }
        )
      : No(e, t, l);
  }
  function No(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      Oo(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), zo(e, l)));
  }
  function jc(e, t, l) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do (t.status = "rejected"), (t.reason = l), Oo(t), (t = t.next);
      while (t !== n);
    }
    e.action = null;
  }
  function Oo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ro(e, t) {
    return t;
  }
  function Co(e, t) {
    if (xe) {
      var l = De.formState;
      if (l !== null) {
        e: {
          var n = re;
          if (xe) {
            if (et) {
              t: {
                for (var u = et, c = Bt; u.nodeType !== 8; ) {
                  if (!c) {
                    u = null;
                    break t;
                  }
                  if (((u = Yt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (c = u.data), (u = c === "F!" || c === "F" ? u : null);
              }
              if (u) {
                (et = Yt(u.nextSibling)), (n = u.data === "F!");
                break e;
              }
            }
            kl(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return (
      (l = dt()),
      (l.memoizedState = l.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ro,
        lastRenderedState: t,
      }),
      (l.queue = n),
      (l = Jo.bind(null, re, n)),
      (n.dispatch = l),
      (n = Uc(!1)),
      (c = Gc.bind(null, re, !1, n.queue)),
      (n = dt()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = u),
      (l = Nm.bind(null, re, u, c, l)),
      (u.dispatch = l),
      (n.memoizedState = e),
      [t, l, !1]
    );
  }
  function Do(e) {
    var t = Qe();
    return Ho(t, Ee, e);
  }
  function Ho(e, t, l) {
    (t = Dc(e, t, Ro)[0]),
      (e = Xu(Wt)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? Ea(t)
          : t);
    var n = Qe(),
      u = n.queue,
      c = u.dispatch;
    return (
      l !== n.memoizedState &&
        ((re.flags |= 2048),
        Un(9, Om.bind(null, u, l), { destroy: void 0 }, null)),
      [t, c, e]
    );
  }
  function Om(e, t) {
    e.action = t;
  }
  function Uo(e) {
    var t = Qe(),
      l = Ee;
    if (l !== null) return Ho(t, l, e);
    Qe(), (t = t.memoizedState), (l = Qe());
    var n = l.queue.dispatch;
    return (l.memoizedState = e), [t, n, !1];
  }
  function Un(e, t, l, n) {
    return (
      (e = { tag: e, create: t, inst: l, deps: n, next: null }),
      (t = re.updateQueue),
      t === null && ((t = qu()), (re.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((n = l.next), (l.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function jo() {
    return Qe().memoizedState;
  }
  function Gu(e, t, l, n) {
    var u = dt();
    (re.flags |= e),
      (u.memoizedState = Un(
        1 | t,
        l,
        { destroy: void 0 },
        n === void 0 ? null : n
      ));
  }
  function Lu(e, t, l, n) {
    var u = Qe();
    n = n === void 0 ? null : n;
    var c = u.memoizedState.inst;
    Ee !== null && n !== null && zc(n, Ee.memoizedState.deps)
      ? (u.memoizedState = Un(t, l, c, n))
      : ((re.flags |= e), (u.memoizedState = Un(1 | t, l, c, n)));
  }
  function wo(e, t) {
    Gu(8390656, 8, e, t);
  }
  function wc(e, t) {
    Lu(2048, 8, e, t);
  }
  function Yo(e, t) {
    return Lu(4, 2, e, t);
  }
  function qo(e, t) {
    return Lu(4, 4, e, t);
  }
  function Bo(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Xo(e, t, l) {
    (l = l != null ? l.concat([e]) : null), Lu(4, 4, Bo.bind(null, t, e), l);
  }
  function Yc() {}
  function Go(e, t) {
    var l = Qe();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && zc(t, n[1]) ? n[0] : ((l.memoizedState = [e, t]), e);
  }
  function Lo(e, t) {
    var l = Qe();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && zc(t, n[1])) return n[0];
    if (((n = e()), Wl)) {
      ol(!0);
      try {
        e();
      } finally {
        ol(!1);
      }
    }
    return (l.memoizedState = [n, t]), n;
  }
  function qc(e, t, l) {
    return l === void 0 || vl & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Z0()), (re.lanes |= e), (Al |= e), l);
  }
  function Qo(e, t, l, n) {
    return yt(l, t)
      ? l
      : On.current !== null
      ? ((e = qc(e, l, n)), yt(e, t) || (We = !0), e)
      : vl & 42
      ? ((e = Z0()), (re.lanes |= e), (Al |= e), t)
      : ((We = !0), (e.memoizedState = l));
  }
  function Zo(e, t, l, n, u) {
    var c = N.p;
    N.p = c !== 0 && 8 > c ? c : 8;
    var o = L.T,
      d = {};
    (L.T = d), Gc(e, !1, t, l);
    try {
      var g = u(),
        S = L.S;
      if (
        (S !== null && S(d, g),
        g !== null && typeof g == "object" && typeof g.then == "function")
      ) {
        var A = Em(g, n);
        za(e, t, A, St(e));
      } else za(e, t, n, St(e));
    } catch (U) {
      za(e, t, { then: function () {}, status: "rejected", reason: U }, St());
    } finally {
      (N.p = c), (L.T = o);
    }
  }
  function Rm() {}
  function Bc(e, t, l, n) {
    if (e.tag !== 5) throw Error(s(476));
    var u = Vo(e).queue;
    Zo(
      e,
      u,
      t,
      Z,
      l === null
        ? Rm
        : function () {
            return $o(e), l(n);
          }
    );
  }
  function Vo(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: Z,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Wt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function $o(e) {
    var t = Vo(e).next.queue;
    za(e, t, {}, St());
  }
  function Xc() {
    return it($a);
  }
  function ko() {
    return Qe().memoizedState;
  }
  function Ko() {
    return Qe().memoizedState;
  }
  function Cm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = St();
          e = xl(l);
          var n = Ml(t, e, l);
          n !== null && (st(n, t, l), Oa(n, t, l)),
            (t = { cache: _c() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Dm(e, t, l) {
    var n = St();
    (l = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Qu(e)
        ? Wo(t, l)
        : ((l = yc(e, t, l, n)), l !== null && (st(l, e, n), Fo(l, t, n)));
  }
  function Jo(e, t, l) {
    var n = St();
    za(e, t, l, n);
  }
  function za(e, t, l, n) {
    var u = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Qu(e)) Wo(t, u);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var o = t.lastRenderedState,
            d = c(o, l);
          if (((u.hasEagerState = !0), (u.eagerState = d), yt(d, o)))
            return zu(e, t, u, 0), De === null && Eu(), !1;
        } catch {
        } finally {
        }
      if (((l = yc(e, t, u, n)), l !== null))
        return st(l, e, n), Fo(l, t, n), !0;
    }
    return !1;
  }
  function Gc(e, t, l, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: Cf(),
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Qu(e))
    ) {
      if (t) throw Error(s(479));
    } else (t = yc(e, l, n, 2)), t !== null && st(t, e, 2);
  }
  function Qu(e) {
    var t = e.alternate;
    return e === re || (t !== null && t === re);
  }
  function Wo(e, t) {
    Dn = wu = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function Fo(e, t, l) {
    if (l & 4194176) {
      var n = t.lanes;
      (n &= e.pendingLanes), (l |= n), (t.lanes = l), cr(e, l);
    }
  }
  var Gt = {
    readContext: it,
    use: Bu,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
  };
  (Gt.useCacheRefresh = Ge),
    (Gt.useMemoCache = Ge),
    (Gt.useHostTransitionStatus = Ge),
    (Gt.useFormState = Ge),
    (Gt.useActionState = Ge),
    (Gt.useOptimistic = Ge);
  var Fl = {
    readContext: it,
    use: Bu,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: wo,
    useImperativeHandle: function (e, t, l) {
      (l = l != null ? l.concat([e]) : null),
        Gu(4194308, 4, Bo.bind(null, t, e), l);
    },
    useLayoutEffect: function (e, t) {
      return Gu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Gu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var l = dt();
      t = t === void 0 ? null : t;
      var n = e();
      if (Wl) {
        ol(!0);
        try {
          e();
        } finally {
          ol(!1);
        }
      }
      return (l.memoizedState = [n, t]), n;
    },
    useReducer: function (e, t, l) {
      var n = dt();
      if (l !== void 0) {
        var u = l(t);
        if (Wl) {
          ol(!0);
          try {
            l(t);
          } finally {
            ol(!1);
          }
        }
      } else u = t;
      return (
        (n.memoizedState = n.baseState = u),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: u,
        }),
        (n.queue = e),
        (e = e.dispatch = Dm.bind(null, re, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = Uc(e);
      var t = e.queue,
        l = Jo.bind(null, re, t);
      return (t.dispatch = l), [e.memoizedState, l];
    },
    useDebugValue: Yc,
    useDeferredValue: function (e, t) {
      var l = dt();
      return qc(l, e, t);
    },
    useTransition: function () {
      var e = Uc(!1);
      return (
        (e = Zo.bind(null, re, e.queue, !0, !1)),
        (dt().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, l) {
      var n = re,
        u = dt();
      if (xe) {
        if (l === void 0) throw Error(s(407));
        l = l();
      } else {
        if (((l = t()), De === null)) throw Error(s(349));
        ve & 60 || So(n, t, l);
      }
      u.memoizedState = l;
      var c = { value: l, getSnapshot: t };
      return (
        (u.queue = c),
        wo(Mo.bind(null, n, c, e), [e]),
        (n.flags |= 2048),
        Un(9, xo.bind(null, n, c, l, t), { destroy: void 0 }, null),
        l
      );
    },
    useId: function () {
      var e = dt(),
        t = De.identifierPrefix;
      if (xe) {
        var l = Kt,
          n = kt;
        (l = (n & ~(1 << (32 - gt(n) - 1))).toString(32) + l),
          (t = ":" + t + "R" + l),
          (l = Yu++),
          0 < l && (t += "H" + l.toString(32)),
          (t += ":");
      } else (l = zm++), (t = ":" + t + "r" + l.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (dt().memoizedState = Cm.bind(null, re));
    },
  };
  (Fl.useMemoCache = Cc),
    (Fl.useHostTransitionStatus = Xc),
    (Fl.useFormState = Co),
    (Fl.useActionState = Co),
    (Fl.useOptimistic = function (e) {
      var t = dt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = l), (t = Gc.bind(null, re, !0, l)), (l.dispatch = t), [e, t]
      );
    });
  var pl = {
    readContext: it,
    use: Bu,
    useCallback: Go,
    useContext: it,
    useEffect: wc,
    useImperativeHandle: Xo,
    useInsertionEffect: Yo,
    useLayoutEffect: qo,
    useMemo: Lo,
    useReducer: Xu,
    useRef: jo,
    useState: function () {
      return Xu(Wt);
    },
    useDebugValue: Yc,
    useDeferredValue: function (e, t) {
      var l = Qe();
      return Qo(l, Ee.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Xu(Wt)[0],
        t = Qe().memoizedState;
      return [typeof e == "boolean" ? e : Ea(e), t];
    },
    useSyncExternalStore: bo,
    useId: ko,
  };
  (pl.useCacheRefresh = Ko),
    (pl.useMemoCache = Cc),
    (pl.useHostTransitionStatus = Xc),
    (pl.useFormState = Do),
    (pl.useActionState = Do),
    (pl.useOptimistic = function (e, t) {
      var l = Qe();
      return Eo(l, Ee, e, t);
    });
  var Il = {
    readContext: it,
    use: Bu,
    useCallback: Go,
    useContext: it,
    useEffect: wc,
    useImperativeHandle: Xo,
    useInsertionEffect: Yo,
    useLayoutEffect: qo,
    useMemo: Lo,
    useReducer: Hc,
    useRef: jo,
    useState: function () {
      return Hc(Wt);
    },
    useDebugValue: Yc,
    useDeferredValue: function (e, t) {
      var l = Qe();
      return Ee === null ? qc(l, e, t) : Qo(l, Ee.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Hc(Wt)[0],
        t = Qe().memoizedState;
      return [typeof e == "boolean" ? e : Ea(e), t];
    },
    useSyncExternalStore: bo,
    useId: ko,
  };
  (Il.useCacheRefresh = Ko),
    (Il.useMemoCache = Cc),
    (Il.useHostTransitionStatus = Xc),
    (Il.useFormState = Uo),
    (Il.useActionState = Uo),
    (Il.useOptimistic = function (e, t) {
      var l = Qe();
      return Ee !== null
        ? Eo(l, Ee, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    });
  function Lc(e, t, l, n) {
    (t = e.memoizedState),
      (l = l(n, t)),
      (l = l == null ? t : V({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Qc = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? k(e) === e : !1;
    },
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var n = St(),
        u = xl(n);
      (u.payload = t),
        l != null && (u.callback = l),
        (t = Ml(e, u, n)),
        t !== null && (st(t, e, n), Oa(t, e, n));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var n = St(),
        u = xl(n);
      (u.tag = 1),
        (u.payload = t),
        l != null && (u.callback = l),
        (t = Ml(e, u, n)),
        t !== null && (st(t, e, n), Oa(t, e, n));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = St(),
        n = xl(l);
      (n.tag = 2),
        t != null && (n.callback = t),
        (t = Ml(e, n, l)),
        t !== null && (st(t, e, l), Oa(t, e, l));
    },
  };
  function Io(e, t, l, n, u, c, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, c, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ha(l, n) || !ha(u, c)
        : !0
    );
  }
  function Po(e, t, l, n) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, n),
      t.state !== e && Qc.enqueueReplaceState(t, t.state, null);
  }
  function Pl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t) n !== "ref" && (l[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = V({}, l));
      for (var u in e) l[u] === void 0 && (l[u] = e[u]);
    }
    return l;
  }
  var Zu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function e0(e) {
    Zu(e);
  }
  function t0(e) {
    console.error(e);
  }
  function l0(e) {
    Zu(e);
  }
  function Vu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function n0(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Zc(e, t, l) {
    return (
      (l = xl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Vu(e, t);
      }),
      l
    );
  }
  function a0(e) {
    return (e = xl(e)), (e.tag = 3), e;
  }
  function u0(e, t, l, n) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = n.value;
      (e.payload = function () {
        return u(c);
      }),
        (e.callback = function () {
          n0(t, l, n);
        });
    }
    var o = l.stateNode;
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (e.callback = function () {
        n0(t, l, n),
          typeof u != "function" &&
            (Nl === null ? (Nl = new Set([this])) : Nl.add(this));
        var d = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: d !== null ? d : "",
        });
      });
  }
  function Hm(e, t, l, n, u) {
    if (
      ((l.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && Na(t, l, u, !0),
        (l = Nt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Xt === null ? zf() : l.alternate === null && Be === 0 && (Be = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              n === Sc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([n])) : t.add(n),
                  Nf(e, n, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              n === Sc
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([n])) : l.add(n)),
                  Nf(e, n, u)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return Nf(e, n, u), zf(), !1;
    }
    if (xe)
      return (
        (t = Nt.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            n !== bc && ((e = Error(s(422), { cause: n })), va(Et(e, l))))
          : (n !== bc && ((t = Error(s(423), { cause: n })), va(Et(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (n = Et(n, l)),
            (u = Zc(e.stateNode, n, u)),
            uf(e, u),
            Be !== 4 && (Be = 2)),
        !1
      );
    var c = Error(s(520), { cause: n });
    if (
      ((c = Et(c, l)),
      Ya === null ? (Ya = [c]) : Ya.push(c),
      Be !== 4 && (Be = 2),
      t === null)
    )
      return !0;
    (n = Et(n, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = u & -u),
            (l.lanes |= e),
            (e = Zc(l.stateNode, n, e)),
            uf(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (c = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Nl === null || !Nl.has(c)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = a0(u)),
              u0(u, e, l, n),
              uf(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var i0 = Error(s(461)),
    We = !1;
  function tt(e, t, l, n) {
    t.child = e === null ? ro(t, null, l, n) : Kl(t, e.child, l, n);
  }
  function c0(e, t, l, n, u) {
    l = l.render;
    var c = t.ref;
    if ("ref" in n) {
      var o = {};
      for (var d in n) d !== "ref" && (o[d] = n[d]);
    } else o = n;
    return (
      tn(t),
      (n = Ac(e, t, l, o, c, u)),
      (d = Nc()),
      e !== null && !We
        ? (Oc(e, t, u), Ft(e, t, u))
        : (xe && d && vc(t), (t.flags |= 1), tt(e, t, n, u), t.child)
    );
  }
  function f0(e, t, l, n, u) {
    if (e === null) {
      var c = l.type;
      return typeof c == "function" &&
        !mf(c) &&
        c.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = c), s0(e, t, c, n, u))
        : ((e = Wu(l.type, null, n, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !Pc(e, u))) {
      var o = c.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ha), l(o, n) && e.ref === t.ref)
      )
        return Ft(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = zl(c, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function s0(e, t, l, n, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (ha(c, n) && e.ref === t.ref)
        if (((We = !1), (t.pendingProps = n = c), Pc(e, u)))
          e.flags & 131072 && (We = !0);
        else return (t.lanes = e.lanes), Ft(e, t, u);
    }
    return Vc(e, t, l, n, u);
  }
  function r0(e, t, l) {
    var n = t.pendingProps,
      u = n.children,
      c = (t.stateNode._pendingVisibility & 2) !== 0,
      o = e !== null ? e.memoizedState : null;
    if ((Aa(e, t), n.mode === "hidden" || c)) {
      if (t.flags & 128) {
        if (((n = o !== null ? o.baseLanes | l : l), e !== null)) {
          for (u = t.child = e.child, c = 0; u !== null; )
            (c = c | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = c & ~n;
        } else (t.childLanes = 0), (t.child = null);
        return o0(e, t, n, l);
      }
      if (l & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ju(t, o !== null ? o.cachePool : null),
          o !== null ? oo(t, o) : xc(),
          ho(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          o0(e, t, o !== null ? o.baseLanes | l : l, l)
        );
    } else
      o !== null
        ? (ju(t, o.cachePool), oo(t, o), yl(), (t.memoizedState = null))
        : (e !== null && ju(t, null), xc(), yl());
    return tt(e, t, u, l), t.child;
  }
  function o0(e, t, l, n) {
    var u = Ec();
    return (
      (u = u === null ? null : { parent: ke._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && ju(t, null),
      xc(),
      ho(t),
      e !== null && Na(e, t, n, !0),
      null
    );
  }
  function Aa(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(s(284));
      (e === null || e.ref !== l) && (t.flags |= 2097664);
    }
  }
  function Vc(e, t, l, n, u) {
    return (
      tn(t),
      (l = Ac(e, t, l, n, void 0, u)),
      (n = Nc()),
      e !== null && !We
        ? (Oc(e, t, u), Ft(e, t, u))
        : (xe && n && vc(t), (t.flags |= 1), tt(e, t, l, u), t.child)
    );
  }
  function d0(e, t, l, n, u, c) {
    return (
      tn(t),
      (t.updateQueue = null),
      (l = po(t, n, l, u)),
      vo(e),
      (n = Nc()),
      e !== null && !We
        ? (Oc(e, t, c), Ft(e, t, c))
        : (xe && n && vc(t), (t.flags |= 1), tt(e, t, l, c), t.child)
    );
  }
  function h0(e, t, l, n, u) {
    if ((tn(t), t.stateNode === null)) {
      var c = En,
        o = l.contextType;
      typeof o == "object" && o !== null && (c = it(o)),
        (c = new l(n, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Qc),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = n),
        (c.state = t.memoizedState),
        (c.refs = {}),
        nf(t),
        (o = l.contextType),
        (c.context = typeof o == "object" && o !== null ? it(o) : En),
        (c.state = t.memoizedState),
        (o = l.getDerivedStateFromProps),
        typeof o == "function" && (Lc(t, l, o, n), (c.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((o = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          o !== c.state && Qc.enqueueReplaceState(c, c.state, null),
          Ca(t, n, c, u),
          Ra(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (n = !0);
    } else if (e === null) {
      c = t.stateNode;
      var d = t.memoizedProps,
        g = Pl(l, d);
      c.props = g;
      var S = c.context,
        A = l.contextType;
      (o = En), typeof A == "object" && A !== null && (o = it(A));
      var U = l.getDerivedStateFromProps;
      (A =
        typeof U == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (d = t.pendingProps !== d),
        A ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((d || S !== o) && Po(t, c, n, o)),
        (Sl = !1);
      var E = t.memoizedState;
      (c.state = E),
        Ca(t, n, c, u),
        Ra(),
        (S = t.memoizedState),
        d || E !== S || Sl
          ? (typeof U == "function" && (Lc(t, l, U, n), (S = t.memoizedState)),
            (g = Sl || Io(t, l, g, n, E, S, o))
              ? (A ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = S)),
            (c.props = n),
            (c.state = S),
            (c.context = o),
            (n = g))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1));
    } else {
      (c = t.stateNode),
        af(e, t),
        (o = t.memoizedProps),
        (A = Pl(l, o)),
        (c.props = A),
        (U = t.pendingProps),
        (E = c.context),
        (S = l.contextType),
        (g = En),
        typeof S == "object" && S !== null && (g = it(S)),
        (d = l.getDerivedStateFromProps),
        (S =
          typeof d == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((o !== U || E !== g) && Po(t, c, n, g)),
        (Sl = !1),
        (E = t.memoizedState),
        (c.state = E),
        Ca(t, n, c, u),
        Ra();
      var z = t.memoizedState;
      o !== U ||
      E !== z ||
      Sl ||
      (e !== null && e.dependencies !== null && $u(e.dependencies))
        ? (typeof d == "function" && (Lc(t, l, d, n), (z = t.memoizedState)),
          (A =
            Sl ||
            Io(t, l, A, n, E, z, g) ||
            (e !== null && e.dependencies !== null && $u(e.dependencies)))
            ? (S ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(n, z, g),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(n, z, g)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (o === e.memoizedProps && E === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && E === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = z)),
          (c.props = n),
          (c.state = z),
          (c.context = g),
          (n = A))
        : (typeof c.componentDidUpdate != "function" ||
            (o === e.memoizedProps && E === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && E === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (c = n),
      Aa(e, t),
      (n = (t.flags & 128) !== 0),
      c || n
        ? ((c = t.stateNode),
          (l =
            n && typeof l.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = Kl(t, e.child, null, u)),
              (t.child = Kl(t, null, l, u)))
            : tt(e, t, l, u),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = Ft(e, t, u)),
      e
    );
  }
  function m0(e, t, l, n) {
    return ya(), (t.flags |= 256), tt(e, t, l, n), t.child;
  }
  var $c = { dehydrated: null, treeContext: null, retryLane: 0 };
  function kc(e) {
    return { baseLanes: e, cachePool: yo() };
  }
  function Kc(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= Dt), e;
  }
  function g0(e, t, l) {
    var n = t.pendingProps,
      u = !1,
      c = (t.flags & 128) !== 0,
      o;
    if (
      ((o = c) ||
        (o =
          e !== null && e.memoizedState === null ? !1 : ($e.current & 2) !== 0),
      o && ((u = !0), (t.flags &= -129)),
      (o = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (xe) {
        if ((u ? gl(t) : yl(), xe)) {
          var d = et,
            g;
          if ((g = d)) {
            e: {
              for (g = d, d = Bt; g.nodeType !== 8; ) {
                if (!d) {
                  d = null;
                  break e;
                }
                if (((g = Yt(g.nextSibling)), g === null)) {
                  d = null;
                  break e;
                }
              }
              d = g;
            }
            d !== null
              ? ((t.memoizedState = {
                  dehydrated: d,
                  treeContext: Vl !== null ? { id: kt, overflow: Kt } : null,
                  retryLane: 536870912,
                }),
                (g = Ct(18, null, null, 0)),
                (g.stateNode = d),
                (g.return = t),
                (t.child = g),
                (ft = t),
                (et = null),
                (g = !0))
              : (g = !1);
          }
          g || kl(t);
        }
        if (
          ((d = t.memoizedState),
          d !== null && ((d = d.dehydrated), d !== null))
        )
          return d.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Jt(t);
      }
      return (
        (d = n.children),
        (n = n.fallback),
        u
          ? (yl(),
            (u = t.mode),
            (d = Wc({ mode: "hidden", children: d }, u)),
            (n = nn(n, u, l, null)),
            (d.return = t),
            (n.return = t),
            (d.sibling = n),
            (t.child = d),
            (u = t.child),
            (u.memoizedState = kc(l)),
            (u.childLanes = Kc(e, o, l)),
            (t.memoizedState = $c),
            n)
          : (gl(t), Jc(t, d))
      );
    }
    if (
      ((g = e.memoizedState), g !== null && ((d = g.dehydrated), d !== null))
    ) {
      if (c)
        t.flags & 256
          ? (gl(t), (t.flags &= -257), (t = Fc(e, t, l)))
          : t.memoizedState !== null
          ? (yl(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (yl(),
            (u = n.fallback),
            (d = t.mode),
            (n = Wc({ mode: "visible", children: n.children }, d)),
            (u = nn(u, d, l, null)),
            (u.flags |= 2),
            (n.return = t),
            (u.return = t),
            (n.sibling = u),
            (t.child = n),
            Kl(t, e.child, null, l),
            (n = t.child),
            (n.memoizedState = kc(l)),
            (n.childLanes = Kc(e, o, l)),
            (t.memoizedState = $c),
            (t = u));
      else if ((gl(t), d.data === "$!")) {
        if (((o = d.nextSibling && d.nextSibling.dataset), o)) var S = o.dgst;
        (o = S),
          (n = Error(s(419))),
          (n.stack = ""),
          (n.digest = o),
          va({ value: n, source: null, stack: null }),
          (t = Fc(e, t, l));
      } else if (
        (We || Na(e, t, l, !1), (o = (l & e.childLanes) !== 0), We || o)
      ) {
        if (((o = De), o !== null)) {
          if (((n = l & -l), n & 42)) n = 1;
          else
            switch (n) {
              case 2:
                n = 1;
                break;
              case 8:
                n = 4;
                break;
              case 32:
                n = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                n = 64;
                break;
              case 268435456:
                n = 134217728;
                break;
              default:
                n = 0;
            }
          if (
            ((n = n & (o.suspendedLanes | l) ? 0 : n),
            n !== 0 && n !== g.retryLane)
          )
            throw ((g.retryLane = n), ml(e, n), st(o, e, n), i0);
        }
        d.data === "$?" || zf(), (t = Fc(e, t, l));
      } else
        d.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Km.bind(null, e)),
            (d._reactRetry = t),
            (t = null))
          : ((e = g.treeContext),
            (et = Yt(d.nextSibling)),
            (ft = t),
            (xe = !0),
            (jt = null),
            (Bt = !1),
            e !== null &&
              ((zt[At++] = kt),
              (zt[At++] = Kt),
              (zt[At++] = Vl),
              (kt = e.id),
              (Kt = e.overflow),
              (Vl = t)),
            (t = Jc(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (yl(),
        (u = n.fallback),
        (d = t.mode),
        (g = e.child),
        (S = g.sibling),
        (n = zl(g, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = g.subtreeFlags & 31457280),
        S !== null ? (u = zl(S, u)) : ((u = nn(u, d, l, null)), (u.flags |= 2)),
        (u.return = t),
        (n.return = t),
        (n.sibling = u),
        (t.child = n),
        (n = u),
        (u = t.child),
        (d = e.child.memoizedState),
        d === null
          ? (d = kc(l))
          : ((g = d.cachePool),
            g !== null
              ? ((S = ke._currentValue),
                (g = g.parent !== S ? { parent: S, pool: S } : g))
              : (g = yo()),
            (d = { baseLanes: d.baseLanes | l, cachePool: g })),
        (u.memoizedState = d),
        (u.childLanes = Kc(e, o, l)),
        (t.memoizedState = $c),
        n)
      : (gl(t),
        (l = e.child),
        (e = l.sibling),
        (l = zl(l, { mode: "visible", children: n.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((o = t.deletions),
          o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Jc(e, t) {
    return (
      (t = Wc({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Wc(e, t) {
    return G0(e, t, 0, null);
  }
  function Fc(e, t, l) {
    return (
      Kl(t, e.child, null, l),
      (e = Jc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function y0(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), tf(e.return, t, l);
  }
  function Ic(e, t, l, n, u) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: l,
          tailMode: u,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = n),
        (c.tail = l),
        (c.tailMode = u));
  }
  function v0(e, t, l) {
    var n = t.pendingProps,
      u = n.revealOrder,
      c = n.tail;
    if ((tt(e, t, n.children, l), (n = $e.current), n & 2))
      (n = (n & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && y0(e, l, t);
          else if (e.tag === 19) y0(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      n &= 1;
    }
    switch ((je($e, n), u)) {
      case "forwards":
        for (l = t.child, u = null; l !== null; )
          (e = l.alternate),
            e !== null && Uu(e) === null && (u = l),
            (l = l.sibling);
        (l = u),
          l === null
            ? ((u = t.child), (t.child = null))
            : ((u = l.sibling), (l.sibling = null)),
          Ic(t, !1, u, l, c);
        break;
      case "backwards":
        for (l = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Uu(e) === null)) {
            t.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = l), (l = u), (u = e);
        }
        Ic(t, !0, l, null, c);
        break;
      case "together":
        Ic(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ft(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Al |= t.lanes),
      !(l & t.childLanes))
    )
      if (e !== null) {
        if ((Na(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, l = zl(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = zl(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function Pc(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && $u(e)));
  }
  function Um(e, t, l) {
    switch (t.tag) {
      case 3:
        fu(t, t.stateNode.containerInfo),
          bl(t, ke, e.memoizedState.cache),
          ya();
        break;
      case 27:
      case 5:
        Qi(t);
        break;
      case 4:
        fu(t, t.stateNode.containerInfo);
        break;
      case 10:
        bl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (gl(t), (t.flags |= 128), null)
            : l & t.child.childLanes
            ? g0(e, t, l)
            : (gl(t), (e = Ft(e, t, l)), e !== null ? e.sibling : null);
        gl(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((n = (l & t.childLanes) !== 0),
          n || (Na(e, t, l, !1), (n = (l & t.childLanes) !== 0)),
          u)
        ) {
          if (n) return v0(e, t, l);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          je($e, $e.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), r0(e, t, l);
      case 24:
        bl(t, ke, e.memoizedState.cache);
    }
    return Ft(e, t, l);
  }
  function p0(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) We = !0;
      else {
        if (!Pc(e, l) && !(t.flags & 128)) return (We = !1), Um(e, t, l);
        We = !!(e.flags & 131072);
      }
    else (We = !1), xe && t.flags & 1048576 && to(t, Ou, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var n = t.elementType,
            u = n._init;
          if (((n = u(n._payload)), (t.type = n), typeof n == "function"))
            mf(n)
              ? ((e = Pl(n, e)), (t.tag = 1), (t = h0(null, t, n, e, l)))
              : ((t.tag = 0), (t = Vc(null, t, n, e, l)));
          else {
            if (n != null) {
              if (((u = n.$$typeof), u === K)) {
                (t.tag = 11), (t = c0(null, t, n, e, l));
                break e;
              } else if (u === se) {
                (t.tag = 14), (t = f0(null, t, n, e, l));
                break e;
              }
            }
            throw ((t = Se(n) || n), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return Vc(e, t, t.type, t.pendingProps, l);
      case 1:
        return (n = t.type), (u = Pl(n, t.pendingProps)), h0(e, t, n, u, l);
      case 3:
        e: {
          if ((fu(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var c = t.pendingProps;
          (u = t.memoizedState), (n = u.element), af(e, t), Ca(t, c, null, l);
          var o = t.memoizedState;
          if (
            ((c = o.cache),
            bl(t, ke, c),
            c !== u.cache && lf(t, [ke], l, !0),
            Ra(),
            (c = o.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: c, isDehydrated: !1, cache: o.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = m0(e, t, c, l);
              break e;
            } else if (c !== n) {
              (n = Et(Error(s(424)), t)), va(n), (t = m0(e, t, c, l));
              break e;
            } else
              for (
                et = Yt(t.stateNode.containerInfo.firstChild),
                  ft = t,
                  xe = !0,
                  jt = null,
                  Bt = !0,
                  l = ro(t, null, c, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((ya(), c === n)) {
              t = Ft(e, t, l);
              break e;
            }
            tt(e, t, c, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Aa(e, t),
          e === null
            ? (l = x1(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : xe ||
                ((l = t.type),
                (e = t.pendingProps),
                (n = fi(rl.current).createElement(l)),
                (n[ut] = t),
                (n[rt] = e),
                lt(n, l, e),
                Je(n),
                (t.stateNode = n))
            : (t.memoizedState = x1(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Qi(t),
          e === null &&
            xe &&
            ((n = t.stateNode = p1(t.type, t.pendingProps, rl.current)),
            (ft = t),
            (Bt = !0),
            (et = Yt(n.firstChild))),
          (n = t.pendingProps.children),
          e !== null || xe ? tt(e, t, n, l) : (t.child = Kl(t, null, n, l)),
          Aa(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            xe &&
            ((u = n = et) &&
              ((n = rg(n, t.type, t.pendingProps, Bt)),
              n !== null
                ? ((t.stateNode = n),
                  (ft = t),
                  (et = Yt(n.firstChild)),
                  (Bt = !1),
                  (u = !0))
                : (u = !1)),
            u || kl(t)),
          Qi(t),
          (u = t.type),
          (c = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (n = c.children),
          Xf(u, c) ? (n = null) : o !== null && Xf(u, o) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Ac(e, t, Am, null, null, l)), ($a._currentValue = u)),
          Aa(e, t),
          tt(e, t, n, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            xe &&
            ((e = l = et) &&
              ((l = og(l, t.pendingProps, Bt)),
              l !== null
                ? ((t.stateNode = l), (ft = t), (et = null), (e = !0))
                : (e = !1)),
            e || kl(t)),
          null
        );
      case 13:
        return g0(e, t, l);
      case 4:
        return (
          fu(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Kl(t, null, n, l)) : tt(e, t, n, l),
          t.child
        );
      case 11:
        return c0(e, t, t.type, t.pendingProps, l);
      case 7:
        return tt(e, t, t.pendingProps, l), t.child;
      case 8:
        return tt(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return tt(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (n = t.pendingProps),
          bl(t, t.type, n.value),
          tt(e, t, n.children, l),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (n = t.pendingProps.children),
          tn(t),
          (u = it(u)),
          (n = n(u)),
          (t.flags |= 1),
          tt(e, t, n, l),
          t.child
        );
      case 14:
        return f0(e, t, t.type, t.pendingProps, l);
      case 15:
        return s0(e, t, t.type, t.pendingProps, l);
      case 19:
        return v0(e, t, l);
      case 22:
        return r0(e, t, l);
      case 24:
        return (
          tn(t),
          (n = it(ke)),
          e === null
            ? ((u = Ec()),
              u === null &&
                ((u = De),
                (c = _c()),
                (u.pooledCache = c),
                c.refCount++,
                c !== null && (u.pooledCacheLanes |= l),
                (u = c)),
              (t.memoizedState = { parent: n, cache: u }),
              nf(t),
              bl(t, ke, u))
            : (e.lanes & l && (af(e, t), Ca(t, null, null, l), Ra()),
              (u = e.memoizedState),
              (c = t.memoizedState),
              u.parent !== n
                ? ((u = { parent: n, cache: n }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  bl(t, ke, n))
                : ((n = c.cache),
                  bl(t, ke, n),
                  n !== u.cache && lf(t, [ke], l, !0))),
          tt(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  var ef = he(null),
    en = null,
    It = null;
  function bl(e, t, l) {
    je(ef, t._currentValue), (t._currentValue = l);
  }
  function Pt(e) {
    (e._currentValue = ef.current), Oe(ef);
  }
  function tf(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function lf(e, t, l, n) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var c = u.dependencies;
      if (c !== null) {
        var o = u.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var d = c;
          c = u;
          for (var g = 0; g < t.length; g++)
            if (d.context === t[g]) {
              (c.lanes |= l),
                (d = c.alternate),
                d !== null && (d.lanes |= l),
                tf(c.return, l, e),
                n || (o = null);
              break e;
            }
          c = d.next;
        }
      } else if (u.tag === 18) {
        if (((o = u.return), o === null)) throw Error(s(341));
        (o.lanes |= l),
          (c = o.alternate),
          c !== null && (c.lanes |= l),
          tf(o, l, e),
          (o = null);
      } else o = u.child;
      if (o !== null) o.return = u;
      else
        for (o = u; o !== null; ) {
          if (o === e) {
            o = null;
            break;
          }
          if (((u = o.sibling), u !== null)) {
            (u.return = o.return), (o = u);
            break;
          }
          o = o.return;
        }
      u = o;
    }
  }
  function Na(e, t, l, n) {
    e = null;
    for (var u = t, c = !1; u !== null; ) {
      if (!c) {
        if (u.flags & 524288) c = !0;
        else if (u.flags & 262144) break;
      }
      if (u.tag === 10) {
        var o = u.alternate;
        if (o === null) throw Error(s(387));
        if (((o = o.memoizedProps), o !== null)) {
          var d = u.type;
          yt(u.pendingProps.value, o.value) ||
            (e !== null ? e.push(d) : (e = [d]));
        }
      } else if (u === cu.current) {
        if (((o = u.alternate), o === null)) throw Error(s(387));
        o.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push($a) : (e = [$a]));
      }
      u = u.return;
    }
    e !== null && lf(t, e, l, n), (t.flags |= 262144);
  }
  function $u(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!yt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function tn(e) {
    (en = e),
      (It = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function it(e) {
    return b0(en, e);
  }
  function ku(e, t) {
    return en === null && tn(e), b0(e, t);
  }
  function b0(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), It === null)) {
      if (e === null) throw Error(s(308));
      (It = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else It = It.next = t;
    return l;
  }
  var Sl = !1;
  function nf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function af(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function xl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ml(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), Ye & 2)) {
      var u = n.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (n.pending = t),
        (t = Au(e)),
        Pr(e, null, l),
        t
      );
    }
    return zu(e, n, t, l), Au(e);
  }
  function Oa(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194176) !== 0))
    ) {
      var n = t.lanes;
      (n &= e.pendingLanes), (l |= n), (t.lanes = l), cr(e, l);
    }
  }
  function uf(e, t) {
    var l = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), l === n)) {
      var u = null,
        c = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var o = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          c === null ? (u = c = o) : (c = c.next = o), (l = l.next);
        } while (l !== null);
        c === null ? (u = c = t) : (c = c.next = t);
      } else u = c = t;
      (l = {
        baseState: n.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var cf = !1;
  function Ra() {
    if (cf) {
      var e = Cn;
      if (e !== null) throw e;
    }
  }
  function Ca(e, t, l, n) {
    cf = !1;
    var u = e.updateQueue;
    Sl = !1;
    var c = u.firstBaseUpdate,
      o = u.lastBaseUpdate,
      d = u.shared.pending;
    if (d !== null) {
      u.shared.pending = null;
      var g = d,
        S = g.next;
      (g.next = null), o === null ? (c = S) : (o.next = S), (o = g);
      var A = e.alternate;
      A !== null &&
        ((A = A.updateQueue),
        (d = A.lastBaseUpdate),
        d !== o &&
          (d === null ? (A.firstBaseUpdate = S) : (d.next = S),
          (A.lastBaseUpdate = g)));
    }
    if (c !== null) {
      var U = u.baseState;
      (o = 0), (A = S = g = null), (d = c);
      do {
        var E = d.lane & -536870913,
          z = E !== d.lane;
        if (z ? (ve & E) === E : (n & E) === E) {
          E !== 0 && E === Rn && (cf = !0),
            A !== null &&
              (A = A.next =
                {
                  lane: 0,
                  tag: d.tag,
                  payload: d.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var $ = e,
              ae = d;
            E = t;
            var Xe = l;
            switch (ae.tag) {
              case 1:
                if ((($ = ae.payload), typeof $ == "function")) {
                  U = $.call(Xe, U, E);
                  break e;
                }
                U = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = ae.payload),
                  (E = typeof $ == "function" ? $.call(Xe, U, E) : $),
                  E == null)
                )
                  break e;
                U = V({}, U, E);
                break e;
              case 2:
                Sl = !0;
            }
          }
          (E = d.callback),
            E !== null &&
              ((e.flags |= 64),
              z && (e.flags |= 8192),
              (z = u.callbacks),
              z === null ? (u.callbacks = [E]) : z.push(E));
        } else
          (z = {
            lane: E,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null,
          }),
            A === null ? ((S = A = z), (g = U)) : (A = A.next = z),
            (o |= E);
        if (((d = d.next), d === null)) {
          if (((d = u.shared.pending), d === null)) break;
          (z = d),
            (d = z.next),
            (z.next = null),
            (u.lastBaseUpdate = z),
            (u.shared.pending = null);
        }
      } while (!0);
      A === null && (g = U),
        (u.baseState = g),
        (u.firstBaseUpdate = S),
        (u.lastBaseUpdate = A),
        c === null && (u.shared.lanes = 0),
        (Al |= o),
        (e.lanes = o),
        (e.memoizedState = U);
    }
  }
  function S0(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function x0(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) S0(l[e], t);
  }
  function Da(e, t) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var c = l.create,
              o = l.inst;
            (n = c()), (o.destroy = n);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (d) {
      Re(t, t.return, d);
    }
  }
  function _l(e, t, l) {
    try {
      var n = t.updateQueue,
        u = n !== null ? n.lastEffect : null;
      if (u !== null) {
        var c = u.next;
        n = c;
        do {
          if ((n.tag & e) === e) {
            var o = n.inst,
              d = o.destroy;
            if (d !== void 0) {
              (o.destroy = void 0), (u = t);
              var g = l;
              try {
                d();
              } catch (S) {
                Re(u, g, S);
              }
            }
          }
          n = n.next;
        } while (n !== c);
      }
    } catch (S) {
      Re(t, t.return, S);
    }
  }
  function M0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        x0(t, l);
      } catch (n) {
        Re(e, e.return, n);
      }
    }
  }
  function _0(e, t, l) {
    (l.props = Pl(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (n) {
      Re(e, t, n);
    }
  }
  function ln(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = n;
            break;
          default:
            u = n;
        }
        typeof l == "function" ? (e.refCleanup = l(u)) : (l.current = u);
      }
    } catch (c) {
      Re(e, t, c);
    }
  }
  function vt(e, t) {
    var l = e.ref,
      n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (u) {
          Re(e, t, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          Re(e, t, u);
        }
      else l.current = null;
  }
  function T0(e) {
    var t = e.type,
      l = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (u) {
      Re(e, e.return, u);
    }
  }
  function E0(e, t, l) {
    try {
      var n = e.stateNode;
      ug(n, e.type, l, t), (n[rt] = t);
    } catch (u) {
      Re(e, e.return, u);
    }
  }
  function z0(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function ff(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || z0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sf(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode),
        t
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(e, t)
            : l.insertBefore(e, t)
          : (l.nodeType === 8
              ? ((t = l.parentNode), t.insertBefore(e, l))
              : ((t = l), t.appendChild(e)),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = ci));
    else if (n !== 4 && n !== 27 && ((e = e.child), e !== null))
      for (sf(e, t, l), e = e.sibling; e !== null; )
        sf(e, t, l), (e = e.sibling);
  }
  function Ku(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && n !== 27 && ((e = e.child), e !== null))
      for (Ku(e, t, l), e = e.sibling; e !== null; )
        Ku(e, t, l), (e = e.sibling);
  }
  var el = !1,
    qe = !1,
    rf = !1,
    A0 = typeof WeakSet == "function" ? WeakSet : Set,
    Fe = null,
    N0 = !1;
  function jm(e, t) {
    if (((e = e.containerInfo), (qf = mi), (e = Zr(e)), oc(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var u = n.anchorOffset,
              c = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, c.nodeType;
            } catch {
              l = null;
              break e;
            }
            var o = 0,
              d = -1,
              g = -1,
              S = 0,
              A = 0,
              U = e,
              E = null;
            t: for (;;) {
              for (
                var z;
                U !== l || (u !== 0 && U.nodeType !== 3) || (d = o + u),
                  U !== c || (n !== 0 && U.nodeType !== 3) || (g = o + n),
                  U.nodeType === 3 && (o += U.nodeValue.length),
                  (z = U.firstChild) !== null;

              )
                (E = U), (U = z);
              for (;;) {
                if (U === e) break t;
                if (
                  (E === l && ++S === u && (d = o),
                  E === c && ++A === n && (g = o),
                  (z = U.nextSibling) !== null)
                )
                  break;
                (U = E), (E = U.parentNode);
              }
              U = z;
            }
            l = d === -1 || g === -1 ? null : { start: d, end: g };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Bf = { focusedElem: e, selectionRange: l }, mi = !1, Fe = t;
      Fe !== null;

    )
      if (
        ((t = Fe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Fe = e);
      else
        for (; Fe !== null; ) {
          switch (((t = Fe), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && c !== null) {
                (e = void 0),
                  (l = t),
                  (u = c.memoizedProps),
                  (c = c.memoizedState),
                  (n = l.stateNode);
                try {
                  var $ = Pl(l.type, u, l.elementType === l.type);
                  (e = n.getSnapshotBeforeUpdate($, c)),
                    (n.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ae) {
                  Re(l, l.return, ae);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  Qf(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (e & 1024) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Fe = e);
            break;
          }
          Fe = t.return;
        }
    return ($ = N0), (N0 = !1), $;
  }
  function O0(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ll(e, l), n & 4 && Da(5, l);
        break;
      case 1:
        if ((ll(e, l), n & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Re(l, l.return, d);
            }
          else {
            var u = Pl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Re(l, l.return, d);
            }
          }
        n & 64 && M0(l), n & 512 && ln(l, l.return);
        break;
      case 3:
        if ((ll(e, l), n & 64 && ((n = l.updateQueue), n !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            x0(n, e);
          } catch (d) {
            Re(l, l.return, d);
          }
        }
        break;
      case 26:
        ll(e, l), n & 512 && ln(l, l.return);
        break;
      case 27:
      case 5:
        ll(e, l), t === null && n & 4 && T0(l), n & 512 && ln(l, l.return);
        break;
      case 12:
        ll(e, l);
        break;
      case 13:
        ll(e, l), n & 4 && D0(e, l);
        break;
      case 22:
        if (((u = l.memoizedState !== null || el), !u)) {
          t = (t !== null && t.memoizedState !== null) || qe;
          var c = el,
            o = qe;
          (el = u),
            (qe = t) && !o ? Tl(e, l, (l.subtreeFlags & 8772) !== 0) : ll(e, l),
            (el = c),
            (qe = o);
        }
        n & 512 &&
          (l.memoizedProps.mode === "manual"
            ? ln(l, l.return)
            : vt(l, l.return));
        break;
      default:
        ll(e, l);
    }
  }
  function R0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), R0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ji(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ze = null,
    pt = !1;
  function tl(e, t, l) {
    for (l = l.child; l !== null; ) C0(e, t, l), (l = l.sibling);
  }
  function C0(e, t, l) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(ta, l);
      } catch {}
    switch (l.tag) {
      case 26:
        qe || vt(l, t),
          tl(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        qe || vt(l, t);
        var n = Ze,
          u = pt;
        for (
          Ze = l.stateNode, tl(e, t, l), l = l.stateNode, t = l.attributes;
          t.length;

        )
          l.removeAttributeNode(t[0]);
        Ji(l), (Ze = n), (pt = u);
        break;
      case 5:
        qe || vt(l, t);
      case 6:
        u = Ze;
        var c = pt;
        if (((Ze = null), tl(e, t, l), (Ze = u), (pt = c), Ze !== null))
          if (pt)
            try {
              (e = Ze),
                (n = l.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n);
            } catch (o) {
              Re(l, t, o);
            }
          else
            try {
              Ze.removeChild(l.stateNode);
            } catch (o) {
              Re(l, t, o);
            }
        break;
      case 18:
        Ze !== null &&
          (pt
            ? ((t = Ze),
              (l = l.stateNode),
              t.nodeType === 8
                ? Lf(t.parentNode, l)
                : t.nodeType === 1 && Lf(t, l),
              Wa(t))
            : Lf(Ze, l.stateNode));
        break;
      case 4:
        (n = Ze),
          (u = pt),
          (Ze = l.stateNode.containerInfo),
          (pt = !0),
          tl(e, t, l),
          (Ze = n),
          (pt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        qe || _l(2, l, t), qe || _l(4, l, t), tl(e, t, l);
        break;
      case 1:
        qe ||
          (vt(l, t),
          (n = l.stateNode),
          typeof n.componentWillUnmount == "function" && _0(l, t, n)),
          tl(e, t, l);
        break;
      case 21:
        tl(e, t, l);
        break;
      case 22:
        qe || vt(l, t),
          (qe = (n = qe) || l.memoizedState !== null),
          tl(e, t, l),
          (qe = n);
        break;
      default:
        tl(e, t, l);
    }
  }
  function D0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Wa(e);
      } catch (l) {
        Re(t, t.return, l);
      }
  }
  function wm(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new A0()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new A0()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function of(e, t) {
    var l = wm(e);
    t.forEach(function (n) {
      var u = Jm.bind(null, e, n);
      l.has(n) || (l.add(n), n.then(u, u));
    });
  }
  function Ot(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var u = l[n],
          c = e,
          o = t,
          d = o;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
            case 5:
              (Ze = d.stateNode), (pt = !1);
              break e;
            case 3:
              (Ze = d.stateNode.containerInfo), (pt = !0);
              break e;
            case 4:
              (Ze = d.stateNode.containerInfo), (pt = !0);
              break e;
          }
          d = d.return;
        }
        if (Ze === null) throw Error(s(160));
        C0(c, o, u),
          (Ze = null),
          (pt = !1),
          (c = u.alternate),
          c !== null && (c.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) H0(t, e), (t = t.sibling);
  }
  var wt = null;
  function H0(e, t) {
    var l = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ot(t, e),
          Rt(e),
          n & 4 && (_l(3, e, e.return), Da(3, e), _l(5, e, e.return));
        break;
      case 1:
        Ot(t, e),
          Rt(e),
          n & 512 && (qe || l === null || vt(l, l.return)),
          n & 64 &&
            el &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? n : l.concat(n)))));
        break;
      case 26:
        var u = wt;
        if (
          (Ot(t, e),
          Rt(e),
          n & 512 && (qe || l === null || vt(l, l.return)),
          n & 4)
        ) {
          var c = l !== null ? l.memoizedState : null;
          if (((n = e.memoizedState), l === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  (n = e.type),
                    (l = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (n) {
                    case "title":
                      (c = u.getElementsByTagName("title")[0]),
                        (!c ||
                          c[aa] ||
                          c[ut] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = u.createElement(n)),
                          u.head.insertBefore(
                            c,
                            u.querySelector("head > title")
                          )),
                        lt(c, n, l),
                        (c[ut] = e),
                        Je(c),
                        (n = c);
                      break e;
                    case "link":
                      var o = T1("link", "href", u).get(n + (l.href || ""));
                      if (o) {
                        for (var d = 0; d < o.length; d++)
                          if (
                            ((c = o[d]),
                            c.getAttribute("href") ===
                              (l.href == null ? null : l.href) &&
                              c.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              c.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              c.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            o.splice(d, 1);
                            break t;
                          }
                      }
                      (c = u.createElement(n)),
                        lt(c, n, l),
                        u.head.appendChild(c);
                      break;
                    case "meta":
                      if (
                        (o = T1("meta", "content", u).get(
                          n + (l.content || "")
                        ))
                      ) {
                        for (d = 0; d < o.length; d++)
                          if (
                            ((c = o[d]),
                            c.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              c.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              c.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              c.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            o.splice(d, 1);
                            break t;
                          }
                      }
                      (c = u.createElement(n)),
                        lt(c, n, l),
                        u.head.appendChild(c);
                      break;
                    default:
                      throw Error(s(468, n));
                  }
                  (c[ut] = e), Je(c), (n = c);
                }
                e.stateNode = n;
              } else E1(u, e.type, e.stateNode);
            else e.stateNode = _1(u, n, e.memoizedProps);
          else
            c !== n
              ? (c === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : c.count--,
                n === null
                  ? E1(u, e.type, e.stateNode)
                  : _1(u, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                E0(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        if (n & 4 && e.alternate === null) {
          (u = e.stateNode), (c = e.memoizedProps);
          try {
            for (var g = u.firstChild; g; ) {
              var S = g.nextSibling,
                A = g.nodeName;
              g[aa] ||
                A === "HEAD" ||
                A === "BODY" ||
                A === "SCRIPT" ||
                A === "STYLE" ||
                (A === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(g),
                (g = S);
            }
            for (var U = e.type, E = u.attributes; E.length; )
              u.removeAttributeNode(E[0]);
            lt(u, U, c), (u[ut] = e), (u[rt] = c);
          } catch ($) {
            Re(e, e.return, $);
          }
        }
      case 5:
        if (
          (Ot(t, e),
          Rt(e),
          n & 512 && (qe || l === null || vt(l, l.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            pn(u, "");
          } catch ($) {
            Re(e, e.return, $);
          }
        }
        n & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), E0(e, u, l !== null ? l.memoizedProps : u)),
          n & 1024 && (rf = !0);
        break;
      case 6:
        if ((Ot(t, e), Rt(e), n & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (n = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = n;
          } catch ($) {
            Re(e, e.return, $);
          }
        }
        break;
      case 3:
        if (
          ((oi = null),
          (u = wt),
          (wt = si(t.containerInfo)),
          Ot(t, e),
          (wt = u),
          Rt(e),
          n & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Wa(t.containerInfo);
          } catch ($) {
            Re(e, e.return, $);
          }
        rf && ((rf = !1), U0(e));
        break;
      case 4:
        (n = wt),
          (wt = si(e.stateNode.containerInfo)),
          Ot(t, e),
          Rt(e),
          (wt = n);
        break;
      case 12:
        Ot(t, e), Rt(e);
        break;
      case 13:
        Ot(t, e),
          Rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Sf = qt()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), of(e, n)));
        break;
      case 22:
        if (
          (n & 512 && (qe || l === null || vt(l, l.return)),
          (g = e.memoizedState !== null),
          (S = l !== null && l.memoizedState !== null),
          (A = el),
          (U = qe),
          (el = A || g),
          (qe = U || S),
          Ot(t, e),
          (qe = U),
          (el = A),
          Rt(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          n & 8192 &&
            ((t._visibility = g ? t._visibility & -2 : t._visibility | 1),
            g && ((t = el || qe), l === null || S || t || jn(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (l === null) {
                S = l = t;
                try {
                  if (((u = S.stateNode), g))
                    (c = u.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    (o = S.stateNode), (d = S.memoizedProps.style);
                    var z =
                      d != null && d.hasOwnProperty("display")
                        ? d.display
                        : null;
                    o.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch ($) {
                  Re(S, S.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = g ? "" : S.memoizedProps;
                } catch ($) {
                  Re(S, S.return, $);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((l = n.retryQueue),
            l !== null && ((n.retryQueue = null), of(e, l))));
        break;
      case 19:
        Ot(t, e),
          Rt(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), of(e, n)));
        break;
      case 21:
        break;
      default:
        Ot(t, e), Rt(e);
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var l = e.return; l !== null; ) {
              if (z0(l)) {
                var n = l;
                break e;
              }
              l = l.return;
            }
            throw Error(s(160));
          }
          switch (n.tag) {
            case 27:
              var u = n.stateNode,
                c = ff(e);
              Ku(e, c, u);
              break;
            case 5:
              var o = n.stateNode;
              n.flags & 32 && (pn(o, ""), (n.flags &= -33));
              var d = ff(e);
              Ku(e, d, o);
              break;
            case 3:
            case 4:
              var g = n.stateNode.containerInfo,
                S = ff(e);
              sf(e, S, g);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (A) {
        Re(e, e.return, A);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function U0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        U0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function ll(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) O0(e, t.alternate, t), (t = t.sibling);
  }
  function jn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _l(4, t, t.return), jn(t);
          break;
        case 1:
          vt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && _0(t, t.return, l),
            jn(t);
          break;
        case 26:
        case 27:
        case 5:
          vt(t, t.return), jn(t);
          break;
        case 22:
          vt(t, t.return), t.memoizedState === null && jn(t);
          break;
        default:
          jn(t);
      }
      e = e.sibling;
    }
  }
  function Tl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        u = e,
        c = t,
        o = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Tl(u, c, l), Da(4, c);
          break;
        case 1:
          if (
            (Tl(u, c, l),
            (n = c),
            (u = n.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (S) {
              Re(n, n.return, S);
            }
          if (((n = c), (u = n.updateQueue), u !== null)) {
            var d = n.stateNode;
            try {
              var g = u.shared.hiddenCallbacks;
              if (g !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < g.length; u++)
                  S0(g[u], d);
            } catch (S) {
              Re(n, n.return, S);
            }
          }
          l && o & 64 && M0(c), ln(c, c.return);
          break;
        case 26:
        case 27:
        case 5:
          Tl(u, c, l), l && n === null && o & 4 && T0(c), ln(c, c.return);
          break;
        case 12:
          Tl(u, c, l);
          break;
        case 13:
          Tl(u, c, l), l && o & 4 && D0(u, c);
          break;
        case 22:
          c.memoizedState === null && Tl(u, c, l), ln(c, c.return);
          break;
        default:
          Tl(u, c, l);
      }
      t = t.sibling;
    }
  }
  function df(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Ma(l));
  }
  function hf(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ma(e));
  }
  function El(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) j0(e, t, l, n), (t = t.sibling);
  }
  function j0(e, t, l, n) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        El(e, t, l, n), u & 2048 && Da(9, t);
        break;
      case 3:
        El(e, t, l, n),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ma(e)));
        break;
      case 12:
        if (u & 2048) {
          El(e, t, l, n), (e = t.stateNode);
          try {
            var c = t.memoizedProps,
              o = c.id,
              d = c.onPostCommit;
            typeof d == "function" &&
              d(
                o,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (g) {
            Re(t, t.return, g);
          }
        } else El(e, t, l, n);
        break;
      case 23:
        break;
      case 22:
        (c = t.stateNode),
          t.memoizedState !== null
            ? c._visibility & 4
              ? El(e, t, l, n)
              : Ha(e, t)
            : c._visibility & 4
            ? El(e, t, l, n)
            : ((c._visibility |= 4),
              wn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && df(t.alternate, t);
        break;
      case 24:
        El(e, t, l, n), u & 2048 && hf(t.alternate, t);
        break;
      default:
        El(e, t, l, n);
    }
  }
  function wn(e, t, l, n, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var c = e,
        o = t,
        d = l,
        g = n,
        S = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          wn(c, o, d, g, u), Da(8, o);
          break;
        case 23:
          break;
        case 22:
          var A = o.stateNode;
          o.memoizedState !== null
            ? A._visibility & 4
              ? wn(c, o, d, g, u)
              : Ha(c, o)
            : ((A._visibility |= 4), wn(c, o, d, g, u)),
            u && S & 2048 && df(o.alternate, o);
          break;
        case 24:
          wn(c, o, d, g, u), u && S & 2048 && hf(o.alternate, o);
          break;
        default:
          wn(c, o, d, g, u);
      }
      t = t.sibling;
    }
  }
  function Ha(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          n = t,
          u = n.flags;
        switch (n.tag) {
          case 22:
            Ha(l, n), u & 2048 && df(n.alternate, n);
            break;
          case 24:
            Ha(l, n), u & 2048 && hf(n.alternate, n);
            break;
          default:
            Ha(l, n);
        }
        t = t.sibling;
      }
  }
  var Ua = 8192;
  function Yn(e) {
    if (e.subtreeFlags & Ua)
      for (e = e.child; e !== null; ) w0(e), (e = e.sibling);
  }
  function w0(e) {
    switch (e.tag) {
      case 26:
        Yn(e),
          e.flags & Ua &&
            e.memoizedState !== null &&
            Tg(wt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Yn(e);
        break;
      case 3:
      case 4:
        var t = wt;
        (wt = si(e.stateNode.containerInfo)), Yn(e), (wt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Ua), (Ua = 16777216), Yn(e), (Ua = t))
            : Yn(e));
        break;
      default:
        Yn(e);
    }
  }
  function Y0(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function ja(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          (Fe = n), B0(n, e);
        }
      Y0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) q0(e), (e = e.sibling);
  }
  function q0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ja(e), e.flags & 2048 && _l(9, e, e.return);
        break;
      case 3:
        ja(e);
        break;
      case 12:
        ja(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), Ju(e))
          : ja(e);
        break;
      default:
        ja(e);
    }
  }
  function Ju(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          (Fe = n), B0(n, e);
        }
      Y0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          _l(8, t, t.return), Ju(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 4 && ((l._visibility &= -5), Ju(t));
          break;
        default:
          Ju(t);
      }
      e = e.sibling;
    }
  }
  function B0(e, t) {
    for (; Fe !== null; ) {
      var l = Fe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ma(l.memoizedState.cache);
      }
      if (((n = l.child), n !== null)) (n.return = l), (Fe = n);
      else
        e: for (l = e; Fe !== null; ) {
          n = Fe;
          var u = n.sibling,
            c = n.return;
          if ((R0(n), n === l)) {
            Fe = null;
            break e;
          }
          if (u !== null) {
            (u.return = c), (Fe = u);
            break e;
          }
          Fe = c;
        }
    }
  }
  function Ym(e, t, l, n) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ct(e, t, l, n) {
    return new Ym(e, t, l, n);
  }
  function mf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function zl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Ct(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 31457280),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function X0(e, t) {
    e.flags &= 31457282;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Wu(e, t, l, n, u, c) {
    var o = 0;
    if (((n = e), typeof e == "function")) mf(e) && (o = 1);
    else if (typeof e == "string")
      o = Mg(e, l, ht.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case b:
          return nn(l.children, u, c, t);
        case y:
          (o = 8), (u |= 24);
          break;
        case C:
          return (
            (e = Ct(12, l, t, u | 2)), (e.elementType = C), (e.lanes = c), e
          );
        case ee:
          return (e = Ct(13, l, t, u)), (e.elementType = ee), (e.lanes = c), e;
        case te:
          return (e = Ct(19, l, t, u)), (e.elementType = te), (e.lanes = c), e;
        case me:
          return G0(l, u, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case w:
              case B:
                o = 10;
                break e;
              case q:
                o = 9;
                break e;
              case K:
                o = 11;
                break e;
              case se:
                o = 14;
                break e;
              case ne:
                (o = 16), (n = null);
                break e;
            }
          (o = 29),
            (l = Error(s(130, e === null ? "null" : typeof e, ""))),
            (n = null);
      }
    return (
      (t = Ct(o, l, t, u)), (t.elementType = e), (t.type = n), (t.lanes = c), t
    );
  }
  function nn(e, t, l, n) {
    return (e = Ct(7, e, n, t)), (e.lanes = l), e;
  }
  function G0(e, t, l, n) {
    (e = Ct(22, e, n, t)), (e.elementType = me), (e.lanes = l);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var c = u._current;
        if (c === null) throw Error(s(456));
        if (!(u._pendingVisibility & 2)) {
          var o = ml(c, 2);
          o !== null && ((u._pendingVisibility |= 2), st(o, c, 2));
        }
      },
      attach: function () {
        var c = u._current;
        if (c === null) throw Error(s(456));
        if (u._pendingVisibility & 2) {
          var o = ml(c, 2);
          o !== null && ((u._pendingVisibility &= -3), st(o, c, 2));
        }
      },
    };
    return (e.stateNode = u), e;
  }
  function gf(e, t, l) {
    return (e = Ct(6, e, null, t)), (e.lanes = l), e;
  }
  function yf(e, t, l) {
    return (
      (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function nl(e) {
    e.flags |= 4;
  }
  function L0(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !z1(t))) {
      if (
        ((t = Nt.current),
        t !== null &&
          ((ve & 4194176) === ve
            ? Xt !== null
            : ((ve & 62914560) !== ve && !(ve & 536870912)) || t !== Xt))
      )
        throw ((ba = Sc), ao);
      e.flags |= 8192;
    }
  }
  function Fu(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? ur() : 536870912), (e.lanes |= t), (Bn |= t));
  }
  function wa(e, t) {
    if (!xe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), (l = l.sibling);
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      n = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags & 31457280),
          (n |= u.flags & 31457280),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (n |= u.subtreeFlags),
          (n |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= n), (e.childLanes = l), t;
  }
  function qm(e, t, l) {
    var n = t.pendingProps;
    switch ((pc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(t), null;
      case 1:
        return we(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Pt(ke),
          dn(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (ga(t)
              ? nl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), jt !== null && (Tf(jt), (jt = null)))),
          we(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (nl(t),
              l !== null ? (we(t), L0(t, l)) : (we(t), (t.flags &= -16777217)))
            : l
            ? l !== e.memoizedState
              ? (nl(t), we(t), L0(t, l))
              : (we(t), (t.flags &= -16777217))
            : (e.memoizedProps !== n && nl(t), we(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        su(t), (l = rl.current);
        var u = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== n && nl(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(s(166));
            return we(t), null;
          }
          (e = ht.current),
            ga(t) ? lo(t) : ((e = p1(u, n, l)), (t.stateNode = e), nl(t));
        }
        return we(t), null;
      case 5:
        if ((su(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && nl(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(s(166));
            return we(t), null;
          }
          if (((e = ht.current), ga(t))) lo(t);
          else {
            switch (((u = fi(rl.current)), e)) {
              case 1:
                e = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (e = u.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof n.is == "string"
                        ? u.createElement("select", { is: n.is })
                        : u.createElement("select")),
                      n.multiple
                        ? (e.multiple = !0)
                        : n.size && (e.size = n.size);
                    break;
                  default:
                    e =
                      typeof n.is == "string"
                        ? u.createElement(l, { is: n.is })
                        : u.createElement(l);
                }
            }
            (e[ut] = t), (e[rt] = n);
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = e;
            e: switch ((lt(e, l, n), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!n.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && nl(t);
          }
        }
        return we(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && nl(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = rl.current), ga(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (n = null),
              (u = ft),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  n = u.memoizedProps;
              }
            (e[ut] = t),
              (e = !!(
                e.nodeValue === l ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                d1(e.nodeValue, l)
              )),
              e || kl(t);
          } else (e = fi(e).createTextNode(n)), (e[ut] = t), (t.stateNode = e);
        }
        return we(t), null;
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = ga(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[ut] = t;
            } else
              ya(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            we(t), (u = !1);
          } else jt !== null && (Tf(jt), (jt = null)), (u = !0);
          if (!u) return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
        }
        if ((Jt(t), t.flags & 128)) return (t.lanes = l), t;
        if (
          ((l = n !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (n = t.child),
            (u = null),
            n.alternate !== null &&
              n.alternate.memoizedState !== null &&
              n.alternate.memoizedState.cachePool !== null &&
              (u = n.alternate.memoizedState.cachePool.pool);
          var c = null;
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (c = n.memoizedState.cachePool.pool),
            c !== u && (n.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          Fu(t, t.updateQueue),
          we(t),
          null
        );
      case 4:
        return dn(), e === null && jf(t.stateNode.containerInfo), we(t), null;
      case 10:
        return Pt(t.type), we(t), null;
      case 19:
        if ((Oe($e), (u = t.memoizedState), u === null)) return we(t), null;
        if (((n = (t.flags & 128) !== 0), (c = u.rendering), c === null))
          if (n) wa(u, !1);
          else {
            if (Be !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((c = Uu(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      wa(u, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      Fu(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    X0(l, e), (l = l.sibling);
                  return je($e, ($e.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              qt() > Iu &&
              ((t.flags |= 128), (n = !0), wa(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Uu(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Fu(t, e),
                wa(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !c.alternate &&
                  !xe)
              )
                return we(t), null;
            } else
              2 * qt() - u.renderingStartTime > Iu &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), wa(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = u.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (u.last = c));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = qt()),
            (t.sibling = null),
            (e = $e.current),
            je($e, n ? (e & 1) | 2 : e & 1),
            t)
          : (we(t), null);
      case 22:
      case 23:
        return (
          Jt(t),
          Mc(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? l & 536870912 &&
              !(t.flags & 128) &&
              (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : we(t),
          (l = t.updateQueue),
          l !== null && Fu(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== l && (t.flags |= 2048),
          e !== null && Oe(Jl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Pt(ke),
          we(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Bm(e, t) {
    switch ((pc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Pt(ke),
          dn(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return su(t), null;
      case 13:
        if (
          (Jt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          ya();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Oe($e), null;
      case 4:
        return dn(), null;
      case 10:
        return Pt(t.type), null;
      case 22:
      case 23:
        return (
          Jt(t),
          Mc(),
          e !== null && Oe(Jl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Pt(ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Q0(e, t) {
    switch ((pc(t), t.tag)) {
      case 3:
        Pt(ke), dn();
        break;
      case 26:
      case 27:
      case 5:
        su(t);
        break;
      case 4:
        dn();
        break;
      case 13:
        Jt(t);
        break;
      case 19:
        Oe($e);
        break;
      case 10:
        Pt(t.type);
        break;
      case 22:
      case 23:
        Jt(t), Mc(), e !== null && Oe(Jl);
        break;
      case 24:
        Pt(ke);
    }
  }
  var Xm = {
      getCacheForType: function (e) {
        var t = it(ke),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    Gm = typeof WeakMap == "function" ? WeakMap : Map,
    Ye = 0,
    De = null,
    de = null,
    ve = 0,
    He = 0,
    bt = null,
    al = !1,
    qn = !1,
    vf = !1,
    ul = 0,
    Be = 0,
    Al = 0,
    an = 0,
    pf = 0,
    Dt = 0,
    Bn = 0,
    Ya = null,
    Lt = null,
    bf = !1,
    Sf = 0,
    Iu = 1 / 0,
    Pu = null,
    Nl = null,
    ei = !1,
    un = null,
    qa = 0,
    xf = 0,
    Mf = null,
    Ba = 0,
    _f = null;
  function St() {
    if (Ye & 2 && ve !== 0) return ve & -ve;
    if (L.T !== null) {
      var e = Rn;
      return e !== 0 ? e : Cf();
    }
    return sr();
  }
  function Z0() {
    Dt === 0 && (Dt = !(ve & 536870912) || xe ? ar() : 536870912);
    var e = Nt.current;
    return e !== null && (e.flags |= 32), Dt;
  }
  function st(e, t, l) {
    ((e === De && He === 2) || e.cancelPendingCommit !== null) &&
      (Xn(e, 0), il(e, ve, Dt, !1)),
      na(e, l),
      (!(Ye & 2) || e !== De) &&
        (e === De && (!(Ye & 2) && (an |= l), Be === 4 && il(e, ve, Dt, !1)),
        Qt(e));
  }
  function V0(e, t, l) {
    if (Ye & 6) throw Error(s(327));
    var n = (!l && (t & 60) === 0 && (t & e.expiredLanes) === 0) || la(e, t),
      u = n ? Zm(e, t) : Af(e, t, !0),
      c = n;
    do {
      if (u === 0) {
        qn && !n && il(e, t, 0, !1);
        break;
      } else if (u === 6) il(e, t, 0, !al);
      else {
        if (((l = e.current.alternate), c && !Lm(l))) {
          (u = Af(e, t, !1)), (c = !1);
          continue;
        }
        if (u === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var o = 0;
          else
            (o = e.pendingLanes & -536870913),
              (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0);
          if (o !== 0) {
            t = o;
            e: {
              var d = e;
              u = Ya;
              var g = d.current.memoizedState.isDehydrated;
              if ((g && (Xn(d, o).flags |= 256), (o = Af(d, o, !1)), o !== 2)) {
                if (vf && !g) {
                  (d.errorRecoveryDisabledLanes |= c), (an |= c), (u = 4);
                  break e;
                }
                (c = Lt), (Lt = u), c !== null && Tf(c);
              }
              u = o;
            }
            if (((c = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Xn(e, 0), il(e, t, 0, !0);
          break;
        }
        e: {
          switch (((n = e), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194176) === t) {
                il(n, t, Dt, !al);
                break e;
              }
              break;
            case 2:
              Lt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((n.finishedWork = l),
            (n.finishedLanes = t),
            (t & 62914560) === t && ((c = Sf + 300 - qt()), 10 < c))
          ) {
            if ((il(n, t, Dt, !al), hu(n, 0) !== 0)) break e;
            n.timeoutHandle = g1(
              $0.bind(null, n, l, Lt, Pu, bf, t, Dt, an, Bn, al, 2, -0, 0),
              c
            );
            break e;
          }
          $0(n, l, Lt, Pu, bf, t, Dt, an, Bn, al, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Qt(e);
  }
  function Tf(e) {
    Lt === null ? (Lt = e) : Lt.push.apply(Lt, e);
  }
  function $0(e, t, l, n, u, c, o, d, g, S, A, U, E) {
    var z = t.subtreeFlags;
    if (
      (z & 8192 || (z & 16785408) === 16785408) &&
      ((Va = { stylesheets: null, count: 0, unsuspend: _g }),
      w0(t),
      (t = Eg()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(P0.bind(null, e, l, n, u, o, d, g, 1, U, E))),
        il(e, c, o, !S);
      return;
    }
    P0(e, l, n, u, o, d, g, A, U, E);
  }
  function Lm(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var n = 0; n < l.length; n++) {
          var u = l[n],
            c = u.getSnapshot;
          u = u.value;
          try {
            if (!yt(c(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function il(e, t, l, n) {
    (t &= ~pf),
      (t &= ~an),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes);
    for (var u = t; 0 < u; ) {
      var c = 31 - gt(u),
        o = 1 << c;
      (n[c] = -1), (u &= ~o);
    }
    l !== 0 && ir(e, l, t);
  }
  function ti() {
    return Ye & 6 ? !0 : (Xa(0), !1);
  }
  function Ef() {
    if (de !== null) {
      if (He === 0) var e = de.return;
      else (e = de), (It = en = null), Rc(e), (Nn = null), (Sa = 0), (e = de);
      for (; e !== null; ) Q0(e.alternate, e), (e = e.return);
      de = null;
    }
  }
  function Xn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), cg(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Ef(),
      (De = e),
      (de = l = zl(e.current, null)),
      (ve = t),
      (He = 0),
      (bt = null),
      (al = !1),
      (qn = la(e, t)),
      (vf = !1),
      (Bn = Dt = pf = an = Al = Be = 0),
      (Lt = Ya = null),
      (bf = !1),
      t & 8 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var u = 31 - gt(n),
          c = 1 << u;
        (t |= e[u]), (n &= ~c);
      }
    return (ul = t), Eu(), l;
  }
  function k0(e, t) {
    (re = null),
      (L.H = Gt),
      t === pa
        ? ((t = co()), (He = 3))
        : t === ao
        ? ((t = co()), (He = 4))
        : (He =
            t === i0
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (bt = t),
      de === null && ((Be = 1), Vu(e, Et(t, e.current)));
  }
  function K0() {
    var e = L.H;
    return (L.H = Gt), e === null ? Gt : e;
  }
  function J0() {
    var e = L.A;
    return (L.A = Xm), e;
  }
  function zf() {
    (Be = 4),
      al || ((ve & 4194176) !== ve && Nt.current !== null) || (qn = !0),
      (!(Al & 134217727) && !(an & 134217727)) ||
        De === null ||
        il(De, ve, Dt, !1);
  }
  function Af(e, t, l) {
    var n = Ye;
    Ye |= 2;
    var u = K0(),
      c = J0();
    (De !== e || ve !== t) && ((Pu = null), Xn(e, t)), (t = !1);
    var o = Be;
    e: do
      try {
        if (He !== 0 && de !== null) {
          var d = de,
            g = bt;
          switch (He) {
            case 8:
              Ef(), (o = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Nt.current === null && (t = !0);
              var S = He;
              if (((He = 0), (bt = null), Gn(e, d, g, S), l && qn)) {
                o = 0;
                break e;
              }
              break;
            default:
              (S = He), (He = 0), (bt = null), Gn(e, d, g, S);
          }
        }
        Qm(), (o = Be);
        break;
      } catch (A) {
        k0(e, A);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (It = en = null),
      (Ye = n),
      (L.H = u),
      (L.A = c),
      de === null && ((De = null), (ve = 0), Eu()),
      o
    );
  }
  function Qm() {
    for (; de !== null; ) W0(de);
  }
  function Zm(e, t) {
    var l = Ye;
    Ye |= 2;
    var n = K0(),
      u = J0();
    De !== e || ve !== t
      ? ((Pu = null), (Iu = qt() + 500), Xn(e, t))
      : (qn = la(e, t));
    e: do
      try {
        if (He !== 0 && de !== null) {
          t = de;
          var c = bt;
          t: switch (He) {
            case 1:
              (He = 0), (bt = null), Gn(e, t, c, 1);
              break;
            case 2:
              if (uo(c)) {
                (He = 0), (bt = null), F0(t);
                break;
              }
              (t = function () {
                He === 2 && De === e && (He = 7), Qt(e);
              }),
                c.then(t, t);
              break e;
            case 3:
              He = 7;
              break e;
            case 4:
              He = 5;
              break e;
            case 7:
              uo(c)
                ? ((He = 0), (bt = null), F0(t))
                : ((He = 0), (bt = null), Gn(e, t, c, 7));
              break;
            case 5:
              var o = null;
              switch (de.tag) {
                case 26:
                  o = de.memoizedState;
                case 5:
                case 27:
                  var d = de;
                  if (!o || z1(o)) {
                    (He = 0), (bt = null);
                    var g = d.sibling;
                    if (g !== null) de = g;
                    else {
                      var S = d.return;
                      S !== null ? ((de = S), li(S)) : (de = null);
                    }
                    break t;
                  }
              }
              (He = 0), (bt = null), Gn(e, t, c, 5);
              break;
            case 6:
              (He = 0), (bt = null), Gn(e, t, c, 6);
              break;
            case 8:
              Ef(), (Be = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        Vm();
        break;
      } catch (A) {
        k0(e, A);
      }
    while (!0);
    return (
      (It = en = null),
      (L.H = n),
      (L.A = u),
      (Ye = l),
      de !== null ? 0 : ((De = null), (ve = 0), Eu(), Be)
    );
  }
  function Vm() {
    for (; de !== null && !hh(); ) W0(de);
  }
  function W0(e) {
    var t = p0(e.alternate, e, ul);
    (e.memoizedProps = e.pendingProps), t === null ? li(e) : (de = t);
  }
  function F0(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = d0(l, t, t.pendingProps, t.type, void 0, ve);
        break;
      case 11:
        t = d0(l, t, t.pendingProps, t.type.render, t.ref, ve);
        break;
      case 5:
        Rc(t);
      default:
        Q0(l, t), (t = de = X0(t, ul)), (t = p0(l, t, ul));
    }
    (e.memoizedProps = e.pendingProps), t === null ? li(e) : (de = t);
  }
  function Gn(e, t, l, n) {
    (It = en = null), Rc(t), (Nn = null), (Sa = 0);
    var u = t.return;
    try {
      if (Hm(e, u, t, l, ve)) {
        (Be = 1), Vu(e, Et(l, e.current)), (de = null);
        return;
      }
    } catch (c) {
      if (u !== null) throw ((de = u), c);
      (Be = 1), Vu(e, Et(l, e.current)), (de = null);
      return;
    }
    t.flags & 32768
      ? (xe || n === 1
          ? (e = !0)
          : qn || ve & 536870912
          ? (e = !1)
          : ((al = e = !0),
            (n === 2 || n === 3 || n === 6) &&
              ((n = Nt.current),
              n !== null && n.tag === 13 && (n.flags |= 16384))),
        I0(t, e))
      : li(t);
  }
  function li(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        I0(t, al);
        return;
      }
      e = t.return;
      var l = qm(t.alternate, t, ul);
      if (l !== null) {
        de = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function I0(e, t) {
    do {
      var l = Bm(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (de = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        de = e;
        return;
      }
      de = e = l;
    } while (e !== null);
    (Be = 6), (de = null);
  }
  function P0(e, t, l, n, u, c, o, d, g, S) {
    var A = L.T,
      U = N.p;
    try {
      (N.p = 2), (L.T = null), $m(e, t, l, n, U, u, c, o, d, g, S);
    } finally {
      (L.T = A), (N.p = U);
    }
  }
  function $m(e, t, l, n, u, c, o, d) {
    do Ln();
    while (un !== null);
    if (Ye & 6) throw Error(s(327));
    var g = e.finishedWork;
    if (((n = e.finishedLanes), g === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), g === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var S = g.lanes | g.childLanes;
    if (
      ((S |= gc),
      Th(e, n, S, c, o, d),
      e === De && ((de = De = null), (ve = 0)),
      (!(g.subtreeFlags & 10256) && !(g.flags & 10256)) ||
        ei ||
        ((ei = !0),
        (xf = S),
        (Mf = l),
        Wm(ru, function () {
          return Ln(), null;
        })),
      (l = (g.flags & 15990) !== 0),
      g.subtreeFlags & 15990 || l
        ? ((l = L.T),
          (L.T = null),
          (c = N.p),
          (N.p = 2),
          (o = Ye),
          (Ye |= 4),
          jm(e, g),
          H0(g, e),
          ym(Bf, e.containerInfo),
          (mi = !!qf),
          (Bf = qf = null),
          (e.current = g),
          O0(e, g.alternate, g),
          mh(),
          (Ye = o),
          (N.p = c),
          (L.T = l))
        : (e.current = g),
      ei ? ((ei = !1), (un = e), (qa = n)) : e1(e, S),
      (S = e.pendingLanes),
      S === 0 && (Nl = null),
      bh(g.stateNode),
      Qt(e),
      t !== null)
    )
      for (u = e.onRecoverableError, g = 0; g < t.length; g++)
        (S = t[g]), u(S.value, { componentStack: S.stack });
    return (
      qa & 3 && Ln(),
      (S = e.pendingLanes),
      n & 4194218 && S & 42
        ? e === _f
          ? Ba++
          : ((Ba = 0), (_f = e))
        : (Ba = 0),
      Xa(0),
      null
    );
  }
  function e1(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ma(t)));
  }
  function Ln() {
    if (un !== null) {
      var e = un,
        t = xf;
      xf = 0;
      var l = fr(qa),
        n = L.T,
        u = N.p;
      try {
        if (((N.p = 32 > l ? 32 : l), (L.T = null), un === null)) var c = !1;
        else {
          (l = Mf), (Mf = null);
          var o = un,
            d = qa;
          if (((un = null), (qa = 0), Ye & 6)) throw Error(s(331));
          var g = Ye;
          if (
            ((Ye |= 4),
            q0(o.current),
            j0(o, o.current, d, l),
            (Ye = g),
            Xa(0, !1),
            mt && typeof mt.onPostCommitFiberRoot == "function")
          )
            try {
              mt.onPostCommitFiberRoot(ta, o);
            } catch {}
          c = !0;
        }
        return c;
      } finally {
        (N.p = u), (L.T = n), e1(e, t);
      }
    }
    return !1;
  }
  function t1(e, t, l) {
    (t = Et(l, t)),
      (t = Zc(e.stateNode, t, 2)),
      (e = Ml(e, t, 2)),
      e !== null && (na(e, 2), Qt(e));
  }
  function Re(e, t, l) {
    if (e.tag === 3) t1(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          t1(t, e, l);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Nl === null || !Nl.has(n)))
          ) {
            (e = Et(l, e)),
              (l = a0(2)),
              (n = Ml(t, l, 2)),
              n !== null && (u0(l, n, t, e), na(n, 2), Qt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nf(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Gm();
      var u = new Set();
      n.set(t, u);
    } else (u = n.get(t)), u === void 0 && ((u = new Set()), n.set(t, u));
    u.has(l) ||
      ((vf = !0), u.add(l), (e = km.bind(null, e, t, l)), t.then(e, e));
  }
  function km(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      De === e &&
        (ve & l) === l &&
        (Be === 4 || (Be === 3 && (ve & 62914560) === ve && 300 > qt() - Sf)
          ? !(Ye & 2) && Xn(e, 0)
          : (pf |= l),
        Bn === ve && (Bn = 0)),
      Qt(e);
  }
  function l1(e, t) {
    t === 0 && (t = ur()), (e = ml(e, t)), e !== null && (na(e, t), Qt(e));
  }
  function Km(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), l1(e, l);
  }
  function Jm(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          u = e.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    n !== null && n.delete(t), l1(e, l);
  }
  function Wm(e, t) {
    return Vi(e, t);
  }
  var ni = null,
    Qn = null,
    Of = !1,
    ai = !1,
    Rf = !1,
    cn = 0;
  function Qt(e) {
    e !== Qn &&
      e.next === null &&
      (Qn === null ? (ni = Qn = e) : (Qn = Qn.next = e)),
      (ai = !0),
      Of || ((Of = !0), Im(Fm));
  }
  function Xa(e, t) {
    if (!Rf && ai) {
      Rf = !0;
      do
        for (var l = !1, n = ni; n !== null; ) {
          if (e !== 0) {
            var u = n.pendingLanes;
            if (u === 0) var c = 0;
            else {
              var o = n.suspendedLanes,
                d = n.pingedLanes;
              (c = (1 << (31 - gt(42 | e) + 1)) - 1),
                (c &= u & ~(o & ~d)),
                (c = c & 201326677 ? (c & 201326677) | 1 : c ? c | 2 : 0);
            }
            c !== 0 && ((l = !0), u1(n, c));
          } else
            (c = ve),
              (c = hu(n, n === De ? c : 0)),
              !(c & 3) || la(n, c) || ((l = !0), u1(n, c));
          n = n.next;
        }
      while (l);
      Rf = !1;
    }
  }
  function Fm() {
    ai = Of = !1;
    var e = 0;
    cn !== 0 && (ig() && (e = cn), (cn = 0));
    for (var t = qt(), l = null, n = ni; n !== null; ) {
      var u = n.next,
        c = n1(n, t);
      c === 0
        ? ((n.next = null),
          l === null ? (ni = u) : (l.next = u),
          u === null && (Qn = l))
        : ((l = n), (e !== 0 || c & 3) && (ai = !0)),
        (n = u);
    }
    Xa(e);
  }
  function n1(e, t) {
    for (
      var l = e.suspendedLanes,
        n = e.pingedLanes,
        u = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;

    ) {
      var o = 31 - gt(c),
        d = 1 << o,
        g = u[o];
      g === -1
        ? (!(d & l) || d & n) && (u[o] = _h(d, t))
        : g <= t && (e.expiredLanes |= d),
        (c &= ~d);
    }
    if (
      ((t = De),
      (l = ve),
      (l = hu(e, e === t ? l : 0)),
      (n = e.callbackNode),
      l === 0 || (e === t && He === 2) || e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && $i(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (!(l & 3) || la(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((n !== null && $i(n), fr(l))) {
        case 2:
        case 8:
          l = lr;
          break;
        case 32:
          l = ru;
          break;
        case 268435456:
          l = nr;
          break;
        default:
          l = ru;
      }
      return (
        (n = a1.bind(null, e)),
        (l = Vi(l, n)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      n !== null && n !== null && $i(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function a1(e, t) {
    var l = e.callbackNode;
    if (Ln() && e.callbackNode !== l) return null;
    var n = ve;
    return (
      (n = hu(e, e === De ? n : 0)),
      n === 0
        ? null
        : (V0(e, n, t),
          n1(e, qt()),
          e.callbackNode != null && e.callbackNode === l
            ? a1.bind(null, e)
            : null)
    );
  }
  function u1(e, t) {
    if (Ln()) return null;
    V0(e, t, !0);
  }
  function Im(e) {
    fg(function () {
      Ye & 6 ? Vi(tr, e) : e();
    });
  }
  function Cf() {
    return cn === 0 && (cn = ar()), cn;
  }
  function i1(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : pu("" + e);
  }
  function c1(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function Pm(e, t, l, n, u) {
    if (t === "submit" && l && l.stateNode === u) {
      var c = i1((u[rt] || null).action),
        o = n.submitter;
      o &&
        ((t = (t = o[rt] || null)
          ? i1(t.formAction)
          : o.getAttribute("formAction")),
        t !== null && ((c = t), (o = null)));
      var d = new Mu("action", "action", null, n, u);
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (cn !== 0) {
                  var g = o ? c1(u, o) : new FormData(u);
                  Bc(
                    l,
                    { pending: !0, data: g, method: u.method, action: c },
                    null,
                    g
                  );
                }
              } else
                typeof c == "function" &&
                  (d.preventDefault(),
                  (g = o ? c1(u, o) : new FormData(u)),
                  Bc(
                    l,
                    { pending: !0, data: g, method: u.method, action: c },
                    c,
                    g
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Df = 0; Df < Ir.length; Df++) {
    var Hf = Ir[Df],
      eg = Hf.toLowerCase(),
      tg = Hf[0].toUpperCase() + Hf.slice(1);
    Ut(eg, "on" + tg);
  }
  Ut(kr, "onAnimationEnd"),
    Ut(Kr, "onAnimationIteration"),
    Ut(Jr, "onAnimationStart"),
    Ut("dblclick", "onDoubleClick"),
    Ut("focusin", "onFocus"),
    Ut("focusout", "onBlur"),
    Ut(pm, "onTransitionRun"),
    Ut(bm, "onTransitionStart"),
    Ut(Sm, "onTransitionCancel"),
    Ut(Wr, "onTransitionEnd"),
    yn("onMouseEnter", ["mouseout", "mouseover"]),
    yn("onMouseLeave", ["mouseout", "mouseover"]),
    yn("onPointerEnter", ["pointerout", "pointerover"]),
    yn("onPointerLeave", ["pointerout", "pointerover"]),
    Gl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Gl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Gl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Gl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Gl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Gl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ga =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    lg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ga)
    );
  function f1(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l],
        u = n.event;
      n = n.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var o = n.length - 1; 0 <= o; o--) {
            var d = n[o],
              g = d.instance,
              S = d.currentTarget;
            if (((d = d.listener), g !== c && u.isPropagationStopped()))
              break e;
            (c = d), (u.currentTarget = S);
            try {
              c(u);
            } catch (A) {
              Zu(A);
            }
            (u.currentTarget = null), (c = g);
          }
        else
          for (o = 0; o < n.length; o++) {
            if (
              ((d = n[o]),
              (g = d.instance),
              (S = d.currentTarget),
              (d = d.listener),
              g !== c && u.isPropagationStopped())
            )
              break e;
            (c = d), (u.currentTarget = S);
            try {
              c(u);
            } catch (A) {
              Zu(A);
            }
            (u.currentTarget = null), (c = g);
          }
      }
    }
  }
  function ye(e, t) {
    var l = t[Ki];
    l === void 0 && (l = t[Ki] = new Set());
    var n = e + "__bubble";
    l.has(n) || (s1(t, e, 2, !1), l.add(n));
  }
  function Uf(e, t, l) {
    var n = 0;
    t && (n |= 4), s1(l, e, n, t);
  }
  var ui = "_reactListening" + Math.random().toString(36).slice(2);
  function jf(e) {
    if (!e[ui]) {
      (e[ui] = !0),
        or.forEach(function (l) {
          l !== "selectionchange" && (lg.has(l) || Uf(l, !1, e), Uf(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ui] || ((t[ui] = !0), Uf("selectionchange", !1, t));
    }
  }
  function s1(e, t, l, n) {
    switch (D1(t)) {
      case 2:
        var u = Ng;
        break;
      case 8:
        u = Og;
        break;
      default:
        u = Kf;
    }
    (l = u.bind(null, t, l, e)),
      (u = void 0),
      !lc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      n
        ? u !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: u })
          : e.addEventListener(t, l, !0)
        : u !== void 0
        ? e.addEventListener(t, l, { passive: u })
        : e.addEventListener(t, l, !1);
  }
  function wf(e, t, l, n, u) {
    var c = n;
    if (!(t & 1) && !(t & 2) && n !== null)
      e: for (;;) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var d = n.stateNode.containerInfo;
          if (d === u || (d.nodeType === 8 && d.parentNode === u)) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var g = o.tag;
              if (
                (g === 3 || g === 4) &&
                ((g = o.stateNode.containerInfo),
                g === u || (g.nodeType === 8 && g.parentNode === u))
              )
                return;
              o = o.return;
            }
          for (; d !== null; ) {
            if (((o = Xl(d)), o === null)) return;
            if (((g = o.tag), g === 5 || g === 6 || g === 26 || g === 27)) {
              n = c = o;
              continue e;
            }
            d = d.parentNode;
          }
        }
        n = n.return;
      }
    _r(function () {
      var S = c,
        A = ec(l),
        U = [];
      e: {
        var E = Fr.get(e);
        if (E !== void 0) {
          var z = Mu,
            $ = e;
          switch (e) {
            case "keypress":
              if (Su(l) === 0) break e;
            case "keydown":
            case "keyup":
              z = Jh;
              break;
            case "focusin":
              ($ = "focus"), (z = ic);
              break;
            case "focusout":
              ($ = "blur"), (z = ic);
              break;
            case "beforeblur":
            case "afterblur":
              z = ic;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              z = zr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Yh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = Ih;
              break;
            case kr:
            case Kr:
            case Jr:
              z = Xh;
              break;
            case Wr:
              z = em;
              break;
            case "scroll":
            case "scrollend":
              z = jh;
              break;
            case "wheel":
              z = lm;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Lh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Nr;
              break;
            case "toggle":
            case "beforetoggle":
              z = am;
          }
          var ae = (t & 4) !== 0,
            Xe = !ae && (e === "scroll" || e === "scrollend"),
            M = ae ? (E !== null ? E + "Capture" : null) : E;
          ae = [];
          for (var p = S, _; p !== null; ) {
            var R = p;
            if (
              ((_ = R.stateNode),
              (R = R.tag),
              (R !== 5 && R !== 26 && R !== 27) ||
                _ === null ||
                M === null ||
                ((R = ia(p, M)), R != null && ae.push(La(p, R, _))),
              Xe)
            )
              break;
            p = p.return;
          }
          0 < ae.length &&
            ((E = new z(E, $, null, l, A)),
            U.push({ event: E, listeners: ae }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((E = e === "mouseover" || e === "pointerover"),
            (z = e === "mouseout" || e === "pointerout"),
            E &&
              l !== Pi &&
              ($ = l.relatedTarget || l.fromElement) &&
              (Xl($) || $[hn]))
          )
            break e;
          if (
            (z || E) &&
            ((E =
              A.window === A
                ? A
                : (E = A.ownerDocument)
                ? E.defaultView || E.parentWindow
                : window),
            z
              ? (($ = l.relatedTarget || l.toElement),
                (z = S),
                ($ = $ ? Xl($) : null),
                $ !== null &&
                  ((Xe = k($)),
                  (ae = $.tag),
                  $ !== Xe || (ae !== 5 && ae !== 27 && ae !== 6)) &&
                  ($ = null))
              : ((z = null), ($ = S)),
            z !== $)
          ) {
            if (
              ((ae = zr),
              (R = "onMouseLeave"),
              (M = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ae = Nr),
                (R = "onPointerLeave"),
                (M = "onPointerEnter"),
                (p = "pointer")),
              (Xe = z == null ? E : ua(z)),
              (_ = $ == null ? E : ua($)),
              (E = new ae(R, p + "leave", z, l, A)),
              (E.target = Xe),
              (E.relatedTarget = _),
              (R = null),
              Xl(A) === S &&
                ((ae = new ae(M, p + "enter", $, l, A)),
                (ae.target = _),
                (ae.relatedTarget = Xe),
                (R = ae)),
              (Xe = R),
              z && $)
            )
              t: {
                for (ae = z, M = $, p = 0, _ = ae; _; _ = Zn(_)) p++;
                for (_ = 0, R = M; R; R = Zn(R)) _++;
                for (; 0 < p - _; ) (ae = Zn(ae)), p--;
                for (; 0 < _ - p; ) (M = Zn(M)), _--;
                for (; p--; ) {
                  if (ae === M || (M !== null && ae === M.alternate)) break t;
                  (ae = Zn(ae)), (M = Zn(M));
                }
                ae = null;
              }
            else ae = null;
            z !== null && r1(U, E, z, ae, !1),
              $ !== null && Xe !== null && r1(U, Xe, $, ae, !0);
          }
        }
        e: {
          if (
            ((E = S ? ua(S) : window),
            (z = E.nodeName && E.nodeName.toLowerCase()),
            z === "select" || (z === "input" && E.type === "file"))
          )
            var Q = wr;
          else if (Ur(E))
            if (Yr) Q = mm;
            else {
              Q = dm;
              var oe = om;
            }
          else
            (z = E.nodeName),
              !z ||
              z.toLowerCase() !== "input" ||
              (E.type !== "checkbox" && E.type !== "radio")
                ? S && Ii(S.elementType) && (Q = wr)
                : (Q = hm);
          if (Q && (Q = Q(e, S))) {
            jr(U, Q, l, A);
            break e;
          }
          oe && oe(e, E, S),
            e === "focusout" &&
              S &&
              E.type === "number" &&
              S.memoizedProps.value != null &&
              Fi(E, "number", E.value);
        }
        switch (((oe = S ? ua(S) : window), e)) {
          case "focusin":
            (Ur(oe) || oe.contentEditable === "true") &&
              ((Mn = oe), (dc = S), (ma = null));
            break;
          case "focusout":
            ma = dc = Mn = null;
            break;
          case "mousedown":
            hc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (hc = !1), Vr(U, l, A);
            break;
          case "selectionchange":
            if (vm) break;
          case "keydown":
          case "keyup":
            Vr(U, l, A);
        }
        var W;
        if (fc)
          e: {
            switch (e) {
              case "compositionstart":
                var P = "onCompositionStart";
                break e;
              case "compositionend":
                P = "onCompositionEnd";
                break e;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break e;
            }
            P = void 0;
          }
        else
          xn
            ? Dr(e, l) && (P = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (P = "onCompositionStart");
        P &&
          (Or &&
            l.locale !== "ko" &&
            (xn || P !== "onCompositionStart"
              ? P === "onCompositionEnd" && xn && (W = Tr())
              : ((hl = A),
                (nc = "value" in hl ? hl.value : hl.textContent),
                (xn = !0))),
          (oe = ii(S, P)),
          0 < oe.length &&
            ((P = new Ar(P, e, null, l, A)),
            U.push({ event: P, listeners: oe }),
            W ? (P.data = W) : ((W = Hr(l)), W !== null && (P.data = W)))),
          (W = im ? cm(e, l) : fm(e, l)) &&
            ((P = ii(S, "onBeforeInput")),
            0 < P.length &&
              ((oe = new Ar("onBeforeInput", "beforeinput", null, l, A)),
              U.push({ event: oe, listeners: P }),
              (oe.data = W))),
          Pm(U, e, S, l, A);
      }
      f1(U, t);
    });
  }
  function La(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function ii(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var u = e,
        c = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          c === null ||
          ((u = ia(e, l)),
          u != null && n.unshift(La(e, u, c)),
          (u = ia(e, t)),
          u != null && n.push(La(e, u, c))),
        (e = e.return);
    }
    return n;
  }
  function Zn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function r1(e, t, l, n, u) {
    for (var c = t._reactName, o = []; l !== null && l !== n; ) {
      var d = l,
        g = d.alternate,
        S = d.stateNode;
      if (((d = d.tag), g !== null && g === n)) break;
      (d !== 5 && d !== 26 && d !== 27) ||
        S === null ||
        ((g = S),
        u
          ? ((S = ia(l, c)), S != null && o.unshift(La(l, S, g)))
          : u || ((S = ia(l, c)), S != null && o.push(La(l, S, g)))),
        (l = l.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var ng = /\r\n?/g,
    ag = /\u0000|\uFFFD/g;
  function o1(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ng,
        `
`
      )
      .replace(ag, "");
  }
  function d1(e, t) {
    return (t = o1(t)), o1(e) === t;
  }
  function ci() {}
  function ze(e, t, l, n, u, c) {
    switch (l) {
      case "children":
        typeof n == "string"
          ? t === "body" || (t === "textarea" && n === "") || pn(e, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            t !== "body" &&
            pn(e, "" + n);
        break;
      case "className":
        gu(e, "class", n);
        break;
      case "tabIndex":
        gu(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gu(e, l, n);
        break;
      case "style":
        xr(e, n, c);
        break;
      case "data":
        if (t !== "object") {
          gu(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (n = pu("" + n)), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof c == "function" &&
            (l === "formAction"
              ? (t !== "input" && ze(e, t, "name", u.name, u, null),
                ze(e, t, "formEncType", u.formEncType, u, null),
                ze(e, t, "formMethod", u.formMethod, u, null),
                ze(e, t, "formTarget", u.formTarget, u, null))
              : (ze(e, t, "encType", u.encType, u, null),
                ze(e, t, "method", u.method, u, null),
                ze(e, t, "target", u.target, u, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (n = pu("" + n)), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = ci);
        break;
      case "onScroll":
        n != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        n != null && ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = pu("" + n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(l, "" + n)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(l, "")
          : n !== !1 &&
            n != null &&
            typeof n != "function" &&
            typeof n != "symbol"
          ? e.setAttribute(l, n)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(l, n)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(l)
          : e.setAttribute(l, n);
        break;
      case "popover":
        ye("beforetoggle", e), ye("toggle", e), mu(e, "popover", n);
        break;
      case "xlinkActuate":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        $t(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        $t(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        mu(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Hh.get(l) || l), mu(e, l, n));
    }
  }
  function Yf(e, t, l, n, u, c) {
    switch (l) {
      case "style":
        xr(e, n, c);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
          if (((l = n.__html), l != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? pn(e, n)
          : (typeof n == "number" || typeof n == "bigint") && pn(e, "" + n);
        break;
      case "onScroll":
        n != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        n != null && ye("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = ci);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!dr.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (t = l.slice(2, u ? l.length - 7 : void 0)),
              (c = e[rt] || null),
              (c = c != null ? c[l] : null),
              typeof c == "function" && e.removeEventListener(t, c, u),
              typeof n == "function")
            ) {
              typeof c != "function" &&
                c !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, n, u);
              break e;
            }
            l in e
              ? (e[l] = n)
              : n === !0
              ? e.setAttribute(l, "")
              : mu(e, l, n);
          }
    }
  }
  function lt(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ye("error", e), ye("load", e);
        var n = !1,
          u = !1,
          c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var o = l[c];
            if (o != null)
              switch (c) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  ze(e, t, c, o, l, null);
              }
          }
        u && ze(e, t, "srcSet", l.srcSet, l, null),
          n && ze(e, t, "src", l.src, l, null);
        return;
      case "input":
        ye("invalid", e);
        var d = (c = o = u = null),
          g = null,
          S = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var A = l[n];
            if (A != null)
              switch (n) {
                case "name":
                  u = A;
                  break;
                case "type":
                  o = A;
                  break;
                case "checked":
                  g = A;
                  break;
                case "defaultChecked":
                  S = A;
                  break;
                case "value":
                  c = A;
                  break;
                case "defaultValue":
                  d = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null) throw Error(s(137, t));
                  break;
                default:
                  ze(e, t, n, A, l, null);
              }
          }
        vr(e, c, d, g, S, o, u, !1), yu(e);
        return;
      case "select":
        ye("invalid", e), (n = o = c = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((d = l[u]), d != null))
            switch (u) {
              case "value":
                c = d;
                break;
              case "defaultValue":
                o = d;
                break;
              case "multiple":
                n = d;
              default:
                ze(e, t, u, d, l, null);
            }
        (t = c),
          (l = o),
          (e.multiple = !!n),
          t != null ? vn(e, !!n, t, !1) : l != null && vn(e, !!n, l, !0);
        return;
      case "textarea":
        ye("invalid", e), (c = u = n = null);
        for (o in l)
          if (l.hasOwnProperty(o) && ((d = l[o]), d != null))
            switch (o) {
              case "value":
                n = d;
                break;
              case "defaultValue":
                u = d;
                break;
              case "children":
                c = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(s(91));
                break;
              default:
                ze(e, t, o, d, l, null);
            }
        br(e, n, u, c), yu(e);
        return;
      case "option":
        for (g in l)
          if (l.hasOwnProperty(g) && ((n = l[g]), n != null))
            switch (g) {
              case "selected":
                e.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                ze(e, t, g, n, l, null);
            }
        return;
      case "dialog":
        ye("cancel", e), ye("close", e);
        break;
      case "iframe":
      case "object":
        ye("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ga.length; n++) ye(Ga[n], e);
        break;
      case "image":
        ye("error", e), ye("load", e);
        break;
      case "details":
        ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ye("error", e), ye("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (S in l)
          if (l.hasOwnProperty(S) && ((n = l[S]), n != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                ze(e, t, S, n, l, null);
            }
        return;
      default:
        if (Ii(t)) {
          for (A in l)
            l.hasOwnProperty(A) &&
              ((n = l[A]), n !== void 0 && Yf(e, t, A, n, l, void 0));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && ((n = l[d]), n != null && ze(e, t, d, n, l, null));
  }
  function ug(e, t, l, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          c = null,
          o = null,
          d = null,
          g = null,
          S = null,
          A = null;
        for (z in l) {
          var U = l[z];
          if (l.hasOwnProperty(z) && U != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = U;
              default:
                n.hasOwnProperty(z) || ze(e, t, z, null, n, U);
            }
        }
        for (var E in n) {
          var z = n[E];
          if (((U = l[E]), n.hasOwnProperty(E) && (z != null || U != null)))
            switch (E) {
              case "type":
                c = z;
                break;
              case "name":
                u = z;
                break;
              case "checked":
                S = z;
                break;
              case "defaultChecked":
                A = z;
                break;
              case "value":
                o = z;
                break;
              case "defaultValue":
                d = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(s(137, t));
                break;
              default:
                z !== U && ze(e, t, E, z, n, U);
            }
        }
        Wi(e, o, d, g, S, A, c, u);
        return;
      case "select":
        z = o = d = E = null;
        for (c in l)
          if (((g = l[c]), l.hasOwnProperty(c) && g != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                z = g;
              default:
                n.hasOwnProperty(c) || ze(e, t, c, null, n, g);
            }
        for (u in n)
          if (
            ((c = n[u]),
            (g = l[u]),
            n.hasOwnProperty(u) && (c != null || g != null))
          )
            switch (u) {
              case "value":
                E = c;
                break;
              case "defaultValue":
                d = c;
                break;
              case "multiple":
                o = c;
              default:
                c !== g && ze(e, t, u, c, n, g);
            }
        (t = d),
          (l = o),
          (n = z),
          E != null
            ? vn(e, !!l, E, !1)
            : !!n != !!l &&
              (t != null ? vn(e, !!l, t, !0) : vn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        z = E = null;
        for (d in l)
          if (
            ((u = l[d]),
            l.hasOwnProperty(d) && u != null && !n.hasOwnProperty(d))
          )
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                ze(e, t, d, null, n, u);
            }
        for (o in n)
          if (
            ((u = n[o]),
            (c = l[o]),
            n.hasOwnProperty(o) && (u != null || c != null))
          )
            switch (o) {
              case "value":
                E = u;
                break;
              case "defaultValue":
                z = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== c && ze(e, t, o, u, n, c);
            }
        pr(e, E, z);
        return;
      case "option":
        for (var $ in l)
          if (
            ((E = l[$]),
            l.hasOwnProperty($) && E != null && !n.hasOwnProperty($))
          )
            switch ($) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ze(e, t, $, null, n, E);
            }
        for (g in n)
          if (
            ((E = n[g]),
            (z = l[g]),
            n.hasOwnProperty(g) && E !== z && (E != null || z != null))
          )
            switch (g) {
              case "selected":
                e.selected =
                  E && typeof E != "function" && typeof E != "symbol";
                break;
              default:
                ze(e, t, g, E, n, z);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ae in l)
          (E = l[ae]),
            l.hasOwnProperty(ae) &&
              E != null &&
              !n.hasOwnProperty(ae) &&
              ze(e, t, ae, null, n, E);
        for (S in n)
          if (
            ((E = n[S]),
            (z = l[S]),
            n.hasOwnProperty(S) && E !== z && (E != null || z != null))
          )
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(s(137, t));
                break;
              default:
                ze(e, t, S, E, n, z);
            }
        return;
      default:
        if (Ii(t)) {
          for (var Xe in l)
            (E = l[Xe]),
              l.hasOwnProperty(Xe) &&
                E !== void 0 &&
                !n.hasOwnProperty(Xe) &&
                Yf(e, t, Xe, void 0, n, E);
          for (A in n)
            (E = n[A]),
              (z = l[A]),
              !n.hasOwnProperty(A) ||
                E === z ||
                (E === void 0 && z === void 0) ||
                Yf(e, t, A, E, n, z);
          return;
        }
    }
    for (var M in l)
      (E = l[M]),
        l.hasOwnProperty(M) &&
          E != null &&
          !n.hasOwnProperty(M) &&
          ze(e, t, M, null, n, E);
    for (U in n)
      (E = n[U]),
        (z = l[U]),
        !n.hasOwnProperty(U) ||
          E === z ||
          (E == null && z == null) ||
          ze(e, t, U, E, n, z);
  }
  var qf = null,
    Bf = null;
  function fi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function h1(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function m1(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Xf(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gf = null;
  function ig() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Gf
        ? !1
        : ((Gf = e), !0)
      : ((Gf = null), !1);
  }
  var g1 = typeof setTimeout == "function" ? setTimeout : void 0,
    cg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    y1 = typeof Promise == "function" ? Promise : void 0,
    fg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof y1 < "u"
        ? function (e) {
            return y1.resolve(null).then(e).catch(sg);
          }
        : g1;
  function sg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Lf(e, t) {
    var l = t,
      n = 0;
    do {
      var u = l.nextSibling;
      if ((e.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$")) {
          if (n === 0) {
            e.removeChild(u), Wa(t);
            return;
          }
          n--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || n++;
      l = u;
    } while (l);
    Wa(t);
  }
  function Qf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qf(l), Ji(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function rg(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var u = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[aa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== u.rel ||
                e.getAttribute("href") !== (u.href == null ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = Yt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function og(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Yt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Yt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function v1(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function p1(e, t, l) {
    switch (((t = fi(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var Ht = new Map(),
    b1 = new Set();
  function si(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var cl = N.d;
  N.d = { f: dg, r: hg, D: mg, C: gg, L: yg, m: vg, X: bg, S: pg, M: Sg };
  function dg() {
    var e = cl.f(),
      t = ti();
    return e || t;
  }
  function hg(e) {
    var t = mn(e);
    t !== null && t.tag === 5 && t.type === "form" ? $o(t) : cl.r(e);
  }
  var Vn = typeof document > "u" ? null : document;
  function S1(e, t, l) {
    var n = Vn;
    if (n && typeof t == "string" && t) {
      var u = _t(t);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        b1.has(u) ||
          (b1.add(u),
          (e = { rel: e, crossOrigin: l, href: t }),
          n.querySelector(u) === null &&
            ((t = n.createElement("link")),
            lt(t, "link", e),
            Je(t),
            n.head.appendChild(t)));
    }
  }
  function mg(e) {
    cl.D(e), S1("dns-prefetch", e, null);
  }
  function gg(e, t) {
    cl.C(e, t), S1("preconnect", e, t);
  }
  function yg(e, t, l) {
    cl.L(e, t, l);
    var n = Vn;
    if (n && e && t) {
      var u = 'link[rel="preload"][as="' + _t(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + _t(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (u += '[imagesizes="' + _t(l.imageSizes) + '"]'))
        : (u += '[href="' + _t(e) + '"]');
      var c = u;
      switch (t) {
        case "style":
          c = $n(e);
          break;
        case "script":
          c = kn(e);
      }
      Ht.has(c) ||
        ((e = V(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        Ht.set(c, e),
        n.querySelector(u) !== null ||
          (t === "style" && n.querySelector(Qa(c))) ||
          (t === "script" && n.querySelector(Za(c))) ||
          ((t = n.createElement("link")),
          lt(t, "link", e),
          Je(t),
          n.head.appendChild(t)));
    }
  }
  function vg(e, t) {
    cl.m(e, t);
    var l = Vn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + _t(n) + '"][href="' + _t(e) + '"]',
        c = u;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = kn(e);
      }
      if (
        !Ht.has(c) &&
        ((e = V({ rel: "modulepreload", href: e }, t)),
        Ht.set(c, e),
        l.querySelector(u) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Za(c))) return;
        }
        (n = l.createElement("link")),
          lt(n, "link", e),
          Je(n),
          l.head.appendChild(n);
      }
    }
  }
  function pg(e, t, l) {
    cl.S(e, t, l);
    var n = Vn;
    if (n && e) {
      var u = gn(n).hoistableStyles,
        c = $n(e);
      t = t || "default";
      var o = u.get(c);
      if (!o) {
        var d = { loading: 0, preload: null };
        if ((o = n.querySelector(Qa(c)))) d.loading = 5;
        else {
          (e = V({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Ht.get(c)) && Zf(e, l);
          var g = (o = n.createElement("link"));
          Je(g),
            lt(g, "link", e),
            (g._p = new Promise(function (S, A) {
              (g.onload = S), (g.onerror = A);
            })),
            g.addEventListener("load", function () {
              d.loading |= 1;
            }),
            g.addEventListener("error", function () {
              d.loading |= 2;
            }),
            (d.loading |= 4),
            ri(o, t, n);
        }
        (o = { type: "stylesheet", instance: o, count: 1, state: d }),
          u.set(c, o);
      }
    }
  }
  function bg(e, t) {
    cl.X(e, t);
    var l = Vn;
    if (l && e) {
      var n = gn(l).hoistableScripts,
        u = kn(e),
        c = n.get(u);
      c ||
        ((c = l.querySelector(Za(u))),
        c ||
          ((e = V({ src: e, async: !0 }, t)),
          (t = Ht.get(u)) && Vf(e, t),
          (c = l.createElement("script")),
          Je(c),
          lt(c, "link", e),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        n.set(u, c));
    }
  }
  function Sg(e, t) {
    cl.M(e, t);
    var l = Vn;
    if (l && e) {
      var n = gn(l).hoistableScripts,
        u = kn(e),
        c = n.get(u);
      c ||
        ((c = l.querySelector(Za(u))),
        c ||
          ((e = V({ src: e, async: !0, type: "module" }, t)),
          (t = Ht.get(u)) && Vf(e, t),
          (c = l.createElement("script")),
          Je(c),
          lt(c, "link", e),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        n.set(u, c));
    }
  }
  function x1(e, t, l, n) {
    var u = (u = rl.current) ? si(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = $n(l.href)),
            (l = gn(u).hoistableStyles),
            (n = l.get(t)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = $n(l.href);
          var c = gn(u).hoistableStyles,
            o = c.get(e);
          if (
            (o ||
              ((u = u.ownerDocument || u),
              (o = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, o),
              (c = u.querySelector(Qa(e))) &&
                !c._p &&
                ((o.instance = c), (o.state.loading = 5)),
              Ht.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Ht.set(e, l),
                c || xg(u, e, l, o.state))),
            t && n === null)
          )
            throw Error(s(528, ""));
          return o;
        }
        if (t && n !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = kn(l)),
              (l = gn(u).hoistableScripts),
              (n = l.get(t)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function $n(e) {
    return 'href="' + _t(e) + '"';
  }
  function Qa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function M1(e) {
    return V({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function xg(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (n.loading = 1)
      : ((t = e.createElement("link")),
        (n.preload = t),
        t.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        lt(t, "link", l),
        Je(t),
        e.head.appendChild(t));
  }
  function kn(e) {
    return '[src="' + _t(e) + '"]';
  }
  function Za(e) {
    return "script[async]" + e;
  }
  function _1(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + _t(l.href) + '"]');
          if (n) return (t.instance = n), Je(n), n;
          var u = V({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            Je(n),
            lt(n, "style", u),
            ri(n, l.precedence, e),
            (t.instance = n)
          );
        case "stylesheet":
          u = $n(l.href);
          var c = e.querySelector(Qa(u));
          if (c) return (t.state.loading |= 4), (t.instance = c), Je(c), c;
          (n = M1(l)),
            (u = Ht.get(u)) && Zf(n, u),
            (c = (e.ownerDocument || e).createElement("link")),
            Je(c);
          var o = c;
          return (
            (o._p = new Promise(function (d, g) {
              (o.onload = d), (o.onerror = g);
            })),
            lt(c, "link", n),
            (t.state.loading |= 4),
            ri(c, l.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = kn(l.src)),
            (u = e.querySelector(Za(c)))
              ? ((t.instance = u), Je(u), u)
              : ((n = l),
                (u = Ht.get(c)) && ((n = V({}, l)), Vf(n, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                Je(u),
                lt(u, "link", n),
                e.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((n = t.instance), (t.state.loading |= 4), ri(n, l.precedence, e));
    return t.instance;
  }
  function ri(e, t, l) {
    for (
      var n = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = n.length ? n[n.length - 1] : null,
        c = u,
        o = 0;
      o < n.length;
      o++
    ) {
      var d = n[o];
      if (d.dataset.precedence === t) c = d;
      else if (c !== u) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function Zf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Vf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var oi = null;
  function T1(e, t, l) {
    if (oi === null) {
      var n = new Map(),
        u = (oi = new Map());
      u.set(l, n);
    } else (u = oi), (n = u.get(l)), n || ((n = new Map()), u.set(l, n));
    if (n.has(e)) return n;
    for (
      n.set(e, null), l = l.getElementsByTagName(e), u = 0;
      u < l.length;
      u++
    ) {
      var c = l[u];
      if (
        !(
          c[aa] ||
          c[ut] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var o = c.getAttribute(t) || "";
        o = e + o;
        var d = n.get(o);
        d ? d.push(c) : n.set(o, [c]);
      }
    }
    return n;
  }
  function E1(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function Mg(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function z1(e) {
    return !(e.type === "stylesheet" && !(e.state.loading & 3));
  }
  var Va = null;
  function _g() {}
  function Tg(e, t, l) {
    if (Va === null) throw Error(s(475));
    var n = Va;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var u = $n(l.href),
          c = e.querySelector(Qa(u));
        if (c) {
          (e = c._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (n.count++, (n = di.bind(n)), e.then(n, n)),
            (t.state.loading |= 4),
            (t.instance = c),
            Je(c);
          return;
        }
        (c = e.ownerDocument || e),
          (l = M1(l)),
          (u = Ht.get(u)) && Zf(l, u),
          (c = c.createElement("link")),
          Je(c);
        var o = c;
        (o._p = new Promise(function (d, g) {
          (o.onload = d), (o.onerror = g);
        })),
          lt(c, "link", l),
          (t.instance = c);
      }
      n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (n.count++,
          (t = di.bind(n)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function Eg() {
    if (Va === null) throw Error(s(475));
    var e = Va;
    return (
      e.stylesheets && e.count === 0 && $f(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && $f(e, e.stylesheets), e.unsuspend)) {
                var n = e.unsuspend;
                (e.unsuspend = null), n();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function di() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) $f(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var hi = null;
  function $f(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (hi = new Map()),
        t.forEach(zg, e),
        (hi = null),
        di.call(e));
  }
  function zg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = hi.get(e);
      if (l) var n = l.get(null);
      else {
        (l = new Map()), hi.set(e, l);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            c = 0;
          c < u.length;
          c++
        ) {
          var o = u[c];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") &&
            (l.set(o.dataset.precedence, o), (n = o));
        }
        n && l.set(null, n);
      }
      (u = t.instance),
        (o = u.getAttribute("data-precedence")),
        (c = l.get(o) || n),
        c === n && l.set(null, u),
        l.set(o, u),
        this.count++,
        (n = di.bind(this)),
        u.addEventListener("load", n),
        u.addEventListener("error", n),
        c
          ? c.parentNode.insertBefore(u, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var $a = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function Ag(e, t, l, n, u, c, o, d) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ki(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ki(0)),
      (this.hiddenUpdates = ki(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = u),
      (this.onCaughtError = c),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map());
  }
  function A1(e, t, l, n, u, c, o, d, g, S, A, U) {
    return (
      (e = new Ag(e, t, l, o, d, g, S, U)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = Ct(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = _c()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: n, isDehydrated: l, cache: t }),
      nf(c),
      e
    );
  }
  function N1(e) {
    return e ? ((e = En), e) : En;
  }
  function O1(e, t, l, n, u, c) {
    (u = N1(u)),
      n.context === null ? (n.context = u) : (n.pendingContext = u),
      (n = xl(t)),
      (n.payload = { element: l }),
      (c = c === void 0 ? null : c),
      c !== null && (n.callback = c),
      (l = Ml(e, n, t)),
      l !== null && (st(l, e, t), Oa(l, e, t));
  }
  function R1(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function kf(e, t) {
    R1(e, t), (e = e.alternate) && R1(e, t);
  }
  function C1(e) {
    if (e.tag === 13) {
      var t = ml(e, 67108864);
      t !== null && st(t, e, 67108864), kf(e, 67108864);
    }
  }
  var mi = !0;
  function Ng(e, t, l, n) {
    var u = L.T;
    L.T = null;
    var c = N.p;
    try {
      (N.p = 2), Kf(e, t, l, n);
    } finally {
      (N.p = c), (L.T = u);
    }
  }
  function Og(e, t, l, n) {
    var u = L.T;
    L.T = null;
    var c = N.p;
    try {
      (N.p = 8), Kf(e, t, l, n);
    } finally {
      (N.p = c), (L.T = u);
    }
  }
  function Kf(e, t, l, n) {
    if (mi) {
      var u = Jf(n);
      if (u === null) wf(e, t, n, gi, l), H1(e, n);
      else if (Cg(u, e, t, l, n)) n.stopPropagation();
      else if ((H1(e, n), t & 4 && -1 < Rg.indexOf(e))) {
        for (; u !== null; ) {
          var c = mn(u);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var o = Bl(c.pendingLanes);
                  if (o !== 0) {
                    var d = c;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; o; ) {
                      var g = 1 << (31 - gt(o));
                      (d.entanglements[1] |= g), (o &= ~g);
                    }
                    Qt(c), !(Ye & 6) && ((Iu = qt() + 500), Xa(0));
                  }
                }
                break;
              case 13:
                (d = ml(c, 2)), d !== null && st(d, c, 2), ti(), kf(c, 2);
            }
          if (((c = Jf(n)), c === null && wf(e, t, n, gi, l), c === u)) break;
          u = c;
        }
        u !== null && n.stopPropagation();
      } else wf(e, t, n, null, l);
    }
  }
  function Jf(e) {
    return (e = ec(e)), Wf(e);
  }
  var gi = null;
  function Wf(e) {
    if (((gi = null), (e = Xl(e)), e !== null)) {
      var t = k(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = ce(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (gi = e), null;
  }
  function D1(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (gh()) {
          case tr:
            return 2;
          case lr:
            return 8;
          case ru:
          case yh:
            return 32;
          case nr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ff = !1,
    Ol = null,
    Rl = null,
    Cl = null,
    ka = new Map(),
    Ka = new Map(),
    Dl = [],
    Rg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function H1(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ol = null;
        break;
      case "dragenter":
      case "dragleave":
        Rl = null;
        break;
      case "mouseover":
      case "mouseout":
        Cl = null;
        break;
      case "pointerover":
      case "pointerout":
        ka.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ka.delete(t.pointerId);
    }
  }
  function Ja(e, t, l, n, u, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: n,
          nativeEvent: c,
          targetContainers: [u],
        }),
        t !== null && ((t = mn(t)), t !== null && C1(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Cg(e, t, l, n, u) {
    switch (t) {
      case "focusin":
        return (Ol = Ja(Ol, e, t, l, n, u)), !0;
      case "dragenter":
        return (Rl = Ja(Rl, e, t, l, n, u)), !0;
      case "mouseover":
        return (Cl = Ja(Cl, e, t, l, n, u)), !0;
      case "pointerover":
        var c = u.pointerId;
        return ka.set(c, Ja(ka.get(c) || null, e, t, l, n, u)), !0;
      case "gotpointercapture":
        return (
          (c = u.pointerId), Ka.set(c, Ja(Ka.get(c) || null, e, t, l, n, u)), !0
        );
    }
    return !1;
  }
  function U1(e) {
    var t = Xl(e.target);
    if (t !== null) {
      var l = k(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = ce(l)), t !== null)) {
            (e.blockedOn = t),
              Eh(e.priority, function () {
                if (l.tag === 13) {
                  var n = St(),
                    u = ml(l, n);
                  u !== null && st(u, l, n), kf(l, n);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function yi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Jf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(l.type, l);
        (Pi = n), l.target.dispatchEvent(n), (Pi = null);
      } else return (t = mn(l)), t !== null && C1(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function j1(e, t, l) {
    yi(e) && l.delete(t);
  }
  function Dg() {
    (Ff = !1),
      Ol !== null && yi(Ol) && (Ol = null),
      Rl !== null && yi(Rl) && (Rl = null),
      Cl !== null && yi(Cl) && (Cl = null),
      ka.forEach(j1),
      Ka.forEach(j1);
  }
  function vi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ff ||
        ((Ff = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Dg)));
  }
  var pi = null;
  function w1(e) {
    pi !== e &&
      ((pi = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        pi === e && (pi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            n = e[t + 1],
            u = e[t + 2];
          if (typeof n != "function") {
            if (Wf(n || l) === null) continue;
            break;
          }
          var c = mn(l);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Bc(c, { pending: !0, data: u, method: l.method, action: n }, n, u));
        }
      }));
  }
  function Wa(e) {
    function t(g) {
      return vi(g, e);
    }
    Ol !== null && vi(Ol, e),
      Rl !== null && vi(Rl, e),
      Cl !== null && vi(Cl, e),
      ka.forEach(t),
      Ka.forEach(t);
    for (var l = 0; l < Dl.length; l++) {
      var n = Dl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Dl.length && ((l = Dl[0]), l.blockedOn === null); )
      U1(l), l.blockedOn === null && Dl.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (n = 0; n < l.length; n += 3) {
        var u = l[n],
          c = l[n + 1],
          o = u[rt] || null;
        if (typeof c == "function") o || w1(l);
        else if (o) {
          var d = null;
          if (c && c.hasAttribute("formAction")) {
            if (((u = c), (o = c[rt] || null))) d = o.formAction;
            else if (Wf(u) !== null) continue;
          } else d = o.action;
          typeof d == "function" ? (l[n + 1] = d) : (l.splice(n, 3), (n -= 3)),
            w1(l);
        }
      }
  }
  function If(e) {
    this._internalRoot = e;
  }
  (bi.prototype.render = If.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var l = t.current,
        n = St();
      O1(l, n, e, t, null, null);
    }),
    (bi.prototype.unmount = If.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Ln(),
            O1(e.current, 2, null, e, null, null),
            ti(),
            (t[hn] = null);
        }
      });
  function bi(e) {
    this._internalRoot = e;
  }
  bi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = sr();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Dl.length && t !== 0 && t < Dl[l].priority; l++);
      Dl.splice(l, 0, e), l === 0 && U1(e);
    }
  };
  var Y1 = i.version;
  if (Y1 !== "19.0.0") throw Error(s(527, Y1, "19.0.0"));
  N.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = H(t)),
      (e = e !== null ? X(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Hg = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    findFiberByHostInstance: Xl,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Si.isDisabled && Si.supportsFiber)
      try {
        (ta = Si.inject(Hg)), (mt = Si);
      } catch {}
  }
  return (
    (Ia.createRoot = function (e, t) {
      if (!r(e)) throw Error(s(299));
      var l = !1,
        n = "",
        u = e0,
        c = t0,
        o = l0,
        d = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (d = t.unstable_transitionCallbacks)),
        (t = A1(e, 1, !1, null, null, l, n, u, c, o, d, null)),
        (e[hn] = t.current),
        jf(e.nodeType === 8 ? e.parentNode : e),
        new If(t)
      );
    }),
    (Ia.hydrateRoot = function (e, t, l) {
      if (!r(e)) throw Error(s(299));
      var n = !1,
        u = "",
        c = e0,
        o = t0,
        d = l0,
        g = null,
        S = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (n = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (c = l.onUncaughtError),
          l.onCaughtError !== void 0 && (o = l.onCaughtError),
          l.onRecoverableError !== void 0 && (d = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (g = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (S = l.formState)),
        (t = A1(e, 1, !0, t, l ?? null, n, u, c, o, d, g, S)),
        (t.context = N1(null)),
        (l = t.current),
        (n = St()),
        (u = xl(n)),
        (u.callback = null),
        Ml(l, u, n),
        (t.current.lanes = n),
        na(t, n),
        Qt(t),
        (e[hn] = t.current),
        jf(e),
        new bi(t)
      );
    }),
    (Ia.version = "19.0.0"),
    Ia
  );
}
var k1;
function kg() {
  if (k1) return ts.exports;
  k1 = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), (ts.exports = $g()), ts.exports;
}
var Kg = kg();
const K1 = 3,
  jl = [
    "#00000000",
    "var(--tag-color-1)",
    "var(--tag-color-2)",
    "var(--tag-color-3)",
    "var(--tag-color-4)",
    "var(--tag-color-5)",
    "var(--tag-color-6)",
  ];
function Ds(a, i, f, s) {
  return (f != s.cardIndex && i != 0) || i > K1 ? 0 : (i + 1) % (K1 + 1);
}
const Jg = ({ colorPickerState: a }) => {
    const i = jl.length,
      f = ((a.colorOffset % i) + i) % i;
    return T.jsxs("div", {
      className: "color-picker",
      style: { "--current-color": jl[f] },
      children: [
        T.jsx("input", {
          type: "range",
          step: "1",
          list: "colorTicks",
          value: f,
          min: 0,
          max: i - 1,
          readOnly: !0,
        }),
        T.jsx("datalist", {
          children: [...Array(i).keys()].map((s) =>
            T.jsx("option", { value: s }, s)
          ),
        }),
        T.jsx("div", {
          className: "color-strip",
          children: [...Array(i).keys()].map((s) =>
            T.jsx(
              "div",
              {
                className: s == f ? "active" : "passive",
                style: { backgroundColor: jl[s] },
              },
              s
            )
          ),
        }),
      ],
    });
  },
  Hs = ({ currentColor: a, onClick: i }) =>
    T.jsx("div", {
      "aria-hidden": "true",
      className: `tag ${i ? "clickable" : ""}`,
      onClick: i,
      style: {
        "--tag-color": a == 0 ? null : jl[a],
        "--tag-color-hover": a == 0 ? null : jl[a],
      },
    }),
  ue = {};
ue.police = ["👮‍♂️", "👮‍♀️"];
ue.cop = ["👮‍♂️", "👮‍♀️"];
ue.detective = ["🕵️‍♂️", "🕵️‍♀️"];
ue.sleuth = ["🕵️‍♂️", "🕵️‍♀️"];
ue.guard = ["💂‍♂️", "💂‍♀️"];
ue.builder = ["👷‍♂️", "👷‍♀️"];
ue.farmer = ["👨‍🌾", "👩‍🌾"];
ue.cook = ["👨‍🍳", "👩‍🍳"];
ue.doctor = ["👨‍⚕️", "👩‍⚕️"];
ue.secretary = ["👨‍💼", "👩‍💼"];
ue.clerk = ["👨‍💼", "👩‍💼"];
ue.scientist = ["👨‍🔬", "👩‍🔬"];
ue.programmer = ["👨‍💻", "👩‍💻"];
ue.coder = ["👨‍💻", "👩‍💻"];
ue.singer = ["👨‍🎤", "👩‍🎤"];
ue.teacher = ["👨‍🏫", "👩‍🏫"];
ue.painter = ["👨‍🎨", "👩‍🎨"];
ue.firefighter = ["👨‍🚒", "👩‍🚒"];
ue.pilot = ["👨‍✈️", "👩‍✈️"];
ue.astronaut = ["👨‍🚀", "👩‍🚀"];
ue.judge = ["👨‍⚖️", "👩‍⚖️"];
ue.mechanic = ["👨‍🔧", "👩‍🔧"];
ue.mech = ["👨‍🔧", "👩‍🔧"];
ue.clown = ["🤡", "🤡"];
ue.witch = ["🧙", "🧙‍♀️"];
ue.vampire = ["🧛‍♂️", "🧛‍♀️"];
ue.pumpkin = ["🎃", "🎃"];
ue.zombie = ["🧟", "🧟"];
ue.bat = ["🦇", "🦇"];
ue.wolf = ["🐺", "🐺"];
ue.ghost = ["👻", "👻"];
ue.skeleton = ["💀", "💀"];
ue.ninja = ["🥷", "🥷"];
ue.superhero = ["🦸‍♂️", "🦸"];
ue.bride = ["👰", "👰"];
ue.santa = ["🎅", "🤶"];
ue.snowman = ["⛄️", "⛄️"];
ue.snowboarder = ["🏂", "🏂"];
ue.skier = ["⛷️", "⛷️"];
ue.reindeer = ["🦌", "🦌"];
ue.caroler = ["👨‍🎤", "👩‍🎤"];
function Us(a, i) {
  return !a || ue[a] == null ? "😬" : ue[a][i == "female" ? 1 : 0];
}
const Wg = ({
  coord: a,
  card: i,
  state: f,
  index: s,
  isLastFlipped: r,
  isSelected: h,
  levelData: m,
  onClick: x,
  setColorPickerState: b,
  colorPickerState: y,
}) => {
  var L, V, pe, Ue, Ce, Ne;
  const C = Ae.useRef(null),
    w = m.cards
      .filter(
        (I, D) =>
          f.flippedCards.includes(D) &&
          !(f.disabledCardIndices ?? []).includes(D)
      )
      .filter((I) => {
        var D;
        return (D = I.referenceNameIndices) == null ? void 0 : D.includes(s);
      }).length,
    q = Ae.useRef(w),
    [B, K] = Ae.useState(!1);
  Ae.useEffect(() => {
    K(!1), w > q.current && K(!0), (q.current = w);
  }, [w]);
  const ee = m.cards
      .filter(
        (I, D) =>
          f.flippedCards.includes(D) &&
          !(f.disabledCardIndices ?? []).includes(D)
      )
      .filter((I) => {
        var D;
        return (D = I.referenceProfessionIndices) == null
          ? void 0
          : D.includes(s);
      }).length,
    te = Ae.useRef(ee),
    [se, ne] = Ae.useState(!1);
  Ae.useEffect(() => {
    ne(!1), ee > te.current && ne(!0), (te.current = ee);
  }, [ee]);
  const me = Ae.useRef(!1),
    ge = f.flippedCards.includes(s),
    F = (f.disabledCardIndices ?? []).includes(s),
    [be, _e] = Ae.useState({ onPointerMove: void 0 }),
    Se = (I) => {
      var D, J;
      I.button === 2 &&
        (I.preventDefault(),
        b({
          ...y,
          cardIndex: s,
          cornerIndex: 0,
          colorOffset: Ds(
            0,
            ((J = (D = f.cornerTags) == null ? void 0 : D[s]) == null
              ? void 0
              : J[0]) ?? 0,
            s,
            y
          ),
        }));
    };
  return T.jsxs(T.Fragment, {
    children: [
      T.jsxs("div", {
        className: `card
        ${ge ? "flipped" : "unflipped"}
        ${ge ? (i.criminal ? "criminal" : "innocent") : ""}
        ${ge && i.orig_hint ? "has-hint" : ""}
        
        ${F ? "consumed" : ""}
        ${w ? "name-referenced" : ""}
        ${B ? "bounce-name" : ""}
        ${(L = f.hint) != null && L.clues.includes(s) ? "hint-clue" : ""}
        ${
          !ge &&
          (V = f.hint) != null &&
          V.reveals.includes(s) &&
          f.hasRevealedHintedCards
            ? "hint-card"
            : ""
        }
        ${ee ? "profession-referenced" : ""}
        ${se ? "bounce-profession" : ""}
        
        ${h ? "selected" : ""}
        `,
        ref: C,
        onClick: (I) => {
          var ce, v, H, X;
          if (me.current) return;
          const D = I.currentTarget.getBoundingClientRect(),
            J = (I.clientX - D.left) / D.width,
            k = (I.clientY - D.top) / D.height;
          if (J > 0.7 && k < 0.25) {
            b({
              ...y,
              cardIndex: s,
              cornerIndex: 0,
              colorOffset: Ds(
                0,
                ((v = (ce = f.cornerTags) == null ? void 0 : ce[s]) == null
                  ? void 0
                  : v[0]) ?? 0,
                s,
                y
              ),
            });
            return;
          } else if (
            J > 0.7 &&
            k > 0.75 &&
            (((X = (H = f.cornerTags) == null ? void 0 : H[s]) == null
              ? void 0
              : X[1]) ?? 0) != 0
          ) {
            b({ ...y, cardIndex: s, cornerIndex: 1, colorOffset: 0 });
            return;
          }
          x();
        },
        onContextMenu: (I) => {
          I.preventDefault(), Se(I);
        },
        onPointerMove: be.onPointerMove,
        onPointerDown: (I) => {
          var G;
          if (I.button !== 0) return;
          me.current = !1;
          const D = I.currentTarget.getBoundingClientRect(),
            k = (I.clientY - D.top) / D.height < 0.5 ? 0 : 1;
          I.preventDefault();
          let ce;
          document.body.classList.add("no-select"),
            (G = C.current) == null || G.setPointerCapture(I.pointerId);
          const v = { x: I.clientX, y: I.clientY },
            H = y.colorOffset || 1;
          let X = { ...y, cardIndex: s, cornerIndex: k, position: v };
          const O = () => {
              Z();
            },
            N = () => {
              I.preventDefault(), I.stopPropagation(), Z();
            },
            Z = () => {
              var fe;
              _e({ onPointerMove: void 0 }),
                window.removeEventListener("pointerup", N),
                window.removeEventListener("pointerup", O),
                window.removeEventListener("pointercancel", O),
                document.body.classList.remove("no-select"),
                (fe = C.current) == null ||
                  fe.releasePointerCapture(I.pointerId),
                ce ? clearTimeout(ce) : b({ ...X, isVisible: !1 });
            };
          (ce = setTimeout(() => {
            (ce = void 0),
              (X = { ...X, colorOffset: H, isVisible: !0 }),
              (me.current = !0),
              b(X),
              window.removeEventListener("pointerup", O),
              window.addEventListener("pointerup", N),
              _e({
                onPointerMove: (fe) => {
                  fe.preventDefault();
                  const he = fe.clientY - v.y,
                    ht =
                      (((H + Math.floor(he / 35 + 0.5)) % jl.length) +
                        jl.length) %
                      jl.length;
                  ht != X.colorOffset &&
                    ((X = { ...X, colorOffset: ht }), b(X));
                },
              });
          }, 250)),
            window.addEventListener("pointerup", O),
            window.addEventListener("pointercancel", O);
        },
        children: [
          T.jsx("p", { className: "coord", children: a }),
          ge
            ? T.jsxs("div", {
                className: `card-back ${i.criminal ? "criminal" : "innocent"}`,
                children: [
                  r &&
                    T.jsx("div", {
                      className: "speech-bubble",
                      children: "Correct!",
                    }),
                  T.jsx("p", {
                    className: "face",
                    children: Us(i.profession, i.gender),
                  }),
                  T.jsx("div", {
                    className: "name",
                    children: T.jsx("h3", {
                      className: "name",
                      children: i.name,
                    }),
                  }),
                  T.jsx("p", {
                    className: "profession",
                    children: i.profession,
                  }),
                  T.jsx("hr", { "aria-hidden": "true" }),
                  T.jsx("p", {
                    className: "hint",
                    dangerouslySetInnerHTML: { __html: i.hint ? i.hint : "" },
                  }),
                ],
              })
            : T.jsxs("div", {
                className: "card-front",
                children: [
                  T.jsx("p", {
                    className: "face",
                    children: Us(i.profession, i.gender),
                  }),
                  T.jsx("div", {
                    className: "name",
                    children: T.jsx("h3", {
                      className: "name",
                      children: i.name,
                    }),
                  }),
                  T.jsx("p", {
                    className: "profession",
                    children: i.profession,
                  }),
                ],
              }),
          T.jsx("div", {
            className: "inspect-icon-container",
            children: T.jsx("div", {
              className: "inspect-icon",
              children: "🔎",
            }),
          }),
          T.jsxs("div", {
            children: [
              T.jsx(Hs, {
                currentColor:
                  ((Ue = (pe = f.cornerTags) == null ? void 0 : pe[s]) == null
                    ? void 0
                    : Ue[0]) ?? 0,
              }),
              T.jsx(Hs, {
                currentColor:
                  ((Ne = (Ce = f.cornerTags) == null ? void 0 : Ce[s]) == null
                    ? void 0
                    : Ne[1]) ?? 0,
              }),
            ],
          }),
        ],
      }),
      y.isVisible && y.cardIndex == s
        ? T.jsx(Jg, { colorPickerState: y })
        : null,
    ],
  });
};
function Fg(a, i) {
  return (
    ["A", "B", "C", "D", "E", "F", "G"][a % i] + "" + (Math.floor(a / i) + 1)
  );
}
const Ig = ({
  data: a,
  state: i,
  selectedIndex: f,
  onCardClick: s,
  setColorPickerState: r,
  colorPickerState: h,
}) =>
  T.jsx("div", {
    className: "card-grid",
    id: "grid",
    children: a.cards.map((m, x) => {
      var b, y;
      return T.jsx(
        "div",
        {
          className: "card-container",
          children:
            Object.keys(m).length === 0
              ? T.jsx("div", { className: "empty-card" })
              : T.jsx(Wg, {
                  card: m,
                  levelData: a,
                  index: x,
                  coord: Fg(x, a.width),
                  state: i,
                  isLastFlipped:
                    ((b = i.lastGuess) == null ? void 0 : b.index) === x &&
                    !((y = i.lastGuess) != null && y.error),
                  isSelected: x === f,
                  onClick: () => s({ ...m, index: x }, x),
                  setColorPickerState: r,
                  colorPickerState: h,
                }),
        },
        x
      );
    }),
  });
var Kn = ((a) => (
  (a[(a.Innocent = 0)] = "Innocent"), (a[(a.Criminal = 1)] = "Criminal"), a
))(Kn || {});
const Pg = ({
    card: a,
    isFlipped: i,
    onFlip: f,
    onClose: s,
    tagState: r,
    incorrectGuess: h,
    isConsumed: m,
    onClickClue: x,
    setColorPickerState: b,
    colorPickerState: y,
  }) => {
    var q;
    const C = i && a.hint ? a.hint.replace(/([a-zA-Z])$/, "$1.") : "",
      w = (B) => {
        B.button === 2 && B.preventDefault();
      };
    return T.jsx("div", {
      className: "modal-overlay",
      onClick: () => s(),
      children: T.jsxs("div", {
        className: `modal
        ${i ? "flipped" : ""}
        ${i ? (a.criminal ? "criminal" : "innocent") : ""}
        ${m ? "consumed" : ""}
        `,
        onClick: (B) => B.stopPropagation(),
        onContextMenu: w,
        children: [
          T.jsx("p", {
            className: "face",
            children: Us(a.profession, a.gender),
          }),
          T.jsx("h3", { className: "name", children: a.name }),
          T.jsx("p", { children: a.profession }),
          !i &&
            T.jsx(T.Fragment, {
              children: T.jsxs("div", {
                className: "button-group",
                style: { marginTop: "15px" },
                children: [
                  T.jsx("button", {
                    className: "btn btn-innocent",
                    onClick: () => f(Kn.Innocent),
                    disabled: h === Kn.Innocent,
                    children: "Innocent",
                  }),
                  T.jsx("button", {
                    className: "btn btn-criminal",
                    onClick: () => f(Kn.Criminal),
                    disabled: h === Kn.Criminal,
                    style: { marginLeft: "10px" },
                    children: "Criminal",
                  }),
                ],
              }),
            }),
          i &&
            T.jsxs(T.Fragment, {
              children: [
                T.jsx("p", {
                  className: "clue",
                  dangerouslySetInnerHTML: { __html: C },
                  onClick: x,
                }),
                !!((q = a.tips) != null && q.length) &&
                  T.jsx("ul", {
                    className: "tips",
                    children: a.tips.map((B, K) =>
                      T.jsx("li", { dangerouslySetInnerHTML: { __html: B } }, K)
                    ),
                  }),
              ],
            }),
          T.jsx("button", {
            className: "btn btn-close",
            onClick: s,
            style: { marginTop: "15px" },
            children: "Close",
          }),
          T.jsx("div", {
            children: T.jsx(Hs, {
              currentColor: r,
              onClick: () =>
                b({
                  ...y,
                  cardIndex: a.index,
                  cornerIndex: 0,
                  colorOffset: Ds(0, r, a.index, y),
                }),
            }),
          }),
        ],
      }),
    });
  },
  e2 = {
    text: "<b>Neighbors</b> include diagonals. One person can have up to 8 neighbors.",
    showIfRegex: ["neighbors?", "neighboring"],
  },
  t2 = {
    text: "<b>Common/shared neighbors</b> are neighbors of both of the two people, <b>not counting each other</b>.",
    showIfRegex: ["common.*neighbor", "neighbor.*common", "share.*neighbor"],
  },
  l2 = {
    text: "<b>Between</b> means people between the two in their shared row or column, <b>not counting the two</b>.",
  },
  n2 = {
    text: "<b>To the left of someone</b> means somewhere to the left <b>in the same row</b>, not including that person.",
    skipIfRegex: ["directly to the left"],
  },
  a2 = {
    text: "<b>To the right of someone</b> means somewhere to the right <b>in the same row</b>, not including that person.",
    skipIfRegex: ["directly to the right"],
  },
  u2 = {
    text: "<b>Above someone</b> means somewhere above <b>in the same column</b>, not including that person.",
    skipIfRegex: ["directly above"],
  },
  i2 = {
    text: "<b>Below someone</b> means somewhere below <b>in the same column</b>, not including that person.",
    skipIfRegex: ["directly below"],
  },
  c2 = {
    text: "<b>Directly to the left</b> means the <b>adjacent neighbor</b> to the left.",
    showIfRegex: ["directly to the left"],
  },
  f2 = {
    text: "<b>Directly to the right</b> means the <b>adjacent neighbor</b> to the right.",
    showIfRegex: ["directly to the right"],
  },
  s2 = {
    text: "<b>Directly above</b> means the <b>adjacent neighbor</b> above.",
    showIfRegex: ["directly above"],
  },
  r2 = {
    text: "<b>Directly below</b> means the <b>adjacent neighbor</b> below.",
    showIfRegex: ["directly below"],
  },
  o2 = {
    text: "<b>Connected</b> means an unbroken chain of adjacent neighbors. For example, connected criminals have no innocents between them.",
  },
  d2 = {
    text: "<b>All</b> means there's <b>at least one</b>, not necessarily more than one.",
    skipIfRegex: ["connected"],
  },
  h2 = {
    text: `<b>Any</b> doesn't tell you anything about the number. <b>Zero is allowed.</b> It means "if there are any, then..."`,
    skipIfRegex: ["more"],
  },
  m2 = {
    text: "<b>One of the</b> means there's at least two.",
    showIfRegex: ["one of the"],
    skipIfRegex: ["none of the"],
  },
  g2 = {
    text: "<b>In total</b> is the sum across the mentioned groups. Some groups might contribute zero.",
    showIfRegex: ["in total"],
  },
  y2 = { text: "There are <b>four people</b> in the board's corners." },
  v2 = {
    text: "<b>On the edges</b> means the 14 people around the outside of the board, including corners.",
  },
  p2 = {
    text: "<b>More</b> means uniquely more. Ties aren't allowed.",
    showIfRegex: ["more", "most"],
    skipIfRegex: ["or more"],
  },
  b2 = { text: "<b>Fewer</b> means uniquely fewer. Ties aren't allowed." },
  S2 = {
    text: "Numbers are always the <b>exact count</b>, unless specified otherwise.",
    showIfRegex: ["\\d+"],
    skipIfRegex: ["in total", "exactly", "\\brow\\b"],
  },
  x2 = { text: "<b>Both</b> means there are <b>exactly two</b>." },
  M2 = { text: "<b>Even</b> numbers include 0, 2, 4, 6..." },
  _2 = { text: "<b>Odd</b> numbers include 1, 3, 5, 7..." },
  T2 = {
    neighbor: e2,
    common_neighbors: t2,
    between: l2,
    left: n2,
    right: a2,
    above: u2,
    below: i2,
    directly_left: c2,
    directly_right: f2,
    directly_above: s2,
    directly_below: r2,
    connected: o2,
    all: d2,
    any: h2,
    one_of: m2,
    in_total: g2,
    corner: y2,
    edge: v2,
    more: p2,
    fewer: b2,
    number: S2,
    both: x2,
    even: M2,
    odd: _2,
  },
  E2 = T2,
  z2 = (a = !1) => Number(a),
  A2 = (a) => {
    var h;
    const i = O2(a.flippedCards),
      f = C2(a.cornerTags ?? {}),
      s =
        (h = a.lastGuess) != null && h.error
          ? H2(a.lastGuess.index, a.lastGuess.trait)
          : "";
    return [i, f, s].join("-").replace(/-+$/, "");
  },
  N2 = (a) => {
    const [i, f, s] = a.split("-"),
      r = {};
    return (
      i && (r.flippedCards = R2(i)),
      f && (r.cornerTags = D2(f)),
      s && (r.lastGuess = U2(s)),
      r
    );
  },
  O2 = (a) => {
    const i = Math.max(...a, 0),
      f = Array(i + 1).fill("0");
    a.forEach((r) => (f[r] = "1"));
    const s = f.join("");
    return Od(s);
  },
  R2 = (a) =>
    Rd(a)
      .split("")
      .map((f, s) => (f === "1" ? s : -1))
      .filter((f) => f >= 0),
  C2 = (a) => {
    var s;
    const i = Object.entries(a).reduce(
      (r, [h, m]) => (m ? Math.max(r, parseInt(h)) : r),
      -1
    );
    if (i < 0) return "";
    let f = "";
    for (let r = 0; r <= i; r++) {
      const h = ((s = a[r]) == null ? void 0 : s[0]) ?? 0,
        m = (h < 4 ? h : 0).toString(2).padStart(2, "0");
      f += m;
    }
    return Od(f);
  },
  D2 = (a) => {
    const i = Rd(a).split(""),
      f = {};
    for (let s = 0; s < i.length / 2; s++) {
      const r = i[s * 2],
        h = i[s * 2 + 1],
        m = parseInt(r + h, 2);
      m > 0 && (f[s] = [m, 0]);
    }
    return f;
  },
  H2 = (a, i) => a.toString().padStart(2, "0") + i.toString(),
  U2 = (a) => {
    if (!a) return;
    const i = parseInt(a.slice(0, -1)),
      f = parseInt(a.slice(-1));
    return { index: i, trait: f, error: !0 };
  },
  Od = (a) => {
    const f = a
      .padEnd(Math.ceil(a.length / 8) * 8, "0")
      .match(/.{8}/g)
      .map((s) => parseInt(s, 2));
    return btoa(String.fromCharCode(...f));
  },
  Rd = (a) =>
    atob(a)
      .split("")
      .map((f) => f.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(""),
  j2 = "2025-12-21",
  Cd = { error: "🟨", hint: "🟡", "second-hint": "🟠" },
  J1 = ["second-hint", "hint", "error"],
  Vs = (a) => a.sort((i, f) => J1.indexOf(i.type) - J1.indexOf(f.type)),
  $s = (a, i) =>
    [...Array(a.height).keys()].map((f) =>
      [...Array(a.width).keys()]
        .map((s) => Vs(i).find((r) => r.index == s + a.width * f))
        .map((s) => (s ? Cd[s.type] : "🟩"))
        .join("")
    ).join(`
`),
  w2 = (a, i, f) =>
    T.jsx("div", {
      className: "share-grid",
      children: [...Array(a.height).keys()].map((s) =>
        T.jsx(
          "div",
          {
            className: "share-grid-row",
            children: [...Array(a.width).keys()].map((r) => {
              const h = r + s * a.width,
                m = Vs(f).find((x) => x.index == h);
              return T.jsx(
                "div",
                {
                  className: `share-grid-element ${
                    m ? m.type : i.flippedCards.includes(h) ? "correct" : ""
                  } ${i.flippedCards.includes(h) ? "flipped" : "in-progress"}`,
                  children: T.jsx("p", {
                    style: { fontSize: 0, display: "inline", lineHeight: 0 },
                    children: m ? Cd[m.type] : "🟩",
                  }),
                },
                r
              );
            }),
          },
          s
        )
      ),
    }),
  Ul = (a) => {
    fetch("https://analytics.adartis.fi/analze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...a,
        timeUTC: new Date().toISOString(),
        "app-id": "fi.adartis.crimson",
        "build-type": "daily",
        href: window.location.href,
        day: j2,
      }),
    }).catch((i) => {
      console.error("Analytics POST failed:", i);
    });
  },
  W1 = (a) => (a === Kn.Criminal ? "criminal" : "innocent");
function Dd(a) {
  for (let i = a.length - 1; i >= 0; i--) {
    const f = Math.floor(Math.random() * (i + 1)),
      s = a[i];
    (a[i] = a[f]), (a[f] = s);
  }
  return a;
}
function js(a) {
  return a.length === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1);
}
const F1 = ["A", "B", "C", "D", "E", "F", "G"];
function Y2(a, i, f) {
  let s = i;
  {
    const m = new RegExp("#C:([0-9])", "gi");
    s = s.replace(m, (x, b) => F1[parseInt(b) - 1]);
  }
  {
    const m = new RegExp("#NAMES:([0-9]+)", "gi");
    s = s.replace(m, (x, b) => {
      const y = f.cards[b].name;
      return a == b
        ? "my"
        : y[y.length - 1] == "s"
        ? `#NAME:${b}'`
        : `#NAME:${b}'s`;
    });
  }
  {
    const m = new RegExp("#NAME:([0-9]+) and #NAME:([0-9]+)", "gi");
    s = s.replace(m, (x, b, y) => {
      const C = parseInt(b),
        w = parseInt(y);
      return !isNaN(C) && !isNaN(w) && C == a
        ? `#NAME:${y} and I`
        : !isNaN(C) && !isNaN(w) && w == a
        ? `#NAME:${b} and I`
        : x;
    });
  }
  {
    const m = new RegExp("^#NAME:([0-9]+) (is|has)", "gi");
    s = s.replace(m, (x, b, y) => {
      const C = parseInt(b);
      return isNaN(C)
        ? b
        : C == a
        ? y == "is"
          ? "I am"
          : y == "has"
          ? "I have"
          : y
          ? `I ${y}`
          : "I"
        : y
        ? `#NAME:${C} ${y}`
        : `#NAME:${C}`;
    });
  }
  {
    const m = new RegExp("(is )?#BETWEEN:pair\\(([0-9]+),([0-9]+)\\)", "gi");
    s = s.replace(m, (x, b, y, C) => {
      const w = parseInt(y),
        q = parseInt(C),
        B = w < q ? w : q,
        K = w < q ? q : w,
        ee = B % f.width,
        te = Math.floor(B / f.width),
        se = K % f.width,
        ne = Math.floor(K / f.width),
        me = te == ne,
        ge = B - (me ? 1 : f.width),
        F = K + (me ? 1 : f.width);
      if (me) {
        if (ee == 0 && se == f.width - 1) return `${b || ""}in row ${te + 1}`;
        if (ee == 0)
          return `${b ? "is " : ""}to the left of ${
            a == F ? "me" : `#NAME:${F}`
          }`;
        if (se == f.width - 1)
          return `${b ? "is " : ""}to the right of ${
            a == ge ? "me" : `#NAME:${ge}`
          }`;
      } else {
        if (te == 0 && ne == f.height - 1)
          return `${b || ""}in column ${F1[ee]}`;
        if (te == 0)
          return `${b ? "is " : ""}above ${a == F ? "me" : `#NAME:${F}`}`;
        if (ne == f.height - 1)
          return `${b ? "is " : ""}below ${a == ge ? "me" : `#NAME:${ge}`}`;
      }
      return a == ge
        ? `${b ? "is " : ""}in between #NAME:${F} and me`
        : a == F
        ? `${b ? "is " : ""}in between #NAME:${ge} and me`
        : `${b ? "is " : ""}in between #NAME:${ge} and #NAME:${F}`;
    });
  }
  const r = [...s.matchAll(/#NAME:([0-9]+)/gi)]
      .map((m) => parseInt(m[1]))
      .filter((m) => !isNaN(m)),
    h = [...s.matchAll(/#PROFS?:([a-z]+)/gi)]
      .flatMap((m) =>
        f.cards.map((x, b) => [x.profession, b]).filter((x) => x[0] == m[1])
      )
      .map((m) => m[1]);
  {
    const m = new RegExp("#PROF(S?):([a-z]+)", "gi");
    s = s.replace(m, (x, b, y) =>
      y == "witch" ? "witches" : `${y}${b ? "s" : ""}`
    );
  }
  {
    {
      const m = new RegExp("neighboring #NAME:([0-9]+)", "gi");
      s = s.replace(m, (x, b) => (parseInt(b) == a ? "neighboring me" : x));
    }
    {
      const m = new RegExp("^#NAME:([0-9]+)", "gi");
      s = s.replace(m, (x, b) => (parseInt(b) == a ? "I" : x));
    }
    {
      const m = new RegExp("#NAME:([0-9]+)", "gi");
      s = s.replace(m, (x, b) => (parseInt(b) == a ? "me" : x));
    }
    {
      const m = new RegExp("#NAME:([0-9]+)", "gi");
      s = s.replace(m, (x, b) => {
        const y = parseInt(b);
        if (isNaN(y)) return b;
        const C = f.cards[y].name;
        return `${js(C)}`;
      });
    }
  }
  return (
    (s = s.replace(" exactly 0 ", " no ")),
    (s = s.substring(0, 1).toUpperCase() + s.substring(1)),
    [s, r, h]
  );
}
const q2 = Dd([
    "You got me!",
    "I surrender!",
    "Busted...",
    "You outsmarted me!",
    "I'll show you next time!",
    "You're too clever for us!",
    "What! Caught again?",
    "I give up!",
    "Aw, shucks!",
    "Drat!",
    "Foiled again!",
    "Curses!",
    "Rats!",
    "Darn it!",
    "How did you know!",
    "I wish I was that smart!",
    "You win this time!",
    "I'll get you next time!",
    "Blast!",
    "Oh no!",
    "Dang it!",
    "You caught me red-handed!",
    "I'm out of tricks!",
    "You saw through my disguise!",
    "I can't believe I fell for that!",
    "You got the better of me!",
    "I'm no match for your wit!",
    "You cracked the case!",
    "I'm impressed by your skills!",
    "You outwitted me!",
    "You caught me in the act!",
    "I'm defeated!",
    "You have a sharp mind!",
    "I'm at your mercy!",
    "You uncovered my secret!",
    "I didn't see that coming!",
    "You outplayed me!",
    "You outsmarted the best!",
    "I walked right into that one!",
    "You cracked my alibi!",
    "You caught me off guard!",
  ]),
  B2 = Dd([
    "You're smart!",
    "Smart move!",
    "Good job!",
    "I knew we could trust you!",
    "Clever!",
    "Thanks for clearing me!",
    "You're the best!",
    "Nice one!",
    "Very nice!",
    "You rock!",
    "Yay!",
    "Woohoo!",
    "Hooray!",
    "Awesome!",
    "Great work!",
    "Fantastic!",
    "Brilliant!",
    "Excellent!",
    "Superb!",
    "Magnificent!",
    "Splendid!",
    "Terrific!",
    "Fabulous!",
    "Marvelous!",
    "Outstanding!",
    "Phenomenal!",
    "Remarkable!",
    "Spectacular!",
    "Stupendous!",
    "Wonderful!",
    "Impressive!",
    "Exceptional!",
    "Top-notch!",
    "How clever of you!",
    "Not your first time, is it?",
    "You must be very smart.",
    "You have a keen eye!",
    "Sharp as a tack!",
    "Right on the money!",
    "Bullseye!",
    "Spot on!",
    "You nailed it!",
    "You aced it!",
    "You crushed it!",
    "That's how it's done!",
    "Way to go!",
    "Keep it up!",
    "You're on fire!",
    "You're unstoppable!",
    "You're a genius!",
    "You're a whiz!",
  ]);
function X2(a) {
  for (const [i, f] of a.cards.entries())
    f.hint ||
      (f.hint = f.criminal ? q2.shift() || "Argh!" : B2.shift() || "Nice!"),
      ([f.hint, f.referenceNameIndices, f.referenceProfessionIndices] = Y2(
        i,
        f.hint,
        a
      ));
}
function G2(a) {
  var f;
  const i = [];
  for (const [s, r] of Object.entries(E2)) {
    const h = r.showIfRegex ?? [`\\b${s}s?\\b`];
    i.push({
      key: s,
      text: r.text,
      showIfRegex: h.map((m) => new RegExp(m, "i")),
      skipIfRegex:
        ((f = r.skipIfRegex) == null
          ? void 0
          : f.map((m) => new RegExp(m, "i"))) || [],
    });
  }
  a.cards.forEach((s) => {
    s.tips = L2(s, i);
  });
}
function L2(a, i) {
  return !a.orig_hint || !a.hint
    ? []
    : i
        .filter(
          (f) =>
            f.showIfRegex.some((s) => s.test(a.hint)) &&
            !f.skipIfRegex.some((s) => s.test(a.hint))
        )
        .map((f) => f.text);
}
const Q2 =
    "https://www.youtube.com/watch?v=607VN4VZLxU&list=PLrsktZJm5gWcEQ7MIWa87-yYbjsSEl6bY",
  Z2 = ({ guess: a, guessName: i, onContinue: f }) =>
    T.jsx("div", {
      className: "modal-overlay",
      onClick: () => f(),
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 500,
      },
      children: T.jsxs("div", {
        className: "modal warning",
        onClick: (s) => s.stopPropagation(),
        children: [
          T.jsx("div", {
            className: "top",
            children: T.jsx("h3", {
              style: { marginBottom: "10px" },
              children: "⚠️ Not enough evidence!",
            }),
          }),
          T.jsxs("div", {
            children: [
              T.jsx("p", {
                className: "instructions",
                children: a
                  ? T.jsxs(T.Fragment, {
                      children: [
                        T.jsx("b", { children: js(i ?? "they") }),
                        " can't be logically identified as ",
                        T.jsx("b", { children: W1(a.trait) }),
                        " from the available info.",
                        T.jsx("br", {}),
                      ],
                    })
                  : null,
              }),
              T.jsx("br", {}),
              a
                ? T.jsxs("p", {
                    children: [
                      "This means there exists at least one other logical scenario where ",
                      T.jsx("b", { children: js(i ?? "they") }),
                      " can also be ",
                      T.jsx("b", { children: W1((a.trait + 1) % 2) }),
                    ],
                  })
                : null,
              T.jsx("br", {}),
              T.jsxs("p", {
                children: [
                  "Try sharing the scenario with others for help, or check out ",
                  T.jsx("a", {
                    target: "__blank",
                    href: Q2,
                    children: "this daily tutorial video",
                  }),
                ],
              }),
              T.jsx("br", {}),
              T.jsx("button", {
                onClick: () => {
                  window.share(!0);
                },
                children: "Share scenario",
              }),
              T.jsx("button", {
                className: "btn btn-warn",
                onClick: f,
                children: "Continue",
              }),
            ],
          }),
        ],
      }),
    }),
  Hd = (a, i) => {
    if (typeof a == "number") {
      if (i === 3)
        return {
          mode: "rgb",
          r: (((a >> 8) & 15) | ((a >> 4) & 240)) / 255,
          g: (((a >> 4) & 15) | (a & 240)) / 255,
          b: ((a & 15) | ((a << 4) & 240)) / 255,
        };
      if (i === 4)
        return {
          mode: "rgb",
          r: (((a >> 12) & 15) | ((a >> 8) & 240)) / 255,
          g: (((a >> 8) & 15) | ((a >> 4) & 240)) / 255,
          b: (((a >> 4) & 15) | (a & 240)) / 255,
          alpha: ((a & 15) | ((a << 4) & 240)) / 255,
        };
      if (i === 6)
        return {
          mode: "rgb",
          r: ((a >> 16) & 255) / 255,
          g: ((a >> 8) & 255) / 255,
          b: (a & 255) / 255,
        };
      if (i === 8)
        return {
          mode: "rgb",
          r: ((a >> 24) & 255) / 255,
          g: ((a >> 16) & 255) / 255,
          b: ((a >> 8) & 255) / 255,
          alpha: (a & 255) / 255,
        };
    }
  },
  V2 = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  $2 = (a) => Hd(V2[a.toLowerCase()], 6),
  k2 = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,
  K2 = (a) => {
    let i;
    return (i = a.match(k2)) ? Hd(parseInt(i[1], 16), i[1].length) : void 0;
  },
  wl = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",
  eu = `${wl}%`,
  ks = `(?:${wl}%|${wl})`,
  J2 = `(?:${wl}(deg|grad|rad|turn)|${wl})`,
  Wn = "\\s*,\\s*",
  W2 = new RegExp(
    `^rgba?\\(\\s*${wl}${Wn}${wl}${Wn}${wl}\\s*(?:,\\s*${ks}\\s*)?\\)$`
  ),
  F2 = new RegExp(
    `^rgba?\\(\\s*${eu}${Wn}${eu}${Wn}${eu}\\s*(?:,\\s*${ks}\\s*)?\\)$`
  ),
  I2 = (a) => {
    let i = { mode: "rgb" },
      f;
    if ((f = a.match(W2)))
      f[1] !== void 0 && (i.r = f[1] / 255),
        f[2] !== void 0 && (i.g = f[2] / 255),
        f[3] !== void 0 && (i.b = f[3] / 255);
    else if ((f = a.match(F2)))
      f[1] !== void 0 && (i.r = f[1] / 100),
        f[2] !== void 0 && (i.g = f[2] / 100),
        f[3] !== void 0 && (i.b = f[3] / 100);
    else return;
    return (
      f[4] !== void 0
        ? (i.alpha = Math.max(0, Math.min(1, f[4] / 100)))
        : f[5] !== void 0 && (i.alpha = Math.max(0, Math.min(1, +f[5]))),
      i
    );
  },
  P2 = (a, i) =>
    a === void 0
      ? void 0
      : typeof a != "object"
      ? sy(a)
      : a.mode !== void 0
      ? a
      : i
      ? { ...a, mode: i }
      : void 0,
  _i =
    (a = "rgb") =>
    (i) =>
      (i = P2(i, a)) !== void 0
        ? i.mode === a
          ? i
          : Zt[i.mode][a]
          ? Zt[i.mode][a](i)
          : a === "rgb"
          ? Zt[i.mode].rgb(i)
          : Zt.rgb[a](Zt[i.mode].rgb(i))
        : void 0,
  Zt = {},
  Ud = {},
  Ti = [],
  jd = {},
  ey = (a) => a,
  Te = (a) => (
    (Zt[a.mode] = { ...Zt[a.mode], ...a.toMode }),
    Object.keys(a.fromMode || {}).forEach((i) => {
      Zt[i] || (Zt[i] = {}), (Zt[i][a.mode] = a.fromMode[i]);
    }),
    a.ranges || (a.ranges = {}),
    a.difference || (a.difference = {}),
    a.channels.forEach((i) => {
      if ((a.ranges[i] === void 0 && (a.ranges[i] = [0, 1]), !a.interpolate[i]))
        throw new Error(`Missing interpolator for: ${i}`);
      typeof a.interpolate[i] == "function" &&
        (a.interpolate[i] = { use: a.interpolate[i] }),
        a.interpolate[i].fixup || (a.interpolate[i].fixup = ey);
    }),
    (Ud[a.mode] = a),
    (a.parse || []).forEach((i) => {
      ly(i, a.mode);
    }),
    _i(a.mode)
  ),
  ty = (a) => Ud[a],
  ly = (a, i) => {
    if (typeof a == "string") {
      if (!i) throw new Error("'mode' required when 'parser' is a string");
      jd[a] = i;
    } else typeof a == "function" && Ti.indexOf(a) < 0 && Ti.push(a);
  },
  ws = /[^\x00-\x7F]|[a-zA-Z_]/,
  ny = /[^\x00-\x7F]|[-\w]/,
  j = {
    Function: "function",
    Ident: "ident",
    Number: "number",
    Percentage: "percentage",
    ParenClose: ")",
    None: "none",
    Hue: "hue",
    Alpha: "alpha",
  };
let le = 0;
function xi(a) {
  let i = a[le],
    f = a[le + 1];
  return i === "-" || i === "+"
    ? /\d/.test(f) || (f === "." && /\d/.test(a[le + 2]))
    : i === "."
    ? /\d/.test(f)
    : /\d/.test(i);
}
function Ys(a) {
  if (le >= a.length) return !1;
  let i = a[le];
  if (ws.test(i)) return !0;
  if (i === "-") {
    if (a.length - le < 2) return !1;
    let f = a[le + 1];
    return !!(f === "-" || ws.test(f));
  }
  return !1;
}
const ay = { deg: 1, rad: 180 / Math.PI, grad: 9 / 10, turn: 360 };
function Pa(a) {
  let i = "";
  if (
    ((a[le] === "-" || a[le] === "+") && (i += a[le++]),
    (i += Mi(a)),
    a[le] === "." && /\d/.test(a[le + 1]) && (i += a[le++] + Mi(a)),
    (a[le] === "e" || a[le] === "E") &&
      ((a[le + 1] === "-" || a[le + 1] === "+") && /\d/.test(a[le + 2])
        ? (i += a[le++] + a[le++] + Mi(a))
        : /\d/.test(a[le + 1]) && (i += a[le++] + Mi(a))),
    Ys(a))
  ) {
    let f = Ei(a);
    return f === "deg" || f === "rad" || f === "turn" || f === "grad"
      ? { type: j.Hue, value: i * ay[f] }
      : void 0;
  }
  return a[le] === "%"
    ? (le++, { type: j.Percentage, value: +i })
    : { type: j.Number, value: +i };
}
function Mi(a) {
  let i = "";
  for (; /\d/.test(a[le]); ) i += a[le++];
  return i;
}
function Ei(a) {
  let i = "";
  for (; le < a.length && ny.test(a[le]); ) i += a[le++];
  return i;
}
function uy(a) {
  let i = Ei(a);
  return a[le] === "("
    ? (le++, { type: j.Function, value: i })
    : i === "none"
    ? { type: j.None, value: void 0 }
    : { type: j.Ident, value: i };
}
function iy(a = "") {
  let i = a.trim(),
    f = [],
    s;
  for (le = 0; le < i.length; ) {
    if (
      ((s = i[le++]),
      s ===
        `
` ||
        s === "	" ||
        s === " ")
    ) {
      for (
        ;
        le < i.length &&
        (i[le] ===
          `
` ||
          i[le] === "	" ||
          i[le] === " ");

      )
        le++;
      continue;
    }
    if (s === ",") return;
    if (s === ")") {
      f.push({ type: j.ParenClose });
      continue;
    }
    if (s === "+") {
      if ((le--, xi(i))) {
        f.push(Pa(i));
        continue;
      }
      return;
    }
    if (s === "-") {
      if ((le--, xi(i))) {
        f.push(Pa(i));
        continue;
      }
      if (Ys(i)) {
        f.push({ type: j.Ident, value: Ei(i) });
        continue;
      }
      return;
    }
    if (s === ".") {
      if ((le--, xi(i))) {
        f.push(Pa(i));
        continue;
      }
      return;
    }
    if (s === "/") {
      for (
        ;
        le < i.length &&
        (i[le] ===
          `
` ||
          i[le] === "	" ||
          i[le] === " ");

      )
        le++;
      let r;
      if (xi(i) && ((r = Pa(i)), r.type !== j.Hue)) {
        f.push({ type: j.Alpha, value: r });
        continue;
      }
      if (Ys(i) && Ei(i) === "none") {
        f.push({ type: j.Alpha, value: { type: j.None, value: void 0 } });
        continue;
      }
      return;
    }
    if (/\d/.test(s)) {
      le--, f.push(Pa(i));
      continue;
    }
    if (ws.test(s)) {
      le--, f.push(uy(i));
      continue;
    }
    return;
  }
  return f;
}
function cy(a) {
  a._i = 0;
  let i = a[a._i++];
  if (
    !i ||
    i.type !== j.Function ||
    i.value !== "color" ||
    ((i = a[a._i++]), i.type !== j.Ident)
  )
    return;
  const f = jd[i.value];
  if (!f) return;
  const s = { mode: f },
    r = wd(a, !1);
  if (!r) return;
  const h = ty(f).channels;
  for (let m = 0, x, b; m < h.length; m++)
    (x = r[m]),
      (b = h[m]),
      x.type !== j.None &&
        ((s[b] = x.type === j.Number ? x.value : x.value / 100),
        b === "alpha" && (s[b] = Math.max(0, Math.min(1, s[b]))));
  return s;
}
function wd(a, i) {
  const f = [];
  let s;
  for (; a._i < a.length; ) {
    if (
      ((s = a[a._i++]),
      s.type === j.None ||
        s.type === j.Number ||
        s.type === j.Alpha ||
        s.type === j.Percentage ||
        (i && s.type === j.Hue))
    ) {
      f.push(s);
      continue;
    }
    if (s.type === j.ParenClose) {
      if (a._i < a.length) return;
      continue;
    }
    return;
  }
  if (!(f.length < 3 || f.length > 4)) {
    if (f.length === 4) {
      if (f[3].type !== j.Alpha) return;
      f[3] = f[3].value;
    }
    return (
      f.length === 3 && f.push({ type: j.None, value: void 0 }),
      f.every((r) => r.type !== j.Alpha) ? f : void 0
    );
  }
}
function fy(a, i) {
  a._i = 0;
  let f = a[a._i++];
  if (!f || f.type !== j.Function) return;
  let s = wd(a, i);
  if (s) return s.unshift(f.value), s;
}
const sy = (a) => {
  if (typeof a != "string") return;
  const i = iy(a),
    f = i ? fy(i, !0) : void 0;
  let s,
    r = 0,
    h = Ti.length;
  for (; r < h; ) if ((s = Ti[r++](a, f)) !== void 0) return s;
  return i ? cy(i) : void 0;
};
function ry(a, i) {
  if (!i || (i[0] !== "rgb" && i[0] !== "rgba")) return;
  const f = { mode: "rgb" },
    [, s, r, h, m] = i;
  if (!(s.type === j.Hue || r.type === j.Hue || h.type === j.Hue))
    return (
      s.type !== j.None &&
        (f.r = s.type === j.Number ? s.value / 255 : s.value / 100),
      r.type !== j.None &&
        (f.g = r.type === j.Number ? r.value / 255 : r.value / 100),
      h.type !== j.None &&
        (f.b = h.type === j.Number ? h.value / 255 : h.value / 100),
      m.type !== j.None &&
        (f.alpha = Math.min(
          1,
          Math.max(0, m.type === j.Number ? m.value : m.value / 100)
        )),
      f
    );
}
const oy = (a) =>
    a === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0,
  dy = (a, i, f) => a + f * (i - a),
  hy = (a) => {
    let i = [];
    for (let f = 0; f < a.length - 1; f++) {
      let s = a[f],
        r = a[f + 1];
      s === void 0 && r === void 0
        ? i.push(void 0)
        : s !== void 0 && r !== void 0
        ? i.push([s, r])
        : i.push(s !== void 0 ? [s, s] : [r, r]);
    }
    return i;
  },
  my = (a) => (i) => {
    let f = hy(i);
    return (s) => {
      let r = s * f.length,
        h = s >= 1 ? f.length - 1 : Math.max(Math.floor(r), 0),
        m = f[h];
      return m === void 0 ? void 0 : a(m[0], m[1], r - h);
    };
  },
  Y = my(dy),
  Ke = (a) => {
    let i = !1,
      f = a.map((s) => (s !== void 0 ? ((i = !0), s) : 1));
    return i ? f : a;
  },
  Fn = {
    mode: "rgb",
    channels: ["r", "g", "b", "alpha"],
    parse: [ry, K2, I2, $2, oy, "srgb"],
    serialize: "srgb",
    interpolate: { r: Y, g: Y, b: Y, alpha: { use: Y, fixup: Ke } },
    gamut: !0,
    white: { r: 1, g: 1, b: 1 },
    black: { r: 0, g: 0, b: 0 },
  },
  us = (a = 0) => Math.pow(Math.abs(a), 563 / 256) * Math.sign(a),
  I1 = (a) => {
    let i = us(a.r),
      f = us(a.g),
      s = us(a.b),
      r = {
        mode: "xyz65",
        x:
          0.5766690429101305 * i +
          0.1855582379065463 * f +
          0.1882286462349947 * s,
        y:
          0.297344975250536 * i +
          0.6273635662554661 * f +
          0.0752914584939979 * s,
        z:
          0.0270313613864123 * i +
          0.0706888525358272 * f +
          0.9913375368376386 * s,
      };
    return a.alpha !== void 0 && (r.alpha = a.alpha), r;
  },
  is = (a) => Math.pow(Math.abs(a), 256 / 563) * Math.sign(a),
  P1 = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = {
      mode: "a98",
      r: is(
        a * 2.0415879038107465 - i * 0.5650069742788597 - 0.3447313507783297 * f
      ),
      g: is(
        a * -0.9692436362808798 +
          i * 1.8759675015077206 +
          0.0415550574071756 * f
      ),
      b: is(
        a * 0.0134442806320312 - i * 0.1183623922310184 + 1.0151749943912058 * f
      ),
    };
    return s !== void 0 && (r.alpha = s), r;
  },
  cs = (a = 0) => {
    const i = Math.abs(a);
    return i <= 0.04045
      ? a / 12.92
      : (Math.sign(a) || 1) * Math.pow((i + 0.055) / 1.055, 2.4);
  },
  In = ({ r: a, g: i, b: f, alpha: s }) => {
    let r = { mode: "lrgb", r: cs(a), g: cs(i), b: cs(f) };
    return s !== void 0 && (r.alpha = s), r;
  },
  rn = (a) => {
    let { r: i, g: f, b: s, alpha: r } = In(a),
      h = {
        mode: "xyz65",
        x:
          0.4123907992659593 * i +
          0.357584339383878 * f +
          0.1804807884018343 * s,
        y:
          0.2126390058715102 * i +
          0.715168678767756 * f +
          0.0721923153607337 * s,
        z:
          0.0193308187155918 * i +
          0.119194779794626 * f +
          0.9505321522496607 * s,
      };
    return r !== void 0 && (h.alpha = r), h;
  },
  fs = (a = 0) => {
    const i = Math.abs(a);
    return i > 0.0031308
      ? (Math.sign(a) || 1) * (1.055 * Math.pow(i, 1 / 2.4) - 0.055)
      : a * 12.92;
  },
  Pn = ({ r: a, g: i, b: f, alpha: s }, r = "rgb") => {
    let h = { mode: r, r: fs(a), g: fs(i), b: fs(f) };
    return s !== void 0 && (h.alpha = s), h;
  },
  on = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Pn({
      r:
        a * 3.2409699419045226 - i * 1.537383177570094 - 0.4986107602930034 * f,
      g:
        a * -0.9692436362808796 +
        i * 1.8759675015077204 +
        0.0415550574071756 * f,
      b:
        a * 0.0556300796969936 -
        i * 0.2039769588889765 +
        1.0569715142428784 * f,
    });
    return s !== void 0 && (r.alpha = s), r;
  },
  gy = {
    ...Fn,
    mode: "a98",
    parse: ["a98-rgb"],
    serialize: "a98-rgb",
    fromMode: { rgb: (a) => P1(rn(a)), xyz65: P1 },
    toMode: { rgb: (a) => on(I1(a)), xyz65: I1 },
  },
  at = (a) => ((a = a % 360) < 0 ? a + 360 : a),
  yy = (a, i) =>
    a
      .map((f, s, r) => {
        if (f === void 0) return f;
        let h = at(f);
        return s === 0 || a[s - 1] === void 0 ? h : i(h - at(r[s - 1]));
      })
      .reduce(
        (f, s) =>
          !f.length || s === void 0 || f[f.length - 1] === void 0
            ? (f.push(s), f)
            : (f.push(s + f[f.length - 1]), f),
        []
      ),
  fl = (a) => yy(a, (i) => (Math.abs(i) <= 180 ? i : i - 360 * Math.sign(i))),
  Pe = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0],
  vy = Math.PI / 180,
  py = 180 / Math.PI;
let ed = Pe[3] * Pe[4],
  td = Pe[1] * Pe[4],
  ld = Pe[1] * Pe[2] - Pe[0] * Pe[3];
const by = ({ r: a, g: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = (ld * f + a * ed - i * td) / (ld + ed - td),
      h = f - r,
      m = (Pe[4] * (i - r) - Pe[2] * h) / Pe[3],
      x = {
        mode: "cubehelix",
        l: r,
        s:
          r === 0 || r === 1
            ? void 0
            : Math.sqrt(h * h + m * m) / (Pe[4] * r * (1 - r)),
      };
    return (
      x.s && (x.h = Math.atan2(m, h) * py - 120),
      s !== void 0 && (x.alpha = s),
      x
    );
  },
  Sy = ({ h: a, s: i, l: f, alpha: s }) => {
    let r = { mode: "rgb" };
    (a = (a === void 0 ? 0 : a + 120) * vy), f === void 0 && (f = 0);
    let h = i === void 0 ? 0 : i * f * (1 - f),
      m = Math.cos(a),
      x = Math.sin(a);
    return (
      (r.r = f + h * (Pe[0] * m + Pe[1] * x)),
      (r.g = f + h * (Pe[2] * m + Pe[3] * x)),
      (r.b = f + h * (Pe[4] * m + Pe[5] * x)),
      s !== void 0 && (r.alpha = s),
      r
    );
  },
  Ci = (a, i) => {
    if (a.h === void 0 || i.h === void 0 || !a.s || !i.s) return 0;
    let f = at(a.h),
      s = at(i.h),
      r = Math.sin((((s - f + 360) / 2) * Math.PI) / 180);
    return 2 * Math.sqrt(a.s * i.s) * r;
  },
  xy = (a, i) => {
    if (a.h === void 0 || i.h === void 0) return 0;
    let f = at(a.h),
      s = at(i.h);
    return Math.abs(s - f) > 180 ? f - (s - 360 * Math.sign(s - f)) : s - f;
  },
  Di = (a, i) => {
    if (a.h === void 0 || i.h === void 0 || !a.c || !i.c) return 0;
    let f = at(a.h),
      s = at(i.h),
      r = Math.sin((((s - f + 360) / 2) * Math.PI) / 180);
    return 2 * Math.sqrt(a.c * i.c) * r;
  },
  sl = (a) => {
    let i = a.reduce(
        (s, r) => {
          if (r !== void 0) {
            let h = (r * Math.PI) / 180;
            (s.sin += Math.sin(h)), (s.cos += Math.cos(h));
          }
          return s;
        },
        { sin: 0, cos: 0 }
      ),
      f = (Math.atan2(i.sin, i.cos) * 180) / Math.PI;
    return f < 0 ? 360 + f : f;
  },
  My = {
    mode: "cubehelix",
    channels: ["h", "s", "l", "alpha"],
    parse: ["--cubehelix"],
    serialize: "--cubehelix",
    ranges: { h: [0, 360], s: [0, 4.614], l: [0, 1] },
    fromMode: { rgb: by },
    toMode: { rgb: Sy },
    interpolate: {
      h: { use: Y, fixup: fl },
      s: Y,
      l: Y,
      alpha: { use: Y, fixup: Ke },
    },
    difference: { h: Ci },
    average: { h: sl },
  },
  Yl = ({ l: a, a: i, b: f, alpha: s }, r = "lch") => {
    i === void 0 && (i = 0), f === void 0 && (f = 0);
    let h = Math.sqrt(i * i + f * f),
      m = { mode: r, l: a, c: h };
    return (
      h && (m.h = at((Math.atan2(f, i) * 180) / Math.PI)),
      s !== void 0 && (m.alpha = s),
      m
    );
  },
  ql = ({ l: a, c: i, h: f, alpha: s }, r = "lab") => {
    f === void 0 && (f = 0);
    let h = {
      mode: r,
      l: a,
      a: i ? i * Math.cos((f / 180) * Math.PI) : 0,
      b: i ? i * Math.sin((f / 180) * Math.PI) : 0,
    };
    return s !== void 0 && (h.alpha = s), h;
  },
  Yd = Math.pow(29, 3) / Math.pow(3, 3),
  qd = Math.pow(6, 3) / Math.pow(29, 3),
  Ve = { X: 0.3457 / 0.3585, Y: 1, Z: (1 - 0.3457 - 0.3585) / 0.3585 },
  Jn = { X: 0.3127 / 0.329, Y: 1, Z: (1 - 0.3127 - 0.329) / 0.329 };
let ss = (a) => (Math.pow(a, 3) > qd ? Math.pow(a, 3) : (116 * a - 16) / Yd);
const Bd = ({ l: a, a: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = (a + 16) / 116,
      h = i / 500 + r,
      m = r - f / 200,
      x = { mode: "xyz65", x: ss(h) * Jn.X, y: ss(r) * Jn.Y, z: ss(m) * Jn.Z };
    return s !== void 0 && (x.alpha = s), x;
  },
  Hi = (a) => on(Bd(a)),
  rs = (a) => (a > qd ? Math.cbrt(a) : (Yd * a + 16) / 116),
  Xd = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = rs(a / Jn.X),
      h = rs(i / Jn.Y),
      m = rs(f / Jn.Z),
      x = {
        mode: "lab65",
        l: 116 * h - 16,
        a: 500 * (r - h),
        b: 200 * (h - m),
      };
    return s !== void 0 && (x.alpha = s), x;
  },
  Ui = (a) => {
    let i = Xd(rn(a));
    return a.r === a.b && a.b === a.g && (i.a = i.b = 0), i;
  },
  zi = 1,
  Gd = 1,
  lu = (26 / 180) * Math.PI,
  Ai = Math.cos(lu),
  Ni = Math.sin(lu),
  Ld = 100 / Math.log(139 / 100),
  qs = ({ l: a, c: i, h: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = { mode: "lab65", l: (Math.exp((a * zi) / Ld) - 1) / 0.0039 },
      h = (Math.exp(0.0435 * i * Gd * zi) - 1) / 0.075,
      m = h * Math.cos((f / 180) * Math.PI - lu),
      x = h * Math.sin((f / 180) * Math.PI - lu);
    return (
      (r.a = m * Ai - (x / 0.83) * Ni),
      (r.b = m * Ni + (x / 0.83) * Ai),
      s !== void 0 && (r.alpha = s),
      r
    );
  },
  Bs = ({ l: a, a: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = i * Ai + f * Ni,
      h = 0.83 * (f * Ai - i * Ni),
      m = Math.sqrt(r * r + h * h),
      x = {
        mode: "dlch",
        l: (Ld / zi) * Math.log(1 + 0.0039 * a),
        c: Math.log(1 + 0.075 * m) / (0.0435 * Gd * zi),
      };
    return (
      x.c && (x.h = at(((Math.atan2(h, r) + lu) / Math.PI) * 180)),
      s !== void 0 && (x.alpha = s),
      x
    );
  },
  nd = (a) => qs(Yl(a, "dlch")),
  ad = (a) => ql(Bs(a), "dlab"),
  _y = {
    mode: "dlab",
    parse: ["--din99o-lab"],
    serialize: "--din99o-lab",
    toMode: { lab65: nd, rgb: (a) => Hi(nd(a)) },
    fromMode: { lab65: ad, rgb: (a) => ad(Ui(a)) },
    channels: ["l", "a", "b", "alpha"],
    ranges: { l: [0, 100], a: [-40.09, 45.501], b: [-40.469, 44.344] },
    interpolate: { l: Y, a: Y, b: Y, alpha: { use: Y, fixup: Ke } },
  },
  Ty = {
    mode: "dlch",
    parse: ["--din99o-lch"],
    serialize: "--din99o-lch",
    toMode: { lab65: qs, dlab: (a) => ql(a, "dlab"), rgb: (a) => Hi(qs(a)) },
    fromMode: { lab65: Bs, dlab: (a) => Yl(a, "dlch"), rgb: (a) => Bs(Ui(a)) },
    channels: ["l", "c", "h", "alpha"],
    ranges: { l: [0, 100], c: [0, 51.484], h: [0, 360] },
    interpolate: {
      l: Y,
      c: Y,
      h: { use: Y, fixup: fl },
      alpha: { use: Y, fixup: Ke },
    },
    difference: { h: Di },
    average: { h: sl },
  };
function Ey({ h: a, s: i, i: f, alpha: s }) {
  (a = at(a !== void 0 ? a : 0)),
    i === void 0 && (i = 0),
    f === void 0 && (f = 0);
  let r = Math.abs(((a / 60) % 2) - 1),
    h;
  switch (Math.floor(a / 60)) {
    case 0:
      h = {
        r: f * (1 + i * (3 / (2 - r) - 1)),
        g: f * (1 + i * ((3 * (1 - r)) / (2 - r) - 1)),
        b: f * (1 - i),
      };
      break;
    case 1:
      h = {
        r: f * (1 + i * ((3 * (1 - r)) / (2 - r) - 1)),
        g: f * (1 + i * (3 / (2 - r) - 1)),
        b: f * (1 - i),
      };
      break;
    case 2:
      h = {
        r: f * (1 - i),
        g: f * (1 + i * (3 / (2 - r) - 1)),
        b: f * (1 + i * ((3 * (1 - r)) / (2 - r) - 1)),
      };
      break;
    case 3:
      h = {
        r: f * (1 - i),
        g: f * (1 + i * ((3 * (1 - r)) / (2 - r) - 1)),
        b: f * (1 + i * (3 / (2 - r) - 1)),
      };
      break;
    case 4:
      h = {
        r: f * (1 + i * ((3 * (1 - r)) / (2 - r) - 1)),
        g: f * (1 - i),
        b: f * (1 + i * (3 / (2 - r) - 1)),
      };
      break;
    case 5:
      h = {
        r: f * (1 + i * (3 / (2 - r) - 1)),
        g: f * (1 - i),
        b: f * (1 + i * ((3 * (1 - r)) / (2 - r) - 1)),
      };
      break;
    default:
      h = { r: f * (1 - i), g: f * (1 - i), b: f * (1 - i) };
  }
  return (h.mode = "rgb"), s !== void 0 && (h.alpha = s), h;
}
function zy({ r: a, g: i, b: f, alpha: s }) {
  a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
  let r = Math.max(a, i, f),
    h = Math.min(a, i, f),
    m = {
      mode: "hsi",
      s: a + i + f === 0 ? 0 : 1 - (3 * h) / (a + i + f),
      i: (a + i + f) / 3,
    };
  return (
    r - h !== 0 &&
      (m.h =
        (r === a
          ? (i - f) / (r - h) + (i < f) * 6
          : r === i
          ? (f - a) / (r - h) + 2
          : (a - i) / (r - h) + 4) * 60),
    s !== void 0 && (m.alpha = s),
    m
  );
}
const Ay = {
  mode: "hsi",
  toMode: { rgb: Ey },
  parse: ["--hsi"],
  serialize: "--hsi",
  fromMode: { rgb: zy },
  channels: ["h", "s", "i", "alpha"],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  interpolate: {
    h: { use: Y, fixup: fl },
    s: Y,
    i: Y,
    alpha: { use: Y, fixup: Ke },
  },
  difference: { h: Ci },
  average: { h: sl },
};
function Ny({ h: a, s: i, l: f, alpha: s }) {
  (a = at(a !== void 0 ? a : 0)),
    i === void 0 && (i = 0),
    f === void 0 && (f = 0);
  let r = f + i * (f < 0.5 ? f : 1 - f),
    h = r - (r - f) * 2 * Math.abs(((a / 60) % 2) - 1),
    m;
  switch (Math.floor(a / 60)) {
    case 0:
      m = { r, g: h, b: 2 * f - r };
      break;
    case 1:
      m = { r: h, g: r, b: 2 * f - r };
      break;
    case 2:
      m = { r: 2 * f - r, g: r, b: h };
      break;
    case 3:
      m = { r: 2 * f - r, g: h, b: r };
      break;
    case 4:
      m = { r: h, g: 2 * f - r, b: r };
      break;
    case 5:
      m = { r, g: 2 * f - r, b: h };
      break;
    default:
      m = { r: 2 * f - r, g: 2 * f - r, b: 2 * f - r };
  }
  return (m.mode = "rgb"), s !== void 0 && (m.alpha = s), m;
}
function Oy({ r: a, g: i, b: f, alpha: s }) {
  a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
  let r = Math.max(a, i, f),
    h = Math.min(a, i, f),
    m = {
      mode: "hsl",
      s: r === h ? 0 : (r - h) / (1 - Math.abs(r + h - 1)),
      l: 0.5 * (r + h),
    };
  return (
    r - h !== 0 &&
      (m.h =
        (r === a
          ? (i - f) / (r - h) + (i < f) * 6
          : r === i
          ? (f - a) / (r - h) + 2
          : (a - i) / (r - h) + 4) * 60),
    s !== void 0 && (m.alpha = s),
    m
  );
}
const Ry = (a, i) => {
    switch (i) {
      case "deg":
        return +a;
      case "rad":
        return (a / Math.PI) * 180;
      case "grad":
        return (a / 10) * 9;
      case "turn":
        return a * 360;
    }
  },
  Cy = new RegExp(
    `^hsla?\\(\\s*${J2}${Wn}${eu}${Wn}${eu}\\s*(?:,\\s*${ks}\\s*)?\\)$`
  ),
  Dy = (a) => {
    let i = a.match(Cy);
    if (!i) return;
    let f = { mode: "hsl" };
    return (
      i[3] !== void 0
        ? (f.h = +i[3])
        : i[1] !== void 0 && i[2] !== void 0 && (f.h = Ry(i[1], i[2])),
      i[4] !== void 0 && (f.s = Math.min(Math.max(0, i[4] / 100), 1)),
      i[5] !== void 0 && (f.l = Math.min(Math.max(0, i[5] / 100), 1)),
      i[6] !== void 0
        ? (f.alpha = Math.max(0, Math.min(1, i[6] / 100)))
        : i[7] !== void 0 && (f.alpha = Math.max(0, Math.min(1, +i[7]))),
      f
    );
  };
function Hy(a, i) {
  if (!i || (i[0] !== "hsl" && i[0] !== "hsla")) return;
  const f = { mode: "hsl" },
    [, s, r, h, m] = i;
  if (s.type !== j.None) {
    if (s.type === j.Percentage) return;
    f.h = s.value;
  }
  if (r.type !== j.None) {
    if (r.type === j.Hue) return;
    f.s = r.value / 100;
  }
  if (h.type !== j.None) {
    if (h.type === j.Hue) return;
    f.l = h.value / 100;
  }
  return (
    m.type !== j.None &&
      (f.alpha = Math.min(
        1,
        Math.max(0, m.type === j.Number ? m.value : m.value / 100)
      )),
    f
  );
}
const Qd = {
  mode: "hsl",
  toMode: { rgb: Ny },
  fromMode: { rgb: Oy },
  channels: ["h", "s", "l", "alpha"],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  parse: [Hy, Dy],
  serialize: (a) =>
    `hsl(${a.h !== void 0 ? a.h : "none"} ${
      a.s !== void 0 ? a.s * 100 + "%" : "none"
    } ${a.l !== void 0 ? a.l * 100 + "%" : "none"}${
      a.alpha < 1 ? ` / ${a.alpha}` : ""
    })`,
  interpolate: {
    h: { use: Y, fixup: fl },
    s: Y,
    l: Y,
    alpha: { use: Y, fixup: Ke },
  },
  difference: { h: Ci },
  average: { h: sl },
};
function Zd({ h: a, s: i, v: f, alpha: s }) {
  (a = at(a !== void 0 ? a : 0)),
    i === void 0 && (i = 0),
    f === void 0 && (f = 0);
  let r = Math.abs(((a / 60) % 2) - 1),
    h;
  switch (Math.floor(a / 60)) {
    case 0:
      h = { r: f, g: f * (1 - i * r), b: f * (1 - i) };
      break;
    case 1:
      h = { r: f * (1 - i * r), g: f, b: f * (1 - i) };
      break;
    case 2:
      h = { r: f * (1 - i), g: f, b: f * (1 - i * r) };
      break;
    case 3:
      h = { r: f * (1 - i), g: f * (1 - i * r), b: f };
      break;
    case 4:
      h = { r: f * (1 - i * r), g: f * (1 - i), b: f };
      break;
    case 5:
      h = { r: f, g: f * (1 - i), b: f * (1 - i * r) };
      break;
    default:
      h = { r: f * (1 - i), g: f * (1 - i), b: f * (1 - i) };
  }
  return (h.mode = "rgb"), s !== void 0 && (h.alpha = s), h;
}
function Vd({ r: a, g: i, b: f, alpha: s }) {
  a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
  let r = Math.max(a, i, f),
    h = Math.min(a, i, f),
    m = { mode: "hsv", s: r === 0 ? 0 : 1 - h / r, v: r };
  return (
    r - h !== 0 &&
      (m.h =
        (r === a
          ? (i - f) / (r - h) + (i < f) * 6
          : r === i
          ? (f - a) / (r - h) + 2
          : (a - i) / (r - h) + 4) * 60),
    s !== void 0 && (m.alpha = s),
    m
  );
}
const $d = {
  mode: "hsv",
  toMode: { rgb: Zd },
  parse: ["--hsv"],
  serialize: "--hsv",
  fromMode: { rgb: Vd },
  channels: ["h", "s", "v", "alpha"],
  ranges: { h: [0, 360] },
  gamut: "rgb",
  interpolate: {
    h: { use: Y, fixup: fl },
    s: Y,
    v: Y,
    alpha: { use: Y, fixup: Ke },
  },
  difference: { h: Ci },
  average: { h: sl },
};
function Uy({ h: a, w: i, b: f, alpha: s }) {
  if ((i === void 0 && (i = 0), f === void 0 && (f = 0), i + f > 1)) {
    let r = i + f;
    (i /= r), (f /= r);
  }
  return Zd({ h: a, s: f === 1 ? 1 : 1 - i / (1 - f), v: 1 - f, alpha: s });
}
function jy(a) {
  let i = Vd(a);
  if (i === void 0) return;
  let f = i.s !== void 0 ? i.s : 0,
    s = i.v !== void 0 ? i.v : 0,
    r = { mode: "hwb", w: (1 - f) * s, b: 1 - s };
  return (
    i.h !== void 0 && (r.h = i.h), i.alpha !== void 0 && (r.alpha = i.alpha), r
  );
}
function wy(a, i) {
  if (!i || i[0] !== "hwb") return;
  const f = { mode: "hwb" },
    [, s, r, h, m] = i;
  if (s.type !== j.None) {
    if (s.type === j.Percentage) return;
    f.h = s.value;
  }
  if (r.type !== j.None) {
    if (r.type === j.Hue) return;
    f.w = r.value / 100;
  }
  if (h.type !== j.None) {
    if (h.type === j.Hue) return;
    f.b = h.value / 100;
  }
  return (
    m.type !== j.None &&
      (f.alpha = Math.min(
        1,
        Math.max(0, m.type === j.Number ? m.value : m.value / 100)
      )),
    f
  );
}
const Yy = {
    mode: "hwb",
    toMode: { rgb: Uy },
    fromMode: { rgb: jy },
    channels: ["h", "w", "b", "alpha"],
    ranges: { h: [0, 360] },
    gamut: "rgb",
    parse: [wy],
    serialize: (a) =>
      `hwb(${a.h !== void 0 ? a.h : "none"} ${
        a.w !== void 0 ? a.w * 100 + "%" : "none"
      } ${a.b !== void 0 ? a.b * 100 + "%" : "none"}${
        a.alpha < 1 ? ` / ${a.alpha}` : ""
      })`,
    interpolate: {
      h: { use: Y, fixup: fl },
      w: Y,
      b: Y,
      alpha: { use: Y, fixup: Ke },
    },
    difference: { h: xy },
    average: { h: sl },
  },
  kd = 203,
  ji = 0.1593017578125,
  Kd = 78.84375,
  wi = 0.8359375,
  Yi = 18.8515625,
  qi = 18.6875;
function os(a) {
  if (a < 0) return 0;
  const i = Math.pow(a, 1 / Kd);
  return 1e4 * Math.pow(Math.max(0, i - wi) / (Yi - qi * i), 1 / ji);
}
function ds(a) {
  if (a < 0) return 0;
  const i = Math.pow(a / 1e4, ji);
  return Math.pow((wi + Yi * i) / (1 + qi * i), Kd);
}
const hs = (a) => Math.max(a / kd, 0),
  ud = ({ i: a, t: i, p: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    const r = os(a + 0.008609037037932761 * i + 0.11102962500302593 * f),
      h = os(a - 0.00860903703793275 * i - 0.11102962500302599 * f),
      m = os(a + 0.5600313357106791 * i - 0.32062717498731885 * f),
      x = {
        mode: "xyz65",
        x: hs(
          2.070152218389422 * r -
            1.3263473389671556 * h +
            0.2066510476294051 * m
        ),
        y: hs(
          0.3647385209748074 * r +
            0.680566024947227 * h -
            0.0453045459220346 * m
        ),
        z: hs(
          -0.049747207535812 * r -
            0.0492609666966138 * h +
            1.1880659249923042 * m
        ),
      };
    return s !== void 0 && (x.alpha = s), x;
  },
  ms = (a = 0) => Math.max(a * kd, 0),
  id = ({ x: a, y: i, z: f, alpha: s }) => {
    const r = ms(a),
      h = ms(i),
      m = ms(f),
      x = ds(
        0.3592832590121217 * r + 0.6976051147779502 * h - 0.0358915932320289 * m
      ),
      b = ds(
        -0.1920808463704995 * r +
          1.1004767970374323 * h +
          0.0753748658519118 * m
      ),
      y = ds(
        0.0070797844607477 * r + 0.0748396662186366 * h + 0.8433265453898765 * m
      ),
      C = 0.5 * x + 0.5 * b,
      w = 1.61376953125 * x - 3.323486328125 * b + 1.709716796875 * y,
      q = 4.378173828125 * x - 4.24560546875 * b - 0.132568359375 * y,
      B = { mode: "itp", i: C, t: w, p: q };
    return s !== void 0 && (B.alpha = s), B;
  },
  qy = {
    mode: "itp",
    channels: ["i", "t", "p", "alpha"],
    parse: ["--ictcp"],
    serialize: "--ictcp",
    toMode: { xyz65: ud, rgb: (a) => on(ud(a)) },
    fromMode: { xyz65: id, rgb: (a) => id(rn(a)) },
    ranges: { i: [0, 0.581], t: [-0.369, 0.272], p: [-0.164, 0.331] },
    interpolate: { i: Y, t: Y, p: Y, alpha: { use: Y, fixup: Ke } },
  },
  By = 134.03437499999998,
  Xy = 16295499532821565e-27,
  gs = (a) => {
    if (a < 0) return 0;
    let i = Math.pow(a / 1e4, ji);
    return Math.pow((wi + Yi * i) / (1 + qi * i), By);
  },
  ys = (a = 0) => Math.max(a * 203, 0),
  Jd = ({ x: a, y: i, z: f, alpha: s }) => {
    (a = ys(a)), (i = ys(i)), (f = ys(f));
    let r = 1.15 * a - 0.15 * f,
      h = 0.66 * i + 0.34 * a,
      m = gs(0.41478972 * r + 0.579999 * h + 0.014648 * f),
      x = gs(-0.20151 * r + 1.120649 * h + 0.0531008 * f),
      b = gs(-0.0166008 * r + 0.2648 * h + 0.6684799 * f),
      y = (m + x) / 2,
      C = {
        mode: "jab",
        j: (0.44 * y) / (1 - 0.56 * y) - Xy,
        a: 3.524 * m - 4.066708 * x + 0.542708 * b,
        b: 0.199076 * m + 1.096799 * x - 1.295875 * b,
      };
    return s !== void 0 && (C.alpha = s), C;
  },
  Gy = 134.03437499999998,
  cd = 16295499532821565e-27,
  vs = (a) => {
    if (a < 0) return 0;
    let i = Math.pow(a, 1 / Gy);
    return 1e4 * Math.pow((wi - i) / (qi * i - Yi), 1 / ji);
  },
  ps = (a) => a / 203,
  Wd = ({ j: a, a: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = (a + cd) / (0.44 + 0.56 * (a + cd)),
      h = vs(r + 0.13860504 * i + 0.058047316 * f),
      m = vs(r - 0.13860504 * i - 0.058047316 * f),
      x = vs(r - 0.096019242 * i - 0.8118919 * f),
      b = {
        mode: "xyz65",
        x: ps(
          1.661373024652174 * h -
            0.914523081304348 * m +
            0.23136208173913045 * x
        ),
        y: ps(
          -0.3250758611844533 * h +
            1.571847026732543 * m -
            0.21825383453227928 * x
        ),
        z: ps(-0.090982811 * h - 0.31272829 * m + 1.5227666 * x),
      };
    return s !== void 0 && (b.alpha = s), b;
  },
  Fd = (a) => {
    let i = Jd(rn(a));
    return a.r === a.b && a.b === a.g && (i.a = i.b = 0), i;
  },
  Id = (a) => on(Wd(a)),
  Ly = {
    mode: "jab",
    channels: ["j", "a", "b", "alpha"],
    parse: ["--jzazbz"],
    serialize: "--jzazbz",
    fromMode: { rgb: Fd, xyz65: Jd },
    toMode: { rgb: Id, xyz65: Wd },
    ranges: { j: [0, 0.222], a: [-0.109, 0.129], b: [-0.185, 0.134] },
    interpolate: { j: Y, a: Y, b: Y, alpha: { use: Y, fixup: Ke } },
  },
  fd = ({ j: a, a: i, b: f, alpha: s }) => {
    i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Math.sqrt(i * i + f * f),
      h = { mode: "jch", j: a, c: r };
    return (
      r && (h.h = at((Math.atan2(f, i) * 180) / Math.PI)),
      s !== void 0 && (h.alpha = s),
      h
    );
  },
  sd = ({ j: a, c: i, h: f, alpha: s }) => {
    f === void 0 && (f = 0);
    let r = {
      mode: "jab",
      j: a,
      a: i ? i * Math.cos((f / 180) * Math.PI) : 0,
      b: i ? i * Math.sin((f / 180) * Math.PI) : 0,
    };
    return s !== void 0 && (r.alpha = s), r;
  },
  Qy = {
    mode: "jch",
    parse: ["--jzczhz"],
    serialize: "--jzczhz",
    toMode: { jab: sd, rgb: (a) => Id(sd(a)) },
    fromMode: { rgb: (a) => fd(Fd(a)), jab: fd },
    channels: ["j", "c", "h", "alpha"],
    ranges: { j: [0, 0.221], c: [0, 0.19], h: [0, 360] },
    interpolate: {
      h: { use: Y, fixup: fl },
      c: Y,
      j: Y,
      alpha: { use: Y, fixup: Ke },
    },
    difference: { h: Di },
    average: { h: sl },
  },
  Bi = Math.pow(29, 3) / Math.pow(3, 3),
  Ks = Math.pow(6, 3) / Math.pow(29, 3);
let bs = (a) => (Math.pow(a, 3) > Ks ? Math.pow(a, 3) : (116 * a - 16) / Bi);
const Js = ({ l: a, a: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = (a + 16) / 116,
      h = i / 500 + r,
      m = r - f / 200,
      x = { mode: "xyz50", x: bs(h) * Ve.X, y: bs(r) * Ve.Y, z: bs(m) * Ve.Z };
    return s !== void 0 && (x.alpha = s), x;
  },
  au = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Pn({
      r:
        a * 3.1341359569958707 -
        i * 1.6173863321612538 -
        0.4906619460083532 * f,
      g:
        a * -0.978795502912089 +
        i * 1.916254567259524 +
        0.03344273116131949 * f,
      b:
        a * 0.07195537988411677 -
        i * 0.2289768264158322 +
        1.405386058324125 * f,
    });
    return s !== void 0 && (r.alpha = s), r;
  },
  Pd = (a) => au(Js(a)),
  uu = (a) => {
    let { r: i, g: f, b: s, alpha: r } = In(a),
      h = {
        mode: "xyz50",
        x:
          0.436065742824811 * i +
          0.3851514688337912 * f +
          0.14307845442264197 * s,
        y:
          0.22249319175623702 * i +
          0.7168870538238823 * f +
          0.06061979053616537 * s,
        z:
          0.013923904500943465 * i +
          0.09708128566574634 * f +
          0.7140993584005155 * s,
      };
    return r !== void 0 && (h.alpha = r), h;
  },
  Ss = (a) => (a > Ks ? Math.cbrt(a) : (Bi * a + 16) / 116),
  Ws = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Ss(a / Ve.X),
      h = Ss(i / Ve.Y),
      m = Ss(f / Ve.Z),
      x = { mode: "lab", l: 116 * h - 16, a: 500 * (r - h), b: 200 * (h - m) };
    return s !== void 0 && (x.alpha = s), x;
  },
  eh = (a) => {
    let i = Ws(uu(a));
    return a.r === a.b && a.b === a.g && (i.a = i.b = 0), i;
  };
function Zy(a, i) {
  if (!i || i[0] !== "lab") return;
  const f = { mode: "lab" },
    [, s, r, h, m] = i;
  if (!(s.type === j.Hue || r.type === j.Hue || h.type === j.Hue))
    return (
      s.type !== j.None && (f.l = Math.min(Math.max(0, s.value), 100)),
      r.type !== j.None &&
        (f.a = r.type === j.Number ? r.value : (r.value * 125) / 100),
      h.type !== j.None &&
        (f.b = h.type === j.Number ? h.value : (h.value * 125) / 100),
      m.type !== j.None &&
        (f.alpha = Math.min(
          1,
          Math.max(0, m.type === j.Number ? m.value : m.value / 100)
        )),
      f
    );
}
const Fs = {
    mode: "lab",
    toMode: { xyz50: Js, rgb: Pd },
    fromMode: { xyz50: Ws, rgb: eh },
    channels: ["l", "a", "b", "alpha"],
    ranges: { l: [0, 100], a: [-100, 100], b: [-100, 100] },
    parse: [Zy],
    serialize: (a) =>
      `lab(${a.l !== void 0 ? a.l : "none"} ${a.a !== void 0 ? a.a : "none"} ${
        a.b !== void 0 ? a.b : "none"
      }${a.alpha < 1 ? ` / ${a.alpha}` : ""})`,
    interpolate: { l: Y, a: Y, b: Y, alpha: { use: Y, fixup: Ke } },
  },
  Vy = {
    ...Fs,
    mode: "lab65",
    parse: ["--lab-d65"],
    serialize: "--lab-d65",
    toMode: { xyz65: Bd, rgb: Hi },
    fromMode: { xyz65: Xd, rgb: Ui },
    ranges: { l: [0, 100], a: [-86.182, 98.234], b: [-107.86, 94.477] },
  };
function $y(a, i) {
  if (!i || i[0] !== "lch") return;
  const f = { mode: "lch" },
    [, s, r, h, m] = i;
  if (s.type !== j.None) {
    if (s.type === j.Hue) return;
    f.l = Math.min(Math.max(0, s.value), 100);
  }
  if (
    (r.type !== j.None &&
      (f.c = Math.max(
        0,
        r.type === j.Number ? r.value : (r.value * 150) / 100
      )),
    h.type !== j.None)
  ) {
    if (h.type === j.Percentage) return;
    f.h = h.value;
  }
  return (
    m.type !== j.None &&
      (f.alpha = Math.min(
        1,
        Math.max(0, m.type === j.Number ? m.value : m.value / 100)
      )),
    f
  );
}
const Is = {
    mode: "lch",
    toMode: { lab: ql, rgb: (a) => Pd(ql(a)) },
    fromMode: { rgb: (a) => Yl(eh(a)), lab: Yl },
    channels: ["l", "c", "h", "alpha"],
    ranges: { l: [0, 100], c: [0, 150], h: [0, 360] },
    parse: [$y],
    serialize: (a) =>
      `lch(${a.l !== void 0 ? a.l : "none"} ${a.c !== void 0 ? a.c : "none"} ${
        a.h !== void 0 ? a.h : "none"
      }${a.alpha < 1 ? ` / ${a.alpha}` : ""})`,
    interpolate: {
      h: { use: Y, fixup: fl },
      c: Y,
      l: Y,
      alpha: { use: Y, fixup: Ke },
    },
    difference: { h: Di },
    average: { h: sl },
  },
  ky = {
    ...Is,
    mode: "lch65",
    parse: ["--lch-d65"],
    serialize: "--lch-d65",
    toMode: { lab65: (a) => ql(a, "lab65"), rgb: (a) => Hi(ql(a, "lab65")) },
    fromMode: { rgb: (a) => Yl(Ui(a), "lch65"), lab65: (a) => Yl(a, "lch65") },
    ranges: { l: [0, 100], c: [0, 133.807], h: [0, 360] },
  },
  th = ({ l: a, u: i, v: f, alpha: s }) => {
    i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Math.sqrt(i * i + f * f),
      h = { mode: "lchuv", l: a, c: r };
    return (
      r && (h.h = at((Math.atan2(f, i) * 180) / Math.PI)),
      s !== void 0 && (h.alpha = s),
      h
    );
  },
  lh = ({ l: a, c: i, h: f, alpha: s }) => {
    f === void 0 && (f = 0);
    let r = {
      mode: "luv",
      l: a,
      u: i ? i * Math.cos((f / 180) * Math.PI) : 0,
      v: i ? i * Math.sin((f / 180) * Math.PI) : 0,
    };
    return s !== void 0 && (r.alpha = s), r;
  },
  nh = (a, i, f) => (4 * a) / (a + 15 * i + 3 * f),
  ah = (a, i, f) => (9 * i) / (a + 15 * i + 3 * f),
  Ky = nh(Ve.X, Ve.Y, Ve.Z),
  Jy = ah(Ve.X, Ve.Y, Ve.Z),
  Wy = (a) => (a <= Ks ? Bi * a : 116 * Math.cbrt(a) - 16),
  Xs = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Wy(i / Ve.Y),
      h = nh(a, i, f),
      m = ah(a, i, f);
    !isFinite(h) || !isFinite(m)
      ? (r = h = m = 0)
      : ((h = 13 * r * (h - Ky)), (m = 13 * r * (m - Jy)));
    let x = { mode: "luv", l: r, u: h, v: m };
    return s !== void 0 && (x.alpha = s), x;
  },
  Fy = (a, i, f) => (4 * a) / (a + 15 * i + 3 * f),
  Iy = (a, i, f) => (9 * i) / (a + 15 * i + 3 * f),
  Py = Fy(Ve.X, Ve.Y, Ve.Z),
  ev = Iy(Ve.X, Ve.Y, Ve.Z),
  Gs = ({ l: a, u: i, v: f, alpha: s }) => {
    if ((a === void 0 && (a = 0), a === 0))
      return { mode: "xyz50", x: 0, y: 0, z: 0 };
    i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = i / (13 * a) + Py,
      h = f / (13 * a) + ev,
      m = Ve.Y * (a <= 8 ? a / Bi : Math.pow((a + 16) / 116, 3)),
      x = (m * (9 * r)) / (4 * h),
      b = (m * (12 - 3 * r - 20 * h)) / (4 * h),
      y = { mode: "xyz50", x, y: m, z: b };
    return s !== void 0 && (y.alpha = s), y;
  },
  tv = (a) => th(Xs(uu(a))),
  lv = (a) => au(Gs(lh(a))),
  nv = {
    mode: "lchuv",
    toMode: { luv: lh, rgb: lv },
    fromMode: { rgb: tv, luv: th },
    channels: ["l", "c", "h", "alpha"],
    parse: ["--lchuv"],
    serialize: "--lchuv",
    ranges: { l: [0, 100], c: [0, 176.956], h: [0, 360] },
    interpolate: {
      h: { use: Y, fixup: fl },
      c: Y,
      l: Y,
      alpha: { use: Y, fixup: Ke },
    },
    difference: { h: Di },
    average: { h: sl },
  },
  av = {
    ...Fn,
    mode: "lrgb",
    toMode: { rgb: Pn },
    fromMode: { rgb: In },
    parse: ["srgb-linear"],
    serialize: "srgb-linear",
  },
  uv = {
    mode: "luv",
    toMode: { xyz50: Gs, rgb: (a) => au(Gs(a)) },
    fromMode: { xyz50: Xs, rgb: (a) => Xs(uu(a)) },
    channels: ["l", "u", "v", "alpha"],
    parse: ["--luv"],
    serialize: "--luv",
    ranges: { l: [0, 100], u: [-84.936, 175.042], v: [-125.882, 87.243] },
    interpolate: { l: Y, u: Y, v: Y, alpha: { use: Y, fixup: Ke } },
  },
  uh = ({ r: a, g: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Math.cbrt(
        0.41222147079999993 * a + 0.5363325363 * i + 0.0514459929 * f
      ),
      h = Math.cbrt(
        0.2119034981999999 * a + 0.6806995450999999 * i + 0.1073969566 * f
      ),
      m = Math.cbrt(
        0.08830246189999998 * a + 0.2817188376 * i + 0.6299787005000002 * f
      ),
      x = {
        mode: "oklab",
        l: 0.2104542553 * r + 0.793617785 * h - 0.0040720468 * m,
        a: 1.9779984951 * r - 2.428592205 * h + 0.4505937099 * m,
        b: 0.0259040371 * r + 0.7827717662 * h - 0.808675766 * m,
      };
    return s !== void 0 && (x.alpha = s), x;
  },
  Xi = (a) => {
    let i = uh(In(a));
    return a.r === a.b && a.b === a.g && (i.a = i.b = 0), i;
  },
  iu = ({ l: a, a: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Math.pow(
        a * 0.9999999984505198 +
          0.39633779217376786 * i +
          0.2158037580607588 * f,
        3
      ),
      h = Math.pow(
        a * 1.0000000088817609 -
          0.10556134232365635 * i -
          0.06385417477170591 * f,
        3
      ),
      m = Math.pow(
        a * 1.0000000546724108 -
          0.08948418209496575 * i -
          1.2914855378640917 * f,
        3
      ),
      x = {
        mode: "lrgb",
        r:
          4.076741661347994 * r - 3.307711590408193 * h + 0.230969928729428 * m,
        g:
          -1.2684380040921763 * r +
          2.6097574006633715 * h -
          0.3413193963102197 * m,
        b:
          -0.004196086541837188 * r -
          0.7034186144594493 * h +
          1.7076147009309444 * m,
      };
    return s !== void 0 && (x.alpha = s), x;
  },
  Gi = (a) => Pn(iu(a));
function Ls(a) {
  const s = 1.170873786407767;
  return (
    0.5 *
    (s * a -
      0.206 +
      Math.sqrt((s * a - 0.206) * (s * a - 0.206) + 4 * 0.03 * s * a))
  );
}
function Oi(a) {
  return (a * a + 0.206 * a) / (1.170873786407767 * (a + 0.03));
}
function iv(a, i) {
  let f, s, r, h, m, x, b, y;
  -1.88170328 * a - 0.80936493 * i > 1
    ? ((f = 1.19086277),
      (s = 1.76576728),
      (r = 0.59662641),
      (h = 0.75515197),
      (m = 0.56771245),
      (x = 4.0767416621),
      (b = -3.3077115913),
      (y = 0.2309699292))
    : 1.81444104 * a - 1.19445276 * i > 1
    ? ((f = 0.73956515),
      (s = -0.45954404),
      (r = 0.08285427),
      (h = 0.1254107),
      (m = 0.14503204),
      (x = -1.2684380046),
      (b = 2.6097574011),
      (y = -0.3413193965))
    : ((f = 1.35733652),
      (s = -0.00915799),
      (r = -1.1513021),
      (h = -0.50559606),
      (m = 0.00692167),
      (x = -0.0041960863),
      (b = -0.7034186147),
      (y = 1.707614701));
  let C = f + s * a + r * i + h * a * a + m * a * i,
    w = 0.3963377774 * a + 0.2158037573 * i,
    q = -0.1055613458 * a - 0.0638541728 * i,
    B = -0.0894841775 * a - 1.291485548 * i;
  {
    let K = 1 + C * w,
      ee = 1 + C * q,
      te = 1 + C * B,
      se = K * K * K,
      ne = ee * ee * ee,
      me = te * te * te,
      ge = 3 * w * K * K,
      F = 3 * q * ee * ee,
      be = 3 * B * te * te,
      _e = 6 * w * w * K,
      Se = 6 * q * q * ee,
      L = 6 * B * B * te,
      V = x * se + b * ne + y * me,
      pe = x * ge + b * F + y * be,
      Ue = x * _e + b * Se + y * L;
    C = C - (V * pe) / (pe * pe - 0.5 * V * Ue);
  }
  return C;
}
function Ps(a, i) {
  let f = iv(a, i),
    s = iu({ l: 1, a: f * a, b: f * i }),
    r = Math.cbrt(1 / Math.max(s.r, s.g, s.b)),
    h = r * f;
  return [r, h];
}
function cv(a, i, f, s, r, h = null) {
  h || (h = Ps(a, i));
  let m;
  if ((f - r) * h[1] - (h[0] - r) * s <= 0)
    m = (h[1] * r) / (s * h[0] + h[1] * (r - f));
  else {
    m = (h[1] * (r - 1)) / (s * (h[0] - 1) + h[1] * (r - f));
    {
      let x = f - r,
        b = s,
        y = 0.3963377774 * a + 0.2158037573 * i,
        C = -0.1055613458 * a - 0.0638541728 * i,
        w = -0.0894841775 * a - 1.291485548 * i,
        q = x + b * y,
        B = x + b * C,
        K = x + b * w;
      {
        let ee = r * (1 - m) + m * f,
          te = m * s,
          se = ee + te * y,
          ne = ee + te * C,
          me = ee + te * w,
          ge = se * se * se,
          F = ne * ne * ne,
          be = me * me * me,
          _e = 3 * q * se * se,
          Se = 3 * B * ne * ne,
          L = 3 * K * me * me,
          V = 6 * q * q * se,
          pe = 6 * B * B * ne,
          Ue = 6 * K * K * me,
          Ce = 4.0767416621 * ge - 3.3077115913 * F + 0.2309699292 * be - 1,
          Ne = 4.0767416621 * _e - 3.3077115913 * Se + 0.2309699292 * L,
          I = 4.0767416621 * V - 3.3077115913 * pe + 0.2309699292 * Ue,
          D = Ne / (Ne * Ne - 0.5 * Ce * I),
          J = -Ce * D,
          k = -1.2684380046 * ge + 2.6097574011 * F - 0.3413193965 * be - 1,
          ce = -1.2684380046 * _e + 2.6097574011 * Se - 0.3413193965 * L,
          v = -1.2684380046 * V + 2.6097574011 * pe - 0.3413193965 * Ue,
          H = ce / (ce * ce - 0.5 * k * v),
          X = -k * H,
          O = -0.0041960863 * ge - 0.7034186147 * F + 1.707614701 * be - 1,
          N = -0.0041960863 * _e - 0.7034186147 * Se + 1.707614701 * L,
          Z = -0.0041960863 * V - 0.7034186147 * pe + 1.707614701 * Ue,
          G = N / (N * N - 0.5 * O * Z),
          fe = -O * G;
        (J = D >= 0 ? J : 1e6),
          (X = H >= 0 ? X : 1e6),
          (fe = G >= 0 ? fe : 1e6),
          (m += Math.min(J, Math.min(X, fe)));
      }
    }
  }
  return m;
}
function er(a, i, f = null) {
  f || (f = Ps(a, i));
  let s = f[0],
    r = f[1];
  return [r / s, r / (1 - s)];
}
function ih(a, i, f) {
  let s = Ps(i, f),
    r = cv(i, f, a, 1, a, s),
    h = er(i, f, s),
    m =
      0.11516993 +
      1 /
        (7.4477897 +
          4.1590124 * f +
          i *
            (-2.19557347 +
              1.75198401 * f +
              i *
                (-2.13704948 -
                  10.02301043 * f +
                  i * (-4.24894561 + 5.38770819 * f + 4.69891013 * i)))),
    x =
      0.11239642 +
      1 /
        (1.6132032 -
          0.68124379 * f +
          i *
            (0.40370612 +
              0.90148123 * f +
              i *
                (-0.27087943 +
                  0.6122399 * f +
                  i * (0.00299215 - 0.45399568 * f - 0.14661872 * i)))),
    b = r / Math.min(a * h[0], (1 - a) * h[1]),
    y = a * m,
    C = (1 - a) * x,
    w =
      0.9 *
      b *
      Math.sqrt(Math.sqrt(1 / (1 / (y * y * y * y) + 1 / (C * C * C * C))));
  return (
    (y = a * 0.4),
    (C = (1 - a) * 0.8),
    [Math.sqrt(1 / (1 / (y * y) + 1 / (C * C))), w, r]
  );
}
function rd(a) {
  const i = a.l !== void 0 ? a.l : 0,
    f = a.a !== void 0 ? a.a : 0,
    s = a.b !== void 0 ? a.b : 0,
    r = { mode: "okhsl", l: Ls(i) };
  a.alpha !== void 0 && (r.alpha = a.alpha);
  let h = Math.sqrt(f * f + s * s);
  if (!h) return (r.s = 0), r;
  let [m, x, b] = ih(i, f / h, s / h),
    y;
  if (h < x) {
    let C = 0,
      w = 0.8 * m,
      q = 1 - w / x;
    y = ((h - C) / (w + q * (h - C))) * 0.8;
  } else {
    let C = x,
      w = (0.2 * x * x * 1.25 * 1.25) / m,
      q = 1 - w / (b - x);
    y = 0.8 + 0.2 * ((h - C) / (w + q * (h - C)));
  }
  return y && ((r.s = y), (r.h = at((Math.atan2(s, f) * 180) / Math.PI))), r;
}
function od(a) {
  let i = a.h !== void 0 ? a.h : 0,
    f = a.s !== void 0 ? a.s : 0,
    s = a.l !== void 0 ? a.l : 0;
  const r = { mode: "oklab", l: Oi(s) };
  if ((a.alpha !== void 0 && (r.alpha = a.alpha), !f || s === 1))
    return (r.a = r.b = 0), r;
  let h = Math.cos((i / 180) * Math.PI),
    m = Math.sin((i / 180) * Math.PI),
    [x, b, y] = ih(r.l, h, m),
    C,
    w,
    q,
    B;
  f < 0.8
    ? ((C = 1.25 * f), (w = 0), (q = 0.8 * x), (B = 1 - q / b))
    : ((C = 5 * (f - 0.8)),
      (w = b),
      (q = (0.2 * b * b * 1.25 * 1.25) / x),
      (B = 1 - q / (y - b)));
  let K = w + (C * q) / (1 - B * C);
  return (r.a = K * h), (r.b = K * m), r;
}
const fv = {
  ...Qd,
  mode: "okhsl",
  channels: ["h", "s", "l", "alpha"],
  parse: ["--okhsl"],
  serialize: "--okhsl",
  fromMode: { oklab: rd, rgb: (a) => rd(Xi(a)) },
  toMode: { oklab: od, rgb: (a) => Gi(od(a)) },
};
function dd(a) {
  let i = a.l !== void 0 ? a.l : 0,
    f = a.a !== void 0 ? a.a : 0,
    s = a.b !== void 0 ? a.b : 0,
    r = Math.sqrt(f * f + s * s),
    h = r ? f / r : 1,
    m = r ? s / r : 1,
    [x, b] = er(h, m),
    y = 0.5,
    C = 1 - y / x,
    w = b / (r + i * b),
    q = w * i,
    B = w * r,
    K = Oi(q),
    ee = (B * K) / q,
    te = iu({ l: K, a: h * ee, b: m * ee }),
    se = Math.cbrt(1 / Math.max(te.r, te.g, te.b, 0));
  (i = i / se), (r = ((r / se) * Ls(i)) / i), (i = Ls(i));
  const ne = {
    mode: "okhsv",
    s: r ? ((y + b) * B) / (b * y + b * C * B) : 0,
    v: i ? i / q : 0,
  };
  return (
    ne.s && (ne.h = at((Math.atan2(s, f) * 180) / Math.PI)),
    a.alpha !== void 0 && (ne.alpha = a.alpha),
    ne
  );
}
function hd(a) {
  const i = { mode: "oklab" };
  a.alpha !== void 0 && (i.alpha = a.alpha);
  const f = a.h !== void 0 ? a.h : 0,
    s = a.s !== void 0 ? a.s : 0,
    r = a.v !== void 0 ? a.v : 0,
    h = Math.cos((f / 180) * Math.PI),
    m = Math.sin((f / 180) * Math.PI),
    [x, b] = er(h, m),
    y = 0.5,
    C = 1 - y / x,
    w = 1 - (s * y) / (y + b - b * C * s),
    q = (s * b * y) / (y + b - b * C * s),
    B = Oi(w),
    K = (q * B) / w,
    ee = iu({ l: B, a: h * K, b: m * K }),
    te = Math.cbrt(1 / Math.max(ee.r, ee.g, ee.b, 0)),
    se = Oi(r * w),
    ne = (q * se) / w;
  return (i.l = se * te), (i.a = ne * h * te), (i.b = ne * m * te), i;
}
const sv = {
  ...$d,
  mode: "okhsv",
  channels: ["h", "s", "v", "alpha"],
  parse: ["--okhsv"],
  serialize: "--okhsv",
  fromMode: { oklab: dd, rgb: (a) => dd(Xi(a)) },
  toMode: { oklab: hd, rgb: (a) => Gi(hd(a)) },
};
function rv(a, i) {
  if (!i || i[0] !== "oklab") return;
  const f = { mode: "oklab" },
    [, s, r, h, m] = i;
  if (!(s.type === j.Hue || r.type === j.Hue || h.type === j.Hue))
    return (
      s.type !== j.None &&
        (f.l = Math.min(
          Math.max(0, s.type === j.Number ? s.value : s.value / 100),
          1
        )),
      r.type !== j.None &&
        (f.a = r.type === j.Number ? r.value : (r.value * 0.4) / 100),
      h.type !== j.None &&
        (f.b = h.type === j.Number ? h.value : (h.value * 0.4) / 100),
      m.type !== j.None &&
        (f.alpha = Math.min(
          1,
          Math.max(0, m.type === j.Number ? m.value : m.value / 100)
        )),
      f
    );
}
const ov = {
  ...Fs,
  mode: "oklab",
  toMode: { lrgb: iu, rgb: Gi },
  fromMode: { lrgb: uh, rgb: Xi },
  ranges: { l: [0, 1], a: [-0.4, 0.4], b: [-0.4, 0.4] },
  parse: [rv],
  serialize: (a) =>
    `oklab(${a.l !== void 0 ? a.l : "none"} ${a.a !== void 0 ? a.a : "none"} ${
      a.b !== void 0 ? a.b : "none"
    }${a.alpha < 1 ? ` / ${a.alpha}` : ""})`,
};
function dv(a, i) {
  if (!i || i[0] !== "oklch") return;
  const f = { mode: "oklch" },
    [, s, r, h, m] = i;
  if (s.type !== j.None) {
    if (s.type === j.Hue) return;
    f.l = Math.min(
      Math.max(0, s.type === j.Number ? s.value : s.value / 100),
      1
    );
  }
  if (
    (r.type !== j.None &&
      (f.c = Math.max(
        0,
        r.type === j.Number ? r.value : (r.value * 0.4) / 100
      )),
    h.type !== j.None)
  ) {
    if (h.type === j.Percentage) return;
    f.h = h.value;
  }
  return (
    m.type !== j.None &&
      (f.alpha = Math.min(
        1,
        Math.max(0, m.type === j.Number ? m.value : m.value / 100)
      )),
    f
  );
}
const hv = {
    ...Is,
    mode: "oklch",
    toMode: { oklab: (a) => ql(a, "oklab"), rgb: (a) => Gi(ql(a, "oklab")) },
    fromMode: { rgb: (a) => Yl(Xi(a), "oklch"), oklab: (a) => Yl(a, "oklch") },
    parse: [dv],
    serialize: (a) =>
      `oklch(${a.l !== void 0 ? a.l : "none"} ${
        a.c !== void 0 ? a.c : "none"
      } ${a.h !== void 0 ? a.h : "none"}${a.alpha < 1 ? ` / ${a.alpha}` : ""})`,
    ranges: { l: [0, 1], c: [0, 0.4], h: [0, 360] },
  },
  md = (a) => {
    let { r: i, g: f, b: s, alpha: r } = In(a),
      h = {
        mode: "xyz65",
        x:
          0.486570948648216 * i +
          0.265667693169093 * f +
          0.1982172852343625 * s,
        y:
          0.2289745640697487 * i +
          0.6917385218365062 * f +
          0.079286914093745 * s,
        z: 0 * i + 0.0451133818589026 * f + 1.043944368900976 * s,
      };
    return r !== void 0 && (h.alpha = r), h;
  },
  gd = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = Pn(
      {
        r:
          a * 2.4934969119414263 -
          i * 0.9313836179191242 -
          0.402710784450717 * f,
        g:
          a * -0.8294889695615749 +
          i * 1.7626640603183465 +
          0.0236246858419436 * f,
        b:
          a * 0.0358458302437845 -
          i * 0.0761723892680418 +
          0.9568845240076871 * f,
      },
      "p3"
    );
    return s !== void 0 && (r.alpha = s), r;
  },
  mv = {
    ...Fn,
    mode: "p3",
    parse: ["display-p3"],
    serialize: "display-p3",
    fromMode: { rgb: (a) => gd(rn(a)), xyz65: gd },
    toMode: { rgb: (a) => on(md(a)), xyz65: md },
  },
  xs = (a) => {
    let i = Math.abs(a);
    return i >= 1 / 512 ? Math.sign(a) * Math.pow(i, 1 / 1.8) : 16 * a;
  },
  yd = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = {
      mode: "prophoto",
      r: xs(
        a * 1.3457868816471585 - i * 0.2555720873797946 - 0.0511018649755453 * f
      ),
      g: xs(
        a * -0.5446307051249019 +
          i * 1.5082477428451466 +
          0.0205274474364214 * f
      ),
      b: xs(a * 0 + i * 0 + 1.2119675456389452 * f),
    };
    return s !== void 0 && (r.alpha = s), r;
  },
  Ms = (a = 0) => {
    let i = Math.abs(a);
    return i >= 16 / 512 ? Math.sign(a) * Math.pow(i, 1.8) : a / 16;
  },
  vd = (a) => {
    let i = Ms(a.r),
      f = Ms(a.g),
      s = Ms(a.b),
      r = {
        mode: "xyz50",
        x:
          0.7977666449006423 * i +
          0.1351812974005331 * f +
          0.0313477341283922 * s,
        y:
          0.2880748288194013 * i +
          0.7118352342418731 * f +
          899369387256e-16 * s,
        z: 0 * i + 0 * f + 0.8251046025104602 * s,
      };
    return a.alpha !== void 0 && (r.alpha = a.alpha), r;
  },
  gv = {
    ...Fn,
    mode: "prophoto",
    parse: ["prophoto-rgb"],
    serialize: "prophoto-rgb",
    fromMode: { xyz50: yd, rgb: (a) => yd(uu(a)) },
    toMode: { xyz50: vd, rgb: (a) => au(vd(a)) },
  },
  pd = 1.09929682680944,
  yv = 0.018053968510807,
  _s = (a) => {
    const i = Math.abs(a);
    return i > yv
      ? (Math.sign(a) || 1) * (pd * Math.pow(i, 0.45) - (pd - 1))
      : 4.5 * a;
  },
  bd = ({ x: a, y: i, z: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    let r = {
      mode: "rec2020",
      r: _s(
        a * 1.7166511879712683 - i * 0.3556707837763925 - 0.2533662813736599 * f
      ),
      g: _s(
        a * -0.6666843518324893 +
          i * 1.6164812366349395 +
          0.0157685458139111 * f
      ),
      b: _s(
        a * 0.0176398574453108 - i * 0.0427706132578085 + 0.9421031212354739 * f
      ),
    };
    return s !== void 0 && (r.alpha = s), r;
  },
  Sd = 1.09929682680944,
  vv = 0.018053968510807,
  Ts = (a = 0) => {
    let i = Math.abs(a);
    return i < vv * 4.5
      ? a / 4.5
      : (Math.sign(a) || 1) * Math.pow((i + Sd - 1) / Sd, 1 / 0.45);
  },
  xd = (a) => {
    let i = Ts(a.r),
      f = Ts(a.g),
      s = Ts(a.b),
      r = {
        mode: "xyz65",
        x:
          0.6369580483012911 * i +
          0.1446169035862083 * f +
          0.1688809751641721 * s,
        y:
          0.262700212011267 * i +
          0.6779980715188708 * f +
          0.059301716469862 * s,
        z: 0 * i + 0.0280726930490874 * f + 1.0609850577107909 * s,
      };
    return a.alpha !== void 0 && (r.alpha = a.alpha), r;
  },
  pv = {
    ...Fn,
    mode: "rec2020",
    fromMode: { xyz65: bd, rgb: (a) => bd(rn(a)) },
    toMode: { xyz65: xd, rgb: (a) => on(xd(a)) },
    parse: ["rec2020"],
    serialize: "rec2020",
  },
  sn = 0.0037930732552754493,
  ch = Math.cbrt(sn),
  Es = (a) => Math.cbrt(a) - ch,
  bv = (a) => {
    const { r: i, g: f, b: s, alpha: r } = In(a),
      h = Es(0.3 * i + 0.622 * f + 0.078 * s + sn),
      m = Es(0.23 * i + 0.692 * f + 0.078 * s + sn),
      x = Es(
        0.2434226892454782 * i +
          0.2047674442449682 * f +
          0.5518098665095535 * s +
          sn
      ),
      b = { mode: "xyb", x: (h - m) / 2, y: (h + m) / 2, b: x - (h + m) / 2 };
    return r !== void 0 && (b.alpha = r), b;
  },
  zs = (a) => Math.pow(a + ch, 3),
  Sv = ({ x: a, y: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    const r = zs(a + i) - sn,
      h = zs(i - a) - sn,
      m = zs(f + i) - sn,
      x = Pn({
        r:
          11.031566904639861 * r -
          9.866943908131562 * h -
          0.16462299650829934 * m,
        g:
          -3.2541473810744237 * r +
          4.418770377582723 * h -
          0.16462299650829934 * m,
        b:
          -3.6588512867136815 * r +
          2.7129230459360922 * h +
          1.9459282407775895 * m,
      });
    return s !== void 0 && (x.alpha = s), x;
  },
  xv = {
    mode: "xyb",
    channels: ["x", "y", "b", "alpha"],
    parse: ["--xyb"],
    serialize: "--xyb",
    toMode: { rgb: Sv },
    fromMode: { rgb: bv },
    ranges: { x: [-0.0154, 0.0281], y: [0, 0.8453], b: [-0.2778, 0.388] },
    interpolate: { x: Y, y: Y, b: Y, alpha: { use: Y, fixup: Ke } },
  },
  Mv = {
    mode: "xyz50",
    parse: ["xyz-d50"],
    serialize: "xyz-d50",
    toMode: { rgb: au, lab: Ws },
    fromMode: { rgb: uu, lab: Js },
    channels: ["x", "y", "z", "alpha"],
    ranges: { x: [0, 0.964], y: [0, 0.999], z: [0, 0.825] },
    interpolate: { x: Y, y: Y, z: Y, alpha: { use: Y, fixup: Ke } },
  },
  _v = (a) => {
    let { x: i, y: f, z: s, alpha: r } = a;
    i === void 0 && (i = 0), f === void 0 && (f = 0), s === void 0 && (s = 0);
    let h = {
      mode: "xyz50",
      x:
        1.0479298208405488 * i +
        0.0229467933410191 * f -
        0.0501922295431356 * s,
      y:
        0.0296278156881593 * i + 0.990434484573249 * f - 0.0170738250293851 * s,
      z:
        -0.0092430581525912 * i +
        0.0150551448965779 * f +
        0.7518742899580008 * s,
    };
    return r !== void 0 && (h.alpha = r), h;
  },
  Tv = (a) => {
    let { x: i, y: f, z: s, alpha: r } = a;
    i === void 0 && (i = 0), f === void 0 && (f = 0), s === void 0 && (s = 0);
    let h = {
      mode: "xyz65",
      x:
        0.9554734527042182 * i -
        0.0230985368742614 * f +
        0.0632593086610217 * s,
      y:
        -0.0283697069632081 * i +
        1.0099954580058226 * f +
        0.021041398966943 * s,
      z:
        0.0123140016883199 * i -
        0.0205076964334779 * f +
        1.3303659366080753 * s,
    };
    return r !== void 0 && (h.alpha = r), h;
  },
  Ev = {
    mode: "xyz65",
    toMode: { rgb: on, xyz50: _v },
    fromMode: { rgb: rn, xyz50: Tv },
    ranges: { x: [0, 0.95], y: [0, 1], z: [0, 1.088] },
    channels: ["x", "y", "z", "alpha"],
    parse: ["xyz", "xyz-d65"],
    serialize: "xyz-d65",
    interpolate: { x: Y, y: Y, z: Y, alpha: { use: Y, fixup: Ke } },
  },
  zv = ({ r: a, g: i, b: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    const r = {
      mode: "yiq",
      y: 0.29889531 * a + 0.58662247 * i + 0.11448223 * f,
      i: 0.59597799 * a - 0.2741761 * i - 0.32180189 * f,
      q: 0.21147017 * a - 0.52261711 * i + 0.31114694 * f,
    };
    return s !== void 0 && (r.alpha = s), r;
  },
  Av = ({ y: a, i, q: f, alpha: s }) => {
    a === void 0 && (a = 0), i === void 0 && (i = 0), f === void 0 && (f = 0);
    const r = {
      mode: "rgb",
      r: a + 0.95608445 * i + 0.6208885 * f,
      g: a - 0.27137664 * i - 0.6486059 * f,
      b: a - 1.10561724 * i + 1.70250126 * f,
    };
    return s !== void 0 && (r.alpha = s), r;
  },
  Nv = {
    mode: "yiq",
    toMode: { rgb: Av },
    fromMode: { rgb: zv },
    channels: ["y", "i", "q", "alpha"],
    parse: ["--yiq"],
    serialize: "--yiq",
    ranges: { i: [-0.595, 0.595], q: [-0.522, 0.522] },
    interpolate: { y: Y, i: Y, q: Y, alpha: { use: Y, fixup: Ke } },
  },
  Ov = (a, i) => Math.round(a * (i = Math.pow(10, i))) / i,
  Rv =
    (a = 4) =>
    (i) =>
      typeof i == "number" ? Ov(i, a) : i;
let Cv = Rv(2);
const fh = (a) => Math.max(0, Math.min(1, a || 0)),
  As = (a) => Math.round(fh(a) * 255),
  Dv = _i("rgb"),
  Hv = (a) => {
    if (a === void 0) return;
    let i = As(a.r),
      f = As(a.g),
      s = As(a.b);
    return a.alpha === void 0 || a.alpha === 1
      ? `rgb(${i}, ${f}, ${s})`
      : `rgba(${i}, ${f}, ${s}, ${Cv(fh(a.alpha))})`;
  },
  Uv = (a) => Hv(Dv(a));
Te(gy);
Te(My);
Te(_y);
Te(Ty);
Te(Ay);
Te(Qd);
Te($d);
Te(Yy);
Te(qy);
Te(Ly);
Te(Qy);
Te(Fs);
Te(Vy);
Te(Is);
Te(ky);
Te(nv);
Te(av);
Te(uv);
Te(fv);
Te(sv);
Te(ov);
Te(hv);
Te(mv);
Te(gv);
Te(pv);
Te(Fn);
Te(xv);
Te(Mv);
Te(Ev);
Te(Nv);
const jv = "#1C093A",
  wv = "#FFBD96",
  Yv = "#FFF7F4";
function qv(a) {
  console.log(a);
  const i = new Date(a),
    f = new Date("1970-01-01"),
    s = 24 * 60 * 60 * 1e3;
  return console.log("Date: " + i), Math.floor((i.getTime() - f.getTime()) / s);
}
function Ns(a, i) {
  const f = _i("oklab"),
    s = _i("rgb"),
    r = ((x) => {
      const b = f(x),
        y = b.a,
        C = b.b,
        w = Math.sqrt(y * y + C * C),
        q = Math.atan2(C, y);
      return { L: b.l, C: w, h: q };
    })(a),
    h = i;
  return (({ L: x, C: b, h: y }) => {
    const C = y + h,
      w = b * Math.cos(C),
      q = b * Math.sin(C);
    return Uv(s({ mode: "oklab", l: x, a: w, b: q }));
  })(r);
}
function Bv(a, i, f, s, r, h) {
  sh(a, i, f, s, h, async (m) => {
    try {
      await navigator.share({
        files: [m],
        title: `Clues by Sam - ${i}`,
        text: `${i}
${$s(h, s)}
${f == null ? void 0 : f.replace("less than", "Less than")}
#cluesbysam`,
        url: r ? "./" : void 0,
      }),
        console.log("Shared successfully!");
    } catch (x) {
      console.error("Error sharing:", x);
    }
  });
}
function Xv(a, i, f, s, r, h, m) {
  sh(a, i, f, s, h, async (x) => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          [x.type]: x,
          "text/plain": new Blob(
            [
              `Clues by Sam - ${i}
${$s(h, s)}
${f == null ? void 0 : f.replace("less than", "Less than")}
#cluesbysam` +
                (r
                  ? ``
                  : ""),
            ],
            { type: "text/plain" }
          ),
        }),
      ]),
        m == null || m(),
        console.log("Copied image successfully!");
    } catch (b) {
      console.error("Error sharing:", b);
    }
  });
}
function sh(a, i, f, s, r, h) {
  const m = document.createElement("canvas");
  (m.width = 800), (m.height = 1300);
  const x = m.getContext("2d"),
    b = document.createElement("canvas");
  (b.width = m.width), (b.height = m.height);
  const y = b.getContext("2d"),
    C = ((qv(a) + 6) / 11) * Math.PI * 2,
    w = Ns(jv, C),
    q = Ns(wv, C),
    B = Ns(Yv, C),
    K = new Image(),
    ee = new Image(),
    te = new Image(),
    se = new Image(),
    ne = new Image();
  (K.src = r.identityClue ? "center-text.png" : "center.png"),
    (ee.src = "correct.png"),
    (te.src = "wrong.png"),
    (se.src = "hint.png"),
    (ne.src = "second-hint.png");
  function me(_e, Se, L, V, pe, Ue) {
    const Ce = Se.split(" ");
    let Ne = "";
    for (let I = 0; I < Ce.length; I++) {
      const D = Ne + Ce[I] + " ";
      _e.measureText(D).width > pe && I > 0
        ? (_e.fillText(Ne, L, V), (Ne = Ce[I] + " "), (V += Ue))
        : (Ne = D);
    }
    _e.fillText(Ne, L, V);
  }
  function ge() {
    (x.fillStyle = q), x.fillRect(0, 0, m.width, m.height);
    const _e = 300;
    (y.fillStyle = w),
      (y.font = "24px Arial"),
      (y.textAlign = "center"),
      (y.font = "105px Ribeye"),
      y.fillText("SOLVED", m.width / 2 + 5, _e),
      (y.font = "63px Ribeye"),
      y.fillText(i, m.width / 2, _e + 75);
    const Se = _e + 90,
      L = m.width / 2;
    {
      const V = L - K.width / 2;
      y.drawImage(K, V, Se),
        x.beginPath(),
        (x.fillStyle = B),
        x.roundRect(V + 5, Se + 5, 210, 255, 15),
        x.roundRect(V + 240, Se + 5, 210, 255, 15),
        x.roundRect(V + 5, Se + 285, 210, 255, 15),
        x.roundRect(V + 240, Se + 285, 210, 255, 15),
        x.fill(),
        x.closePath();
    }
    {
      const V = { error: te, hint: se, "second-hint": ne };
      for (const pe of Array(r.width * r.height).keys()) {
        const Ue = (pe % r.width) * 45 + L + 30,
          Ce = Math.floor(pe / r.width) * 45 + Se + 300;
        x.beginPath(), (x.fillStyle = B);
        const Ne = Vs(s).find((I) => I.index == pe);
        y.drawImage(Ne ? V[Ne.type] : ee, Ue, Ce),
          x.roundRect(Ue, Ce, 100, 100, 25);
      }
    }
    f &&
      ((y.font = "50px Ribeye"),
      y.fillText(
        f.length > 5 ? `${f.replace("less than", "Under")}` : `Solved in ${f}`,
        m.width / 2,
        Se + K.height + 60
      )),
      (y.fillStyle = w),
      (y.fillStyle = w),
      (y.globalCompositeOperation = "source-atop"),
      y.fillRect(0, 0, m.width, m.height),
      x.drawImage(b, 0, 0),
      r.identityClue &&
        ((x.fillStyle = "#ffffff"),
        (x.textAlign = "center"),
        (x.font = 'italic 700 26px "Comic Neue"'),
        me(
          x,
          `"${r.identityClue}"`,
          m.width / 2 - 112,
          m.height / 2 + 188,
          219,
          30
        )),
      m.toBlob(async (V) => {
        if (!V) {
          alert("Failed to convert canvas to blob.");
          return;
        }
        const pe = new File([V], `clues-by-sam-${a}.png`, { type: V.type });
        h(pe);
      }, "image/png");
  }
  console.log("Start loading");
  let F = !1;
  document.fonts.ready.then(() => {
    (F = !0),
      console.log("Fonts loaded"),
      be === 5 && (console.log("Font ready, draw"), ge());
  });
  let be = 0;
  [K, ee, te, se, ne].forEach((_e) => {
    _e.onload = () => {
      be++, be === 5 && F && (console.log("Images ready, draw"), ge());
    };
  });
}
const Md = "2025-12-21",
  fn = "Dec 21st 2025";
function Gv() {
  const a = () => {
      const s = new Date(),
        r = new Date(
          s.toLocaleString("en-US", { timeZone: "America/New_York" })
        ),
        h = new Date(r);
      h.setHours(24, 0, 0, 0);
      const m = h.getTime() - r.getTime(),
        x = Math.floor(m / (1e3 * 60 * 60)),
        b = Math.floor((m % (1e3 * 60 * 60)) / (1e3 * 60)),
        y = Math.floor((m % (1e3 * 60)) / 1e3);
      return `${String(x).padStart(2, "0")}:${String(b).padStart(
        2,
        "0"
      )}:${String(y).padStart(2, "0")}`;
    },
    [i, f] = Ae.useState(a());
  return (
    Ae.useEffect(() => {
      const s = setInterval(() => {
        f(a());
      }, 1e3);
      return () => clearInterval(s);
    }, []),
    T.jsx(T.Fragment, { children: i })
  );
}
const Lv = !!navigator.share;
var Ad;
const _d = !!(
  (Ad = navigator.canShare) != null &&
  Ad.call(navigator, { files: [new File(["test"], "test.png")] })
);
var Nd;
const Qv =
    !!((Nd = navigator.clipboard) != null && Nd.write) &&
    !!window.ClipboardItem,
  Zv = ({
    onContinue: a,
    imperfections: i,
    state: f,
    usedTime: s,
    preferences: r,
    updatePreferences: h,
    config: m,
    onCopy: x,
  }) => {
    const b = `${$s(m, i)}`;
    return T.jsx("div", {
      className: "modal-overlay",
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 500,
      },
      children: T.jsxs("div", {
        className: "modal complete",
        children: [
          T.jsxs("h3", {
            children: [fn, " ", m.difficulty ? `(${m.difficulty})` : null],
          }),
          T.jsxs("div", {
            style: { marginBottom: "10px" },
            children: [
              w2(m, f, i),
              T.jsx("h3", { children: s ? `Solved in ${s}` : "Solved!" }),
            ],
          }),
          T.jsx("button", {
            className: "copy",
            onClick: () => {
              Ul({ event: "share_copy" }),
                r.shareUrl ?? !0
                  ? window.share(
                      !1,
                      `I solved the daily Clues by Sam, ${fn}${
                        m.difficulty ? ` (${m.difficulty})` : ""
                      }${s ? `, in ${s}` : "!"}
${b}
`
                    )
                  : window.share(
                      !1,
                      `Clues by Sam - ${fn}${
                        m.difficulty ? ` (${m.difficulty})` : ""
                      }
${s ? s.replace("less than", "Less than") : ""}
${b}`
                    );
            },
            children: "Copy Text",
          }),
          Lv &&
            T.jsxs(T.Fragment, {
              children: [
                T.jsx("br", {}),
                T.jsx("button", {
                  className: "share",
                  onClick: async () => {
                    try {
                      r.shareUrl ?? !0
                        ? await navigator.share({
                            text: `I solved the daily Clues by Sam, ${fn}${
                              m.difficulty ? ` (${m.difficulty})` : ""
                            }${s ? `, in ${s}` : "!"}
${b}
${r.shareUrl ?? !0 ? "./" : ""}`,
                          })
                        : await navigator.share({
                            text: `Clues by Sam - ${fn}${
                              m.difficulty ? ` (${m.difficulty})` : ""
                            }
${s ? s.replace("less than", "Less than") : ""}
${b}`,
                          }),
                        Ul({ event: "share" });
                    } catch (y) {
                      console.log("Share failed"), console.log(y);
                    }
                  },
                  children: "Share Text",
                }),
              ],
            }),
          _d &&
            T.jsxs(T.Fragment, {
              children: [
                T.jsx("br", {}),
                T.jsx("button", {
                  className: "share",
                  onClick: async () => {
                    Bv(Md, fn, s ?? "15 minutes", i, r.shareUrl ?? !1, m);
                    try {
                      Ul({ event: "share_image" });
                    } catch (y) {
                      console.log("Share failed"), console.log(y);
                    }
                  },
                  children: "Share Picture",
                }),
              ],
            }),
          !_d &&
            Qv &&
            T.jsxs(T.Fragment, {
              children: [
                T.jsx("br", {}),
                T.jsx("button", {
                  className: "copy",
                  onClick: async () => {
                    Xv(Md, fn, s ?? "15 minutes", i, r.shareUrl ?? !1, m, x);
                    try {
                      Ul({ event: "copy_image" });
                    } catch (y) {
                      console.log("Share failed"), console.log(y);
                    }
                  },
                  children: "Copy Picture",
                }),
              ],
            }),
          T.jsx("br", {}),
          T.jsxs("label", {
            children: [
              T.jsx("input", {
                type: "checkbox",
                id: "include-url",
                checked: r.shareUrl ?? !0,
                onChange: () => {
                  h({ shareUrl: !(r.shareUrl ?? !0) });
                },
              }),
              "Include URL",
            ],
          }),
          T.jsxs("p", {
            style: {
              marginTop: "15px",
              marginBottom: "15px",
              lineHeight: "150%",
            },
            children: ["Next puzzle in ", Gv()],
          }),
          T.jsx("button", { className: "", onClick: a, children: "Close" }),
        ],
      }),
    });
  },
  Vv = 4,
  $v = 5,
  kv = "Hard",
  Kv = "All criminals are feeling cozy today",
  Jv = [
    {
      criminal: !0,
      profession: "cop",
      name: "alex",
      gender: "male",
      paths: [[10, 15, 11, 9, 7, 14, 1]],
      hint: "Finally! I thought it'd never be my turn!",
    },
    {
      criminal: !0,
      profession: "coder",
      name: "celia",
      gender: "female",
      orig_hint: "odd_number_of_traits_in_unit(unit(neighbor,1),innocent)",
      paths: [[10, 15, 11, 9, 7, 14]],
      hint: "There's an odd number of innocents neighboring #NAME:1",
    },
    {
      criminal: !0,
      profession: "pilot",
      name: "donald",
      gender: "male",
      paths: [[10, 15, 11, 9]],
      hint: "That's how it's done! No secrets today!",
    },
    {
      criminal: !1,
      profession: "mech",
      name: "eli",
      gender: "male",
      paths: [[10, 15, 11, 9, 7, 14, 1, 4]],
      hint: "At first I wasn't sure, but I think I like this new attitude!",
    },
    {
      criminal: !1,
      profession: "farmer",
      name: "flora",
      gender: "female",
      orig_hint:
        "units_share_n_traits(unit(col,4),unit(neighbor,2),innocent,1)",
      paths: [[10, 15, 11, 9, 7, 14, 1]],
      hint: "Exactly 1 innocent in column #C:4 is neighboring #NAME:2",
    },
    {
      criminal: !0,
      profession: "clerk",
      name: "gus",
      gender: "male",
      paths: [[10, 15, 11, 9, 7, 14, 1]],
      hint: "All these great clues make me all warm and fuzzy inside!",
    },
    {
      criminal: !0,
      profession: "pilot",
      name: "henry",
      gender: "male",
      paths: [[10, 15, 11, 9, 7]],
      hint: "How lovely to be recognized!",
    },
    {
      criminal: !0,
      profession: "farmer",
      name: "ivan",
      gender: "male",
      orig_hint: "odd_number_of_traits_in_unit(unit(neighbor,8),criminal)",
      paths: [[10, 15, 11, 9]],
      hint: "There's an odd number of criminals neighboring #NAME:8",
    },
    {
      criminal: !0,
      profession: "teacher",
      name: "janet",
      gender: "female",
      paths: [[10, 15]],
      hint: "Good job, Tyler! You got us all caught!",
    },
    {
      criminal: !0,
      profession: "clerk",
      name: "kumar",
      gender: "male",
      orig_hint:
        "equal_number_of_traits_in_units(unit(neighbor,3),unit(neighbor,12),innocent)",
      paths: [[10, 15]],
      hint: "#NAME:3 and #NAME:12 have an equal number of innocent neighbors",
    },
    {
      criminal: !1,
      profession: "pilot",
      name: "lucy",
      gender: "female",
      orig_hint: "is_one_of_n_traits_in_unit(unit(edge,void),15,criminal,11)",
      paths: [],
      hint: "#NAME:15 is one of 11 criminals on the edges",
    },
    {
      criminal: !0,
      profession: "mech",
      name: "noah",
      gender: "male",
      orig_hint: "is_one_of_n_traits_in_unit(unit(col,1),16,criminal,3)",
      paths: [[10, 15]],
      hint: "#NAME:16 is one of 3 criminals in column #C:1",
    },
    {
      criminal: !1,
      profession: "farmer",
      name: "olivia",
      gender: "female",
      paths: [[10, 15, 11, 9, 7]],
      hint: "I'm not sure what to think of the atmosphere here...",
    },
    {
      criminal: !0,
      profession: "clerk",
      name: "rose",
      gender: "female",
      paths: [[10, 15, 11, 9]],
      hint: "What would the nice detective do without all your help?",
    },
    {
      criminal: !0,
      profession: "teacher",
      name: "sue",
      gender: "female",
      orig_hint:
        "only_one_person_in_unit_has_exactly_n_trait_neighbors(unit(col,2),criminal,5)",
      paths: [[10, 15, 11, 9, 7]],
      hint: "Only one person in column #C:2 has exactly 5 criminal neighbors",
    },
    {
      criminal: !0,
      profession: "painter",
      name: "tyler",
      gender: "male",
      orig_hint: "all_units_have_at_least_n_traits(row,criminal,3)",
      paths: [[10]],
      hint: "Each row has at least 3 criminals",
    },
    {
      criminal: !0,
      profession: "coder",
      name: "uma",
      gender: "female",
      paths: [[10, 15, 11]],
      hint: "How nice of you Noah!",
    },
    {
      criminal: !0,
      profession: "painter",
      name: "vicky",
      gender: "female",
      paths: [[10, 15, 11, 9, 7]],
      hint: "Getting caught! Best thing in the world!",
    },
    {
      criminal: !0,
      profession: "teacher",
      name: "xavi",
      gender: "male",
      paths: [[10, 15, 11, 9, 7, 14]],
      hint: "I wish I could get caught every day!",
    },
    {
      criminal: !0,
      profession: "cop",
      name: "zoe",
      gender: "female",
      paths: [[10, 15, 11, 9, 7, 14, 1, 4]],
      hint: "Best day of my life. High five, everyone! Good clues!",
    },
  ],
  Wv = [10],
  Fv = 2511240232,
  Iv = [
    "is_one_of_n_traits_in_unit(unit(edge,void),15,criminal,11)",
    "all_units_have_at_least_n_traits(row,criminal,3)",
    "equal_number_of_traits_in_units(unit(neighbor,3),unit(neighbor,12),innocent)",
    "is_one_of_n_traits_in_unit(unit(col,1),16,criminal,3)",
    "odd_number_of_traits_in_unit(unit(neighbor,8),criminal)",
    "only_one_person_in_unit_has_exactly_n_trait_neighbors(unit(col,2),criminal,5)",
    "odd_number_of_traits_in_unit(unit(neighbor,1),innocent)",
    "units_share_n_traits(unit(col,4),unit(neighbor,2),innocent,1)",
  ],
  Pv = [3, 3],
  ep = !0,
  tp = [
    { flipped: [10], clues: [10], reveals: [15] },
    { flipped: [10, 15], clues: [15], reveals: [11, 8, 9] },
    { flipped: [10, 15, 11, 8, 9], clues: [11], reveals: [16] },
    { flipped: [10, 15, 11, 16, 8, 9], clues: [15, 11, 9], reveals: [13] },
    {
      flipped: [10, 15, 11, 9, 7, 16, 8],
      clues: [10, 15, 7],
      reveals: [6, 14],
    },
    {
      flipped: [10, 15, 11, 9, 13, 16, 8],
      clues: [10, 11, 9],
      reveals: [2, 7],
    },
    { flipped: [10, 15, 11, 9, 2, 16, 8], clues: [15, 11, 9], reveals: [13] },
    {
      flipped: [10, 15, 11, 9, 7, 13, 16, 8],
      clues: [15, 11, 7],
      reveals: [6, 12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 2, 16, 8],
      clues: [10, 15, 9],
      reveals: [13],
    },
    {
      flipped: [10, 15, 11, 9, 13, 2, 16, 8],
      clues: [10, 11, 9],
      reveals: [7],
    },
    {
      flipped: [10, 15, 11, 9, 7, 13, 2, 16, 8],
      clues: [15, 11, 7],
      reveals: [6, 12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 16, 8],
      clues: [10, 15, 7],
      reveals: [14],
    },
    {
      flipped: [10, 15, 11, 9, 7, 17, 16, 8],
      clues: [10, 15, 9],
      reveals: [6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 17, 16, 8],
      clues: [10, 15, 7],
      reveals: [14],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 13, 16, 8],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 14, 16, 8],
      clues: [10, 11, 9],
      reveals: [17],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 12, 16, 8],
      clues: [15],
      reveals: [13, 14],
    },
    { flipped: [10, 15, 11, 9, 7, 6, 16, 8, 2], clues: [9], reveals: [13, 17] },
    { flipped: [10, 15, 11, 9, 7, 17, 13, 16, 8], clues: [9], reveals: [2, 6] },
    {
      flipped: [10, 15, 11, 9, 7, 17, 14, 16, 8],
      clues: [10, 15, 9],
      reveals: [6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 17, 12, 16, 8],
      clues: [15],
      reveals: [13, 14],
    },
    {
      flipped: [10, 15, 11, 9, 7, 17, 16, 8, 2],
      clues: [10, 15, 9],
      reveals: [6, 13],
    },
    {
      flipped: [10, 15, 11, 9, 7, 13, 14, 16, 8],
      clues: [15, 11, 7],
      reveals: [6, 12],
    },
    { flipped: [10, 15, 11, 9, 7, 13, 12, 16, 8], clues: [15], reveals: [14] },
    {
      flipped: [10, 15, 11, 9, 7, 6, 17, 14, 16, 8],
      clues: [15, 11, 9],
      reveals: [13, 2],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 13, 14, 16, 8],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 17, 14, 16, 8, 2],
      clues: [10, 15, 9],
      reveals: [6, 13],
    },
    {
      flipped: [10, 15, 11, 9, 7, 13, 14, 12, 16, 8],
      clues: [15, 7],
      reveals: [6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 13, 14, 16, 8, 2],
      clues: [15, 11, 7],
      reveals: [6, 12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 12, 16, 8, 2],
      clues: [15],
      reveals: [13],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 17, 13, 16, 8, 2],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 13, 14, 12, 16, 8],
      clues: [15, 7, 14],
      reveals: [17, 18],
    },
    {
      flipped: [10, 15, 11, 9, 7, 13, 14, 12, 16, 8, 2],
      clues: [15, 7],
      reveals: [6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 17, 13, 14, 16, 8, 2],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 6, 17, 13, 14, 12, 16, 8, 2],
      clues: [7, 14],
      reveals: [18],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 16, 8],
      clues: [10, 15, 7],
      reveals: [6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 16, 8],
      clues: [10, 11, 9],
      reveals: [17],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 17, 16, 8],
      clues: [15, 11, 9],
      reveals: [13, 2],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 13, 16, 8],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 1, 16, 8],
      clues: [10, 11, 9],
      reveals: [17],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 17, 1, 16, 8],
      clues: [15, 11, 9],
      reveals: [13, 2],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 13, 1, 16, 8],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 17, 1, 16, 8],
      clues: [15, 11, 9],
      reveals: [13, 2],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 13, 1, 16, 8],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 13, 12, 16, 8],
      clues: [7, 14],
      reveals: [17],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 17, 13, 16, 8, 2],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 13, 1, 12, 16, 8],
      clues: [7, 14],
      reveals: [17],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 17, 13, 1, 16, 8, 2],
      clues: [15, 11, 7],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 17, 13, 1, 16, 8, 2],
      clues: [11, 14],
      reveals: [12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 17, 13, 12, 16, 8, 2],
      clues: [11, 7, 14],
      reveals: [1],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 17, 13, 1, 12, 16, 8, 2],
      clues: [11, 1],
      reveals: [5],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 6, 18, 17, 13, 1, 12, 16, 8, 2],
      clues: [11, 1],
      reveals: [5],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 16, 8],
      clues: [10, 15, 7],
      reveals: [6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 6, 16, 8],
      clues: [10, 11, 9],
      reveals: [17],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 18, 16, 8],
      clues: [10, 15, 7],
      reveals: [6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 17, 16, 8],
      clues: [10, 15, 9],
      reveals: [6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 5, 16, 8],
      clues: [15, 11, 7],
      reveals: [4],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 13, 16, 8],
      clues: [15, 11, 7],
      reveals: [6, 12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 4, 16, 8],
      clues: [15],
      reveals: [5, 6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 0, 16, 8],
      clues: [11],
      reveals: [4, 12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 12, 16, 8],
      clues: [15],
      reveals: [13],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 2, 16, 8],
      clues: [15, 11, 1],
      reveals: [12, 5, 6],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 6, 18, 17, 5, 16, 8],
      clues: [15, 11, 7],
      reveals: [4],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 6, 18, 5, 13, 16, 8],
      clues: [11, 7],
      reveals: [0, 4, 12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 6, 18, 5, 4, 16, 8],
      clues: [4],
      reveals: [3],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 6, 18, 17, 5, 13, 2, 16, 8],
      clues: [11, 7],
      reveals: [0, 4, 12],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 6, 18, 17, 5, 13, 12, 2, 16, 8],
      clues: [7],
      reveals: [4],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 6, 17, 5, 13, 4, 12, 2, 16, 8],
      clues: [11],
      reveals: [0],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 6, 17, 5, 13, 4, 0, 12, 2, 16, 8],
      clues: [14],
      reveals: [18],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 4, 6, 5, 16, 8],
      clues: [4],
      reveals: [3],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 4, 6, 18, 3, 5, 16, 8],
      clues: [15],
      reveals: [0, 2],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 4, 6, 3, 17, 5, 16, 8],
      clues: [15],
      reveals: [0, 2],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 4, 6, 3, 5, 13, 16, 8],
      clues: [15],
      reveals: [0, 2],
    },
    {
      flipped: [10, 15, 11, 9, 7, 14, 1, 4, 6, 3, 5, 19, 16, 8],
      clues: [15],
      reveals: [0, 2],
    },
    {
      flipped: [
        10, 15, 11, 9, 7, 14, 1, 4, 6, 18, 3, 17, 5, 13, 0, 12, 2, 16, 8,
      ],
      clues: [10],
      reveals: [19],
    },
  ],
  lp = {
    width: Vv,
    height: $v,
    difficulty: kv,
    identityClue: Kv,
    cards: Jv,
    initial_reveals: Wv,
    seed: Fv,
    hint_sequence: Iv,
    synergy: Pv,
    supportsHints: ep,
    hints: tp,
  },
  nt = [];
for (let a = 0; a < 256; ++a) nt.push((a + 256).toString(16).slice(1));
function np(a, i = 0) {
  return (
    nt[a[i + 0]] +
    nt[a[i + 1]] +
    nt[a[i + 2]] +
    nt[a[i + 3]] +
    "-" +
    nt[a[i + 4]] +
    nt[a[i + 5]] +
    "-" +
    nt[a[i + 6]] +
    nt[a[i + 7]] +
    "-" +
    nt[a[i + 8]] +
    nt[a[i + 9]] +
    "-" +
    nt[a[i + 10]] +
    nt[a[i + 11]] +
    nt[a[i + 12]] +
    nt[a[i + 13]] +
    nt[a[i + 14]] +
    nt[a[i + 15]]
  ).toLowerCase();
}
let Os;
const ap = new Uint8Array(16);
function up() {
  if (!Os) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    Os = crypto.getRandomValues.bind(crypto);
  }
  return Os(ap);
}
const ip =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  Td = { randomUUID: ip };
function cp(a, i, f) {
  var r;
  if (Td.randomUUID && !a) return Td.randomUUID();
  a = a || {};
  const s = a.random ?? ((r = a.rng) == null ? void 0 : r.call(a)) ?? up();
  if (s.length < 16) throw new Error("Random bytes length must be >= 16");
  return (s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), np(s);
}
const rh = ["theme-default", "theme-acc-1"],
  Rs = [
    { label: "Dark mode", theme: 0, dark: !0 },
    { label: "Light mode", theme: 0, dark: !1 },
    { label: "Alt dark", theme: 1, dark: !0 },
    { label: "Alt light", theme: 1, dark: !1 },
  ],
  Ed = { theme: 0, dark: !0, shareUrl: !0 },
  oh = "preferences";
function fp() {
  const a = localStorage.getItem(oh);
  return a ? { ...Ed, ...JSON.parse(a) } : { ...Ed };
}
function sp(a) {
  localStorage.setItem(oh, JSON.stringify(a));
}
function rp({ theme: a, dark: i }) {
  return [rh[a], i ? "dark" : "light"];
}
function op(a) {
  for (const i of rh) document.body.classList.remove(i);
  document.body.classList.remove("light"),
    document.body.classList.remove("dark");
  for (const i of rp(a)) document.body.classList.add(i);
}
const dp = "Dec 21st 2025",
  hp = ({ onClose: a, config: i }) =>
    T.jsx("div", {
      className: "modal-overlay",
      onClick: () => a(),
      children: T.jsxs("div", {
        className: "start modal",
        onClick: (f) => f.stopPropagation(),
        children: [
          T.jsx("h3", { children: "Welcome to Clues by Sam!" }),
          T.jsx("h3", { children: dp }),
          T.jsx("br", {}),
          i.difficulty &&
            T.jsxs("p", {
              children: [
                "Difficulty: ",
                T.jsx("b", { children: i.difficulty }),
              ],
            }),
          T.jsxs("div", {
            className: "stack",
            children: [
              T.jsx("button", {
                className: "btn tutorial",
                onClick: () => {
                  window.open("./tutorial/", "_blank");
                },
                style: { marginTop: "15px" },
                children: "Play Tutorial",
              }),
              T.jsx("button", {
                className: "btn start",
                onClick: a,
                style: { marginTop: "15px" },
                children: "Start",
              }),
            ],
          }),
          T.jsx("br", {}),
        ],
      }),
    }),
  mp = ({ preferences: a, onChange: i }) => {
    const f =
      Rs.findIndex((s) => s.theme === a.theme && s.dark === a.dark) ?? 0;
    return T.jsx("div", {
      className: "preferences",
      children: T.jsx("div", {
        className: "select-wrapper",
        children: T.jsx("select", {
          id: "theme-select",
          value: f,
          onChange: (s) => i(Rs[parseInt(s.target.value)]),
          children: Rs.map((s, r) =>
            T.jsx("option", { value: r, children: s.label }, r)
          ),
        }),
      }),
    });
  },
  gp = ({ message: a, confirmText: i = "Okay", onConfirm: f, onClose: s }) =>
    T.jsx("div", {
      className: "modal-overlay",
      onClick: () => s(),
      children: T.jsxs("div", {
        className: "confirm modal",
        onClick: (r) => r.stopPropagation(),
        children: [
          T.jsx("p", { children: a }),
          T.jsx("button", { onClick: s, children: "Cancel" }),
          T.jsx("button", { onClick: f, children: i }),
        ],
      }),
    }),
  yp = ({
    preferences: a,
    updatePreferences: i,
    clearTags: f,
    levelData: s,
    state: r,
    levelComplete: h,
    onHint: m,
    postLevelComplete: x,
    onShowResults: b,
    onInspect: y,
    isInspecting: C,
    onRestart: w,
  }) => {
    const [q, B] = Ae.useState(!1),
      K =
        x &&
        T.jsxs("button", {
          className: "wide-button with-icon",
          onClick: () => b(),
          children: [T.jsx("span", { children: "🏆" }), "Share results"],
        }),
      ee = T.jsxs("button", {
        className: "wide-button with-icon",
        onClick: () => B(!0),
        children: [
          T.jsx("span", { style: { fontSize: "18px" }, children: "↻" }),
          " Play again",
        ],
      }),
      te = T.jsx("button", {
        className: "multiline",
        onClick: () => window.share(!0),
        children: "Share scenario",
      }),
      se = T.jsx("button", {
        disabled: !r.cornerTags || Object.values(r.cornerTags).every((F) => !F),
        onClick: () => f(),
        children: "Clear tags",
      }),
      ne = T.jsxs("button", {
        disabled: h,
        onClick: m,
        children: [
          T.jsx("span", { children: "💡" }),
          r.hint && r.hasRevealedHintedCards
            ? "Hide hint"
            : r.hint
            ? "Show more"
            : "Show hint",
        ],
      }),
      me = T.jsx("button", {
        onClick: () =>
          window.open("./tutorial/", "_blank"),
        children: "Play tutorial",
      }),
      ge = T.jsx("button", {
        className: "inspect-button" + (C ? " inspecting" : ""),
        onClick: y,
        children: C
          ? "Click a card"
          : T.jsxs(T.Fragment, {
              children: [T.jsx("span", { children: "🔎" }), " View clue"],
            }),
      });
    return T.jsxs(T.Fragment, {
      children: [
        T.jsxs("div", {
          className: "bottom",
          children: [
            x && T.jsxs("div", { className: "row", children: [ee, K] }),
            T.jsxs("div", {
              className: "row",
              children: [se, ge, s.supportsHints ? ne : te],
            }),
            T.jsxs("div", {
              className: "row",
              children: [
                T.jsx(mp, { preferences: a, onChange: i }),
                me,
                s.supportsHints && te,
              ],
            }),
          ],
        }),
        q &&
          T.jsx(gp, {
            message: "Clear solution and restart?",
            confirmText: "Restart",
            onConfirm: () => {
              B(!1), w();
            },
            onClose: () => B(!1),
          }),
      ],
    });
  },
  xt = lp,
  vp = "2b890ed9dee4",
  Ri = "state-2025-12-21";
let Li = Date.now(),
  nu = 0;
function zd() {
  (Li = Date.now()), (nu = 0);
}
function pp(a) {
  const i = Math.ceil(a / 1e3);
  return i <= 6 * 60
    ? `${Math.floor(i / 60)
        .toString()
        .padStart(2, "0")}:${(i % 60).toString().padStart(2, "0")}`
    : `less than ${Math.ceil(i / 60)} minutes`;
}
function tu() {
  return nu + (Date.now() - Li);
}
function bp() {
  if (Li !== null) {
    const a = localStorage.getItem(Ri);
    if (a)
      try {
        const i = JSON.parse(a);
        return (i.elapsedTime = tu()), dh(i), i.elapsedTime;
      } catch (i) {
        console.log("Couldn't parse save: " + i), console.log(a);
      }
  }
  return 0;
}
function Sp(a, i) {
  var f;
  return (f = a.hints) == null
    ? void 0
    : f
        .sort((s, r) =>
          s.clues.length != r.clues.length
            ? s.clues.length - r.clues.length
            : s.reveals.length != r.reveals.length
            ? s.reveals.length - r.reveals.length
            : s.flipped.length != r.flipped.length
            ? r.flipped.length - s.flipped.length
            : 0
        )
        .find(
          (s) =>
            s.flipped.every((r) => i.flippedCards.includes(r)) &&
            !s.reveals.every((r) => i.flippedCards.includes(r))
        );
}
window.addEventListener("visibilitychange", () => {
  document.hidden
    ? (nu = bp())
    : ((Li = Date.now()), console.log("Continuing with " + tu()));
});
X2(xt);
G2(xt);
const Cs = () => ({
  flippedCards: [...xt.initial_reveals],
  imperfections: [],
  attemptCount: 0,
  elapsedTime: 0,
  completeTime: 0,
  disabledCardIndices: [],
});
let Qs = !1;
const dh = (a) => {
    Qs || localStorage.setItem(Ri, JSON.stringify(a));
  },
  xp = () => {
    var v, H, X;
    const [a, i] = Ae.useState(!1),
      [f, s] = Ae.useState(null),
      [r, h] = Ae.useState(() => {
        const N = new URLSearchParams(window.location.search).get("state");
        if (N) {
          Qs = !0;
          try {
            return { ...N2(N), imperfections: [], attemptCount: 0 };
          } catch {
            return Cs();
          }
        } else {
          const Z = localStorage.getItem(Ri) || null;
          if (Z)
            try {
              const G = JSON.parse(Z);
              if (
                (G.elapsedTime &&
                  ((nu = G.elapsedTime),
                  console.log("Restored elapsed time " + nu)),
                G.flippedCards !== void 0 && G.imperfections !== void 0)
              )
                return G;
            } catch (G) {
              console.log("Couldn't parse save: " + G), console.log(Z);
            }
          return Cs();
        }
      }),
      m = (O) => {
        h(O), dh(O);
      },
      [x, b] = Ae.useState(() => (Qs ? !1 : !localStorage.getItem(Ri))),
      [y, C] = Ae.useState(null),
      [w, q] = Ae.useState(
        (() => {
          const O = fp();
          return op(O), O;
        })()
      );
    function B(O) {
      const N = { ...w, ...O };
      console.log("Set preferences"), q(N), sp(N);
    }
    Gg.useEffect(() => {
      const O = localStorage.getItem("userData");
      if (O) C(JSON.parse(O));
      else {
        const N = { uuid: cp() };
        localStorage.setItem("userData", JSON.stringify(N)), C(N);
      }
    }, []);
    const [K, ee] = Ae.useState(r.flippedCards.length == xt.cards.length),
      [te, se] = Ae.useState(K),
      [ne, me] = Ae.useState(K),
      [ge, F] = Ae.useState(!1),
      [be, _e] = Ae.useState(!1),
      [Se, L] = Ae.useState({
        isVisible: !1,
        cardIndex: -1,
        cornerIndex: -1,
        colorOffset: 0,
        position: { x: 0, y: 0 },
      });
    Ae.useEffect(() => {
      const O = (Z) => {
          Se.isVisible && Z.preventDefault();
        },
        N = document.body;
      if (N)
        return (
          N.addEventListener("touchmove", O, { passive: !1 }),
          () => {
            N.removeEventListener("touchmove", O);
          }
        );
    }, [Se]);
    const V = (O) => {
        L(O);
        const Z = { ...(r.cornerTags ?? {}) },
          G = [...(Z[O.cardIndex] || [0, 0])];
        (G[O.cornerIndex] = O.colorOffset), (Z[O.cardIndex] = G);
        const fe = { ...r, cornerTags: { ...Z } };
        m(fe);
      },
      pe = () => {
        const O = { ...r, cornerTags: {} };
        m(O);
      },
      Ue = (O, N) => {
        if (Se.isVisible) {
          console.log("Color picker is visible");
          return;
        }
        be &&
          r.flippedCards.includes(N) &&
          Ul({ event: { type: "inspect", index: N }, state: r, userData: y }),
          be || !r.flippedCards.includes(N) ? s({ ...O, index: N }) : Ce(N),
          _e(!1);
      },
      Ce = (O) => {
        var G;
        let N;
        const Z =
          ((G = r.disabledCardIndices) == null ? void 0 : G.indexOf(O)) ?? -1;
        if (Z != -1) {
          const fe = [...(r.disabledCardIndices ?? [])];
          fe.splice(Z, 1), (N = { ...r, disabledCardIndices: fe }), m(N);
        } else
          (N = {
            ...r,
            disabledCardIndices: [...(r.disabledCardIndices ?? []), O],
          }),
            m(N);
      },
      Ne = () => {
        _e(!be);
      },
      I = (O, N) =>
        z2(xt.cards[N].criminal) == O &&
        xt.cards[N].paths.some((G) =>
          G.every((fe) => r.flippedCards.includes(fe))
        ),
      D = () => {
        window.share = (O, N = void 0) => {
          const Z =
            N ||
            (() => {
              if (O) {
                const G = new URL(`/s/help/${vp}`, window.location.origin),
                  fe = A2(r);
                return G.searchParams.set("state", fe), G.toString();
              } else return window.location.href;
            })();
          return (
            navigator.clipboard.writeText(Z).then(() => {
              i(!0), setTimeout(() => i(!1), 2e3);
            }),
            Z
          );
        };
      };
    D();
    const J = (O, N) => {
        s(null), r.attemptCount == 0 && zd();
        const Z = I(O, N),
          G = { index: N, trait: O, error: !Z };
        if (
          (Ul({
            event: {
              type: "flip",
              index: N,
              correct: Z,
              isFirst: r.attemptCount == 0,
            },
            state: r,
            userData: y,
          }),
          Z)
        ) {
          const fe = [...r.flippedCards, N],
            he = r.nextGuessHintImperfection
              ? [{ index: N, type: r.nextGuessHintImperfection }]
              : [],
            Oe = {
              ...r,
              nextGuessHintImperfection: void 0,
              hint: void 0,
              hasRevealedHintedCards: void 0,
              flippedCards: fe,
              elapsedTime: tu(),
              attemptCount: r.attemptCount + 1,
              imperfections: [...r.imperfections, ...he],
              cornerTags: { ...(r.cornerTags ?? {}), [N]: [0, 0] },
              lastGuess: G,
            };
          fe.length == xt.cards.length && k(Oe), m(Oe), D();
        } else {
          const fe = { index: N, type: "error" },
            he = {
              ...r,
              imperfections: [
                ...r.imperfections,
                ...(r.imperfections.find(
                  (Oe) => Oe.index == fe.index && Oe.type == "error"
                )
                  ? []
                  : [fe]),
              ],
              attemptCount: r.attemptCount + 1,
              elapsedTime: tu(),
              lastGuess: G,
            };
          m(he), F(!0);
        }
      },
      k = (O) => {
        ee(!0),
          (O.completeTime = tu()),
          (O.disabledCardIndices = []),
          Ul({ event: { type: "complete" }, state: O, userData: y }),
          setTimeout(() => {
            se(!0), me(!0);
          }, 2500);
      },
      ce = () => {
        ee(!1), me(!1), zd(), m(Cs());
      };
    return (
      Ae.useEffect(() => {}, [r]),
      T.jsxs(T.Fragment, {
        children: [
          T.jsx("div", {
            className: `card-grid-container
          ${K ? "completed" : "in-progress"}
          ${be ? "inspecting" : ""}
        `,
            children: T.jsx(Ig, {
              data: xt,
              state: r,
              selectedIndex: f == null ? void 0 : f.index,
              onCardClick: Ue,
              setColorPickerState: V,
              colorPickerState: Se,
            }),
          }),
          x && T.jsx(hp, { config: xt, onClose: () => b(!1) }),
          f &&
            T.jsx(Pg, {
              card: f,
              isFlipped: r.flippedCards.includes(f.index),
              onFlip: (O) => J(O, f.index),
              onClose: () => s(null),
              tagState:
                ((H = (v = r.cornerTags) == null ? void 0 : v[f.index]) == null
                  ? void 0
                  : H[0]) ?? 0,
              incorrectGuess:
                r.lastGuess &&
                r.lastGuess.index === f.index &&
                r.lastGuess.error
                  ? r.lastGuess.trait
                  : void 0,
              isConsumed: (r.disabledCardIndices ?? []).includes(f.index),
              onClickClue: () => Ce(f.index),
              setColorPickerState: V,
              colorPickerState: Se,
            }),
          ge &&
            T.jsx(Z2, {
              guess: r.lastGuess,
              guessName: r.lastGuess
                ? (X = xt.cards[r.lastGuess.index]) == null
                  ? void 0
                  : X.name
                : void 0,
              onContinue: () => F(!1),
            }),
          te &&
            T.jsx(Zv, {
              imperfections: r.imperfections,
              onContinue: () => se(!1),
              state: r,
              usedTime: r.completeTime ? pp(r.completeTime) : void 0,
              preferences: w,
              updatePreferences: B,
              config: xt,
              onCopy: () => {
                i(!0), setTimeout(() => i(!1), 2e3);
              },
            }),
          T.jsx(yp, {
            preferences: w,
            updatePreferences: B,
            clearTags: pe,
            levelData: xt,
            state: r,
            levelComplete: K,
            postLevelComplete: ne,
            onShowResults: () => se(!0),
            onInspect: Ne,
            isInspecting: be,
            onRestart: ce,
            onHint: () => {
              const O = { ...r };
              if (r.hint && r.hasRevealedHintedCards)
                (O.hint = void 0), (O.hasRevealedHintedCards = !1);
              else if (
                (Ul({
                  event: { type: "hint", flipped: r.flippedCards },
                  state: r,
                  userData: y,
                }),
                r.hint)
              )
                (O.hasRevealedHintedCards = !0),
                  (O.nextGuessHintImperfection = "second-hint");
              else {
                const N = Sp(xt, r);
                N &&
                  ((O.hint = N),
                  O.nextGuessHintImperfection
                    ? (O.nextGuessHintImperfection = "second-hint")
                    : (O.nextGuessHintImperfection = "hint"));
              }
              m(O);
            },
          }),
          a &&
            T.jsx("div", {
              className: "toast",
              children: "Copied to clipboard",
            }),
        ],
      })
    );
  };
Kg.createRoot(document.getElementById("root")).render(
  T.jsx(Ae.StrictMode, { children: T.jsx(xp, {}) })
);
