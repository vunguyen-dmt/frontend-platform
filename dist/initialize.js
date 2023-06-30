function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 * #### Import members from **@edx/frontend-platform**
 *
 * The initialization module provides a function for managing an application's initialization
 * lifecycle.  It also provides constants and default handler implementations.
 *
 * ```
 * import {
 *   initialize,
 *   APP_INIT_ERROR,
 *   APP_READY,
 *   subscribe,
 * } from '@edx/frontend-platform';
 * import { AppProvider, ErrorPage, PageRoute } from '@edx/frontend-platform/react';
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import { Switch } from 'react-router-dom';
 *
 * subscribe(APP_READY, () => {
 *   ReactDOM.render(
 *     <AppProvider store={configureStore()}>
 *       <Header />
 *       <main>
 *         <Switch>
 *           <PageRoute exact path="/" component={PaymentPage} />
 *         </Switch>
 *       </main>
 *       <Footer />
 *     </AppProvider>,
 *     document.getElementById('root'),
 *   );
 * });
 *
 * subscribe(APP_INIT_ERROR, (error) => {
 *   ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
 * });
 *
 * initialize({
 *   messages: [appMessages],
 *   requireAuthenticatedUser: true,
 *   hydrateAuthenticatedUser: true,
 * });

```
 * @module Initialization
 */

import { createBrowserHistory, createMemoryHistory } from 'history';
import { publish } from './pubSub';
// eslint-disable-next-line import/no-cycle
import { getConfig, mergeConfig } from './config';
import { configure as configureLogging, getLoggingService, NewRelicLoggingService, logError } from './logging';
import { configure as configureAnalytics, SegmentAnalyticsService, identifyAnonymousUser, identifyAuthenticatedUser } from './analytics';
import { GoogleAnalyticsLoader } from './scripts';
import { getAuthenticatedHttpClient, configure as configureAuth, ensureAuthenticatedUser, fetchAuthenticatedUser, hydrateAuthenticatedUser, getAuthenticatedUser, AxiosJwtAuthService } from './auth';
import { configure as configureI18n } from './i18n';
import { APP_PUBSUB_INITIALIZED, APP_CONFIG_INITIALIZED, APP_AUTH_INITIALIZED, APP_I18N_INITIALIZED, APP_LOGGING_INITIALIZED, APP_ANALYTICS_INITIALIZED, APP_READY, APP_INIT_ERROR } from './constants';
import configureCache from './auth/LocalForageCache';

/**
 * A browser history or memory history object created by the [history](https://github.com/ReactTraining/history)
 * package.  Applications are encouraged to use this history object, rather than creating their own,
 * as behavior may be undefined when managing history via multiple mechanisms/instances. Note that
 * in environments where browser history may be inaccessible due to `window` being undefined, this
 * falls back to memory history.
 */
export var history = typeof window !== 'undefined' ? createBrowserHistory({
  basename: getConfig().PUBLIC_PATH
}) : createMemoryHistory();

/**
 * The default handler for the initialization lifecycle's `initError` phase.  Logs the error to the
 * LoggingService using `logError`
 *
 * @see {@link module:frontend-platform/logging~logError}
 * @param {*} error
 */
export function initError(_x) {
  return _initError.apply(this, arguments);
}

/**
 * The default handler for the initialization lifecycle's `auth` phase.
 *
 * The handler has several responsibilities:
 * - Determining the user's authentication state (authenticated or anonymous)
 * - Optionally redirecting to login if the application requires an authenticated user.
 * - Optionally loading additional user information via the application's user account data
 * endpoint.
 *
 * @param {boolean} requireUser Whether or not we should redirect to login if a user is not
 * authenticated.
 * @param {boolean} hydrateUser Whether or not we should fetch additional user account data.
 */
function _initError() {
  _initError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(error) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          logError(error);
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _initError.apply(this, arguments);
}
export function auth(_x2, _x3) {
  return _auth.apply(this, arguments);
}
/*
 * Set or overrides configuration through an API.
 * This method allows runtime configuration.
 * Set a basic configuration when an error happen and allow initError and display the ErrorPage.
 */
