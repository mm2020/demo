/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/controllers/account-ctrl.ts':
      /*!*****************************************!*\
  !*** ./src/controllers/account-ctrl.ts ***!
  \*****************************************/
      /*! unknown exports (runtime-defined) */
      /*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
      /*! CommonJS bailout: this is used directly at 2:17-21 */
      /*! CommonJS bailout: this is used directly at 11:19-23 */
      /*! CommonJS bailout: this is used directly at 38:23-27 */
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        eval(
          "\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteAnAccount = exports.updateAnAccount = exports.readAllAccounts = exports.createAnAccount = void 0;\nvar typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nvar db_1 = __importDefault(__webpack_require__(/*! ../db */ \"./src/db/index.ts\"));\nvar account_1 = __importDefault(__webpack_require__(/*! ../entities/account */ \"./src/entities/account.ts\"));\nexports.createAnAccount = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var db, accountRepository, newAccount, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if (!req.body) {\n                    return [2 /*return*/, res.status(400).json({\n                            success: false,\n                            messeage: 'Error: Blank!',\n                        })];\n                }\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 5, , 6]);\n                return [4 /*yield*/, typeorm_1.createConnection(db_1.default)];\n            case 2:\n                db = _a.sent();\n                accountRepository = typeorm_1.getRepository(account_1.default);\n                return [4 /*yield*/, accountRepository.create(req.body)];\n            case 3:\n                newAccount = _a.sent();\n                return [4 /*yield*/, accountRepository.save(newAccount)];\n            case 4:\n                _a.sent();\n                return [2 /*return*/, res.status(201).json({\n                        success: true,\n                    })];\n            case 5:\n                error_1 = _a.sent();\n                return [2 /*return*/, res.status(400).json({\n                        success: false,\n                        messeage: error_1,\n                    })];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\nexports.readAllAccounts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var db, accountRepository, allAccounts, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 3, , 4]);\n                return [4 /*yield*/, typeorm_1.createConnection(db_1.default)];\n            case 1:\n                db = _a.sent();\n                accountRepository = typeorm_1.getRepository(account_1.default);\n                return [4 /*yield*/, accountRepository.find()];\n            case 2:\n                allAccounts = _a.sent();\n                return [2 /*return*/, res.status(200).json({\n                        success: true,\n                        data: allAccounts,\n                    })];\n            case 3:\n                error_2 = _a.sent();\n                return [2 /*return*/, res.status(400).json({\n                        success: false,\n                        messeage: error_2,\n                    })];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); };\nexports.updateAnAccount = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var db, accountRepository, targetAccount, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                if (!req.body) {\n                    return [2 /*return*/, res.status(400).json({\n                            success: false,\n                            messeage: 'Error: Blank!',\n                        })];\n                }\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 5, , 6]);\n                return [4 /*yield*/, typeorm_1.createConnection(db_1.default)];\n            case 2:\n                db = _a.sent();\n                accountRepository = typeorm_1.getRepository(account_1.default);\n                return [4 /*yield*/, accountRepository.findOne({\n                        where: {\n                            id: req.params.id,\n                        },\n                    })];\n            case 3:\n                targetAccount = _a.sent();\n                if (!targetAccount) {\n                    return [2 /*return*/, res.status(404).json({\n                            success: false,\n                            messeage: 'Error: N/A!',\n                        })];\n                }\n                targetAccount.password = req.body.password;\n                return [4 /*yield*/, accountRepository.save(targetAccount)];\n            case 4:\n                _a.sent();\n                return [2 /*return*/, res.status(200).json({\n                        success: true,\n                    })];\n            case 5:\n                error_3 = _a.sent();\n                return [2 /*return*/, res.status(400).json({\n                        success: false,\n                        messeage: error_3,\n                    })];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); };\nexports.deleteAnAccount = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var db, accountRepository, targetAccount, error_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 4, , 5]);\n                return [4 /*yield*/, typeorm_1.createConnection(db_1.default)];\n            case 1:\n                db = _a.sent();\n                accountRepository = typeorm_1.getRepository(account_1.default);\n                return [4 /*yield*/, accountRepository.findOne({\n                        where: {\n                            id: req.params.id,\n                        },\n                    })];\n            case 2:\n                targetAccount = _a.sent();\n                if (!targetAccount) {\n                    return [2 /*return*/, res.status(404).json({\n                            success: false,\n                            messeage: 'Error: N/A!',\n                        })];\n                }\n                return [4 /*yield*/, accountRepository.remove(targetAccount)];\n            case 3:\n                _a.sent();\n                return [2 /*return*/, res.status(200).json({\n                        success: true,\n                    })];\n            case 4:\n                error_4 = _a.sent();\n                return [2 /*return*/, res.status(400).json({\n                        success: false,\n                        messeage: error_4,\n                    })];\n            case 5: return [2 /*return*/];\n        }\n    });\n}); };\n// export const createAnAccount = async (req: Request, res: Response) => {\n//   if (!req.body) {\n//     return res.status(400).json({\n//       success: false,\n//       messeage: 'Error: Blank!',\n//     });\n//   }\n//   let success\n//   let messeage\n//   await createConnection(dbConfig)\n//     .then(async (connection) => {\n//       try {\n//         const accountRepository = getRepository(Account);\n//         const newAccount = await accountRepository.create(req.body);\n//         await accountRepository.save(newAccount);\n//         success = true;\n//       } catch (error) {\n//         console.error('Failed : ', error);\n//         return res.status()\n//       } finally {\n//         await connection.close();\n//       }\n//     })\n//     .catch((error) => {\n//       console.error('Postgres Connection Failed', error);\n//     });\n// };\n// export const readAllAccounts = async (req: Request, res: Response) => {\n//   await createConnection(dbConfig)\n//     .then(async (connection) => {\n//       try {\n//         const accountRepository = getRepository(Account);\n//         const allAccounts = await accountRepository.find();\n//         console.log('Select : ', allAccounts);\n//         return res.status(200).json({\n//           success: true,\n//           messeage: '正常に読み込みました。',\n//           data: allAccounts,\n//         });\n//       } catch (error) {\n//         console.error('Failed : ', error);\n//       } finally {\n//         await connection.close();\n//       }\n//     })\n//     .catch((error) => {\n//       console.error('Postgres Connection Failed', error);\n//     });\n// };\n// export const updateAnAccount = async (req: Request, res: Response) => {\n//   if (!req.body) {\n//     return res.status(400).json({\n//       success: false,\n//       messeage: 'Error: Blank!',\n//     });\n//   }\n//   await createConnection(dbConfig)\n//     .then(async (connection) => {\n//       try {\n//         const accountRepository = getRepository(Account);\n//         const targetAccount = await accountRepository.findOne({\n//           where: {\n//             id: req.params.id,\n//           },\n//         });\n//         if (!targetAccount) {\n//           return res.status(404).json({\n//             success: false,\n//             messeage: 'Error: N/A!',\n//           });\n//         }\n//         targetAccount.password = req.body.password;\n//         await accountRepository.save(targetAccount);\n//       } catch (error) {\n//         console.error('Failed : ', error);\n//       } finally {\n//         await connection.close();\n//       }\n//     })\n//     .catch((error) => {\n//       console.error('Postgres Connection Failed', error);\n//     });\n// };\n// export const deleteAnAccount = async (req: Request, res: Response) => {\n//   await createConnection(dbConfig)\n//     .then(async (connection) => {\n//       try {\n//         const accountRepository = getRepository(Account);\n//         const targetAccount = await accountRepository.findOne({\n//           where: {\n//             id: req.params.id,\n//           },\n//         });\n//         if (!targetAccount) {\n//           return res.status(404).json({\n//             success: false,\n//             messeage: 'Error: N/A!',\n//           });\n//         }\n//         await accountRepository.remove(targetAccount);\n//       } catch (error) {\n//         console.error('Failed : ', error);\n//       } finally {\n//         await connection.close();\n//       }\n//     })\n//     .catch((error) => {\n//       console.error('Postgres Connection Failed', error);\n//     });\n// };\n\n\n//# sourceURL=webpack://server/./src/controllers/account-ctrl.ts?"
        );

        /***/
      },

    /***/ './src/db/index.ts':
      /*!*************************!*\
  !*** ./src/db/index.ts ***!
  \*************************/
      /*! unknown exports (runtime-defined) */
      /*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
      /*! CommonJS bailout: this is used directly at 2:23-27 */
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        eval(
          "\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar users_1 = __importDefault(__webpack_require__(/*! ../entities/users */ \"./src/entities/users.ts\"));\nvar account_1 = __importDefault(__webpack_require__(/*! ../entities/account */ \"./src/entities/account.ts\"));\nvar dbConfig = {\n    type: 'postgres',\n    host: 'localhost',\n    port: 5432,\n    username: 'M.M',\n    //password: 'admin',\n    database: 'postgres',\n    synchronize: false,\n    logging: true,\n    entities: [users_1.default, account_1.default],\n};\nexports.default = dbConfig;\n\n\n//# sourceURL=webpack://server/./src/db/index.ts?"
        );

        /***/
      },

    /***/ './src/entities/account.ts':
      /*!*********************************!*\
  !*** ./src/entities/account.ts ***!
  \*********************************/
      /*! unknown exports (runtime-defined) */
      /*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
      /*! CommonJS bailout: this is used directly at 2:18-22 */
      /*! CommonJS bailout: this is used directly at 8:18-22 */
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        eval(
          '\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nvar typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");\nvar Account = /** @class */ (function () {\n    function Account() {\n    }\n    __decorate([\n        typeorm_1.PrimaryColumn({ type: \'varchar\', length: 10 }),\n        __metadata("design:type", String)\n    ], Account.prototype, "id", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \'varchar\', length: 10 }),\n        __metadata("design:type", String)\n    ], Account.prototype, "password", void 0);\n    Account = __decorate([\n        typeorm_1.Entity({ name: \'account\' })\n    ], Account);\n    return Account;\n}());\nexports.default = Account;\n\n\n//# sourceURL=webpack://server/./src/entities/account.ts?'
        );

        /***/
      },

    /***/ './src/entities/users.ts':
      /*!*******************************!*\
  !*** ./src/entities/users.ts ***!
  \*******************************/
      /*! unknown exports (runtime-defined) */
      /*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
      /*! CommonJS bailout: this is used directly at 2:18-22 */
      /*! CommonJS bailout: this is used directly at 8:18-22 */
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        eval(
          '\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nvar typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");\nvar Users = /** @class */ (function () {\n    function Users() {\n        this.name = \'null\';\n    }\n    __decorate([\n        typeorm_1.PrimaryColumn({ type: \'varchar\', length: 10 }),\n        __metadata("design:type", String)\n    ], Users.prototype, "id", void 0);\n    __decorate([\n        typeorm_1.Column({ type: \'varchar\', length: 10 }),\n        __metadata("design:type", String)\n    ], Users.prototype, "name", void 0);\n    Users = __decorate([\n        typeorm_1.Entity({ name: \'users\' })\n    ], Users);\n    return Users;\n}());\nexports.default = Users;\n\n\n//# sourceURL=webpack://server/./src/entities/users.ts?'
        );

        /***/
      },

    /***/ './src/index.ts':
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /*! unknown exports (runtime-defined) */
      /*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
      /*! CommonJS bailout: this is used directly at 2:17-21 */
      /*! CommonJS bailout: this is used directly at 11:19-23 */
      /*! CommonJS bailout: this is used directly at 38:23-27 */
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        eval(
          '\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError("Generator is already executing.");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ "express"));\nvar typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");\nvar db_1 = __importDefault(__webpack_require__(/*! ./db */ "./src/db/index.ts"));\nvar account_router_1 = __importDefault(__webpack_require__(/*! ./routes/account-router */ "./src/routes/account-router.ts"));\n// **************************************************\nvar typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");\nvar account_1 = __importDefault(__webpack_require__(/*! ./entities/account */ "./src/entities/account.ts"));\nvar test = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var db, accountRepository, allAccounts, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 3, , 4]);\n                return [4 /*yield*/, typeorm_1.createConnection(db_1.default)];\n            case 1:\n                db = _a.sent();\n                accountRepository = typeorm_2.getRepository(account_1.default);\n                return [4 /*yield*/, accountRepository.find()];\n            case 2:\n                allAccounts = _a.sent();\n                console.log(allAccounts);\n                return [3 /*break*/, 4];\n            case 3:\n                error_1 = _a.sent();\n                console.log(error_1);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); };\ntest();\n// createConnection(dbConfig)\n//   .then(async (connection) => {\n//     console.log(connection);\n//     console.log(\' o Successfully connection to databese on port\', 5432, \'>>> \');\n//     // const accountRepository = getRepository(Account);\n//     // const allAccounts = await accountRepository.find();\n//     // console.log(\'Select : \', allAccounts);\n//     // console.log(allAccounts[0]);\n//     // console.log(allAccounts[0].id);\n//     await connection.close();\n//   })\n//   .catch((err) => {\n//     //console.log(err);\n//     console.log(\' x Failed to connection to databese on port\', 5432, \'!!! \');\n//   });\n// **************************************************\nvar app = express_1.default();\napp.set(\'apiPort\', 3000);\napp.use(cors_1.default());\napp.use(express_1.default.json());\napp.use(express_1.default.urlencoded({ extended: true }));\napp.get(\'/\', function (req, res) {\n    res.send(\'Hi, from server "localhost:\' + app.get(\'apiPort\') + \'"\');\n});\napp.use(\'/api\', account_router_1.default);\napp.listen(app.get(\'apiPort\'), function () {\n    console.log(\' o Server runinig on port\', app.get(\'apiPort\'), \'>>> \');\n});\n\n\n//# sourceURL=webpack://server/./src/index.ts?'
        );

        /***/
      },

    /***/ './src/routes/account-router.ts':
      /*!**************************************!*\
  !*** ./src/routes/account-router.ts ***!
  \**************************************/
      /*! unknown exports (runtime-defined) */
      /*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
      /*! CommonJS bailout: this is used directly at 2:23-27 */
      /*! CommonJS bailout: this is used directly at 9:26-30 */
      /*! CommonJS bailout: this is used directly at 14:20-24 */
      /*! CommonJS bailout: this is used directly at 21:23-27 */
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        eval(
          '\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, "default", { enumerable: true, value: v });\n}) : function(o, v) {\n    o["default"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ "express"));\nvar accountCtrl = __importStar(__webpack_require__(/*! ../controllers/account-ctrl */ "./src/controllers/account-ctrl.ts"));\nvar accountRouter = express_1.default.Router();\naccountRouter.post(\'/account\', accountCtrl.createAnAccount);\naccountRouter.get(\'/account\', accountCtrl.readAllAccounts);\naccountRouter.put(\'/account/:id\', accountCtrl.updateAnAccount);\naccountRouter.delete(\'/account/:id\', accountCtrl.deleteAnAccount);\n//////accountRouter.use(\'/login\', acco)\nexports.default = accountRouter;\n\n\n//# sourceURL=webpack://server/./src/routes/account-router.ts?'
        );

        /***/
      },

    /***/ cors:
      /*!***********************!*\
  !*** external "cors" ***!
  \***********************/
      /*! dynamic exports */
      /*! exports [maybe provided (runtime-defined)] [no usage info] */
      /*! runtime requirements: module */
      /***/ (module) => {
        eval(
          'module.exports = require("cors");;\n\n//# sourceURL=webpack://server/external_%22cors%22?'
        );

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /*! dynamic exports */
      /*! exports [maybe provided (runtime-defined)] [no usage info] */
      /*! runtime requirements: module */
      /***/ (module) => {
        eval(
          'module.exports = require("express");;\n\n//# sourceURL=webpack://server/external_%22express%22?'
        );

        /***/
      },

    /***/ typeorm:
      /*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
      /*! dynamic exports */
      /*! exports [maybe provided (runtime-defined)] [no usage info] */
      /*! runtime requirements: module */
      /***/ (module) => {
        eval(
          'module.exports = require("typeorm");;\n\n//# sourceURL=webpack://server/external_%22typeorm%22?'
        );

        /***/
      },

    /******/
  }; // The module cache
  /************************************************************************/
  /******/ /******/ var __webpack_module_cache__ = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ if (__webpack_module_cache__[moduleId]) {
      /******/ return __webpack_module_cache__[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // startup // Load entry module // This entry module is referenced by other modules so it can't be inlined
  /******/
  /************************************************************************/
  /******/ /******/ /******/ /******/ __webpack_require__('./src/index.ts');
  /******/
})();
