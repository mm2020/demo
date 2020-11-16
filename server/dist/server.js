(() => {
  'use strict';
  var e = {
      515: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, s) {
                function u(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(u, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                s,
                u = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (s = { next: a(0), throw: a(1), return: a(2) }),
                'function' == typeof Symbol &&
                  (s[Symbol.iterator] = function () {
                    return this;
                  }),
                s
              );
              function a(s) {
                return function (a) {
                  return (function (s) {
                    if (n)
                      throw new TypeError('Generator is already executing.');
                    for (; u; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return u.label++, { value: s[1], done: !1 };
                          case 5:
                            u.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = u.ops.pop()), u.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = u.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              u = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              u.label = s[1];
                              break;
                            }
                            if (6 === s[0] && u.label < o[1]) {
                              (u.label = o[1]), (o = s);
                              break;
                            }
                            if (o && u.label < o[2]) {
                              (u.label = o[2]), u.ops.push(s);
                              break;
                            }
                            o[2] && u.ops.pop(), u.trys.pop();
                            continue;
                        }
                        s = t.call(e, u);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, a]);
                };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.deleteAnAccount = t.updateAnAccount = t.readAllAccounts = t.createAnAccount = void 0);
        var u = n(794),
          a = s(n(30)),
          c = s(n(680));
        (t.createAnAccount = function (e, t) {
          return r(void 0, void 0, void 0, function () {
            var n, r, s;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (!e.body)
                    return [
                      2,
                      t
                        .status(400)
                        .json({ success: !1, messeage: 'Error: Blank!' }),
                    ];
                  o.label = 1;
                case 1:
                  return (
                    o.trys.push([1, 5, , 6]), [4, u.createConnection(a.default)]
                  );
                case 2:
                  return (
                    o.sent(),
                    [4, (n = u.getRepository(c.default)).create(e.body)]
                  );
                case 3:
                  return (r = o.sent()), [4, n.save(r)];
                case 4:
                  return o.sent(), [2, t.status(201).json({ success: !0 })];
                case 5:
                  return (
                    (s = o.sent()),
                    [2, t.status(400).json({ success: !1, messeage: s })]
                  );
                case 6:
                  return [2];
              }
            });
          });
        }),
          (t.readAllAccounts = function (e, t) {
            return r(void 0, void 0, void 0, function () {
              var e, n;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 3, , 4]),
                      [4, u.createConnection(a.default)]
                    );
                  case 1:
                    return r.sent(), [4, u.getRepository(c.default).find()];
                  case 2:
                    return (
                      (e = r.sent()),
                      [2, t.status(200).json({ success: !0, data: e })]
                    );
                  case 3:
                    return (
                      (n = r.sent()),
                      [2, t.status(400).json({ success: !1, messeage: n })]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (t.updateAnAccount = function (e, t) {
            return r(void 0, void 0, void 0, function () {
              var n, r, s;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (!e.body)
                      return [
                        2,
                        t
                          .status(400)
                          .json({ success: !1, messeage: 'Error: Blank!' }),
                      ];
                    o.label = 1;
                  case 1:
                    return (
                      o.trys.push([1, 5, , 6]),
                      [4, u.createConnection(a.default)]
                    );
                  case 2:
                    return (
                      o.sent(),
                      [
                        4,
                        (n = u.getRepository(c.default)).findOne({
                          where: { id: e.params.id },
                        }),
                      ]
                    );
                  case 3:
                    return (r = o.sent())
                      ? ((r.password = e.body.password), [4, n.save(r)])
                      : [
                          2,
                          t
                            .status(404)
                            .json({ success: !1, messeage: 'Error: N/A!' }),
                        ];
                  case 4:
                    return o.sent(), [2, t.status(200).json({ success: !0 })];
                  case 5:
                    return (
                      (s = o.sent()),
                      [2, t.status(400).json({ success: !1, messeage: s })]
                    );
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (t.deleteAnAccount = function (e, t) {
            return r(void 0, void 0, void 0, function () {
              var n, r, s;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 4, , 5]),
                      [4, u.createConnection(a.default)]
                    );
                  case 1:
                    return (
                      o.sent(),
                      [
                        4,
                        (n = u.getRepository(c.default)).findOne({
                          where: { id: e.params.id },
                        }),
                      ]
                    );
                  case 2:
                    return (r = o.sent())
                      ? [4, n.remove(r)]
                      : [
                          2,
                          t
                            .status(404)
                            .json({ success: !1, messeage: 'Error: N/A!' }),
                        ];
                  case 3:
                    return o.sent(), [2, t.status(200).json({ success: !0 })];
                  case 4:
                    return (
                      (s = o.sent()),
                      [2, t.status(400).json({ success: !1, messeage: s })]
                    );
                  case 5:
                    return [2];
                }
              });
            });
          });
      },
      30: function (e, t, n) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = r(n(177)),
          s = r(n(680)),
          u = {
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'M.M',
            database: 'postgres',
            synchronize: !1,
            logging: !0,
            entities: [o.default, s.default],
          };
        t.default = u;
      },
      680: function (e, t, n) {
        var r =
            (this && this.__decorate) ||
            function (e, t, n, r) {
              var o,
                s = arguments.length,
                u =
                  s < 3
                    ? t
                    : null === r
                    ? (r = Object.getOwnPropertyDescriptor(t, n))
                    : r;
              if (
                'object' == typeof Reflect &&
                'function' == typeof Reflect.decorate
              )
                u = Reflect.decorate(e, t, n, r);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (o = e[a]) &&
                    (u = (s < 3 ? o(u) : s > 3 ? o(t, n, u) : o(t, n)) || u);
              return s > 3 && u && Object.defineProperty(t, n, u), u;
            },
          o =
            (this && this.__metadata) ||
            function (e, t) {
              if (
                'object' == typeof Reflect &&
                'function' == typeof Reflect.metadata
              )
                return Reflect.metadata(e, t);
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var s = n(794),
          u = (function () {
            function e() {}
            return (
              r(
                [
                  s.PrimaryColumn({ type: 'varchar', length: 10 }),
                  o('design:type', String),
                ],
                e.prototype,
                'id',
                void 0
              ),
              r(
                [
                  s.Column({ type: 'varchar', length: 10 }),
                  o('design:type', String),
                ],
                e.prototype,
                'password',
                void 0
              ),
              r([s.Entity({ name: 'account' })], e)
            );
          })();
        t.default = u;
      },
      177: function (e, t, n) {
        var r =
            (this && this.__decorate) ||
            function (e, t, n, r) {
              var o,
                s = arguments.length,
                u =
                  s < 3
                    ? t
                    : null === r
                    ? (r = Object.getOwnPropertyDescriptor(t, n))
                    : r;
              if (
                'object' == typeof Reflect &&
                'function' == typeof Reflect.decorate
              )
                u = Reflect.decorate(e, t, n, r);
              else
                for (var a = e.length - 1; a >= 0; a--)
                  (o = e[a]) &&
                    (u = (s < 3 ? o(u) : s > 3 ? o(t, n, u) : o(t, n)) || u);
              return s > 3 && u && Object.defineProperty(t, n, u), u;
            },
          o =
            (this && this.__metadata) ||
            function (e, t) {
              if (
                'object' == typeof Reflect &&
                'function' == typeof Reflect.metadata
              )
                return Reflect.metadata(e, t);
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var s = n(794),
          u = (function () {
            function e() {
              this.name = 'null';
            }
            return (
              r(
                [
                  s.PrimaryColumn({ type: 'varchar', length: 10 }),
                  o('design:type', String),
                ],
                e.prototype,
                'id',
                void 0
              ),
              r(
                [
                  s.Column({ type: 'varchar', length: 10 }),
                  o('design:type', String),
                ],
                e.prototype,
                'name',
                void 0
              ),
              r([s.Entity({ name: 'users' })], e)
            );
          })();
        t.default = u;
      },
      607: function (e, t, n) {
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (o, s) {
                function u(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? o(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(u, a);
                }
                c((r = r.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var n,
                r,
                o,
                s,
                u = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (s = { next: a(0), throw: a(1), return: a(2) }),
                'function' == typeof Symbol &&
                  (s[Symbol.iterator] = function () {
                    return this;
                  }),
                s
              );
              function a(s) {
                return function (a) {
                  return (function (s) {
                    if (n)
                      throw new TypeError('Generator is already executing.');
                    for (; u; )
                      try {
                        if (
                          ((n = 1),
                          r &&
                            (o =
                              2 & s[0]
                                ? r.return
                                : s[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                            !(o = o.call(r, s[1])).done)
                        )
                          return o;
                        switch (
                          ((r = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return u.label++, { value: s[1], done: !1 };
                          case 5:
                            u.label++, (r = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = u.ops.pop()), u.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = u.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              u = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              u.label = s[1];
                              break;
                            }
                            if (6 === s[0] && u.label < o[1]) {
                              (u.label = o[1]), (o = s);
                              break;
                            }
                            if (o && u.label < o[2]) {
                              (u.label = o[2]), u.ops.push(s);
                              break;
                            }
                            o[2] && u.ops.pop(), u.trys.pop();
                            continue;
                        }
                        s = t.call(e, u);
                      } catch (e) {
                        (s = [6, e]), (r = 0);
                      } finally {
                        n = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, a]);
                };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var u = s(n(479)),
          a = s(n(127)),
          c = n(794),
          i = s(n(30)),
          l = s(n(468)),
          f = n(794),
          d = s(n(680));
        r(void 0, void 0, void 0, function () {
          var e, t;
          return o(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  n.trys.push([0, 3, , 4]), [4, c.createConnection(i.default)]
                );
              case 1:
                return n.sent(), [4, f.getRepository(d.default).find()];
              case 2:
                return (e = n.sent()), console.log(e), [3, 4];
              case 3:
                return (t = n.sent()), console.log(t), [3, 4];
              case 4:
                return [2];
            }
          });
        });
        var p = a.default();
        p.set('apiPort', 3e3),
          p.use(u.default()),
          p.use(a.default.json()),
          p.use(a.default.urlencoded({ extended: !0 })),
          p.get('/', function (e, t) {
            t.send('Hi, from server "localhost:' + p.get('apiPort') + '"');
          }),
          p.use('/api', l.default),
          p.listen(p.get('apiPort'), function () {
            console.log(' o Server runinig on port', p.get('apiPort'), '>>> ');
          });
      },
      468: function (e, t, n) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  'default' !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return o(t, e), t;
            },
          u =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var a = u(n(127)),
          c = s(n(515)),
          i = a.default.Router();
        i.post('/account', c.createAnAccount),
          i.get('/account', c.readAllAccounts),
          i.put('/account/:id', c.updateAnAccount),
          i.delete('/account/:id', c.deleteAnAccount),
          (t.default = i);
      },
      479: (e) => {
        e.exports = require('cors');
      },
      127: (e) => {
        e.exports = require('express');
      },
      794: (e) => {
        e.exports = require('typeorm');
      },
    },
    t = {};
  !(function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  })(607);
})();