function _auth() {
  _auth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(requireUser, hydrateUser) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!requireUser) {
            _context3.next = 5;
            break;
          }
          _context3.next = 3;
          return ensureAuthenticatedUser(global.location.href);
        case 3:
          _context3.next = 7;
          break;
        case 5:
          _context3.next = 7;
          return fetchAuthenticatedUser();
        case 7:
          if (hydrateUser && getAuthenticatedUser() !== null) {
            // We intentionally do not await the promise returned by hydrateAuthenticatedUser. All the
            // critical data is returned as part of fetch/ensureAuthenticatedUser above, and anything else
            // is a nice-to-have for application code.
            hydrateAuthenticatedUser();
          }
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _auth.apply(this, arguments);
}
export function runtimeConfig() {
  return _runtimeConfig.apply(this, arguments);
}
function _runtimeConfig() {
  _runtimeConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var _getConfig, MFE_CONFIG_API_URL, APP_ID, apiConfig, apiService, params, url, _yield$apiService$get, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _getConfig = getConfig(), MFE_CONFIG_API_URL = _getConfig.MFE_CONFIG_API_URL, APP_ID = _getConfig.APP_ID;
          if (!MFE_CONFIG_API_URL) {
            _context4.next = 15;
            break;
          }
          apiConfig = {
            headers: {
              accept: 'application/json'
            }
          };
          _context4.next = 6;
          return configureCache();
        case 6:
          apiService = _context4.sent;
          params = new URLSearchParams();
          params.append('mfe', APP_ID);
          url = "".concat(MFE_CONFIG_API_URL, "?").concat(params.toString());
          _context4.next = 12;
          return apiService.get(url, apiConfig);
        case 12:
          _yield$apiService$get = _context4.sent;
          data = _yield$apiService$get.data;
          mergeConfig(data);
        case 15:
          _context4.next = 20;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](0);
          // eslint-disable-next-line no-console
          console.error('Error with config API', _context4.t0.message);
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 17]]);
  }));
  return _runtimeConfig.apply(this, arguments);
}
export function loadExternalScripts(externalScripts, data) {
  externalScripts.forEach(function (ExternalScript) {
    var script = new ExternalScript(data);
    script.loadScript();
  });
}

/**
 * The default handler for the initialization lifecycle's `analytics` phase.
 *
 * The handler is responsible for identifying authenticated and anonymous users with the analytics
 * service.  This is a pre-requisite for sending analytics events, thus, we do it during the
 * initialization sequence so that analytics is ready once the application's UI code starts to load.
 *
 */
export function analytics() {
  return _analytics.apply(this, arguments);
}
function _analytics() {
  _analytics = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var authenticatedUser;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          authenticatedUser = getAuthenticatedUser();
          if (!(authenticatedUser && authenticatedUser.userId)) {
            _context5.next = 5;
            break;
          }
          identifyAuthenticatedUser(authenticatedUser.userId);
          _context5.next = 7;
          break;
        case 5:
          _context5.next = 7;
          return identifyAnonymousUser();
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _analytics.apply(this, arguments);
}
function applyOverrideHandlers(overrides) {
  var noOp = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function noOp() {
      return _ref.apply(this, arguments);
    };
  }();
  return _objectSpread({
    pubSub: noOp,
    config: noOp,
    logging: noOp,
    auth: auth,
    analytics: analytics,
    i18n: noOp,
    ready: noOp,
    initError: initError
  }, overrides);
}

/**
 * Invokes the application initialization sequence.
 *
 * The sequence proceeds through a number of lifecycle phases, during which pertinent services are
 * configured.
 *
 * Using the `handlers` option, lifecycle phase handlers can be overridden to perform custom
 * functionality.  Note that while these override handlers _do_ replace the default handler
 * functionality for analytics, auth, and initError (the other phases have no default
 * functionality), they do _not_ override the configuration of the actual services that those
 * handlers leverage.
 *
 * Some services can be overridden via the loggingService and analyticsService options.  The other
 * services (auth and i18n) cannot currently be overridden.
 *
 * The following lifecycle phases exist:
 *
 * - pubSub: A no-op by default.
 * - config: A no-op by default.
 * - logging: A no-op by default.
 * - auth: Uses the 'auth' handler defined above.
 * - analytics: Uses the 'analytics' handler defined above.
 * - i18n: A no-op by default.
 * - ready: A no-op by default.
 * - initError: Uses the 'initError' handler defined above.
 *
 * @param {Object} [options]
 * @param {*} [options.loggingService=NewRelicLoggingService] The `LoggingService` implementation
 * to use.
 * @param {*} [options.analyticsService=SegmentAnalyticsService] The `AnalyticsService`
 * implementation to use.
 * @param {*} [options.authMiddleware=[]] An array of middleware to apply to http clients in the auth service.
 * @param {*} [options.externalScripts=[GoogleAnalyticsLoader]] An array of externalScripts.
 * By default added GoogleAnalyticsLoader.
 * @param {*} [options.requireAuthenticatedUser=false] If true, turns on automatic login
 * redirection for unauthenticated users.  Defaults to false, meaning that by default the
 * application will allow anonymous/unauthenticated sessions.
 * @param {*} [options.hydrateAuthenticatedUser=false] If true, makes an API call to the user
 * account endpoint (`${App.config.LMS_BASE_URL}/api/user/v1/accounts/${username}`) to fetch
 * detailed account information for the authenticated user. This data is merged into the return
 * value of `getAuthenticatedUser`, overriding any duplicate keys that already exist. Defaults to
 * false, meaning that no additional account information will be loaded.
 * @param {*} [options.messages] A i18n-compatible messages object, or an array of such objects. If
 * an array is provided, duplicate keys are resolved with the last-one-in winning.
 * @param {*} [options.handlers={}] An optional object of handlers which can be used to replace the
 * default behavior of any part of the startup sequence. It can also be used to add additional
 * initialization behavior before or after the rest of the sequence.
 */
