/* eslint-disable */
!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t((e.htmPreact = {}))
})(this, function(e) {
  function t() {}
  var n = {},
    o = [],
    r = []
  function i(e, n) {
    var i,
      l,
      a,
      s,
      c = arguments,
      p = r
    for (s = arguments.length; s-- > 2; ) o.push(c[s])
    for (
      n &&
      null != n.children &&
      (o.length || o.push(n.children), delete n.children);
      o.length;

    )
      if ((l = o.pop()) && void 0 !== l.pop)
        for (s = l.length; s--; ) o.push(l[s])
      else
        'boolean' == typeof l && (l = null),
          (a = 'function' != typeof e) &&
            (null == l
              ? (l = '')
              : 'number' == typeof l
              ? (l = String(l))
              : 'string' != typeof l && (a = !1)),
          a && i ? (p[p.length - 1] += l) : p === r ? (p = [l]) : p.push(l),
          (i = a)
    var u = new t()
    return (
      (u.nodeName = e),
      (u.children = p),
      (u.attributes = null == n ? void 0 : n),
      (u.key = null == n ? void 0 : n.key),
      u
    )
  }
  function l(e, t) {
    for (var n in t) e[n] = t[n]
    return e
  }
  var a =
      'function' == typeof Promise
        ? Promise.resolve().then.bind(Promise.resolve())
        : setTimeout,
    s = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
    c = []
  function p(e) {
    !e._dirty && (e._dirty = !0) && 1 == c.push(e) && a(u)
  }
  function u() {
    var e,
      t = c
    for (c = []; (e = t.pop()); ) e._dirty && B(e)
  }
  function f(e, t) {
    return (
      e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
    )
  }
  function d(e) {
    var t = l({}, e.attributes)
    t.children = e.children
    var n = e.nodeName.defaultProps
    if (void 0 !== n) for (var o in n) void 0 === t[o] && (t[o] = n[o])
    return t
  }
  function v(e) {
    var t = e.parentNode
    t && t.removeChild(e)
  }
  function _(e, t, n, o, r) {
    if (('className' === t && (t = 'class'), 'key' === t));
    else if ('ref' === t) n && n(null), o && o(e)
    else if ('class' !== t || r)
      if ('style' === t) {
        if (
          ((o && 'string' != typeof o && 'string' != typeof n) ||
            (e.style.cssText = o || ''),
          o && 'object' == typeof o)
        ) {
          if ('string' != typeof n) for (var i in n) i in o || (e.style[i] = '')
          for (var i in o)
            e.style[i] =
              'number' == typeof o[i] && !1 === s.test(i) ? o[i] + 'px' : o[i]
        }
      } else if ('dangerouslySetInnerHTML' === t)
        o && (e.innerHTML = o.__html || '')
      else if ('o' == t[0] && 'n' == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ''))
        ;(t = t.toLowerCase().substring(2)),
          o ? n || e.addEventListener(t, m, l) : e.removeEventListener(t, m, l),
          ((e._listeners || (e._listeners = {}))[t] = o)
      } else if ('list' !== t && 'type' !== t && !r && t in e)
        !(function(e, t, n) {
          try {
            e[t] = n
          } catch (e) {}
        })(e, t, null == o ? '' : o),
          (null != o && !1 !== o) || e.removeAttribute(t)
      else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ''))
        null == o || !1 === o
          ? a
            ? e.removeAttributeNS(
                'http://www.w3.org/1999/xlink',
                t.toLowerCase()
              )
            : e.removeAttribute(t)
          : 'function' != typeof o &&
            (a
              ? e.setAttributeNS(
                  'http://www.w3.org/1999/xlink',
                  t.toLowerCase(),
                  o
                )
              : e.setAttribute(t, o))
      }
    else e.className = o || ''
  }
  function m(e) {
    return this._listeners[e.type](e)
  }
  var h = [],
    y = 0,
    b = !1,
    g = !1
  function C() {
    for (var e; (e = h.pop()); ) e.componentDidMount && e.componentDidMount()
  }
  function x(e, t, n, o, r, i) {
    y++ ||
      ((b = null != r && void 0 !== r.ownerSVGElement),
      (g = null != e && !('__preactattr_' in e)))
    var l = N(e, t, n, o, i)
    return (
      r && l.parentNode !== r && r.appendChild(l),
      --y || ((g = !1), i || C()),
      l
    )
  }
  function N(e, t, n, o, r) {
    var i = e,
      l = b
    if (
      ((null != t && 'boolean' != typeof t) || (t = ''),
      'string' == typeof t || 'number' == typeof t)
    )
      return (
        e && void 0 !== e.splitText && e.parentNode && (!e._component || r)
          ? e.nodeValue != t && (e.nodeValue = t)
          : ((i = document.createTextNode(t)),
            e && (e.parentNode && e.parentNode.replaceChild(i, e), k(e, !0))),
        (i.__preactattr_ = !0),
        i
      )
    var a,
      s,
      c = t.nodeName
    if ('function' == typeof c)
      return (function(e, t, n, o) {
        var r = e && e._component,
          i = r,
          l = e,
          a = r && e._componentConstructor === t.nodeName,
          s = a,
          c = d(t)
        for (; r && !s && (r = r._parentComponent); )
          s = r.constructor === t.nodeName
        r && s && (!o || r._component)
          ? (T(r, c, 3, n, o), (e = r.base))
          : (i && !a && (U(i), (e = l = null)),
            (r = L(t.nodeName, c, n)),
            e && !r.nextBase && ((r.nextBase = e), (l = null)),
            T(r, c, 1, n, o),
            (e = r.base),
            l && e !== l && ((l._component = null), k(l, !1)))
        return e
      })(e, t, n, o)
    if (
      ((b = 'svg' === c || ('foreignObject' !== c && b)),
      (c = String(c)),
      (!e || !f(e, c)) &&
        ((a = c),
        ((s = b
          ? document.createElementNS('http://www.w3.org/2000/svg', a)
          : document.createElement(a)).normalizedNodeName = a),
        (i = s),
        e))
    ) {
      for (; e.firstChild; ) i.appendChild(e.firstChild)
      e.parentNode && e.parentNode.replaceChild(i, e), k(e, !0)
    }
    var p = i.firstChild,
      u = i.__preactattr_,
      m = t.children
    if (null == u) {
      u = i.__preactattr_ = {}
      for (var h = i.attributes, y = h.length; y--; ) u[h[y].name] = h[y].value
    }
    return (
      !g &&
      m &&
      1 === m.length &&
      'string' == typeof m[0] &&
      null != p &&
      void 0 !== p.splitText &&
      null == p.nextSibling
        ? p.nodeValue != m[0] && (p.nodeValue = m[0])
        : ((m && m.length) || null != p) &&
          (function(e, t, n, o, r) {
            var i,
              l,
              a,
              s,
              c,
              p = e.childNodes,
              u = [],
              d = {},
              _ = 0,
              m = 0,
              h = p.length,
              y = 0,
              b = t ? t.length : 0
            if (0 !== h)
              for (var g = 0; g < h; g++) {
                var C = p[g],
                  x = C.__preactattr_,
                  w =
                    b && x ? (C._component ? C._component.__key : x.key) : null
                null != w
                  ? (_++, (d[w] = C))
                  : (x ||
                      (void 0 !== C.splitText
                        ? !r || C.nodeValue.trim()
                        : r)) &&
                    (u[y++] = C)
              }
            if (0 !== b)
              for (var g = 0; g < b; g++) {
                c = null
                var w = (s = t[g]).key
                if (null != w)
                  _ && void 0 !== d[w] && ((c = d[w]), (d[w] = void 0), _--)
                else if (!c && m < y)
                  for (i = m; i < y; i++)
                    if (
                      void 0 !== u[i] &&
                      ((S = l = u[i]),
                      (P = r),
                      'string' == typeof (L = s) || 'number' == typeof L
                        ? void 0 !== S.splitText
                        : 'string' == typeof L.nodeName
                        ? !S._componentConstructor && f(S, L.nodeName)
                        : P || S._componentConstructor === L.nodeName)
                    ) {
                      ;(c = l),
                        (u[i] = void 0),
                        i === y - 1 && y--,
                        i === m && m++
                      break
                    }
                ;(c = N(c, s, n, o)),
                  (a = p[g]),
                  c &&
                    c !== e &&
                    c !== a &&
                    (null == a
                      ? e.appendChild(c)
                      : c === a.nextSibling
                      ? v(a)
                      : e.insertBefore(c, a))
              }
            var S, L, P
            if (_) for (var g in d) void 0 !== d[g] && k(d[g], !1)
            for (; m <= y; ) void 0 !== (c = u[y--]) && k(c, !1)
          })(i, m, n, o, g || null != u.dangerouslySetInnerHTML),
      (function(e, t, n) {
        var o
        for (o in n)
          (t && null != t[o]) ||
            null == n[o] ||
            _(e, o, n[o], (n[o] = void 0), b)
        for (o in t)
          'children' === o ||
            'innerHTML' === o ||
            (o in n &&
              t[o] === ('value' === o || 'checked' === o ? e[o] : n[o])) ||
            _(e, o, n[o], (n[o] = t[o]), b)
      })(i, t.attributes, u),
      (b = l),
      i
    )
  }
  function k(e, t) {
    var n = e._component
    n
      ? U(n)
      : (null != e.__preactattr_ &&
          e.__preactattr_.ref &&
          e.__preactattr_.ref(null),
        (!1 !== t && null != e.__preactattr_) || v(e),
        w(e))
  }
  function w(e) {
    for (e = e.lastChild; e; ) {
      var t = e.previousSibling
      k(e, !0), (e = t)
    }
  }
  var S = {}
  function L(e, t, n) {
    var o,
      r = S[e.name]
    if (
      (e.prototype && e.prototype.render
        ? ((o = new e(t, n)), M.call(o, t, n))
        : (((o = new M(t, n)).constructor = e), (o.render = P)),
      r)
    )
      for (var i = r.length; i--; )
        if (r[i].constructor === e) {
          ;(o.nextBase = r[i].nextBase), r.splice(i, 1)
          break
        }
    return o
  }
  function P(e, t, n) {
    return this.constructor(e, n)
  }
  function T(e, t, o, r, i) {
    e._disable ||
      ((e._disable = !0),
      (e.__ref = t.ref) && delete t.ref,
      (e.__key = t.key) && delete t.key,
      !e.base || i
        ? e.componentWillMount && e.componentWillMount()
        : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r),
      r &&
        r !== e.context &&
        (e.prevContext || (e.prevContext = e.context), (e.context = r)),
      e.prevProps || (e.prevProps = e.props),
      (e.props = t),
      (e._disable = !1),
      0 !== o &&
        (1 !== o && !1 === n.syncComponentUpdates && e.base
          ? p(e)
          : B(e, 1, i)),
      e.__ref && e.__ref(e))
  }
  function B(e, t, n, o) {
    if (!e._disable) {
      var r,
        i,
        a,
        s = e.props,
        c = e.state,
        p = e.context,
        u = e.prevProps || s,
        f = e.prevState || c,
        v = e.prevContext || p,
        _ = e.base,
        m = e.nextBase,
        b = _ || m,
        g = e._component,
        N = !1
      if (
        (_ &&
          ((e.props = u),
          (e.state = f),
          (e.context = v),
          2 !== t &&
          e.shouldComponentUpdate &&
          !1 === e.shouldComponentUpdate(s, c, p)
            ? (N = !0)
            : e.componentWillUpdate && e.componentWillUpdate(s, c, p),
          (e.props = s),
          (e.state = c),
          (e.context = p)),
        (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
        (e._dirty = !1),
        !N)
      ) {
        ;(r = e.render(s, c, p)),
          e.getChildContext && (p = l(l({}, p), e.getChildContext()))
        var w,
          S,
          P = r && r.nodeName
        if ('function' == typeof P) {
          var M = d(r)
          ;(i = g) && i.constructor === P && M.key == i.__key
            ? T(i, M, 1, p, !1)
            : ((w = i),
              (e._component = i = L(P, M, p)),
              (i.nextBase = i.nextBase || m),
              (i._parentComponent = e),
              T(i, M, 0, p, !1),
              B(i, 1, n, !0)),
            (S = i.base)
        } else
          (a = b),
            (w = g) && (a = e._component = null),
            (b || 1 === t) &&
              (a && (a._component = null),
              (S = x(a, r, p, n || !_, b && b.parentNode, !0)))
        if (b && S !== b && i !== g) {
          var W = b.parentNode
          W &&
            S !== W &&
            (W.replaceChild(S, b), w || ((b._component = null), k(b, !1)))
        }
        if ((w && U(w), (e.base = S), S && !o)) {
          for (var A = e, E = e; (E = E._parentComponent); ) (A = E).base = S
          ;(S._component = A), (S._componentConstructor = A.constructor)
        }
      }
      if (
        (!_ || n
          ? h.unshift(e)
          : N || (e.componentDidUpdate && e.componentDidUpdate(u, f, v)),
        null != e._renderCallbacks)
      )
        for (; e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e)
      y || o || C()
    }
  }
  function U(e) {
    var t = e.base
    ;(e._disable = !0),
      e.componentWillUnmount && e.componentWillUnmount(),
      (e.base = null)
    var n = e._component
    n
      ? U(n)
      : t &&
        (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null),
        (e.nextBase = t),
        v(t),
        (function(e) {
          var t = e.constructor.name
          ;(S[t] || (S[t] = [])).push(e)
        })(e),
        w(t)),
      e.__ref && e.__ref(null)
  }
  function M(e, t) {
    ;(this._dirty = !0),
      (this.context = t),
      (this.props = e),
      (this.state = this.state || {})
  }
  l(M.prototype, {
    setState: function(e, t) {
      var n = this.state
      this.prevState || (this.prevState = l({}, n)),
        l(n, 'function' == typeof e ? e(n, this.props) : e),
        t && (this._renderCallbacks = this._renderCallbacks || []).push(t),
        p(this)
    },
    forceUpdate: function(e) {
      e && (this._renderCallbacks = this._renderCallbacks || []).push(e),
        B(this, 2)
    },
    render: function() {}
  })
  var W = {},
    A = JSON.stringify
  var E = function(e) {
    for (
      var t,
        n,
        o,
        r,
        i,
        l = 0,
        a = 'return ',
        s = '',
        c = '',
        p = 0,
        u = '',
        f = '',
        d = '',
        v = 0,
        _ = function() {
          o
            ? 9 === l
              ? (p++ && (a += ','), (a += 'h(' + (c || A(s))), (l = 0))
              : 13 === l || (0 === l && '...' === s)
              ? (0 === l
                  ? (d ||
                      ((d = ')'),
                      (u = u ? 'Object.assign(' + u : 'Object.assign({}')),
                    (u += f + ',' + c),
                    (f = ''))
                  : r &&
                    ((u += u ? ',' + (f ? '' : '{') : '{'),
                    (f = '}'),
                    (u += A(r) + ':'),
                    (u += c || ((i || s) && A(s)) || 'true'),
                    (r = '')),
                (i = !1))
              : 0 === l && ((l = 13), (r = s), (s = c = ''), _(), (l = 0))
            : (c || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ''))) &&
              (p++ && (a += ','), (a += c || A(s))),
            (s = c = '')
        },
        m = 0;
      m < e.length;
      m++
    ) {
      m > 0 && (o || _(), (c = '$[' + m + ']'), _())
      for (var h = 0; h < e[m].length; h++) {
        if (((n = e[m].charCodeAt(h)), o)) {
          if (39 === n || 34 === n) {
            if (v === n) {
              v = 0
              continue
            }
            if (0 === v) {
              v = n
              continue
            }
          }
          if (0 === v)
            switch (n) {
              case 62:
                _(),
                  47 !== l && (a += u ? ',' + u + f + d : ',null'),
                  t && (a += ')'),
                  (o = 0),
                  (u = ''),
                  (l = 1)
                continue
              case 61:
                ;(l = 13), (i = !0), (r = s), (s = '')
                continue
              case 47:
                t || ((t = !0), 9 !== l || s.trim() || ((s = c = ''), (l = 47)))
                continue
              case 9:
              case 10:
              case 13:
              case 32:
                _(), (l = 0)
                continue
            }
        } else if (60 === n) {
          _(), (o = 1), (d = f = u = ''), (t = i = !1), (l = 9)
          continue
        }
        s += e[m].charAt(h)
      }
    }
    return _(), Function('h', '$', a)
  }
  var V = function(e) {
    for (var t = '.', n = 0; n < e.length; n++) t += e[n].length + ',' + e[n]
    return (W[t] || (W[t] = E(e)))(this, arguments)
  }.bind(i)
  ;(e.h = i),
    (e.html = V),
    (e.render = function(e, t) {
      !(function(e, t, n) {
        x(n, e, {}, !1, t, !1)
      })(e, t, t.firstElementChild)
    }),
    (e.Component = M)
})