export function initialize(_x4) {
  return _initialize.apply(this, arguments);
}
function _initialize() {
  _initialize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_ref2) {
    var _ref2$loggingService, loggingService, _ref2$analyticsServic, analyticsService, _ref2$authService, authService, _ref2$authMiddleware, authMiddleware, _ref2$externalScripts, externalScripts, _ref2$requireAuthenti, requireUser, _ref2$hydrateAuthenti, hydrateUser, messages, _ref2$handlers, overrideHandlers, handlers;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _ref2$loggingService = _ref2.loggingService, loggingService = _ref2$loggingService === void 0 ? NewRelicLoggingService : _ref2$loggingService, _ref2$analyticsServic = _ref2.analyticsService, analyticsService = _ref2$analyticsServic === void 0 ? SegmentAnalyticsService : _ref2$analyticsServic, _ref2$authService = _ref2.authService, authService = _ref2$authService === void 0 ? AxiosJwtAuthService : _ref2$authService, _ref2$authMiddleware = _ref2.authMiddleware, authMiddleware = _ref2$authMiddleware === void 0 ? [] : _ref2$authMiddleware, _ref2$externalScripts = _ref2.externalScripts, externalScripts = _ref2$externalScripts === void 0 ? [GoogleAnalyticsLoader] : _ref2$externalScripts, _ref2$requireAuthenti = _ref2.requireAuthenticatedUser, requireUser = _ref2$requireAuthenti === void 0 ? false : _ref2$requireAuthenti, _ref2$hydrateAuthenti = _ref2.hydrateAuthenticatedUser, hydrateUser = _ref2$hydrateAuthenti === void 0 ? false : _ref2$hydrateAuthenti, messages = _ref2.messages, _ref2$handlers = _ref2.handlers, overrideHandlers = _ref2$handlers === void 0 ? {} : _ref2$handlers;
          handlers = applyOverrideHandlers(overrideHandlers);
          _context6.prev = 2;
          _context6.next = 5;
          return handlers.pubSub();
        case 5:
          publish(APP_PUBSUB_INITIALIZED);

          // Configuration
          _context6.next = 8;
          return handlers.config();
        case 8:
          _context6.next = 10;
          return runtimeConfig();
        case 10:
          publish(APP_CONFIG_INITIALIZED);
          loadExternalScripts(externalScripts, {
            config: getConfig()
          });

          // Logging
          configureLogging(loggingService, {
            config: getConfig()
          });
          _context6.next = 15;
          return handlers.logging();
        case 15:
          publish(APP_LOGGING_INITIALIZED);

          // Authentication
          configureAuth(authService, {
            loggingService: getLoggingService(),
            config: getConfig(),
            middleware: authMiddleware
          });
          _context6.next = 19;
          return handlers.auth(requireUser, hydrateUser);
        case 19:
          publish(APP_AUTH_INITIALIZED);

          // Analytics
          configureAnalytics(analyticsService, {
            config: getConfig(),
            loggingService: getLoggingService(),
            httpClient: getAuthenticatedHttpClient()
          });
          _context6.next = 23;
          return handlers.analytics();
        case 23:
          publish(APP_ANALYTICS_INITIALIZED);

          // Internationalization
          configureI18n({
            messages: messages,
            config: getConfig(),
            loggingService: getLoggingService()
          });
          _context6.next = 27;
          return handlers.i18n();
        case 27:
          publish(APP_I18N_INITIALIZED);

          // Application Ready
          _context6.next = 30;
          return handlers.ready();
        case 30:
          publish(APP_READY);
          _context6.next = 39;
          break;
        case 33:
          _context6.prev = 33;
          _context6.t0 = _context6["catch"](2);
          if (_context6.t0.isRedirecting) {
            _context6.next = 39;
            break;
          }
          _context6.next = 38;
          return handlers.initError(_context6.t0);
        case 38:
          publish(APP_INIT_ERROR, _context6.t0);
        case 39:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 33]]);
  }));
  return _initialize.apply(this, arguments);
}
//# sourceMappingURL=initialize.js.map